import style from '../u3-css/c3r1-FilmPreview.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export const FilmPreview = (props: MoviePreviewPropsType) => {

    return <div className={style.filmPreview}>

        <NavLink to={`/movies-search-useState/movie/` + props.filmName + `/` + props.imdbID}
                 onClick={() => props.viewMovie(props.imdbID)}>
            <div className={style.Title}>{props.Title}</div>
            <img src={props.Poster} alt={"poster"}/>
        </NavLink>
        <div className={style.Year}>Year: {props.Year}</div>
        <div className={style.Type}>Type: {props.Type}</div>
    </div>
}

export type MoviePreviewPropsType = {

    filmName: string
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
    viewMovie: (filmId: string) => void


}