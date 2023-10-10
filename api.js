const express = require("express")
const router = express.Router()
const sgMail = require("@sendgrid/mail")


let api_key = process.env.SENDGRID_KEY



// Sendgrid Email Call
router.post("/sendEmail", async (req, res) => {

    console.log(api_key)
    sgMail.setApiKey(api_key);
  
    let data = JSON.parse(req.body)

    console.log(data)
  
    // const msg = {
    //   to: "amurphy37@gmail.com",
    //   from: 'murphyba@uci.edu',
    //   subject: `New message from ${req.body.name} at ${req.body.company}`,
    //   message: `Phone: ${req.body.phone}, Email: ${req.body.email}:
    //             Message: ${req.body.message}`,
    // };
  
    try {
    //   await sgMail.send(msg);
      console.log(`Email sent to ${to}`);
    } catch (error) {
    //   console.error(error);
    }

})

module.exports = router;