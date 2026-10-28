import type { Configuration } from "@/types";

export const parseConfiguration = (raw: string | null): Configuration => {
  try {
    const stored = JSON.parse(raw ?? "null") as Partial<Configuration> | null;
    if (
      typeof stored === "object" &&
      stored !== null &&
      !Array.isArray(stored)
    ) {
      const { finish, engraving } = stored;
      if (
        (finish === "graphite" || finish === "silver" || finish === "moss") &&
        typeof engraving === "string"
      )
        return { finish, engraving: engraving.slice(0, 18) };
    }
  } catch {
    /* Los datos inválidos nunca bloquean la experiencia. */
  }
  return { finish: "silver", engraving: "" };
};
