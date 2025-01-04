FROM node:18.16.0-buster

WORKDIR /app
COPY . .
CMD ["yarn", "start"]
