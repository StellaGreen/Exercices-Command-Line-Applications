const readlineSync = require('readline-sync')
const chalk = require('chalk')



// ---- PAS BESOIN DE LIRE CE CODE, IL EST PAS BON, J'AI PAS TROUVÉ COMMENT FAIRE J'ATTENDS LA CORRECTION POUR COMPRENDRE ----- //

const nb = readlineSync.question('Devine mon chiffre entre 0 et 100, à ton avis ? ')

if (nb === 63){
        console.log(chalk.green('Bravos !'))
        }
    if(nb !== 63){
        if (nb >= 64){
        console.log(chalk.red('Nombre trop grand...'))
        }
    
        if (nb <= 62){
        console.log(chalk.red('Nombre trop petit...'))
        } 
        }
