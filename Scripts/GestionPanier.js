    var catalogue =[]
    var panier=[]
    catalog.forEach(element => {
        catalogue.push(element);
    });
    console.log(catalogue);
    console.log(panier);

    function AjouterArticle(nom,image,quant,prix){
        debugger;
        console.log(nom, image, quant, prix);
        ContrainteAjout(nom,quant,image,prix);
        ViderPanier();
        for (var index in panier) {
            articlePanier = panier[index];
            // s'il y a déja un objet
            AfficherArticlePanier(articlePanier);
        }
    }
    
    function ContrainteAjout(nom,quant,image,prix){
        for (var index in panier) {
            articlePanier = panier[index];
            // s'il y a déja un objet
            if(articlePanier.name == nom){
                console.log("trouvé, article " + nom + " qut : " + quant);
                articlePanier.quantite += quant;         
                if(articlePanier.quantite >9){
                    articlePanier.quantite =9;
                }       
                console.log(articlePanier.quantite);
                return;
            }
        }
        console.log(panier);
        panier.push({"name":nom,"image":image,"quantite": quant,"prix":prix});
        for (var index in panier) {
            articlePanier = panier[index];
            // s'il y a déja un objet
            if(articlePanier.quantite >9){
                articlePanier.quantite =9;
            }
        }
        console.log(panier);
    }

    function AfficherArticlePanier(article) {
        var divInner = document.createElement("div");
        divInner.classList.add("articleBoxPanier");
        articlePanierModel = document.getElementsByClassName('articleBoxPanier')[0];
    
        var prixtotal = article.quant * article.prix;
        console.log(prixtotal)
        divInner.innerHTML = String(articlePanierModel.innerHTML)
            .replaceAll('{{nom}}', article.nom)
            .replaceAll('{{prixTotal}}', prixtotal)
            .replaceAll('{{quant}}', article.quant)
            .replaceAll('{{src}}', article.image)
        let grandDiv = $("#panierInsert");
        grandDiv.append(divInner);
    }

    function ViderPanier(){
        $('#panierInsert').innerHTML = '';
    }