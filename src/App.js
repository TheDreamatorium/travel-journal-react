import Navbar from "./components/Navbar";
import "./style.scss";
import destinations from "./data"
import Destination from "./components/Destination";

export default function App() {

    const items = destinations.map(item => {
        return <Destination 
            key={item.id}
            {...item}
        />
    });

    return (
        <div>
            <Navbar/>
            <div className="destinations">
                {/* {items} */}
            </div>
        </div>
    )
}
