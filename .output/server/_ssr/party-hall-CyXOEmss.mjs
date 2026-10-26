import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-D4FjqpGK.mjs";
import { t as PageHeader } from "./PageHeader-CL4HyOxj.mjs";
import { a as Sparkles, f as Phone, m as MessageCircle, x as Check } from "../_libs/lucide-react.mjs";
import { n as telHref } from "./site-aMRC426p.mjs";
import { l as usePartyHall } from "./catalog-CbGY4quC.mjs";
import { i as waLink } from "./whatsapp-CIetEg5o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/party-hall-CyXOEmss.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/party-hall.tsx?tsr-split=component";
function PartyHall() {
	const p = usePartyHall();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-[#121618] text-white min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			eyebrow: "Celebrations",
			title: "Party Hall & Events",
			bgImage: "/images/bg_3.jpg",
			children: "Birthdays, kitty parties or get-togethers — bring your loved ones, we'll serve the pizza!"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-12 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative overflow-hidden rounded-xl border border-white/10 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/images/about.jpg",
							alt: "Party hall decorated with food",
							className: "w-full aspect-[4/3] object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-cursive text-xl text-[#fac564]",
								children: "Air Conditioned Space"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-xl font-bold uppercase tracking-wider text-white",
								children: "Private Dining & Music Setup"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/images/image_3.jpg",
							alt: "Party gathering",
							className: "rounded-lg object-cover h-36 w-full border border-white/10"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/images/gallery-2.jpg",
							alt: "Fresh Pizzas",
							className: "rounded-lg object-cover h-36 w-full border border-white/10"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-cursive text-2xl text-[#fac564]",
							children: "Affordable Packages"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1",
							children: "Transparent Rates & Pricing"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								["Hall / hour", p.hourlyRate],
								["3 hours slot", p.threeHourRate],
								["Food package", p.packagePrice]
							].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-xl bg-[#15191b] border border-white/10 p-4 sm:p-5 text-center hover:border-[#fac564]/50 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]",
									children: ["₹", Number(v).toLocaleString("en-IN")]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-[11px] uppercase font-bold tracking-wider text-white/60",
									children: l
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 19
								}, this)]
							}, l, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 133
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl bg-[#15191b] border border-white/10 p-6 sm:p-8 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-5 text-[#fac564]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-lg font-bold uppercase tracking-wider text-white",
									children: [
										"₹",
										p.packagePrice.toLocaleString("en-IN"),
										" Food Package Includes:"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "grid gap-3 sm:grid-cols-2 pt-2 text-sm text-white/80",
								children: p.packageItems.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "mt-0.5 size-4 text-[#fac564] shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 67,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: i }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 68,
										columnNumber: 21
									}, this)]
								}, i, true, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 42
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "whatsapp",
								size: "xl",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: waLink("Hi Subday Pizza! I'd like to enquire about booking the party hall. Date: ___  Guests: ___"),
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-4 mr-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 76,
										columnNumber: 19
									}, this), " Book On WhatsApp"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outlineWhite",
								size: "xl",
								className: "px-8 text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: telHref,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-4 mr-2 text-[#fac564]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 81,
										columnNumber: 19
									}, this), " Call Direct"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-white/50",
							children: "Rates as advertised on our menu — please confirm date availability and head counts when enquiring."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { PartyHall as component };
