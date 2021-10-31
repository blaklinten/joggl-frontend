import React from 'react';
import './App.css';

export const EntryStatus = ({ entry }) => {

    return (
        <>
        <ul>
            <li>Name: { entry.name }</li>
            <li>Client: { entry.client }</li>
            <li>Project: { entry.project }</li>
        </ul>

        <br/>
        <p> Running for: {entry.hours}:{entry.minutes}:{entry.seconds} </p>
        <br/>
        </>
    );
}
