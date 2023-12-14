import { useState } from 'react'
import styles from './balance.module.css'

export function Balance() {

    const [bal, setBal] = useState(0)

    const onBalance = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value

        console.log(`acId: ${acId}`)

        fetch(`http://localhost:3001/balance/${acId}`)
        .then(res => res.json())
        .then(json => setBal(json.bal))
    }

    return(
        <div className={ styles.balanceContent }>
            <h1>Balance: ₹{ bal }</h1>
            <form onSubmit={ onBalance }>
                <input type='number' placeholder="Account Id" name='acId' />
                <input type='submit' value="Get Balance" />
            </form>
        </div>
    )
}