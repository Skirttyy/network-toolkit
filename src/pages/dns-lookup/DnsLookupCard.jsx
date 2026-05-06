import "./DnsLookupCard.css"

export default function DnsLookupCard({ data }) {

    return (
        <div className="dns-card-container">

            <div className="dns-card-header">
                <div className="dns-card-header-left">
                    <span className="dns-card-domain">{data.domain}</span>
                    <span className="dns-card-type-badge">{data.type}</span>
                </div>
                <div className="dns-card-header-right">
                    <span className={`dns-card-consensus ${data.consensus ? "consensus--yes" : "consensus--no"}`}>
                        {data.consensus ? "Consensus" : "No Consensus"}
                    </span>
                </div>
            </div>

            <div className="dns-card-divider"/>

            {data?.results?.map((result, i) => (
                <div key={i} className="dns-card-resolver">

                    <div className="dns-card-resolver-header">
                        <p className="dns-resolver-name">{result.resolver}</p>
                        <p className="dns-resolver-ip">{result.resolver_ip}</p>
                        <p className="dns-resolver-time">{result.response_time_ms}ms</p>
                    </div>

                    <div className="dns-card-records">
                        {result?.records?.map((record, j) => (
                            <div key={j} className="dns-record-row">
                                <span className="dns-record-type">{record.type}</span>
                                <span className="dns-record-value">{record.value}</span>
                                <span className="dns-record-ttl">TTL {record.ttl}s</span>
                                {record.geo?.country && (
                                    <span className="dns-record-geo">{record.geo.country}</span>
                                )}
                                {record.asn?.number && (
                                    <span className="dns-record-asn">{record.asn.number} · {record.asn.name}</span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            ))}

            <div className="dns-card-divider"/>

            <div className="dns-card-footer">
                <p className="dns-card-timestamp">Queried at {new Date(data.timestamp).toLocaleTimeString()}</p>
                {data?.consensus && (
                    <div className="dns-card-consensus-values">
                        {data?.consensus_value?.map((v, i) => (
                            <span key={i} className="dns-consensus-chip">{v}</span>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}