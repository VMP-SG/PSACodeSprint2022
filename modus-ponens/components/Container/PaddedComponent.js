const PaddedComponent = ({ children, styles, onClick }) => {
  return <div 
    className={`p-2 ${styles}`}
    onClick={onClick ? () => onClick() : null}
  >{children}</div>;
};

export default PaddedComponent;
