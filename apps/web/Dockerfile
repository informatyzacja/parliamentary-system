FROM node:20-alpine AS base

RUN apk update
RUN apk add --no-cache libc6-compat openssl1.1-compat

FROM base AS dependencies

WORKDIR /app

COPY ./package.json .
COPY ./.yarnrc.yml .
COPY ./yarn.lock .
COPY ./apps/web/package.json ./apps/web/
COPY ./apps/web/.yarnrc.yml ./apps/web/

RUN yarn set version 3.6.1
RUN yarn cache clean
RUN yarn install

FROM base AS builder

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production

RUN yarn set version 3.6.1
RUN yarn workspace web build

FROM base AS runner

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./standalone
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./standalone/apps/web/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./standalone/apps/web/.next/static

CMD ["node", "./standalone/apps/web/server.js"]
