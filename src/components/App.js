import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import Notes from './Notes';

import {
  setNotes
} from '../redux/actionCreators'
import '../styles/App.css';


class App extends Component {

  checkPreviousNotes = () => {
    let notes = window.localStorage.getItem("notes");

    

    // console.log('PREV NOTES', {notes})
    if(notes) {
      notes = JSON.parse(notes)
      // notes = notes.split(",")

      notes.map((note) => {
        console.log(note)
      })

      this.props.dispatch(setNotes(notes))
    }
  }

  componentWillMount() {
    // window.localStorage.setItem("notes", []);
    this.checkPreviousNotes()
  }


  render() {
    return (
      <div className='mainwrapper'>
        <Header />
        <Notes />
      </div>
    );
  }
}

export default connect(null)(App);
