function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'mmanha.png'
        document.body.style.background = '#80cafb'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'ttarde.png'
        document.body.style.background = '#fcb119'
    } else {
        //BOA NOITE!
        img.src = 'nnoite.png'
        document.body.style.background = '#1366c3'
    }
}