import fs, { read } from "fs";
import chalk from "chalk";
const getNote = () => {
  console.log(chalk.white.inverse("your notes list"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const addingNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((item) => item.title !== title);
  if (updatedNotes.length < notes.length) {
    saveNote(updatedNotes);
    console.log(chalk.green.inverse("note removed successfully!"));
  } else {
    console.log(chalk.red.inverse("note not found!"));
  }
};

const saveNote = (note) => {
  const data = JSON.stringify(note);
  fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
  try {
    const getNotes = fs.readFileSync("notes.json");
    const dataNotes = getNotes.toString();
    return JSON.parse(dataNotes);
  } catch (e) {
    return [];
  }
};

const readTheNote = (title) => {
  const notes = loadNotes();
  const updatedNote = notes.find((item) => item.title === title);
  if (updatedNote) {
    console.log(chalk.inverse(updatedNote.title));
    console.log(updatedNote.body);
  } else console.log(chalk.red.inverse("no note found!"));
};

export default { getNote, addingNote, removeNote, readTheNote };
