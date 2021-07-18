import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {Grid} from '@material-ui/core';

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import whatsapp from "../assets/icons/whatsapp.png";

import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    nav: {
      gridColumn: "1/3",
      height: "25vh"
    }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className="front">
        <Navbar className={classes.nav}/>

        <div className="head">
          <h1>DMV TECH Services</h1>
          <p>Services for Solutions!</p>
        </div>

        <div className="connect">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
    </div>
  );
}
