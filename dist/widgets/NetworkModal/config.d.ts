import { Config } from "./types";
export declare enum ChainId {
    BSC = 56,
    BSC_TESTNET = 97,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    ETH = 1,
    TLOS = 40,
    ARBITRUM = 42161,
    FLARE = 14,
    SONGBIRD = 19,
    COSTON = 16
}
export declare const NETWORK_ICON: {
    [key: number]: any;
};
export declare const NETWORK_LABEL: {
    [key: number]: any;
};
declare const networks: Config[];
export default networks;
