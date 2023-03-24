import React from "react";
import { SwitchNetwork } from "./types";
export interface Props {
    switchNetwork: SwitchNetwork;
    chainId: number;
    t: (key: string) => string;
    onDismiss?: () => void;
    supportedChains?: number[];
}
declare const SelectNetworkModal: React.FC<Props>;
export default SelectNetworkModal;
