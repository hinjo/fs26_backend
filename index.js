const express = require("express");

const app = express();
let port = null; //process.env.PORT || 3000;

if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 3000;
}

let counter = 0;

app.get("/", (_request, response) => {
  response.send({ hello: "World", counter: counter });
});

app.post("/:nr", (request, response) => {
  counter += Number(request.params.nr);
  response.send({ status: true });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
