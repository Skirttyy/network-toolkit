import { useEffect, useState } from "react"

export function useFetch (url, isJson) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        async function getFetch () {

            try {
                setError(null)
                setLoading(true)

                const res = await fetch(url, { signal: controller.signal})
                if (!res.ok) throw new Error(res.status + ", Error Text: " + await res.text())
                
                if (isJson) {
                    const json = await res.json()
                    setLoading(false)
                    setData(json)

                    if (json?.results?.[0]?.error) throw new Error(json.results[0].error)
                } else {
                    const text = await res.text()
                    setLoading(false)
                    setData(text)
                }

            } catch (e) {
                if (e.name === "AbortError") return
                setLoading(false)
                console.log(e)
                setError(e)
            }
        }

        getFetch()

        return () => controller.abort()
    }, [url])

    return { data, error, loading }
}