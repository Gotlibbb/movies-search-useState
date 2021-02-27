import React, {useEffect} from "react";
import style from "../u3-css/c3-Results.module.css"
import {Pagination} from "./Pagination";
import {Preloader} from "../u4-assets/Preloader";
import {useParams} from "react-router-dom";


export const SearchResults = React.memo((props: SearchResultsPropsType) => {

    let url: { filmNameUrl: string, page: string } = useParams()


    useEffect(() => {

        props.setCurrentPage(Number(url.page))
        props.setFilmName(url.filmNameUrl)
        props.searchingFilm(url.page, url.filmNameUrl)
    }, [])


    return <div className={style.resultsContainer}>



            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
                        filmName={props.filmName}


            />

            {props.preloader ? <Preloader/> :
                <div className={style.resultsBlock}>
                    {props.searchResult}
                </div>
            }
            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        onlySwitch={true}
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
                        filmName={props.filmName}
            />

    </div>
})


type SearchResultsPropsType = {
    preloader: boolean
    setCurrentPage: (page: number) => void
    currentPage: number
    searchResult: JSX.Element[] | string | undefined
    totalResults: string | undefined
    searchingFilm: (page?: string, filmPar?: string) => void
    setFilmName: (filmName: string) => void
    filmName: string


}

