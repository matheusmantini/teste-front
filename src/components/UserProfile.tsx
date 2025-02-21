import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <div className="lg:col-span-1 ml-6 mt-6 hidden sm:flex">
      <div className="w-[448px] bg-white p-6 rounded-sm border border-custom-gray">
        <img
          src={userData.avatar_url}
          alt="Avatar"
          className="w-[200px] h-[200px] rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-neutral-gray font-semibold text-[21px] text-center">
          {userData.name}
        </h2>
        <h3 className="text-dark-gray font-normal text-center text-[14px] mb-2">
          @{userData.login}
        </h3>
        <p className="text-dark-gray text-center mb-4">{userData.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
