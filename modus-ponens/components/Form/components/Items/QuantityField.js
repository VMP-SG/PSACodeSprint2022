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
      <label className="my-1 text-gray-500 text-sm font-semibold">
        Quantity{isDisabled ? "" : "*"}
      </label>
      <input
        type="number"
        name="quantity"
        value={formData.items[`item${idx}`].quantity}
        onChange={onChange}
        className={`border-0 border-b-2 focus:outline-none pb-2`}
        // className={`text-black bg-slate-50 mt-5 ${
        //   !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        // }`}
        min="1"
        isDisabled={isDisabled}
      />
      {/* {!isDisabled && <p>Field cannot be empty!</p>} */}
    </SpacedText>
  );
};

export default QuantityField;
