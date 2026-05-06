import "./PortChecker.css"

export default function PortCheckerCard ({ip, port, isOpen}) {

    return (
        <div className="port-checker-card-container">
            <p className="port-card-ip">Ip address: {ip}</p>
            <p className="port-card-port">Port: {port}</p>
            <p className={isOpen ? "port-card-result-open" : "port-card-result-closed"}>{isOpen ? "Opened" : "Closed"}</p>
        </div>
    )
}