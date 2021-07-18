import React from 'react';

function Client(props){
    return (
        <div className="ClientCard">
            <h3>{props.company}</h3>
            <h6>{props.description}</h6> 
        </div>
    )
}

export default Client;