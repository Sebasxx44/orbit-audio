import type { RefObject } from "react";
export type FinishId = "graphite" | "silver" | "moss";
export interface Finish {
  id: FinishId;
  name: string;
  hex: string;
  metal: string;
  label: string;
}
export interface Configuration {
  finish: FinishId;
  engraving: string;
}
export type PersistenceStatus = "idle" | "saved" | "error";
export interface ConfigurationSelection {
  configuration: Configuration;
  selected: Finish;
  setFinish: (finish: FinishId) => void;
  setEngraving: (engraving: string) => void;
}
export interface ConfigurationPersistence {
  status: PersistenceStatus;
  save: () => void;
}
export interface ConfigurationState {
  selection: ConfigurationSelection;
  persistence: ConfigurationPersistence;
}
export interface HeadphonesState {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  available: boolean;
}
export interface HeadphonesScene {
  setColor: (hex: string) => void;
  dispose: () => void;
}
