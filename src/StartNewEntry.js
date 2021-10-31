import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

export const StartNewEntry = ({ state, setState }) => {

    const [formData, setFormData] = useState({
        name: '',
        client: '',
        project: '',
        description: ''
    });

    const startEntry = () => {
        var body = new FormData();
        body.append('name', formData.name);
        body.append('client', formData.client);
        body.append('project', formData.project);
        body.append('description', formData.description);

        axios.post("http://localhost:8080/start-timer", formData)
        .catch( (res) => {
            console.log(res);
        });

        axios.get('http://localhost:8080/get-status')
            .then( (res) => {
                if(res.status === 200){
                    setState({...state, running: true, entry: res.data});
                }
            })
            .catch( function (error) {
                console.log(error);
            });
        
        setState({...state, starting: false});
    }

    return (
        <>
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
        <br/>
            <label htmlFor="description"> Description: </label>
            <input
                id="description"
                name="description"
                className="entry"
                type="text"
                value={formData.description}
                onChange={(e) =>
                    setFormData({...formData, description: e.target.value
                    })
                }
            />
        </form>

        <button type="button" onClick={startEntry}>Start entry! </button>
        </>
    );
}
