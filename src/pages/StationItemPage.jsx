import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const StationItemPage = () => {
    const {stationName} = useParams();
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [station, setStation] = useState({});

    useEffect(() => {
        console.log(stationName)
        axios.get(`https://localhost:7180/api/station/${stationName}`)
        .then(res => {
            setStation(res.data);
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
                <div className = "station">
                    <h1>{station.name}<br/></h1>
                    Address: {station.address}<br/>
                    Total number of journeys starting from the station: {station.numberOfJourneysStartingFrom}<br/>
                    Total number of journeys ending at the station: {station.numberOfJourneysEndingAt}<br/>
                </div>
            }
        </>
    );
}