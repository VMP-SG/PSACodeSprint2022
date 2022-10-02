import SpacedText from "../../Text/SpacedText";

const InputField = ({
  title,
  name,
  span,
  idx,
  onChange,
  formData,
  errorState,
  isDisabled = false,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="my-1 text-gray-500 text-sm font-semibold">
        {title}
        {!isDisabled && name in errorState ? "*" : ""}
      </label>
      <input
        type="text"
        name={`${name}`}
        value={
          name in formData ? formData[name] : formData.items[`item${idx}`][name]
        }
        onChange={onChange}
        className={`border-0 border-b-2 focus:outline-none pb-2 ${
          !isDisabled && errorState[name]
            ? "border-2 border-red-700 rounded"
            : ""
        }`}
        disabled={isDisabled}
      />
      {!isDisabled && errorState[name] && (
        <p className="text-xs text-dark-red">Field cannot be empty!</p>
      )}
    </SpacedText>
  );
};

export default InputField;
