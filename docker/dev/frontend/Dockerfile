FROM node:8

RUN rm -rf /data/www/* || true

COPY ./frontend /data/www/frontend

WORKDIR /data/www/frontend

RUN npm install && npm install -g gulp && gulp build
