import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, t: (key: string) => string, account?: string | undefined, uDName?: string | undefined, sidName?: string | undefined) => ReturnType;
export default useWalletModal;
