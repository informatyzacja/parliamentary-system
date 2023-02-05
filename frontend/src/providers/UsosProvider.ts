import { strict as assert } from "assert";
import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

export interface UsosProfile extends Record<string, string> {
  first_name: string;
  last_name: string;
  email: string;
  student_number: string;
}

const USOS_BASE_URL = process.env.USOS_BASE_URL;

export default function UsosProvider<P extends UsosProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  assert(USOS_BASE_URL, "USOS_BASE_URL is not defined");

  return {
    id: "usos",
    name: "USOS",
    type: "oauth",
    version: "1.0",
    authorization: {
      url: `${USOS_BASE_URL}/services/oauth/authorize`,
    },
    accessTokenUrl: `${USOS_BASE_URL}/services/oauth/access_token`,
    requestTokenUrl: `${USOS_BASE_URL}/services/oauth/request_token?scopes=studies|email`,
    profileUrl: `${USOS_BASE_URL}/services/users/user?fields=first_name|last_name|sex|student_number|email`,
    userinfo: {
      url: `${USOS_BASE_URL}/services/users/user?fields=first_name|last_name|sex|student_number|email`,
    },
    profile(profile) {
      return {
        id: profile.student_number,
        name: profile.first_name + " " + profile.last_name,
        email: profile.email,
      };
    },
    style: {
      logo: "https://parlament.samorzad.pwr.edu.pl/usos-logo-32x32.png",
      logoDark: "https://parlament.samorzad.pwr.edu.pl/usos-logo-32x32.png",
      bgDark: "#fff",
      bg: "#fff",
      text: "#000",
      textDark: "#000",
    },
    options,
  };
}
