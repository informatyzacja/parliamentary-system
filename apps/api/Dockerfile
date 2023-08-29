FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare yarn@3.6.1 --activate && yarn set version 3.6.1

ENV NODE_ENV=production
# Set working directory
WORKDIR /app

FROM base AS builder
COPY . .
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn dlx turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/.yarnrc.yml .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

# Build the project
ARG NEXT_PUBLIC_API_URL
ENV STRAPI_URL=$NEXT_PUBLIC_API_URL

COPY --from=builder /app/out/full/ .
RUN yarn build --filter=api

FROM base AS runner

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 runner
USER runner

COPY --from=installer --chown=runner:nodejs /app .

CMD yarn start --filter=api
