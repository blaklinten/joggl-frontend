import React from 'react';
import './App.css';

export const Entry = ({ name, project, client, description }) => {

if (!name) return <div />;

return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h5>{project}</h5>
            </td>
            <td>
              <h4>{client}</h4>
            </td>
            <td>
              <p>{description}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
};
