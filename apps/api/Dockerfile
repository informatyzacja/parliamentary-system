FROM node:20-alpine AS base

RUN apk update
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

FROM base AS dependencies

WORKDIR /app
COPY ./package.json .
COPY ./.yarnrc.yml .
COPY ./yarn.lock .
COPY ./apps/api/package.json ./apps/api/
COPY ./apps/api/.yarnrc.yml ./apps/api/

RUN yarn set version 3.6.1
RUN yarn cache clean
RUN yarn install

RUN ls -a

FROM base AS builder

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
#COPY --from=dependencies /app/apps/api/node_modules ./apps/api/node_modules
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN yarn set version 3.6.1
RUN yarn workspace api build

# Creating final production image
FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 strapi

#COPY --from=builder --chown=strapi:nodejs /app/apps/api/.yarnrc.yml ./apps/api/yml
COPY --from=builder --chown=strapi:nodejs /app/apps/api ./apps/api
COPY --from=builder --chown=strapi:nodejs /app/package.json .
COPY --from=builder --chown=strapi:nodejs /app/yarn.lock .
COPY --from=builder --chown=strapi:nodejs /app/.yarnrc.yml .
COPY --from=builder --chown=strapi:nodejs /app/.yarn/releases ./.yarn/releases
COPY --from=builder --chown=strapi:nodejs /app/node_modules ./node_modules

RUN ls -a
RUN ls apps/api/ -a

RUN yarn set version 3.6.1

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

#COPY --from=builder --chown=strapi:nodejs /app/node_modules ./node_modules

USER strapi

CMD ["yarn", "workspace", "api", "start"]

#FROM node:20-bullseye AS api
#WORKDIR /app/api
#COPY ./yarn.lock .
#COPY ./apps/api .
#RUN yarn set version stable
#RUN yarn install
#RUN yarn build
#CMD [ "yarn", "start" ]
