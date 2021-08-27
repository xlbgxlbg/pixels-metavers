import { useEffect } from "react"
import { getTableDataList } from "./api/fetch"

export const A = ({a}:{a: string}) => {
    useEffect(() => {
        getTableDataList("", 20)
    }, [])
    return <div>{a}</div>
}