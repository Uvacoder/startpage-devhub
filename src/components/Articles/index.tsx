import { useEffect } from 'react';

import { AppDispatch } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from './articlesActions';
import { selectArticles, selectArticlesFetchStatus } from './articlesReducer';

import Button from '@components/common/Button';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';
import { ReactComponent as MediumLogo } from '@assets/medium-logo.svg';
import { filterMediumDescription } from '@utils/articles';

const ArticlesList = () => {
  const articles = useSelector(selectArticles);
  const status = useSelector(selectArticlesFetchStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, []);

  return (
    <div className="flex flex-col flex-wrap gap-4 rounded bg-stone-700 px-4 py-2 pb-4 pr-6">
      {articles.map(({ title, author, link, description }) => (
        <div key={link} className="flex cursor-pointer items-start gap-4">
          <MediumLogo
            className="mt-[5px] min-w-[25px]"
            width={25}
            height={25}
          />
          <div className="flex flex-col">
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-md hover:underline"
            >
              {title}
            </a>
            <div className="text-sm text-stone-300">
              {filterMediumDescription(description)}
            </div>
            <div className="text-stone-300">{author}</div>
          </div>
        </div>
      ))}
      <Button style="SIMPLE" className="ml-auto">
        <CustomizeIcon />
        Manage my interests
      </Button>
    </div>
  );
};

export default ArticlesList;
