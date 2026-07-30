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
var b = 1024, x = 2048, S = 4096, C = 8192, w = 16384, T = 32768, E = 1 << 25, D = 65536, O = 1 << 19, ee = 1 << 20, te = 1 << 25, k = 65536, A = 1 << 21, ne = 1 << 22, re = 1 << 23, ie = Symbol("$state"), j = Symbol(""), ae = Symbol("attributes"), oe = Symbol("class"), M = Symbol("style"), se = Symbol("text"), ce = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), le = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function N(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ue() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function de(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function fe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function pe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function me(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function he() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ge() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _e() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ve() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ye() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function be() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function xe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Se() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var P = !1;
function Ce(e) {
	P = e;
}
var F;
function I(e) {
	if (e === null) throw xe(), n;
	return F = e;
}
function L() {
	return I(/* @__PURE__ */ qt(F));
}
function R(e) {
	if (P) {
		if (/* @__PURE__ */ qt(F) !== null) throw xe(), n;
		F = e;
	}
}
function we(e = 1) {
	if (P) {
		for (var t = e, n = F; t--;) n = /* @__PURE__ */ qt(n);
		F = n;
	}
}
function Te(e = !0) {
	for (var t = 0, n = F;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ qt(n);
		e && n.remove(), n = i;
	}
}
function Ee(e) {
	if (!e || e.nodeType !== 8) throw xe(), n;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function De(e) {
	return e === this.v;
}
function Oe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ke(e) {
	return !Oe(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var z = null;
function Ae(e) {
	z = e;
}
function je(t, n = !1, r) {
	z = {
		p: z,
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
function Me(e) {
	var t = z, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) on(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, z = t.p, e ?? {};
}
function Ne() {
	return !e || z !== null && z.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Pe = [];
function Fe() {
	var e = Pe;
	Pe = [], v(e);
}
function Ie(e) {
	if (Pe.length === 0 && !mt) {
		var t = Pe;
		queueMicrotask(() => {
			t === Pe && Fe();
		});
	}
	Pe.push(e);
}
function Le() {
	for (; Pe.length > 0;) Fe();
}
function Re(e) {
	var t = q;
	if (t === null) return K.f |= re, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ze(e, t);
}
function ze(e, t) {
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
var Be = ~(x | S | b);
function Ve(e, t) {
	e.f = e.f & Be | t;
}
function He(e) {
	e.f & 512 || e.deps === null ? Ve(e, b) : Ve(e, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ue(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= k, Ue(t.deps));
}
function We(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ue(e.deps), Ve(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ge(e) {
	var t = K, n = q;
	Mn(null), Nn(null);
	try {
		return e();
	} finally {
		Mn(t), Nn(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ke(e) {
	let t = 0, n = Nt(0), r;
	return () => {
		nn() && (J(n), fn(() => (t === 0 && (r = Y(() => e(() => Lt(n)))), t += 1, () => {
			Ie(() => {
				--t, t === 0 && (r?.(), r = void 0, Lt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var qe = D | O;
function Je(e, t, n, r) {
	new Ye(e, t, n, r);
}
var Ye = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = P ? F : null;
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
	#h = Ke(() => (this.#m = Nt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = mn(() => {
			if (P) {
				let e = this.#t;
				L();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, qe), P && (this.#e = F);
	}
	#g() {
		try {
			this.#a = hn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Ie(r), t && (this.#s = hn(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Se();
				return;
			}
			t = !0, n && ye(), this.#s !== null && Sn(this.#s, () => {
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
					ze(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = hn(() => e(this.#e)), Ie(() => {
			var e = this.#c = document.createDocumentFragment(), t = Gt();
			e.append(t), this.#a = this.#S(() => hn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Sn(this.#o, () => {
				this.#o = null;
			}), this.#x(B));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = hn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				En(this.#a, e);
				let t = this.#n.pending;
				this.#o = hn(() => t(this.#e));
			} else this.#x(B);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		We(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = q, n = K, r = z;
		Nn(this.#i), Mn(this.#i), Ae(this.#i.ctx);
		try {
			return bt.ensure(), e();
		} catch (e) {
			return Re(e), null;
		} finally {
			Nn(t), Mn(n), Ae(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Sn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ie(() => {
			this.#d = !1, this.#m && Ft(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), J(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		B?.is_fork ? (this.#a && B.skip_effect(this.#a), this.#o && B.skip_effect(this.#o), this.#s && B.skip_effect(this.#s), B.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (yn(this.#a), null), this.#o &&= (yn(this.#o), null), this.#s &&= (yn(this.#s), null), P && (I(this.#t), we(), I(Te()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return hn(() => {
						var r = q;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return ze(e, this.#i.parent), null;
				}
			}));
		};
		Ie(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				ze(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => ze(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Xe(e, t, n, r) {
	let i = Ne() ? et : it;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q, c = Ze(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				ze(e, s);
			}
			Qe();
		}
	}
	var d = $e();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ nt(e))).then(u).catch((e) => ze(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Qe();
	}) : f();
}
function Ze() {
	var e = q, t = K, n = z, r = B;
	return function(i = !0) {
		Nn(e), Mn(t), Ae(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Qe(e = !0) {
	Nn(null), Mn(null), Ae(null), e && B?.deactivate();
}
function $e() {
	var e = q, t = e.b, n = B, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function et(e) {
	var t = 2 | x;
	return q !== null && (q.f |= O), {
		ctx: z,
		deps: null,
		effects: null,
		equals: De,
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
var tt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function nt(e, t, n) {
	let i = q;
	i === null && ue();
	var a = void 0, o = Nt(r), s = !K, c = /* @__PURE__ */ new Set();
	return dn(() => {
		var t = q, n = y();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ce && n.reject(e);
			}).finally(Qe);
		} catch (e) {
			n.reject(e), Qe();
		}
		var r = B;
		if (s) {
			if (t.f & 32768) var l = $e();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(tt);
			else for (let e of c.values()) e.reject(tt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== tt && (r.activate(), t ? (o.f |= re, Ft(o, t)) : (o.f & 8388608 && (o.f ^= re), Ft(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), rn(() => {
		for (let e of c) e.reject(tt);
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
function rt(e) {
	let t = /* @__PURE__ */ et(e);
	return Fn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function it(e) {
	let t = /* @__PURE__ */ et(e);
	return t.equals = ke, t;
}
function at(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) yn(t[n]);
	}
}
function ot(e) {
	var t, n = q, i = e.parent;
	if (!kn && i !== null && e.v !== r && i.f & 24576) return be(), e.v;
	Nn(i);
	try {
		e.f &= ~k, at(e), t = qn(e);
	} finally {
		Nn(n);
	}
	return t;
}
function st(e) {
	var t = ot(e);
	if (!e.equals(t) && (e.wv = Wn(), (!B?.is_fork || e.deps === null) && (B === null ? e.v = t : (B.capture(e, t, !0), dt?.capture(e, t, !0)), e.deps === null))) {
		Ve(e, b);
		return;
	}
	kn || (ft === null ? He(e) : (nn() || B?.is_fork) && ft.set(e, t));
}
function ct(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ge(() => {
		t.ac.abort(ce), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Yn(t, 0), _n(t));
}
function lt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Xn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var ut = null, B = null, dt = null, ft = null, pt = null, mt = !1, ht = !1, gt = null, _t = null, vt = 0, yt = 1, bt = class e {
	id = yt++;
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
		ut === null ? ut = this : (ut.#n = this, this.#t = ut), ut = this;
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
			for (var r of n.d) Ve(r, x), t(r);
			for (r of n.m) Ve(r, S), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, vt++ > 1e3 && (this.#x(), St());
		for (let e of this.#u) this.#d.delete(e), Ve(e, x), this.schedule(e);
		for (let e of this.#d) Ve(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = gt = [], r = [], i = _t = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw kt(e), this.#h() || this.discard(), t;
		}
		if (B = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (gt = null, _t = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Ot(e, t);
			i.length > 0 && B.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), dt = this, wt(r), wt(n), dt = null, this.#s?.resolve();
		var s = B;
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
				a ? r.f ^= b : i & 4 ? t.push(r) : Gn(r) && (i & 16 && this.#d.add(r), Xn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Ve(i, x), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), B = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) We(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== r && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), ft?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		B = this;
	}
	deactivate() {
		B = null, ft = null;
	}
	flush() {
		try {
			ht = !0, B = this, this.#g();
		} finally {
			vt = 0, pt = null, gt = null, _t = null, ht = !1, B = null, ft = null, jt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(tt);
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
		this.#m || (this.#m = !0, Ie(() => {
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
		if (B === null) {
			let t = B = new e();
			!ht && !mt && Ie(() => {
				t.#e || t.flush();
			});
		}
		return B;
	}
	apply() {
		ft = null;
	}
	schedule(e) {
		if (pt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (gt !== null && t === q && (K === null || !(K.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? ut = e : t.#t = e, this.linked = !1;
		}
	}
};
function xt(e) {
	var t = mt;
	mt = !0;
	try {
		var n;
		for (e && (B !== null && !B.is_fork && B.flush(), n = e());;) {
			if (Le(), B === null) return n;
			B.flush();
		}
	} finally {
		mt = t;
	}
}
function St() {
	try {
		he();
	} catch (e) {
		ze(e, pt);
	}
}
var Ct = null;
function wt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Gn(r) && (Ct = /* @__PURE__ */ new Set(), Xn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && xn(r), Ct?.size > 0)) {
				jt.clear();
				for (let e of Ct) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Ct.has(n) && (Ct.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Xn(n);
					}
				}
				Ct.clear();
			}
		}
		Ct = null;
	}
}
function Tt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Tt(i, t, n, r) : e & 4194320 && !(e & 2048) && Et(i, t, r) && (Ve(i, x), Dt(i));
	}
}
function Et(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (s.call(t, r)) return !0;
		if (r.f & 2 && Et(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Dt(e) {
	B.schedule(e);
}
function Ot(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Ve(e, b);
		for (var n = e.first; n !== null;) Ot(n, t), n = n.next;
	}
}
function kt(e) {
	Ve(e, b);
	for (var t = e.first; t !== null;) kt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var At = /* @__PURE__ */ new Set(), jt = /* @__PURE__ */ new Map(), Mt = !1;
function Nt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: De,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Pt(e, t) {
	let n = Nt(e, t);
	return Fn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function V(t, n = !1, r = !0) {
	let i = Nt(t);
	return n || (i.equals = ke), e && r && z !== null && z.l !== null && (z.l.s ??= []).push(i), i;
}
function H(e, t, n = !1) {
	return K !== null && (!jn || K.f & 131072) && Ne() && K.f & 4325394 && (Pn === null || !Pn.has(e)) && ve(), Ft(e, n ? zt(t) : t, _t);
}
function Ft(e, t, n = null) {
	if (!e.equals(t)) {
		jt.set(e, kn ? t : e.v);
		var r = bt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && ot(t), ft === null && He(t);
		}
		e.wv = Wn(), Rt(e, x, n), Ne() && q !== null && q.f & 1024 && !(q.f & 96) && (Rn === null ? zn([e]) : Rn.push(e)), !r.is_fork && At.size > 0 && !Mt && It();
	}
	return t;
}
function It() {
	Mt = !1;
	for (let e of At) {
		e.f & 1024 && Ve(e, S);
		let t;
		try {
			t = Gn(e);
		} catch {
			t = !0;
		}
		t && Xn(e);
	}
	At.clear();
}
function Lt(e) {
	H(e, e.v + 1);
}
function Rt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ne(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && Ve(s, t), c & 131072) At.add(s);
			else if (c & 2) {
				var u = s;
				ft?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= k), Rt(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Ct !== null && Ct.add(d), n === null ? Dt(d) : n.push(d);
			}
		}
	}
}
function zt(e) {
	if (typeof e != "object" || !e || ie in e) return e;
	let t = m(e);
	if (t !== f && t !== p) return e;
	var n = /* @__PURE__ */ new Map(), i = a(e), o = /* @__PURE__ */ Pt(0), s = null, c = Hn, l = (e) => {
		if (Hn === c) return e();
		var t = K, n = Hn;
		Mn(null), Un(c);
		var r = e();
		return Mn(t), Un(n), r;
	};
	return i && n.set("length", /* @__PURE__ */ Pt(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && ge();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ Pt(r.value, s);
				return n.set(t, e), e;
			}) : H(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ Pt(r, s));
					n.set(t, e), Lt(o);
				}
			} else H(i, r), Lt(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ie) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || u(t, i)?.writable) && (o = l(() => /* @__PURE__ */ Pt(zt(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
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
			return (i !== void 0 || q !== null && (!a || u(e, t)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ Pt(a ? zt(e[t]) : r, s)), n.set(t, i)), J(i) === r) ? !1 : a;
		},
		set(e, t, a, c) {
			var d = n.get(t), f = t in e;
			if (i && t === "length") for (var p = a; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ Pt(r, s)), n.set(p + "", m)) : H(m, r);
			}
			if (d === void 0) (!f || u(e, t)?.writable) && (d = l(() => /* @__PURE__ */ Pt(void 0, s)), H(d, zt(a)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = l(() => zt(a));
				H(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, a), !f) {
				if (i && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && H(_, v + 1);
				}
				Lt(o);
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
			_e();
		}
	});
}
var Bt, Vt, Ht, Ut;
function Wt() {
	if (Bt === void 0) {
		Bt = window, Vt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Ht = u(t, "firstChild").get, Ut = u(t, "nextSibling").get, h(e) && (e[oe] = void 0, e[ae] = null, e[M] = void 0, e.__e = void 0), h(n) && (n[se] = void 0);
	}
}
function Gt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Kt(e) {
	return Ht.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function qt(e) {
	return Ut.call(e);
}
function U(e, t) {
	if (!P) return /* @__PURE__ */ Kt(e);
	var n = /* @__PURE__ */ Kt(F);
	if (n === null) n = F.appendChild(Gt());
	else if (t && n.nodeType !== 3) {
		var r = Gt();
		return n?.before(r), I(r), r;
	}
	return t && Qt(n), I(n), n;
}
function Jt(e, t = !1) {
	if (!P) {
		var n = /* @__PURE__ */ Kt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ qt(n) : n;
	}
	if (t) {
		if (F?.nodeType !== 3) {
			var r = Gt();
			return F?.before(r), I(r), r;
		}
		Qt(F);
	}
	return F;
}
function W(e, t = 1, n = !1) {
	let r = P ? F : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ qt(r);
	if (!P) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Gt();
			return r === null ? i?.after(a) : r.before(a), I(a), a;
		}
		Qt(r);
	}
	return I(r), r;
}
function Yt(e) {
	e.textContent = "";
}
function Xt() {
	return !1;
}
function Zt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Qt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function $t(e) {
	q === null && (K === null && me(e), pe()), kn && fe(e);
}
function en(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function tn(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= C);
	var r = {
		ctx: z,
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
	B?.register_created_effect(r);
	var i = r;
	if (e & 4) gt === null ? bt.ensure().schedule(r) : gt.push(r);
	else if (t !== null) {
		try {
			Xn(r);
		} catch (e) {
			throw yn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= D));
	}
	if (i !== null && (i.parent = n, n !== null && en(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function nn() {
	return K !== null && !jn;
}
function rn(e) {
	let t = tn(8, null);
	return Ve(t, b), t.teardown = e, t;
}
function an(e) {
	$t("$effect");
	var t = q.f;
	if (!K && t & 32 && z !== null && !z.i) {
		var n = z;
		(n.e ??= []).push(e);
	} else return on(e);
}
function on(e) {
	return tn(4 | ee, e);
}
function sn(e) {
	return $t("$effect.pre"), tn(8 | ee, e);
}
function cn(e) {
	bt.ensure();
	let t = tn(64 | O, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Sn(t, () => {
			yn(t), n(void 0);
		}) : (yn(t), n(void 0));
	});
}
function ln(e) {
	return tn(4, e);
}
function G(e, t) {
	var n = z, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = fn(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = q;
			try {
				Nn(n.parent), Y(t);
			} finally {
				Nn(n);
			}
		}
	});
}
function un() {
	var e = z;
	fn(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && Ve(n, S), Gn(n) && Xn(n), t.ran = !1;
		}
	});
}
function dn(e) {
	return tn(ne | O, e);
}
function fn(e, t = 0) {
	return tn(8 | t, e);
}
function pn(e, t = [], n = [], r = []) {
	Xe(r, t, n, (t) => {
		tn(8, () => {
			e(...t.map(J));
		});
	});
}
function mn(e, t = 0) {
	return tn(16 | t, e);
}
function hn(e) {
	return tn(32 | O, e);
}
function gn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = kn, n = K;
		An(!0), Mn(null);
		try {
			t.call(null);
		} finally {
			An(e), Mn(n);
		}
	}
}
function _n(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ge(() => {
			e.abort(ce);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : yn(n, t), n = r;
	}
}
function vn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || yn(t), t = n;
	}
}
function yn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (bn(e.nodes.start, e.nodes.end), n = !0), e.f |= E, _n(e, t && !n), Yn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	gn(e), e.f ^= E, e.f |= w;
	var i = e.parent;
	i !== null && i.first !== null && xn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function bn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ qt(e);
		e.remove(), e = n;
	}
}
function xn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Sn(e, t, n = !0) {
	var r = [];
	Cn(e, r, !0);
	var i = () => {
		n && yn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Cn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				Cn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function wn(e) {
	Tn(e, !0);
}
function Tn(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (Ve(e, x), bt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			Tn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function En(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ qt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Dn = null, On = !1, kn = !1;
function An(e) {
	kn = e;
}
var K = null, jn = !1;
function Mn(e) {
	K = e;
}
var q = null;
function Nn(e) {
	q = e;
}
var Pn = null;
function Fn(e) {
	K !== null && (Pn ??= /* @__PURE__ */ new Set()).add(e);
}
var In = null, Ln = 0, Rn = null;
function zn(e) {
	Rn = e;
}
var Bn = 1, Vn = 0, Hn = Vn;
function Un(e) {
	Hn = e;
}
function Wn() {
	return ++Bn;
}
function Gn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~k), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Gn(a) && st(a), a.wv > e.wv) return !0;
		}
		t & 512 && ft === null && Ve(e, b);
	}
	return !1;
}
function Kn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Pn !== null && Pn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Kn(a, t, !1) : t === a && (n ? Ve(a, x) : a.f & 1024 && Ve(a, S), Dt(a));
	}
}
function qn(e) {
	var t = In, n = Ln, r = Rn, i = K, a = Pn, o = z, s = jn, c = Hn, l = e.f;
	In = null, Ln = 0, Rn = null, K = l & 96 ? null : e, Pn = null, Ae(e.ctx), jn = !1, Hn = ++Vn, e.ac !== null && (Ge(() => {
		e.ac.abort(ce);
	}), e.ac = null);
	try {
		e.f |= A;
		var u = e.fn, d = u();
		e.f |= T;
		var f = e.deps, p = B?.is_fork;
		if (In !== null) {
			var m;
			if (p || Yn(e, Ln), f !== null && Ln > 0) for (f.length = Ln + In.length, m = 0; m < In.length; m++) f[Ln + m] = In[m];
			else e.deps = f = In;
			if (nn() && e.f & 512) for (m = Ln; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Ln < f.length && (Yn(e, Ln), f.length = Ln);
		if (Ne() && Rn !== null && !jn && f !== null && !(e.f & 6146)) for (m = 0; m < Rn.length; m++) Kn(Rn[m], e);
		if (i !== null && i !== e) {
			if (Vn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Vn;
			if (t !== null) for (let e of t) e.rv = Vn;
			Rn !== null && (r === null ? r = Rn : r.push(...Rn));
		}
		return e.f & 8388608 && (e.f ^= re), d;
	} catch (e) {
		return Re(e);
	} finally {
		e.f ^= A, In = t, Ln = n, Rn = r, K = i, Pn = a, Ae(o), jn = s, Hn = c;
	}
}
function Jn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = o.call(n, e);
		if (i !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[i] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (In === null || !s.call(In, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~k), c.v !== r && He(c), c.ac !== null && Ge(() => {
			c.ac.abort(ce), c.ac = null, Ve(c, x);
		}), ct(c), Yn(c, 0);
	}
}
function Yn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Jn(e, n[r]);
}
function Xn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Ve(e, b);
		var n = q, r = On;
		q = e, On = (t & 96) == 0;
		try {
			t & 16777232 ? vn(e) : _n(e), gn(e);
			var i = qn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Bn;
		} finally {
			On = r, q = n;
		}
	}
}
async function Zn() {
	await Promise.resolve(), xt();
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (Dn?.add(e), K !== null && !jn && !(q !== null && q.f & 16384) && (Pn === null || !Pn.has(e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Vn && (e.rv = Vn, In === null && n !== null && n[Ln] === e ? Ln++ : In === null ? In = [e] : In.push(e));
		else {
			K.deps ??= [], s.call(K.deps, e) || K.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : s.call(r, K) || r.push(K);
		}
	}
	if (kn && jt.has(e)) return jt.get(e);
	if (t) {
		var i = e;
		if (kn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || $n(i)) && (a = ot(i)), jt.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !jn && K !== null && (On || (K.f & 512) != 0), c = (i.f & T) === 0;
		Gn(i) && (o && (i.f |= 512), st(i)), o && !c && (lt(i), Qn(i));
	}
	if (ft?.has(e)) return ft.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Qn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (lt(t), Qn(t));
}
function $n(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (jt.has(t) || t.f & 2 && $n(t)) return !0;
	return !1;
}
function Y(e) {
	var t = jn;
	try {
		return jn = !0, e();
	} finally {
		jn = t;
	}
}
function er(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ie in e) tr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ie in n && tr(n);
		}
	}
}
function tr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			tr(e[n], t);
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
var nr = Symbol("events"), rr = /* @__PURE__ */ new Set(), ir = /* @__PURE__ */ new Set();
function ar(e, t, n) {
	(t[nr] ??= {})[e] = n;
}
function or(e) {
	for (var t = 0; t < e.length; t++) rr.add(e[t]);
	for (var n of ir) n(e);
}
var sr = null;
function cr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	sr = e;
	var o = 0, s = sr === e && e[nr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[nr] = t;
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
		var d = K, f = q;
		Mn(null), Nn(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[nr]?.[r];
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
			e[nr] = t, delete e.currentTarget, Mn(d), Nn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var lr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ur(e) {
	return lr?.createHTML(e) ?? e;
}
function dr(e) {
	var t = Zt("template");
	return t.innerHTML = ur(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function fr(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function pr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (P) return fr(F, null), F;
		i === void 0 && (i = dr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Kt(i)));
		var t = r || Vt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Kt(t), s = t.lastChild;
			fr(o, s);
		} else fr(t, t);
		return t;
	};
}
function mr(e, t) {
	if (P) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = F), L();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var hr = ["touchstart", "touchmove"];
function gr(e) {
	return hr.includes(e);
}
function X(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[se] ??= e.nodeValue) && (e[se] = n, e.nodeValue = `${n}`);
}
function _r(e, t) {
	return yr(e, t);
}
var vr = /* @__PURE__ */ new Map();
function yr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	Wt();
	var u = void 0, d = cn(() => {
		var s = r ?? t.appendChild(Gt());
		Je(s, { pending: () => {} }, (t) => {
			je({});
			var r = z;
			if (o && (r.c = o), a && (i.$$events = a), P && fr(t, null), u = e(t, i) || {}, P && (q.nodes.end = F, F === null || F.nodeType !== 8 || F.data !== "]")) throw xe(), n;
			Me();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = gr(r);
					for (let e of [t, document]) {
						var a = vr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), vr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, cr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(rr)), ir.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = vr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, cr), n.delete(e), n.size === 0 && vr.delete(r)) : n.set(e, i);
			}
			ir.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return br.set(u, d), u;
}
var br = /* @__PURE__ */ new WeakMap(), xr = class {
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
			if (n) wn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (wn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (yn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						En(r, t), t.append(Gt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else yn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Sn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (yn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = B, r = Xt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Gt();
			i.append(a), this.#n.set(e, {
				effect: hn(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, hn(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else P && (this.anchor = F), this.#a(n);
	}
};
function Sr(t) {
	z === null && N("onMount"), e && z.l !== null ? Cr(z).m.push(t) : an(() => {
		let e = Y(t);
		if (typeof e == "function") return e;
	});
}
function Cr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function wr(e, t, n = !1) {
	var r;
	P && (r = F, L());
	var i = new xr(e), a = n ? D : 0;
	function o(e, t) {
		if (P) {
			var n = Ee(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Te();
				I(a), i.anchor = a, Ce(!1), i.ensure(e, t), Ce(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	mn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Tr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Sn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Er(e, c(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Yt(d), d.append(u), e.items.clear();
		}
		Er(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Er(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= te, En(a, document.createDocumentFragment())) : yn(t[i], n);
	}
}
var Dr;
function Or(e, t, n, r, i, o = null) {
	var s = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = P ? I(/* @__PURE__ */ Kt(u)) : u.appendChild(Gt());
	}
	P && L();
	var d = null, f = /* @__PURE__ */ it(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Ar(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= te, Mr(d, null, s)) : wn(d) : Sn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: mn(() => {
			p = J(f);
			var e = p.length;
			let a = !1;
			P && Ee(s) === "[!" != (e === 0) && (s = Te(), I(s), Ce(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = B, v = Xt(), y = 0; y < e; y += 1) {
				P && F.nodeType === 8 && F.data === "]" && (s = F, a = !0, Ce(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Ft(S.v, b), S.i && Ft(S.i, y), v && u.unskip_effect(S.e)) : (S = jr(l, h ? s : Dr ??= Gt(), b, x, y, i, t, n), h || (S.e.f |= te), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = hn(() => o(s)) : (d = hn(() => o(Dr ??= Gt())), d.f |= te)), e > c.size && de("", "", ""), P && e > 0 && I(Te()), !h) if (m.set(u, c), v) {
				for (let [e, t] of l) c.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			a && Ce(!0), J(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, P && (s = F);
}
function kr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Ar(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, l = kr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (wn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= te, _ === l) Mr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Nr(e, d, _), Nr(e, _, y), Mr(_, y, n), d = _, p = [], m = [], l = kr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Mr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Nr(e, S.prev, C.next), Nr(e, d, S), Nr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Mr(_, l, n), Nr(e, _.prev, _.next), Nr(e, _, d === null ? e.effect.first : d.next), Nr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = kr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = kr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Er(e, c(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = kr(l.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Tr(e, w, E);
		}
	}
	a && Ie(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function jr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Nt(n) : /* @__PURE__ */ V(n, !1, !1) : null, l = o & 2 ? Nt(i) : null;
	return {
		v: c,
		i: l,
		e: hn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Mr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ qt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Nr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Pr = [..." 	\n\r\f\xA0\v﻿"];
function Fr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Pr.includes(r[o - 1])) && (s === r.length || Pr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Ir(e, t, n, r, i, a) {
	var o = e[oe];
	if (P || o !== n || o === void 0) {
		var s = Fr(n, r, a);
		(!P || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Lr = Symbol("is custom element"), Rr = Symbol("is html"), zr = le ? "link" : "LINK";
function Br(e, t, n, r) {
	var i = Vr(e);
	P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === zr) || i[t] !== (i[t] = n) && (t === "loading" && (e[j] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vr(e) {
	return e[ae] ??= {
		[Lr]: e.nodeName.includes("-"),
		[Rr]: e.namespaceURI === i
	};
}
var Hr = /* @__PURE__ */ new Map();
function Ur(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Hr.get(t);
	if (n) return n;
	Hr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = d(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = m(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Wr(e, t) {
	return e === t || e?.[ie] === t;
}
function Gr(e = {}, t, n, r) {
	var i = z.r, a = q;
	return ln(() => {
		var o, s;
		return fn(() => {
			o = s, s = r?.() || [], Y(() => {
				Wr(n(...s), e) || (t(e, ...s), o && Wr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Wr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Kr(e = !1) {
	let t = z, n = t.l.u;
	if (!n) return;
	let r = () => er(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ et(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && sn(() => {
		qr(t, r), v(n.b);
	}), an(() => {
		let e = Y(() => n.m.map(_));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && an(() => {
		qr(t, r), v(n.a);
	});
}
function qr(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
var Jr = !0, Yr = "uplot", Xr = "u-hz", Zr = "u-vt", Qr = "u-title", $r = "u-wrap", ei = "u-under", ti = "u-over", ni = "u-axis", ri = "u-off", ii = "u-select", ai = "u-cursor-x", oi = "u-cursor-y", si = "u-cursor-pt", ci = "u-legend", li = "u-live", ui = "u-inline", di = "u-series", fi = "u-marker", pi = "u-label", mi = "u-value", hi = "width", gi = "height", _i = "top", vi = "bottom", yi = "left", bi = "right", xi = "#000", Si = "#0000", Ci = "mousemove", wi = "mousedown", Ti = "mouseup", Ei = "mouseenter", Di = "mouseleave", Oi = "dblclick", ki = "resize", Ai = "scroll", ji = "change", Mi = "dppxchange", Ni = "--", Pi = typeof window < "u", Fi = Pi ? document : null, Ii = Pi ? window : null, Li = Pi ? navigator : null, Z, Ri;
function zi() {
	let e = devicePixelRatio;
	Z != e && (Z = e, Ri && ea(ji, Ri, zi), Ri = matchMedia(`(min-resolution: ${Z - .001}dppx) and (max-resolution: ${Z + .001}dppx)`), $i(ji, Ri, zi), Ii.dispatchEvent(new CustomEvent(Mi)));
}
function Bi(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Vi(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function Hi(e, t, n) {
	e.style[t] = n + "px";
}
function Ui(e, t, n, r) {
	let i = Fi.createElement(e);
	return t != null && Bi(i, t), n?.insertBefore(i, r), i;
}
function Wi(e, t) {
	return Ui("div", e, t);
}
var Gi = /* @__PURE__ */ new WeakMap();
function Ki(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != Gi.get(e) && (e.style.transform = a, Gi.set(e, a), t < 0 || n < 0 || t > r || n > i ? Bi(e, ri) : Vi(e, ri));
}
var qi = /* @__PURE__ */ new WeakMap();
function Ji(e, t, n) {
	let r = t + n;
	r != qi.get(e) && (qi.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var Yi = /* @__PURE__ */ new WeakMap();
function Xi(e, t, n, r) {
	let i = t + "" + n;
	i != Yi.get(e) && (Yi.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var Zi = { passive: !0 }, Qi = {
	...Zi,
	capture: !0
};
function $i(e, t, n, r) {
	t.addEventListener(e, n, r ? Qi : Zi);
}
function ea(e, t, n, r) {
	t.removeEventListener(e, n, Zi);
}
Pi && zi();
function ta(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : Sa((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function na(e) {
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
var ra = (e) => e != null, ia = (e) => e != null && e > 0, aa = na(ra), oa = na(ia);
function sa(e, t, n, r = 0, i = !1) {
	let a = i ? oa : aa, o = i ? ia : ra;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) if (r == 1) s = e[t], c = e[n];
	else if (r == -1) s = e[n], c = e[t];
	else for (let r = t; r <= n; r++) {
		let t = e[r];
		o(t) && (t < s ? s = t : t > c && (c = t));
	}
	return [s ?? Na, c ?? -Na];
}
function ca(e, t, n, r) {
	let i = Oa(e), a = Oa(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? ka : Aa, s = i == 1 ? Sa : wa, c = a == 1 ? wa : Sa, l = s(o(xa(e))), u = c(o(xa(t))), d = Da(n, l), f = Da(n, u);
	return n == 10 && (l < 0 && (d = Ja(d, -l)), u < 0 && (f = Ja(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = qa(e, d), t = Ka(t, f)), [e, t];
}
function la(e, t, n, r) {
	let i = ca(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var ua = .1, da = {
	mode: 3,
	pad: ua
}, fa = {
	pad: 0,
	soft: null,
	mode: 0
}, pa = {
	min: fa,
	max: fa
};
function ma(e, t, n, r) {
	return ao(n) ? ga(e, t, n) : (fa.pad = n, fa.soft = r ? 0 : null, fa.mode = r ? 3 : 0, ga(e, t, pa));
}
function Q(e, t) {
	return e ?? t;
}
function ha(e, t, n) {
	for (t = Q(t, 0), n = Q(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function ga(e, t, n) {
	let r = n.min, i = n.max, a = Q(r.pad, 0), o = Q(i.pad, 0), s = Q(r.hard, -Na), c = Q(i.hard, Na), l = Q(r.soft, Na), u = Q(i.soft, -Na), d = Q(r.mode, 0), f = Q(i.mode, 0), p = t - e, m = ka(p), h = Ea(xa(e), xa(t)), g = xa(ka(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != Na && (a = 0), f == 2 && u != -Na && (o = 0)));
	let _ = p || h || 1e3, v = Da(10, Sa(ka(_))), y = Ja(qa(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : Na, x = Ea(s, y < b && e >= b ? b : Ta(b, y)), S = Ja(Ka(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -Na, w = Ta(c, S > C && t <= C ? C : Ea(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var _a = new Intl.NumberFormat(Pi ? Li.language : "en-US"), va = (e) => _a.format(e), ya = Math, ba = ya.PI, xa = ya.abs, Sa = ya.floor, Ca = ya.round, wa = ya.ceil, Ta = ya.min, Ea = ya.max, Da = ya.pow, Oa = ya.sign, ka = ya.log10, Aa = ya.log2, ja = (e, t = 1) => ya.sinh(e) * t, Ma = (e, t = 1) => ya.asinh(e / t), Na = Infinity;
function Pa(e) {
	return (ka((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function Fa(e, t, n) {
	return Ta(Ea(e, t), n);
}
function Ia(e) {
	return typeof e == "function";
}
function $(e) {
	return Ia(e) ? e : () => e;
}
var La = () => {}, Ra = (e) => e, za = (e, t) => t, Ba = (e) => null, Va = (e) => !0, Ha = (e, t) => e == t, Ua = /\.\d*?(?=9{6,}|0{6,})/gm, Wa = (e) => {
	if (no(e) || Ya.has(e)) return e;
	let t = `${e}`, n = t.match(Ua);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Wa(e)}e${n}`;
	}
	return Ja(e, r);
};
function Ga(e, t) {
	return Wa(Ja(Wa(e / t)) * t);
}
function Ka(e, t) {
	return Wa(wa(Wa(e / t)) * t);
}
function qa(e, t) {
	return Wa(Sa(Wa(e / t)) * t);
}
function Ja(e, t = 0) {
	if (no(e)) return e;
	let n = 10 ** t;
	return Ca(e * n * (1 + 2 ** -52)) / n;
}
var Ya = /* @__PURE__ */ new Map();
function Xa(e) {
	return (("" + e).split(".")[1] || "").length;
}
function Za(e, t, n, r) {
	let i = [], a = r.map(Xa);
	for (let o = t; o < n; o++) {
		let t = xa(o), n = Ja(Da(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : Ja(c, l);
			i.push(u), Ya.set(u, l);
		}
	}
	return i;
}
var Qa = {}, $a = [], eo = [null, null], to = Array.isArray, no = Number.isInteger, ro = (e) => e === void 0;
function io(e) {
	return typeof e == "string";
}
function ao(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function oo(e) {
	return typeof e == "object" && !!e;
}
var so = Object.getPrototypeOf(Uint8Array), co = "__proto__";
function lo(e, t = ao) {
	let n;
	if (to(e)) {
		let r = e.find((e) => e != null);
		if (to(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = lo(e[r], t);
		} else n = e.slice();
	} else if (e instanceof so) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != co && (n[r] = lo(e[r], t));
	} else n = e;
	return n;
}
function uo(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != co && (ao(e[t]) ? uo(e[t], lo(r[t])) : e[t] = lo(r[t]));
	}
	return e;
}
var fo = 0, po = 1, mo = 2;
function ho(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function go(e, t) {
	if (yo(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return bo(t[0]) || (t = vo(t)), t;
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
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : po, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != fo && (l[n] = t, u == mo && d.push(n)) : l[n] = t;
			}
			ho(l, d, i), r.push(l);
		}
	}
	return r;
}
var _o = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function vo(e) {
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
function yo(e) {
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
function bo(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = Ea(1, Sa((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var xo = [
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
], So = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function Co(e) {
	return e.slice(0, 3);
}
var wo = So.map(Co), To = {
	MMMM: xo,
	MMM: xo.map(Co),
	WWWW: So,
	WWW: wo
};
function Eo(e) {
	return (e < 10 ? "0" : "") + e;
}
function Do(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var Oo = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => Eo(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => Eo(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => Eo(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => Eo(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => Eo(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => Do(e.getMilliseconds())
};
function ko(e, t) {
	t ||= To;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? Oo[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var Ao = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function jo(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == Ao ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var Mo = (e) => e % 1 == 0, No = [
	1,
	2,
	2.5,
	5
], Po = Za(10, -32, 0, No), Fo = Za(10, 0, 32, No), Io = Fo.filter(Mo), Lo = Po.concat(Fo), Ro = "{YYYY}", zo = "\n{YYYY}", Bo = "{M}/{D}", Vo = "\n{M}/{D}", Ho = "\n{M}/{D}/{YY}", Uo = "{h}:{mm}{aa}", Wo = "\n{h}:{mm}{aa}", Go = ":{ss}", Ko = null;
function qo(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? Za(10, 0, 3, No).filter(Mo) : Za(10, -3, 0, No)).concat([
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
			Ro,
			Ko,
			Ko,
			Ko,
			Ko,
			Ko,
			Ko,
			1
		],
		[
			i * 28,
			"{MMM}",
			zo,
			Ko,
			Ko,
			Ko,
			Ko,
			Ko,
			1
		],
		[
			i,
			Bo,
			zo,
			Ko,
			Ko,
			Ko,
			Ko,
			Ko,
			1
		],
		[
			r,
			"{h}{aa}",
			Ho,
			Ko,
			Vo,
			Ko,
			Ko,
			Ko,
			1
		],
		[
			n,
			Uo,
			Ho,
			Ko,
			Vo,
			Ko,
			Ko,
			Ko,
			1
		],
		[
			t,
			Go,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			Ko,
			"\n{M}/{D} {h}:{mm}{aa}",
			Ko,
			Wo,
			Ko,
			1
		],
		[
			e,
			":{ss}.{fff}",
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			Ko,
			"\n{M}/{D} {h}:{mm}{aa}",
			Ko,
			Wo,
			Ko,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = Ja(g * e, 3), v = rs(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = Ja(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : Ja(rs(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(Ca(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = rs(c + r * a, l + n * a, 1), s = o - t(Ja(o * e, 3));
					i = Ja((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (Sa(l) - Sa(_)) + Ka(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = Ja(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = Sa(Ja(h + g, 6)) % 24, n = t(o).getHours() - e;
					n > 1 && (n = -1), o -= n * r, h = (h + g) % 24;
					let i = p[p.length - 1];
					Ja((o - i) / d, 3) * v >= .7 && p.push(o);
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
var [Jo, Yo, Xo] = qo(1), [Zo, Qo, $o] = qo(.001);
Za(2, -53, 53, [1]);
function es(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function ts(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function ns(e, t) {
	let n = ko(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function rs(e, t, n) {
	return new Date(e, t, n);
}
function is(e, t) {
	return t(e);
}
var as = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function os(e, t) {
	return (n, r, i, a) => a == null ? Ni : t(e(r));
}
function ss(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function cs(e, t) {
	return e.series[t].fill(e, t);
}
var ls = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: La,
	markers: {
		show: !0,
		width: 2,
		stroke: ss,
		fill: cs,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function us(e, t) {
	let n = e.cursor.points, r = Wi(), i = n.size(e, t);
	Hi(r, hi, i), Hi(r, gi, i);
	let a = i / -2;
	Hi(r, "marginLeft", a), Hi(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Hi(r, "borderWidth", o), r;
}
function ds(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function fs(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function ps(e, t) {
	return e.series[t].points.size;
}
var ms = [0, 0];
function hs(e, t, n) {
	return ms[0] = t, ms[1] = n, ms;
}
function gs(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function _s(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var vs = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: hs,
	points: {
		one: !1,
		show: us,
		size: ps,
		width: 0,
		stroke: fs,
		fill: ds
	},
	bind: {
		mousedown: gs,
		mouseup: gs,
		click: gs,
		dblclick: gs,
		mousemove: _s,
		mouseleave: _s,
		mouseenter: _s
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
}, ys = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, bs = uo({}, ys, { filter: za }), xs = uo({}, bs, { size: 10 }), Ss = uo({}, ys, { show: !1 }), Cs = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ws = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", Ts = 1.5, Es = {
	show: !0,
	scale: "x",
	stroke: xi,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: ws,
	side: 2,
	grid: bs,
	ticks: xs,
	border: Ss,
	font: Cs,
	lineGap: Ts,
	rotate: 0
}, Ds = "Value", Os = "Time", ks = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: Na,
	max: -Infinity,
	idxs: []
};
function As(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : va(e));
}
function js(e, t, n, r, i, a, o) {
	let s = [], c = Ya.get(i) || 0;
	n = o ? n : Ja(Ka(n, i), c);
	for (let e = n; e <= r; e = Ja(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function Ms(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = Da(c, Sa((c == 10 ? ka : Aa)(n))), c == 10 && (i = Lo[ta(i, Lo)]);
	let l = n, u = i * c;
	c == 10 && (u = Lo[ta(u, Lo)]);
	do
		s.push(l), l += i, c == 10 && !Ya.has(l) && (l = Ja(l, Ya.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = Lo[ta(u, Lo)]));
	while (l <= r);
	return s;
}
function Ns(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? Ms(e, t, Ea(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? Ms(e, t, Ea(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Ps = /./, Fs = /[12357]/, Is = /[125]/, Ls = /1/, Rs = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function zs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Ps : c(7, o) - u >= l ? Fs : c(5, o) - u >= l ? Is : Ls;
	if (d == Ls) {
		let e = xa(c(1, o) - u);
		if (e < l) return Rs(t.slice().reverse(), s.distr, d, wa(l / e)).reverse();
	}
	return Rs(t, s.distr, d, 1);
}
function Bs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = xa(c(1, o) - c(2, o));
	return l < s ? Rs(t.slice().reverse(), 3, Ps, wa(s / l)).reverse() : t;
}
function Vs(e, t, n, r) {
	return r == null ? Ni : t == null ? "" : va(t);
}
var Hs = {
	show: !0,
	scale: "y",
	stroke: xi,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: ws,
	side: 3,
	grid: bs,
	ticks: xs,
	border: Ss,
	font: Cs,
	lineGap: Ts,
	rotate: 0
};
function Us(e, t) {
	return Ja((3 + (e || 1) * 2) * t, 3);
}
function Ws(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = xa(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * Z);
	return r[1] - r[0] <= o;
}
var Gs = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: Na,
	max: -Infinity
}, Ks = (e, t, n, r, i) => i, qs = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Ks,
	alpha: 1,
	facets: [uo({}, Gs, { scale: "x" }), uo({}, Gs, { scale: "y" })]
}, Js = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Ks,
	alpha: 1,
	points: {
		show: Ws,
		filter: null
	},
	values: null,
	min: Na,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Ys(e, t, n, r, i) {
	return n / 10;
}
var Xs = {
	time: Jr,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, Zs = uo({}, Xs, {
	time: !1,
	ori: 1
}), Qs = {};
function $s(e, t) {
	let n = Qs[e];
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
	}, e != null && (Qs[e] = n)), n;
}
var ec = 1, tc = 2;
function nc(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, dc, pc, hc, _c, yc) : n(i, c, l, u, d, _, g, p, f, h, m, fc, mc, gc, vc, bc);
}
function rc(e, t) {
	let n = 0, r = 0, i = Q(e.bands, $a);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function ic(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function ac(e, t, n, r, i, a) {
	return nc(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? pc : mc, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function oc(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? hc : gc, c = n;
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
function sc(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function cc(e, t, n, r, i, a, o) {
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
function lc(e) {
	return e == 0 ? Ra : e == 1 ? Ca : (t) => Ga(t, e);
}
function uc(e) {
	let t = e == 0 ? dc : fc, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = Ta(c, o / 2, s / 2), l = Ta(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var dc = (e, t, n) => {
	e.moveTo(t, n);
}, fc = (e, t, n) => {
	e.moveTo(n, t);
}, pc = (e, t, n) => {
	e.lineTo(t, n);
}, mc = (e, t, n) => {
	e.lineTo(n, t);
}, hc = uc(0), gc = uc(1), _c = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, vc = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, yc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, bc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function xc(e) {
	return (e, t, n, r, i) => nc(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = dc, v = _c) : (_ = fc, v = vc);
		let y = Ja(g.width * Z, 3), b = (g.size - g.width) / 2 * Z, x = Ja(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		hc(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, ba * 2);
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
function Sc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var Cc = Sc(pc), wc = Sc(mc);
function Tc(e) {
	let t = Q(e?.alignGaps, 0);
	return (e, n, r, i) => nc(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = aa(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = pc, b = Cc) : (y = mc, b = wc);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: ec
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
		let [T, E] = rc(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...cc(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = oc(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [ac(e, n, r, i, C, -1), ac(e, n, r, i, C, 1)] : ac(e, n, r, i, C, E)), S;
	});
}
function Ec(e) {
	let t = Q(e.align, 1), n = Q(e.ascDesc, !1), r = Q(e.alignGaps, 0), i = Q(e.extend, !1);
	return (e, a, o, s) => nc(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = aa(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? pc : mc, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: ec
		}, E = T.stroke, D = d.dir * (d.ori == 0 ? 1 : -1), O = C(u[D == 1 ? o : s]), ee = S(l[D == 1 ? o : s]), te = ee, k = ee;
		i && t == -1 && (k = b, w(E, k, O)), w(E, ee, O);
		for (let e = D == 1 ? o : s; e >= o && e <= s; e += D) {
			let n = u[e];
			if (n == null) continue;
			let r = S(l[e]), i = C(n);
			t == 1 ? w(E, r, O) : w(E, te, i), w(E, r, i), O = i, te = r;
		}
		let A = te;
		i && t == 1 && (A = b + x, w(E, A, O));
		let [ne, re] = rc(e, a);
		if (c.fill != null || ne != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, ne));
			w(t, A, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...cc(l, u, o, s, D, S, r));
			let f = c.width * Z / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = oc(i, d.ori, h, g, _, v);
		}
		return re != 0 && (T.band = re == 2 ? [ac(e, a, o, s, E, -1), ac(e, a, o, s, E, 1)] : ac(e, a, o, s, E, re)), T;
	});
}
function Dc(e, t, n, r, i, a, o = Na) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = xa(e[c] - e[s]);
				t < l && (l = t, o = xa(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function Oc(e) {
	e ||= Qa;
	let t = Q(e.size, [
		.6,
		Na,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = $(i), o = 1 - t[0], s = Q(t[1], Na), c = Q(t[2], 1), l = Q(e.disp, Qa), u = Q(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => nc(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * Z, O = s * Z, ee = c * Z, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let A = _.dir * (_.ori == 0 ? 1 : -1), ne = _.ori == 0 ? hc : gc, re = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ie = Q(e.bands, $a).find((e) => e.series[0] == t), j = ie == null ? 0 : ie.dir, ae = m.fillTo(e, t, m.min, m.max, j), oe = T(b(ae, v, w, S)), M, se, ce, le = C, N = T(m.width * Z), ue = !1, de = null, fe = null, pe = null, me = null;
		d != null && (N == 0 || f != null) && (ue = !0, de = d.values(e, t, i, p), fe = /* @__PURE__ */ new Map(), new Set(de).forEach((e) => {
			e != null && fe.set(e, new Path2D());
		}), N > 0 && (pe = f.values(e, t, i, p), me = /* @__PURE__ */ new Map(), new Set(pe).forEach((e) => {
			e != null && me.set(e, new Path2D());
		})));
		let { x0: he, size: ge } = l;
		if (he != null && ge != null) {
			E = 1, h = he.values(e, t, i, p), he.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = ge.values(e, t, i, p);
			se = ge.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), le = Dc(h, g, y, _, C, x, le), ce = le - se + D;
		} else le = Dc(h, g, y, _, C, x, le), ce = le * o + D, se = le - ce;
		ce < 1 && (ce = 0), N >= se / 2 && (N = 0), ce < 5 && (T = Ra);
		let _e = ce > 0, ve = le - ce - (_e ? N : 0);
		se = T(Fa(ve, ee, O)), M = (E == 0 ? se / 2 : E == A ? 0 : se) - E * A * ((E == 0 ? D / 2 : 0) + (_e ? N / 2 : 0));
		let ye = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, be = ue ? null : new Path2D(), xe = null;
		if (ie != null) xe = e.data[ie.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), xe = n.values(e, t, i, p));
		}
		let Se = te * se, P = k * se;
		for (let n = A == 1 ? i : p; n >= i && n <= p; n += A) {
			let r = g[n];
			if (r == null) continue;
			if (xe != null) {
				let e = xe[n] ?? 0;
				if (r - e == 0) continue;
				oe = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(Q(r, ae), v, w, S), o = T(i - M), s = T(Ea(a, oe)), c = T(Ta(a, oe)), u = s - c;
			if (r != null) {
				let i = r < 0 ? P : Se, a = r < 0 ? Se : P;
				ue ? (N > 0 && pe[n] != null && ne(me.get(pe[n]), o, c + Sa(N / 2), se, Ea(0, u - N), i, a), de[n] != null && ne(fe.get(de[n]), o, c + Sa(N / 2), se, Ea(0, u - N), i, a)) : ne(be, o, c + Sa(N / 2), se, Ea(0, u - N), i, a), re(e, t, n, o - N / 2, c, se + N, u);
			}
		}
		return N > 0 ? ye.stroke = ue ? me : be : ue || (ye._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, ye.width = 0), ye.fill = ue ? fe : be, ye;
	});
}
function kc(e, t) {
	let n = Q(t?.alignGaps, 0);
	return (t, r, i, a) => nc(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = aa(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = dc, S = pc, x = yc) : (b = fc, S = mc, x = bc);
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
			flags: ec
		}, ee = O.stroke, [te, k] = rc(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...cc(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = oc(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [ac(t, r, i, a, ee, -1), ac(t, r, i, a, ee, 1)] : ac(t, r, i, a, ee, k)), O;
	});
}
function Ac(e) {
	return kc(jc, e);
}
function jc(e, t, n, r, i, a) {
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
var Mc = /* @__PURE__ */ new Set();
function Nc() {
	for (let e of Mc) e.syncRect(!0);
}
Pi && ($i(ki, Ii, Nc), $i(Ai, Ii, Nc, !0), $i(Mi, Ii, () => {
	Yc.pxRatio = Z;
}));
var Pc = Tc(), Fc = xc();
function Ic(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Rc(e, r, t, n));
}
function Lc(e, t) {
	return e.map((e, n) => n == 0 ? {} : uo({}, t, e));
}
function Rc(e, t, n, r) {
	return uo({}, t == 0 ? n : r, e);
}
function zc(e, t, n) {
	return t == null ? eo : [t, n];
}
var Bc = zc;
function Vc(e, t, n) {
	return t == null ? eo : ma(t, n, ua, !0);
}
function Hc(e, t, n, r) {
	return t == null ? eo : ca(t, n, e.scales[r].log, !1);
}
var Uc = Hc;
function Wc(e, t, n, r) {
	return t == null ? eo : la(t, n, e.scales[r].log, !1);
}
var Gc = Wc;
function Kc(e, t, n, r, i) {
	let a = Ea(Pa(e), Pa(t)), o = t - e, s = ta(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Ya.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function qc(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = Ca((n = +r) * Z)) + "px"), [
		e,
		t,
		n
	];
}
function Jc(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = Ja(e[2] * Z, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Yc(e, t, n) {
	let r = { mode: Q(e.mode, 1) }, i = r.mode;
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
	let l = r.root = Wi(Yr);
	if (e.id != null && (l.id = e.id), Bi(l, e.class), e.title) {
		let t = Wi(Qr, l);
		t.textContent = e.title;
	}
	let u = Ui("canvas"), d = r.ctx = u.getContext("2d"), f = Wi($r, l);
	$i("click", f, (e) => {
		e.target === m && (rn != $t || an != en) && sn.click(r, e);
	}, !0);
	let p = r.under = Wi(ei, f);
	f.appendChild(u);
	let m = r.over = Wi(ti, f);
	e = lo(e);
	let h = +Q(e.pxAlign, 1), g = lc(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Ic(e.series || [], ks, Js, !1) : Lc(e.series || [null], qs), y = r.axes = Ic(e.axes || [], Es, Hs, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = $(e.fill || null), e.dir = Q(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: zt,
		series: At
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => ka(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => Ma(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || Qa)[t] || Qa;
			if (r.from != null) {
				E(r.from);
				let e = uo({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = uo({}, t == S ? Xs : Zs, r), n.key = t;
				let e = n.time, a = n.range, o = to(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? da : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? da : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && ao(a))) {
					let e = a;
					a = (t, n, r) => n == null ? eo : ma(n, r, e);
				}
				n.range = $(a || (e ? Bc : t == S ? n.distr == 3 ? Uc : n.distr == 4 ? Gc : zc : n.distr == 3 ? Hc : n.distr == 4 ? Wc : Vc)), n.auto = $(!o && n.auto), n.clamp = $(n.clamp || Ys), n._min = n._max = null, n.valToPct = T(n);
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
	D.ori == 0 ? (Bi(l, Xr), ee = a, te = o) : (Bi(l, Zr), ee = o, te = a);
	let k = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (k[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let A = e.tzDate || ((e) => new Date(Ca(e / _))), ne = e.fmtDate || ko, re = _ == 1 ? Xo(A) : $o(A), ie = ts(A, es(_ == 1 ? Yo : Qo, ne)), j = os(A, is(as, ne)), ae = [], oe = r.legend = uo({}, ls, e.legend), M = r.cursor = uo({}, vs, { drag: { y: i == 2 } }, e.cursor), se = oe.show, ce = M.show, le = oe.markers;
	oe.idxs = ae, le.width = $(le.width), le.dash = $(le.dash), le.stroke = $(le.stroke), le.fill = $(le.fill);
	let N, ue, de, fe = [], pe = [], me, he = !1, ge = {};
	if (oe.live) {
		let e = v[1] ? v[1].values : null;
		he = e != null, me = he ? e(r, 1, 0) : { _: 0 };
		for (let e in me) ge[e] = Ni;
	}
	if (se) if (N = Ui("table", ci, l), de = Ui("tbody", null, N), oe.mount(r, N), he) {
		ue = Ui("thead", null, N, de);
		let e = Ui("tr", null, ue);
		for (var _e in Ui("th", null, e), me) Ui("th", pi, e).textContent = _e;
	} else Bi(N, ui), oe.live && Bi(N, li);
	let ve = { show: !0 }, ye = { show: !1 };
	function be(e, t) {
		if (t == 0 && (he || !oe.live || i == 2)) return eo;
		let n = [], a = Ui("tr", di, de, de.childNodes[t]);
		Bi(a, e.class), e.show || Bi(a, ri);
		let o = Ui("th", null, a);
		if (le.show) {
			let e = Wi(fi, o);
			if (t > 0) {
				let n = le.width(r, t);
				n && (e.style.border = n + "px " + le.dash(r, t) + " " + le.stroke(r, t)), e.style.background = le.fill(r, t);
			}
		}
		let s = Wi(pi, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (le.show || (s.style.color = e.width > 0 ? le.stroke(r, t) : le.fill(r, t)), Se("click", o, (t) => {
			if (M._lock) return;
			We(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != oe.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && mn(r, e ? r == n ? ve : ye : ve, !0, Zn.setSeries);
				});
			} else mn(n, { show: !e.show }, !0, Zn.setSeries);
		}, !1), qe && Se(Ei, o, (t) => {
			M._lock || (We(t), mn(v.indexOf(e), Sn, !0, Zn.setSeries));
		}, !1)), me) {
			let e = Ui("td", mi, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let xe = /* @__PURE__ */ new Map();
	function Se(e, t, n, i = !0) {
		let a = xe.get(t) || {}, o = M.bind[e](r, t, n, i);
		o && ($i(e, t, a[e] = o), xe.set(t, a));
	}
	function P(e, t, n) {
		let r = xe.get(t) || {};
		for (let n in r) (e == null || n == e) && (ea(n, t, r[n]), delete r[n]);
		e ?? xe.delete(t);
	}
	let Ce = 0, F = 0, I = 0, L = 0, R = 0, we = 0, Te = R, Ee = we, De = I, Oe = L, ke = 0, z = 0, Ae = 0, je = 0;
	r.bbox = {};
	let Me = !1, Ne = !1, Pe = !1, Fe = !1, Ie = !1, Le = !1;
	function Re(e, t, n) {
		(n || e != r.width || t != r.height) && ze(e, t), Bt(!1), Pe = !0, Ne = !0, Gt();
	}
	function ze(e, t) {
		r.width = Ce = I = e, r.height = F = L = t, R = we = 0, He(), Ue();
		let n = r.bbox;
		ke = n.left = Ga(R * Z, .5), z = n.top = Ga(we * Z, .5), Ae = n.width = Ga(I * Z, .5), je = n.height = Ga(L * Z, .5);
	}
	function Be() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = Lt(t), i = Rt(t);
			e = t == 3 || n && i, e || (ze(r.width, r.height), Ne = !0);
		}
	}
	function Ve({ width: e, height: t }) {
		Re(e, t);
	}
	r.setSize = Ve;
	function He() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (I -= c, a == 3 ? (R += c, r = !0) : n = !0) : (L -= c, a == 0 ? (we += c, e = !0) : t = !0));
			}
		}), nt[0] = e, nt[1] = n, nt[2] = t, nt[3] = r, I -= ot[1] + ot[3], R += ot[3], L -= ot[2] + ot[0], we += ot[0];
	}
	function Ue() {
		let e = R + I, t = we + L, n = R, r = we;
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
	if (M.dataIdx == null) {
		let e = M.hover, n = e.skip = new Set(e.skip ?? []);
		n.add(void 0);
		let r = e.prox = $(e.prox), i = e.bias ??= 0;
		M.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? Na, u = l >= 0 && l < Na, d = D.ori == 0 ? I : L, f = M.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) if (u) {
					let n = e == null ? -Infinity : ee(p[e], D, d, 0), r = t == null ? Infinity : ee(p[t], D, d, 0), i = f - n, a = r - f;
					i <= a ? i <= l && (c = e) : a <= l && (c = t);
				} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
			} else u && xa(f - ee(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let We = (e) => {
		M.event = e;
	};
	M.idxs = ae, M._lock = !1;
	let Ge = M.points;
	Ge.show = $(Ge.show), Ge.size = $(Ge.size), Ge.stroke = $(Ge.stroke), Ge.width = $(Ge.width), Ge.fill = $(Ge.fill);
	let Ke = r.focus = uo({}, e.focus || { alpha: .3 }, M.focus), qe = Ke.prox >= 0, Je = qe && Ge.one, Ye = [], Xe = [], Ze = [];
	function Qe(e, t) {
		let n = Ge.show(r, t);
		if (n instanceof HTMLElement) return Bi(n, si), Bi(n, e.class), Ki(n, -10, -10, I, L), m.insertBefore(n, Ye[t]), n;
	}
	function $e(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? io(n) ? os(A, is(n, ne)) : n || j : n || Vs, e.label = e.label || (t ? Os : Ds);
		}
		if (Je || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Pc || Ba, e.fillTo = $(e.fillTo || ic), e.pxAlign = +Q(e.pxAlign, h), e.pxRound = lc(e.pxAlign), e.stroke = $(e.stroke || null), e.fill = $(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Us(Ea(1, e.width), 1), n = e.points = uo({}, {
				size: t,
				width: Ea(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: Fc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = $(n.show), n.filter = $(n.filter), n.fill = $(n.fill), n.stroke = $(n.stroke), n.paths = $(n.paths), n.pxAlign = e.pxAlign;
		}
		if (se) {
			let n = be(e, t);
			fe.splice(t, 0, n[0]), pe.splice(t, 0, n[1]), oe.values.push(null);
		}
		if (ce) {
			ae.splice(t, 0, null);
			let n = null;
			Je ? t == 0 && (n = Qe(e, t)) : t > 0 && (n = Qe(e, t)), Ye.splice(t, 0, n), Xe.splice(t, 0, 0), Ze.splice(t, 0, 0);
		}
		Yn("addSeries", t);
	}
	function et(e, t) {
		t ??= v.length, e = i == 1 ? Rc(e, t, ks, Js) : Rc(e, t, {}, qs), v.splice(t, 0, e), $e(v[t], t);
	}
	r.addSeries = et;
	function tt(e) {
		if (v.splice(e, 1), se) {
			oe.values.splice(e, 1), pe.splice(e, 1);
			let t = fe.splice(e, 1)[0];
			P(null, t.firstChild), t.remove();
		}
		ce && (ae.splice(e, 1), Ye.splice(e, 1)[0].remove(), Xe.splice(e, 1), Ze.splice(e, 1)), Yn("delSeries", e);
	}
	r.delSeries = tt;
	let nt = [
		!1,
		!1,
		!1,
		!1
	];
	function rt(e, t) {
		if (e._show = e.show, e.show) {
			let n = e.side % 2, i = b[e.scale];
			i ??= (e.scale = n ? v[1].scale : S, b[e.scale]);
			let a = i.time;
			e.size = $(e.size), e.space = $(e.space), e.rotate = $(e.rotate), to(e.incrs) && e.incrs.forEach((e) => {
				!Ya.has(e) && Ya.set(e, Xa(e));
			}), e.incrs = $(e.incrs || (i.distr == 2 ? Io : a ? _ == 1 ? Jo : Zo : Lo)), e.splits = $(e.splits || (a && i.distr == 1 ? re : i.distr == 3 ? Ms : i.distr == 4 ? Ns : js)), e.stroke = $(e.stroke), e.grid.stroke = $(e.grid.stroke), e.ticks.stroke = $(e.ticks.stroke), e.border.stroke = $(e.border.stroke);
			let o = e.values;
			e.values = to(o) && !to(o[0]) ? $(o) : a ? to(o) ? ts(A, es(o, ne)) : io(o) ? ns(A, o) : o || ie : o || As, e.filter = $(e.filter || (i.distr >= 3 && i.log == 10 ? zs : i.distr == 3 && i.log == 2 ? Bs : za)), e.font = qc(e.font), e.labelFont = qc(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (nt[t] = !0, e._el = Wi(ni, f));
		}
	}
	function it(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? Ca(Es.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? Ca(Hs.size / 2) : 0), l;
	}
	let at = r.padding = (e.padding || [
		it,
		it,
		it,
		it
	]).map((e) => $(Q(e, it))), ot = r._padding = at.map((e, t) => e(r, t, nt, 0)), st, ct = null, lt = null, ut = i == 1 ? v[0].idxs : null, B = null, dt = !1;
	function ft(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			st = 0;
			for (let e = 1; e < v.length; e++) st += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), B = t[0], st = B.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(st);
				for (let e = 0; e < st; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (Bt(!0), Yn("setData"), O == 2 && (Pe = !0), n !== !1) {
			let e = D;
			e.auto(r, dt) ? pt() : pn(S, e.min, e.max), Fe ||= M.left >= 0, Le = !0, Gt();
		}
	}
	r.setData = ft;
	function pt() {
		dt = !0;
		let e, n;
		i == 1 && (st > 0 ? (ct = ut[0] = 0, lt = ut[1] = st - 1, e = t[0][ct], n = t[0][lt], O == 2 ? (e = ct, n = lt) : e == n && (O == 3 ? [e, n] = ca(e, e, D.log, !1) : O == 4 ? [e, n] = la(e, e, D.log, !1) : D.time ? n = e + Ca(86400 / _) : [e, n] = ma(e, n, ua, !0))) : (ct = ut[0] = e = null, lt = ut[1] = n = null)), pn(S, e, n);
	}
	let mt, ht, gt, _t, vt, yt, bt, xt, St, Ct;
	function wt(e, t, n, r, i, a) {
		e ??= Si, n ??= $a, r ??= "butt", i ??= Si, a ??= "round", e != mt && (d.strokeStyle = mt = e), i != ht && (d.fillStyle = ht = i), t != gt && (d.lineWidth = gt = t), a != vt && (d.lineJoin = vt = a), r != yt && (d.lineCap = yt = r), n != _t && d.setLineDash(_t = n);
	}
	function Tt(e, t, n, r) {
		t != ht && (d.fillStyle = ht = t), e != bt && (d.font = bt = e), n != xt && (d.textAlign = xt = n), r != St && (d.textBaseline = St = r);
	}
	function Et(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, dt) && (t == null || t.min == null)) {
			let t = Q(ct, 0), r = Q(lt, i.length - 1), o = n.min == null ? sa(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = Ta(e.min, n.min = o[0]), e.max = Ea(e.max, n.max = o[1]);
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
		k[S] != null && Bt(!0);
		let e = {};
		for (let t in k) {
			let n = k[t];
			if (n != null) {
				let a = e[t] = lo(b[t], oo);
				if (n.min != null) uo(a, n);
				else if (t != S || i == 2) if (st == 0 && a.from == null) {
					let e = a.range(r, null, null, t);
					a.min = e[0], a.max = e[1];
				} else a.min = Na, a.max = -Infinity;
			}
		}
		if (st > 0) {
			v.forEach((n, a) => {
				if (i == 1) {
					let i = n.scale, o = k[i];
					if (o == null) return;
					let s = e[i];
					if (a == 0) {
						let e = s.range(r, s.min, s.max, i);
						s.min = e[0], s.max = e[1], ct = ta(s.min, t[0]), lt = ta(s.max, t[0]), lt - ct > 1 && (t[0][ct] < s.min && ct++, t[0][lt] > s.max && lt--), n.min = B[ct], n.max = B[lt];
					} else n.show && n.auto && Et(s, o, n, t[a], n.sorted);
					n.idxs[0] = ct, n.idxs[1] = lt;
				} else if (a > 0 && n.show && n.auto) {
					let [r, i] = n.facets, o = r.scale, s = i.scale, [c, l] = t[a], u = e[o], d = e[s];
					u != null && Et(u, k[o], r, c, r.sorted), d != null && Et(d, k[s], i, l, i.sorted), n.min = i.min, n.max = i.max;
				}
			});
			for (let t in e) {
				let n = e[t], i = k[t];
				if (n.from == null && (i == null || i.min == null)) {
					let e = n.range(r, n.min == Na ? null : n.min, n.max == -Infinity ? null : n.max, t);
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
				i._min = e == 3 ? ka(i.min) : e == 4 ? Ma(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? ka(i.max) : e == 4 ? Ma(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Pe = !0, Yn("setScale", e);
			ce && M.left >= 0 && (Fe = Le = !0);
		}
		for (let e in k) k[e] = null;
	}
	function kt(e) {
		let t = Fa(ct - 1, 0, st - 1), n = Fa(lt + 1, 0, st - 1);
		for (; e[t] == null && t > 0;) t--;
		for (; e[n] == null && n < st - 1;) n++;
		return [t, n];
	}
	function At() {
		if (st > 0) {
			let e = v.some((e) => e._focus) && Ct != Ke.alpha;
			e && (d.globalAlpha = Ct = Ke.alpha), v.forEach((e, n) => {
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
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, ct, lt, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, ct, lt, a), Mt(t, !0));
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
		l = Ja(l * Z, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = ke - l / 2, t = z - l / 2, n = Ae + l, r = je + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? Pt(s, l, n.dash, n.cap, c, r, i, o, a) : Nt(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function Nt(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || Qa).band;
				to(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && ha(g, ct, lt) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, Pt(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || Pt(n, i, a, o, s, c, l, u, d, f);
	}
	function Pt(e, t, n, r, i, a, o, s, c, l, u, f) {
		wt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), H(i, o), V(e, a, t)) : s & tc ? (H(i, o), d.clip(f), V(e, a, t)) : s & ec && (d.save(), d.clip(f), u && d.clip(u), H(i, o), d.restore(), V(e, a, t)) : (H(i, o), V(e, a, t)), (c || l || f) && d.restore();
	}
	function V(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = mt = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function H(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = ht = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function Ft(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Kc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function It(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), wt(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function Lt(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, Bt(!1));
				return;
			} else n._show || (t = !1, n._show = !0, Bt(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = Ft(i, c, l, s == 0 ? I : L);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => B[e]) : p, h = a.distr == 2 ? B[p[1]] - B[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = wa(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function Rt(e) {
		let t = !0;
		return at.forEach((n, i) => {
			let a = n(r, i, nt, e);
			a != ot[i] && (t = !1), ot[i] = a;
		}), t;
	}
	function zt() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = Ca((t._lpos + s) * Z);
				Tt(t.labelFont[0], c, "center", n == 2 ? _i : vi), d.save(), i == 1 ? (a = o = 0, d.translate(p, Ca(z + je / 2)), d.rotate((n == 3 ? -ba : ba) / 2)) : (a = Ca(ke + Ae / 2), o = p);
				let m = Ia(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? Ae : je, h = i == 0 ? ke : z, _ = t._splits, v = p.distr == 2 ? _.map((e) => B[e]) : _, x = p.distr == 2 ? B[_[1]] - B[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = Ca(w * Z), E = Ca((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * Z), D = t._rotate * -ba / 180, O = g(t._pos * Z), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Tt(te, c, t.align == 1 ? yi : t.align == 2 ? bi : D > 0 ? yi : D < 0 ? bi : i == 0 ? "center" : n == 3 ? bi : yi, D || i == 1 ? "middle" : n == 2 ? _i : vi);
			let k = t.font[1] * t.lineGap, A = _.map((e) => g(s(e, p, m, h))), ne = t._values;
			for (let e = 0; e < ne.length; e++) {
				let t = ne[e];
				if (t != null) {
					i == 0 ? a = A[e] : o = A[e], t = "" + t;
					let n = t.indexOf("\n") == -1 ? [t] : t.split(/\n/gm);
					for (let e = 0; e < n.length; e++) {
						let t = n[e];
						D ? (d.save(), d.translate(a, o + e * k), d.rotate(D), d.fillText(t, 0, 0), d.restore()) : d.fillText(t, a, o + e * k);
					}
				}
			}
			S.show && It(A, S.filter(r, v, e, f, x), i, n, O, T, Ja(S.width * Z, 3), S.stroke(r, e), S.dash, S.cap);
			let re = t.grid;
			re.show && It(A, re.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? z : ke, i == 0 ? je : Ae, Ja(re.width * Z, 3), re.stroke(r, e), re.dash, re.cap), C.show && It([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? z : ke, i == 1 ? je : Ae, Ja(C.width * Z, 3), C.stroke(r, e), C.dash, C.cap);
		}
		Yn("drawAxes");
	}
	function Bt(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let Vt = !1, Ht = !1, Ut = [];
	function Wt() {
		Ht = !1;
		for (let e = 0; e < Ut.length; e++) Yn(...Ut[e]);
		Ut.length = 0;
	}
	function Gt() {
		Vt ||= (_o(qt), !0);
	}
	function Kt(e, t = !1) {
		Vt = !0, Ht = t, e(r), qt(), t && Ut.length > 0 && queueMicrotask(Wt);
	}
	r.batch = Kt;
	function qt() {
		if (Me &&= (Ot(), !1), Pe &&= (Be(), !1), Ne) {
			if (Hi(p, yi, R), Hi(p, _i, we), Hi(p, hi, I), Hi(p, gi, L), Hi(m, yi, R), Hi(m, _i, we), Hi(m, hi, I), Hi(m, gi, L), Hi(f, hi, Ce), Hi(f, gi, F), u.width = Ca(Ce * Z), u.height = Ca(F * Z), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					Hi(e, a ? "left" : "top", r - t), Hi(e, a ? "width" : "height", n), Hi(e, a ? "top" : "left", a ? we : R), Hi(e, a ? "height" : "width", a ? L : I), Vi(e, ri);
				} else Bi(e, ri);
			}), mt = ht = gt = vt = yt = bt = xt = St = _t = null, Ct = 1, Nn(!0), R != Te || we != Ee || I != De || L != Oe) {
				Bt(!1);
				let e = I / De, t = L / Oe;
				if (ce && !Fe && M.left >= 0) {
					M.left *= e, M.top *= t, Yt && Ki(Yt, Ca(M.left), 0, I, L), Xt && Ki(Xt, 0, Ca(M.top), I, L);
					for (let n = 0; n < Ye.length; n++) {
						let r = Ye[n];
						r != null && (Xe[n] *= e, Ze[n] *= t, Ki(r, wa(Xe[n]), wa(Ze[n]), I, L));
					}
				}
				if (G.show && !Ie && G.left >= 0 && G.width > 0) {
					G.left *= e, G.width *= e, G.top *= t, G.height *= t;
					for (let e in In) Hi(un, e, G[e]);
				}
				Te = R, Ee = we, De = I, Oe = L;
			}
			Yn("setSize"), Ne = !1;
		}
		Ce > 0 && F > 0 && (d.clearRect(0, 0, u.width, u.height), Yn("drawClear"), w.forEach((e) => e()), Yn("draw")), G.show && Ie && (dn(G), Ie = !1), ce && Fe && (Mn(null, !0, !1), Fe = !1), oe.show && oe.live && Le && (K(), Le = !1), c || (c = !0, r.status = 1, Yn("ready")), dt = !1, Vt = !1;
	}
	r.redraw = (e, t) => {
		Pe = t || !1, e === !1 ? Gt() : pn(S, D.min, D.max);
	};
	function U(e, n) {
		let i = b[e];
		if (i.from == null) {
			if (st == 0) {
				let t = i.range(r, n.min, n.max, e);
				n.min = t[0], n.max = t[1];
			}
			if (n.min > n.max) {
				let e = n.min;
				n.min = n.max, n.max = e;
			}
			if (st > 1 && n.min != null && n.max != null && n.max - n.min < 1e-16) return;
			e == S && i.distr == 2 && st > 0 && (n.min = ta(n.min, t[0]), n.max = ta(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Me = !0, Gt();
		}
	}
	r.setScale = U;
	let Jt, W, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on = !1, sn = M.drag, cn = sn.x, ln = sn.y;
	ce && (M.x && (Jt = Wi(ai, m)), M.y && (W = Wi(oi, m)), D.ori == 0 ? (Yt = Jt, Xt = W) : (Yt = W, Xt = Jt), rn = M.left, an = M.top);
	let G = r.select = uo({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), un = G.show ? Wi(ii, G.over ? m : p) : null;
	function dn(e, t) {
		if (G.show) {
			for (let t in e) G[t] = e[t], t in In && Hi(un, t, e[t]);
			t !== !1 && Yn("setSelect");
		}
	}
	r.setSelect = dn;
	function fn(e) {
		if (v[e].show) se && Vi(fe[e], ri);
		else if (se && Bi(fe[e], ri), ce) {
			let t = Je ? Ye[0] : Ye[e];
			t != null && Ki(t, -10, -10, I, L);
		}
	}
	function pn(e, t, n) {
		U(e, {
			min: t,
			max: n
		});
	}
	function mn(e, t, n, a) {
		t.focus != null && Cn(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, fn(r), i == 2 ? (pn(n.facets[0].scale, null, null), pn(n.facets[1].scale, null, null)) : pn(n.scale, null, null), Gt());
		}), n !== !1 && Yn("setSeries", e, t), a && $n("setSeries", r, e, t);
	}
	r.setSeries = mn;
	function hn(e, t) {
		uo(x[e], t);
	}
	function gn(e, t) {
		e.fill = $(e.fill || null), e.dir = Q(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function _n(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = gn, r.setBand = hn, r.delBand = _n;
	function vn(e, t) {
		v[e].alpha = t, ce && Ye[e] != null && (Ye[e].style.opacity = t), se && fe[e] && (fe[e].style.opacity = t);
	}
	let yn, bn, xn, Sn = { focus: !0 };
	function Cn(e) {
		if (e != xn) {
			let t = e == null, n = Ke.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && vn(a, i ? 1 : Ke.alpha);
				}
			}), xn = e, n && Gt();
		}
	}
	se && qe && Se(Di, N, (e) => {
		M._lock || (We(e), xn != null && mn(null, Sn, !0, Zn.setSeries));
	});
	function wn(e, t, n) {
		let r = b[t];
		n && (e = e / Z - (r.ori == 1 ? we : R));
		let i = I;
		r.ori == 1 && (i = L, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? Da(10, c) : l == 4 ? ja(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Tn(e, n) {
		return ta(wn(e, S, n), t[0], ct, lt);
	}
	r.valToIdx = (e) => ta(e, t[0]), r.posToIdx = Tn, r.posToVal = wn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? Ae : I, n ? ke : 0) : o(e, b[t], n ? je : L, n ? z : 0), r.setCursor = (e, t, n) => {
		rn = e.left, an = e.top, Mn(null, t, n);
	};
	function En(e, t) {
		Hi(un, yi, G.left = e), Hi(un, hi, G.width = t);
	}
	function Dn(e, t) {
		Hi(un, _i, G.top = e), Hi(un, gi, G.height = t);
	}
	let On = D.ori == 0 ? En : Dn, kn = D.ori == 1 ? En : Dn;
	function An() {
		if (se && oe.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && he) continue;
			let t = oe.values[e], n = 0;
			for (let r in t) pe[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function K(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			ae[t] = e;
		}) : ro(e.idx) || ae.fill(e.idx), oe.idx = ae[0]), se && oe.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !he) && jn(e, ae[e]);
			An();
		}
		Le = !1, t !== !1 && Yn("setLegend");
	}
	r.setLegend = K;
	function jn(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? B : t[e], o;
		he ? o = i.values(r, e, n) ?? ge : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? ge : { _: o }), oe.values[e] = o;
	}
	function Mn(e, n, a) {
		tn = rn, nn = an, [rn, an] = M.move(r, rn, an), M.left = rn, M.top = an, ce && (Yt && Ki(Yt, Ca(rn), 0, I, L), Xt && Ki(Xt, 0, Ca(an), I, L));
		let o, s = ct > lt;
		yn = Na, bn = null;
		let c = D.ori == 0 ? I : L, l = D.ori == 1 ? I : L;
		if (rn < 0 || st == 0 || s) {
			o = M.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Ye[e];
				t != null && Ki(t, -10, -10, I, L);
			}
			qe && mn(null, Sn, !0, e == null && Zn.setSeries), oe.live && (ae.fill(o), Le = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? rn : an, n = wn(e, S), o = M.idx = ta(n, t[0], ct, lt), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = ae[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = M.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Le = Le || S != y || x != _, ae[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (qe && S != null) {
						let t = D.ori == 1 ? rn : an, n = xa(Ke.dist(r, e, x, _, t));
						if (n < yn) {
							let r = Ke.bias;
							if (r != 0) {
								let i = wn(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (yn = n, bn = e);
							} else yn = n, bn = e;
						}
					}
					if (Le || Je) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = Ge.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = Ge.size(r, e);
						if (v = Ge.fill(r, e), g = Ge.stroke(r, e), Je) e == bn && yn <= Ke.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = Ye[e];
							t != null && (Xe[e] = c, Ze[e] = l, Xi(t, a, o, y), Ji(t, v, g), Ki(t, wa(c), wa(l), I, L));
						}
					}
				}
			}
			if (Je) {
				let e = Ke.prox;
				if (Le || (xn == null ? yn <= e : yn > e || bn != xn)) {
					let e = Ye[0];
					e != null && (Xe[0] = s, Ze[0] = u, Xi(e, d, f, p), Ji(e, m, h), Ki(e, wa(s), wa(u), I, L));
				}
			}
		}
		if (G.show && on) if (e != null) {
			let [t, n] = Zn.scales, [r, i] = Zn.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (cn = s._x, ln = s._y, cn || ln) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && cn ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), On(Ta(v, y), xa(y - v))) : On(0, c), S && ln ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), kn(Ta(v, y), xa(y - v))) : kn(0, l);
			} else Ln();
		} else {
			let e = xa(tn - Zt), t = xa(nn - Qt);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			cn = sn.x && e >= sn.dist, ln = sn.y && t >= sn.dist;
			let n = sn.uni;
			n == null ? sn.x && sn.y && (cn || ln) && (cn = ln = !0) : cn && ln && (cn = e >= n, ln = t >= n, !cn && !ln && (t > e ? ln = !0 : cn = !0));
			let r, i;
			cn && (D.ori == 0 ? (r = $t, i = rn) : (r = en, i = an), On(Ta(r, i), xa(i - r)), ln || kn(0, l)), ln && (D.ori == 1 ? (r = $t, i = rn) : (r = en, i = an), kn(Ta(r, i), xa(i - r)), cn || On(0, c)), !cn && !ln && (On(0, 0), kn(0, 0));
		}
		if (sn._x = cn, sn._y = ln, e == null) {
			if (a) {
				if (J != null) {
					let [e, t] = Zn.scales;
					Zn.values[0] = e == null ? null : wn(D.ori == 0 ? rn : an, e), Zn.values[1] = t == null ? null : wn(D.ori == 1 ? rn : an, t);
				}
				$n(Ci, r, rn, an, I, L, o);
			}
			if (qe) {
				let e = a && Zn.setSeries, t = Ke.prox;
				xn == null ? yn <= t && mn(bn, Sn, !0, e) : yn > t ? mn(null, Sn, !0, e) : bn != xn && mn(bn, Sn, !0, e);
			}
		}
		Le && (oe.idx = o, K()), n !== !1 && Yn("setCursor");
	}
	let q = null;
	Object.defineProperty(r, "rect", { get() {
		return q ?? Nn(!1), q;
	} });
	function Nn(e = !1) {
		e ? q = null : (q = m.getBoundingClientRect(), Yn("syncRect", q));
	}
	function Pn(e, t, n, r, i, a, o) {
		M._lock || on && e != null && e.movementX == 0 && e.movementY == 0 || (Fn(e, t, n, r, i, a, o, !1, e != null), e == null ? Mn(t, !0, !1) : Mn(null, !0, !0));
	}
	function Fn(e, t, n, i, a, o, c, l, u) {
		if (q ?? Nn(!1), We(e), e != null) n = e.clientX - q.left, i = e.clientY - q.top;
		else {
			if (n < 0 || i < 0) {
				rn = -10, an = -10;
				return;
			}
			let [e, r] = Zn.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = Zn.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? I : L, _ = D.ori == 1 ? I : L, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == Ci) && ((n <= 1 || n >= I - 1) && (n = Ga(n, I)), (i <= 1 || i >= L - 1) && (i = Ga(i, L))), l ? (Zt = n, Qt = i, [$t, en] = M.move(r, n, i)) : (rn = n, an = i);
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
		on = !0, cn = ln = sn._x = sn._y = !1, Fn(e, t, n, i, a, o, s, !0, !1), e != null && (Se(Ti, Fi, Un, !1), $n(wi, r, $t, en, I, L, null));
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
				e != S && t.from == null && t.min != Na && pn(e, wn(n + r, e), wn(n, e));
			}
			Ln();
		} else M.lock && (M._lock = !M._lock, Mn(t, !0, e != null));
		e != null && (P(Ti, Fi), $n(Ti, r, rn, an, I, L, null));
	}
	function Wn(e, t, n, r, i, a, o) {
		if (M._lock) return;
		We(e);
		let s = on;
		if (on) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = cn, r = ln) : (n = ln, r = cn), n && r && (e = rn <= 10 || rn >= I - 10, t = an <= 10 || an >= L - 10), n && e && (rn = rn < $t ? 0 : I), r && t && (an = an < en ? 0 : L), Mn(null, !0, !0), on = !1;
		}
		rn = -10, an = -10, ae.fill(null), Mn(null, !0, !0), s && (on = s);
	}
	function Gn(e, t, n, i, a, o, s) {
		M._lock || (We(e), pt(), Ln(), e != null && $n(Oi, r, rn, an, I, L, null));
	}
	function Kn() {
		y.forEach(Jc), Re(r.width, r.height, !0);
	}
	$i(Mi, Ii, Kn);
	let qn = {};
	qn.mousedown = Hn, qn.mousemove = Pn, qn.mouseup = Un, qn.dblclick = Gn, qn.setSeries = (e, t, n, i) => {
		let a = Zn.match[2];
		n = a(r, t, n), n != -1 && mn(n, i, !0, !1);
	}, ce && (Se(wi, m, Hn), Se(Ci, m, Pn), Se(Ei, m, (e) => {
		We(e), Nn(!1);
	}), Se(Di, m, Wn), Se(Oi, m, Gn), Mc.add(r), r.syncRect = Nn);
	let Jn = r.hooks = e.hooks || {};
	function Yn(e, t, n) {
		Ht ? Ut.push([
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
	let Xn = (e, t, n) => n, Zn = uo({
		key: null,
		setSeries: !1,
		filters: {
			pub: Va,
			sub: Va
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			Ha,
			Ha,
			Xn
		],
		values: [null, null]
	}, M.sync);
	Zn.match.length == 2 && Zn.match.push(Xn), M.sync = Zn;
	let J = Zn.key, Qn = $s(J);
	function $n(e, t, n, r, i, a, o) {
		Zn.filters.pub(e, t, n, r, i, a, o) && Qn.pub(e, t, n, r, i, a, o);
	}
	Qn.sub(r);
	function Y(e, t, n, r, i, a, o) {
		Zn.filters.sub(e, t, n, r, i, a, o) && qn[e](null, t, n, r, i, a, o);
	}
	r.pub = Y;
	function er() {
		Qn.unsub(r), Mc.delete(r), xe.clear(), ea(Mi, Ii, Kn), l.remove(), N?.remove(), Yn("destroy");
	}
	r.destroy = er;
	function tr() {
		Yn("init", e, t), ft(t || e.data, !1), k[S] ? U(S, k[S]) : pt(), Ie = G.show && (G.width > 0 || G.height > 0), Fe = Le = !0, Re(e.width, e.height);
	}
	return v.forEach($e), y.forEach(rt), n ? n instanceof HTMLElement ? (n.appendChild(l), tr()) : n(r, tr) : tr(), r;
}
Yc.assign = uo, Yc.fmtNum = va, Yc.rangeNum = ma, Yc.rangeLog = ca, Yc.rangeAsinh = la, Yc.orient = nc, Yc.pxRatio = Z, Yc.join = go, Yc.fmtDate = ko, Yc.tzDate = jo, Yc.sync = $s;
{
	Yc.addGap = sc, Yc.clipGaps = oc;
	let e = Yc.paths = { points: xc };
	e.linear = Tc, e.stepped = Ec, e.bars = Oc, e.spline = Ac;
}
//#endregion
//#region src/App.svelte
var Xc = /* @__PURE__ */ pr("<div class=\"error\" role=\"alert\"> <code>apx status</code> if the problem persists.</div>"), Zc = /* @__PURE__ */ pr("<article><strong> </strong><small> </small><em> </em></article>"), Qc = /* @__PURE__ */ pr("<button class=\"signals-toggle\" type=\"button\"> </button>"), $c = /* @__PURE__ */ pr("<div class=\"attention-list\"></div> <!>", 1), el = /* @__PURE__ */ pr("<p class=\"clear\">No active signals in this window.</p>"), tl = /* @__PURE__ */ pr("<div class=\"empty-state\"><strong> </strong> <span> </span></div>"), nl = /* @__PURE__ */ pr("<p class=\"chart-empty\">A trend appears after two time buckets.</p>"), rl = /* @__PURE__ */ pr("<div class=\"attention\"><div class=\"attention-heading\"><h3>Needs attention</h3><span> </span></div> <!></div> <!> <div class=\"metrics\" aria-label=\"Token efficiency summary\"><article><span>Tokens processed</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small> </small></article> <article class=\"token-card\"><span>Verified tokens saved</span><strong> <em class=\"metric-unit\">&nbsp;tokens</em></strong><small>Input tokens removed with matching per-request before/after evidence</small></article> <article><span>Savings coverage</span><strong> </strong><small> </small></article> <article><span>Request health</span><strong> </strong><small> </small></article></div> <div class=\"context-strip\" aria-label=\"Usage context\"><div><span>Cache reuse</span><strong> </strong><small> </small></div> <div><span>Estimated spend</span><strong> </strong><small>based on configured model prices</small></div> <div><span>Models active</span><strong> </strong><small> </small></div> <div><span>Tool activity</span><strong> </strong><small> </small></div></div> <div class=\"charts\"><article class=\"chart\"><div class=\"chart-heading\"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class=\"status\"> </span></div><div class=\"chart-key\"><span class=\"key-input\">Input</span><span class=\"key-output\">Output</span></div><div role=\"img\"></div><!></article> <article class=\"chart\"><div class=\"chart-heading\"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class=\"status\">explicit</span></div><div class=\"chart-key\"><span class=\"key-verified\">Verified</span><span class=\"key-estimated\">Estimated</span></div><div role=\"img\"></div><!></article></div>", 1), il = /* @__PURE__ */ pr("<div class=\"health-row\"><strong> </strong><span> </span> <small> </small></div>"), al = /* @__PURE__ */ pr("<div class=\"health-list\"></div>"), ol = /* @__PURE__ */ pr("<p class=\"clear\">No persisted optimizer counters in this window yet.</p>"), sl = /* @__PURE__ */ pr("· <a class=\"optimizer-link\" target=\"_blank\" rel=\"noopener\"> </a>", 1), cl = /* @__PURE__ */ pr("<div><strong> </strong><span> </span> <small> <!></small></div>"), ll = /* @__PURE__ */ pr("<p class=\"clear\">No optimizer snapshots in this window yet.</p>"), ul = /* @__PURE__ */ pr("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), dl = /* @__PURE__ */ pr("<p class=\"clear\"> </p>"), fl = /* @__PURE__ */ pr("<div class=\"optimizer-grid\"><article class=\"optimizer-health reported-savings\"><div class=\"attention-heading\"><h3>Optimizer-reported savings</h3><span class=\"status\">native counters</span></div> <p class=\"section-note\">Aggregate optimizer counters are shown separately from request-level verified savings.</p> <!></article> <article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Optimizer health</h3><span class=\"status\"> </span></div> <!></article> <article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Measurement confidence</h3><span> </span></div> <!></article></div>"), pl = /* @__PURE__ */ pr("<p class=\"clear\">No model activity in this window.</p>"), ml = /* @__PURE__ */ pr("<div class=\"health-row session-row\"><strong> </strong><span> </span><small> </small></div>"), hl = /* @__PURE__ */ pr("<p class=\"clear\">No sessions in this window.</p>"), gl = /* @__PURE__ */ pr("<div class=\"stored-grid\" aria-label=\"Persisted activity\"><article><div class=\"attention-heading\"><h3>Local history</h3><span> </span></div> <div class=\"storage-value\"> </div> <small> </small></article> <article><div class=\"attention-heading\"><h3>Top models</h3><span class=\"status\"> </span></div> <!></article> <article><div class=\"attention-heading\"><h3>Recent sessions</h3><span class=\"status\"> </span></div> <!></article></div>"), _l = /* @__PURE__ */ pr("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">LeanRelay · token efficiency</p> <h2> </h2></div> <span aria-live=\"polite\"> </span></div> <!> <div class=\"view-tabs\" aria-label=\"Dashboard views\" role=\"tablist\"><button type=\"button\" role=\"tab\">Overview</button> <button type=\"button\" role=\"tab\">Optimizers</button> <button type=\"button\" role=\"tab\">Activity</button></div> <!></section>");
function vl(e, t) {
	je(t, !1);
	let n = /* @__PURE__ */ V(), r = /* @__PURE__ */ V(), i = /* @__PURE__ */ V(), a = /* @__PURE__ */ V(), o = /* @__PURE__ */ V(), s = /* @__PURE__ */ V(), c = /* @__PURE__ */ V(), l = /* @__PURE__ */ V(), u = /* @__PURE__ */ V(), d = /* @__PURE__ */ V(), f = /* @__PURE__ */ V(), p = /* @__PURE__ */ V(), m = /* @__PURE__ */ V(), h = /* @__PURE__ */ V(), g = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), _ = /* @__PURE__ */ V("1h"), v = /* @__PURE__ */ V({}), y = /* @__PURE__ */ V({ alerts: [] }), b = /* @__PURE__ */ V([]), x = /* @__PURE__ */ V([]), S = /* @__PURE__ */ V({}), C = /* @__PURE__ */ V([]), w = /* @__PURE__ */ V([]), T = /* @__PURE__ */ V({}), E = /* @__PURE__ */ V(!0), D = /* @__PURE__ */ V(""), O = /* @__PURE__ */ V(!1), ee = /* @__PURE__ */ V(!1), te = /* @__PURE__ */ V("overview"), k = /* @__PURE__ */ V(), A = /* @__PURE__ */ V(), ne, re, ie, j = (e) => new Intl.NumberFormat().format(Number(e || 0)), ae = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, oe = (e) => `$${Number(e || 0).toFixed(Number(e || 0) < 1 ? 4 : 2)}`, M = (e) => {
		let t = Number(e || 0);
		return t >= 1048576 ? `${(t / 1048576).toFixed(1)} MB` : `${(t / 1024).toFixed(1)} KB`;
	}, se = (e, t) => Number(t || 0) ? `${(Number(e || 0) / Number(t) * 100).toFixed(0)}%` : "not measured", ce = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m", le = (e) => {
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
	async function N(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function ue() {
		let e = document.querySelector("#window-select")?.value || J(_);
		return g.has(e) ? e : "1h";
	}
	function de() {
		try {
			return localStorage.getItem("apx.dashboard.window") || "";
		} catch {
			return "";
		}
	}
	function fe(e) {
		try {
			localStorage.setItem("apx.dashboard.window", e);
		} catch {}
	}
	function pe(e, t) {
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
	function me() {
		let e = J(b).map((e) => Number(e.ts || 0)), t = J(b).map((e) => Number(e.tokens_in || 0)), n = J(b).map((e) => Number(e.tokens_out || 0)), r = J(C).map((e) => Number(e.ts || 0)), i = J(C).map((e) => Number(e.measured_tokens_saved || 0)), a = J(C).map((e) => Number(e.estimated_tokens_saved || 0));
		!J(k) || !J(A) || (ne?.destroy(), re?.destroy(), ne = void 0, re = void 0, J(k).replaceChildren(), J(A).replaceChildren(), e.length >= 2 && (ne = new Yc(pe(J(k), [{
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
		], J(k))), r.length >= 2 && (re = new Yc(pe(J(A), [{
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
		], J(A))));
	}
	async function he(e) {
		e !== J(te) && (J(k) && ie?.unobserve(J(k)), J(A) && ie?.unobserve(J(A)), ne?.destroy(), re?.destroy(), ne = void 0, re = void 0, H(te, e), await Zn(), e === "overview" && (J(k) && ie?.observe(J(k)), J(A) && ie?.observe(J(A)), me()));
	}
	async function ge() {
		H(E, !0), H(D, ""), H(O, !1), H(_, ue());
		try {
			let e = [
				{
					name: "usage",
					promise: N(`/api/metrics/summary?window=${J(_)}`),
					apply: (e) => H(v, e)
				},
				{
					name: "attention",
					promise: N(`/api/metrics/attention?window=${J(_)}`),
					apply: (e) => H(y, e)
				},
				{
					name: "token trend",
					promise: N(`/api/metrics/timeseries?window=${J(_)}&bucket=${ce(J(_))}`),
					apply: (e) => H(b, e.series || [])
				},
				{
					name: "savings",
					promise: N(`/api/metrics/efficiency?window=${J(_)}`),
					apply: (e) => H(S, e)
				},
				{
					name: "savings trend",
					promise: N(`/api/metrics/efficiency/timeseries?window=${J(_)}&bucket=${ce(J(_))}`),
					apply: (e) => H(C, e.series || [])
				},
				{
					name: "optimizer history",
					promise: N(`/api/metrics/optimizer-snapshots?window=${J(_)}`),
					apply: (e) => H(x, e.snapshots || [])
				},
				{
					name: "sessions",
					promise: N(`/api/metrics/sessions?window=${J(_)}&limit=5`),
					apply: (e) => H(w, e.sessions || [])
				},
				{
					name: "storage",
					promise: N("/api/metrics/operations?limit=1"),
					apply: (e) => H(T, e)
				}
			], t = await Promise.allSettled(e.map((e) => e.promise)), n = [];
			t.forEach((t, r) => {
				t.status === "fulfilled" ? e[r].apply(t.value) : n.push(e[r].name);
			}), H(O, n.includes("usage")), H(D, n.length ? `Some data is temporarily unavailable: ${n.join(", ")}` : ""), await Zn(), me();
		} catch (e) {
			H(D, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			H(E, !1);
		}
	}
	Sr(() => {
		let e = de();
		g.has(e) && H(_, e);
		let t = document.querySelector("#window-select");
		t && (t.value = J(_)), ge();
		let n = () => {
			H(_, ue()), fe(J(_)), H(ee, !1), ge();
		};
		t?.addEventListener("change", n);
		let r = window.setInterval(ge, 1e4);
		return ie = new ResizeObserver(() => me()), J(k) && ie.observe(J(k)), J(A) && ie.observe(J(A)), () => {
			t?.removeEventListener("change", n), window.clearInterval(r), ie?.disconnect(), ne?.destroy(), re?.destroy();
		};
	});
	let _e = /* @__PURE__ */ V([]);
	G(() => J(x), () => {
		H(_e, Object.values(J(x).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), G(() => J(_e), () => {
		H(n, J(_e).map((e) => {
			let t = e.normalized || {};
			return e.optimizer === "headroom" ? {
				optimizer: "headroom",
				saved: t.tokens_saved_lifetime,
				rate: t.savings_pct_session,
				requests: t.requests_total,
				usd: t.usd_saved_lifetime
			} : e.optimizer === "pxpipe" ? {
				optimizer: "pxpipe",
				saved: t.saved_input_tokens,
				rate: t.saved_pct_of_all_spend || t.saved_pct_input_only,
				requests: t.requests_total,
				usd: t.saved_usd
			} : {
				optimizer: e.optimizer,
				saved: t.total_saved_tokens,
				rate: t.savings_pct,
				requests: t.requests_total,
				usd: null
			};
		}));
	}), G(() => J(S), () => {
		H(r, J(S).optimizers || []);
	}), G(() => J(S), () => {
		H(i, J(S).observed || {});
	}), G(() => J(v), () => {
		H(a, J(v).totals || {});
	}), G(() => J(v), () => {
		H(o, Object.entries(J(v).by_model || {}).map(([e, t]) => ({
			model: e,
			...t
		})).sort((e, t) => Number(t.tokens_in || 0) + Number(t.tokens_out || 0) - Number(e.tokens_in || 0) - Number(e.tokens_out || 0)).slice(0, 3));
	}), G(() => J(v), () => {
		H(s, Object.keys(J(v).by_model || {}).length);
	}), G(() => (J(i), J(v)), () => {
		H(c, Number(J(i).tokens_in || J(v).totals?.tokens_in || 0) + Number(J(i).tokens_out || J(v).totals?.tokens_out || 0));
	}), G(() => J(r), () => {
		H(l, J(r).reduce((e, t) => e + Number(t.measured_tokens_saved || 0), 0));
	}), G(() => J(r), () => {
		H(u, J(r).reduce((e, t) => e + Number(t.measured_attempts || 0), 0));
	}), G(() => J(r), () => {
		H(d, J(r).reduce((e, t) => e + Number(t.attempts || 0), 0));
	}), G(() => J(v), () => {
		H(f, Number(J(v).totals?.err_5xx || 0) + Number(J(v).totals?.warn_4xx || 0));
	}), G(() => J(v), () => {
		H(p, !!J(v).totals);
	}), G(() => (J(O), J(p), J(E), J(f)), () => {
		H(m, J(O) ? J(p) ? "Stale data" : "Unavailable" : !J(p) && J(E) ? "Loading" : J(f) ? `${j(J(f))} issue${J(f) === 1 ? "" : "s"}` : "Healthy");
	}), G(() => (J(ee), J(y)), () => {
		H(h, J(ee) ? J(y).alerts || [] : (J(y).alerts || []).slice(0, 3));
	}), un(), Kr();
	var ve = _l(), ye = U(ve), be = U(ye), xe = W(U(be), 2), Se = U(xe, !0);
	R(xe), R(be);
	var P = W(be, 2);
	let Ce;
	var F = U(P, !0);
	R(P), R(ye);
	var I = W(ye, 2), L = (e) => {
		var t = Xc(), n = U(t);
		we(2), R(t), pn(() => X(n, `${J(D) ?? ""}. Available sections remain visible; use `)), mr(e, t);
	};
	wr(I, (e) => {
		J(D) && e(L);
	});
	var Te = W(I, 2), Ee = U(Te), De = W(Ee, 2), Oe = W(De, 2);
	R(Te);
	var ke = W(Te, 2), z = (e) => {
		var t = rl(), n = Jt(t), r = U(n), g = W(U(r));
		let x;
		var S = U(g);
		R(g), R(r);
		var w = W(r, 2), E = (e) => {
			var t = $c(), n = Jt(t);
			Or(n, 5, () => J(h), (e) => e.id, (e, t) => {
				var n = Zc();
				let r;
				var i = U(n), a = U(i, !0);
				R(i);
				var o = W(i), s = U(o, !0);
				R(o);
				var c = W(o), l = U(c);
				R(c), R(n), pn(() => {
					r = Ir(n, 1, "signal", null, r, {
						critical: J(t).severity === "critical",
						warning: J(t).severity === "warning"
					}), X(a, (J(t), Y(() => J(t).title))), X(s, (J(t), Y(() => J(t).detail))), X(l, `Next: ${(J(t), Y(() => J(t).action)) ?? ""}`);
				}), mr(e, n);
			}), R(n);
			var r = W(n, 2), i = (e) => {
				var t = Qc(), n = U(t, !0);
				R(t), pn(() => {
					Br(t, "aria-expanded", J(ee)), X(n, (J(ee), J(y), Y(() => J(ee) ? "Show fewer signals" : `Show ${J(y).alerts.length - 3} more signal${J(y).alerts.length - 3 == 1 ? "" : "s"}`)));
				}), ar("click", t, () => H(ee, !J(ee))), mr(e, t);
			};
			wr(r, (e) => {
				J(y), Y(() => J(y).alerts.length > 3) && e(i);
			}), mr(e, t);
		}, D = (e) => {
			mr(e, el());
		};
		wr(w, (e) => {
			J(y), Y(() => J(y).alerts?.length) ? e(E) : e(D, -1);
		}), R(n);
		var te = W(n, 2), ne = (e) => {
			var t = tl(), n = U(t), r = U(n);
			R(n);
			var i = W(n, 2), a = U(i);
			R(i), R(t), pn((e) => {
				X(r, `No requests in the last ${J(_) ?? ""}.`), X(a, `${e ?? ""} requests remain in local history. Choose a longer time window to include older activity.`);
			}, [() => (J(T), Y(() => j(J(T).requests)))]), mr(e, t);
		}, re = /* @__PURE__ */ rt(() => (J(p), J(a), Y(() => J(p) && Number(J(a).requests || 0) === 0)));
		wr(te, (e) => {
			J(re) && e(ne);
		});
		var ie = W(te, 2), M = U(ie), ce = W(U(M)), le = U(ce, !0);
		we(), R(ce);
		var N = W(ce), ue = U(N);
		R(N), R(M);
		var de = W(M, 2), fe = W(U(de)), pe = U(fe, !0);
		we(), R(fe), we(), R(de);
		var me = W(de, 2), he = W(U(me)), ge = U(he, !0);
		R(he);
		var _e = W(he), ve = U(_e);
		R(_e), R(me);
		var ye = W(me, 2), be = W(U(ye));
		let xe;
		var Se = U(be, !0);
		R(be);
		var P = W(be), Ce = U(P);
		R(P), R(ye), R(ie);
		var F = W(ie, 2), I = U(F), L = W(U(I)), Te = U(L, !0);
		R(L);
		var Ee = W(L), De = U(Ee);
		R(Ee), R(I);
		var Oe = W(I, 2), ke = W(U(Oe)), z = U(ke, !0);
		R(ke), we(), R(Oe);
		var Ae = W(Oe, 2), je = W(U(Ae)), Me = U(je, !0);
		R(je);
		var Ne = W(je), Pe = U(Ne, !0);
		R(Ne), R(Ae);
		var Fe = W(Ae, 2), Ie = W(U(Fe)), Le = U(Ie, !0);
		R(Ie);
		var Re = W(Ie), ze = U(Re);
		R(Re), R(Fe), R(F);
		var Be = W(F, 2), Ve = U(Be), He = U(Ve), Ue = W(U(He)), We = U(Ue, !0);
		R(Ue), R(He);
		var Ge = W(He, 2);
		let Ke;
		Gr(Ge, (e) => H(k, e), () => J(k));
		var qe = W(Ge), Je = (e) => {
			mr(e, nl());
		};
		wr(qe, (e) => {
			J(b), Y(() => J(b).length < 2) && e(Je);
		}), R(Ve);
		var Ye = W(Ve, 2), Xe = W(U(Ye), 2);
		let Ze;
		Gr(Xe, (e) => H(A, e), () => J(A));
		var Qe = W(Xe), $e = (e) => {
			mr(e, nl());
		};
		wr(Qe, (e) => {
			J(C), Y(() => J(C).length < 2) && e($e);
		}), R(Ye), R(Be), pn((e, t, n, r, i, a, s, c, l, u, d, h, v, w, T, E, D, ee) => {
			x = Ir(g, 1, "status", null, x, e), X(S, `${(J(y), Y(() => J(y).alerts?.length || 0)) ?? ""} signals`), X(le, t), X(ue, `Observed in this window: ${n ?? ""} input + ${r ?? ""} output`), X(pe, i), X(ge, a), X(ve, `${s ?? ""} of ${c ?? ""} optimizer attempts verified`), xe = Ir(be, 1, "", null, xe, { healthy: J(p) && J(f) === 0 && !J(O) }), X(Se, J(m)), X(Ce, `${l ?? ""} requests · p95 ${u ?? ""}`), X(Te, d), X(De, `tokens read · ${h ?? ""} written`), X(z, v), X(Me, w), X(Pe, (J(o), Y(() => J(o)[0]?.model || "no model activity"))), X(Le, T), X(ze, `tool calls · ${E ?? ""} streamed requests`), X(We, J(_)), Ke = Ir(Ge, 1, "plot", null, Ke, { empty: J(b).length < 2 }), Br(Ge, "aria-label", D), Ze = Ir(Xe, 1, "plot", null, Ze, { empty: J(C).length < 2 }), Br(Xe, "aria-label", ee);
		}, [
			() => ({
				ok: !J(y).alerts?.length,
				warn: J(y).alerts?.some((e) => e.severity === "warning"),
				fail: J(y).alerts?.some((e) => e.severity === "critical")
			}),
			() => (J(c), Y(() => j(J(c)))),
			() => (J(i), Y(() => j(J(i).tokens_in))),
			() => (J(i), Y(() => j(J(i).tokens_out))),
			() => (J(l), Y(() => j(J(l)))),
			() => (J(u), J(d), Y(() => se(J(u), J(d)))),
			() => (J(u), Y(() => j(J(u)))),
			() => (J(d), Y(() => j(J(d)))),
			() => (J(v), Y(() => j(J(v).totals?.requests))),
			() => (J(v), Y(() => ae(J(v).latency_ms?.p95))),
			() => (J(a), Y(() => j(J(a).cache_read_tokens))),
			() => (J(a), Y(() => j(J(a).cache_write_tokens))),
			() => (J(a), Y(() => oe(J(a).cost_est_usd))),
			() => (J(s), Y(() => j(J(s)))),
			() => (J(a), Y(() => j(J(a).tool_calls))),
			() => (J(a), Y(() => j(J(a).streams))),
			() => (J(_), J(i), Y(() => `Token flow over ${J(_)}: ${j(J(i).tokens_in)} input and ${j(J(i).tokens_out)} output tokens.`)),
			() => (J(_), J(l), Y(() => `Savings over ${J(_)}: ${j(J(l))} verified tokens saved.`))
		]), mr(e, t);
	}, Ae = (e) => {
		var t = fl(), i = U(t), a = W(U(i), 4), o = (e) => {
			var t = al();
			Or(t, 5, () => J(n), (e) => e.optimizer, (e, t) => {
				var n = il(), r = U(n), i = U(r, !0);
				R(r);
				var a = W(r), o = U(a);
				R(a);
				var s = W(a, 2), c = U(s);
				R(s), R(n), pn((e, n, r, a) => {
					X(i, (J(t), Y(() => J(t).optimizer))), X(o, `${e ?? ""} tokens`), X(c, `${n ?? ""}% reported savings · ${r ?? ""} requests${a ?? ""}`);
				}, [
					() => (J(t), Y(() => j(J(t).saved))),
					() => (J(t), Y(() => Number(J(t).rate || 0).toFixed(1))),
					() => (J(t), Y(() => j(J(t).requests))),
					() => (J(t), Y(() => J(t).usd == null ? "" : ` · ${oe(J(t).usd)}`))
				]), mr(e, n);
			}), R(t), mr(e, t);
		}, s = (e) => {
			mr(e, ol());
		};
		wr(a, (e) => {
			J(n), Y(() => J(n).length) ? e(o) : e(s, -1);
		}), R(i);
		var c = W(i, 2), l = U(c), u = W(U(l)), d = U(u);
		R(u), R(l);
		var f = W(l, 2), p = (e) => {
			var t = al();
			Or(t, 5, () => J(_e), (e) => e.optimizer, (e, t) => {
				let n = /* @__PURE__ */ it(() => (J(t), Y(() => le(J(t).optimizer))));
				var r = cl();
				let i;
				var a = U(r), o = U(a, !0);
				R(a);
				var s = W(a), c = U(s, !0);
				R(s);
				var l = W(s, 2), u = U(l), d = W(u), f = (e) => {
					var t = sl(), r = W(Jt(t)), i = U(r, !0);
					R(r), pn(() => {
						Br(r, "href", (er(J(n)), Y(() => J(n).href))), X(i, (er(J(n)), Y(() => J(n).label)));
					}), mr(e, t);
				};
				wr(d, (e) => {
					J(n) && e(f);
				}), R(l), R(r), pn((e) => {
					i = Ir(r, 1, "health-row", null, i, {
						up: J(t).reachable,
						down: !J(t).reachable
					}), X(o, (J(t), Y(() => J(t).optimizer))), X(c, (J(t), Y(() => J(t).reachable ? "reachable" : "unreachable"))), X(u, `last checked ${e ?? ""} `);
				}, [() => (J(t), Y(() => (/* @__PURE__ */ new Date(Number(J(t).ts || 0) * 1e3)).toLocaleString()))]), mr(e, r);
			}), R(t), mr(e, t);
		}, m = (e) => {
			mr(e, ll());
		};
		wr(f, (e) => {
			J(_e), Y(() => J(_e).length) ? e(p) : e(m, -1);
		}), R(c);
		var h = W(c, 2), g = U(h), _ = W(U(g));
		let v;
		var y = U(_, !0);
		R(_), R(g);
		var b = W(g, 2), x = (e) => {
			var t = al();
			Or(t, 5, () => J(r), (e) => e.optimizer, (e, t) => {
				var n = ul(), r = U(n), i = U(r, !0);
				R(r);
				var a = W(r), o = U(a);
				R(a);
				var s = W(a), c = U(s);
				R(s), R(n), pn((e, n, r, a) => {
					X(i, (J(t), Y(() => J(t).optimizer))), X(o, `${e ?? ""}/${n ?? ""} verified`), X(c, `${r ?? ""} estimated · ${a ?? ""} unavailable`);
				}, [
					() => (J(t), Y(() => j(J(t).measured_attempts))),
					() => (J(t), Y(() => j(J(t).attempts))),
					() => (J(t), Y(() => j(J(t).estimated_attempts))),
					() => (J(t), Y(() => j(J(t).unavailable_attempts)))
				]), mr(e, n);
			}), R(t), mr(e, t);
		}, C = (e) => {
			var t = dl(), n = U(t);
			R(t), pn(() => X(n, `No optimizer attempts in this window yet. ${(J(S), Y(() => J(S).note || "Savings will appear only when adapters emit measurements.")) ?? ""}`)), mr(e, t);
		};
		wr(b, (e) => {
			J(r), Y(() => J(r).length) ? e(x) : e(C, -1);
		}), R(h), R(t), pn(() => {
			X(d, `${(J(_e), Y(() => J(_e).length)) ?? ""} tracked`), v = Ir(_, 1, "status", null, v, {
				ok: J(S).durable,
				warn: !J(S).durable
			}), X(y, (J(S), Y(() => J(S).durable ? "durable" : "not persistent")));
		}), mr(e, t);
	}, Ne = (e) => {
		var t = gl(), n = U(t), r = U(n), i = W(U(r));
		let a;
		var s = U(i, !0);
		R(i), R(r);
		var c = W(r, 2), l = U(c);
		R(c);
		var u = W(c, 2), d = U(u);
		R(u), R(n);
		var f = W(n, 2), p = U(f), m = W(U(p)), h = U(m, !0);
		R(m), R(p);
		var g = W(p, 2), v = (e) => {
			var t = al();
			Or(t, 5, () => J(o), (e) => e.model, (e, t) => {
				var n = ul(), r = U(n), i = U(r, !0);
				R(r);
				var a = W(r), o = U(a);
				R(a);
				var s = W(a), c = U(s);
				R(s), R(n), pn((e, n, r) => {
					X(i, (J(t), Y(() => J(t).model))), X(o, `${e ?? ""} requests`), X(c, `${n ?? ""} tokens · ${r ?? ""}`);
				}, [
					() => (J(t), Y(() => j(J(t).requests))),
					() => (J(t), Y(() => j(Number(J(t).tokens_in || 0) + Number(J(t).tokens_out || 0)))),
					() => (J(t), Y(() => oe(J(t).cost_usd)))
				]), mr(e, n);
			}), R(t), mr(e, t);
		}, y = (e) => {
			mr(e, pl());
		};
		wr(g, (e) => {
			J(o), Y(() => J(o).length) ? e(v) : e(y, -1);
		}), R(f);
		var b = W(f, 2), x = U(b), S = W(U(x)), C = U(S);
		R(S), R(x);
		var E = W(x, 2), D = (e) => {
			var t = al();
			Or(t, 5, () => J(w), (e) => e.session_id, (e, t) => {
				var n = ml(), r = U(n), i = U(r, !0);
				R(r);
				var a = W(r), o = U(a);
				R(a);
				var s = W(a), c = U(s);
				R(s), R(n), pn((e, n, a) => {
					Br(r, "title", (J(t), Y(() => J(t).session_id))), X(i, (J(t), Y(() => J(t).last_model || "unknown model"))), X(o, `${e ?? ""} requests`), X(c, `${(J(t), Y(() => J(t).chain_mode || "direct")) ?? ""} · ${n ?? ""} tokens · ${a ?? ""}`);
				}, [
					() => (J(t), Y(() => j(J(t).requests))),
					() => (J(t), Y(() => j(Number(J(t).tokens_in || 0) + Number(J(t).tokens_out || 0)))),
					() => (J(t), Y(() => oe(J(t).cost_usd)))
				]), mr(e, n);
			}), R(t), mr(e, t);
		}, O = (e) => {
			mr(e, hl());
		};
		wr(E, (e) => {
			J(w), Y(() => J(w).length) ? e(D) : e(O, -1);
		}), R(b), R(t), pn((e, t, n) => {
			a = Ir(i, 1, "status", null, a, {
				ok: J(T).durable,
				warn: !J(T).durable
			}), X(s, (J(T), Y(() => J(T).durable ? "durable" : "fallback"))), X(l, `${e ?? ""} requests stored`), X(d, `${t ?? ""} SQLite · ${n ?? ""} day retention`), X(h, J(_)), X(C, `${(J(w), Y(() => J(w).length)) ?? ""} shown`);
		}, [
			() => (J(T), Y(() => j(J(T).requests))),
			() => (J(T), Y(() => M(J(T).db_size_bytes))),
			() => (J(T), Y(() => j(J(T).retention_days)))
		]), mr(e, t);
	};
	wr(ke, (e) => {
		J(te) === "overview" ? e(z) : J(te) === "optimizers" ? e(Ae, 1) : e(Ne, -1);
	}), R(ve), pn(() => {
		X(Se, J(te) === "overview" ? "Token efficiency overview" : J(te) === "optimizers" ? "Optimizer details" : "Persisted activity"), Ce = Ir(P, 1, "status", null, Ce, {
			ok: !J(E) && !J(D),
			warn: J(E) || !!J(D) && J(p),
			fail: !!J(D) && !J(p)
		}), X(F, J(D) ? "partial data" : J(E) ? "refreshing" : `last ${J(_)}`), Br(Ee, "aria-selected", J(te) === "overview"), Br(De, "aria-selected", J(te) === "optimizers"), Br(Oe, "aria-selected", J(te) === "activity");
	}), ar("click", Ee, () => he("overview")), ar("click", De, () => he("optimizers")), ar("click", Oe, () => he("activity")), mr(e, ve), Me();
}
or(["click"]);
//#endregion
//#region src/main.js
var yl = "svelte-uplot", bl = document.querySelector("#svelte-overview");
bl && (bl.replaceChildren(), _r(vl, { target: bl }));
//#endregion
export { vl as App, yl as dashboardBuild };
