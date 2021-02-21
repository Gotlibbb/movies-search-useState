import axios from  "axios";

const instance = {
    baseURL: 'http://www.omdbapi.com/',

};
const apikey = '&apikey=ff4140ae';
const axiosInstance = axios.create(instance);


export const API = {

    searchFilmsByName: (name: string|undefined, page :string="1" ) => axiosInstance.get(`?s=${name}&page=${page}${apikey}`).then(res=>res.data),

    searchFilmsByImdbId: (id: string) => axiosInstance.get(`?i=${id}${apikey}`).then(res=>res),

};

