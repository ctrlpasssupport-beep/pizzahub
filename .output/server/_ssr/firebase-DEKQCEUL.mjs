import { n as __exportAll$1 } from "../_runtime.mjs";
import { o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { n as getAuth, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as getFirestore, i as doc, n as getDocFromServer } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebase-DEKQCEUL.js
var firebase_DEKQCEUL_exports = /* @__PURE__ */ __exportAll$1({
	a: () => __exportAll,
	i: () => googleProvider,
	n: () => db,
	r: () => firebase_exports,
	t: () => auth
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var firebase_applet_config_default = {
	projectId: "jittery-benefit-0bcxw",
	appId: "1:194145111789:web:9384266389d51ede7546e4",
	apiKey: "AIzaSyAAcJs64eD0uKi8xnlwIC2nWVK79wDh_Ww",
	authDomain: "jittery-benefit-0bcxw.firebaseapp.com",
	firestoreDatabaseId: "ai-studio-pizzahub-340dbc1a-0c5c-4bc0-a84a-bb63a8ca17b6",
	storageBucket: "jittery-benefit-0bcxw.firebasestorage.app",
	messagingSenderId: "194145111789",
	measurementId: "",
	oAuthClientId: "194145111789-lulllokdcc857t5bag46e57rs1unmn36.apps.googleusercontent.com",
	recaptchaSiteKey: ""
};
var firebase_exports = /* @__PURE__ */ __exportAll({
	auth: () => auth,
	db: () => db,
	googleProvider: () => googleProvider
});
var app = getApps().length === 0 ? initializeApp(firebase_applet_config_default) : getApps()[0];
var db = getFirestore(app, firebase_applet_config_default.firestoreDatabaseId);
var auth = getAuth(app);
var googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
if (typeof window !== "undefined") getDocFromServer(doc(db, "test", "connection")).catch((error) => {
	if (error instanceof Error && error.message.includes("the client is offline")) console.warn("[Firebase] Offline mode or connection check failed.");
});
//#endregion
export { googleProvider as a, firebase_DEKQCEUL_exports as i, auth as n, db as r, __exportAll as t };
