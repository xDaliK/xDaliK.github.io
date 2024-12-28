// JS By Daniel Lizarte Cáceres

console.log("Hello Console Experience!");

//Take elements from document


var button_experience= document.querySelector("button#button_back");
var button_prodat = document.getElementById("button_prodat");
var button_appia = document.getElementById("button_appia");
var button_fisco = document.getElementById("button_fisco");

var div_prodat = document.getElementById("div_prodat");
var div_appia = document.getElementById("div_appia");
var div_fisco = document.getElementById("div_fisco");

var zIndexUpdate = 1;

var divs = [div_prodat, div_appia, div_fisco]; // Añade todos tus divs a esta lista

function hideAllDivsExcept(div) {
    divs.forEach(function(d) {
        if (d !== div && d.style.display !== 'none') {
            d.style.display = 'none';
        }
    });
}

window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

if (button_experience) {
    button_experience.addEventListener("click", function () {
        goTo('index_logged.html');
    });
}

if (button_prodat) {
    button_prodat.addEventListener("click", function () {
        if (div_prodat.style.display === 'none' || div_prodat.style.display === '') {
            hideAllDivsExcept(div_prodat);
            div_prodat.style.display = 'block'; // Muestra el div
            div_prodat.style.zIndex = zIndexUpdate++;
        } else {
            div_prodat.style.display = 'none'; // Oculta el div
        }
    });
}

if (button_appia) {
    button_appia.addEventListener("click", function () {
        if (div_appia.style.display === 'none' || div_appia.style.display === '') {
            hideAllDivsExcept(div_appia);
            div_appia.style.display = 'block'; // Muestra el div
            div_appia.style.zIndex = zIndexUpdate++;
        } else {
            div_appia.style.display = 'none'; // Oculta el div
        }
    });
}

if(button_fisco){
    button_fisco.addEventListener("click", function () {
        if (div_fisco.style.display === 'none' || div_fisco.style.display === '') {
            hideAllDivsExcept(div_fisco);
            div_fisco.style.display = 'block'; // Muestra el div
            div_fisco.style.zIndex = zIndexUpdate++;
        } else {
            div_fisco.style.display = 'none'; // Oculta el div
        }
    });

}
