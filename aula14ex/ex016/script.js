function contar(){

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){

        alert('Está faltando dados')

    } else{
       
        res.innerHTML = 'Contando...'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p){

            res.innerHTML += ` ${c} &#128073;`
        }

        res.innerHTML += ' &#127937;'

    }

}