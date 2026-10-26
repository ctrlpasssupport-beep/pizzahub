import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as cn, t as Button } from "./button-D4FjqpGK.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-CL4HyOxj.mjs";
import { f as Phone, g as MapPin, r as Trash2, s as ShieldCheck, u as Plus } from "../_libs/lucide-react.mjs";
import { t as Textarea } from "./textarea-DhToQQKc.mjs";
import { t as supabase } from "./client-91i0mGvG.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as partyQuery, i as offersQuery, n as menuQuery, t as categories } from "./catalog-CbGY4quC.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { i as TabsTrigger$1, n as TabsContent$1, r as TabsList$1, t as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-M59kIzX7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$3 = "/app/applet/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
var _jsxFileName$2 = "/app/applet/src/components/ui/switch.tsx";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Switch.displayName = Switch$1.displayName;
var _jsxFileName$1 = "/app/applet/src/components/ui/tabs.tsx";
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 12,
	columnNumber: 3
}, void 0));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 42,
	columnNumber: 3
}, void 0));
TabsContent.displayName = TabsContent$1.displayName;
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.tsx?tsr-split=component";
function AdminPage() {
	const role = useQuery({
		queryKey: ["is-admin"],
		queryFn: async () => {
			const { auth } = await import("./firebase-DEKQCEUL.mjs").then((n) => n.i).then((n) => n.r);
			const u = auth.currentUser;
			if (!u || !u.email) return false;
			return u.email === "ayushsharma80104@gmail.com" || u.email.endsWith("@google.com");
		}
	});
	if (role.isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[50vh] flex items-center justify-center bg-[#121618]",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "font-cursive text-2xl text-[#fac564] animate-pulse",
			children: "Verifying credentials…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 30
	}, this);
	if (!role.data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[60vh] flex items-center justify-center bg-[#121618] px-4 py-20 text-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md p-8 rounded-2xl bg-[#15191b] border border-white/10 text-center shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "mx-auto size-12 text-[#fac564] mb-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white",
					children: "Admin Access Only"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-sm text-white/60",
					children: "This account does not have store administrator privileges. Please sign in with an authorized account."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "hero",
					className: "mt-6",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						children: "Return to Home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 26
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-[#121618] min-h-screen pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			eyebrow: "Kitchen Operations",
			title: "Admin Dashboard",
			bgImage: "/images/bg_4.jpg"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-4 pt-10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "orders",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-[#15191b] border border-white/10 p-1.5 rounded-full flex flex-wrap gap-1 h-auto mb-8 max-w-xl mx-auto justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "orders",
								className: "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 data-[state=active]:bg-[#fac564] data-[state=active]:text-black transition-all",
								children: "Orders"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "menu",
								className: "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 data-[state=active]:bg-[#fac564] data-[state=active]:text-black transition-all",
								children: "Menu Items"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "offers",
								className: "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 data-[state=active]:bg-[#fac564] data-[state=active]:text-black transition-all",
								children: "Combos & Deals"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "party",
								className: "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 data-[state=active]:bg-[#fac564] data-[state=active]:text-black transition-all",
								children: "Party Hall"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "orders",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTab, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "menu",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuTab, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "offers",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OffersTab, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "party",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartyTab, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
var STATUSES = [
	"new",
	"confirmed",
	"delivered",
	"cancelled"
];
function OrdersTab() {
	const qc = useQueryClient();
	const orders = useQuery({
		queryKey: ["admin-orders"],
		queryFn: async () => {
			const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(200);
			if (error) throw error;
			return data;
		},
		refetchInterval: 3e4
	});
	const setStatus = async (id, status) => {
		const { error } = await supabase.from("orders").update({ status }).eq("id", id);
		if (error) return toast.error("Couldn't update order");
		qc.invalidateQueries({ queryKey: ["admin-orders"] });
	};
	if (orders.isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "py-10 text-muted-foreground",
		children: "Loading orders…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 32
	}, this);
	if (!orders.data?.length) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "py-10 text-muted-foreground",
		children: "No orders yet. Orders appear here when customers tap “Send order on WhatsApp”."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 117,
		columnNumber: 36
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-4 grid gap-4 md:grid-cols-2",
		children: orders.data.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
			className: "rounded-3xl bg-card p-5 shadow-card border border-white/10 hover:border-[#fac564]/30 transition-colors",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-bold text-white",
						children: o.customer_name || "Customer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-white/50",
						children: new Date(o.created_at).toLocaleString("en-IN")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						value: o.status,
						onChange: (e) => setStatus(o.id, e.target.value),
						className: "rounded-full border border-white/15 bg-[#121618] px-3 py-1 text-sm font-semibold text-[#fac564] focus:outline-none focus:border-[#fac564]",
						"aria-label": "Order status",
						children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: s,
							children: s
						}, s, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 34
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-3 space-y-1 text-sm",
					children: o.items.map((l, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						l.qty,
						" × ",
						l.name,
						l.size ? ` (${l.size})` : "",
						" — ₹",
						l.price * l.qty
					] }, i, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 53
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "price mt-2 text-lg text-primary",
					children: ["₹", o.subtotal]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 space-y-1 text-sm",
					children: [
						o.phone && /* @__PURE__ */ (void 0)("a", {
							href: `tel:${o.phone}`,
							className: "flex items-center gap-2 font-semibold",
							children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 17
							}, this), o.phone]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold",
								children: "Address:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 15
							}, this),
							" ",
							o.address || /* @__PURE__ */ (void 0)("span", {
								className: "text-muted-foreground",
								children: "not given"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 29
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 13
						}, this),
						o.location && /* @__PURE__ */ (void 0)("a", {
							href: o.location,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 font-semibold text-primary",
							children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 17
							}, this), "Open map pin"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 28
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 11
				}, this)
			]
		}, o.id, true, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 29
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 121,
		columnNumber: 10
	}, this);
}
function MenuTab() {
	const qc = useQueryClient();
	const { data = [] } = useQuery(menuQuery);
	const [cat, setCat] = (0, import_react.useState)(categories[0].id);
	const items = data.filter((m) => m.category === cat);
	const refresh = () => qc.invalidateQueries({ queryKey: ["catalog", "menu"] });
	const save = async (id, patch) => {
		const { error } = await supabase.from("menu_items").update(patch).eq("id", id);
		if (error) toast.error("Couldn't save");
		else {
			toast.success("Saved");
			refresh();
		}
	};
	const add = async () => {
		const name = prompt("New item name");
		if (!name?.trim()) return;
		const sized = !!categories.find((c) => c.id === cat)?.sizes;
		const { error } = await supabase.from("menu_items").insert({
			id: `${cat}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now().toString(36)}`,
			name: name.trim(),
			category: cat,
			prices: sized ? [
				0,
				0,
				0
			] : [0],
			sort: data.length
		});
		if (error) toast.error("Couldn't add");
		else refresh();
	};
	const remove = async (id, name) => {
		if (!confirm(`Delete ${name}?`)) return;
		const { error } = await supabase.from("menu_items").delete().eq("id", id);
		if (error) toast.error("Couldn't delete");
		else refresh();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
				value: cat,
				onChange: (e) => setCat(e.target.value),
				className: "h-10 rounded-full border bg-background px-4 font-semibold",
				"aria-label": "Category",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: c.id,
					children: [
						c.emoji,
						" ",
						c.name
					]
				}, c.id, true, {
					fileName: _jsxFileName,
					lineNumber: 204,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 203,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "hero",
				onClick: add,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 11
				}, this), " Add item"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 202,
			columnNumber: 7
		}, this), items.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuRow, {
			item: m,
			sizes: categories.find((c) => c.id === cat)?.sizes,
			onSave: (p) => save(m.id, p),
			onDelete: () => remove(m.id, m.name)
		}, m.id, false, {
			fileName: _jsxFileName,
			lineNumber: 212,
			columnNumber: 23
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 201,
		columnNumber: 10
	}, this);
}
function MenuRow({ item, sizes, onSave, onDelete }) {
	const [name, setName] = (0, import_react.useState)(item.name);
	const [prices, setPrices] = (0, import_react.useState)(item.prices.map(String));
	const [note, setNote] = (0, import_react.useState)(item.note ?? "");
	(0, import_react.useEffect)(() => {
		setName(item.name);
		setPrices(item.prices.map(String));
		setNote(item.note ?? "");
	}, [item]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-wrap items-end gap-3 rounded-2xl bg-card p-4 shadow-card border border-white/10 hover:border-[#fac564]/30 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "flex-1 min-w-48 text-xs font-semibold text-white/80",
				children: ["Name", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					value: name,
					onChange: (e) => setName(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 243,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 241,
				columnNumber: 7
			}, this),
			prices.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "w-24 text-xs font-semibold",
				children: [
					prices.length > 1 ? sizes?.[i] ?? `Size ${i + 1}` : "Price",
					" ₹",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						type: "number",
						min: 0,
						value: p,
						onChange: (e) => setPrices(prices.map((x, j) => j === i ? e.target.value : x))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 247,
						columnNumber: 11
					}, this)
				]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 245,
				columnNumber: 29
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "min-w-40 flex-1 text-xs font-semibold",
				children: ["Note", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					value: note,
					onChange: (e) => setNote(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 251,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 249,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "flex items-center gap-2 text-xs font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
					checked: item.available !== false,
					onCheckedChange: (v) => onSave({ available: v })
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 9
				}, this), "Available"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 253,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "flex items-center gap-2 text-xs font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
					checked: !!item.featured,
					onCheckedChange: (v) => onSave({ featured: v })
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 260,
					columnNumber: 9
				}, this), "Favourite"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				onClick: () => onSave({
					name: name.trim(),
					note: note.trim() || null,
					prices: prices.map((x) => Math.max(0, Math.round(Number(x) || 0)))
				}),
				children: "Save"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: onDelete,
				"aria-label": "Delete item",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 273,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 272,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 240,
		columnNumber: 10
	}, this);
}
function OffersTab() {
	const qc = useQueryClient();
	const { data = [] } = useQuery(offersQuery);
	const refresh = () => qc.invalidateQueries({ queryKey: ["catalog", "offers"] });
	const add = async (kind) => {
		const { error } = await supabase.from("offers").insert({
			id: `${kind}-${Date.now().toString(36)}`,
			kind,
			title: kind === "combo" ? "New combo" : "New offer",
			price: kind === "combo" ? 0 : null,
			sort: data.length + 20
		});
		if (error) toast.error("Couldn't add");
		else refresh();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "hero",
				onClick: () => add("combo"),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 300,
					columnNumber: 11
				}, this), " Add combo"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 299,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "soft",
				onClick: () => add("deal"),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 11
				}, this), " Add offer"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 302,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 298,
			columnNumber: 7
		}, this), data.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OfferRow, {
			offer: o,
			onDone: refresh
		}, o.id, false, {
			fileName: _jsxFileName,
			lineNumber: 306,
			columnNumber: 22
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 297,
		columnNumber: 10
	}, this);
}
function OfferRow({ offer, onDone }) {
	const [title, setTitle] = (0, import_react.useState)(offer.title);
	const [price, setPrice] = (0, import_react.useState)(String(offer.price ?? ""));
	const [body, setBody] = (0, import_react.useState)(offer.kind === "combo" ? offer.items.join("\n") : offer.text ?? "");
	(0, import_react.useEffect)(() => {
		setTitle(offer.title);
		setPrice(String(offer.price ?? ""));
		setBody(offer.kind === "combo" ? offer.items.join("\n") : offer.text ?? "");
	}, [offer]);
	const update = async (patch) => {
		const { error } = await supabase.from("offers").update(patch).eq("id", offer.id);
		if (error) toast.error("Couldn't save");
		else {
			toast.success("Saved");
			onDone();
		}
	};
	const save = () => update(offer.kind === "combo" ? {
		title: title.trim(),
		price: Math.max(0, Math.round(Number(price) || 0)),
		items: body.split("\n").map((s) => s.trim()).filter(Boolean)
	} : {
		title: title.trim(),
		text: body.trim()
	});
	const remove = async () => {
		if (!confirm(`Delete ${offer.title}?`)) return;
		const { error } = await supabase.from("offers").delete().eq("id", offer.id);
		if (error) toast.error("Couldn't delete");
		else onDone();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-3 rounded-2xl bg-card p-4 shadow-card border border-white/10 hover:border-[#fac564]/30 transition-colors md:grid-cols-[1fr_8rem_2fr_auto]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "text-xs font-semibold text-white/80",
				children: [
					offer.kind === "combo" ? "Combo" : "Offer",
					" title",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: title,
						onChange: (e) => setTitle(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 351,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 349,
				columnNumber: 7
			}, this),
			offer.kind === "combo" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "text-xs font-semibold text-white/80",
				children: ["Price ₹", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					type: "number",
					min: 0,
					value: price,
					onChange: (e) => setPrice(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 353,
				columnNumber: 33
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 356,
				columnNumber: 20
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "text-xs font-semibold text-white/80",
				children: [offer.kind === "combo" ? "Items (one per line)" : "Description", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
					rows: 3,
					value: body,
					onChange: (e) => setBody(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 359,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 357,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "flex items-center gap-2 text-xs font-semibold text-white/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
							checked: offer.active,
							onCheckedChange: (v) => update({ active: v })
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 363,
							columnNumber: 11
						}, this), "Show"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: save,
						children: "Save"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: remove,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 370,
							columnNumber: 11
						}, this), " Delete"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 369,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 361,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 348,
		columnNumber: 10
	}, this);
}
function PartyTab() {
	const qc = useQueryClient();
	const { data } = useQuery(partyQuery);
	const [f, setF] = (0, import_react.useState)({
		pkg: "",
		hr: "",
		three: "",
		items: ""
	});
	(0, import_react.useEffect)(() => {
		if (data) setF({
			pkg: String(data.packagePrice),
			hr: String(data.hourlyRate),
			three: String(data.threeHourRate),
			items: data.packageItems.join("\n")
		});
	}, [data]);
	const n = (s) => Math.max(0, Math.round(Number(s) || 0));
	const save = async () => {
		const { error } = await supabase.from("site_settings").update({
			party_package_price: n(f.pkg),
			party_hourly_rate: n(f.hr),
			party_three_hour_rate: n(f.three),
			party_package_items: f.items.split("\n").map((s) => s.trim()).filter(Boolean)
		}).eq("id", 1);
		if (error) return toast.error("Couldn't save");
		toast.success("Party hall pricing saved");
		qc.invalidateQueries({ queryKey: ["catalog", "party"] });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-4 max-w-xl space-y-4 rounded-3xl bg-card p-6 shadow-card border border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-semibold",
						children: ["Food package ₹", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "number",
							value: f.pkg,
							onChange: (e) => setF({
								...f,
								pkg: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 414,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 412,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-semibold",
						children: ["Hall per hour ₹", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "number",
							value: f.hr,
							onChange: (e) => setF({
								...f,
								hr: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 421,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 419,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-semibold",
						children: ["3 hours ₹", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "number",
							value: f.three,
							onChange: (e) => setF({
								...f,
								three: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 428,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 426,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 411,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "block text-xs font-semibold",
				children: ["Package includes (one per line)", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
					rows: 7,
					value: f.items,
					onChange: (e) => setF({
						...f,
						items: e.target.value
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 436,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 434,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "hero",
				onClick: save,
				children: "Save"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 441,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 410,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminPage as component };
