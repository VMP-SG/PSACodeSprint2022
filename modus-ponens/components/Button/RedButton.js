import Button from "./Button";

const RedButton = ({ children, onClick }) => {
  return (
    <Button styles="bg-dark-red text-white red-button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default RedButton;
