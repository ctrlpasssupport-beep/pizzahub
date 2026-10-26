import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as PageHeader } from "./PageHeader-CL4HyOxj.mjs";
import { l as Search } from "../_libs/lucide-react.mjs";
import { s as useMenu, t as categories } from "./catalog-CbGY4quC.mjs";
import { n as MenuCard } from "./MenuCard-BTljEzC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-C0Ewf22C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/menu.tsx?tsr-split=component";
function MenuPage() {
	const menu = useMenu();
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => menu.filter((m) => m.name.toLowerCase().includes(q.trim().toLowerCase())), [q, menu]);
	const groups = categories.map((c) => ({
		c,
		items: filtered.filter((m) => m.category === c.id)
	})).filter((g) => g.items.length);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-[#121618] text-white min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				eyebrow: "Our Menu",
				title: "Discover Our Flavours",
				bgImage: "/images/bg_3.jpg",
				children: "All prices in ₹. Hand-crafted daily using fresh proofed dough and 100% dairy mozzarella."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "sticky top-20 z-40 border-y border-white/10 bg-[#0e1113]/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 py-4 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative md:w-80 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/40" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search pizza, pasta, shakes…",
							className: "h-10 w-full rounded bg-[#171b1d] border border-white/15 pl-10 pr-4 text-xs text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none",
							"aria-label": "Search menu"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
						className: "no-scrollbar flex gap-2 overflow-x-auto py-1",
						"aria-label": "Categories",
						children: groups.map(({ c }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `#${c.id}`,
							className: "shrink-0 flex items-center gap-1.5 rounded bg-[#15191b] border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:border-[#fac564] hover:text-[#fac564] transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.emoji }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 17
							}, this)]
						}, c.id, true, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl space-y-16 px-4 sm:px-6 py-14",
				children: [groups.length === 0 && /* @__PURE__ */ (void 0)("div", {
					className: "py-24 text-center",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "text-5xl",
							children: "🍕"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-4 font-display text-2xl font-bold uppercase tracking-wider text-white",
							children: [
								"No dishes match “",
								q,
								"”"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-sm text-white/50 mt-1",
							children: "Try searching for “paneer”, “burger”, “shake” or “garlic bread”."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 33
				}, this), groups.map(({ c, items }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: c.id,
					className: "scroll-mt-40",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 border-b border-white/10 pb-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-3xl",
							children: c.emoji
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white",
							children: c.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-[#fac564] font-cursive tracking-wider",
							children: "Hand-crafted recipe"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						children: items.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuCard, { item: m }, m.id, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 31
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 13
					}, this)]
				}, c.id, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { MenuPage as component };
