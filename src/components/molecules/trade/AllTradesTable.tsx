import * as React from "react";

import { Trade } from "../../../store/types/ExchangeState";

interface IProps {
  data: Trade[];
}

function AllTradesTable(props:any) {
  
  const renderTable = () => {
    let rowType = 1
    return props.data.map((item:any) => {
      rowType=rowType*-1
      return <tr className={`text-xs text-left text-black font-medium hover:bg-gray-400 ${rowType>0?'bg-gray-300':''}`}>
        <td className="py-3 px-3">
          <text>{item.date}</text>
        </td>
        <td className="py-3 px-3">{item.pair}</td>
        <td className="py-3 px-3">{item.buying}</td>
        <td className="py-3 px-3">{item.selling}</td>
        <td className="py-3 px-3">{item.price}</td>
        {/* <td className="py-3 px-3">$1896.04</td> */}
        <td className="py-3 px-3">{item.status}</td>
        <td className="py-3 px-3">
          <a
            href={item.infoURL ? item.infoURL : "#"}
            style={item.infoURL === "" ? {pointerEvents:"none",cursor:"default",color:"gray"}:{}}
            target="_blank"
            className="focus:outline-none cursor-pointer text-customBlack-500 underline px-2 py-1 font-bold text-xs rounded-sm"
          >
            VIEW
          </a>
        </td>
      </tr>
  })
  }
  return (
    <React.Fragment>
      {/* <table width="100%">
        <tr className="bg-gray-300 text-xxs xxl:text-sm text-left text-gray-600 font-medium">
          <td className="py-2 px-3">
            <div className="flex items-center whitespace-nowrap	w-20">
              DATE | TIME
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              ASSET
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              AMOUNT
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>

          <td className="py-2 px-3">
            <div className="flex items-center">VERIFY</div>
          </td>
        </tr>
        {props.data.map((item:any) => (
          <tr className="text-xs xxl:text-sm text-left text-gray-600 font-normal hover:bg-gray-300">
            <td className="py-3 px-3">
              <text>{item.date}</text>
            </td>
            <td className="py-3 px-3">{item.tokenSymbol}</td>
            <td className="py-3 px-3">{item.amount}</td>
            <td className="py-3 px-3">
              <a
                href={item.infoURL}
                target="_blank"
                className="focus:outline-none text-customBlue-200 underline px-2 py-1 font-bold text-xs rounded-sm"
              >
                VIEW
              </a>
            </td>
          </tr>
        ))}
      </table> */}
      <div className="nobar"  style={{height:"200px"}}>
       <table width="100%">
        <tr className="text-xxs xxl:text-sm text-left text-blackGray font-medium bg-gray-400">
          <td className="py-2 px-3">
            <div className="flex items-center whitespace-nowrap	xl:w-20 xxl:w-32">
              DATE | TIME
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PAIR
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              BUYING
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              SELLING
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PRICE
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          {/* <td className="py-2 px-3">
            <div className="flex items-center">
              TOTAL
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td> */}
          <td className="py-2 px-3">
            <div className="flex items-center">
              STATUS
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">VERIFY</div>
          </td>
        </tr>
        {renderTable()}
      </table>
      {props.data.length === 0 && (
        <div className="h-full text-blue-500 text-xs xxl:text-sm flex justify-center items-center">
          No data found
        </div>
      )}
      </div>
     
    </React.Fragment>
  );
}

export default AllTradesTable;
