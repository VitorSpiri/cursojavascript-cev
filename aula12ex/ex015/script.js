function verificar(){

    var data = new Date()
    ano = data.getFullYear()

    var ano_digit = document.getElementById('txtano')

    var res = document.querySelector('div#res')

    if(ano_digit.value.lenght == 0 || Number(ano_digit.value) > ano){
        alert('Verifique os dados e tente novamente')
    } else{
        
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(ano_digit.value)
        
        var genero 

        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'

                if (idade >= 0 && idade < 10){

                    img.setAttribute('src', 'imagens/foto-bebe-m.png')

                } else if (idade < 21){
                   
                    img.setAttribute('src', 'imagens/foto-jovem-m.png')


                }else if (idade < 60){

                    img.setAttribute('src' , 'imagens/foto-adulto-m.png')
                    
                } else{
                    
                    img.setAttribute('src' , 'imagens/foto-idoso-m.png')
                }

        } else if (sex[1].checked){
            genero = 'Mulher'

                if (idade >= 0 && idade < 10){
                
                   img.setAttribute('src' , 'imagens/foto-bebe-f.png') 

                } else if (idade < 21){
                    
                    img.setAttribute('src' , 'imagens/foto-jovem-f.png')

                }else if (idade < 60){
                    
                    img.setAttribute('src' , 'imagens/foto-adulto-f.png')

                } else{
                    
                    img.setAttribute('src' , 'imagens/foto-idoso-f.png')
                }
        }

        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos </br>`

        res.style.textAlign = 'center'

        res.appendChild(img)

    }


}

