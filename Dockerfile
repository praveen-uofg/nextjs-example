FROM node:12
ARG profile=production
ENV NODE_ENV=production

ENV PORT 80
# Create app directory
RUN mkdir -p /usr/src/frontend

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/frontend

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
CMD [ "npm", "run", "dev" ]
