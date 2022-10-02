import Button from "./Button";

const StatusButton = ({ status, onClick, onMouseOver }) => {
    console.log(status)
  return (
    <Button
      styles={"bg-white border border-slate-300 text-slate-300"}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {status}
    </Button>
  );
};

export default StatusButton
