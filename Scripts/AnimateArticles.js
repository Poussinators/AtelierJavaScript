var elements = document.getElementsByClassName("articleBox");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', (event) => {

        let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        let img = articlePicture.getElementsByTagName('img')[0]
        let box = articlePicture.getElementsByTagName('div')[0]

        img.style.width = '150px';
        // reduce150px(img, parseInt(img.style.width.replace('px', '')))
        box.style.width = '150px';

    }, false);
}



for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', (event) => {

        let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        let img = articlePicture.getElementsByTagName('img')[0]
        let box = articlePicture.getElementsByTagName('div')[0]

        img.style.width = '300px';
        box.style.width = '0px';

    }, false);
}