import { ThemeUIStyleObject } from "theme-ui";
export declare const modalProps: {
    sx: {
        width: string[];
        height: string[];
    };
};
export declare const dynamicStyles: Record<"showApe" | "allCircle", (props: {
    slideNumber?: number;
    type?: string;
    isActive?: boolean;
}) => ThemeUIStyleObject>;
export declare const styles: Record<"modalCon" | "contentBody" | "rightCon" | "right" | "modalHeader" | "title" | "description" | "circles" | "readyBtn" | "modalFooter", ThemeUIStyleObject>;
