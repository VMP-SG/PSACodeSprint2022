import SpacedText from "../../Text/SpacedText";

const ItemInput = ({
  title,
  name,
  span,
  onChange,
  formData,
  errorState,
  isDisabled,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="text-card-body text-slate-400">
        {title}{isDisabled ? "" : "*"}
      </label>
      <input
        type="number"
        name={`${name}`}
        value={!isDisabled && formData[name]}
        onChange={onChange}
        className={`text-black bg-slate-50 mt-5 ${
          !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        }`}
      />
      {!isDisabled && errorState[name] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default ItemInput
