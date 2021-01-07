function Rechercher() {
    let input = document.getElementById('recherche').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('articleBox');

    for (i = 1; i < x.length; i++) {

        const article = x[i];
        const nomArticle = article.getElementsByClassName('articleNom')[0].innerHTML;
        if (!nomArticle.toLowerCase().includes(input)) {
            article.style.display="none";
        }
        else {
            article.style.display="";
        }
    }

}

Rechercher();
