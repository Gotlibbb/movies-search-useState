import React, {useCallback, useState} from 'react';
import style from './App.module.css';
import {API} from "../../m2-dal/api";
import {Route, Switch} from "react-router-dom";
import {NotFound} from "../components/NotFound";
import {SearchComponent} from "../components/SearchComponent";
import {MovieComponent} from "../components/MovieComponent";
import {FilmPreview, MoviePreviewType} from "../components/FilmPreview";


export const App = () => {


    let [filmName, setFilmName] = useState<string>(" ")
    let [searchResult, setSearchResult] = useState<JSX.Element[] | string>()
    let [totalResults, setTotalResults] = useState<string | undefined>("")
    let [preloader, setPreloader] = useState(false);

    const searchingFilm = useCallback((page?: string) => {
        setPreloader(true)
        API.searchFilmsByName(filmName.trim(), page).then(
            (res: ResponseType) => {
                //console.log(res)
                setTotalResults(res.totalResults)

                if (res.Error) {
                    setPreloader(false)
                    setSearchResult(`"` + filmName.trim() + `" - ` + res.Error.toLowerCase())

                }
                if (!res.Error) {
                    setPreloader(false)

                    let ind = 0;
                    setSearchResult(
                        res.Search.map(
                            (el) => {
                                return <FilmPreview key={ind += 1}
                                                    viewMovie={viewMovie}
                                                    imdbID={el.imdbID}
                                                    Poster={el.Poster}
                                                    Title={el.Title} Type={el.Type} Year={el.Year}/>

                            })
                    )

                }
            }
        )


    }, [filmName, setTotalResults, setSearchResult])


    type ResponseType = {
        Error?: string
        Response: string
        Search: MoviePreviewType[]
        totalResults: string
    }


    //-----------------------------------------------------
    let [title, setTitle] = useState("")
    let [Year, setYear] = useState("")
    let [Runtime, setRuntime] = useState("")
    let [Genre, setGenre] = useState("")
    let [Director, setDirector] = useState("")
    let [Writer, setWriter] = useState("")
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
                // console.log(res)
                setTitle(res.data.Title)
                setYear(res.data.Year)
                setRuntime(res.data.Runtime)
                setGenre(res.data.Genre)
                setDirector(res.data.Director)
                setWriter(res.data.Writer)
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
//-----------------------------------------------------------------------

    }, [])

    return <div className={style.searchingContainer}>
        <div className={style.logo}><h1>Movies_Search</h1></div>

        <Switch>
            <Route path={'/'}>
                <SearchComponent
                    filmName={filmName}
                    searchingFilm={searchingFilm}
                    setFilmName={setFilmName}
                    searchResult={searchResult}
                    totalResults={totalResults}
                    preloader={preloader}
                    setPreloader={setPreloader}
                    viewMovie={viewMovie}/>
            </Route>
            <Route exact path={'/movie/:id'}>
                <MovieComponent
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
                    Writer={Writer}
                />
            </Route>
            <Route><NotFound/></Route>
        </Switch>

    </div>

}



