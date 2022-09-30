import api from "./api";

const getPONData = (id="") => {
  let options = {
    headers: {
      accept: "application/json",
    },
  };
  return api.get(`${id}.json`, options);
};

export default getPONData;
