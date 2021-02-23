import React from "react";
import {useHistory} from "react-router-dom";
import style from "../app/App.module.css";


export const SearchComponent = React.memo((props: SearchComponentPropsType) => {
    let history = useHistory()

    const onClickSearchButton = () => {
        props.searchingFilm()
        props.setCurrentPage(1)
        history.push(`/movies-search-useState/search-results/` + props.filmName + `/` + props.currentPage)
    }


    return <div className={style.searchingBlock}>
        <div className={style.inputZone}>
            <input type={"text"}
                   autoFocus={true}
                   placeholder={"Enter name of movie "}
                   value={props.filmName}
                   onChange={(e) => props.setFilmName(e.target.value)}
                   onKeyPress={(e) => {e.key === "Enter" && onClickSearchButton()}}
            />

            <button onClick={onClickSearchButton}>Search
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

