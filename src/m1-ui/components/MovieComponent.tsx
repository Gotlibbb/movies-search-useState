import {NotFound} from "./NotFound";
import style from "../app/App.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {Preloader} from "../assets/Preloader";

export const MovieComponent = React.memo((props: MoviePropsType) => {
    if (!props.Title) return <NotFound/>
    if (props.preloader) return <Preloader/>

    return <div className={style.moviePage}>
        <NavLink to={"/"}>⇦ Back to search</NavLink>
        <div className={style.movieContainer}>
            <img src={props.Poster} alt={"poster"}/>
            <div className={style.movieInfo}>
                <div className={style.Title}>{props.Title}</div>
                <div><u><b>Production</b></u>: {props.Production}</div>
                <div><u><b>Type</b></u>: {props.Type}</div>
                <div><u><b>Genre</b></u>: {props.Genre}</div>
                <div><u><b>Awards</b></u>: {props.Awards}</div>
                <div><u><b>imdbRating</b></u>: {props.imdbRating}</div>
                <div><u><b>Country</b></u>: {props.Country}</div>
                <div><u><b>Year</b></u>: {props.Year}</div>
                <div><u><b>Language</b></u>: {props.Language}</div>
                <div><u><b>Director</b></u>: {props.Director}</div>
                <div><u><b>Actors</b></u>: {props.Actors}</div>
                <div><u><b>Brief description</b></u>: {props.Plot}</div>
                <div><u><b>Box office</b></u>: {props.BoxOffice}</div>
                <div><u><b>Runtime</b></u>: {props.Runtime}</div>
            </div>
        </div>
    </div>

})



type MoviePropsType = {
    preloader: boolean
    Title: string
    Year?: string
    Rated?: string
    Released?: string
    Runtime?: string
    Genre?: string
    Director?: string
    Writer?: string
    Actors?: string
    Plot?: string
    Language?: string
    Country?: string
    Awards?: string
    Poster?: string
    Ratings?: { Source?: string, Value?: string }[]
    Metascore?: string
    imdbRating?: string
    imdbVotes?: string
    imdbID: string
    Type?: string
    DVD?: string
    BoxOffice?: string
    Production?: string
    Website?: string
    Response?: string
}