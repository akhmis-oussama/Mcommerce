# Build Stage
FROM node:16-alpine as builder
WORKDIR /client
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:19.9.0-alpine
ENV NODE_ENV=production
WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=builder /client/build ./build

EXPOSE 3001
CMD ["serve", "-s", "build"]