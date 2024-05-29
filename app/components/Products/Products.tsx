import { limitState, sortState } from "@/app/state"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

export default () => {
    const [products, setProducts] = useState([])
    const [sort] = useRecoilState(sortState)
    const [limit] = useRecoilState(limitState)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`).then((result) => {
            setProducts(result.data)
        })
    }, [sort, limit])
    return (
            <ul>
                {
                    products.map((product: any) => 
                    <li>
                        <img width='50px' src={product.image} />
                        {product.title}
                    </li>)
                }
            </ul>
    )
}