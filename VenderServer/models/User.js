// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		FullName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		DOB: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the address field with type String, required, and trimmed
		Phone:{
			type:String,
			required:true,
			trim:true,
		},
		// Define the refercode field with type String, and trimmed
		Occupation:{
			type:String,
			required:true,
			trim:true,
		},
		City:{
			type:String,
			required:true,
			trim:true
		},
		Email:{
		   type:String,
		   trim:true
		}

		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);