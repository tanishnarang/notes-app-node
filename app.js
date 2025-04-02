import yargs from "yargs";
import { hideBin } from "yargs/helpers";
yargs(hideBin(process.argv))
  .command(
    "name",
    "listing commands!",
    {
      n: {
        describe: "name",
        demandOption: true,
        type: "string",
      },
      l: {
        describe: "last name",
        demandOption: true,
        type: "string",
      },
    },
    function (argv) {
      console.log("hello", argv.n, argv.l);
    }
  )
  .help().argv;
