const User = require("../models/User");

exports.signup = async (req,res) => {
	console.log("signup page")
	try {
		// Destructure fields from the request body
		const {
			fullName,
			email,
			DOB,
			phone,
			occupation,
			city
		 } = req.body;
		// Check if All Details are there or not
		if (
			!fullName ||
			!DOB ||
			!phone ||
			!occupation ||
			!city
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ phone });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		email=email!=NULL?email:NULL;

		const user = await User.create({
			fullName,
			DOB,
			phone,
			occupation,
			city,
			email
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