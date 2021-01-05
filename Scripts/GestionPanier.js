// var Globale
var panier = []

function AjouterArticle(ev, nom, image, quant, prix) {

    // si le bouton est désactivé.
    if (ev.target.classList.value.includes('articleAjouterButtonDisabled')) {
        return
    }

    // Verif de la limite de 9 articles
    AjoutPanier(nom, quant, image, prix);

    ViderPanier();
    // Pour chaque article on l'afficheche dans le panier
    for (var index in panier) {
        articlePanier = panier[index];
        AfficherArticlePanier(articlePanier);
    }

}

function AjoutPanier(nom, quant, image, prix) {
    var existeDeja = false;
    for (var index in panier) {
        articlePanier = panier[index];
        // en cas d'article déjà existant on change juste la quantité (<=9) et on stop la ftc 
        if (articlePanier.name == nom) {
            articlePanier.quantite += quant;
            if (articlePanier.quantite > 9) {
                articlePanier.quantite = 9;
            }
            return;
        }
    }
    // S'il l'article n'existe pas on le crée
    panier.push({ "name": nom, "image": image, "quantite": quant, "prix": prix });
    for (var index in panier) {
        articlePanier = panier[index];
        if (articlePanier.quantite > 9) {
            articlePanier.quantite = 9;
        }
    }
}

function AfficherArticlePanier(article) {
    var grandDiv = $("#panierInsert");
    // Création de la div
    var divInner = document.createElement("div");
    divInner.classList.add("articleBoxPanier");

    articlePanierModel = document.getElementsByClassName('articleBoxPanier')[0];

    // Affectation des variables
    var prixtotal = article.quantite * article.prix;
    articlePanierModel.value = prixtotal
    articlePanierModel.titre = article.name;

    // Modification du texte
    divInner.innerHTML = String(articlePanierModel.innerHTML)
        .replaceAll('{{nom}}', article.name)
        .replaceAll('{{prixTotal}}', prixtotal)
        .replaceAll('{{quant}}', article.quantite)
        .replaceAll('{{src}}', article.image)
        // Affichage
    grandDiv.append(divInner);
    divInner.addEventListener("onclick", ouii())
}

function ViderPanier() {
    var panierDiv = document.getElementById('panierInsert');
    while (panierDiv.firstChild) {
        panierDiv.removeChild(panierDiv.firstChild);
    }
}

function ouii() {
    console.log("ouiiii");
}