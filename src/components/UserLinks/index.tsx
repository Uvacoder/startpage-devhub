import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store';
import { addLink } from './linksActions';
import { selectLinks, linkType } from './linksReducer';

import Button from '../common/Button';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';
import { useState } from 'react';
import Modal from '../Layout/Modal';

const Links = () => {
  const links = useSelector(selectLinks);
  const dispatch = useDispatch<AppDispatch>();
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () =>
    // dispatch(addLink({ link: 'https://youtube.com', text: 'YouTube' }));
    setShowModal(true);

  return (
    <div ref={animationParent} className="flex flex-wrap items-stretch gap-2">
      {links.map((link) => (
        <LinkItem key={link.id} {...link} />
      ))}
      <Button
        style="SIMPLE"
        onClick={() => setShowModal(true)}
        className="px-2"
      >
        <CustomizeIcon />
        Customize links
      </Button>
      <Modal handleClose={() => setShowModal(false)} isOpen={showModal}>
        <h1 className="text-2xl">Customize links</h1>
      </Modal>
    </div>
  );
};

export default Links;

const LinkItem = ({ link, iconURL, text }: linkType) => {
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
            className={`min-w-[20px] max-w-[20px]`}
            src={iconURL}
          />
        ) : null}
        {text ? <span>{text}</span> : null}
      </a>
    </Button>
  );
};
