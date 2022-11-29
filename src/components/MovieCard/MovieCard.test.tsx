import { render } from '@testing-library/react';
import { Movie } from '../../interfaces/movies';
import { MovieCard } from './MovieCard';

const successProps: Movie = {
  imdbID: 'test',
  Title: "Rogue One: A Star Wars Story",
  Year: "2016",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
}

const longTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

test('check if MovieCard renders properly', () => {
  const component = render(<MovieCard {...successProps} />);
  expect(component).toBeTruthy();
})

test('check if MovieCard renders Title', () => {
  const component = render(<MovieCard {...successProps} />);  
  const titleElement = component.getAllByText(successProps.Title);
  expect(titleElement).toBeTruthy();
})

test('check if MovieCard renders Year', () => {
  const component = render(<MovieCard {...successProps} />);
  const yearElement = component.container.querySelector('h1 span')
  expect(yearElement?.textContent?.includes(successProps.Year)).toBeTruthy();
})

test('check if MovieCard renders Type', () => {
  const component = render(<MovieCard {...successProps} />);
  const typeElement = component.getAllByText(successProps.Type);
  expect(typeElement).toBeTruthy();
})

test('check if MovieCard handles long Title', () => {
  const component = render(<MovieCard {...successProps} Title={longTitle} />);  
  const titleElement = component.container.querySelector('h1')
  expect(titleElement?.textContent?.includes(longTitle)).toBeFalsy();
})

test('check if MovieCard truncates long Title properly', () => {
  const component = render(<MovieCard {...successProps} Title={longTitle} />);  
  const titleElement = component.container.querySelector('h1')
  expect(titleElement?.textContent?.includes(longTitle.substring(0,50))).toBeTruthy();
})

test('check if MovieCard renders Poster', () => {
  const component = render(<MovieCard {...successProps} />);  
  const titleElement = component.container.querySelector('img')
  expect(titleElement?.src).toEqual(successProps.Poster);
})

test('check if MovieCard handles N/A Poster', () => {
  const component = render(<MovieCard {...successProps} Poster={'N/A'} />);  
  const titleElement = component.container.querySelector('img')
  expect(titleElement?.src).toContain("no-image-available.png");
})