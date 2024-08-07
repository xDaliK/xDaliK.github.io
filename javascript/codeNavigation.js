// JS By Daniel Lizarte Cáceres

console.log("Hello Console Navigation!");

var icon_file_learning = document.querySelector("img#icon_file_learning");
var text_learning = document.querySelector("h3#text_learning");
var icon_file_project = document.querySelector("img#icon_file_project");
var text_project = document.querySelector("h3#text_project");
var icon_file_experience = document.querySelector("img#icon_file_experience");
var text_experience = document.querySelector("h3#text_experience");
var icon_file_resume = document.querySelector("img#icon_file_resume");
var text_resume= document.querySelector("h3#text_resume");
var icon_file_aboutme = document.querySelector("img#icon_file_aboutme");
var text_aboutme = document.querySelector("h3#text_aboutme");
var icon_file_contact = document.querySelector("img#icon_file_contact");
var text_contact= document.querySelector("h3#text_contact");




if (icon_file_learning) {
    icon_file_learning.addEventListener("click", function () {
        goTo('learning.html');
    });
}

if (text_learning) {
    text_learning.addEventListener("click", function () {
        goTo('learning.html');
    });
}

if (icon_file_project) {
    icon_file_project.addEventListener("click", function () {
        goTo('projects.html');
    });
}

if (text_project) {
    text_project.addEventListener("click", function () {
        goTo('projects.html');
    });
}

if (icon_file_experience) {
    icon_file_experience.addEventListener("click", function () {
        goTo('experience.html');
    });
}

if (text_experience) {
    text_experience.addEventListener("click", function () {
        goTo('experience.html');
    });
}

if (icon_file_resume) {
    icon_file_resume.addEventListener("click", function () {
        goTo('resume.html');
    });
}

if (text_resume) {
    text_resume.addEventListener("click", function () {
        goTo('resume.html');
    });
}

if (icon_file_aboutme) {
    icon_file_aboutme.addEventListener("click", function () {
        goTo('aboutme.html');
    });
}

if (text_aboutme) {
    text_aboutme.addEventListener("click", function () {
        goTo('aboutme.html');
    });
}

if (icon_file_contact) {
    icon_file_contact.addEventListener("click", function () {
        goTo('contact.html');
    });
}

if (text_contact) {
    text_contact.addEventListener("click", function () {
        goTo('contact.html');
    });
}

