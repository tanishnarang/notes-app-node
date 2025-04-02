import fs from "fs";
import chalk from "chalk";
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
    console.log(chalk.green.inverse("new note added!"));
  } else {
    console.log(chalk.red.inverse("title already taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  // const removablenote = notes.findIndex((item) => item.title === title);
  // if (removablenote !== -1) {
  //   notes.splice(removablenote, 1);
  //   saveNote(notes);
  //   console.log("note removed successfully!");
  // }
  const updatedNotes = notes.filter((item) => item.title !== title);
  if (updatedNotes.length < notes.length) {
    saveNote(updatedNotes);
    console.log(chalk.green.inverse("note removed successfully!"));
  } else {
    console.log(chalk.red.inverse("note not found!"));
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

export default { getNote, addingNote, removeNote };
