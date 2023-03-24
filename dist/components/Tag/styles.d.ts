/** @jsxImportSource theme-ui */
import { DefaultTheme } from "styled-components";
import { ThemeUIStyleObject } from "theme-ui";
import { TagProps } from "./types";
interface ThemedProps extends TagProps {
    theme: DefaultTheme;
}
export declare const StyledTag: import("styled-components").StyledComponent<"div", DefaultTheme, ThemedProps, never>;
export declare const styles: Record<"listTagCont" | "tagText", (props: {
    variant?: any;
}) => ThemeUIStyleObject>;
export {};
