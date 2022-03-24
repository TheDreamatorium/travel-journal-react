export default function Destination (props) {

    let start = new Date(props.start).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric' })
    let end = new Date(props.end).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric' })
    return (
        <div className="destination-item">
            <img className="destination-img" src={`/images/${props.img}`} alt="destination"/>
            <div className="destination-text">
                <div className="text-item">
                    <div className="location">
                        <img src="/images/location-icon.png" className="location-icon" alt="location"/>
                        <p className="location-name">{props.location}</p>
                        <a href="#" className="location-link">View on Google Maps</a>
                    </div>
                </div>
                <div className="text-item">
                    <h1 className="destination-header">{props.destination}</h1>
                </div>
                <div className="text-item">
                    <h5 className="destination-period">{`${start} - ${end}`}</h5>
                </div>
                <div className="text-item">
                    <p className="destination-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}
