import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-CL4HyOxj.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/PageHeader.tsx";
function PageHeader({ eyebrow, title, children, bgImage = "/images/bg_3.jpg" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative overflow-hidden py-24 sm:py-32 bg-[#121618] border-b border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
				style: { backgroundImage: `url('${bgImage}')` }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-[2px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto max-w-5xl px-4 text-center",
				children: [
					eyebrow && /* @__PURE__ */ (void 0)("p", {
						className: "font-cursive text-2xl sm:text-3xl text-[#fac564] mb-2 tracking-wide",
						children: eyebrow
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-4xl sm:text-6xl font-bold uppercase tracking-widest text-white",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "hover:text-[#fac564] transition-colors",
								children: "Home"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[#fac564]",
								children: title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this),
					children && /* @__PURE__ */ (void 0)("div", {
						className: "mx-auto mt-6 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed",
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
//#endregion
export { PageHeader as t };
