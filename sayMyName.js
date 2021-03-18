if(process.argv.length >= 4 ){
    console.log(`return just your first name please.`)
    process.exit(1)
}

const name = process.argv[2]
console.log(`My name is ${name}.`)