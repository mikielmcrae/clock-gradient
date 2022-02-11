
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock () {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/ 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();




   


function changeSky(){
    let today = new Date();
    let hours = today.getHours()
    let seconds = today.getSeconds();
    let minutes = today.getMinutes();

    function setRGB(red, green, blue) {
       
        
        let r = parseInt(seconds) * red;
            // if (seconds > 30) {
            //     r = parseInt(seconds%20) * red;
            // }
        let g = parseInt(minutes) * green;
        let b = parseInt(hours) * blue;

        let r2 = parseInt(hours) * red;
        let g2 = parseInt(minutes) * green;
        let b2 = parseInt(seconds) * blue;
        
        document.body.style.background = 'linear-gradient(to right, rgb(' + r + ',' + g + ',' + b + '), rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        
    }
    if (hours <= 8) {
        setRGB(2, 3, 2);
    }

    else if (hours <= 16) {
        setRGB(1, 4, 1);
    } 

    else if (hours <= 23) {
        setRGB(4, 1, 3);
    } 

    else {
        setRGB(3, 2, 1);
    }

   
    setTimeout(changeSky, 1000);
}

changeSky();

