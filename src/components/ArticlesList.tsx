const ARTICLES = [
  {
    title: 'Setup and use Redux Toolkit with Next.js (begineer’s guide)',
    pubDate: '2022-08-23 10:49:06',
    link: 'https://medium.com/@mpudasaini17/setup-and-use-redux-toolkit-with-next-js-begineers-guide-5ebc32eef31e?source=rss------react-5',
    author: 'Onur Dayıbaşı'
  },
  {
    title: 'Setup and use Redux Toolkit with Next.js (begineer’s guide)',
    pubDate: '2022-08-23 10:49:06',
    link: 'https://medium.com/@mpudasaini17/setup-and-use-redux-toolkit-with-next-js-begineers-guide-5ebc32eef31e?source=rss------react-5',
    author: 'Onur Dayıbaşı'
  }
];

const ArticlesList = () => {
  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      {ARTICLES.map(({ title, author }) => (
        <div className="flex flex-col">
          <div className="text-lg">{title}</div>
          <div className="text-stone-300">{author}</div>
        </div>
      ))}
      <button className="ml-auto w-fit rounded bg-stone-500 px-4 py-2">
        Manage my interests
      </button>
    </div>
  );
};

export default ArticlesList;
