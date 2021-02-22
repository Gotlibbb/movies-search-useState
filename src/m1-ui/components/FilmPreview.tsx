import style from "../app/App.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const FilmPreview = (props: MoviePreviewPropsType) => {

    return <div className={style.filmPreview}>

        <NavLink to={`/movie/` + props.filmName + `/` + props.imdbID} onClick={() => props.viewMovie(props.imdbID)}>
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