const readlineSync = require('readline-sync')
//j'appelle ma fonction readlineSync 

    const userName = readlineSync.question('Puis-je avoir ton prénom ? ')//1er question
    const lastName = readlineSync.question('Pourrais-je avoir ton nom de famille ? ')//2eme question
    const ageStr = readlineSync.question('Pourrais-je avoir ton âge ? ')//3eme question
    const age = Number(ageStr)

    if (age < 18) {//si l'age est inferieur a 18 affiche ça
    console.log(`Désolé, ${userName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
    } else {//si non c'est bon affiche ça
    console.log(`${userName} ${lastName}, vous êtes majeur, vous pouvez voter.`)
    }
