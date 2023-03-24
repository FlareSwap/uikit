interface ReturnType {
    onPresentNewsModal: () => void;
}
declare const useNewsModal: (mailChimpUrl: string, t: (key: string) => string) => ReturnType;
export default useNewsModal;
