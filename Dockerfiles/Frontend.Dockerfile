# Build stage for front
FROM node:lts-alpine

WORKDIR /portfolio

# Copying package.json and package-lock.json
COPY package*.json ./

# Installing npm dependencies
RUN npm install

# Copying the rest of the files
COPY . .

# Building the Vue.js app
RUN npm run build