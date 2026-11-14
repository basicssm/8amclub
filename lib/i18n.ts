export type Lang = "en" | "es";
export const LANGS: Lang[] = ["en", "es"];

const en = {
  nav: { manifesto: "Manifesto", values: "Values", shop: "Shop", bag: "Bag", lang: "Language" },
  hero: { until: "until the next 8 AM", sub: "Est. at sunrise · Crossfit · Family", down: "↓ Show up" },
  manifesto: {
    label: "( 01 ) Manifesto",
    // *text* is highlighted
    text: "Always showing up at *8 AM*, we built a tight-knit crew that feels like *family*. We love training hard, pushing each other, and enjoying the party and good times just as much as the discipline. We don’t need to be elite or the best — all we need is the *love we share.*",
  },
  values: {
    label: "( 02 ) What we are about",
    items: [
      ["Effort", "Every rep counts, even the ugly ones."],
      ["Discipline", "The alarm rings. We go."],
      ["Friendship", "You show up for them. They show up for you."],
      ["Family", "Not the ones we were born with. The ones we chose."],
      ["Brotherhood", "Shared sweat, shared laughs, shared tables."],
      ["Growth", "Better than yesterday. Not better than anyone."],
    ] as [string, string][],
  },
  statement: ["NOT ELITE.", "NOT THE BEST.", "JUST HERE."],
  shop: {
    label: "( 03 ) The Shop",
    title: ["WEAR THE", "CREW."],
    add: "Add to bag",
    back: "back",
    oneSize: "One size",
    note: "Small batches. Made for the 8 AM crew and anyone who wants to join.",
  },
  tags: { Core: "Core", New: "New" } as Record<string, string>,
  filters: { all: "All", tee: "Tees", hoodie: "Hoodie", jogger: "Jogger", cap: "Cap", patch: "Patch" } as Record<string, string>,
  cart: {
    title: "BAG",
    aria: "Shopping bag",
    close: "Close",
    empty: ["Your bag is empty.", "Go get something."],
    size: "Size",
    remove: "Remove",
    total: "Total",
    checkout: "Checkout",
    checkoutSoon: "Checkout coming soon — drop 01 is cooking",
    emptyToast: "Your bag is empty",
    freeShip: "Free shipping over €80",
  },
  toast: { added: "Added to bag", joined: "You’re in. See you at 8." },
  join: {
    label: "( 04 ) Join us",
    title: ["SEE YOU", "AT "],
    sub: "Every day. Come as you are. Leave a bit stronger.",
    placeholder: "your@email.com",
    emailAria: "Email",
    button: "Get the drops",
  },
  footer: { tag: "Train · Eat · Party · Repeat", top: "↑ Top" },
};

const es: typeof en = {
  nav: { manifesto: "Manifiesto", values: "Valores", shop: "Tienda", bag: "Cesta", lang: "Idioma" },
  hero: { until: "para las próximas 8 AM", sub: "Desde el amanecer · Crossfit · Familia", down: "↓ Aparece" },
  manifesto: {
    label: "( 01 ) Manifiesto",
    text: "Apareciendo siempre a las *8 AM*, hemos creado un grupo unido que se siente como *familia*. Nos encanta entrenar duro, apoyarnos entre nosotros y disfrutar de la fiesta y los buenos momentos tanto como de la disciplina. No necesitamos ser élite ni los mejores: solo necesitamos *el cariño que nos tenemos.*",
  },
  values: {
    label: "( 02 ) Lo que somos",
    items: [
      ["Esfuerzo", "Cada rep cuenta, incluso las feas."],
      ["Disciplina", "Suena la alarma. Vamos."],
      ["Amistad", "Tú apareces por ellos. Ellos aparecen por ti."],
      ["Familia", "No la que nos tocó. La que elegimos."],
      ["Hermandad", "Sudor compartido, risas compartidas, mesas compartidas."],
      ["Crecimiento", "Mejor que ayer. No mejor que nadie."],
    ],
  },
  statement: ["NI ÉLITE.", "NI LOS MEJORES.", "SOLO ESTAMOS."],
  shop: {
    label: "( 03 ) La Tienda",
    title: ["VISTE A", "LA CREW."],
    add: "Añadir a la cesta",
    back: "espalda",
    oneSize: "Talla única",
    note: "Tiradas pequeñas. Hechas para la crew de las 8 AM y para quien quiera unirse.",
  },
  tags: { Core: "Básico", New: "Nuevo" },
  filters: { all: "Todo", tee: "Camisetas", hoodie: "Sudadera", jogger: "Pantalón", cap: "Gorra", patch: "Parche" },
  cart: {
    title: "CESTA",
    aria: "Cesta de la compra",
    close: "Cerrar",
    empty: ["Tu cesta está vacía.", "Ve a por algo."],
    size: "Talla",
    remove: "Quitar",
    total: "Total",
    checkout: "Pagar",
    checkoutSoon: "El pago llegará pronto — el drop 01 se está cocinando",
    emptyToast: "Tu cesta está vacía",
    freeShip: "Envío gratis a partir de 80 €",
  },
  toast: { added: "Añadido a la cesta", joined: "Estás dentro. Nos vemos a las 8." },
  join: {
    label: "( 04 ) Únete",
    title: ["NOS VEMOS", "A LAS "],
    sub: "Todos los días. Ven como eres. Vete un poco más fuerte.",
    placeholder: "tu@email.com",
    emailAria: "Correo electrónico",
    button: "Quiero los drops",
  },
  footer: { tag: "Entrena · Come · Fiesta · Repite", top: "↑ Arriba" },
};

export const DICT: Record<Lang, typeof en> = { en, es };
