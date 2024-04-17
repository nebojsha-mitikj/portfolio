# Dockerfile for NGINX
FROM nginx:alpine

# Copy custom NGINX configuration
COPY nginx/default.conf /etc/nginx/conf.d

COPY --from=portfolio-php-image /var/www /var/www