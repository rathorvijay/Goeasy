const express = require("express");
const app=express();
require("dotenv").config();
app.use(express.json());

// app.use(
// 	cors({
// 		origin: process.env.FRONTEND_URL,
// 		credentials:true,
// 	})
// )

const PORT= process.env.PORT || 500

const dbconnection=require("./config/db");
dbconnection();


//routes
const userRoutes= require("./routers/User");
app.use("/api/v1/auth", userRoutes);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})