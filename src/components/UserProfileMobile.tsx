import React from "react";

const UserProfileMobile = ({ userData }) => {
  return (
    <div className="lg:col-span-1 px-4 pt-4 flex sm:hidden">
      <div className="w-full bg-white p-6 rounded-sm border border-custom-gray rounded-[8px]">
        <div className="flex flex-row">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-[48px] h-[48px] rounded-full mx-auto mb-4 object-cover mr-2"
          />
          <span className="flex-1">
            <h2 className="text-neutral-gray font-semibold text-[18px] text-left">
              {userData.name}
            </h2>
            <h3 className="text-dark-gray font-normal text-left text-[14px] mb-2">
              @{userData.login}
            </h3>
          </span>
        </div>
        <div className="bg-custom-gray w-full h-[1px] mb-2"></div>
        <p className="text-dark-gray text-left mb-4 text-[12px]">
          {userData.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfileMobile;
