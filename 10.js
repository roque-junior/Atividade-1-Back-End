//10
//Escreva um algoritmo que tenha como valores de entradas o nome
//e idade do usuário e imprima no terminal o nome, a idade e o ano
//de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
//em 2000”.
//OBS: Pegue o ano atual como base

var idade = 22
var nome = "pedro"
var ano = 2023
var nascimento = (ano - idade)

document.write (`Nome: ${nome}, Idade: ${idade}, Naceu em ${nascimento}`)