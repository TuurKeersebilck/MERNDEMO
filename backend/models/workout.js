const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		weight: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true } // Wanneer je een document aanmaakt maakt dit automatisch een create timestamp en updated timestamp
);
