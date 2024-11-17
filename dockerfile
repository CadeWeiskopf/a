FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN apk update && apk upgrade && npm install && npm run build
USER node

FROM nginx:alpine
COPY --from=build /app/dist/portfolio-cadew-dev/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
