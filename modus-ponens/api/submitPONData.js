import api from "./api";

const submitPONData = (data) => {
  return api.post(".json", data);
};

export default submitPONData;
