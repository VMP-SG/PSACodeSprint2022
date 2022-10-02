export default function UneditableTextField({
  header,
  type,
  placeholder,
  value,
  className,
}) {
  return (
    <div className={`flex flex-col my-5 ${className}`}>
      <label className="my-1 text-gray-500 text-sm font-semibold">
        {header}
      </label>
      <input
        readOnly
        value={value}
        className="border-0 border-b-2 focus:outline-none pb-2"
        type={type}
        name={`${type}_${header}`}
        placeholder={placeholder}
      />
    </div>
  );
}
