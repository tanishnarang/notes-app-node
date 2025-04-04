import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import notes from "./notes.js";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Add a note!",
    {
      title: {
        describe: "note tittle",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "note body",
        demandOption: true,
        type: "string",
      },
    },
    (argv) => notes.addingNote(argv.title, argv.body)
  )
  .command(
    "remove",
    "remove the note!",
    {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
    },
    (argv) => notes.removeNote(argv.title)
  )
  .command("list", "listing of all the notes", () => notes.getNote())
  .help().argv;
