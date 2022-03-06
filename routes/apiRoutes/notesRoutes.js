const router = require("express").Router();
const generateUniqueId = require("generate-unique-id");
const { notes } = require("../../db/db.json");
const { createNewNote, validateNote, findById, deleteNote } = require("../../lib/notes");



router.get("/notes", (req, res) => {
    res.json(notes);
});

// router.get("/notes/:id", (req, res) => {
//     const result = findById(req.params.id, notes);
//     res.json(result);
// });

router.post("/notes", (req, res) => {
    // give notes an id
    req.body.id = generateUniqueId({
        length: 5,
        useNumbers: true,
        useLetters: false
    });
    
    // validate data for notes
    if (!validateNote(req.body)) {
        res.status(400).send("Note not properly formatted.");
    } else {
    // add new note to json file and Array
        const note = createNewNote(req.body, notes);
        res.json(note); 
    }
});

router.delete("/notes/:id", (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
    console.log("success!");
});
module.exports = router;