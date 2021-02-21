import React, {useState} from "react";
import style from "../app/App.module.css";
import {Pagination} from "./Pagination";
import {Preloader} from "../assets/Preloader";


export const SearchComponent = React.memo((props: SearchComponentPropsType) => {
    let [currentPage, setCurrentPage] = useState<number>(1)



    return <div className={style.searchingBlock}>
        <div className={style.inputZone}>
            <input type={"text"}
                   autoFocus={true}
                   placeholder={"Enter name of movie "}
                   value={props.filmName}
                   onChange={(e) => props.setFilmName(e.target.value)}
                   onKeyPress={(e) => {
                       if (e.key === "Enter") props.searchingFilm()
                   }}
            />

            <button onClick={() => props.searchingFilm()}>Search</button>
        </div>
        <div className={style.searchResult}>


            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />

            {props.preloader ? <Preloader/> :
                <div className={style.searchResult}>
                    {props.searchResult}
                </div>
            }
            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        onlySwitch={true}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />

        </div>
    </div>
})

type SearchComponentPropsType = {
    setPreloader: (preloader: boolean) => void
    preloader: boolean
    viewMovie: (filmId: string) => void

    filmName: string
    setFilmName: (filmName: string) => void
    searchingFilm: () => void
    totalResults: string | undefined
    searchResult: JSX.Element[] | string | undefined
}

