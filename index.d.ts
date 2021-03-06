declare module "react-native-responsive-screen-font" {
  import { Component } from "react";

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function widthPercentageToFonts(widthPercent: string | number): number;
  export function heightPercentageToFonts(
    heightPercent: string | number
  ): number;
  export function listenOrientationChange(
    screenClassComponent: Component<any, any>
  ): void;
  export function removeOrientationListener(): void;
}
