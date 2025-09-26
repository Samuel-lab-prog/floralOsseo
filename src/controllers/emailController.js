
const { insertEmail } = require("../models/emailModel");

async function addEmail(req, res) {
  const email = req.body.email;
  console.log("Received email:", email);
  

  try {
    await insertEmail(email);
    res.status(200).redirect("/");
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).send("Error saving email");
  }
}

module.exports = { addEmail };
