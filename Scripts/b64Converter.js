function ConvertAllData_toB64(Data) {
    ouii();
    oldContent = document.getElementById('main').innerHTML
        // document.getElementById('main').style = 'background-image: url("./Style/Images/Epic_sax_guy.gif"); background-size: 50vw; background-repeat: no-repeat; background-position: top;'
    document.getElementById('main').innerHTML = ''
    document.getElementById('main').classList.value = 'epic'
    new Audio('./Style/Images/Epic.notAnImage.mp3').play()
    
    setTimeout(() => {
        // document.getElementById('main').style = ''
        document.getElementById('main').innerHTML = oldContent
        document.getElementById('main').classList.value = ''
    }, 6500)
}

// la fonction du bonheur
function ouii() {
    console.log("ouiiii");
}