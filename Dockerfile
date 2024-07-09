From node:20

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3400

CMD ["node","dist/index.js"]
