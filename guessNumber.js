const readlineSync = require('readline-sync')
const chalk = require('chalk')
let note = 0

// Premiere question pour joueur 1
const nb = Number(readlineSync.question(chalk.bgBlack.blueBright('\nVous êtes le maître du jeux, choisissez un nombre entre 0 et 100 ?  ')))

// Si notre str n'est pas un nombre
if (isNaN(nb)){
    console.log(`This is not un number, retry`)
    process.exit(1)
}

if( nb > 100){
// Deuxieme question pour joueur 2 dans la boucle qui ne fini que si il a trouvé la reponse de joueur 1
    console.log(chalk.red(`\nTout nombre au dessus de 100 n'est pas admis dans le jeu, veuillez relancer le programme.`))
    process.exit(1)
}
let notfound = true
while (notfound){
    let input = Number(readlineSync.question(chalk.bgBlack.yellow('\nDevine mon chiffre entre 0 et 100, à ton avis ?  ')))
if (input === nb){
    console.log(chalk.bgGreen.black(`\n Bravo! Tu as trouvé en ${note} coups ! \n`))
    notfound = false
} else {
    console.log(chalk.bgRed.black(input > nb ? '\n Nombre trop grand ' : '\n Nombre trop petit '))
    note ++
}
}

