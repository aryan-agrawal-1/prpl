

function openModule(id){
    document.getElementById(id + 'img').style.height = "20vh";
    document.getElementById(id + 'img').style.width = "32vh";
    document.getElementById(id + 'img').style.marginTop = "8.2vh";
    document.getElementById(id + 'img').style.opacity = "1";
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "p").style.display = "block";
    document.getElementById(id + "heading").style.display = "block";
    document.getElementById(id + "Border").style.borderRadius = "3.8vh";
    document.getElementById(id + "Border").style.borderWidth = "5px 5px 5px 5px";
    window.location.href = "#" + id;
}

