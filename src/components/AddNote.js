import { useState } from "react"

const AddNote = ({ addNewNote }) => {
    const [noteText, setNoteText] = useState("");
    const maxLimt = 200;

    const handleTextChage = (event) => {
        if (event.target.value.length <= 200)
            setNoteText(event.target.value);
    }

    const saveFunc = () => {
        addNewNote(noteText);
        setNoteText("");
    }

    return (<div className="note new">
        <textarea rows={10} placeholder="Type your text..." value={noteText}
            onChange={handleTextChage}></textarea>
        <div className="note-footer">
            <div>{maxLimt - noteText.length} remaining</div>
            <button onClick={() => saveFunc()}>Save</button>
        </div>
    </div>)
}

export default AddNote;