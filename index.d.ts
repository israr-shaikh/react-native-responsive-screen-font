declare module 'react-native-responsive-screens-fonts' {
  import { Component } from 'react';

  export function normalWidth(widthPercent: string | number): number;
  export function normalHeight(heightPercent: string | number): number;
  export function iPadWidth(widthPercent: string | number): number;
  export function iPadHeight(heightPercent: string | number): number;
  export function listenOrientationChange(screenClassComponent: Component<any, any>): void;
  export function removeOrientationListener(): void;
}
