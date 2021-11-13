FROM node:14-alpine AS builder
WORKDIR /scr

COPY package.json ./

RUN apk --no-cache add curl

RUN npm install

RUN npm install -g nodemon
RUN npm install -g forever

RUN npm ci

COPY . .

EXPOSE 3000
CMD forever -c 'nodemon --exitcrash' bin/www