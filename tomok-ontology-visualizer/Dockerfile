# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the current folder contents into the container at /usr/src/app
COPY . .

# Install the dependencies
RUN npm install

# Compile the project (if applicable)
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the app
CMD ["npx", "vite", "--host", "0.0.0.0"]
