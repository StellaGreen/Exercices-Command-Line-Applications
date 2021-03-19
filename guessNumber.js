const readlineSync = require('readline-sync')
const chalk = require('chalk')



const nb = Number(readlineSync.question('Vous êtes le maître du jeux, choisissez un nombre entre 0 et 100 ? '))

if( nb > 100){
    console.log(chalk.red(`Tout nombre au dessus de 100 n'est pas admis dans le jeu, veuillez relancer le programme.`))
    process.exit(1)
}

let notfound = true

while (notfound){
    let input = Number(readlineSync.question('Devine mon chiffre entre 0 et 100, à ton avis ? '))

if (input === nb){
    console.log(chalk.green('Bravo!'))
    notfound = false
} else {
    console.log(chalk.red(input > nb ? 'Nombre trop grand' : 'Nombre trop petit'))
}

}

