export default function TextField({
  header,
  type,
  placeholder,
  value,
  setValue,
  className,
}) {
  return (
    <div className={`flex flex-col my-5 ${className}`}>
      <label className="my-1 text-gray-500 text-sm font-semibold">
        {header}
      </label>
      <input
        value={value}
        className="border-0 border-b-2 focus:outline-none pb-2"
        type={type}
        name={`${type}_${header}`}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      />
    </div>
  );
}
