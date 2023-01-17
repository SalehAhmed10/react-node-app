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

// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const path = require("path");
// const dotenv = require("dotenv").config();
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const PORT = process.env.PORT || 5000;

//http request logger
// app.use(morgan("tiny"));

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.use("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),

//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("/", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

// app.get("/api", (req, res) => {
//   const data = [
//     {
//       name: "Jhon Doe",
//       age: "30",
//     },
//     {
//       name: "Bill",
//       age: "32",
//     },
//     {
//       name: "Steve",
//       age: "49",
//     },
//   ];
//   res.json(data);
// });

// app.get("/api/tweets", (req, res) => {
//   const tweet = [
//     {
//       name: "Jhon Doe",
//       age: "30",
//     },
//     {
//       name: "Bill",
//       age: "32",
//     },
//     {
//       name: "Steve",
//       age: "49",
//     },
//   ];
//   res.json(tweet);
// });

//server port listen
// app.listen(PORT, console.log(`Server is running on ${PORT}`));
// app.listen(PORT, async () => {
//   try {
//     await connect();
//     console.log(`Listening at ${PORT}`);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// module.exports = app;

const express = require("express");
require("dotenv").config();
const path = require("path");

const PORT = process.env.port || 5000;
const app = express();
app.use(express.json());
const router = express.Router();

//to serve the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.get("/api", async (req, res) => {
  const data = [
    {
      name: "Jhon Doe",
    },
  ];
  res.json(data);
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening at ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = app;
