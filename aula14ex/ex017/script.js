function contar(){

    let txtnum = document.getElementById('txtnum')
    let lista = document.getElementById('lista')

    let n = Number(txtnum.value)
        
        for (let c = 1; c <= 10; c++){

            let option = document.createElement('option')

            option.text = ` ${n} x ${c} = ${n*c}`

            lista.appendChild(option)
        }
}