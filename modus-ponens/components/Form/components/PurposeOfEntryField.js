import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const PurposeOfEntryField = ({ onChange, formData, errorState }) => {
  return (
    <>
      <CategoryHeader>Purpose of entry</CategoryHeader>
      <InputField
        title={"Main Description"}
        name={"mainDescription"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <InputField
        title={"Additional Details"}
        name={"additionalDetails"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
    </>
  );
};

export default PurposeOfEntryField;
