require("dotenv").config(); // environment variable config file globaal beschikbaar maken (is voor beveiliging)
// require
const express = require("express");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json()); // kijkt bij elke request of er een body is

app.use((req, res, next) => {
	// dit gebeurt voordat andere requests worden uitgevoerd
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/workouts", workoutRoutes); // alle requests naar /api/workouts worden doorgegeven aan workoutRoutes

// listen for requests
app.listen(process.env.PORT, () => {
	console.log("listening on port " + process.env.PORT);
});
