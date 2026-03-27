import { defineComponent, ref, resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createTextVNode, toDisplayString, unref } from "vue";
import { p as parseFecha, U as UsuariosService } from "./index-Dsr0Oc7W.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "usuarios_conectados",
  setup(__props, { expose: __expose }) {
    const alert = ref(false);
    const loading = ref(false);
    const usuarios = ref([]);
    const usuariosService = new UsuariosService();
    const columns = [
      { name: "ind", label: "#", field: "ind", align: "left" },
      { name: "usuario", label: "Usuario", field: "usuario", align: "left" },
      { name: "last_login", label: "Ultimo acceso", field: "last_login", align: "left" },
      { name: "conexiones", label: "Conexiones", field: "conexiones", align: "left" }
    ];
    const open = () => {
      usuarios.value = [];
      alert.value = true;
      void listar();
    };
    const listar = async () => {
      loading.value = true;
      const res = await usuariosService.usuarios_conectados();
      loading.value = false;
      if (res && res.usuarios_conectados) {
        usuarios.value = res.usuarios_conectados;
      }
    };
    const handleCancel = () => {
      alert.value = false;
    };
    __expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_q_space = resolveComponent("q-space");
      const _component_q_card_section = resolveComponent("q-card-section");
      const _component_q_separator = resolveComponent("q-separator");
      const _component_q_td = resolveComponent("q-td");
      const _component_q_table = resolveComponent("q-table");
      const _component_q_btn = resolveComponent("q-btn");
      const _component_q_card_actions = resolveComponent("q-card-actions");
      const _component_q_card = resolveComponent("q-card");
      const _component_q_dialog = resolveComponent("q-dialog");
      return openBlock(), createBlock(_component_q_dialog, {
        modelValue: alert.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => alert.value = $event),
        persistent: "",
        square: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_q_card, {
            xstyle: "min-width: 500px",
            class: "q-pa-md"
          }, {
            default: withCtx(() => [
              createVNode(_component_q_card_section, { class: "row items-center q-pb-xs" }, {
                default: withCtx(() => [
                  _cache[2] || (_cache[2] = createElementVNode("div", { class: "q-ml-sm text-h6" }, "Usuarios conectados:", -1)),
                  createVNode(_component_q_space)
                ]),
                _: 1
              }),
              createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                default: withCtx(() => [
                  createVNode(_component_q_separator, {
                    size: "xs",
                    class: "q-py-none"
                  }),
                  createVNode(_component_q_table, {
                    rows: usuarios.value,
                    columns,
                    "row-key": "id",
                    dense: "",
                    flat: "",
                    square: "",
                    "hide-pagination": "",
                    "rows-per-page-options": [0]
                  }, {
                    "body-cell-usuario": withCtx((props) => [
                      createVNode(_component_q_td, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.nombres) + " " + toDisplayString(props.row.apellido1) + " " + toDisplayString(props.row.apellido2), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-ind": withCtx((props) => [
                      createVNode(_component_q_td, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-last_login": withCtx((props) => [
                      createVNode(_component_q_td, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(parseFecha)(props.row.last_login)), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 1
                  }, 8, ["rows"])
                ]),
                _: 1
              }),
              createVNode(_component_q_card_actions, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_q_btn, {
                    loading: loading.value,
                    flat: "",
                    label: "cerrar",
                    "no-caps": "",
                    square: "",
                    icon: "check",
                    color: "positive",
                    onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
                  }, null, 8, ["loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};
