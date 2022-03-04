const router = require("express").Router();
const { test } = require("../../db/db.json");

router.get("api/notes", (req, res) => {
    res.json(test);
});


module.exports = router;