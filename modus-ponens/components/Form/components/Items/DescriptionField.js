import SpacedText from "../../../Text/SpacedText";

const DescriptionField = ({
  idx,
  span,
  onChange,
  formData,
  errorState,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
        {console.log(idx)}
      <label className="text-card-body text-slate-400">
        Item {idx+1} Description*
      </label>
      <input
        type="text"
        name={`description_${idx}`}
        value={formData.items[idx][`description_${idx}`]}
        onChange={onChange}
        className={`text-black bg-slate-50 mt-5 ${
          errorState[`description_${idx}`] ? "border-2 border-red-700" : "border-b border-black"
        }`}
      />
      {errorState[`description_${idx}`] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default DescriptionField;
