import { jsx, jsxs } from "react/jsx-runtime";
import { createRouter, createRootRouteWithContext, createFileRoute, lazyRouteComponent, HeadContent, Outlet, Scripts, Link } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { forwardRef, createElement, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$8 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$8);
const __iconNode$7 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function getContext() {
  const queryClient = new QueryClient();
  return {
    queryClient
  };
}
function Provider({
  children,
  queryClient
}) {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children });
}
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: twMerge(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-panel py-3" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl font-serif font-bold text-chocolate", children: "Happy Dips" }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
            navLinks.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-chocolate hover:text-strawberry transition-colors font-medium",
                children: link.name
              },
              link.name
            )),
            /* @__PURE__ */ jsxs("button", { className: "bg-strawberry text-white px-6 py-2 rounded-full hover:bg-strawberry-light transition-colors flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ShoppingBag, { size: 18 }),
              "Order Now"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-chocolate",
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden bg-cream/95 backdrop-blur-md overflow-hidden",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center py-8 space-y-6", children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "text-chocolate text-lg font-medium hover:text-strawberry",
                  children: link.name
                },
                link.name
              )),
              /* @__PURE__ */ jsxs("button", { className: "bg-strawberry text-white px-8 py-3 rounded-full hover:bg-strawberry-light transition-colors flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ShoppingBag, { size: 20 }),
                "Order Now"
              ] })
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-chocolate text-cream py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-serif font-bold text-strawberry", children: "Happy Dips" }),
        /* @__PURE__ */ jsx("p", { className: "text-cream/80 max-w-xs", children: "Crafting premium strawberry chocolates and desserts that bring joy to every bite." }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-strawberry transition-colors", children: /* @__PURE__ */ jsx(Instagram, {}) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-strawberry transition-colors", children: /* @__PURE__ */ jsx(Facebook, {}) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-strawberry transition-colors", children: /* @__PURE__ */ jsx(Twitter, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-serif font-bold", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-cream/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-strawberry transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#menu", className: "hover:text-strawberry transition-colors", children: "Our Menu" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-strawberry transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-strawberry transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-serif font-bold", children: "Visit Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-cream/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "text-strawberry shrink-0" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "123 Dessert Avenue, Anna Nagar,",
              /* @__PURE__ */ jsx("br", {}),
              "Chennai, Tamil Nadu 600040"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "text-strawberry shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "text-strawberry shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "hello@happydips.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-cream/10 text-center text-cream/60 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Happy Dips. All rights reserved."
    ] })
  ] });
}
const appCss = "/assets/styles-BOYwNUR5.css";
const indexCss = "/assets/index-DzIbKZoU.css";
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Happy Dips | Premium Strawberry Chocolates & Desserts"
      },
      {
        name: "description",
        content: "Experience the finest strawberry chocolates and desserts in Chennai at Happy Dips. Crafted with passion and premium ingredients."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "stylesheet",
        href: indexCss
      }
    ]
  }),
  component: RootDocument
});
function RootDocument() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-hcKlbXi7.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
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
  const rqContext = getContext();
  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: "intent",
    Wrap: (props) => {
      return /* @__PURE__ */ jsx(Provider, { ...rqContext, children: props.children });
    }
  });
  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient });
  return router;
};
const routerBZtNflO_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getRouter
});
export {
  MapPin as M,
  createLucideIcon as c,
  routerBZtNflO_ as r
};
