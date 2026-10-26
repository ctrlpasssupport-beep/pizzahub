import { n as __exportAll } from "../_runtime.mjs";
import { a as signOut, i as signInWithPopup, r as onAuthStateChanged } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { i as doc, o as serverTimestamp, r as setDoc, t as getDoc } from "../_libs/@firebase/firestore+[...].mjs";
import { a as googleProvider, n as auth, r as db, t as __exportAll$1 } from "./firebase-DEKQCEUL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DMEI-xnC.js
var auth_DMEI_xnC_exports = /* @__PURE__ */ __exportAll({
	n: () => signOutUser,
	r: () => subscribeToAuth,
	t: () => auth_exports
});
var auth_exports = /* @__PURE__ */ __exportAll$1({
	signInWithGoogle: () => signInWithGoogle,
	signOutUser: () => signOutUser,
	subscribeToAuth: () => subscribeToAuth
});
async function signInWithGoogle() {
	const user = (await signInWithPopup(auth, googleProvider)).user;
	try {
		const userRef = doc(db, "users", user.uid);
		if (!(await getDoc(userRef)).exists()) await setDoc(userRef, {
			uid: user.uid,
			email: user.email ?? "",
			displayName: user.displayName ?? "",
			photoURL: user.photoURL ?? "",
			createdAt: serverTimestamp()
		});
	} catch (err) {
		console.warn("[Auth] Could not sync user profile to Firestore:", err);
	}
	return user;
}
async function signOutUser() {
	await signOut(auth);
}
function subscribeToAuth(callback) {
	return onAuthStateChanged(auth, callback);
}
//#endregion
export { signOutUser as n, subscribeToAuth as r, auth_DMEI_xnC_exports as t };
