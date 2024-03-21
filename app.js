let minute = 0;
let second = 0;
let milisecond = 0;
let interval ; 

let getmin = document.getElementById("min")
let getmsec = document.getElementById("sec")
let getmilisec = document.getElementById("milisec")

function start() {
    interval = setInterval(function () {
        milisecond++;
        getmilisec.innerHTML = milisecond;
        if (milisecond >= 100) {
            second++;
            getmsec.innerHTML = second;
            milisecond = 0;
        } else if (second >= 60){
            minute++;
            getmin.innerHTML = minute;
            second = 0;
        }
    }, 10);
let btndisab = document.getElementById("startbtn").disabled = true;

}

function stop() {
    clearInterval(interval)
    let btndisab = document.getElementById("startbtn").disabled = false;
}

function reset() {
let minute = 0;
let second = 0;
let milisecond = 0;
getmilisec.innerHTML = milisecond;
getmsec.innerHTML = second;
getmin.innerHTML = minute;
}