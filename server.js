const indexRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes/notesRoutes");
const express = require("express");


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", apiRoute);
app.use("/", indexRoute);

app.listen(PORT, () => {
    console.log(`Server now on PORT ${PORT}!`);
});