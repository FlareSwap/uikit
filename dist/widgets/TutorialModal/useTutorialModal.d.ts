import { TModalProps } from "./types";
interface ReturnType {
    onPresentTutorialModal: () => void;
}
declare const useTutorialModal: ({ type, children, title, description, onDismiss, t, isConnected, width, }: TModalProps) => ReturnType;
export default useTutorialModal;
