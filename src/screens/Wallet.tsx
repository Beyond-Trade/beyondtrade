import React, { useState,useEffect } from "react";

import History from "../components/molecules/wallet/History";
import StatesRow from "../components/molecules/wallet/StatesRow";
import WalletBanner from "../components/atomic/wallet/WalletBanner/WalletBanner";
import WalletData from "../components/molecules/wallet/WalletData";

function Wallet() {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <WalletBanner tab={tab} setTab={setTab} />
      {tab === 0 && <StatesRow />}
      {tab === 0 && <WalletData />}
      {tab === 1 && <History />}
    </div>
  );
}

export default Wallet;
