import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";
import SpacedText from "../../Text/SpacedText";

const InputField = ({
  title,
  name,
  span,
  idx,
  onChange,
  formData,
  errorState,
  isDisabled=false,
}) => {
  return (
    <SpacedText styles={`flex flex-col col-span-${span}`}>
      <label className="text-card-body text-slate-400">
        {title}
        {!isDisabled && name in errorState ? "*" : ""}
      </label>
      <input
        type="text"
        name={`${name}`}
        value={name in formData ? formData[name] : formData.items[`item${idx}`][name]}
        onChange={onChange}
        className={`text-black bg-slate-50 mt-5 ${
          !isDisabled && errorState[name] ? "border-2 border-red-700" : "border-b border-black"
        }`}
        disabled={isDisabled}
      />
      {!isDisabled && errorState[name] && <p>Field cannot be empty!</p>}
    </SpacedText>
  );
};

export default InputField
