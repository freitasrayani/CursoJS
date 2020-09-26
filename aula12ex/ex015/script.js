function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let result = document.querySelector('div#result')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança 
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')

            } else {
                //Idosa
                img.setAttribute('src', 'idosa.png')

            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        result.appendChild(img)
    }
}