const readlineSync = require('readline-sync')
//j'appelle ma fonction readlineSync
const chalk = require('chalk')
//et chalk pour donner plus de couleurs

let choix = ['Europe', 'USA', 'Corée du sud', 'Nepal']
//le choix des pays avec différents age de majorité

let index = readlineSync.keyInSelect(choix, 'Où devez-vous voter ? ')//choisir avec 1, 2, 3, 4 ou 5 d'où l'on vient
const userName = chalk.yellow(readlineSync.question(chalk.yellow('\nPuis-je avoir ton prénom ? ')))//2eme question
    const lastName = chalk.yellowBright(readlineSync.question(chalk.yellowBright('\nPourrais-je avoir ton nom de famille ? ')))//3eme question
    const ageStr = readlineSync.question(chalk.blueBright('\nPourrais-je avoir ton âge ? '))//4eme question
    const age = Number(ageStr)

        // Si notre str n'est pas un nombre
        if (isNaN(ageStr)){
          console.log(chalk.red(`\nSorry, ${ageStr} is not a number`))
          process.exit(1)
      }

switch (index) {
  case 0:   //Europe
    if (age >= 18) {
        console.log(chalk.green(`\n${userName} ${lastName}, vous êtes majeur en Europe, vous pouvez voter.\n`))
        } else {
            console.log(chalk.red(`\nDésolé, ${userName} ${lastName}, vous êtes mineur en Europe, vous ne pouvez pas voter.\n`))
        }
    break
  case 1:   //USA
    if (age >= 21) {
        console.log(chalk.green(`\n${userName} ${lastName}, vous êtes majeur aux USA, vous pouvez voter.\n`))
        } else {
            console.log(chalk.red(`\nDésolé, ${userName} ${lastName}, vous êtes mineur aux USA, vous ne pouvez pas voter.\n`))
        }
    break
  case 2:   //Corée du sud
    if (age >= 19) {
        console.log(chalk.green(`\n${userName} ${lastName}, vous êtes majeur en Corée du sud, vous pouvez voter.\n`))
        } else {
            console.log(chalk.red(`\nDésolé, ${userName} ${lastName}, vous êtes mineur Corée du sud, vous ne pouvez pas voter.\n`))
        }
    break
  case 3:   //Nepal
    if (age >= 16) {
        console.log(chalk.green(`\n${userName} ${lastName}, vous êtes majeur au Népal, vous pouvez voter.\n`))
        } else {
            console.log(chalk.red(`\nDésolé, ${userName} ${lastName}, vous êtes mineur au Népal, vous ne pouvez pas voter.\n`))
        }
    break
  default:
        console.log(chalk.red(`\nJe n'ai pas compris votre demande, veuillez réitérer.\n`))
        break
}
