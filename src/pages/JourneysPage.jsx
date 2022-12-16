import axios from "axios";
import { useEffect, useState } from "react"

export const JourneysPage = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    let rows = 10;

    useEffect(() => {
        axios.get(`https://localhost:7180/api/journey/${page}/${rows}`)
        .then(res => {
            setItems(res.data);
            setIsLoaded(false);
        })
        .catch(e => setError(e))
    }, [])

    const onClickAddRows = () => {
        setIsLoaded(true);
        setPage(page+1);
        axios.get(`https://localhost:7180/api/journey/${page+1}/${rows}`)
        .then(res => {
            setItems([...items, ...res.data]);
            setIsLoaded(false);
        })
        .catch(e => setError(e));
    }

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
                    <a className onClick={onClickAddRows}>Upload next {rows} journeys</a>
                </>
            }
        </>
        
    );
}