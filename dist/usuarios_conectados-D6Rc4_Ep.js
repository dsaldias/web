import { D as parseFecha } from "./user-jN3O9LXh.js";
import { t as UsuariosService } from "./usuariosService-DQ1W3FaM.js";
import { createBlock, createElementVNode, createTextVNode, createVNode, defineComponent, openBlock, ref, toDisplayString, unref, withCtx } from "vue";
import QSpace from "quasar/src/components/space/QSpace.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
import QIcon from "quasar/src/components/icon/QIcon.js";
import QCard from "quasar/src/components/card/QCard.js";
import QDialog from "quasar/src/components/dialog/QDialog.js";
import QSeparator from "quasar/src/components/separator/QSeparator.js";
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
				style: {
					"width": "min(560px, 95vw)",
					"max-width": "95vw"
				}
			}, {
				default: withCtx(() => [createVNode(QCard, {
					flat: "",
					bordered: "",
					style: { "width": "100%" },
					class: "q-py-md"
				}, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-py-sm q-px-md" }, {
							default: withCtx(() => [
								createVNode(QIcon, {
									name: "people",
									color: "primary",
									class: "q-mr-sm"
								}),
								_cache[2] || (_cache[2] = createElementVNode("span", { class: "text-subtitle1 text-weight-medium" }, "Usuarios conectados", -1)),
								createVNode(QSpace),
								createVNode(QBtn, {
									flat: "",
									round: "",
									dense: "",
									icon: "close",
									onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
								})
							]),
							_: 1
						}),
						createVNode(QSeparator),
						createVNode(QCardSection, { class: "q-pa-none q-mb-md" }, {
							default: withCtx(() => [createVNode(QTable, {
								rows: usuarios.value,
								columns,
								"row-key": "id",
								dense: "",
								flat: "",
								"hide-pagination": "",
								"rows-per-page-options": [0],
								separator: "horizontal"
							}, {
								"body-cell-ind": withCtx((props) => [createVNode(QTd, {
									props,
									class: "text-caption",
									style: { "opacity": ".5" }
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
									_: 2
								}, 1032, ["props"])]),
								"body-cell-usuario": withCtx((props) => [createVNode(QTd, { props }, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.row.nombres) + " " + toDisplayString(props.row.apellido1) + " " + toDisplayString(props.row.apellido2), 1)]),
									_: 2
								}, 1032, ["props"])]),
								"body-cell-last_login": withCtx((props) => [createVNode(QTd, {
									props,
									class: "text-caption",
									style: { "opacity": ".7" }
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.last_login)), 1)]),
									_: 2
								}, 1032, ["props"])]),
								_: 1
							}, 8, ["rows"])]),
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
