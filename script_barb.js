// Example formatting function
var frame = 0
var now = new Date();
function formatDate(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}-${day}`;
}

if (formatDate(now) == "08-20") {
    console.log("birthday")

}
else
{
    console.log("not birthday")
}

function click() {

}

window.onload = function() {
    const barb = document.getElementById("barb");
}

window.onclick = function() {
    var barb_opacity = 0;
    barb.style.opacity = barb_opacity;
    
    let fadeIn = setInterval(function() {
        if (barb_opacity < 1) {
            barb_opacity += 0.05; // Adjust the increment for the desired speed
            barb.style.opacity = barb_opacity;
        } else {
            clearInterval(fadeIn); // Stop the interval when the fade-in is complete
        }
    }, 50); // Adjust the interval timing for smoother animation
}

window.onmousemove = function() {
    var audiob = document.getElementById("bgm2");
    if (!audiob.playing) {
        audiob.play().catch(error => {
            console.log("(-_-') " + error);
        });
    }
}