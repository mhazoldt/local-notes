
function newNote(oldNotes) {
    return { type: 'NEW_NOTE', oldNotes: oldNotes }
}

function updateNote(noteId, noteText) {
    return { type: 'UPDATE_NOTE', noteId, noteText }
}

function removeNote(noteId) {
    return { type: 'REMOVE_NOTE', noteId }
}

function setNotes(notes) {
    return { type: 'SET_NOTES', notes }
}

module.exports = { 
    newNote,
    updateNote,
    removeNote,
    setNotes
}