const express = require("express");
const router = express.Router();

// function imports
const {
	createWorkout,
	getWorkouts,
	getWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../Controllers/workoutController");

// VOORBEELD __________________________________________________________________________________________________
router.get("/hello", function (req, res) {
	// dit wordt uitgevoerd wanneer /api/workouts/hello wordt uitgevoerd
	res.send("Hello World!");
});
//_____________________________________________________________________________________________________________

// GET ALL WORKOUTS
router.get("/", getWorkouts);

// GET SINGLE WORKOUT
router.get("/:id", getWorkout);

// POST A NEW WORKOUT
router.post("/", createWorkout);

// DELETE A WORKOUT
router.delete("/:id", deleteWorkout);

// UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;
