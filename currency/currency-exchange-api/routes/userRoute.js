const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await knex("registerUser");
      res.status(200).json(users);
    } catch (error) {
      res.status(403).json({ message: "Error retrieving the users" });
      console.log(error);
    }
  })
  .post(async (req, res) => {
    if (
      req.body == "" ||
      req.body.email == "" ||
      req.body.password == "" ||
      req.body.dob == ""
    ) {
      return res.status(403).json({
        message: "Please enter the email-id , password and date of birth properly",
      });
    }
    try {
      const newUserId = await knex("registerUser").insert(req.body);
      const newUser = await knex("registerUser").select({ id: newUserId[0] });
      return res.status(200).json(newUser);
    } 
    catch (error) {
      return res
        .status(400)
        .json({ message: `Email Address already in use` });
    }
  });

router.post("/loginUser", async (req, res) => {
  if (!req.body || req.body.email == "" || req.body.password == "") {
    return res.status(400).json("Please enter the email and password");
  }
  try {
    const getSingleUser = await knex("registerUser").where({
      email: req.body.email,
      password: req.body.password,
    });
    if (getSingleUser.length == 0) {
     return  res.status(403).json({ message: "Please Register First" });
    }

   return  res.status(200).json({message:`You are logged in ${getSingleUser[0]}`});
  } catch (error) {
    return res.status(400).json({ message: "Unable to Find the user in database" });
  }
});

module.exports = router;
