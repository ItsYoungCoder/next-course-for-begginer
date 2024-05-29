import { limitState, sortState } from "@/app/state"
import { useRecoilState } from "recoil"

export default () => {
    
    const [sort, setSort] = useRecoilState(sortState)
    const [limit, setLimit] = useRecoilState(limitState)


    const changeLimit = (e: any) => {
        setLimit(e.target.value)
        sessionStorage.setItem('limit', e.target.value)
    }
    const changeSort = (e: any) => {
        setSort(e.target.value)
        localStorage.setItem('sort', e.target.value)
    }
    return (
        <>
             <input type="number" value={limit} onChange={changeLimit} />
                <select value={sort} onChange={changeSort}>
                    <option>asc</option>
                    <option>desc</option>
                </select>
        </>
    )
}