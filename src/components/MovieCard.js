import React from 'react'
import { IMAGE_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-4'>
        <img alt="Movie Card" src={IMAGE_URL+posterPath}/>
    </div>
  )
}

export default MovieCard;