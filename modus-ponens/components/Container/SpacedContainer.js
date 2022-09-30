const SpacedContainer = ({ children, styles }) => {
  return <div className={`flex justify-between mb-4 ${styles}`}>{children}</div>;
};

export default SpacedContainer;
