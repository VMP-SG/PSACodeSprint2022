import Button from "./Button";

const BlueButton = ({ children, onClick }) => {
  return (
    <Button styles="bg-blue-link text-white" onClick={onClick}>
      {children}
    </Button>
  );
};

export default BlueButton;
