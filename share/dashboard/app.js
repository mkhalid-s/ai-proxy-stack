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
var n = Symbol("uninitialized"), r = "http://www.w3.org/1999/xhtml", i = Array.isArray, a = Array.prototype.indexOf, o = Array.prototype.includes;
Array.from;
var s = Object.getOwnPropertyDescriptor, c = Object.getOwnPropertyDescriptors, l = Object.prototype, u = Array.prototype, d = Object.getPrototypeOf, f = () => {};
function p(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function m() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var h = 1024, g = 2048, _ = 4096, v = 8192, y = 16384, b = 32768, ee = 1 << 25, te = 65536, ne = 1 << 19, x = 65536, re = 1 << 21, ie = 1 << 22, ae = 1 << 23, oe = Symbol("$state"), se = Symbol("legacy props"), ce = Symbol(""), le = Symbol("attributes"), S = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ue() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function de() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
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
	console.warn("https://svelte.dev/e/derived_inert");
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function _e(e) {
	return e === this.v;
}
function ve(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ye(e) {
	return !ve(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var C = null;
function be(e) {
	C = e;
}
function w() {
	return !e || C !== null && C.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function xe() {
	var e = T;
	T = [], p(e);
}
function Se(e) {
	if (T.length === 0 && !Ke) {
		var t = T;
		queueMicrotask(() => {
			t === T && xe();
		});
	}
	T.push(e);
}
function Ce(e) {
	var t = H;
	if (t === null) return z.f |= ae, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	we(e, t);
}
function we(e, t) {
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
var Te = ~(g | _ | h);
function E(e, t) {
	e.f = e.f & Te | t;
}
function Ee(e) {
	e.f & 512 || e.deps === null ? E(e, h) : E(e, _);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function De(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= x, De(t.deps));
}
function Oe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), De(e.deps), E(e, h);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var ke = !1;
function Ae(e) {
	var t = ke;
	try {
		return ke = !1, [e(), ke];
	} finally {
		ke = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function je(e) {
	var t = z, n = H;
	V(null), U(null);
	try {
		return e();
	} finally {
		V(t), U(n);
	}
}
te | ne;
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Me(e, t, n, r) {
	let i = w() ? Ie : Re;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = H, c = Ne(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				we(e, s);
			}
			Pe();
		}
	}
	var d = Fe();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Le(e))).then(u).catch((e) => we(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Pe();
	}) : f();
}
function Ne() {
	var e = H, t = z, n = C, r = k;
	return function(i = !0) {
		U(e), V(t), be(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Pe(e = !0) {
	U(null), V(null), be(null), e && k?.deactivate();
}
function Fe() {
	var e = H, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ie(e) {
	var t = 2 | g;
	return H !== null && (H.f |= ne), {
		ctx: C,
		deps: null,
		effects: null,
		equals: _e,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: n,
		wv: 0,
		parent: H,
		ac: null
	};
}
var D = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Le(e, t, r) {
	let i = H;
	i === null && ue();
	var a = void 0, o = ot(n), s = !z, c = /* @__PURE__ */ new Set();
	return xt(() => {
		var t = H, n = m();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== S && n.reject(e);
			}).finally(Pe);
		} catch (e) {
			n.reject(e), Pe();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = Fe();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(D);
			else for (let e of c.values()) e.reject(D);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== D && (r.activate(), t ? (o.f |= ae, st(o, t)) : (o.f & 8388608 && (o.f ^= ae), st(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), bt(() => {
		for (let e of c) e.reject(D);
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
function Re(e) {
	let t = /* @__PURE__ */ Ie(e);
	return t.equals = ye, t;
}
function ze(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Et(t[n]);
	}
}
function Be(e) {
	var t, r = H, i = e.parent;
	if (!R && i !== null && e.v !== n && i.f & 24576) return ge(), e.v;
	U(i);
	try {
		e.f &= ~x, ze(e), t = zt(e);
	} finally {
		U(r);
	}
	return t;
}
function Ve(e) {
	var t = Be(e);
	if (!e.equals(t) && (e.wv = Lt(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), We?.capture(e, t, !0)), e.deps === null))) {
		E(e, h);
		return;
	}
	R || (A === null ? Ee(e) : (yt() || k?.is_fork) && A.set(e, t));
}
function He(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && je(() => {
		t.ac.abort(S), t.ac = null;
	}), t.fn !== null && (t.teardown = f), Z(t, 0), wt(t));
}
function Ue(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Q(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var O = null, k = null, We = null, A = null, Ge = null, Ke = !1, qe = !1, j = null, M = null, Je = 0, Ye = 1, Xe = class e {
	id = Ye++;
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
		O === null ? O = this : (O.#n = this, this.#t = O), O = this;
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
			for (var r of n.d) E(r, g), t(r);
			for (r of n.m) E(r, _), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Je++ > 1e3 && (this.#x(), Ze());
		for (let e of this.#u) this.#d.delete(e), E(e, g), this.schedule(e);
		for (let e of this.#d) E(e, _), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = j = [], r = [], i = M = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw rt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (j = null, M = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) nt(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), We = this, Qe(r), Qe(n), We = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= h;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= h : i & 4 ? t.push(r) : X(r) && (i & 16 && this.#d.add(r), Q(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), E(i, g), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Oe(e[t], this.#u, this.#d);
	}
	capture(e, t, r = !1) {
		e.v !== n && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, r]), A?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			qe = !0, k = this, this.#g();
		} finally {
			Je = 0, Ge = null, j = null, M = null, qe = !1, k = null, A = null, P.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(D);
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
		this.#m || (this.#m = !0, Se(() => {
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
		return (this.#s ??= m()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!qe && Se(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (Ge = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (j !== null && t === H && (z === null || !(z.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= h;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? O = e : t.#t = e, this.linked = !1;
		}
	}
};
function Ze() {
	try {
		de();
	} catch (e) {
		we(e, Ge);
	}
}
var N = null;
function Qe(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && X(r) && (N = /* @__PURE__ */ new Set(), Q(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ot(r), N?.size > 0)) {
				P.clear();
				for (let e of N) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) N.has(n) && (N.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Q(n);
					}
				}
				N.clear();
			}
		}
		N = null;
	}
}
function $e(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? $e(i, t, n, r) : e & 4194320 && !(e & 2048) && et(i, t, r) && (E(i, g), tt(i));
	}
}
function et(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (o.call(t, r)) return !0;
		if (r.f & 2 && et(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function tt(e) {
	k.schedule(e);
}
function nt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), E(e, h);
		for (var n = e.first; n !== null;) nt(n, t), n = n.next;
	}
}
function rt(e) {
	E(e, h);
	for (var t = e.first; t !== null;) rt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var it = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), at = !1;
function ot(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: _e,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function F(e, t) {
	let n = ot(e, t);
	return Nt(n), n;
}
function I(e, t, n = !1) {
	return z !== null && (!B || z.f & 131072) && w() && z.f & 4325394 && (W === null || !W.has(e)) && he(), st(e, n ? L(t) : t, M);
}
function st(e, t, n = null) {
	if (!e.equals(t)) {
		P.set(e, R ? t : e.v);
		var r = Xe.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Be(t), A === null && Ee(t);
		}
		e.wv = Lt(), ut(e, g, n), w() && H !== null && H.f & 1024 && !(H.f & 96) && (q === null ? Pt([e]) : q.push(e)), !r.is_fork && it.size > 0 && !at && ct();
	}
	return t;
}
function ct() {
	at = !1;
	for (let e of it) {
		e.f & 1024 && E(e, _);
		let t;
		try {
			t = X(e);
		} catch {
			t = !0;
		}
		t && Q(e);
	}
	it.clear();
}
function lt(e) {
	I(e, e.v + 1);
}
function ut(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = w(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === H)) {
			var l = (c & g) === 0;
			if (l && E(s, t), c & 131072) it.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (H === null || !(H.f & 2097152)) && (s.f |= x), ut(u, _, n));
			} else if (l) {
				var d = s;
				c & 16 && N !== null && N.add(d), n === null ? tt(d) : n.push(d);
			}
		}
	}
}
function L(e) {
	if (typeof e != "object" || !e || oe in e) return e;
	let t = d(e);
	if (t !== l && t !== u) return e;
	var r = /* @__PURE__ */ new Map(), a = i(e), o = /* @__PURE__ */ F(0), c = null, f = Y, p = (e) => {
		if (Y === f) return e();
		var t = z, n = Y;
		V(null), It(f);
		var r = e();
		return V(t), It(n), r;
	};
	return a && r.set("length", /* @__PURE__ */ F(e.length, c)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && pe();
			var i = r.get(t);
			return i === void 0 ? p(() => {
				var e = /* @__PURE__ */ F(n.value, c);
				return r.set(t, e), e;
			}) : I(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = r.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = p(() => /* @__PURE__ */ F(n, c));
					r.set(t, e), lt(o);
				}
			} else I(i, n), lt(o);
			return !0;
		},
		get(t, i, a) {
			if (i === oe) return e;
			var o = r.get(i), l = i in t;
			if (o === void 0 && (!l || s(t, i)?.writable) && (o = p(() => /* @__PURE__ */ F(L(l ? t[i] : n), c)), r.set(i, o)), o !== void 0) {
				var u = $(o);
				return u === n ? void 0 : u;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = r.get(t);
				a && (i.value = $(a));
			} else if (i === void 0) {
				var o = r.get(t), s = o?.v;
				if (o !== void 0 && s !== n) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return i;
		},
		has(e, t) {
			if (t === oe) return !0;
			var i = r.get(t), a = i !== void 0 && i.v !== n || Reflect.has(e, t);
			return (i !== void 0 || H !== null && (!a || s(e, t)?.writable)) && (i === void 0 && (i = p(() => /* @__PURE__ */ F(a ? L(e[t]) : n, c)), r.set(t, i)), $(i) === n) ? !1 : a;
		},
		set(e, t, i, l) {
			var u = r.get(t), d = t in e;
			if (a && t === "length") for (var f = i; f < u.v; f += 1) {
				var m = r.get(f + "");
				m === void 0 ? f in e && (m = p(() => /* @__PURE__ */ F(n, c)), r.set(f + "", m)) : I(m, n);
			}
			if (u === void 0) (!d || s(e, t)?.writable) && (u = p(() => /* @__PURE__ */ F(void 0, c)), I(u, L(i)), r.set(t, u));
			else {
				d = u.v !== n;
				var h = p(() => L(i));
				I(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(l, i), !d) {
				if (a && typeof t == "string") {
					var _ = r.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && I(_, v + 1);
				}
				lt(o);
			}
			return !0;
		},
		ownKeys(e) {
			$(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== n;
			});
			for (var [i, a] of r) a.v !== n && !(i in e) && t.push(i);
			return t;
		},
		setPrototypeOf() {
			me();
		}
	});
}
var dt, ft, pt;
/*@__NO_SIDE_EFFECTS__*/
function mt(e) {
	return ft.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function ht(e) {
	return pt.call(e);
}
function gt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function _t(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vt(e, t) {
	var n = H;
	n !== null && n.f & 8192 && (e |= v);
	var r = {
		ctx: C,
		deps: null,
		nodes: null,
		f: e | g | 512,
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
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) j === null ? Xe.ensure().schedule(r) : j.push(r);
	else if (t !== null) {
		try {
			Q(r);
		} catch (e) {
			throw Et(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= te));
	}
	if (i !== null && (i.parent = n, n !== null && _t(i, n), z !== null && z.f & 2 && !(e & 64))) {
		var a = z;
		(a.effects ??= []).push(i);
	}
	return r;
}
function yt() {
	return z !== null && !B;
}
function bt(e) {
	let t = vt(8, null);
	return E(t, h), t.teardown = e, t;
}
function xt(e) {
	return vt(ie | ne, e);
}
function St(e, t = [], n = [], r = []) {
	Me(r, t, n, (t) => {
		vt(8, () => {
			e(...t.map($));
		});
	});
}
function Ct(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = R, n = z;
		Mt(!0), V(null);
		try {
			t.call(null);
		} finally {
			Mt(e), V(n);
		}
	}
}
function wt(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && je(() => {
			e.abort(S);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Et(n, t), n = r;
	}
}
function Tt(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Et(t), t = n;
	}
}
function Et(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Dt(e.nodes.start, e.nodes.end), n = !0), e.f |= ee, wt(e, t && !n), Z(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Ct(e), e.f ^= ee, e.f |= y;
	var i = e.parent;
	i !== null && i.first !== null && Ot(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Dt(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ ht(e);
		e.remove(), e = n;
	}
}
function Ot(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kt(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= v;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				kt(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var At = null, jt = !1, R = !1;
function Mt(e) {
	R = e;
}
var z = null, B = !1;
function V(e) {
	z = e;
}
var H = null;
function U(e) {
	H = e;
}
var W = null;
function Nt(e) {
	z !== null && (W ??= /* @__PURE__ */ new Set()).add(e);
}
var G = null, K = 0, q = null;
function Pt(e) {
	q = e;
}
var Ft = 1, J = 0, Y = J;
function It(e) {
	Y = e;
}
function Lt() {
	return ++Ft;
}
function X(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~x), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (X(a) && Ve(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && E(e, h);
	}
	return !1;
}
function Rt(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(W !== null && W.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rt(a, t, !1) : t === a && (n ? E(a, g) : a.f & 1024 && E(a, _), tt(a));
	}
}
function zt(e) {
	var t = G, n = K, r = q, i = z, a = W, o = C, s = B, c = Y, l = e.f;
	G = null, K = 0, q = null, z = l & 96 ? null : e, W = null, be(e.ctx), B = !1, Y = ++J, e.ac !== null && (je(() => {
		e.ac.abort(S);
	}), e.ac = null);
	try {
		e.f |= re;
		var u = e.fn, d = u();
		e.f |= b;
		var f = e.deps, p = k?.is_fork;
		if (G !== null) {
			var m;
			if (p || Z(e, K), f !== null && K > 0) for (f.length = K + G.length, m = 0; m < G.length; m++) f[K + m] = G[m];
			else e.deps = f = G;
			if (yt() && e.f & 512) for (m = K; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && K < f.length && (Z(e, K), f.length = K);
		if (w() && q !== null && !B && f !== null && !(e.f & 6146)) for (m = 0; m < q.length; m++) Rt(q[m], e);
		if (i !== null && i !== e) {
			if (J++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = J;
			if (t !== null) for (let e of t) e.rv = J;
			q !== null && (r === null ? r = q : r.push(...q));
		}
		return e.f & 8388608 && (e.f ^= ae), d;
	} catch (e) {
		return Ce(e);
	} finally {
		e.f ^= re, G = t, K = n, q = r, z = i, W = a, be(o), B = s, Y = c;
	}
}
function Bt(e, t) {
	let r = t.reactions;
	if (r !== null) {
		var i = a.call(r, e);
		if (i !== -1) {
			var s = r.length - 1;
			s === 0 ? r = t.reactions = null : (r[i] = r[s], r.pop());
		}
	}
	if (r === null && t.f & 2 && (G === null || !o.call(G, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~x), c.v !== n && Ee(c), c.ac !== null && je(() => {
			c.ac.abort(S), c.ac = null, E(c, g);
		}), He(c), Z(c, 0);
	}
}
function Z(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Bt(e, n[r]);
}
function Q(e) {
	var t = e.f;
	if (!(t & 16384)) {
		E(e, h);
		var n = H, r = jt;
		H = e, jt = (t & 96) == 0;
		try {
			t & 16777232 ? Tt(e) : wt(e), Ct(e);
			var i = zt(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Ft;
		} finally {
			jt = r, H = n;
		}
	}
}
function $(e) {
	var t = (e.f & 2) != 0;
	if (At?.add(e), z !== null && !B && !(H !== null && H.f & 16384) && (W === null || !W.has(e))) {
		var n = z.deps;
		if (z.f & 2097152) e.rv < J && (e.rv = J, G === null && n !== null && n[K] === e ? K++ : G === null ? G = [e] : G.push(e));
		else {
			z.deps ??= [], o.call(z.deps, e) || z.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [z] : o.call(r, z) || r.push(z);
		}
	}
	if (R && P.has(e)) return P.get(e);
	if (t) {
		var i = e;
		if (R) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Ht(i)) && (a = Be(i)), P.set(i, a), a;
		}
		var s = (i.f & 512) == 0 && !B && z !== null && (jt || (z.f & 512) != 0), c = (i.f & b) === 0;
		X(i) && (s && (i.f |= 512), Ve(i)), s && !c && (Ue(i), Vt(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vt(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ue(t), Vt(t));
}
function Ht(e) {
	if (e.v === n) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (P.has(t) || t.f & 2 && Ht(t)) return !0;
	return !1;
}
function Ut(e) {
	var t = B;
	try {
		return B = !0, e();
	} finally {
		B = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Wt = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Gt(e) {
	return Wt?.createHTML(e) ?? e;
}
function Kt(e) {
	var t = gt("template");
	return t.innerHTML = Gt(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function qt(e, t) {
	var n = H;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Jt(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		i === void 0 && (i = Kt(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ mt(i)));
		var t = r || dt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ mt(t), s = t.lastChild;
			qt(o, s);
		} else qt(t, t);
		return t;
	};
}
function Yt(e, t) {
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Xt = Symbol("is custom element"), Zt = Symbol("is html");
function Qt(e, t, n, r) {
	var i = $t(e);
	i[t] !== (i[t] = n) && (t === "loading" && (e[ce] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tn(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $t(e) {
	return e[le] ??= {
		[Xt]: e.nodeName.includes("-"),
		[Zt]: e.namespaceURI === r
	};
}
var en = /* @__PURE__ */ new Map();
function tn(e) {
	var t = e.getAttribute("is") || e.nodeName, n = en.get(t);
	if (n) return n;
	en.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = c(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = d(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function nn(t, n, r, i) {
	var a = !e || (r & 2) != 0, o = (r & 8) != 0, c = (r & 16) != 0, l = i, u = !0, d = void 0, f = () => c && a ? (d ??= /* @__PURE__ */ Ie(i), $(d)) : (u && (u = !1, l = c ? Ut(i) : i), l);
	let p;
	if (o) {
		var m = oe in t || se in t;
		p = s(t, n)?.set ?? (m && n in t ? (e) => t[n] = e : void 0);
	}
	var h, g = !1;
	o ? [h, g] = Ae(() => t[n]) : h = t[n], h === void 0 && i !== void 0 && (h = f(), p && (a && fe(n), p(h)));
	var _ = a ? () => {
		var e = t[n];
		return e === void 0 ? f() : (u = !0, e);
	} : () => {
		var e = t[n];
		return e !== void 0 && (l = void 0), e === void 0 ? l : e;
	};
	if (a && !(r & 4)) return _;
	if (p) {
		var v = t.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!a || !t || v || g) && p(t ? _() : e), e) : _();
		});
	}
	var y = !1, b = (r & 1 ? Ie : Re)(() => (y = !1, _()));
	o && $(b);
	var ee = H;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? $(b) : a && o ? L(e) : e;
			return I(b, n), y = !0, l !== void 0 && (l = n), e;
		}
		return R && y || ee.f & 16384 ? b.v : $(b);
	});
}
var rn = /* @__PURE__ */ Jt("<section hidden=\"\"></section>");
function an(e, t) {
	let n = nn(t, "title", 8, "LeanRelay");
	var r = rn();
	St(() => Qt(r, "aria-label", `${n()} dashboard migration shell`)), Yt(e, r);
}
//#endregion
//#region src/main.js
var on = "svelte-uplot";
//#endregion
export { an as App, on as dashboardBuild };
