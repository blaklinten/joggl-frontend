import React from 'react';
import { Header } from './Header.js';
import { Entry } from './Entry.js';
import './App.css';

import { entries } from './data.js';

export const Entries = () => {
    return (
        <>
        <Header/>
        <div className="entry-container"> 
            { entries.map((data, key) => {
                return (
                    <div key={key}>
                        <Entry
                            key={data.key}
                            name={data.name}
                            project={data.project}
                            client={data.client}
                            description={data.description}
                        />
                    </div>
                );
            })}
        </div>
        </>
    );
};
