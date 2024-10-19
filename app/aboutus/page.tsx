'use client'
import { useState } from 'react'
import styles from './page.module.css'
export default () => {
    const [items, setItems] = useState(1)

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>

                <div className={styles.item}>
                    <span onClick={() => setItems(1)} className={styles.span}>ვინ ვართ ჩვენ?</span>
                   {
                    items === 1 ? <sub>ჩვენ ვართ კომპანია რომელიც უზრუნველყოფს სხვადასხვა კომპანიისთვის საიტების და აპლიკაციების დამზადებას</sub> : ''
                   }
                </div>

                <div onClick={() => setItems(2)} className={styles.item}>
                    <span className={styles.span}>რას ვსაქმიანობთ?</span>
                    {
                        items === 2 ? <sub>ჩვენ ვართ დეველოპერები რომლებიც ვაკეთებთ სხვადასხვა ბიზნესისთვის საიტს</sub> : ''
                    }
                </div>
                
                <div onClick={() => setItems(3)} className={styles.item}>
                    <span className={styles.span}>უსაფრთხოა თუ არა?</span>
                    {
                        items === 3 ? <sub>ჩვენთან ურთიერთობა უსაფრთხოა</sub> : ''
                    }
                </div>

            </div>
        </div>
    )
}
