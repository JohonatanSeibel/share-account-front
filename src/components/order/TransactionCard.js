import styles from './TransactionCard.module.css'
import { BsFillTrashFill} from 'react-icons/bs'

function TransactionCard({transaction, id, handleRemove}){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.transaction_card}>
        <h4>{transaction.description}</h4>
            <p>
                <span>Value: </span> R${transaction.value}
            </p>
            {transaction.transactionType ? (
            <p>
                <span>Transaction Type: </span> {transaction.transactionType}
            </p>) : ('')}
            {transaction.operationType ? (
            <p>
                <span>Operation Type: </span> {transaction.operationType}
            </p>) : ('')}
            {transaction.valueType ? (
            <p>
                <span>Value Type: </span> {transaction.valueType}
            </p>) : ('')}
            <div className={styles.transaction_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )
}

export default TransactionCard