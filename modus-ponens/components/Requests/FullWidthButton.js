export default function FullWidthButton({ text, type, onClick }) {
  const primary = {
    background: "#185CFF",
    color: "#FFFFFF",
    fontWeight: 600,
  };
  const outlined = {
    background: "#FFFFFF",
    color: "#185CFF",
    border: "1px solid",
    fontWeight: 600,
  };
  return (
    <div
      style={type === 1 ? primary : outlined}
      className="flex flex-row justify-center items-center py-[10px] px-[14px] m-2 cursor-pointer rounded-md"
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}
