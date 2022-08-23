const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex max-w-[500px] flex-col gap-3 py-5 px-10">
      {children}
    </div>
  );
};

export default Layout;
