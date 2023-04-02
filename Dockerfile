# Dockerfile
# Pull the base image
FROM node:16 AS development
# Set the working directory
WORKDIR /app
# Copy app dependencies to container
COPY package.json .
# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Deploy app for local development
CMD [ "npm", "start" ]