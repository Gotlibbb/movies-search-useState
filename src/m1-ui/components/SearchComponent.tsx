import style from "../app/App.module.css";
import React from "react";




export const SearchComponent = (props: SearchComponentType) => {


    return <div className={style.searchingBlock}>
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
        <div className={style.searchResult}>

            {props.searchResult}

        </div>
    </div>
}

type SearchComponentType = {

    filmName: string,
    setFilmName: (name: string) => void,
    searchingFilm: (page?: string) => void
    searchResult: JSX.Element[] | string

}