import Input from '../form/Input'
import Select from '../form/Select'
import { useState } from 'react'
import styles from './CustomerForm.module.css'
import TransactionForm from './TransactionForm'
import Container from '../layout/Container'
import TransactionCard from '../order/TransactionCard'

function CustomerForm({orderData, handleSubmit}){

    const [customer, setCustomer] = useState({})
    const[enableButton, setEnableButton] = useState(true)
    const[disabled, setDisabled] = useState(false)
    

    const customerTypes = [
        {
            id: "ME",
            name: "EU"
        },
        {
            id: "FRIEND",
            name: "AMIGO"
        },
        {
            id: "ESTABLISHMENT",
            name: "ESTABELECIMENTO"
        }
    ]

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(customer)
        setCustomer({})
        setEnableButton(true)
    }

    function handleChange(e){
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    function handleCustomerType(e){
        setCustomer({...customer, customerType: e.target.value})
    }

    function handleCustomerTransactionList(e){
        let array = (customer && customer.transactionPostings) ? (customer.transactionPostings) : ([]);
        array.push(e)
        setCustomer({...customer, transactionPostings: array})
        setDisabled(true)
        setEnableButton(false)
    }

    const handleRemove = (e) => {
        // console.log(e)
        // let array = customer.transactionPostings.filter(t => t.id !== e)
        // console.log('PASSOU ')
        // console.log(array)
        // setCustomer({...customer, transactionPostings: array})
        // console.log(customer)
    }


    return (
        <div>
            <Input type="text" 
                    text="Name" 
                    name="name" 
                    placeholder="Insert Name"
                    handleOnChange={handleChange} 
                    value={customer.name ? customer.name : ''}
                    disabled={disabled}/>
            
            <Select text="Select Customer Type" 
                    name="customerType" 
                    options={customerTypes}
                    handleOnChange={handleCustomerType} 
                    value={customer.customerType ? customer.customerType : ''}/>
            
            <TransactionForm handleTransaction={handleCustomerTransactionList} 
                            transactionData={customer.transactionPostings}
                            customerType={customer.customerType}/>
            {customer.transactionPostings ? (<div>
                    <h3>Transactions</h3>
                </div>) : ('')}
            <Container customClass="start">
                
                {customer.transactionPostings && customer.transactionPostings.length > 0  && 
                    customer.transactionPostings.map((transaction) => (
                        <TransactionCard transaction={transaction}
                                                 id={transaction.id}
                                    handleRemove={handleRemove}/>
                    ))
                }
            </Container>                
            <>
                {!enableButton ? (<button className={styles.btn} disabled={enableButton} onClick={submit}>Add Customer</button>) : ('')}
            </>
            
            
        </div>
    )
}

export default CustomerForm