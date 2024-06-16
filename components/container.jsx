const Container = ({ children }) => {
  return (
    <div className="flex flex-col  max-w-[1400px] mx-auto bg-white h-screen">
      {children}
    </div>
  );
};
export default Container;
