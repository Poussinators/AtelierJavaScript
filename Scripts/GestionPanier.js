    var catalogue =[]
    var panier=[]
    catalog.forEach(element => {
        catalogue.push(element);
    });
    console.log(catalogue);
    console.log(panier);

    function AjouterArticle(nom,image,quant,prix){
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
                articlePanier.quantite += quant;         
                if(articlePanier.quantite >9){
                    articlePanier.quantite =9;
                }       
                return;
            }
        }
        panier.push({"name":nom,"image":image,"quantite": quant,"prix":prix});
        for (var index in panier) {
            articlePanier = panier[index];
            // s'il y a déja un objet
            if(articlePanier.quantite >9){
                articlePanier.quantite =9;
            }
        }
    }

    function AfficherArticlePanier(article) {
        var divInner = document.createElement("div");
        divInner.classList.add("articleBoxPanier");
        articlePanierModel = document.getElementsByClassName('articleBoxPanier')[0];
    
        var prixtotal = article.quantite * article.prix;
        console.log(prixtotal)
        divInner.innerHTML = String(articlePanierModel.innerHTML)
            .replaceAll('{{nom}}', article.name)
            .replaceAll('{{prixTotal}}', prixtotal)
            .replaceAll('{{quant}}', article.quantite)
            .replaceAll('{{src}}', article.image)
        let grandDiv = $("#panierInsert");
        grandDiv.append(divInner);
    }

    function ViderPanier(){
        debugger;
        console.log($('#panierInsert').children());
        for(var index in $('#panierInsert').children()){
            var child = $('#panierInsert')[index];
            console.log(child);
            //child.remove();
        }
    }