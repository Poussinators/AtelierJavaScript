import catalog from "Data/Catalogue1"

function ajouterImageCatalogue() {
    let i = 0
    catalog.forEach(ajouterTagImageCatalogue())
    i++
}

function ajouterTagImageCatalogue() {
    let divImage = document.getElementById("boutiqueContainer")
    let sousDivImage = document.createElement("div")
    sousDivImage.classList.add("articleBox")
    let tagImg = document.createElement("img")
    tagImg.src = catalog[i].image
    tagImg.alt = catalog[i].description
    let divDescriptionImage = document.createElement("div")
    divDescriptionImage.classList.add("articleText")
    let titreImage = document.createTextNode(catalog[i].name)
    divImage.appendChild(sousDivImage)
    sousDivImage.appendChild(tagImg)
    sousDivImage.appendChild(divDescriptionImage)
    divDescriptionImage.appendChild(titreImage)
}
