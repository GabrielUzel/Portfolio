function imageOnMouseover(img) {
    if(img.id === "github") { img.src = "./public/assets/img/github-icon-activated.svg"; }
    else if(img.id === "linkedin") { img.src = "./public/assets/img/linkedin-icon-activated.svg"; }
    else { img.src = "./public/assets/img/instagram-icon-activated.svg"; }
}

function imageOnMouseOut(img) {
    if(img.id === "github") { img.src = "./public/assets/img/github-icon-deactivated.svg"; }
    else if(img.id === "linkedin") { img.src = "./public/assets/img/linkedin-icon-deactivated.svg"; }
    else { img.src = "./public/assets/img/instagram-icon-deactivated.svg"; }
}