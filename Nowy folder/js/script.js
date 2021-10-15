function playAudio() {
    var x = document.getElementById("myAudio");
    x.play();
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "flex";
}

function pauseAudio() {
    let a = document.getElementsByTagName("button");
    
    var x = document.getElementById("myAudio");
    x.pause();
    document.getElementById("button2").style.display = "none";
    document.getElementById("button1").style.display = "flex";
}
