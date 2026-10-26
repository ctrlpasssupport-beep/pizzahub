import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-D4FjqpGK.mjs";
import { u as Plus } from "../_libs/lucide-react.mjs";
import { o as sizesFor, t as categories } from "./catalog-CbGY4quC.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MenuCard-BTljEzC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/lib/cart.tsx";
var Ctx = (0, import_react.createContext)(null);
var keyOf = (l) => `${l.id}|${l.size ?? ""}`;
function CartProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("subday-cart");
			if (raw) setLines(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("subday-cart", JSON.stringify(lines));
	}, [lines]);
	const add = (l) => setLines((prev) => {
		const k = keyOf(l);
		return prev.find((p) => keyOf(p) === k) ? prev.map((p) => keyOf(p) === k ? {
			...p,
			qty: p.qty + 1
		} : p) : [...prev, {
			...l,
			qty: 1
		}];
	});
	const setQty = (k, qty) => setLines((prev) => qty <= 0 ? prev.filter((p) => keyOf(p) !== k) : prev.map((p) => keyOf(p) === k ? {
		...p,
		qty
	} : p));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ctx.Provider, {
		value: {
			lines,
			open,
			setOpen,
			add,
			setQty,
			clear: () => setLines([])
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
var lineKey = keyOf;
function useCart() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useCart outside provider");
	return c;
}
var _jsxFileName$1 = "/app/applet/src/components/ui/badge.tsx";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/site/MenuCard.tsx";
function imageForItem(item) {
	if (item.category.includes("pizza") || item.category === "kullad") {
		const pizzas = [
			"/images/pizza-1.jpg",
			"/images/pizza-2.jpg",
			"/images/pizza-3.jpg",
			"/images/pizza-4.jpg",
			"/images/pizza-5.jpg",
			"/images/pizza-6.jpg",
			"/images/pizza-7.jpg",
			"/images/pizza-8.jpg"
		];
		let hash = 0;
		for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
		return pizzas[hash % pizzas.length];
	}
	if (item.category.includes("burger")) {
		const burgers = [
			"/images/burger-1.jpg",
			"/images/burger-2.jpg",
			"/images/burger-3.jpg"
		];
		let hash = 0;
		for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
		return burgers[hash % burgers.length];
	}
	if (item.category.includes("pasta") || item.category.includes("bread") || item.category.includes("sandwiches") || item.category.includes("wrap") || item.category.includes("fries")) {
		const pastas = [
			"/images/pasta-1.jpg",
			"/images/pasta-2.jpg",
			"/images/pasta-3.jpg"
		];
		let hash = 0;
		for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
		return pastas[hash % pastas.length];
	}
	const drinks = [
		"/images/drink-1.jpg",
		"/images/drink-2.jpg",
		"/images/drink-3.jpg",
		"/images/drink-4.jpg",
		"/images/drink-5.jpg",
		"/images/drink-6.jpg",
		"/images/drink-7.jpg",
		"/images/drink-8.jpg",
		"/images/drink-9.jpg"
	];
	let hash = 0;
	for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
	return drinks[hash % drinks.length];
}
function MenuCard({ item, showCategory }) {
	const { add } = useCart();
	const sizes = sizesFor(item);
	const [idx, setIdx] = (0, import_react.useState)(sizes.length ? 1 : 0);
	const available = item.available !== false;
	const cat = categories.find((c) => c.id === item.category);
	const img = imageForItem(item);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "group flex flex-col overflow-hidden rounded-xl bg-[#15191b] border border-white/10 shadow-lg transition-all duration-300 hover:border-[#fac564]/50 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden bg-black/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: img,
					alt: item.name,
					loading: "lazy",
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#15191b] via-transparent to-black/20" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-3 left-3 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-8 place-items-center rounded-full bg-black/70 backdrop-blur-md text-sm border border-white/15",
						children: cat?.emoji ?? "🍕"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this), item.featured && /* @__PURE__ */ (void 0)(Badge, {
						className: "rounded-none bg-[#fac564] text-[#121618] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5",
						children: "Special"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-3 right-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-5 place-items-center rounded-sm bg-black/60 border border-green-500",
						title: "Vegetarian",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-green-500" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg font-bold text-white transition-colors group-hover:text-[#fac564] leading-tight line-clamp-1",
					children: item.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 9
				}, this),
				showCategory && /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-[11px] font-semibold uppercase tracking-widest text-[#fac564]/80",
					children: cat?.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1.5 text-xs text-white/60 line-clamp-2 min-h-[2rem]",
					children: item.note || "Prepared fresh with original Italian dough and premium cheese."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 9
				}, this),
				sizes.length > 0 && /* @__PURE__ */ (void 0)("div", {
					className: "mt-3 grid grid-cols-3 gap-1 rounded bg-white/5 p-1 border border-white/5",
					role: "radiogroup",
					"aria-label": "Size",
					children: sizes.map((s, i) => /* @__PURE__ */ (void 0)("button", {
						role: "radio",
						"aria-checked": i === idx,
						onClick: () => setIdx(i),
						className: `py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${i === idx ? "bg-[#fac564] text-[#121618] shadow-sm font-extrabold" : "text-white/60 hover:text-white"}`,
						children: s
					}, s, false, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-auto flex items-center justify-between pt-4 border-t border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[10px] uppercase font-semibold text-white/40 tracking-wider",
							children: sizes.length ? sizes[idx] : "Standard"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-xl font-bold text-[#fac564]",
							children: ["₹", item.prices[idx] ?? item.prices[0] ?? 0]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "hero",
						size: "sm",
						className: "h-9 px-4 text-xs uppercase tracking-wider font-bold",
						disabled: !available,
						onClick: () => {
							add({
								id: item.id,
								name: item.name,
								size: sizes[idx] ?? "",
								price: item.prices[idx] ?? 0
							});
							toast.success(`${item.name} added to cart`);
						},
						children: available ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 mr-1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 179,
							columnNumber: 17
						}, this), " Add"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 15
						}, this) : "Sold Out"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 5
	}, this);
}
//#endregion
export { useCart as i, MenuCard as n, lineKey as r, CartProvider as t };
