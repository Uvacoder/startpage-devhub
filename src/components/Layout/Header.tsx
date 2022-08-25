import SearchBar from '@components/SearchBar';
import useCurrentTime from '@hooks/useCurrentTime';
import { getDate, getTime } from '@utils/time';

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex flex-col gap-2 bg-[#292929] py-2 sm:py-4">
      <TimeTitle />
      <SearchBar />
    </div>
  );
}

const TimeTitle = () => {
  const time = useCurrentTime();
  return (
    <div className="flex items-center justify-between px-4 sm:p-0">
      <div className="text-xl text-gray-200">{`${getDate(time)}`}</div>
      <div className="text-3xl">{getTime(time)}</div>
    </div>
  );
};
