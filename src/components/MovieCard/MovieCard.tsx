import { Movie } from "../../interfaces/movies"
import "./MovieCard.scss"

type Props = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

export const MovieCard = ({Poster,Title,Year,Type}: Props) => {

  return <div className='movie-card-container'>
    <img src={Poster === "N/A" ? require('../../images/no-image-available.png') : Poster} alt={Title} />
    <h1>{Title.length > 50 ? (Title.substring(0, 50) + "...") : Title}&nbsp;<span>({Year})</span></h1>
    <h4>{Type}</h4>
  </div>
}