const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'bankdb',
    port: 5432

})

client.connect( (err, db) => {
    if(err) {
        console.log(`❌ Error in Connectivity`)
        return
    }
    console.log(`✅ Connected Successfully`)
})

// const connect = async () => await client.connect()
// connect()
