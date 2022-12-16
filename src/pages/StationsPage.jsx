import axios from "axios";
import { useEffect, useState } from "react"

export const StationsPage = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7180/api/station")
        .then(res => {
            setItems(res.data);
            setIsLoaded(false);
        })
        .catch(e => setError(e));
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
                            <li key = {item.Name}>
                                {item.name}, {item.address} 
                            </li>
                        ))}
                    </ul>
                </>                                
            }
        </>
    );
};
