const fs = require("fs");
// const chalk = require("chalk");
// import { Chalk } from "chalk";

const getNotes = function () {
  return "your notes ....";
};

// const error = Chalk.bold.red.inverse;
// const warning = Chalk.hex("#FFA500"); // Orange color
// const success = Chalk.bold.green.inverse; // Orange color

const addNote = (title, body) => {
  const notes = loadNotes();
  console.log(notes);

  //   const exists = notes.filter((e) => {
  //     return e.title === title;
  //   });
  const exists = notes.find((e) => {
    return e.title === title;
  });

  if (!exists) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(notes);

    // console.log(success("success"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const exists = notes.filter((e) => {
    return e.title !== title;
  });

  console.log(exists);

  if (exists.length !== 0) {
    saveNotes(exists);
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  debugger;

  //   const check_note = notes.filter((e) => {
  //     return e.title === title;
  //   });

  const check_note = notes.find((e) => {
    return e.title === title;
  });

  return check_note;
};

const listNote = () => {
  const notes = loadNotes();

  //   const check_note = notes.filter((e) => {
  //     return e.title;
  //   });
  const nn = [];

  notes.forEach((note) => {
    // console.log(note.title);
    nn.push({ title: note.title });
  });

  //   console.log(nn);

  //   console.log(check_note);

  return nn;
};

const saveNotes = (note) => {
  fs.writeFileSync("notes_data.json", JSON.stringify(note));
};

const loadNotes = () => {
  try {
    const notes_buffer = fs.readFileSync("notes_data.json");
    const t_buffer_string = notes_buffer.toString();
    const json_vl = JSON.parse(t_buffer_string);

    // console.log(json_vl);

    return json_vl;
  } catch (error) {
    return [];
  }

  console.log(`load Note ${title}`);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNote: listNote,
};
