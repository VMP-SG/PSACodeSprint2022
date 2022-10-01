import SpacedText from "../../../Text/SpacedText";

const QuantityField = ({
  name,
  idx,
  span,
  onChange,
  formData,
  errorState,
  isDisabled,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="text-card-body text-slate-400">
        Quantity{isDisabled ? "" : "*"}
      </label>
      <input
        type="number"
        name={name}
        value={formData.items[`item${idx}`][name]}
        onChange={onChange}
        className={`text-black bg-slate-50 mt-5 ${
          !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        }`}
        isDisabled={isDisabled}
      />
      {!isDisabled && errorState[name] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default QuantityField;
