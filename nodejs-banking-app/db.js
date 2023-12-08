const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'bankdb',
    port: 5432

})

client.connect(err => {
    if(err) {
        console.log(`\n ❌ Error in Connectivity`)
        return
    }
    console.log(`\n ✅ Connected Successfully`)
})



const createNewAccount = ({acId, acName, balance}) => {
    client.query(`insert into account values ($1, $2, $3)`, [acId, acName, balance], (err, res)=> {
        if(err) console.log(`\n ❌ Problem in Creating a Customer`)
        else {
            console.log(`\n ✅ Create New Customer Successfully`)
        }
    })
}

const withdraw = ({acId, amount}) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if(err) {
            console.log(`\n ❌ Sorry, There may be some problem in Withdrawing`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            const updatedBalance = balance - amount

            client.query(`update account set balance = $1 where ac_id = $2`, [updatedBalance, acId], (err, res) => {
                if(err) console.log(`\n ❌ Insufficient Balance`)
                else console.log(`\n ✅ Amount ₹${amount} Withdrawn Successfully`)
            })
        }
    })
}

const deposit = ({acId, amount}) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if(err) {
            console.log(`\n ❌ Sorry, There may be some problem in Depositing`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            const updatedBalance = balance + amount

            client.query(`update account set balance = $1 where ac_id = $2`, [updatedBalance, acId], (err, res) => {
                if(err) console.log(`\n ❌ Sorry, There may be some problem`)
                else console.log(`\n ✅ Amount ₹${amount} Deposited Successfully`)
            })
        }
    })
}

const transfer = ({srcId, destId, amount}) => {
    withdraw({ acId: srcId, amount})
    deposit({acId: destId, amount})
    
}

const balance = ({acId}) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if(err) {
            console.log(`\n ❌ There may be some problem in fetching`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            console.log(`\n 💰 Your account balance is ₹${balance}`)
        }
    })
}


module.exports = {
    createNewAccount,
    deposit,
    withdraw,
    transfer,
    balance
}