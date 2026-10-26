import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-D4FjqpGK.mjs";
import { t as PageHeader } from "./PageHeader-CL4HyOxj.mjs";
import { b as Clock, c as Send, f as Phone, g as MapPin, m as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as telHref, t as site } from "./site-aMRC426p.mjs";
import { i as waLink } from "./whatsapp-CIetEg5o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-M3mcKDxx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [phoneNum, setPhoneNum] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const text = `Hi Subday Pizza!\nName: ${name}\nPhone: ${phoneNum}\nSubject: ${subject}\nMessage: ${msg}`;
		window.open(waLink(text), "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-[#121618] text-white min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			eyebrow: "Get In Touch",
			title: "Contact Us",
			bgImage: "/images/bg_2.jpg",
			children: "We'd love to hear from you. Stop by, give us a call, or send us a WhatsApp message."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-white",
								children: "Address"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-white/60",
								children: "Sector 4, Gurugram, Haryana - 122006"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-white",
								children: "Phone"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: telHref,
								className: "mt-1 text-xs text-white/60 hover:text-[#fac564] block",
								children: site.phone
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-5 text-[#25d366]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-white",
								children: "WhatsApp"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: waLink("Hi Subday Pizza!"),
								target: "_blank",
								rel: "noreferrer",
								className: "mt-1 text-xs text-white/60 hover:text-[#25d366] block",
								children: "Direct Chat Active"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-white",
								children: "Hours"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-white/60",
								children: "Everyday: 11:00 AM – 11:00 PM"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid lg:grid-cols-2 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-8 sm:p-10 rounded-xl bg-[#15191b] border border-white/10 shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-cursive text-xl text-[#fac564]",
							children: "Leave A Note"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-2xl font-bold uppercase tracking-wider text-white mt-1 mb-6",
							children: "Send Us A Message"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: handleSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										required: true,
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Your Name",
										className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 19
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "tel",
										required: true,
										value: phoneNum,
										onChange: (e) => setPhoneNum(e.target.value),
										placeholder: "Phone Number",
										className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 19
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 90,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									required: true,
									value: subject,
									onChange: (e) => setSubject(e.target.value),
									placeholder: "Subject (Party booking, Home delivery, Feedback)",
									className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
									rows: 5,
									required: true,
									value: msg,
									onChange: (e) => setMsg(e.target.value),
									placeholder: "How can we help you?",
									className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none resize-none"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									variant: "hero",
									size: "lg",
									className: "w-full py-3.5 text-xs uppercase font-bold tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4 mr-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 17
									}, this), " Send To Restaurant On WhatsApp"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative overflow-hidden rounded-xl border border-white/10 bg-[#15191b] p-8 text-center space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-16 mx-auto place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-2xl font-bold uppercase tracking-wider text-white",
								children: "Find Us on Google Maps"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-white/70 max-w-md mx-auto leading-relaxed",
								children: "Located conveniently in Sector 4, Gurugram. Ample parking space available for dine-in and takeout customers."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outlineWhite",
									size: "lg",
									className: "px-8 text-xs uppercase font-bold tracking-widest",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: site.mapsUrl,
										target: "_blank",
										rel: "noreferrer",
										children: "Launch Navigation"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative aspect-video overflow-hidden rounded-xl border border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/images/bg_4.jpg",
							alt: "Restaurant Location Ambience",
							className: "size-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute inset-0 bg-black/40 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-lg uppercase font-bold tracking-widest bg-black/80 px-6 py-2.5 border border-[#fac564] text-[#fac564]",
								children: "Sector 4, Gurugram"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactPage as component };
