import { useState } from 'react';

import Button from '../common/Button';
import { isValidHttpURL } from '@utils/url';
import { useSelector } from 'react-redux';
import { selectLinks } from './linksReducer';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface IProps {
  onSubmit: ({ link, text }: { link: string; text?: string }) => void;
  onRemoveLink: (id: string) => void;
}

export default function LinksForm({ onSubmit, onRemoveLink }: IProps) {
  const links = useSelector(selectLinks);
  const [animationParent] = useAutoAnimate<HTMLUListElement>();
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

  const onEnter = () => {
    if (link.length === 0 || !isValidHttpURL(link)) return;
    onSubmit({ link, text });
  };

  return (
    <>
      <h1 className="text-2xl">Customize links</h1>
      <ul className="flex flex-col gap-2" ref={animationParent}>
        {links.map(({ id, text, link }) => (
          <div
            className="flex items-center gap-1 rounded bg-stone-700 px-4 py-1"
            id={id}
          >
            <div>{text && text !== '' ? text : link}</div>
            <div
              className="button button--simple ml-auto underline"
              onClick={() => onRemoveLink(id)}
            >
              Delete
            </div>
          </div>
        ))}
      </ul>
      <div className="h-5" />
      <h1 className="text-xl">Add link</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter link address..."
          className="input-text"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLink(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Enter text for a link (optional)..."
          className="input-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button className="ml-auto" onClick={onEnter}>
          Add
        </Button>
      </form>
    </>
  );
}
