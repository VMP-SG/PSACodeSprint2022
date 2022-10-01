import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const DriverField = ({ onChange, formData, errorState }) => {
  return (
    <>
      <CategoryHeader>Driver Details</CategoryHeader>
      <InputField
        title={"First Name"}
        name={"driverFirstName"}
        span={1}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <InputField
        title={"Last Name"}
        name={"driverLastName"}
        span={1}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <InputField
        title={"Pass Number"}
        name={"passNumber"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <InputField
        title={"Vehicle Number"}
        name={"vehicleNumber"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
    </>
  );
};

export default DriverField;
