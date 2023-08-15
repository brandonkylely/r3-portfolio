FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# build app
RUN npm run build

# Multi-stage build

# second stage
FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app

# Copy node_modules from the build image
COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules

# copy dist folder from build image
COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 8080

# copy package and vite config to run npm commands
COPY package.json .
COPY vite.config.js .

EXPOSE 8080

CMD ["npm", "run", "preview"]
