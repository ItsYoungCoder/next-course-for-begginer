'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Filters from "../components/Filters/Filters"
import Products from "../components/Products/Products"

export default () => {

    return (
        <div>
            <Filters />
            <Products />
        </div>
    )
}