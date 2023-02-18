const yargs = require("yargs");
const notes = require("./notes");
// import yargs from "yargs";
// import notes from "./notes";

yargs.version("1.0.1.1.1");

yargs.command({
  command: "add",
  describe: "Add New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);

    // console.log(`the title is: ${argv.title} and the body is: ${argv.body}`);
  },
});

yargs.command({
  command: "remove",
  describe: "remove New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
    // console.log("remove  a new  note!");
  },
});

yargs.command({
  command: "read",
  describe: "read New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    const note = notes.readNote(argv.title);
    console.log(note.body);
  },
});

yargs.command({
  command: "list",
  describe: "list New Note",
  handler: function () {
    const note = notes.listNote();
    console.log(note);
  },
});

yargs.parse();
// console.log("yar: ", yargs.argv);
