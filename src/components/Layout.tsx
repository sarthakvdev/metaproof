const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <div className="flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
