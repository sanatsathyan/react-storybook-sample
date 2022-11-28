import { Movie } from "../../interfaces/movies"
import "./MovieCard.scss"

type Props = {
  data: Movie;
}

export const MovieCard = ({data}: Props) => {

  return <div className='movie-card-container'>
    <img src={data.Poster === "N/A" ? require('../../images/no-image-available.png') : data.Poster} alt={data.Title} />
    <h1>{data.Title}&nbsp;<span>({data.Year})</span></h1>
    <h4>{data.Type}</h4>
  </div>
}