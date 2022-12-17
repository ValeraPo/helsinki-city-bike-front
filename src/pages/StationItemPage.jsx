import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const StationItemPage = () => {
    const {stationName} = useParams();
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [station, setStation] = useState({});
    const [topDeparture, setTopDeparture] = useState([])
    const [topReturn, setTopReturn] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7180/api/station/${stationName}`)
        .then(res => {
            setStation(res.data);
            setTopDeparture(res.data.topDepartureStations);
            setTopReturn(res.data.topReturnStations);
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
                    The average distance of a journey starting from the station: {station.avgDistanceOfJourneyStartingFrom} km<br/>
                    The average distance of a journey ending at the station: {station.avgDistanceOfJourneyEndingAt} km<br/>
                    Top 5 most popular return stations for journeys starting from the station: <br/>
                    {topDeparture.map(item => (
                        <li key = {item.name}>
                                {item.name}, {item.address} 
                        </li>
                    ))}
                    Top 5 most popular departure stations for journeys ending at the station: <br/>
                    {topReturn.map(item => (
                        <li key = {item.name}>
                                {item.name}, {item.address} 
                        </li>
                    ))}
                </div>
            }
        </>
    );
}