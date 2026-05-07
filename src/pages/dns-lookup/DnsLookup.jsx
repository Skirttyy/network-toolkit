import "./DnsLookup.css"
import { useEffect, useRef, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useNavigate, useParams } from "react-router"
import DnsLookupCard from "./DnsLookupCard"

export default function DnsLookup () {

    const { dns } = useParams()
    const navigate = useNavigate()

    const [input, setInput] = useState(dns || "google.com")
    const { data, error, loading } = useFetch("https://api.allorigins.win/raw?url=https://dnsx.dev/dns/" + input, true)
    const [inputError, setInputError] = useState(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (!checkType(input) && input !== "") {
            setInputError("You need to specify a valid domain/dns!")
        } else {
            inputRef.current.value = input
        }
        console.log(error)
    }, [input])

    function checkType (input) {
        const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/
        return domainRegex.test(input)
    }

    function handleInput () {
        if (checkType(inputRef.current.value)) {
            setInputError(null)
            setInput(inputRef.current.value)
            navigate("/dns-lookup/" + inputRef.current.value)
        } else {
            setInputError("You need to specify a valid domain/dns!")
        }
    }

    return (
        <div className="ip-info-container">
            <h1 className="ip-info-container-info">Type there the domain/dns... *</h1>
            <div className="ip-info-container-input">
                <div className="input-main">
                    <input ref={inputRef} type="text"/>
                </div>
                <div className="input-second">
                    <button onClick={() => handleInput()}>Search</button>
                </div>
            </div>
            <div className="ip-info-container-output">
                {inputError && <div className="input-error-container">{inputError}</div>}
                {error && <div className="fetch-error-container">{String(error)}</div>}
                {loading && <div className="fetch-loading-container">Loading...</div>}
                {(data && !inputError && !error && !loading) && <DnsLookupCard data={data}/>}
            </div>
        </div>
    )
}