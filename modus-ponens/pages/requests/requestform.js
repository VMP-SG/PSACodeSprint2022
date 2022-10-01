import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString } from "firebase/storage";
import submitPONData from "../../api/submitPONData";
import Page1 from "../../components/Form/Page1";
import Page2 from "../../components/Form/Page2";
import DashBoardHeader from "../../components/dashboard/DashboardHeader";
import updatePONData from "../../api/updatePONData";

const defaultState = {
  company: "",
  requestorFirstName: "",
  requestorLastName: "",
  id: "",
  mainDescription: "",
  additionalDetails: "",
  driverFirstName: "",
  driverLastName: "",
  passNumber: "",
  vehicleNumber: "",
  description_0: "",
  quantity_0: "",
  status: 0,
};

const defaultErrorState1 = {
  company: false,
  requestorFirstName: false,
  requestorLastName: false,
  id: false,
  mainDescription: false,
};

const defaultErrorState2 = {
  driverFirstName: false,
  driverLastName: false,
  passNumber: false,
  vehicleNumber: false,
  description_0: false,
  quantity_0: false,
};

const firebaseConfig = {
  apiKey: "AIzaSyD7D8p_tpGw9iH1QZUFEo43ir2kR8XtR0g",
  authDomain: "modusponens-11bff.firebaseapp.com",
  databaseURL:
    "https://modusponens-11bff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "modusponens-11bff",
  storageBucket: "modusponens-11bff.appspot.com",
  messagingSenderId: "235677406886",
  appId: "1:235677406886:web:3e79f1bdc3d26044f54667",
  measurementId: "G-Q0GNNYL8R2",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

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
    if (formData[name] && formData[name].length === 0) {
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
    if (activePage === 0) {
      for (var key in defaultErrorState1) {
        isFieldFilled(key);
      }
      if (
        Object.keys(defaultErrorState1).every(
          (key) => errorState[key] === false
        )
      ) {
        setActivePage(1);
      }
    } else {
      for (var key in defaultErrorState2) {
        isFieldFilled(key);
      }
      if (
        Object.keys(defaultErrorState2).every(
          (key) => errorState[key] === false
        )
      ) {
        setActivePage(0);
      }
    }
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
    console.log(e);
    for (var key in errorState) {
      isFieldFilled(key);
    }
    if (Object.values(errorState).every((value) => value === false)) {
      submitPONData(formData).then(({ data: { name } }) => {
        images.map((image, i) => {
          var imgRef = ref(storage, `${name}/images/image_${i}.jpg`);
          uploadString(imgRef, `${image.src.split(",")[1]}`, "base64")
            .then(() => {
              updatePONData(name, { ["image_" + i]: "image_" + i }).then(
                (res) => console.log(res)
              );
            })
            .catch((err) => console.log(err));
        });
      });
      setFormData(defaultState);
      setActivePage(0);
    }
  };

  return (
    <div className="bg-light-blue-0">
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
        />
      ) : (
        <Page1
          formData={formData}
          errorState={errorState}
          handleChange={handleChange}
          togglePage={handleNext}
        />
      )}
    </div>
  );
};

export default RequestForm;
