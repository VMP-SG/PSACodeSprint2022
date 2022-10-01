import Button from "./Button";

const GreenButton = ({ children, onClick }) => {
  return (
    <Button styles="bg-green-0 text-white" onClick={onClick}>
      {children}
    </Button>
  );
};

export default GreenButton;
