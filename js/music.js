var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
icon.onclick = function() {
    if (mySong.paused) {
        mySong.play();
        icon.src = "../assets/img/stop.svg";
    } else {
        mySong.pause();
        icon.src = "../assets/img/play.svg";
    }
}
mySong.volume = 0.1;