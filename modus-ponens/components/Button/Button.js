import Ctext from "../Text/Ctext";

const Button = ({ children, styles, onClick }) => {
  return (
    <Ctext
      onClick={onClick}
      styles={`my-auto rounded-md cursor-pointer ${styles}`}
    >
      {children}
    </Ctext>
  );
};

export default Button;
