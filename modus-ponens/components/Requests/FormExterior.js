export default function FormExterior({ children }) {
  return (
    <div className="flex flex-col justify-between w-[1000px] bg-white rounded-md shadow-2xl p-10">
      {children}
    </div>
  );
}
