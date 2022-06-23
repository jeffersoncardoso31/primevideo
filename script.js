


var entrarCategoria = document.querySelector("#idCat");
var sairCategoria = document.querySelector(".filmesRecomendados");


entrarCategoria.addEventListener("mouseover", function(){
    var menuCategoria = document.querySelector(".containerCategorias");
    menuCategoria.classList.remove("displayCategoria");
    var banner = document.querySelector(".displayBanner");
    banner.style.display = "none";
});

sairCategoria.addEventListener("mouseover", function(){
    var menuCategoria2 = document.querySelector(".containerCategorias");
    menuCategoria2.classList.add("displayCategoria");
    var banner2 = document.querySelector(".displayBanner");
    banner2.style.display = "block";
});

let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function(){
    nextImagem();
}, 5000);

function nextImagem(){
    count++;
    if(count>10){
    count = 1;
}
    document.getElementById("slide"+count).checked = true;
}