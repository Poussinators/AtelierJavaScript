function ajouterImageCatalogue() {
    catalog.forEach(element => {
        ajouterTagImageCatalogue(element);
    });
}

function ajouterTagImageCatalogue(element) {
    let divInner = document.createElement("div");
    divInner.classList.add("articleBox");
    divInner.innerHTML = "<div class=\"articlePicture\">\n" +
                    "        <img src=\""+element.image+"\" alt=\""+element.name+"\">\n" +
                    "     </div>\n" +
                    "     <div class=\"articleText\">\n" +
                    "        <div class=\"articleTextTop\">\n" +
                    "           <div class=\"articleNom\">"+element.name+"</div>\n" +
                    "           <div class=\"articlePrix\">"+element.price+"</div>\n" +
                    "        </div>\n" +
                    "        <div class=\"articleTextBottom\">\n" +
                    "           <div class=\"articleDescription\">"+element.description+"</div>\n" +
                    "        </div>\n" +
                    "        </div>"
    let grandDiv = $("#boutiqueContainer");
    grandDiv.append(divInner);
}

ajouterImageCatalogue();
