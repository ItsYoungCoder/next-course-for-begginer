'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default () => {

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState(localStorage.getItem('sort') || 'asc')
    const [limit, setLimit] = useState(sessionStorage.getItem('limit') || 20)


    const changeLimit = (e: any) => {
        setLimit(e.target.value)
        sessionStorage.setItem('limit', e.target.value)
    }
    const changeSort = (e: any) => {
        setSort(e.target.value)
        localStorage.setItem('sort', e.target.value)
    }




useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`).then((result) => {
        setProducts(result.data)
    })
}, [sort, limit])
console.log(products);
    
    return (
        <div>
            <input type="number" value={limit} onChange={changeLimit} />
            <select value={sort} onChange={changeSort}>
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