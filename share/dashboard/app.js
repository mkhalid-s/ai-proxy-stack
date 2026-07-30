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
function j(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function le() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function M(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ue(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function de() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function pe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function me() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function he() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ge() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _e() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ve() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ye(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function be() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var N = !1;
function xe(e) {
	N = e;
}
var P;
function Se(e) {
	if (e === null) throw ye(), n;
	return P = e;
}
function Ce() {
	return Se(/* @__PURE__ */ Gt(P));
}
function F(e) {
	if (N) {
		if (/* @__PURE__ */ Gt(P) !== null) throw ye(), n;
		P = e;
	}
}
function I(e = 1) {
	if (N) {
		for (var t = e, n = P; t--;) n = /* @__PURE__ */ Gt(n);
		P = n;
	}
}
function L(e = !0) {
	for (var t = 0, n = P;;) {
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
function we(e) {
	if (!e || e.nodeType !== 8) throw ye(), n;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Te(e) {
	return e === this.v;
}
function Ee(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function De(e) {
	return !Ee(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var R = null;
function Oe(e) {
	R = e;
}
function ke(t, n = !1, r) {
	R = {
		p: R,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: K,
		l: e && !n ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Ae(e) {
	var t = R, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) nn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, R = t.p, e ?? {};
}
function je() {
	return !e || R !== null && R.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Me = [];
function Ne() {
	var e = Me;
	Me = [], _(e);
}
function Pe(e) {
	if (Me.length === 0 && !ut) {
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
	var t = K;
	if (t === null) return G.f |= re, e;
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
var Re = ~(b | x | y);
function ze(e, t) {
	e.f = e.f & Re | t;
}
function Be(e) {
	e.f & 512 || e.deps === null ? ze(e, y) : ze(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ve(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= te, Ve(t.deps));
}
function He(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ve(e.deps), ze(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ue(e) {
	var t = G, n = K;
	On(null), kn(null);
	try {
		return e();
	} finally {
		On(t), kn(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function We(e) {
	let t = 0, n = kt(0), r;
	return () => {
		$t() && (q(n), ln(() => (t === 0 && (r = J(() => e(() => Ft(n)))), t += 1, () => {
			Pe(() => {
				--t, t === 0 && (r?.(), r = void 0, Ft(n));
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
	#t = N ? P : null;
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
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = W(() => {
			if (N) {
				let e = this.#t;
				Ce();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ge), N && (this.#e = P);
	}
	#g() {
		try {
			this.#a = dn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Pe(r), t && (this.#s = dn(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				be();
				return;
			}
			t = !0, n && _e(), this.#s !== null && vn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = dn(() => e(this.#e)), Pe(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ut();
			e.append(t), this.#a = this.#S(() => dn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, vn(this.#o, () => {
				this.#o = null;
			}), this.#x(z));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = dn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = dn(() => t(this.#e));
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
		var t = K, n = G, r = R;
		kn(this.#i), On(this.#i), Oe(this.#i.ctx);
		try {
			return gt.ensure(), e();
		} catch (e) {
			return Ie(e), null;
		} finally {
			kn(t), On(n), Oe(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && vn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Pe(() => {
			this.#d = !1, this.#m && Nt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		z?.is_fork ? (this.#a && z.skip_effect(this.#a), this.#o && z.skip_effect(this.#o), this.#s && z.skip_effect(this.#s), z.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (hn(this.#a), null), this.#o &&= (hn(this.#o), null), this.#s &&= (hn(this.#s), null), N && (Se(this.#t), I(), Se(L()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return dn(() => {
						var r = K;
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
	let i = je() ? Qe : tt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = Ye(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
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
	var e = K, t = G, n = R, r = z;
	return function(i = !0) {
		kn(e), On(t), Oe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xe(e = !0) {
	kn(null), On(null), Oe(null), e && z?.deactivate();
}
function Ze() {
	var e = K, t = e.b, n = z, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Qe(e) {
	var t = 2 | b;
	return K !== null && (K.f |= D), {
		ctx: R,
		deps: null,
		effects: null,
		equals: Te,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: r,
		wv: 0,
		parent: K,
		ac: null
	};
}
var $e = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function et(e, t, n) {
	let i = K;
	i === null && le();
	var a = void 0, o = kt(r), s = !G, c = /* @__PURE__ */ new Set();
	return cn(() => {
		var t = K, n = v();
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
			l?.(), c.delete(n), t !== $e && (r.activate(), t ? (o.f |= re, Nt(o, t)) : (o.f & 8388608 && (o.f ^= re), Nt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), en(() => {
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
	return t.equals = De, t;
}
function nt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) hn(t[n]);
	}
}
function rt(e) {
	var t, n = K, i = e.parent;
	if (!Tn && i !== null && e.v !== r && i.f & 24576) return ve(), e.v;
	kn(i);
	try {
		e.f &= ~te, nt(e), t = Un(e);
	} finally {
		kn(n);
	}
	return t;
}
function it(e) {
	var t = rt(e);
	if (!e.equals(t) && (e.wv = Bn(), (!z?.is_fork || e.deps === null) && (z === null ? e.v = t : (z.capture(e, t, !0), ct?.capture(e, t, !0)), e.deps === null))) {
		ze(e, y);
		return;
	}
	Tn || (B === null ? Be(e) : ($t() || z?.is_fork) && B.set(e, t));
}
function at(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ue(() => {
		t.ac.abort(A), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Gn(t, 0), pn(t));
}
function ot(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Kn(t);
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
			for (var r of n.d) ze(r, b), t(r);
			for (r of n.m) ze(r, x), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, mt++ > 1e3 && (this.#x(), vt());
		for (let e of this.#u) this.#d.delete(e), ze(e, b), this.schedule(e);
		for (let e of this.#d) ze(e, x), this.schedule(e);
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
				a ? r.f ^= y : i & 4 ? t.push(r) : Vn(r) && (i & 16 && this.#d.add(r), Kn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), ze(i, b), this.schedule(i));
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
		return (this.#s ??= v()).promise;
	}
	static ensure() {
		if (z === null) {
			let t = z = new e();
			!dt && !ut && Pe(() => {
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
			if (ft !== null && t === K && (G === null || !(G.f & 2))) return;
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
			if (Fe(), z === null) return n;
			z.flush();
		}
	} finally {
		ut = t;
	}
}
function vt() {
	try {
		pe();
	} catch (e) {
		Le(e, lt);
	}
}
var yt = null;
function bt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Vn(r) && (yt = /* @__PURE__ */ new Set(), Kn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && _n(r), yt?.size > 0)) {
				Dt.clear();
				for (let e of yt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) yt.has(n) && (yt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Kn(n);
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
		e & 2 ? xt(i, t, n, r) : e & 4194320 && !(e & 2048) && St(i, t, r) && (ze(i, b), Ct(i));
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
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), ze(e, y);
		for (var n = e.first; n !== null;) wt(n, t), n = n.next;
	}
}
function Tt(e) {
	ze(e, y);
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
		equals: Te,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function At(e, t) {
	let n = kt(e, t);
	return jn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function jt(t, n = !1, r = !0) {
	let i = kt(t);
	return n || (i.equals = De), e && r && R !== null && R.l !== null && (R.l.s ??= []).push(i), i;
}
function Mt(e, t, n = !1) {
	return G !== null && (!Dn || G.f & 131072) && je() && G.f & 4325394 && (An === null || !An.has(e)) && ge(), Nt(e, n ? Lt(t) : t, pt);
}
function Nt(e, t, n = null) {
	if (!e.equals(t)) {
		Dt.set(e, Tn ? t : e.v);
		var r = gt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && rt(t), B === null && Be(t);
		}
		e.wv = Bn(), It(e, b, n), je() && K !== null && K.f & 1024 && !(K.f & 96) && (Pn === null ? Fn([e]) : Pn.push(e)), !r.is_fork && Et.size > 0 && !Ot && Pt();
	}
	return t;
}
function Pt() {
	Ot = !1;
	for (let e of Et) {
		e.f & 1024 && ze(e, x);
		let t;
		try {
			t = Vn(e);
		} catch {
			t = !0;
		}
		t && Kn(e);
	}
	Et.clear();
}
function Ft(e) {
	Mt(e, e.v + 1);
}
function It(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = je(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & b) === 0;
			if (l && ze(s, t), c & 131072) Et.add(s);
			else if (c & 2) {
				var u = s;
				B?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= te), It(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && yt !== null && yt.add(d), n === null ? Ct(d) : n.push(d);
			}
		}
	}
}
function Lt(e) {
	if (typeof e != "object" || !e || ie in e) return e;
	let t = p(e);
	if (t !== d && t !== f) return e;
	var n = /* @__PURE__ */ new Map(), a = i(e), o = /* @__PURE__ */ At(0), s = null, c = Rn, u = (e) => {
		if (Rn === c) return e();
		var t = G, n = Rn;
		On(null), zn(c);
		var r = e();
		return On(t), zn(n), r;
	};
	return a && n.set("length", /* @__PURE__ */ At(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && me();
			var i = n.get(t);
			return i === void 0 ? u(() => {
				var e = /* @__PURE__ */ At(r.value, s);
				return n.set(t, e), e;
			}) : Mt(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = u(() => /* @__PURE__ */ At(r, s));
					n.set(t, e), Ft(o);
				}
			} else Mt(i, r), Ft(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ie) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || l(t, i)?.writable) && (o = u(() => /* @__PURE__ */ At(Lt(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
				var d = q(o);
				return d === r ? void 0 : d;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = n.get(t);
				a && (i.value = q(a));
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
			return (i !== void 0 || K !== null && (!a || l(e, t)?.writable)) && (i === void 0 && (i = u(() => /* @__PURE__ */ At(a ? Lt(e[t]) : r, s)), n.set(t, i)), q(i) === r) ? !1 : a;
		},
		set(e, t, i, c) {
			var d = n.get(t), f = t in e;
			if (a && t === "length") for (var p = i; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ At(r, s)), n.set(p + "", m)) : Mt(m, r);
			}
			if (d === void 0) (!f || l(e, t)?.writable) && (d = u(() => /* @__PURE__ */ At(void 0, s)), Mt(d, Lt(i)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = u(() => Lt(i));
				Mt(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, i), !f) {
				if (a && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && Mt(_, v + 1);
				}
				Ft(o);
			}
			return !0;
		},
		ownKeys(e) {
			q(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== r;
			});
			for (var [i, a] of n) a.v !== r && !(i in e) && t.push(i);
			return t;
		},
		setPrototypeOf() {
			he();
		}
	});
}
var Rt, zt, Bt, Vt;
function Ht() {
	if (Rt === void 0) {
		Rt = window, zt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Bt = l(t, "firstChild").get, Vt = l(t, "nextSibling").get, m(e) && (e[oe] = void 0, e[ae] = null, e[se] = void 0, e.__e = void 0), m(n) && (n[ce] = void 0);
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
function V(e, t) {
	if (!N) return /* @__PURE__ */ Wt(e);
	var n = /* @__PURE__ */ Wt(P);
	if (n === null) n = P.appendChild(Ut());
	else if (t && n.nodeType !== 3) {
		var r = Ut();
		return n?.before(r), Se(r), r;
	}
	return t && Yt(n), Se(n), n;
}
function H(e, t = 1, n = !1) {
	let r = N ? P : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Gt(r);
	if (!N) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ut();
			return r === null ? i?.after(a) : r.before(a), Se(a), a;
		}
		Yt(r);
	}
	return Se(r), r;
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
	K === null && (G === null && fe(e), de()), Tn && ue(e);
}
function Zt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= S);
	var r = {
		ctx: R,
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
			Kn(r);
		} catch (e) {
			throw hn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= E));
	}
	if (i !== null && (i.parent = n, n !== null && Zt(i, n), G !== null && G.f & 2 && !(e & 64))) {
		var a = G;
		(a.effects ??= []).push(i);
	}
	return r;
}
function $t() {
	return G !== null && !Dn;
}
function en(e) {
	let t = Qt(8, null);
	return ze(t, y), t.teardown = e, t;
}
function tn(e) {
	Xt("$effect");
	var t = K.f;
	if (!G && t & 32 && R !== null && !R.i) {
		var n = R;
		(n.e ??= []).push(e);
	} else return nn(e);
}
function nn(e) {
	return Qt(4 | O, e);
}
function rn(e) {
	return Xt("$effect.pre"), Qt(8 | O, e);
}
function an(e) {
	gt.ensure();
	let t = Qt(64 | D, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? vn(t, () => {
			hn(t), n(void 0);
		}) : (hn(t), n(void 0));
	});
}
function U(e) {
	return Qt(4, e);
}
function on(e, t) {
	var n = R, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = ln(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = K;
			try {
				kn(n.parent), J(t);
			} finally {
				kn(n);
			}
		}
	});
}
function sn() {
	var e = R;
	ln(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && ze(n, x), Vn(n) && Kn(n), t.ran = !1;
		}
	});
}
function cn(e) {
	return Qt(ne | D, e);
}
function ln(e, t = 0) {
	return Qt(8 | t, e);
}
function un(e, t = [], n = [], r = []) {
	Je(r, t, n, (t) => {
		Qt(8, () => {
			e(...t.map(q));
		});
	});
}
function W(e, t = 0) {
	return Qt(16 | t, e);
}
function dn(e) {
	return Qt(32 | D, e);
}
function fn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Tn, n = G;
		En(!0), On(null);
		try {
			t.call(null);
		} finally {
			En(e), On(n);
		}
	}
}
function pn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ue(() => {
			e.abort(A);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : hn(n, t), n = r;
	}
}
function mn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || hn(t), t = n;
	}
}
function hn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (gn(e.nodes.start, e.nodes.end), n = !0), e.f |= T, pn(e, t && !n), Gn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	fn(e), e.f ^= T, e.f |= C;
	var i = e.parent;
	i !== null && i.first !== null && _n(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function gn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Gt(e);
		e.remove(), e = n;
	}
}
function _n(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function vn(e, t, n = !0) {
	var r = [];
	yn(e, r, !0);
	var i = () => {
		n && hn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function yn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= S;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				yn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function bn(e) {
	xn(e, !0);
}
function xn(e, t) {
	if (e.f & 8192) {
		e.f ^= S, e.f & 1024 || (ze(e, b), gt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			xn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Sn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Gt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Cn = null, wn = !1, Tn = !1;
function En(e) {
	Tn = e;
}
var G = null, Dn = !1;
function On(e) {
	G = e;
}
var K = null;
function kn(e) {
	K = e;
}
var An = null;
function jn(e) {
	G !== null && (An ??= /* @__PURE__ */ new Set()).add(e);
}
var Mn = null, Nn = 0, Pn = null;
function Fn(e) {
	Pn = e;
}
var In = 1, Ln = 0, Rn = Ln;
function zn(e) {
	Rn = e;
}
function Bn() {
	return ++In;
}
function Vn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~te), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Vn(a) && it(a), a.wv > e.wv) return !0;
		}
		t & 512 && B === null && ze(e, y);
	}
	return !1;
}
function Hn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(An !== null && An.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Hn(a, t, !1) : t === a && (n ? ze(a, b) : a.f & 1024 && ze(a, x), Ct(a));
	}
}
function Un(e) {
	var t = Mn, n = Nn, r = Pn, i = G, a = An, o = R, s = Dn, c = Rn, l = e.f;
	Mn = null, Nn = 0, Pn = null, G = l & 96 ? null : e, An = null, Oe(e.ctx), Dn = !1, Rn = ++Ln, e.ac !== null && (Ue(() => {
		e.ac.abort(A);
	}), e.ac = null);
	try {
		e.f |= k;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = z?.is_fork;
		if (Mn !== null) {
			var m;
			if (p || Gn(e, Nn), f !== null && Nn > 0) for (f.length = Nn + Mn.length, m = 0; m < Mn.length; m++) f[Nn + m] = Mn[m];
			else e.deps = f = Mn;
			if ($t() && e.f & 512) for (m = Nn; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Nn < f.length && (Gn(e, Nn), f.length = Nn);
		if (je() && Pn !== null && !Dn && f !== null && !(e.f & 6146)) for (m = 0; m < Pn.length; m++) Hn(Pn[m], e);
		if (i !== null && i !== e) {
			if (Ln++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ln;
			if (t !== null) for (let e of t) e.rv = Ln;
			Pn !== null && (r === null ? r = Pn : r.push(...Pn));
		}
		return e.f & 8388608 && (e.f ^= re), d;
	} catch (e) {
		return Ie(e);
	} finally {
		e.f ^= k, Mn = t, Nn = n, Pn = r, G = i, An = a, Oe(o), Dn = s, Rn = c;
	}
}
function Wn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = a.call(n, e);
		if (i !== -1) {
			var s = n.length - 1;
			s === 0 ? n = t.reactions = null : (n[i] = n[s], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Mn === null || !o.call(Mn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~te), c.v !== r && Be(c), c.ac !== null && Ue(() => {
			c.ac.abort(A), c.ac = null, ze(c, b);
		}), at(c), Gn(c, 0);
	}
}
function Gn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Wn(e, n[r]);
}
function Kn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ze(e, y);
		var n = K, r = wn;
		K = e, wn = (t & 96) == 0;
		try {
			t & 16777232 ? mn(e) : pn(e), fn(e);
			var i = Un(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = In;
		} finally {
			wn = r, K = n;
		}
	}
}
async function qn() {
	await Promise.resolve(), _t();
}
function q(e) {
	var t = (e.f & 2) != 0;
	if (Cn?.add(e), G !== null && !Dn && !(K !== null && K.f & 16384) && (An === null || !An.has(e))) {
		var n = G.deps;
		if (G.f & 2097152) e.rv < Ln && (e.rv = Ln, Mn === null && n !== null && n[Nn] === e ? Nn++ : Mn === null ? Mn = [e] : Mn.push(e));
		else {
			G.deps ??= [], o.call(G.deps, e) || G.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [G] : o.call(r, G) || r.push(G);
		}
	}
	if (Tn && Dt.has(e)) return Dt.get(e);
	if (t) {
		var i = e;
		if (Tn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Yn(i)) && (a = rt(i)), Dt.set(i, a), a;
		}
		var s = (i.f & 512) == 0 && !Dn && G !== null && (wn || (G.f & 512) != 0), c = (i.f & w) === 0;
		Vn(i) && (s && (i.f |= 512), it(i)), s && !c && (ot(i), Jn(i));
	}
	if (B?.has(e)) return B.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Jn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ot(t), Jn(t));
}
function Yn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Dt.has(t) || t.f & 2 && Yn(t)) return !0;
	return !1;
}
function J(e) {
	var t = Dn;
	try {
		return Dn = !0, e();
	} finally {
		Dn = t;
	}
}
function Xn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ie in e) Zn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ie in n && Zn(n);
		}
	}
}
function Zn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Zn(e[n], t);
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
var Qn = Symbol("events"), $n = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new Set(), tr = null;
function nr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	tr = e;
	var o = 0, s = tr === e && e[Qn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Qn] = t;
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
		var d = G, f = K;
		On(null), kn(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Qn]?.[r];
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
			e[Qn] = t, delete e.currentTarget, On(d), kn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var rr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ir(e) {
	return rr?.createHTML(e) ?? e;
}
function ar(e) {
	var t = Jt("template");
	return t.innerHTML = ir(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function or(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function sr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (N) return or(P, null), P;
		i === void 0 && (i = ar(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Wt(i)));
		var t = r || zt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Wt(t), s = t.lastChild;
			or(o, s);
		} else or(t, t);
		return t;
	};
}
function cr(e, t) {
	if (N) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = P), Ce();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var lr = ["touchstart", "touchmove"];
function ur(e) {
	return lr.includes(e);
}
function dr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ce] ??= e.nodeValue) && (e[ce] = n, e.nodeValue = `${n}`);
}
function fr(e, t) {
	return mr(e, t);
}
var pr = /* @__PURE__ */ new Map();
function mr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: c = !0, transformError: l }) {
	Ht();
	var u = void 0, d = an(() => {
		var c = r ?? t.appendChild(Ut());
		Ke(c, { pending: () => {} }, (t) => {
			ke({});
			var r = R;
			if (o && (r.c = o), a && (i.$$events = a), N && or(t, null), u = e(t, i) || {}, N && (K.nodes.end = P, P === null || P.nodeType !== 8 || P.data !== "]")) throw ye(), n;
			Ae();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = ur(r);
					for (let e of [t, document]) {
						var a = pr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), pr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, nr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(s($n)), er.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = pr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, nr), n.delete(e), n.size === 0 && pr.delete(r)) : n.set(e, i);
			}
			er.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return hr.set(u, d), u;
}
var hr = /* @__PURE__ */ new WeakMap(), gr = class {
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
			if (n) bn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (bn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (hn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Sn(r, t), t.append(Ut()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else hn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), vn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (hn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = z, r = qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ut();
			i.append(a), this.#n.set(e, {
				effect: dn(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, dn(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else N && (this.anchor = P), this.#a(n);
	}
};
function _r(t) {
	R === null && j("onMount"), e && R.l !== null ? vr(R).m.push(t) : tn(() => {
		let e = J(t);
		if (typeof e == "function") return e;
	});
}
function vr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function yr(e, t, n = !1) {
	var r;
	N && (r = P, Ce());
	var i = new gr(e), a = n ? E : 0;
	function o(e, t) {
		if (N) {
			var n = we(r);
			if (e !== parseInt(n.substring(1))) {
				var a = L();
				Se(a), i.anchor = a, xe(!1), i.ensure(e, t), xe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	W(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function br(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, c = 0; c < i; c++) {
		let n = t[c];
		vn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					xr(e, s(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
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
		xr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function xr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, Sn(a, document.createDocumentFragment())) : hn(t[i], n);
	}
}
var Sr;
function Cr(e, t, n, r, a, o = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = N ? Se(/* @__PURE__ */ Wt(u)) : u.appendChild(Ut());
	}
	N && Ce();
	var d = null, f = /* @__PURE__ */ tt(() => {
		var e = n();
		return i(e) ? e : e == null ? [] : s(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Tr(v, p, c, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Dr(d, null, c)) : bn(d) : vn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: W(() => {
			p = q(f);
			var e = p.length;
			let i = !1;
			N && we(c) === "[!" != (e === 0) && (c = L(), Se(c), xe(!1), i = !0);
			for (var s = /* @__PURE__ */ new Set(), u = z, v = qt(), y = 0; y < e; y += 1) {
				N && P.nodeType === 8 && P.data === "]" && (c = P, i = !0, xe(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Nt(S.v, b), S.i && Nt(S.i, y), v && u.unskip_effect(S.e)) : (S = Er(l, h ? c : Sr ??= Ut(), b, x, y, a, t, n), h || (S.e.f |= ee), l.set(x, S)), s.add(x);
			}
			if (e === 0 && o && !d && (h ? d = dn(() => o(c)) : (d = dn(() => o(Sr ??= Ut())), d.f |= ee)), e > s.size && M("", "", ""), N && e > 0 && Se(L()), !h) if (m.set(u, s), v) {
				for (let [e, t] of l) s.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			i && xe(!0), q(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, N && (c = P);
}
function wr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Tr(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, c = e.items, l = wr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (bn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ee, _ === l) Dr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Or(e, d, _), Or(e, _, y), Dr(_, y, n), d = _, p = [], m = [], l = wr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Dr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Or(e, S.prev, C.next), Or(e, d, S), Or(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Dr(_, l, n), Or(e, _.prev, _.next), Or(e, _, d === null ? e.effect.first : d.next), Or(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = wr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = wr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (xr(e, s(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = wr(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			br(e, w, E);
		}
	}
	a && Pe(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Er(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? kt(n) : /* @__PURE__ */ jt(n, !1, !1) : null, l = o & 2 ? kt(i) : null;
	return {
		v: c,
		i: l,
		e: dn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Dr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Gt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Or(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var kr = [..." 	\n\r\f\xA0\v﻿"];
function Ar(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || kr.includes(r[o - 1])) && (s === r.length || kr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function jr(e, t, n, r, i, a) {
	var o = e[oe];
	if (N || o !== n || o === void 0) {
		var s = Ar(n, r, a);
		(!N || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Mr(e, t) {
	return e === t || e?.[ie] === t;
}
function Nr(e = {}, t, n, r) {
	var i = R.r, a = K;
	return U(() => {
		var o, s;
		return ln(() => {
			o = s, s = r?.() || [], J(() => {
				Mr(n(...s), e) || (t(e, ...s), o && Mr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Mr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Pr(e = !1) {
	let t = R, n = t.l.u;
	if (!n) return;
	let r = () => Xn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Qe(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => q(i);
	}
	n.b.length && rn(() => {
		Fr(t, r), _(n.b);
	}), tn(() => {
		let e = J(() => n.m.map(g));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && tn(() => {
		Fr(t, r), _(n.a);
	});
}
function Fr(e, t) {
	if (e.l.s) for (let t of e.l.s) q(t);
	t();
}
var Ir = !0, Lr = "uplot", Rr = "u-hz", zr = "u-vt", Br = "u-title", Vr = "u-wrap", Hr = "u-under", Ur = "u-over", Wr = "u-axis", Gr = "u-off", Kr = "u-select", qr = "u-cursor-x", Jr = "u-cursor-y", Yr = "u-cursor-pt", Xr = "u-legend", Zr = "u-live", Qr = "u-inline", $r = "u-series", ei = "u-marker", ti = "u-label", ni = "u-value", ri = "width", ii = "height", ai = "top", oi = "bottom", si = "left", ci = "right", li = "#000", ui = "#0000", di = "mousemove", fi = "mousedown", pi = "mouseup", mi = "mouseenter", hi = "mouseleave", gi = "dblclick", _i = "resize", vi = "scroll", yi = "change", bi = "dppxchange", xi = "--", Si = typeof window < "u", Ci = Si ? document : null, wi = Si ? window : null, Ti = Si ? navigator : null, Y, Ei;
function Di() {
	let e = devicePixelRatio;
	Y != e && (Y = e, Ei && Hi(yi, Ei, Di), Ei = matchMedia(`(min-resolution: ${Y - .001}dppx) and (max-resolution: ${Y + .001}dppx)`), Vi(yi, Ei, Di), wi.dispatchEvent(new CustomEvent(bi)));
}
function Oi(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function ki(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function Ai(e, t, n) {
	e.style[t] = n + "px";
}
function ji(e, t, n, r) {
	let i = Ci.createElement(e);
	return t != null && Oi(i, t), n?.insertBefore(i, r), i;
}
function Mi(e, t) {
	return ji("div", e, t);
}
var Ni = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != Ni.get(e) && (e.style.transform = a, Ni.set(e, a), t < 0 || n < 0 || t > r || n > i ? Oi(e, Gr) : ki(e, Gr));
}
var Fi = /* @__PURE__ */ new WeakMap();
function Ii(e, t, n) {
	let r = t + n;
	r != Fi.get(e) && (Fi.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var Li = /* @__PURE__ */ new WeakMap();
function Ri(e, t, n, r) {
	let i = t + "" + n;
	i != Li.get(e) && (Li.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var zi = { passive: !0 }, Bi = {
	...zi,
	capture: !0
};
function Vi(e, t, n, r) {
	t.addEventListener(e, n, r ? Bi : zi);
}
function Hi(e, t, n, r) {
	t.removeEventListener(e, n, zi);
}
Si && Di();
function Ui(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : ua((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function Wi(e) {
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
var Gi = (e) => e != null, Ki = (e) => e != null && e > 0, qi = Wi(Gi), Ji = Wi(Ki);
function Yi(e, t, n, r = 0, i = !1) {
	let a = i ? Ji : qi, o = i ? Ki : Gi;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? xa, c ?? -xa];
}
function Xi(e, t, n, r) {
	let i = ga(e), a = ga(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? _a : va, s = i == 1 ? ua : fa, c = a == 1 ? fa : ua, l = s(o(la(e))), u = c(o(la(t))), d = ha(n, l), f = ha(n, u);
	return n == 10 && (l < 0 && (d = Q(d, -l)), u < 0 && (f = Q(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = Fa(e, d), t = Pa(t, f)), [e, t];
}
function Zi(e, t, n, r) {
	let i = Xi(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var Qi = .1, $i = {
	mode: 3,
	pad: Qi
}, ea = {
	pad: 0,
	soft: null,
	mode: 0
}, ta = {
	min: ea,
	max: ea
};
function na(e, t, n, r) {
	return Ka(n) ? ia(e, t, n) : (ea.pad = n, ea.soft = r ? 0 : null, ea.mode = r ? 3 : 0, ia(e, t, ta));
}
function X(e, t) {
	return e ?? t;
}
function ra(e, t, n) {
	for (t = X(t, 0), n = X(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function ia(e, t, n) {
	let r = n.min, i = n.max, a = X(r.pad, 0), o = X(i.pad, 0), s = X(r.hard, -xa), c = X(i.hard, xa), l = X(r.soft, xa), u = X(i.soft, -xa), d = X(r.mode, 0), f = X(i.mode, 0), p = t - e, m = _a(p), h = ma(la(e), la(t)), g = la(_a(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != xa && (a = 0), f == 2 && u != -xa && (o = 0)));
	let _ = p || h || 1e3, v = ha(10, ua(_a(_))), y = Q(Fa(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : xa, x = ma(s, y < b && e >= b ? b : pa(b, y)), S = Q(Pa(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -xa, w = pa(c, S > C && t <= C ? C : ma(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var aa = new Intl.NumberFormat(Si ? Ti.language : "en-US"), oa = (e) => aa.format(e), sa = Math, ca = sa.PI, la = sa.abs, ua = sa.floor, da = sa.round, fa = sa.ceil, pa = sa.min, ma = sa.max, ha = sa.pow, ga = sa.sign, _a = sa.log10, va = sa.log2, ya = (e, t = 1) => sa.sinh(e) * t, ba = (e, t = 1) => sa.asinh(e / t), xa = Infinity;
function Sa(e) {
	return (_a((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function Ca(e, t, n) {
	return pa(ma(e, t), n);
}
function wa(e) {
	return typeof e == "function";
}
function Z(e) {
	return wa(e) ? e : () => e;
}
var Ta = () => {}, Ea = (e) => e, Da = (e, t) => t, Oa = (e) => null, ka = (e) => !0, Aa = (e, t) => e == t, ja = /\.\d*?(?=9{6,}|0{6,})/gm, Ma = (e) => {
	if (Ua(e) || Ia.has(e)) return e;
	let t = `${e}`, n = t.match(ja);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Ma(e)}e${n}`;
	}
	return Q(e, r);
};
function Na(e, t) {
	return Ma(Q(Ma(e / t)) * t);
}
function Pa(e, t) {
	return Ma(fa(Ma(e / t)) * t);
}
function Fa(e, t) {
	return Ma(ua(Ma(e / t)) * t);
}
function Q(e, t = 0) {
	if (Ua(e)) return e;
	let n = 10 ** t;
	return da(e * n * (1 + 2 ** -52)) / n;
}
var Ia = /* @__PURE__ */ new Map();
function La(e) {
	return (("" + e).split(".")[1] || "").length;
}
function Ra(e, t, n, r) {
	let i = [], a = r.map(La);
	for (let o = t; o < n; o++) {
		let t = la(o), n = Q(ha(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : Q(c, l);
			i.push(u), Ia.set(u, l);
		}
	}
	return i;
}
var za = {}, Ba = [], Va = [null, null], Ha = Array.isArray, Ua = Number.isInteger, Wa = (e) => e === void 0;
function Ga(e) {
	return typeof e == "string";
}
function Ka(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function qa(e) {
	return typeof e == "object" && !!e;
}
var Ja = Object.getPrototypeOf(Uint8Array), Ya = "__proto__";
function Xa(e, t = Ka) {
	let n;
	if (Ha(e)) {
		let r = e.find((e) => e != null);
		if (Ha(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = Xa(e[r], t);
		} else n = e.slice();
	} else if (e instanceof Ja) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != Ya && (n[r] = Xa(e[r], t));
	} else n = e;
	return n;
}
function Za(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != Ya && (Ka(e[t]) ? Za(e[t], Xa(r[t])) : e[t] = Xa(r[t]));
	}
	return e;
}
var Qa = 0, $a = 1, eo = 2;
function to(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function no(e, t) {
	if (ao(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return oo(t[0]) || (t = io(t)), t;
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
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : $a, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != Qa && (l[n] = t, u == eo && d.push(n)) : l[n] = t;
			}
			to(l, d, i), r.push(l);
		}
	}
	return r;
}
var ro = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function io(e) {
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
function ao(e) {
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
function oo(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = ma(1, ua((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var so = [
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
], co = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function lo(e) {
	return e.slice(0, 3);
}
var uo = co.map(lo), fo = {
	MMMM: so,
	MMM: so.map(lo),
	WWWW: co,
	WWW: uo
};
function po(e) {
	return (e < 10 ? "0" : "") + e;
}
function mo(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var ho = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => po(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => po(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => po(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => po(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => po(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => mo(e.getMilliseconds())
};
function go(e, t) {
	t ||= fo;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? ho[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var _o = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function vo(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == _o ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var yo = (e) => e % 1 == 0, bo = [
	1,
	2,
	2.5,
	5
], xo = Ra(10, -32, 0, bo), So = Ra(10, 0, 32, bo), Co = So.filter(yo), wo = xo.concat(So), To = "{YYYY}", Eo = "\n{YYYY}", Do = "{M}/{D}", Oo = "\n{M}/{D}", ko = "\n{M}/{D}/{YY}", Ao = "{h}:{mm}{aa}", jo = "\n{h}:{mm}{aa}", Mo = ":{ss}", $ = null;
function No(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? Ra(10, 0, 3, bo).filter(yo) : Ra(10, -3, 0, bo)).concat([
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
			To,
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
			Eo,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			i,
			Do,
			Eo,
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
			ko,
			$,
			Oo,
			$,
			$,
			$,
			1
		],
		[
			n,
			Ao,
			ko,
			$,
			Oo,
			$,
			$,
			$,
			1
		],
		[
			t,
			Mo,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			$,
			"\n{M}/{D} {h}:{mm}{aa}",
			$,
			jo,
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
			jo,
			$,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = Q(g * e, 3), v = Uo(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = Q(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : Q(Uo(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(da(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = Uo(c + r * a, l + n * a, 1), s = o - t(Q(o * e, 3));
					i = Q((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (ua(l) - ua(_)) + Pa(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = Q(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = ua(Q(h + g, 6)) % 24, n = t(o).getHours() - e;
					n > 1 && (n = -1), o -= n * r, h = (h + g) % 24;
					let i = p[p.length - 1];
					Q((o - i) / d, 3) * v >= .7 && p.push(o);
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
var [Po, Fo, Io] = No(1), [Lo, Ro, zo] = No(.001);
Ra(2, -53, 53, [1]);
function Bo(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function Vo(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function Ho(e, t) {
	let n = go(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function Uo(e, t, n) {
	return new Date(e, t, n);
}
function Wo(e, t) {
	return t(e);
}
var Go = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function Ko(e, t) {
	return (n, r, i, a) => a == null ? xi : t(e(r));
}
function qo(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function Jo(e, t) {
	return e.series[t].fill(e, t);
}
var Yo = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: Ta,
	markers: {
		show: !0,
		width: 2,
		stroke: qo,
		fill: Jo,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function Xo(e, t) {
	let n = e.cursor.points, r = Mi(), i = n.size(e, t);
	Ai(r, ri, i), Ai(r, ii, i);
	let a = i / -2;
	Ai(r, "marginLeft", a), Ai(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Ai(r, "borderWidth", o), r;
}
function Zo(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function Qo(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function $o(e, t) {
	return e.series[t].points.size;
}
var es = [0, 0];
function ts(e, t, n) {
	return es[0] = t, es[1] = n, es;
}
function ns(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function rs(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var is = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: ts,
	points: {
		one: !1,
		show: Xo,
		size: $o,
		width: 0,
		stroke: Qo,
		fill: Zo
	},
	bind: {
		mousedown: ns,
		mouseup: ns,
		click: ns,
		dblclick: ns,
		mousemove: rs,
		mouseleave: rs,
		mouseenter: rs
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
}, as = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, os = Za({}, as, { filter: Da }), ss = Za({}, os, { size: 10 }), cs = Za({}, as, { show: !1 }), ls = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", us = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ds = 1.5, fs = {
	show: !0,
	scale: "x",
	stroke: li,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: us,
	side: 2,
	grid: os,
	ticks: ss,
	border: cs,
	font: ls,
	lineGap: ds,
	rotate: 0
}, ps = "Value", ms = "Time", hs = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: xa,
	max: -Infinity,
	idxs: []
};
function gs(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : oa(e));
}
function _s(e, t, n, r, i, a, o) {
	let s = [], c = Ia.get(i) || 0;
	n = o ? n : Q(Pa(n, i), c);
	for (let e = n; e <= r; e = Q(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function vs(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = ha(c, ua((c == 10 ? _a : va)(n))), c == 10 && (i = wo[Ui(i, wo)]);
	let l = n, u = i * c;
	c == 10 && (u = wo[Ui(u, wo)]);
	do
		s.push(l), l += i, c == 10 && !Ia.has(l) && (l = Q(l, Ia.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = wo[Ui(u, wo)]));
	while (l <= r);
	return s;
}
function ys(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? vs(e, t, ma(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? vs(e, t, ma(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var bs = /./, xs = /[12357]/, Ss = /[125]/, Cs = /1/, ws = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Ts(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? bs : c(7, o) - u >= l ? xs : c(5, o) - u >= l ? Ss : Cs;
	if (d == Cs) {
		let e = la(c(1, o) - u);
		if (e < l) return ws(t.slice().reverse(), s.distr, d, fa(l / e)).reverse();
	}
	return ws(t, s.distr, d, 1);
}
function Es(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = la(c(1, o) - c(2, o));
	return l < s ? ws(t.slice().reverse(), 3, bs, fa(s / l)).reverse() : t;
}
function Ds(e, t, n, r) {
	return r == null ? xi : t == null ? "" : oa(t);
}
var Os = {
	show: !0,
	scale: "y",
	stroke: li,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: us,
	side: 3,
	grid: os,
	ticks: ss,
	border: cs,
	font: ls,
	lineGap: ds,
	rotate: 0
};
function ks(e, t) {
	return Q((3 + (e || 1) * 2) * t, 3);
}
function As(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = la(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * Y);
	return r[1] - r[0] <= o;
}
var js = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: xa,
	max: -Infinity
}, Ms = (e, t, n, r, i) => i, Ns = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Ms,
	alpha: 1,
	facets: [Za({}, js, { scale: "x" }), Za({}, js, { scale: "y" })]
}, Ps = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Ms,
	alpha: 1,
	points: {
		show: As,
		filter: null
	},
	values: null,
	min: xa,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Fs(e, t, n, r, i) {
	return n / 10;
}
var Is = {
	time: Ir,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, Ls = Za({}, Is, {
	time: !1,
	ori: 1
}), Rs = {};
function zs(e, t) {
	let n = Rs[e];
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
	}, e != null && (Rs[e] = n)), n;
}
var Bs = 1, Vs = 2;
function Hs(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, Zs, $s, tc, rc, ac) : n(i, c, l, u, d, _, g, p, f, h, m, Qs, ec, nc, ic, oc);
}
function Us(e, t) {
	let n = 0, r = 0, i = X(e.bands, Ba);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function Ws(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function Gs(e, t, n, r, i, a) {
	return Hs(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? $s : ec, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function Ks(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? tc : nc, c = n;
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
function qs(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function Js(e, t, n, r, i, a, o) {
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
function Ys(e) {
	return e == 0 ? Ea : e == 1 ? da : (t) => Na(t, e);
}
function Xs(e) {
	let t = e == 0 ? Zs : Qs, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = pa(c, o / 2, s / 2), l = pa(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var Zs = (e, t, n) => {
	e.moveTo(t, n);
}, Qs = (e, t, n) => {
	e.moveTo(n, t);
}, $s = (e, t, n) => {
	e.lineTo(t, n);
}, ec = (e, t, n) => {
	e.lineTo(n, t);
}, tc = Xs(0), nc = Xs(1), rc = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, ic = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, ac = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, oc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function sc(e) {
	return (e, t, n, r, i) => Hs(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = Zs, v = rc) : (_ = Qs, v = ic);
		let y = Q(g.width * Y, 3), b = (g.size - g.width) / 2 * Y, x = Q(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		tc(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, ca * 2);
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
function cc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var lc = cc($s), uc = cc(ec);
function dc(e) {
	let t = X(e?.alignGaps, 0);
	return (e, n, r, i) => Hs(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = qi(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = $s, b = lc) : (y = ec, b = uc);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Bs
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
		let [T, E] = Us(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...Js(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = Ks(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [Gs(e, n, r, i, C, -1), Gs(e, n, r, i, C, 1)] : Gs(e, n, r, i, C, E)), S;
	});
}
function fc(e) {
	let t = X(e.align, 1), n = X(e.ascDesc, !1), r = X(e.alignGaps, 0), i = X(e.extend, !1);
	return (e, a, o, s) => Hs(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = qi(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? $s : ec, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Bs
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
		let [re, ie] = Us(e, a);
		if (c.fill != null || re != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, re));
			w(t, ne, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...Js(l, u, o, s, D, S, r));
			let f = c.width * Y / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = Ks(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [Gs(e, a, o, s, E, -1), Gs(e, a, o, s, E, 1)] : Gs(e, a, o, s, E, ie)), T;
	});
}
function pc(e, t, n, r, i, a, o = xa) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = la(e[c] - e[s]);
				t < l && (l = t, o = la(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function mc(e) {
	e ||= za;
	let t = X(e.size, [
		.6,
		xa,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = Z(i), o = 1 - t[0], s = X(t[1], xa), c = X(t[2], 1), l = X(e.disp, za), u = X(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => Hs(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * Y, O = s * Y, ee = c * Y, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? tc : nc, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = X(e.bands, Ba).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), ce = T(b(se, v, w, S)), A, j, le, M = C, ue = T(m.width * Y), de = !1, fe = null, pe = null, me = null, he = null;
		d != null && (ue == 0 || f != null) && (de = !0, fe = d.values(e, t, i, p), pe = /* @__PURE__ */ new Map(), new Set(fe).forEach((e) => {
			e != null && pe.set(e, new Path2D());
		}), ue > 0 && (me = f.values(e, t, i, p), he = /* @__PURE__ */ new Map(), new Set(me).forEach((e) => {
			e != null && he.set(e, new Path2D());
		})));
		let { x0: ge, size: _e } = l;
		if (ge != null && _e != null) {
			E = 1, h = ge.values(e, t, i, p), ge.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = _e.values(e, t, i, p);
			j = _e.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), M = pc(h, g, y, _, C, x, M), le = M - j + D;
		} else M = pc(h, g, y, _, C, x, M), le = M * o + D, j = M - le;
		le < 1 && (le = 0), ue >= j / 2 && (ue = 0), le < 5 && (T = Ea);
		let ve = le > 0, ye = M - le - (ve ? ue : 0);
		j = T(Ca(ye, ee, O)), A = (E == 0 ? j / 2 : E == ne ? 0 : j) - E * ne * ((E == 0 ? D / 2 : 0) + (ve ? ue / 2 : 0));
		let be = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, N = de ? null : new Path2D(), xe = null;
		if (ae != null) xe = e.data[ae.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), xe = n.values(e, t, i, p));
		}
		let P = te * j, Se = k * j;
		for (let n = ne == 1 ? i : p; n >= i && n <= p; n += ne) {
			let r = g[n];
			if (r == null) continue;
			if (xe != null) {
				let e = xe[n] ?? 0;
				if (r - e == 0) continue;
				ce = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(X(r, se), v, w, S), o = T(i - A), s = T(ma(a, ce)), c = T(pa(a, ce)), u = s - c;
			if (r != null) {
				let i = r < 0 ? Se : P, a = r < 0 ? P : Se;
				de ? (ue > 0 && me[n] != null && re(he.get(me[n]), o, c + ua(ue / 2), j, ma(0, u - ue), i, a), fe[n] != null && re(pe.get(fe[n]), o, c + ua(ue / 2), j, ma(0, u - ue), i, a)) : re(N, o, c + ua(ue / 2), j, ma(0, u - ue), i, a), ie(e, t, n, o - ue / 2, c, j + ue, u);
			}
		}
		return ue > 0 ? be.stroke = de ? he : N : de || (be._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, be.width = 0), be.fill = de ? pe : N, be;
	});
}
function hc(e, t) {
	let n = X(t?.alignGaps, 0);
	return (t, r, i, a) => Hs(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = qi(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = Zs, S = $s, x = ac) : (b = Qs, S = ec, x = oc);
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
			flags: Bs
		}, ee = O.stroke, [te, k] = Us(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...Js(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = Ks(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [Gs(t, r, i, a, ee, -1), Gs(t, r, i, a, ee, 1)] : Gs(t, r, i, a, ee, k)), O;
	});
}
function gc(e) {
	return hc(_c, e);
}
function _c(e, t, n, r, i, a) {
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
var vc = /* @__PURE__ */ new Set();
function yc() {
	for (let e of vc) e.syncRect(!0);
}
Si && (Vi(_i, wi, yc), Vi(vi, wi, yc, !0), Vi(bi, wi, () => {
	Fc.pxRatio = Y;
}));
var bc = dc(), xc = sc();
function Sc(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => wc(e, r, t, n));
}
function Cc(e, t) {
	return e.map((e, n) => n == 0 ? {} : Za({}, t, e));
}
function wc(e, t, n, r) {
	return Za({}, t == 0 ? n : r, e);
}
function Tc(e, t, n) {
	return t == null ? Va : [t, n];
}
var Ec = Tc;
function Dc(e, t, n) {
	return t == null ? Va : na(t, n, Qi, !0);
}
function Oc(e, t, n, r) {
	return t == null ? Va : Xi(t, n, e.scales[r].log, !1);
}
var kc = Oc;
function Ac(e, t, n, r) {
	return t == null ? Va : Zi(t, n, e.scales[r].log, !1);
}
var jc = Ac;
function Mc(e, t, n, r, i) {
	let a = ma(Sa(e), Sa(t)), o = t - e, s = Ui(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Ia.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function Nc(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = da((n = +r) * Y)) + "px"), [
		e,
		t,
		n
	];
}
function Pc(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = Q(e[2] * Y, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Fc(e, t, n) {
	let r = { mode: X(e.mode, 1) }, i = r.mode;
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
	let l = r.root = Mi(Lr);
	if (e.id != null && (l.id = e.id), Oi(l, e.class), e.title) {
		let t = Mi(Br, l);
		t.textContent = e.title;
	}
	let u = ji("canvas"), d = r.ctx = u.getContext("2d"), f = Mi(Vr, l);
	Vi("click", f, (e) => {
		e.target === m && (U != tn || on != nn) && cn.click(r, e);
	}, !0);
	let p = r.under = Mi(Hr, f);
	f.appendChild(u);
	let m = r.over = Mi(Ur, f);
	e = Xa(e);
	let h = +X(e.pxAlign, 1), g = Ys(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Sc(e.series || [], hs, Ps, !1) : Cc(e.series || [null], Ns), y = r.axes = Sc(e.axes || [], fs, Os, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = Z(e.fill || null), e.dir = X(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: Vt,
		series: At
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => _a(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => ba(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || za)[t] || za;
			if (r.from != null) {
				E(r.from);
				let e = Za({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = Za({}, t == S ? Is : Ls, r), n.key = t;
				let e = n.time, a = n.range, o = Ha(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? $i : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? $i : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && Ka(a))) {
					let e = a;
					a = (t, n, r) => n == null ? Va : na(n, r, e);
				}
				n.range = Z(a || (e ? Ec : t == S ? n.distr == 3 ? kc : n.distr == 4 ? jc : Tc : n.distr == 3 ? Oc : n.distr == 4 ? Ac : Dc)), n.auto = Z(!o && n.auto), n.clamp = Z(n.clamp || Fs), n._min = n._max = null, n.valToPct = T(n);
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
	D.ori == 0 ? (Oi(l, Rr), ee = a, te = o) : (Oi(l, zr), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let ne = e.tzDate || ((e) => new Date(da(e / _))), re = e.fmtDate || go, ie = _ == 1 ? Io(ne) : zo(ne), ae = Vo(ne, Bo(_ == 1 ? Fo : Ro, re)), oe = Ko(ne, Wo(Go, re)), se = [], ce = r.legend = Za({}, Yo, e.legend), A = r.cursor = Za({}, is, { drag: { y: i == 2 } }, e.cursor), j = ce.show, le = A.show, M = ce.markers;
	ce.idxs = se, M.width = Z(M.width), M.dash = Z(M.dash), M.stroke = Z(M.stroke), M.fill = Z(M.fill);
	let ue, de, fe, pe = [], me = [], he, ge = !1, _e = {};
	if (ce.live) {
		let e = v[1] ? v[1].values : null;
		ge = e != null, he = ge ? e(r, 1, 0) : { _: 0 };
		for (let e in he) _e[e] = xi;
	}
	if (j) if (ue = ji("table", Xr, l), fe = ji("tbody", null, ue), ce.mount(r, ue), ge) {
		de = ji("thead", null, ue, fe);
		let e = ji("tr", null, de);
		for (var ve in ji("th", null, e), he) ji("th", ti, e).textContent = ve;
	} else Oi(ue, Qr), ce.live && Oi(ue, Zr);
	let ye = { show: !0 }, be = { show: !1 };
	function N(e, t) {
		if (t == 0 && (ge || !ce.live || i == 2)) return Va;
		let n = [], a = ji("tr", $r, fe, fe.childNodes[t]);
		Oi(a, e.class), e.show || Oi(a, Gr);
		let o = ji("th", null, a);
		if (M.show) {
			let e = Mi(ei, o);
			if (t > 0) {
				let n = M.width(r, t);
				n && (e.style.border = n + "px " + M.dash(r, t) + " " + M.stroke(r, t)), e.style.background = M.fill(r, t);
			}
		}
		let s = Mi(ti, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (M.show || (s.style.color = e.width > 0 ? M.stroke(r, t) : M.fill(r, t)), P("click", o, (t) => {
			if (A._lock) return;
			Ge(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != ce.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && hn(r, e ? r == n ? ye : be : ye, !0, Xn.setSeries);
				});
			} else hn(n, { show: !e.show }, !0, Xn.setSeries);
		}, !1), Je && P(mi, o, (t) => {
			A._lock || (Ge(t), hn(v.indexOf(e), Cn, !0, Xn.setSeries));
		}, !1)), he) {
			let e = ji("td", ni, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let xe = /* @__PURE__ */ new Map();
	function P(e, t, n, i = !0) {
		let a = xe.get(t) || {}, o = A.bind[e](r, t, n, i);
		o && (Vi(e, t, a[e] = o), xe.set(t, a));
	}
	function Se(e, t, n) {
		let r = xe.get(t) || {};
		for (let n in r) (e == null || n == e) && (Hi(n, t, r[n]), delete r[n]);
		e ?? xe.delete(t);
	}
	let Ce = 0, F = 0, I = 0, L = 0, we = 0, Te = 0, Ee = we, De = Te, R = I, Oe = L, ke = 0, Ae = 0, je = 0, Me = 0;
	r.bbox = {};
	let Ne = !1, Pe = !1, Fe = !1, Ie = !1, Le = !1, Re = !1;
	function ze(e, t, n) {
		(n || e != r.width || t != r.height) && Be(e, t), Ht(!1), Fe = !0, Pe = !0, H();
	}
	function Be(e, t) {
		r.width = Ce = I = e, r.height = F = L = t, we = Te = 0, Ue(), We();
		let n = r.bbox;
		ke = n.left = Na(we * Y, .5), Ae = n.top = Na(Te * Y, .5), je = n.width = Na(I * Y, .5), Me = n.height = Na(L * Y, .5);
	}
	function Ve() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = zt(t), i = Bt(t);
			e = t == 3 || n && i, e || (Be(r.width, r.height), Pe = !0);
		}
	}
	function He({ width: e, height: t }) {
		ze(e, t);
	}
	r.setSize = He;
	function Ue() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (I -= c, a == 3 ? (we += c, r = !0) : n = !0) : (L -= c, a == 0 ? (Te += c, e = !0) : t = !0));
			}
		}), rt[0] = e, rt[1] = n, rt[2] = t, rt[3] = r, I -= st[1] + st[3], we += st[3], L -= st[2] + st[0], Te += st[0];
	}
	function We() {
		let e = we + I, t = Te + L, n = we, r = Te;
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
		let r = e.prox = Z(e.prox), i = e.bias ??= 0;
		A.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? xa, u = l >= 0 && l < xa, d = D.ori == 0 ? I : L, f = A.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && la(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let Ge = (e) => {
		A.event = e;
	};
	A.idxs = se, A._lock = !1;
	let Ke = A.points;
	Ke.show = Z(Ke.show), Ke.size = Z(Ke.size), Ke.stroke = Z(Ke.stroke), Ke.width = Z(Ke.width), Ke.fill = Z(Ke.fill);
	let qe = r.focus = Za({}, e.focus || { alpha: .3 }, A.focus), Je = qe.prox >= 0, Ye = Je && Ke.one, Xe = [], Ze = [], Qe = [];
	function $e(e, t) {
		let n = Ke.show(r, t);
		if (n instanceof HTMLElement) return Oi(n, Yr), Oi(n, e.class), Pi(n, -10, -10, I, L), m.insertBefore(n, Xe[t]), n;
	}
	function et(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? Ga(n) ? Ko(ne, Wo(n, re)) : n || oe : n || Ds, e.label = e.label || (t ? ms : ps);
		}
		if (Ye || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || bc || Oa, e.fillTo = Z(e.fillTo || Ws), e.pxAlign = +X(e.pxAlign, h), e.pxRound = Ys(e.pxAlign), e.stroke = Z(e.stroke || null), e.fill = Z(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = ks(ma(1, e.width), 1), n = e.points = Za({}, {
				size: t,
				width: ma(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: xc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = Z(n.show), n.filter = Z(n.filter), n.fill = Z(n.fill), n.stroke = Z(n.stroke), n.paths = Z(n.paths), n.pxAlign = e.pxAlign;
		}
		if (j) {
			let n = N(e, t);
			pe.splice(t, 0, n[0]), me.splice(t, 0, n[1]), ce.values.push(null);
		}
		if (le) {
			se.splice(t, 0, null);
			let n = null;
			Ye ? t == 0 && (n = $e(e, t)) : t > 0 && (n = $e(e, t)), Xe.splice(t, 0, n), Ze.splice(t, 0, 0), Qe.splice(t, 0, 0);
		}
		Yn("addSeries", t);
	}
	function tt(e, t) {
		t ??= v.length, e = i == 1 ? wc(e, t, hs, Ps) : wc(e, t, {}, Ns), v.splice(t, 0, e), et(v[t], t);
	}
	r.addSeries = tt;
	function nt(e) {
		if (v.splice(e, 1), j) {
			ce.values.splice(e, 1), me.splice(e, 1);
			let t = pe.splice(e, 1)[0];
			Se(null, t.firstChild), t.remove();
		}
		le && (se.splice(e, 1), Xe.splice(e, 1)[0].remove(), Ze.splice(e, 1), Qe.splice(e, 1)), Yn("delSeries", e);
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
			e.size = Z(e.size), e.space = Z(e.space), e.rotate = Z(e.rotate), Ha(e.incrs) && e.incrs.forEach((e) => {
				!Ia.has(e) && Ia.set(e, La(e));
			}), e.incrs = Z(e.incrs || (i.distr == 2 ? Co : a ? _ == 1 ? Po : Lo : wo)), e.splits = Z(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? vs : i.distr == 4 ? ys : _s)), e.stroke = Z(e.stroke), e.grid.stroke = Z(e.grid.stroke), e.ticks.stroke = Z(e.ticks.stroke), e.border.stroke = Z(e.border.stroke);
			let o = e.values;
			e.values = Ha(o) && !Ha(o[0]) ? Z(o) : a ? Ha(o) ? Vo(ne, Bo(o, re)) : Ga(o) ? Ho(ne, o) : o || ae : o || gs, e.filter = Z(e.filter || (i.distr >= 3 && i.log == 10 ? Ts : i.distr == 3 && i.log == 2 ? Es : Da)), e.font = Nc(e.font), e.labelFont = Nc(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (rt[t] = !0, e._el = Mi(Wr, f));
		}
	}
	function at(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? da(fs.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? da(Os.size / 2) : 0), l;
	}
	let ot = r.padding = (e.padding || [
		at,
		at,
		at,
		at
	]).map((e) => Z(X(e, at))), st = r._padding = ot.map((e, t) => e(r, t, rt, 0)), z, ct = null, B = null, lt = i == 1 ? v[0].idxs : null, ut = null, dt = !1;
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
		if (Ht(!0), Yn("setData"), O == 2 && (Fe = !0), n !== !1) {
			let e = D;
			e.auto(r, dt) ? pt() : mn(S, e.min, e.max), Ie ||= A.left >= 0, Re = !0, H();
		}
	}
	r.setData = ft;
	function pt() {
		dt = !0;
		let e, n;
		i == 1 && (z > 0 ? (ct = lt[0] = 0, B = lt[1] = z - 1, e = t[0][ct], n = t[0][B], O == 2 ? (e = ct, n = B) : e == n && (O == 3 ? [e, n] = Xi(e, e, D.log, !1) : O == 4 ? [e, n] = Zi(e, e, D.log, !1) : D.time ? n = e + da(86400 / _) : [e, n] = na(e, n, Qi, !0))) : (ct = lt[0] = e = null, B = lt[1] = n = null)), mn(S, e, n);
	}
	let mt, ht, gt, _t, vt, yt, bt, xt, St, Ct;
	function wt(e, t, n, r, i, a) {
		e ??= ui, n ??= Ba, r ??= "butt", i ??= ui, a ??= "round", e != mt && (d.strokeStyle = mt = e), i != ht && (d.fillStyle = ht = i), t != gt && (d.lineWidth = gt = t), a != vt && (d.lineJoin = vt = a), r != yt && (d.lineCap = yt = r), n != _t && d.setLineDash(_t = n);
	}
	function Tt(e, t, n, r) {
		t != ht && (d.fillStyle = ht = t), e != bt && (d.font = bt = e), n != xt && (d.textAlign = xt = n), r != St && (d.textBaseline = St = r);
	}
	function Et(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, dt) && (t == null || t.min == null)) {
			let t = X(ct, 0), r = X(B, i.length - 1), o = n.min == null ? Yi(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = pa(e.min, n.min = o[0]), e.max = ma(e.max, n.max = o[1]);
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
		k[S] != null && Ht(!0);
		let e = {};
		for (let t in k) {
			let n = k[t];
			if (n != null) {
				let a = e[t] = Xa(b[t], qa);
				if (n.min != null) Za(a, n);
				else if (t != S || i == 2) if (z == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = xa, a.max = -Infinity;
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
						s.min = e[0], s.max = e[1], ct = Ui(s.min, t[0]), B = Ui(s.max, t[0]), B - ct > 1 && (t[0][ct] < s.min && ct++, t[0][B] > s.max && B--), n.min = ut[ct], n.max = ut[B];
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
					let e = n.range(r, n.min == xa ? null : n.min, n.max == -Infinity ? null : n.max, t);
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
				i._min = e == 3 ? _a(i.min) : e == 4 ? ba(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? _a(i.max) : e == 4 ? ba(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Fe = !0, Yn("setScale", e);
			le && A.left >= 0 && (Ie = Re = !0);
		}
		for (let e in k) k[e] = null;
	}
	function kt(e) {
		let t = Ca(ct - 1, 0, z - 1), n = Ca(B + 1, 0, z - 1);
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
					Ct != e.alpha && (d.globalAlpha = Ct = e.alpha), e._paths != null && Mt(t, !1);
					{
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, ct, B, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, ct, B, a), Mt(t, !0));
					}
					Ct != n && (d.globalAlpha = Ct = n), Yn("drawSeries", t);
				}
			}), e && (d.globalAlpha = Ct = 1);
		}
	}
	function jt(e, t) {
		let n = t ? v[e].points : v[e];
		n._stroke = n.stroke(r, e), n._fill = n.fill(r, e);
	}
	function Mt(e, t) {
		let n = t ? v[e].points : v[e], { stroke: r, fill: i, clip: a, flags: o, _stroke: s = n._stroke, _fill: c = n._fill, _width: l = n.width } = n._paths;
		l = Q(l * Y, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = ke - l / 2, t = Ae - l / 2, n = je + l, r = Me + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? Pt(s, l, n.dash, n.cap, c, r, i, o, a) : Nt(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function Nt(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || za).band;
				Ha(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && ra(g, ct, B) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, Pt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || Pt(n, i, a, o, s, c, l, u, d, f);
	}
	function Pt(e, t, n, r, i, a, o, s, c, l, u, f) {
		wt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), It(i, o), Ft(e, a, t)) : s & Vs ? (It(i, o), d.clip(f), Ft(e, a, t)) : s & Bs && (d.save(), d.clip(f), u && d.clip(u), It(i, o), d.restore(), Ft(e, a, t)) : (It(i, o), Ft(e, a, t)), (c || l || f) && d.restore();
	}
	function Ft(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = mt = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function It(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = ht = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function Lt(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Mc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function Rt(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), wt(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function zt(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, Ht(!1));
				return;
			} else n._show || (t = !1, n._show = !0, Ht(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = Lt(i, c, l, s == 0 ? I : L);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => ut[e]) : p, h = a.distr == 2 ? ut[p[1]] - ut[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = fa(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function Bt(e) {
		let t = !0;
		return ot.forEach((n, i) => {
			let a = n(r, i, rt, e);
			a != st[i] && (t = !1), st[i] = a;
		}), t;
	}
	function Vt() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = da((t._lpos + s) * Y);
				Tt(t.labelFont[0], c, "center", n == 2 ? ai : oi), d.save(), i == 1 ? (a = o = 0, d.translate(p, da(Ae + Me / 2)), d.rotate((n == 3 ? -ca : ca) / 2)) : (a = da(ke + je / 2), o = p);
				let m = wa(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? je : Me, h = i == 0 ? ke : Ae, _ = t._splits, v = p.distr == 2 ? _.map((e) => ut[e]) : _, x = p.distr == 2 ? ut[_[1]] - ut[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = da(w * Y), E = da((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * Y), D = t._rotate * -ca / 180, O = g(t._pos * Y), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Tt(te, c, t.align == 1 ? si : t.align == 2 ? ci : D > 0 ? si : D < 0 ? ci : i == 0 ? "center" : n == 3 ? ci : si, D || i == 1 ? "middle" : n == 2 ? ai : oi);
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
			S.show && Rt(ne, S.filter(r, v, e, f, x), i, n, O, T, Q(S.width * Y, 3), S.stroke(r, e), S.dash, S.cap);
			let ie = t.grid;
			ie.show && Rt(ne, ie.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? Ae : ke, i == 0 ? Me : je, Q(ie.width * Y, 3), ie.stroke(r, e), ie.dash, ie.cap), C.show && Rt([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? Ae : ke, i == 1 ? Me : je, Q(C.width * Y, 3), C.stroke(r, e), C.dash, C.cap);
		}
		Yn("drawAxes");
	}
	function Ht(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let Ut = !1, Wt = !1, Gt = [];
	function V() {
		Wt = !1;
		for (let e = 0; e < Gt.length; e++) Yn(...Gt[e]);
		Gt.length = 0;
	}
	function H() {
		Ut ||= (ro(qt), !0);
	}
	function Kt(e, t = !1) {
		Ut = !0, Wt = t, e(r), qt(), t && Gt.length > 0 && queueMicrotask(V);
	}
	r.batch = Kt;
	function qt() {
		if (Ne &&= (Ot(), !1), Fe &&= (Ve(), !1), Pe) {
			if (Ai(p, si, we), Ai(p, ai, Te), Ai(p, ri, I), Ai(p, ii, L), Ai(m, si, we), Ai(m, ai, Te), Ai(m, ri, I), Ai(m, ii, L), Ai(f, ri, Ce), Ai(f, ii, F), u.width = da(Ce * Y), u.height = da(F * Y), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					Ai(e, a ? "left" : "top", r - t), Ai(e, a ? "width" : "height", n), Ai(e, a ? "top" : "left", a ? Te : we), Ai(e, a ? "height" : "width", a ? L : I), ki(e, Gr);
				} else Oi(e, Gr);
			}), mt = ht = gt = vt = yt = bt = xt = St = _t = null, Ct = 1, Pn(!0), we != Ee || Te != De || I != R || L != Oe) {
				Ht(!1);
				let e = I / R, t = L / Oe;
				if (le && !Ie && A.left >= 0) {
					A.left *= e, A.top *= t, Zt && Pi(Zt, da(A.left), 0, I, L), Qt && Pi(Qt, 0, da(A.top), I, L);
					for (let n = 0; n < Xe.length; n++) {
						let r = Xe[n];
						r != null && (Ze[n] *= e, Qe[n] *= t, Pi(r, fa(Ze[n]), fa(Qe[n]), I, L));
					}
				}
				if (W.show && !Le && W.left >= 0 && W.width > 0) {
					W.left *= e, W.width *= e, W.top *= t, W.height *= t;
					for (let e in Ln) Ai(dn, e, W[e]);
				}
				Ee = we, De = Te, R = I, Oe = L;
			}
			Yn("setSize"), Pe = !1;
		}
		Ce > 0 && F > 0 && (d.clearRect(0, 0, u.width, u.height), Yn("drawClear"), w.forEach((e) => e()), Yn("draw")), W.show && Le && (fn(W), Le = !1), le && Ie && (Mn(null, !0, !1), Ie = !1), ce.show && ce.live && Re && (An(), Re = !1), c || (c = !0, r.status = 1, Yn("ready")), dt = !1, Ut = !1;
	}
	r.redraw = (e, t) => {
		Fe = t || !1, e === !1 ? H() : mn(S, D.min, D.max);
	};
	function Jt(e, n) {
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
			e == S && i.distr == 2 && z > 0 && (n.min = Ui(n.min, t[0]), n.max = Ui(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Ne = !0, H();
		}
	}
	r.setScale = Jt;
	let Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, U, on, sn = !1, cn = A.drag, ln = cn.x, un = cn.y;
	le && (A.x && (Yt = Mi(qr, m)), A.y && (Xt = Mi(Jr, m)), D.ori == 0 ? (Zt = Yt, Qt = Xt) : (Zt = Xt, Qt = Yt), U = A.left, on = A.top);
	let W = r.select = Za({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), dn = W.show ? Mi(Kr, W.over ? m : p) : null;
	function fn(e, t) {
		if (W.show) {
			for (let t in e) W[t] = e[t], t in Ln && Ai(dn, t, e[t]);
			t !== !1 && Yn("setSelect");
		}
	}
	r.setSelect = fn;
	function pn(e) {
		if (v[e].show) j && ki(pe[e], Gr);
		else if (j && Oi(pe[e], Gr), le) {
			let t = Ye ? Xe[0] : Xe[e];
			t != null && Pi(t, -10, -10, I, L);
		}
	}
	function mn(e, t, n) {
		Jt(e, {
			min: t,
			max: n
		});
	}
	function hn(e, t, n, a) {
		t.focus != null && wn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, pn(r), i == 2 ? (mn(n.facets[0].scale, null, null), mn(n.facets[1].scale, null, null)) : mn(n.scale, null, null), H());
		}), n !== !1 && Yn("setSeries", e, t), a && $n("setSeries", r, e, t);
	}
	r.setSeries = hn;
	function gn(e, t) {
		Za(x[e], t);
	}
	function _n(e, t) {
		e.fill = Z(e.fill || null), e.dir = X(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function vn(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = _n, r.setBand = gn, r.delBand = vn;
	function yn(e, t) {
		v[e].alpha = t, le && Xe[e] != null && (Xe[e].style.opacity = t), j && pe[e] && (pe[e].style.opacity = t);
	}
	let bn, xn, Sn, Cn = { focus: !0 };
	function wn(e) {
		if (e != Sn) {
			let t = e == null, n = qe.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && yn(a, i ? 1 : qe.alpha);
				}
			}), Sn = e, n && H();
		}
	}
	j && Je && P(hi, ue, (e) => {
		A._lock || (Ge(e), Sn != null && hn(null, Cn, !0, Xn.setSeries));
	});
	function Tn(e, t, n) {
		let r = b[t];
		n && (e = e / Y - (r.ori == 1 ? Te : we));
		let i = I;
		r.ori == 1 && (i = L, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? ha(10, c) : l == 4 ? ya(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function En(e, n) {
		return Ui(Tn(e, S, n), t[0], ct, B);
	}
	r.valToIdx = (e) => Ui(e, t[0]), r.posToIdx = En, r.posToVal = Tn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? je : I, n ? ke : 0) : o(e, b[t], n ? Me : L, n ? Ae : 0), r.setCursor = (e, t, n) => {
		U = e.left, on = e.top, Mn(null, t, n);
	};
	function G(e, t) {
		Ai(dn, si, W.left = e), Ai(dn, ri, W.width = t);
	}
	function Dn(e, t) {
		Ai(dn, ai, W.top = e), Ai(dn, ii, W.height = t);
	}
	let On = D.ori == 0 ? G : Dn, K = D.ori == 1 ? G : Dn;
	function kn() {
		if (j && ce.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && ge) continue;
			let t = ce.values[e], n = 0;
			for (let r in t) me[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function An(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : Wa(e.idx) || se.fill(e.idx), ce.idx = se[0]), j && ce.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !ge) && jn(e, se[e]);
			kn();
		}
		Re = !1, t !== !1 && Yn("setLegend");
	}
	r.setLegend = An;
	function jn(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? ut : t[e], o;
		ge ? o = i.values(r, e, n) ?? _e : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? _e : { _: o }), ce.values[e] = o;
	}
	function Mn(e, n, a) {
		rn = U, an = on, [U, on] = A.move(r, U, on), A.left = U, A.top = on, le && (Zt && Pi(Zt, da(U), 0, I, L), Qt && Pi(Qt, 0, da(on), I, L));
		let o, s = ct > B;
		bn = xa, xn = null;
		let c = D.ori == 0 ? I : L, l = D.ori == 1 ? I : L;
		if (U < 0 || z == 0 || s) {
			o = A.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Xe[e];
				t != null && Pi(t, -10, -10, I, L);
			}
			Je && hn(null, Cn, !0, e == null && Xn.setSeries), ce.live && (se.fill(o), Re = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? U : on, n = Tn(e, S), o = A.idx = Ui(n, t[0], ct, B), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = A.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Re = Re || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (Je && S != null) {
						let t = D.ori == 1 ? U : on, n = la(qe.dist(r, e, x, _, t));
						if (n < bn) {
							let r = qe.bias;
							if (r != 0) {
								let i = Tn(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (bn = n, xn = e);
							} else bn = n, xn = e;
						}
					}
					if (Re || Ye) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = Ke.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = Ke.size(r, e);
						if (v = Ke.fill(r, e), g = Ke.stroke(r, e), Ye) e == xn && bn <= qe.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = Xe[e];
							t != null && (Ze[e] = c, Qe[e] = l, Ri(t, a, o, y), Ii(t, v, g), Pi(t, fa(c), fa(l), I, L));
						}
					}
				}
			}
			if (Ye) {
				let e = qe.prox;
				if (Re || (Sn == null ? bn <= e : bn > e || xn != Sn)) {
					let e = Xe[0];
					e != null && (Ze[0] = s, Qe[0] = u, Ri(e, d, f, p), Ii(e, m, h), Pi(e, fa(s), fa(u), I, L));
				}
			}
		}
		if (W.show && sn) if (e != null) {
			let [t, n] = Xn.scales, [r, i] = Xn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (ln = s._x, un = s._y, ln || un) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && ln ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), On(pa(v, y), la(y - v))) : On(0, c), S && un ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), K(pa(v, y), la(y - v))) : K(0, l);
			} else Rn();
		} else {
			let e = la(rn - $t), t = la(an - en);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			ln = cn.x && e >= cn.dist, un = cn.y && t >= cn.dist;
			let n = cn.uni;
			n == null ? cn.x && cn.y && (ln || un) && (ln = un = !0) : ln && un && (ln = e >= n, un = t >= n, !ln && !un && (t > e ? un = !0 : ln = !0));
			let r, i;
			ln && (D.ori == 0 ? (r = tn, i = U) : (r = nn, i = on), On(pa(r, i), la(i - r)), un || K(0, l)), un && (D.ori == 1 ? (r = tn, i = U) : (r = nn, i = on), K(pa(r, i), la(i - r)), ln || On(0, c)), !ln && !un && (On(0, 0), K(0, 0));
		}
		if (cn._x = ln, cn._y = un, e == null) {
			if (a) {
				if (Zn != null) {
					let [e, t] = Xn.scales;
					Xn.values[0] = e == null ? null : Tn(D.ori == 0 ? U : on, e), Xn.values[1] = t == null ? null : Tn(D.ori == 1 ? U : on, t);
				}
				$n(di, r, U, on, I, L, o);
			}
			if (Je) {
				let e = a && Xn.setSeries, t = qe.prox;
				Sn == null ? bn <= t && hn(xn, Cn, !0, e) : bn > t ? hn(null, Cn, !0, e) : xn != Sn && hn(xn, Cn, !0, e);
			}
		}
		Re && (ce.idx = o, An()), n !== !1 && Yn("setCursor");
	}
	let Nn = null;
	Object.defineProperty(r, "rect", { get() {
		return Nn ?? Pn(!1), Nn;
	} });
	function Pn(e = !1) {
		e ? Nn = null : (Nn = m.getBoundingClientRect(), Yn("syncRect", Nn));
	}
	function Fn(e, t, n, r, i, a, o) {
		A._lock || sn && e != null && e.movementX == 0 && e.movementY == 0 || (In(e, t, n, r, i, a, o, !1, e != null), e == null ? Mn(t, !0, !1) : Mn(null, !0, !0));
	}
	function In(e, t, n, i, a, o, c, l, u) {
		if (Nn ?? Pn(!1), Ge(e), e != null) n = e.clientX - Nn.left, i = e.clientY - Nn.top;
		else {
			if (n < 0 || i < 0) {
				U = -10, on = -10;
				return;
			}
			let [e, r] = Xn.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = Xn.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? I : L, _ = D.ori == 1 ? I : L, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == di) && ((n <= 1 || n >= I - 1) && (n = Na(n, I)), (i <= 1 || i >= L - 1) && (i = Na(i, L))), l ? ($t = n, en = i, [tn, nn] = A.move(r, n, i)) : (U = n, on = i);
	}
	let Ln = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	function Rn() {
		fn(Ln, !1);
	}
	let zn, Bn, Vn, Hn;
	function Un(e, t, n, i, a, o, s) {
		sn = !0, ln = un = cn._x = cn._y = !1, In(e, t, n, i, a, o, s, !0, !1), e != null && (P(pi, Ci, Wn, !1), $n(fi, r, tn, nn, I, L, null));
		let { left: c, top: l, width: u, height: d } = W;
		zn = c, Bn = l, Vn = u, Hn = d;
	}
	function Wn(e, t, n, i, a, o, s) {
		sn = cn._x = cn._y = !1, In(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = W, f = u > 0 || d > 0, p = zn != c || Bn != l || Vn != u || Hn != d;
		if (f && p && fn(W), cn.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), ln && mn(S, Tn(e, S), Tn(e + t, S)), un) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != xa && mn(e, Tn(n + r, e), Tn(n, e));
			}
			Rn();
		} else A.lock && (A._lock = !A._lock, Mn(t, !0, e != null));
		e != null && (Se(pi, Ci), $n(pi, r, U, on, I, L, null));
	}
	function Gn(e, t, n, r, i, a, o) {
		if (A._lock) return;
		Ge(e);
		let s = sn;
		if (sn) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = ln, r = un) : (n = un, r = ln), n && r && (e = U <= 10 || U >= I - 10, t = on <= 10 || on >= L - 10), n && e && (U = U < tn ? 0 : I), r && t && (on = on < nn ? 0 : L), Mn(null, !0, !0), sn = !1;
		}
		U = -10, on = -10, se.fill(null), Mn(null, !0, !0), s && (sn = s);
	}
	function Kn(e, t, n, i, a, o, s) {
		A._lock || (Ge(e), pt(), Rn(), e != null && $n(gi, r, U, on, I, L, null));
	}
	function qn() {
		y.forEach(Pc), ze(r.width, r.height, !0);
	}
	Vi(bi, wi, qn);
	let q = {};
	q.mousedown = Un, q.mousemove = Fn, q.mouseup = Wn, q.dblclick = Kn, q.setSeries = (e, t, n, i) => {
		let a = Xn.match[2];
		n = a(r, t, n), n != -1 && hn(n, i, !0, !1);
	}, le && (P(fi, m, Un), P(di, m, Fn), P(mi, m, (e) => {
		Ge(e), Pn(!1);
	}), P(hi, m, Gn), P(gi, m, Kn), vc.add(r), r.syncRect = Pn);
	let Jn = r.hooks = e.hooks || {};
	function Yn(e, t, n) {
		Wt ? Gt.push([
			e,
			t,
			n
		]) : e in Jn && Jn[e].forEach((e) => {
			e.call(null, r, t, n);
		});
	}
	(e.plugins || []).forEach((e) => {
		for (let t in e.hooks) Jn[t] = (Jn[t] || []).concat(e.hooks[t]);
	});
	let J = (e, t, n) => n, Xn = Za({
		key: null,
		setSeries: !1,
		filters: {
			pub: ka,
			sub: ka
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			Aa,
			Aa,
			J
		],
		values: [null, null]
	}, A.sync);
	Xn.match.length == 2 && Xn.match.push(J), A.sync = Xn;
	let Zn = Xn.key, Qn = zs(Zn);
	function $n(e, t, n, r, i, a, o) {
		Xn.filters.pub(e, t, n, r, i, a, o) && Qn.pub(e, t, n, r, i, a, o);
	}
	Qn.sub(r);
	function er(e, t, n, r, i, a, o) {
		Xn.filters.sub(e, t, n, r, i, a, o) && q[e](null, t, n, r, i, a, o);
	}
	r.pub = er;
	function tr() {
		Qn.unsub(r), vc.delete(r), xe.clear(), Hi(bi, wi, qn), l.remove(), ue?.remove(), Yn("destroy");
	}
	r.destroy = tr;
	function nr() {
		Yn("init", e, t), ft(t || e.data, !1), k[S] ? Jt(S, k[S]) : pt(), Le = W.show && (W.width > 0 || W.height > 0), Ie = Re = !0, ze(e.width, e.height);
	}
	return v.forEach(et), y.forEach(it), n ? n instanceof HTMLElement ? (n.appendChild(l), nr()) : n(r, nr) : nr(), r;
}
Fc.assign = Za, Fc.fmtNum = oa, Fc.rangeNum = na, Fc.rangeLog = Xi, Fc.rangeAsinh = Zi, Fc.orient = Hs, Fc.pxRatio = Y, Fc.join = no, Fc.fmtDate = go, Fc.tzDate = vo, Fc.sync = zs;
{
	Fc.addGap = qs, Fc.clipGaps = Ks;
	let e = Fc.paths = { points: sc };
	e.linear = dc, e.stepped = fc, e.bars = mc, e.spline = gc;
}
//#endregion
//#region src/App.svelte
var Ic = /* @__PURE__ */ sr("<div class=\"error\"> </div>"), Lc = /* @__PURE__ */ sr("<div><strong> </strong><span> </span><small> </small></div>"), Rc = /* @__PURE__ */ sr("<div class=\"health-list\"></div>"), zc = /* @__PURE__ */ sr("<p class=\"clear\">No optimizer snapshots in this window yet.</p>"), Bc = /* @__PURE__ */ sr("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), Vc = /* @__PURE__ */ sr("<p class=\"clear\">No optimizer attempts in this window yet.</p>"), Hc = /* @__PURE__ */ sr("<article><strong> </strong><small> </small><em> </em></article>"), Uc = /* @__PURE__ */ sr("<div class=\"attention-list\"></div>"), Wc = /* @__PURE__ */ sr("<p class=\"clear\">No active signals in this window.</p>"), Gc = /* @__PURE__ */ sr("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">Live gateway overview</p> <h2>Operational signals</h2></div> <span> </span></div> <!> <div class=\"metrics\"><article><span>Requests</span><strong> </strong><small> </small></article> <article><span>Latency p95</span><strong> </strong><small> </small></article> <article><span>Tokens</span><strong> </strong><small> </small></article> <article><span>Estimated cost</span><strong> </strong><small> </small></article></div> <div class=\"charts\"><article class=\"chart\"><h3>Latency p95</h3><div class=\"plot\"></div></article> <article class=\"chart\"><h3>Requests</h3><div class=\"plot\"></div></article></div> <div class=\"optimizer-grid\"><article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Persisted optimizer health</h3><span class=\"status\"> </span></div> <!></article> <article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Savings measurement coverage</h3><span class=\"status\">explicit only</span></div> <!></article></div> <div class=\"attention\"><div class=\"attention-heading\"><h3>Needs attention</h3><span> </span></div> <!></div></section>");
function Kc(e, t) {
	ke(t, !1);
	let n = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), r = /* @__PURE__ */ jt("1h"), i = /* @__PURE__ */ jt({}), a = /* @__PURE__ */ jt({ alerts: [] }), o = [], s = /* @__PURE__ */ jt([]), c = /* @__PURE__ */ jt([]), l = /* @__PURE__ */ jt(!0), u = /* @__PURE__ */ jt(""), d = /* @__PURE__ */ jt(), f = /* @__PURE__ */ jt(), p, m, h, g = (e) => new Intl.NumberFormat().format(Number(e || 0)), _ = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, v = (e) => `$${Number(e || 0).toFixed(4)}`, y = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m";
	async function b(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function x() {
		let e = document.querySelector("#window-select")?.value || localStorage.getItem("apx.dashboard.window") || "1h";
		return n.has(e) ? e : "1h";
	}
	function S(e, t, n) {
		return {
			width: Math.max(280, e.clientWidth || 0),
			height: 180,
			cursor: { drag: {
				x: !0,
				y: !1
			} },
			scales: { x: { time: !0 } },
			series: [{}, {
				label: t,
				stroke: n,
				width: 2
			}],
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
	function C() {
		let e = o.map((e) => Number(e.ts || 0)), t = o.map((e) => Number(e.latency_p95_ms || 0)), n = o.map((e) => Number(e.requests || 0));
		!q(d) || !q(f) || (p?.destroy(), m?.destroy(), p = new Fc(S(q(d), "p95 latency (ms)", "#7aa2ff"), [e, t], q(d)), m = new Fc(S(q(f), "requests", "#31c48d"), [e, n], q(f)));
	}
	async function w() {
		Mt(l, !0), Mt(u, ""), Mt(r, x());
		try {
			let [e, t, n, l, u] = await Promise.all([
				b(`/api/metrics/summary?window=${q(r)}`),
				b(`/api/metrics/attention?window=${q(r)}`),
				b(`/api/metrics/timeseries?window=${q(r)}&bucket=${y(q(r))}`),
				b(`/api/metrics/efficiency?window=${q(r)}`),
				b(`/api/metrics/optimizer-snapshots?window=${q(r)}`)
			]);
			Mt(i, e), Mt(a, t), o = n.series || [], Mt(c, l.optimizers || []), Mt(s, u.snapshots || []), await qn(), C();
		} catch (e) {
			Mt(u, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			Mt(l, !1);
		}
	}
	_r(() => {
		document.body.classList.add("svelte-overview-active"), w();
		let e = document.querySelector("#window-select"), t = () => w();
		e?.addEventListener("change", t);
		let n = window.setInterval(w, 1e4);
		return h = new ResizeObserver(() => C()), q(d) && h.observe(q(d)), q(f) && h.observe(q(f)), () => {
			document.body.classList.remove("svelte-overview-active"), e?.removeEventListener("change", t), window.clearInterval(n), h?.disconnect(), p?.destroy(), m?.destroy();
		};
	});
	let T = /* @__PURE__ */ jt([]);
	on(() => q(s), () => {
		Mt(T, Object.values(q(s).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), sn(), Pr();
	var E = Gc(), D = V(E), O = H(V(D), 2);
	let ee;
	var te = V(O, !0);
	F(O), F(D);
	var k = H(D, 2), ne = (e) => {
		var t = Ic(), n = V(t);
		F(t), un(() => dr(n, `${q(u) ?? ""}. The legacy dashboard remains available below.`)), cr(e, t);
	};
	yr(k, (e) => {
		q(u) && e(ne);
	});
	var re = H(k, 2), ie = V(re), ae = H(V(ie)), oe = V(ae, !0);
	F(ae);
	var se = H(ae), ce = V(se);
	F(se), F(ie);
	var A = H(ie, 2), j = H(V(A)), le = V(j, !0);
	F(j);
	var M = H(j), ue = V(M);
	F(M), F(A);
	var de = H(A, 2), fe = H(V(de)), pe = V(fe, !0);
	F(fe);
	var me = H(fe), he = V(me);
	F(me), F(de);
	var ge = H(de, 2), _e = H(V(ge)), ve = V(_e, !0);
	F(_e);
	var ye = H(_e), be = V(ye);
	F(ye), F(ge), F(re);
	var N = H(re, 2), xe = V(N);
	Nr(H(V(xe)), (e) => Mt(d, e), () => q(d)), F(xe);
	var P = H(xe, 2);
	Nr(H(V(P)), (e) => Mt(f, e), () => q(f)), F(P), F(N);
	var Se = H(N, 2), Ce = V(Se), I = V(Ce), L = H(V(I)), we = V(L);
	F(L), F(I);
	var Te = H(I, 2), Ee = (e) => {
		var t = Rc();
		Cr(t, 5, () => q(T), (e) => e.optimizer, (e, t) => {
			var n = Lc();
			let r;
			var i = V(n), a = V(i, !0);
			F(i);
			var o = H(i), s = V(o, !0);
			F(o);
			var c = H(o), l = V(c, !0);
			F(c), F(n), un((e) => {
				r = jr(n, 1, "health-row", null, r, {
					up: q(t).reachable,
					down: !q(t).reachable
				}), dr(a, (q(t), J(() => q(t).optimizer))), dr(s, (q(t), J(() => q(t).reachable ? "reachable" : "unreachable"))), dr(l, e);
			}, [() => (q(t), J(() => (/* @__PURE__ */ new Date(Number(q(t).ts || 0) * 1e3)).toLocaleString()))]), cr(e, n);
		}), F(t), cr(e, t);
	}, De = (e) => {
		cr(e, zc());
	};
	yr(Te, (e) => {
		q(T), J(() => q(T).length) ? e(Ee) : e(De, -1);
	}), F(Ce);
	var R = H(Ce, 2), Oe = H(V(R), 2), je = (e) => {
		var t = Rc();
		Cr(t, 5, () => q(c), (e) => e.optimizer, (e, t) => {
			var n = Bc(), r = V(n), i = V(r, !0);
			F(r);
			var a = H(r), o = V(a);
			F(a);
			var s = H(a), c = V(s);
			F(s), F(n), un((e, n, r, a) => {
				dr(i, (q(t), J(() => q(t).optimizer))), dr(o, `${e ?? ""}/${n ?? ""} verified`), dr(c, `${r ?? ""} estimated · ${a ?? ""} unavailable`);
			}, [
				() => (q(t), J(() => g(q(t).measured_attempts))),
				() => (q(t), J(() => g(q(t).attempts))),
				() => (q(t), J(() => g(q(t).estimated_attempts))),
				() => (q(t), J(() => g(q(t).unavailable_attempts)))
			]), cr(e, n);
		}), F(t), cr(e, t);
	}, Me = (e) => {
		cr(e, Vc());
	};
	yr(Oe, (e) => {
		q(c), J(() => q(c).length) ? e(je) : e(Me, -1);
	}), F(R), F(Se);
	var Ne = H(Se, 2), Pe = V(Ne), Fe = H(V(Pe));
	let Ie;
	var Le = V(Fe);
	F(Fe), F(Pe);
	var Re = H(Pe, 2), ze = (e) => {
		var t = Uc();
		Cr(t, 5, () => (q(a), J(() => q(a).alerts.slice(0, 3))), (e) => e.id, (e, t) => {
			var n = Hc();
			let r;
			var i = V(n), a = V(i, !0);
			F(i);
			var o = H(i), s = V(o, !0);
			F(o);
			var c = H(o), l = V(c);
			F(c), F(n), un(() => {
				r = jr(n, 1, "signal", null, r, {
					critical: q(t).severity === "critical",
					warning: q(t).severity === "warning"
				}), dr(a, (q(t), J(() => q(t).title))), dr(s, (q(t), J(() => q(t).detail))), dr(l, `Next: ${(q(t), J(() => q(t).action)) ?? ""}`);
			}), cr(e, n);
		}), F(t), cr(e, t);
	}, Be = (e) => {
		cr(e, Wc());
	};
	yr(Re, (e) => {
		q(a), J(() => q(a).alerts?.length) ? e(ze) : e(Be, -1);
	}), F(Ne), F(E), un((e, t, n, i, o, s, c, d, f, p) => {
		ee = jr(O, 1, "status", null, ee, {
			ok: !q(l) && !q(u),
			warn: q(l),
			fail: !!q(u)
		}), dr(te, q(u) ? "refresh failed" : q(l) ? "refreshing" : `last ${q(r)}`), dr(oe, e), dr(ce, `${t ?? ""} ok · ${n ?? ""} failed`), dr(le, i), dr(ue, `first byte ${o ?? ""}`), dr(pe, s), dr(he, `cache ${c ?? ""} read`), dr(ve, d), dr(be, `${f ?? ""} tool calls`), dr(we, `${(q(T), J(() => q(T).length)) ?? ""} tracked`), Ie = jr(Fe, 1, "status", null, Ie, p), dr(Le, `${(q(a), J(() => q(a).alerts?.length || 0)) ?? ""} signals`);
	}, [
		() => (q(i), J(() => g(q(i).totals?.requests))),
		() => (q(i), J(() => g(q(i).totals?.ok))),
		() => (q(i), J(() => g(q(i).totals?.err_5xx))),
		() => (q(i), J(() => _(q(i).latency_ms?.p95))),
		() => (q(i), J(() => _(q(i).first_byte_ms?.p95))),
		() => (q(i), J(() => g((q(i).totals?.tokens_in || 0) + (q(i).totals?.tokens_out || 0)))),
		() => (q(i), J(() => g(q(i).totals?.cache_read_tokens))),
		() => (q(i), J(() => v(q(i).totals?.cost_est_usd))),
		() => (q(i), J(() => g(q(i).totals?.tool_calls))),
		() => ({
			ok: !q(a).alerts?.length,
			warn: q(a).alerts?.some((e) => e.severity === "warning"),
			fail: q(a).alerts?.some((e) => e.severity === "critical")
		})
	]), cr(e, E), Ae();
}
//#endregion
//#region src/main.js
var qc = "svelte-uplot", Jc = document.querySelector("#svelte-overview");
Jc && fr(Kc, { target: Jc });
//#endregion
export { Kc as App, qc as dashboardBuild };
