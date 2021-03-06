import React, {useCallback, useState} from 'react';
import style from '../u3-css/c1-App.module.css';
import {API} from "../../m2-dal/api";
import {Route, Switch} from "react-router-dom";
import {SearchComponent} from "../u2-components/SearchComponent";
import {MovieComponent} from "../u2-components/MovieComponent";
import {FilmPreview, MoviePreviewPropsType} from "../u2-components/FilmPreview";
import {SearchResults} from "../u2-components/SearchResults";


export const App = React.memo(() => {

    console.log("app render")

    let [title, setTitle] = useState("")
    let [Year, setYear] = useState("")
    let [Runtime, setRuntime] = useState("")
    let [Genre, setGenre] = useState("")
    let [Director, setDirector] = useState("")
    let [Actors, setActors] = useState("")
    let [Plot, setPlot] = useState("")
    let [Language, setLanguage] = useState("")
    let [Country, setCountry] = useState("")
    let [Poster, setPoster] = useState("")
    let [imdbRating, setimdbRating] = useState("")
    let [imdbID, setimdbID] = useState("")
    let [Type, setType] = useState("")
    let [BoxOffice, setBoxOffice] = useState("")


    let [Production, setProduction] = useState("")
    const viewMovie = useCallback((filmId: string) => {
        setPreloader(true)

        API.searchFilmsByImdbId(filmId).then(
            (res) => {

                setPreloader(false)

                setTitle(res.data.Title)
                setYear(res.data.Year)
                setRuntime(res.data.Runtime)
                setGenre(res.data.Genre)
                setDirector(res.data.Director)
                setActors(res.data.Actors)
                setPlot(res.data.Plot)
                setLanguage(res.data.Language)
                setCountry(res.data.Country)
                setPoster(res.data.Poster)
                setimdbRating(res.data.imdbRating)
                setimdbID(res.data.imdbID)
                setType(res.data.Type)
                setBoxOffice(res.data.BoxOffice)
                setProduction(res.data.Production)
            }
        )

    }, [])


    let [filmName, setFilmName] = useState<string>("")
    let [searchResult, setSearchResult] = useState<JSX.Element[] | string>()
    let [totalResults, setTotalResults] = useState<string | undefined>("")
    let [currentPage, setCurrentPage] = useState<number>(1)
    let [preloader, setPreloader] = useState(false);


    const searchingFilm = useCallback((page?: string, filmPar?: string) => {
        setPreloader(true)
        let film = filmPar ? filmPar : filmName

        API.searchFilmsByName(film.trim(), page).then(
            (res: ResponseType) => {

                setTotalResults(res.totalResults)

                if (res.Error) {
                    setPreloader(false)
                    setSearchResult(`"` + film.trim() + `" - ` + res.Error.toLowerCase())

                }
                if (!res.Error) {
                    setPreloader(false)

                    setSearchResult(
                        res.Search.map(
                            (el, i) => {
                                return <FilmPreview key={i}
                                                    filmName={filmName}
                                                    viewMovie={viewMovie}
                                                    imdbID={el.imdbID}
                                                    Poster={el.Poster}
                                                    Title={el.Title} Type={el.Type} Year={el.Year}/>

                            })
                    )

                }
            }
        )


    }, [filmName, viewMovie, setTotalResults, setSearchResult])


    type ResponseType = {
        Error?: string
        Response: string
        Search: MoviePreviewPropsType[]
        totalResults: string
    }
    //-----------------------------------------------------


    return <div className={style.app}>

        <SearchComponent
            currentPage={currentPage}
            filmName={filmName}
            searchingFilm={searchingFilm}
            setFilmName={setFilmName}
            setCurrentPage={setCurrentPage}
        />

        <Switch>


            <Route path={'/movies-search-useState/search-results/:filmNameUrl/:page'}>

                <SearchResults
                    setFilmName={setFilmName}
                    searchingFilm={searchingFilm}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    searchResult={searchResult}
                    totalResults={totalResults}
                    preloader={preloader}
                    filmName={filmName}

                />

            </Route>
            <Route path={'/movies-search-useState/movie/:filmNameUrl/:movieId'}>
                <MovieComponent
                    setFilmName={setFilmName}
                    preloader={preloader}
                    Title={title}
                    imdbID={imdbID}
                    Year={Year}
                    Type={Type}
                    Poster={Poster}
                    Actors={Actors}
                    BoxOffice={BoxOffice}
                    Director={Director}
                    Country={Country}
                    Genre={Genre}
                    imdbRating={imdbRating}
                    Language={Language}
                    Plot={Plot}
                    Production={Production}
                    Runtime={Runtime}
                    viewMovie={viewMovie}
                    currentPage={currentPage}
                />

            </Route>
        </Switch>

    </div>

})





