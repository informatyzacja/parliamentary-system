import { strict as assert } from 'assert';

const requiredConfig = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL?.replace(/\/$/, ''),
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
};

Object.entries(requiredConfig).forEach(([key, value]) => {
  assert(value, `${key} is not defined`);
});

const googleConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

const usosConfig = {
  USOS_CLIENT_ID: process.env.USOS_CLIENT_ID,
  USOS_CLIENT_SECRET: process.env.USOS_CLIENT_SECRET,
  USOS_BASE_URL: process.env.USOS_BASE_URL?.replace(/\/$/, ''),
  USOS_SCOPES: process.env.USOS_SCOPES,
  USOS_FIELDS: process.env.USOS_FIELDS,
};

type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

const serverConfig = {
  ...(requiredConfig as RequiredProperty<typeof requiredConfig>),
  ...googleConfig,
  ...usosConfig,
};

export default serverConfig;
