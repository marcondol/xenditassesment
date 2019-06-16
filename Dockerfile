FROM node:10-alpine
WORKDIR /app
RUN apk add git
COPY package.json .
RUN npm install

