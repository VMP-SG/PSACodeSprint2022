import Ctext from "../Text/Ctext";

const Button = ({ children, styles, onClick, onMouseOver }) => {
  return (
    <Ctext
      onClick={onClick}
      onMouseOver={onMouseOver}
      styles={`my-auto rounded-md cursor-pointer px-5 py-2 ${styles}`}
    >
      {children}
    </Ctext>
  );
};

export default Button;
