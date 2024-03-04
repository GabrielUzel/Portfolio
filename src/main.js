const jsImage = document.getElementById("js");
const htmlImage = document.getElementById("html");
const cssImage = document.getElementById("css");
const expressImage = document.getElementById("express");
const mongoImage = document.getElementById("mongo");

jsImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    jsImage.src = "./assets/img/skillsIcons/jsIcon.png";
});
jsImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    jsImage.src = "./assets/img/skillsIcons/jsIcon_noBackground.png";
});

htmlImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    htmlImage.src = "./assets/img/skillsIcons/htmlIcon.png";
});
htmlImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    htmlImage.src = "./assets/img/skillsIcons/htmlIcon_noBackground.png";
});

cssImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    cssImage.src = "./assets/img/skillsIcons/cssIcon.png";
});
cssImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    cssImage.src = "./assets/img/skillsIcons/cssIcon_noBackground.png";
});

expressImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    expressImage.src = "./assets/img/skillsIcons/expressIcon.png";
});
expressImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    expressImage.src = "./assets/img/skillsIcons/expressIcon_noBackground.png";
});

mongoImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    mongoImage.src = "./assets/img/skillsIcons/mongoIcon.png";
});
mongoImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    mongoImage.src = "./assets/img/skillsIcons/mongoIcon_noBackground.png";
});
