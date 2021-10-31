import React, { useState } from 'react';

import './App.css';

import { Header } from './Header.js';
import { Body } from './Body.js';


function App() {

    const [state, setState] = useState({
        running: false,
        starting: false,
        editing: false,
        showingStats: false,
        entry: {}
    });

    if(state.starting){
        return(
            <div className="App">
                <Header title="Starting a new entry"/>
                <Body state={state} setState={setState}/>

            </div>
        );
    } else {

        return (
            <div className="App">
                <Header title="Welcome to Joggl"/>
                <Body state={state} setState={setState}/>
            </div>
        );
    }
};            

export default App;
