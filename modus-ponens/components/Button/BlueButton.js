import Button from "./Button";

const BlueButton = ({ children, onClick, onMouseOver }) => {
  return (
    <Button
      styles="bg-blue-link text-white"
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
