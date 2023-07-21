FROM node:18-bullseye as Frontend
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY frontend/package.json frontend/
RUN npm ci
COPY . .
WORKDIR /app/frontend
RUN npm run build
CMD [ "npm", "start" ]
