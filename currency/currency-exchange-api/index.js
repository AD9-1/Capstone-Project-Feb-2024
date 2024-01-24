require("dotenv").config();
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getUser", (req, res) => {
  let userList = fs.readFileSync("./userData/userdb.json", "utf-8");
  userList = JSON.parse(userList);
  res.json(userList);
});



app.post("/saveUser", (req, res) => {
  let userList = fs.readFileSync("./userData/userdb.json", "utf-8");
  userList = JSON.parse(userList);
  let userPresent = {};

  const newUserfromfrontEnd = {
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob,
  };

  userPresent = userList.find((user) => {
    if (
      user.email === newUserfromfrontEnd.email ||
      user.password === newUserfromfrontEnd.password
    )
      return user;
  });

  if (!userPresent) {
    userList.push(newUserfromfrontEnd);
    fs.writeFileSync("./userData/userdb.json", JSON.stringify(userList));
    return res.json(userList);
  } else {
    return res.json("Please change the username or password");
  }
});



app.post("/getSingleUser", (req, res) => {
  let userList = fs.readFileSync("./userData/userdb.json", "utf-8");
  userList = JSON.parse(userList);
  const newUserfromfrontEnd = {
    email: req.body.email,
    password: req.body.password,
  };
  const userPresent = userList.find((user) => {
    return (
      user.email === newUserfromfrontEnd.email &&
      user.password === newUserfromfrontEnd.password
    );
  });
  const response = userPresent
    ? res.json("You are logged in")
    : res.json("Please Sign up");
  return response;
});

app.listen(port, (req, res) => {
  console.log(`browser is running on ${port}`);
});
