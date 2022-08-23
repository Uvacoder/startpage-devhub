const Layout = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container mx-auto flex h-full max-w-[500px] flex-col gap-3 py-5 px-2 sm:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
