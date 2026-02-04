import { useDispatch } from "react-redux";
import { API_OPTIONS, getNowPlayingUrl } from "../utils/Constants";
import { useEffect } from "react";
import {  addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies=()=>{

const dispatch= useDispatch();

  const getTopRatedMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    const json=await data.json()
    dispatch(addTopRatedMovies(json));
  }
useEffect(()=>{
 getTopRatedMovies();
},[])

};

export default useTopRatedMovies;