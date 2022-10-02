import SpacedText from "../../../Text/SpacedText";

const QuantityField = ({
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
        name="quantity"
        value={formData.items[`item${idx}`].quantity}
        onChange={onChange}
        className={`text-black mt-5 border-b border-black`}
        // className={`text-black bg-slate-50 mt-5 ${
        //   !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        // }`}
        isDisabled={isDisabled}
      />
      {/* {!isDisabled && <p>Field cannot be empty!</p>} */}
    </SpacedText>
  );
};

export default QuantityField;
