import React from 'react';

import useCurrentTime from './hooks/useCurrentTime';
import { getDate, getTime } from './utils/time';

import { ReactComponent as DuckDuckGo } from './assets/duckduckgo.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';

export default function App() {
  return (
    <Layout>
      <TimeTitle />
      <SearchBar />
    </Layout>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex max-w-[500px] flex-col gap-3 py-5 px-10">
      {children}
    </div>
  );
};

const TimeTitle = () => {
  const time = useCurrentTime();
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl text-gray-200">{`${getDate(time)}`}</div>
      <div className="text-3xl">{getTime(time)}</div>
    </div>
  );
};

const SearchBar = () => {
  const DUCK_SIZE = 30;
  const SEARCH_SIZE = 20;
  return (
    <div className="relative flex">
      <input
        type="text"
        name="searchbar-duckduckgo"
        id="searchbar-duckduckgo"
        placeholder="Search on DuckDuckGo..."
        className="h-[50px] w-full rounded bg-[#3e3e3e] px-4 pl-[55px]"
      />
      <DuckDuckGo
        className="pointer-events-none absolute top-[10px] left-[15px]"
        width={DUCK_SIZE}
        height={DUCK_SIZE}
      />
      <SearchIcon
        className="absolute top-[15px] right-[15px] bg-inherit"
        width={SEARCH_SIZE}
        height={SEARCH_SIZE}
      />
    </div>
  );
};
