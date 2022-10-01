export default function FormExterior({ children }) {
  return (
    <div className="absolute flex flex-col justify-between w-[445px] h-[593px] right-[150px] bottom-[-30px] bg-white rounded-md shadow-xl p-10">
      {children}
    </div>
  );
}
