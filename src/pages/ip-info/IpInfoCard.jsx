import "./IpInfoCard.css"
import Map from "./Map"

export default function IpInfoCard ({data}) {

    return (
        <div className="ip-info-card-container">
            <div className="ip-info-results">
            <div className="main-region-details-container">
                <div className="country-info-container">
                    <p>Ip Address:</p>
                    <p>{data.query}</p>
                </div>
                <div className="country-info-container">
                    <p>Country:</p>
                    <p>{data.country}</p>
                </div>
                <div className="country-code-info-container">
                    <p>Country Code:</p>
                    <p>{data.countryCode}</p>
                </div>
                <div className="region-info-container">
                    <p>Region:</p>
                    <p>{data.region} / {data.regionName}</p>
                </div>
            </div>
            <div className="second-region-details-container">
                <div className="city-info-container">
                    <p>City:</p>
                    <p>{data.city}</p>
                </div>
                <div className="zip-info-container">
                    <p>Address Zip:</p>
                    <p>{data.zip}</p>
                </div>
                <div className="timezone-info-container">
                    <p>Timezone:</p>
                    <p>{data.timezone}</p>
                </div>
            </div>
            <div className="isp-details-container">
                <div className="isp-info-container">
                    <p>Internet Service Provider:</p>
                    <p>{data.isp}</p>
                </div>
                <div className="org-info-container">
                    <p>Organization:</p>
                    <p>{data.org}</p>
                </div>
                <div className="as-info-container">
                    <p>AS:</p>
                    <p>{data.as}</p>
                </div>
            </div>
            </div>
            <div className="ip-info-map-results">
                {data.lat && <Map lat={data.lat} lon={data.lon} city={data.city}/>}
            </div>
        </div>
    )
}