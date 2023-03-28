# Base image
FROM node:18-alpine

# Working directory
WORKDIR /frontend

# Copying the package.json and package-lock.json files
COPY package*.json ./

# Installing dependencies
RUN npm install --legacy-peer-deps

# Copying the rest of the application code
COPY . .

# Building the application
RUN npm run build

# Serving the application
CMD ["npm", "start"]
