function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // CRIANÇA
                img.setAttribute('src', 'homem1.png')
            } else if (idade < 17) {
                // ADOLESCENTE
                img.setAttribute('src', 'homem2.png')
            } else if (idade < 35) {
                // JOVEM
                img.setAttribute('src', 'homem3.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'homem4.png')
            } else if (idade < 65) {
                // ADULTO 2
                img.setAttribute('src', 'homem5.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'homem6.png')
            }
        } else {
            var genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // CRIANÇA
                img.setAttribute('src', 'mulher1.png')
            } else if (idade < 17) {
                // ADOLESCENTE
                img.setAttribute('src', 'mulher2.png')
            } else if (idade < 35) {
                // JOVEM
                img.setAttribute('src', 'mulher3.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'mulher4.png')
            } else if (idade < 65) {
                // ADULTO 2
                img.setAttribute('src', 'mulher5.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'mulher6.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}
