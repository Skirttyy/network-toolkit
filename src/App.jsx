import { Route, Routes } from "react-router"
import "./App.css"
import Header from "./general-components/Header"
import IpInfo from "./pages/ip-info/IpInfo"
import Home from "./general-components/Home"
import Footer from "./general-components/Footer"
import PortChecker from "./pages/port-checker/PortChecker"
import DnsLookup from "./pages/dns-lookup/DnsLookup"

export default function App () {
    return (
        <div className="app-container">
            <Header />
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/ip-info/:ip?" element={<IpInfo />}/>
                    <Route path="/port-checker/" element={<PortChecker />}/>
                    <Route path="/dns-lookup/:dns?" element={<DnsLookup />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}