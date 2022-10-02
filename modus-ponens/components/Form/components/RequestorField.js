import TextFieldHeaders from "../../Requests/TextFieldHeaders";
import InputField from "./InputField";

const RequestorField = ({ onChange, formData, errorState, isDisabled }) => {
  return (
    <>
      <TextFieldHeaders title="Requestor Details" className="col-span-2" />
      <InputField
        title={"First Name"}
        name={"requestorFirstName"}
        span={"1 pr-2"}
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
