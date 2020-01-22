const express = require("express");
const cors = require("cors");
const serverlessHttp = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET /developers

app.get("/developers", function(request, response) {
  // request is an object with lots of info about the request
  // response is an object which allows us to define what kind of response we want to send back

  response.status(200).json({
    developers: [
      {
        name: "Ena",
        available: true,
        date_joined: "2020-01-09",
        skills: "HTML, CSS, React, NodeJS, AWS, Git",
        id: 1
      },
      {
        name: "Sue",
        available: true,
        date_joined: "2020-01-10",
        skills: "Agile, NodeJS, React, C#",
        id: 2
      },
      {
        name: "Sitara",
        available: false,
        date_joined: "2020-01-11",
        skills: "Java, NodeJS, Git, TDD",
        id: 3
      }
    ]
  });
});

// POST /developers

// PUT /developers
app.put("/developers/:id", function(request, response) {
  /*
  // For sensitive data or larger pieces of data, I can use the request body
  { name: "Fred", available: true, skills: "HTML and CSS" }
  */

  const updatedDeveloper = request.body;
  const id = request.params.id;

  response.status(200).json({
    message: `Successfully updated developer ID ${id} with name: ${updatedDeveloper.name}, available: ${updatedDeveloper.available}, skills: ${updatedDeveloper.skills}`
  });
});

// DELETE /developers

module.exports.app = serverlessHttp(app);
