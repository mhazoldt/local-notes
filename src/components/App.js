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
    
    if(notes) {
      notes = notes.split(",")
      this.props.dispatch(setNotes(notes))
    }
  }

  componentWillMount() {
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
