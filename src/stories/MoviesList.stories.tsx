import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MoviesList } from '../components/MoviesList/MoviesList';

export default {
  title: 'MoviesSearch/Movie List',
  component: MoviesList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MoviesList>;

const Template: ComponentStory<typeof MoviesList> = (args) => <MoviesList {...args} />;

export const WithResults = Template.bind({});
WithResults.args = {
  search: 'Star Wars',
  maxResults: 8
};

export const EmptyResults = Template.bind({});
EmptyResults.args = {
  search: 'qwewq',
  maxResults: 8
};
