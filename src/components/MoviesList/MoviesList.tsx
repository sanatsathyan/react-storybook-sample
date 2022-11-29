import { useState, useEffect } from 'react';
import './MoviesList.scss'
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../interfaces/movies';
import { getAxios } from '../../common/api';

type Props = {
  search: string;
  maxResults: number;
}

export const MoviesList = ({ search, maxResults }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!search) {
      setMovies([]);
      return;
    }
    setLoading(true);
    getAxios(`https://www.omdbapi.com/`, {s: search, apikey: 'ab258a06'})
      .then(res => {
        setMovies(res.Search && res.Search.slice(0,maxResults));
        setLoading(false);
      });
  }, [search, maxResults]);

  return movies && movies.length > 0 ? <div className="movies-list-container" style={{ opacity: loading ? 0.5 : 1 }}>
    {movies.map((movie: Movie, index) => {
      return <MovieCard key={index}
        {...movie}
      ></MovieCard>
    })}
  </div> : <span className='no-results'>{ loading ? `Loading... ` : `No results found...`}</span>

}