# RamenGo API

One platform so that the user can place a ramen order, choosing the types of broths and proteins in the dish, and make a order with that.

## ▶️ Run

The backend has the database's structure and a API Rest hat communicates with the database and provides routes.
To the database was used a SQL structure with SQLite. For the rest api of the backend, the TypeScript language was used with the Node framework and the Prisma tool.

To start de backend in development environment you need install Node and run:

```bash
npm install

npm run dev
```

## 🦾 Testing
The API has unit tests to the service layer using Jest, that can be run with:

```bash
npm install

npm test
```

## 🧾 Documentation

The documentation was written with Swagger and can be viwed when the app is runing in [{API_URL}/api#/](http://localhost:3000/api#/)

## ⚙️ Configuration

To use POST, PUT and DELETE routes of Proteins and Broths is necessary a API Key in environtment variables.

The .env file must to be in aplication root path, and de variable definition must to be like:

```dotenv
API_KEY='YourApiKey'
```

This key will be searched in the requisition header with the key "x-api-key". Therefore, is neceessary define your api key and incluude in the header for the routes mentioned above.

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
- [ ] Tests
  - [x] Unit Tests
  - [ ] E2E Tests (working...)
- [ ] Message Queueing (working...)
- [ ] Docker (working...)
- [ ] Login (working...)

## 📖 Bibliography

- [TypeScript](https://www.typescriptlang.org/)
- [Node v20.12.0](https://nodejs.org/en)
- [Nest v10.3.2](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
