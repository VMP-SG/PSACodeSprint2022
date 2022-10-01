import Button from "./Button";

const BlueBorderedButton = ({ children, onClick }) => {
  return (
    <Button styles="bg-white border border-blue-link text-blue-link" onClick={onClick}>
      {children}
    </Button>
  );
};

export default BlueBorderedButton;
