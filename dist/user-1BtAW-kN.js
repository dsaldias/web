import { useMutation, useQuery } from "@vue/apollo-composable";
import { parse } from "graphql";
import { defineStore } from "pinia";
import { Fragment, computed, createApp, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, h, openBlock, ref, renderList, toDisplayString, unref, vShow, watch, withCtx, withDirectives } from "vue";
import Quasar from "quasar/src/vue-plugin.js";
import QSpace from "quasar/src/components/space/QSpace.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
import QInput from "quasar/src/components/input/QInput.js";
import QIcon from "quasar/src/components/icon/QIcon.js";
import QCheckbox from "quasar/src/components/checkbox/QCheckbox.js";
import QCard from "quasar/src/components/card/QCard.js";
import QDialog from "quasar/src/components/dialog/QDialog.js";
import graphqlQueryCompress from "graphql-query-compress";
import QAvatar from "quasar/src/components/avatar/QAvatar.js";
import QSeparator from "quasar/src/components/separator/QSeparator.js";
import QCardActions from "quasar/src/components/card/QCardActions.js";
//#region \0rolldown/runtime.js
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
//#endregion
//#region src/stores/auth/notifyBridge.ts
var _notify = null;
var setNotifyBridge = (fn) => {
	_notify = fn;
};
var notifyCreate = (opts) => {
	_notify?.(opts);
};
//#endregion
//#region src/stores/auth/utils.ts
var defectoOps$1 = { showNotyError: true };
function parseErrors(lista) {
	mostrarNotifyError(lista.map((m) => m.message));
}
function mostrarNotifyError(mensaje, sleep = 3e3) {
	notifyCreate({
		type: "negative",
		textColor: "white",
		icon: "warning",
		message: mensaje || "",
		timeout: sleep
	});
}
function toast1(mensaje) {
	notifyCreate({
		type: "positive",
		textColor: "white",
		icon: "check",
		message: mensaje || ""
	});
}
var parseTextError = (t) => {
	if (t == "Failed to fetch") {
		t = "Sistema en mantenimiento";
		mostrarNotifyError(t, 1400);
	} else mostrarNotifyError(t, 800);
};
var parseTextErrorWs = (t) => {
	if (t == "Socket closed") {
		t = "conexion perdida";
		mostrarNotifyError(t, 800);
	} else mostrarNotifyError(t, 800);
};
function parseFecha(f, hours = true) {
	if (!f) return "";
	const d = new Date(f);
	const dia = d.getDate().toString().padStart(2, "0");
	const mes = (d.getMonth() + 1).toString().padStart(2, "0");
	const anio = d.getFullYear();
	const hora = d.getHours().toString().padStart(2, "0");
	const minutos = d.getMinutes().toString().padStart(2, "0");
	const fecha = `${dia}/${mes}/${anio}`;
	const tiempo = `${hora}:${minutos}`;
	return hours ? `${fecha} ${tiempo}` : fecha;
}
var ajustarFechaUTC = (date, offset) => {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(date.getHours() + offset * -1).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}Z`;
};
var ajustarFechaLocal = (date) => {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
};
var toHomePath = () => {
	const show_landing = process.env.SHOW_LANDING_PAGE;
	const store = useLoginStore();
	let r = "/";
	if (show_landing) if (store.dataUser.usuario) r = "/";
	else r = "/principal.html";
	return r;
};
var chartAreaBorder = {
	id: "chartAreaBorder",
	beforeDraw(chart, args, options) {
		const { ctx, chartArea: { left, top, width, height } } = chart;
		ctx.save();
		ctx.strokeStyle = "#b5d2d5";
		ctx.lineWidth = options.borderWidth;
		ctx.setLineDash(options.borderDash || []);
		ctx.lineDashOffset = options.borderDashOffset;
		ctx.strokeRect(left, top, width, height);
		ctx.restore();
	}
};
//#endregion
//#region src/config.ts
var _config = null;
function setConfig(config) {
	_config = config;
}
function getConfig() {
	if (!_config) throw new Error("[dsaldias/auth-web] Plugin no inicializado. Llama app.use(AuthPlugin, config) en tu boot file.");
	return _config;
}
//#endregion
//#region src/stores/auth/cifrado.ts
function uint8ArrayToBase64String(uint8Array) {
	return btoa(String.fromCharCode.apply(null, uint8Array));
}
function base64StringToUint8Array(base64String) {
	const binaryString = atob(base64String);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
	return bytes;
}
var encriptarString = async (textoPlano) => {
	const claveBase64 = getConfig().decodePassKey;
	try {
		const claveBytes = base64StringToUint8Array(claveBase64);
		const clave = await crypto.subtle.importKey("raw", claveBytes, {
			name: "AES-CBC",
			length: 256
		}, false, ["encrypt", "decrypt"]);
		const iv = crypto.getRandomValues(new Uint8Array(16));
		const textoPlanoBytes = new TextEncoder().encode(textoPlano);
		const textoCifradoBuffer = await crypto.subtle.encrypt({
			name: "AES-CBC",
			iv
		}, clave, textoPlanoBytes);
		return {
			textoCifradoBase64: uint8ArrayToBase64String(new Uint8Array(textoCifradoBuffer)),
			ivBase64: uint8ArrayToBase64String(iv)
		};
	} catch (error) {
		console.error("Error al encriptar:", error);
		return null;
	}
};
//#endregion
//#region src/stores/auth/services/loginService.ts
var LoginService = class {
	async login(input) {
		const pw = await encriptarString(input.password);
		input.password = pw.textoCifradoBase64;
		input.iv64 = pw.ivBase64;
		return await mutar(`
      mutation login($input: NewLogin!) {
        login(input: $input) {
          session_time
          session_key
          me {
            usuario {
              id
              nombres
              apellido1
              apellido2
              documento
              celular
              correo
              sexo
              direccion
              username
              estado
              foto_url
              last_login
              oauth_id
              oauth_id
              conexiones
            }
            menus {
              id
              label
              path
              icon
              color
              grupo
              orden
              padre_id
            }
            roles {
              rol {
                id
                nombre
                jerarquia
              }
              unidad {
                id
                nombre
              }
            }
            permisos_sueltos {
              metodo
              nombre
            }
          }
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async createOauth(input) {
		return await mutar(`
      mutation createOauth($input: NewUsuarioOauth!) {
        createOauth(input: $input) {
          id
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/menus.ts
var cargarMenus = (menus = []) => {
	const map = {};
	menus.forEach((m) => map[m.id] = {
		...m,
		children: []
	});
	menus.forEach((m) => {
		if (m.padre_id && map[m.padre_id]) map[m.padre_id].children.push(map[m.id]);
	});
	return menus.filter((m) => !m.padre_id).map((m) => map[m.id]).reduce((grupos, item) => {
		const existing = grupos.find((g) => g.some((o) => o.grupo === item.grupo));
		if (existing) existing.push(item);
		else grupos.push([item]);
		return grupos;
	}, []);
};
//#endregion
//#region src/components/auth/login/re-login.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "q-pa-md" };
var _hoisted_2$1 = { class: "row" };
var _hoisted_3 = { class: "col-xs-12 col-sm-4" };
var _hoisted_4 = {
	key: 0,
	class: "col-xs-12 col-sm-8 text-right"
};
//#endregion
//#region src/components/auth/login/re-login.vue
var re_login_default = /* @__PURE__ */ defineComponent({
	__name: "re-login",
	setup(__props, { expose: __expose }) {
		const dialog = ref(false);
		const loading = ref(false);
		const service = new LoginService();
		const pwd = ref("password");
		const accept_oauth = ref(process.env.ACCEPT_OAUTH);
		const username = ref("");
		const clave = ref("");
		const refresh = ref(true);
		const store = useLoginStore();
		let resolvePromise;
		const open = () => {
			dialog.value = true;
			username.value = store.dataUser.usuario.username;
			return new Promise((resolve) => {
				resolvePromise = resolve;
			});
		};
		const googleLogin = async () => {
			loading.value = true;
			const { loginGoogle } = await import("./firebaseauth-C2TeXFry.js");
			const d = await loginGoogle();
			if (d && d.user) {
				const res = await service.createOauth(d.user);
				if (res && res.createOauth) await onSubmit(d.user.username, d.user.password);
			} else mostrarNotifyError(d.err);
			loading.value = false;
		};
		const onSubmit = async (u = null, p = null) => {
			username.value = store.dataUser.usuario.username;
			loading.value = true;
			let user = username.value;
			let pass = clave.value;
			if (u) user = u;
			if (p) pass = p;
			const lo = {
				username: user,
				password: pass
			};
			const res = await service.login(lo);
			loading.value = false;
			if (res.login) {
				const l = res.login;
				console.log("///", l);
				const menuItemsAgrupados = cargarMenus(l.me.menus);
				store.setSessionKey(l.session_key, refresh.value);
				store.setNewSessionTime(l.session_time);
				store.setMenus(menuItemsAgrupados);
				store.setUser(l.me);
				resolvePromise(true);
				dialog.value = false;
			}
		};
		const changePWD = () => pwd.value == "text" ? pwd.value = "password" : pwd.value = "text";
		const handleCancel = () => {
			resolvePromise(false);
			store.clearStore(true);
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(QDialog, {
				modelValue: dialog.value,
				"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialog.value = $event),
				persistent: ""
			}, {
				default: withCtx(() => [createVNode(QCard, null, {
					default: withCtx(() => [createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
						default: withCtx(() => [
							_cache[7] || (_cache[7] = createElementVNode("div", { class: "text-h6" }, "Tu sesión ha expirado", -1)),
							createVNode(QSpace),
							createVNode(QBtn, {
								icon: "close",
								flat: "",
								round: "",
								dense: "",
								onClick: handleCancel
							})
						]),
						_: 1
					}), createVNode(QCardSection, { class: "q-pt-xs" }, {
						default: withCtx(() => [
							_cache[9] || (_cache[9] = createElementVNode("p", { class: "q-my-none text-grey" }, "Tu acceso ha caducado", -1)),
							_cache[10] || (_cache[10] = createElementVNode("p", { class: "q-mt-none q-pb-md text-grey" }, "pero no te preocupes, ¡es fácil retomarlo!!!", -1)),
							withDirectives(createVNode(QInput, {
								modelValue: username.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => username.value = $event),
								modelModifiers: { trim: true },
								dense: ""
							}, null, 8, ["modelValue"]), [[vShow, false]]),
							createVNode(QInput, {
								outlined: "",
								square: "",
								class: "q-pb-xs",
								type: pwd.value,
								modelValue: clave.value,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => clave.value = $event),
								modelModifiers: { trim: true },
								label: "Clave de acceso",
								"lazy-rules": "",
								dense: "",
								color: _ctx.$q.dark.isActive ? "orange" : "primary",
								rules: [(val) => val && val.length > 0 || "dato obligatorio"]
							}, {
								prepend: withCtx(() => [createVNode(QIcon, { name: "key" })]),
								append: withCtx(() => [createVNode(QBtn, {
									flat: "",
									dense: "",
									size: "small",
									onClick: _cache[1] || (_cache[1] = ($event) => changePWD())
								}, {
									default: withCtx(() => [createVNode(QIcon, { name: "visibility" })]),
									_: 1
								})]),
								_: 1
							}, 8, [
								"type",
								"modelValue",
								"color",
								"rules"
							]),
							createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3, [createVNode(QCheckbox, {
								modelValue: refresh.value,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => refresh.value = $event),
								class: "text-grey",
								label: "recargar",
								color: "green",
								"checked-icon": "task_alt",
								"unchecked-icon": "highlight_off",
								dense: "",
								size: "xs"
							}, null, 8, ["modelValue"])]), accept_oauth.value ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(QBtn, {
								flat: "",
								class: "q-mt-none q-pr-xs",
								size: "sm",
								color: "grey",
								loading: loading.value,
								onClick: _cache[4] || (_cache[4] = ($event) => googleLogin())
							}, {
								default: withCtx(() => [createVNode(QIcon, {
									name: "hive",
									size: "xs",
									left: ""
								}), _cache[8] || (_cache[8] = createTextVNode(" Acceder con Google ", -1))]),
								_: 1
							}, 8, ["loading"])])) : createCommentVNode("", true)]),
							createVNode(QBtn, {
								disable: loading.value,
								icon: "person",
								label: "Ingresar",
								color: "green",
								class: "full-width q-mt-lg",
								outline: "",
								square: "",
								onClick: _cache[5] || (_cache[5] = ($event) => onSubmit())
							}, null, 8, ["disable"])
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"])]);
		};
	}
});
//#endregion
//#region src/stores/auth/relogin.ts
var opened$1 = false;
var mostrarRelogin = async () => {
	if (opened$1) return;
	opened$1 = true;
	const container = document.createElement("div");
	container.id = "relogin";
	const app = createApp({ render() {
		return h(re_login_default, { ref: "reloginComponent" });
	} });
	app.use(Quasar, {
		config: {},
		plugins: {}
	});
	const d = app.mount(container).$refs.reloginComponent;
	if (d) await d.open();
	container.remove();
	app.unmount();
	opened$1 = false;
};
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
	extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
		d.__proto__ = b;
	} || function(d, b) {
		for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	};
	return extendStatics(d, b);
};
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
//#endregion
//#region node_modules/graphql-tag/lib/index.js
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
	return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
	return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
	var seenKeys = /* @__PURE__ */ new Set();
	var definitions = [];
	ast.definitions.forEach(function(fragmentDefinition) {
		if (fragmentDefinition.kind === "FragmentDefinition") {
			var fragmentName = fragmentDefinition.name.value;
			var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
			var sourceKeySet = fragmentSourceMap.get(fragmentName);
			if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
				if (printFragmentWarnings) console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
			} else if (!sourceKeySet) fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
			sourceKeySet.add(sourceKey);
			if (!seenKeys.has(sourceKey)) {
				seenKeys.add(sourceKey);
				definitions.push(fragmentDefinition);
			}
		} else definitions.push(fragmentDefinition);
	});
	return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
	var workSet = new Set(doc.definitions);
	workSet.forEach(function(node) {
		if (node.loc) delete node.loc;
		Object.keys(node).forEach(function(key) {
			var value = node[key];
			if (value && typeof value === "object") workSet.add(value);
		});
	});
	var loc = doc.loc;
	if (loc) {
		delete loc.startToken;
		delete loc.endToken;
	}
	return doc;
}
function parseDocument(source) {
	var cacheKey = normalize(source);
	if (!docCache.has(cacheKey)) {
		var parsed = parse(source, {
			experimentalFragmentVariables,
			allowLegacyFragmentVariables: experimentalFragmentVariables
		});
		if (!parsed || parsed.kind !== "Document") throw new Error("Not a valid GraphQL document.");
		docCache.set(cacheKey, stripLoc(processFragments(parsed)));
	}
	return docCache.get(cacheKey);
}
function gql(literals) {
	var args = [];
	for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
	if (typeof literals === "string") literals = [literals];
	var result = literals[0];
	args.forEach(function(arg, i) {
		if (arg && arg.kind === "Document") result += arg.loc.source.body;
		else result += arg;
		result += literals[i + 1];
	});
	return parseDocument(result);
}
function resetCaches() {
	docCache.clear();
	fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
	printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
	experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
	experimentalFragmentVariables = false;
}
var extras = {
	gql,
	resetCaches,
	disableFragmentWarnings,
	enableExperimentalFragmentVariables,
	disableExperimentalFragmentVariables
};
(function(gql_1) {
	gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var lib_default = gql;
//#endregion
//#region src/stores/auth/server.ts
var defectoOps = { showNotyError: true };
function mutar(sql, variables = {}, opciones = defectoOps) {
	return new Promise((resolve, reject) => {
		sql = lib_default(graphqlQueryCompress(sql));
		const { mutate: envio, onDone, error } = useMutation(sql, { variables: { ...variables } });
		let settled = false;
		const cleanup = () => {
			stopError();
		};
		const finishResolve = (value) => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve(value);
		};
		const finishReject = (value) => {
			if (settled) return;
			settled = true;
			cleanup();
			reject(value);
		};
		const stopError = watch(error, () => {
			verificar_exp(error);
			finishReject(error.value);
			if (opciones.showNotyError) parseTextError(error.value?.message);
		});
		onDone((res) => {
			if (res.errors) {
				if (opciones.showNotyError) parseErrors(res.errors);
				finishReject(res.errors);
			} else finishResolve(res.data);
		});
		envio();
	});
}
function query(sql, variables = {}, opciones = defectoOps) {
	return new Promise((resolve, reject) => {
		sql = lib_default(graphqlQueryCompress(sql));
		const { error, result, stop } = useQuery(sql, variables, { fetchPolicy: "no-cache" });
		let settled = false;
		const cleanup = () => {
			stopError();
			stopResult();
			stop?.();
		};
		const finishResolve = (value) => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve(value);
		};
		const finishReject = (value) => {
			if (settled) return;
			settled = true;
			cleanup();
			reject(value);
		};
		const stopError = watch(error, () => {
			verificar_exp(error);
			finishReject(error.value);
			if (opciones.showNotyError) parseTextError(error.value?.message);
		});
		const stopResult = watch(result, () => {
			finishResolve(result.value);
		});
	});
}
var verificar_exp = (error) => {
	const s = (error.value?.message + "").includes("Su sessión expiró hace");
	const t = (error.value?.message + "").includes("proporcione un token");
	if (s || t) mostrarRelogin();
};
//#endregion
//#region src/stores/auth/services/notisService.ts
var NotisService = class {
	async notificaciones() {
		return await query(`
      query notificaciones{
        notificaciones{id mensaje creado_por_id desde hasta fecha_registro}
      }
    `, {}).then((d) => d).catch((e) => e);
	}
	async crear_notificacion(input) {
		return await mutar(`
      mutation crear_notificacion($input:NewNotificacion!){
        crear_notificacion(input:$input){id mensaje}
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async update_notificacion(input) {
		return await mutar(`
      mutation update_notificacion($input:UpdNotificacion!){
        update_notificacion(input:$input){id mensaje}
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/components/auth/avisos/avisos_show.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "neon-subtitle" };
var _hoisted_2 = ["innerHTML"];
//#endregion
//#region src/components/auth/avisos/avisos_show.vue
var avisos_show_default = /* @__PURE__ */ defineComponent({
	__name: "avisos_show",
	setup(__props, { expose: __expose }) {
		const alert = ref(false);
		const notis = ref([]);
		let resolvePromise;
		const open = (xnotis) => {
			notis.value = xnotis;
			alert.value = true;
			return new Promise((resolve) => {
				resolvePromise = resolve;
			});
		};
		const handleCancel = () => {
			alert.value = false;
			resolvePromise(false);
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, {
					class: "neon-card neon-card--gold",
					style: { "min-width": "500px" }
				}, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								createVNode(QAvatar, { size: "26px" }, {
									default: withCtx(() => [..._cache[2] || (_cache[2] = [createElementVNode("img", { src: "https://cdn-icons-png.flaticon.com/512/559/559384.png" }, null, -1)])]),
									_: 1
								}),
								_cache[3] || (_cache[3] = createElementVNode("div", { class: "q-ml-sm text-h6 neon-logo" }, "AVISOS Y NOTIFICACIONES DEL SISTEMA:", -1)),
								createVNode(QSpace)
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, {
								size: "xs",
								class: "q-py-none"
							}), createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(notis.value, (a, i) => {
								return openBlock(), createElementBlock("li", { key: i }, [createElementVNode("div", _hoisted_1, [createElementVNode("small", null, [createElementVNode("i", null, " este mensaje se muestra desde el " + toDisplayString(unref(parseFecha)(a.desde)) + " hasta el " + toDisplayString(unref(parseFecha)(a.hasta)), 1)])]), createElementVNode("span", { innerHTML: a.mensaje }, null, 8, _hoisted_2)]);
							}), 128))])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "center" }, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								label: "aceptar",
								square: "",
								icon: "check",
								color: "positive",
								onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
							})]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region src/stores/auth/avisos/avisos.ts
var opened = false;
var mostrarAviso = async (xnotis) => {
	if (opened) return;
	opened = true;
	const container = document.createElement("div");
	container.id = "aviso";
	const app = createApp({ render() {
		return h(avisos_show_default, { ref: "avisoComponent" });
	} });
	app.use(Quasar, {
		config: {},
		plugins: {}
	});
	const d = app.mount(container).$refs.avisoComponent;
	if (d) await d.open(xnotis);
	container.remove();
	app.unmount();
	opened = false;
};
//#endregion
//#region src/stores/auth/event_bus.ts
var EventBus = class extends EventTarget {
	emit(eventName, data) {
		this.dispatchEvent(new CustomEvent(eventName, { detail: data }));
	}
	on(eventName, callback) {
		this.addEventListener(eventName, callback);
	}
	off(eventName, callback) {
		this.removeEventListener(eventName, callback);
	}
};
var eventBus = new EventBus();
//#endregion
//#region src/stores/auth/user.ts
var user_exports = /* @__PURE__ */ __exportAll({ useLoginStore: () => useLoginStore });
var xsesionkey_name = process.env.XSESIONKEY_NAME || "";
var xsesion_time = process.env.XSESION_TIME || "";
var xsesion_label = process.env.XSESION_LABEL || "";
var xdatauser_name = process.env.XDATAUSER_NAME || "";
var xmenus_name = process.env.XMENUS_NAME || "";
var xdatauser_rolunidad = process.env.XDATAUSER_ROLUNIDAD || "";
var xthema_cuaderno = process.env.XTHEMA_CUADERNO || "";
var xlast_dark_state = process.env.LAST_DARK_STATE || "";
var notisService = new NotisService();
var get_storage_name_plain = (clave) => {
	const r = localStorage.getItem(clave);
	if (r) return atob(r);
	return null;
};
var get_storage_name_number = (clave) => {
	const r = localStorage.getItem(clave);
	if (r) return parseInt(r);
	return 0;
};
var get_storage_name_bool = (clave) => {
	const r = localStorage.getItem(clave);
	let res = false;
	if (r) res = r == "true";
	return res;
};
var get_storage_name = (clave, defecto = "") => {
	const r = localStorage.getItem(clave);
	if (r) return JSON.parse(atob(r));
	return defecto;
};
var notis = async () => {
	const r = await notisService.notificaciones();
	if (r && r.notificaciones && r.notificaciones.length > 0) mostrarAviso(r.notificaciones);
};
var useLoginStore = defineStore("userstore", {
	state: () => ({
		sessionkey: ref(get_storage_name_plain(xsesionkey_name)),
		sessiontime: ref(get_storage_name_number(xsesion_time)),
		dataUser: ref(get_storage_name(xdatauser_name, "{}")),
		rolUnidad: ref(get_storage_name(xdatauser_rolunidad, "{}")),
		menus: ref(get_storage_name(xmenus_name, "[]")),
		tiempoSession: ref(get_storage_name_plain(xsesion_label)),
		ws_noti_status: ref(""),
		ws_total_conectados: ref(""),
		ws_conectados: ref(""),
		loading_menus: ref(false),
		notify_data: {},
		thema_cuaderno: ref(get_storage_name_bool(xthema_cuaderno)),
		last_dark_state: ref(get_storage_name_bool(xlast_dark_state))
	}),
	getters: {
		getSessionKey: (state) => computed(() => state.sessionkey),
		getSessionTime: (state) => computed(() => state.sessiontime),
		getDataUser: (state) => computed(() => state.dataUser),
		getMenus: (state) => computed(() => state.menus),
		getTiempoSession: (state) => computed(() => state.tiempoSession),
		getWsNoti: (state) => computed(() => state.ws_noti_status),
		getWsTotalContectados: (state) => computed(() => state.ws_total_conectados),
		getWsContectados: (state) => computed(() => state.ws_conectados),
		getNotifyData: (state) => computed(() => state.notify_data),
		getThemaCuaderno: (state) => computed(() => state.thema_cuaderno),
		getLastDarkstate: (state) => computed(() => state.last_dark_state)
	},
	actions: {
		setSessionKey(xskey, recreate = true) {
			this.sessionkey = null;
			if (!xskey) this.clearStore(true);
			else this.setNewSessionKey(xskey);
			if (recreate) this.dataUser = {};
		},
		setNewSessionKey(xskey) {
			localStorage.setItem(xsesionkey_name, btoa(xskey));
			this.sessionkey = xskey;
		},
		setNewSessionTime(xskey) {
			localStorage.setItem(xsesion_time, xskey + "");
			this.sessiontime = xskey;
			const now = /* @__PURE__ */ new Date();
			now.setMinutes(now.getMinutes() + xskey);
			const tiempo_end = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
			this.tiempoSession = tiempo_end;
			localStorage.setItem(xsesion_label, btoa(tiempo_end));
		},
		setUser(user) {
			localStorage.setItem(xdatauser_name, btoa(JSON.stringify(user)));
			this.dataUser = user;
		},
		setMenus(menus) {
			localStorage.setItem(xmenus_name, btoa(JSON.stringify(menus)));
			this.menus = menus;
		},
		setLoadingMenus(f) {
			this.loading_menus = f;
		},
		setWsNoti(e) {
			this.ws_noti_status = e;
			if (e == "connected") notis();
		},
		setWsTotalConectados(e) {
			this.ws_total_conectados = e;
		},
		setWsConectados(e) {
			this.ws_conectados = e;
		},
		setRolUnidad(rolunidad) {
			localStorage.setItem(xdatauser_rolunidad, btoa(JSON.stringify(rolunidad)));
			this.rolUnidad = rolunidad;
		},
		setNotifyData(data) {
			this.notify_data = data;
		},
		setThemaCuaderno(xskey) {
			localStorage.setItem(xthema_cuaderno, xskey + "");
			let metaThemeColor = document.querySelector(".grid-themex");
			if (!metaThemeColor) metaThemeColor = document.querySelector(".grid-theme");
			if (metaThemeColor) if (metaThemeColor.classList.contains("grid-themex")) {
				metaThemeColor.classList.remove("grid-themex");
				metaThemeColor.classList.add("grid-theme");
			} else {
				metaThemeColor.classList.add("grid-themex");
				metaThemeColor.classList.remove("grid-theme");
			}
		},
		setLastDarkstate(xskey) {
			localStorage.setItem(xlast_dark_state, xskey + "");
			this.last_dark_state = xskey;
		},
		clearStore(reload = true) {
			localStorage.removeItem(process.env.COOKIE_THEME_NAME + "");
			localStorage.removeItem(process.env.XDATAUSER_ROLUNIDAD + "");
			localStorage.removeItem(process.env.XSESION_TIME + "");
			localStorage.removeItem(process.env.XSESIONKEY_NAME + "");
			localStorage.removeItem(process.env.XSESION_LABEL + "");
			localStorage.removeItem(process.env.XDATAUSER_NAME + "");
			localStorage.removeItem(process.env.XMENUS_NAME + "");
			localStorage.removeItem(process.env.XTHEMA_CUADERNO + "");
			localStorage.removeItem(process.env.X_CLIMA + "");
			eventBus.emit("on_logout", { reload });
			if (reload) window.location.reload();
		}
	}
});
//#endregion
export { toHomePath as A, chartAreaBorder as C, parseFecha as D, parseErrors as E, notifyCreate as M, setNotifyBridge as N, parseTextError as O, ajustarFechaUTC as S, mostrarNotifyError as T, cargarMenus as _, avisos_show_default as a, setConfig as b, mutar as c, __extends as d, __read as f, re_login_default as g, mostrarRelogin as h, mostrarAviso as i, toast1 as j, parseTextErrorWs as k, query as l, __values as m, user_exports as n, NotisService as o, __spreadArray as p, eventBus as r, defectoOps as s, useLoginStore as t, lib_default as u, LoginService as v, defectoOps$1 as w, ajustarFechaLocal as x, encriptarString as y };
