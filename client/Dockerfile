FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm","start"]
RUN chmod -R 777 /app/node_modules/.cache/.eslintcache