FROM node:18.0.0-alpine as build-deps

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:alpine

# COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]