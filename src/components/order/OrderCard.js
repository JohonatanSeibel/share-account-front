import styles from './OrderCard.module.css'
import { Link } from 'react-router-dom'

import {BsEye, BsFillTrashFill} from 'react-icons/bs'

function OrderCard({id, accountAmount, quantityClients, discountValue, customerInvoiced, handleRemove}){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.order_card}>
            <h4>Order</h4>
            <p>
                <span>Value Amount: </span> R${accountAmount}
            </p>
            <p>
                <span>Quantity Clients: </span> {quantityClients}
            </p>
            <p>
                <span>Discount Value: </span> R${discountValue}
            </p>
            <div className={styles.order_card_actions}>
                <Link to={`/myorder/${id}`}>
                    <BsEye /> Open
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )
}

export default OrderCard