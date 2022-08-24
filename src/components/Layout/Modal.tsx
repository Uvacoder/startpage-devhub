import { createPortal } from 'react-dom';

import Layout from './MainLayout';

import { ReactComponent as ExitIcon } from '@assets/cross.svg';
import { useEffect } from 'react';

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: IModal) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    if (!isOpen) {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <ReactPortal>
      <div
        className="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-sm"
        onClick={handleClose}
      >
        <Layout className="max-w-[600px] px-0 py-0 sm:py-4">
          <div
            className="h-full overflow-y-auto rounded-lg border-stone-600 bg-stone-800/80 px-5 py-2 pb-6 shadow sm:border"
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
