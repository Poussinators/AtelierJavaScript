    var catalogue =[]
    var panier=[]
    catalog.forEach(element => {
        catalogue.push(element);
    });
    console.log(catalogue);
    console.log(panier);

    function AjouterArticle(nom,image,quant,prix){
        console.log(nom, image, quant, prix);
        panier.push([nom,image,quant,prix]);
        console.log(panier);
        AfficherArticlePanier(nom,image,quant,prix);
    }
    
    function AfficherArticlePanier(nom,image,quant,prix) {
        var divInner = document.createElement("div");
        divInner.classList.add("articleBoxPanier");
        articlePanierModel = document.getElementsByClassName('articleBoxPanier')[0];
        console.log()
        var prixtotal = quant * prix;
        console.log(prixtotal)
        divInner.innerHTML = String(articlePanierModel.innerHTML)
            .replaceAll('{{nom}}', nom)
            .replaceAll('{{prixTotal}}', prixtotal)
            .replaceAll('{{quant}}', quant)
            .replaceAll('{{src}}', image)
        let grandDiv = $("#panierInsert");
        grandDiv.append(divInner);
    }