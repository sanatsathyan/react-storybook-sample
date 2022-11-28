import { useState, useEffect } from 'react';
import './MoviesList.scss'
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../interfaces/movies';

type Props = {
  search: string;
}

export const MoviesList = ({ search }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(!search) {
      setMovies([]);
      return;
    }
    setLoading(true);
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=ab258a06`)
      .then(res => res.json())
      .then(res => {
        setMovies(res.Search);
        setLoading(false);
      });
  }, [search]);

  return <div className="movies-list-container" style={{opacity: loading ? 0.5 : 1}}>
    {movies && movies.map((movie: Movie, index) => {
      return <MovieCard key={index} data={movie}></MovieCard>
    })}
  </div>

}