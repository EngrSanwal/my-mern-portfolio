const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const User = require('../models/userSchema');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'adf',   //bilalrajpoot162922
    pass: process.env.SERCET
  }
});

router.post('/sendEmail', async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    
    const info = await transporter.sendMail({
      from: email,
      to: 'sanwalmumtaz536@gmail.com',
      subject: 'Regarding Mern Portfolio App',
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `
    });

    res.json({ 
      success: true,
      message: 'Your Message Send Successfully'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process your request'
    });
  }
});

module.exports = router;




// const express = require("express");
//const { sendEmailController } = require("../controllers/portfolioContoller");

//router object
//const router = express.Router();

//routes
//router.post("/sendEmail", sendEmailController);

// /export
//module.exports = router;
