import { useState } from "react";
import { finishes } from "@/data";
import { parseConfiguration } from "@/composables/configurationStorage";
import type {
  Configuration,
  ConfigurationState,
  FinishId,
  PersistenceStatus,
} from "@/types";
const storageKey = "orbit-configuration-v1";
const readConfiguration = (): Configuration => {
  try {
    return parseConfiguration(localStorage.getItem(storageKey));
  } catch {
    return parseConfiguration(null);
  }
};
export const useConfiguration = (): ConfigurationState => {
  const [configuration, setConfiguration] =
    useState<Configuration>(readConfiguration);
  const [status, setStatus] = useState<PersistenceStatus>("idle");
  const setFinish = (finish: FinishId) => {
    setConfiguration((current) => ({ ...current, finish }));
    setStatus("idle");
  };
  const setEngraving = (engraving: string) => {
    setConfiguration((current) => ({
      ...current,
      engraving: engraving.slice(0, 18),
    }));
    setStatus("idle");
  };
  const save = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(configuration));
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  };
  return {
    selection: {
      configuration,
      selected:
        finishes.find((finish) => finish.id === configuration.finish) ??
        finishes[1],
      setFinish,
      setEngraving,
    },
    persistence: { status, save },
  };
};
