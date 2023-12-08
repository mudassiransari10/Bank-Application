const ip = (msg) => new Promise( (resolve, reject) => {
    rl.question(`\n 👉 ${msg} `, (ch) => {
        resolve(ch)
    })
})


// const connect = async () => await client.connect()
// connect()

// client.query(`select balance from account where ac_id = $1`, [srcId], (err, res) => {
    //     const srcbalance = parseFloat(res.rows[0].balance)
        
    //     client.query(`select balance from account where ac_id = $1`, [destId], (err, res) => {
    //         const destbalance = parseFloat(res.rows[0].balance)

    //         scrUpdatedBalance = srcbalance - amount
    //         destUpdatedBalance = destbalance + amount

    //         client.query(`update account set balance = $1 where ac_id = $2`, [scrUpdatedBalance, acId], (err, res) => {
    //             if(err) console.log(`\n ❌ Sorry, There may be some problem`)
    //             else console.log(`\n ✅ Amount ₹${amount} Debited Successfully`)
    //         })

    //         client.query(`update account set balance = $1 where ac_id = $2`, [destUpdatedBalance, acId], (err, res) => {
    //             if(err) console.log(`\n ❌ Sorry, There may be some problem`)
    //             else console.log(`\n ✅ Amount ₹${amount} Credited Successfully`)
    //         })
    
    //     })
    // })