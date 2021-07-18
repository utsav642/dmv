import React, {useState} from 'react';
// import {Grid} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     navelement :  {
//         display: "inline-block"
//     }
// }));



function Navbar(props) 
{
    const [menu, setMenu] = useState({
        display: "block"
    });

    function showMenu(){
        setMenu({
            display: menu.display === "none" ? "block" : "none"
        })
    }

    return(
        <div className="navbar">
            <ul>
                <div className="resnav">
                    <div>Menu</div>
                    <button onClick = {showMenu}>=</button>
                </div>
                <li style={menu}>Home</li>
                <li style={menu}>About</li>
                <li style={menu}>Services</li>
                <li style={menu}>Clients</li>
                <li style={menu}>Contact</li>
            </ul>
        </div>
        );
}

export default Navbar;