import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { addLink } from './linksActions';
import { selectLinks, linkType } from './linksReducer';

import Button from '../common/Button';

const Links = () => {
  const links = useSelector(selectLinks);
  const dispatch = useDispatch<AppDispatch>();
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const handleClick = () =>
    dispatch(addLink({ link: 'https://youtube.com', text: 'YouTube' }));

  return (
    <div ref={animationParent} className="flex flex-wrap items-stretch gap-2">
      {links.map((link) => (
        <LinkItem key={link.id} {...link} />
      ))}
      <Button onClick={handleClick}>Customize links</Button>
    </div>
  );
};

export default Links;

const LinkItem = ({ link, iconURL, text }: linkType) => {
  const iconSize = text ? `20px` : `25px`;
  return (
    <Button>
      <a
        href={link}
        className="flex items-center gap-1"
        target="_blank"
        rel="noreferrer noopener"
      >
        {iconURL ? (
          <img
            loading="lazy"
            className={`min-w-[${iconSize}] max-w-[${iconSize}]`}
            src={iconURL}
          />
        ) : null}
        {text ? <span>{text}</span> : null}
      </a>
    </Button>
  );
};
