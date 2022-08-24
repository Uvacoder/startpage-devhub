import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { AppDispatch } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from './articlesActions';
import {
  articleType,
  selectArticles,
  selectArticlesFetchStatus
} from './articlesReducer';
import { selectInterests } from './interestsReducer';
import { addInterest, removeInterest } from './interestsActions';

import Button from '@components/common/Button';
import InterestsForm from './InterestsForm';
import Modal from '@components/Layout/Modal';
import { filterMediumDescription } from '@utils/articles';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';
import { ReactComponent as MediumLogo } from '@assets/medium-logo.svg';

const ArticlesList = () => {
  const [showModal, setShowModal] = useState(false);
  const articles = useSelector(selectArticles);
  const interests = useSelector(selectInterests);
  const status = useSelector(selectArticlesFetchStatus);
  const dispatch = useDispatch<AppDispatch>();
  const [animationParent] = useAutoAnimate<HTMLUListElement>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 rounded bg-stone-700 px-4 py-2 pb-4 pr-6">
      <ul className="flex flex-col gap-4" ref={animationParent}>
        {status === 'loading' && <div>Loading ...</div>}
        {articles.map(({ link, ...rest }) => (
          <Article key={link} {...rest} link={link} />
        ))}
      </ul>
      <Button
        style="SIMPLE"
        className="ml-auto"
        onClick={() => setShowModal(true)}
      >
        <CustomizeIcon />
        Manage my interests
      </Button>
      <Modal handleClose={() => setShowModal(false)} isOpen={showModal}>
        <InterestsForm
          data={interests}
          onAdd={(interest) => dispatch(addInterest(interest))}
          onDelete={(interest) => dispatch(removeInterest(interest))}
        />
      </Modal>
    </div>
  );
};

export default ArticlesList;

const Article = ({ link, title, description, author }: articleType) => {
  return (
    <li className="flex cursor-pointer items-start gap-4">
      <MediumLogo className="mt-[5px] min-w-[25px]" width={25} height={25} />
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
        <div className="text-stone-200">{author}</div>
      </div>
    </li>
  );
};
