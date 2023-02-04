import {BsFillTrashFill} from 'react-icons/bs'
import styles from './CustomerCard.module.css'

function CustomerCard({customer, handleRemove}){
    const remove = (e) =>{
        e.preventDefault()
        handleRemove(customer.name)
    }

    return(
        <div className={styles.customer_card} key={customer.name}>
        <h4>{customer.name}</h4>
        
            
            {customer.transactionPostings.length > 0 && 
                customer.transactionPostings.map((transaction) =>(
                <div >
                    <label>Transactions</label>
                    <p>
                        <span>Description: </span> {transaction.description}
                    </p>
                    <p>
                        <span>Value:</span> {transaction.value}
                    </p>
                        { transaction.operationType ? (
                            <div>
                                <p>
                                    <span>Operation Type:</span> {transaction.operationType}
                                </p>
                            </div>
                        ) : ('') }
                        { transaction.transactionType ? (
                            <div>
                                <p>
                                    <span>Transaction Type:</span> {transaction.transactionType}
                                </p>
                            </div>
                        ) : ('') }
                        { transaction.valueType ? (
                            <div>
                                <p>
                                    <span>Value Type:</span> {transaction.valueType}
                                </p>
                            </div>
                        ) : ('') } 
                  
                </div>
            ))}
            
            
            <div className={styles.customer_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )

}

export default CustomerCard