import React, {useState} from "react";
import style from "../u3-css/c3r2-Pagination.module.css";
import {useHistory} from "react-router-dom";


export const Pagination = React.memo((props: PaginationPropsType) => {

    let [inputPage, setInputPage] = useState<string>()
    let history = useHistory()
    let pageSize = 10
    let pageCount: number | undefined = Math.ceil(Number(props.totalResults) / pageSize);

    let pages: number[] = [];

    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }
    const pushUrl = (page: number) => {
        history.push(`/movies-search-useState/search-results/` + props.filmName + `/` + String(page))
    }


    if (pageCount >= 10) {
        let errorInput: boolean = Number(inputPage) >= pages.length || Number(inputPage) <= 0
        let errorButton: boolean = props.currentPage + 1 >= pages.length || props.currentPage <= 0

        return <div
            className={style.toggleBlock}
            style={props.onlySwitch ? {justifyContent: "center", paddingLeft: "75px"} : {}}
        >
            <div
                className={style.changePage}
                hidden={props.onlySwitch}
            >
                <div hidden={props.onlySwitch}>Change page:</div>
                <input hidden={props.onlySwitch} type="number" value={inputPage}
                       onChange={(e) => {
                           setInputPage(e.currentTarget.value)

                       }}
                       onKeyPress={(e) => {

                           if (e.key === "Enter" && !errorInput) {
                               props.setCurrentPage(Number(inputPage))
                               props.searchingFilm(inputPage)
                               pushUrl(Number(inputPage))

                           }

                       }}
                />

                <button hidden={props.onlySwitch}
                        onClick={() => {
                            props.setCurrentPage(Number(inputPage))
                            props.searchingFilm(inputPage)
                            pushUrl(Number(inputPage))
                        }}
                        disabled={errorInput}
                >↪
                </button>
            </div>

            <div
                className={style.pageToggle}

            >
                {props.currentPage !== 1 &&
                <button onClick={() => {
                    props.onlySwitch && window.scrollTo(0, 300)
                    props.setCurrentPage(pages[props.currentPage - 1])
                    props.searchingFilm(String(props.currentPage - 1))
                    pushUrl(props.currentPage - 1)


                }}>⇐...prev </button>}
                <div className={style.currentPage}> {props.currentPage} </div>
                <button
                    disabled={errorButton}
                    onClick={() => {
                        props.onlySwitch && window.scrollTo(0, 300)
                        props.setCurrentPage(pages[props.currentPage + 1])
                        props.searchingFilm(String(props.currentPage + 1))
                        pushUrl(props.currentPage + 1)


                    }}> next...⇒
                </button>
            </div>

            <div
                className={style.totalPage}
                hidden={props.onlySwitch}
            >Total pages: {pages.length - 1}</div>
        </div>


    }


    return <div className={style.pagesBlock}>
        {pages.map(p => {
            return <span hidden={p === 0}
                         key={p}
                         className={props.currentPage === p ? style.checked : " "}
                         onClick={
                             () => {
                                 props.setCurrentPage(p)
                                 props.searchingFilm(String(p))
                                 pushUrl(p)
                             }
                         }>
                {p}
            </span>
        })}
    </div>

})

type PaginationPropsType = {
    searchingFilm: (page?: string) => void
    totalResults: string | undefined
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    onlySwitch?: boolean
    filmName: string


}
