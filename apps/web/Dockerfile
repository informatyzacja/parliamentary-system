FROM node:20-alpine AS base
ARG NEXT_PUBLIC_API_URL=http://0.0.0.0:1337
ARG NEXT_PUBLIC_OAUTH_DOMAIN=login.pwr.edu.pl
ARG NEXT_PUBLIC_USOS_BASE_URL=https://apps.usos.pwr.edu.pl
ARG NEXT_PUBLIC_USOS_FIELDS="first_name|last_name|student_number|email"
ARG NEXT_PUBLIC_USOS_SCOPES="studies|email"

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_OAUTH_DOMAIN=$NEXT_PUBLIC_OAUTH_DOMAIN
ENV NEXT_PUBLIC_USOS_BASE_URL=$NEXT_PUBLIC_USOS_BASE_URL
ENV NEXT_PUBLIC_USOS_FIELDS=$NEXT_PUBLIC_USOS_FIELDS
ENV NEXT_PUBLIC_USOS_SCOPES=$NEXT_PUBLIC_USOS_SCOPES
RUN corepack enable && corepack prepare yarn@3.6.1 --activate && yarn set version 3.6.1

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn dlx turbo prune --scope=web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/.yarnrc.yml .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
# Build the project
COPY --from=builder /app/out/full/ .
RUN SKIP_ENV_VALIDATION=true yarn build --filter=web

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

CMD node apps/web/server.js
