import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

const App = () => {

  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "01/05/2022"
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "15/05/2022"
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "20/05/2022"
    }
  ]);

  const addNewNote = (text) => {
    let obj = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    }
    let newNotes = [...notes, obj];
    setNotes(newNotes);
  }

  const deleteFunc = (id) => {
    let filteredNotes = notes.filter((n) => n.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NoteList notes={notes.filter((n) => n.text.toLowerCase().includes(searchText))}
        addNewNote={addNewNote} deleteFunc={deleteFunc} />
    </div>
  )
}

export default App;