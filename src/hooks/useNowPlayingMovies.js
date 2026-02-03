import { useDispatch } from "react-redux";
import { API_OPTIONS, getNowPlayingUrl } from "../utils/Constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{

const dispatch= useDispatch();

  const getNowPlayingMovie=async()=>{
    const data=await fetch(getNowPlayingUrl,API_OPTIONS);
    const json=await data.json()
    dispatch(addNowPlayingMovies(json));
  }
useEffect(()=>{
 getNowPlayingMovie();
},[])

};

export default useNowPlayingMovies;