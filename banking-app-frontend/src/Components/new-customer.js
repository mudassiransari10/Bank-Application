import styles from './new-customer.module.css'

export function NewCustomer() {

    const onNewCustomer = e => {
        e.preventDefault()

        const acId = e.target.acId.value
        const acName = e.target.acName.value
        const balance = e.target.balance.value

        console.log(`acId: ${acId}, Name: ${acName}, Balance: ${balance}`)

        fetch('http://localhost:3001/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ acId, acName, balance })
        }).then( res => res.json() )
        .then( json => console.log(json) )
    }

    return (
        <div className={styles.customerContent}>
            <h1>This is New Customer</h1>
            <form onSubmit={ onNewCustomer }>
                <input type='number' placeholder="Account Id" name='acId' />
                <input type='text' placeholder="Account Name" name='acName' />
                <input type='number' placeholder="Initial Balance" name='balance' />
                <input type='submit' value="Create New Account" />
            </form>
        </div>
    )
}