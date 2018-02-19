FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
# create folder and set it as workdir
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copy package and yarn files to cache deps install
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn

# copy app itself
COPY . /usr/src/app

EXPOSE 80

CMD ["npm", "start"]
