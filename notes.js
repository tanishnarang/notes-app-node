import fs from "fs";

const getNote = function () {
  console.log("your notes file.");
};
const addingNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log("new note added!");
  } else {
    console.log("note already taken!");
  }
};

const saveNote = function (note) {
  const data = JSON.stringify(note);
  fs.writeFileSync("notes.json", data);
};

const loadNotes = function () {
  try {
    const getNotes = fs.readFileSync("notes.json");
    const dataNotes = getNotes.toString();
    return JSON.parse(dataNotes);
  } catch (e) {
    return [];
  }
};

export default { getNote, addingNote };
