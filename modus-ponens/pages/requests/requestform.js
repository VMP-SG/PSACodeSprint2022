import { useState } from "react";
import submitPONData from "../../api/submitPONData";
import Page1 from "../../components/Form/Page1";
import Page2 from "../../components/Form/Page2";
import DashBoardHeader from "../../components/dashboard/DashboardHeader";
import updatePONData from "../../api/updatePONData";

const defaultState = {
  status: 0,
  company: "",
  requestorFirstName: "",
  requestorLastName: "",
  requestorID: "",
  mainDescription: "",
  additionalDetails: "",
  driverFirstName: "",
  driverLastName: "",
  driverPassNumber: "",
  vehicleNumber: "",
  items: [
    {
      description: "",
      quantity: "",
      image: "",
    }
  ],
  designatedOfficer: "",
  counterSignee: "",
  approvingAetosOfficer: "",
};

const defaultErrorState1 = {
  company: false,
  requestorFirstName: false,
  requestorLastName: false,
  requestorID: false,
  mainDescription: false,
};

const defaultErrorState2 = {
  driverFirstName: false,
  driverLastName: false,
  driverPassNumber: false,
  vehicleNumber: false,
  items: [
    {
      description: false,
      quantity: false,
    }
  ],
};

const RequestForm = () => {
  const [formData, setFormData] = useState(defaultState);
  const [errorState, setErrorState] = useState({
    ...defaultErrorState1,
    ...defaultErrorState2,
  });
  const [activePage, setActivePage] = useState(0);
  const [images, setImages] = useState([]);

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
    if (name in formData && formData[name].length === 0) {
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

  const handleNext = (e) => {
    e.preventDefault();
    if (
      activePage === 0 &&
      Object.keys(defaultErrorState1).every((key) => errorState[key] === false)
    ) {
      setActivePage(1);
    } else if (
      activePage === 1 &&
      Object.keys(defaultErrorState2).every((key) => errorState[key] === false)
    ) {
      if (
        Object.keys(defaultErrorState2).every(
          (key) => errorState[key] === false
        )
      ) {
        setActivePage(0);
      }
    }
  };

  const mouseOverHandler = () => {
    if (activePage === 0) {
      for (var key in defaultErrorState1) {
        isFieldFilled(key);
      }
    } else {
      for (var key in defaultErrorState2) {
        isFieldFilled(key);
      }
    }
    console.log("hello")
  };

  const addAdditionalItems = () => {
    var newIdx = (Object.keys(formData).length - 11) / 2;
    console.log(newIdx);
    setFormData((prevState) => {
      return {
        ...prevState,
        [`description_${newIdx}`]: "",
        [`quantity_${newIdx}`]: "",
      };
    });
    setErrorState((prevState) => {
      return {
        ...prevState,
        [`description_${newIdx}`]: false,
        [`quantity_${newIdx}`]: false,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errorState).every((value) => value === false)) {
      submitPONData(formData).then(({ data: { name } }) => {
        images.map((image, i) => {
          updatePONData(name, { ["image_" + i]: image.src }).then((res) =>
            console.log(res)
          );
        });
      });
      setFormData(defaultState);
      setActivePage(0);
      setImages([]);
    }
  };

  return (
    <div className="bg-light-blue-0 pb-24">
      <DashBoardHeader numItems={6} />
      {activePage === 1 ? (
        <Page2
          formData={formData}
          errorState={errorState}
          handleChange={handleChange}
          togglePage={handleNext}
          addAdditionalItems={addAdditionalItems}
          handleSubmit={handleSubmit}
          images={images}
          setImages={setImages}
          mouseOverHandler={mouseOverHandler}
        />
      ) : (
        <Page1
          formData={formData}
          errorState={errorState}
          handleChange={handleChange}
          togglePage={handleNext}
          mouseOverHandler={mouseOverHandler}
        />
      )}
    </div>
  );
};

export default RequestForm;
