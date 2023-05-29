import { TextProps as ReactNativeTextProps } from "react-native/types";

export interface TextProps extends ReactNativeTextProps {
  children: React.ReactNode;
}
