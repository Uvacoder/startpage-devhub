const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function getDate(date: Date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

export function getTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <div className="flex items-center">
      {hours < 10 ? `0${hours}` : hours}
      <div className="animate-pulse">:</div>
      {minutes < 10 ? `0${minutes}` : minutes}
    </div>
  );
}
