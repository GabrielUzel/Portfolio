import 'core-js/stable'
import 'regenerator-runtime/runtime'

const imageLinkedin = document.getElementById("linkedin");
const imageInstagram = document.getElementById("instagram");
const imageGithub = document.getElementById("github");

imageGithub.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageHoverIn(imageGithub);
});
imageLinkedin.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageHoverIn(imageLinkedin);
});
imageInstagram.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageHoverIn(imageInstagram);
});

imageGithub.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageHoverOut(imageGithub);
});
imageLinkedin.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageHoverOut(imageLinkedin);
});
imageInstagram.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageHoverOut(imageInstagram);
});

function imageHoverIn(img) {
    if(img.id === "linkedin") { img.src = "./assets/img/linkedin-icon-activated.svg"; } 
    else if(img.id === "instagram") { img.src = "./assets/img/instagram-icon-activated.svg"; } 
    else { img.src = "./assets/img/github-icon-activated.svg"; }
}

function imageHoverOut(img) {
    if(img.id === "linkedin") { img.src = "./assets/img/linkedin-icon-deactivated.svg"; } 
    else if(img.id === "instagram") { img.src = "./assets/img/instagram-icon-deactivated.svg"; } 
    else { img.src = "./assets/img/github-icon-deactivated.svg"; }
} 