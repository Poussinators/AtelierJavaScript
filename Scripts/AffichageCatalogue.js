function ajouterImageCatalogue() {
    catalog.forEach(element => {
        ajouterTagImageCatalogue(element);
    });
}

function ajouterTagImageCatalogue(element) {
    let divInner = document.createElement("div");
    divInner.classList.add("articleBox");
    articleModel = document.getElementsByClassName('articleBox')[0]
    divInner.innerHTML = String(articleModel.innerHTML)
        .replaceAll('{{nom}}', element.name)
        .replaceAll('{{prix}}', element.price)
        .replaceAll('{{src}}', element.image)
        .replaceAll('{{desc}}', element.description)
    let grandDiv = $("#articleInsert");
    grandDiv.append(divInner);
}

ajouterImageCatalogue();