import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { c as createLucideIcon, M as MapPin } from "./router-BZtNflO-.mjs";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-query";
import "react";
import "tailwind-merge";
const __iconNode$7 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }],
  [
    "path",
    {
      d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
      key: "o0xfot"
    }
  ],
  ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }]
];
const Store = createLucideIcon("store", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          },
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          className: "absolute top-1/4 left-10 w-64 h-64 bg-strawberry/10 rounded-full blur-3xl"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          },
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          },
          className: "absolute bottom-1/4 right-10 w-96 h-96 bg-chocolate/5 rounded-full blur-3xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className: "text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "inline-block text-strawberry font-medium tracking-wider uppercase mb-4",
                children: "Premium Desserts in Chennai"
              }
            ),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-serif font-bold text-chocolate mb-6 leading-tight", children: [
              "Indulge in ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Sweet Perfection" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-chocolate-light mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed", children: "Discover the finest strawberry chocolates, artisanal brownies, and handcrafted desserts that melt in your mouth. Welcome to Happy Dips." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start", children: [
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "bg-strawberry text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 shadow-lg shadow-strawberry/30 hover:shadow-strawberry/50 transition-all",
                  children: [
                    "Order Now ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 rounded-full font-medium text-lg text-chocolate border-2 border-chocolate/10 hover:border-chocolate/30 hover:bg-chocolate/5 transition-all",
                  children: "View Menu"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative h-[500px] flex items-center justify-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, rotate: -10 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          transition: { duration: 1, ease: "easeOut" },
          className: "relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-chocolate to-chocolate-light rounded-[2rem] rotate-3 shadow-2xl flex items-center justify-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-2 border-2 border-white/20 rounded-[1.8rem]" }),
            /* @__PURE__ */ jsxs("span", { className: "text-cream font-serif text-4xl text-center p-8", children: [
              "Signature",
              /* @__PURE__ */ jsx("br", {}),
              "Strawberry",
              /* @__PURE__ */ jsx("br", {}),
              "Dip"
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [-10, 10, -10] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -top-10 -right-10 w-24 h-24 bg-strawberry rounded-full flex items-center justify-center text-white font-bold shadow-lg",
                children: "New!"
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
const products = [
  {
    id: 1,
    name: "Strawberry Bliss",
    description: "Fresh strawberries dipped in premium Belgian chocolate.",
    price: "₹299",
    color: "bg-strawberry-light/20",
    textColor: "text-strawberry"
  },
  {
    id: 2,
    name: "Fudgy Brownie",
    description: "Rich, gooey chocolate brownies topped with sea salt.",
    price: "₹199",
    color: "bg-chocolate-light/20",
    textColor: "text-chocolate"
  },
  {
    id: 3,
    name: "Choco Pops",
    description: "Bite-sized cake pops coated in white and dark chocolate.",
    price: "₹149",
    color: "bg-gold/20",
    textColor: "text-chocolate-light"
  }
];
function ProductShowcase() {
  return /* @__PURE__ */ jsx("section", { id: "menu", className: "py-20 bg-white relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4", children: [
            "Our Sweet ",
            /* @__PURE__ */ jsx("span", { className: "text-strawberry", children: "Creations" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-chocolate-light max-w-2xl mx-auto", children: "Handcrafted with love and the finest ingredients. Every bite is a celebration of flavor." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: products.map((product, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.2 },
        whileHover: { y: -10 },
        className: `rounded-3xl p-8 ${product.color} relative group cursor-pointer`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-48 mb-6 bg-white/50 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-4xl", children: "🍫" }) }),
          /* @__PURE__ */ jsx("h3", { className: `text-2xl font-serif font-bold mb-2 ${product.textColor}`, children: product.name }),
          /* @__PURE__ */ jsx("p", { className: "text-chocolate/70 mb-4", children: product.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-chocolate", children: product.price }),
            /* @__PURE__ */ jsx("button", { className: "bg-white text-chocolate px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow", children: "Add to Cart" })
          ] })
        ]
      },
      product.id
    )) })
  ] }) });
}
function AboutSection() {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "py-20 bg-chocolate text-cream relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5 pattern-dots" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 border-2 border-strawberry/30 rounded-3xl transform rotate-3" }),
            /* @__PURE__ */ jsx("div", { className: "relative bg-chocolate-light/50 p-8 rounded-3xl backdrop-blur-sm border border-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-64 bg-gradient-to-br from-strawberry to-chocolate rounded-2xl flex items-center justify-center text-4xl", children: "🍰" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-strawberry font-medium tracking-wider uppercase mb-2 block", children: "Our Story" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif font-bold mb-6", children: [
              "Crafted with Love in ",
              /* @__PURE__ */ jsx("span", { className: "text-strawberry", children: "Chennai" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-cream/80 text-lg mb-6 leading-relaxed", children: "Happy Dips started as a small passion project in the heart of Anna Nagar. We wanted to bring the authentic taste of premium Belgian chocolate and pair it with the freshest strawberries from the hills." }),
            /* @__PURE__ */ jsx("p", { className: "text-cream/80 text-lg mb-8 leading-relaxed", children: "Today, we are Chennai's favorite destination for dessert lovers who seek something unique, beautiful, and absolutely delicious." }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-strawberry/20 p-3 rounded-full", children: /* @__PURE__ */ jsx(MapPin, { className: "text-strawberry", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg", children: "Visit Our Store" }),
                /* @__PURE__ */ jsx("p", { className: "text-cream/60", children: "123 Dessert Avenue, Anna Nagar" })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function ContactSection() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-cream relative", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6", children: [
            "Get in ",
            /* @__PURE__ */ jsx("span", { className: "text-strawberry", children: "Touch" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-chocolate-light text-lg mb-8", children: "Have a sweet craving or a bulk order request? We'd love to hear from you. Fill out the form or visit us at our Chennai store." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-chocolate/5", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-chocolate text-xl mb-2", children: "Opening Hours" }),
              /* @__PURE__ */ jsx("p", { className: "text-chocolate-light", children: "Mon - Sun: 10:00 AM - 10:00 PM" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-chocolate/5", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-chocolate text-xl mb-2", children: "Bulk Orders" }),
              /* @__PURE__ */ jsx("p", { className: "text-chocolate-light", children: "For weddings and parties, please contact us at least 48 hours in advance." })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "bg-white p-8 rounded-3xl shadow-lg border border-chocolate/5",
        children: /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-chocolate mb-2", children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                className: "w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all",
                placeholder: "Your Name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-chocolate mb-2", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                className: "w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all",
                placeholder: "your@email.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-chocolate mb-2", children: "Message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                rows: 4,
                className: "w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all",
                placeholder: "Tell us what you're craving..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "w-full bg-chocolate text-cream py-4 rounded-xl font-bold text-lg hover:bg-chocolate-light transition-colors flex items-center justify-center gap-2",
              children: [
                "Send Message ",
                /* @__PURE__ */ jsx(Send, { size: 18 })
              ]
            }
          )
        ] })
      }
    )
  ] }) }) });
}
function FeaturedSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-cream text-chocolate relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-strawberry font-medium tracking-wider uppercase mb-2 block", children: "As Seen In" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold mb-6", children: "Making Headlines" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "bg-white p-8 rounded-3xl shadow-xl border border-chocolate/10",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx(Award, { className: "text-strawberry w-10 h-10" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl", children: "The New Indian Express" }),
                /* @__PURE__ */ jsx("p", { className: "text-chocolate/60 text-sm", children: "April 24, 2024" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-serif font-bold mb-4", children: '"Of desserts, dreams, and dedication"' }),
            /* @__PURE__ */ jsx("p", { className: "text-chocolate/70 mb-6 leading-relaxed", children: "Featured for our unique approach to desserts and our journey in bringing premium chocolate experiences to Chennai." }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.newindianexpress.com/cities/chennai/2024/Apr/24/of-desserts-dreams-and-dedication",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-strawberry font-medium hover:text-strawberry/80 transition-colors",
                children: [
                  "Read Full Article ",
                  /* @__PURE__ */ jsx(ExternalLink, { size: 16 })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: 0.4 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-strawberry/10 rounded-3xl transform -rotate-3" }),
            /* @__PURE__ */ jsxs("div", { className: "relative bg-chocolate text-cream p-8 rounded-3xl overflow-hidden", children: [
              /* @__PURE__ */ jsxs("div", { className: "aspect-video bg-chocolate-light rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/happyDips.avif",
                    alt: "Happy Dips Team",
                    className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "font-serif text-lg italic text-center leading-relaxed", children: '"Hemanth Raj, Sanjay Prakash, Dinesh and Shubhang of Happy Dips"' })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const metrics = [
  {
    id: 1,
    label: "Franchises",
    value: "7+",
    icon: Store,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 2,
    label: "Happy Customers",
    value: "5000+",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    id: 3,
    label: "5-Star Reviews",
    value: "4.9",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    id: 4,
    label: "Chocolate Used",
    value: "1000kg+",
    icon: Heart,
    color: "text-strawberry",
    bg: "bg-strawberry/10"
  }
];
function MetricsSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: metrics.map((metric, index) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-16 h-16 mx-auto mb-4 rounded-2xl ${metric.bg} flex items-center justify-center`,
            children: /* @__PURE__ */ jsx(metric.icon, { className: `w-8 h-8 ${metric.color}` })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-chocolate mb-2", children: metric.value }),
        /* @__PURE__ */ jsx("p", { className: "text-chocolate/60 font-medium", children: metric.label })
      ]
    },
    metric.id
  )) }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-cream min-h-screen", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(FeaturedSection, {}),
    /* @__PURE__ */ jsx(ProductShowcase, {}),
    /* @__PURE__ */ jsx(MetricsSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {})
  ] });
}
export {
  Index as component
};
