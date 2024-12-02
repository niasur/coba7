# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port for Vite development server (default: 5173)
EXPOSE 5173

# Run development server
CMD ["npm", "run", "dev"]
