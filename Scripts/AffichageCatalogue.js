function ajouterImageCatalogue() {
    catalog.forEach(element => {
        ajouterTagImageCatalogue(element);
    });
}

function ajouterTagImageCatalogue(element) {
    let divInner = document.createElement("div");
    divInner.classList.add("articleBox");
    articleModel = document.getElementsByClassName('articleBox')[0];
    // Couper les descriptions trop longues
    var desc = element.description
    if (desc.length >= 50) {
        desc = desc.substring(0, 45) + ' ...'
    }

    divInner.innerHTML = String(articleModel.innerHTML)
        .replace(/{{nom}}/g, element.name)
        .replace(/{{prix}}/g, element.price)
        .replace(/{{src}}/g, element.image)
        .replace(/{{desc}}/g, desc);
    let grandDiv = $("#articleInsert");
    grandDiv.append(divInner);
}

ajouterImageCatalogue();