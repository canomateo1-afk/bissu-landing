/**
 * URLs de Calendly de Bissu Abogados.
 *
 * Source of truth para todos los CTAs de agendado. Si cambia el slug en
 * Calendly, actualizar acá.
 *
 *   - CALENDLY_GENERAL: canal por defecto de la landing. "Diagnóstico Legal
 *     Inicial" — 20 min, perfil Marketing Bissu, ruteo round-robin interno.
 *   - CALENDLY_SAMUEL: enlace al diagnóstico general (Samuel no tiene cuenta
 *     individual; los leads que lo nombran caen igual en Marketing y de ahí se
 *     enrutan).
 *   - CALENDLY_ADOLFO: "Consulta Legal de 20 minutos" con Julián Vargas.
 */

export const CALENDLY_GENERAL =
  "https://calendly.com/bissuabogados-marketing/30min";

export const CALENDLY_SAMUEL = CALENDLY_GENERAL;

export const CALENDLY_ADOLFO =
  "https://calendly.com/jvargas-bissuabogados/consulta-de-20-minutos";

/** Atributos comunes para abrir Calendly en nueva pestaña con tracking-safe rel. */
export const calendlyLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
