FROM node:18-alpine

WORKDIR /app

# Copy package files for server
COPY server/package.json server/package-lock.json* ./

# Install dependencies
RUN npm ci --production

# Copy server source files
COPY server/ ./

# Expose the server port
EXPOSE 3002

# Start the backend server
CMD ["node", "index.js"]