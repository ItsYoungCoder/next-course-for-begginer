'use client'
import { useState } from "react"
import styles from "./page.module.scss"
import axios from "axios"
export default () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('')


    const changeTitle = (e: any) => {
        setTitle(e.target.value)
    }

    const getProducts = () => {
        axios.get(`https://api.escuelajs.co/api/v1/products?title=${title}`).then(result => {
            setProducts(result.data)

            if(title !== result.data.title) {
                <h1>პროდუქტი ვერ მოიძებნა</h1>
            } 
        })
    }

    console.log(products);
    return (
        <main className={styles.main}>
            <div className={styles.filter}>
                <input className={styles.input} type="text" onChange={changeTitle} value={title} placeholder="ცაწერე პროდუქტის სახელი" />
                <button className={styles.button} onClick={getProducts}>Get Rroduct</button>
            </div>

           <div className={styles.cardContainer}>
                {
                    products.map((item: any) => (
                        <div key={item.id} className={styles.cardMain}>
                            <div className={styles.images}>
                                <div className={styles.image}><img src={item.images[0]} alt={item.title} /></div>
                                <div className={styles.hoverImage}><img src={item.images[1]} alt={item.title} /></div>
                            </div>
                            <div className={styles.cardMenu}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.desc}>{item.description}</div>
                                <div className={styles.price}>{item.price}$</div>
                            </div>
                            <div className={styles.category}>{item.category.name}</div>
                        </div>
                    ))

                                                
                                                
                }
           </div>
        </main>
    )
}