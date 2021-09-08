function contar(){

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){

        res.innerHTML = 'Impossível contar'
        alert('Está faltando dados')

    } else{
       
        res.innerHTML = 'Contando...'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
          alert('Passo inválido! Considerando passo 1')

          p = 1
        }
        if(i < f){
            //Contagem Crescente
            for (let c = i; c <= f; c += p){

                res.innerHTML += ` ${c} &#128073;`
            }
            
        }else{
            //Contagem Decrescente
            for (let c = i; c >= f; c-= p){

                res.innerHTML += ` ${c} &#128073`
            }
        }

        res.innerHTML += ' &#127937;'



    }

}