export default function Destination (props) {
    return (
        <div className="destination-item">
            <img className="destination-img" src={`/images/${props.img}`} alt="destination"/>
            <div className="destination-text">
                <div className="location">
                    <img src="/images/location-icon.png" className="location-icon" alt="location"/>
                    <p className="location-name">{props.location}</p>
                    <a href="#" className="location-link">View on Google Maps</a>
                </div>
                <h1 className="destination-header">{props.destination}</h1>
                <p className="destination-period">text for period</p>
                <p className="destination-description">{props.description}</p>
            </div>
        </div>
    );
}
