import React from 'react';
import axios from 'axios';

import './App.css';

export const Choises = ({ state, setState }) => {
 
    const stopEntry = () => {
        axios.get('http://localhost:8080/stop-timer')
            .then( (res) => {
                if(res.status === 200){
                    setState({...state, running: false});
                }
            })
            .catch( function (error) {
                console.log(error);
            });
    }

    const startEntry = () => {
        setState({...state, starting: true});
    }

    const editEntry = () => {
        setState({...state, editing: true});
    }

    const showStats = () => {
        setState({...state, showingStats: true});
    }

    if(state.running){
        return (
                <button type="button" onClick={stopEntry}>Stop this entry!</button>
        );
    } else {
        return (
            <ul>
                <button type="button" onClick={startEntry}>Start a new entry </button>
                <br/>
                <button type="button" onClick={editEntry}>Edit an existing entry</button>
                <br/>
                <button type="button" onClick={showStats}>Show stats</button>
            </ul>
        );
    }
}
