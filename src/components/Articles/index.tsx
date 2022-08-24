import { useEffect } from 'react';

import { AppDispatch } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from './articlesActions';
import { selectArticles, selectArticlesFetchStatus } from './articlesReducer';

const ArticlesList = () => {
  const articles = useSelector(selectArticles);
  const status = useSelector(selectArticlesFetchStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(status);

    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      {articles?.map(({ title, author }) => (
        <div key={title} className="flex flex-col">
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
