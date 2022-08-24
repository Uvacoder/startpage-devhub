import { useState } from 'react';
import { ReactComponent as DuckDuckGo } from '@assets/duckduckgo.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';

const SearchBar = () => {
  const DUCK_SIZE = 30;
  const SEARCH_SIZE = 20;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    return (window.location.href = `https://duckduckgo.com/?q=${searchQuery}`);
  };

  return (
    <div className="relative flex">
      <input
        type="text"
        name="searchbar-duckduckgo"
        id="searchbar-duckduckgo"
        placeholder="Search on DuckDuckGo..."
        className="h-[50px] w-full rounded bg-stone-700 px-4 pl-[55px]"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === 'Enter' && handleSearch()
        }
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
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
