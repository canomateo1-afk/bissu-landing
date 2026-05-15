/**
 * Practice area pillar pages — content + SEO data.
 *
 * Each area is a standalone pillar page targeting high-intent legal queries.
 * Content follows the Bissu brand voice: español mexicano formal, sin em-dash,
 * sin "tú" ni informalidad. Cada área tiene servicios concretos, escenarios
 * reales y FAQ optimizada para AI Overviews + Google.
 */

export type V4AreaService = {
  title: string;
  description: string;
};

export type V4AreaScenario = {
  headline: string;
  body: string;
};

export type V4AreaFaq = {
  question: string;
  answer: string;
};

export type V4AreaStat = {
  value: string;
  label: string;
};

export type V4Area = {
  slug: string;
  label: string;
  /** Long heading title — used as H1 and meta title. */
  title: string;
  /** SEO-focused H2 used on the Services section. Should reinforce the commercial keyword (e.g. "Servicios de abogado mercantil en CDMX"). */
  servicesH2: string;
  /** One-sentence tagline below the eyebrow. */
  tagline: string;
  /** SEO description — 150-160 chars. */
  metaDescription: string;
  /** Hero blurb — 2-3 sentences for visual hero. */
  heroBlurb: string;
  /** Long intro — 5-7 sentences for body. */
  intro: string;
  /** Hero image (Unsplash or local). */
  image: string;
  /** Eyebrow over hero — short label. */
  eyebrow: string;
  /** Optional headline stat (e.g. "60% quita aprobada"). */
  stat?: V4AreaStat;
  /** What the area covers — services list (6-8 items). */
  services: V4AreaService[];
  /** Use-case scenarios — "cuándo llamarnos" (4-5). */
  scenarios: V4AreaScenario[];
  /** Process — 4 steps from contact to outcome. */
  process: { step: string; title: string; body: string }[];
  /** Slugs of team members specialized in this area (links to /equipo/<slug>). */
  teamSlugs: string[];
  /** FAQ — 5-6 Q&A with GEO-optimized answers. */
  faqs: V4AreaFaq[];
  /** Slugs of related areas to cross-link. */
  relatedSlugs: string[];
  /** Keywords for metadata. */
  keywords: string[];
};

export const v4Areas: V4Area[] = [
  // ============================================================
  // 1) LITIGIO CIVIL
  // ============================================================
  {
    slug: "litigio-civil",
    label: "Civil",
    title: "Abogado Civil en CDMX",
    servicesH2: "Servicios de abogado civil en CDMX",
    eyebrow: "Litigio civil · Bissu",
    tagline: "Cuando un contrato se incumple o un derecho personal se vulnera.",
    metaDescription:
      "Despacho de litigio civil en CDMX. Incumplimiento de contratos, daños y perjuicios, posesión y propiedad, responsabilidad civil. Consulta inicial gratuita.",
    heroBlurb:
      "Conflictos entre particulares por incumplimiento de obligaciones, daños patrimoniales o lesión a derechos individuales.",
    intro:
      "El litigio civil resuelve disputas entre particulares cuando un contrato se incumple, una propiedad se invade o una conducta causa un daño. En Bissu Abogados, S.C., llevamos casos civiles complejos para empresas, particulares y familias en Ciudad de México y a nivel federal. Cada caso lo lleva un abogado especialista de principio a fin. Antes de iniciar una demanda entregamos un diagnóstico legal escrito con la viabilidad real del caso, los riesgos y el costo estimado.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Incumplimiento de contratos",
        description:
          "Reclamación de obligaciones de dar, hacer o no hacer derivadas de contratos privados.",
      },
      {
        title: "Daños y perjuicios",
        description:
          "Cuantificación y reclamación del daño, lucro cesante y daño moral derivado de actos u omisiones imputables.",
      },
      {
        title: "Acciones reales y de posesión",
        description:
          "Reivindicación, plenaria de posesión y prescripción adquisitiva (usucapión) sobre inmuebles en CDMX.",
      },
      {
        title: "Responsabilidad civil objetiva y subjetiva",
        description:
          "Accidentes, defectos de construcción, productos defectuosos y daños causados por terceros.",
      },
      {
        title: "Nulidad y rescisión",
        description:
          "Acciones para anular o rescindir contratos por vicios del consentimiento, lesión, error, dolo o causa ilícita.",
      },
      {
        title: "Controversias de arrendamiento",
        description:
          "Desocupación, terminación anticipada, pago de rentas vencidas, fianzas y daños al inmueble bajo el Código Nacional de Procedimientos Civiles y Familiares.",
      },
      {
        title: "Medidas cautelares",
        description:
          "Solicitud y ejecución de medidas cautelares para asegurar el cumplimiento de la sentencia en los juicios civiles.",
      },
      {
        title: "Medios preparatorios",
        description:
          "Confesión judicial, exhibición de documentos, reconocimiento de firma y demás medios preparatorios antes de juicio.",
      },
    ],
    scenarios: [
      {
        headline: "Un contrato firmado que no se cumple",
        body: "La contraparte dejó de pagar, no entregó el bien o incumplió un servicio, y la negociación amistosa se agotó. Antes de demandar revisamos el contrato, el daño documentable y la viabilidad de probarlo en juicio.",
      },
      {
        headline: "Un tercero causó un daño material o moral",
        body: "Un accidente, un acto negligente o una conducta dolosa generó pérdida económica o afectación personal. Cuantificamos daño, lucro cesante, daño moral, y diseñamos la estrategia.",
      },
      {
        headline: "Una propiedad está en disputa",
        body: "Disputa sobre titularidad, posesión, linderos o invasión de inmueble. Iniciamos la acción reivindicatoria, posesoria o plenaria correspondiente según los elementos disponibles.",
      },
      {
        headline: "Un arrendamiento se complicó",
        body: "Arrendatario en mora, daños al inmueble, terminación contenciosa o subarriendo no autorizado. Definimos si conviene rescisión, desocupación o cobro y la vía más eficiente en CDMX.",
      },
      {
        headline: "Cómo se asegura el cumplimiento de una sentencia",
        body: "Al inicio de un juicio se pueden solicitar medidas para garantizar el cumplimiento de una sentencia civil, como el aseguramiento de bienes, acciones, prohibición de pagos, cualquier medida idónea para conservar la materia del litigio.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Reunión de 20 minutos con abogado especialista. Escuchamos el caso, identificamos el área aplicable y damos una primera lectura de viabilidad.",
      },
      {
        step: "02",
        title: "Diagnóstico legal en 72 horas",
        body: "A partir de contar con todos los elementos para el estudio del caso, entregamos un análisis por escrito con: viabilidad real, vía procesal recomendada, riesgos identificados, honorarios estimados y plazo aproximado.",
      },
      {
        step: "03",
        title: "Estrategia y seguimiento",
        body: "Si decide avanzar, preparamos demanda, contestación o medios preparatorios. Comunicación directa con el especialista del caso, no con un becario. Reportes mensuales por medio de nuestra plataforma.",
      },
      {
        step: "04",
        title: "Resolución",
        body: "Sentencia, convenio judicial o transacción. Acompañamos la ejecución hasta el cumplimiento total. Si conviene apelar o promover amparo, lo recomendamos por escrito.",
      },
    ],
    teamSlugs: ["adolfo-vargas", "samuel-bissu"],
    faqs: [
      {
        question: "¿Cuánto cuesta iniciar un juicio civil en CDMX?",
        answer:
          "La consulta inicial en Bissu Abogados, S.C., es gratuita en un primer momento. Los honorarios formales se cotizan después del diagnóstico escrito y dependen de la cuantía del asunto, la complejidad de la prueba y la vía procesal. Trabajamos bajo esquema de iguala fija, cuota litis (porcentaje sobre el resultado) o cuota mixta, según convenga al caso.",
      },
      {
        question: "¿Cuánto tarda un juicio civil ordinario en México?",
        answer:
          "Un juicio civil ordinario en CDMX puede durar entre 12 y 24 meses en primera instancia, más 6 a 12 meses si la sentencia se impugna en apelación o amparo directo. Los juicios orales civiles (cuantía menor) suelen resolverse en 6 a 9 meses. El plazo real depende de la carga del juzgado, la conducta procesal de la contraparte y los medios de impugnación que se promuevan.",
      },
      {
        question: "¿Qué diferencia hay entre litigio civil y mercantil?",
        answer:
          "El litigio civil resuelve conflictos entre particulares por contratos privados, propiedad, responsabilidad por daños y arrendamientos no comerciales. El litigio mercantil aplica cuando una de las partes actúa como comerciante o cuando el acto es un acto de comercio (compraventa mercantil, títulos de crédito, contratos entre empresas). La vía procesal, los plazos y la prueba son distintos. En Bissu Abogados, S.C., evaluamos cuál corresponde antes de comenzar el juicio.",
      },
      {
        question: "¿Es necesario agotar la negociación antes de demandar?",
        answer:
          "No es obligatorio agotar negociación previa en materia civil federal o local CDMX, pero sí es recomendable. Una carta de requerimiento bien redactada por abogado puede resolver el conflicto sin juicio, preservar la relación comercial o documentar la mora en favor del cliente. En contratos con cláusula de mediación o arbitraje previo, sí existe obligación de cumplir esa fase antes de acudir a tribunales.",
      },
      {
        question: "¿Bissu acepta casos civiles fuera de CDMX?",
        answer:
          "Bissu Abogados, S.C., litiga civilmente en todo México. La oficina está en Lomas de Chapultepec, CDMX, pero comparecemos ante tribunales federales y de cualquier entidad federativa cuando el cliente o el bien en disputa lo requiere. En casos foráneos coordinamos con corresponsales locales bajo nuestra dirección estratégica.",
      },
      {
        question: "¿Qué documentos llevar a la consulta inicial?",
        answer:
          "Para la consulta inicial gratuita basta con explicar el caso. Si los tiene a la mano, ayuda traer: contratos firmados, comunicaciones relevantes (correos, mensajes impresos), facturas o pagos, fotografías del daño y cualquier documento oficial recibido. Si no tiene nada por escrito, se evalúa igual y se identifica qué prueba reconstruir antes de demandar.",
      },
    ],
    relatedSlugs: ["litigio-mercantil", "litigio-familiar", "litigio-constitucional"],
    keywords: [
      "litigio civil CDMX",
      "abogado civil Ciudad de México",
      "incumplimiento de contrato México",
      "daños y perjuicios CDMX",
      "abogado de daño moral",
      "reivindicación CDMX",
      "usucapión CDMX",
      "responsabilidad civil",
      "sucesión contenciosa",
      "abogado arrendamiento CDMX",
    ],
  },

  // ============================================================
  // 2) LITIGIO MERCANTIL
  // ============================================================
  {
    slug: "litigio-mercantil",
    label: "Mercantil",
    title: "Abogado Mercantil en CDMX",
    servicesH2: "Servicios de abogado mercantil en CDMX",
    eyebrow: "Mercantil & Corporativo",
    tagline: "Sociedades, accionistas y contratos mercantiles.",
    metaDescription:
      "Despacho de litigio mercantil y corporativo en CDMX. Conflictos entre accionistas, contratos mercantiles, títulos de crédito, fideicomisos. Reconocidos por Best Lawyers in Mexico 2026.",
    heroBlurb:
      "Disputas entre socios y accionistas, contratos mercantiles, títulos de crédito y fideicomisos. Defensa rigurosa para empresas familiares y multinacionales.",
    intro:
      "El litigio mercantil es el terreno propio de Bissu Abogados, S.C. Llevamos conflictos comerciales complejos para empresas mexicanas y multinacionales con presencia en México: disputas accionarias, cumplimiento de contratos de crédito, ejecución de títulos y operaciones de crédito y constitución de fideicomisos. Samuel Bissu Bazbaz, nuestro socio especialista, está reconocido por Best Lawyers in Mexico 2026 y Leaders League 2025 en Resolución de Conflictos.",
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Conflictos entre accionistas",
        description:
          "Acciones de responsabilidad contra administradores, dilución indebida, exclusión de socios, y oposición a acuerdos asamblearios.",
      },
      {
        title: "Contratos mercantiles",
        description:
          "Suministro, distribución, agencia, franquicia, joint venture, y compraventa internacional. Negociación, redacción y litigio contencioso.",
      },
      {
        title: "Títulos de crédito",
        description:
          "Juicio ejecutivo mercantil oral y escrito. Defensa contra ejecución indebida y adopción de providencias precautorias.",
      },
      {
        title: "Fideicomisos contenciosos",
        description:
          "Disputas sobre patrimonio fideicomitido, remoción del fiduciario, rendición de cuentas, y fideicomisos de garantía e inmobiliarios.",
      },
      {
        title: "Compraventa de empresas",
        description:
          "Disputas post-cierre por declaraciones falsas, ajustes de precio, earn-outs no cumplidos, retención de prenda y garantías M&A.",
      },
      {
        title: "Recuperación de cartera",
        description:
          "Cobro judicial y extrajudicial de cartera empresarial. Embargo precautorio y ejecución de garantías.",
      },
    ],
    scenarios: [
      {
        headline: "Un socio está bloqueando la operación",
        body: "Voto de calidad mal ejercido, dilución sin causa, asamblea convocada sin formalidades, o administrador que actúa fuera de sus facultades. Iniciamos acción de responsabilidad o nulidad de acuerdos.",
      },
      {
        headline: "Un contrato comercial se incumplió",
        body: "Distribuidor que incumplió con la exclusividad, proveedor que dejó de surtir, cliente que dejó de pagar facturas firmadas.",
      },
      {
        headline: "Cobra un pagaré pero la contraparte se opone",
        body: "El demandado promueve oposición, tercería o medio preparatorio para retrasar el cobro. Diseñamos la respuesta para mantener el embargo precautorio y acelerar la ejecución.",
      },
      {
        headline: "Compró una empresa y aparecieron pasivos ocultos",
        body: "Declaraciones falsas en el SPA, pasivos no revelados, ajuste de precio mal calculado, earn-out manipulado. Activamos las cláusulas de indemnización y, si conviene, arbitraje internacional.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Reunión de 20 minutos con Samuel Bissu o especialista asignado. Análisis de la operación, identificación de cláusulas relevantes y lectura de viabilidad.",
      },
      {
        step: "02",
        title: "Diagnóstico legal en 72 horas",
        body: "Memorando con: vía procesal recomendada (mercantil ejecutivo, ordinario, arbitraje), riesgos, plazos, honorarios estimados y estrategia probatoria. Entregado en 72 horas hábiles a partir de contar con todos los elementos para el estudio del caso.",
      },
      {
        step: "03",
        title: "Litigio efectivo",
        body: "Demanda, contestación, medidas cautelares, embargos precautorios, pruebas periciales y testimoniales. Reportes ejecutivos mensuales para el cliente o su consejo.",
      },
      {
        step: "04",
        title: "Cobro o cierre",
        body: "Ejecución de sentencia, transacción judicial o convenio extra-procesal. Evaluación de cada etapa, recursos ordinarios y juicio de Amparo.",
      },
    ],
    teamSlugs: ["samuel-bissu", "adolfo-vargas"],
    faqs: [
      {
        question: "¿Qué es un juicio ejecutivo mercantil y cuándo procede?",
        answer:
          "El juicio ejecutivo mercantil es la vía rápida de cobro cuando se tiene un título de crédito (pagaré, letra de cambio, cheque) o un documento que traiga aparejada ejecución según el Código de Comercio. Permite ordenar embargo precautorio sobre bienes del deudor al admitirse la demanda. En la práctica resuelve en primera instancia entre 6 y 12 meses, mucho más rápido que el juicio ordinario.",
      },
      {
        question: "¿Cómo se resuelve un conflicto entre accionistas en México?",
        answer:
          "Un conflicto entre accionistas se resuelve por la vía estatutaria primero (asamblea, junta de socios), por mediación o conciliación si hay cláusula, y por litigio mercantil o arbitraje si no se llega a acuerdo. Las acciones más comunes son: nulidad de asamblea, responsabilidad contra administradores, separación o exclusión de socio, y oposición al ejercicio de derechos minoritarios.",
      },
      {
        question: "¿Cuánto cuesta un juicio mercantil complejo?",
        answer:
          "Los honorarios en litigio mercantil dependen de la cuantía, la complejidad probatoria y la duración estimada. Bissu Abogados, S.C., trabaja bajo tres esquemas: iguala fija (cobro mensual), cuota litis (porcentaje del resultado) o esquema mixto.",
      },
      {
        question: "¿Qué pasa si el contrato tiene cláusula de arbitraje?",
        answer:
          "Si el contrato mercantil tiene cláusula compromisoria válida, la disputa debe resolverse en arbitraje, no en tribunales ordinarios. Bissu litiga arbitrajes bajo Cámara de Comercio Internacional (CCI), CANACO y reglas UNCITRAL. Si la contraparte demanda en tribunal pese a la cláusula, promovemos excepción de incompetencia. Ver también nuestra área de Arbitraje y MASC.",
      },
      {
        question: "¿Aceptan casos urgentes que ameriten Providencias Precautorias?",
        answer:
          "Sí. Cuando hay riesgo de que la contraparte oculte bienes, destruya documentos o consume un acto irreversible, se promueven Providencias Precautorias dentro de las primeras 48 a 72 horas: embargo de bienes, radicación de persona y aseguramiento de cuentas bancarias. Es importante actuar antes de que el patrimonio se diluya.",
      },
    ],
    relatedSlugs: ["litigio-concursal", "arbitraje-comercial-internacional", "litigio-civil"],
    keywords: [
      "litigio mercantil CDMX",
      "abogado corporativo Ciudad de México",
      "conflictos accionistas México",
      "juicio ejecutivo mercantil",
      "abogado pagaré CDMX",
      "fideicomiso contencioso",
      "abogado contratos mercantiles",
      "competencia desleal México",
      "Best Lawyers Mexico 2026",
      "Samuel Bissu",
    ],
  },

  // ============================================================
  // 3) LITIGIO CONCURSAL
  // ============================================================
  {
    slug: "litigio-concursal",
    label: "Concursal",
    title: "Abogado especialista en Concursos Mercantiles en CDMX",
    servicesH2: "Servicios de abogado en concurso mercantil y reestructura",
    eyebrow: "Procedimientos Concursales",
    tagline: "Operación que continúa, no que se liquida.",
    metaDescription:
      "Despacho especializado en concurso mercantil y reestructura empresarial en México. Convenios concursales, recuperación de créditos.",
    heroBlurb:
      "Reestructura de deuda con acreedores, convenios concursales y recuperación de créditos. Operaciones que siguen en marcha gracias a una estrategia concursal bien diseñada.",
    intro:
      "El concurso mercantil bien manejado conserva la operación de la empresa; un mal manejo, la liquida. Bissu Abogados, S.C., lleva concursos mercantiles en representación del comerciante (deudor) y en algunos casos por parte del acreedor en todo México. Diseñamos planes de reestructura realistas, negociamos quitas y convenios con acreedores reconocidos.",
    image:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Concurso mercantil como deudor",
        description:
          "Demanda de concurso voluntario, plan de conciliación, convenio con acreedores reconocidos. Operación continúa bajo supervisión del conciliador.",
      },
      {
        title: "Concurso mercantil como acreedor",
        description:
          "Reconocimiento de crédito, oposición a la sentencia de reconocimiento, ejecución de garantías reales y exclusión de la masa concursal.",
      },
      {
        title: "Reestructura extra-concursal",
        description:
          "Negociación directa con acreedores antes de entrar a concurso. Standstill agreement, refinanciamiento, dación en pago y capitalización de pasivos.",
      },
      {
        title: "Defensa contra concurso simulado",
        description:
          "Cuando el deudor promueve concurso para escapar de acreedores legítimos. Acción de declaración de mala fe, oposición y vinculación con responsabilidad penal.",
      },
      {
        title: "Quiebra y liquidación",
        description:
          "Cuando la reestructura ya no es viable, dirigimos la liquidación ordenada para maximizar recuperación y proteger al cliente de responsabilidad subsidiaria.",
      },
    ],
    scenarios: [
      {
        headline: "La empresa no puede pagar y los acreedores presionan",
        body: "Vencimientos generalizados, cartera vencida superior al 35% de pasivos, presión bancaria simultánea. Antes de iniciar el concurso, evaluamos si una reestructura extra-judicial puede evitarlo.",
      },
      {
        headline: "Un cliente importante entró a concurso",
        body: "Su contraparte se acogió al concurso y debe presentar el reconocimiento del crédito. Diseñamos la estrategia para maximizar recuperación: garantías, prelación, oposiciones y alianzas con otros acreedores.",
      },
      {
        headline: "Hay un concurso simulado en contra",
        body: "El deudor promovió concurso para escapar de pagos legítimos. Demostramos mala fe, falta de presupuestos objetivos del concurso o uso fraudulento de la figura concursal.",
      },
      {
        headline: "La reestructura voluntaria se trabó",
        body: "Acreedores se niegan a firmar el convenio. Diseñamos la estrategia correcta para consensuar el convenio con la mayoría legal.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Diagnóstico legal preliminar. Identificamos si conviene reestructura extra-judicial, concurso voluntario o defensa como acreedor.",
      },
      {
        step: "02",
        title: "Diagnóstico y estrategia por seguir",
        body: "Dictamen escrito con viabilidad del concurso, plan de reestructura propuesto, cronograma, honorarios y costos del concurso (IFECOM, conciliador, peritos).",
      },
      {
        step: "03",
        title: "Demanda o defensa",
        body: "Solicitud de concurso, contestación, reconocimiento de crédito o impugnaciones.",
      },
      {
        step: "04",
        title: "Convenio o ejecución",
        body: "Aprobación de convenio concursal con quita y espera, o ejecución de garantías y reparto en caso de quiebra.",
      },
    ],
    teamSlugs: ["samuel-bissu", "adolfo-vargas"],
    faqs: [
      {
        question: "¿Qué es un concurso mercantil en México?",
        answer:
          "El concurso mercantil es el procedimiento judicial federal que regula la insolvencia empresarial en México, bajo la Ley de Concursos Mercantiles. Tiene dos etapas: conciliación (donde se busca un convenio entre deudor y acreedores) y quiebra (liquidación ordenada de activos). Su objetivo es mantener la empresa en operación cuando es viable, o liquidarla con orden cuando no lo es.",
      },
      {
        question: "¿Cuándo conviene entrar a concurso mercantil voluntario?",
        answer:
          "Conviene cuando la empresa incumplió obligaciones líquidas y vencidas con dos o más acreedores distintos durante más de 30 días, y representan al menos el 35% del pasivo total. El concurso voluntario protege contra ejecuciones individuales, suspende intereses, y abre una ventana de 185 días naturales (más prórrogas) para negociar un convenio. Si la situación es reversible y los acreedores razonables, suele ser preferible a la liquidación.",
      },
      {
        question: "¿Cuánto dura un concurso mercantil en promedio?",
        answer:
          "La etapa de conciliación dura 185 días naturales prorrogables hasta dos veces (máximo 365 días). Si se aprueba convenio, la fase concursal termina con la sentencia de reconocimiento del convenio. Si no se logra convenio, se declara quiebra y la liquidación puede tomar 2 a 5 años más, según la complejidad de los activos. En la práctica, el proceso completo desde demanda hasta convenio aprobado va de 12 a 30 meses.",
      },
      {
        question: "¿Qué pasa con los empleados durante un concurso mercantil?",
        answer:
          "Los créditos laborales tienen prelación sobre otros acreedores (singularmente privilegiados). Salarios devengados de los últimos dos años, indemnizaciones y prestaciones se pagan antes que créditos comunes y, en muchos casos, antes que garantías reales. La empresa puede seguir operando bajo supervisión, lo que en concursos exitosos preserva la planta laboral.",
      },
      {
        question: "¿Cuál es la diferencia entre concurso y quiebra?",
        answer:
          "El concurso mercantil es el procedimiento completo, que incluye dos etapas: conciliación (intento de convenio) y, si éste fracasa, quiebra (liquidación). La quiebra propiamente dicha es la fase final donde se venden los activos para pagar a acreedores según la prelación legal. Por eso, entrar a concurso no equivale a entrar a quiebra: muchas empresas salen del concurso con convenio aprobado y siguen operando.",
      },
    ],
    relatedSlugs: ["litigio-mercantil", "arbitraje-comercial-internacional", "litigio-civil"],
    keywords: [
      "concurso mercantil México",
      "reestructura empresarial CDMX",
      "abogado concursal",
      "ley de concursos mercantiles",
      "Chapter 11 México",
      "Chapter 15 reconocimiento",
      "convenio concursal",
      "insolvencia empresarial México",
      "quiebra mercantil",
      "Samuel Bissu",
    ],
  },

  // ============================================================
  // 4) LITIGIO FAMILIAR
  // ============================================================
  {
    slug: "litigio-familiar",
    label: "Familiar",
    title: "Abogado Familiar en CDMX",
    servicesH2: "Servicios de abogado familiar en CDMX",
    eyebrow: "Familiar",
    tagline: "Guarda y custodia, divorcio, pensión y sucesiones testamentarias e intestamentaria.",
    metaDescription:
      "Despacho de derecho familiar en CDMX. Divorcio, guarda y custodia, pensión alimenticia, restitución internacional de menores (Convenio de la Haya), sucesiones testamentarias.",
    heroBlurb:
      "Divorcios contenciosos y de mutuo acuerdo, guarda y custodia, pensión alimenticia, restitución internacional de menores y sucesiones. Sensibilidad humana con rigor técnico.",
    intro:
      "El derecho familiar exige rigor jurídico y sensibilidad humana al mismo tiempo. En Bissu Abogados, S.C., atendemos casos de divorcio, guarda y custodia, pensión alimenticia, sucesiones y restitución internacional de menores con un solo objetivo: proteger al cliente y, sobre todo, a los hijos. Damos una primera lectura honesta: a veces el caso conviene resolverlo por convenio antes de litigarlo. Cuando hay que litigar, lo hacemos con la estrategia más rápida y práctica para la familia.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Divorcio incausado",
        description:
          "Divorcio sin causa (incausado) en CDMX, divorcio voluntario administrativo. Convenio de separación y liquidación de sociedad conyugal.",
      },
      {
        title: "Custodia y régimen de visitas",
        description:
          "Custodia compartida, custodia exclusiva, régimen amplio de visitas, autorización para viajar y cambio de domicilio. Interés superior del menor como principio.",
      },
      {
        title: "Pensión alimenticia",
        description:
          "Fijación, aumento y reducción de pensión alimenticia para hijos, ex cónyuge o ex concubina en caso de existir hijos.",
      },
      {
        title: "Restitución internacional de menores",
        description:
          "Convenio de La Haya 1980 sobre Aspectos Civiles de la Sustracción Internacional de Menores. Casos México↔EE.UU., Europa, Latinoamérica.",
      },
      {
        title: "Patria potestad",
        description:
          "Pérdida, suspensión y restitución de patria potestad. Casos de abandono, abuso, ausencia prolongada o conducta que ponga en riesgo al menor.",
      },
      {
        title: "Sucesiones testamentarias e intestadas",
        description:
          "Juicio sucesorio, impugnación de testamento, declaratoria de herederos, partición y adjudicación de bienes hereditarios.",
      },
      {
        title: "Sociedad conyugal y separación de bienes",
        description:
          "Liquidación de sociedad conyugal, capitulaciones matrimoniales, separación de bienes y reclamación por gananciales no liquidados.",
      },
      {
        title: "Reconocimiento de paternidad",
        description:
          "Acciones de reconocimiento, prueba pericial genética (ADN), filiación extra-matrimonial, registro extemporáneo y rectificación de actas.",
      },
    ],
    scenarios: [
      {
        headline: "Está iniciando un divorcio y menores de por medio",
        body: "Quiere proteger la custodia, fijar pensión alimenticia justa y evitar desgaste innecesario. Evaluamos si conviene divorcio incausado rápido o estrategia contenciosa según el caso.",
      },
      {
        headline: "El otro progenitor se llevó al menor al extranjero",
        body: "Sustracción internacional sin autorización. Activamos el Convenio de La Haya 1980 a través de la Autoridad Central (SRE) y coordinamos con el Consulado del país involucrado.",
      },
      {
        headline: "La pensión alimenticia no se está pagando",
        body: "Mora prolongada en pensión judicial fijada por sentencia o convenio. Solicitamos embargo de salario, garantía sobre bienes y, si corresponde, acción penal por incumplimiento.",
      },
      {
        headline: "Hay un testamento que parece inválido",
        body: "Testamento con vicios formales, presunta incapacidad del testador o fraude familiar. Impugnamos el testamento y promovemos el juicio sucesorio intestamentario en paralelo.",
      },
      {
        headline: "Necesita modificar custodia o régimen de visitas",
        body: "Cambio de circunstancias: mudanza, nuevo trabajo, conducta del otro progenitor. Solicitamos modificación del convenio o sentencia de acuerdo a la realidad e intereses del menor.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Reunión inicial con el abogado especialista del área familiar. Lectura honesta: a veces conviene convenio extra-judicial antes que juicio contencioso.",
      },
      {
        step: "02",
        title: "Diagnóstico escrito",
        body: "Análisis con: vía recomendada (incausado, voluntario, administrativo), pensión razonable, esquema de custodia, plazos, costos y honorarios.",
      },
      {
        step: "03",
        title: "Trámite y audiencias",
        body: "Demanda, contestación, representación en audiencias, periciales psicológicas si aplica, pláticas con el menor.",
      },
      {
        step: "04",
        title: "Sentencia y ejecución",
        body: "Sentencia ejecutoriada, divorcio inscrito en Registro Civil, pensión garantizada, custodia formalizada. Acompañamiento posterior para modificaciones o incumplimientos.",
      },
    ],
    teamSlugs: ["adolfo-vargas", "samuel-bissu"],
    faqs: [
      {
        question: "¿Cuánto tarda un divorcio incausado en CDMX?",
        answer:
          "Un divorcio incausado en CDMX, sin oposición ni hijos, puede resolverse en 4 a 8 meses. Cuando hay hijos menores, bienes que liquidar o desacuerdo en el convenio regulador, el plazo se extiende a 8 a 14 meses en primera instancia. La sentencia de divorcio puede dictarse antes de resolver bienes y custodia, lo que permite recuperar el estado civil rápidamente y dejar las demás cuestiones para una segunda etapa.",
      },
      {
        question: "¿Cómo se calcula la pensión alimenticia en México?",
        answer:
          "La pensión alimenticia se calcula proporcionalmente a las necesidades del acreedor (hijos o cónyuge) y a las posibilidades del deudor. No hay porcentaje fijo en ley federal, pero los tribunales suelen fijarla entre el 15% y el 40% del ingreso neto del deudor, dependiendo del número de hijos, edad, gastos especiales (educación privada, salud) y nivel de vida previo. La pensión es modificable cuando cambian las circunstancias.",
      },
      {
        question: "¿Es obligatoria la mediación familiar antes del juicio?",
        answer:
          "En CDMX y en varios estados de la República mexicana, existe mediación familiar pública gratuita ante el Centro de Justicia Alternativa del Tribunal Superior. No es siempre obligatoria, pero algunos asuntos (divorcio voluntario, convenios de custodia) sí pueden tramitarse ahí con efectos vinculantes.",
      },
      {
        question: "¿Se puede modificar la custodia después de la sentencia?",
        answer:
          "Sí. La custodia y el régimen de visitas son modificables cuando cambian las circunstancias que motivaron la sentencia original: mudanza, conducta nociva del progenitor custodio, nuevas necesidades del menor, edad. Se promueve incidente de modificación ante el mismo juzgado familiar que dictó la sentencia. Requiere prueba documental, periciales y, en algunos casos, escucha directa del menor.",
      },
      {
        question: "¿Bissu Abogados, S.C., atiende sucesiones contenciosas y testamentarias?",
        answer:
          "Sí. Llevamos juicios sucesorios testamentarios (con testamento válido), intestamentarios (sin testamento) y contenciosos (cuando hay disputa entre herederos o impugnación de testamento). Incluye declaratoria de herederos, inventario y avalúo, partición y adjudicación. Cuando hay propiedad inmueble involucrada, coordinamos también la escrituración.",
      },
    ],
    relatedSlugs: ["litigio-civil", "litigio-constitucional", "litigio-mercantil"],
    keywords: [
      "abogado familiar CDMX",
      "divorcio CDMX",
      "custodia compartida México",
      "pensión alimenticia CDMX",
      "restitución internacional de menores",
      "Convenio La Haya menores",
      "sucesión testamentaria CDMX",
      "patria potestad",
      "abogado divorcio Lomas de Chapultepec",
      "reconocimiento paternidad",
    ],
  },

  // ============================================================
  // 5) LITIGIO CONSTITUCIONAL
  // ============================================================
  {
    slug: "litigio-constitucional",
    label: "Constitucional",
    title: "Abogado de Amparo en CDMX",
    servicesH2: "Servicios de abogado de amparo en CDMX",
    eyebrow: "Constitucional · Amparo",
    tagline: "Cuando el Estado se equivoca, el amparo es la última herramienta.",
    metaDescription:
      "Despacho de litigio constitucional y amparo en México. Amparo directo, amparo indirecto, suspensión del acto reclamado, controversias constitucionales para empresas y particulares.",
    heroBlurb:
      "Conocimiento técnico para el juicio de amparo directo e indirecto, acciones de inconstitucionalidad, controversias constitucionales, para la defensa de empresas y particulares afectados por actos de autoridad.",
    intro:
      "El juicio de amparo es la última y más poderosa herramienta del individuo frente al Estado. En Bissu Abogados, S.C., promovemos amparos directos e indirectos contra leyes, actos de autoridad y sentencias que vulneran derechos humanos o garantías constitucionales. Adolfo Julián Vargas Alvarado, especialista del área, tiene maestría en Derecho Procesal Constitucional por la Universidad Panamericana. Cada amparo se escribe con la seriedad técnica que exige llegar a la Suprema Corte si fuera necesario.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Amparo directo",
        description:
          "Contra sentencias definitivas, laudos arbitrales y resoluciones que pongan fin a juicio. Tribunal Colegiado de Circuito como instancia.",
      },
      {
        title: "Amparo indirecto",
        description:
          "Contra leyes inconstitucionales, actos administrativos, omisiones de autoridad y violaciones procesales graves. Juez de Distrito.",
      },
      {
        title: "Suspensión del acto reclamado",
        description:
          "Suspensión provisional y definitiva para frenar la ejecución del acto mientras se resuelve el amparo. Crítica en clausuras, embargos fiscales, deportaciones.",
      },
      {
        title: "Amparo contra leyes (heteroaplicativo y autoaplicativo)",
        description:
          "Impugnación directa de leyes federales, locales o reglamentos que afecten al cliente por su sola entrada en vigor (autoaplicativas) o por un primer acto (heteroaplicativas).",
      },
      {
        title: "Controversia constitucional y acción de inconstitucionalidad",
        description:
          "Asesoría a entes públicos legitimados en controversias constitucionales y acciones de inconstitucionalidad ante la Suprema Corte.",
      },
      {
        title: "Recurso de revisión y queja",
        description:
          "Impugnación de sentencias de juzgados de distrito ante tribunales colegiados, y queja contra autos que admitan o desechen demanda de amparo.",
      },
      {
        title: "Cumplimiento de ejecutoria",
        description:
          "Cuando la autoridad no cumple la sentencia de amparo, promovemos incidente de cumplimiento sustituto o inejecución hasta la consignación penal por desacato.",
      },
      {
        title: "Amparo en materia fiscal",
        description:
          "Amparo contra créditos fiscales, multas, congelamiento de cuentas (UIF/SAT), determinaciones presuntivas. Coordinación con litigio fiscal especializado.",
      },
    ],
    scenarios: [
      {
        headline: "Recibió una resolución administrativa adversa",
        body: "Multa fiscal, clausura, cancelación de permiso, congelamiento de cuentas por UIF. Promovemos amparo indirecto con suspensión para frenar la ejecución mientras se resuelve el fondo.",
      },
      {
        headline: "Una sentencia definitiva fue injusta",
        body: "Tribunal de alzada dictó sentencia desfavorable y se agotaron los recursos ordinarios. Promovemos amparo directo ante el Tribunal Colegiado dentro de los 15 días hábiles siguientes.",
      },
      {
        headline: "Una ley nueva afecta su operación",
        body: "Reforma fiscal, regulación sectorial o ley local que afecta directamente al cliente por su sola entrada en vigor. Promovemos amparo autoaplicativo en los 30 días siguientes a la publicación.",
      },
      {
        headline: "La autoridad no cumple una sentencia",
        body: "Sentencia de amparo ejecutoriada que la autoridad ignora o cumple parcialmente. Promovemos cumplimiento sustituto, inejecución y, si corresponde, queja por desacato.",
      },
      {
        headline: "Hay actos de autoridad inminentes",
        body: "Visita domiciliaria irregular, orden de aprehensión que se considera improcedente, embargo fiscal a punto de trabarse. Amparo indirecto con suspensión provisional dentro de 24 a 48 horas.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Identificación del acto reclamado, autoridad responsable y derecho fundamental vulnerado. Plazo de impugnación (15 o 30 días) y vía recomendada.",
      },
      {
        step: "02",
        title: "Dictamen y suspensión",
        body: "Dictamen escrito con: viabilidad, conceptos de violación, suspensión a solicitar, garantía estimada y probabilidad de éxito.",
      },
      {
        step: "03",
        title: "Demanda de amparo",
        body: "Redacción técnica del escrito con conceptos de violación claros, jurisprudencia aplicable y, cuando procede, control de convencionalidad bajo tratados internacionales.",
      },
      {
        step: "04",
        title: "Sentencia y cumplimiento",
        body: "Sentencia de fondo. Si es a favor, supervisamos cumplimiento por la autoridad. Si es desfavorable, evaluamos revisión ante Tribunal Colegiado o Suprema Corte.",
      },
    ],
    teamSlugs: ["adolfo-vargas", "samuel-bissu"],
    faqs: [
      {
        question: "¿Qué es el juicio de amparo y para qué sirve?",
        answer:
          "El juicio de amparo es el medio jurisdiccional federal que protege a las personas contra leyes, actos u omisiones de autoridades que vulneren derechos humanos reconocidos en la Constitución y los tratados internacionales firmados por México. Hay dos modalidades: amparo directo (contra sentencias definitivas, ante Tribunales Colegiados) y amparo indirecto (contra actos administrativos y leyes, ante Juzgados de Distrito). Es la última herramienta del individuo frente al poder del Estado.",
      },
      {
        question: "¿Cuál es el plazo para promover un amparo?",
        answer:
          "El plazo general es de 15 días hábiles a partir de que el acto se notifica o se tiene conocimiento. Contra leyes autoaplicativas el plazo es de 30 días. En materia penal contra orden de aprehensión, auto de vinculación o sentencia, también 15 días. En actos que afecten libertad personal, el plazo es de 6 meses o hasta que cese el acto. Hay excepciones por suspensión y casos urgentes que conviene revisar caso por caso.",
      },
      {
        question: "¿Qué es la suspensión del acto reclamado?",
        answer:
          "La suspensión es la medida cautelar que detiene la ejecución del acto reclamado mientras se resuelve el amparo de fondo. Hay suspensión provisional (decretada al admitirse la demanda) y definitiva (después de audiencia incidental). En muchos casos, la suspensión es más valiosa que la sentencia final: frena clausuras, embargos, deportaciones o ejecuciones que serían irreversibles. Para obtenerla, suele exigirse una garantía económica.",
      },
      {
        question: "¿Cuánto cuesta promover un amparo en México?",
        answer:
          "Los honorarios dependen de la complejidad del acto reclamado y la autoridad responsable. Bissu trabaja bajo iguala fija o cuota litis según el tipo de amparo. La consulta inicial es gratuita y se entrega dictamen escrito con honorarios cerrados antes de firmar convenio. El amparo en sí no causa derechos judiciales (el juicio federal es gratuito), pero la suspensión puede requerir garantía económica según el caso.",
      },
      {
        question: "¿Cuánto tarda un juicio de amparo?",
        answer:
          "Un amparo indirecto en primera instancia (juez de distrito) tarda entre 6 y 14 meses. Si hay recurso de revisión ante Tribunal Colegiado, se agregan 6 a 12 meses más. Un amparo directo (única instancia ordinaria) resuelve en 8 a 18 meses. Si llega a la Suprema Corte por recurso de revisión, la resolución puede tardar 1 a 3 años adicionales, aunque sólo casos de importancia constitucional reciben este escrutinio.",
      },
      {
        question: "¿Bissu lleva amparos contra el SAT y autoridades fiscales?",
        answer:
          "Sí. Promovemos amparo contra actos del SAT, UIF, IMSS, INFONAVIT y autoridades fiscales locales: créditos fiscales, multas, presuntivas, congelamiento de cuentas, visitas domiciliarias irregulares. Coordinamos también con litigio fiscal contencioso administrativo cuando conviene agotar la vía ordinaria antes del amparo. Para casos urgentes con riesgo inminente, atendemos con suspensión en 24 a 48 horas.",
      },
    ],
    relatedSlugs: ["litigio-civil", "litigio-mercantil", "litigio-familiar"],
    keywords: [
      "amparo CDMX",
      "abogado de amparo México",
      "juicio de amparo directo",
      "amparo indirecto",
      "suspensión del acto reclamado",
      "amparo fiscal SAT",
      "amparo contra ley",
      "litigio constitucional México",
      "Adolfo Vargas",
      "abogado constitucional CDMX",
    ],
  },

  // ============================================================
  // 6) ARBITRAJE Y MASC
  // ============================================================
  {
    slug: "arbitraje-comercial-internacional",
    label: "Arbitraje & MASC",
    title: "Abogado especialista en Arbitraje en CDMX",
    servicesH2: "Servicios de abogado de arbitraje en CDMX",
    eyebrow: "Arbitraje · MASC",
    tagline: "CCI, UNCITRAL, mediación y ejecución de laudos internacionales.",
    metaDescription:
      "Despacho de arbitraje comercial internacional en México. CCI, CANACO, UNCITRAL, ejecución de laudos, mediación y conciliación. Samuel Bissu opera arbitraje desde 2014.",
    heroBlurb:
      "Arbitraje comercial internacional bajo Cámara de Comercio Internacional, CANACO y reglas UNCITRAL. Ejecución y nulidad de laudos, mediación y medidas cautelares.",
    intro:
      "El arbitraje comercial internacional es la vía preferida para disputas cuando las partes no quieren depender de tribunales locales de una sola jurisdicción. Bissu Abogados, S.C., representa empresas mexicanas y multinacionales en arbitrajes bajo Cámara de Comercio Internacional (CCI/ICC), CANACO, y reglas UNCITRAL.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=88&auto=format&fit=crop",
    services: [
      {
        title: "Arbitraje CCI (Cámara de Comercio Internacional)",
        description:
          "Representación bajo Reglas de Arbitraje CCI 2021, desde solicitud de arbitraje hasta laudo final.",
      },
      {
        title: "Arbitraje CANACO",
        description:
          "Arbitraje bajo Reglas de la Cámara Nacional de Comercio, para disputas comerciales nacionales e internacionales.",
      },
      {
        title: "Arbitraje UNCITRAL",
        description:
          "Arbitraje sin administración institucional bajo Reglas UNCITRAL. Designación de árbitros, secretaría administrativa, manejo procesal completo.",
      },
      {
        title: "Nulidad y oposición a laudos",
        description:
          "Acción de nulidad de laudo en sede mexicana, oposición a homologación de laudo extranjero, recurso bajo causales del artículo 1457 del Código de Comercio.",
      },
      {
        title: "Mediación comercial",
        description:
          "Mediación bajo Reglas de Mediación CCI o Centro de Justicia Alternativa. Acuerdos vinculantes para evitar arbitraje o litigio costoso.",
      },
      {
        title: "Medidas cautelares en arbitraje",
        description:
          "Solicitud de medidas cautelares ante tribunal arbitral o ante juez de apoyo: embargo, depósito, prohibición de actos y congelamiento de activos.",
      },
      {
        title: "Cláusula compromisoria y redacción",
        description:
          "Diseño de cláusulas arbitrales para contratos internacionales: institución, reglas, sede, idioma, número de árbitros y derecho aplicable.",
      },
    ],
    scenarios: [
      {
        headline: "Su contrato tiene cláusula arbitral activada",
        body: "Cliente o proveedor envió notificación de arbitraje bajo CCI o CANACO. Tiene 30 días para contestar. Diseñamos respuesta, contraclaim si corresponde y selección de árbitro de parte.",
      },
      {
        headline: "Tiene un laudo extranjero a ejecutar en México",
        body: "Laudo dictado en EE.UU., Europa o Asia que necesita reconocerse y ejecutarse en México. Promovemos homologación bajo Convención de Nueva York ante juez de distrito.",
      },
      {
        headline: "Quiere anular un laudo dictado en su contra",
        body: "Laudo desfavorable con causales de nulidad (violación al debido proceso, exceso de jurisdicción del tribunal, contrariedad al orden público). Promovemos acción de nulidad en sede mexicana.",
      },
      {
        headline: "Necesita mediación previa al litigio",
        body: "Cláusula contractual obliga a mediar antes de arbitrar, o conviene una mediación voluntaria para preservar la relación comercial. Conducimos mediación con mediador certificado.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consulta inicial gratuita",
        body: "Análisis de cláusula compromisoria, jurisdicción y derecho aplicable. Identificación de institución arbitral, sede y reglas.",
      },
      {
        step: "02",
        title: "Estrategia y árbitro de parte",
        body: "Selección de árbitro de parte con perfil técnico adecuado, redacción de solicitud o respuesta de arbitraje, identificación de testigos y peritos.",
      },
      {
        step: "03",
        title: "Procedimiento arbitral",
        body: "Fase escrita (memoriales, réplicas), fase oral (audiencias), pruebas periciales, alegatos finales. Coordinación con counsel extranjero si corresponde.",
      },
      {
        step: "04",
        title: "Laudo y ejecución",
        body: "Análisis del laudo, ejecución voluntaria o forzosa, reconocimiento en jurisdicciones donde el deudor tenga activos. Si conviene anular, promovemos acción correspondiente.",
      },
    ],
    teamSlugs: ["samuel-bissu", "adolfo-vargas"],
    faqs: [
      {
        question: "¿Qué es el arbitraje comercial internacional?",
        answer:
          "El arbitraje comercial internacional es un método privado de resolución de disputas en el que las partes acuerdan someter su conflicto a uno o tres árbitros, en lugar de tribunales estatales. Las decisiones (laudos) son vinculantes, ejecutables internacionalmente bajo la Convención de Nueva York 1958, y suelen ser confidenciales. Se utiliza en disputas cross-border, M&A, energía, construcción, inversión extranjera y contratos de gran cuantía donde las partes buscan neutralidad.",
      },
      {
        question: "¿Cuánto cuesta un arbitraje internacional?",
        answer:
          "Los costos del arbitraje internacional incluyen: honorarios de los árbitros (escalados sobre la cuantía), tasas administrativas de la institución (CCI, CANACO), peritos, traducciones, audiencias y honorarios de abogados. Para una disputa mediana (USD 5 a 20 millones), los costos totales pueden ir de USD 300,000 a USD 1.5 millones, principalmente honorarios de abogados. La parte vencida suele asumir costas, pero no siempre. Bissu cotiza por etapas con presupuesto cerrado.",
      },
      {
        question: "¿Cuánto tarda un arbitraje comercial?",
        answer:
          "Un arbitraje CCI internacional típicamente tarda 18 a 30 meses desde la solicitud hasta el laudo final. Arbitrajes nacionales bajo CANACO van de 12 a 24 meses. Hay procedimientos abreviados (fast-track) para disputas menores que resuelven en 6 a 12 meses. El plazo se extiende si hay anti-suit injunctions, recusación de árbitros o impugnación procedimental. La ejecución del laudo añade 6 a 18 meses adicionales según jurisdicción.",
      },
      {
        question: "¿Se puede ejecutar un laudo extranjero en México?",
        answer:
          "Sí. México es parte de la Convención de Nueva York de 1958 sobre reconocimiento y ejecución de laudos arbitrales extranjeros. El procedimiento de homologación se promueve ante juez de distrito en materia civil federal, dura de 4 a 9 meses, y solo se puede negar por causales muy limitadas (incapacidad de las partes, violación al orden público, falta de notificación). Una vez homologado, el laudo se ejecuta como sentencia mexicana.",
      },
      {
        question: "¿Cuándo conviene mediación antes que arbitraje?",
        answer:
          "La mediación conviene cuando: las partes quieren preservar la relación comercial, el conflicto tiene componente reputacional sensible, hay incertidumbre sobre quién tiene mejor caso, o el costo y tiempo del arbitraje superarían el valor en disputa. La mediación CCI o ante el Centro de Justicia Alternativa de CDMX tiene tasa de éxito superior al 60% y resuelve en 1 a 3 meses. Si fracasa, el arbitraje sigue disponible.",
      },
    ],
    relatedSlugs: ["litigio-mercantil", "litigio-concursal", "litigio-civil"],
    keywords: [
      "arbitraje comercial internacional México",
      "arbitraje CCI México",
      "arbitraje CANACO",
      "ejecución laudo arbitral",
      "Convención de Nueva York México",
      "mediación comercial CDMX",
      "abogado arbitraje México",
      "nulidad laudo arbitral",
      "Samuel Bissu arbitraje",
      "UNCITRAL México",
    ],
  },
];

export function getAreaBySlug(slug: string) {
  return v4Areas.find((a) => a.slug === slug);
}

export function getOtherAreas(slug: string) {
  return v4Areas.filter((a) => a.slug !== slug);
}

export function getRelatedAreas(slug: string) {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.relatedSlugs
    .map((s) => getAreaBySlug(s))
    .filter((a): a is V4Area => Boolean(a));
}
