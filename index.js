// const express = require("express");
// const bodyParser = require("body-parser");
// const routesHandler = require("./handler");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/", routesHandler); // handling backend-routes

// const port = 4000; // backend routing PORT

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}.`);
// });

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

//http request logger
app.use(morgan("tiny"));

app.get("/api", (req, res) => {
  const data = [
    {
      name: "Jhon Doe",
      Age: "30",
    },
  ];
  res.json(data);
});

app.get("/api/tweet", (req, res) => {
  const tweet = [
    {
      userName: "JhoneDoe",
      age: "30",
      tweet: `Hi This is me JhonDoe`,
    },
  ];
  res.json(tweet);
});

//server port listen
app.listen(PORT, console.log(`Server is running on ${PORT}`));
