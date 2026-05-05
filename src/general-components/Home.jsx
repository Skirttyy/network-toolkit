import "./Home.css"

export default function Home () {
    return (
        <div className="home-container">

            <div className="home-hero">
                <div className="home-badge">Network Toolkit</div>
                <h1 className="home-title">
                    Diagnose. Inspect. <span className="home-title-accent">Analyze.</span>
                </h1>
                <p className="home-subtitle">
                    A fast and simple toolkit for network diagnostics.
                    Check DNS records, inspect IP information, and test open ports in real time.
                </p>
            </div>

            <div className="home-cards">
                <div className="home-card">
                    <div className="home-card-icon">🌐</div>
                    <h3 className="home-card-title">DNS Checker</h3>
                    <p className="home-card-desc">
                        Lookup DNS records instantly and verify domain configuration across global servers.
                    </p>
                </div>

                <div className="home-card">
                    <div className="home-card-icon">📡</div>
                    <h3 className="home-card-title">IP Info</h3>
                    <p className="home-card-desc">
                        Get detailed information about any IP address including location, ISP, and network data.
                    </p>
                </div>

                <div className="home-card">
                    <div className="home-card-icon">🔌</div>
                    <h3 className="home-card-title">Port Checker</h3>
                    <p className="home-card-desc">
                        Test open and closed ports on any host to verify service availability and security.
                    </p>
                </div>
            </div>

        </div>
    )
}