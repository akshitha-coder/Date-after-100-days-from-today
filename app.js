const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

const result = addDays(new Date(), 100);

app.get("/", (request, response) => {
  const date = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;

  response.send(date);
});

app.listen(3000);
module.exports = app;
