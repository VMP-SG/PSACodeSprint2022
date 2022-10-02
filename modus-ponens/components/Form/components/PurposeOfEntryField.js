import TextFieldHeaders from "../../Requests/TextFieldHeaders";
import InputField from "./InputField";

const PurposeOfEntryField = ({
  onChange,
  formData,
  errorState,
  isDisabled,
}) => {
  return (
    <>
      <TextFieldHeaders title="Purpose of Entry" />
      <InputField
        title={"Main Description"}
        name={"mainDescription"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
      <InputField
        title={"Additional Details"}
        name={"additionalDetails"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default PurposeOfEntryField;
