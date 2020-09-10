FROM nginx:latest AS builder
# Set the working directory.
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80