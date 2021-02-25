const nodemailer = require('nodemailer'); 


let mailTransporter = nodemailer.createTransport({ 
	service: 'gmail', 
	auth: { 
		user: 'abdulrahman209875@gmail.com', 
		pass: 'Rahman@123'
	} 
}); 

let mailDetails = { 
	from: 'xyz@gmail.com', 
	to: 'abdulrahmanmohd53@gmail.com', 
	subject: 'Test mail', 
	text: 'Node.js testing mail for GeeksforGeeks'
}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 
	if(err) { 
		console.log('Error Occurs'); 
	} else { 
		console.log('Email sent successfully'); 
	} 
}); 
