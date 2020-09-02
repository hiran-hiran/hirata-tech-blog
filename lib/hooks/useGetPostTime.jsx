import { useState, useEffect } from 'react'


export const useGetPostTime = (post) => {
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")


    useEffect(() => {
        const date = new Date(post.publishedAt)
        setYear(date.getFullYear())
        setMonth(date.getMonth() + 1)
        setDay(date.getDate())
    }, [])

    return `${year}/${month}/${day}`
}