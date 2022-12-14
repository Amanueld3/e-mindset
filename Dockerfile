FROM php:8.1 as php

RUN apt-get update -y
RUN apt-get install -y unzip libpq-dev libcurl4-gnutls-dev
RUN docker-php-ext-install pdo pdo_mysql bcmath

RUN pecl install -o -f redis \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable redis

WORKDIR /var/www
COPY . .

COPY --from=composer:2.4.2 /usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install pdo pdo_mysql

RUN docker-php-ext-install pdo pdo_mysql exif

ENV PORT=8003

RUN chmod +x Docker/entrypoint.sh
ENTRYPOINT ["/bin/sh", "Docker/entrypoint.sh" ]



# ==============================================================================
#  node
#

FROM node:15-alpine as node

WORKDIR /var/www
COPY . .

RUN npm install --global cross-env
RUN npm install
RUN npm run dev

VOLUME /var/www/node_modules
