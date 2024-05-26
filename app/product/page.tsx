'use client'
import axios from "axios"
import { useState } from "react"

export default () => {

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('asc')
    const [limit, setLimit] = useState()


    const changeLimit = (e: any) => {
        setLimit(e.target.value)
    }
    const changeSort = (e: any) => {
        setSort(e.target.value)
    }

   const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`).then((result) => {
        setProducts(result.data)
    })
}
console.log(products);
    
    return (
        <div>
            <input type="number" value={limit} onChange={changeLimit} />
            <button onClick={getProducts}>Get Products</button>

            <select onChange={changeSort}>
                <option>asc</option>
                <option>desc</option>
            </select>

            <ul>
                {
                    products.map((product: any) => 
                    <li>
                        <img width='50px' src={product.image} />
                        {product.title}
                    </li>)
                }
            </ul>
        </div>
    )
}