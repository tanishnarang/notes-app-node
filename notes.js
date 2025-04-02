import fs from "fs";

const getNote = function () {
  console.log("your notes file.");
};
const addingNote = function (title, body) {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body,
  });

  saveNote(notes);
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
