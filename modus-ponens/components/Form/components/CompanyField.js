import TextFieldHeaders from "../../Requests/TextFieldHeaders";
import InputField from "./InputField";

const CompanyField = ({ onChange, formData, errorState, isDisabled }) => {
  return (
    <>
      <TextFieldHeaders title="Company Details" />
      <InputField
        title={"Company"}
        name={"company"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default CompanyField;
