import api from "./api";

const updatePONData = (id, data) => {
  return api.patch("/" + id + ".json", data);
};

export default updatePONData;
