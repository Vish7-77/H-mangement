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
    const isError = error?.response?.data?.data.includes("E11000")
      ? "Account already linked with This E Mail"
      : error?.response?.data?.data;
    toast.error(isError || "something went wrong");
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
    dispatch({
      type: "loginUser",
      payload: { token: data.data.token, userData: data.data.user },
    });
    localStorage.setItem("token", data.data.token);
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

export const logoutHandler = () => {
  localStorage.clear();
  location.reload();
};

export const fetchUserData = async (dispatch) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + "/me";
    const token = localStorage.getItem("token");
    const { data } = await axios.get(API, { headers: { token } });
    dispatch({
      type: "loginUser",
      payload: { token: true, userData: data.data.user },
    });
  } catch (error) {
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

export const fetchDoctors = async (dispatch) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + "/doctors";
    const token = localStorage.getItem("token");
    const { data } = await axios.get(API, { headers: { token } });
    console.log("docst", data);
    dispatch({
      type: "listDoctors",
      payload: data.data,
    });
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const updatedPosition = async (dispatch, position) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + "/doctor";
    const token = localStorage.getItem("token");
    const { data } = await axios.put(
      API,
      {
        position,
      },
      {
        headers: { token },
      }
    );
    console.log("updated Data", data);
    toast.success("Updated Successfully");
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
