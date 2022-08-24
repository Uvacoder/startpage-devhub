import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store';
import { addLink, removeLink } from './linksActions';
import { selectLinks, linkType } from './linksReducer';

import Button from '../common/Button';
import Modal from '../Layout/Modal';
import LinksForm from './LinksForm';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';

const Links = () => {
  const links = useSelector(selectLinks);
  const dispatch = useDispatch<AppDispatch>();
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);

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
        <LinksForm
          onSubmit={(link) => {
            dispatch(addLink(link));
            setShowModal(false);
          }}
          onRemoveLink={(id) => dispatch(removeLink(id))}
        />
      </Modal>
    </div>
  );
};

export default Links;

const LinkItem = ({ link, iconURL, text }: linkType) => {
  return (
    <a
      onClick={(e) => e.stopPropagation()}
      href={link}
      className="button button--default"
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
  );
};
