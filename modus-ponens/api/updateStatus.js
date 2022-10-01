import updatePONData from "./updatePONData";

const updateStatus = (id, status) => {
  return updatePONData(id, { status: status });
};

export default updateStatus