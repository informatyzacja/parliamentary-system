import { strict as assert } from "assert";

const serverConfig = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL?.replace(/\/$/, ""),
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  USOS_CLIENT_ID: process.env.USOS_CLIENT_ID,
  USOS_CLIENT_SECRET: process.env.USOS_CLIENT_SECRET,
  USOS_BASE_URL: process.env.USOS_BASE_URL?.replace(/\/$/, ""),
};

Object.entries(serverConfig).forEach(([key, value]) => {
  assert(value, `${key} is not defined`);
});

type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export default serverConfig as RequiredProperty<typeof serverConfig>;
