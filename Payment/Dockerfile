FROM node:19.9.0-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --only=production
COPY . .
EXPOSE 5002
CMD [ "node", "server.js" ]
