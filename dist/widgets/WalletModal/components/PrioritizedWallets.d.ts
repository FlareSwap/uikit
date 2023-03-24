import { Login } from "../types";
interface Props {
    login: Login;
    t: (key: string) => string;
    setOpen: (open: boolean) => void;
}
declare const PrioritizedWallets: ({ login, t, setOpen }: Props) => import("theme-ui/jsx-runtime").JSX.Element;
export default PrioritizedWallets;
