FROM node:20.9

WORKDIR /app

# Accept build arguments
ARG BASEURL


# Set environment variables from build arguments
ENV BASEURL=$BASEURL

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
