// JS By Daniel Lizarte Cáceres

console.log("Hello Console Aboutme!");

//Take elements from document

var button_aboutme= document.querySelector("button#button_back");


var learning_shortcut = document.getElementById("learning_shortcut");
var projects_shortcut = document.getElementById("projects_shortcut");
var experience_shortcut = document.getElementById("experience_shortcut");
var resume_shortcut = document.getElementById("resume_shortcut")

window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

if (button_aboutme) {
    button_aboutme.addEventListener("click", function () {
        goTo('logged.html');
    });
}


if (learning_shortcut) {
    learning_shortcut.addEventListener("click", function () {
        goTo('learning.html');
    });
}

if (projects_shortcut) {
    projects_shortcut.addEventListener("click", function () {
        goTo('projects.html');
    });
}

if (experience_shortcut) {
    experience_shortcut.addEventListener("click", function () {
        goTo('experience.html');
    });
}

if (resume_shortcut) {
    resume_shortcut.addEventListener("click", function () {
        goTo('resume.html');
    });
}



