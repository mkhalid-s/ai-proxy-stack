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
function ce() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function le(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function I(e) {
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
	return z(/* @__PURE__ */ Wt(R));
}
function V(e) {
	if (L) {
		if (/* @__PURE__ */ Wt(R) !== null) throw ve(), n;
		R = e;
	}
}
function xe(e = 1) {
	if (L) {
		for (var t = e, n = R; t--;) n = /* @__PURE__ */ Wt(n);
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
		var i = /* @__PURE__ */ Wt(n);
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
var H = null;
function De(e) {
	H = e;
}
function Oe(t, n = !1, r) {
	H = {
		p: H,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: X,
		l: e && !n ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function ke(e) {
	var t = H, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) nn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, H = t.p, e ?? {};
}
function Ae() {
	return !e || H !== null && H.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var je = [];
function Me() {
	var e = je;
	je = [], v(e);
}
function Ne(e) {
	if (je.length === 0 && !dt) {
		var t = je;
		queueMicrotask(() => {
			t === je && Me();
		});
	}
	je.push(e);
}
function Pe() {
	for (; je.length > 0;) Me();
}
function Fe(e) {
	var t = X;
	if (t === null) return Y.f |= ie, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ie(e, t);
}
function Ie(e, t) {
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
var Le = ~(x | S | b);
function Re(e, t) {
	e.f = e.f & Le | t;
}
function ze(e) {
	e.f & 512 || e.deps === null ? Re(e, b) : Re(e, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Be(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= k, Be(t.deps));
}
function Ve(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Be(e.deps), Re(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function He(e) {
	var t = Y, n = X;
	kn(null), An(null);
	try {
		return e();
	} finally {
		kn(t), An(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ue(e) {
	let t = 0, n = At(0), r;
	return () => {
		$t() && (Z(n), ln(() => (t === 0 && (r = Q(() => e(() => Pt(n)))), t += 1, () => {
			Ne(() => {
				--t, t === 0 && (r?.(), r = void 0, Pt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var We = D | O;
function Ge(e, t, n, r) {
	new Ke(e, t, n, r);
}
var Ke = class {
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
	#h = Ue(() => (this.#m = At(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = X;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = X.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = dn(() => {
			if (L) {
				let e = this.#t;
				B();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, We), L && (this.#e = R);
	}
	#g() {
		try {
			this.#a = fn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Ne(r), t && (this.#s = fn(() => {
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
			t = !0, n && ge(), this.#s !== null && yn(this.#s, () => {
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
					Ie(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = fn(() => e(this.#e)), Ne(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ht();
			e.append(t), this.#a = this.#S(() => fn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, yn(this.#o, () => {
				this.#o = null;
			}), this.#x(U));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = fn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Cn(this.#a, e);
				let t = this.#n.pending;
				this.#o = fn(() => t(this.#e));
			} else this.#x(U);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ve(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = X, n = Y, r = H;
		An(this.#i), kn(this.#i), De(this.#i.ctx);
		try {
			return _t.ensure(), e();
		} catch (e) {
			return Fe(e), null;
		} finally {
			An(t), kn(n), De(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && yn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ne(() => {
			this.#d = !1, this.#m && Mt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		U?.is_fork ? (this.#a && U.skip_effect(this.#a), this.#o && U.skip_effect(this.#o), this.#s && U.skip_effect(this.#s), U.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (gn(this.#a), null), this.#o &&= (gn(this.#o), null), this.#s &&= (gn(this.#s), null), L && (z(this.#t), xe(), z(Se()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return fn(() => {
						var r = X;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Ie(e, this.#i.parent), null;
				}
			}));
		};
		Ne(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Ie(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Ie(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function qe(e, t, n, r) {
	let i = Ae() ? Ze : tt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = X, c = Je(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Ie(e, s);
			}
			Ye();
		}
	}
	var d = Xe();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ $e(e))).then(u).catch((e) => Ie(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Ye();
	}) : f();
}
function Je() {
	var e = X, t = Y, n = H, r = U;
	return function(i = !0) {
		An(e), kn(t), De(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Ye(e = !0) {
	An(null), kn(null), De(null), e && U?.deactivate();
}
function Xe() {
	var e = X, t = e.b, n = U, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ze(e) {
	var t = 2 | x;
	return X !== null && (X.f |= O), {
		ctx: H,
		deps: null,
		effects: null,
		equals: we,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: r,
		wv: 0,
		parent: X,
		ac: null
	};
}
var Qe = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function $e(e, t, n) {
	let i = X;
	i === null && ce();
	var a = void 0, o = At(r), s = !Y, c = /* @__PURE__ */ new Set();
	return cn(() => {
		var t = X, n = y();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== N && n.reject(e);
			}).finally(Ye);
		} catch (e) {
			n.reject(e), Ye();
		}
		var r = U;
		if (s) {
			if (t.f & 32768) var l = Xe();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(Qe);
			else for (let e of c.values()) e.reject(Qe);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== Qe && (r.activate(), t ? (o.f |= ie, Mt(o, t)) : (o.f & 8388608 && (o.f ^= ie), Mt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), en(() => {
		for (let e of c) e.reject(Qe);
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
function et(e) {
	let t = /* @__PURE__ */ Ze(e);
	return Mn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function tt(e) {
	let t = /* @__PURE__ */ Ze(e);
	return t.equals = Ee, t;
}
function nt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) gn(t[n]);
	}
}
function rt(e) {
	var t, n = X, i = e.parent;
	if (!En && i !== null && e.v !== r && i.f & 24576) return _e(), e.v;
	An(i);
	try {
		e.f &= ~k, nt(e), t = Wn(e);
	} finally {
		An(n);
	}
	return t;
}
function it(e) {
	var t = rt(e);
	if (!e.equals(t) && (e.wv = Vn(), (!U?.is_fork || e.deps === null) && (U === null ? e.v = t : (U.capture(e, t, !0), ct?.capture(e, t, !0)), e.deps === null))) {
		Re(e, b);
		return;
	}
	En || (lt === null ? ze(e) : ($t() || U?.is_fork) && lt.set(e, t));
}
function at(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && He(() => {
		t.ac.abort(N), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Kn(t, 0), mn(t));
}
function ot(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && qn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var st = null, U = null, ct = null, lt = null, ut = null, dt = !1, ft = !1, pt = null, mt = null, ht = 0, gt = 1, _t = class e {
	id = gt++;
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
			for (var r of n.d) Re(r, x), t(r);
			for (r of n.m) Re(r, S), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, ht++ > 1e3 && (this.#x(), yt());
		for (let e of this.#u) this.#d.delete(e), Re(e, x), this.schedule(e);
		for (let e of this.#d) Re(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = pt = [], r = [], i = mt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Et(e), this.#h() || this.discard(), t;
		}
		if (U = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (pt = null, mt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Tt(e, t);
			i.length > 0 && U.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), ct = this, xt(r), xt(n), ct = null, this.#s?.resolve();
		var s = U;
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
				a ? r.f ^= b : i & 4 ? t.push(r) : Hn(r) && (i & 16 && this.#d.add(r), qn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Re(i, x), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), U = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ve(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== r && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), lt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		U = this;
	}
	deactivate() {
		U = null, lt = null;
	}
	flush() {
		try {
			ft = !0, U = this, this.#g();
		} finally {
			ht = 0, ut = null, pt = null, mt = null, ft = !1, U = null, lt = null, Ot.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Qe);
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
		this.#m || (this.#m = !0, Ne(() => {
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
		if (U === null) {
			let t = U = new e();
			!ft && !dt && Ne(() => {
				t.#e || t.flush();
			});
		}
		return U;
	}
	apply() {
		lt = null;
	}
	schedule(e) {
		if (ut = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (pt !== null && t === X && (Y === null || !(Y.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? st = e : t.#t = e, this.linked = !1;
		}
	}
};
function vt(e) {
	var t = dt;
	dt = !0;
	try {
		var n;
		for (e && (U !== null && !U.is_fork && U.flush(), n = e());;) {
			if (Pe(), U === null) return n;
			U.flush();
		}
	} finally {
		dt = t;
	}
}
function yt() {
	try {
		fe();
	} catch (e) {
		Ie(e, ut);
	}
}
var bt = null;
function xt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Hn(r) && (bt = /* @__PURE__ */ new Set(), qn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && vn(r), bt?.size > 0)) {
				Ot.clear();
				for (let e of bt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) bt.has(n) && (bt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || qn(n);
					}
				}
				bt.clear();
			}
		}
		bt = null;
	}
}
function St(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? St(i, t, n, r) : e & 4194320 && !(e & 2048) && Ct(i, t, r) && (Re(i, x), wt(i));
	}
}
function Ct(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (s.call(t, r)) return !0;
		if (r.f & 2 && Ct(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function wt(e) {
	U.schedule(e);
}
function Tt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Re(e, b);
		for (var n = e.first; n !== null;) Tt(n, t), n = n.next;
	}
}
function Et(e) {
	Re(e, b);
	for (var t = e.first; t !== null;) Et(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Dt = /* @__PURE__ */ new Set(), Ot = /* @__PURE__ */ new Map(), kt = !1;
function At(e, t) {
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
function jt(e, t) {
	let n = At(e, t);
	return Mn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function W(t, n = !1, r = !0) {
	let i = At(t);
	return n || (i.equals = Ee), e && r && H !== null && H.l !== null && (H.l.s ??= []).push(i), i;
}
function G(e, t, n = !1) {
	return Y !== null && (!On || Y.f & 131072) && Ae() && Y.f & 4325394 && (jn === null || !jn.has(e)) && he(), Mt(e, n ? It(t) : t, mt);
}
function Mt(e, t, n = null) {
	if (!e.equals(t)) {
		Ot.set(e, En ? t : e.v);
		var r = _t.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && rt(t), lt === null && ze(t);
		}
		e.wv = Vn(), Ft(e, x, n), Ae() && X !== null && X.f & 1024 && !(X.f & 96) && (Fn === null ? In([e]) : Fn.push(e)), !r.is_fork && Dt.size > 0 && !kt && Nt();
	}
	return t;
}
function Nt() {
	kt = !1;
	for (let e of Dt) {
		e.f & 1024 && Re(e, S);
		let t;
		try {
			t = Hn(e);
		} catch {
			t = !0;
		}
		t && qn(e);
	}
	Dt.clear();
}
function Pt(e) {
	G(e, e.v + 1);
}
function Ft(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ae(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === X)) {
			var l = (c & x) === 0;
			if (l && Re(s, t), c & 131072) Dt.add(s);
			else if (c & 2) {
				var u = s;
				lt?.delete(u), c & 65536 || (c & 512 && (X === null || !(X.f & 2097152)) && (s.f |= k), Ft(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && bt !== null && bt.add(d), n === null ? wt(d) : n.push(d);
			}
		}
	}
}
function It(e) {
	if (typeof e != "object" || !e || ae in e) return e;
	let t = m(e);
	if (t !== f && t !== p) return e;
	var n = /* @__PURE__ */ new Map(), i = a(e), o = /* @__PURE__ */ jt(0), s = null, c = zn, l = (e) => {
		if (zn === c) return e();
		var t = Y, n = zn;
		kn(null), Bn(c);
		var r = e();
		return kn(t), Bn(n), r;
	};
	return i && n.set("length", /* @__PURE__ */ jt(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && pe();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ jt(r.value, s);
				return n.set(t, e), e;
			}) : G(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ jt(r, s));
					n.set(t, e), Pt(o);
				}
			} else G(i, r), Pt(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ae) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || u(t, i)?.writable) && (o = l(() => /* @__PURE__ */ jt(It(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
				var d = Z(o);
				return d === r ? void 0 : d;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = n.get(t);
				a && (i.value = Z(a));
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
			return (i !== void 0 || X !== null && (!a || u(e, t)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ jt(a ? It(e[t]) : r, s)), n.set(t, i)), Z(i) === r) ? !1 : a;
		},
		set(e, t, a, c) {
			var d = n.get(t), f = t in e;
			if (i && t === "length") for (var p = a; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ jt(r, s)), n.set(p + "", m)) : G(m, r);
			}
			if (d === void 0) (!f || u(e, t)?.writable) && (d = l(() => /* @__PURE__ */ jt(void 0, s)), G(d, It(a)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = l(() => It(a));
				G(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, a), !f) {
				if (i && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && G(_, v + 1);
				}
				Pt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Z(o);
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
var Lt, Rt, zt, Bt;
function Vt() {
	if (Lt === void 0) {
		Lt = window, Rt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		zt = u(t, "firstChild").get, Bt = u(t, "nextSibling").get, h(e) && (e[A] = void 0, e[se] = null, e[j] = void 0, e.__e = void 0), h(n) && (n[M] = void 0);
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
function K(e, t) {
	if (!L) return /* @__PURE__ */ Ut(e);
	var n = /* @__PURE__ */ Ut(R);
	if (n === null) n = R.appendChild(Ht());
	else if (t && n.nodeType !== 3) {
		var r = Ht();
		return n?.before(r), z(r), r;
	}
	return t && Yt(n), z(n), n;
}
function Gt(e, t = !1) {
	if (!L) {
		var n = /* @__PURE__ */ Ut(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wt(n) : n;
	}
	if (t) {
		if (R?.nodeType !== 3) {
			var r = Ht();
			return R?.before(r), z(r), r;
		}
		Yt(R);
	}
	return R;
}
function q(e, t = 1, n = !1) {
	let r = L ? R : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Wt(r);
	if (!L) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ht();
			return r === null ? i?.after(a) : r.before(a), z(a), a;
		}
		Yt(r);
	}
	return z(r), r;
}
function Kt(e) {
	e.textContent = "";
}
function qt() {
	return !1;
}
function Jt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Yt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Xt(e) {
	X === null && (Y === null && de(e), ue()), En && I(e);
}
function Zt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t) {
	var n = X;
	n !== null && n.f & 8192 && (e |= C);
	var r = {
		ctx: H,
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
	U?.register_created_effect(r);
	var i = r;
	if (e & 4) pt === null ? _t.ensure().schedule(r) : pt.push(r);
	else if (t !== null) {
		try {
			qn(r);
		} catch (e) {
			throw gn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= D));
	}
	if (i !== null && (i.parent = n, n !== null && Zt(i, n), Y !== null && Y.f & 2 && !(e & 64))) {
		var a = Y;
		(a.effects ??= []).push(i);
	}
	return r;
}
function $t() {
	return Y !== null && !On;
}
function en(e) {
	let t = Qt(8, null);
	return Re(t, b), t.teardown = e, t;
}
function tn(e) {
	Xt("$effect");
	var t = X.f;
	if (!Y && t & 32 && H !== null && !H.i) {
		var n = H;
		(n.e ??= []).push(e);
	} else return nn(e);
}
function nn(e) {
	return Qt(4 | ee, e);
}
function rn(e) {
	return Xt("$effect.pre"), Qt(8 | ee, e);
}
function an(e) {
	_t.ensure();
	let t = Qt(64 | O, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? yn(t, () => {
			gn(t), n(void 0);
		}) : (gn(t), n(void 0));
	});
}
function on(e) {
	return Qt(4, e);
}
function J(e, t) {
	var n = H, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = ln(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = X;
			try {
				An(n.parent), Q(t);
			} finally {
				An(n);
			}
		}
	});
}
function sn() {
	var e = H;
	ln(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && Re(n, S), Hn(n) && qn(n), t.ran = !1;
		}
	});
}
function cn(e) {
	return Qt(re | O, e);
}
function ln(e, t = 0) {
	return Qt(8 | t, e);
}
function un(e, t = [], n = [], r = []) {
	qe(r, t, n, (t) => {
		Qt(8, () => {
			e(...t.map(Z));
		});
	});
}
function dn(e, t = 0) {
	return Qt(16 | t, e);
}
function fn(e) {
	return Qt(32 | O, e);
}
function pn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = En, n = Y;
		Dn(!0), kn(null);
		try {
			t.call(null);
		} finally {
			Dn(e), kn(n);
		}
	}
}
function mn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && He(() => {
			e.abort(N);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : gn(n, t), n = r;
	}
}
function hn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || gn(t), t = n;
	}
}
function gn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (_n(e.nodes.start, e.nodes.end), n = !0), e.f |= E, mn(e, t && !n), Kn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	pn(e), e.f ^= E, e.f |= w;
	var i = e.parent;
	i !== null && i.first !== null && vn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function _n(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Wt(e);
		e.remove(), e = n;
	}
}
function vn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function yn(e, t, n = !0) {
	var r = [];
	bn(e, r, !0);
	var i = () => {
		n && gn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function bn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				bn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function xn(e) {
	Sn(e, !0);
}
function Sn(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (Re(e, x), _t.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			Sn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Cn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Wt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var wn = null, Tn = !1, En = !1;
function Dn(e) {
	En = e;
}
var Y = null, On = !1;
function kn(e) {
	Y = e;
}
var X = null;
function An(e) {
	X = e;
}
var jn = null;
function Mn(e) {
	Y !== null && (jn ??= /* @__PURE__ */ new Set()).add(e);
}
var Nn = null, Pn = 0, Fn = null;
function In(e) {
	Fn = e;
}
var Ln = 1, Rn = 0, zn = Rn;
function Bn(e) {
	zn = e;
}
function Vn() {
	return ++Ln;
}
function Hn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~k), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Hn(a) && it(a), a.wv > e.wv) return !0;
		}
		t & 512 && lt === null && Re(e, b);
	}
	return !1;
}
function Un(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(jn !== null && jn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Un(a, t, !1) : t === a && (n ? Re(a, x) : a.f & 1024 && Re(a, S), wt(a));
	}
}
function Wn(e) {
	var t = Nn, n = Pn, r = Fn, i = Y, a = jn, o = H, s = On, c = zn, l = e.f;
	Nn = null, Pn = 0, Fn = null, Y = l & 96 ? null : e, jn = null, De(e.ctx), On = !1, zn = ++Rn, e.ac !== null && (He(() => {
		e.ac.abort(N);
	}), e.ac = null);
	try {
		e.f |= ne;
		var u = e.fn, d = u();
		e.f |= T;
		var f = e.deps, p = U?.is_fork;
		if (Nn !== null) {
			var m;
			if (p || Kn(e, Pn), f !== null && Pn > 0) for (f.length = Pn + Nn.length, m = 0; m < Nn.length; m++) f[Pn + m] = Nn[m];
			else e.deps = f = Nn;
			if ($t() && e.f & 512) for (m = Pn; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Pn < f.length && (Kn(e, Pn), f.length = Pn);
		if (Ae() && Fn !== null && !On && f !== null && !(e.f & 6146)) for (m = 0; m < Fn.length; m++) Un(Fn[m], e);
		if (i !== null && i !== e) {
			if (Rn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Rn;
			if (t !== null) for (let e of t) e.rv = Rn;
			Fn !== null && (r === null ? r = Fn : r.push(...Fn));
		}
		return e.f & 8388608 && (e.f ^= ie), d;
	} catch (e) {
		return Fe(e);
	} finally {
		e.f ^= ne, Nn = t, Pn = n, Fn = r, Y = i, jn = a, De(o), On = s, zn = c;
	}
}
function Gn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = o.call(n, e);
		if (i !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[i] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Nn === null || !s.call(Nn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~k), c.v !== r && ze(c), c.ac !== null && He(() => {
			c.ac.abort(N), c.ac = null, Re(c, x);
		}), at(c), Kn(c, 0);
	}
}
function Kn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Gn(e, n[r]);
}
function qn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Re(e, b);
		var n = X, r = Tn;
		X = e, Tn = (t & 96) == 0;
		try {
			t & 16777232 ? hn(e) : mn(e), pn(e);
			var i = Wn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Ln;
		} finally {
			Tn = r, X = n;
		}
	}
}
async function Jn() {
	await Promise.resolve(), vt();
}
function Z(e) {
	var t = (e.f & 2) != 0;
	if (wn?.add(e), Y !== null && !On && !(X !== null && X.f & 16384) && (jn === null || !jn.has(e))) {
		var n = Y.deps;
		if (Y.f & 2097152) e.rv < Rn && (e.rv = Rn, Nn === null && n !== null && n[Pn] === e ? Pn++ : Nn === null ? Nn = [e] : Nn.push(e));
		else {
			Y.deps ??= [], s.call(Y.deps, e) || Y.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [Y] : s.call(r, Y) || r.push(Y);
		}
	}
	if (En && Ot.has(e)) return Ot.get(e);
	if (t) {
		var i = e;
		if (En) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Xn(i)) && (a = rt(i)), Ot.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !On && Y !== null && (Tn || (Y.f & 512) != 0), c = (i.f & T) === 0;
		Hn(i) && (o && (i.f |= 512), it(i)), o && !c && (ot(i), Yn(i));
	}
	if (lt?.has(e)) return lt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Yn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ot(t), Yn(t));
}
function Xn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Ot.has(t) || t.f & 2 && Xn(t)) return !0;
	return !1;
}
function Q(e) {
	var t = On;
	try {
		return On = !0, e();
	} finally {
		On = t;
	}
}
function Zn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ae in e) Qn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ae in n && Qn(n);
		}
	}
}
function Qn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Qn(e[n], t);
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
var $n = Symbol("events"), er = /* @__PURE__ */ new Set(), tr = /* @__PURE__ */ new Set();
function nr(e, t, n) {
	(t[$n] ??= {})[e] = n;
}
function rr(e) {
	for (var t = 0; t < e.length; t++) er.add(e[t]);
	for (var n of tr) n(e);
}
var ir = null;
function ar(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ir = e;
	var o = 0, s = ir === e && e[$n];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[$n] = t;
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
		var d = Y, f = X;
		kn(null), An(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[$n]?.[r];
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
			e[$n] = t, delete e.currentTarget, kn(d), An(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var or = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function sr(e) {
	return or?.createHTML(e) ?? e;
}
function cr(e) {
	var t = Jt("template");
	return t.innerHTML = sr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function lr(e, t) {
	var n = X;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ur(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (L) return lr(R, null), R;
		i === void 0 && (i = cr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Ut(i)));
		var t = r || Rt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Ut(t), s = t.lastChild;
			lr(o, s);
		} else lr(t, t);
		return t;
	};
}
function dr() {
	if (L) return lr(R, null), R;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Ht();
	return e.append(t, n), lr(t, n), e;
}
function fr(e, t) {
	if (L) {
		var n = X;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = R), B();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var pr = ["touchstart", "touchmove"];
function mr(e) {
	return pr.includes(e);
}
function $(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[M] ??= e.nodeValue) && (e[M] = n, e.nodeValue = `${n}`);
}
function hr(e, t) {
	return _r(e, t);
}
var gr = /* @__PURE__ */ new Map();
function _r(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	Vt();
	var u = void 0, d = an(() => {
		var s = r ?? t.appendChild(Ht());
		Ge(s, { pending: () => {} }, (t) => {
			Oe({});
			var r = H;
			if (o && (r.c = o), a && (i.$$events = a), L && lr(t, null), u = e(t, i) || {}, L && (X.nodes.end = R, R === null || R.nodeType !== 8 || R.data !== "]")) throw ve(), n;
			ke();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = mr(r);
					for (let e of [t, document]) {
						var a = gr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), gr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ar, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(er)), tr.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = gr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, ar), n.delete(e), n.size === 0 && gr.delete(r)) : n.set(e, i);
			}
			tr.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return vr.set(u, d), u;
}
var vr = /* @__PURE__ */ new WeakMap(), yr = class {
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
			if (n) xn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (xn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (gn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Cn(r, t), t.append(Ht()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else gn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), yn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (gn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = U, r = qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ht();
			i.append(a), this.#n.set(e, {
				effect: fn(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, fn(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else L && (this.anchor = R), this.#a(n);
	}
};
function br(t) {
	H === null && F("onMount"), e && H.l !== null ? xr(H).m.push(t) : tn(() => {
		let e = Q(t);
		if (typeof e == "function") return e;
	});
}
function xr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Sr(e, t, n = !1) {
	var r;
	L && (r = R, B());
	var i = new yr(e), a = n ? D : 0;
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
	dn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Cr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		yn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					wr(e, c(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Kt(d), d.append(u), e.items.clear();
		}
		wr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function wr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= te, Cn(a, document.createDocumentFragment())) : gn(t[i], n);
	}
}
var Tr;
function Er(e, t, n, r, i, o = null) {
	var s = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = L ? z(/* @__PURE__ */ Ut(u)) : u.appendChild(Ht());
	}
	L && B();
	var d = null, f = /* @__PURE__ */ tt(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Or(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= te, Ar(d, null, s)) : xn(d) : yn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: dn(() => {
			p = Z(f);
			var e = p.length;
			let a = !1;
			L && Ce(s) === "[!" != (e === 0) && (s = Se(), z(s), be(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = U, v = qt(), y = 0; y < e; y += 1) {
				L && R.nodeType === 8 && R.data === "]" && (s = R, a = !0, be(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Mt(S.v, b), S.i && Mt(S.i, y), v && u.unskip_effect(S.e)) : (S = kr(l, h ? s : Tr ??= Ht(), b, x, y, i, t, n), h || (S.e.f |= te), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = fn(() => o(s)) : (d = fn(() => o(Tr ??= Ht())), d.f |= te)), e > c.size && le("", "", ""), L && e > 0 && z(Se()), !h) if (m.set(u, c), v) {
				for (let [e, t] of l) c.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			a && be(!0), Z(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, L && (s = R);
}
function Dr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Or(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, l = Dr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (xn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= te, _ === l) Ar(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), jr(e, d, _), jr(e, _, y), Ar(_, y, n), d = _, p = [], m = [], l = Dr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ar(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					jr(e, S.prev, C.next), jr(e, d, S), jr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Ar(_, l, n), jr(e, _.prev, _.next), jr(e, _, d === null ? e.effect.first : d.next), jr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Dr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Dr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (wr(e, c(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Dr(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Cr(e, w, E);
		}
	}
	a && Ne(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function kr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? At(n) : /* @__PURE__ */ W(n, !1, !1) : null, l = o & 2 ? At(i) : null;
	return {
		v: c,
		i: l,
		e: fn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ar(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Wt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function jr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Mr = [..." 	\n\r\f\xA0\v﻿"];
function Nr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Mr.includes(r[o - 1])) && (s === r.length || Mr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Pr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Fr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ir(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Fr)), i && c.push(...Object.keys(i).map(Fr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Fr(e.substring(l, u).trim());
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
		return r && (n += Pr(r)), i && (n += Pr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Lr(e, t, n, r, i, a) {
	var o = e[A];
	if (L || o !== n || o === void 0) {
		var s = Nr(n, r, a);
		(!L || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[A] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Rr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function zr(e, t, n, r) {
	var i = e[j];
	if (L || i !== t) {
		var a = Ir(t, r);
		(!L || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[j] = t;
	} else r && (Array.isArray(r) ? (Rr(e, n?.[0], r[0]), Rr(e, n?.[1], r[1], "important")) : Rr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Br = Symbol("is custom element"), Vr = Symbol("is html"), Hr = P ? "link" : "LINK";
function Ur(e, t, n, r) {
	var i = Wr(e);
	L && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Hr) || i[t] !== (i[t] = n) && (t === "loading" && (e[oe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Kr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Wr(e) {
	return e[se] ??= {
		[Br]: e.nodeName.includes("-"),
		[Vr]: e.namespaceURI === i
	};
}
var Gr = /* @__PURE__ */ new Map();
function Kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Gr.get(t);
	if (n) return n;
	Gr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = d(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = m(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function qr(e, t) {
	return e === t || e?.[ae] === t;
}
function Jr(e = {}, t, n, r) {
	var i = H.r, a = X;
	return on(() => {
		var o, s;
		return ln(() => {
			o = s, s = r?.() || [], Q(() => {
				qr(n(...s), e) || (t(e, ...s), o && qr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && qr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Yr(e = !1) {
	let t = H, n = t.l.u;
	if (!n) return;
	let r = () => Zn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ze(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => Z(i);
	}
	n.b.length && rn(() => {
		Xr(t, r), v(n.b);
	}), tn(() => {
		let e = Q(() => n.m.map(_));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && tn(() => {
		Xr(t, r), v(n.a);
	});
}
function Xr(e, t) {
	if (e.l.s) for (let t of e.l.s) Z(t);
	t();
}
var Zr = !0, Qr = "uplot", $r = "u-hz", ei = "u-vt", ti = "u-title", ni = "u-wrap", ri = "u-under", ii = "u-over", ai = "u-axis", oi = "u-off", si = "u-select", ci = "u-cursor-x", li = "u-cursor-y", ui = "u-cursor-pt", di = "u-legend", fi = "u-live", pi = "u-inline", mi = "u-series", hi = "u-marker", gi = "u-label", _i = "u-value", vi = "width", yi = "height", bi = "top", xi = "bottom", Si = "left", Ci = "right", wi = "#000", Ti = "#0000", Ei = "mousemove", Di = "mousedown", Oi = "mouseup", ki = "mouseenter", Ai = "mouseleave", ji = "dblclick", Mi = "resize", Ni = "scroll", Pi = "change", Fi = "dppxchange", Ii = "--", Li = typeof window < "u", Ri = Li ? document : null, zi = Li ? window : null, Bi = Li ? navigator : null, Vi, Hi;
function Ui() {
	let e = devicePixelRatio;
	Vi != e && (Vi = e, Hi && ia(Pi, Hi, Ui), Hi = matchMedia(`(min-resolution: ${Vi - .001}dppx) and (max-resolution: ${Vi + .001}dppx)`), ra(Pi, Hi, Ui), zi.dispatchEvent(new CustomEvent(Fi)));
}
function Wi(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Gi(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function Ki(e, t, n) {
	e.style[t] = n + "px";
}
function qi(e, t, n, r) {
	let i = Ri.createElement(e);
	return t != null && Wi(i, t), n?.insertBefore(i, r), i;
}
function Ji(e, t) {
	return qi("div", e, t);
}
var Yi = /* @__PURE__ */ new WeakMap();
function Xi(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != Yi.get(e) && (e.style.transform = a, Yi.set(e, a), t < 0 || n < 0 || t > r || n > i ? Wi(e, oi) : Gi(e, oi));
}
var Zi = /* @__PURE__ */ new WeakMap();
function Qi(e, t, n) {
	let r = t + n;
	r != Zi.get(e) && (Zi.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var $i = /* @__PURE__ */ new WeakMap();
function ea(e, t, n, r) {
	let i = t + "" + n;
	i != $i.get(e) && ($i.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var ta = { passive: !0 }, na = {
	...ta,
	capture: !0
};
function ra(e, t, n, r) {
	t.addEventListener(e, n, r ? na : ta);
}
function ia(e, t, n, r) {
	t.removeEventListener(e, n, ta);
}
Li && Ui();
function aa(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : Da((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function oa(e) {
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
var sa = (e) => e != null, ca = (e) => e != null && e > 0, la = oa(sa), ua = oa(ca);
function da(e, t, n, r = 0, i = !1) {
	let a = i ? ua : la, o = i ? ca : sa;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? Ra, c ?? -Ra];
}
function fa(e, t, n, r) {
	let i = Na(e), a = Na(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? Pa : Fa, s = i == 1 ? Da : ka, c = a == 1 ? ka : Da, l = s(o(Ea(e))), u = c(o(Ea(t))), d = Ma(n, l), f = Ma(n, u);
	return n == 10 && (l < 0 && (d = eo(d, -l)), u < 0 && (f = eo(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = $a(e, d), t = Qa(t, f)), [e, t];
}
function pa(e, t, n, r) {
	let i = fa(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var ma = .1, ha = {
	mode: 3,
	pad: ma
}, ga = {
	pad: 0,
	soft: null,
	mode: 0
}, _a = {
	min: ga,
	max: ga
};
function va(e, t, n, r) {
	return fo(n) ? xa(e, t, n) : (ga.pad = n, ga.soft = r ? 0 : null, ga.mode = r ? 3 : 0, xa(e, t, _a));
}
function ya(e, t) {
	return e ?? t;
}
function ba(e, t, n) {
	for (t = ya(t, 0), n = ya(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function xa(e, t, n) {
	let r = n.min, i = n.max, a = ya(r.pad, 0), o = ya(i.pad, 0), s = ya(r.hard, -Ra), c = ya(i.hard, Ra), l = ya(r.soft, Ra), u = ya(i.soft, -Ra), d = ya(r.mode, 0), f = ya(i.mode, 0), p = t - e, m = Pa(p), h = ja(Ea(e), Ea(t)), g = Ea(Pa(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != Ra && (a = 0), f == 2 && u != -Ra && (o = 0)));
	let _ = p || h || 1e3, v = Ma(10, Da(Pa(_))), y = eo($a(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : Ra, x = ja(s, y < b && e >= b ? b : Aa(b, y)), S = eo(Qa(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -Ra, w = Aa(c, S > C && t <= C ? C : ja(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var Sa = new Intl.NumberFormat(Li ? Bi.language : "en-US"), Ca = (e) => Sa.format(e), wa = Math, Ta = wa.PI, Ea = wa.abs, Da = wa.floor, Oa = wa.round, ka = wa.ceil, Aa = wa.min, ja = wa.max, Ma = wa.pow, Na = wa.sign, Pa = wa.log10, Fa = wa.log2, Ia = (e, t = 1) => wa.sinh(e) * t, La = (e, t = 1) => wa.asinh(e / t), Ra = Infinity;
function za(e) {
	return (Pa((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function Ba(e, t, n) {
	return Aa(ja(e, t), n);
}
function Va(e) {
	return typeof e == "function";
}
function Ha(e) {
	return Va(e) ? e : () => e;
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
	return Xa(ka(Xa(e / t)) * t);
}
function $a(e, t) {
	return Xa(Da(Xa(e / t)) * t);
}
function eo(e, t = 0) {
	if (co(e)) return e;
	let n = 10 ** t;
	return Oa(e * n * (1 + 2 ** -52)) / n;
}
var to = /* @__PURE__ */ new Map();
function no(e) {
	return (("" + e).split(".")[1] || "").length;
}
function ro(e, t, n, r) {
	let i = [], a = r.map(no);
	for (let o = t; o < n; o++) {
		let t = Ea(o), n = eo(Ma(e, o), t);
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
	let a = ja(1, Da((i - r + 1) / t));
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
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : eo(ls(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(Oa(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = ls(c + r * a, l + n * a, 1), s = o - t(eo(o * e, 3));
					i = eo((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (Da(l) - Da(_)) + Qa(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = eo(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = Da(eo(h + g, 6)) % 24, n = t(o).getHours() - e;
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
	return (n, r, i, a) => a == null ? Ii : t(e(r));
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
	let n = e.cursor.points, r = Ji(), i = n.size(e, t);
	Ki(r, vi, i), Ki(r, yi, i);
	let a = i / -2;
	Ki(r, "marginLeft", a), Ki(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Ki(r, "borderWidth", o), r;
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
	stroke: wi,
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
	min: Ra,
	max: -Infinity,
	idxs: []
};
function Is(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : Ca(e));
}
function Ls(e, t, n, r, i, a, o) {
	let s = [], c = to.get(i) || 0;
	n = o ? n : eo(Qa(n, i), c);
	for (let e = n; e <= r; e = eo(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function Rs(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = Ma(c, Da((c == 10 ? Pa : Fa)(n))), c == 10 && (i = Uo[aa(i, Uo)]);
	let l = n, u = i * c;
	c == 10 && (u = Uo[aa(u, Uo)]);
	do
		s.push(l), l += i, c == 10 && !to.has(l) && (l = eo(l, to.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = Uo[aa(u, Uo)]));
	while (l <= r);
	return s;
}
function zs(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? Rs(e, t, ja(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? Rs(e, t, ja(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Bs = /./, Vs = /[12357]/, Hs = /[125]/, Us = /1/, Ws = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Gs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Bs : c(7, o) - u >= l ? Vs : c(5, o) - u >= l ? Hs : Us;
	if (d == Us) {
		let e = Ea(c(1, o) - u);
		if (e < l) return Ws(t.slice().reverse(), s.distr, d, ka(l / e)).reverse();
	}
	return Ws(t, s.distr, d, 1);
}
function Ks(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = Ea(c(1, o) - c(2, o));
	return l < s ? Ws(t.slice().reverse(), 3, Bs, ka(s / l)).reverse() : t;
}
function qs(e, t, n, r) {
	return r == null ? Ii : t == null ? "" : Ca(t);
}
var Js = {
	show: !0,
	scale: "y",
	stroke: wi,
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
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = Ea(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * Vi);
	return r[1] - r[0] <= o;
}
var Zs = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: Ra,
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
	min: Ra,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function tc(e, t, n, r, i) {
	return n / 10;
}
var nc = {
	time: Zr,
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
	let n = 0, r = 0, i = ya(e.bands, ao);
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
	return e == 0 ? Wa : e == 1 ? Oa : (t) => Za(t, e);
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
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = Aa(c, o / 2, s / 2), l = Aa(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
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
		let y = eo(g.width * Vi, 3), b = (g.size - g.width) / 2 * Vi, x = eo(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		xc(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, Ta * 2);
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
	let t = ya(e?.alignGaps, 0);
	return (e, n, r, i) => cc(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = la(s, r, i);
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
	let t = ya(e.align, 1), n = ya(e.ascDesc, !1), r = ya(e.alignGaps, 0), i = ya(e.extend, !1);
	return (e, a, o, s) => cc(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = la(u, o, s);
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
			let f = c.width * Vi / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = fc(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [dc(e, a, o, s, E, -1), dc(e, a, o, s, E, 1)] : dc(e, a, o, s, E, ie)), T;
	});
}
function Nc(e, t, n, r, i, a, o = Ra) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = Ea(e[c] - e[s]);
				t < l && (l = t, o = Ea(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function Pc(e) {
	e ||= io;
	let t = ya(e.size, [
		.6,
		Ra,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = Ha(i), o = 1 - t[0], s = ya(t[1], Ra), c = ya(t[2], 1), l = ya(e.disp, io), u = ya(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => cc(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * Vi, O = s * Vi, ee = c * Vi, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? xc : Sc, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = ya(e.bands, ao).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), A = T(b(se, v, w, S)), j, M, N, P = C, F = T(m.width * Vi), ce = !1, le = null, I = null, ue = null, de = null;
		d != null && (F == 0 || f != null) && (ce = !0, le = d.values(e, t, i, p), I = /* @__PURE__ */ new Map(), new Set(le).forEach((e) => {
			e != null && I.set(e, new Path2D());
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
		M = T(Ba(he, ee, O)), j = (E == 0 ? M / 2 : E == ne ? 0 : M) - E * ne * ((E == 0 ? D / 2 : 0) + (me ? F / 2 : 0));
		let ge = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, _e = ce ? null : new Path2D(), ve = null;
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
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(ya(r, se), v, w, S), o = T(i - j), s = T(ja(a, A)), c = T(Aa(a, A)), u = s - c;
			if (r != null) {
				let i = r < 0 ? L : ye, a = r < 0 ? ye : L;
				ce ? (F > 0 && ue[n] != null && re(de.get(ue[n]), o, c + Da(F / 2), M, ja(0, u - F), i, a), le[n] != null && re(I.get(le[n]), o, c + Da(F / 2), M, ja(0, u - F), i, a)) : re(_e, o, c + Da(F / 2), M, ja(0, u - F), i, a), ie(e, t, n, o - F / 2, c, M + F, u);
			}
		}
		return F > 0 ? ge.stroke = ce ? de : _e : ce || (ge._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, ge.width = 0), ge.fill = ce ? I : _e, ge;
	});
}
function Fc(e, t) {
	let n = ya(t?.alignGaps, 0);
	return (t, r, i, a) => cc(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = la(c, i, a);
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
Li && (ra(Mi, zi, zc), ra(Ni, zi, zc, !0), ra(Fi, zi, () => {
	tl.pxRatio = Vi;
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
	return t == null ? oo : va(t, n, ma, !0);
}
function Jc(e, t, n, r) {
	return t == null ? oo : fa(t, n, e.scales[r].log, !1);
}
var Yc = Jc;
function Xc(e, t, n, r) {
	return t == null ? oo : pa(t, n, e.scales[r].log, !1);
}
var Zc = Xc;
function Qc(e, t, n, r, i) {
	let a = ja(za(e), za(t)), o = t - e, s = aa(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? to.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function $c(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = Oa((n = +r) * Vi)) + "px"), [
		e,
		t,
		n
	];
}
function el(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = eo(e[2] * Vi, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function tl(e, t, n) {
	let r = { mode: ya(e.mode, 1) }, i = r.mode;
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
	let l = r.root = Ji(Qr);
	if (e.id != null && (l.id = e.id), Wi(l, e.class), e.title) {
		let t = Ji(ti, l);
		t.textContent = e.title;
	}
	let u = qi("canvas"), d = r.ctx = u.getContext("2d"), f = Ji(ni, l);
	ra("click", f, (e) => {
		e.target === m && (en != Xt || tn != Zt) && rn.click(r, e);
	}, !0);
	let p = r.under = Ji(ri, f);
	f.appendChild(u);
	let m = r.over = Ji(ii, f);
	e = go(e);
	let h = +ya(e.pxAlign, 1), g = hc(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Hc(e.series || [], Fs, ec, !1) : Uc(e.series || [null], $s), y = r.axes = Hc(e.axes || [], Ms, Js, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = Ha(e.fill || null), e.dir = ya(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: It,
		series: Dt
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => Pa(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => La(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
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
					min: a[0] == null ? ha : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? ha : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && fo(a))) {
					let e = a;
					a = (t, n, r) => n == null ? oo : va(n, r, e);
				}
				n.range = Ha(a || (e ? Kc : t == S ? n.distr == 3 ? Yc : n.distr == 4 ? Zc : Gc : n.distr == 3 ? Jc : n.distr == 4 ? Xc : qc)), n.auto = Ha(!o && n.auto), n.clamp = Ha(n.clamp || tc), n._min = n._max = null, n.valToPct = T(n);
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
	D.ori == 0 ? (Wi(l, $r), ee = a, te = o) : (Wi(l, ei), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let ne = e.tzDate || ((e) => new Date(Oa(e / _))), re = e.fmtDate || Fo, ie = _ == 1 ? ns(ne) : as(ne), ae = ss(ne, os(_ == 1 ? ts : is, re)), oe = fs(ne, us(ds, re)), se = [], A = r.legend = _o({}, hs, e.legend), j = r.cursor = _o({}, ws, { drag: { y: i == 2 } }, e.cursor), M = A.show, N = j.show, P = A.markers;
	A.idxs = se, P.width = Ha(P.width), P.dash = Ha(P.dash), P.stroke = Ha(P.stroke), P.fill = Ha(P.fill);
	let F, ce, le, I = [], ue = [], de, fe = !1, pe = {};
	if (A.live) {
		let e = v[1] ? v[1].values : null;
		fe = e != null, de = fe ? e(r, 1, 0) : { _: 0 };
		for (let e in de) pe[e] = Ii;
	}
	if (M) if (F = qi("table", di, l), le = qi("tbody", null, F), A.mount(r, F), fe) {
		ce = qi("thead", null, F, le);
		let e = qi("tr", null, ce);
		for (var me in qi("th", null, e), de) qi("th", gi, e).textContent = me;
	} else Wi(F, pi), A.live && Wi(F, fi);
	let he = { show: !0 }, ge = { show: !1 };
	function _e(e, t) {
		if (t == 0 && (fe || !A.live || i == 2)) return oo;
		let n = [], a = qi("tr", mi, le, le.childNodes[t]);
		Wi(a, e.class), e.show || Wi(a, oi);
		let o = qi("th", null, a);
		if (P.show) {
			let e = Ji(hi, o);
			if (t > 0) {
				let n = P.width(r, t);
				n && (e.style.border = n + "px " + P.dash(r, t) + " " + P.stroke(r, t)), e.style.background = P.fill(r, t);
			}
		}
		let s = Ji(gi, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (P.show || (s.style.color = e.width > 0 ? P.stroke(r, t) : P.fill(r, t)), ye("click", o, (t) => {
			if (j._lock) return;
			Ve(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != A.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && dn(r, e ? r == n ? he : ge : he, !0, Jn.setSeries);
				});
			} else dn(n, { show: !e.show }, !0, Jn.setSeries);
		}, !1), We && ye(ki, o, (t) => {
			j._lock || (Ve(t), dn(v.indexOf(e), yn, !0, Jn.setSeries));
		}, !1)), de) {
			let e = qi("td", _i, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let ve = /* @__PURE__ */ new Map();
	function ye(e, t, n, i = !0) {
		let a = ve.get(t) || {}, o = j.bind[e](r, t, n, i);
		o && (ra(e, t, a[e] = o), ve.set(t, a));
	}
	function L(e, t, n) {
		let r = ve.get(t) || {};
		for (let n in r) (e == null || n == e) && (ia(n, t, r[n]), delete r[n]);
		e ?? ve.delete(t);
	}
	let be = 0, R = 0, z = 0, B = 0, V = 0, xe = 0, Se = V, Ce = xe, we = z, Te = B, Ee = 0, H = 0, De = 0, Oe = 0;
	r.bbox = {};
	let ke = !1, Ae = !1, je = !1, Me = !1, Ne = !1, Pe = !1;
	function Fe(e, t, n) {
		(n || e != r.width || t != r.height) && Ie(e, t), Lt(!1), je = !0, Ae = !0, Ht();
	}
	function Ie(e, t) {
		r.width = be = z = e, r.height = R = B = t, V = xe = 0, ze(), Be();
		let n = r.bbox;
		Ee = n.left = Za(V * Vi, .5), H = n.top = Za(xe * Vi, .5), De = n.width = Za(z * Vi, .5), Oe = n.height = Za(B * Vi, .5);
	}
	function Le() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = Pt(t), i = Ft(t);
			e = t == 3 || n && i, e || (Ie(r.width, r.height), Ae = !0);
		}
	}
	function Re({ width: e, height: t }) {
		Fe(e, t);
	}
	r.setSize = Re;
	function ze() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (z -= c, a == 3 ? (V += c, r = !0) : n = !0) : (B -= c, a == 0 ? (xe += c, e = !0) : t = !0));
			}
		}), $e[0] = e, $e[1] = n, $e[2] = t, $e[3] = r, z -= rt[1] + rt[3], V += rt[3], B -= rt[2] + rt[0], xe += rt[0];
	}
	function Be() {
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
		let r = e.prox = Ha(e.prox), i = e.bias ??= 0;
		j.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? Ra, u = l >= 0 && l < Ra, d = D.ori == 0 ? z : B, f = j.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && Ea(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let Ve = (e) => {
		j.event = e;
	};
	j.idxs = se, j._lock = !1;
	let He = j.points;
	He.show = Ha(He.show), He.size = Ha(He.size), He.stroke = Ha(He.stroke), He.width = Ha(He.width), He.fill = Ha(He.fill);
	let Ue = r.focus = _o({}, e.focus || { alpha: .3 }, j.focus), We = Ue.prox >= 0, Ge = We && He.one, Ke = [], qe = [], Je = [];
	function Ye(e, t) {
		let n = He.show(r, t);
		if (n instanceof HTMLElement) return Wi(n, ui), Wi(n, e.class), Xi(n, -10, -10, z, B), m.insertBefore(n, Ke[t]), n;
	}
	function Xe(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? uo(n) ? fs(ne, us(n, re)) : n || oe : n || qs, e.label = e.label || (t ? Ps : Ns);
		}
		if (Ge || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Bc || Ka, e.fillTo = Ha(e.fillTo || uc), e.pxAlign = +ya(e.pxAlign, h), e.pxRound = hc(e.pxAlign), e.stroke = Ha(e.stroke || null), e.fill = Ha(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Ys(ja(1, e.width), 1), n = e.points = _o({}, {
				size: t,
				width: ja(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: Vc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = Ha(n.show), n.filter = Ha(n.filter), n.fill = Ha(n.fill), n.stroke = Ha(n.stroke), n.paths = Ha(n.paths), n.pxAlign = e.pxAlign;
		}
		if (M) {
			let n = _e(e, t);
			I.splice(t, 0, n[0]), ue.splice(t, 0, n[1]), A.values.push(null);
		}
		if (N) {
			se.splice(t, 0, null);
			let n = null;
			Ge ? t == 0 && (n = Ye(e, t)) : t > 0 && (n = Ye(e, t)), Ke.splice(t, 0, n), qe.splice(t, 0, 0), Je.splice(t, 0, 0);
		}
		Kn("addSeries", t);
	}
	function Ze(e, t) {
		t ??= v.length, e = i == 1 ? Wc(e, t, Fs, ec) : Wc(e, t, {}, $s), v.splice(t, 0, e), Xe(v[t], t);
	}
	r.addSeries = Ze;
	function Qe(e) {
		if (v.splice(e, 1), M) {
			A.values.splice(e, 1), ue.splice(e, 1);
			let t = I.splice(e, 1)[0];
			L(null, t.firstChild), t.remove();
		}
		N && (se.splice(e, 1), Ke.splice(e, 1)[0].remove(), qe.splice(e, 1), Je.splice(e, 1)), Kn("delSeries", e);
	}
	r.delSeries = Qe;
	let $e = [
		!1,
		!1,
		!1,
		!1
	];
	function et(e, t) {
		if (e._show = e.show, e.show) {
			let n = e.side % 2, i = b[e.scale];
			i ??= (e.scale = n ? v[1].scale : S, b[e.scale]);
			let a = i.time;
			e.size = Ha(e.size), e.space = Ha(e.space), e.rotate = Ha(e.rotate), so(e.incrs) && e.incrs.forEach((e) => {
				!to.has(e) && to.set(e, no(e));
			}), e.incrs = Ha(e.incrs || (i.distr == 2 ? Ho : a ? _ == 1 ? es : rs : Uo)), e.splits = Ha(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? Rs : i.distr == 4 ? zs : Ls)), e.stroke = Ha(e.stroke), e.grid.stroke = Ha(e.grid.stroke), e.ticks.stroke = Ha(e.ticks.stroke), e.border.stroke = Ha(e.border.stroke);
			let o = e.values;
			e.values = so(o) && !so(o[0]) ? Ha(o) : a ? so(o) ? ss(ne, os(o, re)) : uo(o) ? cs(ne, o) : o || ae : o || Is, e.filter = Ha(e.filter || (i.distr >= 3 && i.log == 10 ? Gs : i.distr == 3 && i.log == 2 ? Ks : Ga)), e.font = $c(e.font), e.labelFont = $c(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && ($e[t] = !0, e._el = Ji(ai, f));
		}
	}
	function tt(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? Oa(Ms.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? Oa(Js.size / 2) : 0), l;
	}
	let nt = r.padding = (e.padding || [
		tt,
		tt,
		tt,
		tt
	]).map((e) => Ha(ya(e, tt))), rt = r._padding = nt.map((e, t) => e(r, t, $e, 0)), it, at = null, ot = null, st = i == 1 ? v[0].idxs : null, U = null, ct = !1;
	function lt(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			it = 0;
			for (let e = 1; e < v.length; e++) it += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), U = t[0], it = U.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(it);
				for (let e = 0; e < it; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (Lt(!0), Kn("setData"), O == 2 && (je = !0), n !== !1) {
			let e = D;
			e.auto(r, ct) ? ut() : un(S, e.min, e.max), Me ||= j.left >= 0, Pe = !0, Ht();
		}
	}
	r.setData = lt;
	function ut() {
		ct = !0;
		let e, n;
		i == 1 && (it > 0 ? (at = st[0] = 0, ot = st[1] = it - 1, e = t[0][at], n = t[0][ot], O == 2 ? (e = at, n = ot) : e == n && (O == 3 ? [e, n] = fa(e, e, D.log, !1) : O == 4 ? [e, n] = pa(e, e, D.log, !1) : D.time ? n = e + Oa(86400 / _) : [e, n] = va(e, n, ma, !0))) : (at = st[0] = e = null, ot = st[1] = n = null)), un(S, e, n);
	}
	let dt, ft, pt, mt, ht, gt, _t, vt, yt, bt;
	function xt(e, t, n, r, i, a) {
		e ??= Ti, n ??= ao, r ??= "butt", i ??= Ti, a ??= "round", e != dt && (d.strokeStyle = dt = e), i != ft && (d.fillStyle = ft = i), t != pt && (d.lineWidth = pt = t), a != ht && (d.lineJoin = ht = a), r != gt && (d.lineCap = gt = r), n != mt && d.setLineDash(mt = n);
	}
	function St(e, t, n, r) {
		t != ft && (d.fillStyle = ft = t), e != _t && (d.font = _t = e), n != vt && (d.textAlign = vt = n), r != yt && (d.textBaseline = yt = r);
	}
	function Ct(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, ct) && (t == null || t.min == null)) {
			let t = ya(at, 0), r = ya(ot, i.length - 1), o = n.min == null ? da(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = Aa(e.min, n.min = o[0]), e.max = ja(e.max, n.max = o[1]);
		}
	}
	let wt = {
		min: null,
		max: null
	};
	function Tt() {
		for (let e in b) {
			let t = b[e];
			k[e] == null && (t.min == null || k[S] != null && t.auto(r, ct)) && (k[e] = wt);
		}
		for (let e in b) {
			let t = b[e];
			k[e] == null && t.from != null && k[t.from] != null && (k[e] = wt);
		}
		k[S] != null && Lt(!0);
		let e = {};
		for (let t in k) {
			let n = k[t];
			if (n != null) {
				let a = e[t] = go(b[t], po);
				if (n.min != null) _o(a, n);
				else if (t != S || i == 2) if (it == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = Ra, a.max = -Infinity;
			}
		}
		if (it > 0) {
			v.forEach((n, a) => {
				if (i == 1) {
					let i = n.scale, o = k[i];
					if (o == null) return;
					let s = e[i];
					if (a == 0) {
						let e = s.range(r, s.min, s.max, i);
						s.min = e[0], s.max = e[1], at = aa(s.min, t[0]), ot = aa(s.max, t[0]), ot - at > 1 && (t[0][at] < s.min && at++, t[0][ot] > s.max && ot--), n.min = U[at], n.max = U[ot];
					} else n.show && n.auto && Ct(s, o, n, t[a], n.sorted);
					n.idxs[0] = at, n.idxs[1] = ot;
				} else if (a > 0 && n.show && n.auto) {
					let [r, i] = n.facets, o = r.scale, s = i.scale, [c, l] = t[a], u = e[o], d = e[s];
					u != null && Ct(u, k[o], r, c, r.sorted), d != null && Ct(d, k[s], i, l, i.sorted), n.min = i.min, n.max = i.max;
				}
			});
			for (let t in e) {
				let n = e[t], i = k[t];
				if (n.from == null && (i == null || i.min == null)) {
					let e = n.range(r, n.min == Ra ? null : n.min, n.max == -Infinity ? null : n.max, t);
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
				i._min = e == 3 ? Pa(i.min) : e == 4 ? La(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? Pa(i.max) : e == 4 ? La(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) je = !0, Kn("setScale", e);
			N && j.left >= 0 && (Me = Pe = !0);
		}
		for (let e in k) k[e] = null;
	}
	function Et(e) {
		let t = Ba(at - 1, 0, it - 1), n = Ba(ot + 1, 0, it - 1);
		for (; e[t] == null && t > 0;) t--;
		for (; e[n] == null && n < it - 1;) n++;
		return [t, n];
	}
	function Dt() {
		if (it > 0) {
			let e = v.some((e) => e._focus) && bt != Ue.alpha;
			e && (d.globalAlpha = bt = Ue.alpha), v.forEach((e, n) => {
				if (n > 0 && e.show && (Ot(n, !1), Ot(n, !0), e._paths == null)) {
					let a = bt;
					bt != e.alpha && (d.globalAlpha = bt = e.alpha);
					let o = i == 2 ? [0, t[n][0].length - 1] : Et(t[n]);
					e._paths = e.paths(r, n, o[0], o[1]), bt != a && (d.globalAlpha = bt = a);
				}
			}), v.forEach((e, t) => {
				if (t > 0 && e.show) {
					let n = bt;
					bt != e.alpha && (d.globalAlpha = bt = e.alpha), e._paths != null && kt(t, !1);
					{
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, at, ot, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, at, ot, a), kt(t, !0));
					}
					bt != n && (d.globalAlpha = bt = n), Kn("drawSeries", t);
				}
			}), e && (d.globalAlpha = bt = 1);
		}
	}
	function Ot(e, t) {
		let n = t ? v[e].points : v[e];
		n._stroke = n.stroke(r, e), n._fill = n.fill(r, e);
	}
	function kt(e, t) {
		let n = t ? v[e].points : v[e], { stroke: r, fill: i, clip: a, flags: o, _stroke: s = n._stroke, _fill: c = n._fill, _width: l = n.width } = n._paths;
		l = eo(l * Vi, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = Ee - l / 2, t = H - l / 2, n = De + l, r = Oe + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? jt(s, l, n.dash, n.cap, c, r, i, o, a) : At(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function At(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || io).band;
				so(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && ba(g, at, ot) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, jt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || jt(n, i, a, o, s, c, l, u, d, f);
	}
	function jt(e, t, n, r, i, a, o, s, c, l, u, f) {
		xt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), G(i, o), W(e, a, t)) : s & sc ? (G(i, o), d.clip(f), W(e, a, t)) : s & oc && (d.save(), d.clip(f), u && d.clip(u), G(i, o), d.restore(), W(e, a, t)) : (G(i, o), W(e, a, t)), (c || l || f) && d.restore();
	}
	function W(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = dt = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function G(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = ft = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function Mt(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Qc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function Nt(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), xt(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function Pt(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, Lt(!1));
				return;
			} else n._show || (t = !1, n._show = !0, Lt(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = Mt(i, c, l, s == 0 ? z : B);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => U[e]) : p, h = a.distr == 2 ? U[p[1]] - U[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = ka(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function Ft(e) {
		let t = !0;
		return nt.forEach((n, i) => {
			let a = n(r, i, $e, e);
			a != rt[i] && (t = !1), rt[i] = a;
		}), t;
	}
	function It() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = Oa((t._lpos + s) * Vi);
				St(t.labelFont[0], c, "center", n == 2 ? bi : xi), d.save(), i == 1 ? (a = o = 0, d.translate(p, Oa(H + Oe / 2)), d.rotate((n == 3 ? -Ta : Ta) / 2)) : (a = Oa(Ee + De / 2), o = p);
				let m = Va(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? De : Oe, h = i == 0 ? Ee : H, _ = t._splits, v = p.distr == 2 ? _.map((e) => U[e]) : _, x = p.distr == 2 ? U[_[1]] - U[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = Oa(w * Vi), E = Oa((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * Vi), D = t._rotate * -Ta / 180, O = g(t._pos * Vi), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			St(te, c, t.align == 1 ? Si : t.align == 2 ? Ci : D > 0 ? Si : D < 0 ? Ci : i == 0 ? "center" : n == 3 ? Ci : Si, D || i == 1 ? "middle" : n == 2 ? bi : xi);
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
			S.show && Nt(ne, S.filter(r, v, e, f, x), i, n, O, T, eo(S.width * Vi, 3), S.stroke(r, e), S.dash, S.cap);
			let ie = t.grid;
			ie.show && Nt(ne, ie.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? H : Ee, i == 0 ? Oe : De, eo(ie.width * Vi, 3), ie.stroke(r, e), ie.dash, ie.cap), C.show && Nt([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? H : Ee, i == 1 ? Oe : De, eo(C.width * Vi, 3), C.stroke(r, e), C.dash, C.cap);
		}
		Kn("drawAxes");
	}
	function Lt(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let Rt = !1, zt = !1, Bt = [];
	function Vt() {
		zt = !1;
		for (let e = 0; e < Bt.length; e++) Kn(...Bt[e]);
		Bt.length = 0;
	}
	function Ht() {
		Rt ||= (Co(Wt), !0);
	}
	function Ut(e, t = !1) {
		Rt = !0, zt = t, e(r), Wt(), t && Bt.length > 0 && queueMicrotask(Vt);
	}
	r.batch = Ut;
	function Wt() {
		if (ke &&= (Tt(), !1), je &&= (Le(), !1), Ae) {
			if (Ki(p, Si, V), Ki(p, bi, xe), Ki(p, vi, z), Ki(p, yi, B), Ki(m, Si, V), Ki(m, bi, xe), Ki(m, vi, z), Ki(m, yi, B), Ki(f, vi, be), Ki(f, yi, R), u.width = Oa(be * Vi), u.height = Oa(R * Vi), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					Ki(e, a ? "left" : "top", r - t), Ki(e, a ? "width" : "height", n), Ki(e, a ? "top" : "left", a ? xe : V), Ki(e, a ? "height" : "width", a ? B : z), Gi(e, oi);
				} else Wi(e, oi);
			}), dt = ft = pt = ht = gt = _t = vt = yt = mt = null, bt = 1, An(!0), V != Se || xe != Ce || z != we || B != Te) {
				Lt(!1);
				let e = z / we, t = B / Te;
				if (N && !Me && j.left >= 0) {
					j.left *= e, j.top *= t, Kt && Xi(Kt, Oa(j.left), 0, z, B), qt && Xi(qt, 0, Oa(j.top), z, B);
					for (let n = 0; n < Ke.length; n++) {
						let r = Ke[n];
						r != null && (qe[n] *= e, Je[n] *= t, Xi(r, ka(qe[n]), ka(Je[n]), z, B));
					}
				}
				if (J.show && !Ne && J.left >= 0 && J.width > 0) {
					J.left *= e, J.width *= e, J.top *= t, J.height *= t;
					for (let e in Nn) Ki(sn, e, J[e]);
				}
				Se = V, Ce = xe, we = z, Te = B;
			}
			Kn("setSize"), Ae = !1;
		}
		be > 0 && R > 0 && (d.clearRect(0, 0, u.width, u.height), Kn("drawClear"), w.forEach((e) => e()), Kn("draw")), J.show && Ne && (cn(J), Ne = !1), N && Me && (kn(null, !0, !1), Me = !1), A.show && A.live && Pe && (Y(), Pe = !1), c || (c = !0, r.status = 1, Kn("ready")), ct = !1, Rt = !1;
	}
	r.redraw = (e, t) => {
		je = t || !1, e === !1 ? Ht() : un(S, D.min, D.max);
	};
	function K(e, n) {
		let i = b[e];
		if (i.from == null) {
			if (it == 0) {
				let t = i.range(r, n.min, n.max, e);
				n.min = t[0], n.max = t[1];
			}
			if (n.min > n.max) {
				let e = n.min;
				n.min = n.max, n.max = e;
			}
			if (it > 1 && n.min != null && n.max != null && n.max - n.min < 1e-16) return;
			e == S && i.distr == 2 && it > 0 && (n.min = aa(n.min, t[0]), n.max = aa(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, ke = !0, Ht();
		}
	}
	r.setScale = K;
	let Gt, q, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = !1, rn = j.drag, an = rn.x, on = rn.y;
	N && (j.x && (Gt = Ji(ci, m)), j.y && (q = Ji(li, m)), D.ori == 0 ? (Kt = Gt, qt = q) : (Kt = q, qt = Gt), en = j.left, tn = j.top);
	let J = r.select = _o({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), sn = J.show ? Ji(si, J.over ? m : p) : null;
	function cn(e, t) {
		if (J.show) {
			for (let t in e) J[t] = e[t], t in Nn && Ki(sn, t, e[t]);
			t !== !1 && Kn("setSelect");
		}
	}
	r.setSelect = cn;
	function ln(e) {
		if (v[e].show) M && Gi(I[e], oi);
		else if (M && Wi(I[e], oi), N) {
			let t = Ge ? Ke[0] : Ke[e];
			t != null && Xi(t, -10, -10, z, B);
		}
	}
	function un(e, t, n) {
		K(e, {
			min: t,
			max: n
		});
	}
	function dn(e, t, n, a) {
		t.focus != null && bn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, ln(r), i == 2 ? (un(n.facets[0].scale, null, null), un(n.facets[1].scale, null, null)) : un(n.scale, null, null), Ht());
		}), n !== !1 && Kn("setSeries", e, t), a && Xn("setSeries", r, e, t);
	}
	r.setSeries = dn;
	function fn(e, t) {
		_o(x[e], t);
	}
	function pn(e, t) {
		e.fill = Ha(e.fill || null), e.dir = ya(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function mn(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = pn, r.setBand = fn, r.delBand = mn;
	function hn(e, t) {
		v[e].alpha = t, N && Ke[e] != null && (Ke[e].style.opacity = t), M && I[e] && (I[e].style.opacity = t);
	}
	let gn, _n, vn, yn = { focus: !0 };
	function bn(e) {
		if (e != vn) {
			let t = e == null, n = Ue.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && hn(a, i ? 1 : Ue.alpha);
				}
			}), vn = e, n && Ht();
		}
	}
	M && We && ye(Ai, F, (e) => {
		j._lock || (Ve(e), vn != null && dn(null, yn, !0, Jn.setSeries));
	});
	function xn(e, t, n) {
		let r = b[t];
		n && (e = e / Vi - (r.ori == 1 ? xe : V));
		let i = z;
		r.ori == 1 && (i = B, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? Ma(10, c) : l == 4 ? Ia(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Sn(e, n) {
		return aa(xn(e, S, n), t[0], at, ot);
	}
	r.valToIdx = (e) => aa(e, t[0]), r.posToIdx = Sn, r.posToVal = xn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? De : z, n ? Ee : 0) : o(e, b[t], n ? Oe : B, n ? H : 0), r.setCursor = (e, t, n) => {
		en = e.left, tn = e.top, kn(null, t, n);
	};
	function Cn(e, t) {
		Ki(sn, Si, J.left = e), Ki(sn, vi, J.width = t);
	}
	function wn(e, t) {
		Ki(sn, bi, J.top = e), Ki(sn, yi, J.height = t);
	}
	let Tn = D.ori == 0 ? Cn : wn, En = D.ori == 1 ? Cn : wn;
	function Dn() {
		if (M && A.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && fe) continue;
			let t = A.values[e], n = 0;
			for (let r in t) ue[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function Y(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : lo(e.idx) || se.fill(e.idx), A.idx = se[0]), M && A.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !fe) && On(e, se[e]);
			Dn();
		}
		Pe = !1, t !== !1 && Kn("setLegend");
	}
	r.setLegend = Y;
	function On(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? U : t[e], o;
		fe ? o = i.values(r, e, n) ?? pe : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? pe : { _: o }), A.values[e] = o;
	}
	function kn(e, n, a) {
		Qt = en, $t = tn, [en, tn] = j.move(r, en, tn), j.left = en, j.top = tn, N && (Kt && Xi(Kt, Oa(en), 0, z, B), qt && Xi(qt, 0, Oa(tn), z, B));
		let o, s = at > ot;
		gn = Ra, _n = null;
		let c = D.ori == 0 ? z : B, l = D.ori == 1 ? z : B;
		if (en < 0 || it == 0 || s) {
			o = j.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Ke[e];
				t != null && Xi(t, -10, -10, z, B);
			}
			We && dn(null, yn, !0, e == null && Jn.setSeries), A.live && (se.fill(o), Pe = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? en : tn, n = xn(e, S), o = j.idx = aa(n, t[0], at, ot), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = j.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Pe = Pe || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (We && S != null) {
						let t = D.ori == 1 ? en : tn, n = Ea(Ue.dist(r, e, x, _, t));
						if (n < gn) {
							let r = Ue.bias;
							if (r != 0) {
								let i = xn(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (gn = n, _n = e);
							} else gn = n, _n = e;
						}
					}
					if (Pe || Ge) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = He.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = He.size(r, e);
						if (v = He.fill(r, e), g = He.stroke(r, e), Ge) e == _n && gn <= Ue.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = Ke[e];
							t != null && (qe[e] = c, Je[e] = l, ea(t, a, o, y), Qi(t, v, g), Xi(t, ka(c), ka(l), z, B));
						}
					}
				}
			}
			if (Ge) {
				let e = Ue.prox;
				if (Pe || (vn == null ? gn <= e : gn > e || _n != vn)) {
					let e = Ke[0];
					e != null && (qe[0] = s, Je[0] = u, ea(e, d, f, p), Qi(e, m, h), Xi(e, ka(s), ka(u), z, B));
				}
			}
		}
		if (J.show && nn) if (e != null) {
			let [t, n] = Jn.scales, [r, i] = Jn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (an = s._x, on = s._y, an || on) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && an ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), Tn(Aa(v, y), Ea(y - v))) : Tn(0, c), S && on ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), En(Aa(v, y), Ea(y - v))) : En(0, l);
			} else Pn();
		} else {
			let e = Ea(Qt - Jt), t = Ea($t - Yt);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			an = rn.x && e >= rn.dist, on = rn.y && t >= rn.dist;
			let n = rn.uni;
			n == null ? rn.x && rn.y && (an || on) && (an = on = !0) : an && on && (an = e >= n, on = t >= n, !an && !on && (t > e ? on = !0 : an = !0));
			let r, i;
			an && (D.ori == 0 ? (r = Xt, i = en) : (r = Zt, i = tn), Tn(Aa(r, i), Ea(i - r)), on || En(0, l)), on && (D.ori == 1 ? (r = Xt, i = en) : (r = Zt, i = tn), En(Aa(r, i), Ea(i - r)), an || Tn(0, c)), !an && !on && (Tn(0, 0), En(0, 0));
		}
		if (rn._x = an, rn._y = on, e == null) {
			if (a) {
				if (Z != null) {
					let [e, t] = Jn.scales;
					Jn.values[0] = e == null ? null : xn(D.ori == 0 ? en : tn, e), Jn.values[1] = t == null ? null : xn(D.ori == 1 ? en : tn, t);
				}
				Xn(Ei, r, en, tn, z, B, o);
			}
			if (We) {
				let e = a && Jn.setSeries, t = Ue.prox;
				vn == null ? gn <= t && dn(_n, yn, !0, e) : gn > t ? dn(null, yn, !0, e) : _n != vn && dn(_n, yn, !0, e);
			}
		}
		Pe && (A.idx = o, Y()), n !== !1 && Kn("setCursor");
	}
	let X = null;
	Object.defineProperty(r, "rect", { get() {
		return X ?? An(!1), X;
	} });
	function An(e = !1) {
		e ? X = null : (X = m.getBoundingClientRect(), Kn("syncRect", X));
	}
	function jn(e, t, n, r, i, a, o) {
		j._lock || nn && e != null && e.movementX == 0 && e.movementY == 0 || (Mn(e, t, n, r, i, a, o, !1, e != null), e == null ? kn(t, !0, !1) : kn(null, !0, !0));
	}
	function Mn(e, t, n, i, a, o, c, l, u) {
		if (X ?? An(!1), Ve(e), e != null) n = e.clientX - X.left, i = e.clientY - X.top;
		else {
			if (n < 0 || i < 0) {
				en = -10, tn = -10;
				return;
			}
			let [e, r] = Jn.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = Jn.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? z : B, _ = D.ori == 1 ? z : B, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == Ei) && ((n <= 1 || n >= z - 1) && (n = Za(n, z)), (i <= 1 || i >= B - 1) && (i = Za(i, B))), l ? (Jt = n, Yt = i, [Xt, Zt] = j.move(r, n, i)) : (en = n, tn = i);
	}
	let Nn = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	function Pn() {
		cn(Nn, !1);
	}
	let Fn, In, Ln, Rn;
	function zn(e, t, n, i, a, o, s) {
		nn = !0, an = on = rn._x = rn._y = !1, Mn(e, t, n, i, a, o, s, !0, !1), e != null && (ye(Oi, Ri, Bn, !1), Xn(Di, r, Xt, Zt, z, B, null));
		let { left: c, top: l, width: u, height: d } = J;
		Fn = c, In = l, Ln = u, Rn = d;
	}
	function Bn(e, t, n, i, a, o, s) {
		nn = rn._x = rn._y = !1, Mn(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = J, f = u > 0 || d > 0, p = Fn != c || In != l || Ln != u || Rn != d;
		if (f && p && cn(J), rn.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), an && un(S, xn(e, S), xn(e + t, S)), on) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != Ra && un(e, xn(n + r, e), xn(n, e));
			}
			Pn();
		} else j.lock && (j._lock = !j._lock, kn(t, !0, e != null));
		e != null && (L(Oi, Ri), Xn(Oi, r, en, tn, z, B, null));
	}
	function Vn(e, t, n, r, i, a, o) {
		if (j._lock) return;
		Ve(e);
		let s = nn;
		if (nn) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = an, r = on) : (n = on, r = an), n && r && (e = en <= 10 || en >= z - 10, t = tn <= 10 || tn >= B - 10), n && e && (en = en < Xt ? 0 : z), r && t && (tn = tn < Zt ? 0 : B), kn(null, !0, !0), nn = !1;
		}
		en = -10, tn = -10, se.fill(null), kn(null, !0, !0), s && (nn = s);
	}
	function Hn(e, t, n, i, a, o, s) {
		j._lock || (Ve(e), ut(), Pn(), e != null && Xn(ji, r, en, tn, z, B, null));
	}
	function Un() {
		y.forEach(el), Fe(r.width, r.height, !0);
	}
	ra(Fi, zi, Un);
	let Wn = {};
	Wn.mousedown = zn, Wn.mousemove = jn, Wn.mouseup = Bn, Wn.dblclick = Hn, Wn.setSeries = (e, t, n, i) => {
		let a = Jn.match[2];
		n = a(r, t, n), n != -1 && dn(n, i, !0, !1);
	}, N && (ye(Di, m, zn), ye(Ei, m, jn), ye(ki, m, (e) => {
		Ve(e), An(!1);
	}), ye(Ai, m, Vn), ye(ji, m, Hn), Rc.add(r), r.syncRect = An);
	let Gn = r.hooks = e.hooks || {};
	function Kn(e, t, n) {
		zt ? Bt.push([
			e,
			t,
			n
		]) : e in Gn && Gn[e].forEach((e) => {
			e.call(null, r, t, n);
		});
	}
	(e.plugins || []).forEach((e) => {
		for (let t in e.hooks) Gn[t] = (Gn[t] || []).concat(e.hooks[t]);
	});
	let qn = (e, t, n) => n, Jn = _o({
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
			qn
		],
		values: [null, null]
	}, j.sync);
	Jn.match.length == 2 && Jn.match.push(qn), j.sync = Jn;
	let Z = Jn.key, Yn = ac(Z);
	function Xn(e, t, n, r, i, a, o) {
		Jn.filters.pub(e, t, n, r, i, a, o) && Yn.pub(e, t, n, r, i, a, o);
	}
	Yn.sub(r);
	function Q(e, t, n, r, i, a, o) {
		Jn.filters.sub(e, t, n, r, i, a, o) && Wn[e](null, t, n, r, i, a, o);
	}
	r.pub = Q;
	function Zn() {
		Yn.unsub(r), Rc.delete(r), ve.clear(), ia(Fi, zi, Un), l.remove(), F?.remove(), Kn("destroy");
	}
	r.destroy = Zn;
	function Qn() {
		Kn("init", e, t), lt(t || e.data, !1), k[S] ? K(S, k[S]) : ut(), Ne = J.show && (J.width > 0 || J.height > 0), Me = Pe = !0, Fe(e.width, e.height);
	}
	return v.forEach(Xe), y.forEach(et), n ? n instanceof HTMLElement ? (n.appendChild(l), Qn()) : n(r, Qn) : Qn(), r;
}
tl.assign = _o, tl.fmtNum = Ca, tl.rangeNum = va, tl.rangeLog = fa, tl.rangeAsinh = pa, tl.orient = cc, tl.pxRatio = Vi, tl.join = So, tl.fmtDate = Fo, tl.tzDate = Lo, tl.sync = ac;
{
	tl.addGap = pc, tl.clipGaps = fc;
	let e = tl.paths = { points: Dc };
	e.linear = jc, e.stepped = Mc, e.bars = Pc, e.spline = Ic;
}
//#endregion
//#region src/App.svelte
var nl = /* @__PURE__ */ ur("<div class=\"error\" role=\"alert\"> <code>apx status</code> if the problem persists.</div>"), rl = /* @__PURE__ */ ur("<div class=\"empty-state\"><strong> </strong> <span> </span></div>"), il = /* @__PURE__ */ ur("· <strong> </strong> are excluded from verified totals.", 1), al = /* @__PURE__ */ ur("<article><strong> </strong><small> </small><em> </em></article>"), ol = /* @__PURE__ */ ur("<button class=\"signals-toggle\" type=\"button\"> </button>"), sl = /* @__PURE__ */ ur("<div class=\"attention-list\"></div> <!>", 1), cl = /* @__PURE__ */ ur("<p class=\"clear\">Requests and optimizers show no active warning signals in this window.</p>"), ll = /* @__PURE__ */ ur("<p class=\"chart-empty\">A trend appears after two time buckets.</p>"), ul = /* @__PURE__ */ ur("<!> <div class=\"metrics\" aria-label=\"Token efficiency summary\"><article><span>Tokens processed</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small> </small></article> <article class=\"token-card\"><span>Verified input saved</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small>Removed before the model with matching before/after evidence</small></article> <article><span>Verified input reduction</span><strong> </strong><small> </small></article> <article><span>Request health</span><strong> </strong><small> </small></article></div> <article class=\"token-journey\" aria-label=\"Verified input token journey\"><div class=\"journey-heading\"><div><h3>Verified input journey</h3><small>Actual model input plus verified removals; estimates are excluded</small></div> <span class=\"status\"> </span></div> <div class=\"journey-values\"><div><span>Verified baseline input</span><strong> </strong><small>actual input + verified removed</small></div> <span class=\"journey-arrow\" aria-hidden=\"true\">→</span> <div><span>Sent to model</span><strong> </strong><small> </small></div> <span class=\"journey-plus\" aria-hidden=\"true\">+</span> <div class=\"journey-saved\"><span>Removed</span><strong> </strong><small> </small></div></div> <div class=\"journey-track\" aria-hidden=\"true\"><span class=\"journey-sent\"></span> <span class=\"journey-removed\"></span></div> <p class=\"journey-evidence\">Evidence coverage: <strong> </strong> <!></p></article> <div><div class=\"attention-heading\"><h3> </h3><span> </span></div> <!></div> <div class=\"context-strip\" aria-label=\"Usage context\"><div><span>Cache reuse</span><strong> </strong><small> </small></div> <div><span>Estimated spend</span><strong> </strong><small>based on configured model prices</small></div> <div><span>Models active</span><strong> </strong><small> </small></div> <div><span>Tool activity</span><strong> </strong><small> </small></div></div> <div class=\"charts\"><article class=\"chart\"><div class=\"chart-heading\"><div><h3>Token flow</h3><small> </small></div><span class=\"status\"> </span></div><div class=\"chart-key\"><span class=\"key-input\">Input</span><span class=\"key-output\">Output</span></div><div role=\"img\"></div><!></article> <article class=\"chart\"><div class=\"chart-heading\"><div><h3>Savings evidence</h3><small> </small></div><span class=\"status\">explicit</span></div><div class=\"chart-key\"><span class=\"key-verified\">Verified</span><span class=\"key-estimated\">Estimated</span></div><div role=\"img\"></div><!></article></div>", 1), dl = /* @__PURE__ */ ur("<em>tokens</em>"), fl = /* @__PURE__ */ ur("<p class=\"bypass-note\"> </p>"), pl = /* @__PURE__ */ ur("<a class=\"optimizer-link\" target=\"_blank\" rel=\"noopener\"> <span aria-hidden=\"true\">↗</span></a>"), ml = /* @__PURE__ */ ur("<article><div class=\"optimizer-card-heading\"><div><p class=\"optimizer-name\"> </p><small> </small></div> <span> </span></div> <div class=\"optimizer-primary\"><div><span>Verified this window</span><strong> <!></strong></div> <div><span>Native reported total</span><strong> <!></strong></div></div> <div class=\"coverage-row\"><div><span>Evidence coverage</span><strong> </strong></div> <div class=\"coverage-track\" aria-hidden=\"true\"><span></span></div> <small> </small></div> <dl class=\"optimizer-facts\"><div><dt>Native reduction</dt><dd> </dd></div> <div><dt>Native requests</dt><dd> </dd></div> <div><dt>Optimizer latency</dt><dd> </dd></div> <div><dt>Native cost saved</dt><dd> </dd></div></dl> <!> <div class=\"optimizer-card-footer\"><small> </small> <!></div></article>"), hl = /* @__PURE__ */ ur("<article><p class=\"clear\">No optimizer activity or health snapshots in this window yet.</p></article>"), gl = /* @__PURE__ */ ur("<div class=\"optimizer-overview\" aria-label=\"Optimizer measurement summary\"><div><span>Verified savings this window</span><strong> </strong><small> </small></div> <div><span>Evidence coverage</span><strong> </strong><small> </small></div> <div><span>Persistence</span><strong> </strong><small> </small></div></div> <p class=\"optimizer-explainer\">Verified savings below is scoped to the selected window. Native counters are optimizer-reported totals and may cover a longer lifetime, so they are deliberately labeled separately.</p> <div class=\"optimizer-cards\"><!></div>", 1), _l = /* @__PURE__ */ ur("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), vl = /* @__PURE__ */ ur("<div class=\"health-list\"></div>"), yl = /* @__PURE__ */ ur("<p class=\"clear\">No model activity in this window.</p>"), bl = /* @__PURE__ */ ur("<div class=\"health-row session-row\"><strong> </strong><span> </span> <small> </small></div>"), xl = /* @__PURE__ */ ur("<p class=\"clear\">No sessions in this window.</p>"), Sl = /* @__PURE__ */ ur("<div class=\"stored-grid\" aria-label=\"Persisted activity\"><article><div class=\"attention-heading\"><h3>Local history</h3><span> </span></div> <div class=\"storage-value\"> </div> <small> </small></article> <article><div class=\"attention-heading\"><h3>Top models</h3><span class=\"status\"> </span></div> <!></article> <article><div class=\"attention-heading\"><h3>Recent sessions</h3><span class=\"status\"> </span></div> <!></article></div>"), Cl = /* @__PURE__ */ ur("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">LeanRelay · token efficiency</p> <h2> </h2></div> <div class=\"refresh-state\"><span aria-live=\"polite\"> </span> <button class=\"refresh-button\" type=\"button\" aria-label=\"Refresh dashboard data\">Refresh</button></div></div> <!> <div class=\"view-tabs\" aria-label=\"Dashboard views\" role=\"tablist\"><button type=\"button\" role=\"tab\">Overview</button> <button type=\"button\" role=\"tab\">Optimizers</button> <button type=\"button\" role=\"tab\">Activity</button></div> <!></section>");
function wl(e, t) {
	Oe(t, !1);
	let n = /* @__PURE__ */ W(), r = /* @__PURE__ */ W(), i = /* @__PURE__ */ W(), a = /* @__PURE__ */ W(), o = /* @__PURE__ */ W(), s = /* @__PURE__ */ W(), c = /* @__PURE__ */ W(), l = /* @__PURE__ */ W(), u = /* @__PURE__ */ W(), d = /* @__PURE__ */ W(), f = /* @__PURE__ */ W(), p = /* @__PURE__ */ W(), m = /* @__PURE__ */ W(), h = /* @__PURE__ */ W(), g = /* @__PURE__ */ W(), _ = /* @__PURE__ */ W(), v = /* @__PURE__ */ W(), y = /* @__PURE__ */ W(), b = /* @__PURE__ */ W(), x = /* @__PURE__ */ W(), S = /* @__PURE__ */ W(), C = /* @__PURE__ */ W(), w = /* @__PURE__ */ W(), T = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), E = /* @__PURE__ */ W("1h"), D = /* @__PURE__ */ W({}), O = /* @__PURE__ */ W({ alerts: [] }), ee = /* @__PURE__ */ W([]), te = /* @__PURE__ */ W([]), k = /* @__PURE__ */ W({}), ne = /* @__PURE__ */ W([]), re = /* @__PURE__ */ W([]), ie = /* @__PURE__ */ W({}), ae = /* @__PURE__ */ W(!0), oe = /* @__PURE__ */ W(""), se = /* @__PURE__ */ W(!1), A = /* @__PURE__ */ W(!1), j = /* @__PURE__ */ W(null), M = /* @__PURE__ */ W("overview"), N = /* @__PURE__ */ W(), P = /* @__PURE__ */ W(), F, ce, le, I = (e) => new Intl.NumberFormat().format(Number(e || 0)), ue = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, de = (e) => `$${Number(e || 0).toFixed(Number(e || 0) < 1 ? 4 : 2)}`, fe = (e) => {
		let t = Number(e || 0);
		return t >= 1048576 ? `${(t / 1048576).toFixed(1)} MB` : `${(t / 1024).toFixed(1)} KB`;
	}, pe = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m", me = (e) => {
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
	async function he(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function ge() {
		let e = document.querySelector("#window-select")?.value || Z(E);
		return T.has(e) ? e : "1h";
	}
	function _e() {
		try {
			return localStorage.getItem("apx.dashboard.window") || "";
		} catch {
			return "";
		}
	}
	function ve(e) {
		try {
			localStorage.setItem("apx.dashboard.window", e);
		} catch {}
	}
	function ye(e, t) {
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
	function L() {
		let e = Z(ee).map((e) => Number(e.ts || 0)), t = Z(ee).map((e) => Number(e.tokens_in || 0)), n = Z(ee).map((e) => Number(e.tokens_out || 0)), r = Z(ne).map((e) => Number(e.ts || 0)), i = Z(ne).map((e) => Number(e.measured_tokens_saved || 0)), a = Z(ne).map((e) => Number(e.estimated_tokens_saved || 0));
		!Z(N) || !Z(P) || (F?.destroy(), ce?.destroy(), F = void 0, ce = void 0, Z(N).replaceChildren(), Z(P).replaceChildren(), e.length >= 2 && (F = new tl(ye(Z(N), [{
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
		], Z(N))), r.length >= 2 && (ce = new tl(ye(Z(P), [{
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
		], Z(P))));
	}
	async function be(e) {
		e !== Z(M) && (Z(N) && le?.unobserve(Z(N)), Z(P) && le?.unobserve(Z(P)), F?.destroy(), ce?.destroy(), F = void 0, ce = void 0, G(M, e), await Jn(), e === "overview" && (Z(N) && le?.observe(Z(N)), Z(P) && le?.observe(Z(P)), L()));
	}
	async function R() {
		G(ae, !0), G(oe, ""), G(se, !1), G(E, ge());
		try {
			let e = [
				{
					name: "usage",
					promise: he(`/api/metrics/summary?window=${Z(E)}`),
					apply: (e) => G(D, e)
				},
				{
					name: "attention",
					promise: he(`/api/metrics/attention?window=${Z(E)}`),
					apply: (e) => G(O, e)
				},
				{
					name: "token trend",
					promise: he(`/api/metrics/timeseries?window=${Z(E)}&bucket=${pe(Z(E))}`),
					apply: (e) => G(ee, e.series || [])
				},
				{
					name: "savings",
					promise: he(`/api/metrics/efficiency?window=${Z(E)}`),
					apply: (e) => G(k, e)
				},
				{
					name: "savings trend",
					promise: he(`/api/metrics/efficiency/timeseries?window=${Z(E)}&bucket=${pe(Z(E))}`),
					apply: (e) => G(ne, e.series || [])
				},
				{
					name: "optimizer history",
					promise: he(`/api/metrics/optimizer-snapshots?window=${Z(E)}`),
					apply: (e) => G(te, e.snapshots || [])
				},
				{
					name: "sessions",
					promise: he(`/api/metrics/sessions?window=${Z(E)}&limit=5`),
					apply: (e) => G(re, e.sessions || [])
				},
				{
					name: "storage",
					promise: he("/api/metrics/operations?limit=1"),
					apply: (e) => G(ie, e)
				}
			], t = await Promise.allSettled(e.map((e) => e.promise)), n = [];
			t.forEach((t, r) => {
				t.status === "fulfilled" ? e[r].apply(t.value) : n.push(e[r].name);
			}), G(se, n.includes("usage")), G(oe, n.length ? `Some data is temporarily unavailable: ${n.join(", ")}` : ""), G(j, /* @__PURE__ */ new Date()), await Jn(), L();
		} catch (e) {
			G(oe, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			G(ae, !1);
		}
	}
	br(() => {
		let e = _e();
		T.has(e) && G(E, e);
		let t = document.querySelector("#window-select");
		t && (t.value = Z(E)), R();
		let n = () => {
			G(E, ge()), ve(Z(E)), G(A, !1), R();
		};
		t?.addEventListener("change", n);
		let r = window.setInterval(R, 1e4);
		return le = new ResizeObserver(() => L()), Z(N) && le.observe(Z(N)), Z(P) && le.observe(Z(P)), () => {
			t?.removeEventListener("change", n), window.clearInterval(r), le?.disconnect(), F?.destroy(), ce?.destroy();
		};
	});
	let z = /* @__PURE__ */ W([]);
	J(() => Z(te), () => {
		G(z, Object.values(Z(te).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), J(() => Z(z), () => {
		G(n, Z(z).map((e) => {
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
	}), J(() => Z(k), () => {
		G(r, Z(k).optimizers || []);
	}), J(() => Z(k), () => {
		G(i, Z(k).observed || {});
	}), J(() => Z(D), () => {
		G(a, Z(D).totals || {});
	}), J(() => Z(D), () => {
		G(o, Object.entries(Z(D).by_model || {}).map(([e, t]) => ({
			model: e,
			...t
		})).sort((e, t) => Number(t.tokens_in || 0) + Number(t.tokens_out || 0) - Number(e.tokens_in || 0) - Number(e.tokens_out || 0)).slice(0, 3));
	}), J(() => Z(D), () => {
		G(s, Object.keys(Z(D).by_model || {}).length);
	}), J(() => (Z(i), Z(D)), () => {
		G(c, Number(Z(i).tokens_in || Z(D).totals?.tokens_in || 0) + Number(Z(i).tokens_out || Z(D).totals?.tokens_out || 0));
	}), J(() => Z(r), () => {
		G(l, Z(r).reduce((e, t) => e + Number(t.measured_tokens_saved || 0), 0));
	}), J(() => Z(r), () => {
		G(u, Z(r).reduce((e, t) => e + Number(t.estimated_tokens_saved || 0), 0));
	}), J(() => Z(r), () => {
		G(d, Z(r).reduce((e, t) => e + Number(t.measured_attempts || 0), 0));
	}), J(() => Z(r), () => {
		G(f, Z(r).reduce((e, t) => e + Number(t.attempts || 0), 0));
	}), J(() => (Z(i), Z(l)), () => {
		G(p, Number(Z(i).tokens_in || 0) + Z(l));
	}), J(() => (Z(p), Z(l)), () => {
		G(m, Z(p) > 0 ? Z(l) / Z(p) * 100 : null);
	}), J(() => (Z(f), Z(d)), () => {
		G(h, Z(f) > 0 ? Z(d) / Z(f) * 100 : null);
	}), J(() => (Z(p), Z(i)), () => {
		G(g, Z(p) > 0 ? Number(Z(i).tokens_in || 0) / Z(p) * 100 : 0);
	}), J(() => (Z(p), Z(l)), () => {
		G(_, Z(p) > 0 ? Z(l) / Z(p) * 100 : 0);
	}), J(() => Z(D), () => {
		G(v, Number(Z(D).totals?.err_5xx || 0) + Number(Z(D).totals?.warn_4xx || 0));
	}), J(() => Z(D), () => {
		G(y, !!Z(D).totals);
	}), J(() => (Z(se), Z(y), Z(ae), Z(v)), () => {
		G(b, Z(se) ? Z(y) ? "Stale data" : "Unavailable" : !Z(y) && Z(ae) ? "Loading" : Z(v) ? `${I(Z(v))} issue${Z(v) === 1 ? "" : "s"}` : "Healthy");
	}), J(() => Z(O), () => {
		G(x, [...Z(O).alerts || []].sort((e, t) => {
			let n = {
				critical: 0,
				warning: 1,
				info: 2
			};
			return (n[e.severity] ?? 3) - (n[t.severity] ?? 3) || String(e.title || "").localeCompare(String(t.title || ""));
		}));
	}), J(() => (Z(A), Z(x)), () => {
		G(S, Z(A) ? Z(x) : Z(x).slice(0, 1));
	}), J(() => (Z(z), Z(r)), () => {
		G(C, [.../* @__PURE__ */ new Set([...Z(z).map((e) => e.optimizer), ...Z(r).map((e) => e.optimizer)])]);
	}), J(() => (Z(C), Z(z), Z(n), Z(r)), () => {
		G(w, Z(C).map((e) => ({
			name: e,
			snapshot: Z(z).find((t) => t.optimizer === e),
			reported: Z(n).find((t) => t.optimizer === e),
			measurement: Z(r).find((t) => t.optimizer === e)
		})));
	}), sn(), Yr();
	var B = Cl(), Se = K(B), Ce = K(Se), we = q(K(Ce), 2), Te = K(we, !0);
	V(we), V(Ce);
	var Ee = q(Ce, 2), H = K(Ee);
	let De;
	var Ae = K(H, !0);
	V(H);
	var je = q(H, 2);
	V(Ee), V(Se);
	var Me = q(Se, 2), Ne = (e) => {
		var t = nl(), n = K(t);
		xe(2), V(t), un(() => $(n, `${Z(oe) ?? ""}. Available sections remain visible; use `)), fr(e, t);
	};
	Sr(Me, (e) => {
		Z(oe) && e(Ne);
	});
	var Pe = q(Me, 2), Fe = K(Pe), Ie = q(Fe, 2), Le = q(Ie, 2);
	V(Pe);
	var Re = q(Pe, 2), ze = (e) => {
		var t = ul(), n = Gt(t), r = (e) => {
			var t = rl(), n = K(t), r = K(n);
			V(n);
			var i = q(n, 2), a = K(i);
			V(i), V(t), un((e) => {
				$(r, `No requests in the last ${Z(E) ?? ""}.`), $(a, `${e ?? ""} requests remain in local history. Choose a longer time window to include older activity.`);
			}, [() => (Z(ie), Q(() => I(Z(ie).requests)))]), fr(e, t);
		}, x = /* @__PURE__ */ et(() => (Z(y), Z(a), Q(() => Z(y) && Number(Z(a).requests || 0) === 0)));
		Sr(n, (e) => {
			Z(x) && e(r);
		});
		var C = q(n, 2), w = K(C), T = q(K(w)), te = K(T, !0);
		xe(), V(T);
		var k = q(T), re = K(k);
		V(k), V(w);
		var ae = q(w, 2), oe = q(K(ae)), j = K(oe, !0);
		xe(), V(oe), xe(), V(ae);
		var M = q(ae, 2), F = q(K(M)), ce = K(F, !0);
		V(F);
		var le = q(F), fe = K(le);
		V(le), V(M);
		var pe = q(M, 2), me = q(K(pe));
		let he;
		var ge = K(me, !0);
		V(me);
		var _e = q(me), ve = K(_e);
		V(_e), V(pe), V(C);
		var ye = q(C, 2), L = K(ye), be = q(K(L), 2), R = K(be, !0);
		V(be), V(L);
		var z = q(L, 2), B = K(z), Se = q(K(B)), Ce = K(Se, !0);
		V(Se), xe(), V(B);
		var we = q(B, 4), Te = q(K(we)), Ee = K(Te, !0);
		V(Te);
		var H = q(Te), De = K(H, !0);
		V(H), V(we);
		var Oe = q(we, 4), ke = q(K(Oe)), Ae = K(ke, !0);
		V(ke);
		var je = q(ke), Me = K(je, !0);
		V(je), V(Oe), V(z);
		var Ne = q(z, 2), Pe = K(Ne), Fe = q(Pe, 2);
		V(Ne);
		var Ie = q(Ne, 2), Le = q(K(Ie)), Re = K(Le, !0);
		V(Le);
		var ze = q(Le), Be = q(ze), Ve = (e) => {
			var t = il(), n = q(Gt(t)), r = K(n);
			V(n), xe(), un((e) => $(r, `${e ?? ""} estimated tokens`), [() => (Z(u), Q(() => I(Z(u))))]), fr(e, t);
		};
		Sr(Be, (e) => {
			Z(u) > 0 && e(Ve);
		}), V(Ie), V(ye);
		var He = q(ye, 2);
		let Ue;
		var We = K(He), Ge = K(We), Ke = K(Ge, !0);
		V(Ge);
		var qe = q(Ge);
		let Je;
		var Ye = K(qe);
		V(qe), V(We);
		var Xe = q(We, 2), Ze = (e) => {
			var t = sl(), n = Gt(t);
			Er(n, 5, () => Z(S), (e) => e.id, (e, t) => {
				var n = al();
				let r;
				var i = K(n), a = K(i, !0);
				V(i);
				var o = q(i), s = K(o, !0);
				V(o);
				var c = q(o), l = K(c);
				V(c), V(n), un(() => {
					r = Lr(n, 1, "signal", null, r, {
						critical: Z(t).severity === "critical",
						warning: Z(t).severity === "warning"
					}), $(a, (Z(t), Q(() => Z(t).title))), $(s, (Z(t), Q(() => Z(t).detail))), $(l, `Next: ${(Z(t), Q(() => Z(t).action)) ?? ""}`);
				}), fr(e, n);
			}), V(n);
			var r = q(n, 2), i = (e) => {
				var t = ol(), n = K(t, !0);
				V(t), un(() => {
					Ur(t, "aria-expanded", Z(A)), $(n, (Z(A), Z(O), Q(() => Z(A) ? "Show only the first signal" : `Review all ${Z(O).alerts.length} signals`)));
				}), nr("click", t, () => G(A, !Z(A))), fr(e, t);
			};
			Sr(r, (e) => {
				Z(O), Q(() => Z(O).alerts.length > 1) && e(i);
			}), fr(e, t);
		}, Qe = (e) => {
			fr(e, cl());
		};
		Sr(Xe, (e) => {
			Z(O), Q(() => Z(O).alerts?.length) ? e(Ze) : e(Qe, -1);
		}), V(He);
		var $e = q(He, 2), tt = K($e), nt = q(K(tt)), rt = K(nt, !0);
		V(nt);
		var it = q(nt), at = K(it);
		V(it), V(tt);
		var ot = q(tt, 2), st = q(K(ot)), U = K(st, !0);
		V(st), xe(), V(ot);
		var ct = q(ot, 2), lt = q(K(ct)), ut = K(lt, !0);
		V(lt);
		var dt = q(lt), ft = K(dt, !0);
		V(dt), V(ct);
		var pt = q(ct, 2), mt = q(K(pt)), ht = K(mt, !0);
		V(mt);
		var gt = q(mt), _t = K(gt);
		V(gt), V(pt), V($e);
		var vt = q($e, 2), yt = K(vt), bt = K(yt), xt = K(bt), St = q(K(xt)), Ct = K(St);
		V(St), V(xt);
		var wt = q(xt), Tt = K(wt, !0);
		V(wt), V(bt);
		var Et = q(bt, 2);
		let Dt;
		Jr(Et, (e) => G(N, e), () => Z(N));
		var Ot = q(Et), kt = (e) => {
			fr(e, ll());
		};
		Sr(Ot, (e) => {
			Z(ee), Q(() => Z(ee).length < 2) && e(kt);
		}), V(yt);
		var At = q(yt, 2), jt = K(At), W = K(jt), Mt = q(K(W)), Nt = K(Mt);
		V(Mt), V(W), xe(), V(jt);
		var Pt = q(jt, 2);
		let Ft;
		Jr(Pt, (e) => G(P, e), () => Z(P));
		var It = q(Pt), Lt = (e) => {
			fr(e, ll());
		};
		Sr(It, (e) => {
			Z(ne), Q(() => Z(ne).length < 2) && e(Lt);
		}), V(At), V(vt), un((e, t, n, r, i, a, s, c, l, u, d, f, p, m, h, x, S, C, w, T, D, k, ie, ae, oe, A, M, N, P, F) => {
			$(te, e), $(re, `Actually sent: ${t ?? ""} input + ${n ?? ""} output`), $(j, r), $(ce, i), $(fe, `${a ?? ""} removed from ${s ?? ""} baseline input tokens`), he = Lr(me, 1, "", null, he, { healthy: Z(y) && Z(v) === 0 && !Z(se) }), $(ge, Z(b)), $(ve, `${c ?? ""} requests · p95 ${l ?? ""}`), $(R, Z(E)), $(Ce, u), $(Ee, d), $(De, f), $(Ae, p), $(Me, m), zr(Pe, `width:${Z(g)}%`), zr(Fe, `width:${Z(_)}%`), $(Re, h), $(ze, ` · ${x ?? ""} of ${S ?? ""} optimizer attempts supplied valid before/after token counts. `), Ue = Lr(He, 1, "attention", null, Ue, { "has-signals": Z(O).alerts?.length }), $(Ke, (Z(O), Q(() => Z(O).alerts?.length ? "Needs attention" : "No action needed"))), Je = Lr(qe, 1, "status", null, Je, C), $(Ye, `${(Z(O), Q(() => Z(O).alerts?.length || 0)) ?? ""} signals`), $(rt, w), $(at, `tokens read · ${T ?? ""} written`), $(U, D), $(ut, k), $(ft, (Z(o), Q(() => Z(o)[0]?.model || "no model activity"))), $(ht, ie), $(_t, `tool calls · ${ae ?? ""} streamed requests`), $(Ct, `${oe ?? ""} input · ${A ?? ""} output tokens in this window`), $(Tt, Z(E)), Dt = Lr(Et, 1, "plot", null, Dt, { empty: Z(ee).length < 2 }), Ur(Et, "aria-label", M), $(Nt, `${N ?? ""} verified · ${P ?? ""} estimated tokens excluded`), Ft = Lr(Pt, 1, "plot", null, Ft, { empty: Z(ne).length < 2 }), Ur(Pt, "aria-label", F);
		}, [
			() => (Z(c), Q(() => I(Z(c)))),
			() => (Z(i), Q(() => I(Z(i).tokens_in))),
			() => (Z(i), Q(() => I(Z(i).tokens_out))),
			() => (Z(l), Q(() => I(Z(l)))),
			() => (Z(m), Q(() => Z(m) == null ? "not measured" : `${Z(m).toFixed(1)}%`)),
			() => (Z(l), Q(() => I(Z(l)))),
			() => (Z(p), Q(() => I(Z(p)))),
			() => (Z(D), Q(() => I(Z(D).totals?.requests))),
			() => (Z(D), Q(() => ue(Z(D).latency_ms?.p95))),
			() => (Z(p), Q(() => I(Z(p)))),
			() => (Z(i), Q(() => I(Z(i).tokens_in))),
			() => (Z(p), Z(g), Q(() => Z(p) ? `${Z(g).toFixed(1)}% of baseline` : "not observed")),
			() => (Z(l), Q(() => I(Z(l)))),
			() => (Z(p), Z(_), Q(() => Z(p) ? `${Z(_).toFixed(1)}% verified reduction` : "not measured")),
			() => (Z(h), Q(() => Z(h) == null ? "not measured" : `${Z(h).toFixed(0)}%`)),
			() => (Z(d), Q(() => I(Z(d)))),
			() => (Z(f), Q(() => I(Z(f)))),
			() => ({
				ok: !Z(O).alerts?.length,
				warn: Z(O).alerts?.some((e) => e.severity === "warning"),
				fail: Z(O).alerts?.some((e) => e.severity === "critical")
			}),
			() => (Z(a), Q(() => I(Z(a).cache_read_tokens))),
			() => (Z(a), Q(() => I(Z(a).cache_write_tokens))),
			() => (Z(a), Q(() => de(Z(a).cost_est_usd))),
			() => (Z(s), Q(() => I(Z(s)))),
			() => (Z(a), Q(() => I(Z(a).tool_calls))),
			() => (Z(a), Q(() => I(Z(a).streams))),
			() => (Z(i), Q(() => I(Z(i).tokens_in))),
			() => (Z(i), Q(() => I(Z(i).tokens_out))),
			() => (Z(E), Z(i), Q(() => `Token flow over ${Z(E)}: ${I(Z(i).tokens_in)} input and ${I(Z(i).tokens_out)} output tokens.`)),
			() => (Z(l), Q(() => I(Z(l)))),
			() => (Z(u), Q(() => I(Z(u)))),
			() => (Z(E), Z(l), Z(u), Q(() => `Savings over ${Z(E)}: ${I(Z(l))} verified tokens saved and ${I(Z(u))} estimated tokens excluded.`))
		]), fr(e, t);
	}, Be = (e) => {
		var t = gl(), n = Gt(t), r = K(n), i = q(K(r)), a = K(i);
		V(i);
		var o = q(i), s = K(o);
		V(o), V(r);
		var c = q(r, 2), p = q(K(c)), m = K(p, !0);
		V(p);
		var g = q(p), _ = K(g);
		V(g), V(c);
		var v = q(c, 2), y = q(K(v)), b = K(y, !0);
		V(y);
		var x = q(y), S = K(x, !0);
		V(x), V(v), V(n);
		var C = q(n, 4), T = K(C), E = (e) => {
			var t = dr();
			Er(Gt(t), 1, () => Z(w), (e) => e.name, (e, t) => {
				let n = /* @__PURE__ */ tt(() => (Z(t), Q(() => me(Z(t).name)))), r = /* @__PURE__ */ tt(() => (Z(t), Q(() => Number(Z(t).measurement?.attempts || 0)))), i = /* @__PURE__ */ tt(() => (Z(t), Q(() => Number(Z(t).measurement?.measured_attempts || 0)))), a = /* @__PURE__ */ tt(() => Z(r) ? Z(i) / Z(r) * 100 : null);
				var o = ml();
				let s;
				var c = K(o), l = K(c), u = K(l), d = K(u, !0);
				V(u);
				var f = q(u), p = K(f, !0);
				V(f), V(l);
				var m = q(l, 2);
				let h;
				var g = K(m, !0);
				V(m), V(c);
				var _ = q(c, 2), v = K(_), y = q(K(v)), b = K(y), x = q(b), S = (e) => {
					fr(e, dl());
				};
				Sr(x, (e) => {
					Z(t), Q(() => Z(t).measurement) && e(S);
				}), V(y), V(v);
				var C = q(v, 2), w = q(K(C));
				let T;
				var E = K(w), D = q(E), O = (e) => {
					fr(e, dl());
				};
				Sr(D, (e) => {
					Z(t), Q(() => Z(t).reported?.saved != null) && e(O);
				}), V(w), V(C), V(_);
				var ee = q(_, 2), te = K(ee), k = q(K(te)), ne = K(k, !0);
				V(k), V(te);
				var re = q(te, 2), ie = K(re);
				V(re);
				var ae = q(re, 2), oe = K(ae);
				V(ae), V(ee);
				var se = q(ee, 2), A = K(se), j = q(K(A)), M = K(j, !0);
				V(j), V(A);
				var N = q(A, 2), P = q(K(N)), F = K(P, !0);
				V(P), V(N);
				var ce = q(N, 2), le = q(K(ce)), fe = K(le, !0);
				V(le), V(ce);
				var pe = q(ce, 2), he = q(K(pe)), ge = K(he, !0);
				V(he), V(pe), V(se);
				var _e = q(se, 2), ve = (e) => {
					var n = fl(), r = K(n);
					V(n), un((e) => $(r, `Top bypass: ${(Z(t), Q(() => Z(t).measurement.bypass_reasons[0].reason)) ?? ""} (${e ?? ""})`), [() => (Z(t), Q(() => I(Z(t).measurement.bypass_reasons[0].count)))]), fr(e, n);
				};
				Sr(_e, (e) => {
					Z(t), Q(() => Z(t).measurement?.bypass_reasons?.length) && e(ve);
				});
				var ye = q(_e, 2), L = K(ye), be = K(L, !0);
				V(L);
				var R = q(L, 2), z = (e) => {
					var t = pl(), r = K(t);
					xe(), V(t), un(() => {
						Ur(t, "href", (Zn(Z(n)), Q(() => Z(n).href))), $(r, `${(Zn(Z(n)), Q(() => Z(n).label)) ?? ""} `);
					}), fr(e, t);
				};
				Sr(R, (e) => {
					Z(n) && e(z);
				}), V(ye), V(o), un((e, n, r, i, c, l, u, f, _, v, y) => {
					s = Lr(o, 1, "optimizer-card", null, s, { down: Z(t).snapshot && !Z(t).snapshot.reachable }), $(d, (Z(t), Q(() => Z(t).name))), $(p, (Z(t), Q(() => Z(t).snapshot?.reachable ? Z(t).reported?.saved == null ? "Connected; native counters unavailable" : "Connected and reporting" : Z(t).snapshot ? "Not reachable at last check" : "No health snapshot in this window"))), h = Lr(m, 1, "status", null, h, {
						ok: Z(t).snapshot?.reachable,
						warn: !Z(t).snapshot,
						fail: Z(t).snapshot && !Z(t).snapshot.reachable
					}), $(g, (Z(t), Q(() => Z(t).snapshot?.reachable ? "reachable" : Z(t).snapshot ? "unreachable" : "not checked"))), $(b, `${e ?? ""} `), T = Lr(w, 1, "", null, T, { unavailable: Z(t).reported?.saved == null }), $(E, `${n ?? ""} `), $(ne, r), zr(ie, `width:${Z(a) || 0}%`), $(oe, `${i ?? ""} verified · ${c ?? ""} estimated · ${l ?? ""} unavailable`), $(M, u), $(F, f), $(fe, _), $(ge, v), $(be, y);
				}, [
					() => (Z(t), Q(() => Z(t).measurement ? I(Z(t).measurement.measured_tokens_saved) : "no attempts")),
					() => (Z(t), Q(() => Z(t).reported?.saved == null ? "not reported" : I(Z(t).reported.saved))),
					() => (Zn(Z(a)), Q(() => Z(a) == null ? "not measured" : `${Z(a).toFixed(0)}%`)),
					() => (Zn(Z(i)), Q(() => I(Z(i)))),
					() => (Z(t), Q(() => I(Z(t).measurement?.estimated_attempts))),
					() => (Z(t), Q(() => I(Z(t).measurement?.unavailable_attempts))),
					() => (Z(t), Q(() => Z(t).reported?.rate == null ? "not reported" : `${Number(Z(t).reported.rate).toFixed(1)}%`)),
					() => (Z(t), Q(() => Z(t).reported?.requests == null ? "not reported" : I(Z(t).reported.requests))),
					() => (Z(t), Q(() => Z(t).measurement?.optimizer_latency_avg_ms == null ? "not measured" : ue(Z(t).measurement.optimizer_latency_avg_ms))),
					() => (Z(t), Q(() => Z(t).reported?.usd == null ? "not reported" : de(Z(t).reported.usd))),
					() => (Z(t), Q(() => Z(t).snapshot ? `Checked ${(/* @__PURE__ */ new Date(Number(Z(t).snapshot.ts || 0) * 1e3)).toLocaleString()}` : "No health snapshot yet"))
				]), fr(e, o);
			}), fr(e, t);
		}, D = (e) => {
			fr(e, hl());
		};
		Sr(T, (e) => {
			Z(w), Q(() => Z(w).length) ? e(E) : e(D, -1);
		}), V(C), un((e, t, n, r, i) => {
			$(a, `${e ?? ""} tokens`), $(s, `Request-level evidence · ${t ?? ""} estimated excluded`), $(m, n), $(_, `${r ?? ""} of ${i ?? ""} attempts verified`), $(b, (Z(k), Q(() => Z(k).durable ? "Durable" : "Unavailable"))), $(S, (Z(k), Q(() => Z(k).durable ? "Measurements survive restarts" : Z(k).note || "SQLite metrics unavailable")));
		}, [
			() => (Z(l), Q(() => I(Z(l)))),
			() => (Z(u), Q(() => I(Z(u)))),
			() => (Z(h), Q(() => Z(h) == null ? "not measured" : `${Z(h).toFixed(0)}%`)),
			() => (Z(d), Q(() => I(Z(d)))),
			() => (Z(f), Q(() => I(Z(f))))
		]), fr(e, t);
	}, Ve = (e) => {
		var t = Sl(), n = K(t), r = K(n), i = q(K(r));
		let a;
		var s = K(i, !0);
		V(i), V(r);
		var c = q(r, 2), l = K(c);
		V(c);
		var u = q(c, 2), d = K(u);
		V(u), V(n);
		var f = q(n, 2), p = K(f), m = q(K(p)), h = K(m, !0);
		V(m), V(p);
		var g = q(p, 2), _ = (e) => {
			var t = vl();
			Er(t, 5, () => Z(o), (e) => e.model, (e, t) => {
				var n = _l(), r = K(n), i = K(r, !0);
				V(r);
				var a = q(r), o = K(a);
				V(a);
				var s = q(a), c = K(s);
				V(s), V(n), un((e, n, r) => {
					$(i, (Z(t), Q(() => Z(t).model))), $(o, `${e ?? ""} requests`), $(c, `${n ?? ""} tokens · ${r ?? ""}`);
				}, [
					() => (Z(t), Q(() => I(Z(t).requests))),
					() => (Z(t), Q(() => I(Number(Z(t).tokens_in || 0) + Number(Z(t).tokens_out || 0)))),
					() => (Z(t), Q(() => de(Z(t).cost_usd)))
				]), fr(e, n);
			}), V(t), fr(e, t);
		}, v = (e) => {
			fr(e, yl());
		};
		Sr(g, (e) => {
			Z(o), Q(() => Z(o).length) ? e(_) : e(v, -1);
		}), V(f);
		var y = q(f, 2), b = K(y), x = q(K(b)), S = K(x);
		V(x), V(b);
		var C = q(b, 2), w = (e) => {
			var t = vl();
			Er(t, 5, () => Z(re), (e) => e.session_id, (e, t) => {
				var n = bl(), r = K(n), i = K(r, !0);
				V(r);
				var a = q(r), o = K(a);
				V(a);
				var s = q(a, 2), c = K(s);
				V(s), V(n), un((e, n, a, s) => {
					Ur(r, "title", (Z(t), Q(() => Z(t).session_id))), $(i, (Z(t), Q(() => Z(t).last_model || "unknown model"))), $(o, `${e ?? ""} requests`), $(c, `${(Z(t), Q(() => Z(t).chain_mode || "direct")) ?? ""} · ${n ?? ""} processed
                · ${a ?? ""} verified saved · ${s ?? ""}`);
				}, [
					() => (Z(t), Q(() => I(Z(t).requests))),
					() => (Z(t), Q(() => I(Number(Z(t).tokens_in || 0) + Number(Z(t).tokens_out || 0)))),
					() => (Z(t), Q(() => I(Z(t).measured_tokens_saved))),
					() => (Z(t), Q(() => de(Z(t).cost_usd)))
				]), fr(e, n);
			}), V(t), fr(e, t);
		}, T = (e) => {
			fr(e, xl());
		};
		Sr(C, (e) => {
			Z(re), Q(() => Z(re).length) ? e(w) : e(T, -1);
		}), V(y), V(t), un((e, t, n) => {
			a = Lr(i, 1, "status", null, a, {
				ok: Z(ie).durable,
				warn: !Z(ie).durable
			}), $(s, (Z(ie), Q(() => Z(ie).durable ? "durable" : "fallback"))), $(l, `${e ?? ""} requests stored`), $(d, `${t ?? ""} SQLite · ${n ?? ""} day retention`), $(h, Z(E)), $(S, `${(Z(re), Q(() => Z(re).length)) ?? ""} shown`);
		}, [
			() => (Z(ie), Q(() => I(Z(ie).requests))),
			() => (Z(ie), Q(() => fe(Z(ie).db_size_bytes))),
			() => (Z(ie), Q(() => I(Z(ie).retention_days)))
		]), fr(e, t);
	};
	Sr(Re, (e) => {
		Z(M) === "overview" ? e(ze) : Z(M) === "optimizers" ? e(Be, 1) : e(Ve, -1);
	}), V(B), un((e) => {
		$(Te, Z(M) === "overview" ? "Token efficiency overview" : Z(M) === "optimizers" ? "Optimizer details" : "Persisted activity"), De = Lr(H, 1, "status", null, De, {
			ok: !Z(ae) && !Z(oe),
			warn: Z(ae) || !!Z(oe) && Z(y),
			fail: !!Z(oe) && !Z(y)
		}), $(Ae, e), je.disabled = Z(ae), Ur(Fe, "aria-selected", Z(M) === "overview"), Ur(Ie, "aria-selected", Z(M) === "optimizers"), Ur(Le, "aria-selected", Z(M) === "activity");
	}, [() => (Z(oe), Z(ae), Z(j), Q(() => Z(oe) ? "partial data" : Z(ae) ? "refreshing" : Z(j) ? `updated ${Z(j).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	})}` : "ready"))]), nr("click", je, R), nr("click", Fe, () => be("overview")), nr("click", Ie, () => be("optimizers")), nr("click", Le, () => be("activity")), fr(e, B), ke();
}
rr(["click"]);
//#endregion
//#region src/main.js
var Tl = "svelte-uplot", El = document.querySelector("#svelte-overview");
El && (El.replaceChildren(), hr(wl, { target: El }));
//#endregion
export { wl as App, Tl as dashboardBuild };
