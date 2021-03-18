const readlineSync = require('readline-sync')

let note = 0    //note final

//question 1
let choix1 = ['langage','compilateur']  //je demande de choisir
let index1 = readlineSync.keyInSelect(choix1, 'Question 1: Le C++ est un: ')
switch (index1) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
//question 2
let choix2 = ['vrais','faux']   //je demande de choisir
let index2 = readlineSync.keyInSelect(choix2, 'Question 2: TypeScript est une évolution de Javascript: ')
switch (index2) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
//question 3
let choix3 = ['vrais','faux'] //je demande de choisir
let index3 = readlineSync.keyInSelect(choix3, 'Question 3: Lire les cours avant de faire les exercices est inutile: ')
switch (index3) {
    case 0:
        console.log(`\nLa réponse 1 n'était pas la réponse attendu`)
    break
    case 1:
        note ++     //j'incremente la note de 1 pour la bonne réponse
        console.log(`\nLa réponse 2 était bien attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
//question 4
let choix4 = ['vrais','faux']   //je demande de choisir
let index4 = readlineSync.keyInSelect(choix4, 'Question 4: react.js a été developpé par Google: ')
switch (index4) {
    case 0:
        console.log(`\nLa réponse 1 n'était pas la réponse attendu`)
    break
    case 1:
        note ++     //j'incremente la note de 1 pour la bonne réponse
        console.log(`\nLa réponse 2 était bien attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
//question 5
let choix5 = ['vrais','faux']   //je demande de choisir
let index5 = readlineSync.keyInSelect(choix5, 'Question 5: Ethereum est une blockchain publique: ')
switch (index5) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
console.log(`\nVous avez eus la note de ${note}/5\n`)
if(note === 5){
    console.log('Bravo!\n')
}else {
    console.log(`Relis les cours de Sofiane, fais toi des notes et bois un verre d'eau`)
}