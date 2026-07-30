//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var e = !1;
function t() {
	e = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
t();
//#endregion
//#region node_modules/svelte/src/constants.js
var n = {}, r = Symbol("uninitialized"), i = Array.isArray, a = Array.prototype.indexOf, o = Array.prototype.includes, s = Array.from, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	return e();
}
function _(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function v() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var y = 1024, b = 2048, x = 4096, S = 8192, C = 16384, w = 32768, T = 1 << 25, E = 65536, D = 1 << 19, O = 1 << 20, ee = 1 << 25, te = 65536, k = 1 << 21, ne = 1 << 22, re = 1 << 23, ie = Symbol("$state"), ae = Symbol("attributes"), oe = Symbol("class"), se = Symbol("style"), ce = Symbol("text"), A = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
function le(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ue() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function j(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function de(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function fe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function pe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function me() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function he() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ge() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function _e() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ve() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ye() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function be(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function xe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var M = !1;
function Se(e) {
	M = e;
}
var N;
function Ce(e) {
	if (e === null) throw be(), n;
	return N = e;
}
function we() {
	return Ce(/* @__PURE__ */ Wt(N));
}
function P(e) {
	if (M) {
		if (/* @__PURE__ */ Wt(N) !== null) throw be(), n;
		N = e;
	}
}
function F(e = 1) {
	if (M) {
		for (var t = e, n = N; t--;) n = /* @__PURE__ */ Wt(n);
		N = n;
	}
}
function I(e = !0) {
	for (var t = 0, n = N;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Wt(n);
		e && n.remove(), n = i;
	}
}
function Te(e) {
	if (!e || e.nodeType !== 8) throw be(), n;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ee(e) {
	return e === this.v;
}
function De(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Oe(e) {
	return !De(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var L = null;
function ke(e) {
	L = e;
}
function Ae(t, n = !1, r) {
	L = {
		p: L,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: q,
		l: e && !n ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function je(e) {
	var t = L, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) tn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, L = t.p, e ?? {};
}
function Me() {
	return !e || L !== null && L.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ne = [];
function Pe() {
	var e = Ne;
	Ne = [], _(e);
}
function Fe(e) {
	if (Ne.length === 0 && !ut) {
		var t = Ne;
		queueMicrotask(() => {
			t === Ne && Pe();
		});
	}
	Ne.push(e);
}
function Ie() {
	for (; Ne.length > 0;) Pe();
}
function Le(e) {
	var t = q;
	if (t === null) return K.f |= re, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Re(e, t);
}
function Re(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var ze = ~(b | x | y);
function R(e, t) {
	e.f = e.f & ze | t;
}
function Be(e) {
	e.f & 512 || e.deps === null ? R(e, y) : R(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ve(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= te, Ve(t.deps));
}
function He(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ve(e.deps), R(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ue(e) {
	var t = K, n = q;
	Dn(null), On(null);
	try {
		return e();
	} finally {
		Dn(t), On(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function We(e) {
	let t = 0, n = kt(0), r;
	return () => {
		Qt() && (J(n), cn(() => (t === 0 && (r = Y(() => e(() => Pt(n)))), t += 1, () => {
			Fe(() => {
				--t, t === 0 && (r?.(), r = void 0, Pt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ge = E | D;
function Ke(e, t, n, r) {
	new qe(e, t, n, r);
}
var qe = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = M ? N : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = We(() => (this.#m = kt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = G(() => {
			if (M) {
				let e = this.#t;
				we();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ge), M && (this.#e = N);
	}
	#g() {
		try {
			this.#a = un(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Fe(r), t && (this.#s = un(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				xe();
				return;
			}
			t = !0, n && ve(), this.#s !== null && _n(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					Re(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = un(() => e(this.#e)), Fe(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ht();
			e.append(t), this.#a = this.#S(() => un(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, _n(this.#o, () => {
				this.#o = null;
			}), this.#x(z));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = un(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				xn(this.#a, e);
				let t = this.#n.pending;
				this.#o = un(() => t(this.#e));
			} else this.#x(z);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		He(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = q, n = K, r = L;
		On(this.#i), Dn(this.#i), ke(this.#i.ctx);
		try {
			return gt.ensure(), e();
		} catch (e) {
			return Le(e), null;
		} finally {
			On(t), Dn(n), ke(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && _n(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Fe(() => {
			this.#d = !1, this.#m && Mt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), J(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		z?.is_fork ? (this.#a && z.skip_effect(this.#a), this.#o && z.skip_effect(this.#o), this.#s && z.skip_effect(this.#s), z.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (mn(this.#a), null), this.#o &&= (mn(this.#o), null), this.#s &&= (mn(this.#s), null), M && (Ce(this.#t), F(), Ce(I()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return un(() => {
						var r = q;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Re(e, this.#i.parent), null;
				}
			}));
		};
		Fe(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Re(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Re(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Je(e, t, n, r) {
	let i = Me() ? Qe : tt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q, c = Ye(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Re(e, s);
			}
			Xe();
		}
	}
	var d = Ze();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ et(e))).then(u).catch((e) => Re(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Xe();
	}) : f();
}
function Ye() {
	var e = q, t = K, n = L, r = z;
	return function(i = !0) {
		On(e), Dn(t), ke(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xe(e = !0) {
	On(null), Dn(null), ke(null), e && z?.deactivate();
}
function Ze() {
	var e = q, t = e.b, n = z, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Qe(e) {
	var t = 2 | b;
	return q !== null && (q.f |= D), {
		ctx: L,
		deps: null,
		effects: null,
		equals: Ee,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: r,
		wv: 0,
		parent: q,
		ac: null
	};
}
var $e = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function et(e, t, n) {
	let i = q;
	i === null && ue();
	var a = void 0, o = kt(r), s = !K, c = /* @__PURE__ */ new Set();
	return sn(() => {
		var t = q, n = v();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== A && n.reject(e);
			}).finally(Xe);
		} catch (e) {
			n.reject(e), Xe();
		}
		var r = z;
		if (s) {
			if (t.f & 32768) var l = Ze();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject($e);
			else for (let e of c.values()) e.reject($e);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== $e && (r.activate(), t ? (o.f |= re, Mt(o, t)) : (o.f & 8388608 && (o.f ^= re), Mt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), $t(() => {
		for (let e of c) e.reject($e);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function tt(e) {
	let t = /* @__PURE__ */ Qe(e);
	return t.equals = Oe, t;
}
function nt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) mn(t[n]);
	}
}
function rt(e) {
	var t, n = q, i = e.parent;
	if (!wn && i !== null && e.v !== r && i.f & 24576) return ye(), e.v;
	On(i);
	try {
		e.f &= ~te, nt(e), t = Hn(e);
	} finally {
		On(n);
	}
	return t;
}
function it(e) {
	var t = rt(e);
	if (!e.equals(t) && (e.wv = zn(), (!z?.is_fork || e.deps === null) && (z === null ? e.v = t : (z.capture(e, t, !0), ct?.capture(e, t, !0)), e.deps === null))) {
		R(e, y);
		return;
	}
	wn || (B === null ? Be(e) : (Qt() || z?.is_fork) && B.set(e, t));
}
function at(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ue(() => {
		t.ac.abort(A), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Wn(t, 0), fn(t));
}
function ot(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Gn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var st = null, z = null, ct = null, B = null, lt = null, ut = !1, dt = !1, ft = null, pt = null, mt = 0, ht = 1, gt = class e {
	id = ht++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		st === null ? st = this : (st.#n = this, this.#t = st), st = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) R(r, b), t(r);
			for (r of n.m) R(r, x), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, mt++ > 1e3 && (this.#x(), vt());
		for (let e of this.#u) this.#d.delete(e), R(e, b), this.schedule(e);
		for (let e of this.#d) R(e, x), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = ft = [], r = [], i = pt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Tt(e), this.#h() || this.discard(), t;
		}
		if (z = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (ft = null, pt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) wt(e, t);
			i.length > 0 && z.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), ct = this, bt(r), bt(n), ct = null, this.#s?.resolve();
		var s = z;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= y;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= y : i & 4 ? t.push(r) : Bn(r) && (i & 16 && this.#d.add(r), Gn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), R(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), z = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) He(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== r && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), B?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		z = this;
	}
	deactivate() {
		z = null, B = null;
	}
	flush() {
		try {
			dt = !0, z = this, this.#g();
		} finally {
			mt = 0, lt = null, ft = null, pt = null, dt = !1, z = null, B = null, Dt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject($e);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, Fe(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= v()).promise;
	}
	static ensure() {
		if (z === null) {
			let t = z = new e();
			!dt && !ut && Fe(() => {
				t.#e || t.flush();
			});
		}
		return z;
	}
	apply() {
		B = null;
	}
	schedule(e) {
		if (lt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (ft !== null && t === q && (K === null || !(K.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= y;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? st = e : t.#t = e, this.linked = !1;
		}
	}
};
function _t(e) {
	var t = ut;
	ut = !0;
	try {
		var n;
		for (e && (z !== null && !z.is_fork && z.flush(), n = e());;) {
			if (Ie(), z === null) return n;
			z.flush();
		}
	} finally {
		ut = t;
	}
}
function vt() {
	try {
		me();
	} catch (e) {
		Re(e, lt);
	}
}
var yt = null;
function bt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Bn(r) && (yt = /* @__PURE__ */ new Set(), Gn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && gn(r), yt?.size > 0)) {
				Dt.clear();
				for (let e of yt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) yt.has(n) && (yt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Gn(n);
					}
				}
				yt.clear();
			}
		}
		yt = null;
	}
}
function xt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? xt(i, t, n, r) : e & 4194320 && !(e & 2048) && St(i, t, r) && (R(i, b), Ct(i));
	}
}
function St(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (o.call(t, r)) return !0;
		if (r.f & 2 && St(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Ct(e) {
	z.schedule(e);
}
function wt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), R(e, y);
		for (var n = e.first; n !== null;) wt(n, t), n = n.next;
	}
}
function Tt(e) {
	R(e, y);
	for (var t = e.first; t !== null;) Tt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Et = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Map(), Ot = !1;
function kt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ee,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function At(e, t) {
	let n = kt(e, t);
	return An(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function jt(t, n = !1, r = !0) {
	let i = kt(t);
	return n || (i.equals = Oe), e && r && L !== null && L.l !== null && (L.l.s ??= []).push(i), i;
}
function V(e, t, n = !1) {
	return K !== null && (!En || K.f & 131072) && Me() && K.f & 4325394 && (kn === null || !kn.has(e)) && _e(), Mt(e, n ? It(t) : t, pt);
}
function Mt(e, t, n = null) {
	if (!e.equals(t)) {
		Dt.set(e, wn ? t : e.v);
		var r = gt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && rt(t), B === null && Be(t);
		}
		e.wv = zn(), Ft(e, b, n), Me() && q !== null && q.f & 1024 && !(q.f & 96) && (Nn === null ? Pn([e]) : Nn.push(e)), !r.is_fork && Et.size > 0 && !Ot && Nt();
	}
	return t;
}
function Nt() {
	Ot = !1;
	for (let e of Et) {
		e.f & 1024 && R(e, x);
		let t;
		try {
			t = Bn(e);
		} catch {
			t = !0;
		}
		t && Gn(e);
	}
	Et.clear();
}
function Pt(e) {
	V(e, e.v + 1);
}
function Ft(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Me(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & b) === 0;
			if (l && R(s, t), c & 131072) Et.add(s);
			else if (c & 2) {
				var u = s;
				B?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= te), Ft(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && yt !== null && yt.add(d), n === null ? Ct(d) : n.push(d);
			}
		}
	}
}
function It(e) {
	if (typeof e != "object" || !e || ie in e) return e;
	let t = p(e);
	if (t !== d && t !== f) return e;
	var n = /* @__PURE__ */ new Map(), a = i(e), o = /* @__PURE__ */ At(0), s = null, c = Ln, u = (e) => {
		if (Ln === c) return e();
		var t = K, n = Ln;
		Dn(null), Rn(c);
		var r = e();
		return Dn(t), Rn(n), r;
	};
	return a && n.set("length", /* @__PURE__ */ At(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && he();
			var i = n.get(t);
			return i === void 0 ? u(() => {
				var e = /* @__PURE__ */ At(r.value, s);
				return n.set(t, e), e;
			}) : V(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = u(() => /* @__PURE__ */ At(r, s));
					n.set(t, e), Pt(o);
				}
			} else V(i, r), Pt(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ie) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || l(t, i)?.writable) && (o = u(() => /* @__PURE__ */ At(It(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
				var d = J(o);
				return d === r ? void 0 : d;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = n.get(t);
				a && (i.value = J(a));
			} else if (i === void 0) {
				var o = n.get(t), s = o?.v;
				if (o !== void 0 && s !== r) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return i;
		},
		has(e, t) {
			if (t === ie) return !0;
			var i = n.get(t), a = i !== void 0 && i.v !== r || Reflect.has(e, t);
			return (i !== void 0 || q !== null && (!a || l(e, t)?.writable)) && (i === void 0 && (i = u(() => /* @__PURE__ */ At(a ? It(e[t]) : r, s)), n.set(t, i)), J(i) === r) ? !1 : a;
		},
		set(e, t, i, c) {
			var d = n.get(t), f = t in e;
			if (a && t === "length") for (var p = i; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ At(r, s)), n.set(p + "", m)) : V(m, r);
			}
			if (d === void 0) (!f || l(e, t)?.writable) && (d = u(() => /* @__PURE__ */ At(void 0, s)), V(d, It(i)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = u(() => It(i));
				V(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, i), !f) {
				if (a && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && V(_, v + 1);
				}
				Pt(o);
			}
			return !0;
		},
		ownKeys(e) {
			J(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== r;
			});
			for (var [i, a] of n) a.v !== r && !(i in e) && t.push(i);
			return t;
		},
		setPrototypeOf() {
			ge();
		}
	});
}
var Lt, Rt, zt, Bt;
function Vt() {
	if (Lt === void 0) {
		Lt = window, Rt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		zt = l(t, "firstChild").get, Bt = l(t, "nextSibling").get, m(e) && (e[oe] = void 0, e[ae] = null, e[se] = void 0, e.__e = void 0), m(n) && (n[ce] = void 0);
	}
}
function Ht(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Ut(e) {
	return zt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Wt(e) {
	return Bt.call(e);
}
function H(e, t) {
	if (!M) return /* @__PURE__ */ Ut(e);
	var n = /* @__PURE__ */ Ut(N);
	if (n === null) n = N.appendChild(Ht());
	else if (t && n.nodeType !== 3) {
		var r = Ht();
		return n?.before(r), Ce(r), r;
	}
	return t && Jt(n), Ce(n), n;
}
function U(e, t = 1, n = !1) {
	let r = M ? N : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Wt(r);
	if (!M) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ht();
			return r === null ? i?.after(a) : r.before(a), Ce(a), a;
		}
		Jt(r);
	}
	return Ce(r), r;
}
function Gt(e) {
	e.textContent = "";
}
function Kt() {
	return !1;
}
function qt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Jt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Yt(e) {
	q === null && (K === null && pe(e), fe()), wn && de(e);
}
function Xt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Zt(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= S);
	var r = {
		ctx: L,
		deps: null,
		nodes: null,
		f: e | b | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	z?.register_created_effect(r);
	var i = r;
	if (e & 4) ft === null ? gt.ensure().schedule(r) : ft.push(r);
	else if (t !== null) {
		try {
			Gn(r);
		} catch (e) {
			throw mn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= E));
	}
	if (i !== null && (i.parent = n, n !== null && Xt(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Qt() {
	return K !== null && !En;
}
function $t(e) {
	let t = Zt(8, null);
	return R(t, y), t.teardown = e, t;
}
function en(e) {
	Yt("$effect");
	var t = q.f;
	if (!K && t & 32 && L !== null && !L.i) {
		var n = L;
		(n.e ??= []).push(e);
	} else return tn(e);
}
function tn(e) {
	return Zt(4 | O, e);
}
function nn(e) {
	return Yt("$effect.pre"), Zt(8 | O, e);
}
function rn(e) {
	gt.ensure();
	let t = Zt(64 | D, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? _n(t, () => {
			mn(t), n(void 0);
		}) : (mn(t), n(void 0));
	});
}
function an(e) {
	return Zt(4, e);
}
function W(e, t) {
	var n = L, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = cn(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = q;
			try {
				On(n.parent), Y(t);
			} finally {
				On(n);
			}
		}
	});
}
function on() {
	var e = L;
	cn(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && R(n, x), Bn(n) && Gn(n), t.ran = !1;
		}
	});
}
function sn(e) {
	return Zt(ne | D, e);
}
function cn(e, t = 0) {
	return Zt(8 | t, e);
}
function ln(e, t = [], n = [], r = []) {
	Je(r, t, n, (t) => {
		Zt(8, () => {
			e(...t.map(J));
		});
	});
}
function G(e, t = 0) {
	return Zt(16 | t, e);
}
function un(e) {
	return Zt(32 | D, e);
}
function dn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = wn, n = K;
		Tn(!0), Dn(null);
		try {
			t.call(null);
		} finally {
			Tn(e), Dn(n);
		}
	}
}
function fn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ue(() => {
			e.abort(A);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : mn(n, t), n = r;
	}
}
function pn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || mn(t), t = n;
	}
}
function mn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (hn(e.nodes.start, e.nodes.end), n = !0), e.f |= T, fn(e, t && !n), Wn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	dn(e), e.f ^= T, e.f |= C;
	var i = e.parent;
	i !== null && i.first !== null && gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function hn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Wt(e);
		e.remove(), e = n;
	}
}
function gn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _n(e, t, n = !0) {
	var r = [];
	vn(e, r, !0);
	var i = () => {
		n && mn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function vn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= S;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				vn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function yn(e) {
	bn(e, !0);
}
function bn(e, t) {
	if (e.f & 8192) {
		e.f ^= S, e.f & 1024 || (R(e, b), gt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			bn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function xn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Wt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Sn = null, Cn = !1, wn = !1;
function Tn(e) {
	wn = e;
}
var K = null, En = !1;
function Dn(e) {
	K = e;
}
var q = null;
function On(e) {
	q = e;
}
var kn = null;
function An(e) {
	K !== null && (kn ??= /* @__PURE__ */ new Set()).add(e);
}
var jn = null, Mn = 0, Nn = null;
function Pn(e) {
	Nn = e;
}
var Fn = 1, In = 0, Ln = In;
function Rn(e) {
	Ln = e;
}
function zn() {
	return ++Fn;
}
function Bn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~te), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Bn(a) && it(a), a.wv > e.wv) return !0;
		}
		t & 512 && B === null && R(e, y);
	}
	return !1;
}
function Vn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(kn !== null && kn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Vn(a, t, !1) : t === a && (n ? R(a, b) : a.f & 1024 && R(a, x), Ct(a));
	}
}
function Hn(e) {
	var t = jn, n = Mn, r = Nn, i = K, a = kn, o = L, s = En, c = Ln, l = e.f;
	jn = null, Mn = 0, Nn = null, K = l & 96 ? null : e, kn = null, ke(e.ctx), En = !1, Ln = ++In, e.ac !== null && (Ue(() => {
		e.ac.abort(A);
	}), e.ac = null);
	try {
		e.f |= k;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = z?.is_fork;
		if (jn !== null) {
			var m;
			if (p || Wn(e, Mn), f !== null && Mn > 0) for (f.length = Mn + jn.length, m = 0; m < jn.length; m++) f[Mn + m] = jn[m];
			else e.deps = f = jn;
			if (Qt() && e.f & 512) for (m = Mn; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Mn < f.length && (Wn(e, Mn), f.length = Mn);
		if (Me() && Nn !== null && !En && f !== null && !(e.f & 6146)) for (m = 0; m < Nn.length; m++) Vn(Nn[m], e);
		if (i !== null && i !== e) {
			if (In++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = In;
			if (t !== null) for (let e of t) e.rv = In;
			Nn !== null && (r === null ? r = Nn : r.push(...Nn));
		}
		return e.f & 8388608 && (e.f ^= re), d;
	} catch (e) {
		return Le(e);
	} finally {
		e.f ^= k, jn = t, Mn = n, Nn = r, K = i, kn = a, ke(o), En = s, Ln = c;
	}
}
function Un(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = a.call(n, e);
		if (i !== -1) {
			var s = n.length - 1;
			s === 0 ? n = t.reactions = null : (n[i] = n[s], n.pop());
		}
	}
	if (n === null && t.f & 2 && (jn === null || !o.call(jn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~te), c.v !== r && Be(c), c.ac !== null && Ue(() => {
			c.ac.abort(A), c.ac = null, R(c, b);
		}), at(c), Wn(c, 0);
	}
}
function Wn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Un(e, n[r]);
}
function Gn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		R(e, y);
		var n = q, r = Cn;
		q = e, Cn = (t & 96) == 0;
		try {
			t & 16777232 ? pn(e) : fn(e), dn(e);
			var i = Hn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Fn;
		} finally {
			Cn = r, q = n;
		}
	}
}
async function Kn() {
	await Promise.resolve(), _t();
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (Sn?.add(e), K !== null && !En && !(q !== null && q.f & 16384) && (kn === null || !kn.has(e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < In && (e.rv = In, jn === null && n !== null && n[Mn] === e ? Mn++ : jn === null ? jn = [e] : jn.push(e));
		else {
			K.deps ??= [], o.call(K.deps, e) || K.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : o.call(r, K) || r.push(K);
		}
	}
	if (wn && Dt.has(e)) return Dt.get(e);
	if (t) {
		var i = e;
		if (wn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Jn(i)) && (a = rt(i)), Dt.set(i, a), a;
		}
		var s = (i.f & 512) == 0 && !En && K !== null && (Cn || (K.f & 512) != 0), c = (i.f & w) === 0;
		Bn(i) && (s && (i.f |= 512), it(i)), s && !c && (ot(i), qn(i));
	}
	if (B?.has(e)) return B.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function qn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ot(t), qn(t));
}
function Jn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Dt.has(t) || t.f & 2 && Jn(t)) return !0;
	return !1;
}
function Y(e) {
	var t = En;
	try {
		return En = !0, e();
	} finally {
		En = t;
	}
}
function Yn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ie in e) Xn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ie in n && Xn(n);
		}
	}
}
function Xn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Xn(e[n], t);
		} catch {}
		let n = p(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = u(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Zn = Symbol("events"), Qn = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new Set();
function er(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || rr.call(t, e), !e.cancelBubble) return Ue(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function tr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = er(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && $t(() => {
		t.removeEventListener(e, o, a);
	});
}
var nr = null;
function rr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	nr = e;
	var o = 0, s = nr === e && e[Zn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Zn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = K, f = q;
		Dn(null), On(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Zn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Zn] = t, delete e.currentTarget, Dn(d), On(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var ir = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ar(e) {
	return ir?.createHTML(e) ?? e;
}
function or(e) {
	var t = qt("template");
	return t.innerHTML = ar(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function sr(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function cr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (M) return sr(N, null), N;
		i === void 0 && (i = or(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Ut(i)));
		var t = r || Rt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Ut(t), s = t.lastChild;
			sr(o, s);
		} else sr(t, t);
		return t;
	};
}
function lr(e, t) {
	if (M) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = N), we();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var ur = ["touchstart", "touchmove"];
function dr(e) {
	return ur.includes(e);
}
function fr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ce] ??= e.nodeValue) && (e[ce] = n, e.nodeValue = `${n}`);
}
function pr(e, t) {
	return hr(e, t);
}
var mr = /* @__PURE__ */ new Map();
function hr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: c = !0, transformError: l }) {
	Vt();
	var u = void 0, d = rn(() => {
		var c = r ?? t.appendChild(Ht());
		Ke(c, { pending: () => {} }, (t) => {
			Ae({});
			var r = L;
			if (o && (r.c = o), a && (i.$$events = a), M && sr(t, null), u = e(t, i) || {}, M && (q.nodes.end = N, N === null || N.nodeType !== 8 || N.data !== "]")) throw be(), n;
			je();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = dr(r);
					for (let e of [t, document]) {
						var a = mr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), mr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, rr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(s(Qn)), $n.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = mr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, rr), n.delete(e), n.size === 0 && mr.delete(r)) : n.set(e, i);
			}
			$n.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return gr.set(u, d), u;
}
var gr = /* @__PURE__ */ new WeakMap(), _r = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) yn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (yn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (mn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						xn(r, t), t.append(Ht()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else mn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), _n(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (mn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = z, r = Kt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ht();
			i.append(a), this.#n.set(e, {
				effect: un(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, un(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else M && (this.anchor = N), this.#a(n);
	}
};
function vr(t) {
	L === null && le("onMount"), e && L.l !== null ? yr(L).m.push(t) : en(() => {
		let e = Y(t);
		if (typeof e == "function") return e;
	});
}
function yr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function br(e, t, n = !1) {
	var r;
	M && (r = N, we());
	var i = new _r(e), a = n ? E : 0;
	function o(e, t) {
		if (M) {
			var n = Te(r);
			if (e !== parseInt(n.substring(1))) {
				var a = I();
				Ce(a), i.anchor = a, Se(!1), i.ensure(e, t), Se(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	G(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function xr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, c = 0; c < i; c++) {
		let n = t[c];
		_n(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Sr(e, s(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Gt(d), d.append(u), e.items.clear();
		}
		Sr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Sr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, xn(a, document.createDocumentFragment())) : mn(t[i], n);
	}
}
var Cr;
function wr(e, t, n, r, a, o = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = M ? Ce(/* @__PURE__ */ Ut(u)) : u.appendChild(Ht());
	}
	M && we();
	var d = null, f = /* @__PURE__ */ tt(() => {
		var e = n();
		return i(e) ? e : e == null ? [] : s(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Er(v, p, c, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Or(d, null, c)) : yn(d) : _n(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: G(() => {
			p = J(f);
			var e = p.length;
			let i = !1;
			M && Te(c) === "[!" != (e === 0) && (c = I(), Ce(c), Se(!1), i = !0);
			for (var s = /* @__PURE__ */ new Set(), u = z, v = Kt(), y = 0; y < e; y += 1) {
				M && N.nodeType === 8 && N.data === "]" && (c = N, i = !0, Se(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Mt(S.v, b), S.i && Mt(S.i, y), v && u.unskip_effect(S.e)) : (S = Dr(l, h ? c : Cr ??= Ht(), b, x, y, a, t, n), h || (S.e.f |= ee), l.set(x, S)), s.add(x);
			}
			if (e === 0 && o && !d && (h ? d = un(() => o(c)) : (d = un(() => o(Cr ??= Ht())), d.f |= ee)), e > s.size && j("", "", ""), M && e > 0 && Ce(I()), !h) if (m.set(u, s), v) {
				for (let [e, t] of l) s.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			i && Se(!0), J(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, M && (c = N);
}
function Tr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Er(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, c = e.items, l = Tr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (yn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ee, _ === l) Or(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), kr(e, d, _), kr(e, _, y), Or(_, y, n), d = _, p = [], m = [], l = Tr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Or(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					kr(e, S.prev, C.next), kr(e, d, S), kr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Or(_, l, n), kr(e, _.prev, _.next), kr(e, _, d === null ? e.effect.first : d.next), kr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Tr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Tr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Sr(e, s(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Tr(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			xr(e, w, E);
		}
	}
	a && Fe(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Dr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? kt(n) : /* @__PURE__ */ jt(n, !1, !1) : null, l = o & 2 ? kt(i) : null;
	return {
		v: c,
		i: l,
		e: un(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Or(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Wt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function kr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Ar = [..." 	\n\r\f\xA0\v﻿"];
function jr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Ar.includes(r[o - 1])) && (s === r.length || Ar.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Mr(e, t, n, r, i, a) {
	var o = e[oe];
	if (M || o !== n || o === void 0) {
		var s = jr(n, r, a);
		(!M || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Nr(e, t) {
	return e === t || e?.[ie] === t;
}
function Pr(e = {}, t, n, r) {
	var i = L.r, a = q;
	return an(() => {
		var o, s;
		return cn(() => {
			o = s, s = r?.() || [], Y(() => {
				Nr(n(...s), e) || (t(e, ...s), o && Nr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Nr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Fr(e = !1) {
	let t = L, n = t.l.u;
	if (!n) return;
	let r = () => Yn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Qe(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && nn(() => {
		Ir(t, r), _(n.b);
	}), en(() => {
		let e = Y(() => n.m.map(g));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && en(() => {
		Ir(t, r), _(n.a);
	});
}
function Ir(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
var Lr = !0, Rr = "uplot", zr = "u-hz", Br = "u-vt", Vr = "u-title", Hr = "u-wrap", Ur = "u-under", Wr = "u-over", Gr = "u-axis", Kr = "u-off", qr = "u-select", Jr = "u-cursor-x", Yr = "u-cursor-y", Xr = "u-cursor-pt", Zr = "u-legend", Qr = "u-live", $r = "u-inline", ei = "u-series", ti = "u-marker", ni = "u-label", ri = "u-value", ii = "width", ai = "height", oi = "top", si = "bottom", ci = "left", li = "right", ui = "#000", di = "#0000", fi = "mousemove", pi = "mousedown", mi = "mouseup", hi = "mouseenter", gi = "mouseleave", _i = "dblclick", vi = "resize", yi = "scroll", bi = "change", xi = "dppxchange", Si = "--", Ci = typeof window < "u", wi = Ci ? document : null, Ti = Ci ? window : null, Ei = Ci ? navigator : null, X, Di;
function Oi() {
	let e = devicePixelRatio;
	X != e && (X = e, Di && Ui(bi, Di, Oi), Di = matchMedia(`(min-resolution: ${X - .001}dppx) and (max-resolution: ${X + .001}dppx)`), Hi(bi, Di, Oi), Ti.dispatchEvent(new CustomEvent(xi)));
}
function ki(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Ai(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function ji(e, t, n) {
	e.style[t] = n + "px";
}
function Mi(e, t, n, r) {
	let i = wi.createElement(e);
	return t != null && ki(i, t), n?.insertBefore(i, r), i;
}
function Ni(e, t) {
	return Mi("div", e, t);
}
var Pi = /* @__PURE__ */ new WeakMap();
function Fi(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != Pi.get(e) && (e.style.transform = a, Pi.set(e, a), t < 0 || n < 0 || t > r || n > i ? ki(e, Kr) : Ai(e, Kr));
}
var Ii = /* @__PURE__ */ new WeakMap();
function Li(e, t, n) {
	let r = t + n;
	r != Ii.get(e) && (Ii.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var Ri = /* @__PURE__ */ new WeakMap();
function zi(e, t, n, r) {
	let i = t + "" + n;
	i != Ri.get(e) && (Ri.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var Bi = { passive: !0 }, Vi = {
	...Bi,
	capture: !0
};
function Hi(e, t, n, r) {
	t.addEventListener(e, n, r ? Vi : Bi);
}
function Ui(e, t, n, r) {
	t.removeEventListener(e, n, Bi);
}
Ci && Oi();
function Wi(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : da((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function Gi(e) {
	return (t, n, r) => {
		let i = -1, a = -1;
		for (let a = n; a <= r; a++) if (e(t[a])) {
			i = a;
			break;
		}
		for (let i = r; i >= n; i--) if (e(t[i])) {
			a = i;
			break;
		}
		return [i, a];
	};
}
var Ki = (e) => e != null, qi = (e) => e != null && e > 0, Ji = Gi(Ki), Yi = Gi(qi);
function Xi(e, t, n, r = 0, i = !1) {
	let a = i ? Yi : Ji, o = i ? qi : Ki;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? Sa, c ?? -Sa];
}
function Zi(e, t, n, r) {
	let i = _a(e), a = _a(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? va : ya, s = i == 1 ? da : pa, c = a == 1 ? pa : da, l = s(o(ua(e))), u = c(o(ua(t))), d = ga(n, l), f = ga(n, u);
	return n == 10 && (l < 0 && (d = La(d, -l)), u < 0 && (f = La(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = Ia(e, d), t = Fa(t, f)), [e, t];
}
function Qi(e, t, n, r) {
	let i = Zi(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var $i = .1, ea = {
	mode: 3,
	pad: $i
}, ta = {
	pad: 0,
	soft: null,
	mode: 0
}, na = {
	min: ta,
	max: ta
};
function ra(e, t, n, r) {
	return Ja(n) ? aa(e, t, n) : (ta.pad = n, ta.soft = r ? 0 : null, ta.mode = r ? 3 : 0, aa(e, t, na));
}
function Z(e, t) {
	return e ?? t;
}
function ia(e, t, n) {
	for (t = Z(t, 0), n = Z(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function aa(e, t, n) {
	let r = n.min, i = n.max, a = Z(r.pad, 0), o = Z(i.pad, 0), s = Z(r.hard, -Sa), c = Z(i.hard, Sa), l = Z(r.soft, Sa), u = Z(i.soft, -Sa), d = Z(r.mode, 0), f = Z(i.mode, 0), p = t - e, m = va(p), h = ha(ua(e), ua(t)), g = ua(va(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != Sa && (a = 0), f == 2 && u != -Sa && (o = 0)));
	let _ = p || h || 1e3, v = ga(10, da(va(_))), y = La(Ia(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : Sa, x = ha(s, y < b && e >= b ? b : ma(b, y)), S = La(Fa(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -Sa, w = ma(c, S > C && t <= C ? C : ha(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var oa = new Intl.NumberFormat(Ci ? Ei.language : "en-US"), sa = (e) => oa.format(e), ca = Math, la = ca.PI, ua = ca.abs, da = ca.floor, fa = ca.round, pa = ca.ceil, ma = ca.min, ha = ca.max, ga = ca.pow, _a = ca.sign, va = ca.log10, ya = ca.log2, ba = (e, t = 1) => ca.sinh(e) * t, xa = (e, t = 1) => ca.asinh(e / t), Sa = Infinity;
function Ca(e) {
	return (va((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function wa(e, t, n) {
	return ma(ha(e, t), n);
}
function Ta(e) {
	return typeof e == "function";
}
function Q(e) {
	return Ta(e) ? e : () => e;
}
var Ea = () => {}, Da = (e) => e, Oa = (e, t) => t, ka = (e) => null, Aa = (e) => !0, ja = (e, t) => e == t, Ma = /\.\d*?(?=9{6,}|0{6,})/gm, Na = (e) => {
	if (Ga(e) || Ra.has(e)) return e;
	let t = `${e}`, n = t.match(Ma);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Na(e)}e${n}`;
	}
	return La(e, r);
};
function Pa(e, t) {
	return Na(La(Na(e / t)) * t);
}
function Fa(e, t) {
	return Na(pa(Na(e / t)) * t);
}
function Ia(e, t) {
	return Na(da(Na(e / t)) * t);
}
function La(e, t = 0) {
	if (Ga(e)) return e;
	let n = 10 ** t;
	return fa(e * n * (1 + 2 ** -52)) / n;
}
var Ra = /* @__PURE__ */ new Map();
function za(e) {
	return (("" + e).split(".")[1] || "").length;
}
function Ba(e, t, n, r) {
	let i = [], a = r.map(za);
	for (let o = t; o < n; o++) {
		let t = ua(o), n = La(ga(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : La(c, l);
			i.push(u), Ra.set(u, l);
		}
	}
	return i;
}
var Va = {}, Ha = [], Ua = [null, null], Wa = Array.isArray, Ga = Number.isInteger, Ka = (e) => e === void 0;
function qa(e) {
	return typeof e == "string";
}
function Ja(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function Ya(e) {
	return typeof e == "object" && !!e;
}
var Xa = Object.getPrototypeOf(Uint8Array), Za = "__proto__";
function Qa(e, t = Ja) {
	let n;
	if (Wa(e)) {
		let r = e.find((e) => e != null);
		if (Wa(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = Qa(e[r], t);
		} else n = e.slice();
	} else if (e instanceof Xa) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != Za && (n[r] = Qa(e[r], t));
	} else n = e;
	return n;
}
function $a(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != Za && (Ja(e[t]) ? $a(e[t], Qa(r[t])) : e[t] = Qa(r[t]));
	}
	return e;
}
var eo = 0, to = 1, no = 2;
function ro(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function io(e, t) {
	if (so(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return co(t[0]) || (t = oo(t)), t;
	}
	let n = /* @__PURE__ */ new Set();
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = r.length;
		for (let e = 0; e < i; e++) n.add(r[e]);
	}
	let r = [Array.from(n).sort((e, t) => e - t)], i = r[0].length, a = /* @__PURE__ */ new Map();
	for (let e = 0; e < i; e++) a.set(r[0][e], e);
	for (let n = 0; n < e.length; n++) {
		let o = e[n], s = o[0];
		for (let e = 1; e < o.length; e++) {
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : to, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != eo && (l[n] = t, u == no && d.push(n)) : l[n] = t;
			}
			ro(l, d, i), r.push(l);
		}
	}
	return r;
}
var ao = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function oo(e) {
	let t = e[0], n = t.length, r = Array(n);
	for (let e = 0; e < r.length; e++) r[e] = e;
	r.sort((e, n) => t[e] - t[n]);
	let i = [];
	for (let t = 0; t < e.length; t++) {
		let a = e[t], o = Array(n);
		for (let e = 0; e < n; e++) o[e] = a[r[e]];
		i.push(o);
	}
	return i;
}
function so(e) {
	let t = e[0][0], n = t.length;
	for (let r = 1; r < e.length; r++) {
		let i = e[r][0];
		if (i.length != n) return !1;
		if (i != t) {
			for (let e = 0; e < n; e++) if (i[e] != t[e]) return !1;
		}
	}
	return !0;
}
function co(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = ha(1, da((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var lo = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], uo = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function fo(e) {
	return e.slice(0, 3);
}
var po = uo.map(fo), mo = {
	MMMM: lo,
	MMM: lo.map(fo),
	WWWW: uo,
	WWW: po
};
function ho(e) {
	return (e < 10 ? "0" : "") + e;
}
function go(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var _o = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => ho(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => ho(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => ho(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => ho(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => ho(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => go(e.getMilliseconds())
};
function vo(e, t) {
	t ||= mo;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? _o[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var yo = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function bo(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == yo ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var xo = (e) => e % 1 == 0, So = [
	1,
	2,
	2.5,
	5
], Co = Ba(10, -32, 0, So), wo = Ba(10, 0, 32, So), To = wo.filter(xo), Eo = Co.concat(wo), Do = "{YYYY}", Oo = "\n{YYYY}", ko = "{M}/{D}", Ao = "\n{M}/{D}", jo = "\n{M}/{D}/{YY}", Mo = "{h}:{mm}{aa}", No = "\n{h}:{mm}{aa}", Po = ":{ss}", $ = null;
function Fo(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? Ba(10, 0, 3, So).filter(xo) : Ba(10, -3, 0, So)).concat([
		t,
		t * 5,
		t * 10,
		t * 15,
		t * 30,
		n,
		n * 5,
		n * 10,
		n * 15,
		n * 30,
		r,
		r * 2,
		r * 3,
		r * 4,
		r * 6,
		r * 8,
		r * 12,
		i,
		i * 2,
		i * 3,
		i * 4,
		i * 5,
		i * 6,
		i * 7,
		i * 8,
		i * 9,
		i * 10,
		i * 15,
		a,
		a * 2,
		a * 3,
		a * 4,
		a * 6,
		o,
		o * 2,
		o * 5,
		o * 10,
		o * 25,
		o * 50,
		o * 100
	]), c = [
		[
			o,
			Do,
			$,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			i * 28,
			"{MMM}",
			Oo,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			i,
			ko,
			Oo,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			r,
			"{h}{aa}",
			jo,
			$,
			Ao,
			$,
			$,
			$,
			1
		],
		[
			n,
			Mo,
			jo,
			$,
			Ao,
			$,
			$,
			$,
			1
		],
		[
			t,
			Po,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			$,
			"\n{M}/{D} {h}:{mm}{aa}",
			$,
			No,
			$,
			1
		],
		[
			e,
			":{ss}.{fff}",
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			$,
			"\n{M}/{D} {h}:{mm}{aa}",
			$,
			No,
			$,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = La(g * e, 3), v = Go(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = La(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : La(Go(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(fa(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = Go(c + r * a, l + n * a, 1), s = o - t(La(o * e, 3));
					i = La((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (da(l) - da(_)) + Fa(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = La(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = da(La(h + g, 6)) % 24, n = t(o).getHours() - e;
					n > 1 && (n = -1), o -= n * r, h = (h + g) % 24;
					let i = p[p.length - 1];
					La((o - i) / d, 3) * v >= .7 && p.push(o);
				} else p.push(o);
			}
			return p;
		};
	}
	return [
		s,
		c,
		l
	];
}
var [Io, Lo, Ro] = Fo(1), [zo, Bo, Vo] = Fo(.001);
Ba(2, -53, 53, [1]);
function Ho(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function Uo(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function Wo(e, t) {
	let n = vo(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function Go(e, t, n) {
	return new Date(e, t, n);
}
function Ko(e, t) {
	return t(e);
}
var qo = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function Jo(e, t) {
	return (n, r, i, a) => a == null ? Si : t(e(r));
}
function Yo(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function Xo(e, t) {
	return e.series[t].fill(e, t);
}
var Zo = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: Ea,
	markers: {
		show: !0,
		width: 2,
		stroke: Yo,
		fill: Xo,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function Qo(e, t) {
	let n = e.cursor.points, r = Ni(), i = n.size(e, t);
	ji(r, ii, i), ji(r, ai, i);
	let a = i / -2;
	ji(r, "marginLeft", a), ji(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && ji(r, "borderWidth", o), r;
}
function $o(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function es(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function ts(e, t) {
	return e.series[t].points.size;
}
var ns = [0, 0];
function rs(e, t, n) {
	return ns[0] = t, ns[1] = n, ns;
}
function is(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function as(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var os = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: rs,
	points: {
		one: !1,
		show: Qo,
		size: ts,
		width: 0,
		stroke: es,
		fill: $o
	},
	bind: {
		mousedown: is,
		mouseup: is,
		click: is,
		dblclick: is,
		mousemove: as,
		mouseleave: as,
		mouseenter: as
	},
	drag: {
		setScale: !0,
		x: !0,
		y: !1,
		dist: 0,
		uni: null,
		click: (e, t) => {
			t.stopPropagation(), t.stopImmediatePropagation();
		},
		_x: !1,
		_y: !1
	},
	focus: {
		dist: (e, t, n, r, i) => r - i,
		prox: -1,
		bias: 0
	},
	hover: {
		skip: [void 0],
		prox: null,
		bias: 0
	},
	left: -10,
	top: -10,
	idx: null,
	dataIdx: null,
	idxs: null,
	event: null
}, ss = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, cs = $a({}, ss, { filter: Oa }), ls = $a({}, cs, { size: 10 }), us = $a({}, ss, { show: !1 }), ds = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", fs = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ps = 1.5, ms = {
	show: !0,
	scale: "x",
	stroke: ui,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: fs,
	side: 2,
	grid: cs,
	ticks: ls,
	border: us,
	font: ds,
	lineGap: ps,
	rotate: 0
}, hs = "Value", gs = "Time", _s = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: Sa,
	max: -Infinity,
	idxs: []
};
function vs(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : sa(e));
}
function ys(e, t, n, r, i, a, o) {
	let s = [], c = Ra.get(i) || 0;
	n = o ? n : La(Fa(n, i), c);
	for (let e = n; e <= r; e = La(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function bs(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = ga(c, da((c == 10 ? va : ya)(n))), c == 10 && (i = Eo[Wi(i, Eo)]);
	let l = n, u = i * c;
	c == 10 && (u = Eo[Wi(u, Eo)]);
	do
		s.push(l), l += i, c == 10 && !Ra.has(l) && (l = La(l, Ra.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = Eo[Wi(u, Eo)]));
	while (l <= r);
	return s;
}
function xs(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? bs(e, t, ha(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? bs(e, t, ha(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Ss = /./, Cs = /[12357]/, ws = /[125]/, Ts = /1/, Es = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Ds(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Ss : c(7, o) - u >= l ? Cs : c(5, o) - u >= l ? ws : Ts;
	if (d == Ts) {
		let e = ua(c(1, o) - u);
		if (e < l) return Es(t.slice().reverse(), s.distr, d, pa(l / e)).reverse();
	}
	return Es(t, s.distr, d, 1);
}
function Os(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = ua(c(1, o) - c(2, o));
	return l < s ? Es(t.slice().reverse(), 3, Ss, pa(s / l)).reverse() : t;
}
function ks(e, t, n, r) {
	return r == null ? Si : t == null ? "" : sa(t);
}
var As = {
	show: !0,
	scale: "y",
	stroke: ui,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: fs,
	side: 3,
	grid: cs,
	ticks: ls,
	border: us,
	font: ds,
	lineGap: ps,
	rotate: 0
};
function js(e, t) {
	return La((3 + (e || 1) * 2) * t, 3);
}
function Ms(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = ua(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * X);
	return r[1] - r[0] <= o;
}
var Ns = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: Sa,
	max: -Infinity
}, Ps = (e, t, n, r, i) => i, Fs = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Ps,
	alpha: 1,
	facets: [$a({}, Ns, { scale: "x" }), $a({}, Ns, { scale: "y" })]
}, Is = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Ps,
	alpha: 1,
	points: {
		show: Ms,
		filter: null
	},
	values: null,
	min: Sa,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Ls(e, t, n, r, i) {
	return n / 10;
}
var Rs = {
	time: Lr,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, zs = $a({}, Rs, {
	time: !1,
	ori: 1
}), Bs = {};
function Vs(e, t) {
	let n = Bs[e];
	return n || (n = {
		key: e,
		plots: [],
		sub(e) {
			n.plots.push(e);
		},
		unsub(e) {
			n.plots = n.plots.filter((t) => t != e);
		},
		pub(e, t, r, i, a, o, s) {
			for (let c = 0; c < n.plots.length; c++) n.plots[c] != t && n.plots[c].pub(e, t, r, i, a, o, s);
		}
	}, e != null && (Bs[e] = n)), n;
}
var Hs = 1, Us = 2;
function Ws(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, $s, tc, rc, ac, sc) : n(i, c, l, u, d, _, g, p, f, h, m, ec, nc, ic, oc, cc);
}
function Gs(e, t) {
	let n = 0, r = 0, i = Z(e.bands, Ha);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function Ks(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function qs(e, t, n, r, i, a) {
	return Ws(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? tc : nc, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function Js(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? rc : ic, c = n;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n[1] > n[0]) {
				let e = n[0] - c;
				e > 0 && s(o, c, r, e, r + a), c = n[1];
			}
		}
		let l = n + i - c;
		l > 0 && s(o, c, r - 10 / 2, l, r + a + 10);
	}
	return o;
}
function Ys(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function Xs(e, t, n, r, i, a, o) {
	let s = [], c = e.length;
	for (let l = i == 1 ? n : r; l >= n && l <= r; l += i) if (t[l] === null) {
		let u = l, d = l;
		if (i == 1) for (; ++l <= r && t[l] === null;) d = l;
		else for (; --l >= n && t[l] === null;) d = l;
		let f = a(e[u]), p = d == u ? f : a(e[d]), m = u - i;
		f = o <= 0 && m >= 0 && m < c ? a(e[m]) : f;
		let h = d + i;
		p = o >= 0 && h >= 0 && h < c ? a(e[h]) : p, p >= f && s.push([f, p]);
	}
	return s;
}
function Zs(e) {
	return e == 0 ? Da : e == 1 ? fa : (t) => Pa(t, e);
}
function Qs(e) {
	let t = e == 0 ? $s : ec, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = ma(c, o / 2, s / 2), l = ma(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var $s = (e, t, n) => {
	e.moveTo(t, n);
}, ec = (e, t, n) => {
	e.moveTo(n, t);
}, tc = (e, t, n) => {
	e.lineTo(t, n);
}, nc = (e, t, n) => {
	e.lineTo(n, t);
}, rc = Qs(0), ic = Qs(1), ac = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, oc = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, sc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, cc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function lc(e) {
	return (e, t, n, r, i) => Ws(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = $s, v = ac) : (_ = ec, v = oc);
		let y = La(g.width * X, 3), b = (g.size - g.width) / 2 * X, x = La(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		rc(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, la * 2);
			}
		};
		if (i) i.forEach(O);
		else for (let e = n; e <= r; e++) O(e);
		return {
			stroke: y > 0 ? S : null,
			fill: S,
			clip: C,
			flags: 3
		};
	});
}
function uc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var dc = uc(tc), fc = uc(nc);
function pc(e) {
	let t = Z(e?.alignGaps, 0);
	return (e, n, r, i) => Ws(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = Ji(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = tc, b = dc) : (y = nc, b = fc);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Hs
		}, C = S.stroke, w = !1;
		if (i - r >= m * 4) {
			let t = (t) => e.posToVal(t, c.key, !0), n = null, a = null, l, u, d = _(o[x == 1 ? r : i]), f = _(o[r]), p = _(o[i]), m = t(x == 1 ? f + 1 : p - 1);
			for (let e = x == 1 ? r : i; e >= r && e <= i; e += x) {
				let r = o[e], i = (x == 1 ? r < m : r > m) ? d : _(r), c = s[e];
				i == d ? c == null ? c === null && (w = !0) : (u = c, n == null ? (y(C, i, v(u)), l = n = a = u) : u < n ? n = u : u > a && (a = u)) : (n != null && b(C, d, v(n), v(a), v(l), v(u)), c == null ? (n = a = null, c === null && (w = !0)) : (u = c, y(C, i, v(u)), n = a = l = u), d = i, m = t(d + x));
			}
			n != null && n != a && d != null && b(C, d, v(n), v(a), v(l), v(u));
		} else for (let e = x == 1 ? r : i; e >= r && e <= i; e += x) {
			let t = s[e];
			t === null ? w = !0 : t != null && y(C, _(o[e]), v(t));
		}
		let [T, E] = Gs(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...Xs(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = Js(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [qs(e, n, r, i, C, -1), qs(e, n, r, i, C, 1)] : qs(e, n, r, i, C, E)), S;
	});
}
function mc(e) {
	let t = Z(e.align, 1), n = Z(e.ascDesc, !1), r = Z(e.alignGaps, 0), i = Z(e.extend, !1);
	return (e, a, o, s) => Ws(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = Ji(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? tc : nc, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Hs
		}, E = T.stroke, D = d.dir * (d.ori == 0 ? 1 : -1), O = C(u[D == 1 ? o : s]), ee = S(l[D == 1 ? o : s]), te = ee, k = ee;
		i && t == -1 && (k = b, w(E, k, O)), w(E, ee, O);
		for (let e = D == 1 ? o : s; e >= o && e <= s; e += D) {
			let n = u[e];
			if (n == null) continue;
			let r = S(l[e]), i = C(n);
			t == 1 ? w(E, r, O) : w(E, te, i), w(E, r, i), O = i, te = r;
		}
		let ne = te;
		i && t == 1 && (ne = b + x, w(E, ne, O));
		let [re, ie] = Gs(e, a);
		if (c.fill != null || re != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, re));
			w(t, ne, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...Xs(l, u, o, s, D, S, r));
			let f = c.width * X / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = Js(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [qs(e, a, o, s, E, -1), qs(e, a, o, s, E, 1)] : qs(e, a, o, s, E, ie)), T;
	});
}
function hc(e, t, n, r, i, a, o = Sa) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = ua(e[c] - e[s]);
				t < l && (l = t, o = ua(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function gc(e) {
	e ||= Va;
	let t = Z(e.size, [
		.6,
		Sa,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = Q(i), o = 1 - t[0], s = Z(t[1], Sa), c = Z(t[2], 1), l = Z(e.disp, Va), u = Z(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => Ws(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * X, O = s * X, ee = c * X, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? rc : ic, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = Z(e.bands, Ha).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), ce = T(b(se, v, w, S)), A, le, ue, j = C, de = T(m.width * X), fe = !1, pe = null, me = null, he = null, ge = null;
		d != null && (de == 0 || f != null) && (fe = !0, pe = d.values(e, t, i, p), me = /* @__PURE__ */ new Map(), new Set(pe).forEach((e) => {
			e != null && me.set(e, new Path2D());
		}), de > 0 && (he = f.values(e, t, i, p), ge = /* @__PURE__ */ new Map(), new Set(he).forEach((e) => {
			e != null && ge.set(e, new Path2D());
		})));
		let { x0: _e, size: ve } = l;
		if (_e != null && ve != null) {
			E = 1, h = _e.values(e, t, i, p), _e.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = ve.values(e, t, i, p);
			le = ve.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), j = hc(h, g, y, _, C, x, j), ue = j - le + D;
		} else j = hc(h, g, y, _, C, x, j), ue = j * o + D, le = j - ue;
		ue < 1 && (ue = 0), de >= le / 2 && (de = 0), ue < 5 && (T = Da);
		let ye = ue > 0, be = j - ue - (ye ? de : 0);
		le = T(wa(be, ee, O)), A = (E == 0 ? le / 2 : E == ne ? 0 : le) - E * ne * ((E == 0 ? D / 2 : 0) + (ye ? de / 2 : 0));
		let xe = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, M = fe ? null : new Path2D(), Se = null;
		if (ae != null) Se = e.data[ae.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), Se = n.values(e, t, i, p));
		}
		let N = te * le, Ce = k * le;
		for (let n = ne == 1 ? i : p; n >= i && n <= p; n += ne) {
			let r = g[n];
			if (r == null) continue;
			if (Se != null) {
				let e = Se[n] ?? 0;
				if (r - e == 0) continue;
				ce = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(Z(r, se), v, w, S), o = T(i - A), s = T(ha(a, ce)), c = T(ma(a, ce)), u = s - c;
			if (r != null) {
				let i = r < 0 ? Ce : N, a = r < 0 ? N : Ce;
				fe ? (de > 0 && he[n] != null && re(ge.get(he[n]), o, c + da(de / 2), le, ha(0, u - de), i, a), pe[n] != null && re(me.get(pe[n]), o, c + da(de / 2), le, ha(0, u - de), i, a)) : re(M, o, c + da(de / 2), le, ha(0, u - de), i, a), ie(e, t, n, o - de / 2, c, le + de, u);
			}
		}
		return de > 0 ? xe.stroke = fe ? ge : M : fe || (xe._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, xe.width = 0), xe.fill = fe ? me : M, xe;
	});
}
function _c(e, t) {
	let n = Z(t?.alignGaps, 0);
	return (t, r, i, a) => Ws(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = Ji(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = $s, S = tc, x = sc) : (b = ec, S = nc, x = cc);
		let C = l.dir * (l.ori == 0 ? 1 : -1), w = v(s[C == 1 ? i : a]), T = w, E = [], D = [];
		for (let e = C == 1 ? i : a; e >= i && e <= a; e += C) if (c[e] != null) {
			let t = s[e], n = v(t);
			E.push(T = n), D.push(y(c[e]));
		}
		let O = {
			stroke: e(E, D, b, S, x, _),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Hs
		}, ee = O.stroke, [te, k] = Gs(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...Xs(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = Js(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [qs(t, r, i, a, ee, -1), qs(t, r, i, a, ee, 1)] : qs(t, r, i, a, ee, k)), O;
	});
}
function vc(e) {
	return _c(yc, e);
}
function yc(e, t, n, r, i, a) {
	let o = e.length;
	if (o < 2) return null;
	let s = new Path2D();
	if (n(s, e[0], t[0]), o == 2) r(s, e[1], t[1]);
	else {
		let n = Array(o), r = Array(o - 1), a = Array(o - 1), c = Array(o - 1);
		for (let n = 0; n < o - 1; n++) a[n] = t[n + 1] - t[n], c[n] = e[n + 1] - e[n], r[n] = a[n] / c[n];
		n[0] = r[0];
		for (let e = 1; e < o - 1; e++) r[e] === 0 || r[e - 1] === 0 || r[e - 1] > 0 != r[e] > 0 ? n[e] = 0 : (n[e] = 3 * (c[e - 1] + c[e]) / ((2 * c[e] + c[e - 1]) / r[e - 1] + (c[e] + 2 * c[e - 1]) / r[e]), isFinite(n[e]) || (n[e] = 0));
		n[o - 1] = r[o - 2];
		for (let r = 0; r < o - 1; r++) i(s, e[r] + c[r] / 3, t[r] + n[r] * c[r] / 3, e[r + 1] - c[r] / 3, t[r + 1] - n[r + 1] * c[r] / 3, e[r + 1], t[r + 1]);
	}
	return s;
}
var bc = /* @__PURE__ */ new Set();
function xc() {
	for (let e of bc) e.syncRect(!0);
}
Ci && (Hi(vi, Ti, xc), Hi(yi, Ti, xc, !0), Hi(xi, Ti, () => {
	Lc.pxRatio = X;
}));
var Sc = pc(), Cc = lc();
function wc(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Ec(e, r, t, n));
}
function Tc(e, t) {
	return e.map((e, n) => n == 0 ? {} : $a({}, t, e));
}
function Ec(e, t, n, r) {
	return $a({}, t == 0 ? n : r, e);
}
function Dc(e, t, n) {
	return t == null ? Ua : [t, n];
}
var Oc = Dc;
function kc(e, t, n) {
	return t == null ? Ua : ra(t, n, $i, !0);
}
function Ac(e, t, n, r) {
	return t == null ? Ua : Zi(t, n, e.scales[r].log, !1);
}
var jc = Ac;
function Mc(e, t, n, r) {
	return t == null ? Ua : Qi(t, n, e.scales[r].log, !1);
}
var Nc = Mc;
function Pc(e, t, n, r, i) {
	let a = ha(Ca(e), Ca(t)), o = t - e, s = Wi(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Ra.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function Fc(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = fa((n = +r) * X)) + "px"), [
		e,
		t,
		n
	];
}
function Ic(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = La(e[2] * X, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Lc(e, t, n) {
	let r = { mode: Z(e.mode, 1) }, i = r.mode;
	function a(e, t, n, r) {
		let i = t.valToPct(e);
		return r + n * (t.dir == -1 ? 1 - i : i);
	}
	function o(e, t, n, r) {
		let i = t.valToPct(e);
		return r + n * (t.dir == -1 ? i : 1 - i);
	}
	function s(e, t, n, r) {
		return t.ori == 0 ? a(e, t, n, r) : o(e, t, n, r);
	}
	r.valToPosH = a, r.valToPosV = o;
	let c = !1;
	r.status = 0;
	let l = r.root = Ni(Rr);
	if (e.id != null && (l.id = e.id), ki(l, e.class), e.title) {
		let t = Ni(Vr, l);
		t.textContent = e.title;
	}
	let u = Mi("canvas"), d = r.ctx = u.getContext("2d"), f = Ni(Hr, l);
	Hi("click", f, (e) => {
		e.target === m && (an != en || W != tn) && sn.click(r, e);
	}, !0);
	let p = r.under = Ni(Ur, f);
	f.appendChild(u);
	let m = r.over = Ni(Wr, f);
	e = Qa(e);
	let h = +Z(e.pxAlign, 1), g = Zs(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? wc(e.series || [], _s, Is, !1) : Tc(e.series || [null], Fs), y = r.axes = wc(e.axes || [], ms, As, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = Q(e.fill || null), e.dir = Z(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: Bt,
		series: At
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => va(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => xa(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || Va)[t] || Va;
			if (r.from != null) {
				E(r.from);
				let e = $a({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = $a({}, t == S ? Rs : zs, r), n.key = t;
				let e = n.time, a = n.range, o = Wa(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? ea : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? ea : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && Ja(a))) {
					let e = a;
					a = (t, n, r) => n == null ? Ua : ra(n, r, e);
				}
				n.range = Q(a || (e ? Oc : t == S ? n.distr == 3 ? jc : n.distr == 4 ? Nc : Dc : n.distr == 3 ? Ac : n.distr == 4 ? Mc : kc)), n.auto = Q(!o && n.auto), n.clamp = Q(n.clamp || Ls), n._min = n._max = null, n.valToPct = T(n);
			}
		}
	}
	E("x"), E("y"), i == 1 && v.forEach((e) => {
		E(e.scale);
	}), y.forEach((e) => {
		E(e.scale);
	});
	for (let t in e.scales) E(t);
	let D = b[S], O = D.distr, ee, te;
	D.ori == 0 ? (ki(l, zr), ee = a, te = o) : (ki(l, Br), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let ne = e.tzDate || ((e) => new Date(fa(e / _))), re = e.fmtDate || vo, ie = _ == 1 ? Ro(ne) : Vo(ne), ae = Uo(ne, Ho(_ == 1 ? Lo : Bo, re)), oe = Jo(ne, Ko(qo, re)), se = [], ce = r.legend = $a({}, Zo, e.legend), A = r.cursor = $a({}, os, { drag: { y: i == 2 } }, e.cursor), le = ce.show, ue = A.show, j = ce.markers;
	ce.idxs = se, j.width = Q(j.width), j.dash = Q(j.dash), j.stroke = Q(j.stroke), j.fill = Q(j.fill);
	let de, fe, pe, me = [], he = [], ge, _e = !1, ve = {};
	if (ce.live) {
		let e = v[1] ? v[1].values : null;
		_e = e != null, ge = _e ? e(r, 1, 0) : { _: 0 };
		for (let e in ge) ve[e] = Si;
	}
	if (le) if (de = Mi("table", Zr, l), pe = Mi("tbody", null, de), ce.mount(r, de), _e) {
		fe = Mi("thead", null, de, pe);
		let e = Mi("tr", null, fe);
		for (var ye in Mi("th", null, e), ge) Mi("th", ni, e).textContent = ye;
	} else ki(de, $r), ce.live && ki(de, Qr);
	let be = { show: !0 }, xe = { show: !1 };
	function M(e, t) {
		if (t == 0 && (_e || !ce.live || i == 2)) return Ua;
		let n = [], a = Mi("tr", ei, pe, pe.childNodes[t]);
		ki(a, e.class), e.show || ki(a, Kr);
		let o = Mi("th", null, a);
		if (j.show) {
			let e = Ni(ti, o);
			if (t > 0) {
				let n = j.width(r, t);
				n && (e.style.border = n + "px " + j.dash(r, t) + " " + j.stroke(r, t)), e.style.background = j.fill(r, t);
			}
		}
		let s = Ni(ni, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (j.show || (s.style.color = e.width > 0 ? j.stroke(r, t) : j.fill(r, t)), N("click", o, (t) => {
			if (A._lock) return;
			Ge(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != ce.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && mn(r, e ? r == n ? be : xe : be, !0, Yn.setSeries);
				});
			} else mn(n, { show: !e.show }, !0, Yn.setSeries);
		}, !1), Je && N(hi, o, (t) => {
			A._lock || (Ge(t), mn(v.indexOf(e), Sn, !0, Yn.setSeries));
		}, !1)), ge) {
			let e = Mi("td", ri, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let Se = /* @__PURE__ */ new Map();
	function N(e, t, n, i = !0) {
		let a = Se.get(t) || {}, o = A.bind[e](r, t, n, i);
		o && (Hi(e, t, a[e] = o), Se.set(t, a));
	}
	function Ce(e, t, n) {
		let r = Se.get(t) || {};
		for (let n in r) (e == null || n == e) && (Ui(n, t, r[n]), delete r[n]);
		e ?? Se.delete(t);
	}
	let we = 0, P = 0, F = 0, I = 0, Te = 0, Ee = 0, De = Te, Oe = Ee, L = F, ke = I, Ae = 0, je = 0, Me = 0, Ne = 0;
	r.bbox = {};
	let Pe = !1, Fe = !1, Ie = !1, Le = !1, Re = !1, ze = !1;
	function R(e, t, n) {
		(n || e != r.width || t != r.height) && Be(e, t), Vt(!1), Ie = !0, Fe = !0, U();
	}
	function Be(e, t) {
		r.width = we = F = e, r.height = P = I = t, Te = Ee = 0, Ue(), We();
		let n = r.bbox;
		Ae = n.left = Pa(Te * X, .5), je = n.top = Pa(Ee * X, .5), Me = n.width = Pa(F * X, .5), Ne = n.height = Pa(I * X, .5);
	}
	function Ve() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = Rt(t), i = zt(t);
			e = t == 3 || n && i, e || (Be(r.width, r.height), Fe = !0);
		}
	}
	function He({ width: e, height: t }) {
		R(e, t);
	}
	r.setSize = He;
	function Ue() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (F -= c, a == 3 ? (Te += c, r = !0) : n = !0) : (I -= c, a == 0 ? (Ee += c, e = !0) : t = !0));
			}
		}), rt[0] = e, rt[1] = n, rt[2] = t, rt[3] = r, F -= st[1] + st[3], Te += st[3], I -= st[2] + st[0], Ee += st[0];
	}
	function We() {
		let e = Te + F, t = Ee + I, n = Te, r = Ee;
		function i(i, a) {
			switch (i) {
				case 1: return e += a, e - a;
				case 2: return t += a, t - a;
				case 3: return n -= a, n + a;
				case 0: return r -= a, r + a;
			}
		}
		y.forEach((e, t) => {
			if (e.show && e._show) {
				let t = e.side;
				e._pos = i(t, e._size), e.label != null && (e._lpos = i(t, e.labelSize));
			}
		});
	}
	if (A.dataIdx == null) {
		let e = A.hover, n = e.skip = new Set(e.skip ?? []);
		n.add(void 0);
		let r = e.prox = Q(e.prox), i = e.bias ??= 0;
		A.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? Sa, u = l >= 0 && l < Sa, d = D.ori == 0 ? F : I, f = A.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && ua(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let Ge = (e) => {
		A.event = e;
	};
	A.idxs = se, A._lock = !1;
	let Ke = A.points;
	Ke.show = Q(Ke.show), Ke.size = Q(Ke.size), Ke.stroke = Q(Ke.stroke), Ke.width = Q(Ke.width), Ke.fill = Q(Ke.fill);
	let qe = r.focus = $a({}, e.focus || { alpha: .3 }, A.focus), Je = qe.prox >= 0, Ye = Je && Ke.one, Xe = [], Ze = [], Qe = [];
	function $e(e, t) {
		let n = Ke.show(r, t);
		if (n instanceof HTMLElement) return ki(n, Xr), ki(n, e.class), Fi(n, -10, -10, F, I), m.insertBefore(n, Xe[t]), n;
	}
	function et(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? qa(n) ? Jo(ne, Ko(n, re)) : n || oe : n || ks, e.label = e.label || (t ? gs : hs);
		}
		if (Ye || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Sc || ka, e.fillTo = Q(e.fillTo || Ks), e.pxAlign = +Z(e.pxAlign, h), e.pxRound = Zs(e.pxAlign), e.stroke = Q(e.stroke || null), e.fill = Q(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = js(ha(1, e.width), 1), n = e.points = $a({}, {
				size: t,
				width: ha(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: Cc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = Q(n.show), n.filter = Q(n.filter), n.fill = Q(n.fill), n.stroke = Q(n.stroke), n.paths = Q(n.paths), n.pxAlign = e.pxAlign;
		}
		if (le) {
			let n = M(e, t);
			me.splice(t, 0, n[0]), he.splice(t, 0, n[1]), ce.values.push(null);
		}
		if (ue) {
			se.splice(t, 0, null);
			let n = null;
			Ye ? t == 0 && (n = $e(e, t)) : t > 0 && (n = $e(e, t)), Xe.splice(t, 0, n), Ze.splice(t, 0, 0), Qe.splice(t, 0, 0);
		}
		Jn("addSeries", t);
	}
	function tt(e, t) {
		t ??= v.length, e = i == 1 ? Ec(e, t, _s, Is) : Ec(e, t, {}, Fs), v.splice(t, 0, e), et(v[t], t);
	}
	r.addSeries = tt;
	function nt(e) {
		if (v.splice(e, 1), le) {
			ce.values.splice(e, 1), he.splice(e, 1);
			let t = me.splice(e, 1)[0];
			Ce(null, t.firstChild), t.remove();
		}
		ue && (se.splice(e, 1), Xe.splice(e, 1)[0].remove(), Ze.splice(e, 1), Qe.splice(e, 1)), Jn("delSeries", e);
	}
	r.delSeries = nt;
	let rt = [
		!1,
		!1,
		!1,
		!1
	];
	function it(e, t) {
		if (e._show = e.show, e.show) {
			let n = e.side % 2, i = b[e.scale];
			i ??= (e.scale = n ? v[1].scale : S, b[e.scale]);
			let a = i.time;
			e.size = Q(e.size), e.space = Q(e.space), e.rotate = Q(e.rotate), Wa(e.incrs) && e.incrs.forEach((e) => {
				!Ra.has(e) && Ra.set(e, za(e));
			}), e.incrs = Q(e.incrs || (i.distr == 2 ? To : a ? _ == 1 ? Io : zo : Eo)), e.splits = Q(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? bs : i.distr == 4 ? xs : ys)), e.stroke = Q(e.stroke), e.grid.stroke = Q(e.grid.stroke), e.ticks.stroke = Q(e.ticks.stroke), e.border.stroke = Q(e.border.stroke);
			let o = e.values;
			e.values = Wa(o) && !Wa(o[0]) ? Q(o) : a ? Wa(o) ? Uo(ne, Ho(o, re)) : qa(o) ? Wo(ne, o) : o || ae : o || vs, e.filter = Q(e.filter || (i.distr >= 3 && i.log == 10 ? Ds : i.distr == 3 && i.log == 2 ? Os : Oa)), e.font = Fc(e.font), e.labelFont = Fc(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (rt[t] = !0, e._el = Ni(Gr, f));
		}
	}
	function at(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? fa(ms.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? fa(As.size / 2) : 0), l;
	}
	let ot = r.padding = (e.padding || [
		at,
		at,
		at,
		at
	]).map((e) => Q(Z(e, at))), st = r._padding = ot.map((e, t) => e(r, t, rt, 0)), z, ct = null, B = null, lt = i == 1 ? v[0].idxs : null, ut = null, dt = !1;
	function ft(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			z = 0;
			for (let e = 1; e < v.length; e++) z += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), ut = t[0], z = ut.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(z);
				for (let e = 0; e < z; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (Vt(!0), Jn("setData"), O == 2 && (Ie = !0), n !== !1) {
			let e = D;
			e.auto(r, dt) ? pt() : pn(S, e.min, e.max), Le ||= A.left >= 0, ze = !0, U();
		}
	}
	r.setData = ft;
	function pt() {
		dt = !0;
		let e, n;
		i == 1 && (z > 0 ? (ct = lt[0] = 0, B = lt[1] = z - 1, e = t[0][ct], n = t[0][B], O == 2 ? (e = ct, n = B) : e == n && (O == 3 ? [e, n] = Zi(e, e, D.log, !1) : O == 4 ? [e, n] = Qi(e, e, D.log, !1) : D.time ? n = e + fa(86400 / _) : [e, n] = ra(e, n, $i, !0))) : (ct = lt[0] = e = null, B = lt[1] = n = null)), pn(S, e, n);
	}
	let mt, ht, gt, _t, vt, yt, bt, xt, St, Ct;
	function wt(e, t, n, r, i, a) {
		e ??= di, n ??= Ha, r ??= "butt", i ??= di, a ??= "round", e != mt && (d.strokeStyle = mt = e), i != ht && (d.fillStyle = ht = i), t != gt && (d.lineWidth = gt = t), a != vt && (d.lineJoin = vt = a), r != yt && (d.lineCap = yt = r), n != _t && d.setLineDash(_t = n);
	}
	function Tt(e, t, n, r) {
		t != ht && (d.fillStyle = ht = t), e != bt && (d.font = bt = e), n != xt && (d.textAlign = xt = n), r != St && (d.textBaseline = St = r);
	}
	function Et(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, dt) && (t == null || t.min == null)) {
			let t = Z(ct, 0), r = Z(B, i.length - 1), o = n.min == null ? Xi(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = ma(e.min, n.min = o[0]), e.max = ha(e.max, n.max = o[1]);
		}
	}
	let Dt = {
		min: null,
		max: null
	};
	function Ot() {
		for (let e in b) {
			let t = b[e];
			k[e] == null && (t.min == null || k[S] != null && t.auto(r, dt)) && (k[e] = Dt);
		}
		for (let e in b) {
			let t = b[e];
			k[e] == null && t.from != null && k[t.from] != null && (k[e] = Dt);
		}
		k[S] != null && Vt(!0);
		let e = {};
		for (let t in k) {
			let n = k[t];
			if (n != null) {
				let a = e[t] = Qa(b[t], Ya);
				if (n.min != null) $a(a, n);
				else if (t != S || i == 2) if (z == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = Sa, a.max = -Infinity;
			}
		}
		if (z > 0) {
			v.forEach((n, a) => {
				if (i == 1) {
					let i = n.scale, o = k[i];
					if (o == null) return;
					let s = e[i];
					if (a == 0) {
						let e = s.range(r, s.min, s.max, i);
						s.min = e[0], s.max = e[1], ct = Wi(s.min, t[0]), B = Wi(s.max, t[0]), B - ct > 1 && (t[0][ct] < s.min && ct++, t[0][B] > s.max && B--), n.min = ut[ct], n.max = ut[B];
					} else n.show && n.auto && Et(s, o, n, t[a], n.sorted);
					n.idxs[0] = ct, n.idxs[1] = B;
				} else if (a > 0 && n.show && n.auto) {
					let [r, i] = n.facets, o = r.scale, s = i.scale, [c, l] = t[a], u = e[o], d = e[s];
					u != null && Et(u, k[o], r, c, r.sorted), d != null && Et(d, k[s], i, l, i.sorted), n.min = i.min, n.max = i.max;
				}
			});
			for (let t in e) {
				let n = e[t], i = k[t];
				if (n.from == null && (i == null || i.min == null)) {
					let e = n.range(r, n.min == Sa ? null : n.min, n.max == -Infinity ? null : n.max, t);
					n.min = e[0], n.max = e[1];
				}
			}
		}
		for (let t in e) {
			let n = e[t];
			if (n.from != null) {
				let i = e[n.from];
				if (i.min == null) n.min = n.max = null;
				else {
					let e = n.range(r, i.min, i.max, t);
					n.min = e[0], n.max = e[1];
				}
			}
		}
		let n = {}, a = !1;
		for (let t in e) {
			let r = e[t], i = b[t];
			if (i.min != r.min || i.max != r.max) {
				i.min = r.min, i.max = r.max;
				let e = i.distr;
				i._min = e == 3 ? va(i.min) : e == 4 ? xa(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? va(i.max) : e == 4 ? xa(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Ie = !0, Jn("setScale", e);
			ue && A.left >= 0 && (Le = ze = !0);
		}
		for (let e in k) k[e] = null;
	}
	function kt(e) {
		let t = wa(ct - 1, 0, z - 1), n = wa(B + 1, 0, z - 1);
		for (; e[t] == null && t > 0;) t--;
		for (; e[n] == null && n < z - 1;) n++;
		return [t, n];
	}
	function At() {
		if (z > 0) {
			let e = v.some((e) => e._focus) && Ct != qe.alpha;
			e && (d.globalAlpha = Ct = qe.alpha), v.forEach((e, n) => {
				if (n > 0 && e.show && (jt(n, !1), jt(n, !0), e._paths == null)) {
					let a = Ct;
					Ct != e.alpha && (d.globalAlpha = Ct = e.alpha);
					let o = i == 2 ? [0, t[n][0].length - 1] : kt(t[n]);
					e._paths = e.paths(r, n, o[0], o[1]), Ct != a && (d.globalAlpha = Ct = a);
				}
			}), v.forEach((e, t) => {
				if (t > 0 && e.show) {
					let n = Ct;
					Ct != e.alpha && (d.globalAlpha = Ct = e.alpha), e._paths != null && V(t, !1);
					{
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, ct, B, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, ct, B, a), V(t, !0));
					}
					Ct != n && (d.globalAlpha = Ct = n), Jn("drawSeries", t);
				}
			}), e && (d.globalAlpha = Ct = 1);
		}
	}
	function jt(e, t) {
		let n = t ? v[e].points : v[e];
		n._stroke = n.stroke(r, e), n._fill = n.fill(r, e);
	}
	function V(e, t) {
		let n = t ? v[e].points : v[e], { stroke: r, fill: i, clip: a, flags: o, _stroke: s = n._stroke, _fill: c = n._fill, _width: l = n.width } = n._paths;
		l = La(l * X, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = Ae - l / 2, t = je - l / 2, n = Me + l, r = Ne + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? Nt(s, l, n.dash, n.cap, c, r, i, o, a) : Mt(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function Mt(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || Va).band;
				Wa(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && ia(g, ct, B) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, Nt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || Nt(n, i, a, o, s, c, l, u, d, f);
	}
	function Nt(e, t, n, r, i, a, o, s, c, l, u, f) {
		wt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), Ft(i, o), Pt(e, a, t)) : s & Us ? (Ft(i, o), d.clip(f), Pt(e, a, t)) : s & Hs && (d.save(), d.clip(f), u && d.clip(u), Ft(i, o), d.restore(), Pt(e, a, t)) : (Ft(i, o), Pt(e, a, t)), (c || l || f) && d.restore();
	}
	function Pt(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = mt = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function Ft(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = ht = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function It(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Pc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function Lt(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), wt(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function Rt(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, Vt(!1));
				return;
			} else n._show || (t = !1, n._show = !0, Vt(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = It(i, c, l, s == 0 ? F : I);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => ut[e]) : p, h = a.distr == 2 ? ut[p[1]] - ut[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = pa(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function zt(e) {
		let t = !0;
		return ot.forEach((n, i) => {
			let a = n(r, i, rt, e);
			a != st[i] && (t = !1), st[i] = a;
		}), t;
	}
	function Bt() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = fa((t._lpos + s) * X);
				Tt(t.labelFont[0], c, "center", n == 2 ? oi : si), d.save(), i == 1 ? (a = o = 0, d.translate(p, fa(je + Ne / 2)), d.rotate((n == 3 ? -la : la) / 2)) : (a = fa(Ae + Me / 2), o = p);
				let m = Ta(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? Me : Ne, h = i == 0 ? Ae : je, _ = t._splits, v = p.distr == 2 ? _.map((e) => ut[e]) : _, x = p.distr == 2 ? ut[_[1]] - ut[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = fa(w * X), E = fa((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * X), D = t._rotate * -la / 180, O = g(t._pos * X), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Tt(te, c, t.align == 1 ? ci : t.align == 2 ? li : D > 0 ? ci : D < 0 ? li : i == 0 ? "center" : n == 3 ? li : ci, D || i == 1 ? "middle" : n == 2 ? oi : si);
			let k = t.font[1] * t.lineGap, ne = _.map((e) => g(s(e, p, m, h))), re = t._values;
			for (let e = 0; e < re.length; e++) {
				let t = re[e];
				if (t != null) {
					i == 0 ? a = ne[e] : o = ne[e], t = "" + t;
					let n = t.indexOf("\n") == -1 ? [t] : t.split(/\n/gm);
					for (let e = 0; e < n.length; e++) {
						let t = n[e];
						D ? (d.save(), d.translate(a, o + e * k), d.rotate(D), d.fillText(t, 0, 0), d.restore()) : d.fillText(t, a, o + e * k);
					}
				}
			}
			S.show && Lt(ne, S.filter(r, v, e, f, x), i, n, O, T, La(S.width * X, 3), S.stroke(r, e), S.dash, S.cap);
			let ie = t.grid;
			ie.show && Lt(ne, ie.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? je : Ae, i == 0 ? Ne : Me, La(ie.width * X, 3), ie.stroke(r, e), ie.dash, ie.cap), C.show && Lt([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? je : Ae, i == 1 ? Ne : Me, La(C.width * X, 3), C.stroke(r, e), C.dash, C.cap);
		}
		Jn("drawAxes");
	}
	function Vt(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let Ht = !1, Ut = !1, Wt = [];
	function H() {
		Ut = !1;
		for (let e = 0; e < Wt.length; e++) Jn(...Wt[e]);
		Wt.length = 0;
	}
	function U() {
		Ht ||= (ao(Kt), !0);
	}
	function Gt(e, t = !1) {
		Ht = !0, Ut = t, e(r), Kt(), t && Wt.length > 0 && queueMicrotask(H);
	}
	r.batch = Gt;
	function Kt() {
		if (Pe &&= (Ot(), !1), Ie &&= (Ve(), !1), Fe) {
			if (ji(p, ci, Te), ji(p, oi, Ee), ji(p, ii, F), ji(p, ai, I), ji(m, ci, Te), ji(m, oi, Ee), ji(m, ii, F), ji(m, ai, I), ji(f, ii, we), ji(f, ai, P), u.width = fa(we * X), u.height = fa(P * X), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					ji(e, a ? "left" : "top", r - t), ji(e, a ? "width" : "height", n), ji(e, a ? "top" : "left", a ? Ee : Te), ji(e, a ? "height" : "width", a ? I : F), Ai(e, Kr);
				} else ki(e, Kr);
			}), mt = ht = gt = vt = yt = bt = xt = St = _t = null, Ct = 1, Nn(!0), Te != De || Ee != Oe || F != L || I != ke) {
				Vt(!1);
				let e = F / L, t = I / ke;
				if (ue && !Le && A.left >= 0) {
					A.left *= e, A.top *= t, Xt && Fi(Xt, fa(A.left), 0, F, I), Zt && Fi(Zt, 0, fa(A.top), F, I);
					for (let n = 0; n < Xe.length; n++) {
						let r = Xe[n];
						r != null && (Ze[n] *= e, Qe[n] *= t, Fi(r, pa(Ze[n]), pa(Qe[n]), F, I));
					}
				}
				if (G.show && !Re && G.left >= 0 && G.width > 0) {
					G.left *= e, G.width *= e, G.top *= t, G.height *= t;
					for (let e in In) ji(un, e, G[e]);
				}
				De = Te, Oe = Ee, L = F, ke = I;
			}
			Jn("setSize"), Fe = !1;
		}
		we > 0 && P > 0 && (d.clearRect(0, 0, u.width, u.height), Jn("drawClear"), w.forEach((e) => e()), Jn("draw")), G.show && Re && (dn(G), Re = !1), ue && Le && (jn(null, !0, !1), Le = !1), ce.show && ce.live && ze && (kn(), ze = !1), c || (c = !0, r.status = 1, Jn("ready")), dt = !1, Ht = !1;
	}
	r.redraw = (e, t) => {
		Ie = t || !1, e === !1 ? U() : pn(S, D.min, D.max);
	};
	function qt(e, n) {
		let i = b[e];
		if (i.from == null) {
			if (z == 0) {
				let t = i.range(r, n.min, n.max, e);
				n.min = t[0], n.max = t[1];
			}
			if (n.min > n.max) {
				let e = n.min;
				n.min = n.max, n.max = e;
			}
			if (z > 1 && n.min != null && n.max != null && n.max - n.min < 1e-16) return;
			e == S && i.distr == 2 && z > 0 && (n.min = Wi(n.min, t[0]), n.max = Wi(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Pe = !0, U();
		}
	}
	r.setScale = qt;
	let Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, W, on = !1, sn = A.drag, cn = sn.x, ln = sn.y;
	ue && (A.x && (Jt = Ni(Jr, m)), A.y && (Yt = Ni(Yr, m)), D.ori == 0 ? (Xt = Jt, Zt = Yt) : (Xt = Yt, Zt = Jt), an = A.left, W = A.top);
	let G = r.select = $a({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), un = G.show ? Ni(qr, G.over ? m : p) : null;
	function dn(e, t) {
		if (G.show) {
			for (let t in e) G[t] = e[t], t in In && ji(un, t, e[t]);
			t !== !1 && Jn("setSelect");
		}
	}
	r.setSelect = dn;
	function fn(e) {
		if (v[e].show) le && Ai(me[e], Kr);
		else if (le && ki(me[e], Kr), ue) {
			let t = Ye ? Xe[0] : Xe[e];
			t != null && Fi(t, -10, -10, F, I);
		}
	}
	function pn(e, t, n) {
		qt(e, {
			min: t,
			max: n
		});
	}
	function mn(e, t, n, a) {
		t.focus != null && Cn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, fn(r), i == 2 ? (pn(n.facets[0].scale, null, null), pn(n.facets[1].scale, null, null)) : pn(n.scale, null, null), U());
		}), n !== !1 && Jn("setSeries", e, t), a && Qn("setSeries", r, e, t);
	}
	r.setSeries = mn;
	function hn(e, t) {
		$a(x[e], t);
	}
	function gn(e, t) {
		e.fill = Q(e.fill || null), e.dir = Z(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function _n(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = gn, r.setBand = hn, r.delBand = _n;
	function vn(e, t) {
		v[e].alpha = t, ue && Xe[e] != null && (Xe[e].style.opacity = t), le && me[e] && (me[e].style.opacity = t);
	}
	let yn, bn, xn, Sn = { focus: !0 };
	function Cn(e) {
		if (e != xn) {
			let t = e == null, n = qe.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && vn(a, i ? 1 : qe.alpha);
				}
			}), xn = e, n && U();
		}
	}
	le && Je && N(gi, de, (e) => {
		A._lock || (Ge(e), xn != null && mn(null, Sn, !0, Yn.setSeries));
	});
	function wn(e, t, n) {
		let r = b[t];
		n && (e = e / X - (r.ori == 1 ? Ee : Te));
		let i = F;
		r.ori == 1 && (i = I, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? ga(10, c) : l == 4 ? ba(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Tn(e, n) {
		return Wi(wn(e, S, n), t[0], ct, B);
	}
	r.valToIdx = (e) => Wi(e, t[0]), r.posToIdx = Tn, r.posToVal = wn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? Me : F, n ? Ae : 0) : o(e, b[t], n ? Ne : I, n ? je : 0), r.setCursor = (e, t, n) => {
		an = e.left, W = e.top, jn(null, t, n);
	};
	function K(e, t) {
		ji(un, ci, G.left = e), ji(un, ii, G.width = t);
	}
	function En(e, t) {
		ji(un, oi, G.top = e), ji(un, ai, G.height = t);
	}
	let Dn = D.ori == 0 ? K : En, q = D.ori == 1 ? K : En;
	function On() {
		if (le && ce.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && _e) continue;
			let t = ce.values[e], n = 0;
			for (let r in t) he[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function kn(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : Ka(e.idx) || se.fill(e.idx), ce.idx = se[0]), le && ce.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !_e) && An(e, se[e]);
			On();
		}
		ze = !1, t !== !1 && Jn("setLegend");
	}
	r.setLegend = kn;
	function An(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? ut : t[e], o;
		_e ? o = i.values(r, e, n) ?? ve : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? ve : { _: o }), ce.values[e] = o;
	}
	function jn(e, n, a) {
		nn = an, rn = W, [an, W] = A.move(r, an, W), A.left = an, A.top = W, ue && (Xt && Fi(Xt, fa(an), 0, F, I), Zt && Fi(Zt, 0, fa(W), F, I));
		let o, s = ct > B;
		yn = Sa, bn = null;
		let c = D.ori == 0 ? F : I, l = D.ori == 1 ? F : I;
		if (an < 0 || z == 0 || s) {
			o = A.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Xe[e];
				t != null && Fi(t, -10, -10, F, I);
			}
			Je && mn(null, Sn, !0, e == null && Yn.setSeries), ce.live && (se.fill(o), ze = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? an : W, n = wn(e, S), o = A.idx = Wi(n, t[0], ct, B), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = A.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (ze = ze || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (Je && S != null) {
						let t = D.ori == 1 ? an : W, n = ua(qe.dist(r, e, x, _, t));
						if (n < yn) {
							let r = qe.bias;
							if (r != 0) {
								let i = wn(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (yn = n, bn = e);
							} else yn = n, bn = e;
						}
					}
					if (ze || Ye) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = Ke.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = Ke.size(r, e);
						if (v = Ke.fill(r, e), g = Ke.stroke(r, e), Ye) e == bn && yn <= qe.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = Xe[e];
							t != null && (Ze[e] = c, Qe[e] = l, zi(t, a, o, y), Li(t, v, g), Fi(t, pa(c), pa(l), F, I));
						}
					}
				}
			}
			if (Ye) {
				let e = qe.prox;
				if (ze || (xn == null ? yn <= e : yn > e || bn != xn)) {
					let e = Xe[0];
					e != null && (Ze[0] = s, Qe[0] = u, zi(e, d, f, p), Li(e, m, h), Fi(e, pa(s), pa(u), F, I));
				}
			}
		}
		if (G.show && on) if (e != null) {
			let [t, n] = Yn.scales, [r, i] = Yn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (cn = s._x, ln = s._y, cn || ln) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && cn ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), Dn(ma(v, y), ua(y - v))) : Dn(0, c), S && ln ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), q(ma(v, y), ua(y - v))) : q(0, l);
			} else Ln();
		} else {
			let e = ua(nn - Qt), t = ua(rn - $t);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			cn = sn.x && e >= sn.dist, ln = sn.y && t >= sn.dist;
			let n = sn.uni;
			n == null ? sn.x && sn.y && (cn || ln) && (cn = ln = !0) : cn && ln && (cn = e >= n, ln = t >= n, !cn && !ln && (t > e ? ln = !0 : cn = !0));
			let r, i;
			cn && (D.ori == 0 ? (r = en, i = an) : (r = tn, i = W), Dn(ma(r, i), ua(i - r)), ln || q(0, l)), ln && (D.ori == 1 ? (r = en, i = an) : (r = tn, i = W), q(ma(r, i), ua(i - r)), cn || Dn(0, c)), !cn && !ln && (Dn(0, 0), q(0, 0));
		}
		if (sn._x = cn, sn._y = ln, e == null) {
			if (a) {
				if (Xn != null) {
					let [e, t] = Yn.scales;
					Yn.values[0] = e == null ? null : wn(D.ori == 0 ? an : W, e), Yn.values[1] = t == null ? null : wn(D.ori == 1 ? an : W, t);
				}
				Qn(fi, r, an, W, F, I, o);
			}
			if (Je) {
				let e = a && Yn.setSeries, t = qe.prox;
				xn == null ? yn <= t && mn(bn, Sn, !0, e) : yn > t ? mn(null, Sn, !0, e) : bn != xn && mn(bn, Sn, !0, e);
			}
		}
		ze && (ce.idx = o, kn()), n !== !1 && Jn("setCursor");
	}
	let Mn = null;
	Object.defineProperty(r, "rect", { get() {
		return Mn ?? Nn(!1), Mn;
	} });
	function Nn(e = !1) {
		e ? Mn = null : (Mn = m.getBoundingClientRect(), Jn("syncRect", Mn));
	}
	function Pn(e, t, n, r, i, a, o) {
		A._lock || on && e != null && e.movementX == 0 && e.movementY == 0 || (Fn(e, t, n, r, i, a, o, !1, e != null), e == null ? jn(t, !0, !1) : jn(null, !0, !0));
	}
	function Fn(e, t, n, i, a, o, c, l, u) {
		if (Mn ?? Nn(!1), Ge(e), e != null) n = e.clientX - Mn.left, i = e.clientY - Mn.top;
		else {
			if (n < 0 || i < 0) {
				an = -10, W = -10;
				return;
			}
			let [e, r] = Yn.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = Yn.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? F : I, _ = D.ori == 1 ? F : I, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == fi) && ((n <= 1 || n >= F - 1) && (n = Pa(n, F)), (i <= 1 || i >= I - 1) && (i = Pa(i, I))), l ? (Qt = n, $t = i, [en, tn] = A.move(r, n, i)) : (an = n, W = i);
	}
	let In = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	function Ln() {
		dn(In, !1);
	}
	let Rn, zn, Bn, Vn;
	function Hn(e, t, n, i, a, o, s) {
		on = !0, cn = ln = sn._x = sn._y = !1, Fn(e, t, n, i, a, o, s, !0, !1), e != null && (N(mi, wi, Un, !1), Qn(pi, r, en, tn, F, I, null));
		let { left: c, top: l, width: u, height: d } = G;
		Rn = c, zn = l, Bn = u, Vn = d;
	}
	function Un(e, t, n, i, a, o, s) {
		on = sn._x = sn._y = !1, Fn(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = G, f = u > 0 || d > 0, p = Rn != c || zn != l || Bn != u || Vn != d;
		if (f && p && dn(G), sn.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), cn && pn(S, wn(e, S), wn(e + t, S)), ln) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != Sa && pn(e, wn(n + r, e), wn(n, e));
			}
			Ln();
		} else A.lock && (A._lock = !A._lock, jn(t, !0, e != null));
		e != null && (Ce(mi, wi), Qn(mi, r, an, W, F, I, null));
	}
	function Wn(e, t, n, r, i, a, o) {
		if (A._lock) return;
		Ge(e);
		let s = on;
		if (on) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = cn, r = ln) : (n = ln, r = cn), n && r && (e = an <= 10 || an >= F - 10, t = W <= 10 || W >= I - 10), n && e && (an = an < en ? 0 : F), r && t && (W = W < tn ? 0 : I), jn(null, !0, !0), on = !1;
		}
		an = -10, W = -10, se.fill(null), jn(null, !0, !0), s && (on = s);
	}
	function Gn(e, t, n, i, a, o, s) {
		A._lock || (Ge(e), pt(), Ln(), e != null && Qn(_i, r, an, W, F, I, null));
	}
	function Kn() {
		y.forEach(Ic), R(r.width, r.height, !0);
	}
	Hi(xi, Ti, Kn);
	let J = {};
	J.mousedown = Hn, J.mousemove = Pn, J.mouseup = Un, J.dblclick = Gn, J.setSeries = (e, t, n, i) => {
		let a = Yn.match[2];
		n = a(r, t, n), n != -1 && mn(n, i, !0, !1);
	}, ue && (N(pi, m, Hn), N(fi, m, Pn), N(hi, m, (e) => {
		Ge(e), Nn(!1);
	}), N(gi, m, Wn), N(_i, m, Gn), bc.add(r), r.syncRect = Nn);
	let qn = r.hooks = e.hooks || {};
	function Jn(e, t, n) {
		Ut ? Wt.push([
			e,
			t,
			n
		]) : e in qn && qn[e].forEach((e) => {
			e.call(null, r, t, n);
		});
	}
	(e.plugins || []).forEach((e) => {
		for (let t in e.hooks) qn[t] = (qn[t] || []).concat(e.hooks[t]);
	});
	let Y = (e, t, n) => n, Yn = $a({
		key: null,
		setSeries: !1,
		filters: {
			pub: Aa,
			sub: Aa
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			ja,
			ja,
			Y
		],
		values: [null, null]
	}, A.sync);
	Yn.match.length == 2 && Yn.match.push(Y), A.sync = Yn;
	let Xn = Yn.key, Zn = Vs(Xn);
	function Qn(e, t, n, r, i, a, o) {
		Yn.filters.pub(e, t, n, r, i, a, o) && Zn.pub(e, t, n, r, i, a, o);
	}
	Zn.sub(r);
	function $n(e, t, n, r, i, a, o) {
		Yn.filters.sub(e, t, n, r, i, a, o) && J[e](null, t, n, r, i, a, o);
	}
	r.pub = $n;
	function er() {
		Zn.unsub(r), bc.delete(r), Se.clear(), Ui(xi, Ti, Kn), l.remove(), de?.remove(), Jn("destroy");
	}
	r.destroy = er;
	function tr() {
		Jn("init", e, t), ft(t || e.data, !1), k[S] ? qt(S, k[S]) : pt(), Re = G.show && (G.width > 0 || G.height > 0), Le = ze = !0, R(e.width, e.height);
	}
	return v.forEach(et), y.forEach(it), n ? n instanceof HTMLElement ? (n.appendChild(l), tr()) : n(r, tr) : tr(), r;
}
Lc.assign = $a, Lc.fmtNum = sa, Lc.rangeNum = ra, Lc.rangeLog = Zi, Lc.rangeAsinh = Qi, Lc.orient = Ws, Lc.pxRatio = X, Lc.join = io, Lc.fmtDate = vo, Lc.tzDate = bo, Lc.sync = Vs;
{
	Lc.addGap = Ys, Lc.clipGaps = Js;
	let e = Lc.paths = { points: lc };
	e.linear = pc, e.stepped = mc, e.bars = gc, e.spline = vc;
}
//#endregion
//#region src/App.svelte
var Rc = /* @__PURE__ */ cr("<div class=\"error\"> </div>"), zc = /* @__PURE__ */ cr("<article><strong> </strong><small> </small><em> </em></article>"), Bc = /* @__PURE__ */ cr("<div class=\"attention-list\"></div>"), Vc = /* @__PURE__ */ cr("<p class=\"clear\">No active signals in this window.</p>"), Hc = /* @__PURE__ */ cr("<div><strong> </strong><span> </span><small> </small></div>"), Uc = /* @__PURE__ */ cr("<div class=\"health-list\"></div>"), Wc = /* @__PURE__ */ cr("<p class=\"clear\">No optimizer snapshots in this window yet.</p>"), Gc = /* @__PURE__ */ cr("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), Kc = /* @__PURE__ */ cr("<p class=\"clear\"> </p>"), qc = /* @__PURE__ */ cr("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">LeanRelay · token efficiency</p> <h2>What needs your attention</h2></div> <div class=\"heading-actions\"><button class=\"details-button\" type=\"button\">Open details</button> <span> </span></div></div> <!> <div class=\"attention\"><div class=\"attention-heading\"><h3>Needs attention</h3><span> </span></div> <!></div> <div class=\"metrics\" aria-label=\"Token efficiency summary\"><article><span>Tokens processed</span><strong> </strong><small> </small></article> <article class=\"token-card\"><span>Verified tokens saved</span><strong> </strong><small>Explicit pre/post optimizer measurements only</small></article> <article><span>Savings coverage</span><strong> </strong><small> </small></article> <article><span>Gateway health</span><strong> </strong><small> </small></article></div> <div class=\"charts\"><article class=\"chart\"><div class=\"chart-heading\"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class=\"status\"> </span></div><div class=\"plot\"></div></article> <article class=\"chart\"><div class=\"chart-heading\"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class=\"status\">explicit</span></div><div class=\"plot\"></div></article></div> <div class=\"optimizer-grid\"><article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Optimizer health</h3><span class=\"status\"> </span></div> <!></article> <article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Measurement confidence</h3><span> </span></div> <!></article></div></section>");
function Jc(e, t) {
	Ae(t, !1);
	let n = /* @__PURE__ */ jt(), r = /* @__PURE__ */ jt(), i = /* @__PURE__ */ jt(), a = /* @__PURE__ */ jt(), o = /* @__PURE__ */ jt(), s = /* @__PURE__ */ jt(), c = /* @__PURE__ */ jt(), l = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), u = /* @__PURE__ */ jt("1h"), d = /* @__PURE__ */ jt({}), f = /* @__PURE__ */ jt({ alerts: [] }), p = [], m = /* @__PURE__ */ jt([]), h = /* @__PURE__ */ jt({}), g = [], _ = /* @__PURE__ */ jt(!0), v = /* @__PURE__ */ jt(""), y = /* @__PURE__ */ jt(), b = /* @__PURE__ */ jt(), x, S, C, w = (e) => new Intl.NumberFormat().format(Number(e || 0)), T = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, E = (e, t) => Number(t || 0) ? `${(Number(e || 0) / Number(t) * 100).toFixed(0)}%` : "not measured", D = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m";
	async function O(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function ee() {
		let e = document.querySelector("#window-select")?.value || localStorage.getItem("apx.dashboard.window") || "1h";
		return l.has(e) ? e : "1h";
	}
	function te(e, t) {
		return {
			width: Math.max(280, e.clientWidth || 0),
			height: 180,
			cursor: { drag: {
				x: !0,
				y: !1
			} },
			scales: { x: { time: !0 } },
			series: [{}, ...t],
			axes: [{
				stroke: "#8f98aa",
				grid: {
					stroke: "#2c3340",
					width: 1
				}
			}, {
				stroke: "#8f98aa",
				grid: {
					stroke: "#2c3340",
					width: 1
				}
			}]
		};
	}
	function k() {
		let e = p.map((e) => Number(e.ts || 0)), t = p.map((e) => Number(e.tokens_in || 0)), n = p.map((e) => Number(e.tokens_out || 0)), r = g.map((e) => Number(e.ts || 0)), i = g.map((e) => Number(e.measured_tokens_saved || 0)), a = g.map((e) => Number(e.estimated_tokens_saved || 0));
		!J(y) || !J(b) || (x?.destroy(), S?.destroy(), x = new Lc(te(J(y), [{
			label: "input tokens",
			stroke: "#7aa2ff",
			width: 2
		}, {
			label: "output tokens",
			stroke: "#76e4b7",
			width: 2
		}]), [
			e,
			t,
			n
		], J(y)), S = new Lc(te(J(b), [{
			label: "verified saved",
			stroke: "#76e4b7",
			width: 2
		}, {
			label: "estimated saved",
			stroke: "#ffc56d",
			width: 2,
			dash: [6, 4]
		}]), [
			r,
			i,
			a
		], J(b)));
	}
	async function ne() {
		V(_, !0), V(v, ""), V(u, ee());
		try {
			let [e, t, n, r, i, a] = await Promise.all([
				O(`/api/metrics/summary?window=${J(u)}`),
				O(`/api/metrics/attention?window=${J(u)}`),
				O(`/api/metrics/timeseries?window=${J(u)}&bucket=${D(J(u))}`),
				O(`/api/metrics/efficiency?window=${J(u)}`),
				O(`/api/metrics/efficiency/timeseries?window=${J(u)}&bucket=${D(J(u))}`),
				O(`/api/metrics/optimizer-snapshots?window=${J(u)}`)
			]);
			V(d, e), V(f, t), p = n.series || [], V(h, r), g = i.series || [], V(m, a.snapshots || []), await Kn(), k();
		} catch (e) {
			V(v, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			V(_, !1);
		}
	}
	vr(() => {
		document.body.classList.add("svelte-overview-active"), ne();
		let e = document.querySelector("#window-select"), t = () => ne();
		e?.addEventListener("change", t);
		let n = window.setInterval(ne, 1e4);
		return C = new ResizeObserver(() => k()), document.querySelector("#legacy-dashboard")?.removeAttribute("open"), J(y) && C.observe(J(y)), J(b) && C.observe(J(b)), () => {
			document.body.classList.remove("svelte-overview-active"), e?.removeEventListener("change", t), window.clearInterval(n), C?.disconnect(), x?.destroy(), S?.destroy();
		};
	});
	let re = /* @__PURE__ */ jt([]);
	function ie() {
		let e = document.querySelector("#legacy-dashboard");
		e && (e.open = !0, e.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}));
	}
	W(() => J(m), () => {
		V(re, Object.values(J(m).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), W(() => J(h), () => {
		V(n, J(h).optimizers || []);
	}), W(() => J(h), () => {
		V(r, J(h).observed || {});
	}), W(() => (J(r), J(d)), () => {
		V(i, Number(J(r).tokens_in || J(d).totals?.tokens_in || 0) + Number(J(r).tokens_out || J(d).totals?.tokens_out || 0));
	}), W(() => J(n), () => {
		V(a, J(n).reduce((e, t) => e + Number(t.measured_tokens_saved || 0), 0));
	}), W(() => J(n), () => {
		V(o, J(n).reduce((e, t) => e + Number(t.measured_attempts || 0), 0));
	}), W(() => J(n), () => {
		V(s, J(n).reduce((e, t) => e + Number(t.attempts || 0), 0));
	}), W(() => J(d), () => {
		V(c, Number(J(d).totals?.err_5xx || 0) + Number(J(d).totals?.warn_4xx || 0));
	}), on(), Fr();
	var ae = qc(), oe = H(ae), se = U(H(oe), 2), ce = H(se), A = U(ce, 2);
	let le;
	var ue = H(A, !0);
	P(A), P(se), P(oe);
	var j = U(oe, 2), de = (e) => {
		var t = Rc(), n = H(t);
		P(t), ln(() => fr(n, `${J(v) ?? ""}. The legacy dashboard remains available below.`)), lr(e, t);
	};
	br(j, (e) => {
		J(v) && e(de);
	});
	var fe = U(j, 2), pe = H(fe), me = U(H(pe));
	let he;
	var ge = H(me);
	P(me), P(pe);
	var _e = U(pe, 2), ve = (e) => {
		var t = Bc();
		wr(t, 5, () => (J(f), Y(() => J(f).alerts.slice(0, 3))), (e) => e.id, (e, t) => {
			var n = zc();
			let r;
			var i = H(n), a = H(i, !0);
			P(i);
			var o = U(i), s = H(o, !0);
			P(o);
			var c = U(o), l = H(c);
			P(c), P(n), ln(() => {
				r = Mr(n, 1, "signal", null, r, {
					critical: J(t).severity === "critical",
					warning: J(t).severity === "warning"
				}), fr(a, (J(t), Y(() => J(t).title))), fr(s, (J(t), Y(() => J(t).detail))), fr(l, `Next: ${(J(t), Y(() => J(t).action)) ?? ""}`);
			}), lr(e, n);
		}), P(t), lr(e, t);
	}, ye = (e) => {
		lr(e, Vc());
	};
	br(_e, (e) => {
		J(f), Y(() => J(f).alerts?.length) ? e(ve) : e(ye, -1);
	}), P(fe);
	var be = U(fe, 2), xe = H(be), M = U(H(xe)), Se = H(M, !0);
	P(M);
	var N = U(M), Ce = H(N);
	P(N), P(xe);
	var we = U(xe, 2), I = U(H(we)), Te = H(I, !0);
	P(I), F(), P(we);
	var Ee = U(we, 2), De = U(H(Ee)), Oe = H(De, !0);
	P(De);
	var L = U(De), ke = H(L);
	P(L), P(Ee);
	var Me = U(Ee, 2), Ne = U(H(Me));
	let Pe;
	var Fe = H(Ne, !0);
	P(Ne);
	var Ie = U(Ne), Le = H(Ie);
	P(Ie), P(Me), P(be);
	var Re = U(be, 2), ze = H(Re), R = H(ze), Be = U(H(R)), Ve = H(Be, !0);
	P(Be), P(R), Pr(U(R), (e) => V(y, e), () => J(y)), P(ze);
	var He = U(ze, 2);
	Pr(U(H(He)), (e) => V(b, e), () => J(b)), P(He), P(Re);
	var Ue = U(Re, 2), We = H(Ue), Ge = H(We), Ke = U(H(Ge)), qe = H(Ke);
	P(Ke), P(Ge);
	var Je = U(Ge, 2), Ye = (e) => {
		var t = Uc();
		wr(t, 5, () => J(re), (e) => e.optimizer, (e, t) => {
			var n = Hc();
			let r;
			var i = H(n), a = H(i, !0);
			P(i);
			var o = U(i), s = H(o, !0);
			P(o);
			var c = U(o), l = H(c);
			P(c), P(n), ln((e) => {
				r = Mr(n, 1, "health-row", null, r, {
					up: J(t).reachable,
					down: !J(t).reachable
				}), fr(a, (J(t), Y(() => J(t).optimizer))), fr(s, (J(t), Y(() => J(t).reachable ? "reachable" : "unreachable"))), fr(l, `last checked ${e ?? ""}`);
			}, [() => (J(t), Y(() => (/* @__PURE__ */ new Date(Number(J(t).ts || 0) * 1e3)).toLocaleString()))]), lr(e, n);
		}), P(t), lr(e, t);
	}, Xe = (e) => {
		lr(e, Wc());
	};
	br(Je, (e) => {
		J(re), Y(() => J(re).length) ? e(Ye) : e(Xe, -1);
	}), P(We);
	var Ze = U(We, 2), Qe = H(Ze), $e = U(H(Qe));
	let et;
	var tt = H($e, !0);
	P($e), P(Qe);
	var nt = U(Qe, 2), rt = (e) => {
		var t = Uc();
		wr(t, 5, () => J(n), (e) => e.optimizer, (e, t) => {
			var n = Gc(), r = H(n), i = H(r, !0);
			P(r);
			var a = U(r), o = H(a);
			P(a);
			var s = U(a), c = H(s);
			P(s), P(n), ln((e, n, r, a) => {
				fr(i, (J(t), Y(() => J(t).optimizer))), fr(o, `${e ?? ""}/${n ?? ""} verified`), fr(c, `${r ?? ""} estimated · ${a ?? ""} unavailable`);
			}, [
				() => (J(t), Y(() => w(J(t).measured_attempts))),
				() => (J(t), Y(() => w(J(t).attempts))),
				() => (J(t), Y(() => w(J(t).estimated_attempts))),
				() => (J(t), Y(() => w(J(t).unavailable_attempts)))
			]), lr(e, n);
		}), P(t), lr(e, t);
	}, it = (e) => {
		var t = Kc(), n = H(t);
		P(t), ln(() => fr(n, `No optimizer attempts in this window yet. ${(J(h), Y(() => J(h).note || "Savings will appear only when adapters emit measurements.")) ?? ""}`)), lr(e, t);
	};
	br(nt, (e) => {
		J(n), Y(() => J(n).length) ? e(rt) : e(it, -1);
	}), P(Ze), P(Ue), P(ae), ln((e, t, n, r, i, a, o, s, l, d, p) => {
		le = Mr(A, 1, "status", null, le, {
			ok: !J(_) && !J(v),
			warn: J(_),
			fail: !!J(v)
		}), fr(ue, J(v) ? "refresh failed" : J(_) ? "refreshing" : `last ${J(u)}`), he = Mr(me, 1, "status", null, he, e), fr(ge, `${(J(f), Y(() => J(f).alerts?.length || 0)) ?? ""} signals`), fr(Se, t), fr(Ce, `${n ?? ""} input · ${r ?? ""} output`), fr(Te, i), fr(Oe, a), fr(ke, `${o ?? ""} of ${s ?? ""} optimizer attempts verified`), Pe = Mr(Ne, 1, "", null, Pe, { healthy: J(c) === 0 }), fr(Fe, l), fr(Le, `${d ?? ""} requests · p95 ${p ?? ""}`), fr(Ve, J(u)), fr(qe, `${(J(re), Y(() => J(re).length)) ?? ""} tracked`), et = Mr($e, 1, "status", null, et, {
			ok: J(h).durable,
			warn: !J(h).durable
		}), fr(tt, (J(h), Y(() => J(h).durable ? "durable" : "not persistent")));
	}, [
		() => ({
			ok: !J(f).alerts?.length,
			warn: J(f).alerts?.some((e) => e.severity === "warning"),
			fail: J(f).alerts?.some((e) => e.severity === "critical")
		}),
		() => (J(i), Y(() => w(J(i)))),
		() => (J(r), Y(() => w(J(r).tokens_in))),
		() => (J(r), Y(() => w(J(r).tokens_out))),
		() => (J(a), Y(() => w(J(a)))),
		() => (J(o), J(s), Y(() => E(J(o), J(s)))),
		() => (J(o), Y(() => w(J(o)))),
		() => (J(s), Y(() => w(J(s)))),
		() => (J(c), Y(() => J(c) ? `${w(J(c))} issue${J(c) === 1 ? "" : "s"}` : "Healthy")),
		() => (J(d), Y(() => w(J(d).totals?.requests))),
		() => (J(d), Y(() => T(J(d).latency_ms?.p95)))
	]), tr("click", ce, ie), lr(e, ae), je();
}
//#endregion
//#region src/main.js
var Yc = "svelte-uplot", Xc = document.querySelector("#svelte-overview");
Xc && pr(Jc, { target: Xc });
//#endregion
export { Jc as App, Yc as dashboardBuild };
