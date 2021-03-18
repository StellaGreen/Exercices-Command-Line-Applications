const readlineSync = require('readline-sync')
//j'appelle ma fonction readlineSync

let choix = ['Europe', 'USA', 'Corée du sud', 'Nepal']
//le choix des pays avec différents age de majorité

let index = readlineSync.keyInSelect(choix, 'Please select your choice: ')//choisir avec 1, 2, 3, 4 ou 5 d'où l'on vient
const userName = readlineSync.question('Puis-je avoir ton prénom ? ')//2eme question
    const lastName = readlineSync.question('Pourrais-je avoir ton nom de famille ? ')//3eme question
    const ageStr = readlineSync.question('Pourrais-je avoir ton âge ? ')//4eme question
    const age = Number(ageStr)

switch (index) {
  case 0:   //Europe
    if (age >= 18) {
        console.log(`${userName} ${lastName}, vous êtes majeur, vous pouvez voter.`)
        } else {
            console.log(`Désolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
        }
    break
  case 1:   //USA
    if (age >= 21) {
        console.log(`${userName} ${lastName}, vous êtes majeur, vous pouvez voter.`)
        } else {
            console.log(`Désolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
        }
    break
  case 2:   //Corée du sud
    if (age >= 19) {
        console.log(`${userName} ${lastName}, vous êtes majeur, vous pouvez voter.`)
        } else {
            console.log(`Désolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
        }
    break
  case 3:   //Nepal
    if (age >= 16) {
        console.log(`${userName} ${lastName}, vous êtes majeur, vous pouvez voter.`)
        } else {
            console.log(`Désolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
        }
    break
  default:
        console/log(`Je n'ai pas compris votre demande, veuillez réitérer`)
}
