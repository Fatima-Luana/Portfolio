function openMenu() {

    var x = document.getElementById("navegação");

    if(x.className === "navegação"){
        x.className += " menuJs";
        document.getElementById("icone_menu").innerHTML = "&#215;";
    }else {
        x.className = "navegação";
        document.getElementById("icone_menu").innerHTML = "&equiv;";
    }
}