import { useEffect, useRef, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import "./PortChecker.css"
import { useSearchParams } from "react-router"
import PortCheckerCard from "./PortCheckerCard"

export default function PortChecker () {

    const [searchParams, setSearchParams] = useSearchParams()

    const [inputIp, setInputIp] = useState("example.com")
    const [inputPort, setInputPort] = useState(80)
    const [inputErrors, setInputErrors] = useState([])
    const { data, error, loading} = useFetch("https://corsproxy.io/?url=https://portchecker.io/api/" + inputIp + "/" + inputPort, false)

    const ipRef = useRef(null)
    const portRef = useRef(null)

    useEffect(() => {
        const ip = searchParams.get("ip")
        const port = searchParams.get("port")

        if (ip && port) {
            setInputIp(ip)
            setInputPort(Number(port))
        } else {
            ipRef.current.value = inputIp
            portRef.current.value = inputPort
        }
    }, [searchParams])

    function checkType (input) {
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
        const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/
        const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6})|(:((:[0-9a-fA-F]{1,4}){1,7}|:)))$/

        return ipRegex.test(input) || domainRegex.test(input) || ipv6Regex.test(input)
    }

    function handleCheck () {
        setInputErrors([])
        const port = Number(portRef.current.value)
        const ip = ipRef.current.value

        if (!checkType(ip)) setInputErrors([...inputErrors, "You need to specify a valid IPv4, IPv6 address or a valid domain/dns!"])
        if (port <= 1 || port >= 65535) setInputErrors([...inputErrors, "You need to set a valid TCP port!"])

        if (checkType(ip) && (port >= 1 && port <= 65535)) {
            setInputIp(ip)
            setInputPort(port)
            setSearchParams({ip: ip, port: port})
        }
    }

    return (
        <div className="port-checker-container">
            <h1 className="port-checker-container-info">Type there the ip address and TCP port... *</h1>
            <div className="port-checker-input-container">
                <input ref={ipRef} className="port-checker-input-ip"/>
                <input ref={portRef} className="port-checker-input-port"/>
                <button onClick={() => handleCheck()}>Check</button>
            </div>
            <div className="port-checker-results-container">
                {inputErrors.length > 0 && <div className="input-error-container">{"Eroare: " + inputErrors}</div>}
                {error && inputErrors.length === 0 && <div className="fetch-error-container">{"Eroare: " + error}</div>}
                {loading && <div className="fetch-loading-container">Loading...</div>}
                {(data && inputErrors.length === 0 && !error && !loading) && <PortCheckerCard ip={inputIp} port={inputPort} isOpen={data === "True" ? true : false}/>}
            </div>
        </div>
    )
}