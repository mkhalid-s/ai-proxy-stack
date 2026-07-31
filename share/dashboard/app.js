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
var n = {}, r = Symbol("uninitialized"), i = "http://www.w3.org/1999/xhtml", a = Array.isArray, o = Array.prototype.indexOf, s = Array.prototype.includes, c = Array.from, l = Object.defineProperty, u = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyDescriptors, f = Object.prototype, p = Array.prototype, m = Object.getPrototypeOf, h = Object.isExtensible, g = () => {};
function _(e) {
	return e();
}
function v(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function y() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var b = 1024, x = 2048, S = 4096, C = 8192, w = 16384, T = 32768, E = 1 << 25, D = 65536, O = 1 << 19, ee = 1 << 20, te = 1 << 25, k = 65536, ne = 1 << 21, re = 1 << 22, ie = 1 << 23, ae = Symbol("$state"), oe = Symbol(""), se = Symbol("attributes"), A = Symbol("class"), j = Symbol("style"), M = Symbol("text"), N = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), P = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function F(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function I() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ce(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function le(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ue() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function de(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function fe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function me() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function he() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ge() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function _e() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ve(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ye() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var L = !1;
function be(e) {
	L = e;
}
var R;
function z(e) {
	if (e === null) throw ve(), n;
	return R = e;
}
function B() {
	return z(/* @__PURE__ */ Gt(R));
}
function V(e) {
	if (L) {
		if (/* @__PURE__ */ Gt(R) !== null) throw ve(), n;
		R = e;
	}
}
function xe(e = 1) {
	if (L) {
		for (var t = e, n = R; t--;) n = /* @__PURE__ */ Gt(n);
		R = n;
	}
}
function Se(e = !0) {
	for (var t = 0, n = R;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Gt(n);
		e && n.remove(), n = i;
	}
}
function Ce(e) {
	if (!e || e.nodeType !== 8) throw ve(), n;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function we(e) {
	return e === this.v;
}
function Te(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ee(e) {
	return !Te(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var De = null;
function Oe(e) {
	De = e;
}
function ke(t, n = !1, r) {
	De = {
		p: De,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: Y,
		l: e && !n ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Ae(e) {
	var t = De, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) rn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, De = t.p, e ?? {};
}
function je() {
	return !e || De !== null && De.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Me = [];
function Ne() {
	var e = Me;
	Me = [], v(e);
}
function Pe(e) {
	if (Me.length === 0 && !ft) {
		var t = Me;
		queueMicrotask(() => {
			t === Me && Ne();
		});
	}
	Me.push(e);
}
function Fe() {
	for (; Me.length > 0;) Ne();
}
function Ie(e) {
	var t = Y;
	if (t === null) return J.f |= ie, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Le(e, t);
}
function Le(e, t) {
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
var Re = ~(x | S | b);
function ze(e, t) {
	e.f = e.f & Re | t;
}
function Be(e) {
	e.f & 512 || e.deps === null ? ze(e, b) : ze(e, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ve(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= k, Ve(t.deps));
}
function He(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ve(e.deps), ze(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ue(e) {
	var t = J, n = Y;
	An(null), jn(null);
	try {
		return e();
	} finally {
		An(t), jn(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function We(e) {
	let t = 0, n = jt(0), r;
	return () => {
		en() && (X(n), un(() => (t === 0 && (r = Z(() => e(() => Ft(n)))), t += 1, () => {
			Pe(() => {
				--t, t === 0 && (r?.(), r = void 0, Ft(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ge = D | O;
function Ke(e, t, n, r) {
	new qe(e, t, n, r);
}
var qe = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = L ? R : null;
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
	#h = We(() => (this.#m = jt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = Y;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = Y.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = fn(() => {
			if (L) {
				let e = this.#t;
				B();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ge), L && (this.#e = R);
	}
	#g() {
		try {
			this.#a = pn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Pe(r), t && (this.#s = pn(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				ye();
				return;
			}
			t = !0, n && ge(), this.#s !== null && bn(this.#s, () => {
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
					Le(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = pn(() => e(this.#e)), Pe(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ut();
			e.append(t), this.#a = this.#S(() => pn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, bn(this.#o, () => {
				this.#o = null;
			}), this.#x(H));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = pn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				wn(this.#a, e);
				let t = this.#n.pending;
				this.#o = pn(() => t(this.#e));
			} else this.#x(H);
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
		var t = Y, n = J, r = De;
		jn(this.#i), An(this.#i), Oe(this.#i.ctx);
		try {
			return vt.ensure(), e();
		} catch (e) {
			return Ie(e), null;
		} finally {
			jn(t), An(n), Oe(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && bn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Pe(() => {
			this.#d = !1, this.#m && Nt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), X(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		H?.is_fork ? (this.#a && H.skip_effect(this.#a), this.#o && H.skip_effect(this.#o), this.#s && H.skip_effect(this.#s), H.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (_n(this.#a), null), this.#o &&= (_n(this.#o), null), this.#s &&= (_n(this.#s), null), L && (z(this.#t), xe(), z(Se()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return pn(() => {
						var r = Y;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Le(e, this.#i.parent), null;
				}
			}));
		};
		Pe(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Le(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Le(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Je(e, t, n, r) {
	let i = je() ? Qe : nt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = Y, c = Ye(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Le(e, s);
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
		Promise.all(n.map((e) => /* @__PURE__ */ et(e))).then(u).catch((e) => Le(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Xe();
	}) : f();
}
function Ye() {
	var e = Y, t = J, n = De, r = H;
	return function(i = !0) {
		jn(e), An(t), Oe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xe(e = !0) {
	jn(null), An(null), Oe(null), e && H?.deactivate();
}
function Ze() {
	var e = Y, t = e.b, n = H, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Qe(e) {
	var t = 2 | x;
	return Y !== null && (Y.f |= O), {
		ctx: De,
		deps: null,
		effects: null,
		equals: we,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: r,
		wv: 0,
		parent: Y,
		ac: null
	};
}
var $e = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function et(e, t, n) {
	let i = Y;
	i === null && I();
	var a = void 0, o = jt(r), s = !J, c = /* @__PURE__ */ new Set();
	return ln(() => {
		var t = Y, n = y();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== N && n.reject(e);
			}).finally(Xe);
		} catch (e) {
			n.reject(e), Xe();
		}
		var r = H;
		if (s) {
			if (t.f & 32768) var l = Ze();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject($e);
			else for (let e of c.values()) e.reject($e);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== $e && (r.activate(), t ? (o.f |= ie, Nt(o, t)) : (o.f & 8388608 && (o.f ^= ie), Nt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), tn(() => {
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
	return Nn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function nt(e) {
	let t = /* @__PURE__ */ Qe(e);
	return t.equals = Ee, t;
}
function rt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) _n(t[n]);
	}
}
function it(e) {
	var t, n = Y, i = e.parent;
	if (!Dn && i !== null && e.v !== r && i.f & 24576) return _e(), e.v;
	jn(i);
	try {
		e.f &= ~k, rt(e), t = Gn(e);
	} finally {
		jn(n);
	}
	return t;
}
function at(e) {
	var t = it(e);
	if (!e.equals(t) && (e.wv = Hn(), (!H?.is_fork || e.deps === null) && (H === null ? e.v = t : (H.capture(e, t, !0), lt?.capture(e, t, !0)), e.deps === null))) {
		ze(e, b);
		return;
	}
	Dn || (ut === null ? Be(e) : (en() || H?.is_fork) && ut.set(e, t));
}
function ot(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ue(() => {
		t.ac.abort(N), t.ac = null;
	}), t.fn !== null && (t.teardown = g), qn(t, 0), hn(t));
}
function st(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Jn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var ct = null, H = null, lt = null, ut = null, dt = null, ft = !1, pt = !1, mt = null, ht = null, gt = 0, _t = 1, vt = class e {
	id = _t++;
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
		ct === null ? ct = this : (ct.#n = this, this.#t = ct), ct = this;
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
			for (var r of n.d) ze(r, x), t(r);
			for (r of n.m) ze(r, S), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, gt++ > 1e3 && (this.#x(), bt());
		for (let e of this.#u) this.#d.delete(e), ze(e, x), this.schedule(e);
		for (let e of this.#d) ze(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = mt = [], r = [], i = ht = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Dt(e), this.#h() || this.discard(), t;
		}
		if (H = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (mt = null, ht = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Et(e, t);
			i.length > 0 && H.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), lt = this, St(r), St(n), lt = null, this.#s?.resolve();
		var s = H;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= b;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= b : i & 4 ? t.push(r) : Un(r) && (i & 16 && this.#d.add(r), Jn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), ze(i, x), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), H = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) He(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== r && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), ut?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		H = this;
	}
	deactivate() {
		H = null, ut = null;
	}
	flush() {
		try {
			pt = !0, H = this, this.#g();
		} finally {
			gt = 0, dt = null, mt = null, ht = null, pt = !1, H = null, ut = null, kt.clear();
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
		this.#m || (this.#m = !0, Pe(() => {
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
		return (this.#s ??= y()).promise;
	}
	static ensure() {
		if (H === null) {
			let t = H = new e();
			!pt && !ft && Pe(() => {
				t.#e || t.flush();
			});
		}
		return H;
	}
	apply() {
		ut = null;
	}
	schedule(e) {
		if (dt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (mt !== null && t === Y && (J === null || !(J.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= b;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? ct = e : t.#t = e, this.linked = !1;
		}
	}
};
function yt(e) {
	var t = ft;
	ft = !0;
	try {
		var n;
		for (e && (H !== null && !H.is_fork && H.flush(), n = e());;) {
			if (Fe(), H === null) return n;
			H.flush();
		}
	} finally {
		ft = t;
	}
}
function bt() {
	try {
		fe();
	} catch (e) {
		Le(e, dt);
	}
}
var xt = null;
function St(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Un(r) && (xt = /* @__PURE__ */ new Set(), Jn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yn(r), xt?.size > 0)) {
				kt.clear();
				for (let e of xt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) xt.has(n) && (xt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Jn(n);
					}
				}
				xt.clear();
			}
		}
		xt = null;
	}
}
function Ct(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Ct(i, t, n, r) : e & 4194320 && !(e & 2048) && wt(i, t, r) && (ze(i, x), Tt(i));
	}
}
function wt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (s.call(t, r)) return !0;
		if (r.f & 2 && wt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Tt(e) {
	H.schedule(e);
}
function Et(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), ze(e, b);
		for (var n = e.first; n !== null;) Et(n, t), n = n.next;
	}
}
function Dt(e) {
	ze(e, b);
	for (var t = e.first; t !== null;) Dt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ot = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Map(), At = !1;
function jt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: we,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Mt(e, t) {
	let n = jt(e, t);
	return Nn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function U(t, n = !1, r = !0) {
	let i = jt(t);
	return n || (i.equals = Ee), e && r && De !== null && De.l !== null && (De.l.s ??= []).push(i), i;
}
function W(e, t, n = !1) {
	return J !== null && (!kn || J.f & 131072) && je() && J.f & 4325394 && (Mn === null || !Mn.has(e)) && he(), Nt(e, n ? Lt(t) : t, ht);
}
function Nt(e, t, n = null) {
	if (!e.equals(t)) {
		kt.set(e, Dn ? t : e.v);
		var r = vt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && it(t), ut === null && Be(t);
		}
		e.wv = Hn(), It(e, x, n), je() && Y !== null && Y.f & 1024 && !(Y.f & 96) && (In === null ? Ln([e]) : In.push(e)), !r.is_fork && Ot.size > 0 && !At && Pt();
	}
	return t;
}
function Pt() {
	At = !1;
	for (let e of Ot) {
		e.f & 1024 && ze(e, S);
		let t;
		try {
			t = Un(e);
		} catch {
			t = !0;
		}
		t && Jn(e);
	}
	Ot.clear();
}
function Ft(e) {
	W(e, e.v + 1);
}
function It(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = je(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === Y)) {
			var l = (c & x) === 0;
			if (l && ze(s, t), c & 131072) Ot.add(s);
			else if (c & 2) {
				var u = s;
				ut?.delete(u), c & 65536 || (c & 512 && (Y === null || !(Y.f & 2097152)) && (s.f |= k), It(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && xt !== null && xt.add(d), n === null ? Tt(d) : n.push(d);
			}
		}
	}
}
function Lt(e) {
	if (typeof e != "object" || !e || ae in e) return e;
	let t = m(e);
	if (t !== f && t !== p) return e;
	var n = /* @__PURE__ */ new Map(), i = a(e), o = /* @__PURE__ */ Mt(0), s = null, c = Bn, l = (e) => {
		if (Bn === c) return e();
		var t = J, n = Bn;
		An(null), Vn(c);
		var r = e();
		return An(t), Vn(n), r;
	};
	return i && n.set("length", /* @__PURE__ */ Mt(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && pe();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ Mt(r.value, s);
				return n.set(t, e), e;
			}) : W(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ Mt(r, s));
					n.set(t, e), Ft(o);
				}
			} else W(i, r), Ft(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ae) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || u(t, i)?.writable) && (o = l(() => /* @__PURE__ */ Mt(Lt(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
				var d = X(o);
				return d === r ? void 0 : d;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = n.get(t);
				a && (i.value = X(a));
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
			if (t === ae) return !0;
			var i = n.get(t), a = i !== void 0 && i.v !== r || Reflect.has(e, t);
			return (i !== void 0 || Y !== null && (!a || u(e, t)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ Mt(a ? Lt(e[t]) : r, s)), n.set(t, i)), X(i) === r) ? !1 : a;
		},
		set(e, t, a, c) {
			var d = n.get(t), f = t in e;
			if (i && t === "length") for (var p = a; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ Mt(r, s)), n.set(p + "", m)) : W(m, r);
			}
			if (d === void 0) (!f || u(e, t)?.writable) && (d = l(() => /* @__PURE__ */ Mt(void 0, s)), W(d, Lt(a)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = l(() => Lt(a));
				W(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, a), !f) {
				if (i && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && W(_, v + 1);
				}
				Ft(o);
			}
			return !0;
		},
		ownKeys(e) {
			X(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== r;
			});
			for (var [i, a] of n) a.v !== r && !(i in e) && t.push(i);
			return t;
		},
		setPrototypeOf() {
			me();
		}
	});
}
var Rt, zt, Bt, Vt;
function Ht() {
	if (Rt === void 0) {
		Rt = window, zt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Bt = u(t, "firstChild").get, Vt = u(t, "nextSibling").get, h(e) && (e[A] = void 0, e[se] = null, e[j] = void 0, e.__e = void 0), h(n) && (n[M] = void 0);
	}
}
function Ut(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Wt(e) {
	return Bt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Gt(e) {
	return Vt.call(e);
}
function G(e, t) {
	if (!L) return /* @__PURE__ */ Wt(e);
	var n = /* @__PURE__ */ Wt(R);
	if (n === null) n = R.appendChild(Ut());
	else if (t && n.nodeType !== 3) {
		var r = Ut();
		return n?.before(r), z(r), r;
	}
	return t && Xt(n), z(n), n;
}
function Kt(e, t = !1) {
	if (!L) {
		var n = /* @__PURE__ */ Wt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
	}
	if (t) {
		if (R?.nodeType !== 3) {
			var r = Ut();
			return R?.before(r), z(r), r;
		}
		Xt(R);
	}
	return R;
}
function K(e, t = 1, n = !1) {
	let r = L ? R : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Gt(r);
	if (!L) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ut();
			return r === null ? i?.after(a) : r.before(a), z(a), a;
		}
		Xt(r);
	}
	return z(r), r;
}
function qt(e) {
	e.textContent = "";
}
function Jt() {
	return !1;
}
function Yt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Xt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Zt(e) {
	Y === null && (J === null && de(e), ue()), Dn && le(e);
}
function Qt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function $t(e, t) {
	var n = Y;
	n !== null && n.f & 8192 && (e |= C);
	var r = {
		ctx: De,
		deps: null,
		nodes: null,
		f: e | x | 512,
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
	H?.register_created_effect(r);
	var i = r;
	if (e & 4) mt === null ? vt.ensure().schedule(r) : mt.push(r);
	else if (t !== null) {
		try {
			Jn(r);
		} catch (e) {
			throw _n(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= D));
	}
	if (i !== null && (i.parent = n, n !== null && Qt(i, n), J !== null && J.f & 2 && !(e & 64))) {
		var a = J;
		(a.effects ??= []).push(i);
	}
	return r;
}
function en() {
	return J !== null && !kn;
}
function tn(e) {
	let t = $t(8, null);
	return ze(t, b), t.teardown = e, t;
}
function nn(e) {
	Zt("$effect");
	var t = Y.f;
	if (!J && t & 32 && De !== null && !De.i) {
		var n = De;
		(n.e ??= []).push(e);
	} else return rn(e);
}
function rn(e) {
	return $t(4 | ee, e);
}
function an(e) {
	return Zt("$effect.pre"), $t(8 | ee, e);
}
function on(e) {
	vt.ensure();
	let t = $t(64 | O, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? bn(t, () => {
			_n(t), n(void 0);
		}) : (_n(t), n(void 0));
	});
}
function sn(e) {
	return $t(4, e);
}
function q(e, t) {
	var n = De, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = un(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = Y;
			try {
				jn(n.parent), Z(t);
			} finally {
				jn(n);
			}
		}
	});
}
function cn() {
	var e = De;
	un(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && ze(n, S), Un(n) && Jn(n), t.ran = !1;
		}
	});
}
function ln(e) {
	return $t(re | O, e);
}
function un(e, t = 0) {
	return $t(8 | t, e);
}
function dn(e, t = [], n = [], r = []) {
	Je(r, t, n, (t) => {
		$t(8, () => {
			e(...t.map(X));
		});
	});
}
function fn(e, t = 0) {
	return $t(16 | t, e);
}
function pn(e) {
	return $t(32 | O, e);
}
function mn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Dn, n = J;
		On(!0), An(null);
		try {
			t.call(null);
		} finally {
			On(e), An(n);
		}
	}
}
function hn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ue(() => {
			e.abort(N);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : _n(n, t), n = r;
	}
}
function gn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || _n(t), t = n;
	}
}
function _n(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (vn(e.nodes.start, e.nodes.end), n = !0), e.f |= E, hn(e, t && !n), qn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	mn(e), e.f ^= E, e.f |= w;
	var i = e.parent;
	i !== null && i.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function vn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Gt(e);
		e.remove(), e = n;
	}
}
function yn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bn(e, t, n = !0) {
	var r = [];
	xn(e, r, !0);
	var i = () => {
		n && _n(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function xn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				xn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Sn(e) {
	Cn(e, !0);
}
function Cn(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (ze(e, x), vt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			Cn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function wn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Gt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Tn = null, En = !1, Dn = !1;
function On(e) {
	Dn = e;
}
var J = null, kn = !1;
function An(e) {
	J = e;
}
var Y = null;
function jn(e) {
	Y = e;
}
var Mn = null;
function Nn(e) {
	J !== null && (Mn ??= /* @__PURE__ */ new Set()).add(e);
}
var Pn = null, Fn = 0, In = null;
function Ln(e) {
	In = e;
}
var Rn = 1, zn = 0, Bn = zn;
function Vn(e) {
	Bn = e;
}
function Hn() {
	return ++Rn;
}
function Un(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~k), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Un(a) && at(a), a.wv > e.wv) return !0;
		}
		t & 512 && ut === null && ze(e, b);
	}
	return !1;
}
function Wn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Mn !== null && Mn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Wn(a, t, !1) : t === a && (n ? ze(a, x) : a.f & 1024 && ze(a, S), Tt(a));
	}
}
function Gn(e) {
	var t = Pn, n = Fn, r = In, i = J, a = Mn, o = De, s = kn, c = Bn, l = e.f;
	Pn = null, Fn = 0, In = null, J = l & 96 ? null : e, Mn = null, Oe(e.ctx), kn = !1, Bn = ++zn, e.ac !== null && (Ue(() => {
		e.ac.abort(N);
	}), e.ac = null);
	try {
		e.f |= ne;
		var u = e.fn, d = u();
		e.f |= T;
		var f = e.deps, p = H?.is_fork;
		if (Pn !== null) {
			var m;
			if (p || qn(e, Fn), f !== null && Fn > 0) for (f.length = Fn + Pn.length, m = 0; m < Pn.length; m++) f[Fn + m] = Pn[m];
			else e.deps = f = Pn;
			if (en() && e.f & 512) for (m = Fn; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Fn < f.length && (qn(e, Fn), f.length = Fn);
		if (je() && In !== null && !kn && f !== null && !(e.f & 6146)) for (m = 0; m < In.length; m++) Wn(In[m], e);
		if (i !== null && i !== e) {
			if (zn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = zn;
			if (t !== null) for (let e of t) e.rv = zn;
			In !== null && (r === null ? r = In : r.push(...In));
		}
		return e.f & 8388608 && (e.f ^= ie), d;
	} catch (e) {
		return Ie(e);
	} finally {
		e.f ^= ne, Pn = t, Fn = n, In = r, J = i, Mn = a, Oe(o), kn = s, Bn = c;
	}
}
function Kn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = o.call(n, e);
		if (i !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[i] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Pn === null || !s.call(Pn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~k), c.v !== r && Be(c), c.ac !== null && Ue(() => {
			c.ac.abort(N), c.ac = null, ze(c, x);
		}), ot(c), qn(c, 0);
	}
}
function qn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Kn(e, n[r]);
}
function Jn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ze(e, b);
		var n = Y, r = En;
		Y = e, En = (t & 96) == 0;
		try {
			t & 16777232 ? gn(e) : hn(e), mn(e);
			var i = Gn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Rn;
		} finally {
			En = r, Y = n;
		}
	}
}
async function Yn() {
	await Promise.resolve(), yt();
}
function X(e) {
	var t = (e.f & 2) != 0;
	if (Tn?.add(e), J !== null && !kn && !(Y !== null && Y.f & 16384) && (Mn === null || !Mn.has(e))) {
		var n = J.deps;
		if (J.f & 2097152) e.rv < zn && (e.rv = zn, Pn === null && n !== null && n[Fn] === e ? Fn++ : Pn === null ? Pn = [e] : Pn.push(e));
		else {
			J.deps ??= [], s.call(J.deps, e) || J.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [J] : s.call(r, J) || r.push(J);
		}
	}
	if (Dn && kt.has(e)) return kt.get(e);
	if (t) {
		var i = e;
		if (Dn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Zn(i)) && (a = it(i)), kt.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !kn && J !== null && (En || (J.f & 512) != 0), c = (i.f & T) === 0;
		Un(i) && (o && (i.f |= 512), at(i)), o && !c && (st(i), Xn(i));
	}
	if (ut?.has(e)) return ut.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Xn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (st(t), Xn(t));
}
function Zn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (kt.has(t) || t.f & 2 && Zn(t)) return !0;
	return !1;
}
function Z(e) {
	var t = kn;
	try {
		return kn = !0, e();
	} finally {
		kn = t;
	}
}
function Qn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ae in e) $n(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ae in n && $n(n);
		}
	}
}
function $n(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			$n(e[n], t);
		} catch {}
		let n = m(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = d(n);
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
var er = Symbol("events"), tr = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function rr(e, t, n) {
	(t[er] ??= {})[e] = n;
}
function ir(e) {
	for (var t = 0; t < e.length; t++) tr.add(e[t]);
	for (var n of nr) n(e);
}
var ar = null;
function or(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ar = e;
	var o = 0, s = ar === e && e[er];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[er] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		c <= u && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		l(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = J, f = Y;
		An(null), jn(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[er]?.[r];
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
			e[er] = t, delete e.currentTarget, An(d), jn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var sr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function cr(e) {
	return sr?.createHTML(e) ?? e;
}
function lr(e) {
	var t = Yt("template");
	return t.innerHTML = cr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ur(e, t) {
	var n = Y;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function dr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (L) return ur(R, null), R;
		i === void 0 && (i = lr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Wt(i)));
		var t = r || zt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Wt(t), s = t.lastChild;
			ur(o, s);
		} else ur(t, t);
		return t;
	};
}
function fr() {
	if (L) return ur(R, null), R;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Ut();
	return e.append(t, n), ur(t, n), e;
}
function pr(e, t) {
	if (L) {
		var n = Y;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = R), B();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var mr = ["touchstart", "touchmove"];
function hr(e) {
	return mr.includes(e);
}
function Q(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[M] ??= e.nodeValue) && (e[M] = n, e.nodeValue = `${n}`);
}
function gr(e, t) {
	return vr(e, t);
}
var _r = /* @__PURE__ */ new Map();
function vr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	Ht();
	var u = void 0, d = on(() => {
		var s = r ?? t.appendChild(Ut());
		Ke(s, { pending: () => {} }, (t) => {
			ke({});
			var r = De;
			if (o && (r.c = o), a && (i.$$events = a), L && ur(t, null), u = e(t, i) || {}, L && (Y.nodes.end = R, R === null || R.nodeType !== 8 || R.data !== "]")) throw ve(), n;
			Ae();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = hr(r);
					for (let e of [t, document]) {
						var a = _r.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), _r.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, or, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(tr)), nr.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = _r.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, or), n.delete(e), n.size === 0 && _r.delete(r)) : n.set(e, i);
			}
			nr.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return yr.set(u, d), u;
}
var yr = /* @__PURE__ */ new WeakMap(), br = class {
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
			if (n) Sn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Sn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (_n(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						wn(r, t), t.append(Ut()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else _n(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), bn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (_n(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = H, r = Jt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ut();
			i.append(a), this.#n.set(e, {
				effect: pn(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, pn(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else L && (this.anchor = R), this.#a(n);
	}
};
function xr(t) {
	De === null && F("onMount"), e && De.l !== null ? Sr(De).m.push(t) : nn(() => {
		let e = Z(t);
		if (typeof e == "function") return e;
	});
}
function Sr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Cr(e, t, n = !1) {
	var r;
	L && (r = R, B());
	var i = new br(e), a = n ? D : 0;
	function o(e, t) {
		if (L) {
			var n = Ce(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Se();
				z(a), i.anchor = a, be(!1), i.ensure(e, t), be(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	fn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function wr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		bn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Tr(e, c(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			qt(d), d.append(u), e.items.clear();
		}
		Tr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Tr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= te, wn(a, document.createDocumentFragment())) : _n(t[i], n);
	}
}
var Er;
function Dr(e, t, n, r, i, o = null) {
	var s = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = L ? z(/* @__PURE__ */ Wt(u)) : u.appendChild(Ut());
	}
	L && B();
	var d = null, f = /* @__PURE__ */ nt(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, kr(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= te, jr(d, null, s)) : Sn(d) : bn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: fn(() => {
			p = X(f);
			var e = p.length;
			let a = !1;
			L && Ce(s) === "[!" != (e === 0) && (s = Se(), z(s), be(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = H, v = Jt(), y = 0; y < e; y += 1) {
				L && R.nodeType === 8 && R.data === "]" && (s = R, a = !0, be(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Nt(S.v, b), S.i && Nt(S.i, y), v && u.unskip_effect(S.e)) : (S = Ar(l, h ? s : Er ??= Ut(), b, x, y, i, t, n), h || (S.e.f |= te), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = pn(() => o(s)) : (d = pn(() => o(Er ??= Ut())), d.f |= te)), e > c.size && ce("", "", ""), L && e > 0 && z(Se()), !h) if (m.set(u, c), v) {
				for (let [e, t] of l) c.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			a && be(!0), X(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, L && (s = R);
}
function Or(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function kr(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, l = Or(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Sn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= te, _ === l) jr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Mr(e, d, _), Mr(e, _, y), jr(_, y, n), d = _, p = [], m = [], l = Or(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) jr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Mr(e, S.prev, C.next), Mr(e, d, S), Mr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), jr(_, l, n), Mr(e, _.prev, _.next), Mr(e, _, d === null ? e.effect.first : d.next), Mr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Or(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Or(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Tr(e, c(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Or(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			wr(e, w, E);
		}
	}
	a && Pe(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ar(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? jt(n) : /* @__PURE__ */ U(n, !1, !1) : null, l = o & 2 ? jt(i) : null;
	return {
		v: c,
		i: l,
		e: pn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function jr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Gt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Mr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Nr = [..." 	\n\r\f\xA0\v﻿"];
function Pr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Nr.includes(r[o - 1])) && (s === r.length || Nr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Fr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Ir(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Lr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Ir)), i && c.push(...Object.keys(i).map(Ir));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Ir(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Fr(r)), i && (n += Fr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Rr(e, t, n, r, i, a) {
	var o = e[A];
	if (L || o !== n || o === void 0) {
		var s = Pr(n, r, a);
		(!L || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[A] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function zr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Br(e, t, n, r) {
	var i = e[j];
	if (L || i !== t) {
		var a = Lr(t, r);
		(!L || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[j] = t;
	} else r && (Array.isArray(r) ? (zr(e, n?.[0], r[0]), zr(e, n?.[1], r[1], "important")) : zr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Vr = Symbol("is custom element"), Hr = Symbol("is html"), Ur = P ? "link" : "LINK";
function Wr(e, t, n, r) {
	var i = Gr(e);
	L && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ur) || i[t] !== (i[t] = n) && (t === "loading" && (e[oe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && qr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gr(e) {
	return e[se] ??= {
		[Vr]: e.nodeName.includes("-"),
		[Hr]: e.namespaceURI === i
	};
}
var Kr = /* @__PURE__ */ new Map();
function qr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Kr.get(t);
	if (n) return n;
	Kr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = d(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = m(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Jr(e, t) {
	return e === t || e?.[ae] === t;
}
function Yr(e = {}, t, n, r) {
	var i = De.r, a = Y;
	return sn(() => {
		var o, s;
		return un(() => {
			o = s, s = r?.() || [], Z(() => {
				Jr(n(...s), e) || (t(e, ...s), o && Jr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Jr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Xr(e = !1) {
	let t = De, n = t.l.u;
	if (!n) return;
	let r = () => Qn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Qe(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => X(i);
	}
	n.b.length && an(() => {
		Zr(t, r), v(n.b);
	}), nn(() => {
		let e = Z(() => n.m.map(_));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && nn(() => {
		Zr(t, r), v(n.a);
	});
}
function Zr(e, t) {
	if (e.l.s) for (let t of e.l.s) X(t);
	t();
}
var Qr = !0, $r = "uplot", ei = "u-hz", ti = "u-vt", ni = "u-title", ri = "u-wrap", ii = "u-under", ai = "u-over", oi = "u-axis", si = "u-off", ci = "u-select", li = "u-cursor-x", ui = "u-cursor-y", di = "u-cursor-pt", fi = "u-legend", pi = "u-live", mi = "u-inline", hi = "u-series", gi = "u-marker", _i = "u-label", vi = "u-value", yi = "width", bi = "height", xi = "top", Si = "bottom", Ci = "left", wi = "right", Ti = "#000", Ei = "#0000", Di = "mousemove", Oi = "mousedown", ki = "mouseup", Ai = "mouseenter", ji = "mouseleave", Mi = "dblclick", Ni = "resize", Pi = "scroll", Fi = "change", Ii = "dppxchange", Li = "--", Ri = typeof window < "u", zi = Ri ? document : null, Bi = Ri ? window : null, Vi = Ri ? navigator : null, Hi, Ui;
function Wi() {
	let e = devicePixelRatio;
	Hi != e && (Hi = e, Ui && aa(Fi, Ui, Wi), Ui = matchMedia(`(min-resolution: ${Hi - .001}dppx) and (max-resolution: ${Hi + .001}dppx)`), ia(Fi, Ui, Wi), Bi.dispatchEvent(new CustomEvent(Ii)));
}
function Gi(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Ki(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function qi(e, t, n) {
	e.style[t] = n + "px";
}
function Ji(e, t, n, r) {
	let i = zi.createElement(e);
	return t != null && Gi(i, t), n?.insertBefore(i, r), i;
}
function Yi(e, t) {
	return Ji("div", e, t);
}
var Xi = /* @__PURE__ */ new WeakMap();
function Zi(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != Xi.get(e) && (e.style.transform = a, Xi.set(e, a), t < 0 || n < 0 || t > r || n > i ? Gi(e, si) : Ki(e, si));
}
var Qi = /* @__PURE__ */ new WeakMap();
function $i(e, t, n) {
	let r = t + n;
	r != Qi.get(e) && (Qi.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var ea = /* @__PURE__ */ new WeakMap();
function ta(e, t, n, r) {
	let i = t + "" + n;
	i != ea.get(e) && (ea.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var na = { passive: !0 }, ra = {
	...na,
	capture: !0
};
function ia(e, t, n, r) {
	t.addEventListener(e, n, r ? ra : na);
}
function aa(e, t, n, r) {
	t.removeEventListener(e, n, na);
}
Ri && Wi();
function oa(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : Oa((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function sa(e) {
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
var ca = (e) => e != null, la = (e) => e != null && e > 0, ua = sa(ca), da = sa(la);
function fa(e, t, n, r = 0, i = !1) {
	let a = i ? da : ua, o = i ? la : ca;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? za, c ?? -za];
}
function pa(e, t, n, r) {
	let i = Pa(e), a = Pa(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? Fa : Ia, s = i == 1 ? Oa : Aa, c = a == 1 ? Aa : Oa, l = s(o(Da(e))), u = c(o(Da(t))), d = Na(n, l), f = Na(n, u);
	return n == 10 && (l < 0 && (d = eo(d, -l)), u < 0 && (f = eo(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = $a(e, d), t = Qa(t, f)), [e, t];
}
function ma(e, t, n, r) {
	let i = pa(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var ha = .1, ga = {
	mode: 3,
	pad: ha
}, _a = {
	pad: 0,
	soft: null,
	mode: 0
}, va = {
	min: _a,
	max: _a
};
function ya(e, t, n, r) {
	return fo(n) ? Sa(e, t, n) : (_a.pad = n, _a.soft = r ? 0 : null, _a.mode = r ? 3 : 0, Sa(e, t, va));
}
function ba(e, t) {
	return e ?? t;
}
function xa(e, t, n) {
	for (t = ba(t, 0), n = ba(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function Sa(e, t, n) {
	let r = n.min, i = n.max, a = ba(r.pad, 0), o = ba(i.pad, 0), s = ba(r.hard, -za), c = ba(i.hard, za), l = ba(r.soft, za), u = ba(i.soft, -za), d = ba(r.mode, 0), f = ba(i.mode, 0), p = t - e, m = Fa(p), h = Ma(Da(e), Da(t)), g = Da(Fa(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != za && (a = 0), f == 2 && u != -za && (o = 0)));
	let _ = p || h || 1e3, v = Na(10, Oa(Fa(_))), y = eo($a(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : za, x = Ma(s, y < b && e >= b ? b : ja(b, y)), S = eo(Qa(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -za, w = ja(c, S > C && t <= C ? C : Ma(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var Ca = new Intl.NumberFormat(Ri ? Vi.language : "en-US"), wa = (e) => Ca.format(e), Ta = Math, Ea = Ta.PI, Da = Ta.abs, Oa = Ta.floor, ka = Ta.round, Aa = Ta.ceil, ja = Ta.min, Ma = Ta.max, Na = Ta.pow, Pa = Ta.sign, Fa = Ta.log10, Ia = Ta.log2, La = (e, t = 1) => Ta.sinh(e) * t, Ra = (e, t = 1) => Ta.asinh(e / t), za = Infinity;
function Ba(e) {
	return (Fa((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function Va(e, t, n) {
	return ja(Ma(e, t), n);
}
function Ha(e) {
	return typeof e == "function";
}
function $(e) {
	return Ha(e) ? e : () => e;
}
var Ua = () => {}, Wa = (e) => e, Ga = (e, t) => t, Ka = (e) => null, qa = (e) => !0, Ja = (e, t) => e == t, Ya = /\.\d*?(?=9{6,}|0{6,})/gm, Xa = (e) => {
	if (co(e) || to.has(e)) return e;
	let t = `${e}`, n = t.match(Ya);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Xa(e)}e${n}`;
	}
	return eo(e, r);
};
function Za(e, t) {
	return Xa(eo(Xa(e / t)) * t);
}
function Qa(e, t) {
	return Xa(Aa(Xa(e / t)) * t);
}
function $a(e, t) {
	return Xa(Oa(Xa(e / t)) * t);
}
function eo(e, t = 0) {
	if (co(e)) return e;
	let n = 10 ** t;
	return ka(e * n * (1 + 2 ** -52)) / n;
}
var to = /* @__PURE__ */ new Map();
function no(e) {
	return (("" + e).split(".")[1] || "").length;
}
function ro(e, t, n, r) {
	let i = [], a = r.map(no);
	for (let o = t; o < n; o++) {
		let t = Da(o), n = eo(Na(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : eo(c, l);
			i.push(u), to.set(u, l);
		}
	}
	return i;
}
var io = {}, ao = [], oo = [null, null], so = Array.isArray, co = Number.isInteger, lo = (e) => e === void 0;
function uo(e) {
	return typeof e == "string";
}
function fo(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function po(e) {
	return typeof e == "object" && !!e;
}
var mo = Object.getPrototypeOf(Uint8Array), ho = "__proto__";
function go(e, t = fo) {
	let n;
	if (so(e)) {
		let r = e.find((e) => e != null);
		if (so(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = go(e[r], t);
		} else n = e.slice();
	} else if (e instanceof mo) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != ho && (n[r] = go(e[r], t));
	} else n = e;
	return n;
}
function _o(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != ho && (fo(e[t]) ? _o(e[t], go(r[t])) : e[t] = go(r[t]));
	}
	return e;
}
var vo = 0, yo = 1, bo = 2;
function xo(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function So(e, t) {
	if (To(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return Eo(t[0]) || (t = wo(t)), t;
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
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : yo, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != vo && (l[n] = t, u == bo && d.push(n)) : l[n] = t;
			}
			xo(l, d, i), r.push(l);
		}
	}
	return r;
}
var Co = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function wo(e) {
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
function To(e) {
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
function Eo(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = Ma(1, Oa((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var Do = [
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
], Oo = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function ko(e) {
	return e.slice(0, 3);
}
var Ao = Oo.map(ko), jo = {
	MMMM: Do,
	MMM: Do.map(ko),
	WWWW: Oo,
	WWW: Ao
};
function Mo(e) {
	return (e < 10 ? "0" : "") + e;
}
function No(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var Po = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => Mo(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => Mo(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => Mo(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => Mo(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => Mo(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => No(e.getMilliseconds())
};
function Fo(e, t) {
	t ||= jo;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? Po[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var Io = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function Lo(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == Io ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var Ro = (e) => e % 1 == 0, zo = [
	1,
	2,
	2.5,
	5
], Bo = ro(10, -32, 0, zo), Vo = ro(10, 0, 32, zo), Ho = Vo.filter(Ro), Uo = Bo.concat(Vo), Wo = "{YYYY}", Go = "\n{YYYY}", Ko = "{M}/{D}", qo = "\n{M}/{D}", Jo = "\n{M}/{D}/{YY}", Yo = "{h}:{mm}{aa}", Xo = "\n{h}:{mm}{aa}", Zo = ":{ss}", Qo = null;
function $o(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? ro(10, 0, 3, zo).filter(Ro) : ro(10, -3, 0, zo)).concat([
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
			Wo,
			Qo,
			Qo,
			Qo,
			Qo,
			Qo,
			Qo,
			1
		],
		[
			i * 28,
			"{MMM}",
			Go,
			Qo,
			Qo,
			Qo,
			Qo,
			Qo,
			1
		],
		[
			i,
			Ko,
			Go,
			Qo,
			Qo,
			Qo,
			Qo,
			Qo,
			1
		],
		[
			r,
			"{h}{aa}",
			Jo,
			Qo,
			qo,
			Qo,
			Qo,
			Qo,
			1
		],
		[
			n,
			Yo,
			Jo,
			Qo,
			qo,
			Qo,
			Qo,
			Qo,
			1
		],
		[
			t,
			Zo,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			Qo,
			"\n{M}/{D} {h}:{mm}{aa}",
			Qo,
			Xo,
			Qo,
			1
		],
		[
			e,
			":{ss}.{fff}",
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			Qo,
			"\n{M}/{D} {h}:{mm}{aa}",
			Qo,
			Xo,
			Qo,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = eo(g * e, 3), v = ls(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = eo(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : eo(ls(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(ka(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = ls(c + r * a, l + n * a, 1), s = o - t(eo(o * e, 3));
					i = eo((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (Oa(l) - Oa(_)) + Qa(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = eo(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = Oa(eo(h + g, 6)) % 24, n = t(o).getHours() - e;
					n > 1 && (n = -1), o -= n * r, h = (h + g) % 24;
					let i = p[p.length - 1];
					eo((o - i) / d, 3) * v >= .7 && p.push(o);
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
var [es, ts, ns] = $o(1), [rs, is, as] = $o(.001);
ro(2, -53, 53, [1]);
function os(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function ss(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function cs(e, t) {
	let n = Fo(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function ls(e, t, n) {
	return new Date(e, t, n);
}
function us(e, t) {
	return t(e);
}
var ds = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function fs(e, t) {
	return (n, r, i, a) => a == null ? Li : t(e(r));
}
function ps(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function ms(e, t) {
	return e.series[t].fill(e, t);
}
var hs = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: Ua,
	markers: {
		show: !0,
		width: 2,
		stroke: ps,
		fill: ms,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function gs(e, t) {
	let n = e.cursor.points, r = Yi(), i = n.size(e, t);
	qi(r, yi, i), qi(r, bi, i);
	let a = i / -2;
	qi(r, "marginLeft", a), qi(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && qi(r, "borderWidth", o), r;
}
function _s(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function vs(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function ys(e, t) {
	return e.series[t].points.size;
}
var bs = [0, 0];
function xs(e, t, n) {
	return bs[0] = t, bs[1] = n, bs;
}
function Ss(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function Cs(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var ws = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: xs,
	points: {
		one: !1,
		show: gs,
		size: ys,
		width: 0,
		stroke: vs,
		fill: _s
	},
	bind: {
		mousedown: Ss,
		mouseup: Ss,
		click: Ss,
		dblclick: Ss,
		mousemove: Cs,
		mouseleave: Cs,
		mouseenter: Cs
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
}, Ts = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, Es = _o({}, Ts, { filter: Ga }), Ds = _o({}, Es, { size: 10 }), Os = _o({}, Ts, { show: !1 }), ks = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", As = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", js = 1.5, Ms = {
	show: !0,
	scale: "x",
	stroke: Ti,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: As,
	side: 2,
	grid: Es,
	ticks: Ds,
	border: Os,
	font: ks,
	lineGap: js,
	rotate: 0
}, Ns = "Value", Ps = "Time", Fs = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: za,
	max: -Infinity,
	idxs: []
};
function Is(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : wa(e));
}
function Ls(e, t, n, r, i, a, o) {
	let s = [], c = to.get(i) || 0;
	n = o ? n : eo(Qa(n, i), c);
	for (let e = n; e <= r; e = eo(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function Rs(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = Na(c, Oa((c == 10 ? Fa : Ia)(n))), c == 10 && (i = Uo[oa(i, Uo)]);
	let l = n, u = i * c;
	c == 10 && (u = Uo[oa(u, Uo)]);
	do
		s.push(l), l += i, c == 10 && !to.has(l) && (l = eo(l, to.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = Uo[oa(u, Uo)]));
	while (l <= r);
	return s;
}
function zs(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? Rs(e, t, Ma(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? Rs(e, t, Ma(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Bs = /./, Vs = /[12357]/, Hs = /[125]/, Us = /1/, Ws = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Gs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Bs : c(7, o) - u >= l ? Vs : c(5, o) - u >= l ? Hs : Us;
	if (d == Us) {
		let e = Da(c(1, o) - u);
		if (e < l) return Ws(t.slice().reverse(), s.distr, d, Aa(l / e)).reverse();
	}
	return Ws(t, s.distr, d, 1);
}
function Ks(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = Da(c(1, o) - c(2, o));
	return l < s ? Ws(t.slice().reverse(), 3, Bs, Aa(s / l)).reverse() : t;
}
function qs(e, t, n, r) {
	return r == null ? Li : t == null ? "" : wa(t);
}
var Js = {
	show: !0,
	scale: "y",
	stroke: Ti,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: As,
	side: 3,
	grid: Es,
	ticks: Ds,
	border: Os,
	font: ks,
	lineGap: js,
	rotate: 0
};
function Ys(e, t) {
	return eo((3 + (e || 1) * 2) * t, 3);
}
function Xs(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = Da(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * Hi);
	return r[1] - r[0] <= o;
}
var Zs = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: za,
	max: -Infinity
}, Qs = (e, t, n, r, i) => i, $s = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Qs,
	alpha: 1,
	facets: [_o({}, Zs, { scale: "x" }), _o({}, Zs, { scale: "y" })]
}, ec = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Qs,
	alpha: 1,
	points: {
		show: Xs,
		filter: null
	},
	values: null,
	min: za,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function tc(e, t, n, r, i) {
	return n / 10;
}
var nc = {
	time: Qr,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, rc = _o({}, nc, {
	time: !1,
	ori: 1
}), ic = {};
function ac(e, t) {
	let n = ic[e];
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
	}, e != null && (ic[e] = n)), n;
}
var oc = 1, sc = 2;
function cc(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, _c, yc, xc, Cc, Tc) : n(i, c, l, u, d, _, g, p, f, h, m, vc, bc, Sc, wc, Ec);
}
function lc(e, t) {
	let n = 0, r = 0, i = ba(e.bands, ao);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function uc(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function dc(e, t, n, r, i, a) {
	return cc(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? yc : bc, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function fc(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? xc : Sc, c = n;
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
function pc(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function mc(e, t, n, r, i, a, o) {
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
function hc(e) {
	return e == 0 ? Wa : e == 1 ? ka : (t) => Za(t, e);
}
function gc(e) {
	let t = e == 0 ? _c : vc, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = ja(c, o / 2, s / 2), l = ja(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var _c = (e, t, n) => {
	e.moveTo(t, n);
}, vc = (e, t, n) => {
	e.moveTo(n, t);
}, yc = (e, t, n) => {
	e.lineTo(t, n);
}, bc = (e, t, n) => {
	e.lineTo(n, t);
}, xc = gc(0), Sc = gc(1), Cc = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, wc = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, Tc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, Ec = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function Dc(e) {
	return (e, t, n, r, i) => cc(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = _c, v = Cc) : (_ = vc, v = wc);
		let y = eo(g.width * Hi, 3), b = (g.size - g.width) / 2 * Hi, x = eo(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		xc(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, Ea * 2);
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
function Oc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var kc = Oc(yc), Ac = Oc(bc);
function jc(e) {
	let t = ba(e?.alignGaps, 0);
	return (e, n, r, i) => cc(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = ua(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = yc, b = kc) : (y = bc, b = Ac);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: oc
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
		let [T, E] = lc(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...mc(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = fc(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [dc(e, n, r, i, C, -1), dc(e, n, r, i, C, 1)] : dc(e, n, r, i, C, E)), S;
	});
}
function Mc(e) {
	let t = ba(e.align, 1), n = ba(e.ascDesc, !1), r = ba(e.alignGaps, 0), i = ba(e.extend, !1);
	return (e, a, o, s) => cc(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = ua(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? yc : bc, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: oc
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
		let [re, ie] = lc(e, a);
		if (c.fill != null || re != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, re));
			w(t, ne, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...mc(l, u, o, s, D, S, r));
			let f = c.width * Hi / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = fc(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [dc(e, a, o, s, E, -1), dc(e, a, o, s, E, 1)] : dc(e, a, o, s, E, ie)), T;
	});
}
function Nc(e, t, n, r, i, a, o = za) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = Da(e[c] - e[s]);
				t < l && (l = t, o = Da(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function Pc(e) {
	e ||= io;
	let t = ba(e.size, [
		.6,
		za,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = $(i), o = 1 - t[0], s = ba(t[1], za), c = ba(t[2], 1), l = ba(e.disp, io), u = ba(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => cc(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * Hi, O = s * Hi, ee = c * Hi, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? xc : Sc, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = ba(e.bands, ao).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), A = T(b(se, v, w, S)), j, M, N, P = C, F = T(m.width * Hi), I = !1, ce = null, le = null, ue = null, de = null;
		d != null && (F == 0 || f != null) && (I = !0, ce = d.values(e, t, i, p), le = /* @__PURE__ */ new Map(), new Set(ce).forEach((e) => {
			e != null && le.set(e, new Path2D());
		}), F > 0 && (ue = f.values(e, t, i, p), de = /* @__PURE__ */ new Map(), new Set(ue).forEach((e) => {
			e != null && de.set(e, new Path2D());
		})));
		let { x0: fe, size: pe } = l;
		if (fe != null && pe != null) {
			E = 1, h = fe.values(e, t, i, p), fe.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = pe.values(e, t, i, p);
			M = pe.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), P = Nc(h, g, y, _, C, x, P), N = P - M + D;
		} else P = Nc(h, g, y, _, C, x, P), N = P * o + D, M = P - N;
		N < 1 && (N = 0), F >= M / 2 && (F = 0), N < 5 && (T = Wa);
		let me = N > 0, he = P - N - (me ? F : 0);
		M = T(Va(he, ee, O)), j = (E == 0 ? M / 2 : E == ne ? 0 : M) - E * ne * ((E == 0 ? D / 2 : 0) + (me ? F / 2 : 0));
		let ge = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, _e = I ? null : new Path2D(), ve = null;
		if (ae != null) ve = e.data[ae.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), ve = n.values(e, t, i, p));
		}
		let ye = te * M, L = k * M;
		for (let n = ne == 1 ? i : p; n >= i && n <= p; n += ne) {
			let r = g[n];
			if (r == null) continue;
			if (ve != null) {
				let e = ve[n] ?? 0;
				if (r - e == 0) continue;
				A = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(ba(r, se), v, w, S), o = T(i - j), s = T(Ma(a, A)), c = T(ja(a, A)), u = s - c;
			if (r != null) {
				let i = r < 0 ? L : ye, a = r < 0 ? ye : L;
				I ? (F > 0 && ue[n] != null && re(de.get(ue[n]), o, c + Oa(F / 2), M, Ma(0, u - F), i, a), ce[n] != null && re(le.get(ce[n]), o, c + Oa(F / 2), M, Ma(0, u - F), i, a)) : re(_e, o, c + Oa(F / 2), M, Ma(0, u - F), i, a), ie(e, t, n, o - F / 2, c, M + F, u);
			}
		}
		return F > 0 ? ge.stroke = I ? de : _e : I || (ge._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, ge.width = 0), ge.fill = I ? le : _e, ge;
	});
}
function Fc(e, t) {
	let n = ba(t?.alignGaps, 0);
	return (t, r, i, a) => cc(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = ua(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = _c, S = yc, x = Tc) : (b = vc, S = bc, x = Ec);
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
			flags: oc
		}, ee = O.stroke, [te, k] = lc(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...mc(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = fc(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [dc(t, r, i, a, ee, -1), dc(t, r, i, a, ee, 1)] : dc(t, r, i, a, ee, k)), O;
	});
}
function Ic(e) {
	return Fc(Lc, e);
}
function Lc(e, t, n, r, i, a) {
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
var Rc = /* @__PURE__ */ new Set();
function zc() {
	for (let e of Rc) e.syncRect(!0);
}
Ri && (ia(Ni, Bi, zc), ia(Pi, Bi, zc, !0), ia(Ii, Bi, () => {
	tl.pxRatio = Hi;
}));
var Bc = jc(), Vc = Dc();
function Hc(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Wc(e, r, t, n));
}
function Uc(e, t) {
	return e.map((e, n) => n == 0 ? {} : _o({}, t, e));
}
function Wc(e, t, n, r) {
	return _o({}, t == 0 ? n : r, e);
}
function Gc(e, t, n) {
	return t == null ? oo : [t, n];
}
var Kc = Gc;
function qc(e, t, n) {
	return t == null ? oo : ya(t, n, ha, !0);
}
function Jc(e, t, n, r) {
	return t == null ? oo : pa(t, n, e.scales[r].log, !1);
}
var Yc = Jc;
function Xc(e, t, n, r) {
	return t == null ? oo : ma(t, n, e.scales[r].log, !1);
}
var Zc = Xc;
function Qc(e, t, n, r, i) {
	let a = Ma(Ba(e), Ba(t)), o = t - e, s = oa(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? to.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function $c(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = ka((n = +r) * Hi)) + "px"), [
		e,
		t,
		n
	];
}
function el(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = eo(e[2] * Hi, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function tl(e, t, n) {
	let r = { mode: ba(e.mode, 1) }, i = r.mode;
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
	let l = r.root = Yi($r);
	if (e.id != null && (l.id = e.id), Gi(l, e.class), e.title) {
		let t = Yi(ni, l);
		t.textContent = e.title;
	}
	let u = Ji("canvas"), d = r.ctx = u.getContext("2d"), f = Yi(ri, l);
	ia("click", f, (e) => {
		e.target === m && (tn != Zt || nn != Qt) && an.click(r, e);
	}, !0);
	let p = r.under = Yi(ii, f);
	f.appendChild(u);
	let m = r.over = Yi(ai, f);
	e = go(e);
	let h = +ba(e.pxAlign, 1), g = hc(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Hc(e.series || [], Fs, ec, !1) : Uc(e.series || [null], $s), y = r.axes = Hc(e.axes || [], Ms, Js, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = $(e.fill || null), e.dir = ba(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: Lt,
		series: Ot
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => Fa(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => Ra(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || io)[t] || io;
			if (r.from != null) {
				E(r.from);
				let e = _o({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = _o({}, t == S ? nc : rc, r), n.key = t;
				let e = n.time, a = n.range, o = so(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? ga : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? ga : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && fo(a))) {
					let e = a;
					a = (t, n, r) => n == null ? oo : ya(n, r, e);
				}
				n.range = $(a || (e ? Kc : t == S ? n.distr == 3 ? Yc : n.distr == 4 ? Zc : Gc : n.distr == 3 ? Jc : n.distr == 4 ? Xc : qc)), n.auto = $(!o && n.auto), n.clamp = $(n.clamp || tc), n._min = n._max = null, n.valToPct = T(n);
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
	D.ori == 0 ? (Gi(l, ei), ee = a, te = o) : (Gi(l, ti), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let ne = e.tzDate || ((e) => new Date(ka(e / _))), re = e.fmtDate || Fo, ie = _ == 1 ? ns(ne) : as(ne), ae = ss(ne, os(_ == 1 ? ts : is, re)), oe = fs(ne, us(ds, re)), se = [], A = r.legend = _o({}, hs, e.legend), j = r.cursor = _o({}, ws, { drag: { y: i == 2 } }, e.cursor), M = A.show, N = j.show, P = A.markers;
	A.idxs = se, P.width = $(P.width), P.dash = $(P.dash), P.stroke = $(P.stroke), P.fill = $(P.fill);
	let F, I, ce, le = [], ue = [], de, fe = !1, pe = {};
	if (A.live) {
		let e = v[1] ? v[1].values : null;
		fe = e != null, de = fe ? e(r, 1, 0) : { _: 0 };
		for (let e in de) pe[e] = Li;
	}
	if (M) if (F = Ji("table", fi, l), ce = Ji("tbody", null, F), A.mount(r, F), fe) {
		I = Ji("thead", null, F, ce);
		let e = Ji("tr", null, I);
		for (var me in Ji("th", null, e), de) Ji("th", _i, e).textContent = me;
	} else Gi(F, mi), A.live && Gi(F, pi);
	let he = { show: !0 }, ge = { show: !1 };
	function _e(e, t) {
		if (t == 0 && (fe || !A.live || i == 2)) return oo;
		let n = [], a = Ji("tr", hi, ce, ce.childNodes[t]);
		Gi(a, e.class), e.show || Gi(a, si);
		let o = Ji("th", null, a);
		if (P.show) {
			let e = Yi(gi, o);
			if (t > 0) {
				let n = P.width(r, t);
				n && (e.style.border = n + "px " + P.dash(r, t) + " " + P.stroke(r, t)), e.style.background = P.fill(r, t);
			}
		}
		let s = Yi(_i, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (P.show || (s.style.color = e.width > 0 ? P.stroke(r, t) : P.fill(r, t)), ye("click", o, (t) => {
			if (j._lock) return;
			He(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != A.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && fn(r, e ? r == n ? he : ge : he, !0, Yn.setSeries);
				});
			} else fn(n, { show: !e.show }, !0, Yn.setSeries);
		}, !1), Ge && ye(Ai, o, (t) => {
			j._lock || (He(t), fn(v.indexOf(e), bn, !0, Yn.setSeries));
		}, !1)), de) {
			let e = Ji("td", vi, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let ve = /* @__PURE__ */ new Map();
	function ye(e, t, n, i = !0) {
		let a = ve.get(t) || {}, o = j.bind[e](r, t, n, i);
		o && (ia(e, t, a[e] = o), ve.set(t, a));
	}
	function L(e, t, n) {
		let r = ve.get(t) || {};
		for (let n in r) (e == null || n == e) && (aa(n, t, r[n]), delete r[n]);
		e ?? ve.delete(t);
	}
	let be = 0, R = 0, z = 0, B = 0, V = 0, xe = 0, Se = V, Ce = xe, we = z, Te = B, Ee = 0, De = 0, Oe = 0, ke = 0;
	r.bbox = {};
	let Ae = !1, je = !1, Me = !1, Ne = !1, Pe = !1, Fe = !1;
	function Ie(e, t, n) {
		(n || e != r.width || t != r.height) && Le(e, t), Rt(!1), Me = !0, je = !0, Ut();
	}
	function Le(e, t) {
		r.width = be = z = e, r.height = R = B = t, V = xe = 0, Be(), Ve();
		let n = r.bbox;
		Ee = n.left = Za(V * Hi, .5), De = n.top = Za(xe * Hi, .5), Oe = n.width = Za(z * Hi, .5), ke = n.height = Za(B * Hi, .5);
	}
	function Re() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = Ft(t), i = It(t);
			e = t == 3 || n && i, e || (Le(r.width, r.height), je = !0);
		}
	}
	function ze({ width: e, height: t }) {
		Ie(e, t);
	}
	r.setSize = ze;
	function Be() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (z -= c, a == 3 ? (V += c, r = !0) : n = !0) : (B -= c, a == 0 ? (xe += c, e = !0) : t = !0));
			}
		}), et[0] = e, et[1] = n, et[2] = t, et[3] = r, z -= it[1] + it[3], V += it[3], B -= it[2] + it[0], xe += it[0];
	}
	function Ve() {
		let e = V + z, t = xe + B, n = V, r = xe;
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
	if (j.dataIdx == null) {
		let e = j.hover, n = e.skip = new Set(e.skip ?? []);
		n.add(void 0);
		let r = e.prox = $(e.prox), i = e.bias ??= 0;
		j.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? za, u = l >= 0 && l < za, d = D.ori == 0 ? z : B, f = j.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && Da(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let He = (e) => {
		j.event = e;
	};
	j.idxs = se, j._lock = !1;
	let Ue = j.points;
	Ue.show = $(Ue.show), Ue.size = $(Ue.size), Ue.stroke = $(Ue.stroke), Ue.width = $(Ue.width), Ue.fill = $(Ue.fill);
	let We = r.focus = _o({}, e.focus || { alpha: .3 }, j.focus), Ge = We.prox >= 0, Ke = Ge && Ue.one, qe = [], Je = [], Ye = [];
	function Xe(e, t) {
		let n = Ue.show(r, t);
		if (n instanceof HTMLElement) return Gi(n, di), Gi(n, e.class), Zi(n, -10, -10, z, B), m.insertBefore(n, qe[t]), n;
	}
	function Ze(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? uo(n) ? fs(ne, us(n, re)) : n || oe : n || qs, e.label = e.label || (t ? Ps : Ns);
		}
		if (Ke || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Bc || Ka, e.fillTo = $(e.fillTo || uc), e.pxAlign = +ba(e.pxAlign, h), e.pxRound = hc(e.pxAlign), e.stroke = $(e.stroke || null), e.fill = $(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Ys(Ma(1, e.width), 1), n = e.points = _o({}, {
				size: t,
				width: Ma(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: Vc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = $(n.show), n.filter = $(n.filter), n.fill = $(n.fill), n.stroke = $(n.stroke), n.paths = $(n.paths), n.pxAlign = e.pxAlign;
		}
		if (M) {
			let n = _e(e, t);
			le.splice(t, 0, n[0]), ue.splice(t, 0, n[1]), A.values.push(null);
		}
		if (N) {
			se.splice(t, 0, null);
			let n = null;
			Ke ? t == 0 && (n = Xe(e, t)) : t > 0 && (n = Xe(e, t)), qe.splice(t, 0, n), Je.splice(t, 0, 0), Ye.splice(t, 0, 0);
		}
		qn("addSeries", t);
	}
	function Qe(e, t) {
		t ??= v.length, e = i == 1 ? Wc(e, t, Fs, ec) : Wc(e, t, {}, $s), v.splice(t, 0, e), Ze(v[t], t);
	}
	r.addSeries = Qe;
	function $e(e) {
		if (v.splice(e, 1), M) {
			A.values.splice(e, 1), ue.splice(e, 1);
			let t = le.splice(e, 1)[0];
			L(null, t.firstChild), t.remove();
		}
		N && (se.splice(e, 1), qe.splice(e, 1)[0].remove(), Je.splice(e, 1), Ye.splice(e, 1)), qn("delSeries", e);
	}
	r.delSeries = $e;
	let et = [
		!1,
		!1,
		!1,
		!1
	];
	function tt(e, t) {
		if (e._show = e.show, e.show) {
			let n = e.side % 2, i = b[e.scale];
			i ??= (e.scale = n ? v[1].scale : S, b[e.scale]);
			let a = i.time;
			e.size = $(e.size), e.space = $(e.space), e.rotate = $(e.rotate), so(e.incrs) && e.incrs.forEach((e) => {
				!to.has(e) && to.set(e, no(e));
			}), e.incrs = $(e.incrs || (i.distr == 2 ? Ho : a ? _ == 1 ? es : rs : Uo)), e.splits = $(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? Rs : i.distr == 4 ? zs : Ls)), e.stroke = $(e.stroke), e.grid.stroke = $(e.grid.stroke), e.ticks.stroke = $(e.ticks.stroke), e.border.stroke = $(e.border.stroke);
			let o = e.values;
			e.values = so(o) && !so(o[0]) ? $(o) : a ? so(o) ? ss(ne, os(o, re)) : uo(o) ? cs(ne, o) : o || ae : o || Is, e.filter = $(e.filter || (i.distr >= 3 && i.log == 10 ? Gs : i.distr == 3 && i.log == 2 ? Ks : Ga)), e.font = $c(e.font), e.labelFont = $c(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (et[t] = !0, e._el = Yi(oi, f));
		}
	}
	function nt(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? ka(Ms.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? ka(Js.size / 2) : 0), l;
	}
	let rt = r.padding = (e.padding || [
		nt,
		nt,
		nt,
		nt
	]).map((e) => $(ba(e, nt))), it = r._padding = rt.map((e, t) => e(r, t, et, 0)), at, ot = null, st = null, ct = i == 1 ? v[0].idxs : null, H = null, lt = !1;
	function ut(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			at = 0;
			for (let e = 1; e < v.length; e++) at += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), H = t[0], at = H.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(at);
				for (let e = 0; e < at; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (Rt(!0), qn("setData"), O == 2 && (Me = !0), n !== !1) {
			let e = D;
			e.auto(r, lt) ? dt() : dn(S, e.min, e.max), Ne ||= j.left >= 0, Fe = !0, Ut();
		}
	}
	r.setData = ut;
	function dt() {
		lt = !0;
		let e, n;
		i == 1 && (at > 0 ? (ot = ct[0] = 0, st = ct[1] = at - 1, e = t[0][ot], n = t[0][st], O == 2 ? (e = ot, n = st) : e == n && (O == 3 ? [e, n] = pa(e, e, D.log, !1) : O == 4 ? [e, n] = ma(e, e, D.log, !1) : D.time ? n = e + ka(86400 / _) : [e, n] = ya(e, n, ha, !0))) : (ot = ct[0] = e = null, st = ct[1] = n = null)), dn(S, e, n);
	}
	let ft, pt, mt, ht, gt, _t, vt, yt, bt, xt;
	function St(e, t, n, r, i, a) {
		e ??= Ei, n ??= ao, r ??= "butt", i ??= Ei, a ??= "round", e != ft && (d.strokeStyle = ft = e), i != pt && (d.fillStyle = pt = i), t != mt && (d.lineWidth = mt = t), a != gt && (d.lineJoin = gt = a), r != _t && (d.lineCap = _t = r), n != ht && d.setLineDash(ht = n);
	}
	function Ct(e, t, n, r) {
		t != pt && (d.fillStyle = pt = t), e != vt && (d.font = vt = e), n != yt && (d.textAlign = yt = n), r != bt && (d.textBaseline = bt = r);
	}
	function wt(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, lt) && (t == null || t.min == null)) {
			let t = ba(ot, 0), r = ba(st, i.length - 1), o = n.min == null ? fa(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = ja(e.min, n.min = o[0]), e.max = Ma(e.max, n.max = o[1]);
		}
	}
	let Tt = {
		min: null,
		max: null
	};
	function Et() {
		for (let e in b) {
			let t = b[e];
			k[e] == null && (t.min == null || k[S] != null && t.auto(r, lt)) && (k[e] = Tt);
		}
		for (let e in b) {
			let t = b[e];
			k[e] == null && t.from != null && k[t.from] != null && (k[e] = Tt);
		}
		k[S] != null && Rt(!0);
		let e = {};
		for (let t in k) {
			let n = k[t];
			if (n != null) {
				let a = e[t] = go(b[t], po);
				if (n.min != null) _o(a, n);
				else if (t != S || i == 2) if (at == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = za, a.max = -Infinity;
			}
		}
		if (at > 0) {
			v.forEach((n, a) => {
				if (i == 1) {
					let i = n.scale, o = k[i];
					if (o == null) return;
					let s = e[i];
					if (a == 0) {
						let e = s.range(r, s.min, s.max, i);
						s.min = e[0], s.max = e[1], ot = oa(s.min, t[0]), st = oa(s.max, t[0]), st - ot > 1 && (t[0][ot] < s.min && ot++, t[0][st] > s.max && st--), n.min = H[ot], n.max = H[st];
					} else n.show && n.auto && wt(s, o, n, t[a], n.sorted);
					n.idxs[0] = ot, n.idxs[1] = st;
				} else if (a > 0 && n.show && n.auto) {
					let [r, i] = n.facets, o = r.scale, s = i.scale, [c, l] = t[a], u = e[o], d = e[s];
					u != null && wt(u, k[o], r, c, r.sorted), d != null && wt(d, k[s], i, l, i.sorted), n.min = i.min, n.max = i.max;
				}
			});
			for (let t in e) {
				let n = e[t], i = k[t];
				if (n.from == null && (i == null || i.min == null)) {
					let e = n.range(r, n.min == za ? null : n.min, n.max == -Infinity ? null : n.max, t);
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
				i._min = e == 3 ? Fa(i.min) : e == 4 ? Ra(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? Fa(i.max) : e == 4 ? Ra(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Me = !0, qn("setScale", e);
			N && j.left >= 0 && (Ne = Fe = !0);
		}
		for (let e in k) k[e] = null;
	}
	function Dt(e) {
		let t = Va(ot - 1, 0, at - 1), n = Va(st + 1, 0, at - 1);
		for (; e[t] == null && t > 0;) t--;
		for (; e[n] == null && n < at - 1;) n++;
		return [t, n];
	}
	function Ot() {
		if (at > 0) {
			let e = v.some((e) => e._focus) && xt != We.alpha;
			e && (d.globalAlpha = xt = We.alpha), v.forEach((e, n) => {
				if (n > 0 && e.show && (kt(n, !1), kt(n, !0), e._paths == null)) {
					let a = xt;
					xt != e.alpha && (d.globalAlpha = xt = e.alpha);
					let o = i == 2 ? [0, t[n][0].length - 1] : Dt(t[n]);
					e._paths = e.paths(r, n, o[0], o[1]), xt != a && (d.globalAlpha = xt = a);
				}
			}), v.forEach((e, t) => {
				if (t > 0 && e.show) {
					let n = xt;
					xt != e.alpha && (d.globalAlpha = xt = e.alpha), e._paths != null && At(t, !1);
					{
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, ot, st, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, ot, st, a), At(t, !0));
					}
					xt != n && (d.globalAlpha = xt = n), qn("drawSeries", t);
				}
			}), e && (d.globalAlpha = xt = 1);
		}
	}
	function kt(e, t) {
		let n = t ? v[e].points : v[e];
		n._stroke = n.stroke(r, e), n._fill = n.fill(r, e);
	}
	function At(e, t) {
		let n = t ? v[e].points : v[e], { stroke: r, fill: i, clip: a, flags: o, _stroke: s = n._stroke, _fill: c = n._fill, _width: l = n.width } = n._paths;
		l = eo(l * Hi, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = Ee - l / 2, t = De - l / 2, n = Oe + l, r = ke + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? Mt(s, l, n.dash, n.cap, c, r, i, o, a) : jt(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function jt(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || io).band;
				so(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && xa(g, ot, st) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, Mt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || Mt(n, i, a, o, s, c, l, u, d, f);
	}
	function Mt(e, t, n, r, i, a, o, s, c, l, u, f) {
		St(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), W(i, o), U(e, a, t)) : s & sc ? (W(i, o), d.clip(f), U(e, a, t)) : s & oc && (d.save(), d.clip(f), u && d.clip(u), W(i, o), d.restore(), U(e, a, t)) : (W(i, o), U(e, a, t)), (c || l || f) && d.restore();
	}
	function U(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = ft = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function W(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = pt = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function Nt(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Qc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function Pt(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), St(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function Ft(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, Rt(!1));
				return;
			} else n._show || (t = !1, n._show = !0, Rt(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = Nt(i, c, l, s == 0 ? z : B);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => H[e]) : p, h = a.distr == 2 ? H[p[1]] - H[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = Aa(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function It(e) {
		let t = !0;
		return rt.forEach((n, i) => {
			let a = n(r, i, et, e);
			a != it[i] && (t = !1), it[i] = a;
		}), t;
	}
	function Lt() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = ka((t._lpos + s) * Hi);
				Ct(t.labelFont[0], c, "center", n == 2 ? xi : Si), d.save(), i == 1 ? (a = o = 0, d.translate(p, ka(De + ke / 2)), d.rotate((n == 3 ? -Ea : Ea) / 2)) : (a = ka(Ee + Oe / 2), o = p);
				let m = Ha(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? Oe : ke, h = i == 0 ? Ee : De, _ = t._splits, v = p.distr == 2 ? _.map((e) => H[e]) : _, x = p.distr == 2 ? H[_[1]] - H[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = ka(w * Hi), E = ka((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * Hi), D = t._rotate * -Ea / 180, O = g(t._pos * Hi), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Ct(te, c, t.align == 1 ? Ci : t.align == 2 ? wi : D > 0 ? Ci : D < 0 ? wi : i == 0 ? "center" : n == 3 ? wi : Ci, D || i == 1 ? "middle" : n == 2 ? xi : Si);
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
			S.show && Pt(ne, S.filter(r, v, e, f, x), i, n, O, T, eo(S.width * Hi, 3), S.stroke(r, e), S.dash, S.cap);
			let ie = t.grid;
			ie.show && Pt(ne, ie.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? De : Ee, i == 0 ? ke : Oe, eo(ie.width * Hi, 3), ie.stroke(r, e), ie.dash, ie.cap), C.show && Pt([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? De : Ee, i == 1 ? ke : Oe, eo(C.width * Hi, 3), C.stroke(r, e), C.dash, C.cap);
		}
		qn("drawAxes");
	}
	function Rt(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let zt = !1, Bt = !1, Vt = [];
	function Ht() {
		Bt = !1;
		for (let e = 0; e < Vt.length; e++) qn(...Vt[e]);
		Vt.length = 0;
	}
	function Ut() {
		zt ||= (Co(Gt), !0);
	}
	function Wt(e, t = !1) {
		zt = !0, Bt = t, e(r), Gt(), t && Vt.length > 0 && queueMicrotask(Ht);
	}
	r.batch = Wt;
	function Gt() {
		if (Ae &&= (Et(), !1), Me &&= (Re(), !1), je) {
			if (qi(p, Ci, V), qi(p, xi, xe), qi(p, yi, z), qi(p, bi, B), qi(m, Ci, V), qi(m, xi, xe), qi(m, yi, z), qi(m, bi, B), qi(f, yi, be), qi(f, bi, R), u.width = ka(be * Hi), u.height = ka(R * Hi), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					qi(e, a ? "left" : "top", r - t), qi(e, a ? "width" : "height", n), qi(e, a ? "top" : "left", a ? xe : V), qi(e, a ? "height" : "width", a ? B : z), Ki(e, si);
				} else Gi(e, si);
			}), ft = pt = mt = gt = _t = vt = yt = bt = ht = null, xt = 1, jn(!0), V != Se || xe != Ce || z != we || B != Te) {
				Rt(!1);
				let e = z / we, t = B / Te;
				if (N && !Ne && j.left >= 0) {
					j.left *= e, j.top *= t, qt && Zi(qt, ka(j.left), 0, z, B), Jt && Zi(Jt, 0, ka(j.top), z, B);
					for (let n = 0; n < qe.length; n++) {
						let r = qe[n];
						r != null && (Je[n] *= e, Ye[n] *= t, Zi(r, Aa(Je[n]), Aa(Ye[n]), z, B));
					}
				}
				if (q.show && !Pe && q.left >= 0 && q.width > 0) {
					q.left *= e, q.width *= e, q.top *= t, q.height *= t;
					for (let e in Pn) qi(cn, e, q[e]);
				}
				Se = V, Ce = xe, we = z, Te = B;
			}
			qn("setSize"), je = !1;
		}
		be > 0 && R > 0 && (d.clearRect(0, 0, u.width, u.height), qn("drawClear"), w.forEach((e) => e()), qn("draw")), q.show && Pe && (ln(q), Pe = !1), N && Ne && (An(null, !0, !1), Ne = !1), A.show && A.live && Fe && (J(), Fe = !1), c || (c = !0, r.status = 1, qn("ready")), lt = !1, zt = !1;
	}
	r.redraw = (e, t) => {
		Me = t || !1, e === !1 ? Ut() : dn(S, D.min, D.max);
	};
	function G(e, n) {
		let i = b[e];
		if (i.from == null) {
			if (at == 0) {
				let t = i.range(r, n.min, n.max, e);
				n.min = t[0], n.max = t[1];
			}
			if (n.min > n.max) {
				let e = n.min;
				n.min = n.max, n.max = e;
			}
			if (at > 1 && n.min != null && n.max != null && n.max - n.min < 1e-16) return;
			e == S && i.distr == 2 && at > 0 && (n.min = oa(n.min, t[0]), n.max = oa(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Ae = !0, Ut();
		}
	}
	r.setScale = G;
	let Kt, K, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn = !1, an = j.drag, on = an.x, sn = an.y;
	N && (j.x && (Kt = Yi(li, m)), j.y && (K = Yi(ui, m)), D.ori == 0 ? (qt = Kt, Jt = K) : (qt = K, Jt = Kt), tn = j.left, nn = j.top);
	let q = r.select = _o({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), cn = q.show ? Yi(ci, q.over ? m : p) : null;
	function ln(e, t) {
		if (q.show) {
			for (let t in e) q[t] = e[t], t in Pn && qi(cn, t, e[t]);
			t !== !1 && qn("setSelect");
		}
	}
	r.setSelect = ln;
	function un(e) {
		if (v[e].show) M && Ki(le[e], si);
		else if (M && Gi(le[e], si), N) {
			let t = Ke ? qe[0] : qe[e];
			t != null && Zi(t, -10, -10, z, B);
		}
	}
	function dn(e, t, n) {
		G(e, {
			min: t,
			max: n
		});
	}
	function fn(e, t, n, a) {
		t.focus != null && xn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, un(r), i == 2 ? (dn(n.facets[0].scale, null, null), dn(n.facets[1].scale, null, null)) : dn(n.scale, null, null), Ut());
		}), n !== !1 && qn("setSeries", e, t), a && Zn("setSeries", r, e, t);
	}
	r.setSeries = fn;
	function pn(e, t) {
		_o(x[e], t);
	}
	function mn(e, t) {
		e.fill = $(e.fill || null), e.dir = ba(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function hn(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = mn, r.setBand = pn, r.delBand = hn;
	function gn(e, t) {
		v[e].alpha = t, N && qe[e] != null && (qe[e].style.opacity = t), M && le[e] && (le[e].style.opacity = t);
	}
	let _n, vn, yn, bn = { focus: !0 };
	function xn(e) {
		if (e != yn) {
			let t = e == null, n = We.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && gn(a, i ? 1 : We.alpha);
				}
			}), yn = e, n && Ut();
		}
	}
	M && Ge && ye(ji, F, (e) => {
		j._lock || (He(e), yn != null && fn(null, bn, !0, Yn.setSeries));
	});
	function Sn(e, t, n) {
		let r = b[t];
		n && (e = e / Hi - (r.ori == 1 ? xe : V));
		let i = z;
		r.ori == 1 && (i = B, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? Na(10, c) : l == 4 ? La(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Cn(e, n) {
		return oa(Sn(e, S, n), t[0], ot, st);
	}
	r.valToIdx = (e) => oa(e, t[0]), r.posToIdx = Cn, r.posToVal = Sn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? Oe : z, n ? Ee : 0) : o(e, b[t], n ? ke : B, n ? De : 0), r.setCursor = (e, t, n) => {
		tn = e.left, nn = e.top, An(null, t, n);
	};
	function wn(e, t) {
		qi(cn, Ci, q.left = e), qi(cn, yi, q.width = t);
	}
	function Tn(e, t) {
		qi(cn, xi, q.top = e), qi(cn, bi, q.height = t);
	}
	let En = D.ori == 0 ? wn : Tn, Dn = D.ori == 1 ? wn : Tn;
	function On() {
		if (M && A.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && fe) continue;
			let t = A.values[e], n = 0;
			for (let r in t) ue[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function J(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : lo(e.idx) || se.fill(e.idx), A.idx = se[0]), M && A.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !fe) && kn(e, se[e]);
			On();
		}
		Fe = !1, t !== !1 && qn("setLegend");
	}
	r.setLegend = J;
	function kn(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? H : t[e], o;
		fe ? o = i.values(r, e, n) ?? pe : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? pe : { _: o }), A.values[e] = o;
	}
	function An(e, n, a) {
		$t = tn, en = nn, [tn, nn] = j.move(r, tn, nn), j.left = tn, j.top = nn, N && (qt && Zi(qt, ka(tn), 0, z, B), Jt && Zi(Jt, 0, ka(nn), z, B));
		let o, s = ot > st;
		_n = za, vn = null;
		let c = D.ori == 0 ? z : B, l = D.ori == 1 ? z : B;
		if (tn < 0 || at == 0 || s) {
			o = j.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = qe[e];
				t != null && Zi(t, -10, -10, z, B);
			}
			Ge && fn(null, bn, !0, e == null && Yn.setSeries), A.live && (se.fill(o), Fe = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? tn : nn, n = Sn(e, S), o = j.idx = oa(n, t[0], ot, st), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = j.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Fe = Fe || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (Ge && S != null) {
						let t = D.ori == 1 ? tn : nn, n = Da(We.dist(r, e, x, _, t));
						if (n < _n) {
							let r = We.bias;
							if (r != 0) {
								let i = Sn(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (_n = n, vn = e);
							} else _n = n, vn = e;
						}
					}
					if (Fe || Ke) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = Ue.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = Ue.size(r, e);
						if (v = Ue.fill(r, e), g = Ue.stroke(r, e), Ke) e == vn && _n <= We.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = qe[e];
							t != null && (Je[e] = c, Ye[e] = l, ta(t, a, o, y), $i(t, v, g), Zi(t, Aa(c), Aa(l), z, B));
						}
					}
				}
			}
			if (Ke) {
				let e = We.prox;
				if (Fe || (yn == null ? _n <= e : _n > e || vn != yn)) {
					let e = qe[0];
					e != null && (Je[0] = s, Ye[0] = u, ta(e, d, f, p), $i(e, m, h), Zi(e, Aa(s), Aa(u), z, B));
				}
			}
		}
		if (q.show && rn) if (e != null) {
			let [t, n] = Yn.scales, [r, i] = Yn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (on = s._x, sn = s._y, on || sn) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && on ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), En(ja(v, y), Da(y - v))) : En(0, c), S && sn ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), Dn(ja(v, y), Da(y - v))) : Dn(0, l);
			} else Fn();
		} else {
			let e = Da($t - Yt), t = Da(en - Xt);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			on = an.x && e >= an.dist, sn = an.y && t >= an.dist;
			let n = an.uni;
			n == null ? an.x && an.y && (on || sn) && (on = sn = !0) : on && sn && (on = e >= n, sn = t >= n, !on && !sn && (t > e ? sn = !0 : on = !0));
			let r, i;
			on && (D.ori == 0 ? (r = Zt, i = tn) : (r = Qt, i = nn), En(ja(r, i), Da(i - r)), sn || Dn(0, l)), sn && (D.ori == 1 ? (r = Zt, i = tn) : (r = Qt, i = nn), Dn(ja(r, i), Da(i - r)), on || En(0, c)), !on && !sn && (En(0, 0), Dn(0, 0));
		}
		if (an._x = on, an._y = sn, e == null) {
			if (a) {
				if (X != null) {
					let [e, t] = Yn.scales;
					Yn.values[0] = e == null ? null : Sn(D.ori == 0 ? tn : nn, e), Yn.values[1] = t == null ? null : Sn(D.ori == 1 ? tn : nn, t);
				}
				Zn(Di, r, tn, nn, z, B, o);
			}
			if (Ge) {
				let e = a && Yn.setSeries, t = We.prox;
				yn == null ? _n <= t && fn(vn, bn, !0, e) : _n > t ? fn(null, bn, !0, e) : vn != yn && fn(vn, bn, !0, e);
			}
		}
		Fe && (A.idx = o, J()), n !== !1 && qn("setCursor");
	}
	let Y = null;
	Object.defineProperty(r, "rect", { get() {
		return Y ?? jn(!1), Y;
	} });
	function jn(e = !1) {
		e ? Y = null : (Y = m.getBoundingClientRect(), qn("syncRect", Y));
	}
	function Mn(e, t, n, r, i, a, o) {
		j._lock || rn && e != null && e.movementX == 0 && e.movementY == 0 || (Nn(e, t, n, r, i, a, o, !1, e != null), e == null ? An(t, !0, !1) : An(null, !0, !0));
	}
	function Nn(e, t, n, i, a, o, c, l, u) {
		if (Y ?? jn(!1), He(e), e != null) n = e.clientX - Y.left, i = e.clientY - Y.top;
		else {
			if (n < 0 || i < 0) {
				tn = -10, nn = -10;
				return;
			}
			let [e, r] = Yn.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = Yn.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? z : B, _ = D.ori == 1 ? z : B, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == Di) && ((n <= 1 || n >= z - 1) && (n = Za(n, z)), (i <= 1 || i >= B - 1) && (i = Za(i, B))), l ? (Yt = n, Xt = i, [Zt, Qt] = j.move(r, n, i)) : (tn = n, nn = i);
	}
	let Pn = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	function Fn() {
		ln(Pn, !1);
	}
	let In, Ln, Rn, zn;
	function Bn(e, t, n, i, a, o, s) {
		rn = !0, on = sn = an._x = an._y = !1, Nn(e, t, n, i, a, o, s, !0, !1), e != null && (ye(ki, zi, Vn, !1), Zn(Oi, r, Zt, Qt, z, B, null));
		let { left: c, top: l, width: u, height: d } = q;
		In = c, Ln = l, Rn = u, zn = d;
	}
	function Vn(e, t, n, i, a, o, s) {
		rn = an._x = an._y = !1, Nn(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = q, f = u > 0 || d > 0, p = In != c || Ln != l || Rn != u || zn != d;
		if (f && p && ln(q), an.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), on && dn(S, Sn(e, S), Sn(e + t, S)), sn) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != za && dn(e, Sn(n + r, e), Sn(n, e));
			}
			Fn();
		} else j.lock && (j._lock = !j._lock, An(t, !0, e != null));
		e != null && (L(ki, zi), Zn(ki, r, tn, nn, z, B, null));
	}
	function Hn(e, t, n, r, i, a, o) {
		if (j._lock) return;
		He(e);
		let s = rn;
		if (rn) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = on, r = sn) : (n = sn, r = on), n && r && (e = tn <= 10 || tn >= z - 10, t = nn <= 10 || nn >= B - 10), n && e && (tn = tn < Zt ? 0 : z), r && t && (nn = nn < Qt ? 0 : B), An(null, !0, !0), rn = !1;
		}
		tn = -10, nn = -10, se.fill(null), An(null, !0, !0), s && (rn = s);
	}
	function Un(e, t, n, i, a, o, s) {
		j._lock || (He(e), dt(), Fn(), e != null && Zn(Mi, r, tn, nn, z, B, null));
	}
	function Wn() {
		y.forEach(el), Ie(r.width, r.height, !0);
	}
	ia(Ii, Bi, Wn);
	let Gn = {};
	Gn.mousedown = Bn, Gn.mousemove = Mn, Gn.mouseup = Vn, Gn.dblclick = Un, Gn.setSeries = (e, t, n, i) => {
		let a = Yn.match[2];
		n = a(r, t, n), n != -1 && fn(n, i, !0, !1);
	}, N && (ye(Oi, m, Bn), ye(Di, m, Mn), ye(Ai, m, (e) => {
		He(e), jn(!1);
	}), ye(ji, m, Hn), ye(Mi, m, Un), Rc.add(r), r.syncRect = jn);
	let Kn = r.hooks = e.hooks || {};
	function qn(e, t, n) {
		Bt ? Vt.push([
			e,
			t,
			n
		]) : e in Kn && Kn[e].forEach((e) => {
			e.call(null, r, t, n);
		});
	}
	(e.plugins || []).forEach((e) => {
		for (let t in e.hooks) Kn[t] = (Kn[t] || []).concat(e.hooks[t]);
	});
	let Jn = (e, t, n) => n, Yn = _o({
		key: null,
		setSeries: !1,
		filters: {
			pub: qa,
			sub: qa
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			Ja,
			Ja,
			Jn
		],
		values: [null, null]
	}, j.sync);
	Yn.match.length == 2 && Yn.match.push(Jn), j.sync = Yn;
	let X = Yn.key, Xn = ac(X);
	function Zn(e, t, n, r, i, a, o) {
		Yn.filters.pub(e, t, n, r, i, a, o) && Xn.pub(e, t, n, r, i, a, o);
	}
	Xn.sub(r);
	function Z(e, t, n, r, i, a, o) {
		Yn.filters.sub(e, t, n, r, i, a, o) && Gn[e](null, t, n, r, i, a, o);
	}
	r.pub = Z;
	function Qn() {
		Xn.unsub(r), Rc.delete(r), ve.clear(), aa(Ii, Bi, Wn), l.remove(), F?.remove(), qn("destroy");
	}
	r.destroy = Qn;
	function $n() {
		qn("init", e, t), ut(t || e.data, !1), k[S] ? G(S, k[S]) : dt(), Pe = q.show && (q.width > 0 || q.height > 0), Ne = Fe = !0, Ie(e.width, e.height);
	}
	return v.forEach(Ze), y.forEach(tt), n ? n instanceof HTMLElement ? (n.appendChild(l), $n()) : n(r, $n) : $n(), r;
}
tl.assign = _o, tl.fmtNum = wa, tl.rangeNum = ya, tl.rangeLog = pa, tl.rangeAsinh = ma, tl.orient = cc, tl.pxRatio = Hi, tl.join = So, tl.fmtDate = Fo, tl.tzDate = Lo, tl.sync = ac;
{
	tl.addGap = pc, tl.clipGaps = fc;
	let e = tl.paths = { points: Dc };
	e.linear = jc, e.stepped = Mc, e.bars = Pc, e.spline = Ic;
}
//#endregion
//#region src/App.svelte
var nl = /* @__PURE__ */ dr("<div class=\"error\" role=\"alert\"> <code>apx status</code> if the problem persists.</div>"), rl = /* @__PURE__ */ dr("<div class=\"empty-state\"><strong> </strong> <span> </span></div>"), il = /* @__PURE__ */ dr("<article><strong> </strong><small> </small><em> </em></article>"), al = /* @__PURE__ */ dr("<button class=\"signals-toggle\" type=\"button\"> </button>"), ol = /* @__PURE__ */ dr("<div class=\"attention-list\"></div> <!>", 1), sl = /* @__PURE__ */ dr("<p class=\"clear\">Requests and optimizers show no active warning signals in this window.</p>"), cl = /* @__PURE__ */ dr("<p class=\"chart-empty\">A trend appears after two time buckets.</p>"), ll = /* @__PURE__ */ dr("<!> <div class=\"metrics\" aria-label=\"Token efficiency summary\"><article><span>Tokens processed</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small> </small></article> <article class=\"token-card\"><span>Verified input saved</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small>Removed before the model with matching before/after evidence</small></article> <article><span>Verified input reduction</span><strong> </strong><small> </small></article> <article><span>Request health</span><strong> </strong><small> </small></article></div> <article class=\"token-journey\" aria-label=\"Verified input token journey\"><div class=\"journey-heading\"><div><h3>Verified input journey</h3><small>Actual model input plus verified removals; estimates are excluded</small></div> <span class=\"status\"> </span></div> <div class=\"journey-values\"><div><span>Verified baseline input</span><strong> </strong><small>actual input + verified removed</small></div> <span class=\"journey-arrow\" aria-hidden=\"true\">→</span> <div><span>Sent to model</span><strong> </strong><small> </small></div> <span class=\"journey-plus\" aria-hidden=\"true\">+</span> <div class=\"journey-saved\"><span>Removed</span><strong> </strong><small> </small></div></div> <div class=\"journey-track\" aria-hidden=\"true\"><span class=\"journey-sent\"></span> <span class=\"journey-removed\"></span></div> <p class=\"journey-evidence\">Evidence coverage: <strong> </strong> </p></article> <div><div class=\"attention-heading\"><h3> </h3><span> </span></div> <!></div> <div class=\"context-strip\" aria-label=\"Usage context\"><div><span>Cache reuse</span><strong> </strong><small> </small></div> <div><span>Estimated spend</span><strong> </strong><small>based on configured model prices</small></div> <div><span>Models active</span><strong> </strong><small> </small></div> <div><span>Tool activity</span><strong> </strong><small> </small></div></div> <div class=\"charts\"><article class=\"chart\"><div class=\"chart-heading\"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class=\"status\"> </span></div><div class=\"chart-key\"><span class=\"key-input\">Input</span><span class=\"key-output\">Output</span></div><div role=\"img\"></div><!></article> <article class=\"chart\"><div class=\"chart-heading\"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class=\"status\">explicit</span></div><div class=\"chart-key\"><span class=\"key-verified\">Verified</span><span class=\"key-estimated\">Estimated</span></div><div role=\"img\"></div><!></article></div>", 1), ul = /* @__PURE__ */ dr("<em>tokens</em>"), dl = /* @__PURE__ */ dr("<p class=\"bypass-note\"> </p>"), fl = /* @__PURE__ */ dr("<a class=\"optimizer-link\" target=\"_blank\" rel=\"noopener\"> <span aria-hidden=\"true\">↗</span></a>"), pl = /* @__PURE__ */ dr("<article><div class=\"optimizer-card-heading\"><div><p class=\"optimizer-name\"> </p><small> </small></div> <span> </span></div> <div class=\"optimizer-primary\"><div><span>Verified this window</span><strong> <!></strong></div> <div><span>Native reported total</span><strong> <!></strong></div></div> <div class=\"coverage-row\"><div><span>Evidence coverage</span><strong> </strong></div> <div class=\"coverage-track\" aria-hidden=\"true\"><span></span></div> <small> </small></div> <dl class=\"optimizer-facts\"><div><dt>Native reduction</dt><dd> </dd></div> <div><dt>Native requests</dt><dd> </dd></div> <div><dt>Optimizer latency</dt><dd> </dd></div> <div><dt>Native cost saved</dt><dd> </dd></div></dl> <!> <div class=\"optimizer-card-footer\"><small> </small> <!></div></article>"), ml = /* @__PURE__ */ dr("<article><p class=\"clear\">No optimizer activity or health snapshots in this window yet.</p></article>"), hl = /* @__PURE__ */ dr("<div class=\"optimizer-overview\" aria-label=\"Optimizer measurement summary\"><div><span>Verified savings this window</span><strong> </strong><small>Request-level before/after evidence</small></div> <div><span>Evidence coverage</span><strong> </strong><small> </small></div> <div><span>Persistence</span><strong> </strong><small> </small></div></div> <p class=\"optimizer-explainer\">Verified savings below is scoped to the selected window. Native counters are optimizer-reported totals and may cover a longer lifetime, so they are deliberately labeled separately.</p> <div class=\"optimizer-cards\"><!></div>", 1), gl = /* @__PURE__ */ dr("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), _l = /* @__PURE__ */ dr("<div class=\"health-list\"></div>"), vl = /* @__PURE__ */ dr("<p class=\"clear\">No model activity in this window.</p>"), yl = /* @__PURE__ */ dr("<div class=\"health-row session-row\"><strong> </strong><span> </span> <small> </small></div>"), bl = /* @__PURE__ */ dr("<p class=\"clear\">No sessions in this window.</p>"), xl = /* @__PURE__ */ dr("<div class=\"stored-grid\" aria-label=\"Persisted activity\"><article><div class=\"attention-heading\"><h3>Local history</h3><span> </span></div> <div class=\"storage-value\"> </div> <small> </small></article> <article><div class=\"attention-heading\"><h3>Top models</h3><span class=\"status\"> </span></div> <!></article> <article><div class=\"attention-heading\"><h3>Recent sessions</h3><span class=\"status\"> </span></div> <!></article></div>"), Sl = /* @__PURE__ */ dr("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">LeanRelay · token efficiency</p> <h2> </h2></div> <div class=\"refresh-state\"><span aria-live=\"polite\"> </span> <button class=\"refresh-button\" type=\"button\" aria-label=\"Refresh dashboard data\">Refresh</button></div></div> <!> <div class=\"view-tabs\" aria-label=\"Dashboard views\" role=\"tablist\"><button type=\"button\" role=\"tab\">Overview</button> <button type=\"button\" role=\"tab\">Optimizers</button> <button type=\"button\" role=\"tab\">Activity</button></div> <!></section>");
function Cl(e, t) {
	ke(t, !1);
	let n = /* @__PURE__ */ U(), r = /* @__PURE__ */ U(), i = /* @__PURE__ */ U(), a = /* @__PURE__ */ U(), o = /* @__PURE__ */ U(), s = /* @__PURE__ */ U(), c = /* @__PURE__ */ U(), l = /* @__PURE__ */ U(), u = /* @__PURE__ */ U(), d = /* @__PURE__ */ U(), f = /* @__PURE__ */ U(), p = /* @__PURE__ */ U(), m = /* @__PURE__ */ U(), h = /* @__PURE__ */ U(), g = /* @__PURE__ */ U(), _ = /* @__PURE__ */ U(), v = /* @__PURE__ */ U(), y = /* @__PURE__ */ U(), b = /* @__PURE__ */ U(), x = /* @__PURE__ */ U(), S = /* @__PURE__ */ U(), C = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), w = /* @__PURE__ */ U("1h"), T = /* @__PURE__ */ U({}), E = /* @__PURE__ */ U({ alerts: [] }), D = /* @__PURE__ */ U([]), O = /* @__PURE__ */ U([]), ee = /* @__PURE__ */ U({}), te = /* @__PURE__ */ U([]), k = /* @__PURE__ */ U([]), ne = /* @__PURE__ */ U({}), re = /* @__PURE__ */ U(!0), ie = /* @__PURE__ */ U(""), ae = /* @__PURE__ */ U(!1), oe = /* @__PURE__ */ U(!1), se = /* @__PURE__ */ U(null), A = /* @__PURE__ */ U("overview"), j = /* @__PURE__ */ U(), M = /* @__PURE__ */ U(), N, P, F, I = (e) => new Intl.NumberFormat().format(Number(e || 0)), ce = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, le = (e) => `$${Number(e || 0).toFixed(Number(e || 0) < 1 ? 4 : 2)}`, ue = (e) => {
		let t = Number(e || 0);
		return t >= 1048576 ? `${(t / 1048576).toFixed(1)} MB` : `${(t / 1024).toFixed(1)} KB`;
	}, de = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m", fe = (e) => {
		let t = window.location.hostname.toLowerCase();
		return [
			"127.0.0.1",
			"::1",
			"localhost",
			"host.docker.internal"
		].includes(t) && {
			headroom: {
				href: "/proxy/headroom",
				label: "Open dashboard"
			},
			pxpipe: {
				href: "/proxy/pxpipe/",
				label: "Open dashboard"
			},
			squeezr: {
				href: "/proxy/squeezr/",
				label: "Open dashboard"
			}
		}[e] || null;
	};
	async function pe(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function me() {
		let e = document.querySelector("#window-select")?.value || X(w);
		return C.has(e) ? e : "1h";
	}
	function he() {
		try {
			return localStorage.getItem("apx.dashboard.window") || "";
		} catch {
			return "";
		}
	}
	function ge(e) {
		try {
			localStorage.setItem("apx.dashboard.window", e);
		} catch {}
	}
	function _e(e, t) {
		let n = getComputedStyle(document.documentElement), r = n.getPropertyValue("--muted").trim() || "#8f98aa", i = n.getPropertyValue("--border").trim() || "#2c3340";
		return {
			width: Math.max(240, e.clientWidth || 0),
			height: 180,
			cursor: { drag: {
				x: !0,
				y: !1
			} },
			legend: { show: !1 },
			scales: { x: { time: !0 } },
			series: [{}, ...t],
			axes: [{
				stroke: r,
				grid: {
					stroke: i,
					width: 1
				}
			}, {
				stroke: r,
				grid: {
					stroke: i,
					width: 1
				}
			}]
		};
	}
	function ve() {
		let e = X(D).map((e) => Number(e.ts || 0)), t = X(D).map((e) => Number(e.tokens_in || 0)), n = X(D).map((e) => Number(e.tokens_out || 0)), r = X(te).map((e) => Number(e.ts || 0)), i = X(te).map((e) => Number(e.measured_tokens_saved || 0)), a = X(te).map((e) => Number(e.estimated_tokens_saved || 0));
		!X(j) || !X(M) || (N?.destroy(), P?.destroy(), N = void 0, P = void 0, X(j).replaceChildren(), X(M).replaceChildren(), e.length >= 2 && (N = new tl(_e(X(j), [{
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
		], X(j))), r.length >= 2 && (P = new tl(_e(X(M), [{
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
		], X(M))));
	}
	async function ye(e) {
		e !== X(A) && (X(j) && F?.unobserve(X(j)), X(M) && F?.unobserve(X(M)), N?.destroy(), P?.destroy(), N = void 0, P = void 0, W(A, e), await Yn(), e === "overview" && (X(j) && F?.observe(X(j)), X(M) && F?.observe(X(M)), ve()));
	}
	async function L() {
		W(re, !0), W(ie, ""), W(ae, !1), W(w, me());
		try {
			let e = [
				{
					name: "usage",
					promise: pe(`/api/metrics/summary?window=${X(w)}`),
					apply: (e) => W(T, e)
				},
				{
					name: "attention",
					promise: pe(`/api/metrics/attention?window=${X(w)}`),
					apply: (e) => W(E, e)
				},
				{
					name: "token trend",
					promise: pe(`/api/metrics/timeseries?window=${X(w)}&bucket=${de(X(w))}`),
					apply: (e) => W(D, e.series || [])
				},
				{
					name: "savings",
					promise: pe(`/api/metrics/efficiency?window=${X(w)}`),
					apply: (e) => W(ee, e)
				},
				{
					name: "savings trend",
					promise: pe(`/api/metrics/efficiency/timeseries?window=${X(w)}&bucket=${de(X(w))}`),
					apply: (e) => W(te, e.series || [])
				},
				{
					name: "optimizer history",
					promise: pe(`/api/metrics/optimizer-snapshots?window=${X(w)}`),
					apply: (e) => W(O, e.snapshots || [])
				},
				{
					name: "sessions",
					promise: pe(`/api/metrics/sessions?window=${X(w)}&limit=5`),
					apply: (e) => W(k, e.sessions || [])
				},
				{
					name: "storage",
					promise: pe("/api/metrics/operations?limit=1"),
					apply: (e) => W(ne, e)
				}
			], t = await Promise.allSettled(e.map((e) => e.promise)), n = [];
			t.forEach((t, r) => {
				t.status === "fulfilled" ? e[r].apply(t.value) : n.push(e[r].name);
			}), W(ae, n.includes("usage")), W(ie, n.length ? `Some data is temporarily unavailable: ${n.join(", ")}` : ""), W(se, /* @__PURE__ */ new Date()), await Yn(), ve();
		} catch (e) {
			W(ie, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			W(re, !1);
		}
	}
	xr(() => {
		let e = he();
		C.has(e) && W(w, e);
		let t = document.querySelector("#window-select");
		t && (t.value = X(w)), L();
		let n = () => {
			W(w, me()), ge(X(w)), W(oe, !1), L();
		};
		t?.addEventListener("change", n);
		let r = window.setInterval(L, 1e4);
		return F = new ResizeObserver(() => ve()), X(j) && F.observe(X(j)), X(M) && F.observe(X(M)), () => {
			t?.removeEventListener("change", n), window.clearInterval(r), F?.disconnect(), N?.destroy(), P?.destroy();
		};
	});
	let be = /* @__PURE__ */ U([]);
	q(() => X(O), () => {
		W(be, Object.values(X(O).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), q(() => X(be), () => {
		W(n, X(be).map((e) => {
			let t = e.normalized || {};
			return e.optimizer === "headroom" ? {
				optimizer: "headroom",
				saved: t.tokens_saved_lifetime ?? null,
				rate: t.savings_pct_session ?? null,
				requests: t.requests_total ?? null,
				usd: t.usd_saved_lifetime ?? null
			} : e.optimizer === "pxpipe" ? {
				optimizer: "pxpipe",
				saved: t.saved_input_tokens ?? null,
				rate: (t.saved_pct_of_all_spend || t.saved_pct_input_only) ?? null,
				requests: t.requests_total ?? null,
				usd: t.saved_usd ?? null
			} : {
				optimizer: e.optimizer,
				saved: t.total_saved_tokens ?? null,
				rate: t.savings_pct ?? null,
				requests: t.requests_total ?? null,
				usd: null
			};
		}));
	}), q(() => X(ee), () => {
		W(r, X(ee).optimizers || []);
	}), q(() => X(ee), () => {
		W(i, X(ee).observed || {});
	}), q(() => X(T), () => {
		W(a, X(T).totals || {});
	}), q(() => X(T), () => {
		W(o, Object.entries(X(T).by_model || {}).map(([e, t]) => ({
			model: e,
			...t
		})).sort((e, t) => Number(t.tokens_in || 0) + Number(t.tokens_out || 0) - Number(e.tokens_in || 0) - Number(e.tokens_out || 0)).slice(0, 3));
	}), q(() => X(T), () => {
		W(s, Object.keys(X(T).by_model || {}).length);
	}), q(() => (X(i), X(T)), () => {
		W(c, Number(X(i).tokens_in || X(T).totals?.tokens_in || 0) + Number(X(i).tokens_out || X(T).totals?.tokens_out || 0));
	}), q(() => X(r), () => {
		W(l, X(r).reduce((e, t) => e + Number(t.measured_tokens_saved || 0), 0));
	}), q(() => X(r), () => {
		W(u, X(r).reduce((e, t) => e + Number(t.measured_attempts || 0), 0));
	}), q(() => X(r), () => {
		W(d, X(r).reduce((e, t) => e + Number(t.attempts || 0), 0));
	}), q(() => (X(i), X(l)), () => {
		W(f, Number(X(i).tokens_in || 0) + X(l));
	}), q(() => (X(f), X(l)), () => {
		W(p, X(f) > 0 ? X(l) / X(f) * 100 : null);
	}), q(() => (X(d), X(u)), () => {
		W(m, X(d) > 0 ? X(u) / X(d) * 100 : null);
	}), q(() => (X(f), X(i)), () => {
		W(h, X(f) > 0 ? Number(X(i).tokens_in || 0) / X(f) * 100 : 0);
	}), q(() => (X(f), X(l)), () => {
		W(g, X(f) > 0 ? X(l) / X(f) * 100 : 0);
	}), q(() => X(T), () => {
		W(_, Number(X(T).totals?.err_5xx || 0) + Number(X(T).totals?.warn_4xx || 0));
	}), q(() => X(T), () => {
		W(v, !!X(T).totals);
	}), q(() => (X(ae), X(v), X(re), X(_)), () => {
		W(y, X(ae) ? X(v) ? "Stale data" : "Unavailable" : !X(v) && X(re) ? "Loading" : X(_) ? `${I(X(_))} issue${X(_) === 1 ? "" : "s"}` : "Healthy");
	}), q(() => (X(oe), X(E)), () => {
		W(b, X(oe) ? X(E).alerts || [] : (X(E).alerts || []).slice(0, 1));
	}), q(() => (X(be), X(r)), () => {
		W(x, [.../* @__PURE__ */ new Set([...X(be).map((e) => e.optimizer), ...X(r).map((e) => e.optimizer)])]);
	}), q(() => (X(x), X(be), X(n), X(r)), () => {
		W(S, X(x).map((e) => ({
			name: e,
			snapshot: X(be).find((t) => t.optimizer === e),
			reported: X(n).find((t) => t.optimizer === e),
			measurement: X(r).find((t) => t.optimizer === e)
		})));
	}), cn(), Xr();
	var R = Sl(), z = G(R), B = G(z), Se = K(G(B), 2), Ce = G(Se, !0);
	V(Se), V(B);
	var we = K(B, 2), Te = G(we);
	let Ee;
	var De = G(Te, !0);
	V(Te);
	var Oe = K(Te, 2);
	V(we), V(z);
	var je = K(z, 2), Me = (e) => {
		var t = nl(), n = G(t);
		xe(2), V(t), dn(() => Q(n, `${X(ie) ?? ""}. Available sections remain visible; use `)), pr(e, t);
	};
	Cr(je, (e) => {
		X(ie) && e(Me);
	});
	var Ne = K(je, 2), Pe = G(Ne), Fe = K(Pe, 2), Ie = K(Fe, 2);
	V(Ne);
	var Le = K(Ne, 2), Re = (e) => {
		var t = ll(), n = Kt(t), r = (e) => {
			var t = rl(), n = G(t), r = G(n);
			V(n);
			var i = K(n, 2), a = G(i);
			V(i), V(t), dn((e) => {
				Q(r, `No requests in the last ${X(w) ?? ""}.`), Q(a, `${e ?? ""} requests remain in local history. Choose a longer time window to include older activity.`);
			}, [() => (X(ne), Z(() => I(X(ne).requests)))]), pr(e, t);
		}, x = /* @__PURE__ */ tt(() => (X(v), X(a), Z(() => X(v) && Number(X(a).requests || 0) === 0)));
		Cr(n, (e) => {
			X(x) && e(r);
		});
		var S = K(n, 2), C = G(S), O = K(G(C)), ee = G(O, !0);
		xe(), V(O);
		var k = K(O), re = G(k);
		V(k), V(C);
		var ie = K(C, 2), se = K(G(ie)), A = G(se, !0);
		xe(), V(se), xe(), V(ie);
		var N = K(ie, 2), P = K(G(N)), F = G(P, !0);
		V(P);
		var ue = K(P), de = G(ue);
		V(ue), V(N);
		var fe = K(N, 2), pe = K(G(fe));
		let me;
		var he = G(pe, !0);
		V(pe);
		var ge = K(pe), _e = G(ge);
		V(ge), V(fe), V(S);
		var ve = K(S, 2), ye = G(ve), L = K(G(ye), 2), be = G(L, !0);
		V(L), V(ye);
		var R = K(ye, 2), z = G(R), B = K(G(z)), Se = G(B, !0);
		V(B), xe(), V(z);
		var Ce = K(z, 4), we = K(G(Ce)), Te = G(we, !0);
		V(we);
		var Ee = K(we), De = G(Ee, !0);
		V(Ee), V(Ce);
		var Oe = K(Ce, 4), ke = K(G(Oe)), Ae = G(ke, !0);
		V(ke);
		var je = K(ke), Me = G(je, !0);
		V(je), V(Oe), V(R);
		var Ne = K(R, 2), Pe = G(Ne), Fe = K(Pe, 2);
		V(Ne);
		var Ie = K(Ne, 2), Le = K(G(Ie)), Re = G(Le, !0);
		V(Le);
		var ze = K(Le);
		V(Ie), V(ve);
		var Be = K(ve, 2);
		let Ve;
		var He = G(Be), Ue = G(He), We = G(Ue, !0);
		V(Ue);
		var Ge = K(Ue);
		let Ke;
		var qe = G(Ge);
		V(Ge), V(He);
		var Je = K(He, 2), Ye = (e) => {
			var t = ol(), n = Kt(t);
			Dr(n, 5, () => X(b), (e) => e.id, (e, t) => {
				var n = il();
				let r;
				var i = G(n), a = G(i, !0);
				V(i);
				var o = K(i), s = G(o, !0);
				V(o);
				var c = K(o), l = G(c);
				V(c), V(n), dn(() => {
					r = Rr(n, 1, "signal", null, r, {
						critical: X(t).severity === "critical",
						warning: X(t).severity === "warning"
					}), Q(a, (X(t), Z(() => X(t).title))), Q(s, (X(t), Z(() => X(t).detail))), Q(l, `Next: ${(X(t), Z(() => X(t).action)) ?? ""}`);
				}), pr(e, n);
			}), V(n);
			var r = K(n, 2), i = (e) => {
				var t = al(), n = G(t, !0);
				V(t), dn(() => {
					Wr(t, "aria-expanded", X(oe)), Q(n, (X(oe), X(E), Z(() => X(oe) ? "Show only the first signal" : `Review all ${X(E).alerts.length} signals`)));
				}), rr("click", t, () => W(oe, !X(oe))), pr(e, t);
			};
			Cr(r, (e) => {
				X(E), Z(() => X(E).alerts.length > 1) && e(i);
			}), pr(e, t);
		}, Xe = (e) => {
			pr(e, sl());
		};
		Cr(Je, (e) => {
			X(E), Z(() => X(E).alerts?.length) ? e(Ye) : e(Xe, -1);
		}), V(Be);
		var Ze = K(Be, 2), Qe = G(Ze), $e = K(G(Qe)), et = G($e, !0);
		V($e);
		var nt = K($e), rt = G(nt);
		V(nt), V(Qe);
		var it = K(Qe, 2), at = K(G(it)), ot = G(at, !0);
		V(at), xe(), V(it);
		var st = K(it, 2), ct = K(G(st)), H = G(ct, !0);
		V(ct);
		var lt = K(ct), ut = G(lt, !0);
		V(lt), V(st);
		var dt = K(st, 2), ft = K(G(dt)), pt = G(ft, !0);
		V(ft);
		var mt = K(ft), ht = G(mt);
		V(mt), V(dt), V(Ze);
		var gt = K(Ze, 2), _t = G(gt), vt = G(_t), yt = K(G(vt)), bt = G(yt, !0);
		V(yt), V(vt);
		var xt = K(vt, 2);
		let St;
		Yr(xt, (e) => W(j, e), () => X(j));
		var Ct = K(xt), wt = (e) => {
			pr(e, cl());
		};
		Cr(Ct, (e) => {
			X(D), Z(() => X(D).length < 2) && e(wt);
		}), V(_t);
		var Tt = K(_t, 2), Et = K(G(Tt), 2);
		let Dt;
		Yr(Et, (e) => W(M, e), () => X(M));
		var Ot = K(Et), kt = (e) => {
			pr(e, cl());
		};
		Cr(Ot, (e) => {
			X(te), Z(() => X(te).length < 2) && e(kt);
		}), V(Tt), V(gt), dn((e, t, n, r, i, a, s, c, l, u, d, f, p, m, b, x, S, C, T, O, k, ne, ie, oe, se, j) => {
			Q(ee, e), Q(re, `Actually sent: ${t ?? ""} input + ${n ?? ""} output`), Q(A, r), Q(F, i), Q(de, `${a ?? ""} removed from ${s ?? ""} baseline input tokens`), me = Rr(pe, 1, "", null, me, { healthy: X(v) && X(_) === 0 && !X(ae) }), Q(he, X(y)), Q(_e, `${c ?? ""} requests · p95 ${l ?? ""}`), Q(be, X(w)), Q(Se, u), Q(Te, d), Q(De, f), Q(Ae, p), Q(Me, m), Br(Pe, `width:${X(h)}%`), Br(Fe, `width:${X(g)}%`), Q(Re, b), Q(ze, ` · ${x ?? ""} of ${S ?? ""} optimizer attempts supplied valid before/after token counts.`), Ve = Rr(Be, 1, "attention", null, Ve, { "has-signals": X(E).alerts?.length }), Q(We, (X(E), Z(() => X(E).alerts?.length ? "Needs attention" : "No action needed"))), Ke = Rr(Ge, 1, "status", null, Ke, C), Q(qe, `${(X(E), Z(() => X(E).alerts?.length || 0)) ?? ""} signals`), Q(et, T), Q(rt, `tokens read · ${O ?? ""} written`), Q(ot, k), Q(H, ne), Q(ut, (X(o), Z(() => X(o)[0]?.model || "no model activity"))), Q(pt, ie), Q(ht, `tool calls · ${oe ?? ""} streamed requests`), Q(bt, X(w)), St = Rr(xt, 1, "plot", null, St, { empty: X(D).length < 2 }), Wr(xt, "aria-label", se), Dt = Rr(Et, 1, "plot", null, Dt, { empty: X(te).length < 2 }), Wr(Et, "aria-label", j);
		}, [
			() => (X(c), Z(() => I(X(c)))),
			() => (X(i), Z(() => I(X(i).tokens_in))),
			() => (X(i), Z(() => I(X(i).tokens_out))),
			() => (X(l), Z(() => I(X(l)))),
			() => (X(p), Z(() => X(p) == null ? "not measured" : `${X(p).toFixed(1)}%`)),
			() => (X(l), Z(() => I(X(l)))),
			() => (X(f), Z(() => I(X(f)))),
			() => (X(T), Z(() => I(X(T).totals?.requests))),
			() => (X(T), Z(() => ce(X(T).latency_ms?.p95))),
			() => (X(f), Z(() => I(X(f)))),
			() => (X(i), Z(() => I(X(i).tokens_in))),
			() => (X(f), X(h), Z(() => X(f) ? `${X(h).toFixed(1)}% of baseline` : "not observed")),
			() => (X(l), Z(() => I(X(l)))),
			() => (X(f), X(g), Z(() => X(f) ? `${X(g).toFixed(1)}% verified reduction` : "not measured")),
			() => (X(m), Z(() => X(m) == null ? "not measured" : `${X(m).toFixed(0)}%`)),
			() => (X(u), Z(() => I(X(u)))),
			() => (X(d), Z(() => I(X(d)))),
			() => ({
				ok: !X(E).alerts?.length,
				warn: X(E).alerts?.some((e) => e.severity === "warning"),
				fail: X(E).alerts?.some((e) => e.severity === "critical")
			}),
			() => (X(a), Z(() => I(X(a).cache_read_tokens))),
			() => (X(a), Z(() => I(X(a).cache_write_tokens))),
			() => (X(a), Z(() => le(X(a).cost_est_usd))),
			() => (X(s), Z(() => I(X(s)))),
			() => (X(a), Z(() => I(X(a).tool_calls))),
			() => (X(a), Z(() => I(X(a).streams))),
			() => (X(w), X(i), Z(() => `Token flow over ${X(w)}: ${I(X(i).tokens_in)} input and ${I(X(i).tokens_out)} output tokens.`)),
			() => (X(w), X(l), Z(() => `Savings over ${X(w)}: ${I(X(l))} verified tokens saved.`))
		]), pr(e, t);
	}, ze = (e) => {
		var t = hl(), n = Kt(t), r = G(n), i = K(G(r)), a = G(i);
		V(i), xe(), V(r);
		var o = K(r, 2), s = K(G(o)), c = G(s, !0);
		V(s);
		var f = K(s), p = G(f);
		V(f), V(o);
		var h = K(o, 2), g = K(G(h)), _ = G(g, !0);
		V(g);
		var v = K(g), y = G(v, !0);
		V(v), V(h), V(n);
		var b = K(n, 4), x = G(b), C = (e) => {
			var t = fr();
			Dr(Kt(t), 1, () => X(S), (e) => e.name, (e, t) => {
				let n = /* @__PURE__ */ nt(() => (X(t), Z(() => fe(X(t).name)))), r = /* @__PURE__ */ nt(() => (X(t), Z(() => Number(X(t).measurement?.attempts || 0)))), i = /* @__PURE__ */ nt(() => (X(t), Z(() => Number(X(t).measurement?.measured_attempts || 0)))), a = /* @__PURE__ */ nt(() => X(r) ? X(i) / X(r) * 100 : null);
				var o = pl();
				let s;
				var c = G(o), l = G(c), u = G(l), d = G(u, !0);
				V(u);
				var f = K(u), p = G(f, !0);
				V(f), V(l);
				var m = K(l, 2);
				let h;
				var g = G(m, !0);
				V(m), V(c);
				var _ = K(c, 2), v = G(_), y = K(G(v)), b = G(y), x = K(b), S = (e) => {
					pr(e, ul());
				};
				Cr(x, (e) => {
					X(t), Z(() => X(t).measurement) && e(S);
				}), V(y), V(v);
				var C = K(v, 2), w = K(G(C));
				let T;
				var E = G(w), D = K(E), O = (e) => {
					pr(e, ul());
				};
				Cr(D, (e) => {
					X(t), Z(() => X(t).reported?.saved != null) && e(O);
				}), V(w), V(C), V(_);
				var ee = K(_, 2), te = G(ee), k = K(G(te)), ne = G(k, !0);
				V(k), V(te);
				var re = K(te, 2), ie = G(re);
				V(re);
				var ae = K(re, 2), oe = G(ae);
				V(ae), V(ee);
				var se = K(ee, 2), A = G(se), j = K(G(A)), M = G(j, !0);
				V(j), V(A);
				var N = K(A, 2), P = K(G(N)), F = G(P, !0);
				V(P), V(N);
				var ue = K(N, 2), de = K(G(ue)), pe = G(de, !0);
				V(de), V(ue);
				var me = K(ue, 2), he = K(G(me)), ge = G(he, !0);
				V(he), V(me), V(se);
				var _e = K(se, 2), ve = (e) => {
					var n = dl(), r = G(n);
					V(n), dn((e) => Q(r, `Top bypass: ${(X(t), Z(() => X(t).measurement.bypass_reasons[0].reason)) ?? ""} (${e ?? ""})`), [() => (X(t), Z(() => I(X(t).measurement.bypass_reasons[0].count)))]), pr(e, n);
				};
				Cr(_e, (e) => {
					X(t), Z(() => X(t).measurement?.bypass_reasons?.length) && e(ve);
				});
				var ye = K(_e, 2), L = G(ye), be = G(L, !0);
				V(L);
				var R = K(L, 2), z = (e) => {
					var t = fl(), r = G(t);
					xe(), V(t), dn(() => {
						Wr(t, "href", (Qn(X(n)), Z(() => X(n).href))), Q(r, `${(Qn(X(n)), Z(() => X(n).label)) ?? ""} `);
					}), pr(e, t);
				};
				Cr(R, (e) => {
					X(n) && e(z);
				}), V(ye), V(o), dn((e, n, r, i, c, l, u, f, _, v, y) => {
					s = Rr(o, 1, "optimizer-card", null, s, { down: X(t).snapshot && !X(t).snapshot.reachable }), Q(d, (X(t), Z(() => X(t).name))), Q(p, (X(t), Z(() => X(t).snapshot?.reachable ? X(t).reported?.saved == null ? "Connected; native counters unavailable" : "Connected and reporting" : X(t).snapshot ? "Not reachable at last check" : "No health snapshot in this window"))), h = Rr(m, 1, "status", null, h, {
						ok: X(t).snapshot?.reachable,
						warn: !X(t).snapshot,
						fail: X(t).snapshot && !X(t).snapshot.reachable
					}), Q(g, (X(t), Z(() => X(t).snapshot?.reachable ? "reachable" : X(t).snapshot ? "unreachable" : "not checked"))), Q(b, `${e ?? ""} `), T = Rr(w, 1, "", null, T, { unavailable: X(t).reported?.saved == null }), Q(E, `${n ?? ""} `), Q(ne, r), Br(ie, `width:${X(a) || 0}%`), Q(oe, `${i ?? ""} verified · ${c ?? ""} estimated · ${l ?? ""} unavailable`), Q(M, u), Q(F, f), Q(pe, _), Q(ge, v), Q(be, y);
				}, [
					() => (X(t), Z(() => X(t).measurement ? I(X(t).measurement.measured_tokens_saved) : "no attempts")),
					() => (X(t), Z(() => X(t).reported?.saved == null ? "not reported" : I(X(t).reported.saved))),
					() => (Qn(X(a)), Z(() => X(a) == null ? "not measured" : `${X(a).toFixed(0)}%`)),
					() => (Qn(X(i)), Z(() => I(X(i)))),
					() => (X(t), Z(() => I(X(t).measurement?.estimated_attempts))),
					() => (X(t), Z(() => I(X(t).measurement?.unavailable_attempts))),
					() => (X(t), Z(() => X(t).reported?.rate == null ? "not reported" : `${Number(X(t).reported.rate).toFixed(1)}%`)),
					() => (X(t), Z(() => X(t).reported?.requests == null ? "not reported" : I(X(t).reported.requests))),
					() => (X(t), Z(() => X(t).measurement?.optimizer_latency_avg_ms == null ? "not measured" : ce(X(t).measurement.optimizer_latency_avg_ms))),
					() => (X(t), Z(() => X(t).reported?.usd == null ? "not reported" : le(X(t).reported.usd))),
					() => (X(t), Z(() => X(t).snapshot ? `Checked ${(/* @__PURE__ */ new Date(Number(X(t).snapshot.ts || 0) * 1e3)).toLocaleString()}` : "No health snapshot yet"))
				]), pr(e, o);
			}), pr(e, t);
		}, w = (e) => {
			pr(e, ml());
		};
		Cr(x, (e) => {
			X(S), Z(() => X(S).length) ? e(C) : e(w, -1);
		}), V(b), dn((e, t, n, r) => {
			Q(a, `${e ?? ""} tokens`), Q(c, t), Q(p, `${n ?? ""} of ${r ?? ""} attempts verified`), Q(_, (X(ee), Z(() => X(ee).durable ? "Durable" : "Unavailable"))), Q(y, (X(ee), Z(() => X(ee).durable ? "Measurements survive restarts" : X(ee).note || "SQLite metrics unavailable")));
		}, [
			() => (X(l), Z(() => I(X(l)))),
			() => (X(m), Z(() => X(m) == null ? "not measured" : `${X(m).toFixed(0)}%`)),
			() => (X(u), Z(() => I(X(u)))),
			() => (X(d), Z(() => I(X(d))))
		]), pr(e, t);
	}, Be = (e) => {
		var t = xl(), n = G(t), r = G(n), i = K(G(r));
		let a;
		var s = G(i, !0);
		V(i), V(r);
		var c = K(r, 2), l = G(c);
		V(c);
		var u = K(c, 2), d = G(u);
		V(u), V(n);
		var f = K(n, 2), p = G(f), m = K(G(p)), h = G(m, !0);
		V(m), V(p);
		var g = K(p, 2), _ = (e) => {
			var t = _l();
			Dr(t, 5, () => X(o), (e) => e.model, (e, t) => {
				var n = gl(), r = G(n), i = G(r, !0);
				V(r);
				var a = K(r), o = G(a);
				V(a);
				var s = K(a), c = G(s);
				V(s), V(n), dn((e, n, r) => {
					Q(i, (X(t), Z(() => X(t).model))), Q(o, `${e ?? ""} requests`), Q(c, `${n ?? ""} tokens · ${r ?? ""}`);
				}, [
					() => (X(t), Z(() => I(X(t).requests))),
					() => (X(t), Z(() => I(Number(X(t).tokens_in || 0) + Number(X(t).tokens_out || 0)))),
					() => (X(t), Z(() => le(X(t).cost_usd)))
				]), pr(e, n);
			}), V(t), pr(e, t);
		}, v = (e) => {
			pr(e, vl());
		};
		Cr(g, (e) => {
			X(o), Z(() => X(o).length) ? e(_) : e(v, -1);
		}), V(f);
		var y = K(f, 2), b = G(y), x = K(G(b)), S = G(x);
		V(x), V(b);
		var C = K(b, 2), T = (e) => {
			var t = _l();
			Dr(t, 5, () => X(k), (e) => e.session_id, (e, t) => {
				var n = yl(), r = G(n), i = G(r, !0);
				V(r);
				var a = K(r), o = G(a);
				V(a);
				var s = K(a, 2), c = G(s);
				V(s), V(n), dn((e, n, a, s) => {
					Wr(r, "title", (X(t), Z(() => X(t).session_id))), Q(i, (X(t), Z(() => X(t).last_model || "unknown model"))), Q(o, `${e ?? ""} requests`), Q(c, `${(X(t), Z(() => X(t).chain_mode || "direct")) ?? ""} · ${n ?? ""} processed
                · ${a ?? ""} verified saved · ${s ?? ""}`);
				}, [
					() => (X(t), Z(() => I(X(t).requests))),
					() => (X(t), Z(() => I(Number(X(t).tokens_in || 0) + Number(X(t).tokens_out || 0)))),
					() => (X(t), Z(() => I(X(t).measured_tokens_saved))),
					() => (X(t), Z(() => le(X(t).cost_usd)))
				]), pr(e, n);
			}), V(t), pr(e, t);
		}, E = (e) => {
			pr(e, bl());
		};
		Cr(C, (e) => {
			X(k), Z(() => X(k).length) ? e(T) : e(E, -1);
		}), V(y), V(t), dn((e, t, n) => {
			a = Rr(i, 1, "status", null, a, {
				ok: X(ne).durable,
				warn: !X(ne).durable
			}), Q(s, (X(ne), Z(() => X(ne).durable ? "durable" : "fallback"))), Q(l, `${e ?? ""} requests stored`), Q(d, `${t ?? ""} SQLite · ${n ?? ""} day retention`), Q(h, X(w)), Q(S, `${(X(k), Z(() => X(k).length)) ?? ""} shown`);
		}, [
			() => (X(ne), Z(() => I(X(ne).requests))),
			() => (X(ne), Z(() => ue(X(ne).db_size_bytes))),
			() => (X(ne), Z(() => I(X(ne).retention_days)))
		]), pr(e, t);
	};
	Cr(Le, (e) => {
		X(A) === "overview" ? e(Re) : X(A) === "optimizers" ? e(ze, 1) : e(Be, -1);
	}), V(R), dn((e) => {
		Q(Ce, X(A) === "overview" ? "Token efficiency overview" : X(A) === "optimizers" ? "Optimizer details" : "Persisted activity"), Ee = Rr(Te, 1, "status", null, Ee, {
			ok: !X(re) && !X(ie),
			warn: X(re) || !!X(ie) && X(v),
			fail: !!X(ie) && !X(v)
		}), Q(De, e), Oe.disabled = X(re), Wr(Pe, "aria-selected", X(A) === "overview"), Wr(Fe, "aria-selected", X(A) === "optimizers"), Wr(Ie, "aria-selected", X(A) === "activity");
	}, [() => (X(ie), X(re), X(se), Z(() => X(ie) ? "partial data" : X(re) ? "refreshing" : X(se) ? `updated ${X(se).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	})}` : "ready"))]), rr("click", Oe, L), rr("click", Pe, () => ye("overview")), rr("click", Fe, () => ye("optimizers")), rr("click", Ie, () => ye("activity")), pr(e, R), Ae();
}
ir(["click"]);
//#endregion
//#region src/main.js
var wl = "svelte-uplot", Tl = document.querySelector("#svelte-overview");
Tl && (Tl.replaceChildren(), gr(Cl, { target: Tl }));
//#endregion
export { Cl as App, wl as dashboardBuild };
