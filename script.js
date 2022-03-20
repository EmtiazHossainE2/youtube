var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.left = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.left == "-250px"){
        sideNav.style.left = "0";
    }
    else{
        sideNav.style.left = "-250px";
    }
}