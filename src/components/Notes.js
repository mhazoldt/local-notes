import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux'


class Notes extends Component {


    render() {

        window.localStorage.setItem("notes", JSON.stringify(this.props.notes));

        let noteCards = this.props.notes.map((note, idx) => {
            return <Card title={note.title} text={note.text} noteId={idx} />
        })

        return (

            <div>
                {noteCards}
            </div>

        )
    }
}


function mapStateToProps(appState) {
    return {
        notes: appState.notes
    }
}

export default connect(mapStateToProps)(Notes);