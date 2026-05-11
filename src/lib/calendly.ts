/**
 * URLs de Calendly de Bissu Abogados.
 *
 * Source of truth para todos los CTAs de agendado.
 *
 *   - CALENDLY_GENERAL: default público de la web — "Consulta Legal de 20
 *     minutos" (gratuita, sin compromiso). Perfil de Julián Vargas.
 *   - CALENDLY_60: opción secundaria — "Consulta de 60 minutos" para
 *     prospectos que ya están listos para una reunión más a fondo.
 *   - CALENDLY_SAMUEL / CALENDLY_ADOLFO: alias por perfil titular. Hoy
 *     ambos apuntan al mismo slot de 20 min de Julián (única cuenta
 *     pública con event types orientados a clientes). Si en el futuro
 *     Samuel abre su propio Calendly, actualizar acá.
 */

export const CALENDLY_GENERAL =
  "https://calendly.com/jvargas-bissuabogados/consulta-de-20-minutos";

export const CALENDLY_60 =
  "https://calendly.com/jvargas-bissuabogados/consulta-de-60-minutos";

export const CALENDLY_SAMUEL = CALENDLY_GENERAL;

export const CALENDLY_ADOLFO = CALENDLY_GENERAL;

/** Atributos comunes para abrir Calendly en nueva pestaña con tracking-safe rel. */
export const calendlyLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
