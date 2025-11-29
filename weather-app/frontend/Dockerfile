ARG NODE_VERSION=24.11.0

FROM node:${NODE_VERSION}-alpine as node
 
WORKDIR /client
 
COPY package*.json ./
 
RUN npm install
 
COPY . /client/
 
RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged

EXPOSE 8080

COPY --from=node /client/dist /usr/share/nginx/html
