/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


/*************   Script for Services   *****************/


let services = ["images/rfid.jpeg", "images/cctv.webp", "images/antiv.jpeg", "images/ss.jpeg", "images/cons.png", "images/network.webp", "images/pc.jpeg","images/hardware.jpeg"];
let desc = 
[
    "biometric system installation in office premises",
    "Providing CCTV service to School, Hotels, Societies, Institutes, Banglows",
    "AntiVirus Solutions for personal computers, laptops, desktops.",
    "website development, app development, software development for businesses",
    "IT consultancy",
    "Providing CCTV service to School, Hotels, Societies, Institutes, Banglows",  
    "We are dealing in New as well as Old Desktops and Laptops",
    "All types of Desktop , Laptops , Printers repairing"
]

let current = 3;

document.getElementById("current").setAttribute("src",services[current]);
document.getElementById("previous").setAttribute("src",services[current - 1]);
document.getElementById("next").setAttribute("src",services[current + 1]);

document.getElementById("desc").innerHTML = desc[current];


function rotateService(flow){
    if(flow){
        if(current == 7) current = 0;
        else{
            current = current + 1;  
            console.log(current);
        }      
    }else{
        if(current == 0) current = 7;
        else{
            current = current - 1;
            console.log(current);
        }
    }

    console.log(current);
 
    document.getElementById("current").setAttribute("src",services[current]);
    document.getElementById("previous").setAttribute("src",services[current == 0 ? 7 : current - 1]);
    document.getElementById("next").setAttribute("src",services[current == 7 ? 0 : current + 1]);

    document.getElementById("desc").innerHTML = desc[current];
}




//////////////////////////////////////////////////////////////////////////////
