import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import userRoute from "./routes/usersRoute.js";
import authRoute from "./routes/authRoute.js";
import videoRoute from "./routes/videoRoute.js";
import commentRoute from "./routes/commentRoute.js";

dotenv.config();
const app = express();

const connect = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log(chalk.green.bold.underline("Connected to DB"));
		})
		.catch((err) => {
			throw err;
		});
};
//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

//error handler
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "Something went wrong!";
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

app.listen(5000, () => {
	connect();
	console.log("Connected to Server");
});
