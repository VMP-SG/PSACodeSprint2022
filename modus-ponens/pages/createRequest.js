import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import submitPONData from "../api/submitPONData";
import updatePONData from "../api/updatePONData";
import Page1 from "../components/Form/Page1";
import Page2 from "../components/Form/Page2";
import HeroHeader from "../components/Layout/HeroHeader";
import objectDetect from "../api/objectDetect";

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
  items: {
    item0: {
      description: "",
      quantity: "",
      image: "",
    },
  },
  designatedOfficer: "Chay Hui Xiang",
  counterSignee: "",
  approvingAetosOfficer: "",
  time: "",
  cvInitial: {},
  cvFinal: {},
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
  // items: {
  //   item0: {
  //     description: false,
  //     quantity: false,
  //   },
  // },
};

const createRequest = () => {
  const [formData, setFormData] = useState(defaultState);
  const [errorState, setErrorState] = useState({
    ...defaultErrorState1,
    ...defaultErrorState2,
  });
  const [activePage, setActivePage] = useState(0);
  const [images, setImages] = useState([]);
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData((prevState) => {
          return {
            ...prevState,
            requestorID: user.displayName,
          };
        });
      }
    });
  }, []);

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

  const handleItems = (e, idx) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        items: {
          ...prevState.items,
          [`item${idx}`]: {
            ...prevState.items[`item${idx}`],
            [e.target.name]: e.target.value,
          },
        },
      };
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
  };

  const addAdditionalItems = () => {
    setFormData((prevState) => {
      return {
        ...prevState,
        items: {
          ...prevState.items,
          ["item" + Object.keys(prevState.items).length]: {
            description: "",
            quantity: "",
            image: "",
          },
        },
      };
    });
    // setErrorState((prevState) => {
    //   return {
    //     ...prevState,
    //     items: {
    //       ...prevState.items,
    //       ["item" + Object.keys(prevState.items).length]: {
    //         description: false,
    //         quantity: false,
    //       },
    //     },
    //   };
    // });
  };

  const submitImages = async (formData, images) => {
    var items = {
      ...formData.items,
    };
    var cvInitial = {};

    images.map((image, i) => {
      items[`item${i}`]["image"] = image.src;
      objectDetect(image.src)
        .then(({ data }) => {
          cvInitial[`item${i}`] = data;
        })
        .catch((err) => console.log(err));
    });

    return [items, cvInitial]
  }

  const updateAllData = async (name) => {
    const now = new Date();
    const current = now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    var [items, cvInitial] = await submitImages(formData, images);
    console.log(cvInitial)
    updatePONData(name, { items: items }).then(
      updatePONData(name, { time: current }).then(
        updatePONData(name, { cvInitial: cvInitial }).then(res => console.log(res))
      )
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const now = new Date();
    // const current = now.toLocaleTimeString("en-US", {
    //   hour12: false,
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    if (Object.values(errorState).every((value) => value === false)) {
      submitPONData(formData).then(({ data: { name } }) => {
        // var items = {
        //   ...formData.items,
        // };
        // var cvInitial = {};

        // images.map((image, i) => {
        //   items[`item${i}`]["image"] = image.src;
        //   objectDetect(image.src)
        //     .then(({ data }) => {
        //       cvInitial[`item${i}`] = data;
        //     })
        //     .catch((err) => console.log(err));
        // });

        // updatePONData(name, { items: items }).then(
        //   updatePONData(name, { time: current }).then(
        //     updatePONData(name, { cvInitial: cvInitial }).then(res => console.log(res))
        //   )
        // );
        console.log(updateAllData(name))
      });
      router.push("/");
    }
  };

  return (
    <div>
      <HeroHeader
        title={"Create Request"}
        subtitle={"Create your requests here!"}
      />
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        {activePage === 1 ? (
          <Page2
            formData={formData}
            errorState={errorState}
            handleChange={handleChange}
            handleItems={handleItems}
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
    </div>
  );
};

export default createRequest;
