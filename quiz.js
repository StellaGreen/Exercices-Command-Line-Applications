const readlineSync = require('readline-sync')
/*
Ecrivez un qcm de 5 questions. Le joueur devra répondre aux questions en entrant le nombre correspondant à la bonne réponse. 
A la fin du qcm vous lui donnerez sa note qui correspondra au nombre de bonnes réponses sur les 5 questions. 
Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: langage => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les exercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendue
2: Faux
*/
let note = 0

let choix1 = ['langage','compilateur']
let index1 = readlineSync.keyInSelect(choix1, 'Question 1: Le C++ est un: ')
switch (index1) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
let choix2 = ['vrais','faux']
let index2 = readlineSync.keyInSelect(choix2, 'Question 2: TypeScript est une évolution de Javascript: ')
switch (index2) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
let choix3 = ['vrais','faux']
let index3 = readlineSync.keyInSelect(choix3, 'Question 3: Lire les cours avant de faire les exercices est inutile: ')
switch (index3) {
    case 0:
        console.log(`\nLa réponse 1 n'était pas la réponse attendu`)
    break
    case 1:
        note ++
        console.log(`\nLa réponse 2 était bien attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
let choix4 = ['vrais','faux']
let index4 = readlineSync.keyInSelect(choix4, 'Question 4: react.js a été developpé par Google: ')
switch (index4) {
    case 0:
        console.log(`\nLa réponse 1 n'était pas la réponse attendu`)
    break
    case 1:
        note ++
        console.log(`\nLa réponse 2 était bien attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
let choix5 = ['vrais','faux']
let index5 = readlineSync.keyInSelect(choix5, 'Question 5: Ethereum est une blockchain publique: ')
switch (index5) {
    case 0:
        console.log(`\nLa réponse 1 était bien attendu`)
    note ++
    break
    case 1:
        console.log(`\nLa réponse 2 n'était pas la réponse attendu`)
    break
    default:
    console.log(`\nRéponse incomprise`)
}
console.log(`\nVous avez eus la note de ${note}/5\n`)