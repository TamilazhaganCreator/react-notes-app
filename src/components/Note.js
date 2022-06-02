import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, deleteFunc }) => {

    return (
        <div className="note">
            <span>{note.text}</span>
            <div className="note-footer">
                <small>{note.date}</small>
                <MdDeleteForever size={20} className="delete-icon"
                    onClick={() => deleteFunc(note.id)}>
                </MdDeleteForever>
            </div>
        </div>
    )
}

export default Note;