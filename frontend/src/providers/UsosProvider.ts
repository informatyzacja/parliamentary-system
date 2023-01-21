import { OAuthUserConfig, OAuthConfig } from "next-auth/providers";

export interface UsosProfile extends Record<string, any> {
  first_name: string;
  last_name: string;
  email: string;
  student_number: string;
}

export default function UsosProvider<P extends UsosProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "usos",
    name: "Usos",
    type: "oauth",
    version: "1.0",
    authorization: {
      url: "https://apps.usos.pwr.edu.pl/services/oauth/authorize",
    },
    accessTokenUrl: "https://apps.usos.pwr.edu.pl/services/oauth/access_token",
    requestTokenUrl:
      "https://apps.usos.pwr.edu.pl/services/oauth/request_token?scopes=studies|email",
    profileUrl:
      "https://apps.usos.pwr.edu.pl/services/users/user?fields=first_name|last_name|sex|student_number|email",
    userinfo: {
      url: "https://apps.usos.pwr.edu.pl/services/users/user?fields=first_name|last_name|sex|student_number|email",
    },
    profile(profile) {
      return {
        id: profile.student_number,
        name: profile.first_name + " " + profile.last_name,
        email: profile.email,
      };
    },
    options,
  };
}
