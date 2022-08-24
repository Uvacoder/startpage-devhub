interface IButton {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  style?: 'DEFAULT' | 'SIMPLE';
}

const STYLES = {
  DEFAULT: 'rounded bg-stone-600 px-4 py-2 ',
  SIMPLE: 'py-1'
};

export default function Button({
  children,
  onClick,
  className = '',
  style = 'DEFAULT'
}: IButton) {
  return (
    <button
      className={`flex w-fit items-center justify-center gap-2 ${STYLES[style]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
      }}
    >
      {children}
    </button>
  );
}
