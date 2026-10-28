import { MoveUpRight, Rotate3D } from "lucide-react";
import { useHeadphones } from "@/composables/useHeadphones";
export const HeadphonesTA = ({ color }: { color: string }) => {
  const { canvasRef, available } = useHeadphones(color);
  return (
    <div className="headphones-stage">
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="stage-star star-one">✳</div>
      <div className="stage-star star-two">+</div>
      <span className="stage-reference">O—01 / STUDIO SERIES</span>
      <canvas
        ref={canvasRef}
        className={available ? "headphones-canvas" : "headphones-canvas hidden"}
        role="img"
        aria-label="Modelo tridimensional interactivo de auriculares ORBIT Studio. Mueve el cursor para cambiar la perspectiva."
      />
      {!available && (
        <div className="headphones-fallback" aria-hidden="true">
          <div className="fallback-band" />
          <div className="fallback-cup left" style={{ background: color }} />
          <div className="fallback-cup right" style={{ background: color }} />
        </div>
      )}
      <div className="object-callout">
        <span className="callout-line" />
        <span>
          Diseñado para
          <br />
          perderte en el sonido.
        </span>
        <MoveUpRight size={15} />
      </div>
      <div className="rotate-hint">
        <Rotate3D size={17} />
        <span>MUEVE EL CURSOR. EXPLORA CADA ÁNGULO.</span>
      </div>
    </div>
  );
};
