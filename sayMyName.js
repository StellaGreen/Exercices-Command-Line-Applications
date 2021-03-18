if(process.argv.length >= 4 ){
//si il y a plus de 4 arguments envoie un message d'erreur et sort du module
    console.log(`return just your first name please.`)
    process.exit(1)
}
//je demande a ce que le 3 ieme argument soit le prenom
const name = process.argv[2]
console.log(`My name is ${name}.`)