import React, { useState } from 'react'
import { debounce } from '../../common/utils';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import "./MovieSearch.scss";

export const MovieSearch = () => {
  const [search, setSearch] = useState("");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return <div className='movie-search-container'>
    <h1 className='page-header'>MOVIE DATABASE</h1>
    <input type="text" placeholder='Type something to search...' className="search-textbox" onChange={debounce(onSearch)} />
    <br />
    <br />
    <MoviesList search={search} />
  </div>
}