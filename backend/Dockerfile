#syntax=docker/dockerfile:experimental
FROM node:16-bullseye as Backend
COPY . /app
WORKDIR /app
RUN --mount=type=cache,target=/app/.yarn yarn install
RUN yarn build
CMD [ "yarn", "start" ]
