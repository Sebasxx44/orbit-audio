import { useEffect, useRef, useState } from "react";
import { createHeadphonesScene } from "@/components/headphonesScene";
import type { HeadphonesScene, HeadphonesState } from "@/types";
export const useHeadphones = (color: string): HeadphonesState => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HeadphonesScene | null>(null);
  const initialColor = useRef(color);
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    if (!canvasRef.current) return;
    try {
      sceneRef.current = createHeadphonesScene(
        canvasRef.current,
        initialColor.current,
      );
      setAvailable(true);
    } catch {
      setAvailable(false);
    }
    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);
  useEffect(() => {
    sceneRef.current?.setColor(color);
  }, [color]);
  return { canvasRef, available };
};
