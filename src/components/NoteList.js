import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, addNewNote, deleteFunc }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <Note note={note} deleteFunc={deleteFunc} />
            ))}
            <AddNote addNewNote={addNewNote} />
        </div>
    )
}
export default NoteList;