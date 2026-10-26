import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as cn, t as Button } from "./button-D4FjqpGK.mjs";
import { U as isRedirect, b as useNavigate, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Mail, p as Minus } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-91i0mGvG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Ceh2Yi0K.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as Nt, t as $t } from "../_libs/input-otp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-2Mx141Qp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/input-otp.tsx";
var InputOTP = import_react.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($t, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 11,
	columnNumber: 3
}, void 0));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = import_react.useContext(Nt).slots[index] ?? {};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (void 0)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (void 0)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 11
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 51,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 40,
		columnNumber: 5
	}, void 0);
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 65,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 64,
	columnNumber: 3
}, void 0));
InputOTPSeparator.displayName = "InputOTPSeparator";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var emailSchema = objectType({ email: stringType().trim().toLowerCase().email().max(255) });
var sendLoginCode = createServerFn({ method: "POST" }).inputValidator((d) => emailSchema.parse(d)).handler(createSsrRpc("fc9cd6781336c6c219315543938fa409c79c3d30c6a0e332dff1bd6e0e3ad934"));
var verifyLoginCode = createServerFn({ method: "POST" }).inputValidator((d) => emailSchema.extend({ code: stringType().regex(/^\d{6}$/) }).parse(d)).handler(createSsrRpc("b13c8984066633bc5adb7290f4f67a31283729ac6f48c44b1f6455da5eb65c53"));
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const navigate = useNavigate();
	const send = useServerFn(sendLoginCode);
	const verify = useServerFn(verifyLoginCode);
	const [email, setEmail] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("email");
	const [code, setCode] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function google() {
		setBusy(true);
		try {
			const { signInWithGoogle } = await import("./auth-DMEI-xnC.mjs").then((n) => n.t).then((n) => n.t);
			const user = await signInWithGoogle();
			toast.success(`Welcome back, ${user.displayName || user.email}!`);
			navigate({ to: "/account" });
		} catch (err) {
			console.error(err);
			toast.error("Google sign-in was canceled or could not be completed.");
		} finally {
			setBusy(false);
		}
	}
	async function sendCode(e) {
		e.preventDefault();
		setBusy(true);
		const r = await send({ data: { email } }).catch(() => ({
			ok: false,
			error: "Something went wrong."
		}));
		setBusy(false);
		if (!r.ok) {
			toast.error(r.error);
			return;
		}
		toast.success("Code sent — check your inbox.");
		setStep("code");
	}
	async function verifyCode() {
		setBusy(true);
		const r = await verify({ data: {
			email,
			code
		} }).catch(() => ({
			ok: false,
			error: "Something went wrong."
		}));
		if (!r.ok) {
			setBusy(false);
			toast.error(r.error);
			return;
		}
		const { error } = await supabase.auth.verifyOtp({
			token_hash: r.tokenHash,
			type: "magiclink"
		});
		setBusy(false);
		if (error) {
			toast.error("Sign-in failed. Request a new code.");
			return;
		}
		toast.success("Welcome to Subday Pizza!");
		navigate({ to: "/account" });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none",
			style: { backgroundImage: "url('/images/bg_1.jpg')" }
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full max-w-md rounded-xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-14 mx-auto place-items-center rounded-full bg-[#fac564] text-2xl text-[#121618] mb-4 shadow-lg",
							children: "🍕"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-cursive text-xl text-[#fac564]",
							children: "Welcome Back"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-3xl font-bold uppercase tracking-wider text-white mt-1",
							children: [
								"Pizza",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#fac564]",
									children: "Hub"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 18
								}, this),
								" Account"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-xs sm:text-sm text-white/60",
							children: "Sign in with Google to save your delivery addresses and access restaurant administration."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "hero",
					size: "lg",
					className: "mt-8 w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(250,197,100,0.3)]",
					disabled: busy,
					onClick: google,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
						viewBox: "0 0 24 24",
						className: "size-5",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							fill: "currentColor",
							d: "M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 11
					}, this), "Continue with Google"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-white/10" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this),
						" or email code",
						" ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-white/10" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 9
				}, this),
				step === "email" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: sendCode,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "email",
						required: true,
						maxLength: 255,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@example.com",
						className: "w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none rounded",
						"aria-label": "Email"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						variant: "outlineWhite",
						size: "lg",
						className: "w-full py-3 text-xs uppercase font-bold tracking-widest",
						disabled: busy,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4 mr-2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 15
							}, this),
							" ",
							busy ? "Sending…" : "Email me a sign-in code"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 29
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-white/70 text-center",
							children: ["Enter the 6-digit code sent to ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
								className: "text-[#fac564]",
								children: email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 46
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-center py-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTP, {
								maxLength: 6,
								value: code,
								onChange: setCode,
								onComplete: verifyCode,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTPGroup, {
									className: "gap-1.5",
									children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTPSlot, {
										index: i,
										className: "size-11 rounded border-white/20 bg-[#0e1113] text-lg text-white"
									}, i, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 32
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "hero",
							size: "lg",
							className: "w-full py-3 text-xs uppercase font-bold tracking-widest",
							disabled: busy || code.length !== 6,
							onClick: verifyCode,
							children: busy ? "Checking…" : "Sign In"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "text-xs text-white/50 hover:text-[#fac564] underline transition-colors",
								onClick: () => {
									setStep("email");
									setCode("");
								},
								children: "Use a different email"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 21
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 87,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
