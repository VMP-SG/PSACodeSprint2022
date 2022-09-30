const CenteredContainer = ({ children, styles }) => {
  return <div className={`flex justify-center ${styles}`}>{children}</div>;
};

export default CenteredContainer;
