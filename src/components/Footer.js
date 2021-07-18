import React from 'react';
import Iframe from './Iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    map: {
      gridColumn: "1/3"
    //   height: "25vh"
    }
}));

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241819.96839248756!2d73.28971852366253!3d18.734007274192372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8019aaaaaaaab%3A0xa856bfee8e45ed97!2sDMV%20Tech%20Services!5e0!3m2!1sen!2sin!4v1626622366333!5m2!1sen!2sin" width="100%" height="350px" style="border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>'; 

function Footer(){
    const classes = useStyles();

    return (
        <div className="Footer">
            <Iframe iframe={iframe} className={classes.map} />
            <div>
                <h1>Contact Us!</h1>
                <p>DMV Tech Lonavala : Head Office</p>
            </div>
        </div>
    )
}

export default Footer;