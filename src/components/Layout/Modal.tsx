import { createPortal } from 'react-dom';

import Layout from './';

import { ReactComponent as ExitIcon } from '../../assets/cross.svg';

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: IModal) {
  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div
        className="fixed top-0 left-0 h-screen w-screen"
        onClick={handleClose}
      >
        <Layout className="max-w-[600px] py-4">
          <div
            className="h-full rounded-lg bg-stone-800/80 px-5 py-2 shadow backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={handleClose}
              className="ml-auto -mr-2 w-fit cursor-pointer p-2"
            >
              <ExitIcon width={25} height={25} />
            </div>
            <div className="flex flex-col gap-4">{children}</div>
          </div>
        </Layout>
      </div>
    </ReactPortal>
  );
}

interface IReactPortal {
  children: React.ReactNode;
}

export function ReactPortal({ children }: IReactPortal) {
  if (document) {
    const element = document.getElementById('portal-root');
    if (!element) return null;
    return createPortal(children, element);
  }
  return null;
}
