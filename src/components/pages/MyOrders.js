import { useLocation } from "react-router-dom"
import Message from '../layout/Message'
import styles from './css/MyOrders.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import OrderCard from "../order/OrderCard"
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'


function MyOrders(){

    const [orders, setOrders] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [orderMessage, setOrderMessage] = useState('')
    const location = useLocation()
    let message = '';

    if(location.state){
        message = location.state.message;
    }

    useEffect(() =>{
        setTimeout(() => { fetch('http://localhost:5000/body', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(data => {
            // console.log(data)
            setOrders(data)
            setRemoveLoading(true)
        }).catch(err => console.log(err))}, 300)       
    }, [])

    function removeOrder(id){
        fetch(`http://localhost:5000/body/${id}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(data => {
            setOrders(orders.filter((order) => order.id !== id))
            setOrderMessage('Order removed with success!')
        }).catch(err => console.log(err))
    }

    return(
        <div className={styles.my_order_container}>
            <div className={styles.title_container}>
                <h1>My Orders</h1>
                <LinkButton to="/order" text="New Order"/>
            </div>
            {message && <Message type="Success" msg={message}/>}
            {orderMessage && <Message type="Success" msg={orderMessage}/>}
            <Container customClass="start">
                {orders.length > 0  && 
                    orders.map((order) => (
                        <OrderCard accountAmount={order.accountAmount} 
                                    quantityClients={order.quantityClients}
                                    discountValue={order.discountValue}
                                    customerInvoiced={order.customerInvoiced}
                                    id={order.id}
                                    handleRemove={removeOrder}/>
                    ))}
                    {!removeLoading && <Loading />}
                    {removeLoading && orders.length === 0 && (
                        <p>There is no Orders</p>
                    )}
            </Container>
        </div>
    )
}

export default MyOrders