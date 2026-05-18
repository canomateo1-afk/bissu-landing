/**
 * Landing de conversión — Herencias y Sucesiones.
 *
 * Página dedicada para campañas de ADS (Meta) con destino /herencias.
 * Reutiliza el componente V4AreaPage para mantener idéntico diseño al de
 * las páginas de área (p. ej. Derecho Familiar), pero con contenido 100%
 * enfocado en sucesiones y un único objetivo: agendar la consulta.
 *
 * No se agrega a v4Areas a propósito: así NO se genera la ruta duplicada
 * /areas/herencias y se evita contenido duplicado para SEO. El objeto vive
 * aislado y lo consume directamente src/app/herencias/page.tsx.
 *
 * Voz de marca: español mexicano formal, sin em-dash, sin informalidad.
 */

import type { V4Area } from "@/lib/v4-areas";

export const herenciasArea: V4Area = {
  slug: "herencias",
  label: "Herencias",
  title: "Abogado de Herencias y Sucesiones en CDMX",
  servicesH2: "Servicios de abogado de sucesiones en CDMX",
  eyebrow: "Herencias",
  tagline:
    "Juicios sucesorios, testamentarios e intestamentarios. Recupere el patrimonio familiar sin pleitos interminables.",
  metaDescription:
    "Abogados de herencias y sucesiones en CDMX. Juicio sucesorio testamentario e intestamentario, impugnación de testamento, adjudicación y escrituración. Consulta gratuita.",
  heroBlurb:
    "Sucesiones testamentarias e intestamentarias, juicios sucesorios contenciosos, impugnación de testamento y adjudicación de bienes. Una herencia detenida tiene salida.",
  intro:
    "Una herencia mal manejada divide familias y congela patrimonios durante años. En Bissu Abogados, S.C., llevamos sucesiones testamentarias, intestamentarias y juicios sucesorios contenciosos hasta la adjudicación y escrituración de los bienes. Damos una primera lectura honesta: si conviene la vía notarial o el litigio, y cuál es el camino más rápido para tu familia.",
  image: "/images/areas/familiar.jpg",
  stat: {
    value: "18+",
    label: "Años en litigio civil y sucesorio",
  },
  services: [
    {
      title: "Sucesión testamentaria",
      description:
        "Existe testamento válido. Tramitamos el juicio sucesorio testamentario, la declaratoria de herederos y la ejecución de la voluntad del testador hasta la entrega de los bienes.",
    },
    {
      title: "Sucesión intestamentaria",
      description:
        "No hay testamento. Determinamos quiénes son los herederos legítimos conforme al Código Civil (cónyuge, hijos, ascendientes) y promovemos el juicio sucesorio intestamentario.",
    },
    {
      title: "Juicio sucesorio contencioso",
      description:
        "Cuando hay disputa entre herederos, bienes ocupados o reclamaciones cruzadas, representamos al cliente en tribunales para destrabar la sucesión y proteger su parte.",
    },
    {
      title: "Impugnación y nulidad de testamento",
      description:
        "Testamento otorgado con vicios formales, presunta incapacidad del testador, dolo o fraude familiar. Promovemos la nulidad e impulsamos el juicio intestamentario en paralelo.",
    },
    {
      title: "Adjudicación y escrituración de bienes",
      description:
        "Declaratoria de herederos, inventario y avalúo, partición y adjudicación de inmuebles y cuentas a nombre de los herederos, con coordinación notarial para la escrituración.",
    },
    {
      title: "Testamento y planeación patrimonial",
      description:
        "Elaboración de testamento y estructuras patrimoniales que ordenan la herencia en vida y evitan a la familia un conflicto sucesorio en el futuro.",
    },
  ],
  scenarios: [
    {
      headline: "El familiar falleció sin dejar testamento",
      body: "Nadie sabe cómo repartir los bienes ni por dónde empezar. Promovemos el juicio sucesorio intestamentario, acreditamos a los herederos legítimos y formalizamos el reparto conforme a la ley.",
    },
    {
      headline: "Un heredero bloquea la sucesión",
      body: "Un familiar ocupa una propiedad, retiene documentos o reclama más de lo que le corresponde. Llevamos el juicio sucesorio contencioso para destrabar el proceso y proteger su parte.",
    },
    {
      headline: "Hay bienes congelados a nombre del fallecido",
      body: "Una casa, una cuenta bancaria o un negocio quedaron a nombre del fallecido y no se pueden usar ni vender. Tramitamos la adjudicación y la escrituración a nombre de los herederos.",
    },
    {
      headline: "Existe un testamento que parece inválido",
      body: "Testamento con vicios formales, presunta incapacidad del testador o fraude familiar. Impugnamos el testamento y promovemos el juicio sucesorio intestamentario en paralelo.",
    },
    {
      headline: "La sucesión lleva años detenida",
      body: "El trámite se inició con otro abogado y no avanza. Revisamos el expediente, identificamos qué frena el caso y retomamos la sucesión hasta la adjudicación de los bienes.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Consulta inicial gratuita",
      body: "Reunión de 20 minutos con un abogado especialista. Lectura honesta del caso: si conviene la vía notarial o el juicio sucesorio, y qué documentos hacen falta.",
    },
    {
      step: "02",
      title: "Diagnóstico escrito",
      body: "Análisis con la vía recomendada, los herederos a acreditar, los bienes de la masa hereditaria, los plazos estimados y los honorarios del procedimiento.",
    },
    {
      step: "03",
      title: "Trámite y juicio sucesorio",
      body: "Promoción de la sucesión, declaratoria de herederos, designación de albacea, inventario y avalúo, y representación en audiencias e incidentes.",
    },
    {
      step: "04",
      title: "Partición y adjudicación",
      body: "Proyecto de partición, adjudicación de bienes a los herederos y coordinación notarial para la escrituración e inscripción en el Registro Público.",
    },
  ],
  teamSlugs: ["adolfo-vargas", "samuel-bissu"],
  faqs: [
    {
      question: "¿Cuánto tarda un juicio sucesorio en CDMX?",
      answer:
        "Una sucesión sin conflicto entre herederos, con documentación completa, puede resolverse en aproximadamente 6 a 12 meses, e incluso tramitarse por la vía notarial cuando todos los herederos están de acuerdo y son mayores de edad. Cuando hay disputa entre herederos, impugnación de testamento o bienes ocupados, el juicio sucesorio contencioso puede extenderse a 14 a 24 meses o más. En la consulta inicial se entrega una estimación realista según el caso concreto.",
    },
    {
      question: "Mi familiar falleció sin testamento, ¿quién hereda?",
      answer:
        "Cuando no hay testamento se abre la sucesión intestamentaria o legítima. El Código Civil define el orden de los herederos: en primer lugar los descendientes (hijos) y el cónyuge o concubina, después los ascendientes (padres) y, a falta de ellos, los parientes colaterales hasta cierto grado. Se promueve un juicio sucesorio intestamentario donde un juez emite la declaratoria de herederos antes de repartir los bienes.",
    },
    {
      question: "¿Se puede impugnar un testamento?",
      answer:
        "Sí, cuando existe causa legal. Un testamento puede declararse nulo si se otorgó sin las formalidades de ley, si el testador carecía de capacidad al momento de testar, o si hubo dolo, violencia o fraude. La impugnación se promueve por vía judicial y, en muchos casos, conviene iniciar en paralelo el juicio sucesorio intestamentario. En la consulta inicial se revisa si la impugnación es viable antes de litigar.",
    },
    {
      question: "¿Qué es el albacea y quién lo designa?",
      answer:
        "El albacea es la persona encargada de representar la sucesión, formar el inventario, administrar los bienes y ejecutar la partición. Si hay testamento, lo designa el testador; si no lo hay, o el designado no acepta, lo nombran los herederos o, en su defecto, el juez. El albacea responde de su gestión y debe rendir cuentas. Cuando hay conflicto entre herederos, la designación del albacea suele ser uno de los primeros puntos en disputa.",
    },
    {
      question: "¿Cuánto cuesta un trámite de sucesión?",
      answer:
        "El costo depende de la vía (notarial o judicial), del número de herederos, del tipo de bienes y de si existe conflicto. La consulta inicial de 20 minutos y el diagnóstico legal posterior no tienen costo. Los honorarios del procedimiento se presentan por escrito en el diagnóstico, antes de que el cliente decida contratar, sin cobros sorpresa durante el proceso.",
    },
    {
      question: "¿Atienden sucesiones con inmuebles o fuera de la Ciudad de México?",
      answer:
        "Sí. Bissu Abogados, S.C., tramita sucesiones con inmuebles, cuentas bancarias, participaciones societarias y negocios, e incluye la coordinación notarial para la escrituración y la inscripción en el Registro Público de la Propiedad. La oficina central está en Lomas de Chapultepec, CDMX, y la consulta inicial se realiza por video, por lo que es posible atender casos de cualquier entidad de la República.",
    },
  ],
  relatedSlugs: ["litigio-familiar", "litigio-civil", "litigio-constitucional"],
  keywords: [
    "abogado de herencias CDMX",
    "juicio sucesorio CDMX",
    "sucesión intestamentaria México",
    "sucesión testamentaria",
    "impugnación de testamento",
    "abogado de sucesiones Lomas de Chapultepec",
    "declaratoria de herederos",
    "adjudicación de bienes hereditarios",
    "herencia sin testamento México",
    "abogado testamentario CDMX",
  ],
};
