import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const CompanyField = ({ onChange, formData, errorState }) => {
  return (
    <>
      <CategoryHeader>Company Details</CategoryHeader>
      <InputField
        title={"Company"}
        name={"company"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
    </>
  );
};

export default CompanyField