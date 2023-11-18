

function first(){
    document.getElementById("tagline").innerHTML = "to";
    setTimeout(second, 500);
};

function second(){
    document.getElementById("tagline").innerHTML = "be";
    setTimeout(thrid, 500);
};

function thrid(){
    document.getElementById("tagline").innerHTML = "BOLD";
    document.getElementById("tagline").style.fontSize = "500px";
    document.getElementById("tagline").style.fontWeight = "900";
    document.getElementById("background").style.backgroundImage = "url('./Images/welcomeBackground.png')";
    setTimeout(movePage, 2000);
};

function movePage(){
    window.location.replace("main.html");
};


setTimeout(first, 1000);
