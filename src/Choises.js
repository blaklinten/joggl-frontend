import React from 'react';
import './App.css';

export const Choises = () => {

    return (
        <form action="/startEntry">
            <label>
                Name:
                <input type="text" name="name" />
            <br/>
                Client:
                <input type="text" name="client" />
            <br/>
                Project:
                <input type="text" name="project" />
            <br/>
                Description:
                <input type="text" name="description" />
            <br/>
            </label>
            <input type="submit" value="Create a new Entry" />
            <input type="submit" value="Fetch all entries matching input" />
        </form>
    );
}
