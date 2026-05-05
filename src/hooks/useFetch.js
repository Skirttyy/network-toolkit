import { useEffect, useState } from "react"

export function useFetch (url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        async function getFetch () {

            try {
                setLoading(true)

                const res = await fetch(url, { signal: controller.signal})
                if (!res.ok) return new Error("HTTP Response: " + res.status)
                
                const json = await res.json()
                setLoading(false)
                setData(json)
            } catch (e) {
                setLoading(false)
                setError(e)
            }
        }

        getFetch()

        return () => controller.abort()
    }, [url])

    return { data, error, loading }
}