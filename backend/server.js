require("dotenv").config(); // Environment variable config file globaal beschikbaar maken (is voor beveiliging)
// Require
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Express app
const app = express();

// Middleware
app.use(express.json()); // kijkt bij elke request of er een body is

app.use((req, res, next) => {
	// Dit gebeurt voordat andere requests worden uitgevoerd
	console.log(req.path, req.method);
	next();
});

// Routes
app.use("/api/workouts", workoutRoutes); // alle requests naar /api/workouts worden doorgegeven aan workoutRoutes

// Connect to database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Pas luisteren naar requests als verbinding succesvol is
		app.listen(process.env.PORT, () => {
			console.log("Verbonden met database & listening op: " + process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
