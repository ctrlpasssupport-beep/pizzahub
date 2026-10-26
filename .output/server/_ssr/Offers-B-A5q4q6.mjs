import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-D4FjqpGK.mjs";
import { a as Sparkles, x as Check } from "../_libs/lucide-react.mjs";
import { c as useOffers, r as offerTerms } from "./catalog-CbGY4quC.mjs";
import { i as waLink } from "./whatsapp-CIetEg5o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Offers-B-A5q4q6.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/Offers.tsx";
function OffersGrid() {
	const all = useOffers();
	const offers = all.filter((o) => o.kind === "combo");
	const deals = all.filter((o) => o.kind === "deal");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: offers.map((o, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: `relative flex flex-col overflow-hidden rounded-xl p-8 border transition-all duration-300 ${i === 1 ? "bg-[#171b1d] border-[#fac564] shadow-[0_0_30px_rgba(250,197,100,0.15)] ring-1 ring-[#fac564]" : "bg-[#15191b] border-white/10 hover:border-white/30"}`,
					children: [
						i === 1 && /* @__PURE__ */ (void 0)("span", {
							className: "absolute top-0 right-0 bg-[#fac564] px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#121618]",
							children: "Most Popular"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-bold uppercase tracking-[0.25em] text-[#fac564]",
							children: "Special Combo"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-2 text-2xl font-bold font-display uppercase tracking-wider text-white",
							children: o.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-baseline gap-1 text-[#fac564]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xl font-bold",
								children: "₹"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "price text-5xl font-extrabold tracking-tight",
								children: o.price
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 space-y-2.5 text-sm text-white/80 border-t border-white/10 pt-6",
							children: o.items.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "mt-0.5 size-4 text-[#fac564] shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "leading-snug",
									children: it
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 19
								}, this)]
							}, it, true, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 pt-4 border-t border-white/10",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: i === 1 ? "hero" : "outlineWhite",
								size: "lg",
								className: "w-full text-xs uppercase font-bold tracking-widest",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: waLink(`Hi Subday Pizza! I'd like to order the ${o.title} combo (₹${o.price}).`),
									target: "_blank",
									rel: "noreferrer",
									children: "Order This Combo"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this)
					]
				}, o.id, true, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: deals.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "flex items-center gap-5 rounded-xl border border-white/10 bg-[#15191b] p-6 hover:border-[#fac564]/40 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-14 shrink-0 place-items-center rounded-full bg-[#fac564]/10 border border-[#fac564]/30 text-2xl",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-6 text-[#fac564]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-xl font-bold uppercase tracking-wider text-white",
						children: d.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-white/70",
						children: d.text
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 13
					}, this)]
				}, d.id, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-center text-xs text-white/50",
				children: offerTerms
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
//#endregion
export { OffersGrid as t };
