import Ctext from "../Text/Ctext";

const Button = ({ children, styles, onClick, onMouseOver }) => {
  return (
    <Ctext
      onClick={onClick}
      onMouseOver={onMouseOver}
      styles={`my-auto rounded-md px-5 py-2 ${onClick ? "cursor-pointer" : ""} ${styles}`}
    >
      {children}
    </Ctext>
  );
};

export default Button;
