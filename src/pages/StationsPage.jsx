import axios from "axios";
import { useEffect, useState } from "react"
import { DisplayList } from "../components/DisplayList";
import { Pagination } from "../components/Pagination";

export const StationsPage = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rows = 100;
    
    useEffect(() => {
        axios.get("https://localhost:7180/api/station")
        .then(res => {
            setItems(res.data);
            setIsLoaded(false);
        })
        .catch(e => setError(e));
    }, [])

    const onClickBtnPage = (page) => {
        setCurrentPage(page);
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
                    <DisplayList arrData={items} page={currentPage} rowPerPage={rows} />
                    <Pagination
                        arrData={items}
                        currentPage={currentPage}
                        rowsOnPage = {rows}
                        changePage={onClickBtnPage}
                    />
                </>                                
            }
        </>
    );
};
