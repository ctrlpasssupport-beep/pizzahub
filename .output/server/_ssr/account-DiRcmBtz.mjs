import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-D4FjqpGK.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Mail, n as User, s as ShieldCheck, v as LogOut } from "../_libs/lucide-react.mjs";
import { n as signOutUser } from "./auth-DMEI-xnC.mjs";
import { t as useSessionUser } from "./use-session-CQGZqmnD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DiRcmBtz.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/account.tsx?tsr-split=component";
function AccountPage() {
	const navigate = useNavigate();
	const user = useSessionUser();
	const isAdmin = user?.email === "ayushsharma80104@gmail.com" || (user?.email?.endsWith("@google.com") ?? false);
	async function handleSignOut() {
		await signOutUser();
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none",
			style: { backgroundImage: "url('/images/bg_4.jpg')" }
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full max-w-md rounded-xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						user?.photoURL ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: user.photoURL,
							alt: user.displayName ?? "User",
							className: "size-20 rounded-full border-2 border-[#fac564] object-cover shadow-lg"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 29
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-16 place-items-center rounded-full bg-[#fac564] text-2xl text-[#121618]",
							children: "🍕"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 174
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-4 font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white",
							children: user?.displayName ? `Hi, ${user.displayName.split(" ")[0]}!` : "My Account"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-white/60",
							children: "Connected with genuine Google Authentication"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 space-y-2.5",
					children: [user?.displayName && /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3 rounded bg-[#0e1113] border border-white/10 px-4 py-3",
						children: [/* @__PURE__ */ (void 0)(User, {
							className: "size-4 text-[#fac564]",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "truncate text-xs font-semibold text-white/90",
							children: user.displayName
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 33
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 rounded bg-[#0e1113] border border-white/10 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
							className: "size-4 text-[#fac564]",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "truncate text-xs font-semibold text-white/90",
							children: user?.email ?? "Signed In"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				isAdmin && /* @__PURE__ */ (void 0)("div", {
					className: "mt-6 rounded-lg border border-[#fac564]/30 bg-[#fac564]/10 p-4",
					children: /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-5 text-[#fac564]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-[#fac564]",
								children: "Administrator"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] text-white/60",
								children: "Live menu, offers, and orders control"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)(Button, {
							variant: "hero",
							size: "sm",
							className: "text-xs uppercase font-bold",
							asChild: true,
							children: /* @__PURE__ */ (void 0)(Link, {
								to: "/admin",
								children: "Admin Panel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 space-y-3 pt-4 border-t border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "hero",
						size: "lg",
						className: "w-full text-xs uppercase font-bold tracking-widest",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/menu",
							children: "Browse The Menu"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outlineWhite",
						size: "lg",
						className: "w-full text-xs uppercase font-bold tracking-widest",
						onClick: handleSignOut,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4 mr-2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 13
						}, this), " Sign Out"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { AccountPage as component };
