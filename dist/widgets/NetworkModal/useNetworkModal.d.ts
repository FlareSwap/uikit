import { SwitchNetwork } from "./types";
interface ReturnType {
    onPresentNetworkModal: () => void;
}
declare const useNetworkModal: (switchNetwork: SwitchNetwork, chainId: number, t: (key: string) => string, supportedChains?: number[] | undefined) => ReturnType;
export default useNetworkModal;
