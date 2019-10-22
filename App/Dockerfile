# bring in lts version of node
FROM node:lts-alpine

# instantiate workdir
WORKDIR /usr/app

# copy package and package-lock into workdir
COPY ./package*.json ./

# install dependencies
RUN npm install
RUN npm install --only=dev

# copy files from directory in which Dockerfile sits to the workdir
COPY ./ ./

# run start script
CMD ["npm", "start"]