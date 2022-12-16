import { useEffect, useState } from "react";
import '../stylesNew.css';

export const Pagination = ({arrData, rowsOnPage, currentPage, changePage}) => {
    let buttonsList = [];
    for (let i = 0; i < arrData.length / rowsOnPage; i++) {
        buttonsList.push(i+1);
    }
    
    return (
        <div className="pagination_list">
            {buttonsList.map(item=>(
                <button 
                    className={`pagination_item${currentPage === item ? " active" : ""}`} 
                    key={item}
                    onClick={()=>changePage(item)}
                >
                    {item}
                </button>
            )
            )}
        </div>
    )
}