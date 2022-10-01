import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";

const DriverField = ({ onChange, formData, errorState, isDisabled }) => {
  return (
    <>
      <CategoryHeader>Driver Details</CategoryHeader>
      <div className="grid grid-cols-2">
        <InputField
          title={"First Name"}
          name={"driverFirstName"}
          span={1}
          onChange={onChange}
          formData={formData}
          errorState={errorState}
          isDisabled={isDisabled}
        />
        <InputField
          title={"Last Name"}
          name={"driverLastName"}
          span={1}
          onChange={onChange}
          formData={formData}
          errorState={errorState}
          isDisabled={isDisabled}
        />
      </div>
      <InputField
        title={"Pass Number"}
        name={"driverPassNumber"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
      <InputField
        title={"Vehicle Number"}
        name={"vehicleNumber"}
        span={2}
        onChange={onChange}
        formData={formData}
        errorState={errorState}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default DriverField;
