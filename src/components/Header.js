import React, { Component } from 'react';
import '../styles/Header.css';
import { connect } from 'react-redux'
import {
    newNote
} from '../redux/actionCreators'

class Header extends Component {

    newNote = () => {
        this.props.dispatch(newNote(this.props.notes))
    }


    render() {
        return (

            <div className='navbar'>
                <div className='navItem' onClick={this.newNote}>New</div>
            </div>

        )
    }
}


function mapStateToProps(appState) {
    return {
        notes: appState.notes
    }
}

export default connect(mapStateToProps)(Header)