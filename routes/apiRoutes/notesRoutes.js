const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { createNewNote, validateNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    // give notes an id
    req.body.id = notes.length.toString();

    // console log to test
    console.log(req.body);
    
    // validate data for notes
    if (!validateNote(req.body)) {
        res.status(400).send("Note not properly formatted.");
    } else {
    // add new note to json file and Array
        const note = createNewNote(req.body, notes);
        res.json(note); 
    }
});

module.exports = router;