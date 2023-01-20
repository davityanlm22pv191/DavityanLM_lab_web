FROM node:latest

RUN mkdir -p /var/www/products
WORKDIR /var/www/products

#WORKDIR /products
#COPY package.json /products
#RUN npm install
#COPY . /products

#EXPOSE 3003
#CMD ["npm", "start"]
COPY package.json .
#COPY ["package.json","./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sudo","npm", "start"]