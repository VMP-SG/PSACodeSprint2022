const InputField = ({ displayName, name, span, errorState, formData, onChange }) => {
  return (
    <div className={`flex flex-col col-span-${span} ${span === 2 ? "ml-5" : ""}`}>
      <label>{displayName}</label>
      <input
        type="text"
        name={`${name}`}
        value={formData[name]}
        onChange={onChange}
        className={`text-black ${
          errorState[name] ? "border-4 border-red-700" : ""
        }`}
      />
      {errorState[name] && <p>Field cannot be empty!</p>}
    </div>
  );
};

export default InputField
