const express = require("express");

const router = express.Router();

// VOORBEELD __________________________________________________________________________________________________
router.get("/hello", function (req, res) {
	// dit wordt uitgevoerd wanneer /api/workouts/hello wordt uitgevoerd
	res.send("Hello World!");
});
//_____________________________________________________________________________________________________________

// GET ALL WORKOUTS
router.get("/", function (req, res) {
	res.json({ message: "Get all workouts" });
});

// GET SINGLE WORKOUT
router.get("/:id", function (req, res) {
	res.json({ message: "Get a single workout" });
});

// POST A NEW WORKOUT
router.post("/", (req, res) => {
	// STANDAARD POST
	res.json({ message: "Post a new workout" });
});

// DELETE A WORKOUT
router.delete("/:id", (req, res) => {
	res.json({ message: "Delete a workout" });
});

// UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
	res.json({ message: "Update a workout" });
});

module.exports = router;
