import axios from "axios";
import toast from "react-hot-toast";
const api = "http://localhost:2300/api/v1";

export const signUpUser = async (dispatch, formData, cb) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + "/signup";
    const { data } = await axios.post(API, formData);
    toast.success("SignUP Success");
    console.log(data);
    cb();
  } catch (error) {
    toast.error("Error in Signig up");
    console.log(error);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

export const loginUser = async (dispatch, formData) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + "/signin";
    const { data } = await axios.post(API, formData);
    toast.success("Log in Success");
    console.log(data);
    dispatch({ type: "loginUser", payload: data.data.token });
    localStorage.setItem("token", data.data.token);
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
