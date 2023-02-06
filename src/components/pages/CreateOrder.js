import { useState } from 'react'
import CustomerForm from '../form/CustomerForm'
import CustomerCard from '../order/CustomerCard'
import Container from '../layout/Container'
import ViewOrder from './ViewOrder'
import Loading from '../layout/Loading'
import styles from './css/CreateOrder.module.css'
import Message from '../layout/Message'


function CreateOrder(){

    const [customerInvoice, setCustomerInvoices] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true)
    const[response, setResponse] = useState()
    const[enableButton, setEnableButton] = useState(true)
    const [orderMessage, setOrderMessage] = useState()

    const submitCustomer = (e) => {
        let array = customerInvoice.customerInvoices ? (customerInvoice.customerInvoices) : ([]);
        array.push(e)
        setCustomerInvoices({...customerInvoice, customerInvoices: array})
        setEnableButton(false)
    }

    function submit(){
        setRemoveLoading(false)
        setEnableButton(true)
        console.log(JSON.stringify(customerInvoice))
        fetch('http://ec2-15-228-82-5.sa-east-1.compute.amazonaws.com:8080/shareAccount', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(customerInvoice)
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
            setOrderMessage(data.message ? '⛔️ ' + data.message : '') 
            setRemoveLoading(true)
            setResponse(data)
            setCustomerInvoices([])
        }).catch((err) => err.json()).then( (err)=> {
            console.log(err)
        })
    }

    return (
        <div className={styles.create_order_details}>
            <CustomerForm handleSubmit={submitCustomer}
                        orderData={customerInvoice}/>
            {customerInvoice.customerInvoices ? (<div>
                    <h3>Customers</h3>
                </div>) : ('')}
            <Container customClass="start">
                {customerInvoice.customerInvoices && customerInvoice.customerInvoices.length > 0  && 
                    customerInvoice.customerInvoices.map((customer) => (
                        <CustomerCard customer={customer}/>
                    ))}
           
            {orderMessage && <Message type="Success" msg={orderMessage}/>}
            {!removeLoading && <Loading />}
            { response ? (
                <ViewOrder orderData={response}/>
                ) : ('')
            }
            </Container>    
            <div className={styles.create_order_card_actions}>  
            <>
                {!enableButton ? (<button onClick={submit} disabled={enableButton} >
                    Submit Order
                </button>) : ('')}
            </>
            </div>
        </div>  
    )
}

export default CreateOrder