import React from "react";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  return (
    <div className="bg-customBlue-300 px-20 py-16 mt-5">
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <h1 className="font-bold text-white text-xl">BEYOND</h1>
          <p className="text-gray-400 mt-4 text-xxs">
            Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed
            diam nonumy eirmod.
          </p>
          <p className="text-gray-400 mt-4 text-xxs">+94 722 321 911</p>
          <p className="text-gray-400 mt-4 text-xxs">
            MON - SUN / 9:00 AM - 8:00 PM
          </p>
          <p className="text-gray-400 mt-4 text-xxs">support@beyond.com</p>
        </div>
        <div className="flex flex-col items-start pr-20">
          <h4 className="text-white text-sm font-semibold">PRODUCTS</h4>
          <button className="text-xs text-gray-500 mt-4">Stake</button>
          <button className="text-xs text-gray-500 mt-4">Market</button>
          <button className="text-xs text-gray-500 mt-4">Trade</button>
          <button className="text-xs text-gray-500 mt-4">Loan</button>
        </div>
        <div className="flex flex-col items-start pr-20">
          <h4 className="text-white text-sm font-semibold">COMPANY</h4>
          <button className="text-xs text-gray-500 mt-4">About Us</button>
          <button
            className="text-xs text-gray-500 mt-4"
            onClick={() => {
              console.log("in contact us click");
              history.push("/contact_us");
            }}
          >
            Contact Us
          </button>
          <button className="text-xs text-gray-500 mt-4">Support</button>
          <button className="text-xs text-gray-500 mt-4">News/Blog</button>
        </div>
        <div className="flex flex-col items-start w-64 mr-16">
          <h4 className="text-white text-sm font-semibold">TERMS</h4>
          <button
            className="text-xs text-gray-500 mt-4"
            onClick={() => history.push("/privacy_policy")}
          >
            {" "}
            Privacy Policy
          </button>
          <button
            className="text-xs text-gray-500 mt-4"
            onClick={() => history.push("/terms_and_conditions")}
          >
            Terms of Usage
          </button>
          <button className="text-xs text-gray-500 mt-4">Disclaimer</button>
        </div>
        <div className="flex flex-col items-start pr-20">
          <h4 className="text-white text-sm font-semibold">SOCIAL</h4>
          <div className="flex mt-4">
            <button className="focus:outline-none mr-4 w-8 h-8 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/facebook-icon.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 h-8 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/instagram-icon.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 h-8 flex justify-center items-center rounded-full bg-white">
              <img src="assets/Icons/linkedin-con.svg" alt="img" />
            </button>
            <button className="focus:outline-none w-8 h-8 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/pinterest-icon.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
