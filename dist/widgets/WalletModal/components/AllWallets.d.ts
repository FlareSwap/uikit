import { Login } from "../types";
interface Props {
    login: Login;
    t: (key: string) => string;
}
declare const AllWallets: ({ login, t }: Props) => import("theme-ui/jsx-runtime").JSX.Element;
export default AllWallets;
