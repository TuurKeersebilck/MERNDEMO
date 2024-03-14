// ALLE LOGICA, GELIJKAARDIG ALS BIJ FULLSTACK
const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 });

	res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(404).json({ error: "Invalid ID format" });
		}

		const workout = await Workout.findById(id);

		if (!workout) {
			return res.status(404).json({ error: "Workout not found" });
		}

		res.status(200).json(workout);
	} catch (error) {
		// Handle any internal server errors
		console.error("Error while getting workout:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// create a new workout
const createWorkout = async (req, res) => {
	const { title, reps, weight } = req.body;

	let emptyFields = [];

	if (!title) {
        emptyFields.push("title ");
    }
	if (!reps) {
        emptyFields.push("reps ");
    }
	if (!weight) {
        emptyFields.push("weight ");
    }
	if(emptyFields.length > 0) {
		return res.status(400).json({ error: "Empty fields: " + emptyFields });
    }

	// toevoegen aan database
	try {
		const workout = await Workout.create({ title, reps, weight });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// delete workout
const deleteWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid ID" });
	}

	const workout = await Workout.findOneAndDelete({ _id: id });

	if (!workout) {
		return res.status(404).json({ error: "Workout not found" });
	}

	res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid ID" });
	}

	const workout = await Workout.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!workout) {
		return res.status(404).json({ error: "Workout not found" });
	}
};

// exports
module.exports = {
	createWorkout,
	getWorkouts,
	getWorkout,
	deleteWorkout,
	updateWorkout,
};
