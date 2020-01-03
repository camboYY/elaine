FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app
RUN npm install

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 127.0.0.1
ENV NUXT_PORT 3000

# Bundle app source
COPY . /usr/src/app
RUN npm run build

# Clear the cache
RUN npm cache clean

EXPOSE 3000
CMD [ "npm", "start" ]
