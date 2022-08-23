type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = ''
}: PropTypes) {
  return (
    <button
      className={`flex w-fit items-center justify-center gap-2 rounded bg-stone-600 px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
