FROM nginx

WORKDIR /app

COPY . /app

RUN apt-get update && \
    apt-get install -y npm && \
    npm install && \
    npm run build && \
    cp -r dist/. /usr/share/nginx/html

