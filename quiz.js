const readlineSync = require('readline-sync')
const chalk = require('chalk')

let note = 0    //note final

//question 1
let choix1 = ['langage','compilateur']  //je demande de choisir
let index1 = readlineSync.keyInSelect(choix1, chalk.bgBlack.yellow('Question 1: Le C++ est un: '))
switch (index1) {
    case 0:
        console.log(chalk.green(`\nLa réponse 1 était bien attendu`))
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(chalk.red(`\nLa réponse 2 n'était pas la réponse attendu`))
    break
    default:
    console.log(chalk.red(`\nRéponse incomprise`))
}

//question 2
let choix2 = ['vrais','faux']   //je demande de choisir
let index2 = readlineSync.keyInSelect(choix2, chalk.bgBlack.yellow('Question 2: TypeScript est une évolution de Javascript: '))
switch (index2) {
    case 0:
        console.log(chalk.green(`\nLa réponse 1 était bien attendu`))
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(chalk.red(`\nLa réponse 2 n'était pas la réponse attendu`))
    break
    default:
    console.log(chalk.red(`\nRéponse incomprise`))
}

//question 3
let choix3 = ['vrais','faux'] //je demande de choisir
let index3 = readlineSync.keyInSelect(choix3, chalk.bgBlack.yellow('Question 3: Lire les cours avant de faire les exercices est inutile: '))
switch (index3) {
    case 0:
        console.log(chalk.red(`\nLa réponse 1 n'était pas la réponse attendu`))
    break
    case 1:
        note ++     //j'incremente la note de 1 pour la bonne réponse
        console.log(chalk.green(`\nLa réponse 2 était bien attendu`))
    break
    default:
    console.log((chalk.red`\nRéponse incomprise`))
}

//question 4
let choix4 = ['vrais','faux']   //je demande de choisir
let index4 = readlineSync.keyInSelect(choix4, chalk.bgBlack.yellow('Question 4: react.js a été developpé par Google: '))
switch (index4) {
    case 0:
        console.log(chalk.red(`\nLa réponse 1 n'était pas la réponse attendu`))
    break
    case 1:
        note ++     //j'incremente la note de 1 pour la bonne réponse
        console.log(chalk.green(`\nLa réponse 2 était bien attendu`))
    break
    default:
    console.log(chalk.red(`\nRéponse incomprise`))
}

//question 5
let choix5 = ['vrais','faux']   //je demande de choisir
let index5 = readlineSync.keyInSelect(choix5, chalk.bgBlack.yellow('Question 5: Ethereum est une blockchain publique: '))
switch (index5) {
    case 0:
        console.log(chalk.green(`\nLa réponse 1 était bien attendu`))
    note ++     //j'incremente la note de 1 pour la bonne réponse
    break
    case 1:
        console.log(chalk.red(`\nLa réponse 2 n'était pas la réponse attendu`))
    break
    default:
    console.log(chalk.red(`\nRéponse incomprise`))
}
console.log(chalk.yellowBright(`\nVous avez eus la note de ${note}/5\n`))
if(note === 5){
    console.log(chalk.bgBlack.green('\t Bravo ! \t\n'))
}
if(note === 4){
    console.log(chalk.bgBlack.yellowBright('Dommage, pas loin !\n'))
}
if(note < 4) {
    console.log(chalk.bgBlack.red(` Relis les cours de Sofiane, prends des notes et bois un verre d'eau \n`))
}