import Button from "./Button";

const BlueButton = ({ children, onClick, onMouseOver, styles }) => {
  return (
    <Button
      styles={`bg-blue-link text-white primary-button ${styles}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
