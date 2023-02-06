
import styles from './TransactionForm.module.css'
import { useState } from 'react' 
import Input from '../form/Input'
import Select from '../form/Select'

function TransactionForm({handleTransaction, customerType}){
    const [transaction, setTransaction] = useState({})
    const[enableButton, setEnableButton] = useState(true)

    const submitTransaction = (e) => {
        e.preventDefault()
        handleTransaction(transaction)
        setTransaction({})
        setEnableButton(true)
    }

    function handleChangeDescription(e){
        setTransaction({...transaction, description: e.target.value})
    }
    
    function handleChangeValue(e){
        setTransaction({...transaction, value: e.target.value })
        setEnableButton(false)
    }
    function handleTransactionType(e){
        setTransaction({...transaction, transactionType: e.target.value})
    }
    function handleOperationType(e){
        setTransaction({...transaction, operationType: e.target.value})
    }
    function handleValueType(e){
        setTransaction({...transaction, valueType: e.target.value})
    }

    const transactionType = [
        {
            id: "PARTIAL",
            name: "PARTIAL CHARGE"
        },
        {
            id: "FULL",
            name: "TOTAL CHARGE"
        }
    ]

    const operationType = [
        {
            id: "CREDIT",
            name: "CREDIT"
        },
        {
            id: "DEBIT",
            name: "DEBIT"
        }
    ]

    const valueType = [
        {
            id: "CURRENCY",
            name: "CURRENCY"
        },
        {
            id: "PERCENTAGE",
            name: "PERCENTAGE"
        }
    ]

    return (
        <div className={styles.form}>
            <div>
                <h2>Add Transaction</h2>
                <Input type="text" 
                    text="Description" 
                    name="name" 
                    placeholder="Description"
                    handleOnChange={handleChangeDescription} 
                    value={transaction.description ? transaction.description : ''}/>
                <Input type="number" 
                    text="Value" 
                    name="value" 
                    placeholder="R$"
                    handleOnChange={handleChangeValue} 
                    value={transaction.value ? transaction.value : ''}/>
                    {customerType === 'ESTABLISHMENT'? (
                        <div>
                            <Select text="Transaction Type" 
                                name="customerType" 
                                options={transactionType}
                                handleOnChange={handleTransactionType} 
                                value={transaction.transactionType ? transaction.transactionType : ''}/>
                            
                            <Select text="Operation Type" 
                                name="customerType" 
                                options={operationType}
                                handleOnChange={handleOperationType} 
                                value={transaction.operationType ? transaction.operationType  : ''}/>
                            
                            <Select text="Value Type" 
                                name="customerType" 
                                options={valueType}
                                handleOnChange={handleValueType } 
                                value={transaction.valueType ? transaction.valueType : ''}/> 
                                </div>) : ('')
                    }
                    {!enableButton ? (<button className={styles.btn} 
                                            disabled={enableButton} 
                                            onClick={submitTransaction}>Add transaction</button>) : ('')}
            </div>
        </div>
    )
}

export default TransactionForm 