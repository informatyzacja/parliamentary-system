#syntax=docker/dockerfile:experimental
ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine as Backend
RUN echo "node:x:1000:1000:node:/app:/bin/ash" >> /etc/passwd && \
    echo "node:x:1000:" >> /etc/group
WORKDIR /app
COPY . /app
RUN --mount=type=cache,target=/app/.yarn yarn install
RUN yarn build
RUN chown -R 1000:1000 /app
USER node
CMD [ "yarn", "start" ]
