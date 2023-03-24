/** @jsxImportSource theme-ui */
import React from "react";
import { SwitchNetwork } from "../NetworkModal";
export interface Props {
    chainId: number;
    switchNetwork: SwitchNetwork;
    t: (key: string) => string;
    supportedChains?: number[];
}
declare const NetworkButton: React.FC<Props>;
export default NetworkButton;
