/** @jsxImportSource theme-ui */
import React from "react";
import { Login, Config } from "../types";
interface Props {
    walletConfig: Config;
    login: Login;
    t: (key: string) => string;
}
declare const WalletCard: React.FC<Props>;
export default WalletCard;
