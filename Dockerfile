FROM node:12
ARG profile=staging
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/azent-website

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/azent-website

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN APP_ENV=${profile} npm run build

# Expose port
EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
