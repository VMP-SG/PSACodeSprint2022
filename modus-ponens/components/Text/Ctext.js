const Ctext = ({ children, styles, onClick, onMouseOver }) => {
  return (
    <div
      className={`text-center font-primary ${styles}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
};

export default Ctext;
