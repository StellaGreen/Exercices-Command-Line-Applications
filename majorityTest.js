const readlineSync = require('readline-sync')
//j'appelle ma fonction readlineSync 
const chalk = require('chalk')
//et chalk pour donner plus de couleurs

    const userName = chalk.yellow(readlineSync.question(chalk.yellow('\nPuis-je avoir ton prénom ? ')))//1er question
    const lastName = chalk.yellow(readlineSync.question(chalk.yellow('\nPourrais-je avoir ton nom de famille ? ')))//2eme question
    const ageStr = readlineSync.question(chalk.cyan('\nPourrais-je avoir ton âge ? '))//3eme question
    const age = Number(ageStr)//passe la string ageStr en Number
    const Major = 18

    // Si notre age n'est pas un nombre
    if (isNaN(ageStr)){
        console.log(chalk.red(`\nSorry, ${ageStr} is not a number`))
        process.exit(1)
    }

    if (age < Major) {//si l'age est inferieur a 18 affiche ça
    console.log(chalk.red(`\nDésolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.\n`))

    } else {//si non c'est bon affiche ça
    console.log(chalk.green(`\n${userName} ${lastName}, vous êtes majeur, vous pouvez voter.\n`))
    }
