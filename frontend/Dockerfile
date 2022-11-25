#syntax=docker/dockerfile:experimental
ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine as Build
COPY . /app
WORKDIR  /app
RUN --mount=type=cache,target=/app/.yarn yarn install
RUN npm run build

FROM nginx:alpine as Frontend
USER www-data
COPY --from=Build /app/dist /var/www/
