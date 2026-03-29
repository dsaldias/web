import { T as mostrarNotifyError, _ as cargarMenus, t as useLoginStore, v as LoginService } from "./user-3ifBbU8j.js";
import { Fragment, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, onBeforeMount, onMounted, onUnmounted, openBlock, ref, unref, vShow, withCtx, withDirectives } from "vue";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
import QInput from "quasar/src/components/input/QInput.js";
import QIcon from "quasar/src/components/icon/QIcon.js";
import QCard from "quasar/src/components/card/QCard.js";
import QLinearProgress from "quasar/src/components/linear-progress/QLinearProgress.js";
import QItemSection from "quasar/src/components/item/QItemSection.js";
import QItem from "quasar/src/components/item/QItem.js";
import QList from "quasar/src/components/item/QList.js";
import QMenu from "quasar/src/components/menu/QMenu.js";
import QForm from "quasar/src/components/form/QForm.js";
import useQuasar from "quasar/src/composables/use-quasar/use-quasar.js";
import QImg from "quasar/src/components/img/QImg.js";
import { useRouter } from "vue-router";
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/components/app/ext/logo/app_login_logo.vue
var _sfc_main = {};
var _hoisted_1$1 = { class: "text-center q-pt-none q-pb-sm" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(QImg, {
		src: "wapiton.png",
		alt: "logo",
		style: { "width": "100px" }
	})]);
}
var app_login_logo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/components/auth/login/LoginView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "q-pa-xl column items-center",
	style: {
		"display": "flex",
		"align-items": "center",
		"justify-content": "center",
		"min-height": "100vh"
	}
};
var _hoisted_2 = { class: "column items-center" };
var _hoisted_3 = {
	key: 0,
	class: "row text-right"
};
var _hoisted_4 = { class: "col-12" };
//#endregion
//#region src/components/auth/login/LoginView.vue
var LoginView_default = /* @__PURE__ */ defineComponent({
	__name: "LoginView",
	setup(__props) {
		const username = ref("");
		const clave = ref("");
		const loading = ref(false);
		const showing = ref(false);
		const service = new LoginService();
		const useLogin = useLoginStore();
		const pwd = ref("password");
		const accept_oauth = ref(false);
		const router = useRouter();
		const $q = useQuasar();
		const onSubmit = async (u = null, p = null) => {
			useLogin.clearStore(false);
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
				useLogin.setSessionKey(l.session_key);
				useLogin.setNewSessionTime(l.session_time);
				const menuItemsAgrupados = await cargarMenus(l.me.menus);
				useLogin.setMenus(menuItemsAgrupados);
				useLogin.setUser(l.me);
				setTimeout(() => void reload(), 50);
			}
		};
		const reload = async () => {
			await router.push("/");
			window.location.href = window.location.href.split("?")[0] + "?welcome=" + (/* @__PURE__ */ new Date()).getTime();
		};
		const changePWD = () => pwd.value == "text" ? pwd.value = "password" : pwd.value = "text";
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
		const onReset = () => {
			username.value = null;
			clave.value = null;
		};
		const clearsite = () => {
			localStorage.clear();
			location.reload();
		};
		onBeforeMount(() => {
			$q.dark.set(true);
		});
		onUnmounted(() => {
			const v = useLogin.last_dark_state;
			$q.dark.set(v);
		});
		onMounted(() => {
			useLogin.clearStore(false);
			accept_oauth.value = process.env.ACCEPT_OAUTH;
			setTimeout(() => {
				showing.value = true;
			}, 700);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!showing.value ? (openBlock(), createBlock(QLinearProgress, {
				key: 0,
				dark: "",
				rounded: "",
				indeterminate: "",
				class: "q-mt-xs",
				color: "green",
				size: "xs"
			})) : createCommentVNode("", true), withDirectives(createElementVNode("div", _hoisted_1, [createVNode(QCard, {
				class: "neon-card neon-card--purple",
				square: "",
				flat: "",
				bordered: ""
			}, {
				default: withCtx(() => [createVNode(QCardSection, { class: "text-center q-pb-none" }, {
					default: withCtx(() => [
						_cache[7] || (_cache[7] = createElementVNode("h5", { class: "q-mb-none q-mt-sm neon-logo" }, "Acceder al sistema", -1)),
						createVNode(app_login_logo_default),
						createVNode(QMenu, {
							"touch-position": "",
							"context-menu": ""
						}, {
							default: withCtx(() => [createVNode(QList, {
								dense: "",
								style: { "min-width": "100px" }
							}, {
								default: withCtx(() => [createVNode(QItem, {
									clickable: "",
									onClick: _cache[0] || (_cache[0] = ($event) => clearsite())
								}, {
									default: withCtx(() => [createVNode(QItemSection, null, {
										default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Clear site data", -1)])]),
										_: 1
									})]),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						})
					]),
					_: 1
				}), createVNode(QCardSection, { class: "q-mt-none q-pt-none q-px-xl" }, {
					default: withCtx(() => [createVNode(QForm, {
						onSubmit: _cache[4] || (_cache[4] = ($event) => onSubmit()),
						onReset,
						class: "q-gutter-md"
					}, {
						default: withCtx(() => [
							createVNode(QInput, {
								filled: "",
								modelValue: username.value,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event),
								modelModifiers: { trim: true },
								label: "Nombre de usuario",
								"lazy-rules": "",
								dense: "",
								color: unref($q).dark.isActive ? "orange" : "primary",
								rules: [(val) => val && val.length > 0 || "dato obligatorio"]
							}, {
								prepend: withCtx(() => [createVNode(QIcon, { name: "person" })]),
								_: 1
							}, 8, [
								"modelValue",
								"color",
								"rules"
							]),
							createVNode(QInput, {
								filled: "",
								type: pwd.value,
								modelValue: clave.value,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => clave.value = $event),
								modelModifiers: { trim: true },
								label: "Clave de acceso",
								"lazy-rules": "",
								dense: "",
								color: unref($q).dark.isActive ? "orange" : "primary",
								rules: [(val) => val && val.length > 0 || "dato obligatorio"]
							}, {
								prepend: withCtx(() => [createVNode(QIcon, { name: "key" })]),
								append: withCtx(() => [createVNode(QBtn, {
									flat: "",
									dense: "",
									size: "small",
									onClick: _cache[2] || (_cache[2] = ($event) => changePWD())
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
							createElementVNode("div", _hoisted_2, [loading.value ? (openBlock(), createBlock(QLinearProgress, {
								key: 0,
								dark: "",
								rounded: "",
								indeterminate: "",
								color: "secondary",
								class: "q-mb-sm"
							})) : createCommentVNode("", true), createVNode(QBtn, {
								class: "neon-btn-primary",
								disable: loading.value,
								icon: "person",
								stretch: "",
								outline: "",
								square: "",
								label: "Ingresar",
								type: "submit",
								color: "green"
							}, null, 8, ["disable"])])
						]),
						_: 1
					}), accept_oauth.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(QBtn, {
						flat: "",
						class: "q-mt-md q-pr-xs",
						size: "sm",
						color: "grey",
						loading: loading.value,
						onClick: _cache[5] || (_cache[5] = ($event) => googleLogin())
					}, {
						default: withCtx(() => [createVNode(QIcon, {
							name: "hive",
							size: "xs",
							left: ""
						}), _cache[8] || (_cache[8] = createTextVNode(" Acceder con Google ", -1))]),
						_: 1
					}, 8, ["loading"])])])) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			})], 512), [[vShow, showing.value]])], 64);
		};
	}
});
//#endregion
export { _plugin_vue_export_helper_default as n, LoginView_default as t };
