import Web3 from "web3";
import { SyntheticCategories } from "../../contracts/constants/synthetic.enum";

export interface Wallet {
    address: string;
    BYNBalance:number, 
    EthBalance:number,
    USDbBalance:number,
}

export interface Balance {
    name: string;
    short: string;
    rate: number;
    change24h: number;
    high24h: number;
    low24h: number;
    volume24h:number;
    cryptoBalance: number;
    category: SyntheticCategories;
    isEther: boolean;
    isSiteToken: boolean;
    icon:string;
}

export interface WalletState {
    web3:Web3,
    selected:Wallet,
    stackedBYN:number,
    unstacked:number,
    totalByn:number,
    source: string; //Metamask etc
    wallets: Wallet[];  // Reset balance is new source
    balances: Balance[] //Current source default wallet balances
    isConnected: boolean;
    loadingBalance: boolean;
    currentCRatio:any;
    targetCRatio:any;
}