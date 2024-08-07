// JS By Daniel Lizarte Cáceres

console.log("Hello Console Resume!");

//Take elements from document


var button_resume= document.querySelector("button#button_back");


window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

if (button_resume) {
    button_resume.addEventListener("click", function () {
        goTo('index_logged.html');
    });
}

