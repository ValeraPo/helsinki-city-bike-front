import { Link } from "react-router-dom";
import '../stylesNew.css';

export const DisplayList = ({arrData, rowPerPage, page}) => {
    
    const start = rowPerPage * (page-1);
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end)

    return (
        <ul className="stations-list">
            {paginatedData.map(item => (
                <li key = {item.name}>
                    <Link to={`/stations/${item.name}`}>
                        {item.name}, {item.address} 
                    </Link>
                </li>
            ))}
        </ul>
    )
}