function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = String(data.getHours()).padStart(2,0)
    var minuto = String(data.getMinutes()).padStart(2,0)
    var segundos = String(data.getSeconds()).padStart(2,0)
    window.setInterval('carregar()', 1000) /* Faz a pagina carregar sem precisar ficar atualizando */

    msg.innerHTML = `${hora}:${minuto}:${segundos}`

    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        frase.innerHTML = 'Tenha uma ótima Manhã'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../imagens/tarde.png'
        document.body.style.background = '#b9846f'
        frase.innerHTML = 'Tenha uma ótima Tarde'
    } else {
        img.src = '../imagens/noite.png'
        document.body.style.background = '#0c0c2c'
        frase.innerHTML = 'Tenha uma ótima Noite'
    }
}
