FROM alpine:3.16.2
RUN apk add — no-cache nodejs npm
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8080
CMD [“node”, “app.js”]