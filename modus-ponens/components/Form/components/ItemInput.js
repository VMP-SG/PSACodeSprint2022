import SpacedText from "../../Text/SpacedText";

const InputField = ({
  title,
  name,
  span,
  onChange,
  formData,
  errorState,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="text-card-body text-slate-400">
        {title}*
      </label>
      <input
        type="number"
        name={`${name}`}
        value={formData[name]}
        onChange={onChange}
        className={`text-black bg-slate-50 mt-5 ${
          errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        }`}
      />
      {errorState[name] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default InputField
