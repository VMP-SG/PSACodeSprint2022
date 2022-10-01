const ComponentContainer = ({ children, styles }) => {
  return <div className={`flex w-2/3 m-auto py-16 bg-white text-black ${styles}`}>{children}</div>;
};

export default ComponentContainer;
