import React, { Fragment, useState } from "react";
import Loader from "react-loader-spinner";
import NavTab from "../../atomic/NavTab";
import { RootState } from "../../../store/reducers/Index";
import SelectWalletModal from "./SelectWalletModal";
import { useSelector } from "react-redux";

interface IProps {
  location: string;
}
function WalletSection(props: IProps) {
  const { isConnected, selected, loadingBalance } = useSelector(
    (state: RootState) => state.wallet
  );

  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="flex items-center">
        <div className="hidden xl:block lg:block">
          <NavTab path="/" text="WALLET" active={props.location === "/"} />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="focus:outline-none font-bold px-4 py-1 rounded-full bg-customPink text-customBlack-500 text-xxs md:text-xs xxl:text-lg ml-12 flex items-center"
        >
          {loadingBalance && <Loader type="TailSpin" color="#000000" height={10} width={10} />}
          {loadingBalance && <text className="ml-2 hidden md:block">Processing...</text>}
          {!loadingBalance&&<img
            src="/assets/Icons/wallet.png"
            alt="img"
            className="mr-2 h-4 hidden md:block"
          />}
          {!isConnected && !loadingBalance && "Connect Wallet"}
          {isConnected && !loadingBalance && (
            <div className="h-2 w-2 bg-green-200 rounded mr-1 mt-1" />
          )}
          {!loadingBalance && isConnected &&
            selected?.address.slice(0, 5) + "..." + selected?.address.slice(-5)}
        </button>
      </div>

      <SelectWalletModal isOpen={isOpen} close={() => setOpen(false)} />
    </Fragment>
  );
}

export default WalletSection;
