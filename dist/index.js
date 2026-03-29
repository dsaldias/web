import { A as toHomePath, C as chartAreaBorder, D as parseFecha, E as parseErrors, O as parseTextError, S as ajustarFechaUTC, T as mostrarNotifyError, _ as cargarMenus, a as avisos_show_default, b as setConfig, c as mutar$1, d as __extends, f as __read, g as re_login_default, h as mostrarRelogin, i as mostrarAviso, j as toast1, k as parseTextErrorWs, l as query$1, m as __values, o as NotisService, p as __spreadArray, r as eventBus, s as defectoOps$1, t as useLoginStore, u as lib_default, w as defectoOps$2, x as ajustarFechaLocal, y as encriptarString } from "./user-sITiXt2Y.js";
import { n as sql_usuarios, t as UsuariosService } from "./usuariosService-DeiCZJ49.js";
import { n as _plugin_vue_export_helper_default, t as LoginView_default } from "./LoginView-DdFCkGtG.js";
import { Fragment, Transition, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, nextTick, normalizeClass, normalizeStyle, onBeforeMount, onMounted, onUnmounted, openBlock, ref, renderList, resolveComponent, toDisplayString, unref, watch, withCtx, withDirectives } from "vue";
import { ApolloClient } from "@apollo/client/core";
import { ApolloClients, provideApolloClients, useMutation, useQuery, useSubscription } from "@vue/apollo-composable";
import Dark from "quasar/src/plugins/dark/Dark.js";
import Cookies from "quasar/src/plugins/cookies/Cookies.js";
import { InMemoryCache, createHttpLink, split } from "@apollo/client";
import { Kind, OperationTypeNode } from "graphql";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import Notify from "quasar/src/plugins/notify/Notify.js";
import QSpace from "quasar/src/components/space/QSpace.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
import QInput from "quasar/src/components/input/QInput.js";
import QIcon from "quasar/src/components/icon/QIcon.js";
import QCard from "quasar/src/components/card/QCard.js";
import QDialog from "quasar/src/components/dialog/QDialog.js";
import graphqlQueryCompress from "graphql-query-compress";
import QAvatar from "quasar/src/components/avatar/QAvatar.js";
import QSeparator from "quasar/src/components/separator/QSeparator.js";
import QCardActions from "quasar/src/components/card/QCardActions.js";
import { setContext } from "@apollo/client/link/context";
import QLinearProgress from "quasar/src/components/linear-progress/QLinearProgress.js";
import QItemSection from "quasar/src/components/item/QItemSection.js";
import QItem from "quasar/src/components/item/QItem.js";
import QList from "quasar/src/components/item/QList.js";
import QMenu from "quasar/src/components/menu/QMenu.js";
import QForm from "quasar/src/components/form/QForm.js";
import useQuasar from "quasar/src/composables/use-quasar/use-quasar.js";
import QImg from "quasar/src/components/img/QImg.js";
import { useRouter } from "vue-router";
import QTooltip from "quasar/src/components/tooltip/QTooltip.js";
import QToggle from "quasar/src/components/toggle/QToggle.js";
import ClosePopup from "quasar/src/directives/close-popup/ClosePopup.js";
import QRadio from "quasar/src/components/radio/QRadio.js";
import QFile from "quasar/src/components/file/QFile.js";
import { boot } from "quasar/wrappers";
import QSelect from "quasar/src/components/select/QSelect.js";
import QBadge from "quasar/src/components/badge/QBadge.js";
import QToolbar from "quasar/src/components/toolbar/QToolbar.js";
import QHeader from "quasar/src/components/header/QHeader.js";
import QItemLabel from "quasar/src/components/item/QItemLabel.js";
import QScrollArea from "quasar/src/components/scroll-area/QScrollArea.js";
import QDrawer from "quasar/src/components/drawer/QDrawer.js";
import QPageContainer from "quasar/src/components/page/QPageContainer.js";
import QLayout from "quasar/src/components/layout/QLayout.js";
import Ripple from "quasar/src/directives/ripple/Ripple.js";
import QFabAction from "quasar/src/components/fab/QFabAction.js";
import QFab from "quasar/src/components/fab/QFab.js";
import QPageSticky from "quasar/src/components/page-sticky/QPageSticky.js";
import QToolbarTitle from "quasar/src/components/toolbar/QToolbarTitle.js";
import QTab from "quasar/src/components/tabs/QTab.js";
import QTabs from "quasar/src/components/tabs/QTabs.js";
import QTd from "quasar/src/components/table/QTd.js";
import QChip from "quasar/src/components/chip/QChip.js";
import QTable from "quasar/src/components/table/QTable.js";
import QPage from "quasar/src/components/page/QPage.js";
import QExpansionItem from "quasar/src/components/expansion-item/QExpansionItem.js";
import QTabPanel from "quasar/src/components/tab-panels/QTabPanel.js";
import QTabPanels from "quasar/src/components/tab-panels/QTabPanels.js";
import QBanner from "quasar/src/components/banner/QBanner.js";
import QEditor from "quasar/src/components/editor/QEditor.js";
import { ArcElement, BarElement, CategoryScale, Chart, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip, defaults } from "chart.js";
import { LineChart } from "vue-chart-3";
//#region src/apollo/index.ts
var mainLink$1 = setContext((_, { headers }) => {
	const store = useLoginStore();
	const rolunidad = store.rolUnidad;
	const r_id = rolunidad.rol ? rolunidad.rol.id : null;
	const u_id = rolunidad.unidad ? rolunidad.unidad.id : null;
	const skey = store.sessionkey;
	return { headers: {
		...headers,
		unidad: u_id,
		rol: r_id,
		sessionkey: skey
	} };
});
function getClientOptions(url, url_wa) {
	const store = useLoginStore();
	store.setWsNoti("closed");
	const link = split(({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === Kind.OPERATION_DEFINITION && definition.operation === OperationTypeNode.SUBSCRIPTION;
	}, new GraphQLWsLink(createClient({
		url: url_wa,
		connectionParams: () => {
			const us = store.dataUser.usuario;
			return {
				uid: us ? us.id : null,
				reconnect: true
			};
		},
		lazy: true,
		on: {
			connected: () => {
				store.setWsNoti("connected");
				console.log("Connected to WebSocket");
			},
			closed: () => {
				store.setWsNoti("closed");
				console.log("WebSocket connection closed");
			},
			error: (err) => {
				store.setWsNoti("error");
				console.error("WebSocket error:", err);
			},
			connecting: () => {
				store.setWsNoti("connecting");
				console.log("Reconnecting to WebSocket...");
			}
		}
	})), mainLink$1.concat(createHttpLink({
		uri: url,
		headers: { authorization: `Bearer ` },
		credentials: "include"
	})));
	return Object.assign({
		link,
		cache: new InMemoryCache()
	}, process.env.MODE === "spa" ? {} : {}, process.env.MODE === "ssr" ? {} : {}, process.env.MODE === "pwa" ? {} : {}, process.env.MODE === "bex" ? {} : {}, process.env.MODE === "cordova" ? {} : {}, process.env.MODE === "capacitor" ? {} : {}, process.env.MODE === "electron" ? {} : {}, process.env.DEV ? {} : {}, process.env.PROD ? {} : {}, process.env.MODE === "ssr" && process.env.SERVER ? { ssrMode: true } : {}, process.env.MODE === "ssr" && process.env.CLIENT ? { ssrForceFetchDelay: 100 } : {});
}
//#endregion
//#region src/apollo/indexapp.ts
var mainLink = setContext((_, { headers }) => {
	const store = useLoginStore();
	const rolunidad = store.rolUnidad;
	const r_id = rolunidad.rol ? rolunidad.rol.id : null;
	const u_id = rolunidad.unidad ? rolunidad.unidad.id : null;
	const skey = store.sessionkey;
	return { headers: {
		...headers,
		unidad: u_id,
		rol: r_id,
		sessionkey: skey
	} };
});
function getClientOptionsApp(url, url_wa) {
	const link = split(({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === Kind.OPERATION_DEFINITION && definition.operation === OperationTypeNode.SUBSCRIPTION;
	}, new GraphQLWsLink(createClient({
		url: url_wa,
		lazy: true,
		on: {
			connected: () => {
				console.log("Connected to WebSocketApp");
			},
			closed: () => {
				console.log("WebSocketApp connection closed");
			},
			error: (err) => {
				console.error("WebSocketApp error:", err);
			},
			connecting: () => {
				console.log("Reconnecting to WebSocketApp...");
			}
		}
	})), mainLink.concat(createHttpLink({
		uri: url,
		headers: { authorization: `Bearer ` },
		credentials: "include"
	})));
	return Object.assign({
		link,
		cache: new InMemoryCache()
	}, process.env.MODE === "spa" ? {} : {}, process.env.MODE === "ssr" ? {} : {}, process.env.MODE === "pwa" ? {} : {}, process.env.MODE === "bex" ? {} : {}, process.env.MODE === "cordova" ? {} : {}, process.env.MODE === "capacitor" ? {} : {}, process.env.MODE === "electron" ? {} : {}, process.env.DEV ? {} : {}, process.env.PROD ? {} : {}, process.env.MODE === "ssr" && process.env.SERVER ? { ssrMode: true } : {}, process.env.MODE === "ssr" && process.env.CLIENT ? { ssrForceFetchDelay: 100 } : {});
}
//#endregion
//#region src/plugin.ts
var AuthPlugin = { install(app, config) {
	setConfig(config);
	const apolloClient = new ApolloClient(getClientOptions(config.graphqlAuth, config.wss));
	const apolloClientApp = new ApolloClient(getClientOptionsApp(config.graphqlApp, config.wssApp));
	const apolloClients = {
		default: apolloClient,
		cliente_ws: apolloClient,
		cliente_app: apolloClientApp,
		cliente_ws_app: apolloClientApp
	};
	provideApolloClients(apolloClients);
	app.provide(ApolloClients, apolloClients);
	const cookieName = config.cookieThemeName || "quasar-theme-auth";
	Dark.set(Cookies.get(cookieName) === "true");
	watch(() => Dark.isActive, (val) => {
		Cookies.set(cookieName, String(val));
	});
} };
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
	var _super = function(instance) {
		Error.call(instance);
		instance.stack = (/* @__PURE__ */ new Error()).stack;
	};
	var ctorFunc = createImpl(_super);
	ctorFunc.prototype = Object.create(Error.prototype);
	ctorFunc.prototype.constructor = ctorFunc;
	return ctorFunc;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
	return function UnsubscriptionErrorImpl(errors) {
		_super(this);
		this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
			return i + 1 + ") " + err.toString();
		}).join("\n  ") : "";
		this.name = "UnsubscriptionError";
		this.errors = errors;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
	if (arr) {
		var index = arr.indexOf(item);
		0 <= index && arr.splice(index, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
	function Subscription(initialTeardown) {
		this.initialTeardown = initialTeardown;
		this.closed = false;
		this._parentage = null;
		this._finalizers = null;
	}
	Subscription.prototype.unsubscribe = function() {
		var e_1, _a, e_2, _b;
		var errors;
		if (!this.closed) {
			this.closed = true;
			var _parentage = this._parentage;
			if (_parentage) {
				this._parentage = null;
				if (Array.isArray(_parentage)) try {
					for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) _parentage_1_1.value.remove(this);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				else _parentage.remove(this);
			}
			var initialFinalizer = this.initialTeardown;
			if (isFunction(initialFinalizer)) try {
				initialFinalizer();
			} catch (e) {
				errors = e instanceof UnsubscriptionError ? e.errors : [e];
			}
			var _finalizers = this._finalizers;
			if (_finalizers) {
				this._finalizers = null;
				try {
					for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
						var finalizer = _finalizers_1_1.value;
						try {
							execFinalizer(finalizer);
						} catch (err) {
							errors = errors !== null && errors !== void 0 ? errors : [];
							if (err instanceof UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
							else errors.push(err);
						}
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			}
			if (errors) throw new UnsubscriptionError(errors);
		}
	};
	Subscription.prototype.add = function(teardown) {
		var _a;
		if (teardown && teardown !== this) if (this.closed) execFinalizer(teardown);
		else {
			if (teardown instanceof Subscription) {
				if (teardown.closed || teardown._hasParent(this)) return;
				teardown._addParent(this);
			}
			(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
		}
	};
	Subscription.prototype._hasParent = function(parent) {
		var _parentage = this._parentage;
		return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
	};
	Subscription.prototype._addParent = function(parent) {
		var _parentage = this._parentage;
		this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
	};
	Subscription.prototype._removeParent = function(parent) {
		var _parentage = this._parentage;
		if (_parentage === parent) this._parentage = null;
		else if (Array.isArray(_parentage)) arrRemove(_parentage, parent);
	};
	Subscription.prototype.remove = function(teardown) {
		var _finalizers = this._finalizers;
		_finalizers && arrRemove(_finalizers, teardown);
		if (teardown instanceof Subscription) teardown._removeParent(this);
	};
	Subscription.EMPTY = (function() {
		var empty = new Subscription();
		empty.closed = true;
		return empty;
	})();
	return Subscription;
}();
Subscription.EMPTY;
function isSubscription(value) {
	return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
	if (isFunction(finalizer)) finalizer();
	else finalizer.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var config = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: false,
	useDeprecatedNextContext: false
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
	setTimeout: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = timeoutProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearTimeout: function(handle) {
		var delegate = timeoutProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
	timeoutProvider.setTimeout(function() {
		var onUnhandledError = config.onUnhandledError;
		if (onUnhandledError) onUnhandledError(err);
		else throw err;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function() {
	return createNotification("C", void 0, void 0);
})();
function errorNotification(error) {
	return createNotification("E", void 0, error);
}
function nextNotification(value) {
	return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
	return {
		kind,
		value,
		error
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
	if (config.useDeprecatedSynchronousErrorHandling) {
		var isRoot = !context;
		if (isRoot) context = {
			errorThrown: false,
			error: null
		};
		cb();
		if (isRoot) {
			var _a = context, errorThrown = _a.errorThrown, error = _a.error;
			context = null;
			if (errorThrown) throw error;
		}
	} else cb();
}
function captureError(err) {
	if (config.useDeprecatedSynchronousErrorHandling && context) {
		context.errorThrown = true;
		context.error = err;
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
	__extends(Subscriber, _super);
	function Subscriber(destination) {
		var _this = _super.call(this) || this;
		_this.isStopped = false;
		if (destination) {
			_this.destination = destination;
			if (isSubscription(destination)) destination.add(_this);
		} else _this.destination = EMPTY_OBSERVER;
		return _this;
	}
	Subscriber.create = function(next, error, complete) {
		return new SafeSubscriber(next, error, complete);
	};
	Subscriber.prototype.next = function(value) {
		if (this.isStopped) handleStoppedNotification(nextNotification(value), this);
		else this._next(value);
	};
	Subscriber.prototype.error = function(err) {
		if (this.isStopped) handleStoppedNotification(errorNotification(err), this);
		else {
			this.isStopped = true;
			this._error(err);
		}
	};
	Subscriber.prototype.complete = function() {
		if (this.isStopped) handleStoppedNotification(COMPLETE_NOTIFICATION, this);
		else {
			this.isStopped = true;
			this._complete();
		}
	};
	Subscriber.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.isStopped = true;
			_super.prototype.unsubscribe.call(this);
			this.destination = null;
		}
	};
	Subscriber.prototype._next = function(value) {
		this.destination.next(value);
	};
	Subscriber.prototype._error = function(err) {
		try {
			this.destination.error(err);
		} finally {
			this.unsubscribe();
		}
	};
	Subscriber.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	};
	return Subscriber;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
	return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
	function ConsumerObserver(partialObserver) {
		this.partialObserver = partialObserver;
	}
	ConsumerObserver.prototype.next = function(value) {
		var partialObserver = this.partialObserver;
		if (partialObserver.next) try {
			partialObserver.next(value);
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	ConsumerObserver.prototype.error = function(err) {
		var partialObserver = this.partialObserver;
		if (partialObserver.error) try {
			partialObserver.error(err);
		} catch (error) {
			handleUnhandledError(error);
		}
		else handleUnhandledError(err);
	};
	ConsumerObserver.prototype.complete = function() {
		var partialObserver = this.partialObserver;
		if (partialObserver.complete) try {
			partialObserver.complete();
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
	__extends(SafeSubscriber, _super);
	function SafeSubscriber(observerOrNext, error, complete) {
		var _this = _super.call(this) || this;
		var partialObserver;
		if (isFunction(observerOrNext) || !observerOrNext) partialObserver = {
			next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
			error: error !== null && error !== void 0 ? error : void 0,
			complete: complete !== null && complete !== void 0 ? complete : void 0
		};
		else {
			var context_1;
			if (_this && config.useDeprecatedNextContext) {
				context_1 = Object.create(observerOrNext);
				context_1.unsubscribe = function() {
					return _this.unsubscribe();
				};
				partialObserver = {
					next: observerOrNext.next && bind(observerOrNext.next, context_1),
					error: observerOrNext.error && bind(observerOrNext.error, context_1),
					complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
				};
			} else partialObserver = observerOrNext;
		}
		_this.destination = new ConsumerObserver(partialObserver);
		return _this;
	}
	return SafeSubscriber;
}(Subscriber);
function handleUnhandledError(error) {
	if (config.useDeprecatedSynchronousErrorHandling) captureError(error);
	else reportUnhandledError(error);
}
function defaultErrorHandler(err) {
	throw err;
}
function handleStoppedNotification(notification, subscriber) {
	var onStoppedNotification = config.onStoppedNotification;
	onStoppedNotification && timeoutProvider.setTimeout(function() {
		return onStoppedNotification(notification, subscriber);
	});
}
var EMPTY_OBSERVER = {
	closed: true,
	next: noop,
	error: defaultErrorHandler,
	complete: noop
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function() {
	return typeof Symbol === "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
	return x;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
	if (fns.length === 0) return identity;
	if (fns.length === 1) return fns[0];
	return function piped(input) {
		return fns.reduce(function(prev, fn) {
			return fn(prev);
		}, input);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
	function Observable(subscribe) {
		if (subscribe) this._subscribe = subscribe;
	}
	Observable.prototype.lift = function(operator) {
		var observable = new Observable();
		observable.source = this;
		observable.operator = operator;
		return observable;
	};
	Observable.prototype.subscribe = function(observerOrNext, error, complete) {
		var _this = this;
		var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
		errorContext(function() {
			var _a = _this, operator = _a.operator, source = _a.source;
			subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
		});
		return subscriber;
	};
	Observable.prototype._trySubscribe = function(sink) {
		try {
			return this._subscribe(sink);
		} catch (err) {
			sink.error(err);
		}
	};
	Observable.prototype.forEach = function(next, promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var subscriber = new SafeSubscriber({
				next: function(value) {
					try {
						next(value);
					} catch (err) {
						reject(err);
						subscriber.unsubscribe();
					}
				},
				error: reject,
				complete: resolve
			});
			_this.subscribe(subscriber);
		});
	};
	Observable.prototype._subscribe = function(subscriber) {
		var _a;
		return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
	};
	Observable.prototype[observable] = function() {
		return this;
	};
	Observable.prototype.pipe = function() {
		var operations = [];
		for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
		return pipeFromArray(operations)(this);
	};
	Observable.prototype.toPromise = function(promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var value;
			_this.subscribe(function(x) {
				return value = x;
			}, function(err) {
				return reject(err);
			}, function() {
				return resolve(value);
			});
		});
	};
	Observable.create = function(subscribe) {
		return new Observable(subscribe);
	};
	return Observable;
}();
function getPromiseCtor(promiseCtor) {
	var _a;
	return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
	return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
	return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
//#endregion
//#region src/stores/auth/serverws.ts
var subs$1 = (sql, variables = {}, opciones = defectoOps$2) => {
	return new Observable((observer) => {
		const { error, stop, onResult } = useSubscription(sql, variables, {
			fetchPolicy: "network-only",
			clientId: "cliente_ws"
		});
		const stopError = watch(error, () => {
			if (error.value) {
				observer.error(error.value);
				if (opciones.showNotyError) parseTextErrorWs(error.value?.message);
			}
		});
		onResult((res) => {
			if (res.errors) {
				if (opciones.showNotyError) parseErrors(res.errors);
				observer.error(res.errors);
			} else {
				const d = {
					data: res.data,
					stop
				};
				observer.next(d);
			}
		});
		return () => {
			stopError();
			stop();
		};
	});
};
//#endregion
//#region src/stores/auth/notificaciones.ts
var msg = ref("");
var subscriptionRef = ref(null);
var edgeLightSignal = ref(0);
var retryTimeout = ref(null);
var NOTIFICACIONES_SUBS = lib_default`
  subscription notificaciones_subs {
    notificaciones_subs {
      title
      data_json
    }
  }
`;
var iniciarSubscripcion = () => {
	if (retryTimeout.value) {
		clearTimeout(retryTimeout.value);
		retryTimeout.value = null;
	}
	if (subscriptionRef.value) subscriptionRef.value.unsubscribe();
	subscriptionRef.value = subs$1(NOTIFICACIONES_SUBS).subscribe({
		next(result) {
			const notificacion = result.data.notificaciones_subs;
			const dt = notificacion.data_json;
			let datos = null;
			let color = "orange";
			let tipo = "";
			const datanot = {
				message: notificacion.title,
				position: "top-right",
				type: "positive",
				progress: true,
				progressClass: "bg-white text-white"
			};
			if ((dt + "").startsWith("{")) {
				const p = JSON.parse(dt);
				datos = p["datos"];
				color = p["color"];
				tipo = p["tipo"];
				if (color) {
					delete datanot.type;
					datanot.color = color;
				}
				datitos(datos);
			}
			if (tipo != "conectados") {
				Notify.create(datanot);
				edgeLightSignal.value++;
			}
			if (tipo == "conectados") setconectadosTxt(datos);
		},
		error(err) {
			msg.value = err.message || "Error en la suscripción";
			retryTimeout.value = setTimeout(iniciarSubscripcion, 15e3);
			if (subscriptionRef.value) subscriptionRef.value.retryCount = (subscriptionRef.value?.retryCount || 0) + 1;
		}
	});
};
var datitos = async (datos) => {
	if (!datos) return;
	const { useLoginStore } = await import("./user-sITiXt2Y.js").then((n) => n.n);
	useLoginStore().setNotifyData(datos);
};
var setconectadosTxt = async (datos) => {
	const { useLoginStore } = await import("./user-sITiXt2Y.js").then((n) => n.n);
	const store = useLoginStore();
	store.setWsTotalConectados(datos.total_conectados);
	store.setWsConectados(datos.conectados);
};
var detenerSubscripcion = () => {
	if (subscriptionRef.value) {
		subscriptionRef.value.unsubscribe();
		subscriptionRef.value = null;
	}
	if (retryTimeout.value) clearTimeout(retryTimeout.value);
};
//#endregion
//#region src/stores/auth/serverapp.ts
var defectoOps = { showNotyError: true };
function mutar(sql, variables = {}, opciones = defectoOps) {
	return new Promise((resolve, reject) => {
		sql = lib_default(graphqlQueryCompress(sql));
		const { mutate: envio, onDone, error } = useMutation(sql, {
			variables: { ...variables },
			fetchPolicy: "no-cache",
			clientId: "cliente_app"
		});
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
		const { error, result, stop } = useQuery(sql, variables, {
			fetchPolicy: "no-cache",
			clientId: "cliente_app"
		});
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
//#region src/stores/auth/serverwsapp.ts
var subs = (sql, variables = {}, opciones = defectoOps$2) => {
	return new Observable((observer) => {
		const { error, stop, onResult } = useSubscription(sql, variables, () => ({
			fetchPolicy: "network-only",
			clientId: "cliente_ws_app"
		}));
		const stopError = watch(error, () => {
			if (error.value) {
				observer.error(error.value);
				if (opciones.showNotyError) mostrarNotifyError(error.value?.message);
			}
		});
		onResult((res) => {
			if (res.errors) {
				if (opciones.showNotyError) parseErrors(res.errors);
				observer.error(res.errors);
			} else {
				const d = {
					data: res.data,
					stop
				};
				observer.next(d);
			}
		});
		return () => {
			stopError();
			stop();
		};
	});
};
//#endregion
//#region src/stores/auth/services/meService.ts
var MeService = class {
	async me(input) {
		return await query$1(`
      query me($input: InputMe!) {
        me(input: $input) {
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
          }
          roles {
            rol {
              id
              nombre
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
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/perfilService.ts
var PerfilService = class {
	async update_perfil(input) {
		return await query$1(`
      mutation update_perfil($input: UpdatePerfil!) {
        update_perfil(input: $input) {
          id
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async get_imagen(url) {
		return await query$1(`
      query get_imagen($url: String!) {
        get_imagen(url: $url)
      }
    `, { url }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/rolesService.ts
var sql_roles = `
roles {
  id
  nombre
  descripcion
  jerarquia
  fecha_registro
  menus
  permisos
  usuarios
}
`;
var RolesService = class {
	async roles() {
		return await query$1(`
      query roles {
        ${sql_roles}
      }
    `, {}).then((d) => d).catch((e) => e);
	}
	async rol_by_id(id) {
		return await query$1(`
      query rol_by_id($id: ID!) {
        rol_by_id(id: $id) {
          id
          nombre
          descripcion
          jerarquia
          permisos {
            metodo
            nombre
          }
          menus {
            id
            label
            path
          }
        }
      }
    `, { id }).then((d) => d).catch((e) => e);
	}
	async update_rol(input) {
		return await mutar$1(`
      mutation update_rol($input: UpdateRol!) {
        update_rol(input: $input) {
          id
          nombre
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async create_rol(input) {
		return await mutar$1(`
      mutation create_rol($input: NewRol!) {
        create_rol(input: $input) {
          id
          nombre
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/usuariosRolesService.ts
var UsuariosRolesService = class {
	async roles_y_usuarios(queryUsuarios) {
		return await query$1(`
      query roles_y_usuarios($input: QueryUsuarios!) {
        roles: ${sql_roles}
        usuarios: ${sql_usuarios}
      }
    `, { input: queryUsuarios }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/unidadesService.ts
var UnidadesService = class {
	async unidades() {
		return await query$1(`
      query unidades {
        unidades {
          id
          nombre
          descripcion
          orden
          latitud
          longitud
          fecha_registro
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
	async create_unidad(input) {
		return await mutar$1(`
      mutation create_unidad($input: NewUnidad!) {
        create_unidad(input: $input) {
          id
          nombre
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async update_unidad(input) {
		return await mutar$1(`
      mutation update_unidad($input: UpdUnidad!) {
        update_unidad(input: $input) {
          id
          nombre
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/permisosService.ts
var PermisosService = class {
	async permisos() {
		return await query$1(`
      query permisos {
        permisos {
          metodo
          nombre
          descripcion
          grupo
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/menusService.ts
var MenusService = class {
	async menus() {
		return await query$1(`
      query menus {
        menus {
          id
          label
          path
          icon
          grupo
          orden
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/ticketsService.ts
var TicketsService = class {
	async all_tickets(q) {
		return await query$1(`
      query all_tickets($q:QueryTickets!){
        all_tickets(q:$q){
          id
          usuario_id
          usuario
          problema
          estado
          fecha_registro
          respuesta
          soporte
          soporte_id
          respondido
        }
      }
    `, { q }).then((d) => d).catch((e) => e);
	}
	async mis_tickets() {
		return await query$1(`
      query mis_tickets{
        mis_tickets{
          id
          usuario_id
          usuario
          problema
          estado
          fecha_registro
          respuesta
          soporte
          soporte_id
          respondido
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
	async ver_ticket(id) {
		return await query$1(`
    query ver_ticket($id:ID!){
      ver_ticket(id:$id){
        id
        usuario_id
        problema
        estado
        fecha_registro
        respuestas{
          id
          tickets_id
          usuario_id
          respuesta
          fecha_registro
        }
      }
    }
    `, { id }).then((d) => d).catch((e) => e);
	}
	async create_ticket(input) {
		return await mutar$1(`
    mutation create_ticket($input:NewTicket!){
      create_ticket(input:$input){
        id
        usuario_id
        estado
        fecha_registro
      }
    }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async update_ticket(input) {
		return await mutar$1(`
    mutation update_ticket($input:NewTicketRespuesta!){
      update_ticket(input:$input){
        id
        usuario_id
        problema
      }
    }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async cerrar_ticket(id) {
		return await mutar$1(`
    mutation cerrar_ticket($id:ID!){
      cerrar_ticket(id:$id){
        id
        estado
      }
    }
    `, { id }).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/stores/auth/services/dashboardService.ts
var DashboardService = class {
	async reporte1() {
		return await query$1(`
      query reporte1 {
        reporte1 {
          nombre
          valor
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
	async reporte2() {
		return await query$1(`
      query reporte2 {
        reporte2 {
          fecha
          fecha_str
          valor
        }
        reporte2b {
          mes
          valor
        }
      }
    `, {}).then((d) => d).catch((e) => e);
	}
};
//#endregion
//#region src/components/auth/perfil/validador.ts
var Validaciones = class {
	val_nombre(val) {
		if (!val) return "dato obligatorio";
		if (val.length > 30) return "maximo 30 caracteres";
	}
	val_apellido1(val) {
		if (!val) return "dato obligatorio";
		if (val.length > 30) return "maximo 30 caracteres";
	}
	val_apellido2(val) {
		if (!val) return true;
		if (val.length > 30) return "maximo 30 caracteres";
	}
	val_documento(val) {
		if (!val) return true;
		if (val.length > 30) return "maximo 30 caracteres";
	}
	val_celular(val) {
		if (!val) return true;
		if (val.length > 20) return "maximo 20 caracteres";
	}
	val_correo(val) {
		if (!val) return true;
		if (val.length > 100) return "maximo 100 caracteres";
	}
	val_direccion(val) {
		if (!val) return true;
		if (val.length > 100) return "maximo 100 caracteres";
	}
	val_username(val) {
		if (!val) return "dato obligatorio";
		if (val.length > 30) return "maximo 30 caracteres";
	}
	val_password_opc(val) {
		if (!val) return true;
		if (val.length > 64) return "maximo 64 caracteres";
	}
	val_password(val, input) {
		if (!val && !input.id) return "datos obligatorio";
		if (!val && input.id) return true;
		if (val.length > 64) return "maximo 64 caracteres";
	}
};
//#endregion
//#region src/components/auth/geo/geo_modalbk.vue?vue&type=script&lang.ts
var LMap = defineAsyncComponent(async () => {
	return (await import("@vue-leaflet/vue-leaflet")).LMap;
});
var LTileLayer = defineAsyncComponent(async () => {
	return (await import("@vue-leaflet/vue-leaflet")).LTileLayer;
});
var geo_modalbk_vue_vue_type_script_lang_default = {
	components: {
		LMap,
		LMarker: defineAsyncComponent(async () => {
			return (await import("@vue-leaflet/vue-leaflet")).LMarker;
		}),
		LTileLayer
	},
	setup(_, { emit }) {
		const alert = ref(false);
		const loading = ref(false);
		const refmap = ref();
		const markerLatLng = ref([]);
		const zoom = ref(14.2);
		const center = ref([-21.528098, -64.730105]);
		const url = ref("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
		const attribution = ref("&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors");
		const mapOptions = ref({ zoomSnap: .5 });
		const showMap = ref(false);
		let resolvePromise;
		const open = (lat = null, lon = null) => {
			alert.value = true;
			console.log("ssss", lat, lon);
			if (lat && lon) markerLatLng.value = [lat, lon];
			Promise.resolve({            }).then(() => {
				setTimeout(() => {
					showMap.value = true;
					console.log("refMap", refmap.value);
				}, 600);
			});
			return new Promise((resolve) => {
				resolvePromise = resolve;
			});
		};
		const handleMapClick = (event) => {
			const { lat, lng } = event.latlng;
			markerLatLng.value = [lat, lng];
			emit("onpin", lat, lng);
			resolvePromise({
				lat,
				lng
			});
			Notify.create({
				message: "Aceptado",
				color: "orange",
				timeout: 400,
				position: "top",
				icon: "fmd_good"
			});
		};
		const limpiar = () => {
			emit("onpin", null, null);
			resolvePromise(null, null);
			cerrar();
		};
		const cerrar = () => alert.value = false;
		return {
			alert,
			loading,
			zoom,
			center,
			url,
			attribution,
			mapOptions,
			showMap,
			refmap,
			markerLatLng,
			open,
			cerrar,
			handleMapClick,
			limpiar
		};
	}
};
//#endregion
//#region src/components/auth/geo/geo_modalbk.vue
var _hoisted_1$20 = {
	class: "q-mt-md",
	align: "right"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LTileLayer = resolveComponent("LTileLayer");
	const _component_LMarker = resolveComponent("LMarker");
	const _component_LMap = resolveComponent("LMap");
	return openBlock(), createBlock(QDialog, {
		modelValue: $setup.alert,
		"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.alert = $event),
		persistent: "",
		square: ""
	}, {
		default: withCtx(() => [createVNode(QCard, {
			flat: "",
			bordered: "",
			"vv-on:click": "checkClickSession()",
			style: {
				"min-width": "300px",
				"width": "500px"
			}
		}, {
			default: withCtx(() => [
				createVNode(QCardSection, { class: "q-pb-none" }, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createElementVNode("div", { class: "text-h6 q-my-none" }, "Ubicacion geografica", -1)])]),
					_: 1
				}),
				createVNode(QCardSection, { class: "q-py-none" }, {
					default: withCtx(() => [$setup.showMap ? (openBlock(), createBlock(_component_LMap, {
						key: 0,
						ref: "refmap",
						useGlobalLeaflet: false,
						zoom: $setup.zoom,
						center: $setup.center,
						options: $setup.mapOptions,
						style: {
							"height": "50vh",
							"width": "100%"
						},
						onClick: $setup.handleMapClick
					}, {
						default: withCtx(() => [createVNode(_component_LTileLayer, {
							url: $setup.url,
							attribution: $setup.attribution
						}, null, 8, ["url", "attribution"]), createVNode(_component_LMarker, { "lat-lng": $setup.markerLatLng }, null, 8, ["lat-lng"])]),
						_: 1
					}, 8, [
						"zoom",
						"center",
						"options",
						"onClick"
					])) : createCommentVNode("", true)]),
					_: 1
				}),
				createVNode(QCardSection, { class: "q-pt-none" }, {
					default: withCtx(() => [createElementVNode("div", _hoisted_1$20, [
						$setup.loading ? (openBlock(), createBlock(QLinearProgress, {
							key: 0,
							dark: "",
							rounded: "",
							indeterminate: "",
							color: "secondary",
							class: "q-mb-sm"
						})) : createCommentVNode("", true),
						createVNode(QBtn, {
							class: "q-mr-xs",
							label: "limpiar",
							color: "negative",
							icon: "close",
							square: "",
							flat: "",
							onClick: _cache[0] || (_cache[0] = ($event) => $setup.limpiar())
						}),
						createVNode(QBtn, {
							label: "cerrar",
							color: "positive",
							icon: "check",
							square: "",
							outline: "",
							onClick: _cache[1] || (_cache[1] = ($event) => $setup.cerrar())
						})
					])]),
					_: 1
				})
			]),
			_: 1
		})]),
		_: 1
	}, 8, ["modelValue"]);
}
var geo_modalbk_default = /* @__PURE__ */ _plugin_vue_export_helper_default(geo_modalbk_vue_vue_type_script_lang_default, [["render", _sfc_render$6]]);
//#endregion
//#region src/stores/auth/zoomer.js
var init_zoomer = () => {
	setTimeout(() => {
		zoom();
	}, 450);
};
var zoom = () => {
	const zoomer = document.querySelector(".zoomer");
	const img = zoomer.querySelector("img");
	let zoomLevel = 1.5;
	const zoomStep = .5;
	zoomer.addEventListener("mousemove", (e) => {
		const { left, top, width, height } = zoomer.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;
		const xPercent = x / width * 100;
		const yPercent = y / height * 100;
		img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
		img.style.transform = `scale(${zoomLevel})`;
	});
	zoomer.addEventListener("mouseleave", () => {
		img.style.transform = "scale(1)";
	});
	zoomer.addEventListener("wheel", (e) => {
		e.preventDefault();
		if (e.deltaY < 0) zoomLevel = Math.min(zoomLevel + zoomStep, 5);
		else zoomLevel = Math.max(zoomLevel - zoomStep, 1);
		img.style.transform = `scale(${zoomLevel})`;
	});
};
//#endregion
//#region src/components/auth/perfil/editar_perfil.vue?vue&type=script&lang.ts
var editar_perfil_vue_vue_type_script_lang_default = {
	components: { Geo: geo_modalbk_default },
	setup() {
		const store = useLoginStore();
		const perfilService = new PerfilService();
		const meService = new MeService();
		const validaciones = new Validaciones();
		const loading = ref(false);
		const alert = ref(false);
		const refGeo = ref();
		const input = ref({});
		const foto_file = ref();
		const foto_64 = ref("");
		const cerrar = () => alert.value = false;
		const open = async () => {
			alert.value = true;
			foto_file.value = null;
			foto_64.value = "";
			input.value = {};
			await me();
		};
		const me = async () => {
			console.log("editar_perfillll");
			loading.value = true;
			const q = {};
			q.unidad_id = store.rolUnidad.unidad.id;
			const res = await meService.me(q);
			if (res && res.me) {
				input.value.id = res.me.usuario.id;
				input.value.nombres = res.me.usuario.nombres;
				input.value.apellido1 = res.me.usuario.apellido1;
				input.value.apellido2 = res.me.usuario.apellido2;
				input.value.celular = res.me.usuario.celular;
				input.value.correo = res.me.usuario.correo;
				input.value.documento = res.me.usuario.documento;
				input.value.direccion = res.me.usuario.direccion;
				input.value.sexo = res.me.usuario.sexo;
				input.value.oauth_id = res.me.usuario.oauth_id;
				input.value.latitud = res.me.usuario.latitud;
				input.value.longitud = res.me.usuario.longitud;
				await getFoto(res.me.usuario);
			}
			loading.value = false;
		};
		const filevalue = (file) => {
			if (file) {
				const reader = new FileReader();
				reader.onload = function(e) {
					if (e.target) input.value.foto64 = e.target.result;
				};
				reader.readAsDataURL(file);
			} else input.value.foto64 = null;
		};
		const onRejected = (rejectedEntries) => {
			const mf = rejectedEntries[0].failedPropValidation;
			Notify.create({
				type: "negative",
				message: `${rejectedEntries.length} no cumple la restriccion: ${mf}`
			});
		};
		const getFoto = async (us) => {
			const url = us.foto_url;
			if (!url) return url;
			const res = await perfilService.get_imagen(url);
			if (res && res.get_imagen) foto_64.value = res.get_imagen;
			init_zoomer();
		};
		const openGeo = () => {
			const lt = input.value.latitud;
			const ln = input.value.longitud;
			refGeo.value.open(lt, ln);
		};
		const onpin = (lat, lon) => {
			input.value.latitud = lat;
			input.value.longitud = lon;
		};
		const onSubmit = async () => {
			console.log("ssssss", input.value);
			loading.value = true;
			const obj = Object.assign({}, input.value);
			delete obj.oauth_id;
			const res = await perfilService.update_perfil(obj);
			if (res && res.update_perfil) alert.value = false;
			loading.value = false;
		};
		return {
			store,
			alert,
			loading,
			input,
			validaciones,
			foto_file,
			foto_64,
			refGeo,
			cerrar,
			open,
			onSubmit,
			filevalue,
			onRejected,
			openGeo,
			onpin
		};
	}
};
//#endregion
//#region src/components/auth/perfil/editar_perfil.vue
var _hoisted_1$19 = { class: "row q-col-gutter-xs justify-center" };
var _hoisted_2$13 = { class: "col-xs-12 col-sm-8" };
var _hoisted_3$13 = { class: "col-xs-12 col-sm-6" };
var _hoisted_4$8 = { class: "col-xs-12 col-sm-6" };
var _hoisted_5$6 = { class: "col-xs-12 col-sm-6" };
var _hoisted_6$5 = { class: "col-xs-12 col-sm-6" };
var _hoisted_7$3 = { class: "col-xs-12 col-sm-6" };
var _hoisted_8$3 = { class: "col-xs-12 col-sm-6" };
var _hoisted_9$3 = { class: "col-xs-12 col-sm-12" };
var _hoisted_10$2 = { class: "col-xs-12 col-sm-12" };
var _hoisted_11$2 = { class: "col-xs-12 col-sm-12" };
var _hoisted_12$2 = { class: "col-xs-12 col-sm-12 q-pt-md" };
var _hoisted_13$2 = { class: "q-pl-md" };
var _hoisted_14$2 = { "vv-show": "!input.oauth_id" };
var _hoisted_15$2 = { class: "row" };
var _hoisted_16$2 = { class: "col-xs-12 col-sm-12" };
var _hoisted_17$2 = {
	class: "q-mt-md",
	align: "right"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_Geo = resolveComponent("Geo");
	return openBlock(), createBlock(QDialog, {
		modelValue: $setup.alert,
		"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.alert = $event),
		persistent: "",
		square: ""
	}, {
		default: withCtx(() => [createVNode(QCard, {
			flat: "",
			bordered: "",
			"vv-on:click": "checkClickSession()"
		}, {
			default: withCtx(() => [createVNode(QCardSection, null, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createElementVNode("div", { class: "text-h6" }, " Editar Información Personal ", -1)])]),
				_: 1
			}), createVNode(QCardSection, { class: "q-pt-none" }, {
				default: withCtx(() => [createVNode(QForm, { onSubmit: $setup.onSubmit }, {
					default: withCtx(() => [
						createElementVNode("div", _hoisted_1$19, [
							createElementVNode("div", _hoisted_2$13, [$setup.foto_64 ? (openBlock(), createBlock(QImg, {
								key: 0,
								class: "zoomer",
								src: $setup.foto_64,
								"spinner-color": "white"
							}, null, 8, ["src"])) : createCommentVNode("", true)]),
							createElementVNode("div", _hoisted_3$13, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.nombres,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.input.nombres = $event),
								modelModifiers: { trim: true },
								label: "* Nombres:",
								required: "",
								"lazy-rules": "",
								dense: "",
								rules: [(val) => $setup.validaciones.val_nombre(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_4$8, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.apellido1,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.input.apellido1 = $event),
								modelModifiers: { trim: true },
								label: "* Apellido 1:",
								required: "",
								"lazy-rules": "",
								dense: "",
								rules: [(val) => $setup.validaciones.val_apellido1(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_5$6, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.apellido2,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.input.apellido2 = $event),
								modelModifiers: { trim: true },
								label: "Apellido 2:",
								dense: "",
								"lazy-rules": "",
								rules: [(val) => $setup.validaciones.val_apellido2(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_6$5, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.celular,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.input.celular = $event),
								modelModifiers: { trim: true },
								label: "Celular:",
								dense: "",
								"lazy-rules": "",
								rules: [(val) => $setup.validaciones.val_celular(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_7$3, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.correo,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.input.correo = $event),
								modelModifiers: { trim: true },
								label: "Correo:",
								dense: "",
								"lazy-rules": "",
								rules: [(val) => $setup.validaciones.val_correo(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_8$3, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.documento,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.input.documento = $event),
								modelModifiers: { trim: true },
								label: "Documento:",
								dense: "",
								"lazy-rules": "",
								rules: [(val) => $setup.validaciones.val_documento(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_9$3, [createVNode(QInput, {
								outlined: "",
								modelValue: $setup.input.direccion,
								"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.input.direccion = $event),
								modelModifiers: { trim: true },
								label: "Direccion:",
								dense: "",
								"lazy-rules": "",
								rules: [(val) => $setup.validaciones.val_direccion(val)]
							}, null, 8, ["modelValue", "rules"])]),
							createElementVNode("div", _hoisted_10$2, [createVNode(QRadio, {
								modelValue: $setup.input.sexo,
								"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.input.sexo = $event),
								val: "F",
								label: "F"
							}, null, 8, ["modelValue"]), createVNode(QRadio, {
								modelValue: $setup.input.sexo,
								"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.input.sexo = $event),
								val: "M",
								label: "M"
							}, null, 8, ["modelValue"])]),
							createElementVNode("div", _hoisted_11$2, [createVNode(QFile, {
								style: { "min-width": "50px" },
								clearable: "",
								modelValue: $setup.foto_file,
								"onUpdate:modelValue": [_cache[9] || (_cache[9] = ($event) => $setup.foto_file = $event), _cache[10] || (_cache[10] = ($event) => $setup.filevalue($event))],
								dense: "",
								accept: "image/*",
								disable: $setup.loading,
								square: "",
								outlined: "",
								color: "orange",
								label: "Seleccionar foto de perfil (2MB)",
								"max-file-size": "2097152",
								onRejected: $setup.onRejected
							}, {
								prepend: withCtx(() => [createVNode(QIcon, { name: "upload" })]),
								default: withCtx(() => [createVNode(QTooltip, null, {
									default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode(" Seleccionar foto de perfil ", -1)])]),
									_: 1
								})]),
								_: 1
							}, 8, [
								"modelValue",
								"disable",
								"onRejected"
							])]),
							createElementVNode("div", _hoisted_12$2, [createVNode(QBtn, {
								color: "grey",
								icon: "fmd_good",
								dense: "",
								square: "",
								outline: "",
								onClick: _cache[11] || (_cache[11] = ($event) => $setup.openGeo())
							}, {
								default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode(" Ubicacion geografica ", -1)])]),
								_: 1
							}), createElementVNode("small", _hoisted_13$2, toDisplayString($setup.input.latitud) + " " + toDisplayString($setup.input.longitud), 1)])
						]),
						createElementVNode("div", _hoisted_14$2, [createVNode(QSeparator, {
							color: "green",
							class: "q-mt-md q-mb-xs"
						}), createElementVNode("div", _hoisted_15$2, [createElementVNode("div", _hoisted_16$2, [createVNode(QInput, {
							outlined: "",
							modelValue: $setup.input.password,
							"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.input.password = $event),
							modelModifiers: { trim: true },
							label: "Cambiar clave de acceso:",
							dense: "",
							"lazy-rules": "",
							rules: [(val) => $setup.validaciones.val_password_opc(val)],
							hint: "recuerde iniciar session con la nueva clave."
						}, null, 8, ["modelValue", "rules"])])])]),
						createElementVNode("div", _hoisted_17$2, [
							$setup.loading ? (openBlock(), createBlock(QLinearProgress, {
								key: 0,
								dark: "",
								rounded: "",
								indeterminate: "",
								color: "secondary",
								class: "q-mb-sm"
							})) : createCommentVNode("", true),
							createVNode(QBtn, {
								disable: $setup.loading,
								label: "Guardar",
								class: "q-mr-xs",
								icon: "done",
								type: "submit",
								color: "positive",
								square: "",
								outline: ""
							}, null, 8, ["disable"]),
							createVNode(QBtn, {
								disable: $setup.loading,
								label: "cerrar",
								color: "negative",
								icon: "close",
								square: "",
								outline: "",
								onClick: _cache[13] || (_cache[13] = ($event) => $setup.cerrar())
							}, null, 8, ["disable"])
						])
					]),
					_: 1
				}, 8, ["onSubmit"])]),
				_: 1
			})]),
			_: 1
		}), createVNode(_component_Geo, {
			ref: "refGeo",
			onOnpin: $setup.onpin
		}, null, 8, ["onOnpin"])]),
		_: 1
	}, 8, ["modelValue"]);
}
var editar_perfil_default = /* @__PURE__ */ _plugin_vue_export_helper_default(editar_perfil_vue_vue_type_script_lang_default, [["render", _sfc_render$5]]);
//#endregion
//#region src/components/app/ext/perfil/extension_btn.vue
var _sfc_main$3 = {};
function _sfc_render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("div");
}
var extension_btn_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$3, [["render", _sfc_render$4]]);
boot(() => {
	const cookie_name = process.env.COOKIE_THEME_NAME || "";
	const v = Cookies.get(cookie_name) == "true";
	Dark.set(v);
	setTheme(v);
	watch(() => Dark.isActive, (val) => {
		Dark.set(val);
		Cookies.set(cookie_name, "" + val);
		setTheme(val);
	});
});
var setTheme = (val) => {
	const metaThemeColor = document.querySelector("meta[name=theme-color]");
	if (metaThemeColor) {
		const pColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
		const color = val ? "#040b25" : pColor;
		metaThemeColor.setAttribute("content", color);
	}
};
var getThemeDark = () => {
	const cookie_name = process.env.COOKIE_THEME_NAME || "";
	return Cookies.get(cookie_name) == "true";
};
//#endregion
//#region src/components/auth/perfil/boton_perfil.vue?vue&type=script&lang.ts
var boton_perfil_vue_vue_type_script_lang_default = {
	components: {
		EditarPerfil: editar_perfil_default,
		extension_btn: extension_btn_default
	},
	setup() {
		const datos = ref({});
		const store = useLoginStore();
		const perfilService = new PerfilService();
		const refEditarPerfil = ref();
		const router = useRouter();
		const foto_64 = ref("");
		const unsubscribe = ref();
		const logout = async () => {
			const r = toHomePath();
			const isdark = getThemeDark();
			store.setLastDarkstate(isdark);
			await router.push(r);
			store.setSessionKey(void 0);
		};
		const openEdit = () => {
			refEditarPerfil.value.open();
		};
		const cargarDatos = async () => {
			foto_64.value = "";
			let data = store.dataUser;
			if (typeof data == "string") data = JSON.parse(data);
			if (!data.roles) return;
			const roles = data.roles.length;
			const us = data.usuario;
			if (!us.apellido2) us.apellido2 = "";
			if (!us.celular) us.celular = "";
			if (!us.documento) us.documento = "";
			if (!us.correo) us.correo = "";
			datos.value.usuario = `${us.nombres} ${us.apellido1} ${us.apellido2}`;
			datos.value.documento = `${us.documento}`;
			datos.value.celular = `${us.celular}`;
			datos.value.correo = `${us.correo}`;
			datos.value.username = `${us.username}`;
			datos.value.roles = `${roles} roles.`;
			datos.value.last_login = us.last_login;
			await getFoto(data.usuario);
		};
		const getFoto = async (us) => {
			const url = us.foto_url;
			if (!url) return url;
			const res = await perfilService.get_imagen(url);
			if (res && res.get_imagen) foto_64.value = res.get_imagen;
		};
		const subscribir = () => {
			if (unsubscribe.value) return;
			unsubscribe.value = store.$subscribe((_, state) => {
				store.setThemaCuaderno(state.thema_cuaderno);
			});
		};
		onMounted(async () => {
			await cargarDatos();
		});
		onUnmounted(() => {
			if (unsubscribe.value) unsubscribe.value();
		});
		return {
			datos,
			logout,
			openEdit,
			store,
			refEditarPerfil,
			foto_64,
			parseFecha,
			subscribir
		};
	}
};
//#endregion
//#region src/components/auth/perfil/boton_perfil.vue
var _hoisted_1$18 = { class: "q-pa-none q-ma-none" };
var _hoisted_2$12 = {
	class: "q-ml-xs ellipsis",
	style: { "max-width": "9em" }
};
var _hoisted_3$12 = { class: "row no-wrap q-pa-md" };
var _hoisted_4$7 = {
	class: "column",
	style: { "min-width": "130px" }
};
var _hoisted_5$5 = { class: "q-mt-none q-mb-xs" };
var _hoisted_6$4 = { class: "q-mt-none q-mb-xs" };
var _hoisted_7$2 = { class: "q-mt-none q-mb-xs" };
var _hoisted_8$2 = {
	class: "column items-center",
	style: { "min-width": "99px" }
};
var _hoisted_9$2 = {
	class: "text-subtitle1 q-mt-md q-mb-xs",
	style: { "white-space": "nowrap" }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_extension_btn = resolveComponent("extension_btn");
	const _component_EditarPerfil = resolveComponent("EditarPerfil");
	return openBlock(), createElementBlock("div", _hoisted_1$18, [createVNode(QBtn, {
		flat: "",
		class: "q-pl-xs q-pr-none",
		onClick: $setup.subscribir
	}, {
		default: withCtx(() => [
			createVNode(QAvatar, { size: "26px" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createElementVNode("img", { src: "https://cdn.quasar.dev/img/boy-avatar.png" }, null, -1)])]),
				_: 1
			}),
			createElementVNode("span", _hoisted_2$12, toDisplayString($setup.datos.username), 1),
			createVNode(QTooltip, null, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Perfil ", -1)])]),
				_: 1
			}),
			createVNode(QMenu, { square: "" }, {
				default: withCtx(() => [createElementVNode("div", _hoisted_3$12, [
					createElementVNode("div", _hoisted_4$7, [
						_cache[5] || (_cache[5] = createElementVNode("div", { class: "text-h6 q-mb-md" }, "Mi Perfil", -1)),
						createElementVNode("p", _hoisted_5$5, toDisplayString($setup.datos.usuario), 1),
						createElementVNode("p", _hoisted_6$4, toDisplayString($setup.parseFecha($setup.datos.last_login)), 1),
						createElementVNode("p", _hoisted_7$2, toDisplayString($setup.datos.roles), 1),
						createVNode(QToggle, {
							modelValue: $setup.store.thema_cuaderno,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.store.thema_cuaderno = $event),
							color: "primary",
							dense: "",
							"unchecked-icon": "brightness_7",
							"checked-icon": "dark_mode"
						}, null, 8, ["modelValue"]),
						withDirectives(createVNode(QBtn, {
							color: "green",
							label: "Editar",
							outline: "",
							icon: "edit",
							square: "",
							size: "sm",
							stretch: "",
							onClick: _cache[1] || (_cache[1] = ($event) => $setup.openEdit())
						}, null, 512), [[ClosePopup]]),
						createVNode(_component_extension_btn)
					]),
					createVNode(QSeparator, {
						vertical: "",
						inset: "",
						class: "q-mx-lg"
					}),
					createElementVNode("div", _hoisted_8$2, [
						createVNode(QAvatar, { size: "72px" }, {
							default: withCtx(() => [$setup.foto_64 ? (openBlock(), createBlock(QImg, {
								key: 0,
								src: $setup.foto_64,
								"spinner-color": "white"
							}, null, 8, ["src"])) : createCommentVNode("", true)]),
							_: 1
						}),
						_cache[6] || (_cache[6] = createElementVNode("p", null, null, -1)),
						createElementVNode("div", _hoisted_9$2, toDisplayString($setup.datos.usuario), 1),
						withDirectives(createVNode(QBtn, {
							color: "negative",
							label: "Salir",
							icon: "block",
							square: "",
							outline: "",
							size: "sm",
							stretch: "",
							onClick: _cache[2] || (_cache[2] = ($event) => $setup.logout())
						}, null, 512), [[ClosePopup]])
					])
				])]),
				_: 1
			})
		]),
		_: 1
	}, 8, ["onClick"]), createVNode(_component_EditarPerfil, { ref: "refEditarPerfil" }, null, 512)]);
}
var boton_perfil_default = /* @__PURE__ */ _plugin_vue_export_helper_default(boton_perfil_vue_vue_type_script_lang_default, [["render", _sfc_render$3]]);
//#endregion
//#region src/components/auth/roles/roles-select.vue
var roles_select_default = /* @__PURE__ */ defineComponent({
	__name: "roles-select",
	setup(__props) {
		const rol_unidad = ref(null);
		const store = useLoginStore();
		const meService = new MeService();
		const loading = ref(false);
		const show = ref(process.env.SHOW_ROL_SELECT != "");
		const rolesunidad = computed(() => {
			if (!store.dataUser.roles) return [];
			const rolesunidades = [];
			store.dataUser.roles.forEach((x) => {
				const a = {};
				a.rol = x.rol;
				a.unidad = x.unidad;
				a.id = `${x.unidad.id}-${x.rol.id}`;
				a.text = `${x.unidad.nombre} - ${x.rol.nombre}`;
				rolesunidades.push(a);
			});
			return rolesunidades;
		});
		const getmesnuss = async () => {
			if (rol_unidad.value && rol_unidad.value.unidad) {
				store.setRolUnidad(rol_unidad.value);
				const input = {};
				input.unidad_id = rol_unidad.value.unidad.id;
				loading.value = true;
				store.setLoadingMenus(true);
				store.setMenus([]);
				const r = await meService.me(input);
				if (r && r.me) {
					const menuItemsAgrupados = await cargarMenus(r.me.menus);
					store.setMenus(menuItemsAgrupados);
					store.setUser(r.me);
				}
				loading.value = false;
				store.setLoadingMenus(false);
			}
		};
		const procesarrol = () => {
			const srol = store.rolUnidad;
			if (srol && srol.rol) {
				const idrolstore = srol.rol.id;
				const ex = rolesunidad.value.find((x) => x.rol.id == idrolstore);
				if (ex) rol_unidad.value = ex;
				else rol_unidad.value = rolesunidad.value[0];
			} else rol_unidad.value = rolesunidad.value[0];
		};
		onMounted(() => {
			procesarrol();
			getmesnuss();
		});
		return (_ctx, _cache) => {
			return show.value ? (openBlock(), createBlock(QSelect, {
				key: 0,
				options: rolesunidad.value,
				modelValue: rol_unidad.value,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => rol_unidad.value = $event), getmesnuss],
				label: "Seleccione su rol:",
				"option-label": "text",
				"option-value": "id",
				color: "secondary",
				loading: loading.value,
				dark: "",
				dense: "",
				square: "",
				outlined: ""
			}, null, 8, [
				"options",
				"modelValue",
				"loading"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/components/auth/EdgeLight.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$17 = {
	key: 0,
	class: "edge-light"
};
//#endregion
//#region src/components/auth/EdgeLight.vue
var EdgeLight_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "EdgeLight",
	setup(__props, { expose: __expose }) {
		const active = ref(false);
		let timer = null;
		function trigger() {
			if (timer) clearTimeout(timer);
			active.value = true;
			timer = setTimeout(() => {
				active.value = false;
				timer = null;
			}, 3500);
		}
		__expose({ trigger });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, { name: "edge" }, {
				default: withCtx(() => [active.value ? (openBlock(), createElementBlock("div", _hoisted_1$17)) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-c18620b0"]]);
//#endregion
//#region src/layouts/utils.ts
var colorWs = (str) => {
	return {
		connected: "green",
		closed: "negative",
		error: "red",
		connecting: "orange"
	}[str];
};
//#endregion
//#region src/layouts/fabs/ReportBug.vue
var ReportBug_default = /* @__PURE__ */ defineComponent({
	__name: "ReportBug",
	setup(__props, { expose: __expose }) {
		const alert = ref(false);
		const loading = ref(false);
		const problema = ref("");
		const ticketsService = new TicketsService();
		const val_pro = (val) => {
			if (!val) return "dato obligatorio";
			if (val.length > 512) return "maximo 512 caracteres";
		};
		const open = () => {
			problema.value = "";
			alert.value = true;
		};
		const select = async () => {
			if (!problema.value) return;
			if (problema.value.length > 512) {
				mostrarNotifyError("reducir el texto");
				return;
			}
			const input = { problema: problema.value };
			loading.value = true;
			const r = await ticketsService.create_ticket(input);
			if (r && r.create_ticket) {
				toast1("Tu numero de ticket es: " + r.create_ticket.id);
				alert.value = false;
			}
			loading.value = false;
		};
		const close = () => {
			alert.value = false;
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 630px" }, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								_cache[5] || (_cache[5] = createElementVNode("div", { class: "text-h6" }, "Sacar Nuevo Ticket", -1)),
								createVNode(QSpace),
								withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
									default: withCtx(() => [..._cache[4] || (_cache[4] = [createElementVNode("b", null, "x", -1)])]),
									_: 1
								})), [[ClosePopup]])
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, { class: "q-mt-none q-mb-lg" }), createVNode(QInput, {
								modelValue: problema.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => problema.value = $event),
								modelModifiers: { trim: true },
								outlined: "",
								square: "",
								dense: "",
								label: "Describa el problema aqui:",
								placeholder: "no mas de 512 caracteres",
								type: "textarea",
								rows: "12",
								cols: "50",
								counter: "",
								rules: [(val) => val_pro(val)]
							}, null, 8, ["modelValue", "rules"])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "right" }, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "cerrar",
								color: "grey",
								onClick: _cache[1] || (_cache[1] = ($event) => close())
							}, null, 8, ["loading"]), createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "Reportar",
								color: "green",
								onClick: _cache[2] || (_cache[2] = ($event) => select())
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
//#region src/layouts/fabs/FabButton.vue
var FabButton_default = /* @__PURE__ */ defineComponent({
	__name: "FabButton",
	setup(__props) {
		const fabRight = ref(false);
		const refReportBug = ref();
		const fab_falla = () => {
			refReportBug.value.open();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(QPageSticky, {
				position: "bottom-right",
				offset: [18, 32]
			}, {
				default: withCtx(() => [createVNode(QFab, {
					modelValue: fabRight.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fabRight.value = $event),
					"vertical-actions-align": "right",
					color: "grey",
					outline: "",
					icon: "manage_accounts",
					direction: "up"
				}, {
					default: withCtx(() => [createVNode(QFabAction, {
						square: "",
						"label-position": "left",
						color: "orange",
						onClick: fab_falla,
						icon: "airplay",
						label: "Reportar falla"
					})]),
					_: 1
				}, 8, ["modelValue"])]),
				_: 1
			}), createVNode(ReportBug_default, {
				ref_key: "refReportBug",
				ref: refReportBug
			}, null, 512)], 64);
		};
	}
});
//#endregion
//#region src/components/app/ext/name/app_name.vue
var _sfc_main$2 = {};
function _sfc_render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("div", null, [createVNode(QToolbarTitle, {
		shrink: "",
		class: "text-weight-bold neon-logo"
	}, {
		default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Auth ", -1)])]),
		_: 1
	})]);
}
var app_name_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2]]);
//#endregion
//#region src/components/app/ext/logo/app_logo.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createBlock(QImg, {
		src: "wapiton.png",
		alt: "logo",
		style: {
			"height": "20px",
			"width": "20px"
		}
	});
}
var app_logo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]]);
//#endregion
//#region src/layouts/MainLayout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$16 = { key: 0 };
var _hoisted_2$11 = { key: 1 };
var _hoisted_3$11 = ["innerHTML"];
//#endregion
//#region src/layouts/MainLayout.vue
var MainLayout_default = /* @__PURE__ */ defineComponent({
	__name: "MainLayout",
	setup(__props) {
		const leftDrawerOpen = ref(false);
		const store = useLoginStore();
		const perfilService = new PerfilService();
		const show_time = ref(process.env.SHOW_TIME_LABEL);
		const show_landing = ref(process.env.SHOW_LANDING_PAGE);
		const foto_64 = ref("");
		const refusuarios_conectados = ref();
		const router = useRouter();
		const Login = defineAsyncComponent(() => import("./login-index-CZDbFBrE.js"));
		const usuarios_conectados = defineAsyncComponent(() => import("./usuarios_conectados-OnioKWbk.js"));
		const showConectados = ref(false);
		const pendingOpenConectados = ref(false);
		const edgeLightRef = ref();
		watch(edgeLightSignal, () => edgeLightRef.value?.trigger());
		const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;
		const toHomeR = async () => {
			const r = toHomePath();
			await router.push(r);
			window.location.reload();
		};
		const getFoto = async () => {
			foto_64.value = "";
			const us = store.dataUser.usuario;
			if (!us) return;
			const url = us.foto_url;
			if (!url) return;
			const res = await perfilService.get_imagen(url);
			if (res && res.get_imagen) foto_64.value = res.get_imagen;
		};
		const openConectados = () => {
			showConectados.value = true;
			if (refusuarios_conectados.value) {
				refusuarios_conectados.value.open();
				return;
			}
			pendingOpenConectados.value = true;
			nextTick();
		};
		watch(() => store.dataUser?.usuario, async (usuario) => {
			if (usuario) await getFoto();
		});
		watch(() => refusuarios_conectados.value, (val) => {
			if (val && pendingOpenConectados.value) {
				pendingOpenConectados.value = false;
				val.open();
			}
		});
		onBeforeMount(async () => {
			if (show_landing.value && !store.dataUser.usuario) await router.push("/principal.html");
		});
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(QLayout, {
				view: "hHh Lpr lff",
				container: "",
				style: { "height": "100vh" }
			}, {
				default: withCtx(() => [
					createVNode(QHeader, { class: normalizeClass(_ctx.$q.dark.isActive ? "dark-hea" : "bg-primary") }, {
						default: withCtx(() => [createVNode(QToolbar, { class: "text-toolbar" }, {
							default: withCtx(() => [
								unref(store).dataUser.usuario ? (openBlock(), createBlock(QBtn, {
									key: 0,
									flat: "",
									dense: "",
									round: "",
									onClick: toggleLeftDrawer,
									"aria-label": "Menu",
									icon: "menu"
								})) : createCommentVNode("", true),
								createVNode(app_logo_default),
								_ctx.$q.screen.gt.xs && unref(store).dataUser.usuario ? (openBlock(), createBlock(QBtn, {
									key: 1,
									flat: "",
									"no-caps": "",
									"no-wrap": "",
									class: "q-ml-xs",
									xto: "toHome()",
									onClick: _cache[0] || (_cache[0] = ($event) => toHomeR())
								}, {
									default: withCtx(() => [createVNode(app_name_default)]),
									_: 1
								})) : createCommentVNode("", true),
								createVNode(QBadge, {
									rounded: "",
									color: unref(colorWs)(unref(store).ws_noti_status),
									id: "tuto_icon_ws",
									onDblclick: _cache[1] || (_cache[1] = ($event) => openConectados())
								}, {
									default: withCtx(() => [_ctx.$q.screen.width > 600 ? (openBlock(), createElementBlock("span", _hoisted_1$16, toDisplayString(unref(store).ws_total_conectados) + " conexiones ", 1)) : (openBlock(), createElementBlock("span", _hoisted_2$11, toDisplayString(unref(store).ws_total_conectados), 1)), createVNode(QTooltip, { class: "bg-purple" }, {
										default: withCtx(() => [createElementVNode("span", null, "Estado de notificaciones (" + toDisplayString(unref(store).ws_conectados) + ") ", 1)]),
										_: 1
									})]),
									_: 1
								}, 8, ["color"]),
								createVNode(QSpace),
								unref(store).dataUser.usuario ? (openBlock(), createBlock(roles_select_default, {
									key: 2,
									id: "tuto_rol_select"
								})) : createCommentVNode("", true),
								createVNode(QToggle, {
									"model-value": _ctx.$q.dark.isActive,
									"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.$q.dark.set($event)),
									color: _ctx.$q.dark ? "black" : "white",
									"unchecked-icon": "brightness_7",
									"checked-icon": "dark_mode",
									id: "tuto_mode_dark"
								}, null, 8, ["model-value", "color"]),
								unref(store).dataUser.usuario && show_time.value ? (openBlock(), createElementBlock("small", {
									key: 3,
									innerHTML: unref(store).tiempoSession,
									title: "fin de sesion",
									id: "tuto_hora_session"
								}, null, 8, _hoisted_3$11)) : createCommentVNode("", true),
								unref(store).dataUser.usuario ? (openBlock(), createBlock(boton_perfil_default, {
									key: 4,
									id: "tuto_btn_perfil"
								})) : createCommentVNode("", true)
							]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"]),
					unref(store).dataUser.usuario ? (openBlock(), createBlock(QDrawer, {
						key: 0,
						modelValue: leftDrawerOpen.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => leftDrawerOpen.value = $event),
						"show-if-above": "",
						bordered: "",
						breakpoint: 700,
						width: 240
					}, {
						default: withCtx(() => [createVNode(QScrollArea, { class: "fit" }, {
							default: withCtx(() => [createVNode(QList, {
								padding: "",
								id: "tuto_menu_element"
							}, {
								default: withCtx(() => [
									createVNode(QItem, { class: "justify-center" }, {
										default: withCtx(() => [foto_64.value ? (openBlock(), createBlock(QAvatar, { key: 0 }, {
											default: withCtx(() => [createVNode(QImg, {
												src: foto_64.value,
												"spinner-color": "white"
											}, null, 8, ["src"])]),
											_: 1
										})) : createCommentVNode("", true)]),
										_: 1
									}),
									unref(store).loading_menus ? (openBlock(), createBlock(QLinearProgress, {
										key: 0,
										dark: "",
										size: "xs",
										indeterminate: "",
										color: "secondary",
										class: "q-ma-none q-pa-none"
									})) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).menus, (t) => {
										return openBlock(), createElementBlock(Fragment, null, [(openBlock(true), createElementBlock(Fragment, null, renderList(t, (link, i) => {
											return openBlock(), createElementBlock(Fragment, { key: link.text }, [withDirectives((openBlock(), createBlock(QItem, {
												clickable: "",
												to: link.path,
												"active-class": "text-secondary"
											}, {
												default: withCtx(() => [
													createVNode(QItemSection, { avatar: "" }, {
														default: withCtx(() => [createVNode(QIcon, {
															color: _ctx.$q.dark.isActive ? "grey" : link.color,
															name: link.icon
														}, null, 8, ["color", "name"])]),
														_: 2
													}, 1024),
													createVNode(QItemSection, null, {
														default: withCtx(() => [createVNode(QItemLabel, null, {
															default: withCtx(() => [createTextVNode(toDisplayString(link.label), 1)]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1024),
													createVNode(QItemSection, { avatar: "" }, {
														default: withCtx(() => [createVNode(QAvatar, {
															size: "md",
															icon: "arrow_right"
														})]),
														_: 1
													})
												]),
												_: 2
											}, 1032, ["to"])), [[Ripple]]), Number(i) + 1 == t.length ? (openBlock(), createBlock(QSeparator, {
												key: 0,
												class: "q-my-md"
											})) : createCommentVNode("", true)], 64);
										}), 128))], 64);
									}), 256))
								]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"])) : createCommentVNode("", true),
					createVNode(EdgeLight_default, {
						ref_key: "edgeLightRef",
						ref: edgeLightRef
					}, null, 512),
					showConectados.value ? (openBlock(), createBlock(unref(usuarios_conectados), {
						key: 1,
						ref_key: "refusuarios_conectados",
						ref: refusuarios_conectados
					}, null, 512)) : createCommentVNode("", true),
					createVNode(QPageContainer, null, {
						default: withCtx(() => [!unref(store).dataUser.usuario ? (openBlock(), createBlock(unref(Login), { key: 0 })) : (openBlock(), createBlock(_component_router_view, { key: 1 })), createVNode(FabButton_default)]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/components/auth/landing/landing-index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$15 = { class: "row items-center no-wrap q-mr-md" };
var _hoisted_2$10 = { class: "row q-col-gutter-md q-mb-lg" };
var _hoisted_3$10 = { class: "col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d1" };
var _hoisted_4$6 = { class: "neon-metric-value" };
var _hoisted_5$4 = { class: "neon-metric-delta neon-metric-delta--up" };
var _hoisted_6$3 = { class: "neon-metric-icon neon-metric-icon--purple" };
var _hoisted_7$1 = { class: "col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d2" };
var _hoisted_8$1 = { class: "neon-metric-value" };
var _hoisted_9$1 = { class: "neon-metric-sub" };
var _hoisted_10$1 = { class: "neon-metric-icon neon-metric-icon--cyan" };
var _hoisted_11$1 = { class: "col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d3" };
var _hoisted_12$1 = { class: "neon-metric-value" };
var _hoisted_13$1 = { class: "neon-metric-delta neon-metric-delta--up" };
var _hoisted_14$1 = { class: "neon-metric-icon neon-metric-icon--green" };
var _hoisted_15$1 = { class: "col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d4" };
var _hoisted_16$1 = { class: "neon-metric-value" };
var _hoisted_17$1 = { class: "neon-metric-icon neon-metric-icon--gold" };
var _hoisted_18$1 = { class: "row q-col-gutter-md q-mb-lg" };
var _hoisted_19$1 = { class: "col-12 col-md-4" };
var _hoisted_20$1 = { class: "column q-gutter-sm" };
var _hoisted_21 = { class: "col-12 col-md-8" };
var _hoisted_22 = { class: "row items-center justify-between q-mb-md" };
var _hoisted_23 = { class: "neon-table-name" };
var _hoisted_24 = { class: "neon-table-time" };
var _hoisted_25 = { class: "row q-col-gutter-md" };
var _hoisted_26 = { class: "col-12" };
var _hoisted_27 = {
	class: "neon-map",
	style: {
		"padding": "24px",
		"min-height": "320px"
	}
};
var _hoisted_28 = {
	class: "row q-gutter-md",
	style: {
		"padding-top": "16px",
		"flex-wrap": "wrap"
	}
};
var _hoisted_29 = ["onClick"];
var _hoisted_30 = { class: "neon-dialog-header" };
var _hoisted_31 = { class: "row items-center justify-between" };
var _hoisted_32 = { class: "row q-gutter-sm" };
var _hoisted_33 = { class: "col" };
var _hoisted_34 = { class: "col" };
//#endregion
//#region src/components/auth/landing/landing-index.vue
var landing_index_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "landing-index",
	setup(__props) {
		const $q = useQuasar();
		const activeTab = ref("dashboard");
		const navItems = [
			{
				name: "dashboard",
				label: "Dashboard",
				icon: "dashboard"
			},
			{
				name: "reservas",
				label: "Reservas",
				icon: "event_seat"
			},
			{
				name: "mesas",
				label: "Mesas",
				icon: "table_restaurant"
			},
			{
				name: "admin",
				label: "Admin Mesas",
				icon: "settings"
			},
			{
				name: "eventos",
				label: "Eventos",
				icon: "star"
			}
		];
		const metrics = ref({
			reservasHoy: 4,
			ocupacion: 58,
			totalMesas: 58,
			ingresos: 152e3,
			vipActivos: 2
		});
		const formatNumber = (n) => new Intl.NumberFormat("es-AR").format(n);
		const reservasRecientes = ref([
			{
				id: 1,
				cliente: "Carlos Rodríguez",
				mesa: "Mesa VIP 1",
				hora: "23:30",
				estado: "confirmada",
				esVip: true
			},
			{
				id: 2,
				cliente: "Ana Martínez",
				mesa: "Mesa 5",
				hora: "00:00",
				estado: "confirmada",
				esVip: false
			},
			{
				id: 3,
				cliente: "Grupo Empresarial X",
				mesa: "Mesa VIP 3",
				hora: "22:00",
				estado: "pendiente",
				esVip: true
			},
			{
				id: 4,
				cliente: "Laura Sánchez",
				mesa: "Mesa 12",
				hora: "23:00",
				estado: "confirmada",
				esVip: false
			}
		]);
		const columnas = [
			{
				name: "cliente",
				label: "Cliente",
				field: "cliente",
				align: "left"
			},
			{
				name: "mesa",
				label: "Mesa",
				field: "mesa",
				align: "left"
			},
			{
				name: "hora",
				label: "Hora",
				field: "hora",
				align: "center"
			},
			{
				name: "estado",
				label: "Estado",
				field: "estado",
				align: "center"
			},
			{
				name: "accion",
				label: "Acción",
				field: "accion",
				align: "center"
			}
		];
		const mesasDemo = ref([
			{
				id: 1,
				numero: "Mesa 1",
				estado: "disponible",
				esVip: false,
				capacidad: 4
			},
			{
				id: 2,
				numero: "Mesa 2",
				estado: "ocupada",
				esVip: false,
				capacidad: 4
			},
			{
				id: 3,
				numero: "Mesa 3",
				estado: "disponible",
				esVip: false,
				capacidad: 6
			},
			{
				id: 4,
				numero: "Mesa 4",
				estado: "reservada",
				esVip: false,
				capacidad: 8
			},
			{
				id: 5,
				numero: "Mesa 5",
				estado: "ocupada",
				esVip: false,
				capacidad: 4
			},
			{
				id: 6,
				numero: "Mesa 6",
				estado: "disponible",
				esVip: false,
				capacidad: 6
			},
			{
				id: 7,
				numero: "Mesa 7",
				estado: "ocupada",
				esVip: false,
				capacidad: 8
			},
			{
				id: 8,
				numero: "Mesa 8",
				estado: "disponible",
				esVip: false,
				capacidad: 4
			},
			{
				id: 9,
				numero: "Mesa 9",
				estado: "mantenimiento",
				esVip: false,
				capacidad: 4
			},
			{
				id: 10,
				numero: "Mesa 10",
				estado: "disponible",
				esVip: false,
				capacidad: 6
			},
			{
				id: 11,
				numero: "Mesa 11",
				estado: "reservada",
				esVip: false,
				capacidad: 4
			},
			{
				id: 12,
				numero: "Mesa 12",
				estado: "ocupada",
				esVip: false,
				capacidad: 6
			},
			{
				id: 13,
				numero: "Mesa VIP 1",
				estado: "ocupada",
				esVip: true,
				capacidad: 6
			},
			{
				id: 14,
				numero: "Mesa VIP 2",
				estado: "disponible",
				esVip: true,
				capacidad: 10
			},
			{
				id: 15,
				numero: "Mesa VIP 3",
				estado: "reservada",
				esVip: true,
				capacidad: 12
			}
		]);
		const showNuevaReserva = ref(false);
		const form = ref({
			cliente: "",
			telefono: "",
			fecha: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			hora: "22:00",
			mesa: null,
			personas: 2,
			notas: ""
		});
		const opcionesMesas = computed(() => mesasDemo.value.filter((m) => m.estado === "disponible").map((m) => ({
			label: m.numero,
			value: m.id
		})));
		const openNuevaReserva = () => {
			showNuevaReserva.value = true;
		};
		const openCrearEvento = () => {
			$q.notify({
				message: "Módulo de eventos próximamente",
				icon: "star",
				classes: "neon-notify neon-notify--info"
			});
		};
		const guardarReserva = () => {
			if (!form.value.cliente || !form.value.mesa) {
				$q.notify({
					message: "Completá los campos obligatorios",
					icon: "warning",
					classes: "neon-notify neon-notify--warning"
				});
				return;
			}
			const mesaObj = mesasDemo.value.find((m) => m.id === form.value.mesa?.value);
			if (mesaObj) mesaObj.estado = "reservada";
			reservasRecientes.value.unshift({
				id: Date.now(),
				cliente: form.value.cliente,
				mesa: form.value.mesa?.label ?? "",
				hora: form.value.hora,
				estado: "pendiente",
				esVip: mesaObj?.esVip ?? false
			});
			metrics.value.reservasHoy++;
			$q.notify({
				message: `Reserva creada para ${form.value.cliente}`,
				icon: "check_circle",
				classes: "neon-notify neon-notify--success"
			});
			showNuevaReserva.value = false;
			form.value = {
				cliente: "",
				telefono: "",
				fecha: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				hora: "22:00",
				mesa: null,
				personas: 2,
				notas: ""
			};
		};
		const verReserva = (row) => {
			$q.notify({
				message: `Detalle de: ${row.cliente} — ${row.mesa}`,
				icon: "info",
				classes: "neon-notify neon-notify--info"
			});
		};
		const clickMesa = (mesa) => {
			if (mesa.estado === "disponible") {
				form.value.mesa = {
					label: mesa.numero,
					value: mesa.id
				};
				showNuevaReserva.value = true;
			} else $q.notify({
				message: `${mesa.numero} · Estado: ${mesa.estado}`,
				icon: mesa.estado === "ocupada" ? "person" : "event_seat",
				classes: `neon-notify neon-notify--${mesa.estado === "ocupada" ? "error" : "info"}`
			});
		};
		onBeforeMount(() => {
			$q.dark.set(true);
		});
		onMounted(() => {
			$q.dark.set(true);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(QLayout, {
				view: "hHh LpR fFf",
				class: "neon-layout"
			}, {
				default: withCtx(() => [createVNode(QHeader, {
					class: "neon-header",
					elevated: ""
				}, {
					default: withCtx(() => [createVNode(QToolbar, { style: {
						"min-height": "56px",
						"padding": "0 20px",
						"gap": "12px"
					} }, {
						default: withCtx(() => [
							createElementVNode("div", _hoisted_1$15, [
								createVNode(QIcon, {
									name: "music_note",
									color: "pink",
									size: "22px",
									class: "q-mr-xs"
								}),
								_cache[11] || (_cache[11] = createElementVNode("span", { class: "neon-logo" }, "NIGHTFLOW", -1)),
								_cache[12] || (_cache[12] = createElementVNode("span", { class: "neon-logo-badge" }, "AR", -1))
							]),
							createVNode(QTabs, {
								modelValue: activeTab.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
								class: "neon-nav-tabs",
								"no-caps": "",
								dense: "",
								style: { "flex": "1" }
							}, {
								default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
									return createVNode(QTab, {
										key: item.name,
										name: item.name,
										icon: item.icon,
										label: item.label
									}, null, 8, [
										"name",
										"icon",
										"label"
									]);
								}), 64))]),
								_: 1
							}, 8, ["modelValue"]),
							createVNode(QSpace),
							_cache[13] || (_cache[13] = createElementVNode("div", { class: "neon-user-info q-mr-sm" }, [createElementVNode("span", { class: "neon-username" }, "Admin"), createElementVNode("span", { class: "neon-caja-label" }, "Caja: $0")], -1)),
							createVNode(QAvatar, {
								class: "neon-avatar",
								size: "38px",
								icon: "person"
							})
						]),
						_: 1
					})]),
					_: 1
				}), createVNode(QPageContainer, null, {
					default: withCtx(() => [createVNode(QPage, { style: {
						"padding": "28px 24px",
						"max-width": "1200px",
						"margin": "0 auto"
					} }, {
						default: withCtx(() => [
							_cache[27] || (_cache[27] = createElementVNode("div", { class: "q-mb-lg neon-fade-in" }, [createElementVNode("h1", { class: "neon-title q-ma-none" }, "Dashboard"), createElementVNode("p", { class: "neon-subtitle q-ma-none" }, "Vista general de la noche de hoy")], -1)),
							createElementVNode("div", _hoisted_2$10, [
								createElementVNode("div", _hoisted_3$10, [createVNode(QCard, {
									class: "neon-card neon-card--purple",
									flat: ""
								}, {
									default: withCtx(() => [createVNode(QCardSection, {
										class: "row items-start justify-between no-wrap",
										style: { "padding": "20px" }
									}, {
										default: withCtx(() => [createElementVNode("div", null, [
											_cache[15] || (_cache[15] = createElementVNode("div", { class: "neon-metric-label" }, "Reservas Hoy", -1)),
											createElementVNode("div", _hoisted_4$6, toDisplayString(metrics.value.reservasHoy), 1),
											createElementVNode("div", _hoisted_5$4, [createVNode(QIcon, {
												name: "arrow_upward",
												size: "12px"
											}), _cache[14] || (_cache[14] = createTextVNode(" 12% vs ayer ", -1))])
										]), createElementVNode("div", _hoisted_6$3, [createVNode(QIcon, {
											name: "event_seat",
											size: "22px"
										})])]),
										_: 1
									})]),
									_: 1
								})]),
								createElementVNode("div", _hoisted_7$1, [createVNode(QCard, {
									class: "neon-card neon-card--cyan",
									flat: ""
								}, {
									default: withCtx(() => [createVNode(QCardSection, {
										class: "row items-start justify-between no-wrap",
										style: { "padding": "20px" }
									}, {
										default: withCtx(() => [createElementVNode("div", null, [
											_cache[16] || (_cache[16] = createElementVNode("div", { class: "neon-metric-label" }, "Ocupación", -1)),
											createElementVNode("div", _hoisted_8$1, toDisplayString(metrics.value.ocupacion) + "%", 1),
											createElementVNode("div", _hoisted_9$1, "Capacidad total: " + toDisplayString(metrics.value.totalMesas), 1)
										]), createElementVNode("div", _hoisted_10$1, [createVNode(QIcon, {
											name: "percent",
											size: "22px"
										})])]),
										_: 1
									})]),
									_: 1
								})]),
								createElementVNode("div", _hoisted_11$1, [createVNode(QCard, {
									class: "neon-card neon-card--green",
									flat: ""
								}, {
									default: withCtx(() => [createVNode(QCardSection, {
										class: "row items-start justify-between no-wrap",
										style: { "padding": "20px" }
									}, {
										default: withCtx(() => [createElementVNode("div", null, [
											_cache[18] || (_cache[18] = createElementVNode("div", { class: "neon-metric-label" }, "Ingresos Est.", -1)),
											createElementVNode("div", _hoisted_12$1, "$ " + toDisplayString(formatNumber(metrics.value.ingresos)), 1),
											createElementVNode("div", _hoisted_13$1, [createVNode(QIcon, {
												name: "arrow_upward",
												size: "12px"
											}), _cache[17] || (_cache[17] = createTextVNode(" 8% vs semana pasada ", -1))])
										]), createElementVNode("div", _hoisted_14$1, [createVNode(QIcon, {
											name: "attach_money",
											size: "22px"
										})])]),
										_: 1
									})]),
									_: 1
								})]),
								createElementVNode("div", _hoisted_15$1, [createVNode(QCard, {
									class: "neon-card neon-card--gold neon-pulse-gold",
									flat: ""
								}, {
									default: withCtx(() => [createVNode(QCardSection, {
										class: "row items-start justify-between no-wrap",
										style: { "padding": "20px" }
									}, {
										default: withCtx(() => [createElementVNode("div", null, [
											_cache[19] || (_cache[19] = createElementVNode("div", { class: "neon-metric-label" }, "VIP Activos", -1)),
											createElementVNode("div", _hoisted_16$1, toDisplayString(metrics.value.vipActivos), 1),
											_cache[20] || (_cache[20] = createElementVNode("div", { class: "neon-metric-sub" }, "Mesas exclusivas", -1))
										]), createElementVNode("div", _hoisted_17$1, [createVNode(QIcon, {
											name: "workspace_premium",
											size: "22px"
										})])]),
										_: 1
									})]),
									_: 1
								})])
							]),
							createElementVNode("div", _hoisted_18$1, [createElementVNode("div", _hoisted_19$1, [createVNode(QCard, {
								class: "neon-card",
								flat: "",
								style: { "height": "100%" }
							}, {
								default: withCtx(() => [createVNode(QCardSection, { class: "neon-card-section" }, {
									default: withCtx(() => [_cache[21] || (_cache[21] = createElementVNode("div", { class: "neon-card-title q-mb-md" }, "Acciones Rápidas", -1)), createElementVNode("div", _hoisted_20$1, [
										createVNode(QBtn, {
											class: "neon-btn-primary full-width",
											icon: "add",
											label: "Nueva Reserva",
											onClick: openNuevaReserva,
											"no-caps": ""
										}),
										createVNode(QBtn, {
											class: "neon-btn-secondary full-width",
											icon: "visibility",
											label: "Ver Mapa de Mesas",
											onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "mesas"),
											"no-caps": ""
										}),
										createVNode(QBtn, {
											class: "neon-btn-purple full-width",
											icon: "calendar_month",
											label: "Crear Evento",
											onClick: openCrearEvento,
											"no-caps": ""
										})
									])]),
									_: 1
								})]),
								_: 1
							})]), createElementVNode("div", _hoisted_21, [createVNode(QCard, {
								class: "neon-card",
								flat: ""
							}, {
								default: withCtx(() => [createVNode(QCardSection, { class: "neon-card-section" }, {
									default: withCtx(() => [createElementVNode("div", _hoisted_22, [_cache[23] || (_cache[23] = createElementVNode("span", { class: "neon-card-title" }, "Reservas Recientes", -1)), createElementVNode("span", {
										class: "neon-link",
										onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "reservas")
									}, [_cache[22] || (_cache[22] = createTextVNode(" Ver todas ", -1)), createVNode(QIcon, {
										name: "arrow_forward",
										size: "14px"
									})])]), createVNode(QTable, {
										rows: reservasRecientes.value,
										columns: columnas,
										class: "neon-table",
										flat: "",
										"hide-bottom": "",
										"rows-per-page-options": [0],
										"row-key": "id"
									}, {
										"body-cell-cliente": withCtx((props) => [createVNode(QTd, { props }, {
											default: withCtx(() => [createElementVNode("div", _hoisted_23, toDisplayString(props.row.cliente), 1)]),
											_: 2
										}, 1032, ["props"])]),
										"body-cell-mesa": withCtx((props) => [createVNode(QTd, { props }, {
											default: withCtx(() => [createVNode(QChip, {
												class: normalizeClass(["neon-chip", props.row.esVip ? "neon-chip--gold" : "neon-chip--purple"]),
												dense: "",
												outline: ""
											}, {
												default: withCtx(() => [props.row.esVip ? (openBlock(), createBlock(QIcon, {
													key: 0,
													name: "workspace_premium",
													size: "10px",
													class: "q-mr-xs"
												})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(props.row.mesa), 1)]),
												_: 2
											}, 1032, ["class"])]),
											_: 2
										}, 1032, ["props"])]),
										"body-cell-hora": withCtx((props) => [createVNode(QTd, { props }, {
											default: withCtx(() => [createElementVNode("span", _hoisted_24, toDisplayString(props.row.hora), 1)]),
											_: 2
										}, 1032, ["props"])]),
										"body-cell-estado": withCtx((props) => [createVNode(QTd, { props }, {
											default: withCtx(() => [createElementVNode("span", { class: normalizeClass(["neon-badge", `neon-badge--${props.row.estado.toLowerCase()}`]) }, toDisplayString(props.row.estado), 3)]),
											_: 2
										}, 1032, ["props"])]),
										"body-cell-accion": withCtx((props) => [createVNode(QTd, {
											props,
											class: "text-center"
										}, {
											default: withCtx(() => [createVNode(QBtn, {
												class: "neon-btn-icon",
												icon: "visibility",
												flat: "",
												round: "",
												dense: "",
												size: "sm",
												onClick: ($event) => verReserva(props.row)
											}, {
												default: withCtx(() => [createVNode(QTooltip, { class: "bg-purple-9 text-caption" }, {
													default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("Ver detalle", -1)])]),
													_: 1
												})]),
												_: 1
											}, 8, ["onClick"])]),
											_: 2
										}, 1032, ["props"])]),
										_: 1
									}, 8, ["rows"])]),
									_: 1
								})]),
								_: 1
							})])]),
							createElementVNode("div", _hoisted_25, [createElementVNode("div", _hoisted_26, [createVNode(QCard, {
								class: "neon-card",
								flat: ""
							}, {
								default: withCtx(() => [createVNode(QCardSection, { class: "neon-card-section" }, {
									default: withCtx(() => [_cache[26] || (_cache[26] = createElementVNode("div", { class: "row items-center justify-between q-mb-md" }, [createElementVNode("span", { class: "neon-card-title" }, "Mapa de Mesas — Noche actual"), createElementVNode("div", { class: "row items-center q-gutter-sm" }, [
										createElementVNode("span", { class: "neon-badge neon-badge--confirmada" }, "Disponible"),
										createElementVNode("span", { class: "neon-badge neon-badge--cancelada" }, "Ocupada"),
										createElementVNode("span", { class: "neon-badge neon-badge--finalizada" }, "Reservada"),
										createElementVNode("span", { class: "neon-badge neon-badge--vip" }, "VIP")
									])], -1)), createElementVNode("div", _hoisted_27, [_cache[25] || (_cache[25] = createElementVNode("div", { style: {
										"position": "absolute",
										"top": "14px",
										"left": "20px",
										"font-size": "0.68rem",
										"color": "var(--neon-text-muted)",
										"text-transform": "uppercase",
										"letter-spacing": "0.1em"
									} }, " Pista Principal ", -1)), createElementVNode("div", _hoisted_28, [(openBlock(true), createElementBlock(Fragment, null, renderList(mesasDemo.value, (mesa) => {
										return openBlock(), createElementBlock("div", {
											key: mesa.id,
											class: normalizeClass([
												"neon-table-item",
												`neon-table-item--${mesa.estado}`,
												mesa.esVip ? "neon-table-item--vip" : ""
											]),
											style: { "position": "relative" },
											onClick: ($event) => clickMesa(mesa)
										}, [
											createVNode(QIcon, {
												name: mesa.esVip ? "workspace_premium" : "table_restaurant",
												size: "18px"
											}, null, 8, ["name"]),
											createElementVNode("span", null, toDisplayString(mesa.numero), 1),
											createVNode(QTooltip, { class: "bg-grey-9 text-caption" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(mesa.numero) + " · " + toDisplayString(mesa.estado) + " · Cap. " + toDisplayString(mesa.capacidad), 1)]),
												_: 2
											}, 1024)
										], 10, _hoisted_29);
									}), 128))])])]),
									_: 1
								})]),
								_: 1
							})])])
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}), createVNode(QDialog, {
				modelValue: showNuevaReserva.value,
				"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => showNuevaReserva.value = $event),
				class: "neon-dialog-card"
			}, {
				default: withCtx(() => [createVNode(QCard, { style: {
					"min-width": "420px",
					"max-width": "520px",
					"width": "100%"
				} }, {
					default: withCtx(() => [
						createElementVNode("div", _hoisted_30, [createElementVNode("div", _hoisted_31, [_cache[28] || (_cache[28] = createElementVNode("span", { class: "neon-dialog-title" }, "Nueva Reserva", -1)), withDirectives(createVNode(QBtn, {
							class: "neon-btn-icon",
							icon: "close",
							flat: "",
							round: "",
							dense: ""
						}, null, 512), [[ClosePopup]])])]),
						createVNode(QCardSection, { style: {
							"padding": "20px",
							"display": "flex",
							"flex-direction": "column",
							"gap": "16px"
						} }, {
							default: withCtx(() => [
								createVNode(QInput, {
									modelValue: form.value.cliente,
									"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.cliente = $event),
									label: "Nombre del cliente",
									class: "neon-input",
									outlined: "",
									dense: ""
								}, {
									prepend: withCtx(() => [createVNode(QIcon, { name: "person" })]),
									_: 1
								}, 8, ["modelValue"]),
								createVNode(QInput, {
									modelValue: form.value.telefono,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.telefono = $event),
									label: "Teléfono",
									class: "neon-input",
									outlined: "",
									dense: ""
								}, {
									prepend: withCtx(() => [createVNode(QIcon, { name: "phone" })]),
									_: 1
								}, 8, ["modelValue"]),
								createElementVNode("div", _hoisted_32, [createElementVNode("div", _hoisted_33, [createVNode(QInput, {
									modelValue: form.value.fecha,
									"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.fecha = $event),
									label: "Fecha",
									class: "neon-input",
									outlined: "",
									dense: "",
									type: "date"
								}, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_34, [createVNode(QInput, {
									modelValue: form.value.hora,
									"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.hora = $event),
									label: "Hora",
									class: "neon-input",
									outlined: "",
									dense: "",
									type: "time"
								}, null, 8, ["modelValue"])])]),
								createVNode(QSelect, {
									modelValue: form.value.mesa,
									"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.mesa = $event),
									options: opcionesMesas.value,
									label: "Mesa",
									class: "neon-input",
									outlined: "",
									dense: "",
									"popup-content-class": "neon-select-menu"
								}, {
									prepend: withCtx(() => [createVNode(QIcon, { name: "table_restaurant" })]),
									_: 1
								}, 8, ["modelValue", "options"]),
								createVNode(QInput, {
									modelValue: form.value.personas,
									"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.personas = $event),
									label: "Cantidad de personas",
									class: "neon-input",
									outlined: "",
									dense: "",
									type: "number",
									min: "1"
								}, {
									prepend: withCtx(() => [createVNode(QIcon, { name: "group" })]),
									_: 1
								}, 8, ["modelValue"]),
								createVNode(QInput, {
									modelValue: form.value.notas,
									"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.notas = $event),
									label: "Notas (opcional)",
									class: "neon-input",
									outlined: "",
									dense: "",
									type: "textarea",
									rows: "2",
									autogrow: ""
								}, null, 8, ["modelValue"])
							]),
							_: 1
						}),
						createVNode(QCardActions, {
							align: "right",
							style: {
								"padding": "12px 20px 20px",
								"gap": "10px"
							}
						}, {
							default: withCtx(() => [withDirectives(createVNode(QBtn, {
								class: "neon-btn-secondary",
								label: "Cancelar",
								"no-caps": ""
							}, null, 512), [[ClosePopup]]), createVNode(QBtn, {
								class: "neon-btn-primary",
								label: "Confirmar Reserva",
								"no-caps": "",
								onClick: guardarReserva
							})]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"])], 64);
		};
	}
}), [["__scopeId", "data-v-d67db6c0"]]);
//#endregion
//#region src/layouts/LandingLayout.vue
var LandingLayout_default = /* @__PURE__ */ defineComponent({
	__name: "LandingLayout",
	setup(__props) {
		const leftDrawerOpen = ref(false);
		const store = useLoginStore();
		const env = process.env;
		const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QLayout, {
				view: "hHh Lpr lff",
				container: "",
				style: { "height": "100vh" },
				class: "shadow-0"
			}, {
				default: withCtx(() => [createVNode(QHeader, { class: normalizeClass(_ctx.$q.dark.isActive ? "dark-hea" : "bg-primary") }, {
					default: withCtx(() => [createVNode(QToolbar, null, {
						default: withCtx(() => [
							unref(store).dataUser.usuario ? (openBlock(), createBlock(QBtn, {
								key: 0,
								flat: "",
								dense: "",
								round: "",
								onClick: toggleLeftDrawer,
								"aria-label": "Menu",
								icon: "menu"
							})) : createCommentVNode("", true),
							createVNode(app_logo_default),
							createVNode(QBtn, {
								flat: "",
								"no-caps": "",
								"no-wrap": "",
								class: "q-ml-xs",
								to: "/"
							}, {
								default: withCtx(() => [createVNode(app_name_default)]),
								_: 1
							}),
							createVNode(QSpace),
							createVNode(QToggle, {
								modelValue: _ctx.$q.dark.isActive,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.$q.dark.isActive = $event),
								color: "white",
								"unchecked-icon": "brightness_7",
								"checked-icon": "dark_mode"
							}, null, 8, ["modelValue"]),
							unref(env).SHOW_LOGIN_BUTTON ? (openBlock(), createBlock(QBtn, {
								key: 1,
								flat: "",
								"no-caps": "",
								"no-wrap": "",
								class: "q-ml-xs",
								to: "/login"
							}, {
								default: withCtx(() => [createVNode(QIcon, { name: "person" }), createVNode(QTooltip, null, {
									default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Ingresar al sistema ", -1)])]),
									_: 1
								})]),
								_: 1
							})) : createCommentVNode("", true)
						]),
						_: 1
					})]),
					_: 1
				}, 8, ["class"]), createVNode(QPageContainer, null, {
					default: withCtx(() => [createVNode(landing_index_default)]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/pages/auth/usuarios/utils.ts
var columns$4 = [
	{
		name: "index",
		field: "index",
		label: "#"
	},
	{
		name: "id",
		field: "id",
		label: "ID"
	},
	{
		name: "foto_url",
		field: "foto_url",
		label: "img"
	},
	{
		name: "nombres",
		field: "nombres",
		label: "nombres"
	},
	{
		name: "apellido1",
		field: "apellido1",
		label: "apellido1"
	},
	{
		name: "apellido2",
		field: "apellido2",
		label: "apellido2"
	},
	{
		name: "documento",
		field: "documento",
		label: "documento"
	},
	{
		name: "celular",
		field: "celular",
		label: "celular"
	},
	{
		name: "correo",
		field: "correo",
		label: "correo"
	},
	{
		name: "sexo",
		field: "sexo",
		label: "sexo"
	},
	{
		name: "direccion",
		field: "direccion",
		label: "direccion"
	},
	{
		name: "username",
		field: "username",
		label: "username"
	},
	{
		name: "estado",
		field: "estado",
		label: "estado"
	},
	{
		name: "oauth_id",
		field: "oauth_id",
		label: "oauth_id"
	},
	{
		name: "latitud",
		field: "latitud",
		label: "latitud"
	},
	{
		name: "longitud",
		field: "longitud",
		label: "longitud"
	},
	{
		name: "conexiones",
		field: "conexiones",
		label: "conexiones"
	},
	{
		name: "last_login",
		field: "last_login",
		label: "last_login"
	},
	{
		name: "fecha_update",
		field: "fecha_update",
		label: "fecha_update"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "fecha_registro"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
var columnas$1 = (more_datos) => {
	if (more_datos) return [
		"index",
		"id",
		"foto_url",
		"nombres",
		"apellido1",
		"apellido2",
		"documento",
		"celular",
		"correo",
		"sexo",
		"direccion",
		"username",
		"last_login",
		"fecha_registro",
		"fecha_update",
		"estado",
		"conexiones",
		"latitud",
		"longitud",
		"opt"
	];
	else return [
		"index",
		"foto_url",
		"nombres",
		"apellido1",
		"apellido2",
		"last_login",
		"conexiones",
		"opt"
	];
};
var columns_roles = [
	{
		name: "nombre",
		field: "nombre",
		label: "rol",
		align: "left"
	},
	{
		name: "menus",
		field: "menus",
		label: "menus",
		align: "left"
	},
	{
		name: "permisos",
		field: "permisos",
		label: "permisos",
		align: "left"
	},
	{
		name: "usuarios",
		field: "usuarios",
		label: "usuarios",
		align: "left"
	}
];
var columns_unidades = [{
	name: "nombre",
	field: "nombre",
	label: "unidad",
	align: "left"
}];
var columns_permisos$1 = [
	{
		name: "nombre",
		field: "nombre",
		label: "",
		align: "left"
	},
	{
		name: "metodo",
		field: "metodo",
		label: "metodo",
		align: "left"
	},
	{
		name: "grupo",
		field: "grupo",
		label: "grupo",
		align: "left"
	}
];
var columns_menus$1 = [{
	name: "label",
	field: "label",
	label: "",
	align: "left"
}, {
	name: "path",
	field: "path",
	label: "path",
	align: "left"
}];
var columns_rolunidad = [
	{
		name: "unidad",
		field: "unidad",
		label: "unidad",
		align: "left"
	},
	{
		name: "rol",
		field: "rol",
		label: "rol",
		align: "left"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
//#endregion
//#region src/pages/auth/usuarios/botonera-opt.vue
var botonera_opt_default$3 = /* @__PURE__ */ defineComponent({
	__name: "botonera-opt",
	props: { props: { type: Object } },
	emits: ["clicked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const botones = [{
			text: "Editar",
			icon: "edit",
			flag: "editar"
		}];
		const clickbtn = (flag, row) => {
			emit("clicked", flag, row.row);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(QBtn, {
				size: "xs",
				flat: "",
				icon: "more_vert"
			}, {
				default: withCtx(() => [createVNode(QMenu, {
					"transition-show": "flip-right",
					fit: ""
				}, {
					default: withCtx(() => [createVNode(QList, null, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(botones, (b, i) => {
							return createVNode(QItem, {
								key: i,
								dense: "",
								clickable: "",
								onClick: ($event) => clickbtn(b.flag, __props.props)
							}, {
								default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
									default: withCtx(() => [createVNode(QIcon, {
										name: b.icon,
										size: "xs",
										right: "",
										class: "q-px-none"
									}, null, 8, ["name"])]),
									_: 2
								}, 1024), createVNode(QItemSection, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(b.text), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 64))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/pages/auth/usuarios/rol-unidad-select.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$14 = { class: "row q-col-gutter-sm" };
var _hoisted_2$9 = { class: "col-xs-12 col-sm-5" };
var _hoisted_3$9 = { class: "col-xs-12 col-sm-7" };
//#endregion
//#region src/pages/auth/usuarios/rol-unidad-select.vue
var rol_unidad_select_default = /* @__PURE__ */ defineComponent({
	__name: "rol-unidad-select",
	setup(__props, { expose: __expose }) {
		const alert = ref(false);
		const unidades = ref([]);
		const roles = ref([]);
		const unidades_select = ref();
		const roles_select = ref();
		let resolvePromise;
		const open = (unis, rls) => {
			alert.value = true;
			unidades_select.value = [];
			unidades.value = unis;
			roles.value = rls;
			roles_select.value = [];
			return new Promise((resolve) => {
				resolvePromise = resolve;
			});
		};
		const select = () => {
			if (unidades_select.value.length == 0 || roles_select.value.length == 0) {
				Notify.create({
					message: "seleccione",
					color: "orange",
					timeout: 500
				});
				return;
			}
			const us = unidades_select.value;
			const r = roles_select.value[0];
			resolvePromise({
				us,
				r
			});
			alert.value = false;
		};
		const close = () => {
			resolvePromise();
			alert.value = false;
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 630px" }, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								_cache[6] || (_cache[6] = createElementVNode("div", { class: "text-h6" }, "Selecciona la unidad y asigne el rol ", -1)),
								createVNode(QSpace),
								withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
									default: withCtx(() => [..._cache[5] || (_cache[5] = [createElementVNode("b", null, "x", -1)])]),
									_: 1
								})), [[ClosePopup]])
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, { class: "q-mt-none q-mb-lg" }), createElementVNode("div", _hoisted_1$14, [createElementVNode("div", _hoisted_2$9, [_cache[7] || (_cache[7] = createElementVNode("b", { class: "text-primary" }, "Seleccione una unidad:", -1)), createVNode(QTable, {
								rows: unidades.value,
								columns: unref(columns_unidades),
								flat: "",
								dense: "",
								square: "",
								"hide-pagination": "",
								"rows-per-page-options": [0],
								"row-key": "id",
								selection: "multiple",
								selected: unidades_select.value,
								"onUpdate:selected": _cache[0] || (_cache[0] = ($event) => unidades_select.value = $event)
							}, null, 8, [
								"rows",
								"columns",
								"selected"
							])]), createElementVNode("div", _hoisted_3$9, [_cache[8] || (_cache[8] = createElementVNode("b", { class: "text-primary" }, "Asigne un rol:", -1)), createVNode(QTable, {
								rows: roles.value,
								columns: unref(columns_roles),
								flat: "",
								dense: "",
								square: "",
								"hide-pagination": "",
								"rows-per-page-options": [0],
								"row-key": "id",
								selection: "single",
								selected: roles_select.value,
								"onUpdate:selected": _cache[1] || (_cache[1] = ($event) => roles_select.value = $event)
							}, null, 8, [
								"rows",
								"columns",
								"selected"
							])])])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "right" }, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								label: "OK",
								color: "primary",
								onClick: _cache[2] || (_cache[2] = ($event) => select())
							}), createVNode(QBtn, {
								flat: "",
								label: "cerrar",
								color: "primary",
								onClick: _cache[3] || (_cache[3] = ($event) => close())
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
//#region src/pages/auth/usuarios/validator.ts
var val_password = (val, input) => {
	if (!val && !input.id) return "datos obligatorio";
	if (!val && input.id) return true;
	if (val.length > 64) return "maximo 64 caracteres";
};
var val_direccion = (val) => {
	if (!val) return true;
	if (val.length > 100) return "maximo 100 caracteres";
};
var val_correo = (val) => {
	if (!val) return true;
	if (val.length > 100) return "maximo 100 caracteres";
};
var val_celular = (val) => {
	if (!val) return true;
	if (val.length > 20) return "maximo 20 caracteres";
};
var val_documento = (val) => {
	if (!val) return true;
	if (val.length > 20) return "maximo 20 caracteres";
};
var val_apellido2 = (val) => {
	if (!val) return true;
	if (val.length > 30) return "maximo 30 caracteres";
};
//#endregion
//#region src/pages/auth/usuarios/registrar-upd.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$13 = { class: "text-h6" };
var _hoisted_2$8 = { class: "row q-col-gutter-sm" };
var _hoisted_3$8 = { class: "col-xs-12 col-lg-4 col-sm-6" };
var _hoisted_4$5 = { class: "row q-col-gutter-xs" };
var _hoisted_5$3 = { class: "col-xs-12 col-sm-9 items-center" };
var _hoisted_6$2 = { class: "col-xs-12 col-sm-4" };
var _hoisted_7 = { class: "col-xs-12 col-sm-4" };
var _hoisted_8 = { class: "col-xs-12 col-sm-4" };
var _hoisted_9 = { class: "col-xs-12 col-sm-6" };
var _hoisted_10 = { class: "col-xs-12 col-sm-6" };
var _hoisted_11 = { class: "col-xs-12 col-sm-4" };
var _hoisted_12 = { class: "col-xs-12 col-sm-4" };
var _hoisted_13 = { class: "col-xs-12 col-sm-4" };
var _hoisted_14 = { class: "col-xs-12 col-sm-6" };
var _hoisted_15 = { class: "col-xs-12 col-sm-6" };
var _hoisted_16 = { class: "col-xs-12 col-sm-6" };
var _hoisted_17 = { class: "col-xs-12 col-sm-6" };
var _hoisted_18 = { class: "q-pl-md" };
var _hoisted_19 = { class: "col-xs-12 col-lg-4 col-sm-6" };
var _hoisted_20 = { class: "col-xs-12 col-lg-4 col-sm-6" };
//#endregion
//#region src/pages/auth/usuarios/registrar-upd.vue
var registrar_upd_default$3 = /* @__PURE__ */ defineComponent({
	__name: "registrar-upd",
	emits: ["sucess"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const alert = ref(false);
		const loading = ref(false);
		const loading_roles = ref(false);
		const loading_unidades = ref(false);
		const loading_permisos = ref(false);
		const loading_menus = ref(false);
		const input = ref({});
		const refRolUnidad = ref();
		const refGeo = ref();
		const rolesService = new RolesService();
		const unidadesService = new UnidadesService();
		const permisosService = new PermisosService();
		const menusService = new MenusService();
		const usuariosService = new UsuariosService();
		const perfilService = new PerfilService();
		const roles = ref([]);
		const unidades = ref([]);
		const permisos = ref([]);
		const menus = ref([]);
		const rol_unidades = ref([]);
		const roles_select = ref([]);
		const permisos_select = ref([]);
		const menus_select = ref([]);
		const foto_file = ref();
		const foto_64 = ref("");
		const emit = __emit;
		const open = (row) => {
			alert.value = true;
			input.value = {};
			permisos_select.value = [];
			roles_select.value = [];
			menus_select.value = [];
			rol_unidades.value = [];
			foto_file.value = null;
			foto_64.value = "";
			getroles();
			getunidades();
			getpermisos();
			getmenus();
			if (row) {
				input.value.id = row.id;
				input.value.nombres = row.nombres;
				input.value.apellido1 = row.apellido1;
				input.value.apellido2 = row.apellido2;
				input.value.documento = row.documento;
				input.value.celular = row.celular;
				input.value.sexo = row.sexo;
				input.value.correo = row.correo;
				input.value.username = row.username;
				getuserdata(row.id);
			}
		};
		const getroles = async () => {
			loading_roles.value = true;
			const r = await rolesService.roles();
			if (r && r.roles) roles.value = r.roles;
			loading_roles.value = false;
		};
		const getpermisos = async () => {
			loading_permisos.value = true;
			const r = await permisosService.permisos();
			if (r && r.permisos) permisos.value = r.permisos;
			loading_permisos.value = false;
		};
		const getunidades = async () => {
			loading_unidades.value = true;
			const r = await unidadesService.unidades();
			if (r && r.unidades) unidades.value = r.unidades;
			loading_unidades.value = false;
		};
		const getmenus = async () => {
			loading_menus.value = true;
			const r = await menusService.menus();
			if (r && r.menus) menus.value = r.menus;
			loading_menus.value = false;
		};
		const quitrolunidad = (row) => {
			const r = row.rol_id;
			const u = row.unidad_id;
			rol_unidades.value = rol_unidades.value.filter((x) => x.rol_id != r || x.unidad_id != u);
		};
		const filevalue = (file) => {
			if (file) {
				const reader = new FileReader();
				reader.onload = function(e) {
					if (e.target) input.value.foto64 = e.target.result;
				};
				reader.readAsDataURL(file);
			} else input.value.foto64 = null;
		};
		const onRejected = (rejectedEntries) => {
			const mf = rejectedEntries[0].failedPropValidation;
			mostrarNotifyError(`${rejectedEntries.length} no cumple la restriccion: ${mf}`);
		};
		const getuserdata = async (id) => {
			loading.value = true;
			const row = (await usuariosService.usuario_by_id(id)).usuario_by_id;
			input.value.nombres = row.nombres;
			input.value.apellido1 = row.apellido1;
			input.value.apellido2 = row.apellido2;
			input.value.documento = row.documento;
			input.value.celular = row.celular;
			input.value.sexo = row.sexo;
			input.value.correo = row.correo;
			input.value.username = row.username;
			input.value.latitud = row.latitud;
			input.value.longitud = row.longitud;
			row.roles.forEach((x) => {
				const ru = {};
				ru.rol = x.rol_name;
				ru.unidad = x.unidad_name;
				ru.rol_id = x.rol_id;
				ru.unidad_id = x.unidad_id;
				rol_unidades.value.push(ru);
			});
			row.permisos_sueltos.forEach((x) => {
				permisos_select.value.push({ metodo: x.metodo });
			});
			row.menus_sueltos.forEach((x) => {
				menus_select.value.push({ id: x.id });
			});
			loading.value = false;
			getFoto(row);
		};
		const getFoto = async (us) => {
			const url = us.foto_url;
			if (!url) return url;
			const res = await perfilService.get_imagen(url);
			if (res && res.get_imagen) foto_64.value = res.get_imagen;
			init_zoomer();
		};
		const openGeo = async () => {
			const lt = input.value.latitud;
			const ln = input.value.longitud;
			const { lat, lng } = await refGeo.value.open(lt, ln);
			input.value.latitud = lat;
			input.value.longitud = lng;
		};
		const openrolunidad = async () => {
			const { us, r } = await refRolUnidad.value.open(unidades.value, roles.value);
			us.forEach((u) => {
				const ru = {};
				ru.rol = r.nombre;
				ru.unidad = u.nombre;
				ru.rol_id = r.id;
				ru.unidad_id = u.id;
				if (rol_unidades.value.find((x) => x.unidad_id == u.id)) mostrarNotifyError("no se permite duplicados: " + u.nombre);
				else rol_unidades.value.push(ru);
			});
		};
		const onSubmit = () => {
			const permis = permisos_select.value.map((x) => x.metodo);
			const mens = menus_select.value.map((x) => x.id);
			const rolunis = rol_unidades.value.map((x) => ({
				rol_id: x.rol_id,
				unidad_id: x.unidad_id
			}));
			if (rolunis.length == 0) {
				mostrarNotifyError("seleccione unidad con rol");
				return;
			}
			const s = input.value.sexo;
			if (s != "" && s != "F" && s != "M") {
				mostrarNotifyError("el sexo debe ser F o M");
				return;
			}
			input.value.roles = rolunis;
			input.value.permisos_sueltos = permis;
			input.value.menus_sueltos = mens;
			if (input.value.id) actualizar();
			else registrar();
		};
		const actualizar = async () => {
			loading.value = true;
			const r = await usuariosService.update_usuario(input.value);
			loading.value = false;
			if (r.update_usuario) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.update_usuario);
			}
		};
		const registrar = async () => {
			loading.value = true;
			const r = await usuariosService.create_usuario(input.value);
			loading.value = false;
			if (r.create_usuario) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.create_usuario);
			}
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => alert.value = $event),
				persistent: "",
				square: "",
				"full-width": ""
			}, {
				default: withCtx(() => [
					createVNode(QCard, null, {
						default: withCtx(() => [createVNode(QForm, {
							onSubmit,
							class: "q-gutter-md"
						}, {
							default: withCtx(() => [
								createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
									default: withCtx(() => [
										createElementVNode("div", _hoisted_1$13, toDisplayString(input.value.id ? "Editar" : "Registrar"), 1),
										createVNode(QSpace),
										withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
											default: withCtx(() => [..._cache[18] || (_cache[18] = [createElementVNode("b", null, "x", -1)])]),
											_: 1
										})), [[ClosePopup]])
									]),
									_: 1
								}),
								createVNode(QCardSection, { class: "q-pt-none" }, {
									default: withCtx(() => [createElementVNode("div", _hoisted_2$8, [
										createElementVNode("div", _hoisted_3$8, [createElementVNode("div", _hoisted_4$5, [
											createElementVNode("div", _hoisted_5$3, [foto_64.value ? (openBlock(), createBlock(QImg, {
												key: 0,
												class: "zoomer",
												src: foto_64.value,
												"spinner-color": "white"
											}, null, 8, ["src"])) : createCommentVNode("", true)]),
											createElementVNode("div", _hoisted_6$2, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.nombres,
												"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value.nombres = $event),
												modelModifiers: { trim: true },
												label: "* nombres:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => val && val.length > 0 || "campo obligatorio"]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_7, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.apellido1,
												"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value.apellido1 = $event),
												modelModifiers: { trim: true },
												label: "* apellido1:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => val && val.length > 0 || "campo obligatorio"]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_8, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.apellido2,
												"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value.apellido2 = $event),
												modelModifiers: { trim: true },
												label: "apellido2:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_apellido2)(val)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_9, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.username,
												"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => input.value.username = $event),
												modelModifiers: { trim: true },
												label: "* username:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => val && val.length > 0 || "campo obligatorio"]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_10, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.password,
												"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => input.value.password = $event),
												modelModifiers: { trim: true },
												label: "* password:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_password)(val, input.value)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_11, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.documento,
												"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => input.value.documento = $event),
												modelModifiers: { trim: true },
												label: "documento:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_documento)(val)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_12, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.celular,
												"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => input.value.celular = $event),
												modelModifiers: { trim: true },
												label: "celular:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_celular)(val)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_13, [createVNode(QRadio, {
												modelValue: input.value.sexo,
												"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => input.value.sexo = $event),
												val: "F",
												label: "F"
											}, null, 8, ["modelValue"]), createVNode(QRadio, {
												modelValue: input.value.sexo,
												"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => input.value.sexo = $event),
												val: "M",
												label: "M"
											}, null, 8, ["modelValue"])]),
											createElementVNode("div", _hoisted_14, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.correo,
												"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => input.value.correo = $event),
												modelModifiers: { trim: true },
												label: "correo:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_correo)(val)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_15, [createVNode(QInput, {
												outlined: "",
												modelValue: input.value.direccion,
												"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => input.value.direccion = $event),
												modelModifiers: { trim: true },
												label: "direccion:",
												dense: "",
												"lazy-rules": "",
												counter: "",
												rules: [(val) => unref(val_direccion)(val)]
											}, null, 8, ["modelValue", "rules"])]),
											createElementVNode("div", _hoisted_16, [createVNode(QFile, {
												style: { "min-width": "50px" },
												clearable: "",
												modelValue: foto_file.value,
												"onUpdate:modelValue": [_cache[11] || (_cache[11] = ($event) => foto_file.value = $event), _cache[12] || (_cache[12] = ($event) => filevalue($event))],
												dense: "",
												accept: "image/*",
												disable: loading.value,
												square: "",
												outlined: "",
												color: "orange",
												label: "Seleccionar foto de perfil (2MB)",
												"max-file-size": "2097152",
												onRejected
											}, {
												prepend: withCtx(() => [createVNode(QIcon, { name: "upload" })]),
												default: withCtx(() => [createVNode(QTooltip, null, {
													default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode(" Seleccionar foto de perfil ", -1)])]),
													_: 1
												})]),
												_: 1
											}, 8, ["modelValue", "disable"])]),
											createElementVNode("div", _hoisted_17, [createVNode(QBtn, {
												color: "grey",
												icon: "fmd_good",
												dense: "",
												square: "",
												outline: "",
												onClick: _cache[13] || (_cache[13] = ($event) => openGeo())
											}, {
												default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode(" Ubicacion geografica ", -1)])]),
												_: 1
											}), createElementVNode("small", _hoisted_18, toDisplayString(input.value.latitud) + " " + toDisplayString(input.value.longitud), 1)])
										])]),
										createElementVNode("div", _hoisted_19, [createVNode(QBtn, {
											dense: "",
											outline: "",
											color: "primary",
											icon: "home",
											onClick: _cache[14] || (_cache[14] = ($event) => openrolunidad())
										}, {
											default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode(" Asignar unidad y rol ", -1)])]),
											_: 1
										}), createVNode(QList, {
											bordered: "",
											class: "rounded-borders q-mt-sm"
										}, {
											default: withCtx(() => [createVNode(QExpansionItem, {
												"expand-separator": "",
												icon: "home_work",
												label: "unidades -> rol",
												class: "bg-primary",
												caption: "obligatorio",
												dense: "",
												dark: "",
												"default-opened": ""
											}, {
												default: withCtx(() => [createVNode(QTable, {
													rows: rol_unidades.value,
													columns: unref(columns_rolunidad),
													flat: "",
													dense: "",
													square: "",
													"hide-pagination": "",
													"rows-per-page-options": [0],
													"row-key": "id"
												}, {
													"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
														default: withCtx(() => [createVNode(QBtn, {
															flat: "",
															dense: "",
															size: "xs",
															icon: "delete",
															color: "red",
															onClick: ($event) => quitrolunidad(props.row)
														}, null, 8, ["onClick"])]),
														_: 2
													}, 1032, ["props"])]),
													_: 1
												}, 8, ["rows", "columns"])]),
												_: 1
											})]),
											_: 1
										})]),
										createElementVNode("div", _hoisted_20, [createVNode(QList, {
											bordered: "",
											class: "rounded-borders"
										}, {
											default: withCtx(() => [
												createVNode(QExpansionItem, {
													"expand-separator": "",
													icon: "admin_panel_settings",
													label: "Permisos global",
													class: "bg-primary",
													caption: "opcional",
													dense: "",
													dark: ""
												}, {
													default: withCtx(() => [createVNode(QTable, {
														rows: permisos.value,
														columns: unref(columns_permisos$1),
														flat: "",
														dense: "",
														square: "",
														loading: loading_permisos.value,
														"hide-pagination": "",
														"rows-per-page-options": [0],
														"row-key": "metodo",
														selection: "multiple",
														selected: permisos_select.value,
														"onUpdate:selected": _cache[15] || (_cache[15] = ($event) => permisos_select.value = $event)
													}, null, 8, [
														"rows",
														"columns",
														"loading",
														"selected"
													])]),
													_: 1
												}),
												createVNode(QSeparator),
												createVNode(QExpansionItem, {
													"expand-separator": "",
													icon: "folder_shared",
													label: "Menus global",
													class: "bg-primary",
													caption: "opcional",
													dense: "",
													dark: ""
												}, {
													default: withCtx(() => [createVNode(QTable, {
														rows: menus.value,
														columns: unref(columns_menus$1),
														flat: "",
														dense: "",
														square: "",
														loading: loading_menus.value,
														"hide-pagination": "",
														"rows-per-page-options": [0],
														"row-key": "id",
														selection: "multiple",
														selected: menus_select.value,
														"onUpdate:selected": _cache[16] || (_cache[16] = ($event) => menus_select.value = $event)
													}, null, 8, [
														"rows",
														"columns",
														"loading",
														"selected"
													])]),
													_: 1
												})
											]),
											_: 1
										})])
									])]),
									_: 1
								}),
								createVNode(QCardActions, { align: "right" }, {
									default: withCtx(() => [createVNode(QBtn, {
										outline: "",
										loading: loading.value,
										label: "aceptar",
										square: "",
										icon: "check",
										type: "submit",
										color: "positive"
									}, null, 8, ["loading"]), withDirectives(createVNode(QBtn, {
										outline: "",
										disable: loading.value,
										label: "cerrar",
										square: "",
										icon: "close",
										color: "negative"
									}, null, 8, ["disable"]), [[ClosePopup]])]),
									_: 1
								})
							]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(rol_unidad_select_default, {
						ref_key: "refRolUnidad",
						ref: refRolUnidad
					}, null, 512),
					createVNode(geo_modalbk_default, {
						ref_key: "refGeo",
						ref: refGeo
					}, null, 512)
				]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region src/pages/auth/usuarios/usuarios-index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = ["src"];
//#endregion
//#region src/pages/auth/usuarios/usuarios-index.vue
var usuarios_index_default = /* @__PURE__ */ defineComponent({
	__name: "usuarios-index",
	setup(__props) {
		const perfilService = new PerfilService();
		const usrolsService = new UsuariosRolesService();
		const rows = ref([]);
		const filter = ref("");
		const loading = ref(false);
		const more_datos = ref(false);
		const refRegistrar = ref();
		const visibleColumns = ref([]);
		const roles = ref([]);
		const rol = ref();
		const getdatos = async () => {
			loading.value = true;
			rows.value = [];
			const q = {};
			q.rol = rol.value ? rol.value.id : null;
			roles.value = [];
			const r = await usrolsService.roles_y_usuarios(q);
			if (r && r.roles) roles.value = r.roles;
			if (r && r.usuarios) {
				const us = r.usuarios;
				for (let i = 0; i < us.length; i++) us[i].foto64 = "";
				rows.value = us;
				cargarImagenes();
			}
			loading.value = false;
		};
		const cargarImagenes = () => {
			for (let i = 0; i < rows.value.length; i++) getFoto(rows.value[i]);
		};
		const getFoto = async (us) => {
			const url = us.foto_url;
			if (!url) return url;
			const res = await perfilService.get_imagen(url);
			if (res && res.get_imagen) us.foto64 = res.get_imagen;
		};
		const onclick = (flag, row) => {
			if (flag == "editar") refRegistrar.value.open(row);
			else if (flag == "new") refRegistrar.value.open(row);
		};
		onMounted(async () => {
			rol.value = null;
			visibleColumns.value = columnas$1(more_datos.value);
			await getdatos();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage, { class: "q-pa-xs" }, {
				default: withCtx(() => [createVNode(QTable, {
					rows: rows.value,
					columns: unref(columns$4),
					"visible-columns": visibleColumns.value,
					flat: "",
					bordered: "",
					dense: "",
					filter: filter.value,
					loading: loading.value,
					"row-key": "id",
					"rows-per-page-options": [
						100,
						200,
						500,
						1e3
					]
				}, {
					"top-left": withCtx(() => [
						_cache[6] || (_cache[6] = createElementVNode("b", null, "Usuarios", -1)),
						createVNode(QBtn, {
							icon: "refresh",
							dense: "",
							flat: "",
							onClick: _cache[0] || (_cache[0] = ($event) => getdatos())
						}),
						createVNode(QToggle, {
							modelValue: more_datos.value,
							"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => more_datos.value = $event), _cache[2] || (_cache[2] = ($event) => visibleColumns.value = unref(columnas$1)(more_datos.value))],
							color: "orange",
							label: "mostrar otros datos",
							class: "q-my-none"
						}, null, 8, ["modelValue"])
					]),
					"top-right": withCtx(() => [
						createVNode(QInput, {
							outlined: "",
							dense: "",
							debounce: "300",
							modelValue: filter.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filter.value = $event),
							placeholder: "buscar...",
							clearable: ""
						}, {
							append: withCtx(() => [createVNode(QIcon, {
								size: "xs",
								name: "search"
							})]),
							_: 1
						}, 8, ["modelValue"]),
						createVNode(QSelect, {
							modelValue: rol.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => rol.value = $event),
							options: roles.value,
							"option-label": "nombre",
							dense: "",
							clearable: ""
						}, null, 8, ["modelValue", "options"]),
						createVNode(QBtn, {
							color: "green",
							icon: "add",
							outline: "",
							square: "",
							onClick: _cache[5] || (_cache[5] = ($event) => onclick("new", null))
						}, {
							default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" registrar ", -1)])]),
							_: 1
						})
					]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-foto_url": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [props.row.foto64 ? (openBlock(), createElementBlock("img", {
							key: 0,
							src: props.row.foto64,
							alt: "perfil",
							style: { "max-width": "22px" }
						}, null, 8, _hoisted_1$12)) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_update": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_update)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-last_login": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.last_login)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(botonera_opt_default$3, {
							props,
							onClicked: onclick
						}, null, 8, ["props"])]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, [
					"rows",
					"columns",
					"visible-columns",
					"filter",
					"loading"
				]), createVNode(registrar_upd_default$3, {
					ref_key: "refRegistrar",
					ref: refRegistrar,
					onSucess: getdatos
				}, null, 512)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/pages/auth/roles/utils.ts
var columns$3 = [
	{
		name: "index",
		field: "index",
		label: "#"
	},
	{
		name: "id",
		field: "id",
		label: "ID"
	},
	{
		name: "nombre",
		field: "nombre",
		label: "nombre"
	},
	{
		name: "descripcion",
		field: "descripcion",
		label: "descripcion"
	},
	{
		name: "jerarquia",
		field: "jerarquia",
		label: "jerarquia"
	},
	{
		name: "menus",
		field: "menus",
		label: "menus"
	},
	{
		name: "permisos",
		field: "permisos",
		label: "permisos"
	},
	{
		name: "usuarios",
		field: "usuarios",
		label: "usuarios"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "fecha_registro"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
var columns_permisos = [
	{
		name: "nombre",
		field: "nombre",
		label: "",
		align: "left"
	},
	{
		name: "metodo",
		field: "metodo",
		label: "metodo"
	},
	{
		name: "grupo",
		field: "grupo",
		label: "grupo"
	}
];
var columns_menus = [{
	name: "label",
	field: "label",
	label: "",
	align: "left"
}, {
	name: "path",
	field: "path",
	label: "path",
	align: "left"
}];
//#endregion
//#region src/pages/auth/roles/botonera-opt.vue
var botonera_opt_default$2 = /* @__PURE__ */ defineComponent({
	__name: "botonera-opt",
	props: { props: { type: Object } },
	emits: ["clicked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const botones = [{
			text: "Editar",
			icon: "edit",
			flag: "editar"
		}];
		const clickbtn = (flag, row) => {
			emit("clicked", flag, row.row);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(QBtn, {
				size: "xs",
				flat: "",
				icon: "more_vert"
			}, {
				default: withCtx(() => [createVNode(QMenu, {
					"transition-show": "flip-right",
					fit: ""
				}, {
					default: withCtx(() => [createVNode(QList, null, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(botones, (b, i) => {
							return createVNode(QItem, {
								key: i,
								dense: "",
								clickable: "",
								onClick: ($event) => clickbtn(b.flag, __props.props)
							}, {
								default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
									default: withCtx(() => [createVNode(QIcon, {
										name: b.icon,
										size: "xs",
										right: "",
										class: "q-px-none"
									}, null, 8, ["name"])]),
									_: 2
								}, 1024), createVNode(QItemSection, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(b.text), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 64))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/pages/auth/roles/registrar-upd.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$11 = { class: "text-h6" };
var _hoisted_2$7 = { class: "row q-col-gutter-sm" };
var _hoisted_3$7 = { class: "col-xs-12 col-lg-6" };
var _hoisted_4$4 = { class: "col-xs-12 col-lg-6" };
//#endregion
//#region src/pages/auth/roles/registrar-upd.vue
var registrar_upd_default$2 = /* @__PURE__ */ defineComponent({
	__name: "registrar-upd",
	emits: ["sucess"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const alert = ref(false);
		const loading = ref(false);
		const loading_permisos = ref(false);
		const loading_menus = ref(false);
		const input = ref({});
		const permisosService = new PermisosService();
		const menusService = new MenusService();
		const rolesService = new RolesService();
		const permisos = ref([]);
		const menus = ref([]);
		const permisos_select = ref([]);
		const menus_select = ref([]);
		const emit = __emit;
		const open = async (row) => {
			alert.value = true;
			input.value = {};
			menus.value = [];
			permisos.value = [];
			permisos_select.value = [];
			menus_select.value = [];
			getpermisos();
			await getmenus();
			if (row) {
				input.value.id = row.id;
				input.value.nombre = row.nombre;
				input.value.descripcion = row.descripcion;
				input.value.jerarquia = row.jerarquia;
				getrol(row.id);
			}
		};
		const getpermisos = async () => {
			loading_permisos.value = true;
			const r = await permisosService.permisos();
			if (r && r.permisos) permisos.value = r.permisos;
			loading_permisos.value = false;
		};
		const getmenus = async () => {
			loading_menus.value = true;
			const r = await menusService.menus();
			if (r && r.menus) menus.value = r.menus;
			loading_menus.value = false;
		};
		const getrol = async (id) => {
			loading.value = true;
			const r = await rolesService.rol_by_id(id);
			if (r && r.rol_by_id) {
				menus_select.value = r.rol_by_id.menus;
				permisos_select.value = r.rol_by_id.permisos;
			}
			loading.value = false;
		};
		const onSubmit = () => {
			const permis = permisos_select.value.map((x) => x.metodo);
			const mens = menus_select.value.map((x) => parseInt(x.id));
			if (mens.length == 0) {
				mostrarNotifyError("seleccione un menu");
				return;
			}
			if (permis.length == 0) {
				mostrarNotifyError("seleccione un permiso");
				return;
			}
			input.value.permisos = permis;
			input.value.menus = mens;
			if (input.value.id) actualizar();
			else registrar();
		};
		const actualizar = async () => {
			loading.value = true;
			const r = await rolesService.update_rol(input.value);
			loading.value = false;
			if (r.update_rol) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.update_rol);
			}
		};
		const registrar = async () => {
			loading.value = true;
			const r = await rolesService.create_rol(input.value);
			loading.value = false;
			if (r.create_rol) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.create_rol);
			}
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 400px" }, {
					default: withCtx(() => [createVNode(QForm, {
						onSubmit,
						class: "q-gutter-md"
					}, {
						default: withCtx(() => [
							createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
								default: withCtx(() => [
									createElementVNode("div", _hoisted_1$11, toDisplayString(input.value.id ? "Editar" : "Registrar"), 1),
									createVNode(QSpace),
									withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
										default: withCtx(() => [..._cache[6] || (_cache[6] = [createElementVNode("b", null, "x", -1)])]),
										_: 1
									})), [[ClosePopup]])
								]),
								_: 1
							}),
							createVNode(QCardSection, { class: "q-py-none" }, {
								default: withCtx(() => [createElementVNode("div", _hoisted_2$7, [createElementVNode("div", _hoisted_3$7, [
									createVNode(QInput, {
										outlined: "",
										modelValue: input.value.nombre,
										"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value.nombre = $event),
										modelModifiers: { trim: true },
										label: "nombre:",
										dense: "",
										"lazy-rules": "",
										counter: "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"]),
									createVNode(QInput, {
										outlined: "",
										modelValue: input.value.descripcion,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value.descripcion = $event),
										modelModifiers: { trim: true },
										label: "descripcion:",
										dense: "",
										"lazy-rules": "",
										counter: "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"]),
									createVNode(QInput, {
										outlined: "",
										type: "number",
										modelValue: input.value.jerarquia,
										"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value.jerarquia = $event),
										modelModifiers: { number: true },
										label: "jerarquia:",
										dense: "",
										"lazy-rules": "",
										rules: [(val) => val !== null && val !== "" || "campo obligatorio", (val) => val >= 0 && val < 100 || "debe ser mayor a cero"]
									}, null, 8, ["modelValue", "rules"])
								]), createElementVNode("div", _hoisted_4$4, [createVNode(QList, {
									bordered: "",
									class: "rounded-borders"
								}, {
									default: withCtx(() => [
										createVNode(QExpansionItem, {
											"expand-separator": "",
											icon: "perm_identity",
											label: "Menus para este rol",
											class: "bg-primary",
											caption: "obligatorio",
											dense: "",
											dark: ""
										}, {
											default: withCtx(() => [createVNode(QTable, {
												rows: menus.value,
												columns: unref(columns_menus),
												flat: "",
												dense: "",
												square: "",
												loading: loading_menus.value,
												"hide-pagination": "",
												"rows-per-page-options": [0],
												"row-key": "id",
												selection: "multiple",
												selected: menus_select.value,
												"onUpdate:selected": _cache[3] || (_cache[3] = ($event) => menus_select.value = $event)
											}, null, 8, [
												"rows",
												"columns",
												"loading",
												"selected"
											])]),
											_: 1
										}),
										createVNode(QSeparator),
										createVNode(QExpansionItem, {
											"expand-separator": "",
											icon: "perm_identity",
											label: "Permisos para este rol",
											class: "bg-primary",
											caption: "obligatorio",
											dense: "",
											dark: ""
										}, {
											default: withCtx(() => [createVNode(QTable, {
												rows: permisos.value,
												columns: unref(columns_permisos),
												flat: "",
												dense: "",
												square: "",
												loading: loading_permisos.value,
												"hide-pagination": "",
												"rows-per-page-options": [0],
												"row-key": "metodo",
												selection: "multiple",
												selected: permisos_select.value,
												"onUpdate:selected": _cache[4] || (_cache[4] = ($event) => permisos_select.value = $event)
											}, null, 8, [
												"rows",
												"columns",
												"loading",
												"selected"
											])]),
											_: 1
										})
									]),
									_: 1
								})])])]),
								_: 1
							}),
							createVNode(QCardActions, { align: "right" }, {
								default: withCtx(() => [createVNode(QBtn, {
									outline: "",
									loading: loading.value,
									label: "aceptar",
									square: "",
									icon: "check",
									type: "submit",
									color: "positive"
								}, null, 8, ["loading"]), withDirectives(createVNode(QBtn, {
									outline: "",
									disable: loading.value,
									label: "cerrar",
									square: "",
									icon: "close",
									color: "negative"
								}, null, 8, ["disable"]), [[ClosePopup]])]),
								_: 1
							})
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region src/pages/auth/roles/roles-index.vue
var roles_index_default = /* @__PURE__ */ defineComponent({
	__name: "roles-index",
	setup(__props) {
		const rolesService = new RolesService();
		const rows = ref([]);
		const filter = ref("");
		const loading = ref(false);
		const refRegistrar = ref();
		const getdatos = async () => {
			loading.value = true;
			rows.value = [];
			const r = await rolesService.roles();
			if (r && r.roles) rows.value = r.roles;
			loading.value = false;
		};
		const onclick = (flag, row) => {
			if (flag == "editar") refRegistrar.value.open(row);
			else if (flag == "new") refRegistrar.value.open(row);
		};
		onMounted(async () => {
			await getdatos();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage, { class: "q-pa-xs" }, {
				default: withCtx(() => [createVNode(QTable, {
					title: "Roles",
					rows: rows.value,
					columns: unref(columns$3),
					flat: "",
					bordered: "",
					dense: "",
					filter: filter.value,
					loading: loading.value,
					"row-key": "id",
					"hide-pagination": "",
					"rows-per-page-options": [0]
				}, {
					"top-right": withCtx(() => [createVNode(QInput, {
						outlined: "",
						dense: "",
						debounce: "300",
						modelValue: filter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event),
						placeholder: "buscar...",
						clearable: ""
					}, {
						append: withCtx(() => [createVNode(QIcon, {
							size: "xs",
							name: "search"
						})]),
						_: 1
					}, 8, ["modelValue"]), createVNode(QBtn, {
						color: "green",
						icon: "add",
						outline: "",
						square: "",
						onClick: _cache[1] || (_cache[1] = ($event) => onclick("new", null))
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" registrar ", -1)])]),
						_: 1
					})]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(botonera_opt_default$2, {
							props,
							onClicked: onclick
						}, null, 8, ["props"])]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, [
					"rows",
					"columns",
					"filter",
					"loading"
				]), createVNode(registrar_upd_default$2, {
					ref_key: "refRegistrar",
					ref: refRegistrar,
					onSucess: getdatos
				}, null, 512)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/pages/auth/unidades/utils.ts
var columns$2 = [
	{
		name: "index",
		field: "index",
		label: "#"
	},
	{
		name: "id",
		field: "id",
		label: "ID"
	},
	{
		name: "nombre",
		field: "nombre",
		label: "nombre"
	},
	{
		name: "descripcion",
		field: "descripcion",
		label: "descripcion"
	},
	{
		name: "orden",
		field: "orden",
		label: "orden"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "fecha_registro"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
//#endregion
//#region src/pages/auth/unidades/botonera-opt.vue
var botonera_opt_default$1 = /* @__PURE__ */ defineComponent({
	__name: "botonera-opt",
	props: { props: { type: Object } },
	emits: ["clicked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const botones = [{
			text: "Editar",
			icon: "edit",
			flag: "editar"
		}];
		const clickbtn = (flag, row) => {
			emit("clicked", flag, row.row);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(QBtn, {
				size: "xs",
				flat: "",
				icon: "more_vert"
			}, {
				default: withCtx(() => [createVNode(QMenu, {
					"transition-show": "flip-right",
					fit: ""
				}, {
					default: withCtx(() => [createVNode(QList, null, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(botones, (b, i) => {
							return createVNode(QItem, {
								key: i,
								dense: "",
								clickable: "",
								onClick: ($event) => clickbtn(b.flag, __props.props)
							}, {
								default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
									default: withCtx(() => [createVNode(QIcon, {
										name: b.icon,
										size: "xs",
										right: "",
										class: "q-px-none"
									}, null, 8, ["name"])]),
									_: 2
								}, 1024), createVNode(QItemSection, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(b.text), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 64))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/pages/auth/unidades/registrar-upd.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = { class: "text-h6" };
var _hoisted_2$6 = { class: "row q-col-gutter-xs" };
var _hoisted_3$6 = { class: "col-xs-12 col-sm-6" };
var _hoisted_4$3 = { class: "col-xs-12 col-sm-6" };
var _hoisted_5$2 = { class: "col-xs-12 col-sm-6" };
var _hoisted_6$1 = { class: "q-pl-md" };
//#endregion
//#region src/pages/auth/unidades/registrar-upd.vue
var registrar_upd_default$1 = /* @__PURE__ */ defineComponent({
	__name: "registrar-upd",
	emits: ["sucess"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const alert = ref(false);
		const loading = ref(false);
		const input = ref({});
		const unidadesService = new UnidadesService();
		const refGeo = ref();
		const emit = __emit;
		const open = (row) => {
			alert.value = true;
			input.value = {};
			if (row) {
				input.value.id = row.id;
				input.value.nombre = row.nombre;
				input.value.descripcion = row.descripcion;
				input.value.orden = row.orden;
				input.value.latitud = row.latitud;
				input.value.longitud = row.longitud;
			}
		};
		const openGeo = async () => {
			const lt = input.value.latitud;
			const ln = input.value.longitud;
			const { lat, lng } = await refGeo.value.open(lt, ln);
			input.value.latitud = lat;
			input.value.longitud = lng;
		};
		const onSubmit = () => {
			if (input.value.id) actualizar();
			else registrar();
		};
		const actualizar = async () => {
			loading.value = true;
			const r = await unidadesService.update_unidad(input.value);
			loading.value = false;
			if (r.update_unidad) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.update_unidad);
			}
		};
		const registrar = async () => {
			loading.value = true;
			const r = await unidadesService.create_unidad(input.value);
			loading.value = false;
			if (r.create_unidad) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.create_unidad);
			}
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 600px" }, {
					default: withCtx(() => [createVNode(QForm, {
						onSubmit,
						class: "q-gutter-md"
					}, {
						default: withCtx(() => [
							createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
								default: withCtx(() => [
									createElementVNode("div", _hoisted_1$10, toDisplayString(input.value.id ? "Editar" : "Registrar"), 1),
									createVNode(QSpace),
									withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
										default: withCtx(() => [..._cache[5] || (_cache[5] = [createElementVNode("b", null, "x", -1)])]),
										_: 1
									})), [[ClosePopup]])
								]),
								_: 1
							}),
							createVNode(QCardSection, { class: "q-pt-none" }, {
								default: withCtx(() => [createElementVNode("div", _hoisted_2$6, [
									createElementVNode("div", _hoisted_3$6, [createVNode(QInput, {
										outlined: "",
										modelValue: input.value.nombre,
										"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value.nombre = $event),
										modelModifiers: { trim: true },
										label: "nombre:",
										dense: "",
										"lazy-rules": "",
										counter: "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"]), createVNode(QInput, {
										outlined: "",
										type: "number",
										modelValue: input.value.orden,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value.orden = $event),
										modelModifiers: { number: true },
										label: "orden:",
										dense: "",
										"lazy-rules": "",
										rules: [(val) => val !== null && val !== "" || "campo obligatorio", (val) => val >= 0 && val < 100 || "debe ser mayor a cero"]
									}, null, 8, ["modelValue", "rules"])]),
									createElementVNode("div", _hoisted_4$3, [createVNode(QInput, {
										outlined: "",
										modelValue: input.value.descripcion,
										"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value.descripcion = $event),
										modelModifiers: { trim: true },
										label: "descripcion:",
										type: "textarea",
										rows: "5",
										dense: "",
										"lazy-rules": "",
										counter: "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"])]),
									createElementVNode("div", _hoisted_5$2, [createVNode(QBtn, {
										color: "grey",
										icon: "fmd_good",
										dense: "",
										square: "",
										outline: "",
										onClick: _cache[3] || (_cache[3] = ($event) => openGeo())
									}, {
										default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Ubicacion geografica ", -1)])]),
										_: 1
									}), createElementVNode("small", _hoisted_6$1, toDisplayString(input.value.latitud) + " " + toDisplayString(input.value.longitud), 1)])
								])]),
								_: 1
							}),
							createVNode(QCardActions, { align: "right" }, {
								default: withCtx(() => [createVNode(QBtn, {
									outline: "",
									loading: loading.value,
									label: "aceptar",
									square: "",
									icon: "check",
									type: "submit",
									color: "positive"
								}, null, 8, ["loading"]), withDirectives(createVNode(QBtn, {
									outline: "",
									disable: loading.value,
									label: "cerrar",
									square: "",
									icon: "close",
									color: "negative"
								}, null, 8, ["disable"]), [[ClosePopup]])]),
								_: 1
							})
						]),
						_: 1
					})]),
					_: 1
				}), createVNode(geo_modalbk_default, {
					ref_key: "refGeo",
					ref: refGeo
				}, null, 512)]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region src/pages/auth/unidades/unidades-index.vue
var unidades_index_default = /* @__PURE__ */ defineComponent({
	__name: "unidades-index",
	setup(__props) {
		const unidadesService = new UnidadesService();
		const rows = ref([]);
		const filter = ref("");
		const loading = ref(false);
		const refRegistrar = ref();
		const getdatos = async () => {
			loading.value = true;
			rows.value = [];
			const r = await unidadesService.unidades();
			if (r && r.unidades) rows.value = r.unidades;
			loading.value = false;
		};
		const onclick = (flag, row) => {
			if (flag == "editar") refRegistrar.value.open(row);
			else if (flag == "new") refRegistrar.value.open(row);
		};
		onMounted(async () => {
			await getdatos();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage, { class: "q-pa-xs" }, {
				default: withCtx(() => [createVNode(QTable, {
					title: "Unidades",
					rows: rows.value,
					columns: unref(columns$2),
					flat: "",
					bordered: "",
					dense: "",
					filter: filter.value,
					loading: loading.value,
					"row-key": "id",
					"hide-pagination": "",
					"rows-per-page-options": [0]
				}, {
					"top-right": withCtx(() => [createVNode(QInput, {
						outlined: "",
						dense: "",
						debounce: "300",
						modelValue: filter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event),
						placeholder: "buscar...",
						clearable: ""
					}, {
						append: withCtx(() => [createVNode(QIcon, {
							size: "xs",
							name: "search"
						})]),
						_: 1
					}, 8, ["modelValue"]), createVNode(QBtn, {
						color: "green",
						icon: "add",
						outline: "",
						square: "",
						onClick: _cache[1] || (_cache[1] = ($event) => onclick("new", null))
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" registrar ", -1)])]),
						_: 1
					})]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(botonera_opt_default$1, {
							props,
							onClicked: onclick
						}, null, 8, ["props"])]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, [
					"rows",
					"columns",
					"filter",
					"loading"
				]), createVNode(registrar_upd_default$1, {
					ref_key: "refRegistrar",
					ref: refRegistrar,
					onSucess: getdatos
				}, null, 512)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/pages/auth/tickets/utils.ts
var columns$1 = [
	{
		name: "index",
		field: "index",
		label: ""
	},
	{
		name: "id",
		field: "id",
		label: "Nro."
	},
	{
		name: "problema",
		field: "problema",
		label: "problema",
		align: "left"
	},
	{
		name: "estado",
		field: "estado",
		label: "estado"
	},
	{
		name: "respuesta",
		field: "respuesta",
		label: "respuesta",
		align: "left"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "registrado"
	},
	{
		name: "respondido",
		field: "respondido",
		label: "respondido"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
var columns_gen = [
	{
		name: "index",
		field: "index",
		label: ""
	},
	{
		name: "id",
		field: "id",
		label: "ID"
	},
	{
		name: "usuario",
		field: "usuario",
		label: "usuario"
	},
	{
		name: "problema",
		field: "problema",
		label: "problema",
		align: "left"
	},
	{
		name: "estado",
		field: "estado",
		label: "estado"
	},
	{
		name: "respuesta",
		field: "respuesta",
		label: "respuesta",
		align: "left"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "registrado"
	},
	{
		name: "respondido",
		field: "respondido",
		label: "respondido"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
var columnas = (more_datos) => {
	if (more_datos) return [
		"index",
		"id",
		"problema",
		"estado",
		"respuesta",
		"fecha_registro",
		"respondido",
		"opt"
	];
	else return [
		"id",
		"problema",
		"estado",
		"respuesta",
		"opt"
	];
};
var styleEstado = (item) => {
	return {
		pendiente: "background: #c1c1c1",
		cliente: "background: #c7af6c",
		soporte: "background: #afc7e0",
		cerrado: "background:#980000;color:white!important"
	}[item.estado];
};
//#endregion
//#region src/pages/auth/tickets/responder_ticket.vue
var responder_ticket_default = /* @__PURE__ */ defineComponent({
	__name: "responder_ticket",
	emits: ["success"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const alert = ref(false);
		const loading = ref(false);
		const respuesta = ref("");
		const item = ref({});
		const ticketsService = new TicketsService();
		const val_pro = (val) => {
			if (!val) return "dato obligatorio";
			if (val.length > 512) return "maximo 512 caracteres";
		};
		const open = (row) => {
			alert.value = true;
			item.value = row;
			respuesta.value = "";
		};
		const select = async () => {
			if (!respuesta.value) return;
			if (respuesta.value.length > 512) {
				mostrarNotifyError("reduzca el texto");
				return;
			}
			const input = {
				tickets_id: item.value.id,
				respuesta: respuesta.value
			};
			loading.value = true;
			const r = await ticketsService.update_ticket(input);
			if (r && r.update_ticket) {
				toast1("respuesta enviada");
				emit("success");
				alert.value = false;
			}
			loading.value = false;
		};
		const close = () => {
			alert.value = false;
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 630px" }, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								_cache[5] || (_cache[5] = createElementVNode("div", { class: "text-h6" }, "Responder Ticket", -1)),
								createVNode(QSpace),
								withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
									default: withCtx(() => [..._cache[4] || (_cache[4] = [createElementVNode("b", null, "x", -1)])]),
									_: 1
								})), [[ClosePopup]])
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, { class: "q-mt-none q-mb-lg" }), createVNode(QInput, {
								modelValue: respuesta.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => respuesta.value = $event),
								modelModifiers: { trim: true },
								outlined: "",
								square: "",
								dense: "",
								label: "La respuesta va aqui:",
								placeholder: "no mas de 512 caracteres",
								type: "textarea",
								rows: "12",
								cols: "50",
								counter: "",
								rules: [(val) => val_pro(val)]
							}, null, 8, ["modelValue", "rules"])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "right" }, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "cerrar",
								color: "grey",
								onClick: _cache[1] || (_cache[1] = ($event) => close())
							}, null, 8, ["loading"]), createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "responder",
								color: "green",
								onClick: _cache[2] || (_cache[2] = ($event) => select())
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
//#region src/pages/auth/tickets/retirar_ticket.vue
var retirar_ticket_default = /* @__PURE__ */ defineComponent({
	__name: "retirar_ticket",
	emits: ["success"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const alert = ref(false);
		const loading = ref(false);
		const item = ref({});
		const ticketsService = new TicketsService();
		const open = (row) => {
			alert.value = true;
			item.value = row;
		};
		const select = async () => {
			loading.value = true;
			const r = await ticketsService.cerrar_ticket(item.value.id);
			if (r && r.cerrar_ticket) {
				toast1("ticket cerrado");
				emit("success");
				alert.value = false;
			}
			loading.value = false;
		};
		const close = () => {
			alert.value = false;
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 630px" }, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								_cache[4] || (_cache[4] = createElementVNode("div", { class: "text-h6" }, "Cerrar el ticket", -1)),
								createVNode(QSpace),
								withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
									default: withCtx(() => [..._cache[3] || (_cache[3] = [createElementVNode("b", null, "x", -1)])]),
									_: 1
								})), [[ClosePopup]])
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [createVNode(QSeparator, { class: "q-mt-none q-mb-lg" }), createElementVNode("p", null, [
								_cache[5] || (_cache[5] = createTextVNode(" Al cerrar el ticket ", -1)),
								createElementVNode("b", null, toDisplayString(item.value.id), 1),
								_cache[6] || (_cache[6] = createTextVNode(" ya no estara disponible para dar soporte ", -1))
							])]),
							_: 1
						}),
						createVNode(QCardActions, { align: "right" }, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "Cerrar ticket",
								color: "red",
								onClick: _cache[0] || (_cache[0] = ($event) => select())
							}, null, 8, ["loading"]), createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "volver",
								color: "grey",
								onClick: _cache[1] || (_cache[1] = ($event) => close())
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
//#region src/pages/auth/tickets/ver_ticket.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = { class: "q-my-none" };
var _hoisted_2$5 = { class: "q-my-none" };
var _hoisted_3$5 = { class: "q-my-none" };
var _hoisted_4$2 = { class: "q-my-none" };
var _hoisted_5$1 = {
	key: 0,
	class: "q-my-none"
};
var _hoisted_6 = {
	key: 1,
	class: "q-my-xs q-pl-xl text-purple"
};
//#endregion
//#region src/pages/auth/tickets/ver_ticket.vue
var ver_ticket_default = /* @__PURE__ */ defineComponent({
	__name: "ver_ticket",
	setup(__props, { expose: __expose }) {
		const alert = ref(false);
		const loading = ref(false);
		const item = ref({});
		const ticketsService = new TicketsService();
		const ticket = ref({});
		const open = (row) => {
			alert.value = true;
			item.value = row;
			ticket.value = {};
			get();
		};
		const get = async () => {
			loading.value = true;
			const r = await ticketsService.ver_ticket(item.value.id);
			if (r && r.ver_ticket) ticket.value = r.ver_ticket;
			loading.value = false;
		};
		const close = () => {
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
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 630px" }, {
					default: withCtx(() => [
						createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
							default: withCtx(() => [
								_cache[3] || (_cache[3] = createElementVNode("div", { class: "text-h6" }, "Detalles del ticket", -1)),
								createVNode(QSpace),
								withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
									default: withCtx(() => [..._cache[2] || (_cache[2] = [createElementVNode("b", null, "x", -1)])]),
									_: 1
								})), [[ClosePopup]])
							]),
							_: 1
						}),
						createVNode(QCardSection, { class: "q-pt-none" }, {
							default: withCtx(() => [
								createVNode(QSeparator, { class: "q-mt-none q-mb-lg" }),
								createElementVNode("p", _hoisted_1$9, [_cache[4] || (_cache[4] = createElementVNode("b", null, "Numero ticket:", -1)), createTextVNode(" " + toDisplayString(ticket.value.id), 1)]),
								createElementVNode("p", _hoisted_2$5, [_cache[5] || (_cache[5] = createElementVNode("b", null, "Problema:", -1)), createTextVNode(" " + toDisplayString(ticket.value.problema), 1)]),
								createElementVNode("p", _hoisted_3$5, [_cache[6] || (_cache[6] = createElementVNode("b", null, "Estado:", -1)), createTextVNode(" " + toDisplayString(ticket.value.estado), 1)]),
								createElementVNode("p", _hoisted_4$2, [_cache[7] || (_cache[7] = createElementVNode("b", null, "Reportado el:", -1)), createTextVNode(" " + toDisplayString(unref(parseFecha)(ticket.value.fecha_registro)), 1)]),
								createVNode(QSeparator),
								_cache[16] || (_cache[16] = createElementVNode("small", null, "Interaccion:", -1)),
								(openBlock(true), createElementBlock(Fragment, null, renderList(ticket.value.respuestas, (r, ind) => {
									return openBlock(), createElementBlock("div", { key: ind }, [ticket.value.usuario_id == r.usuario_id ? (openBlock(), createElementBlock("p", _hoisted_5$1, [
										_cache[8] || (_cache[8] = createElementVNode("b", null, "yo:", -1)),
										_cache[9] || (_cache[9] = createTextVNode()),
										_cache[10] || (_cache[10] = createElementVNode("br", null, null, -1)),
										createTextVNode(" " + toDisplayString(r.respuesta) + " ", 1),
										_cache[11] || (_cache[11] = createElementVNode("br", null, null, -1)),
										createElementVNode("small", null, toDisplayString(unref(parseFecha)(r.fecha_registro)), 1)
									])) : (openBlock(), createElementBlock("p", _hoisted_6, [
										_cache[12] || (_cache[12] = createElementVNode("b", null, "soporte:", -1)),
										_cache[13] || (_cache[13] = createTextVNode()),
										_cache[14] || (_cache[14] = createElementVNode("br", null, null, -1)),
										createTextVNode(" " + toDisplayString(r.respuesta) + " ", 1),
										_cache[15] || (_cache[15] = createElementVNode("br", null, null, -1)),
										createElementVNode("small", null, toDisplayString(unref(parseFecha)(r.fecha_registro)), 1)
									]))]);
								}), 128)),
								createVNode(QSeparator)
							]),
							_: 1
						}),
						createVNode(QCardActions, {
							align: "right",
							class: "q-pt-none"
						}, {
							default: withCtx(() => [createVNode(QBtn, {
								flat: "",
								loading: loading.value,
								label: "cerrar",
								color: "grey",
								onClick: _cache[0] || (_cache[0] = ($event) => close())
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
//#region src/pages/auth/tickets/tickets_1.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = { class: "q-pa-none" };
var _hoisted_2$4 = { style: { "text-wrap": "wrap" } };
var _hoisted_3$4 = { style: { "text-wrap": "wrap" } };
//#endregion
//#region src/pages/auth/tickets/tickets_1.vue
var tickets_1_default = /* @__PURE__ */ defineComponent({
	__name: "tickets_1",
	setup(__props) {
		const rows = ref([{}]);
		const refresponder_ticket = ref();
		const refretirar_ticket = ref();
		const refver_ticket = ref();
		const ticketsService = new TicketsService();
		const visibleColumns = ref([]);
		const more_datos = ref(false);
		const listar = async () => {
			const r = await ticketsService.mis_tickets();
			if (r && r.mis_tickets) rows.value = r.mis_tickets;
		};
		const responder = (row) => {
			if (row.estado != "soporte") {
				mostrarNotifyError("estado no disponible");
				return;
			}
			refresponder_ticket.value.open(row);
		};
		const verticket = (row) => {
			refver_ticket.value.open(row);
		};
		const cerrarticket = (row) => {
			refretirar_ticket.value.open(row);
		};
		onMounted(() => {
			visibleColumns.value = columnas(more_datos.value);
			listar();
			console.log("mis tickets");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$8, [
				createVNode(QTable, {
					title: "",
					class: "my-sticky-header-table",
					"visible-columns": visibleColumns.value,
					dense: "",
					rows: rows.value,
					columns: unref(columns$1),
					"row-key": "name"
				}, {
					"top-left": withCtx(() => [createVNode(QBtn, {
						icon: "refresh",
						dense: "",
						flat: "",
						onClick: _cache[0] || (_cache[0] = ($event) => listar())
					}), createVNode(QToggle, {
						modelValue: more_datos.value,
						"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => more_datos.value = $event), _cache[2] || (_cache[2] = ($event) => visibleColumns.value = unref(columnas)(more_datos.value))],
						color: "orange",
						label: "mostrar otros datos",
						class: "q-my-none"
					}, null, 8, ["modelValue"])]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-problema": withCtx((props) => [createVNode(QTd, {
						props,
						style: { "min-width": "350px" }
					}, {
						default: withCtx(() => [createElementVNode("p", _hoisted_2$4, toDisplayString(props.row.problema), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-respuesta": withCtx((props) => [createVNode(QTd, {
						props,
						style: { "min-width": "250px" }
					}, {
						default: withCtx(() => [createElementVNode("p", _hoisted_3$4, toDisplayString(props.row.respuesta), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-estado": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(QBanner, {
							dense: "",
							"inline-actions": "",
							class: "q-py-none text-center text-black",
							style: normalizeStyle(unref(styleEstado)(props.row))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.row.estado), 1)]),
							_: 2
						}, 1032, ["style"])]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-respondido": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.respondido)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(QBtn, {
							size: "xs",
							flat: "",
							icon: "more_vert"
						}, {
							default: withCtx(() => [createVNode(QMenu, {
								"transition-show": "flip-right",
								fit: ""
							}, {
								default: withCtx(() => [createVNode(QList, null, {
									default: withCtx(() => [
										createVNode(QItem, {
											dense: "",
											clickable: "",
											onClick: ($event) => verticket(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "visibility",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("Ver", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"]),
										props.row.estado != "cerrado" ? (openBlock(), createBlock(QItem, {
											key: 0,
											dense: "",
											clickable: "",
											onClick: ($event) => responder(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "edit",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Responder", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"])) : createCommentVNode("", true),
										props.row.estado != "cerrado" ? (openBlock(), createBlock(QItem, {
											key: 1,
											dense: "",
											clickable: "",
											onClick: ($event) => cerrarticket(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "close",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Cerrar", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"])) : createCommentVNode("", true)
									]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, [
					"visible-columns",
					"rows",
					"columns"
				]),
				createVNode(responder_ticket_default, {
					ref_key: "refresponder_ticket",
					ref: refresponder_ticket,
					onSuccess: listar
				}, null, 512),
				createVNode(retirar_ticket_default, {
					ref_key: "refretirar_ticket",
					ref: refretirar_ticket,
					onSuccess: listar
				}, null, 512),
				createVNode(ver_ticket_default, {
					ref_key: "refver_ticket",
					ref: refver_ticket
				}, null, 512)
			]);
		};
	}
});
//#endregion
//#region src/pages/auth/tickets/tickets_2.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { class: "q-pa-none" };
var _hoisted_2$3 = { style: { "text-wrap": "wrap" } };
var _hoisted_3$3 = { style: { "text-wrap": "wrap" } };
//#endregion
//#region src/pages/auth/tickets/tickets_2.vue
var tickets_2_default = /* @__PURE__ */ defineComponent({
	__name: "tickets_2",
	setup(__props) {
		const rows = ref([{}]);
		const refresponder_ticket = ref();
		const refretirar_ticket = ref();
		const refver_ticket = ref();
		const ticketsService = new TicketsService();
		const listar = async () => {
			const r = await ticketsService.all_tickets({});
			if (r && r.all_tickets) rows.value = r.all_tickets;
		};
		const responder = (row) => {
			refresponder_ticket.value.open(row);
		};
		const verticket = (row) => {
			refver_ticket.value.open(row);
		};
		const cerrarticket = (row) => {
			refretirar_ticket.value.open(row);
		};
		onMounted(() => {
			listar();
			console.log("mis tickets");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$7, [
				createVNode(QTable, {
					title: "",
					class: "my-sticky-header-table",
					dense: "",
					rows: rows.value,
					columns: unref(columns_gen),
					"row-key": "name"
				}, {
					"top-left": withCtx(() => [createVNode(QBtn, {
						icon: "refresh",
						dense: "",
						flat: "",
						onClick: _cache[0] || (_cache[0] = ($event) => listar())
					})]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-problema": withCtx((props) => [createVNode(QTd, {
						props,
						style: { "min-width": "350px" }
					}, {
						default: withCtx(() => [createElementVNode("p", _hoisted_2$3, toDisplayString(props.row.problema), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-respuesta": withCtx((props) => [createVNode(QTd, {
						props,
						style: { "min-width": "250px" }
					}, {
						default: withCtx(() => [createElementVNode("p", _hoisted_3$3, toDisplayString(props.row.respuesta), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-estado": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(QBanner, {
							dense: "",
							"inline-actions": "",
							class: "q-py-none text-center text-black",
							style: normalizeStyle(unref(styleEstado)(props.row))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.row.estado), 1)]),
							_: 2
						}, 1032, ["style"])]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-respondido": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.respondido)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(QBtn, {
							size: "xs",
							flat: "",
							icon: "more_vert"
						}, {
							default: withCtx(() => [createVNode(QMenu, {
								"transition-show": "flip-right",
								fit: ""
							}, {
								default: withCtx(() => [createVNode(QList, null, {
									default: withCtx(() => [
										createVNode(QItem, {
											dense: "",
											clickable: "",
											onClick: ($event) => verticket(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "visibility",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Ver", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"]),
										props.row.estado != "cerrado" ? (openBlock(), createBlock(QItem, {
											key: 0,
											dense: "",
											clickable: "",
											onClick: ($event) => responder(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "edit",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Responder", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"])) : createCommentVNode("", true),
										props.row.estado != "cerrado" ? (openBlock(), createBlock(QItem, {
											key: 1,
											dense: "",
											clickable: "",
											onClick: ($event) => cerrarticket(props.row)
										}, {
											default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
												default: withCtx(() => [createVNode(QIcon, {
													name: "close",
													size: "xs",
													right: "",
													class: "q-px-none"
												})]),
												_: 1
											}), createVNode(QItemSection, null, {
												default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("Cerrar", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["onClick"])) : createCommentVNode("", true)
									]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, ["rows", "columns"]),
				createVNode(responder_ticket_default, {
					ref_key: "refresponder_ticket",
					ref: refresponder_ticket,
					onSuccess: listar
				}, null, 512),
				createVNode(retirar_ticket_default, {
					ref_key: "refretirar_ticket",
					ref: refretirar_ticket,
					onSuccess: listar
				}, null, 512),
				createVNode(ver_ticket_default, {
					ref_key: "refver_ticket",
					ref: refver_ticket
				}, null, 512)
			]);
		};
	}
});
//#endregion
//#region src/pages/auth/tickets/tickets_index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = { class: "q-pa-md" };
//#endregion
//#region src/pages/auth/tickets/tickets_index.vue
var tickets_index_default = /* @__PURE__ */ defineComponent({
	__name: "tickets_index",
	setup(__props) {
		const tab = ref("mails");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$6, [
				createVNode(QTabs, {
					modelValue: tab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
					dense: "",
					class: "text-grey bg-primary",
					"active-color": "white",
					"indicator-color": "white",
					align: "justify",
					"narrow-indicator": ""
				}, {
					default: withCtx(() => [createVNode(QTab, {
						name: "mails",
						icon: "confirmation_number",
						label: "Mis tickets"
					}), createVNode(QTab, {
						name: "alarms",
						icon: "local_activity",
						label: "Tickets general"
					})]),
					_: 1
				}, 8, ["modelValue"]),
				createVNode(QSeparator),
				createVNode(QTabPanels, {
					modelValue: tab.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tab.value = $event),
					animated: ""
				}, {
					default: withCtx(() => [createVNode(QTabPanel, {
						name: "mails",
						class: "q-pa-none"
					}, {
						default: withCtx(() => [createVNode(tickets_1_default)]),
						_: 1
					}), createVNode(QTabPanel, {
						name: "alarms",
						class: "q-pa-none"
					}, {
						default: withCtx(() => [createVNode(tickets_2_default)]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue"])
			]);
		};
	}
});
//#endregion
//#region src/pages/auth/notificaciones/utils.ts
var columns = [
	{
		name: "index",
		field: "index",
		label: "#"
	},
	{
		name: "id",
		field: "id",
		label: "ID"
	},
	{
		name: "mensaje",
		field: "mensaje",
		label: "mensaje",
		with: "200"
	},
	{
		name: "creado_por_id",
		field: "creado_por_id",
		label: "creado_por_id"
	},
	{
		name: "desde",
		field: "desde",
		label: "desde"
	},
	{
		name: "hasta",
		field: "hasta",
		label: "hasta"
	},
	{
		name: "fecha_registro",
		field: "fecha_registro",
		label: "fecha_registro"
	},
	{
		name: "opt",
		field: "opt",
		label: ""
	}
];
var toolbar = ($q) => [
	[
		{
			label: $q.lang.editor.align,
			icon: $q.iconSet.editor.align,
			fixedLabel: true,
			list: "only-icons",
			options: [
				"left",
				"center",
				"right",
				"justify"
			]
		},
		"bold",
		"italic",
		"strike",
		"underline",
		"token"
	],
	[{
		label: "fuente",
		icon: $q.iconSet.editor.fontSize,
		fixedLabel: true,
		fixedIcon: true,
		list: "no-icons",
		options: [
			"size-1",
			"size-2",
			"size-3",
			"size-4",
			"size-5",
			"size-6",
			"size-7"
		]
	}, "removeFormat"],
	["unordered", "ordered"],
	["viewsource"]
];
//#endregion
//#region src/pages/auth/notificaciones/botonera-opt.vue
var botonera_opt_default = /* @__PURE__ */ defineComponent({
	__name: "botonera-opt",
	props: { props: { type: Object } },
	emits: ["clicked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const botones = [{
			text: "Editar",
			icon: "edit",
			flag: "editar"
		}];
		const clickbtn = (flag, row) => {
			emit("clicked", flag, row.row);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(QBtn, {
				size: "xs",
				flat: "",
				icon: "more_vert"
			}, {
				default: withCtx(() => [createVNode(QMenu, {
					"transition-show": "flip-right",
					fit: ""
				}, {
					default: withCtx(() => [createVNode(QList, null, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(botones, (b, i) => {
							return createVNode(QItem, {
								key: i,
								dense: "",
								clickable: "",
								onClick: ($event) => clickbtn(b.flag, __props.props)
							}, {
								default: withCtx(() => [createVNode(QItemSection, { avatar: "" }, {
									default: withCtx(() => [createVNode(QIcon, {
										name: b.icon,
										size: "xs",
										right: "",
										class: "q-px-none"
									}, null, 8, ["name"])]),
									_: 2
								}, 1024), createVNode(QItemSection, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(b.text), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 64))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/pages/auth/notificaciones/registrar-upd.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { class: "text-h6" };
var _hoisted_2$2 = { class: "row q-col-gutter-sm" };
var _hoisted_3$2 = { class: "col-xs-12" };
var _hoisted_4$1 = { class: "col-xs-6" };
var _hoisted_5 = { class: "col-xs-6" };
//#endregion
//#region src/pages/auth/notificaciones/registrar-upd.vue
var registrar_upd_default = /* @__PURE__ */ defineComponent({
	__name: "registrar-upd",
	emits: ["sucess"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const alert = ref(false);
		const loading = ref(false);
		const input = ref({});
		const notisService = new NotisService();
		const emit = __emit;
		const definicion = ref({ bold: {
			label: "Bold",
			icon: void 0,
			tip: "Negritas"
		} });
		const open = (row) => {
			alert.value = true;
			input.value = {};
			input.value.mensaje = "";
			input.value.desde = ajustarFechaLocal(/* @__PURE__ */ new Date());
			if (row) {
				const xrow = JSON.parse(JSON.stringify(row));
				input.value.id = xrow.id;
				input.value.mensaje = xrow.mensaje;
				input.value.desde = ajustarFechaLocal(new Date(xrow.desde));
				input.value.hasta = ajustarFechaLocal(new Date(xrow.hasta));
			}
		};
		const onSubmit = () => {
			if (input.value.mensaje.length == 0) {
				mostrarNotifyError("escriba el mensaje");
				return;
			}
			input.value.desde = new Date(input.value.desde).toISOString();
			input.value.hasta = new Date(input.value.hasta).toISOString();
			if (input.value.id) actualizar();
			else registrar();
		};
		const actualizar = async () => {
			loading.value = true;
			const r = await notisService.update_notificacion(input.value);
			loading.value = false;
			if (r.update_notificacion) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.update_notificacion);
			}
		};
		const registrar = async () => {
			loading.value = true;
			const r = await notisService.crear_notificacion(input.value);
			loading.value = false;
			if (r.crear_notificacion) {
				toast1("accion ejecutada exitosamente");
				alert.value = false;
				emit("sucess", r.crear_notificacion);
			}
		};
		__expose({ open });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QDialog, {
				modelValue: alert.value,
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => alert.value = $event),
				persistent: "",
				square: ""
			}, {
				default: withCtx(() => [createVNode(QCard, { xstyle: "min-width: 600px" }, {
					default: withCtx(() => [createVNode(QForm, {
						onSubmit,
						class: "q-gutter-md"
					}, {
						default: withCtx(() => [
							createVNode(QCardSection, { class: "row items-center q-pb-xs" }, {
								default: withCtx(() => [
									createElementVNode("div", _hoisted_1$5, toDisplayString(input.value.id ? "Editar" : "Registrar"), 1),
									createVNode(QSpace),
									withDirectives((openBlock(), createBlock(QBtn, { flat: "" }, {
										default: withCtx(() => [..._cache[4] || (_cache[4] = [createElementVNode("b", null, "x", -1)])]),
										_: 1
									})), [[ClosePopup]])
								]),
								_: 1
							}),
							createVNode(QCardSection, { class: "q-py-none" }, {
								default: withCtx(() => [createElementVNode("div", _hoisted_2$2, [
									createElementVNode("div", _hoisted_3$2, [createVNode(QEditor, {
										counter: "",
										outlined: "",
										modelValue: input.value.mensaje,
										"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value.mensaje = $event),
										definitions: definicion.value,
										toolbar: unref(toolbar)(_ctx.$q)
									}, null, 8, [
										"modelValue",
										"definitions",
										"toolbar"
									])]),
									createElementVNode("div", _hoisted_4$1, [createVNode(QInput, {
										outlined: "",
										type: "datetime-local",
										modelValue: input.value.desde,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value.desde = $event),
										modelModifiers: { trim: true },
										label: "desde:",
										dense: "",
										"lazy-rules": "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"])]),
									createElementVNode("div", _hoisted_5, [createVNode(QInput, {
										outlined: "",
										type: "datetime-local",
										modelValue: input.value.hasta,
										"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value.hasta = $event),
										label: "hasta:",
										dense: "",
										"lazy-rules": "",
										rules: [(val) => val && val.length > 0 || "campo obligatorio"]
									}, null, 8, ["modelValue", "rules"])])
								])]),
								_: 1
							}),
							createVNode(QCardActions, { align: "right" }, {
								default: withCtx(() => [createVNode(QBtn, {
									outline: "",
									loading: loading.value,
									label: "aceptar",
									square: "",
									icon: "check",
									type: "submit",
									color: "positive"
								}, null, 8, ["loading"]), withDirectives(createVNode(QBtn, {
									outline: "",
									disable: loading.value,
									label: "cerrar",
									square: "",
									icon: "close",
									color: "negative"
								}, null, 8, ["disable"]), [[ClosePopup]])]),
								_: 1
							})
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region src/pages/auth/notificaciones/notis-index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["innerHTML"];
//#endregion
//#region src/pages/auth/notificaciones/notis-index.vue
var notis_index_default = /* @__PURE__ */ defineComponent({
	__name: "notis-index",
	setup(__props) {
		const notisService = new NotisService();
		const rows = ref([]);
		const filter = ref("");
		const loading = ref(false);
		const refRegistrar = ref();
		const getdatos = async () => {
			loading.value = true;
			rows.value = [];
			const r = await notisService.notificaciones();
			if (r && r.notificaciones) rows.value = r.notificaciones;
			loading.value = false;
		};
		const onclick = (flag, row) => {
			if (flag == "editar") refRegistrar.value.open(row);
			else if (flag == "new") refRegistrar.value.open(row);
		};
		onMounted(async () => {
			await getdatos();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage, { class: "q-pa-xs" }, {
				default: withCtx(() => [createVNode(QTable, {
					title: "Notificaciones",
					rows: rows.value,
					columns: unref(columns),
					flat: "",
					bordered: "",
					dense: "",
					filter: filter.value,
					loading: loading.value,
					"row-key": "id",
					"hide-pagination": "",
					"rows-per-page-options": [0]
				}, {
					"top-right": withCtx(() => [createVNode(QInput, {
						outlined: "",
						dense: "",
						debounce: "300",
						modelValue: filter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event),
						placeholder: "buscar...",
						clearable: ""
					}, {
						append: withCtx(() => [createVNode(QIcon, {
							size: "xs",
							name: "search"
						})]),
						_: 1
					}, 8, ["modelValue"]), createVNode(QBtn, {
						color: "green",
						icon: "add",
						outline: "",
						square: "",
						onClick: _cache[1] || (_cache[1] = ($event) => onclick("new", null))
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" registrar ", -1)])]),
						_: 1
					})]),
					"body-cell-index": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.rowIndex + 1), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-mensaje": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createElementVNode("p", {
							class: "q-my-none",
							style: {
								"text-wrap": "initial",
								"list-style": "none"
							},
							innerHTML: props.row.mensaje
						}, null, 8, _hoisted_1$4)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-desde": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.desde)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-hasta": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.hasta)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-fecha_registro": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(parseFecha)(props.row.fecha_registro)), 1)]),
						_: 2
					}, 1032, ["props"])]),
					"body-cell-opt": withCtx((props) => [createVNode(QTd, { props }, {
						default: withCtx(() => [createVNode(botonera_opt_default, {
							props,
							onClicked: onclick
						}, null, 8, ["props"])]),
						_: 2
					}, 1032, ["props"])]),
					_: 1
				}, 8, [
					"rows",
					"columns",
					"filter",
					"loading"
				]), createVNode(registrar_upd_default, {
					ref_key: "refRegistrar",
					ref: refRegistrar,
					onSucess: getdatos
				}, null, 512)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/pages/auth/dashboard/dash-reporte1.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "q-mt-lg" };
var _hoisted_2$1 = {
	class: "row text-center justify-center q-col-gutter-xs",
	id: "tuto_reporte1"
};
var _hoisted_3$1 = { class: "neon-subtitle" };
var _hoisted_4 = { class: "text-subtitle2" };
//#endregion
//#region src/pages/auth/dashboard/dash-reporte1.vue
var dash_reporte1_default = /* @__PURE__ */ defineComponent({
	__name: "dash-reporte1",
	setup(__props) {
		const dashboardService = new DashboardService();
		const reporte1 = ref([]);
		const get = async () => {
			const re = await dashboardService.reporte1();
			if (re && re.reporte1) {
				console.log("reeeee", re.reporte1);
				reporte1.value = re.reporte1;
			}
		};
		const colores = computed(() => {
			if (Dark.isActive) return {
				color: "#0090e9",
				background: "radial-gradient(circle, #0d1a22 0%, #0f3750 100%)"
			};
			return { background: "radial-gradient(circle, #ffffff 0%, #cfebfb 100%)" };
		});
		onMounted(() => {
			get();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(reporte1.value, (r, i) => {
				return openBlock(), createElementBlock("div", {
					class: "col-xs-6 col-sm-3 col-lg-2 col-xl-1 neon-fade-in neon-fade-in--d1",
					key: i
				}, [createVNode(QCard, {
					class: "neon-card neon-card--cyan",
					square: "",
					flat: "",
					style: normalizeStyle(colores.value)
				}, {
					default: withCtx(() => [createVNode(QCardSection, { class: "q-px-none q-py-xs" }, {
						default: withCtx(() => [createElementVNode("div", _hoisted_3$1, toDisplayString(r.nombre), 1), createElementVNode("div", _hoisted_4, toDisplayString(r.valor), 1)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, ["style"])]);
			}), 128))])]);
		};
	}
});
//#endregion
//#region node_modules/@kurkle/color/dist/color.esm.js
/*!
* @kurkle/color v0.3.4
* https://github.com/kurkle/color#readme
* (c) 2024 Jukka Kurkela
* Released under the MIT License
*/
function round(v) {
	return v + .5 | 0;
}
var lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
	return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
	return lim(round(v * 255), 0, 255);
}
function b2n(v) {
	return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
	return lim(round(v * 100), 0, 100);
}
var map$1 = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	A: 10,
	B: 11,
	C: 12,
	D: 13,
	E: 14,
	F: 15,
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15
};
var hex = [..."0123456789ABCDEF"];
var h1 = (b) => hex[b & 15];
var h2 = (b) => hex[(b & 240) >> 4] + hex[b & 15];
var eq = (b) => (b & 240) >> 4 === (b & 15);
var isShort = (v) => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
	var len = str.length;
	var ret;
	if (str[0] === "#") {
		if (len === 4 || len === 5) ret = {
			r: 255 & map$1[str[1]] * 17,
			g: 255 & map$1[str[2]] * 17,
			b: 255 & map$1[str[3]] * 17,
			a: len === 5 ? map$1[str[4]] * 17 : 255
		};
		else if (len === 7 || len === 9) ret = {
			r: map$1[str[1]] << 4 | map$1[str[2]],
			g: map$1[str[3]] << 4 | map$1[str[4]],
			b: map$1[str[5]] << 4 | map$1[str[6]],
			a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
		};
	}
	return ret;
}
var alpha = (a, f) => a < 255 ? f(a) : "";
function hexString(v) {
	var f = isShort(v) ? h1 : h2;
	return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : void 0;
}
var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
	const a = s * Math.min(l, 1 - l);
	const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [
		f(0),
		f(8),
		f(4)
	];
}
function hsv2rgbn(h, s, v) {
	const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [
		f(5),
		f(3),
		f(1)
	];
}
function hwb2rgbn(h, w, b) {
	const rgb = hsl2rgbn(h, 1, .5);
	let i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}
function hueValue(r, g, b, d, max) {
	if (r === max) return (g - b) / d + (g < b ? 6 : 0);
	if (g === max) return (b - r) / d + 2;
	return (r - g) / d + 4;
}
function rgb2hsl(v) {
	const range = 255;
	const r = v.r / range;
	const g = v.g / range;
	const b = v.b / range;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h, s, d;
	if (max !== min) {
		d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		h = hueValue(r, g, b, d, max);
		h = h * 60 + .5;
	}
	return [
		h | 0,
		s || 0,
		l
	];
}
function calln(f, a, b, c) {
	return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
	return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
	return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
	return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
	return (h % 360 + 360) % 360;
}
function hueParse(str) {
	const m = HUE_RE.exec(str);
	let a = 255;
	let v;
	if (!m) return;
	if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
	const h = hue(+m[2]);
	const p1 = +m[3] / 100;
	const p2 = +m[4] / 100;
	if (m[1] === "hwb") v = hwb2rgb(h, p1, p2);
	else if (m[1] === "hsv") v = hsv2rgb(h, p1, p2);
	else v = hsl2rgb(h, p1, p2);
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a
	};
}
function rotate(v, deg) {
	var h = rgb2hsl(v);
	h[0] = hue(h[0] + deg);
	h = hsl2rgb(h);
	v.r = h[0];
	v.g = h[1];
	v.b = h[2];
}
function hslString(v) {
	if (!v) return;
	const a = rgb2hsl(v);
	const h = a[0];
	const s = n2p(a[1]);
	const l = n2p(a[2]);
	return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
var map = {
	x: "dark",
	Z: "light",
	Y: "re",
	X: "blu",
	W: "gr",
	V: "medium",
	U: "slate",
	A: "ee",
	T: "ol",
	S: "or",
	B: "ra",
	C: "lateg",
	D: "ights",
	R: "in",
	Q: "turquois",
	E: "hi",
	P: "ro",
	O: "al",
	N: "le",
	M: "de",
	L: "yello",
	F: "en",
	K: "ch",
	G: "arks",
	H: "ea",
	I: "ightg",
	J: "wh"
};
var names$1 = {
	OiceXe: "f0f8ff",
	antiquewEte: "faebd7",
	aqua: "ffff",
	aquamarRe: "7fffd4",
	azuY: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "0",
	blanKedOmond: "ffebcd",
	Xe: "ff",
	XeviTet: "8a2be2",
	bPwn: "a52a2a",
	burlywood: "deb887",
	caMtXe: "5f9ea0",
	KartYuse: "7fff00",
	KocTate: "d2691e",
	cSO: "ff7f50",
	cSnflowerXe: "6495ed",
	cSnsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "ffff",
	xXe: "8b",
	xcyan: "8b8b",
	xgTMnPd: "b8860b",
	xWay: "a9a9a9",
	xgYF: "6400",
	xgYy: "a9a9a9",
	xkhaki: "bdb76b",
	xmagFta: "8b008b",
	xTivegYF: "556b2f",
	xSange: "ff8c00",
	xScEd: "9932cc",
	xYd: "8b0000",
	xsOmon: "e9967a",
	xsHgYF: "8fbc8f",
	xUXe: "483d8b",
	xUWay: "2f4f4f",
	xUgYy: "2f4f4f",
	xQe: "ced1",
	xviTet: "9400d3",
	dAppRk: "ff1493",
	dApskyXe: "bfff",
	dimWay: "696969",
	dimgYy: "696969",
	dodgerXe: "1e90ff",
	fiYbrick: "b22222",
	flSOwEte: "fffaf0",
	foYstWAn: "228b22",
	fuKsia: "ff00ff",
	gaRsbSo: "dcdcdc",
	ghostwEte: "f8f8ff",
	gTd: "ffd700",
	gTMnPd: "daa520",
	Way: "808080",
	gYF: "8000",
	gYFLw: "adff2f",
	gYy: "808080",
	honeyMw: "f0fff0",
	hotpRk: "ff69b4",
	RdianYd: "cd5c5c",
	Rdigo: "4b0082",
	ivSy: "fffff0",
	khaki: "f0e68c",
	lavFMr: "e6e6fa",
	lavFMrXsh: "fff0f5",
	lawngYF: "7cfc00",
	NmoncEffon: "fffacd",
	ZXe: "add8e6",
	ZcSO: "f08080",
	Zcyan: "e0ffff",
	ZgTMnPdLw: "fafad2",
	ZWay: "d3d3d3",
	ZgYF: "90ee90",
	ZgYy: "d3d3d3",
	ZpRk: "ffb6c1",
	ZsOmon: "ffa07a",
	ZsHgYF: "20b2aa",
	ZskyXe: "87cefa",
	ZUWay: "778899",
	ZUgYy: "778899",
	ZstAlXe: "b0c4de",
	ZLw: "ffffe0",
	lime: "ff00",
	limegYF: "32cd32",
	lRF: "faf0e6",
	magFta: "ff00ff",
	maPon: "800000",
	VaquamarRe: "66cdaa",
	VXe: "cd",
	VScEd: "ba55d3",
	VpurpN: "9370db",
	VsHgYF: "3cb371",
	VUXe: "7b68ee",
	VsprRggYF: "fa9a",
	VQe: "48d1cc",
	VviTetYd: "c71585",
	midnightXe: "191970",
	mRtcYam: "f5fffa",
	mistyPse: "ffe4e1",
	moccasR: "ffe4b5",
	navajowEte: "ffdead",
	navy: "80",
	Tdlace: "fdf5e6",
	Tive: "808000",
	TivedBb: "6b8e23",
	Sange: "ffa500",
	SangeYd: "ff4500",
	ScEd: "da70d6",
	pOegTMnPd: "eee8aa",
	pOegYF: "98fb98",
	pOeQe: "afeeee",
	pOeviTetYd: "db7093",
	papayawEp: "ffefd5",
	pHKpuff: "ffdab9",
	peru: "cd853f",
	pRk: "ffc0cb",
	plum: "dda0dd",
	powMrXe: "b0e0e6",
	purpN: "800080",
	YbeccapurpN: "663399",
	Yd: "ff0000",
	Psybrown: "bc8f8f",
	PyOXe: "4169e1",
	saddNbPwn: "8b4513",
	sOmon: "fa8072",
	sandybPwn: "f4a460",
	sHgYF: "2e8b57",
	sHshell: "fff5ee",
	siFna: "a0522d",
	silver: "c0c0c0",
	skyXe: "87ceeb",
	UXe: "6a5acd",
	UWay: "708090",
	UgYy: "708090",
	snow: "fffafa",
	sprRggYF: "ff7f",
	stAlXe: "4682b4",
	tan: "d2b48c",
	teO: "8080",
	tEstN: "d8bfd8",
	tomato: "ff6347",
	Qe: "40e0d0",
	viTet: "ee82ee",
	JHt: "f5deb3",
	wEte: "ffffff",
	wEtesmoke: "f5f5f5",
	Lw: "ffff00",
	LwgYF: "9acd32"
};
function unpack() {
	const unpacked = {};
	const keys = Object.keys(names$1);
	const tkeys = Object.keys(map);
	let i, j, k, ok, nk;
	for (i = 0; i < keys.length; i++) {
		ok = nk = keys[i];
		for (j = 0; j < tkeys.length; j++) {
			k = tkeys[j];
			nk = nk.replace(k, map[k]);
		}
		k = parseInt(names$1[ok], 16);
		unpacked[nk] = [
			k >> 16 & 255,
			k >> 8 & 255,
			k & 255
		];
	}
	return unpacked;
}
var names;
function nameParse(str) {
	if (!names) {
		names = unpack();
		names.transparent = [
			0,
			0,
			0,
			0
		];
	}
	const a = names[str.toLowerCase()];
	return a && {
		r: a[0],
		g: a[1],
		b: a[2],
		a: a.length === 4 ? a[3] : 255
	};
}
var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
	const m = RGB_RE.exec(str);
	let a = 255;
	let r, g, b;
	if (!m) return;
	if (m[7] !== r) {
		const v = +m[7];
		a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
	}
	r = +m[1];
	g = +m[3];
	b = +m[5];
	r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
	g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
	b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
	return {
		r,
		g,
		b,
		a
	};
}
function rgbString(v) {
	return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
var to = (v) => v <= .0031308 ? v * 12.92 : Math.pow(v, 1 / 2.4) * 1.055 - .055;
var from = (v) => v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
	const r = from(b2n(rgb1.r));
	const g = from(b2n(rgb1.g));
	const b = from(b2n(rgb1.b));
	return {
		r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
		g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
		b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
		a: rgb1.a + t * (rgb2.a - rgb1.a)
	};
}
function modHSL(v, i, ratio) {
	if (v) {
		let tmp = rgb2hsl(v);
		tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
		tmp = hsl2rgb(tmp);
		v.r = tmp[0];
		v.g = tmp[1];
		v.b = tmp[2];
	}
}
function clone$1(v, proto) {
	return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
	var v = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};
	if (Array.isArray(input)) {
		if (input.length >= 3) {
			v = {
				r: input[0],
				g: input[1],
				b: input[2],
				a: 255
			};
			if (input.length > 3) v.a = n2b(input[3]);
		}
	} else {
		v = clone$1(input, {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		});
		v.a = n2b(v.a);
	}
	return v;
}
function functionParse(str) {
	if (str.charAt(0) === "r") return rgbParse(str);
	return hueParse(str);
}
var Color = class Color {
	constructor(input) {
		if (input instanceof Color) return input;
		const type = typeof input;
		let v;
		if (type === "object") v = fromObject(input);
		else if (type === "string") v = hexParse(input) || nameParse(input) || functionParse(input);
		this._rgb = v;
		this._valid = !!v;
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var v = clone$1(this._rgb);
		if (v) v.a = b2n(v.a);
		return v;
	}
	set rgb(obj) {
		this._rgb = fromObject(obj);
	}
	rgbString() {
		return this._valid ? rgbString(this._rgb) : void 0;
	}
	hexString() {
		return this._valid ? hexString(this._rgb) : void 0;
	}
	hslString() {
		return this._valid ? hslString(this._rgb) : void 0;
	}
	mix(color, weight) {
		if (color) {
			const c1 = this.rgb;
			const c2 = color.rgb;
			let w2;
			const p = weight === w2 ? .5 : weight;
			const w = 2 * p - 1;
			const a = c1.a - c2.a;
			const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
			w2 = 1 - w1;
			c1.r = 255 & w1 * c1.r + w2 * c2.r + .5;
			c1.g = 255 & w1 * c1.g + w2 * c2.g + .5;
			c1.b = 255 & w1 * c1.b + w2 * c2.b + .5;
			c1.a = p * c1.a + (1 - p) * c2.a;
			this.rgb = c1;
		}
		return this;
	}
	interpolate(color, t) {
		if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
		return this;
	}
	clone() {
		return new Color(this.rgb);
	}
	alpha(a) {
		this._rgb.a = n2b(a);
		return this;
	}
	clearer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 - ratio;
		return this;
	}
	greyscale() {
		const rgb = this._rgb;
		rgb.r = rgb.g = rgb.b = round(rgb.r * .3 + rgb.g * .59 + rgb.b * .11);
		return this;
	}
	opaquer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 + ratio;
		return this;
	}
	negate() {
		const v = this._rgb;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}
	lighten(ratio) {
		modHSL(this._rgb, 2, ratio);
		return this;
	}
	darken(ratio) {
		modHSL(this._rgb, 2, -ratio);
		return this;
	}
	saturate(ratio) {
		modHSL(this._rgb, 1, ratio);
		return this;
	}
	desaturate(ratio) {
		modHSL(this._rgb, 1, -ratio);
		return this;
	}
	rotate(deg) {
		rotate(this._rgb, deg);
		return this;
	}
};
(() => {
	let id = 0;
	return () => id++;
})();
/**
* Returns true if `value` is neither null nor undefined, else returns false.
* @param value - The value to test.
* @since 2.7.0
*/ function isNullOrUndef(value) {
	return value === null || value === void 0;
}
/**
* Returns true if `value` is an array (including typed arrays), else returns false.
* @param value - The value to test.
* @function
*/ function isArray(value) {
	if (Array.isArray && Array.isArray(value)) return true;
	const type = Object.prototype.toString.call(value);
	if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
	return false;
}
/**
* Returns true if `value` is an object (excluding null), else returns false.
* @param value - The value to test.
* @since 2.7.0
*/ function isObject(value) {
	return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
/**
* Returns `value` if defined, else returns `defaultValue`.
* @param value - The value to return if defined.
* @param defaultValue - The value to return if `value` is undefined.
*/ function valueOrDefault(value, defaultValue) {
	return typeof value === "undefined" ? defaultValue : value;
}
/**
* Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
* value returned by `fn`. If `fn` is not a function, this method returns undefined.
* @param fn - The function to call.
* @param args - The arguments with which `fn` should be called.
* @param [thisArg] - The value of `this` provided for the call to `fn`.
*/ function callback(fn, args, thisArg) {
	if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
	let i, len, keys;
	if (isArray(loopable)) {
		len = loopable.length;
		if (reverse) for (i = len - 1; i >= 0; i--) fn.call(thisArg, loopable[i], i);
		else for (i = 0; i < len; i++) fn.call(thisArg, loopable[i], i);
	} else if (isObject(loopable)) {
		keys = Object.keys(loopable);
		len = keys.length;
		for (i = 0; i < len; i++) fn.call(thisArg, loopable[keys[i]], keys[i]);
	}
}
/**
* Returns a deep copy of `source` without keeping references on objects and arrays.
* @param source - The value to clone.
*/ function clone(source) {
	if (isArray(source)) return source.map(clone);
	if (isObject(source)) {
		const target = Object.create(null);
		const keys = Object.keys(source);
		const klen = keys.length;
		let k = 0;
		for (; k < klen; ++k) target[keys[k]] = clone(source[keys[k]]);
		return target;
	}
	return source;
}
function isValidKey(key) {
	return [
		"__proto__",
		"prototype",
		"constructor"
	].indexOf(key) === -1;
}
/**
* The default merger when Chart.helpers.merge is called without merger option.
* Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
* @private
*/ function _merger(key, target, source, options) {
	if (!isValidKey(key)) return;
	const tval = target[key];
	const sval = source[key];
	if (isObject(tval) && isObject(sval)) merge(tval, sval, options);
	else target[key] = clone(sval);
}
function merge(target, source, options) {
	const sources = isArray(source) ? source : [source];
	const ilen = sources.length;
	if (!isObject(target)) return target;
	options = options || {};
	const merger = options.merger || _merger;
	let current;
	for (let i = 0; i < ilen; ++i) {
		current = sources[i];
		if (!isObject(current)) continue;
		const keys = Object.keys(current);
		for (let k = 0, klen = keys.length; k < klen; ++k) merger(keys[k], target, current, options);
	}
	return target;
}
/**
* @alias Chart.helpers.math
* @namespace
*/ var PI = Math.PI;
2 * PI + PI;
Number.POSITIVE_INFINITY;
PI / 180;
PI / 2;
PI / 4;
PI * 2 / 3;
var log10 = Math.log10;
(function() {
	if (typeof window === "undefined") return function(callback) {
		return callback();
	};
	return window.requestAnimationFrame;
})();
function isPatternOrGradient(value) {
	if (value && typeof value === "object") {
		const type = value.toString();
		return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
	}
	return false;
}
function getHoverColor(value) {
	return isPatternOrGradient(value) ? value : new Color(value).saturate(.5).darken(.1).hexString();
}
var numbers = [
	"x",
	"y",
	"borderWidth",
	"radius",
	"tension"
];
var colors = [
	"color",
	"borderColor",
	"backgroundColor"
];
function applyAnimationsDefaults(defaults) {
	defaults.set("animation", {
		delay: void 0,
		duration: 1e3,
		easing: "easeOutQuart",
		fn: void 0,
		from: void 0,
		loop: void 0,
		to: void 0,
		type: void 0
	});
	defaults.describe("animation", {
		_fallback: false,
		_indexable: false,
		_scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
	});
	defaults.set("animations", {
		colors: {
			type: "color",
			properties: colors
		},
		numbers: {
			type: "number",
			properties: numbers
		}
	});
	defaults.describe("animations", { _fallback: "animation" });
	defaults.set("transitions", {
		active: { animation: { duration: 400 } },
		resize: { animation: { duration: 0 } },
		show: { animations: {
			colors: { from: "transparent" },
			visible: {
				type: "boolean",
				duration: 0
			}
		} },
		hide: { animations: {
			colors: { to: "transparent" },
			visible: {
				type: "boolean",
				easing: "linear",
				fn: (v) => v | 0
			}
		} }
	});
}
function applyLayoutsDefaults(defaults) {
	defaults.set("layout", {
		autoPadding: true,
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	});
}
var intlCache = /* @__PURE__ */ new Map();
function getNumberFormat(locale, options) {
	options = options || {};
	const cacheKey = locale + JSON.stringify(options);
	let formatter = intlCache.get(cacheKey);
	if (!formatter) {
		formatter = new Intl.NumberFormat(locale, options);
		intlCache.set(cacheKey, formatter);
	}
	return formatter;
}
function formatNumber(num, locale, options) {
	return getNumberFormat(locale, options).format(num);
}
var formatters = {
	values(value) {
		return isArray(value) ? value : "" + value;
	},
	numeric(tickValue, index, ticks) {
		if (tickValue === 0) return "0";
		const locale = this.chart.options.locale;
		let notation;
		let delta = tickValue;
		if (ticks.length > 1) {
			const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
			if (maxTick < 1e-4 || maxTick > 0x38d7ea4c68000) notation = "scientific";
			delta = calculateDelta(tickValue, ticks);
		}
		const logDelta = log10(Math.abs(delta));
		const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
		const options = {
			notation,
			minimumFractionDigits: numDecimal,
			maximumFractionDigits: numDecimal
		};
		Object.assign(options, this.options.ticks.format);
		return formatNumber(tickValue, locale, options);
	},
	logarithmic(tickValue, index, ticks) {
		if (tickValue === 0) return "0";
		const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
		if ([
			1,
			2,
			3,
			5,
			10,
			15
		].includes(remain) || index > .8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
		return "";
	}
};
function calculateDelta(tickValue, ticks) {
	let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
	if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
	return delta;
}
var Ticks = { formatters };
function applyScaleDefaults(defaults) {
	defaults.set("scale", {
		display: true,
		offset: false,
		reverse: false,
		beginAtZero: false,
		bounds: "ticks",
		clip: true,
		grace: 0,
		grid: {
			display: true,
			lineWidth: 1,
			drawOnChartArea: true,
			drawTicks: true,
			tickLength: 8,
			tickWidth: (_ctx, options) => options.lineWidth,
			tickColor: (_ctx, options) => options.color,
			offset: false
		},
		border: {
			display: true,
			dash: [],
			dashOffset: 0,
			width: 1
		},
		title: {
			display: false,
			text: "",
			padding: {
				top: 4,
				bottom: 4
			}
		},
		ticks: {
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			textStrokeWidth: 0,
			textStrokeColor: "",
			padding: 3,
			display: true,
			autoSkip: true,
			autoSkipPadding: 3,
			labelOffset: 0,
			callback: Ticks.formatters.values,
			minor: {},
			major: {},
			align: "center",
			crossAlign: "near",
			showLabelBackdrop: false,
			backdropColor: "rgba(255, 255, 255, 0.75)",
			backdropPadding: 2
		}
	});
	defaults.route("scale.ticks", "color", "", "color");
	defaults.route("scale.grid", "color", "", "borderColor");
	defaults.route("scale.border", "color", "", "borderColor");
	defaults.route("scale.title", "color", "", "color");
	defaults.describe("scale", {
		_fallback: false,
		_scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
		_indexable: (name) => name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
	});
	defaults.describe("scales", { _fallback: "scale" });
	defaults.describe("scale.ticks", {
		_scriptable: (name) => name !== "backdropPadding" && name !== "callback",
		_indexable: (name) => name !== "backdropPadding"
	});
}
var overrides = Object.create(null);
var descriptors = Object.create(null);
function getScope$1(node, key) {
	if (!key) return node;
	const keys = key.split(".");
	for (let i = 0, n = keys.length; i < n; ++i) {
		const k = keys[i];
		node = node[k] || (node[k] = Object.create(null));
	}
	return node;
}
function set(root, scope, values) {
	if (typeof scope === "string") return merge(getScope$1(root, scope), values);
	return merge(getScope$1(root, ""), scope);
}
var Defaults = class {
	constructor(_descriptors, _appliers) {
		this.animation = void 0;
		this.backgroundColor = "rgba(0,0,0,0.1)";
		this.borderColor = "rgba(0,0,0,0.1)";
		this.color = "#666";
		this.datasets = {};
		this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
		this.elements = {};
		this.events = [
			"mousemove",
			"mouseout",
			"click",
			"touchstart",
			"touchmove"
		];
		this.font = {
			family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			size: 12,
			style: "normal",
			lineHeight: 1.2,
			weight: null
		};
		this.hover = {};
		this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
		this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
		this.hoverColor = (ctx, options) => getHoverColor(options.color);
		this.indexAxis = "x";
		this.interaction = {
			mode: "nearest",
			intersect: true,
			includeInvisible: false
		};
		this.maintainAspectRatio = true;
		this.onHover = null;
		this.onClick = null;
		this.parsing = true;
		this.plugins = {};
		this.responsive = true;
		this.scale = void 0;
		this.scales = {};
		this.showLine = true;
		this.drawActiveElementsOnTop = true;
		this.describe(_descriptors);
		this.apply(_appliers);
	}
	set(scope, values) {
		return set(this, scope, values);
	}
	get(scope) {
		return getScope$1(this, scope);
	}
	describe(scope, values) {
		return set(descriptors, scope, values);
	}
	override(scope, values) {
		return set(overrides, scope, values);
	}
	route(scope, name, targetScope, targetName) {
		const scopeObject = getScope$1(this, scope);
		const targetScopeObject = getScope$1(this, targetScope);
		const privateName = "_" + name;
		Object.defineProperties(scopeObject, {
			[privateName]: {
				value: scopeObject[name],
				writable: true
			},
			[name]: {
				enumerable: true,
				get() {
					const local = this[privateName];
					const target = targetScopeObject[targetName];
					if (isObject(local)) return Object.assign({}, target, local);
					return valueOrDefault(local, target);
				},
				set(value) {
					this[privateName] = value;
				}
			}
		});
	}
	apply(appliers) {
		appliers.forEach((apply) => apply(this));
	}
};
var defaults$2 = /* @__PURE__ */ new Defaults({
	_scriptable: (name) => !name.startsWith("on"),
	_indexable: (name) => name !== "events",
	hover: { _fallback: "interaction" },
	interaction: {
		_scriptable: false,
		_indexable: false
	}
}, [
	applyAnimationsDefaults,
	applyLayoutsDefaults,
	applyScaleDefaults
]);
/**
* Converts the given font object into a CSS font string.
* @param font - A font object.
* @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
* @private
*/ function toFontString(font) {
	if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
	return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
* @alias Chart.helpers.options
* @namespace
*/ /**
* Converts the given line height `value` in pixels for a specific font `size`.
* @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
* @param size - The font size (in pixels) used to resolve relative `value`.
* @returns The effective line height in pixels (size * 1.2 if value is invalid).
* @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
* @since 2.7.0
*/ function toLineHeight(value, size) {
	const matches = ("" + value).match(LINE_HEIGHT);
	if (!matches || matches[1] === "normal") return size * 1.2;
	value = +matches[2];
	switch (matches[3]) {
		case "px": return value;
		case "%":
			value /= 100;
			break;
	}
	return size * value;
}
var numberOrZero = (v) => +v || 0;
function _readValueToProps(value, props) {
	const ret = {};
	const objProps = isObject(props);
	const keys = objProps ? Object.keys(props) : props;
	const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
	for (const prop of keys) ret[prop] = numberOrZero(read(prop));
	return ret;
}
/**
* Converts the given value into a TRBL object.
* @param value - If a number, set the value to all TRBL component,
*  else, if an object, use defined properties and sets undefined ones to 0.
*  x / y are shorthands for same value for left/right and top/bottom.
* @returns The padding values (top, right, bottom, left)
* @since 3.0.0
*/ function toTRBL(value) {
	return _readValueToProps(value, {
		top: "y",
		right: "x",
		bottom: "y",
		left: "x"
	});
}
/**
* Converts the given value into a padding object with pre-computed width/height.
* @param value - If a number, set the value to all TRBL component,
*  else, if an object, use defined properties and sets undefined ones to 0.
*  x / y are shorthands for same value for left/right and top/bottom.
* @returns The padding values (top, right, bottom, left, width, height)
* @since 2.7.0
*/ function toPadding(value) {
	const obj = toTRBL(value);
	obj.width = obj.left + obj.right;
	obj.height = obj.top + obj.bottom;
	return obj;
}
/**
* Parses font options and returns the font object.
* @param options - A object that contains font options to be parsed.
* @param fallback - A object that contains fallback font options.
* @return The font object.
* @private
*/ function toFont(options, fallback) {
	options = options || {};
	fallback = fallback || defaults$2.font;
	let size = valueOrDefault(options.size, fallback.size);
	if (typeof size === "string") size = parseInt(size, 10);
	let style = valueOrDefault(options.style, fallback.style);
	if (style && !("" + style).match(FONT_STYLE)) {
		console.warn("Invalid font style specified: \"" + style + "\"");
		style = void 0;
	}
	const font = {
		family: valueOrDefault(options.family, fallback.family),
		lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
		size,
		style,
		weight: valueOrDefault(options.weight, fallback.weight),
		string: ""
	};
	font.string = toFontString(font);
	return font;
}
/**
* Evaluates the given `inputs` sequentially and returns the first defined value.
* @param inputs - An array of values, falling back to the last value.
* @param context - If defined and the current value is a function, the value
* is called with `context` as first argument and the result becomes the new input.
* @param index - If defined and the current value is an array, the value
* at `index` become the new input.
* @param info - object to return information about resolution in
* @param info.cacheable - Will be set to `false` if option is not cacheable.
* @since 2.7.0
*/ function resolve(inputs, context, index, info) {
	let cacheable = true;
	let i, ilen, value;
	for (i = 0, ilen = inputs.length; i < ilen; ++i) {
		value = inputs[i];
		if (value === void 0) continue;
		if (context !== void 0 && typeof value === "function") {
			value = value(context);
			cacheable = false;
		}
		if (index !== void 0 && isArray(value)) {
			value = value[index % value.length];
			cacheable = false;
		}
		if (value !== void 0) {
			if (info && !cacheable) info.cacheable = false;
			return value;
		}
	}
}
Number.EPSILON;
/**
* @private
*/ function _isDomSupported() {
	return typeof window !== "undefined" && typeof document !== "undefined";
}
(function() {
	let passiveSupported = false;
	try {
		const options = { get passive() {
			passiveSupported = true;
			return false;
		} };
		if (_isDomSupported()) {
			window.addEventListener("test", null, options);
			window.removeEventListener("test", null, options);
		}
	} catch (e) {}
	return passiveSupported;
})();
//#endregion
//#region node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js
/*!
* chartjs-plugin-datalabels v2.2.0
* https://chartjs-plugin-datalabels.netlify.app
* (c) 2017-2022 chartjs-plugin-datalabels contributors
* Released under the MIT license
*/
var devicePixelRatio = function() {
	if (typeof window !== "undefined") {
		if (window.devicePixelRatio) return window.devicePixelRatio;
		var screen = window.screen;
		if (screen) return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
	}
	return 1;
}();
var utils = {
	toTextLines: function(inputs) {
		var lines = [];
		var input;
		inputs = [].concat(inputs);
		while (inputs.length) {
			input = inputs.pop();
			if (typeof input === "string") lines.unshift.apply(lines, input.split("\n"));
			else if (Array.isArray(input)) inputs.push.apply(inputs, input);
			else if (!isNullOrUndef(inputs)) lines.unshift("" + input);
		}
		return lines;
	},
	textSize: function(ctx, lines, font) {
		var items = [].concat(lines);
		var ilen = items.length;
		var prev = ctx.font;
		var width = 0;
		var i;
		ctx.font = font.string;
		for (i = 0; i < ilen; ++i) width = Math.max(ctx.measureText(items[i]).width, width);
		ctx.font = prev;
		return {
			height: ilen * font.lineHeight,
			width
		};
	},
	bound: function(min, value, max) {
		return Math.max(min, Math.min(value, max));
	},
	arrayDiff: function(a0, a1) {
		var prev = a0.slice();
		var updates = [];
		var i, j, ilen, v;
		for (i = 0, ilen = a1.length; i < ilen; ++i) {
			v = a1[i];
			j = prev.indexOf(v);
			if (j === -1) updates.push([v, 1]);
			else prev.splice(j, 1);
		}
		for (i = 0, ilen = prev.length; i < ilen; ++i) updates.push([prev[i], -1]);
		return updates;
	},
	rasterize: function(v) {
		return Math.round(v * devicePixelRatio) / devicePixelRatio;
	}
};
function orient(point, origin) {
	var x0 = origin.x;
	var y0 = origin.y;
	if (x0 === null) return {
		x: 0,
		y: -1
	};
	if (y0 === null) return {
		x: 1,
		y: 0
	};
	var dx = point.x - x0;
	var dy = point.y - y0;
	var ln = Math.sqrt(dx * dx + dy * dy);
	return {
		x: ln ? dx / ln : 0,
		y: ln ? dy / ln : -1
	};
}
function aligned(x, y, vx, vy, align) {
	switch (align) {
		case "center":
			vx = vy = 0;
			break;
		case "bottom":
			vx = 0;
			vy = 1;
			break;
		case "right":
			vx = 1;
			vy = 0;
			break;
		case "left":
			vx = -1;
			vy = 0;
			break;
		case "top":
			vx = 0;
			vy = -1;
			break;
		case "start":
			vx = -vx;
			vy = -vy;
			break;
		case "end": break;
		default:
			align *= Math.PI / 180;
			vx = Math.cos(align);
			vy = Math.sin(align);
			break;
	}
	return {
		x,
		y,
		vx,
		vy
	};
}
var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;
function region(x, y, rect) {
	var res = R_INSIDE;
	if (x < rect.left) res |= R_LEFT;
	else if (x > rect.right) res |= R_RIGHT;
	if (y < rect.top) res |= R_TOP;
	else if (y > rect.bottom) res |= R_BOTTOM;
	return res;
}
function clipped(segment, area) {
	var x0 = segment.x0;
	var y0 = segment.y0;
	var x1 = segment.x1;
	var y1 = segment.y1;
	var r0 = region(x0, y0, area);
	var r1 = region(x1, y1, area);
	var r, x, y;
	while (true) {
		if (!(r0 | r1) || r0 & r1) break;
		r = r0 || r1;
		if (r & R_TOP) {
			x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
			y = area.top;
		} else if (r & R_BOTTOM) {
			x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
			y = area.bottom;
		} else if (r & R_RIGHT) {
			y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
			x = area.right;
		} else if (r & R_LEFT) {
			y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
			x = area.left;
		}
		if (r === r0) {
			x0 = x;
			y0 = y;
			r0 = region(x0, y0, area);
		} else {
			x1 = x;
			y1 = y;
			r1 = region(x1, y1, area);
		}
	}
	return {
		x0,
		x1,
		y0,
		y1
	};
}
function compute$1(range, config) {
	var anchor = config.anchor;
	var segment = range;
	var x, y;
	if (config.clamp) segment = clipped(segment, config.area);
	if (anchor === "start") {
		x = segment.x0;
		y = segment.y0;
	} else if (anchor === "end") {
		x = segment.x1;
		y = segment.y1;
	} else {
		x = (segment.x0 + segment.x1) / 2;
		y = (segment.y0 + segment.y1) / 2;
	}
	return aligned(x, y, range.vx, range.vy, config.align);
}
var positioners = {
	arc: function(el, config) {
		var angle = (el.startAngle + el.endAngle) / 2;
		var vx = Math.cos(angle);
		var vy = Math.sin(angle);
		var r0 = el.innerRadius;
		var r1 = el.outerRadius;
		return compute$1({
			x0: el.x + vx * r0,
			y0: el.y + vy * r0,
			x1: el.x + vx * r1,
			y1: el.y + vy * r1,
			vx,
			vy
		}, config);
	},
	point: function(el, config) {
		var v = orient(el, config.origin);
		var rx = v.x * el.options.radius;
		var ry = v.y * el.options.radius;
		return compute$1({
			x0: el.x - rx,
			y0: el.y - ry,
			x1: el.x + rx,
			y1: el.y + ry,
			vx: v.x,
			vy: v.y
		}, config);
	},
	bar: function(el, config) {
		var v = orient(el, config.origin);
		var x = el.x;
		var y = el.y;
		var sx = 0;
		var sy = 0;
		if (el.horizontal) {
			x = Math.min(el.x, el.base);
			sx = Math.abs(el.base - el.x);
		} else {
			y = Math.min(el.y, el.base);
			sy = Math.abs(el.base - el.y);
		}
		return compute$1({
			x0: x,
			y0: y + sy,
			x1: x + sx,
			y1: y,
			vx: v.x,
			vy: v.y
		}, config);
	},
	fallback: function(el, config) {
		var v = orient(el, config.origin);
		return compute$1({
			x0: el.x,
			y0: el.y,
			x1: el.x + (el.width || 0),
			y1: el.y + (el.height || 0),
			vx: v.x,
			vy: v.y
		}, config);
	}
};
var rasterize = utils.rasterize;
function boundingRects(model) {
	var borderWidth = model.borderWidth || 0;
	var padding = model.padding;
	var th = model.size.height;
	var tw = model.size.width;
	var tx = -tw / 2;
	var ty = -th / 2;
	return {
		frame: {
			x: tx - padding.left - borderWidth,
			y: ty - padding.top - borderWidth,
			w: tw + padding.width + borderWidth * 2,
			h: th + padding.height + borderWidth * 2
		},
		text: {
			x: tx,
			y: ty,
			w: tw,
			h: th
		}
	};
}
function getScaleOrigin(el, context) {
	var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;
	if (!scale) return null;
	if (scale.xCenter !== void 0 && scale.yCenter !== void 0) return {
		x: scale.xCenter,
		y: scale.yCenter
	};
	var pixel = scale.getBasePixel();
	return el.horizontal ? {
		x: pixel,
		y: null
	} : {
		x: null,
		y: pixel
	};
}
function getPositioner(el) {
	if (el instanceof ArcElement) return positioners.arc;
	if (el instanceof PointElement) return positioners.point;
	if (el instanceof BarElement) return positioners.bar;
	return positioners.fallback;
}
function drawRoundedRect(ctx, x, y, w, h, radius) {
	var HALF_PI = Math.PI / 2;
	if (radius) {
		var r = Math.min(radius, h / 2, w / 2);
		var left = x + r;
		var top = y + r;
		var right = x + w - r;
		var bottom = y + h - r;
		ctx.moveTo(x, top);
		if (left < right && top < bottom) {
			ctx.arc(left, top, r, -Math.PI, -HALF_PI);
			ctx.arc(right, top, r, -HALF_PI, 0);
			ctx.arc(right, bottom, r, 0, HALF_PI);
			ctx.arc(left, bottom, r, HALF_PI, Math.PI);
		} else if (left < right) {
			ctx.moveTo(left, y);
			ctx.arc(right, top, r, -HALF_PI, HALF_PI);
			ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
		} else if (top < bottom) {
			ctx.arc(left, top, r, -Math.PI, 0);
			ctx.arc(left, bottom, r, 0, Math.PI);
		} else ctx.arc(left, top, r, -Math.PI, Math.PI);
		ctx.closePath();
		ctx.moveTo(x, y);
	} else ctx.rect(x, y, w, h);
}
function drawFrame(ctx, rect, model) {
	var bgColor = model.backgroundColor;
	var borderColor = model.borderColor;
	var borderWidth = model.borderWidth;
	if (!bgColor && (!borderColor || !borderWidth)) return;
	ctx.beginPath();
	drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
	ctx.closePath();
	if (bgColor) {
		ctx.fillStyle = bgColor;
		ctx.fill();
	}
	if (borderColor && borderWidth) {
		ctx.strokeStyle = borderColor;
		ctx.lineWidth = borderWidth;
		ctx.lineJoin = "miter";
		ctx.stroke();
	}
}
function textGeometry(rect, align, font) {
	var h = font.lineHeight;
	var w = rect.w;
	var x = rect.x;
	var y = rect.y + h / 2;
	if (align === "center") x += w / 2;
	else if (align === "end" || align === "right") x += w;
	return {
		h,
		w,
		x,
		y
	};
}
function drawTextLine(ctx, text, cfg) {
	var shadow = ctx.shadowBlur;
	var stroked = cfg.stroked;
	var x = rasterize(cfg.x);
	var y = rasterize(cfg.y);
	var w = rasterize(cfg.w);
	if (stroked) ctx.strokeText(text, x, y, w);
	if (cfg.filled) {
		if (shadow && stroked) ctx.shadowBlur = 0;
		ctx.fillText(text, x, y, w);
		if (shadow && stroked) ctx.shadowBlur = shadow;
	}
}
function drawText(ctx, lines, rect, model) {
	var align = model.textAlign;
	var color = model.color;
	var filled = !!color;
	var font = model.font;
	var ilen = lines.length;
	var strokeColor = model.textStrokeColor;
	var strokeWidth = model.textStrokeWidth;
	var stroked = strokeColor && strokeWidth;
	var i;
	if (!ilen || !filled && !stroked) return;
	rect = textGeometry(rect, align, font);
	ctx.font = font.string;
	ctx.textAlign = align;
	ctx.textBaseline = "middle";
	ctx.shadowBlur = model.textShadowBlur;
	ctx.shadowColor = model.textShadowColor;
	if (filled) ctx.fillStyle = color;
	if (stroked) {
		ctx.lineJoin = "round";
		ctx.lineWidth = strokeWidth;
		ctx.strokeStyle = strokeColor;
	}
	for (i = 0, ilen = lines.length; i < ilen; ++i) drawTextLine(ctx, lines[i], {
		stroked,
		filled,
		w: rect.w,
		x: rect.x,
		y: rect.y + rect.h * i
	});
}
var Label = function(config, ctx, el, index) {
	var me = this;
	me._config = config;
	me._index = index;
	me._model = null;
	me._rects = null;
	me._ctx = ctx;
	me._el = el;
};
merge(Label.prototype, {
	_modelize: function(display, lines, config, context) {
		var me = this;
		var index = me._index;
		var font = toFont(resolve([config.font, {}], context, index));
		var color = resolve([config.color, defaults.color], context, index);
		return {
			align: resolve([config.align, "center"], context, index),
			anchor: resolve([config.anchor, "center"], context, index),
			area: context.chart.chartArea,
			backgroundColor: resolve([config.backgroundColor, null], context, index),
			borderColor: resolve([config.borderColor, null], context, index),
			borderRadius: resolve([config.borderRadius, 0], context, index),
			borderWidth: resolve([config.borderWidth, 0], context, index),
			clamp: resolve([config.clamp, false], context, index),
			clip: resolve([config.clip, false], context, index),
			color,
			display,
			font,
			lines,
			offset: resolve([config.offset, 4], context, index),
			opacity: resolve([config.opacity, 1], context, index),
			origin: getScaleOrigin(me._el, context),
			padding: toPadding(resolve([config.padding, 4], context, index)),
			positioner: getPositioner(me._el),
			rotation: resolve([config.rotation, 0], context, index) * (Math.PI / 180),
			size: utils.textSize(me._ctx, lines, font),
			textAlign: resolve([config.textAlign, "start"], context, index),
			textShadowBlur: resolve([config.textShadowBlur, 0], context, index),
			textShadowColor: resolve([config.textShadowColor, color], context, index),
			textStrokeColor: resolve([config.textStrokeColor, color], context, index),
			textStrokeWidth: resolve([config.textStrokeWidth, 0], context, index)
		};
	},
	update: function(context) {
		var me = this;
		var model = null;
		var rects = null;
		var index = me._index;
		var config = me._config;
		var value, label, lines;
		var display = resolve([config.display, true], context, index);
		if (display) {
			value = context.dataset.data[index];
			label = valueOrDefault(callback(config.formatter, [value, context]), value);
			lines = isNullOrUndef(label) ? [] : utils.toTextLines(label);
			if (lines.length) {
				model = me._modelize(display, lines, config, context);
				rects = boundingRects(model);
			}
		}
		me._model = model;
		me._rects = rects;
	},
	geometry: function() {
		return this._rects ? this._rects.frame : {};
	},
	rotation: function() {
		return this._model ? this._model.rotation : 0;
	},
	visible: function() {
		return this._model && this._model.opacity;
	},
	model: function() {
		return this._model;
	},
	draw: function(chart, center) {
		var me = this;
		var ctx = chart.ctx;
		var model = me._model;
		var rects = me._rects;
		var area;
		if (!this.visible()) return;
		ctx.save();
		if (model.clip) {
			area = model.area;
			ctx.beginPath();
			ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
			ctx.clip();
		}
		ctx.globalAlpha = utils.bound(0, model.opacity, 1);
		ctx.translate(rasterize(center.x), rasterize(center.y));
		ctx.rotate(model.rotation);
		drawFrame(ctx, rects.frame, model);
		drawText(ctx, model.lines, rects.text, model);
		ctx.restore();
	}
});
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
function rotated(point, center, angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var cx = center.x;
	var cy = center.y;
	return {
		x: cx + cos * (point.x - cx) - sin * (point.y - cy),
		y: cy + sin * (point.x - cx) + cos * (point.y - cy)
	};
}
function projected(points, axis) {
	var min = MAX_INTEGER;
	var max = MIN_INTEGER;
	var origin = axis.origin;
	var i, pt, vx, vy, dp;
	for (i = 0; i < points.length; ++i) {
		pt = points[i];
		vx = pt.x - origin.x;
		vy = pt.y - origin.y;
		dp = axis.vx * vx + axis.vy * vy;
		min = Math.min(min, dp);
		max = Math.max(max, dp);
	}
	return {
		min,
		max
	};
}
function toAxis(p0, p1) {
	var vx = p1.x - p0.x;
	var vy = p1.y - p0.y;
	var ln = Math.sqrt(vx * vx + vy * vy);
	return {
		vx: (p1.x - p0.x) / ln,
		vy: (p1.y - p0.y) / ln,
		origin: p0,
		ln
	};
}
var HitBox = function() {
	this._rotation = 0;
	this._rect = {
		x: 0,
		y: 0,
		w: 0,
		h: 0
	};
};
merge(HitBox.prototype, {
	center: function() {
		var r = this._rect;
		return {
			x: r.x + r.w / 2,
			y: r.y + r.h / 2
		};
	},
	update: function(center, rect, rotation) {
		this._rotation = rotation;
		this._rect = {
			x: rect.x + center.x,
			y: rect.y + center.y,
			w: rect.w,
			h: rect.h
		};
	},
	contains: function(point) {
		var me = this;
		var margin = 1;
		var rect = me._rect;
		point = rotated(point, me.center(), -me._rotation);
		return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
	},
	intersects: function(other) {
		var r0 = this._points();
		var r1 = other._points();
		var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
		var i, pr0, pr1;
		if (this._rotation !== other._rotation) axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
		for (i = 0; i < axes.length; ++i) {
			pr0 = projected(r0, axes[i]);
			pr1 = projected(r1, axes[i]);
			if (pr0.max < pr1.min || pr1.max < pr0.min) return false;
		}
		return true;
	},
	_points: function() {
		var me = this;
		var rect = me._rect;
		var angle = me._rotation;
		var center = me.center();
		return [
			rotated({
				x: rect.x,
				y: rect.y
			}, center, angle),
			rotated({
				x: rect.x + rect.w,
				y: rect.y
			}, center, angle),
			rotated({
				x: rect.x + rect.w,
				y: rect.y + rect.h
			}, center, angle),
			rotated({
				x: rect.x,
				y: rect.y + rect.h
			}, center, angle)
		];
	}
});
function coordinates(el, model, geometry) {
	var point = model.positioner(el, model);
	var vx = point.vx;
	var vy = point.vy;
	if (!vx && !vy) return {
		x: point.x,
		y: point.y
	};
	var w = geometry.w;
	var h = geometry.h;
	var rotation = model.rotation;
	var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
	var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));
	var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
	dx *= vx * vs;
	dy *= vy * vs;
	dx += model.offset * vx;
	dy += model.offset * vy;
	return {
		x: point.x + dx,
		y: point.y + dy
	};
}
function collide(labels, collider) {
	var i, j, s0, s1;
	for (i = labels.length - 1; i >= 0; --i) {
		s0 = labels[i].$layout;
		for (j = i - 1; j >= 0 && s0._visible; --j) {
			s1 = labels[j].$layout;
			if (s1._visible && s0._box.intersects(s1._box)) collider(s0, s1);
		}
	}
	return labels;
}
function compute(labels) {
	var i, ilen, label, state, geometry, center, proxy;
	for (i = 0, ilen = labels.length; i < ilen; ++i) {
		label = labels[i];
		state = label.$layout;
		if (state._visible) {
			proxy = new Proxy(label._el, { get: (el, p) => el.getProps([p], true)[p] });
			geometry = label.geometry();
			center = coordinates(proxy, label.model(), geometry);
			state._box.update(center, geometry, label.rotation());
		}
	}
	return collide(labels, function(s0, s1) {
		var h0 = s0._hidable;
		var h1 = s1._hidable;
		if (h0 && h1 || h1) s1._visible = false;
		else if (h0) s0._visible = false;
	});
}
var layout = {
	prepare: function(datasets) {
		var labels = [];
		var i, j, ilen, jlen, label;
		for (i = 0, ilen = datasets.length; i < ilen; ++i) for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
			label = datasets[i][j];
			labels.push(label);
			label.$layout = {
				_box: new HitBox(),
				_hidable: false,
				_visible: true,
				_set: i,
				_idx: label._index
			};
		}
		labels.sort(function(a, b) {
			var sa = a.$layout;
			var sb = b.$layout;
			return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
		});
		this.update(labels);
		return labels;
	},
	update: function(labels) {
		var dirty = false;
		var i, ilen, label, model, state;
		for (i = 0, ilen = labels.length; i < ilen; ++i) {
			label = labels[i];
			model = label.model();
			state = label.$layout;
			state._hidable = model && model.display === "auto";
			state._visible = label.visible();
			dirty |= state._hidable;
		}
		if (dirty) compute(labels);
	},
	lookup: function(labels, point) {
		var i, state;
		for (i = labels.length - 1; i >= 0; --i) {
			state = labels[i].$layout;
			if (state && state._visible && state._box.contains(point)) return labels[i];
		}
		return null;
	},
	draw: function(chart, labels) {
		var i, ilen, label, state, geometry, center;
		for (i = 0, ilen = labels.length; i < ilen; ++i) {
			label = labels[i];
			state = label.$layout;
			if (state._visible) {
				geometry = label.geometry();
				center = coordinates(label._el, label.model(), geometry);
				state._box.update(center, geometry, label.rotation());
				label.draw(chart, center);
			}
		}
	}
};
var formatter = function(value) {
	if (isNullOrUndef(value)) return null;
	var label = value;
	var keys, klen, k;
	if (isObject(value)) if (!isNullOrUndef(value.label)) label = value.label;
	else if (!isNullOrUndef(value.r)) label = value.r;
	else {
		label = "";
		keys = Object.keys(value);
		for (k = 0, klen = keys.length; k < klen; ++k) label += (k !== 0 ? ", " : "") + keys[k] + ": " + value[keys[k]];
	}
	return "" + label;
};
/**
* IMPORTANT: make sure to also update tests and TypeScript definition
* files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
*/
var defaults$1 = {
	align: "center",
	anchor: "center",
	backgroundColor: null,
	borderColor: null,
	borderRadius: 0,
	borderWidth: 0,
	clamp: false,
	clip: false,
	color: void 0,
	display: true,
	font: {
		family: void 0,
		lineHeight: 1.2,
		size: void 0,
		style: void 0,
		weight: null
	},
	formatter,
	labels: void 0,
	listeners: {},
	offset: 4,
	opacity: 1,
	padding: {
		top: 4,
		right: 4,
		bottom: 4,
		left: 4
	},
	rotation: 0,
	textAlign: "start",
	textStrokeColor: void 0,
	textStrokeWidth: 0,
	textShadowBlur: 0,
	textShadowColor: void 0
};
/**
* @see https://github.com/chartjs/Chart.js/issues/4176
*/
var EXPANDO_KEY = "$datalabels";
var DEFAULT_KEY = "$default";
function configure(dataset, options) {
	var override = dataset.datalabels;
	var listeners = {};
	var configs = [];
	var labels, keys;
	if (override === false) return null;
	if (override === true) override = {};
	options = merge({}, [options, override]);
	labels = options.labels || {};
	keys = Object.keys(labels);
	delete options.labels;
	if (keys.length) keys.forEach(function(key) {
		if (labels[key]) configs.push(merge({}, [
			options,
			labels[key],
			{ _key: key }
		]));
	});
	else configs.push(options);
	listeners = configs.reduce(function(target, config) {
		each(config.listeners || {}, function(fn, event) {
			target[event] = target[event] || {};
			target[event][config._key || DEFAULT_KEY] = fn;
		});
		delete config.listeners;
		return target;
	}, {});
	return {
		labels: configs,
		listeners
	};
}
function dispatchEvent(chart, listeners, label, event) {
	if (!listeners) return;
	var context = label.$context;
	var groups = label.$groups;
	var callback$1;
	if (!listeners[groups._set]) return;
	callback$1 = listeners[groups._set][groups._key];
	if (!callback$1) return;
	if (callback(callback$1, [context, event]) === true) {
		chart[EXPANDO_KEY]._dirty = true;
		label.update(context);
	}
}
function dispatchMoveEvents(chart, listeners, previous, label, event) {
	var enter, leave;
	if (!previous && !label) return;
	if (!previous) enter = true;
	else if (!label) leave = true;
	else if (previous !== label) leave = enter = true;
	if (leave) dispatchEvent(chart, listeners.leave, previous, event);
	if (enter) dispatchEvent(chart, listeners.enter, label, event);
}
function handleMoveEvents(chart, event) {
	var expando = chart[EXPANDO_KEY];
	var listeners = expando._listeners;
	var previous, label;
	if (!listeners.enter && !listeners.leave) return;
	if (event.type === "mousemove") label = layout.lookup(expando._labels, event);
	else if (event.type !== "mouseout") return;
	previous = expando._hovered;
	expando._hovered = label;
	dispatchMoveEvents(chart, listeners, previous, label, event);
}
function handleClickEvents(chart, event) {
	var expando = chart[EXPANDO_KEY];
	var handlers = expando._listeners.click;
	var label = handlers && layout.lookup(expando._labels, event);
	if (label) dispatchEvent(chart, handlers, label, event);
}
var plugin = {
	id: "datalabels",
	defaults: defaults$1,
	beforeInit: function(chart) {
		chart[EXPANDO_KEY] = { _actives: [] };
	},
	beforeUpdate: function(chart) {
		var expando = chart[EXPANDO_KEY];
		expando._listened = false;
		expando._listeners = {};
		expando._datasets = [];
		expando._labels = [];
	},
	afterDatasetUpdate: function(chart, args, options) {
		var datasetIndex = args.index;
		var expando = chart[EXPANDO_KEY];
		var labels = expando._datasets[datasetIndex] = [];
		var visible = chart.isDatasetVisible(datasetIndex);
		var dataset = chart.data.datasets[datasetIndex];
		var config = configure(dataset, options);
		var elements = args.meta.data || [];
		var ctx = chart.ctx;
		var i, j, ilen, jlen, cfg, key, el, label;
		ctx.save();
		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			el = elements[i];
			el[EXPANDO_KEY] = [];
			if (visible && el && chart.getDataVisibility(i) && !el.skip) for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
				cfg = config.labels[j];
				key = cfg._key;
				label = new Label(cfg, ctx, el, i);
				label.$groups = {
					_set: datasetIndex,
					_key: key || DEFAULT_KEY
				};
				label.$context = {
					active: false,
					chart,
					dataIndex: i,
					dataset,
					datasetIndex
				};
				label.update(label.$context);
				el[EXPANDO_KEY].push(label);
				labels.push(label);
			}
		}
		ctx.restore();
		merge(expando._listeners, config.listeners, { merger: function(event, target, source) {
			target[event] = target[event] || {};
			target[event][args.index] = source[event];
			expando._listened = true;
		} });
	},
	afterUpdate: function(chart) {
		chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
	},
	afterDatasetsDraw: function(chart) {
		layout.draw(chart, chart[EXPANDO_KEY]._labels);
	},
	beforeEvent: function(chart, args) {
		if (chart[EXPANDO_KEY]._listened) {
			var event = args.event;
			switch (event.type) {
				case "mousemove":
				case "mouseout":
					handleMoveEvents(chart, event);
					break;
				case "click":
					handleClickEvents(chart, event);
					break;
			}
		}
	},
	afterEvent: function(chart) {
		var expando = chart[EXPANDO_KEY];
		var previous = expando._actives;
		var actives = expando._actives = chart.getActiveElements();
		var updates = utils.arrayDiff(previous, actives);
		var i, ilen, j, jlen, update, label, labels;
		for (i = 0, ilen = updates.length; i < ilen; ++i) {
			update = updates[i];
			if (update[1]) {
				labels = update[0].element[EXPANDO_KEY] || [];
				for (j = 0, jlen = labels.length; j < jlen; ++j) {
					label = labels[j];
					label.$context.active = update[1] === 1;
					label.update(label.$context);
				}
			}
		}
		if (expando._dirty || updates.length) {
			layout.update(expando._labels);
			chart.render();
		}
		delete expando._dirty;
	}
};
//#endregion
//#region src/pages/auth/dashboard/dash-reporte2.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	class: "row",
	id: "tuto_reporte2"
};
var _hoisted_2 = { class: "col-xs-12 col-md-6" };
var _hoisted_3 = { class: "col-xs-12 col-md-6" };
//#endregion
//#region src/pages/auth/dashboard/dash-reporte2.vue
var dash_reporte2_default = /* @__PURE__ */ defineComponent({
	__name: "dash-reporte2",
	setup(__props) {
		Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend);
		Chart.register(plugin);
		const dashboardService = new DashboardService();
		const refLineChart = ref();
		const refLineChart2 = ref();
		const options = ref({
			responsive: true,
			scales: {},
			plugins: {
				legend: {
					position: "top",
					labels: {
						padding: 0,
						boxHeight: 0,
						boxWidth: 0
					}
				},
				title: {
					display: true,
					text: "Cantidad de accesos en los ultimos 30 dias"
				},
				datalabels: {
					color: "#012044",
					backgroundColor: "#ffffff00",
					borderRadius: 20,
					offset: 8,
					clamp: false,
					anchor: "end",
					align: "top",
					clip: false
				}
			}
		});
		const options2 = ref({
			responsive: true,
			scales: {},
			plugins: {
				legend: {
					position: "top",
					labels: {
						padding: 0,
						boxHeight: 0,
						boxWidth: 0
					}
				},
				title: {
					display: true,
					text: "Cantidad de accesos en los ultimos 365 dias"
				},
				datalabels: {
					color: "#012044",
					backgroundColor: "#ffffff00",
					borderRadius: 20,
					offset: 8,
					clamp: false,
					anchor: "end",
					align: "top",
					clip: false
				}
			}
		});
		const testData = {
			labels: [""],
			datasets: [{
				label: "",
				data: [0],
				fill: false,
				borderColor: "rgb(0, 155, 172)",
				tension: .2,
				backgroundColor: ["#009bac"]
			}]
		};
		const testData2 = {
			labels: [""],
			datasets: [{
				label: "",
				data: [0],
				fill: false,
				borderColor: "rgb(0, 155, 172)",
				tension: .2,
				backgroundColor: ["#009bac"]
			}]
		};
		const get = async () => {
			const res = await dashboardService.reporte2();
			if (res && res.reporte2) {
				const txts = [];
				const envios = [];
				res.reporte2.forEach((x) => {
					txts.push(x.fecha_str);
					envios.push(x.valor);
				});
				txts.push("");
				refLineChart.value.chartInstance.data.labels = txts;
				refLineChart.value.chartInstance.data.datasets[0].data = envios;
				refLineChart.value.chartInstance.update();
			}
			if (res && res.reporte2b) {
				const txts = [];
				const envios = [];
				res.reporte2b.forEach((x) => {
					txts.push(x.mes);
					envios.push(x.valor);
				});
				txts.push("");
				refLineChart2.value.chartInstance.data.labels = txts;
				refLineChart2.value.chartInstance.data.datasets[0].data = envios;
				refLineChart2.value.chartInstance.update();
			}
		};
		const theme = () => {
			const color = Dark.isActive ? "#7e7e7e" : "#012044";
			options.value.plugins.datalabels.color = color;
			options2.value.plugins.datalabels.color = color;
			refLineChart.value?.chartInstance?.update();
			refLineChart2.value?.chartInstance?.update();
		};
		watch(() => Dark.isActive, () => theme());
		onMounted(() => {
			get();
			theme();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2, [_cache[0] || (_cache[0] = createTextVNode(" HOLIS ", -1)), createVNode(unref(LineChart), {
				ref_key: "refLineChart",
				ref: refLineChart,
				class: "q-mt-xl",
				chartData: testData,
				options: options.value,
				plugins: [unref(chartAreaBorder)]
			}, null, 8, ["options", "plugins"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(LineChart), {
				ref_key: "refLineChart2",
				ref: refLineChart2,
				class: "q-mt-xl",
				chartData: testData2,
				options: options2.value,
				plugins: [unref(chartAreaBorder)]
			}, null, 8, ["options", "plugins"])])]);
		};
	}
});
//#endregion
//#region src/pages/auth/dashboard/dash-auth.vue
var dash_auth_default = /* @__PURE__ */ defineComponent({
	__name: "dash-auth",
	setup(__props) {
		const is_dash_auth_r1 = ref(process.env.SHOW_DASH_REPORTE1);
		const is_dash_auth_r2 = ref(process.env.SHOW_DASH_REPORTE2);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [is_dash_auth_r1.value ? (openBlock(), createBlock(dash_reporte1_default, { key: 0 })) : createCommentVNode("", true), is_dash_auth_r2.value ? (openBlock(), createBlock(dash_reporte2_default, { key: 1 })) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/pages/app/dashboard/dash-app.vue
var _sfc_main = {};
var _hoisted_1$1 = { class: "text-center" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$1, "APP DASH -- edit this");
}
var dash_app_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/pages/auth/dashboard/dash-index-auth.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"width",
	"height",
	"src"
];
//#endregion
//#region src/pages/auth/dashboard/dash-index-auth.vue
var dash_index_auth_default = /* @__PURE__ */ defineComponent({
	__name: "dash-index-auth",
	setup(__props) {
		const expanded = ref(false);
		const is_tuto = ref(process.env.SHOW_TUTO_VIDEO);
		const is_dash_app = ref(process.env.SHOW_DASH_APP);
		const video_url = ref(process.env.TUTO_VIDEO_URL + "");
		const refIFrame = ref();
		const width = ref("100%");
		const height = ref(0);
		const size = () => {
			if (!refIFrame.value) return;
			width.value = "100%";
			if (refIFrame.value.offsetWidth > 1080) width.value = "80%";
			height.value = refIFrame.value.offsetWidth * 9 / 16;
		};
		watch(() => expanded.value, () => {
			setTimeout(() => size(), 300);
		});
		onMounted(() => {
			window.addEventListener("resize", size);
		});
		onUnmounted(() => {
			window.removeEventListener("resize", size);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage, { class: "q-pa-md q-mb-xl" }, {
				default: withCtx(() => [
					is_tuto.value ? (openBlock(), createBlock(QExpansionItem, {
						key: 0,
						id: "tuto_video_tutorial",
						modelValue: expanded.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => expanded.value = $event),
						class: "neon-card neon-card--gold",
						"header-class": _ctx.$q.dark.isActive ? "text-green" : "text-primary",
						icon: "video_library",
						label: "Ver el video tutorial",
						caption: "Haz click aqui para ver un video tutorial del sistema"
					}, {
						default: withCtx(() => [createVNode(QCard, { class: "neon-card neon-card--gold" }, {
							default: withCtx(() => [createVNode(QCardSection, { class: "text-center" }, {
								default: withCtx(() => [expanded.value ? (openBlock(), createElementBlock("iframe", {
									key: 0,
									ref_key: "refIFrame",
									ref: refIFrame,
									width: width.value,
									height: height.value,
									src: video_url.value,
									title: "",
									frameborder: "0",
									allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
									referrerpolicy: "strict-origin-when-cross-origin",
									allowfullscreen: ""
								}, null, 8, _hoisted_1)) : createCommentVNode("", true)]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue", "header-class"])) : createCommentVNode("", true),
					createVNode(dash_auth_default),
					is_dash_app.value ? (openBlock(), createBlock(dash_app_default, { key: 1 })) : createCommentVNode("", true)
				]),
				_: 1
			});
		};
	}
});
//#endregion
export { AuthPlugin, avisos_show_default as AvisosShow, boton_perfil_default as BtnPerfil, dash_index_auth_default as DashAuthIndex, EdgeLight_default as EdgeLight, editar_perfil_default as EditarPerfil, LandingLayout_default as LandingLayout, LoginView_default as LoginView, MainLayout_default as MainLayout, notis_index_default as NotisIndex, re_login_default as ReLogin, roles_index_default as RolesIndex, roles_select_default as RolesSelect, tickets_index_default as TicketsIndex, unidades_index_default as UnidadesIndex, usuarios_index_default as UsuariosIndex, ajustarFechaLocal, ajustarFechaUTC, cargarMenus, chartAreaBorder, defectoOps as defectoOpsApp, defectoOps$1 as defectoOpsAuth, detenerSubscripcion, edgeLightSignal, encriptarString, eventBus, iniciarSubscripcion, mostrarAviso, mostrarNotifyError, mostrarRelogin, mutar as mutarApp, mutar$1 as mutarAuth, parseErrors, parseFecha, parseTextError, parseTextErrorWs, query as queryApp, query$1 as queryAuth, sql_roles, sql_usuarios, subs as subsApp, subs$1 as subsAuth, toHomePath, toast1, useLoginStore };
