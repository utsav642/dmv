import React,{useState} from 'react';

import I1 from "../assets/images/dmv/antiv.jpeg";
import I2 from "../assets/images/dmv/cctv.webp";
import I3 from "../assets/images/dmv/cons.png";
import I4 from "../assets/images/dmv/hardware.jpeg";
import I5 from "../assets/images/dmv/network.webp";
import I6 from "../assets/images/dmv/pc.jpeg";
import I7 from "../assets/images/dmv/rfid.jpeg";
import I8 from "../assets/images/dmv/ss.jpeg";

import t1 from "../assets/images/s1.webp";
import t2 from "../assets/images/s2.webp";
import t3 from "../assets/images/s3.webp";

const services = [I1, I2, I3, t1, t2, t3, I4, I5, I6, I7, I8];


// const cache = [];

// // function importAll(r) {
// //   r.keys().forEach((key) => (cache.push(r(key))));
// // }

// // importAll(require.context('../assets/images/dmv/', true, /\.jpeg$/));

// function importAll(r) {
//     r.keys().forEach((key) => (cache.push(r(key))))
//   }
  
// importAll(require.context('../assets/images/dmv/', true, /\.jpeg\.webp\.png$/))
// console.log(cache);

function Services(){
    const [curSer, setSer] = useState(3);

    function bnavigate(){
        setSer(prevVal => {
            return (prevVal === 0)?7:prevVal-1;
        });
    }

    function fnavigate(){
        setSer(prevVal => {
            return (prevVal === 7)?0:prevVal+1;
        });
    }


    return (
        <div className="Services">
            <h1>Servies</h1>
            <div>
                <img src={services[(curSer === 0) ? 7 : curSer-1]} className="prev" />
                <img src={services[curSer]} className="curr" />  
                <img src={services[(curSer === 7) ? 0 : curSer+1]} className="next"/>
                <button className="pB" onClick={bnavigate}>&lt;</button>
                <p>
                    A service!
                </p>
                <button className="nB" onClick={fnavigate}>&gt;</button>
            </div>
        </div>
    );
}

export default Services;