import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BmIZr5HX.css";
const WHATSAPP = "https://wa.me/5588994454680";
const SITE_URL = (typeof window !== "undefined" ? window.location.origin : null) || void 0 || "https://oliveiraesiqueira-adv.vercel.app";
const wa = (msg) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const OFFICE_COORDS = [-3.8536, -40.9211];
const OFFICE_ADDRESS = "Rua Cel. Vicente, 312, Centro, Ubajara, CE";
const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  OFFICE_ADDRESS
)}`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você está procurando não existe ou foi movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Voltar ao início"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Esta página não carregou" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo deu errado do nosso lado. Você pode tentar atualizar a página ou voltar para o início." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tentar novamente"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Voltar ao início"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oliveira & Siqueira Advocacia — Ubajara/CE" },
      {
        name: "description",
        content: "Escritório de advocacia em Ubajara/CE. Atuação técnica em Civil, Criminal, Família, Trabalhista, Previdenciário e Consumidor. Consulta direta pelo WhatsApp."
      },
      { name: "author", content: "Oliveira & Siqueira Advocacia" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Oliveira & Siqueira Advocacia — Ubajara/CE" },
      {
        property: "og:description",
        content: "Escritório de advocacia em Ubajara/CE. Atuação técnica em Civil, Criminal, Família, Trabalhista, Previdenciário e Consumidor. Consulta direta pelo WhatsApp."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/assets/logo-fundo.jpg` },
      { property: "og:image:secure_url", content: `${SITE_URL}/assets/logo-fundo.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@oliveirasiqueira" },
      { name: "twitter:title", content: "Oliveira & Siqueira Advocacia — Ubajara/CE" },
      {
        name: "twitter:description",
        content: "Escritório de advocacia em Ubajara/CE. Atuação técnica em Civil, Criminal, Família, Trabalhista, Previdenciário e Consumidor. Consulta direta pelo WhatsApp."
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/logo-fundo.jpg` }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Serif+Display&family=Fira+Sans:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter = () => import("./index-fxt0sZUK.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Oliveira & Siqueira Advocacia — Ubajara/CE"
    }, {
      name: "description",
      content: "Escritório de advocacia em Ubajara/CE. Atuação técnica em Civil, Criminal, Família, Trabalhista, Previdenciário e Consumidor. Consulta direta pelo WhatsApp."
    }, {
      name: "theme-color",
      content: "#1e2a44"
    }, {
      property: "og:title",
      content: "Oliveira & Siqueira Advocacia"
    }, {
      property: "og:description",
      content: "Defesa jurídica com rigor e dignidade — Ubajara/CE."
    }, {
      property: "og:image",
      content: `${SITE_URL}/assets/logo-fundo.jpg`
    }, {
      property: "og:image:secure_url",
      content: `${SITE_URL}/assets/logo-fundo.jpg`
    }, {
      property: "og:image:type",
      content: "image/jpeg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: SITE_URL
    }],
    links: [{
      rel: "canonical",
      href: SITE_URL
    }]
  })
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  GMAPS_URL as G,
  OFFICE_COORDS as O,
  WHATSAPP as W,
  OFFICE_ADDRESS as a,
  router as r,
  wa as w
};
