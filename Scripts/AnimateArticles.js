// Faire apparaitre les trucs pour mettre dans le panier.

var elements = document.getElementsByClassName("articleBox");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', (event) => {

        // let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        // let img = articlePicture.getElementsByTagName('IMG')[0]
        // let box = articlePicture.getElementsByTagName('DIV')[0]

        // img.style.width = '150px';
        // $("img").animate({ width: "150px" });
        // $("#box").animate({height: "100px"});
        // reduce150px(img, parseInt(img.style.width.replace('px', '')))
        // box.style.width = '150px';
        // $("div").animate({ width: "150px" });

        let articlePicture = $(event.target).children('.articlePicture')

        let img = articlePicture.children('img')
        let box = articlePicture.children('div')

        img.animate({ width: "150px" });
        box.animate({ width: "150px" });

    }, false);
}



for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', (event) => {

        // let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        // let img = articlePicture.getElementsByTagName('IMG')[0]
        // let box = articlePicture.getElementsByTagName('DIV')[0]

        // img.style.width = '300px';
        // box.style.width = '0px';

        let articlePicture = $(event.target).children('.articlePicture')

        let img = articlePicture.children('img')
        let box = articlePicture.children('div')

        img.animate({ width: "300px" });
        box.animate({ width: "0px" });

    }, false);
}

// Resize le titre de la banière en fonction de la taille de l'écran.

function resizeHeaderFontSize() {
    var percent = window.innerWidth / 1920
        // console.log(percent)
    document.getElementsByTagName('HEADER')[0].getElementsByTagName('H1')[0].style = 'font-size: ' + percent + 'em;'
}

window.addEventListener('resize', () => { resizeHeaderFontSize() })

resizeHeaderFontSize()

console.warn('L\'erreur qui dit "GET http://127.0.0.1:5501/%7B%7Bsrc%7D%7D 404 (Not Found)", c\'est normal tkt')