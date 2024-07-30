# RamenGo API

One platform so that the user can place a ramen order, choosing the types of broths and proteins in the dish, and make a order with that.

## 🧾 Documentation

The documentation was written with Swagger and can be viwed when the app is runing in [{API_URL}/api#/](http://localhost:3000/api#/)

## ⚙️ Configuration

For the API to work, a port must be released for it, for this it is necessary to insert this a PORT environment variable

To use POST, PUT and DELETE routes of Proteins and Broths is necessary a API Key in environtment variables.

This key will be searched in the requisition header with the key "x-api-key". Therefore, is neceessary define your api key and incluude in the header for the routes mentioned above.

For the Postgres database is necessary a variable named DATABASE_URL to connect with your DB.

Then you must to run the Prisma migrations. Prisma is a ORM and help to make queries in DB. You can run the migrations in your terminal with that line:

```bash
npx prisma migrate dev
```

The .env file must to be in aplication root path, and de variable definition must to be like:

```dotenv
PORT=3000

API_KEY='YourApiKey'

DATABASE_URL= 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA'
```

## ▶️ Run

The backend has the database's structure and a API Rest hat communicates with the database and provides routes.
To the database was used a SQL structure with SQLite. For the rest api of the backend, the TypeScript language was used with the Node framework and the Prisma tool.

To start de backend in development environment you need install Node and run:

```bash
npm install

npm run dev
```

## 🧪 Testing

In this API was used Jest to unit tests, these tests aim to test the main functionalities.

To start the automate tests just run:

```bash
npm test
```

## 💭 Features

- [x] Database
- [x] Models
- [x] Controllers
- [x] Services
  - [x] Create
  - [x] Update
  - [x] Read All
  - [x] Read One
  - [x] Delete
- [x] Middleware
- [x] Documentation
- [x] Docker
- [x] PostgreSQL
- [ ] Tests
  - [x] Unit Tests
  - [ ] E2E Tests (working...)
- [ ] Message Queueing (working...)
- [ ] Login (working...)

## 📖 Bibliography

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en)
- [Nest](https://nestjs.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://www.sqlite.org/)
