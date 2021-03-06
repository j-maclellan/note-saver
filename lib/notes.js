const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray }, null, 2)
    );
    return note;
};

function validateNote(note) {
    // check that both the note title and text are strings
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNote(id, notesArray) {
    const todelete = notesArray.filter(note => note.id === id)[0];
    const result = notesArray.splice(todelete, 1);
    return result

}

module.exports = {
    createNewNote,
    validateNote,
    findById,
    deleteNote
}