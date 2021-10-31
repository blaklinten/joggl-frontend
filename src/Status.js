import React from 'react';
import './App.css';

import { EntryStatus } from './EntryStatus';

export const Status = ({ state }) => {

    if( state.running ){
        return(
            <EntryStatus entry={state.entry} />
        );
    } else {
        return(
            <p> No entry is currently running...  </p>
        );
    }
};
