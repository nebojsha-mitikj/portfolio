# Production stage for PHP
FROM php:8.3-fpm

# Install required dependencies
RUN apt-get update \
    && apt-get install -y zip unzip git \
    && rm -rf /var/lib/apt/lists/*

# Allow super user
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy composer from composer image.
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Set working directory in the PHP container
WORKDIR /var/www

# Copy composer files
COPY composer.json composer.lock /var/www/

# Install composer
RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-interaction

# Copy PHP app.
COPY app/. /var/www/app

# Copy the built Vue.js files from the build-stage
COPY --from=portfolio-frontend-image /portfolio/dist /var/www
