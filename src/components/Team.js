import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Member from './Member';

// import ceo from '../assets/images/Team/f1.webp';
// import emp1 from '../assets/images/Team/m1.webp';
// import emp2 from '../assets/images/Team/m2.jpg';
import dummy from '../assets/images/Team/dummy.png';


const useStyles = makeStyles((theme) => ({
    marg: {
        order:3,
        gridColumn: 2/3
    }
}));


function Team(){
    const classes = useStyles();

    return (
        <div className="Team">
            <h1>
                People behind DMV!
            </h1>
            <div className="ceo">
                <Member name="Mohnish Warulkar" designation="CEO, Head" image={dummy}/>
            </div>
            <Member name="Tom Henry" designation="Technical Head" image={dummy}/>
            <Member name="Tom Henry" designation="Technical Head" image={dummy} className="marg"/> 
            <Member name="Tom Henry" designation="Technical Head" image={dummy}/>
            <Member name="Tom Henry" designation="Technical Head" image={dummy}/>            
            {/* <h3>{props.name}</h3> */}
            {/* <h6>{props.designation}</h6>  */}
        </div>
    );
}

export default Team;