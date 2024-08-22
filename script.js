var songtoggle = true;
var lighttoggle = true;

window.onload = function() {
    if (localStorage.getItem('light') != 'undefined') {
        lighttoggle = localStorage.getItem('light')
        console.log("starting: " + lighttoggle);
    }
    else
    {
        lighttoggle = 'lightgreen'
    }
    if (localStorage.getItem('music') != 'undefined') {
        songtoggle = localStorage.getItem('music')
        console.log("starting: " + songtoggle);
    }
    else
    {
        songtoggle = true
    }
}

window.onloadstart = function() {
    lightcheck(false)
    bgmcheck(false)
}

window.onload = function() {
    lightcheck(false)
}

function lightcheck(open) {
    var root = document.documentElement;
    var lbutton = document.getElementById("lbutton");
    lighttoggle = !lighttoggle;
    if (open = true) {
        clickplay()
    }
    if (open = true) {
        localStorage.setItem('light', lighttoggle);
    }
    if (lighttoggle) {
        console.log("-w-");
        lbutton.src = "nolight.svg";
        root.style.setProperty('--lightmode', 'rgb(51, 91, 51)');
    } else {
        console.log("0-0");
        lbutton.src = "light.svg";
        root.style.setProperty('--lightmode', 'lightgreen');
        
    }
}

function bgmcheck() {
    mbutton = document.getElementById("mbutton");
    mbutton.classList.remove("boingable");
    var audio = document.getElementById("bgm");
    songtoggle = !songtoggle; // Toggles the value (true -> false or false -> true)
    clickplay()
    if (songtoggle) {
        console.log("yay tunes :)");
        audio.play().catch(error => {
            console.log("(-_-') " + error);
        });
        mbutton.src = "Play.svg";
    } else {
        console.log("no tunes :(");
        audio.pause();
        mbutton.src = "NoPlay.svg";
    }
    localStorage.setItem('music', songtoggle);
    mbutton.classList.add("boingable");
}

function boingreset() {
    // put this reset for all elements
}


function clickplay() {
    clicker = document.getElementById("click");
    clicker.pause()
    clicker.currentTime = 0
    clicker.play()
    }