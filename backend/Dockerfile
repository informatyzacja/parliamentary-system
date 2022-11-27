#syntax=docker/dockerfile:experimental
ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine as Backend
COPY . /app
WORKDIR /app
RUN --mount=type=cache,target=/app/.yarn yarn install
RUN yarn build
CMD [ "yarn", "start" ]
