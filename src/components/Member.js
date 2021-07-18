import React from 'react';

function Member(props){
    return (
        <div className="Member">
            <img src={props.image} className="member-img" />
            <h3>{props.name}</h3>
            <h6>{props.designation}</h6> 
        </div>
    );
}

export default Member;