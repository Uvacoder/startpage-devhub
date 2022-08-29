import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { RootState } from '@store';
import { connect, ConnectedProps } from 'react-redux';
import { fetchArticles } from './articlesActions';
import { articleType } from './articlesReducer';
import { addInterest, removeInterest } from './interestsActions';

import Button from '@components/common/Button';
import InterestsForm from './InterestsForm';
import Modal from '@components/Layout/Modal';
import { filterMediumDescription } from '@utils/articles';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';
import { ReactComponent as MediumLogo } from '@assets/medium-logo.svg';

const ArticlesList = ({ interests, articles, status }: ArticlesProps) => {
  const [showModal, setShowModal] = useState(false);
  const [animationParent] = useAutoAnimate<HTMLUListElement>();

  useEffect(() => {
    if (status === 'idle' && interests.length > 0) {
      fetchArticles();
    }
  }, [interests]);

  return (
    <div className="flex flex-col gap-4 rounded bg-stone-700 px-4 py-2 pb-4 pr-6">
      <ul className="flex flex-col gap-4" ref={animationParent}>
        {status === 'loading' && <div>Loading ...</div>}
        {interests.length === 0 && (
          <div>Choose some categories to get articles...</div>
        )}
        {status === 'error' && (
          <div className="text-red-400">There's been an error😔</div>
        )}
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
          onAdd={(interest) => addInterest(interest)}
          onDelete={(interest) => removeInterest(interest)}
        />
      </Modal>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    articles: state.articles.data,
    interests: state.interests,
    status: state.articles.status
  }),
  {
    fetchArticles,
    addInterest,
    removeInterest
  }
);
type ArticlesProps = ConnectedProps<typeof connector>;
export default connector(ArticlesList);

const Article = ({ link, title, description, category }: articleType) => {
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
        <div className="badge mt-1 text-sm">{category}</div>
      </div>
    </li>
  );
};
