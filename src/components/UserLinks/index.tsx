import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@store';
import { addLink, removeLink } from './linksActions';
import { linkType } from './linksReducer';

import Button from '../common/Button';
import Modal from '../Layout/Modal';
import LinksForm from './LinksForm';

import { ReactComponent as CustomizeIcon } from '@assets/customize.svg';

const Links = ({ links, addLink, removeLink }: UserLinksProps) => {
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
            addLink(link);
            setShowModal(false);
          }}
          onRemoveLink={(id) => removeLink(id)}
        />
      </Modal>
    </div>
  );
};

const connector = connect((state: RootState) => ({ links: state.links }), {
  addLink,
  removeLink
});
type UserLinksProps = ConnectedProps<typeof connector>;
export default connector(Links);

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
