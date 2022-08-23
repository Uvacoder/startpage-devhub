const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex h-full max-w-[500px] flex-col gap-3 py-5 px-2 sm:px-10">
      {children}
    </div>
  );
};

export default Layout;
