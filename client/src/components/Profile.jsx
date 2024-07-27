import React from "react";
import { DOC_IMAGE_URI, GET_ROLES, PAT_IMAGE_URI } from "../constants";
import { logoutHandler } from "../store/action";

const Profile = ({ role, userData }) => {
  const imageUri = role == "DOC" ? DOC_IMAGE_URI : PAT_IMAGE_URI;

  return (
    <div className="w-full    flex flex-col  p-5">
      <div className="flex w-full justify-end items-center">
        <button
          onClick={logoutHandler}
          className="text-white hover:bg-red-500 border-2 border-red-500 px-5 py-1 rounded-xl"
        >
          Logout
        </button>
      </div>

      <div className="flex mt-12 justify-center items-center">
        <img className="w-44 rounded-full bg-red-300" src={imageUri} alt="" />
      </div>
      <div className="flex justify-center items-center w-full mt-10 text-white">
        <div className="flex flex-col items-center text-center ">
          <span>
            <strong>Name</strong> : {userData?.name}{" "}
          </span>
          <span>
            {" "}
            <strong>Email</strong> : {userData?.email}
          </span>
          <span>
            <strong>Role</strong> : {GET_ROLES[userData?.role]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
