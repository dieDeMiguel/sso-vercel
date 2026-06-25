export type Lang = 'es' | 'en';

export type PriceTone = 'accent' | 'neutral' | 'muted';

export type Option = {
  n: string;
  slug: string;
  title: string;
  price: string;
  priceTone: PriceTone;
  pitch: string;
  coverage: string[];
  notCovered: string[];
  notes: string;
  requires: string;
  docs: string;
};

export type TableRow = {
  label: string;
  cost: string;
  accounts: string;
  sso: string;
  prod: string;
  passthrough: string;
  level: 'Edge' | 'App' | 'Bypass';
};

export type RecoStep = { n: string; label: string; body: string };

export type Content = {
  meta: { title: string; description: string };
  header: {
    brand: string;
    nav: { options: string; comparison: string; reco: string };
    cta: string;
    langOther: { label: string; href: string; aria: string };
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    summary: { label: string; items: { dt: string; dd: string }[] };
  };
  toc: { kicker: string };
  optionBlock: {
    optionLabel: (n: string) => string;
    coverageLabel: string;
    notCoveredLabel: string;
    noteLabel: string;
    docsLabel: string;
  };
  options: Option[];
  comparison: {
    kicker: string;
    headline: string;
    sub: string;
    columns: {
      label: string;
      cost: string;
      accounts: string;
      sso: string;
      prod: string;
      passthrough: string;
      level: string;
    };
    rows: TableRow[];
    highlightNote: string;
  };
  reco: {
    kicker: string;
    headline: string;
    sub: string;
    stepLabel: (n: string) => string;
    steps: RecoStep[];
  };
  footer: { note: string; docLabel: string };
};

const dash = '—';

const ES: Content = {
  meta: {
    title: 'Protección de deployments en Vercel · Plan Pro',
    description:
      'Las seis alternativas para restringir el acceso a deployments de Vercel en plan Pro, comparadas con precios reales y trade-offs.',
  },
  header: {
    brand: 'Deployment Protection',
    nav: {
      options: 'Opciones',
      comparison: 'Comparativa',
      reco: 'Recomendación',
    },
    cta: 'Ir a la recomendación',
    langOther: { label: 'EN', href: '/en', aria: 'Read in English' },
  },
  hero: {
    eyebrow: 'Vercel · Plan Pro',
    headline: 'Cómo proteger los deployments de Vercel.',
    sub: 'Seis alternativas para restringir el acceso a previews y producción. Comparadas con precios reales y los trade-offs que importan al momento de elegir.',
    summary: {
      label: 'Resumen',
      items: [
        { dt: 'Tier confirmado', dd: 'Pro (plus)' },
        { dt: 'Opciones evaluadas', dd: '6' },
        { dt: 'Ruta más directa', dd: 'Advanced · USD 150/mes' },
        { dt: 'SSO corporativo', dd: 'Passport o middleware' },
      ],
    },
  },
  toc: { kicker: 'Las seis alternativas' },
  optionBlock: {
    optionLabel: (n) => `Opción ${n}`,
    coverageLabel: 'Qué cubre',
    notCoveredLabel: 'Qué no cubre',
    noteLabel: 'Nota.',
    docsLabel: 'Documentación',
  },
  options: [
    {
      n: '01',
      slug: 'standard',
      title: 'Standard Deployment Protection',
      price: 'Incluido en Pro',
      priceTone: 'neutral',
      pitch:
        'Protege previews y URLs no productivas mediante Vercel Authentication. No requiere cargo adicional, pero no alcanza al dominio de producción.',
      coverage: [
        'Deployments de preview (feature branches, pull requests)',
        'URLs generadas no productivas',
      ],
      notCovered: ['Custom domains en producción'],
      notes:
        'La protección de previews no se habilita por defecto en todos los proyectos. Conviene verificarla en Settings → Deployment Protection de cada proyecto.',
      requires: 'Cuenta de Vercel y membresía del equipo',
      docs: 'https://vercel.com/docs/deployment-protection',
    },
    {
      n: '02',
      slug: 'advanced',
      title: 'Advanced Deployment Protection',
      price: 'USD 150 / mes',
      priceTone: 'accent',
      pitch:
        'La ruta más directa para cubrir producción manteniendo el plan Pro. Es un cargo fijo a nivel de cuenta, no por usuario ni por proyecto.',
      coverage: [
        'Todos los deployments del equipo, incluida la producción',
        'Custom domains protegidos',
        'Password Protection para usuarios externos sin cuenta de Vercel',
        'Vercel Authentication extendida a producción',
      ],
      notCovered: ['Identity passthrough hacia la aplicación'],
      notes:
        'Cubre la totalidad de los proyectos del equipo como un único add-on. No requiere migrar a plan Enterprise.',
      requires: 'Add-on activado a nivel de cuenta',
      docs: 'https://vercel.com/docs/deployment-protection',
    },
    {
      n: '03',
      slug: 'passport',
      title: 'Vercel Passport',
      price: 'Confirmar con cuenta',
      priceTone: 'muted',
      pitch:
        'Permite proteger deployments utilizando el Identity Provider propio (Okta, Entra, Auth0) mediante OAuth 2.0 / OpenID Connect. Reenvía la identidad del usuario a la aplicación.',
      coverage: [
        'SSO corporativo aplicado a nivel edge',
        'Identity passthrough vía JWT (claim external_sub como identificador principal)',
        'Producción y previews bajo una misma política',
      ],
      notCovered: [
        'SAML (solo OIDC)',
        'Disponibilidad y pricing públicos en plan Pro',
      ],
      notes:
        'La documentación lo lista como feature de Enterprise. Para evaluarlo en Pro, corresponde confirmar disponibilidad y pricing con el equipo de cuenta de Vercel.',
      requires: 'Identity Provider propio y acuerdo comercial con Vercel',
      docs: 'https://vercel.com/docs/passport',
    },
    {
      n: '04',
      slug: 'middleware',
      title: 'Middleware personalizado',
      price: 'Sin costo · DIY',
      priceTone: 'neutral',
      pitch:
        'Una capa propia construida sobre Next.js Middleware: valida una cookie de sesión SSO emitida por el IdP corporativo y redirige a los usuarios no autenticados. Control total a cambio de mantenimiento continuo.',
      coverage: [
        'Integración con cualquier Identity Provider',
        'Lógica de autorización custom (vistas por rol o departamento)',
        'Producción y previews',
      ],
      notCovered: ['Protección a nivel de plataforma o edge gestionada por Vercel'],
      notes:
        'Opera a nivel de aplicación: la protección depende de la implementación del middleware, no de una política nativa de Vercel. Las alternativas nativas resultan más seguras como capa base.',
      requires: 'Desarrollo y mantenimiento continuo del equipo',
      docs: 'https://nextjs.org/docs/app/building-your-application/routing/middleware',
    },
    {
      n: '05',
      slug: 'bypass',
      title: 'Mecanismos complementarios de bypass',
      price: 'Disponible · según configuración',
      priceTone: 'neutral',
      pitch:
        'No protegen por sí mismos: permiten eludir la protección en casos puntuales. Se combinan con Standard o Advanced para habilitar acceso programático o controlado.',
      coverage: [
        'Shareable Links — acceso controlado a deployments específicos sin autenticación',
        'Bypass Header (x-vercel-protection-bypass) — acceso programático mediante token secreto',
      ],
      notCovered: ['Protección general — son ventanas, no muros'],
      notes:
        'Apropiados para CI/CD, webhooks y testing automatizado con Playwright o Cypress.',
      requires: 'Configuración por proyecto',
      docs: 'https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/sharable-links',
    },
    {
      n: '06',
      slug: 'enterprise',
      title: 'Opciones exclusivas de Enterprise',
      price: 'Acuerdo comercial',
      priceTone: 'muted',
      pitch:
        'Lo que aparece únicamente al subir de plan: allowlist por IP, Passport como ciudadano de primera clase, y el paquete completo de Advanced sin add-on separado.',
      coverage: [
        'Trusted IPs — allowlist por IP o CIDR; el tráfico fuera del rango responde 404',
        'Vercel Passport — disponible en Enterprise; pricing y paquetización a confirmar con el equipo de cuenta',
        'Advanced Deployment Protection disponible en Enterprise',
      ],
      notCovered: ['Disponible únicamente en plan Enterprise'],
      notes:
        'Trusted IPs se puede combinar con Vercel Authentication para componer defensa en profundidad.',
      requires: 'Plan Enterprise',
      docs: 'https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/trusted-ips',
    },
  ],
  comparison: {
    kicker: 'Comparativa',
    headline: 'Lado a lado para un equipo en plan Pro.',
    sub: 'Costo, requisitos y nivel en el que actúa la protección. En vistas reducidas, la tabla permite desplazamiento horizontal.',
    columns: {
      label: 'Alternativa',
      cost: 'Costo',
      accounts: 'Cuentas Vercel',
      sso: 'IdP / SSO',
      prod: 'Protege producción',
      passthrough: 'Identity passthrough',
      level: 'Nivel',
    },
    rows: [
      {
        label: 'Standard Protection',
        cost: 'Sin costo',
        accounts: 'Sí',
        sso: dash,
        prod: dash,
        passthrough: dash,
        level: 'Edge',
      },
      {
        label: 'Advanced Protection',
        cost: 'USD 150/mes',
        accounts: 'Vercel Auth · sí · Password · no',
        sso: dash,
        prod: 'Sí',
        passthrough: dash,
        level: 'Edge',
      },
      {
        label: 'Vercel Passport',
        cost: 'Confirmar',
        accounts: dash,
        sso: 'Sí (OIDC)',
        prod: 'Sí',
        passthrough: 'Sí (header x-vercel-oidc-passport-token)',
        level: 'Edge',
      },
      {
        label: 'Middleware personalizado',
        cost: 'Sin costo',
        accounts: dash,
        sso: 'Custom',
        prod: 'Sí',
        passthrough: 'Custom',
        level: 'App',
      },
      {
        label: 'Shareable Links',
        cost: 'Sin costo',
        accounts: dash,
        sso: dash,
        prod: 'Sí',
        passthrough: dash,
        level: 'Bypass',
      },
      {
        label: 'Bypass Header',
        cost: 'Sin costo',
        accounts: dash,
        sso: dash,
        prod: 'Sí',
        passthrough: dash,
        level: 'Bypass',
      },
    ],
    highlightNote:
      'Fila destacada · Advanced Deployment Protection — la cobertura más amplia sin salir del plan Pro.',
  },
  reco: {
    kicker: 'Recomendación',
    headline: 'Elegir por restricción real, no por checklist de features.',
    sub: 'Tres rutas según la prioridad operativa del equipo en este momento.',
    stepLabel: (n) => `Paso ${n}`,
    steps: [
      {
        n: '01',
        label: 'Cobertura completa de la forma más directa',
        body: 'Activar el add-on de Advanced Deployment Protection. Cargo fijo de USD 150/mes a nivel de cuenta que extiende la protección a producción y cubre todos los proyectos del equipo. Es el menor camino hacia bloqueo total sin migrar de plan.',
      },
      {
        n: '02',
        label: 'Integración con IdP corporativo',
        body: 'Consultar con el equipo de cuenta de Vercel la disponibilidad de Passport en Pro. Si no resulta aplicable, evaluar middleware personalizado como puente o migración a Enterprise, donde Advanced Deployment Protection y Trusted IPs están disponibles, y Passport está disponible como feature Enterprise con pricing y paquetización a confirmar.',
      },
      {
        n: '03',
        label: 'Presupuesto cero',
        body: 'Habilitar Standard Protection y complementar con middleware personalizado. Tener presente que la protección custom vive a nivel de aplicación, no de plataforma: el edge no la garantiza.',
      },
    ],
  },
  footer: {
    note: 'Documento de referencia para equipos en plan Pro. Pricing y disponibilidad pueden variar según condiciones comerciales vigentes.',
    docLabel: 'vercel.com/docs/deployment-protection',
  },
};

const EN: Content = {
  meta: {
    title: 'Vercel deployment protection · Pro plan',
    description:
      'Six alternatives to lock down Vercel deployments on the Pro plan, compared with real prices and trade-offs.',
  },
  header: {
    brand: 'Deployment Protection',
    nav: {
      options: 'Options',
      comparison: 'Comparison',
      reco: 'Recommendation',
    },
    cta: 'Jump to recommendation',
    langOther: { label: 'ES', href: '/', aria: 'Leer en español' },
  },
  hero: {
    eyebrow: 'Vercel · Pro plan',
    headline: 'How to protect your Vercel deployments.',
    sub: 'Six paths to restrict access to previews and production — compared in depth, with real prices and the trade-offs that matter when you pick one.',
    summary: {
      label: 'At a glance',
      items: [
        { dt: 'Confirmed tier', dd: 'Pro (plus)' },
        { dt: 'Options evaluated', dd: '6' },
        { dt: 'Most direct route', dd: 'Advanced · $150/mo' },
        { dt: 'Corporate SSO', dd: 'Passport or middleware' },
      ],
    },
  },
  toc: { kicker: 'The six alternatives' },
  optionBlock: {
    optionLabel: (n) => `Option ${n}`,
    coverageLabel: 'What it covers',
    notCoveredLabel: 'What it does not',
    noteLabel: 'Note.',
    docsLabel: 'Documentation',
  },
  options: [
    {
      n: '01',
      slug: 'standard',
      title: 'Standard Deployment Protection',
      price: 'Included in Pro',
      priceTone: 'neutral',
      pitch:
        'Protects preview and non-production URLs with Vercel Authentication. No extra charge, but it does not reach your production domain.',
      coverage: [
        'Preview deployments (feature branches, pull requests)',
        'Generated non-production URLs',
      ],
      notCovered: ['Custom production domains'],
      notes:
        'Preview protection is not always enabled by default. Verify it under Settings → Deployment Protection on each project.',
      requires: 'Vercel account + team membership',
      docs: 'https://vercel.com/docs/deployment-protection',
    },
    {
      n: '02',
      slug: 'advanced',
      title: 'Advanced Deployment Protection',
      price: '$150 / month',
      priceTone: 'accent',
      pitch:
        'The most direct way to cover production while staying on Pro. Flat charge at the account level — not per user, not per project.',
      coverage: [
        'Every deployment in the team, including production',
        'Custom production domains',
        'Password Protection for external users without a Vercel account',
        'Vercel Authentication extended to production',
      ],
      notCovered: ['Identity passthrough into the application'],
      notes:
        'Covers all projects in the team as a single add-on. No need to move to Enterprise.',
      requires: 'Add-on enabled at the account level',
      docs: 'https://vercel.com/docs/deployment-protection',
    },
    {
      n: '03',
      slug: 'passport',
      title: 'Vercel Passport',
      price: 'Talk to your account team',
      priceTone: 'muted',
      pitch:
        'Protects deployments through your own Identity Provider (Okta, Entra, Auth0) via OAuth 2.0 / OpenID Connect. Forwards the user identity to the application.',
      coverage: [
        'Corporate SSO enforced at the edge',
        'Identity passthrough via JWT (the external_sub claim is the most reliable identifier)',
        'Production and previews under a single policy',
      ],
      notCovered: [
        'SAML (OIDC only)',
        'Public availability and pricing on the Pro plan',
      ],
      notes:
        'Documented as an Enterprise feature. For Pro, confirm availability and pricing with the Vercel account team.',
      requires: 'Your own IdP + commercial agreement with Vercel',
      docs: 'https://vercel.com/docs/passport',
    },
    {
      n: '04',
      slug: 'middleware',
      title: 'Custom middleware',
      price: 'Free · DIY',
      priceTone: 'neutral',
      pitch:
        'Roll your own with Next.js Middleware: validate an SSO session cookie from the corporate IdP and redirect unauthenticated users. Full control, ongoing maintenance.',
      coverage: [
        'Integration with any Identity Provider',
        'Custom authorization logic (per role, per department)',
        'Production and previews',
      ],
      notCovered: ['Platform / edge-level protection managed by Vercel'],
      notes:
        'Runs at the application layer — protection depends on the middleware implementation, not on a native Vercel policy. Native options are recommended as the safer base layer.',
      requires: 'Ongoing engineering investment',
      docs: 'https://nextjs.org/docs/app/building-your-application/routing/middleware',
    },
    {
      n: '05',
      slug: 'bypass',
      title: 'Complementary bypass mechanisms',
      price: 'Available · per configuration',
      priceTone: 'neutral',
      pitch:
        'They do not protect on their own — they let you bypass the protection in specific cases. Pair with Standard or Advanced to enable programmatic or controlled access.',
      coverage: [
        'Shareable Links — controlled access to specific deployments without authentication',
        'Bypass Header (x-vercel-protection-bypass) — programmatic access via secret token',
      ],
      notCovered: ['General protection — they are windows, not walls'],
      notes:
        'Useful for CI/CD, webhooks, and automated testing with Playwright or Cypress.',
      requires: 'Per-project configuration',
      docs: 'https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/sharable-links',
    },
    {
      n: '06',
      slug: 'enterprise',
      title: 'Enterprise-only options',
      price: 'Commercial agreement',
      priceTone: 'muted',
      pitch:
        'What only shows up when you move up plans: IP allowlists, Passport as a first-class citizen, and the full Advanced package without a separate add-on.',
      coverage: [
        'Trusted IPs — IP / CIDR allowlist; traffic outside the range responds with 404',
        'Vercel Passport — available on Enterprise; pricing and packaging to confirm with the account team',
        'Advanced Deployment Protection available on Enterprise',
      ],
      notCovered: ['Available on the Enterprise plan only'],
      notes:
        'Trusted IPs can be combined with Vercel Authentication for defense in depth.',
      requires: 'Enterprise plan',
      docs: 'https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/trusted-ips',
    },
  ],
  comparison: {
    kicker: 'Comparison',
    headline: 'Side by side for a Pro-plan team.',
    sub: 'Cost, requirements, and the layer where each option enforces protection. On narrow viewports the table scrolls horizontally.',
    columns: {
      label: 'Alternative',
      cost: 'Cost',
      accounts: 'Vercel accounts',
      sso: 'IdP / SSO',
      prod: 'Protects production',
      passthrough: 'Identity passthrough',
      level: 'Layer',
    },
    rows: [
      {
        label: 'Standard Protection',
        cost: 'Free',
        accounts: 'Yes',
        sso: dash,
        prod: dash,
        passthrough: dash,
        level: 'Edge',
      },
      {
        label: 'Advanced Protection',
        cost: '$150/mo',
        accounts: 'Vercel Auth · yes · Password · no',
        sso: dash,
        prod: 'Yes',
        passthrough: dash,
        level: 'Edge',
      },
      {
        label: 'Vercel Passport',
        cost: 'Confirm',
        accounts: dash,
        sso: 'Yes (OIDC)',
        prod: 'Yes',
        passthrough: 'Yes (header x-vercel-oidc-passport-token)',
        level: 'Edge',
      },
      {
        label: 'Custom middleware',
        cost: 'Free',
        accounts: dash,
        sso: 'Custom',
        prod: 'Yes',
        passthrough: 'Custom',
        level: 'App',
      },
      {
        label: 'Shareable Links',
        cost: 'Free',
        accounts: dash,
        sso: dash,
        prod: 'Yes',
        passthrough: dash,
        level: 'Bypass',
      },
      {
        label: 'Bypass Header',
        cost: 'Free',
        accounts: dash,
        sso: dash,
        prod: 'Yes',
        passthrough: dash,
        level: 'Bypass',
      },
    ],
    highlightNote:
      'Highlighted row · Advanced Deployment Protection — the widest coverage without leaving the Pro plan.',
  },
  reco: {
    kicker: 'Recommendation',
    headline: 'Pick by real restriction, not by feature checklist.',
    sub: 'Three routes mapped to the operational priority the team faces today.',
    stepLabel: (n) => `Step ${n}`,
    steps: [
      {
        n: '01',
        label: 'Full coverage, the fastest way',
        body: 'Enable the Advanced Deployment Protection add-on. A flat $150/mo at the account level extends protection to production and covers every project in the team. Shortest path to a hard lock without changing plans.',
      },
      {
        n: '02',
        label: 'Integration with a corporate IdP',
        body: 'Check Passport availability on Pro with your Vercel account team. If it does not apply, evaluate custom middleware as a bridge — or migration to Enterprise, where Advanced Deployment Protection and Trusted IPs are available, and Passport is available as an Enterprise feature with pricing and packaging to confirm.',
      },
      {
        n: '03',
        label: 'Zero budget',
        body: 'Enable Standard Protection and complement it with custom middleware. Remember that custom protection lives at the application layer, not the platform — the edge does not guarantee it.',
      },
    ],
  },
  footer: {
    note: 'Reference document for teams on the Pro plan. Pricing and availability are subject to current commercial terms.',
    docLabel: 'vercel.com/docs/deployment-protection',
  },
};

export const CONTENT: Record<Lang, Content> = { es: ES, en: EN };
