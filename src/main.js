function imageOnMouseOver(img) {
    if(img.id === "github") { img.src = "./img/github-icon-activated.svg"; }
    else if(img.id === "linkedin") { img.src = "./img/linkedin-icon-activated.svg"; }
    else { img.src = "./img/instagram-icon-activated.svg"; }
}

function imageOnMouseOut(img) {
    if(img.id === "github") { img.src = "./img/github-icon-deactivated.svg"; }
    else if(img.id === "linkedin") { img.src = "./img/linkedin-icon-deactivated.svg"; }
    else { img.src = "./img/instagram-icon-deactivated.svg"; }
}