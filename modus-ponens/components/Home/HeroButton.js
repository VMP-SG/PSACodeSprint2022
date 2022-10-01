export default function HeroButton({ text, onclick, type }) {
  const primary = {
    background: "#185CFF",
    color: "#FFFFFF",
    fontWeight: 600,
  };
  return (
    <button
      style={primary}
      type={type ?? "button"}
      className="flex flex-row justify-center items-center w-[190px] h-[54px] py-[10px] px-[14px] my-2 cursor-pointer rounded-md"
      onClick={onclick}
    >
      {text}
    </button>
  );
}
