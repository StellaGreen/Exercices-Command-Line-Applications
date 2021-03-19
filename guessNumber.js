const readlineSync = require('readline-sync')
const chalk = require('chalk')


// Premiere question pour joueur 1
const nb = Number(readlineSync.question('Vous êtes le maître du jeux, choisissez un nombre entre 0 et 100 ? '))

if( nb > 100){
// Deuxieme question pour joueur 2 dans la boucle qui ne fini que si il a trouvé la reponse de joueur 1
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

