import { useState } from "react";
import submitPONData from "../../api/submitPONData";
import InputField from "./InputField";

const defaultState = {
  status: 0,
  company: "",
  firstName: "",
  lastName: "",
  id: "",
  mainDescription: "",
  additionalDetails: "",
};

const defaultErrorState = {
  company: false,
  firstName: false,
  lastName: false,
  id: false,
  mainDescription: false,
};

const RequestForm = () => {
  const [formData, setFormData] = useState(defaultState);
  const [errorState, setErrorState] = useState(defaultErrorState);

  const setError = (name) => {
    setErrorState((prevState) => {
      return { ...prevState, [name]: true };
    });
  };

  const removeError = (name) => {
    setErrorState((prevState) => {
      return { ...prevState, [name]: false };
    });
  };

  const isFieldFilled = (name) => {
    console.log(formData[name]);
    if (formData[name].length === 0) {
      setError(name);
    }
  };

  const handleChange = (e) => {
    if (e.target.name in errorState) {
      if (e.target.value.length === 0) {
        setError(e.target.name);
      } else {
        removeError(e.target.name);
      }
    }
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isFieldFilled("company");
    isFieldFilled("firstName");
    isFieldFilled("lastName");
    isFieldFilled("id");
    isFieldFilled("mainDescription");
    if (
      errorState.company ||
      errorState.firstName ||
      errorState.lastName ||
      errorState.id ||
      errorState.mainDescription
    )
      return;
    submitPONData(formData).then((res) => console.log(res));
    setFormData(defaultState);
  };

  return (
    <form className="grid grid-cols-2 w-1/3 space-x-5 space-y-5">
      <h1 className="col-span-2 ml-5">Company Details</h1>
      <InputField
        displayName={"Company"}
        name="company"
        span={2}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <h1 className="col-span-2">Requestor Details</h1>
      <InputField
        displayName={"First Name"}
        name="firstName"
        span={1}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <InputField
        displayName={"Last Name"}
        name="lastName"
        span={1}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <InputField
        displayName={"Identification Number"}
        name="id"
        span={2}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <h1 className="col-span-2">Purpose of entry</h1>
      <InputField
        displayName={"Main Description"}
        name="mainDescription"
        span={2}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <InputField
        displayName={"Additional Details"}
        name="additionalDetails"
        span={2}
        errorState={errorState}
        formData={formData}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Submit"
        onClick={handleSubmit}
        className="bg-white text-black"
      />
    </form>
  );
};

export default RequestForm;
