type PropTypes = {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  handleClick,
  className = ''
}: PropTypes) {
  return (
    <button
      className={`flex w-fit items-center justify-center gap-2 rounded bg-stone-500 px-4 py-2 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
