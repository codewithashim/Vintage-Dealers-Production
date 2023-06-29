import React from 'react';
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const UserPopUp = ({ reff, close }) => {
  return (
    <>
      <div className="left-0 right-0 top-0  bottom-0 fixed bg-[rgba(0,0,0,0.88)] z-50">
        <div className="mx-auto">
          <div
            className="lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[85%] xxs:w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md absolute bg-gray-50 py-10 "
            ref={reff}
          >
            <RxCross2
              className="mx-2 absolute right-0 top-3 cursor-pointer"
              onClick={() => close(false)}
            />
            <h3 className="md:text-3xl sm:text-2xl xxs:text-[18px] pb-3 justify-center flex">
              Login to Make My Listing
            </h3>
            <div className="justify-center  mt-1 flex rounded-lg tracking-[.8px] py-2">
              <Link href="/userSignup" className="w-8/12 common_btn text-center">
              sign up as user
              </Link>
            </div>
            <div className="justify-center flex  border-b pb-1 text-2xl font-bold">
              or
            </div>
            <div></div>
            <div className="pt-2 justify-center my-2 flex">
              <Link href="/add-listing" className="w-8/12 common_btn text-center">
                  sign up as advertiser
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowDown />
            </div>
            <hr />
            <p className="p-2 justify-center flex">
              Already have an account?
              <Link href="/userLogin">
                <b className="text-red-10 ml-1">Login here</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPopUp;