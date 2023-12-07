console.log('Hello')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ip = new Promise((resolve, reject) => {
    rl.question(`\n 👉Enter your choice: `, (ch) => {
        resolve(ch)
        rl.close()
    })
})
// ip().then( dt => console.log(`You entered ${dt}`))
const ch = async () => {
    const dt = await ip
    console.log(`You entered ${dt}`)
}

ch()

console.log(`\n ---------> executed`)