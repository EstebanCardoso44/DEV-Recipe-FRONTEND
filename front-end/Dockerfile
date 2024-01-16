# Dockerfile

# Use an existing node alpine image as a base image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /front-end

# Copy the package.json file.
COPY package.json .

# Install application dependencies.
RUN npm install
RUN npm install axios

# Copy the rest of the application files.
COPY . .

# Expose the port.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]