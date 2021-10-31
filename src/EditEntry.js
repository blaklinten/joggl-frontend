import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

export const EditEntry = ({ setState }) => {

    const [formData, setFormData] = useState({
        name: '',
        client: '',
        project: '',
        description: ''
    });

    const fetchEntry = () => {
        console.log("Fetching...");
        setState({editing: false});
    }

    return (
        <>
            <p>
            Fill in the relevant field (only one) to find exisiting entries.
            </p>
            <br/>
            <form>
                <label htmlFor="name"> Name: </label>
                <input
                    id="name"
                    name="name"
                    className="entry"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({...formData, name: e.target.value
                        })
                    }
                />
            <br/>
                <label htmlFor="client"> Client: </label>
                <input
                    id="client"
                    name="client"
                    className="entry"
                    type="text"
                    value={formData.client}
                    onChange={(e) =>
                        setFormData({...formData, client: e.target.value
                        })
                    }
                />
            <br/>
                <label htmlFor="project"> Project: </label>
                <input
                    id="project"
                    name="project"
                    className="entry"
                    type="text"
                    value={formData.project}
                    onChange={(e) =>
                        setFormData({...formData, project: e.target.value
                        })
                    }
                />
            </form>

            <button type="button" onClick={fetchEntry}>Fetch entries! </button>
        </>
    );
}
