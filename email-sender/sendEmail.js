const nodemailer = require("nodemailer");

// Créer un transporteur
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", // Remplacez par votre adresse email
    pass: "", // Remplacez par votre mot de passe
  },
});

// Définir les options de l'email
let mailOptions = {
  from: "", // Remplacez par votre adresse email
  to: "", // Remplacez par l'adresse email du destinataire
  subject: "Test Email",
  text: "Hello from Node.js using Nodemailer!",
};

// Envoyer l'email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
