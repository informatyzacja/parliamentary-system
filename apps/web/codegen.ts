import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://0.0.0.0:1337/graphql',
  documents: 'src/api/**/*.graphql',
  generates: {
    'src/api/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        maybeValue: 'T',
        avoidOptionals: true,
      },
    },
  },
};

export default config;
