import Button from "./Button";

const BlueBorderedButton = ({ children, onClick, onMouseOver }) => {
  return (
    <Button
      styles="bg-white border border-blue-link text-blue-link"
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </Button>
  );
};

export default BlueBorderedButton;
