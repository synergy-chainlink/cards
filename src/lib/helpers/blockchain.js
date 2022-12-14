import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';

const NftContractAddress = "TSXNN3fFvM5jvQ28HVzMHfrLCsUjDBfgVG";
const RgldAddress = "0x203583737BEFABf17587c363F7ea27f3E3379e2B"

export const getBalance = async () => { };

export const connectWallet = async () => {

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: ""
            }
        }
    };

    const web3Modal = new Web3Modal({
        cacheProvider: true,
        network: "Goerli",
        providerOptions
    });

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
}

export const init = async () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: ""
            }
        }
    };

    const web3Modal = new Web3Modal({
        network: "rinkeby",
        cacheProvider: true,
        providerOptions
    });

    const instance = await web3Modal.connect();
    return instance
};



