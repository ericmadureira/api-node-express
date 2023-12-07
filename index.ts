import express, { Request as ExpressRequest, Response as ExpressResponse } from 'express';

const app = express();
const PORT: number = 3031;

app.get("/hello", (request: ExpressRequest, response: ExpressResponse) => {
  response.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
