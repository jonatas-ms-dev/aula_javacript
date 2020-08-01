//TODO: Aula01 introdução ao javaScript

// let nome = "Jonatas Melo";
// let idade = 29;
// let frase = "Japão é o pior time do mundo!";

// console.log(frase.replace("Japão", "Argentina"));
// console.log(frase.toLocaleLowerCase());
// console.log(frase.toLocaleUpperCase());
// console.log(frase.toLowerCase());

//TODO: Aula02 Array e Dicionário

//TAG: Array
// let lista = ['maça', 'pera', 'uva'];
// console.log(lista);
// console.log(lista[1])
// lista.push('laranja')
// console.log(lista)
// lista.pop()
// console.log(lista)
// console.log(lista.length)
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.join(' '))

//TAG: Dicionário
// let fruta = {nome:"maça", cor:"verde"};
// console.log(fruta.nome)
// console.log(fruta.cor)
// let frutas = [
//   { nome: "maça", cor: "verde" },
//   { nome: "uva", cor: "roxo" },
// ];
// console.log(frutas);
// console.log(frutas[0])
// console.log(frutas[0].nome)

//TODO: Aula03 Condicionais, Laços, e Date

//TAG: Condicionais
// let idade = 18;
// if (idade >= 18) {
//   console.log("maior de idade");
// } else {
//   console.log("menor de idade");
// }
// const idade = 17;
// const consultarIdade = (idade) => {
//   return idade >= 18 ? "maior de idade" : "menor de idade";
// };
// console.log(consultarIdade(idade));

//TAG: Laços
// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count += 1;
// }
// const contar = (max) => {
//   for (let i = 0; i < max; i++) {
//     console.log(i);
//   }
// };
// console.log(contar(5));

//TAG: Date
// const data = new Date();
// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data.getDay());

//TODO: Aula04 Desenvolva páginas com JavaScript

//TAG: Function
// const somar = (numero1, numero2) => {
//   return numero1 + numero2;
// };
//
// const trocarFrase = (frase, novaFrase) => {
//   return frase.replace(frase, novaFrase);
// };
//
// const validarIdade = (idade) => {
//   return idade >= 18;
// };
//
// console.log(validarIdade(17) ? "maior de idade" : "menor de idade");
// console.log(somar(5, 10));
// console.log(trocarFrase("Vai Japão", "Vai Brasil"));

//TAG: Manipulando elementos da página
const agradecer = () => {
  document.getElementById("agradecer").innerText = "Obrigado por Acionar";
};
const redirecionar = () => {
  window.open("https://google.com/");
};
const trocar = (elemento) => {
  elemento.innerText = "Troquei o texto";
};
const voltar = (elemento) => {
  elemento.innerText = "Trocar";
};
const carregado = () => {
  alert("O Site foi Carregado");
};
const funcao = (elemento) => {
  console.log(elemento.value);
};
