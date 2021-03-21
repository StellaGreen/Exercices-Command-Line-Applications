const chalk = require('chalk')
//et chalk pour donner plus de couleurs

let nb = Number(process.argv[2])

if(!isNaN(nb)){
    console.log(chalk.red(`\nusage: node sayMyName.js name\n`))
    process.exit(1)
}

if(process.argv.length >= 4 ){
//si il y a plus de 4 arguments envoie un message d'erreur et sort du module
    console.log(chalk.red(`\nreturn just your first name please.\n`))
    process.exit(1)
}

// si rien n'est marqué au dela de l'argument 2 nous sortons du programe
if (process.argv.length != 3) {
    console.log(chalk.red(`\nusage: node sayMyName.js name\n`))
    process.exit(1)
    }


//je demande a ce que le 3 ieme argument soit le prenom
const name = process.argv[2]
console.log(chalk.green(`\nMy name is ${name}.\n`))