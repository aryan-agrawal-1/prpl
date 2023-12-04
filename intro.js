

function first(){
    document.getElementById("introLine").innerHTML = "to";
    setTimeout(second, 500);
};

function second(){
    document.getElementById("introLine").innerHTML = "be";
    setTimeout(thrid, 500);
};

function thrid(){
    document.getElementById("introLine").innerHTML = "BOLD";
    document.getElementById("introLine").style.fontSize = "500px";
    document.getElementById("background").style.backgroundImage = "url('./Images/welcomeBackground.png')";
    setTimeout(movePage, 2000);
};

function movePage(){
    document.getElementById("background").style.backgroundColor = "#121212";
    document.getElementById("background").style.backgroundImage = 'url("images/background.png")';
    document.getElementById("background").style.backgroundRepeat = 'no-repeat';
    document.getElementById("background").style.backgroundSize = '100% 100%';
    document.getElementById("background").style.backgroundAttachment = 'fixed';
    document.getElementById("background").style.display = 'block';
    document.getElementById("background").style.height = '100%';
    document.getElementById("introLine").style.display = "none";
    document.getElementById("html").style.scrollBehavior = "smooth";
    document.getElementById("html").style.overflowY = "scroll";
    document.getElementById("html").style.scrollSnapType = "y mandatory";
    document.getElementById("background").style.backgroundColor = "#121212";
    document.getElementById("content").style.display = "block";
};


setTimeout(first, 1000);
