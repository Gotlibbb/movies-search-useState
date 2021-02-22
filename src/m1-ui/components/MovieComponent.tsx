import style from "../app/App.module.css";
import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Preloader} from "../assets/Preloader";

export const MovieComponent = React.memo((props: MoviePropsType) => {
    let url: { movieId: string, filmNameUrl: string } = useParams()

    useEffect(() => {
        props.setFilmName(url.filmNameUrl)
        props.viewMovie(url.movieId)

    }, [])

    if (props.preloader) return <Preloader/>

    return <div className={style.moviePage}>
        <NavLink to={"/movies-search-useState/search-results/" + url.filmNameUrl + `/` + props.currentPage}>⇦ Back to search</NavLink>
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
    viewMovie: (filmId: string) => void
    setFilmName: (filmName: string) => void
    currentPage: number
}