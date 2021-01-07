// var Globale
var panier = new Set();

function AjouterArticle(ev, nom, image, quant, prix) {

    // si le bouton est désactivé.
    if (ev.target.classList.value.includes('articleAjouterButtonDisabled')) {
        return
    }
    ev.target.parentElement.parentElement.children[0].children[1].value = 0;
    activateAjouterBouton(ev) // de AnimateArticle.js

    // Verif de la limite de 9 articles
    AjoutPanier(nom, quant, image, prix);

    ViderAffichage();
    AfficherArticlesPanier();

}

function AjoutPanier(nom, quant, image, prix) {
    for (var articlePanier of panier) {
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
    panier.add({ "name": nom, "image": image, "quantite": quant, "prix": prix });
    for (var articlePanier of panier) {
        if (articlePanier.quantite > 9) {
            articlePanier.quantite = 9;
        }
    }
}

function AfficherArticlesPanier() {
    var prixPanier = 0;
    for (var article of panier) {
        var grandDiv = $("#panierInsert");
        // Création de la div
        var divInner = document.createElement("div");
        divInner.classList.add("articleBoxPanier");

        articlePanierModel = $('.articleBoxPanier')[0];

        // Affectation des variables
        var prixtotal = article.quantite * article.prix;
        prixPanier += prixtotal;
        prixtotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(prixtotal);
        // Modification du texte
        divInner.innerHTML = String(articlePanierModel.innerHTML)
            // .replaceAll('{{nom}}', article.name)
            // .replaceAll('{{prixTotal}}', prixtotal)
            // .replaceAll('{{quant}}', article.quantite)
            // .replaceAll('{{src}}', article.image)
            .replace(/{{nom}}/g, article.name)
            .replace(/{{prixTotal}}/g, prixtotal)
            .replace(/{{src}}/g, article.image)
            .replace(/{{quant}}/g, article.quantite);
        // Affichage
        grandDiv.append(divInner);
    }
    $("#prixPanier")[0].innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(prixPanier);
}

function SupprimerArticle(button) {
    var divLibelle = button.parentElement.parentElement.parentElement.querySelector(".panierNom");
    var LibelleArticle = divLibelle.innerHTML;
    for (var articlePanier of panier) {
        if (articlePanier.name == LibelleArticle) {
            panier.delete(articlePanier);
            continue;
        }
    }

    ViderAffichage();

    AfficherArticlesPanier();
}

function ViderAffichage() {
    var panierDiv = document.getElementById('panierInsert');
    while (panierDiv.firstChild) {
        panierDiv.removeChild(panierDiv.firstChild);
    }
}

function ViderPanier() {
    panier = new Set();
    ViderAffichage();
    $("#prixPanier")[0].innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(0);
}
// la fonction du bonheur
function ouii() {
    console.log("ouiiii");
}