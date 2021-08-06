
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML= `Agora são ${hora}:${min} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/dia.png'
        document.body.style.background = '#c0c760e5'

    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#c58d43'

    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#19486e'
    }
}