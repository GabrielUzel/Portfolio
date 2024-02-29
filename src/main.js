const linkedinImage = document.getElementById("linkedin");
const instagramImage = document.getElementById("instagram");
const githubImage = document.getElementById("github");

linkedinImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageOnMouseOver(linkedinImage);
});
instagramImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageOnMouseOver(instagramImage);
});
githubImage.addEventListener("mouseover", (event) => {
    event.preventDefault();
    imageOnMouseOver(githubImage);
});

linkedinImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageOnMouseOut(linkedinImage);
});
instagramImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageOnMouseOut(instagramImage);
});
githubImage.addEventListener("mouseout", (event) => {
    event.preventDefault();
    imageOnMouseOut(githubImage);
});

function imageOnMouseOver(img) {
    if(img.id === "github") { img.src = "./assets/img/github-icon-activated.svg"; }
    else if(img.id === "linkedin") { img.src = "./assets/img/linkedin-icon-activated.svg"; }
    else { img.src = "./assets/img/instagram-icon-activated.svg"; }
}

function imageOnMouseOut(img) {
    if(img.id === "github") { img.src = "./assets/img/github-icon-deactivated.svg"; }
    else if(img.id === "linkedin") { img.src = "./assets/img/linkedin-icon-deactivated.svg"; }
    else { img.src = "./assets/img/instagram-icon-deactivated.svg"; }
}