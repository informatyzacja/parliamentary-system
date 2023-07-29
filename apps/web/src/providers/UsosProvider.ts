import type { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';

export interface UsosProfile extends Record<string, string> {
  first_name: string;
  last_name: string;
  email: string;
  student_number: string;
}

export default function UsosProvider<P extends UsosProfile>(
  options: OAuthUserConfig<P> & {
    usosBaseUrl: string;
    publicUrl: string;
  },
): OAuthConfig<P> {
  const { publicUrl, usosBaseUrl } = options;

  return {
    id: 'usos',
    name: 'USOS',
    type: 'oauth',
    version: '1.0',
    authorization: {
      url: `${usosBaseUrl}/services/oauth/authorize`,
    },
    accessTokenUrl: `${usosBaseUrl}/services/oauth/access_token`,
    requestTokenUrl: `${usosBaseUrl}/services/oauth/request_token?scopes=studies|email`,
    profileUrl: `${usosBaseUrl}/services/users/user?fields=first_name|last_name|sex|student_number|email`,
    userinfo: {
      url: `${usosBaseUrl}/services/users/user?fields=first_name|last_name|sex|student_number|email`,
    },
    profile(profile) {
      return {
        id: profile.student_number,
        name: profile.first_name + ' ' + profile.last_name,
        email: profile.email,
      };
    },
    style: {
      logo: `${publicUrl}/usos-logo.png`,
      logoDark: `${publicUrl}/usos-logo.png`,
      bgDark: '#fff',
      bg: '#fff',
      text: '#000',
      textDark: '#000',
    },
    options,
  };
}
