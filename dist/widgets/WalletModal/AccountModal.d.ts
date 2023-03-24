/** @jsxImportSource theme-ui */
import React from "react";
interface Props {
    account?: string;
    logout: () => void;
    t: (key: string) => string;
    uDName?: string;
    sidName?: string;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
