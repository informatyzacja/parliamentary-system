FROM node:18-bullseye as Backend
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY backend/package.json backend/
RUN npm ci
COPY . .
WORKDIR /app/backend
RUN npm run build
CMD [ "npm", "start" ]
