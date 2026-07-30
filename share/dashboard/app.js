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
function M(e) {
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
		r: q,
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
	var t = q;
	if (t === null) return K.f |= re, e;
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
	var t = K, n = q;
	Tn(null), En(null);
	try {
		return e();
	} finally {
		Tn(t), En(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function We(e) {
	let t = 0, n = kt(0), r;
	return () => {
		$t() && (J(n), sn(() => (t === 0 && (r = qn(() => e(() => Ft(n)))), t += 1, () => {
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
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = ln(() => {
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
			this.#a = W(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Pe(r), t && (this.#s = W(() => {
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
			t = !0, n && _e(), this.#s !== null && hn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = W(() => e(this.#e)), Pe(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ut();
			e.append(t), this.#a = this.#S(() => W(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, hn(this.#o, () => {
				this.#o = null;
			}), this.#x(z));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = W(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				yn(this.#a, e);
				let t = this.#n.pending;
				this.#o = W(() => t(this.#e));
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
		var t = q, n = K, r = R;
		En(this.#i), Tn(this.#i), Oe(this.#i.ctx);
		try {
			return gt.ensure(), e();
		} catch (e) {
			return Ie(e), null;
		} finally {
			En(t), Tn(n), Oe(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && hn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Pe(() => {
			this.#d = !1, this.#m && Nt(this.#m, this.#l);
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
		this.#a &&= (fn(this.#a), null), this.#o &&= (fn(this.#o), null), this.#s &&= (fn(this.#s), null), N && (Se(this.#t), I(), Se(L()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return W(() => {
						var r = q;
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
	var s = q, c = Ye(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
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
	var e = q, t = K, n = R, r = z;
	return function(i = !0) {
		En(e), Tn(t), Oe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xe(e = !0) {
	En(null), Tn(null), Oe(null), e && z?.deactivate();
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
	return on(() => {
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
		for (var n = 0; n < t.length; n += 1) fn(t[n]);
	}
}
function rt(e) {
	var t, n = q, i = e.parent;
	if (!Sn && i !== null && e.v !== r && i.f & 24576) return ve(), e.v;
	En(i);
	try {
		e.f &= ~te, nt(e), t = Bn(e);
	} finally {
		En(n);
	}
	return t;
}
function it(e) {
	var t = rt(e);
	if (!e.equals(t) && (e.wv = Ln(), (!z?.is_fork || e.deps === null) && (z === null ? e.v = t : (z.capture(e, t, !0), ct?.capture(e, t, !0)), e.deps === null))) {
		ze(e, y);
		return;
	}
	Sn || (B === null ? Be(e) : ($t() || z?.is_fork) && B.set(e, t));
}
function at(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ue(() => {
		t.ac.abort(A), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Hn(t, 0), un(t));
}
function ot(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Un(t);
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
				a ? r.f ^= y : i & 4 ? t.push(r) : Rn(r) && (i & 16 && this.#d.add(r), Un(r));
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
			if (!(r.f & 24576) && Rn(r) && (yt = /* @__PURE__ */ new Set(), Un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && mn(r), yt?.size > 0)) {
				Dt.clear();
				for (let e of yt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) yt.has(n) && (yt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Un(n);
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
	return On(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function jt(t, n = !1, r = !0) {
	let i = kt(t);
	return n || (i.equals = De), e && r && R !== null && R.l !== null && (R.l.s ??= []).push(i), i;
}
function Mt(e, t, n = !1) {
	return K !== null && (!wn || K.f & 131072) && je() && K.f & 4325394 && (Dn === null || !Dn.has(e)) && ge(), Nt(e, n ? Lt(t) : t, pt);
}
function Nt(e, t, n = null) {
	if (!e.equals(t)) {
		Dt.set(e, Sn ? t : e.v);
		var r = gt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && rt(t), B === null && Be(t);
		}
		e.wv = Ln(), It(e, b, n), je() && q !== null && q.f & 1024 && !(q.f & 96) && (jn === null ? Mn([e]) : jn.push(e)), !r.is_fork && Et.size > 0 && !Ot && Pt();
	}
	return t;
}
function Pt() {
	Ot = !1;
	for (let e of Et) {
		e.f & 1024 && ze(e, x);
		let t;
		try {
			t = Rn(e);
		} catch {
			t = !0;
		}
		t && Un(e);
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
		if (!(!i && s === q)) {
			var l = (c & b) === 0;
			if (l && ze(s, t), c & 131072) Et.add(s);
			else if (c & 2) {
				var u = s;
				B?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= te), It(u, x, n));
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
	var n = /* @__PURE__ */ new Map(), a = i(e), o = /* @__PURE__ */ At(0), s = null, c = Fn, u = (e) => {
		if (Fn === c) return e();
		var t = K, n = Fn;
		Tn(null), In(c);
		var r = e();
		return Tn(t), In(n), r;
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
			return (i !== void 0 || q !== null && (!a || l(e, t)?.writable)) && (i === void 0 && (i = u(() => /* @__PURE__ */ At(a ? Lt(e[t]) : r, s)), n.set(t, i)), J(i) === r) ? !1 : a;
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
			J(o);
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
	q === null && (K === null && fe(e), de()), Sn && M(e);
}
function Zt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t) {
	var n = q;
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
			Un(r);
		} catch (e) {
			throw fn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= E));
	}
	if (i !== null && (i.parent = n, n !== null && Zt(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function $t() {
	return K !== null && !wn;
}
function en(e) {
	let t = Qt(8, null);
	return ze(t, y), t.teardown = e, t;
}
function tn(e) {
	Xt("$effect");
	var t = q.f;
	if (!K && t & 32 && R !== null && !R.i) {
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
		e.outro ? hn(t, () => {
			fn(t), n(void 0);
		}) : (fn(t), n(void 0));
	});
}
function U(e) {
	return Qt(4, e);
}
function on(e) {
	return Qt(ne | D, e);
}
function sn(e, t = 0) {
	return Qt(8 | t, e);
}
function cn(e, t = [], n = [], r = []) {
	Je(r, t, n, (t) => {
		Qt(8, () => {
			e(...t.map(J));
		});
	});
}
function ln(e, t = 0) {
	return Qt(16 | t, e);
}
function W(e) {
	return Qt(32 | D, e);
}
function G(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Sn, n = K;
		Cn(!0), Tn(null);
		try {
			t.call(null);
		} finally {
			Cn(e), Tn(n);
		}
	}
}
function un(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ue(() => {
			e.abort(A);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : fn(n, t), n = r;
	}
}
function dn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || fn(t), t = n;
	}
}
function fn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (pn(e.nodes.start, e.nodes.end), n = !0), e.f |= T, un(e, t && !n), Hn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	G(e), e.f ^= T, e.f |= C;
	var i = e.parent;
	i !== null && i.first !== null && mn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function pn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Gt(e);
		e.remove(), e = n;
	}
}
function mn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function hn(e, t, n = !0) {
	var r = [];
	gn(e, r, !0);
	var i = () => {
		n && fn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function gn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= S;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				gn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function _n(e) {
	vn(e, !0);
}
function vn(e, t) {
	if (e.f & 8192) {
		e.f ^= S, e.f & 1024 || (ze(e, b), gt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			vn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function yn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Gt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var bn = null, xn = !1, Sn = !1;
function Cn(e) {
	Sn = e;
}
var K = null, wn = !1;
function Tn(e) {
	K = e;
}
var q = null;
function En(e) {
	q = e;
}
var Dn = null;
function On(e) {
	K !== null && (Dn ??= /* @__PURE__ */ new Set()).add(e);
}
var kn = null, An = 0, jn = null;
function Mn(e) {
	jn = e;
}
var Nn = 1, Pn = 0, Fn = Pn;
function In(e) {
	Fn = e;
}
function Ln() {
	return ++Nn;
}
function Rn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~te), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Rn(a) && it(a), a.wv > e.wv) return !0;
		}
		t & 512 && B === null && ze(e, y);
	}
	return !1;
}
function zn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Dn !== null && Dn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? zn(a, t, !1) : t === a && (n ? ze(a, b) : a.f & 1024 && ze(a, x), Ct(a));
	}
}
function Bn(e) {
	var t = kn, n = An, r = jn, i = K, a = Dn, o = R, s = wn, c = Fn, l = e.f;
	kn = null, An = 0, jn = null, K = l & 96 ? null : e, Dn = null, Oe(e.ctx), wn = !1, Fn = ++Pn, e.ac !== null && (Ue(() => {
		e.ac.abort(A);
	}), e.ac = null);
	try {
		e.f |= k;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = z?.is_fork;
		if (kn !== null) {
			var m;
			if (p || Hn(e, An), f !== null && An > 0) for (f.length = An + kn.length, m = 0; m < kn.length; m++) f[An + m] = kn[m];
			else e.deps = f = kn;
			if ($t() && e.f & 512) for (m = An; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && An < f.length && (Hn(e, An), f.length = An);
		if (je() && jn !== null && !wn && f !== null && !(e.f & 6146)) for (m = 0; m < jn.length; m++) zn(jn[m], e);
		if (i !== null && i !== e) {
			if (Pn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Pn;
			if (t !== null) for (let e of t) e.rv = Pn;
			jn !== null && (r === null ? r = jn : r.push(...jn));
		}
		return e.f & 8388608 && (e.f ^= re), d;
	} catch (e) {
		return Ie(e);
	} finally {
		e.f ^= k, kn = t, An = n, jn = r, K = i, Dn = a, Oe(o), wn = s, Fn = c;
	}
}
function Vn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = a.call(n, e);
		if (i !== -1) {
			var s = n.length - 1;
			s === 0 ? n = t.reactions = null : (n[i] = n[s], n.pop());
		}
	}
	if (n === null && t.f & 2 && (kn === null || !o.call(kn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~te), c.v !== r && Be(c), c.ac !== null && Ue(() => {
			c.ac.abort(A), c.ac = null, ze(c, b);
		}), at(c), Hn(c, 0);
	}
}
function Hn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Vn(e, n[r]);
}
function Un(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ze(e, y);
		var n = q, r = xn;
		q = e, xn = (t & 96) == 0;
		try {
			t & 16777232 ? dn(e) : un(e), G(e);
			var i = Bn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Nn;
		} finally {
			xn = r, q = n;
		}
	}
}
async function Wn() {
	await Promise.resolve(), _t();
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (bn?.add(e), K !== null && !wn && !(q !== null && q.f & 16384) && (Dn === null || !Dn.has(e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Pn && (e.rv = Pn, kn === null && n !== null && n[An] === e ? An++ : kn === null ? kn = [e] : kn.push(e));
		else {
			K.deps ??= [], o.call(K.deps, e) || K.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : o.call(r, K) || r.push(K);
		}
	}
	if (Sn && Dt.has(e)) return Dt.get(e);
	if (t) {
		var i = e;
		if (Sn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Kn(i)) && (a = rt(i)), Dt.set(i, a), a;
		}
		var s = (i.f & 512) == 0 && !wn && K !== null && (xn || (K.f & 512) != 0), c = (i.f & w) === 0;
		Rn(i) && (s && (i.f |= 512), it(i)), s && !c && (ot(i), Gn(i));
	}
	if (B?.has(e)) return B.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Gn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ot(t), Gn(t));
}
function Kn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Dt.has(t) || t.f & 2 && Kn(t)) return !0;
	return !1;
}
function qn(e) {
	var t = wn;
	try {
		return wn = !0, e();
	} finally {
		wn = t;
	}
}
function Jn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ie in e) Yn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ie in n && Yn(n);
		}
	}
}
function Yn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Yn(e[n], t);
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
var Xn = Symbol("events"), Zn = /* @__PURE__ */ new Set(), Qn = /* @__PURE__ */ new Set(), $n = null;
function er(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	$n = e;
	var o = 0, s = $n === e && e[Xn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Xn] = t;
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
		Tn(null), En(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Xn]?.[r];
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
			e[Xn] = t, delete e.currentTarget, Tn(d), En(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var tr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function nr(e) {
	return tr?.createHTML(e) ?? e;
}
function rr(e) {
	var t = Jt("template");
	return t.innerHTML = nr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ir(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ar(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (N) return ir(P, null), P;
		i === void 0 && (i = rr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Wt(i)));
		var t = r || zt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Wt(t), s = t.lastChild;
			ir(o, s);
		} else ir(t, t);
		return t;
	};
}
function or(e, t) {
	if (N) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = P), Ce();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var sr = ["touchstart", "touchmove"];
function cr(e) {
	return sr.includes(e);
}
function lr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ce] ??= e.nodeValue) && (e[ce] = n, e.nodeValue = `${n}`);
}
function ur(e, t) {
	return fr(e, t);
}
var dr = /* @__PURE__ */ new Map();
function fr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: c = !0, transformError: l }) {
	Ht();
	var u = void 0, d = an(() => {
		var c = r ?? t.appendChild(Ut());
		Ke(c, { pending: () => {} }, (t) => {
			ke({});
			var r = R;
			if (o && (r.c = o), a && (i.$$events = a), N && ir(t, null), u = e(t, i) || {}, N && (q.nodes.end = P, P === null || P.nodeType !== 8 || P.data !== "]")) throw ye(), n;
			Ae();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = cr(r);
					for (let e of [t, document]) {
						var a = dr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), dr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, er, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(s(Zn)), Qn.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = dr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, er), n.delete(e), n.size === 0 && dr.delete(r)) : n.set(e, i);
			}
			Qn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return pr.set(u, d), u;
}
var pr = /* @__PURE__ */ new WeakMap(), mr = class {
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
			if (n) _n(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (_n(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (fn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						yn(r, t), t.append(Ut()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else fn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), hn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (fn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = z, r = qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ut();
			i.append(a), this.#n.set(e, {
				effect: W(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, W(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else N && (this.anchor = P), this.#a(n);
	}
};
function hr(t) {
	R === null && le("onMount"), e && R.l !== null ? gr(R).m.push(t) : tn(() => {
		let e = qn(t);
		if (typeof e == "function") return e;
	});
}
function gr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function _r(e, t, n = !1) {
	var r;
	N && (r = P, Ce());
	var i = new mr(e), a = n ? E : 0;
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
	ln(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function vr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, c = 0; c < i; c++) {
		let n = t[c];
		hn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					yr(e, s(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
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
		yr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function yr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, yn(a, document.createDocumentFragment())) : fn(t[i], n);
	}
}
var br;
function xr(e, t, n, r, a, o = null) {
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
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Cr(v, p, c, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Tr(d, null, c)) : _n(d) : hn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: ln(() => {
			p = J(f);
			var e = p.length;
			let i = !1;
			N && we(c) === "[!" != (e === 0) && (c = L(), Se(c), xe(!1), i = !0);
			for (var s = /* @__PURE__ */ new Set(), u = z, v = qt(), y = 0; y < e; y += 1) {
				N && P.nodeType === 8 && P.data === "]" && (c = P, i = !0, xe(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Nt(S.v, b), S.i && Nt(S.i, y), v && u.unskip_effect(S.e)) : (S = wr(l, h ? c : br ??= Ut(), b, x, y, a, t, n), h || (S.e.f |= ee), l.set(x, S)), s.add(x);
			}
			if (e === 0 && o && !d && (h ? d = W(() => o(c)) : (d = W(() => o(br ??= Ut())), d.f |= ee)), e > s.size && j("", "", ""), N && e > 0 && Se(L()), !h) if (m.set(u, s), v) {
				for (let [e, t] of l) s.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			i && xe(!0), J(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, N && (c = P);
}
function Sr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Cr(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, c = e.items, l = Sr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (_n(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ee, _ === l) Tr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Er(e, d, _), Er(e, _, y), Tr(_, y, n), d = _, p = [], m = [], l = Sr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Tr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Er(e, S.prev, C.next), Er(e, d, S), Er(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Tr(_, l, n), Er(e, _.prev, _.next), Er(e, _, d === null ? e.effect.first : d.next), Er(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Sr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Sr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (yr(e, s(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Sr(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			vr(e, w, E);
		}
	}
	a && Pe(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function wr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? kt(n) : /* @__PURE__ */ jt(n, !1, !1) : null, l = o & 2 ? kt(i) : null;
	return {
		v: c,
		i: l,
		e: W(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Tr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Gt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Er(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Dr = [..." 	\n\r\f\xA0\v﻿"];
function Or(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Dr.includes(r[o - 1])) && (s === r.length || Dr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function kr(e, t, n, r, i, a) {
	var o = e[oe];
	if (N || o !== n || o === void 0) {
		var s = Or(n, r, a);
		(!N || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ar(e, t) {
	return e === t || e?.[ie] === t;
}
function jr(e = {}, t, n, r) {
	var i = R.r, a = q;
	return U(() => {
		var o, s;
		return sn(() => {
			o = s, s = r?.() || [], qn(() => {
				Ar(n(...s), e) || (t(e, ...s), o && Ar(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ar(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Mr(e = !1) {
	let t = R, n = t.l.u;
	if (!n) return;
	let r = () => Jn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Qe(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && rn(() => {
		Nr(t, r), _(n.b);
	}), tn(() => {
		let e = qn(() => n.m.map(g));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && tn(() => {
		Nr(t, r), _(n.a);
	});
}
function Nr(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
var Pr = !0, Fr = "uplot", Ir = "u-hz", Lr = "u-vt", Rr = "u-title", zr = "u-wrap", Br = "u-under", Vr = "u-over", Hr = "u-axis", Ur = "u-off", Wr = "u-select", Gr = "u-cursor-x", Kr = "u-cursor-y", qr = "u-cursor-pt", Jr = "u-legend", Yr = "u-live", Xr = "u-inline", Zr = "u-series", Qr = "u-marker", $r = "u-label", ei = "u-value", ti = "width", ni = "height", ri = "top", ii = "bottom", ai = "left", oi = "right", si = "#000", ci = "#0000", li = "mousemove", ui = "mousedown", di = "mouseup", fi = "mouseenter", pi = "mouseleave", mi = "dblclick", hi = "resize", gi = "scroll", _i = "change", vi = "dppxchange", yi = "--", bi = typeof window < "u", xi = bi ? document : null, Si = bi ? window : null, Ci = bi ? navigator : null, Y, wi;
function Ti() {
	let e = devicePixelRatio;
	Y != e && (Y = e, wi && Bi(_i, wi, Ti), wi = matchMedia(`(min-resolution: ${Y - .001}dppx) and (max-resolution: ${Y + .001}dppx)`), zi(_i, wi, Ti), Si.dispatchEvent(new CustomEvent(vi)));
}
function Ei(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Di(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function Oi(e, t, n) {
	e.style[t] = n + "px";
}
function ki(e, t, n, r) {
	let i = xi.createElement(e);
	return t != null && Ei(i, t), n?.insertBefore(i, r), i;
}
function Ai(e, t) {
	return ki("div", e, t);
}
var ji = /* @__PURE__ */ new WeakMap();
function Mi(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != ji.get(e) && (e.style.transform = a, ji.set(e, a), t < 0 || n < 0 || t > r || n > i ? Ei(e, Ur) : Di(e, Ur));
}
var Ni = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n) {
	let r = t + n;
	r != Ni.get(e) && (Ni.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var Fi = /* @__PURE__ */ new WeakMap();
function Ii(e, t, n, r) {
	let i = t + "" + n;
	i != Fi.get(e) && (Fi.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var Li = { passive: !0 }, Ri = {
	...Li,
	capture: !0
};
function zi(e, t, n, r) {
	t.addEventListener(e, n, r ? Ri : Li);
}
function Bi(e, t, n, r) {
	t.removeEventListener(e, n, Li);
}
bi && Ti();
function Vi(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : ca((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function Hi(e) {
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
var Ui = (e) => e != null, Wi = (e) => e != null && e > 0, Gi = Hi(Ui), Ki = Hi(Wi);
function qi(e, t, n, r = 0, i = !1) {
	let a = i ? Ki : Gi, o = i ? Wi : Ui;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? ya, c ?? -ya];
}
function Ji(e, t, n, r) {
	let i = ma(e), a = ma(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? ha : ga, s = i == 1 ? ca : ua, c = a == 1 ? ua : ca, l = s(o(sa(e))), u = c(o(sa(t))), d = pa(n, l), f = pa(n, u);
	return n == 10 && (l < 0 && (d = Q(d, -l)), u < 0 && (f = Q(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = Na(e, d), t = Ma(t, f)), [e, t];
}
function Yi(e, t, n, r) {
	let i = Ji(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var Xi = .1, Zi = {
	mode: 3,
	pad: Xi
}, Qi = {
	pad: 0,
	soft: null,
	mode: 0
}, $i = {
	min: Qi,
	max: Qi
};
function ea(e, t, n, r) {
	return Wa(n) ? na(e, t, n) : (Qi.pad = n, Qi.soft = r ? 0 : null, Qi.mode = r ? 3 : 0, na(e, t, $i));
}
function X(e, t) {
	return e ?? t;
}
function ta(e, t, n) {
	for (t = X(t, 0), n = X(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function na(e, t, n) {
	let r = n.min, i = n.max, a = X(r.pad, 0), o = X(i.pad, 0), s = X(r.hard, -ya), c = X(i.hard, ya), l = X(r.soft, ya), u = X(i.soft, -ya), d = X(r.mode, 0), f = X(i.mode, 0), p = t - e, m = ha(p), h = fa(sa(e), sa(t)), g = sa(ha(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != ya && (a = 0), f == 2 && u != -ya && (o = 0)));
	let _ = p || h || 1e3, v = pa(10, ca(ha(_))), y = Q(Na(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : ya, x = fa(s, y < b && e >= b ? b : da(b, y)), S = Q(Ma(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -ya, w = da(c, S > C && t <= C ? C : fa(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var ra = new Intl.NumberFormat(bi ? Ci.language : "en-US"), ia = (e) => ra.format(e), aa = Math, oa = aa.PI, sa = aa.abs, ca = aa.floor, la = aa.round, ua = aa.ceil, da = aa.min, fa = aa.max, pa = aa.pow, ma = aa.sign, ha = aa.log10, ga = aa.log2, _a = (e, t = 1) => aa.sinh(e) * t, va = (e, t = 1) => aa.asinh(e / t), ya = Infinity;
function ba(e) {
	return (ha((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function xa(e, t, n) {
	return da(fa(e, t), n);
}
function Sa(e) {
	return typeof e == "function";
}
function Z(e) {
	return Sa(e) ? e : () => e;
}
var Ca = () => {}, wa = (e) => e, Ta = (e, t) => t, Ea = (e) => null, Da = (e) => !0, Oa = (e, t) => e == t, ka = /\.\d*?(?=9{6,}|0{6,})/gm, Aa = (e) => {
	if (Va(e) || Pa.has(e)) return e;
	let t = `${e}`, n = t.match(ka);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Aa(e)}e${n}`;
	}
	return Q(e, r);
};
function ja(e, t) {
	return Aa(Q(Aa(e / t)) * t);
}
function Ma(e, t) {
	return Aa(ua(Aa(e / t)) * t);
}
function Na(e, t) {
	return Aa(ca(Aa(e / t)) * t);
}
function Q(e, t = 0) {
	if (Va(e)) return e;
	let n = 10 ** t;
	return la(e * n * (1 + 2 ** -52)) / n;
}
var Pa = /* @__PURE__ */ new Map();
function Fa(e) {
	return (("" + e).split(".")[1] || "").length;
}
function Ia(e, t, n, r) {
	let i = [], a = r.map(Fa);
	for (let o = t; o < n; o++) {
		let t = sa(o), n = Q(pa(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : Q(c, l);
			i.push(u), Pa.set(u, l);
		}
	}
	return i;
}
var La = {}, Ra = [], za = [null, null], Ba = Array.isArray, Va = Number.isInteger, Ha = (e) => e === void 0;
function Ua(e) {
	return typeof e == "string";
}
function Wa(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function Ga(e) {
	return typeof e == "object" && !!e;
}
var Ka = Object.getPrototypeOf(Uint8Array), qa = "__proto__";
function Ja(e, t = Wa) {
	let n;
	if (Ba(e)) {
		let r = e.find((e) => e != null);
		if (Ba(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = Ja(e[r], t);
		} else n = e.slice();
	} else if (e instanceof Ka) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != qa && (n[r] = Ja(e[r], t));
	} else n = e;
	return n;
}
function Ya(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != qa && (Wa(e[t]) ? Ya(e[t], Ja(r[t])) : e[t] = Ja(r[t]));
	}
	return e;
}
var Xa = 0, Za = 1, Qa = 2;
function $a(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function eo(e, t) {
	if (ro(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return io(t[0]) || (t = no(t)), t;
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
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : Za, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != Xa && (l[n] = t, u == Qa && d.push(n)) : l[n] = t;
			}
			$a(l, d, i), r.push(l);
		}
	}
	return r;
}
var to = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function no(e) {
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
function ro(e) {
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
function io(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = fa(1, ca((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var ao = [
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
], oo = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function so(e) {
	return e.slice(0, 3);
}
var co = oo.map(so), lo = {
	MMMM: ao,
	MMM: ao.map(so),
	WWWW: oo,
	WWW: co
};
function uo(e) {
	return (e < 10 ? "0" : "") + e;
}
function fo(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var po = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => uo(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => uo(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => uo(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => uo(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => uo(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => fo(e.getMilliseconds())
};
function mo(e, t) {
	t ||= lo;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? po[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var ho = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function go(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == ho ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var _o = (e) => e % 1 == 0, vo = [
	1,
	2,
	2.5,
	5
], yo = Ia(10, -32, 0, vo), bo = Ia(10, 0, 32, vo), xo = bo.filter(_o), So = yo.concat(bo), Co = "{YYYY}", wo = "\n{YYYY}", To = "{M}/{D}", Eo = "\n{M}/{D}", Do = "\n{M}/{D}/{YY}", Oo = "{h}:{mm}{aa}", ko = "\n{h}:{mm}{aa}", Ao = ":{ss}", $ = null;
function jo(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? Ia(10, 0, 3, vo).filter(_o) : Ia(10, -3, 0, vo)).concat([
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
			Co,
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
			wo,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			i,
			To,
			wo,
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
			Do,
			$,
			Eo,
			$,
			$,
			$,
			1
		],
		[
			n,
			Oo,
			Do,
			$,
			Eo,
			$,
			$,
			$,
			1
		],
		[
			t,
			Ao,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			$,
			"\n{M}/{D} {h}:{mm}{aa}",
			$,
			ko,
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
			ko,
			$,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = Q(g * e, 3), v = Vo(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = Q(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : Q(Vo(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(la(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = Vo(c + r * a, l + n * a, 1), s = o - t(Q(o * e, 3));
					i = Q((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (ca(l) - ca(_)) + Ma(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = Q(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = ca(Q(h + g, 6)) % 24, n = t(o).getHours() - e;
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
var [Mo, No, Po] = jo(1), [Fo, Io, Lo] = jo(.001);
Ia(2, -53, 53, [1]);
function Ro(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function zo(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function Bo(e, t) {
	let n = mo(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function Vo(e, t, n) {
	return new Date(e, t, n);
}
function Ho(e, t) {
	return t(e);
}
var Uo = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function Wo(e, t) {
	return (n, r, i, a) => a == null ? yi : t(e(r));
}
function Go(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function Ko(e, t) {
	return e.series[t].fill(e, t);
}
var qo = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: Ca,
	markers: {
		show: !0,
		width: 2,
		stroke: Go,
		fill: Ko,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function Jo(e, t) {
	let n = e.cursor.points, r = Ai(), i = n.size(e, t);
	Oi(r, ti, i), Oi(r, ni, i);
	let a = i / -2;
	Oi(r, "marginLeft", a), Oi(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Oi(r, "borderWidth", o), r;
}
function Yo(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function Xo(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function Zo(e, t) {
	return e.series[t].points.size;
}
var Qo = [0, 0];
function $o(e, t, n) {
	return Qo[0] = t, Qo[1] = n, Qo;
}
function es(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function ts(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var ns = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: $o,
	points: {
		one: !1,
		show: Jo,
		size: Zo,
		width: 0,
		stroke: Xo,
		fill: Yo
	},
	bind: {
		mousedown: es,
		mouseup: es,
		click: es,
		dblclick: es,
		mousemove: ts,
		mouseleave: ts,
		mouseenter: ts
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
}, rs = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, is = Ya({}, rs, { filter: Ta }), as = Ya({}, is, { size: 10 }), os = Ya({}, rs, { show: !1 }), ss = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", cs = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ls = 1.5, us = {
	show: !0,
	scale: "x",
	stroke: si,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: cs,
	side: 2,
	grid: is,
	ticks: as,
	border: os,
	font: ss,
	lineGap: ls,
	rotate: 0
}, ds = "Value", fs = "Time", ps = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: ya,
	max: -Infinity,
	idxs: []
};
function ms(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : ia(e));
}
function hs(e, t, n, r, i, a, o) {
	let s = [], c = Pa.get(i) || 0;
	n = o ? n : Q(Ma(n, i), c);
	for (let e = n; e <= r; e = Q(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function gs(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = pa(c, ca((c == 10 ? ha : ga)(n))), c == 10 && (i = So[Vi(i, So)]);
	let l = n, u = i * c;
	c == 10 && (u = So[Vi(u, So)]);
	do
		s.push(l), l += i, c == 10 && !Pa.has(l) && (l = Q(l, Pa.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = So[Vi(u, So)]));
	while (l <= r);
	return s;
}
function _s(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? gs(e, t, fa(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? gs(e, t, fa(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var vs = /./, ys = /[12357]/, bs = /[125]/, xs = /1/, Ss = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Cs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? vs : c(7, o) - u >= l ? ys : c(5, o) - u >= l ? bs : xs;
	if (d == xs) {
		let e = sa(c(1, o) - u);
		if (e < l) return Ss(t.slice().reverse(), s.distr, d, ua(l / e)).reverse();
	}
	return Ss(t, s.distr, d, 1);
}
function ws(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = sa(c(1, o) - c(2, o));
	return l < s ? Ss(t.slice().reverse(), 3, vs, ua(s / l)).reverse() : t;
}
function Ts(e, t, n, r) {
	return r == null ? yi : t == null ? "" : ia(t);
}
var Es = {
	show: !0,
	scale: "y",
	stroke: si,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: cs,
	side: 3,
	grid: is,
	ticks: as,
	border: os,
	font: ss,
	lineGap: ls,
	rotate: 0
};
function Ds(e, t) {
	return Q((3 + (e || 1) * 2) * t, 3);
}
function Os(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = sa(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * Y);
	return r[1] - r[0] <= o;
}
var ks = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: ya,
	max: -Infinity
}, As = (e, t, n, r, i) => i, js = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: As,
	alpha: 1,
	facets: [Ya({}, ks, { scale: "x" }), Ya({}, ks, { scale: "y" })]
}, Ms = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: As,
	alpha: 1,
	points: {
		show: Os,
		filter: null
	},
	values: null,
	min: ya,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Ns(e, t, n, r, i) {
	return n / 10;
}
var Ps = {
	time: Pr,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, Fs = Ya({}, Ps, {
	time: !1,
	ori: 1
}), Is = {};
function Ls(e, t) {
	let n = Is[e];
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
	}, e != null && (Is[e] = n)), n;
}
var Rs = 1, zs = 2;
function Bs(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, Ys, Zs, $s, tc, rc) : n(i, c, l, u, d, _, g, p, f, h, m, Xs, Qs, ec, nc, ic);
}
function Vs(e, t) {
	let n = 0, r = 0, i = X(e.bands, Ra);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function Hs(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function Us(e, t, n, r, i, a) {
	return Bs(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? Zs : Qs, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function Ws(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? $s : ec, c = n;
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
function Gs(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function Ks(e, t, n, r, i, a, o) {
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
function qs(e) {
	return e == 0 ? wa : e == 1 ? la : (t) => ja(t, e);
}
function Js(e) {
	let t = e == 0 ? Ys : Xs, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = da(c, o / 2, s / 2), l = da(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var Ys = (e, t, n) => {
	e.moveTo(t, n);
}, Xs = (e, t, n) => {
	e.moveTo(n, t);
}, Zs = (e, t, n) => {
	e.lineTo(t, n);
}, Qs = (e, t, n) => {
	e.lineTo(n, t);
}, $s = Js(0), ec = Js(1), tc = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, nc = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, rc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, ic = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function ac(e) {
	return (e, t, n, r, i) => Bs(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = Ys, v = tc) : (_ = Xs, v = nc);
		let y = Q(g.width * Y, 3), b = (g.size - g.width) / 2 * Y, x = Q(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		$s(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, oa * 2);
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
function oc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var sc = oc(Zs), cc = oc(Qs);
function lc(e) {
	let t = X(e?.alignGaps, 0);
	return (e, n, r, i) => Bs(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = Gi(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = Zs, b = sc) : (y = Qs, b = cc);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Rs
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
		let [T, E] = Vs(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...Ks(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = Ws(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [Us(e, n, r, i, C, -1), Us(e, n, r, i, C, 1)] : Us(e, n, r, i, C, E)), S;
	});
}
function uc(e) {
	let t = X(e.align, 1), n = X(e.ascDesc, !1), r = X(e.alignGaps, 0), i = X(e.extend, !1);
	return (e, a, o, s) => Bs(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = Gi(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? Zs : Qs, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Rs
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
		let [re, ie] = Vs(e, a);
		if (c.fill != null || re != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, re));
			w(t, ne, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...Ks(l, u, o, s, D, S, r));
			let f = c.width * Y / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = Ws(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [Us(e, a, o, s, E, -1), Us(e, a, o, s, E, 1)] : Us(e, a, o, s, E, ie)), T;
	});
}
function dc(e, t, n, r, i, a, o = ya) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = sa(e[c] - e[s]);
				t < l && (l = t, o = sa(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function fc(e) {
	e ||= La;
	let t = X(e.size, [
		.6,
		ya,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = Z(i), o = 1 - t[0], s = X(t[1], ya), c = X(t[2], 1), l = X(e.disp, La), u = X(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => Bs(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * Y, O = s * Y, ee = c * Y, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? $s : ec, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = X(e.bands, Ra).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), ce = T(b(se, v, w, S)), A, le, ue, j = C, M = T(m.width * Y), de = !1, fe = null, pe = null, me = null, he = null;
		d != null && (M == 0 || f != null) && (de = !0, fe = d.values(e, t, i, p), pe = /* @__PURE__ */ new Map(), new Set(fe).forEach((e) => {
			e != null && pe.set(e, new Path2D());
		}), M > 0 && (me = f.values(e, t, i, p), he = /* @__PURE__ */ new Map(), new Set(me).forEach((e) => {
			e != null && he.set(e, new Path2D());
		})));
		let { x0: ge, size: _e } = l;
		if (ge != null && _e != null) {
			E = 1, h = ge.values(e, t, i, p), ge.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = _e.values(e, t, i, p);
			le = _e.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), j = dc(h, g, y, _, C, x, j), ue = j - le + D;
		} else j = dc(h, g, y, _, C, x, j), ue = j * o + D, le = j - ue;
		ue < 1 && (ue = 0), M >= le / 2 && (M = 0), ue < 5 && (T = wa);
		let ve = ue > 0, ye = j - ue - (ve ? M : 0);
		le = T(xa(ye, ee, O)), A = (E == 0 ? le / 2 : E == ne ? 0 : le) - E * ne * ((E == 0 ? D / 2 : 0) + (ve ? M / 2 : 0));
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
		let P = te * le, Se = k * le;
		for (let n = ne == 1 ? i : p; n >= i && n <= p; n += ne) {
			let r = g[n];
			if (r == null) continue;
			if (xe != null) {
				let e = xe[n] ?? 0;
				if (r - e == 0) continue;
				ce = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(X(r, se), v, w, S), o = T(i - A), s = T(fa(a, ce)), c = T(da(a, ce)), u = s - c;
			if (r != null) {
				let i = r < 0 ? Se : P, a = r < 0 ? P : Se;
				de ? (M > 0 && me[n] != null && re(he.get(me[n]), o, c + ca(M / 2), le, fa(0, u - M), i, a), fe[n] != null && re(pe.get(fe[n]), o, c + ca(M / 2), le, fa(0, u - M), i, a)) : re(N, o, c + ca(M / 2), le, fa(0, u - M), i, a), ie(e, t, n, o - M / 2, c, le + M, u);
			}
		}
		return M > 0 ? be.stroke = de ? he : N : de || (be._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, be.width = 0), be.fill = de ? pe : N, be;
	});
}
function pc(e, t) {
	let n = X(t?.alignGaps, 0);
	return (t, r, i, a) => Bs(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = Gi(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = Ys, S = Zs, x = rc) : (b = Xs, S = Qs, x = ic);
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
			flags: Rs
		}, ee = O.stroke, [te, k] = Vs(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...Ks(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = Ws(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [Us(t, r, i, a, ee, -1), Us(t, r, i, a, ee, 1)] : Us(t, r, i, a, ee, k)), O;
	});
}
function mc(e) {
	return pc(hc, e);
}
function hc(e, t, n, r, i, a) {
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
var gc = /* @__PURE__ */ new Set();
function _c() {
	for (let e of gc) e.syncRect(!0);
}
bi && (zi(hi, Si, _c), zi(gi, Si, _c, !0), zi(vi, Si, () => {
	Nc.pxRatio = Y;
}));
var vc = lc(), yc = ac();
function bc(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Sc(e, r, t, n));
}
function xc(e, t) {
	return e.map((e, n) => n == 0 ? {} : Ya({}, t, e));
}
function Sc(e, t, n, r) {
	return Ya({}, t == 0 ? n : r, e);
}
function Cc(e, t, n) {
	return t == null ? za : [t, n];
}
var wc = Cc;
function Tc(e, t, n) {
	return t == null ? za : ea(t, n, Xi, !0);
}
function Ec(e, t, n, r) {
	return t == null ? za : Ji(t, n, e.scales[r].log, !1);
}
var Dc = Ec;
function Oc(e, t, n, r) {
	return t == null ? za : Yi(t, n, e.scales[r].log, !1);
}
var kc = Oc;
function Ac(e, t, n, r, i) {
	let a = fa(ba(e), ba(t)), o = t - e, s = Vi(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Pa.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function jc(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = la((n = +r) * Y)) + "px"), [
		e,
		t,
		n
	];
}
function Mc(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = Q(e[2] * Y, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Nc(e, t, n) {
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
	let l = r.root = Ai(Fr);
	if (e.id != null && (l.id = e.id), Ei(l, e.class), e.title) {
		let t = Ai(Rr, l);
		t.textContent = e.title;
	}
	let u = ki("canvas"), d = r.ctx = u.getContext("2d"), f = Ai(zr, l);
	zi("click", f, (e) => {
		e.target === m && (U != tn || on != nn) && cn.click(r, e);
	}, !0);
	let p = r.under = Ai(Br, f);
	f.appendChild(u);
	let m = r.over = Ai(Vr, f);
	e = Ja(e);
	let h = +X(e.pxAlign, 1), g = qs(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? bc(e.series || [], ps, Ms, !1) : xc(e.series || [null], js), y = r.axes = bc(e.axes || [], us, Es, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = Z(e.fill || null), e.dir = X(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: Vt,
		series: At
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => ha(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => va(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || La)[t] || La;
			if (r.from != null) {
				E(r.from);
				let e = Ya({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = Ya({}, t == S ? Ps : Fs, r), n.key = t;
				let e = n.time, a = n.range, o = Ba(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? Zi : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? Zi : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && Wa(a))) {
					let e = a;
					a = (t, n, r) => n == null ? za : ea(n, r, e);
				}
				n.range = Z(a || (e ? wc : t == S ? n.distr == 3 ? Dc : n.distr == 4 ? kc : Cc : n.distr == 3 ? Ec : n.distr == 4 ? Oc : Tc)), n.auto = Z(!o && n.auto), n.clamp = Z(n.clamp || Ns), n._min = n._max = null, n.valToPct = T(n);
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
	D.ori == 0 ? (Ei(l, Ir), ee = a, te = o) : (Ei(l, Lr), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let ne = e.tzDate || ((e) => new Date(la(e / _))), re = e.fmtDate || mo, ie = _ == 1 ? Po(ne) : Lo(ne), ae = zo(ne, Ro(_ == 1 ? No : Io, re)), oe = Wo(ne, Ho(Uo, re)), se = [], ce = r.legend = Ya({}, qo, e.legend), A = r.cursor = Ya({}, ns, { drag: { y: i == 2 } }, e.cursor), le = ce.show, ue = A.show, j = ce.markers;
	ce.idxs = se, j.width = Z(j.width), j.dash = Z(j.dash), j.stroke = Z(j.stroke), j.fill = Z(j.fill);
	let M, de, fe, pe = [], me = [], he, ge = !1, _e = {};
	if (ce.live) {
		let e = v[1] ? v[1].values : null;
		ge = e != null, he = ge ? e(r, 1, 0) : { _: 0 };
		for (let e in he) _e[e] = yi;
	}
	if (le) if (M = ki("table", Jr, l), fe = ki("tbody", null, M), ce.mount(r, M), ge) {
		de = ki("thead", null, M, fe);
		let e = ki("tr", null, de);
		for (var ve in ki("th", null, e), he) ki("th", $r, e).textContent = ve;
	} else Ei(M, Xr), ce.live && Ei(M, Yr);
	let ye = { show: !0 }, be = { show: !1 };
	function N(e, t) {
		if (t == 0 && (ge || !ce.live || i == 2)) return za;
		let n = [], a = ki("tr", Zr, fe, fe.childNodes[t]);
		Ei(a, e.class), e.show || Ei(a, Ur);
		let o = ki("th", null, a);
		if (j.show) {
			let e = Ai(Qr, o);
			if (t > 0) {
				let n = j.width(r, t);
				n && (e.style.border = n + "px " + j.dash(r, t) + " " + j.stroke(r, t)), e.style.background = j.fill(r, t);
			}
		}
		let s = Ai($r, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (j.show || (s.style.color = e.width > 0 ? j.stroke(r, t) : j.fill(r, t)), P("click", o, (t) => {
			if (A._lock) return;
			Ge(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != ce.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && mn(r, e ? r == n ? ye : be : ye, !0, Xn.setSeries);
				});
			} else mn(n, { show: !e.show }, !0, Xn.setSeries);
		}, !1), Je && P(fi, o, (t) => {
			A._lock || (Ge(t), mn(v.indexOf(e), Sn, !0, Xn.setSeries));
		}, !1)), he) {
			let e = ki("td", ei, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let xe = /* @__PURE__ */ new Map();
	function P(e, t, n, i = !0) {
		let a = xe.get(t) || {}, o = A.bind[e](r, t, n, i);
		o && (zi(e, t, a[e] = o), xe.set(t, a));
	}
	function Se(e, t, n) {
		let r = xe.get(t) || {};
		for (let n in r) (e == null || n == e) && (Bi(n, t, r[n]), delete r[n]);
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
		ke = n.left = ja(we * Y, .5), Ae = n.top = ja(Te * Y, .5), je = n.width = ja(I * Y, .5), Me = n.height = ja(L * Y, .5);
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
			let c = o, l = r(e, a, o, s) ?? ya, u = l >= 0 && l < ya, d = D.ori == 0 ? I : L, f = A.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && sa(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let Ge = (e) => {
		A.event = e;
	};
	A.idxs = se, A._lock = !1;
	let Ke = A.points;
	Ke.show = Z(Ke.show), Ke.size = Z(Ke.size), Ke.stroke = Z(Ke.stroke), Ke.width = Z(Ke.width), Ke.fill = Z(Ke.fill);
	let qe = r.focus = Ya({}, e.focus || { alpha: .3 }, A.focus), Je = qe.prox >= 0, Ye = Je && Ke.one, Xe = [], Ze = [], Qe = [];
	function $e(e, t) {
		let n = Ke.show(r, t);
		if (n instanceof HTMLElement) return Ei(n, qr), Ei(n, e.class), Mi(n, -10, -10, I, L), m.insertBefore(n, Xe[t]), n;
	}
	function et(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? Ua(n) ? Wo(ne, Ho(n, re)) : n || oe : n || Ts, e.label = e.label || (t ? fs : ds);
		}
		if (Ye || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || vc || Ea, e.fillTo = Z(e.fillTo || Hs), e.pxAlign = +X(e.pxAlign, h), e.pxRound = qs(e.pxAlign), e.stroke = Z(e.stroke || null), e.fill = Z(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Ds(fa(1, e.width), 1), n = e.points = Ya({}, {
				size: t,
				width: fa(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: yc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = Z(n.show), n.filter = Z(n.filter), n.fill = Z(n.fill), n.stroke = Z(n.stroke), n.paths = Z(n.paths), n.pxAlign = e.pxAlign;
		}
		if (le) {
			let n = N(e, t);
			pe.splice(t, 0, n[0]), me.splice(t, 0, n[1]), ce.values.push(null);
		}
		if (ue) {
			se.splice(t, 0, null);
			let n = null;
			Ye ? t == 0 && (n = $e(e, t)) : t > 0 && (n = $e(e, t)), Xe.splice(t, 0, n), Ze.splice(t, 0, 0), Qe.splice(t, 0, 0);
		}
		Jn("addSeries", t);
	}
	function tt(e, t) {
		t ??= v.length, e = i == 1 ? Sc(e, t, ps, Ms) : Sc(e, t, {}, js), v.splice(t, 0, e), et(v[t], t);
	}
	r.addSeries = tt;
	function nt(e) {
		if (v.splice(e, 1), le) {
			ce.values.splice(e, 1), me.splice(e, 1);
			let t = pe.splice(e, 1)[0];
			Se(null, t.firstChild), t.remove();
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
			e.size = Z(e.size), e.space = Z(e.space), e.rotate = Z(e.rotate), Ba(e.incrs) && e.incrs.forEach((e) => {
				!Pa.has(e) && Pa.set(e, Fa(e));
			}), e.incrs = Z(e.incrs || (i.distr == 2 ? xo : a ? _ == 1 ? Mo : Fo : So)), e.splits = Z(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? gs : i.distr == 4 ? _s : hs)), e.stroke = Z(e.stroke), e.grid.stroke = Z(e.grid.stroke), e.ticks.stroke = Z(e.ticks.stroke), e.border.stroke = Z(e.border.stroke);
			let o = e.values;
			e.values = Ba(o) && !Ba(o[0]) ? Z(o) : a ? Ba(o) ? zo(ne, Ro(o, re)) : Ua(o) ? Bo(ne, o) : o || ae : o || ms, e.filter = Z(e.filter || (i.distr >= 3 && i.log == 10 ? Cs : i.distr == 3 && i.log == 2 ? ws : Ta)), e.font = jc(e.font), e.labelFont = jc(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (rt[t] = !0, e._el = Ai(Hr, f));
		}
	}
	function at(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? la(us.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? la(Es.size / 2) : 0), l;
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
		if (Ht(!0), Jn("setData"), O == 2 && (Fe = !0), n !== !1) {
			let e = D;
			e.auto(r, dt) ? pt() : pn(S, e.min, e.max), Ie ||= A.left >= 0, Re = !0, H();
		}
	}
	r.setData = ft;
	function pt() {
		dt = !0;
		let e, n;
		i == 1 && (z > 0 ? (ct = lt[0] = 0, B = lt[1] = z - 1, e = t[0][ct], n = t[0][B], O == 2 ? (e = ct, n = B) : e == n && (O == 3 ? [e, n] = Ji(e, e, D.log, !1) : O == 4 ? [e, n] = Yi(e, e, D.log, !1) : D.time ? n = e + la(86400 / _) : [e, n] = ea(e, n, Xi, !0))) : (ct = lt[0] = e = null, B = lt[1] = n = null)), pn(S, e, n);
	}
	let mt, ht, gt, _t, vt, yt, bt, xt, St, Ct;
	function wt(e, t, n, r, i, a) {
		e ??= ci, n ??= Ra, r ??= "butt", i ??= ci, a ??= "round", e != mt && (d.strokeStyle = mt = e), i != ht && (d.fillStyle = ht = i), t != gt && (d.lineWidth = gt = t), a != vt && (d.lineJoin = vt = a), r != yt && (d.lineCap = yt = r), n != _t && d.setLineDash(_t = n);
	}
	function Tt(e, t, n, r) {
		t != ht && (d.fillStyle = ht = t), e != bt && (d.font = bt = e), n != xt && (d.textAlign = xt = n), r != St && (d.textBaseline = St = r);
	}
	function Et(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, dt) && (t == null || t.min == null)) {
			let t = X(ct, 0), r = X(B, i.length - 1), o = n.min == null ? qi(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = da(e.min, n.min = o[0]), e.max = fa(e.max, n.max = o[1]);
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
				let a = e[t] = Ja(b[t], Ga);
				if (n.min != null) Ya(a, n);
				else if (t != S || i == 2) if (z == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = ya, a.max = -Infinity;
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
						s.min = e[0], s.max = e[1], ct = Vi(s.min, t[0]), B = Vi(s.max, t[0]), B - ct > 1 && (t[0][ct] < s.min && ct++, t[0][B] > s.max && B--), n.min = ut[ct], n.max = ut[B];
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
					let e = n.range(r, n.min == ya ? null : n.min, n.max == -Infinity ? null : n.max, t);
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
				i._min = e == 3 ? ha(i.min) : e == 4 ? va(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? ha(i.max) : e == 4 ? va(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Fe = !0, Jn("setScale", e);
			ue && A.left >= 0 && (Ie = Re = !0);
		}
		for (let e in k) k[e] = null;
	}
	function kt(e) {
		let t = xa(ct - 1, 0, z - 1), n = xa(B + 1, 0, z - 1);
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
					Ct != n && (d.globalAlpha = Ct = n), Jn("drawSeries", t);
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
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || La).band;
				Ba(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && ta(g, ct, B) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, Pt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || Pt(n, i, a, o, s, c, l, u, d, f);
	}
	function Pt(e, t, n, r, i, a, o, s, c, l, u, f) {
		wt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), It(i, o), Ft(e, a, t)) : s & zs ? (It(i, o), d.clip(f), Ft(e, a, t)) : s & Rs && (d.save(), d.clip(f), u && d.clip(u), It(i, o), d.restore(), Ft(e, a, t)) : (It(i, o), Ft(e, a, t)), (c || l || f) && d.restore();
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
			o = Ac(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
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
			n._size = ua(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
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
				let s = t.labelGap * l, p = la((t._lpos + s) * Y);
				Tt(t.labelFont[0], c, "center", n == 2 ? ri : ii), d.save(), i == 1 ? (a = o = 0, d.translate(p, la(Ae + Me / 2)), d.rotate((n == 3 ? -oa : oa) / 2)) : (a = la(ke + je / 2), o = p);
				let m = Sa(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? je : Me, h = i == 0 ? ke : Ae, _ = t._splits, v = p.distr == 2 ? _.map((e) => ut[e]) : _, x = p.distr == 2 ? ut[_[1]] - ut[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = la(w * Y), E = la((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * Y), D = t._rotate * -oa / 180, O = g(t._pos * Y), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Tt(te, c, t.align == 1 ? ai : t.align == 2 ? oi : D > 0 ? ai : D < 0 ? oi : i == 0 ? "center" : n == 3 ? oi : ai, D || i == 1 ? "middle" : n == 2 ? ri : ii);
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
		Jn("drawAxes");
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
		for (let e = 0; e < Gt.length; e++) Jn(...Gt[e]);
		Gt.length = 0;
	}
	function H() {
		Ut ||= (to(qt), !0);
	}
	function Kt(e, t = !1) {
		Ut = !0, Wt = t, e(r), qt(), t && Gt.length > 0 && queueMicrotask(V);
	}
	r.batch = Kt;
	function qt() {
		if (Ne &&= (Ot(), !1), Fe &&= (Ve(), !1), Pe) {
			if (Oi(p, ai, we), Oi(p, ri, Te), Oi(p, ti, I), Oi(p, ni, L), Oi(m, ai, we), Oi(m, ri, Te), Oi(m, ti, I), Oi(m, ni, L), Oi(f, ti, Ce), Oi(f, ni, F), u.width = la(Ce * Y), u.height = la(F * Y), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					Oi(e, a ? "left" : "top", r - t), Oi(e, a ? "width" : "height", n), Oi(e, a ? "top" : "left", a ? Te : we), Oi(e, a ? "height" : "width", a ? L : I), Di(e, Ur);
				} else Ei(e, Ur);
			}), mt = ht = gt = vt = yt = bt = xt = St = _t = null, Ct = 1, Nn(!0), we != Ee || Te != De || I != R || L != Oe) {
				Ht(!1);
				let e = I / R, t = L / Oe;
				if (ue && !Ie && A.left >= 0) {
					A.left *= e, A.top *= t, Zt && Mi(Zt, la(A.left), 0, I, L), Qt && Mi(Qt, 0, la(A.top), I, L);
					for (let n = 0; n < Xe.length; n++) {
						let r = Xe[n];
						r != null && (Ze[n] *= e, Qe[n] *= t, Mi(r, ua(Ze[n]), ua(Qe[n]), I, L));
					}
				}
				if (G.show && !Le && G.left >= 0 && G.width > 0) {
					G.left *= e, G.width *= e, G.top *= t, G.height *= t;
					for (let e in In) Oi(un, e, G[e]);
				}
				Ee = we, De = Te, R = I, Oe = L;
			}
			Jn("setSize"), Pe = !1;
		}
		Ce > 0 && F > 0 && (d.clearRect(0, 0, u.width, u.height), Jn("drawClear"), w.forEach((e) => e()), Jn("draw")), G.show && Le && (dn(G), Le = !1), ue && Ie && (jn(null, !0, !1), Ie = !1), ce.show && ce.live && Re && (kn(), Re = !1), c || (c = !0, r.status = 1, Jn("ready")), dt = !1, Ut = !1;
	}
	r.redraw = (e, t) => {
		Fe = t || !1, e === !1 ? H() : pn(S, D.min, D.max);
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
			e == S && i.distr == 2 && z > 0 && (n.min = Vi(n.min, t[0]), n.max = Vi(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Ne = !0, H();
		}
	}
	r.setScale = Jt;
	let Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, U, on, sn = !1, cn = A.drag, ln = cn.x, W = cn.y;
	ue && (A.x && (Yt = Ai(Gr, m)), A.y && (Xt = Ai(Kr, m)), D.ori == 0 ? (Zt = Yt, Qt = Xt) : (Zt = Xt, Qt = Yt), U = A.left, on = A.top);
	let G = r.select = Ya({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), un = G.show ? Ai(Wr, G.over ? m : p) : null;
	function dn(e, t) {
		if (G.show) {
			for (let t in e) G[t] = e[t], t in In && Oi(un, t, e[t]);
			t !== !1 && Jn("setSelect");
		}
	}
	r.setSelect = dn;
	function fn(e) {
		if (v[e].show) le && Di(pe[e], Ur);
		else if (le && Ei(pe[e], Ur), ue) {
			let t = Ye ? Xe[0] : Xe[e];
			t != null && Mi(t, -10, -10, I, L);
		}
	}
	function pn(e, t, n) {
		Jt(e, {
			min: t,
			max: n
		});
	}
	function mn(e, t, n, a) {
		t.focus != null && Cn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, fn(r), i == 2 ? (pn(n.facets[0].scale, null, null), pn(n.facets[1].scale, null, null)) : pn(n.scale, null, null), H());
		}), n !== !1 && Jn("setSeries", e, t), a && $n("setSeries", r, e, t);
	}
	r.setSeries = mn;
	function hn(e, t) {
		Ya(x[e], t);
	}
	function gn(e, t) {
		e.fill = Z(e.fill || null), e.dir = X(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function _n(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = gn, r.setBand = hn, r.delBand = _n;
	function vn(e, t) {
		v[e].alpha = t, ue && Xe[e] != null && (Xe[e].style.opacity = t), le && pe[e] && (pe[e].style.opacity = t);
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
			}), xn = e, n && H();
		}
	}
	le && Je && P(pi, M, (e) => {
		A._lock || (Ge(e), xn != null && mn(null, Sn, !0, Xn.setSeries));
	});
	function K(e, t, n) {
		let r = b[t];
		n && (e = e / Y - (r.ori == 1 ? Te : we));
		let i = I;
		r.ori == 1 && (i = L, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? pa(10, c) : l == 4 ? _a(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function wn(e, n) {
		return Vi(K(e, S, n), t[0], ct, B);
	}
	r.valToIdx = (e) => Vi(e, t[0]), r.posToIdx = wn, r.posToVal = K, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? je : I, n ? ke : 0) : o(e, b[t], n ? Me : L, n ? Ae : 0), r.setCursor = (e, t, n) => {
		U = e.left, on = e.top, jn(null, t, n);
	};
	function Tn(e, t) {
		Oi(un, ai, G.left = e), Oi(un, ti, G.width = t);
	}
	function q(e, t) {
		Oi(un, ri, G.top = e), Oi(un, ni, G.height = t);
	}
	let En = D.ori == 0 ? Tn : q, Dn = D.ori == 1 ? Tn : q;
	function On() {
		if (le && ce.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && ge) continue;
			let t = ce.values[e], n = 0;
			for (let r in t) me[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function kn(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : Ha(e.idx) || se.fill(e.idx), ce.idx = se[0]), le && ce.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !ge) && An(e, se[e]);
			On();
		}
		Re = !1, t !== !1 && Jn("setLegend");
	}
	r.setLegend = kn;
	function An(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? ut : t[e], o;
		ge ? o = i.values(r, e, n) ?? _e : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? _e : { _: o }), ce.values[e] = o;
	}
	function jn(e, n, a) {
		rn = U, an = on, [U, on] = A.move(r, U, on), A.left = U, A.top = on, ue && (Zt && Mi(Zt, la(U), 0, I, L), Qt && Mi(Qt, 0, la(on), I, L));
		let o, s = ct > B;
		yn = ya, bn = null;
		let c = D.ori == 0 ? I : L, l = D.ori == 1 ? I : L;
		if (U < 0 || z == 0 || s) {
			o = A.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Xe[e];
				t != null && Mi(t, -10, -10, I, L);
			}
			Je && mn(null, Sn, !0, e == null && Xn.setSeries), ce.live && (se.fill(o), Re = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? U : on, n = K(e, S), o = A.idx = Vi(n, t[0], ct, B), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = A.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Re = Re || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (Je && S != null) {
						let t = D.ori == 1 ? U : on, n = sa(qe.dist(r, e, x, _, t));
						if (n < yn) {
							let r = qe.bias;
							if (r != 0) {
								let i = K(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (yn = n, bn = e);
							} else yn = n, bn = e;
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
						if (v = Ke.fill(r, e), g = Ke.stroke(r, e), Ye) e == bn && yn <= qe.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = Xe[e];
							t != null && (Ze[e] = c, Qe[e] = l, Ii(t, a, o, y), Pi(t, v, g), Mi(t, ua(c), ua(l), I, L));
						}
					}
				}
			}
			if (Ye) {
				let e = qe.prox;
				if (Re || (xn == null ? yn <= e : yn > e || bn != xn)) {
					let e = Xe[0];
					e != null && (Ze[0] = s, Qe[0] = u, Ii(e, d, f, p), Pi(e, m, h), Mi(e, ua(s), ua(u), I, L));
				}
			}
		}
		if (G.show && sn) if (e != null) {
			let [t, n] = Xn.scales, [r, i] = Xn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (ln = s._x, W = s._y, ln || W) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && ln ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), En(da(v, y), sa(y - v))) : En(0, c), S && W ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), Dn(da(v, y), sa(y - v))) : Dn(0, l);
			} else Ln();
		} else {
			let e = sa(rn - $t), t = sa(an - en);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			ln = cn.x && e >= cn.dist, W = cn.y && t >= cn.dist;
			let n = cn.uni;
			n == null ? cn.x && cn.y && (ln || W) && (ln = W = !0) : ln && W && (ln = e >= n, W = t >= n, !ln && !W && (t > e ? W = !0 : ln = !0));
			let r, i;
			ln && (D.ori == 0 ? (r = tn, i = U) : (r = nn, i = on), En(da(r, i), sa(i - r)), W || Dn(0, l)), W && (D.ori == 1 ? (r = tn, i = U) : (r = nn, i = on), Dn(da(r, i), sa(i - r)), ln || En(0, c)), !ln && !W && (En(0, 0), Dn(0, 0));
		}
		if (cn._x = ln, cn._y = W, e == null) {
			if (a) {
				if (Zn != null) {
					let [e, t] = Xn.scales;
					Xn.values[0] = e == null ? null : K(D.ori == 0 ? U : on, e), Xn.values[1] = t == null ? null : K(D.ori == 1 ? U : on, t);
				}
				$n(li, r, U, on, I, L, o);
			}
			if (Je) {
				let e = a && Xn.setSeries, t = qe.prox;
				xn == null ? yn <= t && mn(bn, Sn, !0, e) : yn > t ? mn(null, Sn, !0, e) : bn != xn && mn(bn, Sn, !0, e);
			}
		}
		Re && (ce.idx = o, kn()), n !== !1 && Jn("setCursor");
	}
	let Mn = null;
	Object.defineProperty(r, "rect", { get() {
		return Mn ?? Nn(!1), Mn;
	} });
	function Nn(e = !1) {
		e ? Mn = null : (Mn = m.getBoundingClientRect(), Jn("syncRect", Mn));
	}
	function Pn(e, t, n, r, i, a, o) {
		A._lock || sn && e != null && e.movementX == 0 && e.movementY == 0 || (Fn(e, t, n, r, i, a, o, !1, e != null), e == null ? jn(t, !0, !1) : jn(null, !0, !0));
	}
	function Fn(e, t, n, i, a, o, c, l, u) {
		if (Mn ?? Nn(!1), Ge(e), e != null) n = e.clientX - Mn.left, i = e.clientY - Mn.top;
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
		u && (t == null || t.cursor.event.type == li) && ((n <= 1 || n >= I - 1) && (n = ja(n, I)), (i <= 1 || i >= L - 1) && (i = ja(i, L))), l ? ($t = n, en = i, [tn, nn] = A.move(r, n, i)) : (U = n, on = i);
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
		sn = !0, ln = W = cn._x = cn._y = !1, Fn(e, t, n, i, a, o, s, !0, !1), e != null && (P(di, xi, Un, !1), $n(ui, r, tn, nn, I, L, null));
		let { left: c, top: l, width: u, height: d } = G;
		Rn = c, zn = l, Bn = u, Vn = d;
	}
	function Un(e, t, n, i, a, o, s) {
		sn = cn._x = cn._y = !1, Fn(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = G, f = u > 0 || d > 0, p = Rn != c || zn != l || Bn != u || Vn != d;
		if (f && p && dn(G), cn.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), ln && pn(S, K(e, S), K(e + t, S)), W) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != ya && pn(e, K(n + r, e), K(n, e));
			}
			Ln();
		} else A.lock && (A._lock = !A._lock, jn(t, !0, e != null));
		e != null && (Se(di, xi), $n(di, r, U, on, I, L, null));
	}
	function Wn(e, t, n, r, i, a, o) {
		if (A._lock) return;
		Ge(e);
		let s = sn;
		if (sn) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = ln, r = W) : (n = W, r = ln), n && r && (e = U <= 10 || U >= I - 10, t = on <= 10 || on >= L - 10), n && e && (U = U < tn ? 0 : I), r && t && (on = on < nn ? 0 : L), jn(null, !0, !0), sn = !1;
		}
		U = -10, on = -10, se.fill(null), jn(null, !0, !0), s && (sn = s);
	}
	function J(e, t, n, i, a, o, s) {
		A._lock || (Ge(e), pt(), Ln(), e != null && $n(mi, r, U, on, I, L, null));
	}
	function Gn() {
		y.forEach(Mc), ze(r.width, r.height, !0);
	}
	zi(vi, Si, Gn);
	let Kn = {};
	Kn.mousedown = Hn, Kn.mousemove = Pn, Kn.mouseup = Un, Kn.dblclick = J, Kn.setSeries = (e, t, n, i) => {
		let a = Xn.match[2];
		n = a(r, t, n), n != -1 && mn(n, i, !0, !1);
	}, ue && (P(ui, m, Hn), P(li, m, Pn), P(fi, m, (e) => {
		Ge(e), Nn(!1);
	}), P(pi, m, Wn), P(mi, m, J), gc.add(r), r.syncRect = Nn);
	let qn = r.hooks = e.hooks || {};
	function Jn(e, t, n) {
		Wt ? Gt.push([
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
	let Yn = (e, t, n) => n, Xn = Ya({
		key: null,
		setSeries: !1,
		filters: {
			pub: Da,
			sub: Da
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			Oa,
			Oa,
			Yn
		],
		values: [null, null]
	}, A.sync);
	Xn.match.length == 2 && Xn.match.push(Yn), A.sync = Xn;
	let Zn = Xn.key, Qn = Ls(Zn);
	function $n(e, t, n, r, i, a, o) {
		Xn.filters.pub(e, t, n, r, i, a, o) && Qn.pub(e, t, n, r, i, a, o);
	}
	Qn.sub(r);
	function er(e, t, n, r, i, a, o) {
		Xn.filters.sub(e, t, n, r, i, a, o) && Kn[e](null, t, n, r, i, a, o);
	}
	r.pub = er;
	function tr() {
		Qn.unsub(r), gc.delete(r), xe.clear(), Bi(vi, Si, Gn), l.remove(), M?.remove(), Jn("destroy");
	}
	r.destroy = tr;
	function nr() {
		Jn("init", e, t), ft(t || e.data, !1), k[S] ? Jt(S, k[S]) : pt(), Le = G.show && (G.width > 0 || G.height > 0), Ie = Re = !0, ze(e.width, e.height);
	}
	return v.forEach(et), y.forEach(it), n ? n instanceof HTMLElement ? (n.appendChild(l), nr()) : n(r, nr) : nr(), r;
}
Nc.assign = Ya, Nc.fmtNum = ia, Nc.rangeNum = ea, Nc.rangeLog = Ji, Nc.rangeAsinh = Yi, Nc.orient = Bs, Nc.pxRatio = Y, Nc.join = eo, Nc.fmtDate = mo, Nc.tzDate = go, Nc.sync = Ls;
{
	Nc.addGap = Gs, Nc.clipGaps = Ws;
	let e = Nc.paths = { points: ac };
	e.linear = lc, e.stepped = uc, e.bars = fc, e.spline = mc;
}
//#endregion
//#region src/App.svelte
var Pc = /* @__PURE__ */ ar("<div class=\"error\"> </div>"), Fc = /* @__PURE__ */ ar("<article><strong> </strong><small> </small><em> </em></article>"), Ic = /* @__PURE__ */ ar("<div class=\"attention-list\"></div>"), Lc = /* @__PURE__ */ ar("<p class=\"clear\">No active signals in this window.</p>"), Rc = /* @__PURE__ */ ar("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">Live gateway overview</p> <h2>Operational signals</h2></div> <span> </span></div> <!> <div class=\"metrics\"><article><span>Requests</span><strong> </strong><small> </small></article> <article><span>Latency p95</span><strong> </strong><small> </small></article> <article><span>Tokens</span><strong> </strong><small> </small></article> <article><span>Estimated cost</span><strong> </strong><small> </small></article></div> <div class=\"charts\"><article class=\"chart\"><h3>Latency p95</h3><div class=\"plot\"></div></article> <article class=\"chart\"><h3>Requests</h3><div class=\"plot\"></div></article></div> <div class=\"attention\"><div class=\"attention-heading\"><h3>Needs attention</h3><span> </span></div> <!></div></section>");
function zc(e, t) {
	ke(t, !1);
	let n = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), r = /* @__PURE__ */ jt("1h"), i = /* @__PURE__ */ jt({}), a = /* @__PURE__ */ jt({ alerts: [] }), o = [], s = /* @__PURE__ */ jt(!0), c = /* @__PURE__ */ jt(""), l = /* @__PURE__ */ jt(), u = /* @__PURE__ */ jt(), d, f, p, m = (e) => new Intl.NumberFormat().format(Number(e || 0)), h = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, g = (e) => `$${Number(e || 0).toFixed(4)}`, _ = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m";
	async function v(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function y() {
		let e = document.querySelector("#window-select")?.value || localStorage.getItem("apx.dashboard.window") || "1h";
		return n.has(e) ? e : "1h";
	}
	function b(e, t, n) {
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
	function x() {
		let e = o.map((e) => Number(e.ts || 0)), t = o.map((e) => Number(e.latency_p95_ms || 0)), n = o.map((e) => Number(e.requests || 0));
		!J(l) || !J(u) || (d?.destroy(), f?.destroy(), d = new Nc(b(J(l), "p95 latency (ms)", "#7aa2ff"), [e, t], J(l)), f = new Nc(b(J(u), "requests", "#31c48d"), [e, n], J(u)));
	}
	async function S() {
		Mt(s, !0), Mt(c, ""), Mt(r, y());
		try {
			let [e, t, n] = await Promise.all([
				v(`/api/metrics/summary?window=${J(r)}`),
				v(`/api/metrics/attention?window=${J(r)}`),
				v(`/api/metrics/timeseries?window=${J(r)}&bucket=${_(J(r))}`)
			]);
			Mt(i, e), Mt(a, t), o = n.series || [], await Wn(), x();
		} catch (e) {
			Mt(c, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			Mt(s, !1);
		}
	}
	hr(() => {
		document.body.classList.add("svelte-overview-active"), S();
		let e = document.querySelector("#window-select"), t = () => S();
		e?.addEventListener("change", t);
		let n = window.setInterval(S, 1e4);
		return p = new ResizeObserver(() => x()), J(l) && p.observe(J(l)), J(u) && p.observe(J(u)), () => {
			document.body.classList.remove("svelte-overview-active"), e?.removeEventListener("change", t), window.clearInterval(n), p?.disconnect(), d?.destroy(), f?.destroy();
		};
	}), Mr();
	var C = Rc(), w = V(C), T = H(V(w), 2);
	let E;
	var D = V(T, !0);
	F(T), F(w);
	var O = H(w, 2), ee = (e) => {
		var t = Pc(), n = V(t);
		F(t), cn(() => lr(n, `${J(c) ?? ""}. The legacy dashboard remains available below.`)), or(e, t);
	};
	_r(O, (e) => {
		J(c) && e(ee);
	});
	var te = H(O, 2), k = V(te), ne = H(V(k)), re = V(ne, !0);
	F(ne);
	var ie = H(ne), ae = V(ie);
	F(ie), F(k);
	var oe = H(k, 2), se = H(V(oe)), ce = V(se, !0);
	F(se);
	var A = H(se), le = V(A);
	F(A), F(oe);
	var ue = H(oe, 2), j = H(V(ue)), M = V(j, !0);
	F(j);
	var de = H(j), fe = V(de);
	F(de), F(ue);
	var pe = H(ue, 2), me = H(V(pe)), he = V(me, !0);
	F(me);
	var ge = H(me), _e = V(ge);
	F(ge), F(pe), F(te);
	var ve = H(te, 2), ye = V(ve);
	jr(H(V(ye)), (e) => Mt(l, e), () => J(l)), F(ye);
	var be = H(ye, 2);
	jr(H(V(be)), (e) => Mt(u, e), () => J(u)), F(be), F(ve);
	var N = H(ve, 2), xe = V(N), P = H(V(xe));
	let Se;
	var Ce = V(P);
	F(P), F(xe);
	var I = H(xe, 2), L = (e) => {
		var t = Ic();
		xr(t, 5, () => J(a).alerts.slice(0, 3), (e) => e.id, (e, t) => {
			var n = Fc();
			let r;
			var i = V(n), a = V(i, !0);
			F(i);
			var o = H(i), s = V(o, !0);
			F(o);
			var c = H(o), l = V(c);
			F(c), F(n), cn(() => {
				r = kr(n, 1, "signal", null, r, {
					critical: J(t).severity === "critical",
					warning: J(t).severity === "warning"
				}), lr(a, J(t).title), lr(s, J(t).detail), lr(l, `Next: ${J(t).action ?? ""}`);
			}), or(e, n);
		}), F(t), or(e, t);
	}, we = (e) => {
		or(e, Lc());
	};
	_r(I, (e) => {
		J(a).alerts?.length ? e(L) : e(we, -1);
	}), F(N), F(C), cn((e, t, n, i, o, l, u, d, f, p) => {
		E = kr(T, 1, "status", null, E, {
			ok: !J(s) && !J(c),
			warn: J(s),
			fail: !!J(c)
		}), lr(D, J(c) ? "refresh failed" : J(s) ? "refreshing" : `last ${J(r)}`), lr(re, e), lr(ae, `${t ?? ""} ok · ${n ?? ""} failed`), lr(ce, i), lr(le, `first byte ${o ?? ""}`), lr(M, l), lr(fe, `cache ${u ?? ""} read`), lr(he, d), lr(_e, `${f ?? ""} tool calls`), Se = kr(P, 1, "status", null, Se, p), lr(Ce, `${(J(a).alerts?.length || 0) ?? ""} signals`);
	}, [
		() => m(J(i).totals?.requests),
		() => m(J(i).totals?.ok),
		() => m(J(i).totals?.err_5xx),
		() => h(J(i).latency_ms?.p95),
		() => h(J(i).first_byte_ms?.p95),
		() => m((J(i).totals?.tokens_in || 0) + (J(i).totals?.tokens_out || 0)),
		() => m(J(i).totals?.cache_read_tokens),
		() => g(J(i).totals?.cost_est_usd),
		() => m(J(i).totals?.tool_calls),
		() => ({
			ok: !J(a).alerts?.length,
			warn: J(a).alerts?.some((e) => e.severity === "warning"),
			fail: J(a).alerts?.some((e) => e.severity === "critical")
		})
	]), or(e, C), Ae();
}
//#endregion
//#region src/main.js
var Bc = "svelte-uplot", Vc = document.querySelector("#svelte-overview");
Vc && ur(zc, { target: Vc });
//#endregion
export { zc as App, Bc as dashboardBuild };
