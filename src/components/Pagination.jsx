import { useEffect, useState } from "react";

export const Pagination = ({arrData, rowsOnPage, changePage}) => {
    let buttonsList = [];
    for (let i = 0; i < arrData.length / rowsOnPage; i++) {
        buttonsList.push(i+1);
    }
    
    return (
        <div>
            {buttonsList.map(item=>(
                <button 
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