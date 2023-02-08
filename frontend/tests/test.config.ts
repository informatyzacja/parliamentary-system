import { strict as assert } from "assert";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const testConfig = {
  TEST_USOS_LOGIN: process.env.TEST_USOS_LOGIN,
  TEST_USOS_PASSWORD: process.env.TEST_USOS_PASSWORD,
} as const;

assert(testConfig.TEST_USOS_LOGIN, "USOS_LOGIN env variable is not set");
assert(testConfig.TEST_USOS_PASSWORD, "USOS_PASSWORD env variable is not set");

type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export default testConfig as RequiredProperty<typeof testConfig>;
