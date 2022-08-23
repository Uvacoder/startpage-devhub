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
  return (
    <div className="flex items-center">
      {date.getHours()}
      <div className="animate-pulse">:</div>
      {date.getMinutes()}
    </div>
  );
}
