






/*function buscarCep(){
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input + '/json/');
    ajax.send();

    ajax.onload= function(){
    //document.getElementById('texto').innerHTML = this.responseText;

    //TRANSFORMEI O TEXTO EM OBJETO
    let obj = JSON.parse(this.responseText);
    // PEGUEI OS VALORES QUE EU QUERIA
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;
    document.getElementById('texto').innerHTML = "Logradouro:" + logradouro + "<br> Cidade:" + cidade + "<br> Estado:" + estado;
}

}
*/


/*//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6","1.4","1.0"]
}

// CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);
//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto;
//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto);
//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[2]);
*/


/*//COMANDO BÁSICO PARA PEGAR A DATA
let data = new Date();
//console.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
//console.log(ano);
//PEGAR O MÊS ATUAL COM NÚMEROS DE 0 JANEIRO ATÉ 11 DEZEMBRO
let mes = data.getMonth();
//console.log(mes);

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro","fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","outubro","Novembro","Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];
//console.log(mesEscrito);

//PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
//console.log(diaMes);
//PEGAR O DIA DA SEMANA
let diaSemana = data.getDay();
//console.log(diaSemana);

const diasDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
//console.log(diaSemanaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
//console.log(hora);
//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
//console.log(minutos);
//PEGAR SEGUNDOS - DE 0 A 59
let segundos = data.getSeconds();
//console.log(segundos);
//PEGAR OS MILISEGUNDOS - DE 0 A 999
let milisegundos = data.getMilliseconds();
//console.log(milisegundos);
//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA  / MÊS / ANO
let dataBR = data.toLocaleString('pt-BR',{timeStyle: 'short'});
//console.log(dataBR);
//PEGAR OS VALORES SEPARADOS E CONCATENAR (OPÇÃO MAIS DIFICIL)
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();
function addZero(x){
    return x<10 ? "0" + x : '' + x 
};

let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
//console.log(dataPadraoBr);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2023,8,31);

if(hoje>vencimento){
  //  console.log("Sua conta está vencida!")
} else {
   // console.log("Ainda não venceu, tudo certo.")
}
// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2023,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
//A seguir, formula para arrendondar mlisegundos para dias..
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");
*/

/*class Carro{
    constructor(valor1, valor2,valor3){
        this.marca= valor1
        this.modelo=valor2
        this.ano= valor3
    }
    buzina(){
        return this.modelo+" buzinou: Biiiiiiiiiii";    }
}

const uno = new Carro("Fiat","Uno", 2001);
const gol = new Carro("Volkswagen","Gol", 2013)
console.log(uno.buzina());
console.log(gol.buzina());

*/

/*function ativarContagem(){
   // document.getElementById('tempo').innerHTML = "começou a contar!";
    //Ativa a função apenas 1 vez quando der o tempo especificado
  //  tempo = setTimeout(function() {
   // document.getElementById('tempo').innerHTML = "Executou o setTimeout"
  //  }, 5000);
  tempo = setInterval(function(){
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) -1;
    if (soma===0){
        document.getElementById('tempo').innerHTML = "Tempo esgotado!";
        pararContagem()
    } else {
        document.getElementById('tempo').innerHTML = soma;
    }

  },1000);
}
function pararContagem(){
  clearInterval(tempo);
  //  document.getElementById('tempo').innerHTML = "Parou a contagem"
}
*/

/*
const carros = ["Gol","fusca","Brasília", "Del Rey","Chevete"];
var tamanho = carros.length;

for (let i= 0; i < tamanho; i++ ) {
    document.getElementById("teste").innerHTML += carros[i]+ "-";
}
*/
/*
var ano = new Date().getFullYear();

for (let i = ano; i >=1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" +i+"'>"+i+"</option>"
}
/*

exercicio walace 2
function estacoes(){
    let mesDoAno = document.getElementById("mesDoAno").value;
    let cs = ""
    mesDoAno = mesDoAno.toLowerCase();

    switch(mesDoAno){
        case "janeiro":
            cs = "verão"       
            break;
        case "fevereiro":
            cs = "verão"             
            break;    
        case "março":
            cs = "Verão ou Outono"        
            break;
        case "abril":
            cs = "Outono"    
            break;    
        case "maio":
            cs = "Outono"            
            break;
        case "junho":
            cs = "Outono ou Inverno"         
            break;         
        case "julho":
            cs = "Inverno"           
            break; 
        case "agosto":
            cs = "Inverno"           
            break;    
        case "setembro":
            cs = "Inverno ou Primavera" 
            break; 
        case "outubro":
            cs = "Primavera"        
            break;    
        case "novembro":
            cs = "Primavera"           
            break; 
        case "dezembro":
            cs = "Primavera ou Verão"
            break;                 

        default:
           cs = "Não é uma estação do ano"
           break; 
    }
    document.getElementById("teste").innerHTML = (cs)

}
*/
/*
exercicio walace passou3
function familia(){
    let parentesco = document.getElementById("parentesco").value;
    let grau = ""
    parentesco = parentesco.toLowerCase();
    
   
    switch(parentesco){
        case "herbert": case "fabiano": case "wesley":
           grau = "irmão"
            break;
        case "walace":case "bruno":case "beatriz":
            grau = "primo"
            break;    
        case "elvira":
            grau = "Mãe"
            break;            
        case "erick":
            grau = "Noivo"
            break;    
        case "marta": case "Edmilson":    
            grau = "Sogro(a)"
            break; 
        case "guilherme":
            grau = "Afilhado"
            break;        
        case "rayane":
            grau = "Cunhada"
            break;                 
        
        
        default:
            grau = "Não é parente"
            break;
    }

document.getElementById("teste").innerHTML = (grau)
}*/

/*var ano = new Date().getFullYear();

for (let i = 21021; i >=1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" +i+"'>"+i+"</option>"
}*/


/* 
exercicio que o walace passou
function estacoes(){
    let mesDoAno = document.getElementById("mesDoAno").value;
    mesDoAno = mesDoAno.toLowerCase();
    console.log(mesDoAno);

    switch(mesDoAno){
        case "janeiro":
            document.getElementById("teste").innerHTML = "Verão";
            break;
        case "fevereiro":
            document.getElementById("teste").innerHTML = "Verão";
            break;    
        case "março":
            document.getElementById("teste").innerHTML = "Verão ou Outono";
            break;
        case "abril":
            document.getElementById("teste").innerHTML = "Outono";
            break;    
        case "maio":
            document.getElementById("teste").innerHTML = "Outono";
            break;
        case "junho":
            document.getElementById("teste").innerHTML = "Outono ou Inverno";
            break;         
        case "julho":
            document.getElementById("teste").innerHTML = "Inverno";
            break; 
        case "agosto":
            document.getElementById("teste").innerHTML = "Inverno";
            break;    
        case "setembro":
            document.getElementById("teste").innerHTML = "Inverno ou Primavera";
            break; 
        case "outubro":
            document.getElementById("teste").innerHTML = "Primavera";
            break;    
        case "novembro":
            document.getElementById("teste").innerHTML = "Primavera";
            break; 
        case "dezembro":
            document.getElementById("teste").innerHTML = "Primavera ou Verão";
            break;                 

        default:
            document.getElementById("teste").innerHTML = "ISSO NÃO É UM MÊS DO ANO";
    }
}

*/
/*
function tradutor(){
    let diaDaSemana = document.getElementById("diaDaSemana").value;
    diaDaSemana = diaDaSemana.toLowerCase();
    console.log(diaDaSemana);

    switch(diaDaSemana){
        case "segunda":
            document.getElementById("teste").innerHTML = "Monday";
            break;
        case "segunda-feira":
            document.getElementById("teste").innerHTML = "Monday";
            break;    
        case "terça":
            document.getElementById("teste").innerHTML = "Tuesday";
            break;
        case "terça-feira":
            document.getElementById("teste").innerHTML = "Tuesday";
            break;    
        case "quarta":
            document.getElementById("teste").innerHTML = "Wednesday";
            break;
        case "quarta-feira":
            document.getElementById("teste").innerHTML = "Wednesday";
            break;         
        case "quinta":
            document.getElementById("teste").innerHTML = "Thursday";
            break; 
        case "quinta-feira":
            document.getElementById("teste").innerHTML = "Thursday";
            break;    
        case "sexta":
            document.getElementById("teste").innerHTML = "Friday";
            break; 
        case "sexta-feira":
            document.getElementById("teste").innerHTML = "Friday";
            break;    
        case "sábado":
            document.getElementById("teste").innerHTML = "Saturday";
            break; 
        case "Domingo":
            document.getElementById("teste").innerHTML = "Sunday";
            break;                 

        default:
            document.getElementById("teste").innerHTML = "iSSO NÃO É UM DIA DA SEMANA EM PORTUGUÊS";
    }
}

*/







/*function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch(dia){
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje é Terça";
            break;     
        case 3:
            document.getElementById("teste").innerHTML = "Hoje é Quarta";
            break; 
        case 4:
            document.getElementById("teste").innerHTML = "Hoje é Quinta";
            break; 
        case 5:
            document.getElementById("teste").innerHTML = "Hoje é Sexta";
            break; 
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é Sábado";
            break;                 

        default:
            document.getElementById("teste").innerHTML = "Não sei que dia é";
    }
}*/


/*function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color= "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color= "green";
    }
}*/


/*var hora = new Date().getHours();

if (hora<12) {
    alert("Bom dia");
} else if (hora < 18){
    alert('Boa tarde');
} else {
    alert("Boa noite");
}*/



/*function eventoClick(){
    //alert("Acionou um evento de click");
    document.body.style.backgroundColor = "yellow";
}
function eventoDblClick () {
   
    alert('Evento de clique duplo');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor="red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor="blue";
}

function adicionaTexto(){
    let p = document.getElementById("texto")
    p.append('O mouse moveu<br>')
}

function LimpaTexto(){
    document.getElementById("campoTexto").value= "";
}

function Mudou(){
    console.log('Mudou')
}
function teclaPressionada() {
    let input = document.getElementById('campoTexto').value;
    console.log('input')
}
*/

/*const carro = {
    marca: "ford",
    modelo:"ka",
    ano:2015,
    placa: "ABC-1234",
    buzina:function(){alert("Biiiiiiiiiiiii")},
    completo:function(){
        return "A marca é "+this.marca+ " e o modelo é: " +this.modelo;
    }
};

console.log(carro.completo());*/


/*function paraCelsius(valorFahrenheit){
        return(5/9)*(valorFahrenheit-32);
}
var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celcius");*/


/*function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDolar(real,cotacaoDolar) {
    return real*cotacaoDolar
}
var valorReal=7.89
var cotacao=5.08

var total=realParaDolar(valorReal,cotacao);
alert("o valor em real é R$: " +valorReal + " o valor em dólar U$ é: "  + total);*/



/*var idade, eleitor,resultado;
idade=71;
eleitor= (idade<18) ? "Não, eleitor" : "Sim, eleitor";
resultado = !(idade === 65 );
alert(resultado);*/
