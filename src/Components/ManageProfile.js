import React from "react";
import {
  useAuthState,
  useUpdateEmail,
  useUpdatePassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const ManageProfile = () => {
  const [authUser, loading] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [updateEmail, emailUpdating, updateEmailError] = useUpdateEmail(auth);
  const [updatePass, passUpdating, updatePassError] = useUpdatePassword(auth);

  const handleManageProfile = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    if (authUser.displayName !== name) {
      updateProfile({ displayName: name });
    }
    if (authUser.email !== email) {
      updateEmail(email);
    }
    if (pass.length > 5) {
      updatePass(pass);
    }
  };
  if (loading || emailUpdating || passUpdating) {
    return (
      <p className=" min-h-[70vh] flex justify-center items-center ">
        Loading ...
      </p>
    );
  }

  return (
    <div className=" flex justify-center items-center min-h-[60vh] ">
      <div className=" w-full md:w-1/2 lg:w-1/2">
        <h2 className=" text-white text-3xl font-bold mb-10 ">
          Manage Profile
        </h2>
        <form onSubmit={handleManageProfile} action="">
          <input
            type="text"
            name="name"
            defaultValue={authUser?.displayName || "Name"}
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
            required
          />
          <input
            type="text"
            name="email"
            defaultValue={authUser?.email || "Email"}
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
            required
          />
          <input
            type="text"
            name="pass"
            placeholder="Password (min 6 characters)"
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
          />
          {updateEmailError && (
            <p className=" mb-5 text-red-500 text-left capitalize">
              {updateEmailError?.message}
            </p>
          )}
          {updatePassError && (
            <p className=" mb-5 text-red-500 text-left capitalize">
              {updatePassError?.message}
            </p>
          )}
          <button className=" h-10 btn-primary px-10 rounded-full font-bold uppercase ">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageProfile;
