import Ctext from "../Text/Ctext";

const Button = ({ children, styles, onClick }) => {
  return (
    <Ctext
      onClick={onClick}
      styles={`my-auto rounded-md cursor-pointer w-[100px] px-5 py-2  ${styles}`}
    >
      {children}
    </Ctext>
  );
};

export default Button;
