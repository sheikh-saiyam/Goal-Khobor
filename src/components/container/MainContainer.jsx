const MainContainer = ({ children }) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl py-12">
      {children}
    </div>
  );
};

export default MainContainer;
