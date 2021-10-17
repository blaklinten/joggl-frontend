import React from 'react';
import './App.css';
import { Status }  from './Status.js';
import { Choises }  from './Choises.js';

export const Body = () => {
    const currentlyRunning = false;

    if (currentlyRunning){
        return(
            <Status/>
        );
    } else {
        return(
            <Choises/>
        )
    }
};
