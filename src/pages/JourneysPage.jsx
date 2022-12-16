import axios from "axios";
import { useEffect, useState } from "react"

export const JourneysPage = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7180/api/journey/1/10")
        .then(res => {
            setItems(res.data);
            setIsLoaded(false);
        })
        .catch(e => setError(e))
    }, [])


    return (
        <>
            {isLoaded &&
                <p> Loading... </p>}
            {error ? 
                <p>
                    Error {error.message}
                </p> :
                <>
                    <ul>
                        {items.map(item => (
                            <li key = {item.id}>
                                Departure Station Name: {item.departureStationName}<br/>
                                Return Station Name: {item.returnStationName}<br/>
                                Covered Destance: {item.coveredDistance} km<br/>
                                Duration: {item.duration} min
                            </li>
                        ))}
                    </ul>
                </>
            }
        </>
        
    );
}