import { web3Sources } from './constants';
//import * as _ from 'lodash';


const addPrefix = (key: string) => `Beyond.${key}`;
const walletConnectedKey = addPrefix('walletConnected');
const walletAddressKey = addPrefix('walletAddress');
const walletKey = addPrefix('wallets')

export class LocalStorage {
    private readonly _storage: Storage;

    constructor(storage: Storage = localStorage) {
        this._storage = storage;
    }

    public saveWalletConnected(walletConnected: string): void {
        this._storage.setItem(walletConnectedKey, JSON.stringify(walletConnected));
    }

    public getWalletConnected(): web3Sources | null | boolean {
        return JSON.parse(this._storage.getItem(walletConnectedKey) || JSON.stringify(false));
    }

    public saveWalletAddress(walletAddress: string): void {
        this._storage.setItem(walletAddressKey, JSON.stringify(walletAddress));
    }

    public getWalletAddress(): String | null | boolean {
        return JSON.parse(this._storage.getItem(walletAddressKey) || JSON.stringify(false));
    }

    public resetWalletConnected(): void {
        this._storage.setItem(walletConnectedKey, JSON.stringify(false));
        this._storage.setItem(walletAddressKey, JSON.stringify(false));
    }

    public getWallets(): Array<{ wallet: web3Sources, address: string }> {
        return JSON.parse(this._storage.getItem(walletKey) as string) || [];
    }

    public pushWallet(wallet: { wallet: web3Sources, address: string }): void {
        let wallets = this.getWallets();

        wallets = [...wallets, wallet];
        wallets = wallets.filter((value, index, self) => {
            return self.findIndex(v => v.wallet === value.wallet && v.address === value.address) === index;
        })
        this._storage.setItem(walletKey, JSON.stringify(wallets));
    }

}