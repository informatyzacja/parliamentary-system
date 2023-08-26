import { strict as assert } from 'assert';

const config = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, ''),
};
if (!process.env.SKIP_ENV_VALIDATION) {
  Object.entries(config).forEach(([key, value]) => {
    assert(value, `${key} is not defined`);
  });
}

type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export default config as RequiredProperty<typeof config>;
