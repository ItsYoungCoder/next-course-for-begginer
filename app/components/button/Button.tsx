'use client'
import { useState } from 'react'
import styles from './button.module.scss'

export default () => {

    const [text, setText] = useState('')
    const classes = [styles.button]

    const inputText = (e: any) => {
        setText(e.target.value)
    }
    if(text.length < 8) {
        classes.push(styles.disabled)
    } 
    return (
        <div>
            <input type="text" value={text} onChange={inputText} />
            <button className={classes.join(' ')}>Registration</button>
        </div>
    )
}