import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieCard } from '../components/MovieCard/MovieCard';

export default {
  title: 'MoviesSearch/Movie Card',
  component: MovieCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  "Title": "Rogue One: A Star Wars Story",
  "Year": "2016",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  "Title": "Rogue One: A Star Wars Story",
  "Year": "2016",
  "Type": "movie",
  "Poster": "N/A"
};
