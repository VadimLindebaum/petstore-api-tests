# Petstore API Tests
<img width="962" height="407" alt="Screenshot 2026-04-14" src="https://github.com/user-attachments/assets/1efd8fc2-fb59-4175-92d3-b7bc90eb213f" />

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
