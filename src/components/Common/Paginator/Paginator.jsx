import React, {useState} from "react";
import cn from "classnames"
import styles from "./Paginator.module.css";

const Paginator = ({totaItemsCount, pageSize, currentPage, onPageChanged, portionZise = 10}) => {
    let pagesCount = Math.ceil(totaItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionZise);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionZise + 1;
    let rightPortionPageNumber = portionNumber * portionZise;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p);
                             }}> {p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
        }
    </div>
}


export default Paginator;