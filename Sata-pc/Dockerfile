FROM nginx:latest

EXPOSE 80/tcp
EXPOSE 443/tcp

COPY dist /fandom/www
COPY .nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /fandom
