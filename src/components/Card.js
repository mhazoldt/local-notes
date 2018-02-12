import React, { Component } from 'react';
import '../styles/Card.css';
import { connect } from 'react-redux';
import {
    updateNote,
    removeNote
} from '../redux/actionCreators'



class Card extends Component {

    updateNote = (e) => {
        let noteId = e.currentTarget.dataset.noteId
        let noteText = e.currentTarget.innerText

        this.props.dispatch(updateNote(noteId, noteText))
        
    }

    removeNote = (e) => {
        let noteId = e.currentTarget.dataset.noteId

        this.props.dispatch(removeNote(noteId))
        
    }

    render() {
        return (
            <div className='cardContainer' key={this.props.noteId}>
                <div className='card'>
                    <div className='cardTitleBar'>
                        <div className='removeButton' onClick={this.removeNote} data-note-id={this.props.noteId}>X</div>
                    </div>
                    <div className='cardContentContainer'>
                        <div className='cardContent' contentEditable="true" onBlur={this.updateNote} data-note-id={this.props.noteId}>{this.props.text}</div>
                    </div>
                </div>
            </div>

        )
    }
}



export default connect(null)(Card)