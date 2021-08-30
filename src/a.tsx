import { useEffect } from "react"
import { getTableDataList } from "./api/fetch"

export const A = ({ a }: { a: string }) => {
    useEffect(() => {
        getTableDataList("", 20)
    }, [])
    return <div className="mt-3 sm:mt-0 sm:ml-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 hover:text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            Live demo123
      </a>
    </div>
}