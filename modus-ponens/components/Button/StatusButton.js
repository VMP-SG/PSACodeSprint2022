import Button from "./Button";

const StatusButton = ({ status, onClick, onMouseOver }) => {
  return (
    <Button
      styles={"bg-white border border-slate-300 text-slate-300 h-[33px] flex items-center justify-center"}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {status}
    </Button>
  );
};

export default StatusButton
