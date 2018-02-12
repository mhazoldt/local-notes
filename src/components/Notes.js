import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux'


class Notes extends Component {


    render() {

        window.localStorage.setItem("notes", this.props.notes);

        let noteCards = this.props.notes.map((note, idx) => {
            return <Card text={note} noteId={idx} />
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