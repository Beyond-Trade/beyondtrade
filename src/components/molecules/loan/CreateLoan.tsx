import { Link } from "react-router-dom";
import React from "react";
import { getLoan } from "../../../services/loan.service";
import useCreateLoan from "../../../hooks/Loan/useCreateLoan";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
function CreateLoan({ loanType }: any) {
  const {
    handleLockedChange,
    locked,
    borrowed,
    submit,
    lockedErr,
    isSubmitting,
    USDValue,
    ETH,
    handleBorrowedChange,
  } = useCreateLoan();

  // console.log(loanType,"=========(((((LOANTYPE)))))========")
  const handleSubmit = () => {
    getLoan("0.5").then((res) => console.log(res));
  };
  return (
    <div className="bg-customGray-100 rounded mr-8 w-full">
      <div className="rounded-t flex justify-between bg-gray-300 text-gray-600 text-xs xxl:text-base px-2 py-2 font-medium">
        <h5 className="py-1">CREATE LOAN</h5>
      </div>
      <div className="p-3 text-xxs xxl:text-sm">
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">ETH BEING LOCKED</h3>

  <p className="text-gray-600 py-1">Balance : {ETH?.cryptoBalance}</p>
        </div>
        <div className="rounded-t flex bg-gray-300 text-gray-600 px-2 py-2 font-medium">
          <h3 className="py-1 mr-10 flex items-center">
            <img
              src="assets/icons/Ethereum.svg"
              className="h-3 xxl:h-5 mr-1 xxl:mr-2"
              alt="img"
            />
            ETH
          </h3>
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full appearance-none"
            type="number"
            name="locked"
            value={locked}
            onChange={(e) => handleLockedChange(e, loanType)}
          />
          {/* <h3 className="py-1">0.00</h3> */}
        </div>
        <small className="italic text-red-500 text-xxs">{lockedErr}</small>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">{loanType} BEING BORROWED</h3>
          <p className="text-gray-600 py-1">Balance : 0</p>
        </div>
        <div className="rounded-t flex bg-gray-300 text-gray-600 px-2 py-2 font-medium">
          <h3 className="py-1 mr-10 flex items-center">
            <img
              src={`${
                loanType === "ETHb"
                  ? "assets/icons/Ethereum.svg"
                  : "assets/coins/btc.svg"
              }`}
              className="h-3 xxl:h-5 xl:mr-1 xxl:mr-2"
              alt="img"
            />
            {loanType}
          </h3>
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full appearance-none"
            type="number"
            name="borrowed"
            value={borrowed}
            onChange={(e) => handleBorrowedChange(e, loanType)}
          />
          {/* <h3 className="py-1">0.00</h3> */}
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">USD VALUE</h3>
            <p className="text-gray-600 py-1">${USDValue}</p>
        </div>

        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">FEE ?</h3>
          <p className="text-gray-600 py-1">$7.29</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">GASS PRICE (GWEI)</h3>
          <p className="text-gray-600 py-1">
            $35.00{" "}
            <Link
              to="#"
              className="text-blue-700"
              style={{ textDecoration: "underline" }}
            >
              EDIT
            </Link>
          </p>
        </div>
        <div className="flex mt-3">
          
            <button
              className="bg-customBlue-200 p-2 xxl:p-3 w-full text-white rounded"
              onClick={() => submit(loanType)}
            >
              {isSubmitting === false? 
              "SUBMIT":
              <div className="flex justify-center">
              <Loader type="Bars" color="#ffffff" height={18} width={20} />
              </div>}
            </button>
         
        </div>
      </div>
    </div>
  );
}
export default CreateLoan;
