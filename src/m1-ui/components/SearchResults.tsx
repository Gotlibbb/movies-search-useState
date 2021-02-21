import React from "react";
import style from "../app/App.module.css";
import {Pagination} from "./Pagination";
import {Preloader} from "../assets/Preloader";
import {useParams} from "react-router-dom";


export const SearchResults = React.memo((props: SearchResultsPropsType) => {
let film : {filmName: string} = useParams()
    console.log(film)

    // useEffect(()=>{
    //     debugger
    //     props.searchingFilm( String(props.currentPage), film.filmName)
    // },[])






    return <div className={style.searchingBlock}>


        <div className={style.searchResult}>


            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
            />

            {props.preloader ? <Preloader/> :
                <div className={style.searchResult}>
                    {props.searchResult}
                </div>
            }
            <Pagination searchingFilm={props.searchingFilm}
                        totalResults={props.totalResults}
                        onlySwitch={true}
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
            />

        </div>
    </div>
})


type SearchResultsPropsType = {
    setPreloader: (preloader: boolean) => void
    preloader: boolean
    viewMovie: (filmId: string) => void

    setCurrentPage: (page: number) => void
    currentPage: number

    searchResult: JSX.Element[] | string
    totalResults: string | undefined
    searchingFilm: (  page?: string ) => void
    filmName: string




}

