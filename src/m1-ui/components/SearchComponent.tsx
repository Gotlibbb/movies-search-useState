import React, {useCallback, useState} from "react";
import style from "../app/App.module.css";
import {Pagination} from "./Pagination";
import {API} from "../../m2-dal/api";
import {FilmPreview, MoviePreviewType} from "./FilmPreview";
import { Preloader } from "../assets/Preloader";


export const SearchComponent = React.memo((props: SearchComponentPropsType) => {
    let [filmName, setFilmName] = useState<string>(" ")
    let [searchResult, setSearchResult] = useState<JSX.Element[] | string>()
    let [totalResults, setTotalResults] = useState<string | undefined>("")

    let [currentPage, setCurrentPage] = useState<number>(1)

    const searchingFilm = useCallback((page?: string) => {
        props.setPreloader(true)
        API.searchFilmsByName(filmName.trim(), page).then(
            (res: ResponseType) => {
                //console.log(res)
                setTotalResults(res.totalResults)

                if (res.Error) {
                    props.setPreloader(false)
                    setSearchResult(`"` + filmName.trim() + `" - ` + res.Error.toLowerCase())

                }
                if (!res.Error) {
                    props.setPreloader(false)

                    let ind = 0;
                    setSearchResult(
                        res.Search.map(
                            (el) => {
                                return <FilmPreview key={ind += 1}
                                                    viewMovie={props.viewMovie}
                                                    imdbID={el.imdbID}
                                                    Poster={el.Poster}
                                                    Title={el.Title} Type={el.Type} Year={el.Year}/>

                            })
                    )

                }
            }
        )


},[props.viewMovie,props.setPreloader, filmName, setTotalResults, setSearchResult])



    return <div className={style.searchingBlock}>
        <div className={style.inputZone}>
        <input type={"text"}
               autoFocus={true}
               placeholder={"Enter name of movie "}
               value={filmName}
               onChange={(e) => setFilmName(e.target.value)}
               onKeyPress={(e) => {
                   if (e.key === "Enter") searchingFilm()
               }}
        />

        <button onClick={() => searchingFilm()}>Search</button>
        </div>
        <div className={style.searchResult}>


            <Pagination searchingFilm={searchingFilm}
                        totalResults={totalResults}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />

            {props.preloader ? <Preloader/> :
                <div className={style.searchResult}>
                    {searchResult}
                </div>
            }
            <Pagination searchingFilm={searchingFilm}
                        totalResults={totalResults}
                        onlySwitch= {true}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />

        </div>
    </div>
} )

type SearchComponentPropsType = {
    setPreloader: (preloader: boolean) =>void
    preloader: boolean
    viewMovie: (filmId: string) => void
}


type ResponseType = {
    Error?: string
    Response: string
    Search: MoviePreviewType[]
    totalResults: string
}
