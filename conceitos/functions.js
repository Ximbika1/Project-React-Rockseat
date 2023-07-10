// const sum = function(number1, number2) {
//   total = number1 + number2
//   return total
// }
// function fazerSuco(fruta1, fruta2){
//   return 'suco de : ' + fruta1 + ' e ' + fruta2
// }
// const copo = fazerSuco('banana', 'maça')
// console.log(copo)

// console.log(sum(2, 3))
// let number1 = 32093
// let number2 = 11111
// console.log("A soma é = "+sum(number1,number2))

// // function scope
// let subject = 'create video'
// function createThink(subject){
//   subject = 'study'
//   return subject
// }
// console.log(subject)
// console.log(createThink(subject))

// // function hoisting
// sayMyName()
// function sayMyName() {
//   console.log('Pedro')
// }

// // arrow function
// const sayMyName = () => {
//   console.log('Pedro')
// }
// sayMyName()

// // callback function (chama uma funcao que chama outra funcao)
// function sayMyName(name) {
//   console.log(name)
//   name()
// }
// sayMyName('Pedro')
// sayMyName({name: 'Pedro'})
// sayMyName(
//   () => {
//     console.log('estou em uma callback')
//   }
// )

// // function() constructor

// function Person(name) {
//   this.name = name
//   this.walk = function() {
//     return this.name + ' andando'
//   }
// }
// const mayk = new Person('Mayk')
// const joao = new Person('Joao')
// console.log(mayk)
// console.log(joao)
// console.log(joao.walk())

//// Prototype

// let number = 349.498923
// console.log(number.toFixed(2).replace('.',','))
// let word = 'programar é muito'
// console.log(word.toLowerCase().toUpperCase())
// let phrase = 'Eu quero viver o Amor'
// let myArray = phrase.split(' ') // dividi palavra em vetores
// console.log(myArray)
// let phraseWithUnderscore = myArray.join('_') // junta todas os vetores
// console.log(phraseWithUnderscore)
// let frase = "Eu quero viver o amor"
// console.log(frase.includes('Amor'))
let myArray = new Array(10)
myArray[0] = 'a'
myArray[1] = 'b'
myArray[2] = 'c'
myArray.push('alo')
myArray.pop( )
console.log(myArray.length)
