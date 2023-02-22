const nodemailer = require("nodemailer");

const sendEmail = async (email,subject,content) =>{
    try {
        let transporter = nodemailer.createTransport({
			// host: "sandbox.smtp.mailtrap.io",
			host: "smtp.example.com",
			service: email,
			port: 2525,
			auth: {
			  user: "rohitmaurya8026@gmail.com",
			  pass: "lzmtsdmyfyqhaorj"
			}
		  });

        await transporter.sendMail({
            from:"rohitmaurya8026@gmail.com",
            to: email,
            subject: subject,
            html: content,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

  module.exports = sendEmail;
