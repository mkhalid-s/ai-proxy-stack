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
var b = 1024, x = 2048, S = 4096, C = 8192, w = 16384, T = 32768, E = 1 << 25, D = 65536, O = 1 << 19, ee = 1 << 20, te = 1 << 25, k = 65536, ne = 1 << 21, re = 1 << 22, ie = 1 << 23, ae = Symbol("$state"), oe = Symbol(""), se = Symbol("attributes"), A = Symbol("class"), j = Symbol("style"), M = Symbol("text"), ce = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), N = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function le(e) {
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
		for (var r of n) an(r);
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
	if (Pe.length === 0 && !pt) {
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
	if (t === null) return K.f |= ie, e;
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
	jn(null), Mn(null);
	try {
		return e();
	} finally {
		jn(t), Mn(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ke(e) {
	let t = 0, n = Mt(0), r;
	return () => {
		nn() && (J(n), dn(() => (t === 0 && (r = Y(() => e(() => Lt(n)))), t += 1, () => {
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
	#h = Ke(() => (this.#m = Mt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = pn(() => {
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
			this.#a = mn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Ie(r), t && (this.#s = mn(() => {
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
			t = !0, n && ye(), this.#s !== null && xn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = mn(() => e(this.#e)), Ie(() => {
			var e = this.#c = document.createDocumentFragment(), t = Gt();
			e.append(t), this.#a = this.#S(() => mn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, xn(this.#o, () => {
				this.#o = null;
			}), this.#x(B));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = mn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Tn(this.#a, e);
				let t = this.#n.pending;
				this.#o = mn(() => t(this.#e));
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
		Mn(this.#i), jn(this.#i), Ae(this.#i.ctx);
		try {
			return yt.ensure(), e();
		} catch (e) {
			return Re(e), null;
		} finally {
			Mn(t), jn(n), Ae(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && xn(this.#o, () => {
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
		this.#a &&= (vn(this.#a), null), this.#o &&= (vn(this.#o), null), this.#s &&= (vn(this.#s), null), P && (I(this.#t), we(), I(Te()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return mn(() => {
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
	let i = Ne() ? et : rt;
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
		Mn(e), jn(t), Ae(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Qe(e = !0) {
	Mn(null), jn(null), Ae(null), e && B?.deactivate();
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
	var a = void 0, o = Mt(r), s = !K, c = /* @__PURE__ */ new Set();
	return un(() => {
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
			l?.(), c.delete(n), t !== tt && (r.activate(), t ? (o.f |= ie, Ft(o, t)) : (o.f & 8388608 && (o.f ^= ie), Ft(o, e)), r.deactivate());
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
	return t.equals = ke, t;
}
function it(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) vn(t[n]);
	}
}
function at(e) {
	var t, n = q, i = e.parent;
	if (!On && i !== null && e.v !== r && i.f & 24576) return be(), e.v;
	Mn(i);
	try {
		e.f &= ~k, it(e), t = Kn(e);
	} finally {
		Mn(n);
	}
	return t;
}
function ot(e) {
	var t = at(e);
	if (!e.equals(t) && (e.wv = Un(), (!B?.is_fork || e.deps === null) && (B === null ? e.v = t : (B.capture(e, t, !0), ut?.capture(e, t, !0)), e.deps === null))) {
		Ve(e, b);
		return;
	}
	On || (dt === null ? He(e) : (nn() || B?.is_fork) && dt.set(e, t));
}
function st(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ge(() => {
		t.ac.abort(ce), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Jn(t, 0), gn(t));
}
function ct(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Yn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var lt = null, B = null, ut = null, dt = null, ft = null, pt = !1, mt = !1, ht = null, gt = null, _t = 0, vt = 1, yt = class e {
	id = vt++;
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
		lt === null ? lt = this : (lt.#n = this, this.#t = lt), lt = this;
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
		this.#e = !0, _t++ > 1e3 && (this.#x(), xt());
		for (let e of this.#u) this.#d.delete(e), Ve(e, x), this.schedule(e);
		for (let e of this.#d) Ve(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = ht = [], r = [], i = gt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ot(e), this.#h() || this.discard(), t;
		}
		if (B = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (ht = null, gt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Dt(e, t);
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
		this.#r.clear(), ut = this, Ct(r), Ct(n), ut = null, this.#s?.resolve();
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
				a ? r.f ^= b : i & 4 ? t.push(r) : Wn(r) && (i & 16 && this.#d.add(r), Yn(r));
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
		e.v !== r && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), dt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		B = this;
	}
	deactivate() {
		B = null, dt = null;
	}
	flush() {
		try {
			mt = !0, B = this, this.#g();
		} finally {
			_t = 0, ft = null, ht = null, gt = null, mt = !1, B = null, dt = null, At.clear();
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
			!mt && !pt && Ie(() => {
				t.#e || t.flush();
			});
		}
		return B;
	}
	apply() {
		dt = null;
	}
	schedule(e) {
		if (ft = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (ht !== null && t === q && (K === null || !(K.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? lt = e : t.#t = e, this.linked = !1;
		}
	}
};
function bt(e) {
	var t = pt;
	pt = !0;
	try {
		var n;
		for (e && (B !== null && !B.is_fork && B.flush(), n = e());;) {
			if (Le(), B === null) return n;
			B.flush();
		}
	} finally {
		pt = t;
	}
}
function xt() {
	try {
		he();
	} catch (e) {
		ze(e, ft);
	}
}
var St = null;
function Ct(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Wn(r) && (St = /* @__PURE__ */ new Set(), Yn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && bn(r), St?.size > 0)) {
				At.clear();
				for (let e of St) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) St.has(n) && (St.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Yn(n);
					}
				}
				St.clear();
			}
		}
		St = null;
	}
}
function wt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? wt(i, t, n, r) : e & 4194320 && !(e & 2048) && Tt(i, t, r) && (Ve(i, x), Et(i));
	}
}
function Tt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (s.call(t, r)) return !0;
		if (r.f & 2 && Tt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Et(e) {
	B.schedule(e);
}
function Dt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Ve(e, b);
		for (var n = e.first; n !== null;) Dt(n, t), n = n.next;
	}
}
function Ot(e) {
	Ve(e, b);
	for (var t = e.first; t !== null;) Ot(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var kt = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Map(), jt = !1;
function Mt(e, t) {
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
function Nt(e, t) {
	let n = Mt(e, t);
	return Pn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Pt(t, n = !1, r = !0) {
	let i = Mt(t);
	return n || (i.equals = ke), e && r && z !== null && z.l !== null && (z.l.s ??= []).push(i), i;
}
function V(e, t, n = !1) {
	return K !== null && (!An || K.f & 131072) && Ne() && K.f & 4325394 && (Nn === null || !Nn.has(e)) && ve(), Ft(e, n ? zt(t) : t, gt);
}
function Ft(e, t, n = null) {
	if (!e.equals(t)) {
		At.set(e, On ? t : e.v);
		var r = yt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && at(t), dt === null && He(t);
		}
		e.wv = Un(), Rt(e, x, n), Ne() && q !== null && q.f & 1024 && !(q.f & 96) && (Ln === null ? Rn([e]) : Ln.push(e)), !r.is_fork && kt.size > 0 && !jt && It();
	}
	return t;
}
function It() {
	jt = !1;
	for (let e of kt) {
		e.f & 1024 && Ve(e, S);
		let t;
		try {
			t = Wn(e);
		} catch {
			t = !0;
		}
		t && Yn(e);
	}
	kt.clear();
}
function Lt(e) {
	V(e, e.v + 1);
}
function Rt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ne(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && Ve(s, t), c & 131072) kt.add(s);
			else if (c & 2) {
				var u = s;
				dt?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= k), Rt(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && St !== null && St.add(d), n === null ? Et(d) : n.push(d);
			}
		}
	}
}
function zt(e) {
	if (typeof e != "object" || !e || ae in e) return e;
	let t = m(e);
	if (t !== f && t !== p) return e;
	var n = /* @__PURE__ */ new Map(), i = a(e), o = /* @__PURE__ */ Nt(0), s = null, c = Vn, l = (e) => {
		if (Vn === c) return e();
		var t = K, n = Vn;
		jn(null), Hn(c);
		var r = e();
		return jn(t), Hn(n), r;
	};
	return i && n.set("length", /* @__PURE__ */ Nt(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && ge();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ Nt(r.value, s);
				return n.set(t, e), e;
			}) : V(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = n.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ Nt(r, s));
					n.set(t, e), Lt(o);
				}
			} else V(i, r), Lt(o);
			return !0;
		},
		get(t, i, a) {
			if (i === ae) return e;
			var o = n.get(i), c = i in t;
			if (o === void 0 && (!c || u(t, i)?.writable) && (o = l(() => /* @__PURE__ */ Nt(zt(c ? t[i] : r), s)), n.set(i, o)), o !== void 0) {
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
			if (t === ae) return !0;
			var i = n.get(t), a = i !== void 0 && i.v !== r || Reflect.has(e, t);
			return (i !== void 0 || q !== null && (!a || u(e, t)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ Nt(a ? zt(e[t]) : r, s)), n.set(t, i)), J(i) === r) ? !1 : a;
		},
		set(e, t, a, c) {
			var d = n.get(t), f = t in e;
			if (i && t === "length") for (var p = a; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ Nt(r, s)), n.set(p + "", m)) : V(m, r);
			}
			if (d === void 0) (!f || u(e, t)?.writable) && (d = l(() => /* @__PURE__ */ Nt(void 0, s)), V(d, zt(a)), n.set(t, d));
			else {
				f = d.v !== r;
				var h = l(() => zt(a));
				V(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, a), !f) {
				if (i && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && V(_, v + 1);
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
		Ht = u(t, "firstChild").get, Ut = u(t, "nextSibling").get, h(e) && (e[A] = void 0, e[se] = null, e[j] = void 0, e.__e = void 0), h(n) && (n[M] = void 0);
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
function H(e, t) {
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
function U(e, t = 1, n = !1) {
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
	q === null && (K === null && me(e), pe()), On && fe(e);
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
	if (e & 4) ht === null ? yt.ensure().schedule(r) : ht.push(r);
	else if (t !== null) {
		try {
			Yn(r);
		} catch (e) {
			throw vn(r), e;
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
	return K !== null && !An;
}
function rn(e) {
	let t = tn(8, null);
	return Ve(t, b), t.teardown = e, t;
}
function W(e) {
	$t("$effect");
	var t = q.f;
	if (!K && t & 32 && z !== null && !z.i) {
		var n = z;
		(n.e ??= []).push(e);
	} else return an(e);
}
function an(e) {
	return tn(4 | ee, e);
}
function on(e) {
	return $t("$effect.pre"), tn(8 | ee, e);
}
function sn(e) {
	yt.ensure();
	let t = tn(64 | O, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? xn(t, () => {
			vn(t), n(void 0);
		}) : (vn(t), n(void 0));
	});
}
function cn(e) {
	return tn(4, e);
}
function G(e, t) {
	var n = z, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = dn(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = q;
			try {
				Mn(n.parent), Y(t);
			} finally {
				Mn(n);
			}
		}
	});
}
function ln() {
	var e = z;
	dn(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && Ve(n, S), Wn(n) && Yn(n), t.ran = !1;
		}
	});
}
function un(e) {
	return tn(re | O, e);
}
function dn(e, t = 0) {
	return tn(8 | t, e);
}
function fn(e, t = [], n = [], r = []) {
	Xe(r, t, n, (t) => {
		tn(8, () => {
			e(...t.map(J));
		});
	});
}
function pn(e, t = 0) {
	return tn(16 | t, e);
}
function mn(e) {
	return tn(32 | O, e);
}
function hn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = On, n = K;
		kn(!0), jn(null);
		try {
			t.call(null);
		} finally {
			kn(e), jn(n);
		}
	}
}
function gn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ge(() => {
			e.abort(ce);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : vn(n, t), n = r;
	}
}
function _n(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || vn(t), t = n;
	}
}
function vn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (yn(e.nodes.start, e.nodes.end), n = !0), e.f |= E, gn(e, t && !n), Jn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	hn(e), e.f ^= E, e.f |= w;
	var i = e.parent;
	i !== null && i.first !== null && bn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function yn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ qt(e);
		e.remove(), e = n;
	}
}
function bn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function xn(e, t, n = !0) {
	var r = [];
	Sn(e, r, !0);
	var i = () => {
		n && vn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Sn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				Sn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Cn(e) {
	wn(e, !0);
}
function wn(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (Ve(e, x), yt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			wn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Tn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ qt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var En = null, Dn = !1, On = !1;
function kn(e) {
	On = e;
}
var K = null, An = !1;
function jn(e) {
	K = e;
}
var q = null;
function Mn(e) {
	q = e;
}
var Nn = null;
function Pn(e) {
	K !== null && (Nn ??= /* @__PURE__ */ new Set()).add(e);
}
var Fn = null, In = 0, Ln = null;
function Rn(e) {
	Ln = e;
}
var zn = 1, Bn = 0, Vn = Bn;
function Hn(e) {
	Vn = e;
}
function Un() {
	return ++zn;
}
function Wn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~k), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Wn(a) && ot(a), a.wv > e.wv) return !0;
		}
		t & 512 && dt === null && Ve(e, b);
	}
	return !1;
}
function Gn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Nn !== null && Nn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Gn(a, t, !1) : t === a && (n ? Ve(a, x) : a.f & 1024 && Ve(a, S), Et(a));
	}
}
function Kn(e) {
	var t = Fn, n = In, r = Ln, i = K, a = Nn, o = z, s = An, c = Vn, l = e.f;
	Fn = null, In = 0, Ln = null, K = l & 96 ? null : e, Nn = null, Ae(e.ctx), An = !1, Vn = ++Bn, e.ac !== null && (Ge(() => {
		e.ac.abort(ce);
	}), e.ac = null);
	try {
		e.f |= ne;
		var u = e.fn, d = u();
		e.f |= T;
		var f = e.deps, p = B?.is_fork;
		if (Fn !== null) {
			var m;
			if (p || Jn(e, In), f !== null && In > 0) for (f.length = In + Fn.length, m = 0; m < Fn.length; m++) f[In + m] = Fn[m];
			else e.deps = f = Fn;
			if (nn() && e.f & 512) for (m = In; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && In < f.length && (Jn(e, In), f.length = In);
		if (Ne() && Ln !== null && !An && f !== null && !(e.f & 6146)) for (m = 0; m < Ln.length; m++) Gn(Ln[m], e);
		if (i !== null && i !== e) {
			if (Bn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Bn;
			if (t !== null) for (let e of t) e.rv = Bn;
			Ln !== null && (r === null ? r = Ln : r.push(...Ln));
		}
		return e.f & 8388608 && (e.f ^= ie), d;
	} catch (e) {
		return Re(e);
	} finally {
		e.f ^= ne, Fn = t, In = n, Ln = r, K = i, Nn = a, Ae(o), An = s, Vn = c;
	}
}
function qn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var i = o.call(n, e);
		if (i !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[i] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Fn === null || !s.call(Fn, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~k), c.v !== r && He(c), c.ac !== null && Ge(() => {
			c.ac.abort(ce), c.ac = null, Ve(c, x);
		}), st(c), Jn(c, 0);
	}
}
function Jn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) qn(e, n[r]);
}
function Yn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Ve(e, b);
		var n = q, r = Dn;
		q = e, Dn = (t & 96) == 0;
		try {
			t & 16777232 ? _n(e) : gn(e), hn(e);
			var i = Kn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = zn;
		} finally {
			Dn = r, q = n;
		}
	}
}
async function Xn() {
	await Promise.resolve(), bt();
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (En?.add(e), K !== null && !An && !(q !== null && q.f & 16384) && (Nn === null || !Nn.has(e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Bn && (e.rv = Bn, Fn === null && n !== null && n[In] === e ? In++ : Fn === null ? Fn = [e] : Fn.push(e));
		else {
			K.deps ??= [], s.call(K.deps, e) || K.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : s.call(r, K) || r.push(K);
		}
	}
	if (On && At.has(e)) return At.get(e);
	if (t) {
		var i = e;
		if (On) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Qn(i)) && (a = at(i)), At.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !An && K !== null && (Dn || (K.f & 512) != 0), c = (i.f & T) === 0;
		Wn(i) && (o && (i.f |= 512), ot(i)), o && !c && (ct(i), Zn(i));
	}
	if (dt?.has(e)) return dt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Zn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ct(t), Zn(t));
}
function Qn(e) {
	if (e.v === r) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (At.has(t) || t.f & 2 && Qn(t)) return !0;
	return !1;
}
function Y(e) {
	var t = An;
	try {
		return An = !0, e();
	} finally {
		An = t;
	}
}
function $n(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ae in e) er(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ae in n && er(n);
		}
	}
}
function er(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			er(e[n], t);
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
var tr = Symbol("events"), nr = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function ir(e, t, n) {
	(t[tr] ??= {})[e] = n;
}
function ar(e) {
	for (var t = 0; t < e.length; t++) nr.add(e[t]);
	for (var n of rr) n(e);
}
var or = null;
function sr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	or = e;
	var o = 0, s = or === e && e[tr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[tr] = t;
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
		jn(null), Mn(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[tr]?.[r];
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
			e[tr] = t, delete e.currentTarget, jn(d), Mn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var cr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function lr(e) {
	return cr?.createHTML(e) ?? e;
}
function ur(e) {
	var t = Zt("template");
	return t.innerHTML = lr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function dr(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function fr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (P) return dr(F, null), F;
		i === void 0 && (i = ur(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Kt(i)));
		var t = r || Vt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Kt(t), s = t.lastChild;
			dr(o, s);
		} else dr(t, t);
		return t;
	};
}
function pr(e, t) {
	if (P) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = F), L();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var mr = ["touchstart", "touchmove"];
function hr(e) {
	return mr.includes(e);
}
function gr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[M] ??= e.nodeValue) && (e[M] = n, e.nodeValue = `${n}`);
}
function _r(e, t) {
	return yr(e, t);
}
var vr = /* @__PURE__ */ new Map();
function yr(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	Wt();
	var u = void 0, d = sn(() => {
		var s = r ?? t.appendChild(Gt());
		Je(s, { pending: () => {} }, (t) => {
			je({});
			var r = z;
			if (o && (r.c = o), a && (i.$$events = a), P && dr(t, null), u = e(t, i) || {}, P && (q.nodes.end = F, F === null || F.nodeType !== 8 || F.data !== "]")) throw xe(), n;
			Me();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = hr(r);
					for (let e of [t, document]) {
						var a = vr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), vr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, sr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(nr)), rr.add(f), () => {
			for (var e of d) for (let r of [t, document]) {
				var n = vr.get(r), i = n.get(e);
				--i == 0 ? (r.removeEventListener(e, sr), n.delete(e), n.size === 0 && vr.delete(r)) : n.set(e, i);
			}
			rr.delete(f), s !== r && s.parentNode?.removeChild(s);
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
			if (n) Cn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Cn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (vn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Tn(r, t), t.append(Gt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else vn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), xn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (vn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = B, r = Xt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Gt();
			i.append(a), this.#n.set(e, {
				effect: mn(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, mn(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else P && (this.anchor = F), this.#a(n);
	}
};
function Sr(t) {
	z === null && le("onMount"), e && z.l !== null ? Cr(z).m.push(t) : W(() => {
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
	pn(() => {
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
		xn(n, () => {
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
		r?.has(a) ? (a.f |= te, Tn(a, document.createDocumentFragment())) : vn(t[i], n);
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
	var d = null, f = /* @__PURE__ */ rt(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Ar(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= te, Mr(d, null, s)) : Cn(d) : xn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: pn(() => {
			p = J(f);
			var e = p.length;
			let a = !1;
			P && Ee(s) === "[!" != (e === 0) && (s = Te(), I(s), Ce(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = B, v = Xt(), y = 0; y < e; y += 1) {
				P && F.nodeType === 8 && F.data === "]" && (s = F, a = !0, Ce(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Ft(S.v, b), S.i && Ft(S.i, y), v && u.unskip_effect(S.e)) : (S = jr(l, h ? s : Dr ??= Gt(), b, x, y, i, t, n), h || (S.e.f |= te), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = mn(() => o(s)) : (d = mn(() => o(Dr ??= Gt())), d.f |= te)), e > c.size && de("", "", ""), P && e > 0 && I(Te()), !h) if (m.set(u, c), v) {
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
		if (_.f & 8192 && (Cn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= te, _ === l) Mr(_, null, n);
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
	var c = o & 1 ? o & 16 ? Mt(n) : /* @__PURE__ */ Pt(n, !1, !1) : null, l = o & 2 ? Mt(i) : null;
	return {
		v: c,
		i: l,
		e: mn(() => (a(t, c ?? n, l ?? i, s), () => {
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
	var o = e[A];
	if (P || o !== n || o === void 0) {
		var s = Fr(n, r, a);
		(!P || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[A] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Lr = Symbol("is custom element"), Rr = Symbol("is html"), zr = N ? "link" : "LINK";
function Br(e, t, n, r) {
	var i = Vr(e);
	P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === zr) || i[t] !== (i[t] = n) && (t === "loading" && (e[oe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vr(e) {
	return e[se] ??= {
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
	return e === t || e?.[ae] === t;
}
function Gr(e = {}, t, n, r) {
	var i = z.r, a = q;
	return cn(() => {
		var o, s;
		return dn(() => {
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
	let r = () => $n(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ et(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && on(() => {
		qr(t, r), v(n.b);
	}), W(() => {
		let e = Y(() => n.m.map(_));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && W(() => {
		qr(t, r), v(n.a);
	});
}
function qr(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
var Jr = !0, Yr = "uplot", Xr = "u-hz", Zr = "u-vt", Qr = "u-title", $r = "u-wrap", ei = "u-under", ti = "u-over", ni = "u-axis", ri = "u-off", ii = "u-select", ai = "u-cursor-x", oi = "u-cursor-y", si = "u-cursor-pt", ci = "u-legend", li = "u-live", ui = "u-inline", di = "u-series", fi = "u-marker", pi = "u-label", mi = "u-value", hi = "width", gi = "height", _i = "top", vi = "bottom", yi = "left", bi = "right", xi = "#000", Si = "#0000", Ci = "mousemove", wi = "mousedown", Ti = "mouseup", Ei = "mouseenter", Di = "mouseleave", Oi = "dblclick", ki = "resize", Ai = "scroll", ji = "change", Mi = "dppxchange", Ni = "--", Pi = typeof window < "u", Fi = Pi ? document : null, Ii = Pi ? window : null, Li = Pi ? navigator : null, X, Ri;
function zi() {
	let e = devicePixelRatio;
	X != e && (X = e, Ri && ea(ji, Ri, zi), Ri = matchMedia(`(min-resolution: ${X - .001}dppx) and (max-resolution: ${X + .001}dppx)`), $i(ji, Ri, zi), Ii.dispatchEvent(new CustomEvent(Mi)));
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
function Z(e, t) {
	return e ?? t;
}
function ha(e, t, n) {
	for (t = Z(t, 0), n = Z(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function ga(e, t, n) {
	let r = n.min, i = n.max, a = Z(r.pad, 0), o = Z(i.pad, 0), s = Z(r.hard, -Na), c = Z(i.hard, Na), l = Z(r.soft, Na), u = Z(i.soft, -Na), d = Z(r.mode, 0), f = Z(i.mode, 0), p = t - e, m = ka(p), h = Ea(xa(e), xa(t)), g = xa(ka(h) - m);
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
function Q(e) {
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
], Po = Za(10, -32, 0, No), Fo = Za(10, 0, 32, No), Io = Fo.filter(Mo), Lo = Po.concat(Fo), Ro = "{YYYY}", zo = "\n{YYYY}", Bo = "{M}/{D}", Vo = "\n{M}/{D}", Ho = "\n{M}/{D}/{YY}", Uo = "{h}:{mm}{aa}", Wo = "\n{h}:{mm}{aa}", Go = ":{ss}", $ = null;
function Ko(e) {
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
			zo,
			$,
			$,
			$,
			$,
			$,
			1
		],
		[
			i,
			Bo,
			zo,
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
			Ho,
			$,
			Vo,
			$,
			$,
			$,
			1
		],
		[
			n,
			Uo,
			Ho,
			$,
			Vo,
			$,
			$,
			$,
			1
		],
		[
			t,
			Go,
			"\n{M}/{D}/{YY} {h}:{mm}{aa}",
			$,
			"\n{M}/{D} {h}:{mm}{aa}",
			$,
			Wo,
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
			Wo,
			$,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = Ja(g * e, 3), v = ns(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = Ja(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : Ja(ns(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(Ca(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = ns(c + r * a, l + n * a, 1), s = o - t(Ja(o * e, 3));
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
var [qo, Jo, Yo] = Ko(1), [Xo, Zo, Qo] = Ko(.001);
Za(2, -53, 53, [1]);
function $o(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function es(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function ts(e, t) {
	let n = ko(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function ns(e, t, n) {
	return new Date(e, t, n);
}
function rs(e, t) {
	return t(e);
}
var is = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function as(e, t) {
	return (n, r, i, a) => a == null ? Ni : t(e(r));
}
function os(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function ss(e, t) {
	return e.series[t].fill(e, t);
}
var cs = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: La,
	markers: {
		show: !0,
		width: 2,
		stroke: os,
		fill: ss,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function ls(e, t) {
	let n = e.cursor.points, r = Wi(), i = n.size(e, t);
	Hi(r, hi, i), Hi(r, gi, i);
	let a = i / -2;
	Hi(r, "marginLeft", a), Hi(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Hi(r, "borderWidth", o), r;
}
function us(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function ds(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function fs(e, t) {
	return e.series[t].points.size;
}
var ps = [0, 0];
function ms(e, t, n) {
	return ps[0] = t, ps[1] = n, ps;
}
function hs(e, t, n, r = !0) {
	return (e) => {
		e.button == 0 && (!r || e.target == t) && n(e);
	};
}
function gs(e, t, n, r = !0) {
	return (e) => {
		(!r || e.target == t) && n(e);
	};
}
var _s = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: ms,
	points: {
		one: !1,
		show: ls,
		size: fs,
		width: 0,
		stroke: ds,
		fill: us
	},
	bind: {
		mousedown: hs,
		mouseup: hs,
		click: hs,
		dblclick: hs,
		mousemove: gs,
		mouseleave: gs,
		mouseenter: gs
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
}, vs = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, ys = uo({}, vs, { filter: za }), bs = uo({}, ys, { size: 10 }), xs = uo({}, vs, { show: !1 }), Ss = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", Cs = "bold 12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ws = 1.5, Ts = {
	show: !0,
	scale: "x",
	stroke: xi,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: Cs,
	side: 2,
	grid: ys,
	ticks: bs,
	border: xs,
	font: Ss,
	lineGap: ws,
	rotate: 0
}, Es = "Value", Ds = "Time", Os = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: Na,
	max: -Infinity,
	idxs: []
};
function ks(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : va(e));
}
function As(e, t, n, r, i, a, o) {
	let s = [], c = Ya.get(i) || 0;
	n = o ? n : Ja(Ka(n, i), c);
	for (let e = n; e <= r; e = Ja(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function js(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = Da(c, Sa((c == 10 ? ka : Aa)(n))), c == 10 && (i = Lo[ta(i, Lo)]);
	let l = n, u = i * c;
	c == 10 && (u = Lo[ta(u, Lo)]);
	do
		s.push(l), l += i, c == 10 && !Ya.has(l) && (l = Ja(l, Ya.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = Lo[ta(u, Lo)]));
	while (l <= r);
	return s;
}
function Ms(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? js(e, t, Ea(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? js(e, t, Ea(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Ns = /./, Ps = /[12357]/, Fs = /[125]/, Is = /1/, Ls = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Rs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Ns : c(7, o) - u >= l ? Ps : c(5, o) - u >= l ? Fs : Is;
	if (d == Is) {
		let e = xa(c(1, o) - u);
		if (e < l) return Ls(t.slice().reverse(), s.distr, d, wa(l / e)).reverse();
	}
	return Ls(t, s.distr, d, 1);
}
function zs(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = xa(c(1, o) - c(2, o));
	return l < s ? Ls(t.slice().reverse(), 3, Ns, wa(s / l)).reverse() : t;
}
function Bs(e, t, n, r) {
	return r == null ? Ni : t == null ? "" : va(t);
}
var Vs = {
	show: !0,
	scale: "y",
	stroke: xi,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: Cs,
	side: 3,
	grid: ys,
	ticks: bs,
	border: xs,
	font: Ss,
	lineGap: ws,
	rotate: 0
};
function Hs(e, t) {
	return Ja((3 + (e || 1) * 2) * t, 3);
}
function Us(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = xa(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * X);
	return r[1] - r[0] <= o;
}
var Ws = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: Na,
	max: -Infinity
}, Gs = (e, t, n, r, i) => i, Ks = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Gs,
	alpha: 1,
	facets: [uo({}, Ws, { scale: "x" }), uo({}, Ws, { scale: "y" })]
}, qs = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Gs,
	alpha: 1,
	points: {
		show: Us,
		filter: null
	},
	values: null,
	min: Na,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Js(e, t, n, r, i) {
	return n / 10;
}
var Ys = {
	time: Jr,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, Xs = uo({}, Ys, {
	time: !1,
	ori: 1
}), Zs = {};
function Qs(e, t) {
	let n = Zs[e];
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
	}, e != null && (Zs[e] = n)), n;
}
var $s = 1, ec = 2;
function tc(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, uc, fc, mc, gc, vc) : n(i, c, l, u, d, _, g, p, f, h, m, dc, pc, hc, _c, yc);
}
function nc(e, t) {
	let n = 0, r = 0, i = Z(e.bands, $a);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function rc(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function ic(e, t, n, r, i, a) {
	return tc(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? fc : pc, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function ac(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? mc : hc, c = n;
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
function oc(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function sc(e, t, n, r, i, a, o) {
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
function cc(e) {
	return e == 0 ? Ra : e == 1 ? Ca : (t) => Ga(t, e);
}
function lc(e) {
	let t = e == 0 ? uc : dc, n = e == 0 ? (e, t, n, r, i, a) => {
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
var uc = (e, t, n) => {
	e.moveTo(t, n);
}, dc = (e, t, n) => {
	e.moveTo(n, t);
}, fc = (e, t, n) => {
	e.lineTo(t, n);
}, pc = (e, t, n) => {
	e.lineTo(n, t);
}, mc = lc(0), hc = lc(1), gc = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, _c = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, vc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, yc = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function bc(e) {
	return (e, t, n, r, i) => tc(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = uc, v = gc) : (_ = dc, v = _c);
		let y = Ja(g.width * X, 3), b = (g.size - g.width) / 2 * X, x = Ja(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		mc(C, w - x, T - x, E + x * 2, D + x * 2);
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
function xc(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var Sc = xc(fc), Cc = xc(pc);
function wc(e) {
	let t = Z(e?.alignGaps, 0);
	return (e, n, r, i) => tc(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = aa(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = fc, b = Sc) : (y = pc, b = Cc);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: $s
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
		let [T, E] = nc(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...sc(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = ac(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [ic(e, n, r, i, C, -1), ic(e, n, r, i, C, 1)] : ic(e, n, r, i, C, E)), S;
	});
}
function Tc(e) {
	let t = Z(e.align, 1), n = Z(e.ascDesc, !1), r = Z(e.alignGaps, 0), i = Z(e.extend, !1);
	return (e, a, o, s) => tc(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = aa(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? fc : pc, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: $s
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
		let [re, ie] = nc(e, a);
		if (c.fill != null || re != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, re));
			w(t, ne, n), w(t, k, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...sc(l, u, o, s, D, S, r));
			let f = c.width * X / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = ac(i, d.ori, h, g, _, v);
		}
		return ie != 0 && (T.band = ie == 2 ? [ic(e, a, o, s, E, -1), ic(e, a, o, s, E, 1)] : ic(e, a, o, s, E, ie)), T;
	});
}
function Ec(e, t, n, r, i, a, o = Na) {
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
function Dc(e) {
	e ||= Qa;
	let t = Z(e.size, [
		.6,
		Na,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = Q(i), o = 1 - t[0], s = Z(t[1], Na), c = Z(t[2], 1), l = Z(e.disp, Qa), u = Z(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => tc(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * X, O = s * X, ee = c * X, te, k;
		_.ori == 0 ? [te, k] = a(e, t) : [k, te] = a(e, t);
		let ne = _.dir * (_.ori == 0 ? 1 : -1), re = _.ori == 0 ? mc : hc, ie = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ae = Z(e.bands, $a).find((e) => e.series[0] == t), oe = ae == null ? 0 : ae.dir, se = m.fillTo(e, t, m.min, m.max, oe), A = T(b(se, v, w, S)), j, M, ce, N = C, le = T(m.width * X), ue = !1, de = null, fe = null, pe = null, me = null;
		d != null && (le == 0 || f != null) && (ue = !0, de = d.values(e, t, i, p), fe = /* @__PURE__ */ new Map(), new Set(de).forEach((e) => {
			e != null && fe.set(e, new Path2D());
		}), le > 0 && (pe = f.values(e, t, i, p), me = /* @__PURE__ */ new Map(), new Set(pe).forEach((e) => {
			e != null && me.set(e, new Path2D());
		})));
		let { x0: he, size: ge } = l;
		if (he != null && ge != null) {
			E = 1, h = he.values(e, t, i, p), he.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = ge.values(e, t, i, p);
			M = ge.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), N = Ec(h, g, y, _, C, x, N), ce = N - M + D;
		} else N = Ec(h, g, y, _, C, x, N), ce = N * o + D, M = N - ce;
		ce < 1 && (ce = 0), le >= M / 2 && (le = 0), ce < 5 && (T = Ra);
		let _e = ce > 0, ve = N - ce - (_e ? le : 0);
		M = T(Fa(ve, ee, O)), j = (E == 0 ? M / 2 : E == ne ? 0 : M) - E * ne * ((E == 0 ? D / 2 : 0) + (_e ? le / 2 : 0));
		let ye = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, be = ue ? null : new Path2D(), xe = null;
		if (ae != null) xe = e.data[ae.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), xe = n.values(e, t, i, p));
		}
		let Se = te * M, P = k * M;
		for (let n = ne == 1 ? i : p; n >= i && n <= p; n += ne) {
			let r = g[n];
			if (r == null) continue;
			if (xe != null) {
				let e = xe[n] ?? 0;
				if (r - e == 0) continue;
				A = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(Z(r, se), v, w, S), o = T(i - j), s = T(Ea(a, A)), c = T(Ta(a, A)), u = s - c;
			if (r != null) {
				let i = r < 0 ? P : Se, a = r < 0 ? Se : P;
				ue ? (le > 0 && pe[n] != null && re(me.get(pe[n]), o, c + Sa(le / 2), M, Ea(0, u - le), i, a), de[n] != null && re(fe.get(de[n]), o, c + Sa(le / 2), M, Ea(0, u - le), i, a)) : re(be, o, c + Sa(le / 2), M, Ea(0, u - le), i, a), ie(e, t, n, o - le / 2, c, M + le, u);
			}
		}
		return le > 0 ? ye.stroke = ue ? me : be : ue || (ye._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, ye.width = 0), ye.fill = ue ? fe : be, ye;
	});
}
function Oc(e, t) {
	let n = Z(t?.alignGaps, 0);
	return (t, r, i, a) => tc(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = aa(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = uc, S = fc, x = vc) : (b = dc, S = pc, x = yc);
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
			flags: $s
		}, ee = O.stroke, [te, k] = nc(t, r);
		if (o.fill != null || te != 0) {
			let e = O.fill = new Path2D(ee), n = y(o.fillTo(t, r, o.min, o.max, te));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...sc(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = ac(e, l.ori, p, m, h, g);
		}
		return k != 0 && (O.band = k == 2 ? [ic(t, r, i, a, ee, -1), ic(t, r, i, a, ee, 1)] : ic(t, r, i, a, ee, k)), O;
	});
}
function kc(e) {
	return Oc(Ac, e);
}
function Ac(e, t, n, r, i, a) {
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
var jc = /* @__PURE__ */ new Set();
function Mc() {
	for (let e of jc) e.syncRect(!0);
}
Pi && ($i(ki, Ii, Mc), $i(Ai, Ii, Mc, !0), $i(Mi, Ii, () => {
	Jc.pxRatio = X;
}));
var Nc = wc(), Pc = bc();
function Fc(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Lc(e, r, t, n));
}
function Ic(e, t) {
	return e.map((e, n) => n == 0 ? {} : uo({}, t, e));
}
function Lc(e, t, n, r) {
	return uo({}, t == 0 ? n : r, e);
}
function Rc(e, t, n) {
	return t == null ? eo : [t, n];
}
var zc = Rc;
function Bc(e, t, n) {
	return t == null ? eo : ma(t, n, ua, !0);
}
function Vc(e, t, n, r) {
	return t == null ? eo : ca(t, n, e.scales[r].log, !1);
}
var Hc = Vc;
function Uc(e, t, n, r) {
	return t == null ? eo : la(t, n, e.scales[r].log, !1);
}
var Wc = Uc;
function Gc(e, t, n, r, i) {
	let a = Ea(Pa(e), Pa(t)), o = t - e, s = ta(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Ya.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function Kc(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = Ca((n = +r) * X)) + "px"), [
		e,
		t,
		n
	];
}
function qc(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = Ja(e[2] * X, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Jc(e, t, n) {
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
	let l = r.root = Wi(Yr);
	if (e.id != null && (l.id = e.id), Bi(l, e.class), e.title) {
		let t = Wi(Qr, l);
		t.textContent = e.title;
	}
	let u = Ui("canvas"), d = r.ctx = u.getContext("2d"), f = Wi($r, l);
	$i("click", f, (e) => {
		e.target === m && (W != en || an != tn) && sn.click(r, e);
	}, !0);
	let p = r.under = Wi(ei, f);
	f.appendChild(u);
	let m = r.over = Wi(ti, f);
	e = lo(e);
	let h = +Z(e.pxAlign, 1), g = cc(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Fc(e.series || [], Os, qs, !1) : Ic(e.series || [null], Ks), y = r.axes = Fc(e.axes || [], Ts, Vs, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = Q(e.fill || null), e.dir = Z(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: Bt,
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
				n = b[t] = uo({}, t == S ? Ys : Xs, r), n.key = t;
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
				n.range = Q(a || (e ? zc : t == S ? n.distr == 3 ? Hc : n.distr == 4 ? Wc : Rc : n.distr == 3 ? Vc : n.distr == 4 ? Uc : Bc)), n.auto = Q(!o && n.auto), n.clamp = Q(n.clamp || Js), n._min = n._max = null, n.valToPct = T(n);
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
	let ne = e.tzDate || ((e) => new Date(Ca(e / _))), re = e.fmtDate || ko, ie = _ == 1 ? Yo(ne) : Qo(ne), ae = es(ne, $o(_ == 1 ? Jo : Zo, re)), oe = as(ne, rs(is, re)), se = [], A = r.legend = uo({}, cs, e.legend), j = r.cursor = uo({}, _s, { drag: { y: i == 2 } }, e.cursor), M = A.show, ce = j.show, N = A.markers;
	A.idxs = se, N.width = Q(N.width), N.dash = Q(N.dash), N.stroke = Q(N.stroke), N.fill = Q(N.fill);
	let le, ue, de, fe = [], pe = [], me, he = !1, ge = {};
	if (A.live) {
		let e = v[1] ? v[1].values : null;
		he = e != null, me = he ? e(r, 1, 0) : { _: 0 };
		for (let e in me) ge[e] = Ni;
	}
	if (M) if (le = Ui("table", ci, l), de = Ui("tbody", null, le), A.mount(r, le), he) {
		ue = Ui("thead", null, le, de);
		let e = Ui("tr", null, ue);
		for (var _e in Ui("th", null, e), me) Ui("th", pi, e).textContent = _e;
	} else Bi(le, ui), A.live && Bi(le, li);
	let ve = { show: !0 }, ye = { show: !1 };
	function be(e, t) {
		if (t == 0 && (he || !A.live || i == 2)) return eo;
		let n = [], a = Ui("tr", di, de, de.childNodes[t]);
		Bi(a, e.class), e.show || Bi(a, ri);
		let o = Ui("th", null, a);
		if (N.show) {
			let e = Wi(fi, o);
			if (t > 0) {
				let n = N.width(r, t);
				n && (e.style.border = n + "px " + N.dash(r, t) + " " + N.stroke(r, t)), e.style.background = N.fill(r, t);
			}
		}
		let s = Wi(pi, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (N.show || (s.style.color = e.width > 0 ? N.stroke(r, t) : N.fill(r, t)), Se("click", o, (t) => {
			if (j._lock) return;
			We(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != A.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && mn(r, e ? r == n ? ve : ye : ve, !0, J.setSeries);
				});
			} else mn(n, { show: !e.show }, !0, J.setSeries);
		}, !1), qe && Se(Ei, o, (t) => {
			j._lock || (We(t), mn(v.indexOf(e), Sn, !0, J.setSeries));
		}, !1)), me) {
			let e = Ui("td", mi, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let xe = /* @__PURE__ */ new Map();
	function Se(e, t, n, i = !0) {
		let a = xe.get(t) || {}, o = j.bind[e](r, t, n, i);
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
		(n || e != r.width || t != r.height) && ze(e, t), Vt(!1), Pe = !0, Ne = !0, Kt();
	}
	function ze(e, t) {
		r.width = Ce = I = e, r.height = F = L = t, R = we = 0, He(), Ue();
		let n = r.bbox;
		ke = n.left = Ga(R * X, .5), z = n.top = Ga(we * X, .5), Ae = n.width = Ga(I * X, .5), je = n.height = Ga(L * X, .5);
	}
	function Be() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = Rt(t), i = zt(t);
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
	if (j.dataIdx == null) {
		let e = j.hover, n = e.skip = new Set(e.skip ?? []);
		n.add(void 0);
		let r = e.prox = Q(e.prox), i = e.bias ??= 0;
		j.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? Na, u = l >= 0 && l < Na, d = D.ori == 0 ? I : L, f = j.left, p = t[0], m = t[a];
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
		j.event = e;
	};
	j.idxs = se, j._lock = !1;
	let Ge = j.points;
	Ge.show = Q(Ge.show), Ge.size = Q(Ge.size), Ge.stroke = Q(Ge.stroke), Ge.width = Q(Ge.width), Ge.fill = Q(Ge.fill);
	let Ke = r.focus = uo({}, e.focus || { alpha: .3 }, j.focus), qe = Ke.prox >= 0, Je = qe && Ge.one, Ye = [], Xe = [], Ze = [];
	function Qe(e, t) {
		let n = Ge.show(r, t);
		if (n instanceof HTMLElement) return Bi(n, si), Bi(n, e.class), Ki(n, -10, -10, I, L), m.insertBefore(n, Ye[t]), n;
	}
	function $e(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? io(n) ? as(ne, rs(n, re)) : n || oe : n || Bs, e.label = e.label || (t ? Ds : Es);
		}
		if (Je || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Nc || Ba, e.fillTo = Q(e.fillTo || rc), e.pxAlign = +Z(e.pxAlign, h), e.pxRound = cc(e.pxAlign), e.stroke = Q(e.stroke || null), e.fill = Q(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Hs(Ea(1, e.width), 1), n = e.points = uo({}, {
				size: t,
				width: Ea(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: Pc,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = Q(n.show), n.filter = Q(n.filter), n.fill = Q(n.fill), n.stroke = Q(n.stroke), n.paths = Q(n.paths), n.pxAlign = e.pxAlign;
		}
		if (M) {
			let n = be(e, t);
			fe.splice(t, 0, n[0]), pe.splice(t, 0, n[1]), A.values.push(null);
		}
		if (ce) {
			se.splice(t, 0, null);
			let n = null;
			Je ? t == 0 && (n = Qe(e, t)) : t > 0 && (n = Qe(e, t)), Ye.splice(t, 0, n), Xe.splice(t, 0, 0), Ze.splice(t, 0, 0);
		}
		Yn("addSeries", t);
	}
	function et(e, t) {
		t ??= v.length, e = i == 1 ? Lc(e, t, Os, qs) : Lc(e, t, {}, Ks), v.splice(t, 0, e), $e(v[t], t);
	}
	r.addSeries = et;
	function tt(e) {
		if (v.splice(e, 1), M) {
			A.values.splice(e, 1), pe.splice(e, 1);
			let t = fe.splice(e, 1)[0];
			P(null, t.firstChild), t.remove();
		}
		ce && (se.splice(e, 1), Ye.splice(e, 1)[0].remove(), Xe.splice(e, 1), Ze.splice(e, 1)), Yn("delSeries", e);
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
			e.size = Q(e.size), e.space = Q(e.space), e.rotate = Q(e.rotate), to(e.incrs) && e.incrs.forEach((e) => {
				!Ya.has(e) && Ya.set(e, Xa(e));
			}), e.incrs = Q(e.incrs || (i.distr == 2 ? Io : a ? _ == 1 ? qo : Xo : Lo)), e.splits = Q(e.splits || (a && i.distr == 1 ? ie : i.distr == 3 ? js : i.distr == 4 ? Ms : As)), e.stroke = Q(e.stroke), e.grid.stroke = Q(e.grid.stroke), e.ticks.stroke = Q(e.ticks.stroke), e.border.stroke = Q(e.border.stroke);
			let o = e.values;
			e.values = to(o) && !to(o[0]) ? Q(o) : a ? to(o) ? es(ne, $o(o, re)) : io(o) ? ts(ne, o) : o || ae : o || ks, e.filter = Q(e.filter || (i.distr >= 3 && i.log == 10 ? Rs : i.distr == 3 && i.log == 2 ? zs : za)), e.font = Kc(e.font), e.labelFont = Kc(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (nt[t] = !0, e._el = Wi(ni, f));
		}
	}
	function it(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? Ca(Ts.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? Ca(Vs.size / 2) : 0), l;
	}
	let at = r.padding = (e.padding || [
		it,
		it,
		it,
		it
	]).map((e) => Q(Z(e, it))), ot = r._padding = at.map((e, t) => e(r, t, nt, 0)), st, ct = null, lt = null, B = i == 1 ? v[0].idxs : null, ut = null, dt = !1;
	function ft(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			st = 0;
			for (let e = 1; e < v.length; e++) st += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), ut = t[0], st = ut.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(st);
				for (let e = 0; e < st; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (Vt(!0), Yn("setData"), O == 2 && (Pe = !0), n !== !1) {
			let e = D;
			e.auto(r, dt) ? pt() : pn(S, e.min, e.max), Fe ||= j.left >= 0, Le = !0, Kt();
		}
	}
	r.setData = ft;
	function pt() {
		dt = !0;
		let e, n;
		i == 1 && (st > 0 ? (ct = B[0] = 0, lt = B[1] = st - 1, e = t[0][ct], n = t[0][lt], O == 2 ? (e = ct, n = lt) : e == n && (O == 3 ? [e, n] = ca(e, e, D.log, !1) : O == 4 ? [e, n] = la(e, e, D.log, !1) : D.time ? n = e + Ca(86400 / _) : [e, n] = ma(e, n, ua, !0))) : (ct = B[0] = e = null, lt = B[1] = n = null)), pn(S, e, n);
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
			let t = Z(ct, 0), r = Z(lt, i.length - 1), o = n.min == null ? sa(i, t, r, a, e.distr == 3) : [n.min, n.max];
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
		k[S] != null && Vt(!0);
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
						s.min = e[0], s.max = e[1], ct = ta(s.min, t[0]), lt = ta(s.max, t[0]), lt - ct > 1 && (t[0][ct] < s.min && ct++, t[0][lt] > s.max && lt--), n.min = ut[ct], n.max = ut[lt];
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
			ce && j.left >= 0 && (Fe = Le = !0);
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
		l = Ja(l * X, 3);
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
		wt(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), Ft(i, o), V(e, a, t)) : s & ec ? (Ft(i, o), d.clip(f), V(e, a, t)) : s & $s && (d.save(), d.clip(f), u && d.clip(u), Ft(i, o), d.restore(), V(e, a, t)) : (Ft(i, o), V(e, a, t)), (c || l || f) && d.restore();
	}
	function V(e, t, n) {
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
			o = Gc(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
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
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = It(i, c, l, s == 0 ? I : L);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => ut[e]) : p, h = a.distr == 2 ? ut[p[1]] - ut[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = wa(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function zt(e) {
		let t = !0;
		return at.forEach((n, i) => {
			let a = n(r, i, nt, e);
			a != ot[i] && (t = !1), ot[i] = a;
		}), t;
	}
	function Bt() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = Ca((t._lpos + s) * X);
				Tt(t.labelFont[0], c, "center", n == 2 ? _i : vi), d.save(), i == 1 ? (a = o = 0, d.translate(p, Ca(z + je / 2)), d.rotate((n == 3 ? -ba : ba) / 2)) : (a = Ca(ke + Ae / 2), o = p);
				let m = Ia(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? Ae : je, h = i == 0 ? ke : z, _ = t._splits, v = p.distr == 2 ? _.map((e) => ut[e]) : _, x = p.distr == 2 ? ut[_[1]] - ut[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = Ca(w * X), E = Ca((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * X), D = t._rotate * -ba / 180, O = g(t._pos * X), ee = O + (T + E) * l;
			o = i == 0 ? ee : 0, a = i == 1 ? ee : 0;
			let te = t.font[0];
			Tt(te, c, t.align == 1 ? yi : t.align == 2 ? bi : D > 0 ? yi : D < 0 ? bi : i == 0 ? "center" : n == 3 ? bi : yi, D || i == 1 ? "middle" : n == 2 ? _i : vi);
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
			S.show && Lt(ne, S.filter(r, v, e, f, x), i, n, O, T, Ja(S.width * X, 3), S.stroke(r, e), S.dash, S.cap);
			let ie = t.grid;
			ie.show && Lt(ne, ie.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? z : ke, i == 0 ? je : Ae, Ja(ie.width * X, 3), ie.stroke(r, e), ie.dash, ie.cap), C.show && Lt([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? z : ke, i == 1 ? je : Ae, Ja(C.width * X, 3), C.stroke(r, e), C.dash, C.cap);
		}
		Yn("drawAxes");
	}
	function Vt(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let Ht = !1, Ut = !1, Wt = [];
	function Gt() {
		Ut = !1;
		for (let e = 0; e < Wt.length; e++) Yn(...Wt[e]);
		Wt.length = 0;
	}
	function Kt() {
		Ht ||= (_o(H), !0);
	}
	function qt(e, t = !1) {
		Ht = !0, Ut = t, e(r), H(), t && Wt.length > 0 && queueMicrotask(Gt);
	}
	r.batch = qt;
	function H() {
		if (Me &&= (Ot(), !1), Pe &&= (Be(), !1), Ne) {
			if (Hi(p, yi, R), Hi(p, _i, we), Hi(p, hi, I), Hi(p, gi, L), Hi(m, yi, R), Hi(m, _i, we), Hi(m, hi, I), Hi(m, gi, L), Hi(f, hi, Ce), Hi(f, gi, F), u.width = Ca(Ce * X), u.height = Ca(F * X), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) if (t) {
					let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
					Hi(e, a ? "left" : "top", r - t), Hi(e, a ? "width" : "height", n), Hi(e, a ? "top" : "left", a ? we : R), Hi(e, a ? "height" : "width", a ? L : I), Vi(e, ri);
				} else Bi(e, ri);
			}), mt = ht = gt = vt = yt = bt = xt = St = _t = null, Ct = 1, Nn(!0), R != Te || we != Ee || I != De || L != Oe) {
				Vt(!1);
				let e = I / De, t = L / Oe;
				if (ce && !Fe && j.left >= 0) {
					j.left *= e, j.top *= t, Xt && Ki(Xt, Ca(j.left), 0, I, L), Zt && Ki(Zt, 0, Ca(j.top), I, L);
					for (let n = 0; n < Ye.length; n++) {
						let r = Ye[n];
						r != null && (Xe[n] *= e, Ze[n] *= t, Ki(r, wa(Xe[n]), wa(Ze[n]), I, L));
					}
				}
				if (ln.show && !Ie && ln.left >= 0 && ln.width > 0) {
					ln.left *= e, ln.width *= e, ln.top *= t, ln.height *= t;
					for (let e in In) Hi(un, e, ln[e]);
				}
				Te = R, Ee = we, De = I, Oe = L;
			}
			Yn("setSize"), Ne = !1;
		}
		Ce > 0 && F > 0 && (d.clearRect(0, 0, u.width, u.height), Yn("drawClear"), w.forEach((e) => e()), Yn("draw")), ln.show && Ie && (dn(ln), Ie = !1), ce && Fe && (q(null, !0, !1), Fe = !1), A.show && A.live && Le && (An(), Le = !1), c || (c = !0, r.status = 1, Yn("ready")), dt = !1, Ht = !1;
	}
	r.redraw = (e, t) => {
		Pe = t || !1, e === !1 ? Kt() : pn(S, D.min, D.max);
	};
	function Jt(e, n) {
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
			e == S && i.distr == 2 && st > 0 && (n.min = ta(n.min, t[0]), n.max = ta(n.max, t[0]), n.min == n.max && n.max++), k[e] = n, Me = !0, Kt();
		}
	}
	r.setScale = Jt;
	let U, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, W, an, on = !1, sn = j.drag, cn = sn.x, G = sn.y;
	ce && (j.x && (U = Wi(ai, m)), j.y && (Yt = Wi(oi, m)), D.ori == 0 ? (Xt = U, Zt = Yt) : (Xt = Yt, Zt = U), W = j.left, an = j.top);
	let ln = r.select = uo({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), un = ln.show ? Wi(ii, ln.over ? m : p) : null;
	function dn(e, t) {
		if (ln.show) {
			for (let t in e) ln[t] = e[t], t in In && Hi(un, t, e[t]);
			t !== !1 && Yn("setSelect");
		}
	}
	r.setSelect = dn;
	function fn(e) {
		if (v[e].show) M && Vi(fe[e], ri);
		else if (M && Bi(fe[e], ri), ce) {
			let t = Je ? Ye[0] : Ye[e];
			t != null && Ki(t, -10, -10, I, L);
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
			r > 0 && (e == r || e == null) && (n.show = t.show, fn(r), i == 2 ? (pn(n.facets[0].scale, null, null), pn(n.facets[1].scale, null, null)) : pn(n.scale, null, null), Kt());
		}), n !== !1 && Yn("setSeries", e, t), a && Y("setSeries", r, e, t);
	}
	r.setSeries = mn;
	function hn(e, t) {
		uo(x[e], t);
	}
	function gn(e, t) {
		e.fill = Q(e.fill || null), e.dir = Z(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function _n(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = gn, r.setBand = hn, r.delBand = _n;
	function vn(e, t) {
		v[e].alpha = t, ce && Ye[e] != null && (Ye[e].style.opacity = t), M && fe[e] && (fe[e].style.opacity = t);
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
			}), xn = e, n && Kt();
		}
	}
	M && qe && Se(Di, le, (e) => {
		j._lock || (We(e), xn != null && mn(null, Sn, !0, J.setSeries));
	});
	function wn(e, t, n) {
		let r = b[t];
		n && (e = e / X - (r.ori == 1 ? we : R));
		let i = I;
		r.ori == 1 && (i = L, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? Da(10, c) : l == 4 ? ja(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Tn(e, n) {
		return ta(wn(e, S, n), t[0], ct, lt);
	}
	r.valToIdx = (e) => ta(e, t[0]), r.posToIdx = Tn, r.posToVal = wn, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? Ae : I, n ? ke : 0) : o(e, b[t], n ? je : L, n ? z : 0), r.setCursor = (e, t, n) => {
		W = e.left, an = e.top, q(null, t, n);
	};
	function En(e, t) {
		Hi(un, yi, ln.left = e), Hi(un, hi, ln.width = t);
	}
	function Dn(e, t) {
		Hi(un, _i, ln.top = e), Hi(un, gi, ln.height = t);
	}
	let On = D.ori == 0 ? En : Dn, kn = D.ori == 1 ? En : Dn;
	function K() {
		if (M && A.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && he) continue;
			let t = A.values[e], n = 0;
			for (let r in t) pe[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function An(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			se[t] = e;
		}) : ro(e.idx) || se.fill(e.idx), A.idx = se[0]), M && A.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !he) && jn(e, se[e]);
			K();
		}
		Le = !1, t !== !1 && Yn("setLegend");
	}
	r.setLegend = An;
	function jn(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? ut : t[e], o;
		he ? o = i.values(r, e, n) ?? ge : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? ge : { _: o }), A.values[e] = o;
	}
	function q(e, n, a) {
		nn = W, rn = an, [W, an] = j.move(r, W, an), j.left = W, j.top = an, ce && (Xt && Ki(Xt, Ca(W), 0, I, L), Zt && Ki(Zt, 0, Ca(an), I, L));
		let o, s = ct > lt;
		yn = Na, bn = null;
		let c = D.ori == 0 ? I : L, l = D.ori == 1 ? I : L;
		if (W < 0 || st == 0 || s) {
			o = j.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = Ye[e];
				t != null && Ki(t, -10, -10, I, L);
			}
			qe && mn(null, Sn, !0, e == null && J.setSeries), A.live && (se.fill(o), Le = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? W : an, n = wn(e, S), o = j.idx = ta(n, t[0], ct, lt), a = ee(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = se[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = j.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (Le = Le || S != y || x != _, se[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : ee(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : te(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (qe && S != null) {
						let t = D.ori == 1 ? W : an, n = xa(Ke.dist(r, e, x, _, t));
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
		if (ln.show && on) if (e != null) {
			let [t, n] = J.scales, [r, i] = J.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
			if (cn = s._x, G = s._y, cn || G) {
				let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
				x && cn ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = ee(m(h, a), _, c, 0), y = ee(m(h + g, a), _, c, 0), On(Ta(v, y), xa(y - v))) : On(0, c), S && G ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = te(m(h, o), _, l, 0), y = te(m(h + g, o), _, l, 0), kn(Ta(v, y), xa(y - v))) : kn(0, l);
			} else Ln();
		} else {
			let e = xa(nn - Qt), t = xa(rn - $t);
			if (D.ori == 1) {
				let n = e;
				e = t, t = n;
			}
			cn = sn.x && e >= sn.dist, G = sn.y && t >= sn.dist;
			let n = sn.uni;
			n == null ? sn.x && sn.y && (cn || G) && (cn = G = !0) : cn && G && (cn = e >= n, G = t >= n, !cn && !G && (t > e ? G = !0 : cn = !0));
			let r, i;
			cn && (D.ori == 0 ? (r = en, i = W) : (r = tn, i = an), On(Ta(r, i), xa(i - r)), G || kn(0, l)), G && (D.ori == 1 ? (r = en, i = W) : (r = tn, i = an), kn(Ta(r, i), xa(i - r)), cn || On(0, c)), !cn && !G && (On(0, 0), kn(0, 0));
		}
		if (sn._x = cn, sn._y = G, e == null) {
			if (a) {
				if (Zn != null) {
					let [e, t] = J.scales;
					J.values[0] = e == null ? null : wn(D.ori == 0 ? W : an, e), J.values[1] = t == null ? null : wn(D.ori == 1 ? W : an, t);
				}
				Y(Ci, r, W, an, I, L, o);
			}
			if (qe) {
				let e = a && J.setSeries, t = Ke.prox;
				xn == null ? yn <= t && mn(bn, Sn, !0, e) : yn > t ? mn(null, Sn, !0, e) : bn != xn && mn(bn, Sn, !0, e);
			}
		}
		Le && (A.idx = o, An()), n !== !1 && Yn("setCursor");
	}
	let Mn = null;
	Object.defineProperty(r, "rect", { get() {
		return Mn ?? Nn(!1), Mn;
	} });
	function Nn(e = !1) {
		e ? Mn = null : (Mn = m.getBoundingClientRect(), Yn("syncRect", Mn));
	}
	function Pn(e, t, n, r, i, a, o) {
		j._lock || on && e != null && e.movementX == 0 && e.movementY == 0 || (Fn(e, t, n, r, i, a, o, !1, e != null), e == null ? q(t, !0, !1) : q(null, !0, !0));
	}
	function Fn(e, t, n, i, a, o, c, l, u) {
		if (Mn ?? Nn(!1), We(e), e != null) n = e.clientX - Mn.left, i = e.clientY - Mn.top;
		else {
			if (n < 0 || i < 0) {
				W = -10, an = -10;
				return;
			}
			let [e, r] = J.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = J.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? I : L, _ = D.ori == 1 ? I : L, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == Ci) && ((n <= 1 || n >= I - 1) && (n = Ga(n, I)), (i <= 1 || i >= L - 1) && (i = Ga(i, L))), l ? (Qt = n, $t = i, [en, tn] = j.move(r, n, i)) : (W = n, an = i);
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
		on = !0, cn = G = sn._x = sn._y = !1, Fn(e, t, n, i, a, o, s, !0, !1), e != null && (Se(Ti, Fi, Un, !1), Y(wi, r, en, tn, I, L, null));
		let { left: c, top: l, width: u, height: d } = ln;
		Rn = c, zn = l, Bn = u, Vn = d;
	}
	function Un(e, t, n, i, a, o, s) {
		on = sn._x = sn._y = !1, Fn(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = ln, f = u > 0 || d > 0, p = Rn != c || zn != l || Bn != u || Vn != d;
		if (f && p && dn(ln), sn.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), cn && pn(S, wn(e, S), wn(e + t, S)), G) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != Na && pn(e, wn(n + r, e), wn(n, e));
			}
			Ln();
		} else j.lock && (j._lock = !j._lock, q(t, !0, e != null));
		e != null && (P(Ti, Fi), Y(Ti, r, W, an, I, L, null));
	}
	function Wn(e, t, n, r, i, a, o) {
		if (j._lock) return;
		We(e);
		let s = on;
		if (on) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = cn, r = G) : (n = G, r = cn), n && r && (e = W <= 10 || W >= I - 10, t = an <= 10 || an >= L - 10), n && e && (W = W < en ? 0 : I), r && t && (an = an < tn ? 0 : L), q(null, !0, !0), on = !1;
		}
		W = -10, an = -10, se.fill(null), q(null, !0, !0), s && (on = s);
	}
	function Gn(e, t, n, i, a, o, s) {
		j._lock || (We(e), pt(), Ln(), e != null && Y(Oi, r, W, an, I, L, null));
	}
	function Kn() {
		y.forEach(qc), Re(r.width, r.height, !0);
	}
	$i(Mi, Ii, Kn);
	let qn = {};
	qn.mousedown = Hn, qn.mousemove = Pn, qn.mouseup = Un, qn.dblclick = Gn, qn.setSeries = (e, t, n, i) => {
		let a = J.match[2];
		n = a(r, t, n), n != -1 && mn(n, i, !0, !1);
	}, ce && (Se(wi, m, Hn), Se(Ci, m, Pn), Se(Ei, m, (e) => {
		We(e), Nn(!1);
	}), Se(Di, m, Wn), Se(Oi, m, Gn), jc.add(r), r.syncRect = Nn);
	let Jn = r.hooks = e.hooks || {};
	function Yn(e, t, n) {
		Ut ? Wt.push([
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
	let Xn = (e, t, n) => n, J = uo({
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
	}, j.sync);
	J.match.length == 2 && J.match.push(Xn), j.sync = J;
	let Zn = J.key, Qn = Qs(Zn);
	function Y(e, t, n, r, i, a, o) {
		J.filters.pub(e, t, n, r, i, a, o) && Qn.pub(e, t, n, r, i, a, o);
	}
	Qn.sub(r);
	function $n(e, t, n, r, i, a, o) {
		J.filters.sub(e, t, n, r, i, a, o) && qn[e](null, t, n, r, i, a, o);
	}
	r.pub = $n;
	function er() {
		Qn.unsub(r), jc.delete(r), xe.clear(), ea(Mi, Ii, Kn), l.remove(), le?.remove(), Yn("destroy");
	}
	r.destroy = er;
	function tr() {
		Yn("init", e, t), ft(t || e.data, !1), k[S] ? Jt(S, k[S]) : pt(), Ie = ln.show && (ln.width > 0 || ln.height > 0), Fe = Le = !0, Re(e.width, e.height);
	}
	return v.forEach($e), y.forEach(rt), n ? n instanceof HTMLElement ? (n.appendChild(l), tr()) : n(r, tr) : tr(), r;
}
Jc.assign = uo, Jc.fmtNum = va, Jc.rangeNum = ma, Jc.rangeLog = ca, Jc.rangeAsinh = la, Jc.orient = tc, Jc.pxRatio = X, Jc.join = go, Jc.fmtDate = ko, Jc.tzDate = jo, Jc.sync = Qs;
{
	Jc.addGap = oc, Jc.clipGaps = ac;
	let e = Jc.paths = { points: bc };
	e.linear = wc, e.stepped = Tc, e.bars = Dc, e.spline = kc;
}
//#endregion
//#region src/App.svelte
var Yc = /* @__PURE__ */ fr("<div class=\"error\" role=\"alert\"> <code>apx status</code> if the problem persists.</div>"), Xc = /* @__PURE__ */ fr("<article><strong> </strong><small> </small><em> </em></article>"), Zc = /* @__PURE__ */ fr("<button class=\"signals-toggle\" type=\"button\"> </button>"), Qc = /* @__PURE__ */ fr("<div class=\"attention-list\"></div> <!>", 1), $c = /* @__PURE__ */ fr("<p class=\"clear\">No active signals in this window.</p>"), el = /* @__PURE__ */ fr("<div><strong> </strong><span> </span><small> </small></div>"), tl = /* @__PURE__ */ fr("<div class=\"health-list\"></div>"), nl = /* @__PURE__ */ fr("<p class=\"clear\">No optimizer snapshots in this window yet.</p>"), rl = /* @__PURE__ */ fr("<div class=\"health-row\"><strong> </strong><span> </span><small> </small></div>"), il = /* @__PURE__ */ fr("<p class=\"clear\"> </p>"), al = /* @__PURE__ */ fr("<section class=\"overview\" aria-label=\"Gateway overview\"><div class=\"heading\"><div><p class=\"eyebrow\">LeanRelay · token efficiency</p> <h2>What needs your attention</h2></div> <span aria-live=\"polite\"> </span></div> <!> <div class=\"attention\"><div class=\"attention-heading\"><h3>Needs attention</h3><span> </span></div> <!></div> <div class=\"metrics\" aria-label=\"Token efficiency summary\"><article><span>Tokens processed</span><strong> </strong><small> </small></article> <article class=\"token-card\"><span>Verified tokens saved</span><strong> </strong><small>Explicit pre/post optimizer measurements only</small></article> <article><span>Savings coverage</span><strong> </strong><small> </small></article> <article><span>Request health</span><strong> </strong><small> </small></article></div> <div class=\"charts\"><article class=\"chart\"><div class=\"chart-heading\"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class=\"status\"> </span></div><div class=\"plot\" role=\"img\"></div></article> <article class=\"chart\"><div class=\"chart-heading\"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class=\"status\">explicit</span></div><div class=\"plot\" role=\"img\"></div></article></div> <div class=\"optimizer-grid\"><article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Optimizer health</h3><span class=\"status\"> </span></div> <!></article> <article class=\"optimizer-health\"><div class=\"attention-heading\"><h3>Measurement confidence</h3><span> </span></div> <!></article></div></section>");
function ol(e, t) {
	je(t, !1);
	let n = /* @__PURE__ */ Pt(), r = /* @__PURE__ */ Pt(), i = /* @__PURE__ */ Pt(), a = /* @__PURE__ */ Pt(), o = /* @__PURE__ */ Pt(), s = /* @__PURE__ */ Pt(), c = /* @__PURE__ */ Pt(), l = /* @__PURE__ */ Pt(), u = /* @__PURE__ */ Pt(), d = /* @__PURE__ */ Pt(), f = /* @__PURE__ */ new Set([
		"1h",
		"6h",
		"24h",
		"7d",
		"30d"
	]), p = /* @__PURE__ */ Pt("1h"), m = /* @__PURE__ */ Pt({}), h = /* @__PURE__ */ Pt({ alerts: [] }), g = [], _ = /* @__PURE__ */ Pt([]), v = /* @__PURE__ */ Pt({}), y = [], b = /* @__PURE__ */ Pt(!0), x = /* @__PURE__ */ Pt(""), S = /* @__PURE__ */ Pt(!1), C = /* @__PURE__ */ Pt(), w = /* @__PURE__ */ Pt(), T, E, D, O = (e) => new Intl.NumberFormat().format(Number(e || 0)), ee = (e) => `${Number(e || 0).toFixed(+(Number(e || 0) < 100))} ms`, te = (e, t) => Number(t || 0) ? `${(Number(e || 0) / Number(t) * 100).toFixed(0)}%` : "not measured", k = (e) => ["7d", "30d"].includes(e) ? "1h" : "1m";
	async function ne(e) {
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`request failed (${t.status})`);
		return t.json();
	}
	function re() {
		let e = document.querySelector("#window-select")?.value || J(p);
		return f.has(e) ? e : "1h";
	}
	function ie() {
		try {
			return localStorage.getItem("apx.dashboard.window") || "";
		} catch {
			return "";
		}
	}
	function ae(e) {
		try {
			localStorage.setItem("apx.dashboard.window", e);
		} catch {}
	}
	function oe(e, t) {
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
	function se() {
		let e = g.map((e) => Number(e.ts || 0)), t = g.map((e) => Number(e.tokens_in || 0)), n = g.map((e) => Number(e.tokens_out || 0)), r = y.map((e) => Number(e.ts || 0)), i = y.map((e) => Number(e.measured_tokens_saved || 0)), a = y.map((e) => Number(e.estimated_tokens_saved || 0));
		!J(C) || !J(w) || (T?.destroy(), E?.destroy(), T = new Jc(oe(J(C), [{
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
		], J(C)), E = new Jc(oe(J(w), [{
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
		], J(w)));
	}
	async function A() {
		V(b, !0), V(x, ""), V(p, re());
		try {
			let [e, t, n, r, i, a] = await Promise.all([
				ne(`/api/metrics/summary?window=${J(p)}`),
				ne(`/api/metrics/attention?window=${J(p)}`),
				ne(`/api/metrics/timeseries?window=${J(p)}&bucket=${k(J(p))}`),
				ne(`/api/metrics/efficiency?window=${J(p)}`),
				ne(`/api/metrics/efficiency/timeseries?window=${J(p)}&bucket=${k(J(p))}`),
				ne(`/api/metrics/optimizer-snapshots?window=${J(p)}`)
			]);
			V(m, e), V(h, t), g = n.series || [], V(v, r), y = i.series || [], V(_, a.snapshots || []), await Xn(), se();
		} catch (e) {
			V(x, e instanceof Error ? e.message : "Dashboard overview could not be refreshed");
		} finally {
			V(b, !1);
		}
	}
	Sr(() => {
		let e = ie();
		f.has(e) && V(p, e);
		let t = document.querySelector("#window-select");
		t && (t.value = J(p)), A();
		let n = () => {
			V(p, re()), ae(J(p)), V(S, !1), A();
		};
		t?.addEventListener("change", n);
		let r = window.setInterval(A, 1e4);
		return D = new ResizeObserver(() => se()), J(C) && D.observe(J(C)), J(w) && D.observe(J(w)), () => {
			t?.removeEventListener("change", n), window.clearInterval(r), D?.disconnect(), T?.destroy(), E?.destroy();
		};
	});
	let j = /* @__PURE__ */ Pt([]);
	G(() => J(_), () => {
		V(j, Object.values(J(_).reduce((e, t) => ((!e[t.optimizer] || Number(t.ts || 0) > Number(e[t.optimizer].ts || 0)) && (e[t.optimizer] = t), e), {})));
	}), G(() => J(v), () => {
		V(n, J(v).optimizers || []);
	}), G(() => J(v), () => {
		V(r, J(v).observed || {});
	}), G(() => (J(r), J(m)), () => {
		V(i, Number(J(r).tokens_in || J(m).totals?.tokens_in || 0) + Number(J(r).tokens_out || J(m).totals?.tokens_out || 0));
	}), G(() => J(n), () => {
		V(a, J(n).reduce((e, t) => e + Number(t.measured_tokens_saved || 0), 0));
	}), G(() => J(n), () => {
		V(o, J(n).reduce((e, t) => e + Number(t.measured_attempts || 0), 0));
	}), G(() => J(n), () => {
		V(s, J(n).reduce((e, t) => e + Number(t.attempts || 0), 0));
	}), G(() => J(m), () => {
		V(c, Number(J(m).totals?.err_5xx || 0) + Number(J(m).totals?.warn_4xx || 0));
	}), G(() => J(m), () => {
		V(l, !!J(m).totals);
	}), G(() => (J(x), J(l), J(b), J(c)), () => {
		V(u, J(x) ? J(l) ? "Stale data" : "Unavailable" : !J(l) && J(b) ? "Loading" : J(c) ? `${O(J(c))} issue${J(c) === 1 ? "" : "s"}` : "Healthy");
	}), G(() => (J(S), J(h)), () => {
		V(d, J(S) ? J(h).alerts || [] : (J(h).alerts || []).slice(0, 3));
	}), ln(), Kr();
	var M = al(), ce = H(M), N = U(H(ce), 2);
	let le;
	var ue = H(N, !0);
	R(N), R(ce);
	var de = U(ce, 2), fe = (e) => {
		var t = Yc(), n = H(t);
		we(2), R(t), fn(() => gr(n, `${J(x) ?? ""}. Retrying automatically; use `)), pr(e, t);
	};
	wr(de, (e) => {
		J(x) && e(fe);
	});
	var pe = U(de, 2), me = H(pe), he = U(H(me));
	let ge;
	var _e = H(he);
	R(he), R(me);
	var ve = U(me, 2), ye = (e) => {
		var t = Qc(), n = Jt(t);
		Or(n, 5, () => J(d), (e) => e.id, (e, t) => {
			var n = Xc();
			let r;
			var i = H(n), a = H(i, !0);
			R(i);
			var o = U(i), s = H(o, !0);
			R(o);
			var c = U(o), l = H(c);
			R(c), R(n), fn(() => {
				r = Ir(n, 1, "signal", null, r, {
					critical: J(t).severity === "critical",
					warning: J(t).severity === "warning"
				}), gr(a, (J(t), Y(() => J(t).title))), gr(s, (J(t), Y(() => J(t).detail))), gr(l, `Next: ${(J(t), Y(() => J(t).action)) ?? ""}`);
			}), pr(e, n);
		}), R(n);
		var r = U(n, 2), i = (e) => {
			var t = Zc(), n = H(t, !0);
			R(t), fn(() => {
				Br(t, "aria-expanded", J(S)), gr(n, (J(S), J(h), Y(() => J(S) ? "Show fewer signals" : `Show ${J(h).alerts.length - 3} more signal${J(h).alerts.length - 3 == 1 ? "" : "s"}`)));
			}), ir("click", t, () => V(S, !J(S))), pr(e, t);
		};
		wr(r, (e) => {
			J(h), Y(() => J(h).alerts.length > 3) && e(i);
		}), pr(e, t);
	}, be = (e) => {
		pr(e, $c());
	};
	wr(ve, (e) => {
		J(h), Y(() => J(h).alerts?.length) ? e(ye) : e(be, -1);
	}), R(pe);
	var xe = U(pe, 2), Se = H(xe), P = U(H(Se)), Ce = H(P, !0);
	R(P);
	var F = U(P), I = H(F);
	R(F), R(Se);
	var L = U(Se, 2), Te = U(H(L)), Ee = H(Te, !0);
	R(Te), we(), R(L);
	var De = U(L, 2), Oe = U(H(De)), ke = H(Oe, !0);
	R(Oe);
	var z = U(Oe), Ae = H(z);
	R(z), R(De);
	var Ne = U(De, 2), Pe = U(H(Ne));
	let Fe;
	var Ie = H(Pe, !0);
	R(Pe);
	var Le = U(Pe), Re = H(Le);
	R(Le), R(Ne), R(xe);
	var ze = U(xe, 2), Be = H(ze), Ve = H(Be), He = U(H(Ve)), Ue = H(He, !0);
	R(He), R(Ve);
	var We = U(Ve);
	Gr(We, (e) => V(C, e), () => J(C)), R(Be);
	var Ge = U(Be, 2), Ke = U(H(Ge));
	Gr(Ke, (e) => V(w, e), () => J(w)), R(Ge), R(ze);
	var qe = U(ze, 2), Je = H(qe), Ye = H(Je), Xe = U(H(Ye)), Ze = H(Xe);
	R(Xe), R(Ye);
	var Qe = U(Ye, 2), $e = (e) => {
		var t = tl();
		Or(t, 5, () => J(j), (e) => e.optimizer, (e, t) => {
			var n = el();
			let r;
			var i = H(n), a = H(i, !0);
			R(i);
			var o = U(i), s = H(o, !0);
			R(o);
			var c = U(o), l = H(c);
			R(c), R(n), fn((e) => {
				r = Ir(n, 1, "health-row", null, r, {
					up: J(t).reachable,
					down: !J(t).reachable
				}), gr(a, (J(t), Y(() => J(t).optimizer))), gr(s, (J(t), Y(() => J(t).reachable ? "reachable" : "unreachable"))), gr(l, `last checked ${e ?? ""}`);
			}, [() => (J(t), Y(() => (/* @__PURE__ */ new Date(Number(J(t).ts || 0) * 1e3)).toLocaleString()))]), pr(e, n);
		}), R(t), pr(e, t);
	}, et = (e) => {
		pr(e, nl());
	};
	wr(Qe, (e) => {
		J(j), Y(() => J(j).length) ? e($e) : e(et, -1);
	}), R(Je);
	var tt = U(Je, 2), nt = H(tt), rt = U(H(nt));
	let it;
	var at = H(rt, !0);
	R(rt), R(nt);
	var ot = U(nt, 2), st = (e) => {
		var t = tl();
		Or(t, 5, () => J(n), (e) => e.optimizer, (e, t) => {
			var n = rl(), r = H(n), i = H(r, !0);
			R(r);
			var a = U(r), o = H(a);
			R(a);
			var s = U(a), c = H(s);
			R(s), R(n), fn((e, n, r, a) => {
				gr(i, (J(t), Y(() => J(t).optimizer))), gr(o, `${e ?? ""}/${n ?? ""} verified`), gr(c, `${r ?? ""} estimated · ${a ?? ""} unavailable`);
			}, [
				() => (J(t), Y(() => O(J(t).measured_attempts))),
				() => (J(t), Y(() => O(J(t).attempts))),
				() => (J(t), Y(() => O(J(t).estimated_attempts))),
				() => (J(t), Y(() => O(J(t).unavailable_attempts)))
			]), pr(e, n);
		}), R(t), pr(e, t);
	}, ct = (e) => {
		var t = il(), n = H(t);
		R(t), fn(() => gr(n, `No optimizer attempts in this window yet. ${(J(v), Y(() => J(v).note || "Savings will appear only when adapters emit measurements.")) ?? ""}`)), pr(e, t);
	};
	wr(ot, (e) => {
		J(n), Y(() => J(n).length) ? e(st) : e(ct, -1);
	}), R(tt), R(qe), R(M), fn((e, t, n, r, i, a, o, s, d, f, m, g) => {
		le = Ir(N, 1, "status", null, le, {
			ok: !J(b) && !J(x),
			warn: J(b),
			fail: !!J(x)
		}), gr(ue, J(x) ? "retrying" : J(b) ? "refreshing" : `last ${J(p)}`), ge = Ir(he, 1, "status", null, ge, e), gr(_e, `${(J(h), Y(() => J(h).alerts?.length || 0)) ?? ""} signals`), gr(Ce, t), gr(I, `${n ?? ""} input · ${r ?? ""} output`), gr(Ee, i), gr(ke, a), gr(Ae, `${o ?? ""} of ${s ?? ""} optimizer attempts verified`), Fe = Ir(Pe, 1, "", null, Fe, { healthy: J(l) && J(c) === 0 && !J(x) }), gr(Ie, J(u)), gr(Re, `${d ?? ""} requests · p95 ${f ?? ""}`), gr(Ue, J(p)), Br(We, "aria-label", m), Br(Ke, "aria-label", g), gr(Ze, `${(J(j), Y(() => J(j).length)) ?? ""} tracked`), it = Ir(rt, 1, "status", null, it, {
			ok: J(v).durable,
			warn: !J(v).durable
		}), gr(at, (J(v), Y(() => J(v).durable ? "durable" : "not persistent")));
	}, [
		() => ({
			ok: !J(h).alerts?.length,
			warn: J(h).alerts?.some((e) => e.severity === "warning"),
			fail: J(h).alerts?.some((e) => e.severity === "critical")
		}),
		() => (J(i), Y(() => O(J(i)))),
		() => (J(r), Y(() => O(J(r).tokens_in))),
		() => (J(r), Y(() => O(J(r).tokens_out))),
		() => (J(a), Y(() => O(J(a)))),
		() => (J(o), J(s), Y(() => te(J(o), J(s)))),
		() => (J(o), Y(() => O(J(o)))),
		() => (J(s), Y(() => O(J(s)))),
		() => (J(m), Y(() => O(J(m).totals?.requests))),
		() => (J(m), Y(() => ee(J(m).latency_ms?.p95))),
		() => (J(p), J(r), Y(() => `Token flow over ${J(p)}: ${O(J(r).tokens_in)} input and ${O(J(r).tokens_out)} output tokens.`)),
		() => (J(p), J(a), Y(() => `Savings over ${J(p)}: ${O(J(a))} verified tokens saved.`))
	]), pr(e, M), Me();
}
ar(["click"]);
//#endregion
//#region src/main.js
var sl = "svelte-uplot", cl = document.querySelector("#svelte-overview");
cl && _r(ol, { target: cl });
//#endregion
export { ol as App, sl as dashboardBuild };
