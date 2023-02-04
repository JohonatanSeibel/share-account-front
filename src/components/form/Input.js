import { useState } from 'react'
import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value, disabled}) {
    const[disabledInput] = useState(disabled || false)
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} 
                    name={name} 
                    id={name} 
                    placeholder={placeholder} 
                    onChange={handleOnChange}
                    value={value}
                    disabled={disabledInput}/>
        </div>
    )


}

export default Input