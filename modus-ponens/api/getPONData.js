import api from "./api";

const getPONData = () => {
  let options = {
    headers: {
      accept: "application/json",
    },
  };
  return api.get("", options);
};

export default getPONData;
