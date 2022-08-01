function tabuada() {
  var numero = document.getElementById('txtn')
  var tab = document.getElementById('txtt')
    if(numero.value.length == 0) {
        alert('[ERRO] Por favor, Digite um número!')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}