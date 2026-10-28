import { useEffect, useRef } from "react";
import { Check, X, ArrowUpRight } from "lucide-react";
import type { Configuration, Finish, PersistenceStatus } from "@/types";
export const OrderModalTA = ({
  finish,
  configuration,
  onClose,
  onSave,
  status,
}: {
  finish: Finish;
  configuration: Configuration;
  onClose: () => void;
  onSave: () => void;
  status: PersistenceStatus;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="order-modal"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className="modal-close"
        onClick={onClose}
        aria-label="Cerrar resumen"
      >
        <X />
      </button>
      <p className="eyebrow">
        <span className="live-dot" /> TU SONIDO. TUS REGLAS.
      </p>
      <h2>
        Buen oído.
        <br />
        Mejor elección.
      </h2>
      <div className="order-item">
        <span className="order-swatch" style={{ background: finish.hex }} />
        <div>
          <h3>ORBIT Studio</h3>
          <p>
            {finish.name}{" "}
            {configuration.engraving && `· «${configuration.engraving}»`}
          </p>
        </div>
        <span>€349</span>
      </div>
      <p className="demo-note">
        Esta es una experiencia conceptual de portfolio. No se realizará ningún
        pedido ni cobro. Tu selección puede guardarse solo en este navegador.
      </p>
      <button className="button button-acid" onClick={onSave}>
        {status === "saved" ? (
          <>
            <Check size={18} />
            Configuración guardada
          </>
        ) : (
          <>
            Guardar mi selección
            <ArrowUpRight size={18} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="save-error" role="alert">
          Tu navegador no permitió guardar la configuración. Puedes volver a
          intentarlo.
        </p>
      )}
      <button className="modal-back" onClick={onClose}>
        Seguir explorando
      </button>
    </dialog>
  );
};
