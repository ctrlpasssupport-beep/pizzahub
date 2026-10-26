import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client-91i0mGvG.js
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function serverSupabaseUrl(publicUrl, supabaseKey) {
	if (typeof window !== "undefined" || typeof processModule === "undefined") return void 0;
	const serverUrl = processModule.env["SUPABASE_URL"]?.replace(/\/+$/, "");
	if (!serverUrl || serverUrl === publicUrl || processModule.env["SUPABASE_PUBLISHABLE_KEY"] !== supabaseKey) return void 0;
	return serverUrl;
}
function createSupabaseFetch(supabaseUrl, supabaseKey) {
	const publicUrl = supabaseUrl.replace(/\/+$/, "");
	const serverUrl = serverSupabaseUrl(publicUrl, supabaseKey);
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		if (serverUrl) {
			const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
			if (url.startsWith(`${publicUrl}/`)) {
				const target = serverUrl + url.slice(publicUrl.length);
				const request = typeof input === "string" || input instanceof URL ? target : new Request(target, input);
				return fetch(request, {
					...init,
					headers
				});
			}
		}
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_YOMSP-UjKreKZMWRmXooUg_m4XiW4S2",
		"VITE_SUPABASE_URL": "https://dkczkbroqoxlvzmztkni.supabase.co"
	}["VITE_SUPABASE_URL"] || processModule.env["SUPABASE_URL"];
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_YOMSP-UjKreKZMWRmXooUg_m4XiW4S2",
		"VITE_SUPABASE_URL": "https://dkczkbroqoxlvzmztkni.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || processModule.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		console.warn("[AI Studio] Supabase environment variables not configured. Using local fallback.");
		const mockQueryBuilder = {
			select: () => mockQueryBuilder,
			order: () => mockQueryBuilder,
			eq: () => mockQueryBuilder,
			limit: () => mockQueryBuilder,
			single: async () => ({
				data: null,
				error: null
			}),
			then: (resolve) => Promise.resolve({
				data: [],
				error: null
			}).then(resolve),
			insert: async () => ({
				data: null,
				error: null
			}),
			update: async () => ({
				data: null,
				error: null
			}),
			delete: async () => ({
				data: null,
				error: null
			})
		};
		return {
			from: () => mockQueryBuilder,
			rpc: async () => ({
				data: false,
				error: null
			}),
			auth: {
				onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
				getSession: async () => ({
					data: { session: null },
					error: null
				}),
				getUser: async () => ({
					data: { user: null },
					error: null
				}),
				signOut: async () => ({ error: null }),
				signInWithOtp: async () => ({ error: null }),
				verifyOtp: async () => ({ error: null })
			}
		};
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: typeof window !== "undefined" ? window.localStorage : void 0,
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
