require("dotenv").config();
const express = require("express");
const https = require("https");

//Setup Express
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Public folder with HTMl, CSS and JS
app.use(express.static("public"));

//Get
app.get("/", function (req, res) {
  res.sendFile(__dirname + "public/index.html");
});

//Newsletter POST request for Mailchimp
app.post("/newsletter", function (req, res) {
  const name = req.body.fName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
      },
    ],
  };

  //Convert data into JSON so Mailchimp can receive it
  const jsonData = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/" + process.env.LIST;

  const options = {
    method: "POST",
    auth: "michaelauth:" + process.env.API_KEY,
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      let parsedData = JSON.parse(data);
      if (response.statusCode === 200 && parsedData.error_count === 0) {
        res.sendFile(__dirname + "/public/success-news.html");
      } else {
        res.sendFile(__dirname + "/public/failure.html");
      }
    });
  });

  request.write(jsonData);
  request.end();
});

//Listen
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
