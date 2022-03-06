const indexRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// function to make new note

app.use("/api", apiRoute);
app.use("/", indexRoute);

app.listen(PORT, () => {
    console.log(`Server now on PORT ${PORT}!`);
});