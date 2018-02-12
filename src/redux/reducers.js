function reducers(state = [], action) {
    switch (action.type) {

        case 'NEW_NOTE': {

            let newNotes = action.oldNotes.map((note) => {return note})

            newNotes.push({ title: 'title', text: 'new note' })

            let newState = Object.assign({}, state, {
                notes: newNotes
                
            })
            
            return newState
        }
        case 'UPDATE_NOTE': {

            let newNotes = state.notes.map((note) => {return note})

            newNotes[action.noteId] = { title: action.noteTitle, text: action.noteText }

            let newState = Object.assign({}, state, {
                notes: newNotes

            })
            
            return newState
        }
        case 'REMOVE_NOTE': {

            let newNotes = state.notes.map((note) => {return note})

            newNotes.splice(action.noteId, 1)

            let newState = Object.assign({}, state, {
                notes: newNotes

            })
            
            return newState
        }
        case 'SET_NOTES': {

            let newState = Object.assign({}, state, {
                notes: action.notes

            })
            
            return newState
        }
        default: {
            return state
        }
    }

}


export default reducers