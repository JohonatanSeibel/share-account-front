import styles from './css/ViewOrder.module.css'
import { useState } from 'react'
import Container from '../layout/Container'


function ViewOrder({orderData}) {
    const [order] = useState(orderData)
 
    return (
        <>
        {order && order.accountAmount ? (
        <div className={styles.view_order_details}>
            <Container customClass="column">
                <div className={styles.details_container}>
                    <div>
                        <h1>Order</h1>
                    </div>
                    <div>
                        <p>
                            <span>Value Amount: </span> R${order.accountAmount}
                        </p>
                        <p>
                            <span>Quantity Clients: </span> {order.quantityClients}
                        </p>
                        <p>
                            <span>Discount Value: </span> R${order.discountValue}
                        </p>
                        {order.customersInvoiced.map((customer) => (
                            <div>
                                <p>
                                    <span>Name: </span>{customer.name}
                                </p>
                                <p>
                                    <span>Value: </span>{customer.valueToPay}
                                </p>
                                <p>
                                    <label>Pix: </label>
                                    <a href={customer.billingWalletLink}> {customer.billingWalletLink}</a>
                                </p>
                            </div>
                        ))} 
                    </div>
                    <div className={styles.order_card_actions}>
                    <button onClick={() => window.location.reload(true)}>Refresh</button>
                </div>
            </div>
            </Container>
        </div> 
        )
        : (''
        )
        }
        </>
    )
}

export default ViewOrder