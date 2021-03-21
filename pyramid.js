const chalk = require('chalk')
//et chalk pour donner plus de couleurs

// Notre fonction ShowStars
const showStars = (nbBase, str, reverse) => {
    if (!reverse) {
//si la pyramide n'est pas renversé
    for (let i = 1; i <= nbBase; ++i) {
        console.log(chalk.blue(str.repeat(i)))
//fais la de plus en plus grande
    }
    } else {
//si non
    for (let i = nbBase; i >= 1; --i) {
//fais la de plus en plus petite
        console.log(chalk.yellow(str.repeat(i)))
    }
    }
} 
// si rien n'est marqué au dela de l'argument 4 nous sortons du programe
if (process.argv.length < 4) {
  console.log(chalk.bgBlack.red(`usage: node stars.js number symbol (-r)`))
  process.exit(1)
  }

//Verifier qu'il n'y a pas trop arguments passé à notre programme
    if (process.argv.length > 6) {
    console.log(chalk.bgBlack.red('usage: node stars.js number symbol (-r)'))
    process.exit(1)
    }


  // Verifier que l'argument passé à notre programme peut être converti en nombre
    if (isNaN(process.argv[2])) {
    console.log(chalk.bgBlack.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
    }

  // Nous somme OK, le premier argument est un nombre.
const nbStars = Number(process.argv[2])

  // La forme de notre pyramid serra donc str
const str = process.argv[3]

  //On choisi la fonction reverse en tappant -r dans le cinquième argument 
let reverse = process.argv[4]
process.argv[4] = '-r'

showStars(nbStars, str, reverse)