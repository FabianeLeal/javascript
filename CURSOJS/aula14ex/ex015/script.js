function contar(){
    let ini = document.getElementById('txti')  
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
         }
        }   else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`}
        }
        res.innerHTML += `\u{1f3c1}`
        
    } 
 
    
}














/*function contar() {
    var ini = document.getElementById('ini')  
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    var in = Number(in.value)
    var fim = Number(fim.value)
    var c = in 

}*/