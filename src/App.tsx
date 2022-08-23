import React from 'react';

import ToDoList from './components/ToDoList';
import SearchBar from './components/SearchBar';
import ArticlesList from './components/ArticlesList';

import useCurrentTime from './hooks/useCurrentTime';
import { getDate, getTime } from './utils/time';
import Links from './components/Links';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <TimeTitle />
      <SearchBar />
      <Links />
      <ToDoList />
      <ArticlesList />
    </Layout>
  );
}

const TimeTitle = () => {
  const time = useCurrentTime();
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl text-gray-200">{`${getDate(time)}`}</div>
      <div className="text-3xl">{getTime(time)}</div>
    </div>
  );
};
