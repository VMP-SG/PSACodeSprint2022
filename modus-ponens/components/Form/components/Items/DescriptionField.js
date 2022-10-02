import SpacedText from "../../../Text/SpacedText";

const DescriptionField = ({ idx, span, onChange, formData, errorState }) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="my-1 text-gray-500 text-sm font-semibold">
        Item {idx + 1} Description*
      </label>
      <input
        type="text"
        name={`description`}
        value={formData.items[`item${idx}`].description}
        onChange={onChange}
        className={`border-0 border-b-2 focus:outline-none pb-2`}
        // className={`text-black bg-slate-50 mt-5 ${
        //   !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        // }`}
      />
      {errorState[`description_${idx}`] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default DescriptionField;
