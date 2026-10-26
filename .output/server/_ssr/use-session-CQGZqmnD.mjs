import { r as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as auth } from "./firebase-DEKQCEUL.mjs";
import { r as subscribeToAuth } from "./auth-DMEI-xnC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-session-CQGZqmnD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSessionUser() {
	const [user, setUser] = (0, import_react.useState)(() => auth.currentUser);
	(0, import_react.useEffect)(() => {
		const unsubscribe = subscribeToAuth((currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);
	return user;
}
//#endregion
export { useSessionUser as t };
