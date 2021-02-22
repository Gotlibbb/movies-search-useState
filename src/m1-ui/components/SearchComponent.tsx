import React from "react";
import {useHistory} from "react-router-dom";
import style from "../app/App.module.css";


export const SearchComponent = React.memo((props: SearchComponentPropsType) => {
    let history = useHistory()

    return <div className={style.searchingBlock}>
        <div className={style.inputZone}>
            <input type={"text"}
                   autoFocus={true}
                   placeholder={"Enter name of movie "}
                   value={props.filmName}
                   onChange={(e) => props.setFilmName(e.target.value)}
                   onKeyPress={(e) => {
                       if (e.key === "Enter") {
                           history.push(`/search-results/` + props.filmName + `/` + props.currentPage)
                           props.searchingFilm()
                           props.setCurrentPage(1)
                       }
                   }}
            />

            <button onClick={() => {
                props.searchingFilm()
                props.setCurrentPage(1)
                history.push(`/search-results/` + props.filmName + `/` + 1)

            }}>Search
            </button>
        </div>
    </div>
})

type SearchComponentPropsType = {

    filmName: string
    setFilmName: (filmName: string) => void
    searchingFilm: () => void
    setCurrentPage: (page: number) => void
    currentPage: number
}

