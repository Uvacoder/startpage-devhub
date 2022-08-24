interface IButton {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  style?: 'DEFAULT' | 'SIMPLE';
}

const STYLES = {
  DEFAULT: 'button--default',
  SIMPLE: 'button--simple'
};

export default function Button({
  children,
  onClick,
  className = '',
  style = 'DEFAULT'
}: IButton) {
  return (
    <button
      className={`button ${STYLES[style]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
      }}
    >
      {children}
    </button>
  );
}
