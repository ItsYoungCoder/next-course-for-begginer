'use client'
import { useState } from 'react'
import styles from './show.module.scss'
export default () => {

    const [show, setShow] = useState(false)

    const onClick = () => {
        setShow(!show)
    }
    return (
        <div>
            <button className={styles.button} onClick={onClick}>{show ? 'Hide Menu' : 'Show Menu'}</button>
            {show && <ul className={styles.listContainer}>
                        <li className={styles.listItems}>Profile</li>
                        <li className={styles.listItems}>Subscription</li>
                        <li className={styles.listItems}>Settings</li>
                        <li className={styles.listItems}>Log Out</li>
                    </ul>
            }
        </div>
    )
}