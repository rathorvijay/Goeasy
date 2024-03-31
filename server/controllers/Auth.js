const User = require("../models/User");

exports.signup = async (req,res) => {
	console.log("signup page")
	try {
		// Destructure fields from the request body
		const {
			name,
			email,
			address,
			referCode,
		 } = req.body;
		// Check if All Details are there or not
		if (
			!name ||
			!email ||
			!address
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}


		const user = await User.create({
			name,
			email,
			address,
			referCode
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};