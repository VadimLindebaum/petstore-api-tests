# Petstore API Tests

Sample API test project for the [Swagger Petstore API](https://petstore.swagger.io).

## Stack

- [Jest](https://jestjs.io) — test runner
- [Axios](https://axios-http.com) — HTTP client

## Setup

```bash
npm install
npm test
```

## What is tested

A single pet lifecycle in order:

1. `POST /pet` — create a pet
2. `GET /pet/:id` — verify it exists
3. `PUT /pet` — update name and status
4. `GET /pet/:id` — verify the update
5. `DELETE /pet/:id` — delete the pet
6. `GET /pet/:id` — verify it returns 404
