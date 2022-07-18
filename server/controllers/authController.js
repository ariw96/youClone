import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		const user = new User({
			...req.body,
			password: hashedPassword,
		});
		await user.save();

		res.status(200).send("User has been created!");
	} catch (err) {
		next(err);
	}
};
export const signin = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return next(createError(404, "User not found!"));
		}
		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch) {
			return next(createError(403, "Wrong password!"));
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		const { password, ...others } = user._doc;
		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json(others);
	} catch (err) {
		next(err);
	}
};
