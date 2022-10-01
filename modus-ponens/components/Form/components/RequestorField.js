import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const RequestorField = ({ onChange, formData, errorState }) => {
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
      />
      <InputField
        title={"Last Name"}
        name={"requestorLastName"}
        span={1}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <InputField
        title={"Identification Number"}
        name={"id"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
    </>
  );
};

export default RequestorField;
