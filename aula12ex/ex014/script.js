function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = './/img/manha.png'
        document.body.style.background = '#99a770'
        texto.innerHTML = `Tenha um bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        img.src = './/img/tarde.png'
        document.body.style.background = '#f3a23d'
        texto.innerHTML = `Tenha uma boa tarde!`
    } else {
        img.src = './/img/noite.png'
        document.body.style.background = '#3b3f42'
        texto.innerHTML = `Tenha uma boa noite!`
    }
}
