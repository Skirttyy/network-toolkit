import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-container">
            <div className="footer-left">
                <span className="footer-brand">NOC</span>
                <span className="footer-brand-sub">Network Toolkit</span>
            </div>

            <div className="footer-center">
                <span className="footer-status">
                    Everything you need for network diagnostics, all in one place.
                </span>
            </div>

            <div className="footer-right">
                <span className="footer-copy">
                    &copy; {currentYear} — Network Operations Center
                </span>
            </div>
        </footer>
    )
}