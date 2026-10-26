import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-D4FjqpGK.mjs";
import { G as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter$1, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Bike, _ as Mail, b as Clock, c as Send, d as Pizza, f as Phone, g as MapPin, h as Menu, m as MessageCircle, n as User, o as ShoppingBag, p as Minus, r as Trash2, s as ShieldCheck, t as X, u as Plus, y as Heart } from "../_libs/lucide-react.mjs";
import { n as auth } from "./firebase-DEKQCEUL.mjs";
import { t as useSessionUser } from "./use-session-CQGZqmnD.mjs";
import { t as Textarea } from "./textarea-DhToQQKc.mjs";
import { n as telHref, t as site } from "./site-aMRC426p.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { l as usePartyHall, s as useMenu } from "./catalog-CbGY4quC.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { i as waLink, n as mapsPinLink, r as subtotal, t as buildOrderMessage } from "./whatsapp-CIetEg5o.mjs";
import { i as useCart, n as MenuCard, r as lineKey, t as CartProvider } from "./MenuCard-BTljEzC0.mjs";
import { t as OffersGrid } from "./Offers-B-A5q4q6.mjs";
import { t as z } from "../_libs/next-themes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CeU-vQPA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-Bf_6ImdO.css";
var _jsxFileName$6 = "/app/applet/src/components/ui/sheet.tsx";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 62,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 69,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 70,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 68,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 63,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 82,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 96,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 110,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 122,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription.displayName;
var _jsxFileName$5 = "/app/applet/src/components/site/SiteHeader.tsx";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/offers",
		label: "Combos"
	},
	{
		to: "/party-hall",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 group py-1",
		"aria-label": "Subday Pizza home",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "grid size-10 place-items-center rounded-full bg-[#fac564] text-xl text-[#121618] shadow-md transition-transform group-hover:scale-105",
			children: "🍕"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 30,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "font-display text-2xl font-bold uppercase tracking-wider text-white",
				children: ["SUBDAY", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[#fac564]",
					children: "PIZZA"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 35,
					columnNumber: 17
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 34,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "font-cursive text-sm text-[#fac564] tracking-wider -mt-1",
				children: "Delicious"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 37,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 33,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
function SiteHeader() {
	const { lines, setOpen } = useCart();
	const user = useSessionUser();
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const count = lines.reduce((s, l) => s + l.qty, 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-50 border-b border-white/10 bg-[#121618]/95 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: n.to,
						className: "px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-[#fac564]",
						activeProps: { className: "!text-[#fac564] font-bold" },
						activeOptions: { exact: true },
						children: n.label
					}, n.to, false, {
						fileName: _jsxFileName$5,
						lineNumber: 57,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "soft",
							size: "icon",
							className: "size-10 overflow-hidden rounded-full border-white/20 bg-white/5 hover:border-[#fac564]",
							asChild: true,
							"aria-label": user ? "My account" : "Sign in",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: user ? "/account" : "/auth",
								children: user?.photoURL ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: user.photoURL,
									alt: user.displayName ?? "Account",
									className: "size-full rounded-full object-cover"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 78,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-4 text-white hover:text-[#fac564]" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 84,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 76,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "soft",
							size: "icon",
							className: "relative size-10 rounded-full border-white/20 bg-white/5 hover:border-[#fac564]",
							onClick: () => setOpen(true),
							"aria-label": "Open order",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "size-4 text-white" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 96,
								columnNumber: 13
							}, this), count > 0 && /* @__PURE__ */ (void 0)("span", {
								className: "absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#fac564] text-[11px] font-extrabold text-[#121618]",
								children: count
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 98,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "hero",
							size: "default",
							className: "hidden sm:inline-flex px-5 py-2 text-xs font-bold uppercase tracking-wider",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/menu",
								children: "Order Now"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 110,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 104,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
							open: mobile,
							onOpenChange: setMobile,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "soft",
									size: "icon",
									className: "size-10 lg:hidden rounded-full border-white/20 bg-white/5",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-5 text-white" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 121,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 115,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 114,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
								side: "right",
								className: "bg-[#121618] border-white/10 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, {
									className: "sr-only",
									children: "Navigation"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 125,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-8 flex flex-col gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-4 pb-4 border-b border-white/10",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 128,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 127,
											columnNumber: 17
										}, this),
										nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: n.to,
											onClick: () => setMobile(false),
											className: "rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-white/80 hover:bg-white/5 hover:text-[#fac564]",
											activeProps: { className: "!text-[#fac564] bg-white/5" },
											children: n.label
										}, n.to, false, {
											fileName: _jsxFileName$5,
											lineNumber: 131,
											columnNumber: 19
										}, this)),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "pt-4 mt-2 border-t border-white/10 flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "hero",
												className: "w-full py-3 text-xs uppercase font-bold tracking-widest",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/menu",
													onClick: () => setMobile(false),
													children: "Order Now"
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 147,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 142,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "outlineWhite",
												className: "w-full py-3 text-xs uppercase font-bold tracking-widest",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: user ? "/account" : "/auth",
													onClick: () => setMobile(false),
													children: user ? "My Account" : "Sign in / Admin"
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 156,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 151,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 141,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 126,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 124,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 113,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 53,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 52,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/site/SiteFooter.tsx";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "relative mt-24 border-t border-white/10 bg-[#0e1113] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none",
				style: { backgroundImage: "url('/images/bg_4.jpg')" }
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 18,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-white/70 leading-relaxed",
								children: [
									"Authentic handcrafted pizzas, freshly made crusts, cheesy burgers, and rich shakes made for sharing in ",
									site.city,
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 19,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-[#fac564] font-semibold uppercase tracking-wider",
								children: [
									"Free home delivery on orders of ₹",
									site.delivery.minOrder,
									"+ within ",
									site.delivery.radiusKm,
									" km."
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 22,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex gap-3 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer",
										children: "🍕"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 26,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer",
										children: "🍔"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 29,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer",
										children: "🥤"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 32,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 25,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 17,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
							className: "font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]",
							children: "Kitchen Specials"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 40,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/menu",
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "/images/image_1.jpg",
									alt: "Signature Pizza",
									className: "size-14 rounded object-cover border border-white/10 group-hover:border-[#fac564] transition-colors"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 45,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-white/90 group-hover:text-[#fac564] transition-colors line-clamp-1",
										children: "8-Flavoured in One Pizza"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 51,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-white/50",
										children: "Chef's Signature"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 54,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 50,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 44,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/menu",
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "/images/image_2.jpg",
									alt: "Kullad Pizza",
									className: "size-14 rounded object-cover border border-white/10 group-hover:border-[#fac564] transition-colors"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 58,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-white/90 group-hover:text-[#fac564] transition-colors line-clamp-1",
										children: "Clay Pot Kullad Pizza"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 64,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-white/50",
										children: "Gurugram's Favourite"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 67,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 63,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 57,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 43,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 39,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
							className: "font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]",
							children: "Explore"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 75,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/menu",
									className: "text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors",
									children: "Full Menu"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 79,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/offers",
									className: "text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors",
									children: "Hot Deals & Combos"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 82,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/party-hall",
									className: "text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors",
									children: "Party Hall & Catering"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 85,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/about",
									className: "text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors",
									children: "About Our Restaurant"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 88,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/contact",
									className: "text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors",
									children: "Contact & Directions"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 91,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/admin",
									className: "inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#fac564] hover:underline pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 95,
										columnNumber: 15
									}, this), " Admin Dashboard"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 94,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 78,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 74,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]",
								children: "Have a Question?"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 102,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3 text-xs text-white/75",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: telHref,
										className: "flex items-center gap-2.5 text-white/80 hover:text-[#fac564] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-4 text-[#fac564] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 110,
											columnNumber: 15
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: site.phone }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 111,
											columnNumber: 15
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 106,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: site.mapsUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-start gap-2.5 text-white/80 hover:text-[#fac564] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-4 text-[#fac564] shrink-0 mt-0.5" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 119,
											columnNumber: 15
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sector 4, Gurugram, Haryana" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 120,
											columnNumber: 15
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 113,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2.5 text-white/70",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4 text-[#fac564] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 123,
											columnNumber: 15
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open Daily: 11:00 AM – 11:00 PM" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 124,
											columnNumber: 15
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 122,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2.5 text-white/70",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4 text-[#fac564] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 127,
											columnNumber: 15
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "support@subdaypizza.com" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 128,
											columnNumber: 15
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 126,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 105,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex gap-4 pt-2 text-[11px] text-white/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/privacy",
										className: "hover:text-white/80",
										children: "Privacy"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 132,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 133,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/terms",
										className: "hover:text-white/80",
										children: "Terms"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 134,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 131,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 101,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative border-t border-white/10 py-6 text-center text-xs text-white/50",
				children: [
					"Copyright © ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" All rights reserved | ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[#fac564]",
						children: "Subday Pizza"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 140,
						columnNumber: 70
					}, this),
					" Gurugram"
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 139,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/site/CartSheet.tsx";
function CartSheet() {
	const { lines, open, setOpen, setQty, clear } = useCart();
	const total = subtotal(lines);
	const remaining = site.delivery.minOrder - total;
	const [loc, setLoc] = (0, import_react.useState)(null);
	const [address, setAddress] = (0, import_react.useState)("");
	const [locStatus, setLocStatus] = (0, import_react.useState)("idle");
	const shareLocation = () => {
		if (!navigator.geolocation) return setLocStatus("error");
		setLocStatus("loading");
		navigator.geolocation.getCurrentPosition((p) => {
			setLoc(mapsPinLink(p.coords.latitude, p.coords.longitude));
			setLocStatus("idle");
		}, () => setLocStatus("error"), {
			enableHighAccuracy: true,
			timeout: 15e3
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
			className: "flex w-full flex-col bg-background sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, {
					className: "font-display text-2xl",
					children: "Your order"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 47,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetDescription, { children: "Review, then send it to us on WhatsApp." }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 48,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 space-y-3 overflow-y-auto px-4",
					children: [lines.length === 0 && /* @__PURE__ */ (void 0)("p", {
						className: "py-12 text-center text-muted-foreground",
						children: "Nothing here yet — add something tasty from the menu."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 54,
						columnNumber: 13
					}, this), lines.map((l) => {
						const k = lineKey(l);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold leading-tight",
										children: l.name
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 66,
										columnNumber: 19
									}, this),
									l.size && /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground",
										children: l.size
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 68,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "price text-primary",
										children: ["₹", l.price * l.qty]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 70,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 65,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "icon",
										variant: "soft",
										className: "size-8",
										onClick: () => setQty(k, l.qty - 1),
										"aria-label": "Decrease",
										children: l.qty === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 80,
											columnNumber: 36
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 80,
											columnNumber: 49
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 73,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "w-6 text-center font-bold",
										children: l.qty
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 82,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "icon",
										variant: "soft",
										className: "size-8",
										onClick: () => setQty(k, l.qty + 1),
										"aria-label": "Increase",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 90,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 83,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 72,
								columnNumber: 17
							}, this)]
						}, k, true, {
							fileName: _jsxFileName$3,
							lineNumber: 61,
							columnNumber: 15
						}, this);
					})]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				lines.length > 0 && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3 border-t p-4",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex justify-between text-lg",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold",
								children: "Subtotal"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 100,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "price",
								children: ["₹", total]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 101,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 99,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-sm text-muted-foreground",
							children: remaining > 0 ? `Add ₹${remaining} more for free home delivery.` : "🎉 Free home delivery unlocked (within 3 km)."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 103,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("label", {
							className: "block text-sm font-semibold",
							htmlFor: "delivery-address",
							children: "Delivery address"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 108,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Textarea, {
							id: "delivery-address",
							value: address,
							onChange: (e) => setAddress(e.target.value),
							placeholder: "House no., street, area, landmark",
							rows: 2,
							maxLength: 300
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 114,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							className: "w-full",
							onClick: shareLocation,
							disabled: locStatus === "loading",
							children: [
								/* @__PURE__ */ (void 0)(MapPin, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 128,
									columnNumber: 15
								}, this),
								" ",
								loc ? "Location added ✓ (tap to update)" : locStatus === "loading" ? "Getting your location…" : "Add my delivery location"
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 122,
							columnNumber: 13
						}, this),
						locStatus === "error" && /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-destructive",
							children: "Couldn't get your location. Type your address above instead."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 136,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							variant: "whatsapp",
							size: "xl",
							className: "w-full",
							asChild: true,
							children: /* @__PURE__ */ (void 0)("a", {
								href: waLink(buildOrderMessage(lines, loc, address)),
								target: "_blank",
								rel: "noreferrer",
								children: "Send order on WhatsApp"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 141,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 140,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: "Sending a WhatsApp message doesn't confirm your order — the restaurant will reply to confirm."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 149,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: clear,
							className: "text-xs font-semibold text-muted-foreground underline",
							children: "Clear order"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 153,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 98,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 45,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		theme,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 12,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$1 = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-extrabold text-primary",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "This slice went missing"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: "Go home"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error("App error:", error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: "Try again"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 45,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Subday Pizza | Authentic Italian Style Pizzeria Gurugram" },
			{
				name: "description",
				content: "Delicious handcrafted pizzas, burgers, pastas and shakes made with fresh dough and original recipes in Gurugram."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Nothing+You+Could+Do&family=Poppins:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 105,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 104,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 109,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 107,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 103,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		let unsubscribe;
		import("./auth-DMEI-xnC.mjs").then((n) => n.t).then((n) => n.t).then(({ subscribeToAuth }) => {
			unsubscribe = subscribeToAuth(() => {
				router.invalidate();
				queryClient.invalidateQueries();
			});
		});
		return () => {
			unsubscribe?.();
		};
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 135,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 137,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 136,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 139,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSheet, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 140,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "top-center" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 141,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 134,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 133,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx";
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Subday Pizza | Authentic Italian Style Pizzeria Gurugram" },
		{
			name: "description",
			content: "Delicious handcrafted pizzas, burgers, pastas and shakes made with fresh dough and original recipes in Gurugram."
		},
		{
			property: "og:title",
			content: "Subday Pizza | Authentic Italian Style Pizzeria Gurugram"
		},
		{
			property: "og:description",
			content: "Delicious handcrafted pizzas, burgers, pastas and shakes made with fresh dough and original recipes in Gurugram."
		}
	] }),
	component: Index
});
function Index() {
	const menu = useMenu();
	const party = usePartyHall();
	const { add } = useCart();
	const [activeTab, setActiveTab] = (0, import_react.useState)("pizza");
	const [activeSlide, setActiveSlide] = (0, import_react.useState)(0);
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const slides = [
		{
			subheading: "Delicious",
			heading: "Italian Cuisine",
			desc: "Freshly hand-tossed dough, melted mozzarella, signature Italian herbs, and authentic wood-fired crusts crafted daily in Gurugram.",
			img: "/images/bg_1.png",
			bg: "/images/bg_1.jpg"
		},
		{
			subheading: "Crunchy",
			heading: "Italian Pizza",
			desc: "Loaded with fresh vegetables, farm-fresh paneer, golden corn, and aromatic spices cooked to golden perfection.",
			img: "/images/bg_2.png",
			bg: "/images/bg_1.jpg"
		},
		{
			subheading: "Welcome",
			heading: "We Cook Your Desired Recipe",
			desc: "From signature 8-Flavoured pizzas and Kullad clay pot pizzas to juicy burgers and creamy cold coffees.",
			img: "/images/bg_1.png",
			bg: "/images/bg_3.jpg"
		}
	];
	const hotMeals = [
		{
			name: "Italian Four Season",
			price: 200,
			img: "/images/pizza-1.jpg",
			desc: "Farm-fresh capsicum, golden corn, black olives, and juicy paneer bites on hand-tossed crust."
		},
		{
			name: "Greek Farmhouse",
			price: 150,
			img: "/images/pizza-2.jpg",
			desc: "Crisp capsicum, sweet corn, fresh tomatoes, and seasoned herbs with melted mozzarella."
		},
		{
			name: "Tandoori Paneer Pizza",
			price: 150,
			img: "/images/pizza-3.jpg",
			desc: "Tandoori marinated paneer cubes, red paprika, sliced onions, and garlic butter glaze."
		},
		{
			name: "American Country Feast",
			price: 150,
			img: "/images/pizza-4.jpg",
			desc: "Zesty special sauce, onion, mushroom, sweet corn, and triple blend Italian cheese."
		},
		{
			name: "Kullad Claypot Pizza",
			price: 120,
			img: "/images/pizza-5.jpg",
			desc: "Baked inside authentic clay kullad overflowing with molten cheese, veggies, and herb sauce."
		},
		{
			name: "Margherita Classic",
			price: 100,
			img: "/images/pizza-6.jpg",
			desc: "Simplicity at its best with single mozzarella cheese, rich pomodoro sauce, and basil."
		}
	];
	const pricingCol1 = [
		{
			name: "Italian Pizza",
			price: "₹200",
			img: "/images/pizza-1.jpg",
			desc: "Hand-tossed crust, black olives, corn, capsicum"
		},
		{
			name: "Hawaiian Special",
			price: "₹290",
			img: "/images/pizza-2.jpg",
			desc: "Sweet pineapple, fresh mozzarella, signature red sauce"
		},
		{
			name: "Greek Farmhouse",
			price: "₹150",
			img: "/images/pizza-3.jpg",
			desc: "Crispy capsicum, farm onion, ripe tomato, oregano"
		},
		{
			name: "Bacon Crispy Thins",
			price: "₹200",
			img: "/images/pizza-4.jpg",
			desc: "Crisp thin crust with smoky flavour and extra cheese"
		}
	];
	const pricingCol2 = [
		{
			name: "Tandoori Paneer",
			price: "₹150",
			img: "/images/pizza-5.jpg",
			desc: "Spicy marinated paneer, red paprika, onion slice"
		},
		{
			name: "Ultimate Overload",
			price: "₹350",
			img: "/images/pizza-6.jpg",
			desc: "All toppings combined with double cheese burst"
		},
		{
			name: "Zesty Special Veg",
			price: "₹150",
			img: "/images/pizza-7.jpg",
			desc: "Zesty Italian herbs, green chili, spicy seasoning"
		},
		{
			name: "8-Flavoured in One",
			price: "₹650",
			img: "/images/pizza-8.jpg",
			desc: "Eight distinct signature pizza slices in one massive pie"
		}
	];
	const tabItems = menu.filter((item) => {
		if (activeTab === "pizza") return item.category.includes("pizza") || item.category === "kullad";
		if (activeTab === "drinks") return item.category.includes("shake") || item.category.includes("coffee") || item.category.includes("mojito");
		if (activeTab === "burgers") return item.category.includes("burger") || item.category.includes("sandwich");
		if (activeTab === "pasta") return item.category.includes("pasta") || item.category.includes("bread") || item.category.includes("wrap");
		return true;
	}).slice(0, 6);
	const handleBookingSubmit = (e) => {
		e.preventDefault();
		const text = `Hi Subday Pizza! I want to contact you:\nName: ${firstName} ${lastName}\nMessage: ${message}`;
		window.open(waLink(text), "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-[#121618] text-white overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-white/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out",
						style: { backgroundImage: `url('${slides[activeSlide].bg}')` }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-[1px]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-20 w-full",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid items-center gap-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "fade-up z-10 text-center lg:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-cursive text-3xl sm:text-4xl text-[#fac564] tracking-wide block mb-2",
										children: slides[activeSlide].subheading
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
										className: "font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white leading-tight mb-4",
										children: slides[activeSlide].heading
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-white/75 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8",
										children: slides[activeSlide].desc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center justify-center lg:justify-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "hero",
											size: "xl",
											className: "px-8 py-3.5 text-xs font-bold uppercase tracking-widest",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/menu",
												children: "Order Now"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 154,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "outlineWhite",
											size: "xl",
											className: "px-8 py-3.5 text-xs font-bold uppercase tracking-widest",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/menu",
												children: "View Menu"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 162,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 156,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-center lg:justify-start gap-2.5 mt-10",
										children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											onClick: () => setActiveSlide(i),
											"aria-label": `Slide ${i + 1}`,
											className: `size-3 rounded-full transition-all ${i === activeSlide ? "bg-[#fac564] w-8" : "bg-white/30 hover:bg-white/60"}`
										}, i, false, {
											fileName: _jsxFileName,
											lineNumber: 169,
											columnNumber: 19
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-center justify-center z-10",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative size-72 sm:size-96 lg:size-[460px] animate-[pulse_6s_ease-in-out_infinite]",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: slides[activeSlide].img,
										alt: "Delicious Italian Pizza",
										className: "size-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out hover:rotate-6"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-b border-white/10 bg-[#0e1113]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4 pt-4 md:pt-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-sm font-bold uppercase tracking-wider text-white",
									children: site.phone
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-white/60",
									children: "Call to order or book table"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 210,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 206,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4 pt-4 md:pt-0 md:pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-sm font-bold uppercase tracking-wider text-white",
									children: "Sector 4, Gurugram"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-white/60",
									children: "Free delivery within 3 km"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 219,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4 pt-4 md:pt-0 md:pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 230,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 229,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-sm font-bold uppercase tracking-wider text-white",
									children: "Open Daily"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-white/60",
									children: "11:00 AM – 11:00 PM"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 236,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 232,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 228,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "grid md:grid-cols-2 border-b border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-h-[360px] md:min-h-[480px] bg-cover bg-center",
					style: { backgroundImage: "url('/images/about.jpg')" }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 245,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col justify-center p-8 sm:p-14 lg:p-20 bg-[#15191b]",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-cursive text-2xl sm:text-3xl text-[#fac564] mb-2",
							children: "Welcome"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 250,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight mb-6",
							children: [
								"Welcome to ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#fac564]",
									children: "Subday Pizza"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 254,
									columnNumber: 24
								}, this),
								" A Restaurant"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 253,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm sm:text-base text-white/70 leading-relaxed mb-6",
							children: "At Subday Pizza Gurugram, we believe authentic Italian cuisine starts with tradition. Our dough is hand-crafted from premium wheat, slow-proofed for 24 hours, and baked to a crisp golden crunch."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 256,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm sm:text-base text-white/70 leading-relaxed mb-8",
							children: "Whether you crave classic Country Feast, fiery Tandoori Paneer, cheese-laden pastas, or our famous Gurugram special Kullad Pizza, every bite is cooked with passion and pure ingredients."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 259,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outlineWhite",
							size: "lg",
							className: "text-xs uppercase font-bold tracking-widest px-8",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/about",
								children: "Our Story"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 269,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 262,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 249,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 border-b border-white/10 bg-[#121618]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
								children: "Experience"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 279,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
								children: "Our Services"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-white/60 mt-3",
								children: "Crafted for pizza lovers who expect nothing less than authentic taste and swift hospitality."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 285,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 278,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-8 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "size-7" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 294,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 293,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-lg font-bold uppercase tracking-wider text-white mb-2",
										children: "Healthy Foods"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 296,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs sm:text-sm text-white/65 leading-relaxed",
										children: "Made with unbleached flour, farm-fresh local vegetables, high-protein paneer, and 100% dairy mozzarella with no artificial colours."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 292,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bike, { className: "size-7" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 307,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 306,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-lg font-bold uppercase tracking-wider text-white mb-2",
										children: "Fastest Delivery"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 309,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs sm:text-sm text-white/65 leading-relaxed",
										children: "Hot and fresh to your doorstep within 30 minutes. Free home delivery on orders of ₹399+ within 3 km in Gurugram."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 312,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pizza, { className: "size-7" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 320,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 319,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-lg font-bold uppercase tracking-wider text-white mb-2",
										children: "Original Recipes"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 322,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs sm:text-sm text-white/65 leading-relaxed",
										children: "Secret Italian herb blends, slow-cooked marinara, signature 8-Flavoured pizza, and clay pot Kullad pizzas you won't find anywhere else."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 325,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 318,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 290,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 277,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 276,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 border-b border-white/10 bg-[#0e1113]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
								children: "Freshly Baked"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 337,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
								children: "Hot Pizza Meals"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 340,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-white/60 mt-3",
								children: "Straight out of the oven — crispy crusts and golden molten cheese."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 343,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: hotMeals.map((meal, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex overflow-hidden rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-all group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: `w-2/5 shrink-0 overflow-hidden ${i >= 3 ? "order-last" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: meal.img,
									alt: meal.name,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-110"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 355,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-1 flex-col justify-between p-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors line-clamp-1",
									children: meal.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1.5 text-xs text-white/60 line-clamp-2",
									children: meal.desc
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 366,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 362,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-4 flex items-center justify-between pt-3 border-t border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-lg font-bold text-[#fac564]",
										children: ["₹", meal.price]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 371,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outlineWhite",
										size: "sm",
										className: "h-8 text-[11px] uppercase font-bold tracking-wider px-3",
										onClick: () => {
											add({
												id: `hot-meal-${i}`,
												name: meal.name,
												size: "Regular",
												price: meal.price
											});
											toast.success(`${meal.name} added to cart`);
										},
										children: "Order"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 374,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 370,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 361,
								columnNumber: 17
							}, this)]
						}, meal.name, true, {
							fileName: _jsxFileName,
							lineNumber: 350,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 335,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 334,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 border-b border-white/10 bg-[#121618]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center max-w-2xl mx-auto mb-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
									children: "Signature Selection"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 402,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
									children: "Our Menu Pricing"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 405,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-4 h-0.5 w-16 bg-[#fac564]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 408,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 401,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-x-12 gap-y-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-6",
								children: pricingCol1.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: p.img,
										alt: p.name,
										className: "size-16 rounded-full object-cover border-2 border-white/15 group-hover:border-[#fac564] transition-colors shrink-0"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 416,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-baseline justify-between gap-2 border-b border-dashed border-white/20 pb-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors",
												children: p.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 423,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-display font-bold text-[#fac564] text-lg",
												children: p.price
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 426,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 422,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-1 text-xs text-white/50",
											children: p.desc
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 430,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 421,
										columnNumber: 19
									}, this)]
								}, p.name, true, {
									fileName: _jsxFileName,
									lineNumber: 415,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 413,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-6",
								children: pricingCol2.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: p.img,
										alt: p.name,
										className: "size-16 rounded-full object-cover border-2 border-white/15 group-hover:border-[#fac564] transition-colors shrink-0"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 440,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-baseline justify-between gap-2 border-b border-dashed border-white/20 pb-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors",
												children: p.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 447,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-display font-bold text-[#fac564] text-lg",
												children: p.price
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 450,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 446,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-1 text-xs text-white/50",
											children: p.desc
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 454,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 445,
										columnNumber: 19
									}, this)]
								}, p.name, true, {
									fileName: _jsxFileName,
									lineNumber: 439,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 437,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 411,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outlineWhite",
								size: "lg",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/menu",
									children: "Explore Full 60+ Item Menu →"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 468,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 462,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 461,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 400,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 399,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-b border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 md:grid-cols-4",
					children: [
						{
							img: "/images/gallery-1.jpg",
							title: "Fresh Tossed Dough"
						},
						{
							img: "/images/gallery-2.jpg",
							title: "Wood-Fired Pizza"
						},
						{
							img: "/images/gallery-3.jpg",
							title: "Artisan Burger"
						},
						{
							img: "/images/gallery-4.jpg",
							title: "Creamy Thick Shakes"
						}
					].map((g, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative aspect-square overflow-hidden group cursor-pointer bg-black/60",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: g.img,
							alt: g.title,
							loading: "lazy",
							className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 487,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-xl text-[#fac564]",
								children: "Delicious"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 494,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-white mt-1",
								children: g.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 495,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 493,
							columnNumber: 15
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 483,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 476,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 475,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative py-24 bg-cover bg-center border-b border-white/10",
				style: { backgroundImage: "url('/images/bg_2.jpg')" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-[2px]" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 509,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-4xl block",
										children: "🍕"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 514,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]",
										children: "60+"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 515,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs uppercase font-bold tracking-[0.2em] text-white/80 block",
										children: "Menu Varieties"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 518,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 513,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-4xl block",
										children: "🏆"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 525,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]",
										children: "8"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 526,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs uppercase font-bold tracking-[0.2em] text-white/80 block",
										children: "Signature Crusts"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 529,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 524,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-4xl block",
										children: "😊"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 536,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]",
										children: "10,500+"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 537,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs uppercase font-bold tracking-[0.2em] text-white/80 block",
										children: "Happy Customers"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 540,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 535,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-4xl block",
										children: "⚡"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 547,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]",
										children: "30 Min"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 548,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs uppercase font-bold tracking-[0.2em] text-white/80 block",
										children: "Express Delivery"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 551,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 546,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 511,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 510,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 505,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 border-b border-white/10 bg-[#121618]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center max-w-2xl mx-auto mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
								children: "Taste The Best"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 563,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
								children: "Explore By Category"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 566,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 562,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap justify-center gap-2 sm:gap-3 mb-12",
							children: [
								{
									id: "pizza",
									label: "Pizza & Kullad",
									icon: "🍕"
								},
								{
									id: "drinks",
									label: "Drinks & Shakes",
									icon: "🥤"
								},
								{
									id: "burgers",
									label: "Burgers & Sandwiches",
									icon: "🍔"
								},
								{
									id: "pasta",
									label: "Pasta, Breads & Wraps",
									icon: "🍝"
								}
							].map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setActiveTab(t.id),
								className: `flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === t.id ? "bg-[#fac564] text-[#121618] shadow-lg shadow-[#fac564]/20" : "bg-[#15191b] border border-white/10 text-white/70 hover:border-[#fac564]/50 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.icon }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 588,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.label }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 589,
									columnNumber: 17
								}, this)]
							}, t.id, true, {
								fileName: _jsxFileName,
								lineNumber: 579,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 572,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: tabItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuCard, {
								item,
								showCategory: true
							}, item.id, false, {
								fileName: _jsxFileName,
								lineNumber: 597,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 595,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "hero",
								size: "lg",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/menu",
									children: ["View All Items in ", activeTab.toUpperCase()]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 608,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 602,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 601,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 561,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 560,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 border-b border-white/10 bg-[#0e1113]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
								children: "Big Savings"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 618,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
								children: "Combos Made For Sharing"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 621,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-white/60 mt-3",
								children: "Value meals loaded with pizzas, garlic bread, fries, and chilled beverages."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 624,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 617,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OffersGrid, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 629,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 616,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 615,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative py-24 bg-cover bg-center border-b border-white/10",
				style: { backgroundImage: "url('/images/bg_3.jpg')" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/85 backdrop-blur-[2px]" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 638,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative mx-auto max-w-5xl px-4 sm:px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
							children: "Celebration"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 640,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white mt-2",
							children: "Make Every Celebration Delicious"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 643,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed",
							children: "Host your birthdays, kitty parties, anniversaries, and family get-togethers in our air-conditioned party hall with custom food packages."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 646,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]",
										children: ["₹", party.packagePrice.toLocaleString("en-IN")]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 652,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70",
										children: "Food Package"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 655,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 651,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]",
										children: ["₹", party.hourlyRate.toLocaleString("en-IN")]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 661,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70",
										children: "Per Hour"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 664,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 660,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]",
										children: ["₹", party.threeHourRate.toLocaleString("en-IN")]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 670,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70",
										children: "3 Hours Slot"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 673,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 669,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 650,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "hero",
								size: "xl",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/party-hall",
									children: "Party Hall Details"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 686,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 680,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "whatsapp",
								size: "xl",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: waLink("Hi Subday Pizza! I would like to enquire about party hall booking."),
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-4 mr-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 699,
										columnNumber: 17
									}, this), " WhatsApp Enquiry"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 694,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 688,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 679,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 639,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 634,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "py-20 bg-[#121618]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid lg:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-cursive text-2xl sm:text-3xl text-[#fac564]",
									children: "Location & Dine-In"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 713,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
									children: "Visit Us in Gurugram"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 716,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 712,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm sm:text-base text-white/70 leading-relaxed",
									children: "Experience the authentic smell of baking crust and fresh oregano. Relax with your family in our cosy dining space or grab express takeaway."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 720,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-4 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "grid size-10 shrink-0 place-items-center rounded bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 727,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 726,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-display text-sm font-bold uppercase tracking-wider text-white",
											children: "Restaurant Address"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 730,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-white/60 mt-0.5",
											children: "Subday Pizza, Sector 4, Gurugram, Haryana - 122006"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 733,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 729,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 725,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "grid size-10 shrink-0 place-items-center rounded bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 741,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 740,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-display text-sm font-bold uppercase tracking-wider text-white",
											children: "Direct Ordering Hotlines"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 744,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-white/60 mt-0.5",
											children: [site.phone, " / WhatsApp Order Active"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 747,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 743,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 739,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 724,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outlineWhite",
										size: "lg",
										className: "px-6 text-xs uppercase font-bold tracking-widest",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: site.mapsUrl,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-4 mr-2 text-[#fac564]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 762,
												columnNumber: 21
											}, this), " Open Google Maps Directions"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 761,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 755,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 754,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 711,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-8 sm:p-10 rounded-xl bg-[#15191b] border border-white/10 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-cursive text-xl text-[#fac564]",
									children: "Reach Out"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 770,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-2xl font-bold uppercase tracking-wider text-white mt-1 mb-6",
									children: "Contact Us"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 773,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
									onSubmit: handleBookingSubmit,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												required: true,
												value: firstName,
												onChange: (e) => setFirstName(e.target.value),
												placeholder: "First Name",
												className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 780,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 779,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												value: lastName,
												onChange: (e) => setLastName(e.target.value),
												placeholder: "Last Name",
												className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 790,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 789,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 778,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
											rows: 4,
											required: true,
											value: message,
											onChange: (e) => setMessage(e.target.value),
											placeholder: "Your message, party date or order request...",
											className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none resize-none"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 801,
											columnNumber: 19
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 800,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											type: "submit",
											variant: "hero",
											size: "lg",
											className: "w-full py-3.5 text-xs uppercase font-bold tracking-widest",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4 mr-2" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 817,
												columnNumber: 19
											}, this), " Send Message On WhatsApp"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 811,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 777,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 769,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 709,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 708,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 707,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 125,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$10 = () => import("./route-CRRSyPUS.mjs");
var Route$10 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		if (!auth.currentUser) await new Promise((resolve) => {
			const unsubscribe = auth.onAuthStateChanged(() => {
				unsubscribe();
				resolve();
			});
			setTimeout(resolve, 300);
		});
		if (!auth.currentUser) throw redirect({ to: "/auth" });
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-ierazy3P.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Subday Pizza Gurugram is a premier pizza and Italian cuisine destination serving wood-fired pizzas, burgers, sandwiches, pasta and shakes."
		},
		{
			property: "og:title",
			content: "About Subday Pizza Gurugram"
		},
		{
			property: "og:description",
			content: "Authentic Italian cuisine and wood-fired pizza in Gurugram."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./account-DiRcmBtz.mjs");
var Route$8 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "My Account — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Your Subday Pizza account details and orders."
		},
		{
			property: "og:title",
			content: "My Account — Subday Pizza"
		},
		{
			property: "og:description",
			content: "Your Subday Pizza account details."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./auth-2Mx141Qp.mjs");
var Route$7 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign in — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Sign in to Subday Pizza with your Google Account or email code."
		},
		{
			property: "og:title",
			content: "Sign in — Subday Pizza"
		},
		{
			property: "og:description",
			content: "Sign in with Google to access order history and admin dashboard."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-M3mcKDxx.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us & Directions — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Call Subday Pizza on 8796130029, order on WhatsApp, or get directions to Sector 4, Gurugram."
		},
		{
			property: "og:title",
			content: "Contact Subday Pizza Gurugram"
		},
		{
			property: "og:description",
			content: "Call, WhatsApp or find Subday Pizza on Google Maps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./menu-C0Ewf22C.mjs");
var Route$5 = createFileRoute("/menu")({
	head: () => ({ meta: [
		{ title: "Menu & Prices — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Full Subday Pizza menu: authentic Italian pizzas, burgers, sandwiches, pasta, fries, wraps, mojitos, shakes and coffee with prices in ₹."
		},
		{
			property: "og:title",
			content: "Subday Pizza Menu & Prices"
		},
		{
			property: "og:description",
			content: "Browse pizzas, burgers, shakes and more with prices."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./offers-v0oJVXJP.mjs");
var Route$4 = createFileRoute("/offers")({
	head: () => ({ meta: [
		{ title: "Offers & Combos — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Meal for Two ₹450, Meal for Three ₹550, Meal for Four ₹800 plus pizza and burger deals at Subday Pizza."
		},
		{
			property: "og:title",
			content: "Subday Pizza Offers & Combos"
		},
		{
			property: "og:description",
			content: "Value combos from ₹450 and buy-2 pizza deals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./party-hall-CyXOEmss.mjs");
var Route$3 = createFileRoute("/party-hall")({
	head: () => ({ meta: [
		{ title: "Party Hall & Catering — Subday Pizza Gurugram" },
		{
			name: "description",
			content: "Book the Subday Pizza party hall: ₹400/hour, ₹1,000 for 3 hours, party food package ₹1,500."
		},
		{
			property: "og:title",
			content: "Subday Pizza Party Hall & Catering"
		},
		{
			property: "og:description",
			content: "Birthdays and get-togethers with pizza, burgers and shakes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-CGiDbKc9.mjs");
var Route$2 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Subday Pizza" },
		{
			name: "description",
			content: "How Subday Pizza handles your information."
		},
		{
			property: "og:title",
			content: "Privacy Policy — Subday Pizza"
		},
		{
			property: "og:description",
			content: "How we handle your information."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-DPiDA7Z2.mjs");
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — Subday Pizza" },
		{
			name: "description",
			content: "Terms for ordering and offers at Subday Pizza."
		},
		{
			property: "og:title",
			content: "Terms & Conditions — Subday Pizza"
		},
		{
			property: "og:description",
			content: "Ordering and offer terms."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin-M59kIzX7.mjs");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [
		{ title: "Admin Management — Subday Pizza" },
		{
			name: "description",
			content: "Manage menu items, offers, party hall pricing and customer orders."
		},
		{
			property: "og:title",
			content: "Admin Management — Subday Pizza"
		},
		{
			property: "og:description",
			content: "Restaurant operations & catalog management."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRoute = Route$10.update({
	id: "/_authenticated",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var AccountRoute = Route$8.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$12
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var MenuRoute = Route$5.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$12
});
var OffersRoute = Route$4.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => Route$12
});
var PartyHallRoute = Route$3.update({
	id: "/party-hall",
	path: "/party-hall",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$2.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$1.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AccountRoute,
	AuthRoute,
	ContactRoute,
	MenuRoute,
	OffersRoute,
	PartyHallRoute,
	PrivacyRoute,
	TermsRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
	const queryClient = new QueryClient();
	return createRouter$1({
		routeTree,
		context: { queryClient },
		scrollRestoration: true
	});
}
var getRouter = createRouter;
//#endregion
export { createRouter, getRouter };
