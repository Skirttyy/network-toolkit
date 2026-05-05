import { useRef, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import "./IpInfo.css"
import IpInfoCard from "./IpInfoCard"

export default function IpInfo () {

    const [input, setInput] = useState("")
    const { data, error, loading } = useFetch("http://ip-api.com/json/" + input)
    const [inputError, setInputError] = useState(null)
    const inputRef = useRef(null)
    console.log(error)

    function checkType (input) {
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
        const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/
        const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6})|(:((:[0-9a-fA-F]{1,4}){1,7}|:)))$/

        return ipRegex.test(input) || domainRegex.test(input) || ipv6Regex.test(input)
    }

    function handleInput () {
        if (checkType(inputRef.current.value)) {
            setInputError(null)
            setInput(inputRef.current.value)
        } else {
            setInputError("You need to specify a valid IPv4, IPv6 address or a valid domain/dns!")
        }
    }

    return (
        <div className="ip-info-container">
            <h1 className="ip-info-container-info">Type there the ip address... *</h1>
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

                {loading && <div className="fetch-loading-container">Loading...</div>}
                {data && <IpInfoCard data={data}/>}
            </div>
        </div>
    )
}