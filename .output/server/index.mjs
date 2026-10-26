globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-26T15:21:00.962Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/images/about.jpg": {
		"type": "image/jpeg",
		"etag": "\"23a19-kTxTQZsaCgn5wDm/6Kt1WDdMZP4\"",
		"mtime": "2026-10-26T15:21:00.951Z",
		"size": 145945,
		"path": "../public/images/about.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-26T15:21:00.962Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/images/burger-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b224-4A0vjr1GZDppzen1kCH85whhaI8\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 111140,
		"path": "../public/images/burger-1.jpg"
	},
	"/images/burger-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"254e3-upZ4WrsZ4peos3ymmq8Kl0+gVR0\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 152803,
		"path": "../public/images/burger-3.jpg"
	},
	"/images/drink-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e8b5-qKIDjamA06M8M/yqAlQ+SrSERdY\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 125109,
		"path": "../public/images/drink-1.jpg"
	},
	"/images/bg_4.jpg": {
		"type": "image/jpeg",
		"etag": "\"48bfb-haEbmntD+8kdeq68agVxaAmXBaI\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 297979,
		"path": "../public/images/bg_4.jpg"
	},
	"/images/bg_2.jpg": {
		"type": "image/jpeg",
		"etag": "\"54ffa-GflX2ylELr65Y1MB/QkgQ65cHTc\"",
		"mtime": "2026-10-26T15:21:00.955Z",
		"size": 348154,
		"path": "../public/images/bg_2.jpg"
	},
	"/images/drink-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"18e1b-AF5HWvs1KAIbKL2taKxeacbEAyw\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 101915,
		"path": "../public/images/drink-4.jpg"
	},
	"/images/drink-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"11728-g+PaFOe4yhwafKN402YAidWb5N8\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 71464,
		"path": "../public/images/drink-5.jpg"
	},
	"/images/drink-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a12c-HE1hBeTJgNuKvLAziQQXxUVOXCc\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 106796,
		"path": "../public/images/drink-2.jpg"
	},
	"/images/drink-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"16127-uE7awQ3evs+nxhq/2wALVKVbcIc\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 90407,
		"path": "../public/images/drink-6.jpg"
	},
	"/images/drink-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bf31-eXP1k+VmaKJkky97I1VnM07GtxM\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 114481,
		"path": "../public/images/drink-3.jpg"
	},
	"/images/drink-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1530a-sfLCall7LPUCvJeQEsGYGh5oW74\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 86794,
		"path": "../public/images/drink-8.jpg"
	},
	"/images/food.png": {
		"type": "image/png",
		"etag": "\"147f-iak0+pGLlsy8fftPkcyiON/8gpE\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 5247,
		"path": "../public/images/food.png"
	},
	"/images/drink-9.jpg": {
		"type": "image/jpeg",
		"etag": "\"21de8-1zM941gbvzkZLhKQIGNg1C+Z8oI\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 138728,
		"path": "../public/images/drink-9.jpg"
	},
	"/images/burger-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2449a-FgZnBDIB+2igXkJmbXl/vmbn1do\"",
		"mtime": "2026-10-26T15:21:00.957Z",
		"size": 148634,
		"path": "../public/images/burger-2.jpg"
	},
	"/images/gallery-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d121-fwqA6x33Nj717gTWeGU2oqiY3PY\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 119073,
		"path": "../public/images/gallery-3.jpg"
	},
	"/images/drink-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"19a3d-2H8SXVFlBZlvpvXoISM24NdjZI4\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 105021,
		"path": "../public/images/drink-7.jpg"
	},
	"/images/gallery-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dd12-pkDsT7DB2ms3/+KlhqOXIMKGXhE\"",
		"mtime": "2026-10-26T15:21:00.963Z",
		"size": 122130,
		"path": "../public/images/gallery-1.jpg"
	},
	"/images/gallery-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a2ca-25Fojjl4CJ167Enaa/msfT1NGk4\"",
		"mtime": "2026-10-26T15:21:00.963Z",
		"size": 107210,
		"path": "../public/images/gallery-2.jpg"
	},
	"/images/bg_1.jpg": {
		"type": "image/jpeg",
		"etag": "\"c20c8-4K/6Zxsa6/ninTFt5M/V1lioNyo\"",
		"mtime": "2026-10-26T15:21:00.953Z",
		"size": 794824,
		"path": "../public/images/bg_1.jpg"
	},
	"/images/bg_2.png": {
		"type": "image/png",
		"etag": "\"15192a-bmdHifZ2E46i+Agd9DrB+NqLjKk\"",
		"mtime": "2026-10-26T15:21:00.955Z",
		"size": 1382698,
		"path": "../public/images/bg_2.png"
	},
	"/images/bg_3.jpg": {
		"type": "image/jpeg",
		"etag": "\"110dd9-fNP4XE/kJN0+qLiu93eAfz9CC1c\"",
		"mtime": "2026-10-26T15:21:00.956Z",
		"size": 1117657,
		"path": "../public/images/bg_3.jpg"
	},
	"/images/gallery-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b798-oG7SRaOJkB9OjaGpEAsnKtg6qAY\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 112536,
		"path": "../public/images/gallery-4.jpg"
	},
	"/images/image_1.jpg": {
		"type": "image/jpeg",
		"etag": "\"117f1-Vde64iYxZ7RQAkUxPG+lvKecpSE\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 71665,
		"path": "../public/images/image_1.jpg"
	},
	"/images/image_2.jpg": {
		"type": "image/jpeg",
		"etag": "\"5710d-GXyS/4dKLulRBjiHC7WjGrqd4qI\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 356621,
		"path": "../public/images/image_2.jpg"
	},
	"/images/image_3.jpg": {
		"type": "image/jpeg",
		"etag": "\"2340b-bkO/I/PeFSpoCouJVa18AzyHJ/8\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 144395,
		"path": "../public/images/image_3.jpg"
	},
	"/images/image_6.jpg": {
		"type": "image/jpeg",
		"etag": "\"23076-JNtibvqmptW5avJbhXqtBmJBvsg\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 143478,
		"path": "../public/images/image_6.jpg"
	},
	"/images/image_5.jpg": {
		"type": "image/jpeg",
		"etag": "\"115af-0lrT/bxlQoC/t+haNJDKJalw3Oc\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 71087,
		"path": "../public/images/image_5.jpg"
	},
	"/images/loc.png": {
		"type": "image/png",
		"etag": "\"7af-M/e+xT1FobwrEQsxDlgI2FPr/xc\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 1967,
		"path": "../public/images/loc.png"
	},
	"/images/person_2.jpg": {
		"type": "image/jpeg",
		"etag": "\"859e-UOOOOICD0hU9Jyc5J25tFFcQyX4\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 34206,
		"path": "../public/images/person_2.jpg"
	},
	"/images/pasta-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"28c87-8Uk1bu2pOpI72bJ8iE3pnPP6VxE\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 167047,
		"path": "../public/images/pasta-1.jpg"
	},
	"/images/person_3.jpg": {
		"type": "image/jpeg",
		"etag": "\"91b4-gE1ymsVp7LrsOQPl/XSW6XHIC2Y\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 37300,
		"path": "../public/images/person_3.jpg"
	},
	"/images/pizza-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d2ca-77dQomlnfAzS/5DeQROxe0FuDnw\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 119498,
		"path": "../public/images/pizza-1.jpg"
	},
	"/images/person_4.jpg": {
		"type": "image/jpeg",
		"etag": "\"74bc-ortZMUF8WLxuN12HlGSSV3lIgqY\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 29884,
		"path": "../public/images/person_4.jpg"
	},
	"/images/pizza-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"3afd6-3RmhJuHl63fJz9cfJz0K3vrysZQ\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 241622,
		"path": "../public/images/pizza-2.jpg"
	},
	"/images/person_1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e3e-J2viBv54XQKHOwGfcYgCXbMMhnM\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 24126,
		"path": "../public/images/person_1.jpg"
	},
	"/images/pizza-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"372ea-0ctN9MbJWNegO6iZLJzLFfv5uv0\"",
		"mtime": "2026-10-26T15:21:00.961Z",
		"size": 226026,
		"path": "../public/images/pizza-3.jpg"
	},
	"/images/pizza-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"29703-obgvBKpGTLKIPhyCpO/OW0xR67E\"",
		"mtime": "2026-10-26T15:21:00.961Z",
		"size": 169731,
		"path": "../public/images/pizza-4.jpg"
	},
	"/images/pasta-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"25726-WtGh1HdeaAQvUAdTP2+HOBv/M6s\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 153382,
		"path": "../public/images/pasta-3.jpg"
	},
	"/images/pizza-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"41019-NAG7F4Aw8icQYNJZg+d+Bn52lYM\"",
		"mtime": "2026-10-26T15:21:00.961Z",
		"size": 266265,
		"path": "../public/images/pizza-5.jpg"
	},
	"/images/pizza-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"26232-ONX/8px3TrCtxcOpO8ty3CMuVos\"",
		"mtime": "2026-10-26T15:21:00.961Z",
		"size": 156210,
		"path": "../public/images/pizza-6.jpg"
	},
	"/images/bg_1.png": {
		"type": "image/png",
		"etag": "\"22523f-BnjqRGIw56fJnRy2SAHVd1eaPDg\"",
		"mtime": "2026-10-26T15:21:00.958Z",
		"size": 2249279,
		"path": "../public/images/bg_1.png"
	},
	"/images/pasta-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"241a7-aUPWMV3YDkQKT0JlgPanLZ7lx9w\"",
		"mtime": "2026-10-26T15:21:00.960Z",
		"size": 147879,
		"path": "../public/images/pasta-2.jpg"
	},
	"/images/image_4.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ddbf-AGPRhkgUxs+VuxToBkdHhuu67c0\"",
		"mtime": "2026-10-26T15:21:00.959Z",
		"size": 187839,
		"path": "../public/images/image_4.jpg"
	},
	"/images/pizza-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"95404-mWL9V41znchb7iXvwykrYIZreyw\"",
		"mtime": "2026-10-26T15:21:00.962Z",
		"size": 611332,
		"path": "../public/images/pizza-7.jpg"
	},
	"/images/pizza-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"7deb4-D8S2+tYE+nL5nKCve3z1zV+Jq4Q\"",
		"mtime": "2026-10-26T15:21:00.962Z",
		"size": 515764,
		"path": "../public/images/pizza-8.jpg"
	},
	"/assets/PageHeader-BWPeqqyO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ce-4u3NVoTJU6tyn1rc5FJz+nYtyOQ\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 1998,
		"path": "../public/assets/PageHeader-BWPeqqyO.js"
	},
	"/assets/about-otQcdtht.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25fc-thUN/gYIX1x5a2/Mx5kHllj+ExQ\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 9724,
		"path": "../public/assets/about-otQcdtht.js"
	},
	"/assets/account-DoTjVfTN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148a-d0GLx/HT8kV6NydwKHFPqi8zBnk\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 5258,
		"path": "../public/assets/account-DoTjVfTN.js"
	},
	"/assets/admin-DbhYBj1A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f5e-qDgEHc7oN+wygN3//nvNXgIN7ng\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 40798,
		"path": "../public/assets/admin-DbhYBj1A.js"
	},
	"/assets/auth-Ds1Uksu0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59ef-dcuHK+EU+thsNc8yiS12BoC0LKM\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 23023,
		"path": "../public/assets/auth-Ds1Uksu0.js"
	},
	"/assets/button-B8gCXSC2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86db-wFkHAshOu39kJWP0JHNIVLvDb2s\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 34523,
		"path": "../public/assets/button-B8gCXSC2.js"
	},
	"/assets/contact-CiXkW8Rm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"270c-7nS+qJiGVTUgoONFiU9xiK9wQRA\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 9996,
		"path": "../public/assets/contact-CiXkW8Rm.js"
	},
	"/assets/client-8eNy1Hkf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34df4-aM2HJ7R7/F5oJQ5r4UubI9wmsoo\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 216564,
		"path": "../public/assets/client-8eNy1Hkf.js"
	},
	"/assets/menu-ChgSPbUF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124a-hiB8tKje6CN9jBPkFfsOoIkAyEA\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 4682,
		"path": "../public/assets/menu-ChgSPbUF.js"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/offers-C0GRJK8m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"340-FfY1YKB0EMJdQBnwzHAZd8D6ReQ\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 832,
		"path": "../public/assets/offers-C0GRJK8m.js"
	},
	"/assets/party-hall-Ltr7-n6F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198e-5l8uP2O4cRm/G6dAc+lCfqmlbBI\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 6542,
		"path": "../public/assets/party-hall-Ltr7-n6F.js"
	},
	"/assets/privacy-CwtSVAl3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-RcSlh+SYPQ0CB1sOoRladsoDMhY\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 1232,
		"path": "../public/assets/privacy-CwtSVAl3.js"
	},
	"/assets/route-NP92u0pa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-k0pZLjj0vrqpS8ZtHD7BgNlXHF0\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 279,
		"path": "../public/assets/route-NP92u0pa.js"
	},
	"/assets/site-CL-4y8gj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-EyJB6a1ilh9YMqWNBoS03GnU3Go\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 567,
		"path": "../public/assets/site-CL-4y8gj.js"
	},
	"/assets/terms-J1j3JL5I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d5-gJFRo3dqVY/lILPRDHAxCJiQUoo\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 1237,
		"path": "../public/assets/terms-J1j3JL5I.js"
	},
	"/assets/tslib.es6-CLTEA28i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"556-qFpO+y3UQkF4rVha8aunP6NcdIM\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 1366,
		"path": "../public/assets/tslib.es6-CLTEA28i.js"
	},
	"/assets/styles-Bf_6ImdO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1af7e-EWzp1Y0mmCaHdbvTpYLbP/MRaqc\"",
		"mtime": "2026-10-26T15:20:59.409Z",
		"size": 110462,
		"path": "../public/assets/styles-Bf_6ImdO.css"
	},
	"/assets/useSelector-Gcup0luv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2269-XUCMjXpROBi50uUc/S9jnSMrsEQ\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 8809,
		"path": "../public/assets/useSelector-Gcup0luv.js"
	},
	"/assets/jsx-dev-runtime-WYi_Fq32.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69d4-sllmpkvQBsb0tAfpnK4TphXEViI\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 27092,
		"path": "../public/assets/jsx-dev-runtime-WYi_Fq32.js"
	},
	"/assets/firebase-By_TITE1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87126-l1blQeFRadilTHGc6CQoPJiG73o\"",
		"mtime": "2026-10-26T15:20:59.408Z",
		"size": 553254,
		"path": "../public/assets/firebase-By_TITE1.js"
	},
	"/assets/index-ep8D5-6i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b557c-C0QHsEWG3eISDtJOew5od7TwotY\"",
		"mtime": "2026-10-26T15:20:59.407Z",
		"size": 742780,
		"path": "../public/assets/index-ep8D5-6i.js"
	},
	"/assets/aistudio/pizza-gh-pages_d672b9a3.zip": {
		"type": "application/zip",
		"etag": "\"cfe204-J4McbuXfdN2wgBwoznZFr4F41jQ\"",
		"mtime": "2026-10-26T15:21:00.967Z",
		"size": 13623812,
		"path": "../public/assets/aistudio/pizza-gh-pages_d672b9a3.zip"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6qWkqV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
