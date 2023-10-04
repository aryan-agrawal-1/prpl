

function openModule(id){
    document.getElementById(id + 'img').style.height = "20vh";
    document.getElementById(id + 'img').style.width = "32vh";
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.height = "100vh";
    document.getElementById(id).style.width = "100vw";
    document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id + 'img').style.marginLeft = "37vh";
    document.getElementById(id + 'img').style.marginTop = "10vh";
    document.getElementById(id+"heading").style.display = "inline";
    document.getElementById(id+"heading").style.marginTop = "10vh";
    document.getElementById(id+"p").style.display = "inline";
    document.getElementById(id+"p").style.marginTop = "20vh";
    window.location.href = "#" + id;
}

