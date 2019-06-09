import React, { Component } from 'react';
import '../styles/Card.css';
import { connect } from 'react-redux';
import {
    updateNote,
    removeNote
} from '../redux/actionCreators'


class Card extends Component {

    updateNoteText = (e) => {
        let noteId = e.currentTarget.dataset.noteId
        let noteText = e.currentTarget.innerText
        let noteTitle = e.currentTarget.dataset.noteTitle

        this.props.dispatch(updateNote(noteId, noteTitle, noteText))
    }

    updateNoteTitle = (e) => {
        let noteId = e.currentTarget.dataset.noteId
        let noteText = e.currentTarget.dataset.noteText
        let noteTitle = e.currentTarget.innerText

        this.props.dispatch(updateNote(noteId, noteTitle, noteText))
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
                        <div className='titleMiddle'>
                            <div className='cardTitle' contentEditable="true" onBlur={this.updateNoteTitle} data-note-text={this.props.text} data-note-id={this.props.noteId}>{this.props.title}</div>
                        </div>
                        <div className='removeButton' onClick={this.removeNote} data-note-id={this.props.noteId}>X</div>
                    </div>
                    <div className='cardContentContainer'>
                        <div className='cardContent' contentEditable="true" onBlur={this.updateNoteText} data-note-title={this.props.title} data-note-id={this.props.noteId}>{this.props.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null)(Card)