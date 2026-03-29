import { D as parseFecha } from "./user-sITiXt2Y.js";
import { t as UsuariosService } from "./usuariosService-DeiCZJ49.js";
import { createBlock, createElementVNode, createTextVNode, createVNode, defineComponent, openBlock, ref, toDisplayString, unref, withCtx } from "vue";
import QSpace from "quasar/src/components/space/QSpace.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
import QCard from "quasar/src/components/card/QCard.js";
import QDialog from "quasar/src/components/dialog/QDialog.js";
import QSeparator from "quasar/src/components/separator/QSeparator.js";
import QCardActions from "quasar/src/components/card/QCardActions.js";
import QTd from "quasar/src/components/table/QTd.js";
import QTable from "quasar/src/components/table/QTable.js";
//#endregion
//#region src/components/app/ext/conectados/usuarios_conectados.vue
var usuarios_conectados_default = /* @__PURE__ */ defineComponent({
	__name: "usuarios_conectados",
	setup(__props, { expose: __expose }) {
		const alert = ref(false);
		const loading = ref(false);
		const usuarios = ref([]);
		const usuariosService = new UsuariosService();
		const columns = [
			{
				name: "ind",
				label: "#",
				field: "ind",
				align: "left"
			},
			{
				name: "usuario",
				label: "Usuario",
				field: "usuario",
				align: "left"
			},
			{
				name: "last_login",
				label: "Ultimo acceso",
				field: "last_login",
				align: "left"
			},
			{
				name: "conexiones",
				label: "Conexiones",
				field: "conexiones",
				align: "left"
			}
		];
		const open = () => {
			usuarios.value = [];
			alert.value = true;
			listar();
		};
		const listar = async () => {
			loading.value = true;
			const res = await usuariosService.usuarios_conectados();
			loading.value = false;
			if (res && res.usuarios_conectados) usuarios.value = res.usuarios_conectados;
		};
		const handleCancel = () => {
			alert.value = false;
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
					xstyle: "min-width: 500px",
					class: "q-pa-md"
				}, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [_cache[2] || (_cache[2] = createElementVNode("div", { class: "q-ml-sm text-h6" }, "Usuarios conectados:", -1)), createVNode(QSpace)]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, {
								size: "xs",
								class: "q-py-none"
							}), createVNode(QTable, {
								rows: usuarios.value,
								columns,
								"row-key": "id",
								dense: "",
								flat: "",
								square: "",
								"hide-pagination": "",
								"rows-per-page-options": [0]
							}, {
								"body-cell-usuario": withCtx((props) => [createVNode(QTd, { props }, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.row.nombres) + " " + toDisplayString(props.row.apellido1) + " " + toDisplayString(props.row.apellido2), 1)]),
									_: 2
								}, 1032, ["props"])]),
								"body-cell-ind": withCtx((props) => [createVNode(QTd, { props }, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
									_: 2
								}, 1032, ["props"])]),
								"body-cell-last_login": withCtx((props) => [createVNode(QTd, { props }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.last_login)), 1)]),
									_: 2
								}, 1032, ["props"])]),
								_: 1
							}, 8, ["rows"])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "center" }, {
							default: withCtx(() => [createVNode(QBtn, {
								loading: loading.value,
								flat: "",
								label: "cerrar",
								"no-caps": "",
								square: "",
								icon: "check",
								color: "positive",
								onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
							}, null, 8, ["loading"])]),
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
export { usuarios_conectados_default as default };
