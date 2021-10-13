var nome = "Marcos Fonseca";
var idade = 31;
//alert(nome + " tem " + idade + " anos") ;

var numero1 = 10;
var numero2 = 30;
//alert(numero1+numero2); 

var numeroString1 = "10";
var numeroString2 = "30";
//alert(numeroString1+numeroString2); 

console.log(nome + " tem " + idade + " anos") ;
console.log(numero1+numero2); 
console.log(numeroString1+numeroString2); 

var frase1 = "Japão é o melhor time do mundo";
console.log(frase1);
console.log(frase1.replace("Japão", "Brasil"));

console.log(frase1.toUpperCase());
console.log(frase1.toLowerCase());


var listaFrutas = ["Maça", "Uva", "Banana"]; //Array de string
console.log(listaFrutas[0].toUpperCase());//Imprime console posição 0 em caixa alta
console.log(listaFrutas[1]+ " é usada para fabricação de vinhos.");//Imprime posição 1 com concatenação de texto
console.log(listaFrutas[2]);//Imprime somente posição 2
console.log(listaFrutas.length);//Imprime tamanho da lista
listaFrutas.push("Limão");//Adiciona um novo item, aumento posteriormente o tamanho da lista
console.log(listaFrutas[3]);//Imprime posição recem inserida
console.log(listaFrutas.length);//Imprime tamanho da lista
console.log(listaFrutas);//Imprime a lista - ordem original de inserção
console.log(listaFrutas.reverse());//Imprime a lista em ordem inversa (daqui pra baixo tudo fica invertido)
console.log(listaFrutas.toString())//Imprime lista em forma de string e não como objeto array
console.log(listaFrutas[1].toString());//Imprime posição 1 da lista
console.log(listaFrutas[1].toString()[2]);//Imprime o caractere 2 da posição da lista
console.log(listaFrutas.join(" - "));//Imprime a lista em formato string com um traço como separador


//Dicionários:
var frutas = [{nome: "Maça", cor: "Vermelho"}];
console.log(frutas);
frutas.push({nome: "Limão", cor: "Verde"});
console.log(frutas);

var minhaIdade = 18;

if(idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

/*var respostaPerguntaIdade = prompt("Qual sua idade?");
if(respostaPerguntaIdade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}*/

var count = 0;
while(count < 5){
    console.log(count + " é o valor da variável x");
    count++;
}

for(var x = 0; x < 5; x++){
    console.log("O valor da variável x é: "+ x);
}

console.log("-----------------------");
console.log("Imprimindo via laço de repetição a lista de frutas...");
for(f=0;f < listaFrutas.length; f++){
    console.log(listaFrutas[f]);
}
console.log("-----------------------");

var data = new Date();
console.log(data);
console.log(data.getMonth()+1);

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10));