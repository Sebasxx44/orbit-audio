import { AsteriskTA } from "@/components/AsteriskTA";
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  ChevronDown,
  Globe,
  Menu,
  Radio,
  Waves,
  X,
} from "lucide-react";
import { ActionHeaderTA } from "@/components/ActionHeaderTA";
import { HeadphonesTA } from "@/components/HeadphonesTA";
import { OrderModalTA } from "@/components/OrderModalTA";
import { useConfiguration } from "@/composables/useConfiguration";
import { faq, finishes } from "@/data";

export const AppTA = () => {
  const { selection, persistence } = useConfiguration();
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [comparison, setComparison] = useState<"studio" | "essential">(
    "studio",
  );
  return (
    <>
      <a href="#contenido" className="skip-link">
        Ir al contenido
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="ORBIT inicio">
          <span className="brand-orbit" />
          ORBIT<span className="brand-register">®</span>
        </a>
        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Navegación principal"
        >
          <a href="#producto" onClick={() => setMenuOpen(false)}>
            El producto
          </a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>
            La experiencia
          </a>
          <a href="#detalles" onClick={() => setMenuOpen(false)}>
            Los detalles
          </a>
        </nav>
        <a href="#configura" className="nav-cta">
          Encuentra tu ORBIT <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="contenido">
        <section id="producto" className="hero">
          <div className="hero-topline">
            <span>
              <span className="live-dot" /> MENOS RUIDO. MÁS TÚ.
            </span>
            <span>INGENIERÍA CON ALMA / EST. 2026</span>
          </div>
          <div className="hero-body">
            <div className="hero-copy">
              <p className="eyebrow hero-label">
                PRESENTAMOS ORBIT STUDIO — 01
              </p>
              <h1>
                Escucha
                <br />
                <span>más allá.</span>
              </h1>
              <p className="hero-description">
                Baja el volumen del mundo.
                <br />
                Súbele a lo que te mueve.
              </p>
              <div className="hero-actions">
                <a className="button button-acid" href="#configura">
                  Hazlo tuyo <ArrowUpRight size={21} />
                </a>
                <span className="hero-price">
                  €349 <span>PRECIO CONCEPTUAL</span>
                </span>
              </div>
              <p className="hero-footnote">
                <span className="small-orbit" /> Sonido que se siente. Diseño
                que se queda.
              </p>
            </div>
            <HeadphonesTA color={selection.selected.hex} />
            <div className="vertical-caption">
              DESIGNED TO DISCONNECT. BUILT TO CONNECT.
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#experiencia">
              <span className="scroll-circle">
                <ArrowDown size={16} />
              </span>{" "}
              EXPLORA LA EXPERIENCIA
            </a>
            <div className="hero-finishes">
              <span>ACABADOS</span>
              {finishes.map((finish) => (
                <button
                  key={finish.id}
                  aria-label={`Ver acabado ${finish.name}`}
                  aria-pressed={selection.selected.id === finish.id}
                  style={{ "--finish": finish.hex } as React.CSSProperties}
                  onClick={() => selection.setFinish(finish.id)}
                />
              ))}
            </div>
            <span className="hero-page">01 — 04</span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>FEEL EVERY FREQUENCY</span>
          <span><AsteriskTA /></span>
          <span>FIND YOUR ORBIT</span>
          <span><AsteriskTA /></span>
          <span>FEEL EVERY FREQUENCY</span>
          <span><AsteriskTA /></span>
        </div>
        <section id="experiencia" className="experience section-wrap">
          <div className="section-top">
            <ActionHeaderTA
              index="01"
              eyebrow="LA EXPERIENCIA"
              title="El sonido no se escucha. Se habita."
            />
            <p className="experience-intro">
              Ese primer acorde. La pausa antes del beat. El detalle que nunca
              habías notado. Diseñamos ORBIT alrededor de esos momentos.
            </p>
          </div>
          <div className="experience-grid">
            <article>
              <span className="feature-index">01 / ENFOQUE</span>
              <Waves strokeWidth={1} />
              <h3>
                Tu propia
                <br />
                frecuencia.
              </h3>
              <p>
                Un concepto de cancelación activa que convierte el ruido de
                fuera en espacio para lo de dentro.
              </p>
              <span className="feature-spec">ANC ADAPTATIVO</span>
            </article>
            <article>
              <span className="feature-index">02 / PROFUNDIDAD</span>
              <AudioLines strokeWidth={1} />
              <h3>
                Hasta el último
                <br />
                escalofrío.
              </h3>
              <p>
                Graves con cuerpo, voces cercanas y espacio para cada
                instrumento. Un escenario privado.
              </p>
              <span className="feature-spec">DRIVERS DE 40 MM</span>
            </article>
            <article>
              <span className="feature-index">03 / LIBERTAD</span>
              <Radio strokeWidth={1} />
              <h3>
                Sin cables.
                <br />
                Sin prisa.
              </h3>
              <p>
                Comodidad diseñada para esos álbumes que se escuchan de
                principio a fin. Una vez más.
              </p>
              <span className="feature-spec">40 H DE AUTONOMÍA</span>
            </article>
          </div>
          <p className="concept-caption">
            ORBIT es un proyecto conceptual. Características ilustrativas de
            diseño de producto.
          </p>
        </section>
        <section className="manifesto">
          <div className="manifesto-meta">
            <span>NO ES SOLO AUDIO.</span>
            <span>ES TU ESPACIO.</span>
          </div>
          <p>
            Para los que
            <br />
            sienten <span>todo.</span>
          </p>
          <div className="manifesto-footer">
            <span className="manifesto-orbit" />
            <span>
              LA BANDA SONORA
              <br />
              DE SER TÚ.
            </span>
            <ArrowDownRight size={46} strokeWidth={1} />
          </div>
        </section>
        <section id="configura" className="configuration section-wrap">
          <div className="config-visual">
            <span className="config-figure">FIG. 02 / HECHO PARA TI</span>
            <HeadphonesTA color={selection.selected.hex} />
            <p className="config-color-name">
              {selection.selected.name}
              <span>
                0
                {finishes.findIndex(
                  (finish) => finish.id === selection.selected.id,
                ) + 1}{" "}
                / 03
              </span>
            </p>
          </div>
          <div className="config-content">
            <ActionHeaderTA
              index="02"
              eyebrow="ENCUENTRA TU ORBIT"
              title="Tu sonido. Tu carácter."
            />
            <p className="config-description">
              Elige el acabado que va contigo. Deja tu marca. Haz espacio para
              lo que importa.
            </p>
            <div className="config-step">
              <div className="step-heading">
                <span>01. ACABADO</span>
                <span>{selection.selected.name}</span>
              </div>
              <div className="finish-selector">
                {finishes.map((finish) => (
                  <button
                    key={finish.id}
                    className={
                      selection.selected.id === finish.id
                        ? "finish-option selected"
                        : "finish-option"
                    }
                    onClick={() => selection.setFinish(finish.id)}
                    aria-pressed={selection.selected.id === finish.id}
                  >
                    <span
                      className="finish-swatch"
                      style={{ background: finish.hex }}
                    >
                      {selection.selected.id === finish.id && (
                        <Check size={16} />
                      )}
                    </span>
                    {finish.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="config-step">
              <label className="step-heading" htmlFor="engraving">
                <span>02. TU FIRMA</span>
                <span>OPCIONAL</span>
              </label>
              <div className="engraving-field">
                <input
                  id="engraving"
                  maxLength={18}
                  value={selection.configuration.engraving}
                  onChange={(event) =>
                    selection.setEngraving(event.target.value)
                  }
                  placeholder="Un nombre. Una palabra. Algo tuyo."
                />
                <span>{selection.configuration.engraving.length}/18</span>
              </div>
              <p className="input-help">
                Grabado conceptual. Solo se guarda en tu navegador.
              </p>
            </div>
            <div className="config-summary">
              <div>
                <h3>ORBIT Studio</h3>
                <p>{selection.selected.name} / Edición 01</p>
              </div>
              <span>€349</span>
            </div>
            <button
              className="button button-dark"
              onClick={() => setOrderOpen(true)}
            >
              Este es mi ORBIT <ArrowUpRight size={20} />
            </button>
            <button className="save-button" onClick={persistence.save}>
              {persistence.status === "saved" ? (
                <>
                  <Check size={15} /> Configuración guardada
                </>
              ) : (
                <>
                  Guardar para después <ArrowRight size={15} />
                </>
              )}
            </button>
            {persistence.status === "error" && (
              <p className="save-error" role="alert">
                No se pudo guardar. Revisa los permisos de almacenamiento de tu
                navegador.
              </p>
            )}
            <p className="config-disclaimer">
              Experiencia demo · Sin pedidos ni pagos reales
            </p>
          </div>
        </section>
        <section id="detalles" className="details section-wrap">
          <div className="section-top">
            <ActionHeaderTA
              index="03"
              eyebrow="LOS DETALLES IMPORTAN"
              title="Sin ruido. Hasta en los detalles."
            />
            <div
              className="comparison-toggle"
              role="group"
              aria-label="Comparar modelos"
            >
              <button
                onClick={() => setComparison("studio")}
                aria-pressed={comparison === "studio"}
              >
                Studio
              </button>
              <button
                onClick={() => setComparison("essential")}
                aria-pressed={comparison === "essential"}
              >
                Essential
              </button>
            </div>
          </div>
          <div className="spec-table">
            <div>
              <span>CONCEPTO</span>
              <strong>
                {comparison === "studio" ? "ORBIT Studio" : "ORBIT Essential"}
              </strong>
              <span>
                {comparison === "studio"
                  ? "El sonido, sin límites."
                  : "Lo esencial, bien hecho."}
              </span>
            </div>
            <div>
              <span>AUTONOMÍA</span>
              <strong>
                {comparison === "studio" ? "Hasta 40 horas" : "Hasta 28 horas"}
              </strong>
              <span>Para escuchar sin mirar el reloj.</span>
            </div>
            <div>
              <span>CANCELACIÓN</span>
              <strong>
                {comparison === "studio"
                  ? "Activa adaptativa"
                  : "Aislamiento pasivo"}
              </strong>
              <span>Un poco menos de mundo.</span>
            </div>
            <div>
              <span>CONSTRUCCIÓN</span>
              <strong>
                {comparison === "studio"
                  ? "Aluminio + tejido"
                  : "Polímero + tejido"}
              </strong>
              <span>Pensado para acompañarte.</span>
            </div>
            <div>
              <span>ACABADOS</span>
              <strong>
                {comparison === "studio"
                  ? "Grafito / Platino / Musgo"
                  : "Grafito / Platino"}
              </strong>
              <span>Un reflejo de tu carácter.</span>
            </div>
            <div>
              <span>PRECIO ILUSTRATIVO</span>
              <strong>{comparison === "studio" ? "€349" : "€199"}</strong>
              <span>Modelos conceptuales. No disponibles a la venta.</span>
            </div>
          </div>
        </section>
        <section className="faq-section section-wrap">
          <ActionHeaderTA
            index="04"
            eyebrow="ANTES DE ENTRAR EN ÓRBITA"
            title="Todo claro."
          />
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>0{index + 1}</span>
                  <h3>{item.question}</h3>
                  <ChevronDown size={20} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing">
          <p>EL MUNDO PUEDE ESPERAR.</p>
          <a href="#configura">
            Entra en órbita.
            <ArrowUpRight strokeWidth={1} />
          </a>
          <div>
            <span>UNA PERSPECTIVA NUEVA.</span>
            <span>EL MISMO TÚ.</span>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#" aria-label="Volver al inicio">
          <span className="brand-orbit" />
          ORBIT<span className="brand-register">®</span>
        </a>
        <p>
          Concepto independiente de diseño y desarrollo.
          <br />
          No somos una marca comercial. Solo buenas ideas en órbita.
        </p>
        <div>
          <span>
            <Globe size={14} /> DISEÑADO EN COLOMBIA
          </span>
          <a
            href="https://github.com/Sebasxx44"
            target="_blank"
            rel="noreferrer"
          >
            POR SEBAZ <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
      {orderOpen && (
        <OrderModalTA
          finish={selection.selected}
          configuration={selection.configuration}
          onClose={() => setOrderOpen(false)}
          onSave={persistence.save}
          status={persistence.status}
        />
      )}
    </>
  );
};
