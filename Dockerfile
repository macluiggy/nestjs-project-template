FROM node:18-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Run the app
CMD ["npm", "run", "start:prod"]
