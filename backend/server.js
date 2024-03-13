require("dotenv").config(); // environment variable config file globaal beschikbaar maken (is voor beveiliging)
// require
const express = require("express");

// express app
const app = express();

app.use((req, res, next) => { // dit gebeurt voordat andere requests worden uitgevoerd
	console.log(req.path, req.method);
	next();
});

// routes
app.get("/", (req, res) => {
	res.json({ message: "Welcome op de MERN stack test" });
});

// listen for requests
app.listen(process.env.PORT, () => {
	console.log("listening on port " + process.env.PORT );
});
