import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const RequestorField = ({ onChange, formData, errorState, isDisabled }) => {
  return (
    <>
      <CategoryHeader>Requestor Details</CategoryHeader>
      <InputField
        title={"First Name"}
        name={"requestorFirstName"}
        span={1}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
      <InputField
        title={"Last Name"}
        name={"requestorLastName"}
        span={1}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
      <InputField
        title={"Identification Number"}
        name={"requestorID"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default RequestorField;
