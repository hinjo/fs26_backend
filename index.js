const express = require("express");

const app = express();
let port = null; //process.env.PORT || 3000;

if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 3000;
}

app.get("/", (_request, response) => {
  response.send({ hello: "World" });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
