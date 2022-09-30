const MarginalizedComponent = ({ children, styles }) => {
  return <div className={`m-3 ${styles}`}>{children}</div>;
};

export default MarginalizedComponent;
