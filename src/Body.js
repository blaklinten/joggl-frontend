import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';
import { Status }  from './Status';
import { Choises }  from './Choises';
import { StartNewEntry }  from './StartNewEntry';
import { EditEntry }  from './EditEntry';

export const Body = ({ state, setState }) => {

    useEffect( () => {
        axios.get('http://localhost:8080/get-status')
            .then( (res) => {
                if(res.status === 200){
                    setState({...state, running: true, entry: res.data});
                }
            })
            .catch( function (error) {
                console.log(error);
            });
// eslint-disable-next-line
    }, []);


    if(state.starting){
        return(
            <StartNewEntry setState={setState}/>
        );
    } else if(state.editing){
        return(
            <EditEntry state={state} setState={setState}/>
        );
    } else {

        return(
            <>
                <Status state={state}/>
                <Choises state={state} setState={setState}/>
            </>
        );
    }
}
