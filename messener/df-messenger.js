'use strict';
var DF_M;

function DF_Maa(a) {
	var b = 0;
	return function() {
		return b < a.length ? {
			done: !1,
			value: a[b++]
		} : {
			done: !0
		}
	}
}
var DF_Mba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
	if (a == Array.prototype || a == Object.prototype) return a;
	a[b] = c.value;
	return a
};

function DF_Mca(a) {
	a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
	for (var b = 0; b < a.length; ++b) {
		var c = a[b];
		if (c && c.Math == Math) return c
	}
	throw Error("Cannot find global object");
}
var DF_Ma = DF_Mca(this);

function DF_Mb(a, b) {
	if (b) a: {
		var c = DF_Ma;a = a.split(".");
		for (var d = 0; d < a.length - 1; d++) {
			var e = a[d];
			if (!(e in c)) break a;
			c = c[e]
		}
		a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && DF_Mba(c, a, {
			configurable: !0,
			writable: !0,
			value: b
		})
	}
}
DF_Mb("Symbol", function(a) {
	function b(f) {
		if (this instanceof b) throw new TypeError("Symbol is not a constructor");
		return new c(d + (f || "") + "_" + e++, f)
	}

	function c(f, g) {
		this.g = f;
		DF_Mba(this, "description", {
			configurable: !0,
			writable: !0,
			value: g
		})
	}
	if (a) return a;
	c.prototype.toString = function() {
		return this.g
	};
	var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
		e = 0;
	return b
});
DF_Mb("Symbol.iterator", function(a) {
	if (a) return a;
	a = Symbol("Symbol.iterator");
	for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
		var d = DF_Ma[b[c]];
		"function" === typeof d && "function" != typeof d.prototype[a] && DF_Mba(d.prototype, a, {
			configurable: !0,
			writable: !0,
			value: function() {
				return DF_Mda(DF_Maa(this))
			}
		})
	}
	return a
});

function DF_Mda(a) {
	a = {
		next: a
	};
	a[Symbol.iterator] = function() {
		return this
	};
	return a
}

function DF_Mc(a) {
	return a.raw = a
}

function DF_Md(a) {
	var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
	if (b) return b.call(a);
	if ("number" == typeof a.length) return {
		next: DF_Maa(a)
	};
	throw Error(String(a) + " is not an iterable or ArrayLike");
}

function DF_Me(a) {
	if (!(a instanceof Array)) {
		a = DF_Md(a);
		for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
		a = c
	}
	return a
}

function DF_Mea(a, b) {
	return Object.prototype.hasOwnProperty.call(a, b)
}
var DF_Mfa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
	for (var c = 1; c < arguments.length; c++) {
		var d = arguments[c];
		if (d)
			for (var e in d) DF_Mea(d, e) && (a[e] = d[e])
	}
	return a
};
DF_Mb("Object.assign", function(a) {
	return a || DF_Mfa
});
var DF_Mga = "function" == typeof Object.create ? Object.create : function(a) {
		function b() {}
		b.prototype = a;
		return new b
	},
	DF_Mha = function() {
		function a() {
			function c() {}
			new c;
			Reflect.construct(c, [], function() {});
			return new c instanceof c
		}
		if ("undefined" != typeof Reflect && Reflect.construct) {
			if (a()) return Reflect.construct;
			var b = Reflect.construct;
			return function(c, d, e) {
				c = b(c, d);
				e && Reflect.setPrototypeOf(c, e.prototype);
				return c
			}
		}
		return function(c, d, e) {
			void 0 === e && (e = c);
			e = DF_Mga(e.prototype || Object.prototype);
			return Function.prototype.apply.call(c,
				e, d) || e
		}
	}(),
	DF_Mia;
if ("function" == typeof Object.setPrototypeOf) DF_Mia = Object.setPrototypeOf;
else {
	var DF_Mja;
	a: {
		var DF_Mka = {
				a: !0
			},
			DF_Mla = {};
		try {
			DF_Mla.__proto__ = DF_Mka;
			DF_Mja = DF_Mla.a;
			break a
		} catch (a) {}
		DF_Mja = !1
	}
	DF_Mia = DF_Mja ? function(a, b) {
		a.__proto__ = b;
		if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
		return a
	} : null
}
var DF_Mma = DF_Mia;

function DF_Mf(a, b) {
	a.prototype = DF_Mga(b.prototype);
	a.prototype.constructor = a;
	if (DF_Mma) DF_Mma(a, b);
	else
		for (var c in b)
			if ("prototype" != c)
				if (Object.defineProperties) {
					var d = Object.getOwnPropertyDescriptor(b, c);
					d && Object.defineProperty(a, c, d)
				} else a[c] = b[c];
	a.Fd = b.prototype
}

function DF_Mna() {
	this.F = !1;
	this.i = null;
	this.h = void 0;
	this.g = 1;
	this.O = this.G = 0;
	this.j = null
}

function DF_Moa(a) {
	if (a.F) throw new TypeError("Generator is already running");
	a.F = !0
}
DF_Mna.prototype.L = function(a) {
	this.h = a
};

function DF_Mpa(a, b) {
	a.j = {
		nc: b,
		td: !0
	};
	a.g = a.G || a.O
}
DF_Mna.prototype.return = function(a) {
	this.j = {
		return: a
	};
	this.g = this.O
};

function DF_Mg(a, b, c) {
	a.g = c;
	return {
		value: b
	}
}

function DF_Mqa(a) {
	a.G = 0;
	var b = a.j.nc;
	a.j = null;
	return b
}

function DF_Mra(a) {
	this.g = new DF_Mna;
	this.h = a
}

function DF_Msa(a, b) {
	DF_Moa(a.g);
	var c = a.g.i;
	if (c) return DF_Mta(a, "return" in c ? c["return"] : function(d) {
		return {
			value: d,
			done: !0
		}
	}, b, a.g.return);
	a.g.return(b);
	return DF_Mua(a)
}

function DF_Mta(a, b, c, d) {
	try {
		var e = b.call(a.g.i, c);
		if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
		if (!e.done) return a.g.F = !1, e;
		var f = e.value
	} catch (g) {
		return a.g.i = null, DF_Mpa(a.g, g), DF_Mua(a)
	}
	a.g.i = null;
	d.call(a.g, f);
	return DF_Mua(a)
}

function DF_Mua(a) {
	for (; a.g.g;) try {
		var b = a.h(a.g);
		if (b) return a.g.F = !1, {
			value: b.value,
			done: !1
		}
	} catch (c) {
		a.g.h = void 0, DF_Mpa(a.g, c)
	}
	a.g.F = !1;
	if (a.g.j) {
		b = a.g.j;
		a.g.j = null;
		if (b.td) throw b.nc;
		return {
			value: b.return,
			done: !0
		}
	}
	return {
		value: void 0,
		done: !0
	}
}

function DF_Mva(a) {
	this.next = function(b) {
		DF_Moa(a.g);
		a.g.i ? b = DF_Mta(a, a.g.i.next, b, a.g.L) : (a.g.L(b), b = DF_Mua(a));
		return b
	};
	this.throw = function(b) {
		DF_Moa(a.g);
		a.g.i ? b = DF_Mta(a, a.g.i["throw"], b, a.g.L) : (DF_Mpa(a.g, b), b = DF_Mua(a));
		return b
	};
	this.return = function(b) {
		return DF_Msa(a, b)
	};
	this[Symbol.iterator] = function() {
		return this
	}
}

function DF_Mwa(a) {
	function b(d) {
		return a.next(d)
	}

	function c(d) {
		return a.throw(d)
	}
	return new Promise(function(d, e) {
		function f(g) {
			g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
		}
		f(a.next())
	})
}

function DF_Mh(a) {
	return DF_Mwa(new DF_Mva(new DF_Mra(a)))
}

function DF_Mi() {
	for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
	return b
}
DF_Mb("Reflect", function(a) {
	return a ? a : {}
});
DF_Mb("Reflect.construct", function() {
	return DF_Mha
});
DF_Mb("Reflect.setPrototypeOf", function(a) {
	return a ? a : DF_Mma ? function(b, c) {
		try {
			return DF_Mma(b, c), !0
		} catch (d) {
			return !1
		}
	} : null
});
DF_Mb("Promise", function(a) {
	function b(g) {
		this.h = 0;
		this.i = void 0;
		this.g = [];
		this.L = !1;
		var h = this.j();
		try {
			g(h.resolve, h.reject)
		} catch (k) {
			h.reject(k)
		}
	}

	function c() {
		this.g = null
	}

	function d(g) {
		return g instanceof b ? g : new b(function(h) {
			h(g)
		})
	}
	if (a) return a;
	c.prototype.h = function(g) {
		if (null == this.g) {
			this.g = [];
			var h = this;
			this.i(function() {
				h.G()
			})
		}
		this.g.push(g)
	};
	var e = DF_Ma.setTimeout;
	c.prototype.i = function(g) {
		e(g, 0)
	};
	c.prototype.G = function() {
		for (; this.g && this.g.length;) {
			var g = this.g;
			this.g = [];
			for (var h = 0; h <
				g.length; ++h) {
				var k = g[h];
				g[h] = null;
				try {
					k()
				} catch (l) {
					this.j(l)
				}
			}
		}
		this.g = null
	};
	c.prototype.j = function(g) {
		this.i(function() {
			throw g;
		})
	};
	b.prototype.j = function() {
		function g(l) {
			return function(m) {
				k || (k = !0, l.call(h, m))
			}
		}
		var h = this,
			k = !1;
		return {
			resolve: g(this.Ba),
			reject: g(this.G)
		}
	};
	b.prototype.Ba = function(g) {
		if (g === this) this.G(new TypeError("A Promise cannot resolve to itself"));
		else if (g instanceof b) this.sa(g);
		else {
			a: switch (typeof g) {
				case "object":
					var h = null != g;
					break a;
				case "function":
					h = !0;
					break a;
				default:
					h = !1
			}
			h ? this.Z(g) : this.F(g)
		}
	};
	b.prototype.Z = function(g) {
		var h = void 0;
		try {
			h = g.then
		} catch (k) {
			this.G(k);
			return
		}
		"function" == typeof h ? this.La(h, g) : this.F(g)
	};
	b.prototype.G = function(g) {
		this.O(2, g)
	};
	b.prototype.F = function(g) {
		this.O(1, g)
	};
	b.prototype.O = function(g, h) {
		if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
		this.h = g;
		this.i = h;
		2 === this.h && this.la();
		this.ea()
	};
	b.prototype.la = function() {
		var g = this;
		e(function() {
			if (g.M()) {
				var h = DF_Ma.console;
				"undefined" !== typeof h &&
					h.error(g.i)
			}
		}, 1)
	};
	b.prototype.M = function() {
		if (this.L) return !1;
		var g = DF_Ma.CustomEvent,
			h = DF_Ma.Event,
			k = DF_Ma.dispatchEvent;
		if ("undefined" === typeof k) return !0;
		"function" === typeof g ? g = new g("unhandledrejection", {
			cancelable: !0
		}) : "function" === typeof h ? g = new h("unhandledrejection", {
			cancelable: !0
		}) : (g = DF_Ma.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
		g.promise = this;
		g.reason = this.i;
		return k(g)
	};
	b.prototype.ea = function() {
		if (null != this.g) {
			for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
			this.g = null
		}
	};
	var f = new c;
	b.prototype.sa = function(g) {
		var h = this.j();
		g.fb(h.resolve, h.reject)
	};
	b.prototype.La = function(g, h) {
		var k = this.j();
		try {
			g.call(h, k.resolve, k.reject)
		} catch (l) {
			k.reject(l)
		}
	};
	b.prototype.then = function(g, h) {
		function k(p, q) {
			return "function" == typeof p ? function(r) {
				try {
					l(p(r))
				} catch (t) {
					m(t)
				}
			} : q
		}
		var l, m, n = new b(function(p, q) {
			l = p;
			m = q
		});
		this.fb(k(g, l), k(h, m));
		return n
	};
	b.prototype.catch = function(g) {
		return this.then(void 0, g)
	};
	b.prototype.fb = function(g, h) {
		function k() {
			switch (l.h) {
				case 1:
					g(l.i);
					break;
				case 2:
					h(l.i);
					break;
				default:
					throw Error("Unexpected state: " + l.h);
			}
		}
		var l = this;
		null == this.g ? f.h(k) : this.g.push(k);
		this.L = !0
	};
	b.resolve = d;
	b.reject = function(g) {
		return new b(function(h, k) {
			k(g)
		})
	};
	b.race = function(g) {
		return new b(function(h, k) {
			for (var l = DF_Md(g), m = l.next(); !m.done; m = l.next()) d(m.value).fb(h, k)
		})
	};
	b.all = function(g) {
		var h = DF_Md(g),
			k = h.next();
		return k.done ? d([]) : new b(function(l, m) {
			function n(r) {
				return function(t) {
					p[r] = t;
					q--;
					0 == q && l(p)
				}
			}
			var p = [],
				q = 0;
			do p.push(void 0), q++, d(k.value).fb(n(p.length -
				1), m), k = h.next(); while (!k.done)
		})
	};
	return b
});
DF_Mb("Object.setPrototypeOf", function(a) {
	return a || DF_Mma
});
DF_Mb("WeakMap", function(a) {
	function b(k) {
		this.g = (h += Math.random() + 1).toString();
		if (k) {
			k = DF_Md(k);
			for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
		}
	}

	function c() {}

	function d(k) {
		var l = typeof k;
		return "object" === l && null !== k || "function" === l
	}

	function e(k) {
		if (!DF_Mea(k, g)) {
			var l = new c;
			DF_Mba(k, g, {
				value: l
			})
		}
	}

	function f(k) {
		var l = Object[k];
		l && (Object[k] = function(m) {
			if (m instanceof c) return m;
			Object.isExtensible(m) && e(m);
			return l(m)
		})
	}
	if (function() {
			if (!a || !Object.seal) return !1;
			try {
				var k = Object.seal({}),
					l = Object.seal({}),
					m = new a([
						[k, 2],
						[l, 3]
					]);
				if (2 != m.get(k) || 3 != m.get(l)) return !1;
				m.delete(k);
				m.set(l, 4);
				return !m.has(k) && 4 == m.get(l)
			} catch (n) {
				return !1
			}
		}()) return a;
	var g = "$jscomp_hidden_" + Math.random();
	f("freeze");
	f("preventExtensions");
	f("seal");
	var h = 0;
	b.prototype.set = function(k, l) {
		if (!d(k)) throw Error("Invalid WeakMap key");
		e(k);
		if (!DF_Mea(k, g)) throw Error("WeakMap key fail: " + k);
		k[g][this.g] = l;
		return this
	};
	b.prototype.get = function(k) {
		return d(k) && DF_Mea(k, g) ? k[g][this.g] : void 0
	};
	b.prototype.has =
		function(k) {
			return d(k) && DF_Mea(k, g) && DF_Mea(k[g], this.g)
		};
	b.prototype.delete = function(k) {
		return d(k) && DF_Mea(k, g) && DF_Mea(k[g], this.g) ? delete k[g][this.g] : !1
	};
	return b
});
DF_Mb("Map", function(a) {
	function b() {
		var h = {};
		return h.ka = h.next = h.head = h
	}

	function c(h, k) {
		var l = h[1];
		return DF_Mda(function() {
			if (l) {
				for (; l.head != h[1];) l = l.ka;
				for (; l.next != l.head;) return l = l.next, {
					done: !1,
					value: k(l)
				};
				l = null
			}
			return {
				done: !0,
				value: void 0
			}
		})
	}

	function d(h, k) {
		var l = k && typeof k;
		"object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
		var m = h[0][l];
		if (m && DF_Mea(h[0], l))
			for (h = 0; h < m.length; h++) {
				var n = m[h];
				if (k !== k && n.key !== n.key || k === n.key) return {
					id: l,
					list: m,
					index: h,
					W: n
				}
			}
		return {
			id: l,
			list: m,
			index: -1,
			W: void 0
		}
	}

	function e(h) {
		this[0] = {};
		this[1] = b();
		this.size = 0;
		if (h) {
			h = DF_Md(h);
			for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
		}
	}
	if (function() {
			if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
			try {
				var h = Object.seal({
						x: 4
					}),
					k = new a(DF_Md([
						[h, "s"]
					]));
				if ("s" != k.get(h) || 1 != k.size || k.get({
						x: 4
					}) || k.set({
						x: 4
					}, "t") != k || 2 != k.size) return !1;
				var l = k.entries(),
					m = l.next();
				if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
				m = l.next();
				return m.done ||
					4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
			} catch (n) {
				return !1
			}
		}()) return a;
	var f = new WeakMap;
	e.prototype.set = function(h, k) {
		h = 0 === h ? 0 : h;
		var l = d(this, h);
		l.list || (l.list = this[0][l.id] = []);
		l.W ? l.W.value = k : (l.W = {
			next: this[1],
			ka: this[1].ka,
			head: this[1],
			key: h,
			value: k
		}, l.list.push(l.W), this[1].ka.next = l.W, this[1].ka = l.W, this.size++);
		return this
	};
	e.prototype.delete = function(h) {
		h = d(this, h);
		return h.W && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.W.ka.next = h.W.next, h.W.next.ka =
			h.W.ka, h.W.head = null, this.size--, !0) : !1
	};
	e.prototype.clear = function() {
		this[0] = {};
		this[1] = this[1].ka = b();
		this.size = 0
	};
	e.prototype.has = function(h) {
		return !!d(this, h).W
	};
	e.prototype.get = function(h) {
		return (h = d(this, h).W) && h.value
	};
	e.prototype.entries = function() {
		return c(this, function(h) {
			return [h.key, h.value]
		})
	};
	e.prototype.keys = function() {
		return c(this, function(h) {
			return h.key
		})
	};
	e.prototype.values = function() {
		return c(this, function(h) {
			return h.value
		})
	};
	e.prototype.forEach = function(h, k) {
		for (var l = this.entries(),
				m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
	};
	e.prototype[Symbol.iterator] = e.prototype.entries;
	var g = 0;
	return e
});
DF_Mb("WeakSet", function(a) {
	function b(c) {
		this.g = new WeakMap;
		if (c) {
			c = DF_Md(c);
			for (var d; !(d = c.next()).done;) this.add(d.value)
		}
	}
	if (function() {
			if (!a || !Object.seal) return !1;
			try {
				var c = Object.seal({}),
					d = Object.seal({}),
					e = new a([c]);
				if (!e.has(c) || e.has(d)) return !1;
				e.delete(c);
				e.add(d);
				return !e.has(c) && e.has(d)
			} catch (f) {
				return !1
			}
		}()) return a;
	b.prototype.add = function(c) {
		this.g.set(c, !0);
		return this
	};
	b.prototype.has = function(c) {
		return this.g.has(c)
	};
	b.prototype.delete = function(c) {
		return this.g.delete(c)
	};
	return b
});
DF_Mb("Object.is", function(a) {
	return a ? a : function(b, c) {
		return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
	}
});
DF_Mb("Set", function(a) {
	function b(c) {
		this.g = new Map;
		if (c) {
			c = DF_Md(c);
			for (var d; !(d = c.next()).done;) this.add(d.value)
		}
		this.size = this.g.size
	}
	if (function() {
			if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
			try {
				var c = Object.seal({
						x: 4
					}),
					d = new a(DF_Md([c]));
				if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
						x: 4
					}) != d || 2 != d.size) return !1;
				var e = d.entries(),
					f = e.next();
				if (f.done || f.value[0] != c || f.value[1] != c) return !1;
				f = e.next();
				return f.done || f.value[0] == c || 4 !=
					f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
			} catch (g) {
				return !1
			}
		}()) return a;
	b.prototype.add = function(c) {
		c = 0 === c ? 0 : c;
		this.g.set(c, c);
		this.size = this.g.size;
		return this
	};
	b.prototype.delete = function(c) {
		c = this.g.delete(c);
		this.size = this.g.size;
		return c
	};
	b.prototype.clear = function() {
		this.g.clear();
		this.size = 0
	};
	b.prototype.has = function(c) {
		return this.g.has(c)
	};
	b.prototype.entries = function() {
		return this.g.entries()
	};
	b.prototype.values = function() {
		return this.g.values()
	};
	b.prototype.keys = b.prototype.values;
	b.prototype[Symbol.iterator] = b.prototype.values;
	b.prototype.forEach = function(c, d) {
		var e = this;
		this.g.forEach(function(f) {
			return c.call(d, f, f, e)
		})
	};
	return b
});
DF_Mb("Object.entries", function(a) {
	return a ? a : function(b) {
		var c = [],
			d;
		for (d in b) DF_Mea(b, d) && c.push([d, b[d]]);
		return c
	}
});
DF_Mb("globalThis", function(a) {
	return a || DF_Ma
});
DF_Mb("Array.from", function(a) {
	return a ? a : function(b, c, d) {
		c = null != c ? c : function(h) {
			return h
		};
		var e = [],
			f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
		if ("function" == typeof f) {
			b = f.call(b);
			for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
		} else
			for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
		return e
	}
});

function DF_Mxa(a, b) {
	a instanceof String && (a += "");
	var c = 0,
		d = !1,
		e = {
			next: function() {
				if (!d && c < a.length) {
					var f = c++;
					return {
						value: b(f, a[f]),
						done: !1
					}
				}
				d = !0;
				return {
					done: !0,
					value: void 0
				}
			}
		};
	e[Symbol.iterator] = function() {
		return e
	};
	return e
}
DF_Mb("Array.prototype.keys", function(a) {
	return a ? a : function() {
		return DF_Mxa(this, function(b) {
			return b
		})
	}
});
DF_Mb("Array.prototype.flat", function(a) {
	return a ? a : function(b) {
		b = void 0 === b ? 1 : b;
		var c = [];
		Array.prototype.forEach.call(this, function(d) {
			Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
		});
		return c
	}
});
DF_Mb("Array.prototype.includes", function(a) {
	return a ? a : function(b, c) {
		var d = this;
		d instanceof String && (d = String(d));
		var e = d.length;
		c = c || 0;
		for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
			var f = d[c];
			if (f === b || Object.is(f, b)) return !0
		}
		return !1
	}
});

function DF_Mya(a, b, c) {
	if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
	if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
	return a + ""
}
DF_Mb("String.prototype.includes", function(a) {
	return a ? a : function(b, c) {
		return -1 !== DF_Mya(this, b, "includes").indexOf(b, c || 0)
	}
});
DF_Mb("String.prototype.endsWith", function(a) {
	return a ? a : function(b, c) {
		var d = DF_Mya(this, b, "endsWith");
		void 0 === c && (c = d.length);
		c = Math.max(0, Math.min(c | 0, d.length));
		for (var e = b.length; 0 < e && 0 < c;)
			if (d[--c] != b[--e]) return !1;
		return 0 >= e
	}
});
DF_Mb("Array.prototype.entries", function(a) {
	return a ? a : function() {
		return DF_Mxa(this, function(b, c) {
			return [b, c]
		})
	}
});
DF_Mb("Array.prototype.values", function(a) {
	return a ? a : function() {
		return DF_Mxa(this, function(b, c) {
			return c
		})
	}
});
DF_Mb("String.prototype.startsWith", function(a) {
	return a ? a : function(b, c) {
		var d = DF_Mya(this, b, "startsWith"),
			e = d.length,
			f = b.length;
		c = Math.max(0, Math.min(c | 0, d.length));
		for (var g = 0; g < f && c < e;)
			if (d[c++] != b[g++]) return !1;
		return g >= f
	}
});
DF_Mb("Array.prototype.fill", function(a) {
	return a ? a : function(b, c, d) {
		var e = this.length || 0;
		0 > c && (c = Math.max(0, e + c));
		if (null == d || d > e) d = e;
		d = Number(d);
		0 > d && (d = Math.max(0, e + d));
		for (c = Number(c || 0); c < d; c++) this[c] = b;
		return this
	}
});

function DF_Mza(a) {
	return a ? a : Array.prototype.fill
}
DF_Mb("Int8Array.prototype.fill", DF_Mza);
DF_Mb("Uint8Array.prototype.fill", DF_Mza);
DF_Mb("Uint8ClampedArray.prototype.fill", DF_Mza);
DF_Mb("Int16Array.prototype.fill", DF_Mza);
DF_Mb("Uint16Array.prototype.fill", DF_Mza);
DF_Mb("Int32Array.prototype.fill", DF_Mza);
DF_Mb("Uint32Array.prototype.fill", DF_Mza);
DF_Mb("Float32Array.prototype.fill", DF_Mza);
DF_Mb("Float64Array.prototype.fill", DF_Mza);
DF_Mb("Promise.prototype.finally", function(a) {
	return a ? a : function(b) {
		return this.then(function(c) {
			return Promise.resolve(b()).then(function() {
				return c
			})
		}, function(c) {
			return Promise.resolve(b()).then(function() {
				throw c;
			})
		})
	}
});
DF_Mb("Object.fromEntries", function(a) {
	return a ? a : function(b) {
		var c = {};
		if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
		b = b[Symbol.iterator].call(b);
		for (var d = b.next(); !d.done; d = b.next()) {
			d = d.value;
			if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
			c[d[0]] = d[1]
		}
		return c
	}
});
DF_Mb("Math.trunc", function(a) {
	return a ? a : function(b) {
		b = Number(b);
		if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
		var c = Math.floor(Math.abs(b));
		return 0 > b ? -c : c
	}
});

function DF_MAa(a) {
	a = Math.trunc(a) || 0;
	0 > a && (a += this.length);
	if (!(0 > a || a >= this.length)) return this[a]
}
DF_Mb("Array.prototype.at", function(a) {
	return a ? a : DF_MAa
});

function DF_MBa(a) {
	return a ? a : DF_MAa
}
DF_Mb("Int8Array.prototype.at", DF_MBa);
DF_Mb("Uint8Array.prototype.at", DF_MBa);
DF_Mb("Uint8ClampedArray.prototype.at", DF_MBa);
DF_Mb("Int16Array.prototype.at", DF_MBa);
DF_Mb("Uint16Array.prototype.at", DF_MBa);
DF_Mb("Int32Array.prototype.at", DF_MBa);
DF_Mb("Uint32Array.prototype.at", DF_MBa);
DF_Mb("Float32Array.prototype.at", DF_MBa);
DF_Mb("Float64Array.prototype.at", DF_MBa);
DF_Mb("String.prototype.at", function(a) {
	return a ? a : DF_MAa
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var DF_Mj = this || self;

function DF_MCa(a, b, c) {
	return a.call.apply(a.bind, arguments)
}

function DF_MDa(a, b, c) {
	if (!a) throw Error();
	if (2 < arguments.length) {
		var d = Array.prototype.slice.call(arguments, 2);
		return function() {
			var e = Array.prototype.slice.call(arguments);
			Array.prototype.unshift.apply(e, d);
			return a.apply(b, e)
		}
	}
	return function() {
		return a.apply(b, arguments)
	}
}

function DF_MEa(a, b, c) {
	DF_MEa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? DF_MCa : DF_MDa;
	return DF_MEa.apply(null, arguments)
}

function DF_MFa(a, b) {
	var c = Array.prototype.slice.call(arguments, 1);
	return function() {
		var d = c.slice();
		d.push.apply(d, arguments);
		return a.apply(this, d)
	}
}

function DF_MGa(a, b) {
	function c() {}
	c.prototype = b.prototype;
	a.Fd = b.prototype;
	a.prototype = new c;
	a.prototype.constructor = a;
	a.Ld = function(d, e, f) {
		for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
		return b.prototype[e].apply(d, g)
	}
}

function DF_MHa(a) {
	return a
};

function DF_Mk(a, b, c, d) {
	var e = arguments.length,
		f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
		g;
	if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);
	else
		for (var h = a.length - 1; 0 <= h; h--)
			if (g = a[h]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
	return 3 < e && f && Object.defineProperty(b, c, f), f
}

function DF_Ml(a, b) {
	if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(a, b)
};
var DF_MIa = !/^\s*class\s*\{\s*\}\s*$/.test(function() {}.toString());
var DF_MJa = DF_Mj.Reflect;

function DF_MKa() {
	return DF_MJa.construct(Event, DF_Mi.apply(0, arguments), this.constructor)
}
DF_MKa.prototype = Event.prototype;
var DF_MLa = DF_MIa ? DF_MKa : Event;
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MMa(a, b, c) {
	var d = DF_MLa.call(this, "context-request", {
		bubbles: !0,
		composed: !0
	}) || this;
	d.context = a;
	d.callback = b;
	d.subscribe = null != c ? c : !1;
	return d
}
DF_Mf(DF_MMa, DF_MLa);

function DF_MNa() {
	var a = this;
	this.g = new Map;
	this.h = function(b) {
		var c = a.g.get(b.context);
		if (void 0 !== c) {
			a.g.delete(b.context);
			c = DF_Md(c.vc);
			for (var d = c.next(); !d.done; d = c.next()) {
				var e = d.value;
				d = e.fd.deref();
				e = e.ad.deref();
				void 0 !== d && void 0 !== e && d.dispatchEvent(new DF_MMa(b.context, e, !0))
			}
		}
	};
	this.Qb = function(b) {
		if (!0 === b.subscribe) {
			var c = b.composedPath()[0],
				d = b.callback,
				e = a.g.get(b.context);
			void 0 === e && a.g.set(b.context, e = {
				ic: new WeakMap,
				vc: []
			});
			b = e.ic.get(c);
			void 0 === b && e.ic.set(c, b = new WeakSet);
			b.has(d) || (b.add(d), e.vc.push({
				fd: new WeakRef(c),
				ad: new WeakRef(d)
			}))
		}
	}
};

function DF_MOa(a, b) {
	var c = this;
	this.Tb = this.subscribe = !1;
	this.value = void 0;
	this.Rc = function(e, f) {
		c.unsubscribe && (c.unsubscribe !== f && (c.Tb = !1, c.unsubscribe()), c.subscribe || c.unsubscribe());
		c.value = e;
		DF_MPa(c.host);
		if (!c.Tb || c.subscribe) c.Tb = !0, c.callback && c.callback(e, f);
		c.unsubscribe = f
	};
	this.host = a;
	if (void 0 !== b.context) {
		this.context = b.context;
		this.callback = b.callback;
		var d;
		this.subscribe = null != (d = b.subscribe) ? d : !1
	} else this.context = b, this.callback = void 0, this.subscribe = !1;
	this.host.ec(this)
}
DF_MOa.prototype.Kb = function() {
	this.host.dispatchEvent(new DF_MMa(this.context, this.Rc, this.subscribe))
};
DF_MOa.prototype.rd = function() {
	this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0)
};

function DF_MQa(a) {
	var b = this;
	this.Ka = new Map;
	this.h = function() {
		for (var c = DF_Md(b.Ka), d = c.next(); !d.done; d = c.next()) {
			var e = DF_Md(d.value);
			d = e.next().value;
			e = e.next().value.lc;
			d(b.g, e)
		}
	};
	void 0 !== a && (this.value = a)
}

function DF_MRa(a, b) {
	var c = !Object.is(b, a.g);
	a.g = b;
	c && a.h()
}

function DF_MSa(a, b, c, d) {
	d ? (a.Ka.has(b) || a.Ka.set(b, {
		lc: function() {
			a.Ka.delete(b)
		},
		bd: c
	}), c = a.Ka.get(b).lc, b(a.value, c)) : b(a.value)
}
DF_Ma.Object.defineProperties(DF_MQa.prototype, {
	value: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g
		},
		set: function(a) {
			DF_MRa(this, a)
		}
	}
});

function DF_MTa(a) {
	var b = DF_MLa.call(this, "context-provider", {
		bubbles: !0,
		composed: !0
	}) || this;
	b.context = a;
	return b
}
DF_Mf(DF_MTa, DF_MLa);

function DF_MUa(a, b, c) {
	DF_MQa.call(this, void 0 !== b.context ? b.initialValue : c);
	var d = this;
	this.Qb = function(g) {
		var h = g.composedPath()[0];
		g.context === d.context && h !== d.host && (g.stopPropagation(), DF_MSa(d, g.callback, h, g.subscribe))
	};
	this.xd = function(g) {
		var h = g.composedPath()[0];
		if (g.context === d.context && h !== d.host) {
			h = new Set;
			for (var k = DF_Md(d.Ka), l = k.next(); !l.done; l = k.next()) {
				var m = DF_Md(l.value);
				l = m.next().value;
				m = m.next().value.bd;
				h.has(l) || (h.add(l), m.dispatchEvent(new DF_MMa(d.context, l, !0)))
			}
			g.stopPropagation()
		}
	};
	this.host = a;
	this.context = void 0 !== b.context ? b.context : b;
	this.host.addEventListener("context-request", this.Qb);
	this.host.addEventListener("context-provider", this.xd);
	var e, f;
	null == (f = (e = this.host).ec) || f.call(e, this)
}
DF_Mf(DF_MUa, DF_MQa);
DF_MUa.prototype.Kb = function() {
	this.host.dispatchEvent(new DF_MTa(this.context))
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_Mm(a) {
	var b = a.context,
		c = a.subscribe;
	return function(d, e) {
		"object" === typeof e ? e.l(function() {
			var f = this;
			new DF_MOa(this, {
				context: b,
				callback: function(g) {
					f[e.name] = g
				},
				subscribe: c
			})
		}) : d.constructor.l(function(f) {
			new DF_MOa(f, {
				context: b,
				callback: function(g) {
					f[e] = g
				},
				subscribe: c
			})
		})
	}
};
/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MVa(a) {
	var b = a.context;
	return function(c, d) {
		var e = new WeakMap;
		if ("object" === typeof d) return d.l(function() {
			e.set(this, new DF_MUa(this, {
				context: b
			}))
		}), {
			get: function() {
				return c.get.call(this)
			},
			set: function(k) {
				var l;
				null == (l = e.get(this)) || DF_MRa(l, k);
				return c.set.call(this, k)
			},
			sd: function(k) {
				var l;
				null == (l = e.get(this)) || DF_MRa(l, k);
				return k
			}
		};
		c.constructor.l(function(k) {
			e.set(k, new DF_MUa(k, {
				context: b
			}))
		});
		var f = Object.getOwnPropertyDescriptor(c, d);
		if (void 0 === f) {
			var g = new WeakMap;
			f = {
				get: function() {
					return g.get(this)
				},
				set: function(k) {
					DF_MRa(e.get(this), k);
					g.set(this, k)
				},
				configurable: !0,
				enumerable: !0
			}
		} else {
			var h = f.set;
			f = Object.assign({}, f, {
				set: function(k) {
					DF_MRa(e.get(this), k);
					null == h || h.call(this, k)
				}
			})
		}
		Object.defineProperty(c, d, f)
	}
};

function DF_Mn(a, b, c) {
	console.debug("DF-MESSENGER", "fireCustomEvent", b, c);
	b = new CustomEvent(b, {
		detail: c,
		bubbles: !0,
		composed: !0,
		cancelable: !0
	});
	return a.dispatchEvent(b)
}

function DF_MWa() {
	var a = document.documentElement,
		b = this;
	this.element = a;
	this.name = "df-register-message-consumer";
	this.g = [];
	this.h = function(c) {
		b.g.push(c)
	};
	a.addEventListener("df-register-message-consumer", this.h)
}
DF_MWa.prototype.flush = function() {
	for (var a = DF_Md(this.g), b = a.next(); !b.done; b = a.next()) b = b.value, b.target && b.detail && DF_Mn(b.target, this.name, b.detail);
	this.g = [];
	this.element.removeEventListener(this.name, this.h)
};
var DF_Mo = new Map([
	["en", {
		askSomething: "Ask something...",
		chatTitle: "Chat",
		genericErrorMessage: "Something went wrong, please try again.",
		messageTooLong: "Oops! Your message is {$numOfChars} character(s) too long.",
		authErrorMessage: "Permission denied.",
		openAriaLabel: "Open {$chatTitle}",
		closeAriaLabel: "Close {$chatTitle}",
		sendAriaLabel: "Send",
		inputAriaLabel: "Talk to Agent",
		opensInANewTab: "Opens in a new tab",
		agentSays: "Agent Says:",
		iSay: "I Say:",
		citationsMessage: "Source:",
		feedbackWhyRatingText: "Why did you choose this rating?",
		feedbackOptionalText: "optional",
		feedbackPlaceholder: "Additional Feedback",
		feedbackSubmit: "Submit",
		feedbackChipIrrelevant: "Irrelevant",
		feedbackChipIncorrect: "Incorrect",
		feedbackChipUnsafe: "Unsafe",
		feedbackInputAriaLabel: "Provide additional feedback",
		feedbackCloseAriaLabel: "Close additional feedback",
		feedbackSubmitAriaLabel: "Submit additional feedback",
		feedbackThankYouText: "Thank you for your feedback",
		feedbackPrivacyNoticeText: "Please do not provide any personal or sensitive data",
		requestAccess: "Request Access",
		useCodeWithCautionText: "Use code with caution.",
		copyCodeAriaLabel: "Copy code",
		jumpToBottom: "Jump to bottom",
		youtubeVideoLabel: "Youtube video",
		videoNoSupportFallbackText: "Your browser does not support the video tag.",
		cancelClientSideTask: "Cancel task",
		messageTooLongWarning: 'You\'re writing a long input, which may result in a "no match" result. Shorten your query for a better response.',
		positiveFeedbackAriaLabel: "Good response",
		negativeFeedbackAriaLabel: "Bad response",
		uploadFileAriaLabel: "Upload file",
		microphoneAriaLabel: "Use microphone"
	}]
]);
DF_Mo.set("da", {
	askSomething: "Stil et sp\u00f8rgsm\u00e5l\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Der opstod en fejl. Pr\u00f8v igen.",
	messageTooLong: "Ups! Din besked er {$numOfChars} tegn for lang.",
	authErrorMessage: "Tilladelsen blev n\u00e6gtet.",
	openAriaLabel: "\u00c5bn {$chatTitle}",
	closeAriaLabel: "Luk {$chatTitle}",
	sendAriaLabel: "Send",
	inputAriaLabel: "Tal med en repr\u00e6sentant",
	opensInANewTab: "\u00c5bnes p\u00e5 en ny fane",
	agentSays: "Repr\u00e6sentanten siger:",
	iSay: "Jeg siger:",
	citationsMessage: "Kilde:",
	feedbackWhyRatingText: "Hvorfor valgte du denne bed\u00f8mmelse?",
	feedbackOptionalText: "valgfrit",
	feedbackPlaceholder: "Yderligere feedback",
	feedbackSubmit: "Send",
	feedbackChipIrrelevant: "Irrelevant",
	feedbackChipIncorrect: "Forkert",
	feedbackChipUnsafe: "Usikkert",
	feedbackInputAriaLabel: "Giv yderligere feedback",
	feedbackCloseAriaLabel: "Luk sektion til yderligere feedback",
	feedbackSubmitAriaLabel: "Indsend yderligere feedback",
	feedbackThankYouText: "Tak for din feedback",
	feedbackPrivacyNoticeText: "S\u00f8rg for ikke at angive personlige eller f\u00f8lsomme oplysninger",
	requestAccess: "Anmod om adgang",
	useCodeWithCautionText: "V\u00e6r forsigtig med at bruge denne kode.",
	copyCodeAriaLabel: "Kopi\u00e9r kode",
	jumpToBottom: "G\u00e5 til bunden",
	youtubeVideoLabel: "YouTube-video",
	videoNoSupportFallbackText: "Din browser underst\u00f8tter ikke videotagget.",
	cancelClientSideTask: "Annuller opgave",
	messageTooLongWarning: 'Du er ved at skrive en lang tekst, som kan resultere i et "intet match"-resultat. Forkort din foresp\u00f8rgsel for at f\u00e5 et bedre svar.',
	positiveFeedbackAriaLabel: "Godt svar",
	negativeFeedbackAriaLabel: "D\u00e5rligt svar"
});
DF_Mo.set("de", {
	askSomething: "Stellen Sie eine Frage\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
	messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
	authErrorMessage: "Die Berechtigung wurde verweigert.",
	openAriaLabel: "{$chatTitle} \u00f6ffnen",
	closeAriaLabel: "{$chatTitle} schlie\u00dfen",
	sendAriaLabel: "Senden",
	inputAriaLabel: "Mit Agent sprechen",
	opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
	agentSays: "Agent sagt:",
	iSay: "Ich sage:",
	citationsMessage: "Quelle:",
	feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
	feedbackOptionalText: "optional",
	feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
	feedbackSubmit: "Senden",
	feedbackChipIrrelevant: "Irrelevant",
	feedbackChipIncorrect: "Falsch",
	feedbackChipUnsafe: "Unsicher",
	feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
	feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
	feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
	feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
	feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
	requestAccess: "Zugriff anfordern",
	useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
	copyCodeAriaLabel: "Code kopieren",
	jumpToBottom: "Nach unten springen",
	youtubeVideoLabel: "YouTube-Video",
	videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
	cancelClientSideTask: "Task abbrechen",
	messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
	positiveFeedbackAriaLabel: "Gute Antwort",
	negativeFeedbackAriaLabel: "Schlechte Antwort"
});
DF_Mo.set("de-at", {
	askSomething: "Stellen Sie eine Frage\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
	messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
	authErrorMessage: "Die Berechtigung wurde verweigert.",
	openAriaLabel: "{$chatTitle} \u00f6ffnen",
	closeAriaLabel: "{$chatTitle} schlie\u00dfen",
	sendAriaLabel: "Senden",
	inputAriaLabel: "Mit Agent sprechen",
	opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
	agentSays: "Agent sagt:",
	iSay: "Ich sage:",
	citationsMessage: "Quelle:",
	feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
	feedbackOptionalText: "optional",
	feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
	feedbackSubmit: "Senden",
	feedbackChipIrrelevant: "Irrelevant",
	feedbackChipIncorrect: "Falsch",
	feedbackChipUnsafe: "Unsicher",
	feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
	feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
	feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
	feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
	feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
	requestAccess: "Zugriff anfordern",
	useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
	copyCodeAriaLabel: "Code kopieren",
	jumpToBottom: "Nach unten springen",
	youtubeVideoLabel: "YouTube-Video",
	videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
	cancelClientSideTask: "Task abbrechen",
	messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
	positiveFeedbackAriaLabel: "Gute Antwort",
	negativeFeedbackAriaLabel: "Schlechte Antwort"
});
DF_Mo.set("de-ch", {
	askSomething: "Stellen Sie eine Frage\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
	messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
	authErrorMessage: "Die Berechtigung wurde verweigert.",
	openAriaLabel: "{$chatTitle} \u00f6ffnen",
	closeAriaLabel: "{$chatTitle} schlie\u00dfen",
	sendAriaLabel: "Senden",
	inputAriaLabel: "Mit Agent sprechen",
	opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
	agentSays: "Agent sagt:",
	iSay: "Ich sage:",
	citationsMessage: "Quelle:",
	feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
	feedbackOptionalText: "optional",
	feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
	feedbackSubmit: "Senden",
	feedbackChipIrrelevant: "Irrelevant",
	feedbackChipIncorrect: "Falsch",
	feedbackChipUnsafe: "Unsicher",
	feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
	feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
	feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
	feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
	feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
	requestAccess: "Zugriff anfordern",
	useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
	copyCodeAriaLabel: "Code kopieren",
	jumpToBottom: "Nach unten springen",
	youtubeVideoLabel: "YouTube-Video",
	videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
	cancelClientSideTask: "Task abbrechen",
	messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
	positiveFeedbackAriaLabel: "Gute Antwort",
	negativeFeedbackAriaLabel: "Schlechte Antwort"
});
DF_Mo.set("es", {
	askSomething: "Pregunta algo...",
	chatTitle: "Chat",
	genericErrorMessage: "Se ha producido un error. Vuelve a intentarlo.",
	messageTooLong: "\u00a1Vaya! Tu mensaje contiene caracteres de m\u00e1s: {$numOfChars}",
	authErrorMessage: "Permiso denegado.",
	openAriaLabel: "Abrir {$chatTitle}",
	closeAriaLabel: "Cerrar {$chatTitle}",
	sendAriaLabel: "Enviar",
	inputAriaLabel: "Hablar con agente",
	opensInANewTab: "Se abre en una nueva pesta\u00f1a",
	agentSays: "Mensaje del agente:",
	iSay: "Mi mensaje:",
	citationsMessage: "Fuente:",
	feedbackWhyRatingText: "\u00bfPor qu\u00e9 has elegido esta valoraci\u00f3n?",
	feedbackOptionalText: "opcional",
	feedbackPlaceholder: "M\u00e1s comentarios",
	feedbackSubmit: "Enviar",
	feedbackChipIrrelevant: "Irrelevante",
	feedbackChipIncorrect: "Incorrecto",
	feedbackChipUnsafe: "No seguro",
	feedbackInputAriaLabel: "Proporciona m\u00e1s comentarios",
	feedbackCloseAriaLabel: "Cerrar comentarios adicionales",
	feedbackSubmitAriaLabel: "Enviar m\u00e1s comentarios",
	feedbackThankYouText: "Gracias por enviarnos tus comentarios",
	feedbackPrivacyNoticeText: "No incluyas datos personales ni sensibles",
	requestAccess: "Solicitar acceso",
	useCodeWithCautionText: "Usa el c\u00f3digo con precauci\u00f3n.",
	copyCodeAriaLabel: "Copiar c\u00f3digo",
	jumpToBottom: "Ir al final",
	youtubeVideoLabel: "V\u00eddeo de YouTube",
	videoNoSupportFallbackText: "Tu navegador no es compatible con la etiqueta de v\u00eddeo.",
	cancelClientSideTask: "Cancelar tarea",
	messageTooLongWarning: "Est\u00e1s escribiendo una entrada larga, lo que puede generar un resultado sin coincidencias. Acorta tu consulta para recibir una respuesta m\u00e1s acertada.",
	positiveFeedbackAriaLabel: "Buena respuesta",
	negativeFeedbackAriaLabel: "Mala respuesta"
});
DF_Mo.set("fr", {
	askSomething: "Posez une question\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
	messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
	authErrorMessage: "Autorisation refus\u00e9e.",
	openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
	closeAriaLabel: "Fermer {$chatTitle}",
	sendAriaLabel: "Envoyer",
	inputAriaLabel: "Parlez \u00e0 l'agent",
	opensInANewTab: "La page s'ouvre dans un nouvel onglet",
	agentSays: "L'agent dit\u00a0:",
	iSay: "Je dis\u00a0:",
	citationsMessage: "Source\u00a0:",
	feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
	feedbackOptionalText: "facultatif",
	feedbackPlaceholder: "Autres commentaires",
	feedbackSubmit: "Envoyer",
	feedbackChipIrrelevant: "Non pertinent",
	feedbackChipIncorrect: "Incorrect",
	feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
	feedbackInputAriaLabel: "Fournir d'autres commentaires",
	feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
	feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
	feedbackThankYouText: "Merci de vos commentaires",
	feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
	requestAccess: "Demander l'acc\u00e8s",
	useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
	copyCodeAriaLabel: "Copier le code",
	jumpToBottom: "Aller en bas",
	youtubeVideoLabel: "Vid\u00e9o YouTube",
	videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o.",
	cancelClientSideTask: "Annuler la t\u00e2che",
	messageTooLongWarning: "Vous saisissez une requ\u00eate longue, ce qui peut aboutir \u00e0 un r\u00e9sultat sans correspondance. Raccourcissez votre requ\u00eate pour obtenir une r\u00e9ponse plus appropri\u00e9e.",
	positiveFeedbackAriaLabel: "Bonne r\u00e9ponse",
	negativeFeedbackAriaLabel: "Mauvaise r\u00e9ponse"
});
DF_Mo.set("fr-ch", {
	askSomething: "Posez une question\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
	messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
	authErrorMessage: "Autorisation refus\u00e9e.",
	openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
	closeAriaLabel: "Fermer {$chatTitle}",
	sendAriaLabel: "Envoyer",
	inputAriaLabel: "Parlez \u00e0 l'agent",
	opensInANewTab: "La page s'ouvre dans un nouvel onglet",
	agentSays: "L'agent dit\u00a0:",
	iSay: "Je dis\u00a0:",
	citationsMessage: "Source\u00a0:",
	feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
	feedbackOptionalText: "facultatif",
	feedbackPlaceholder: "Autres commentaires",
	feedbackSubmit: "Envoyer",
	feedbackChipIrrelevant: "Non pertinent",
	feedbackChipIncorrect: "Incorrect",
	feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
	feedbackInputAriaLabel: "Fournir d'autres commentaires",
	feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
	feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
	feedbackThankYouText: "Merci de vos commentaires",
	feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
	requestAccess: "Demander l'acc\u00e8s",
	useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
	copyCodeAriaLabel: "Copier le code",
	jumpToBottom: "Aller en bas",
	youtubeVideoLabel: "Vid\u00e9o YouTube",
	videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o.",
	cancelClientSideTask: "Annuler la t\u00e2che",
	messageTooLongWarning: "Vous saisissez une requ\u00eate longue, ce qui peut aboutir \u00e0 un r\u00e9sultat sans correspondance. Raccourcissez votre requ\u00eate pour obtenir une r\u00e9ponse plus appropri\u00e9e.",
	positiveFeedbackAriaLabel: "Bonne r\u00e9ponse",
	negativeFeedbackAriaLabel: "Mauvaise r\u00e9ponse"
});
DF_Mo.set("hi", {
	askSomething: "\u0915\u0941\u091b \u092a\u0942\u091b\u0947\u0902...",
	chatTitle: "\u091a\u0948\u091f \u0915\u0930\u0947\u0902",
	genericErrorMessage: "\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908, \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902.",
	messageTooLong: "\u0913\u0939! \u0906\u092a\u0915\u0947 \u092e\u0948\u0938\u0947\u091c \u092e\u0947\u0902 {$numOfChars} \u0935\u0930\u094d\u0923 \u091c\u093c\u094d\u092f\u093e\u0926\u093e \u0939\u0948\u0902.",
	authErrorMessage: "\u0905\u0928\u0941\u092e\u0924\u093f \u0928\u0939\u0940\u0902 \u0926\u0940 \u0917\u0908.",
	openAriaLabel: "{$chatTitle} \u0916\u094b\u0932\u0947\u0902",
	closeAriaLabel: "{$chatTitle} \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
	sendAriaLabel: "\u092d\u0947\u091c\u0947\u0902",
	inputAriaLabel: "\u090f\u091c\u0947\u0902\u091f \u0938\u0947 \u092c\u093e\u0924 \u0915\u0930\u0947\u0902",
	opensInANewTab: "\u0928\u090f \u091f\u0948\u092c \u092e\u0947\u0902 \u0916\u0941\u0932\u0924\u093e \u0939\u0948",
	agentSays: "\u090f\u091c\u0947\u0902\u091f \u0928\u0947 \u0915\u0939\u093e:",
	iSay: "\u092e\u0948\u0902\u0928\u0947 \u0915\u0939\u093e:",
	citationsMessage: "\u0938\u094d\u0930\u094b\u0924:",
	feedbackWhyRatingText: "\u0906\u092a\u0915\u0947 \u092f\u0939 \u0930\u0947\u091f\u093f\u0902\u0917 \u0926\u0947\u0928\u0947 \u0915\u0940 \u0935\u091c\u0939 \u0915\u094d\u092f\u093e \u0939\u0948?",
	feedbackOptionalText: "\u091c\u093c\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902",
	feedbackPlaceholder: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935",
	feedbackSubmit: "\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
	feedbackChipIrrelevant: "\u0915\u093e\u092e \u0915\u093e \u0928\u0939\u0940\u0902 \u0939\u0948",
	feedbackChipIncorrect: "\u0917\u0932\u0924 \u0939\u0948",
	feedbackChipUnsafe: "\u0905\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0939\u0948",
	feedbackInputAriaLabel: "\u0915\u094b\u0908 \u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0926\u0947\u0902",
	feedbackCloseAriaLabel: "\u0905\u0928\u094d\u092f \u0936\u093f\u0915\u093e\u092f\u0924 \u0935\u093e\u0932\u093e \u0938\u0947\u0915\u094d\u0936\u0928 \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
	feedbackSubmitAriaLabel: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
	feedbackThankYouText: "\u0906\u092a\u0915\u0947 \u0938\u0941\u091d\u093e\u0935 \u0915\u0947 \u0932\u093f\u090f \u0927\u0928\u094d\u092f\u0935\u093e\u0926",
	feedbackPrivacyNoticeText: "\u0915\u0943\u092a\u092f\u093e \u0915\u094b\u0908 \u0928\u093f\u091c\u0940 \u092f\u093e \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0928 \u0926\u0947\u0902",
	requestAccess: "\u0910\u0915\u094d\u0938\u0947\u0938 \u092e\u093e\u0902\u0917\u0947\u0902",
	useCodeWithCautionText: "\u0915\u094b\u0921 \u0915\u093e \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0938\u093e\u0935\u0927\u093e\u0928\u0940 \u0938\u0947 \u0915\u0930\u0947\u0902.",
	copyCodeAriaLabel: "\u0915\u094b\u0921 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902",
	jumpToBottom: "\u0938\u092c\u0938\u0947 \u0928\u0940\u091a\u0947 \u091c\u093e\u090f\u0902",
	youtubeVideoLabel: "YouTube \u0935\u0940\u0921\u093f\u092f\u094b",
	videoNoSupportFallbackText: "\u0906\u092a\u0915\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u092e\u0947\u0902, \u0935\u0940\u0921\u093f\u092f\u094b \u092e\u0947\u0902 \u091f\u0948\u0917 \u091c\u094b\u0921\u093c\u0928\u0947 \u0915\u0940 \u0938\u0941\u0935\u093f\u0927\u093e \u0915\u093e\u092e \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0940.",
	cancelClientSideTask: "\u091f\u093e\u0938\u094d\u0915 \u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902",
	messageTooLongWarning: '\u0906\u092a\u0915\u093e \u0907\u0928\u092a\u0941\u091f \u092c\u0939\u0941\u0924 \u0932\u0902\u092c\u093e \u0939\u0948. \u0907\u0938 \u0915\u093e\u0930\u0923, \u0906\u092a\u0915\u094b "\u0915\u094b\u0908 \u092e\u0948\u091a \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e" \u0935\u093e\u0932\u093e \u0928\u0924\u0940\u091c\u093e \u092e\u093f\u0932 \u0938\u0915\u0924\u093e \u0939\u0948. \u092c\u0947\u0939\u0924\u0930 \u091c\u0935\u093e\u092c \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u0940 \u0915\u094d\u0935\u0947\u0930\u0940 \u0915\u094b \u091b\u094b\u091f\u093e \u0915\u0930\u0947\u0902.',
	positiveFeedbackAriaLabel: "\u0905\u091a\u094d\u091b\u093e \u091c\u0935\u093e\u092c",
	negativeFeedbackAriaLabel: "\u0916\u0930\u093e\u092c \u091c\u0935\u093e\u092c"
});
DF_Mo.set("it", {
	askSomething: "Poni una domanda\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Si \u00e8 verificato un errore. Riprova.",
	messageTooLong: "Spiacenti. Il tuo messaggio \u00e8 troppo lungo (caratteri oltre la lunghezza massima consentita: {$numOfChars}).",
	authErrorMessage: "Autorizzazione negata.",
	openAriaLabel: "Apri {$chatTitle}",
	closeAriaLabel: "Chiudi {$chatTitle}",
	sendAriaLabel: "Invia",
	inputAriaLabel: "Parla con l'agente",
	opensInANewTab: "Si apre in una nuova scheda",
	agentSays: "Messaggio dell'agente:",
	iSay: "Messaggio dell'utente:",
	citationsMessage: "Fonte:",
	feedbackWhyRatingText: "Perch\u00e9 hai assegnato questa valutazione?",
	feedbackOptionalText: "facoltativo",
	feedbackPlaceholder: "Feedback aggiuntivo",
	feedbackSubmit: "Invia",
	feedbackChipIrrelevant: "Non pertinente",
	feedbackChipIncorrect: "Incorretto",
	feedbackChipUnsafe: "Non sicuro",
	feedbackInputAriaLabel: "Fornisci un feedback aggiuntivo",
	feedbackCloseAriaLabel: "Chiudi feedback aggiuntivo",
	feedbackSubmitAriaLabel: "Invia feedback aggiuntivo",
	feedbackThankYouText: "Grazie per il tuo feedback",
	feedbackPrivacyNoticeText: "Non fornire dati personali o sensibili",
	requestAccess: "Richiedi accesso",
	useCodeWithCautionText: "Usa il codice con cautela.",
	copyCodeAriaLabel: "Copia codice",
	jumpToBottom: "Vai alla fine",
	youtubeVideoLabel: "Video di YouTube",
	videoNoSupportFallbackText: "Il tuo browser non supporta il tag video.",
	cancelClientSideTask: "Annulla attivit\u00e0",
	messageTooLongWarning: 'Stai scrivendo un input lungo, il che potrebbe generare "nessuna corrispondenza" come risultato. Abbrevia la query per una risposta migliore.',
	positiveFeedbackAriaLabel: "Risposta buona",
	negativeFeedbackAriaLabel: "Risposta scadente"
});
DF_Mo.set("nl", {
	askSomething: "Vraag iets...",
	chatTitle: "Chat",
	genericErrorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
	messageTooLong: "Oeps! Uw bericht is {$numOfChars} teken(s) te lang.",
	authErrorMessage: "Toestemming geweigerd.",
	openAriaLabel: "{$chatTitle} openen",
	closeAriaLabel: "{$chatTitle} sluiten",
	sendAriaLabel: "Sturen",
	inputAriaLabel: "Praten met medewerker",
	opensInANewTab: "Wordt op een nieuw tabblad geopend",
	agentSays: "Medewerker zegt:",
	iSay: "Ik zeg:",
	citationsMessage: "Bron:",
	feedbackWhyRatingText: "Waarom heb je deze beoordeling gekozen?",
	feedbackOptionalText: "optioneel",
	feedbackPlaceholder: "Aanvullende feedback",
	feedbackSubmit: "Sturen",
	feedbackChipIrrelevant: "Niet relevant",
	feedbackChipIncorrect: "Onjuist",
	feedbackChipUnsafe: "Onveilig",
	feedbackInputAriaLabel: "Aanvullende feedback geven",
	feedbackCloseAriaLabel: "Aanvullende feedback sluiten",
	feedbackSubmitAriaLabel: "Aanvullende feedback sturen",
	feedbackThankYouText: "Hartelijk dank voor uw feedback",
	feedbackPrivacyNoticeText: "Vermeld geen persoonlijke of gevoelige gegevens",
	requestAccess: "Toegang aanvragen",
	useCodeWithCautionText: "Wees voorzichtig met het gebruik van de code.",
	copyCodeAriaLabel: "Code kopi\u00ebren",
	jumpToBottom: "Naar beneden",
	youtubeVideoLabel: "YouTube-video",
	videoNoSupportFallbackText: "Uw browser ondersteunt de videotag niet.",
	cancelClientSideTask: "Taak annuleren",
	messageTooLongWarning: "Uw invoer is lang, waardoor er misschien geen overeenkomst wordt gevonden. Kort de query in voor een betere reactie.",
	positiveFeedbackAriaLabel: "Goede reactie",
	negativeFeedbackAriaLabel: "Slechte reactie"
});
DF_Mo.set("pt-pt", {
	askSomething: "Fa\u00e7a uma pergunta\u2026",
	chatTitle: "Chat",
	genericErrorMessage: "Algo correu mal. Tente mais tarde.",
	messageTooLong: "Ups! A sua mensagem tem {$numOfChars} car\u00e1ter/carateres a mais.",
	authErrorMessage: "Autoriza\u00e7\u00e3o recusada.",
	openAriaLabel: "Abrir {$chatTitle}",
	closeAriaLabel: "Fechar {$chatTitle}",
	sendAriaLabel: "Enviar",
	inputAriaLabel: "Fale com um agente",
	opensInANewTab: "Abre-se num novo separador",
	agentSays: "O agente disse:",
	iSay: "Eu disse:",
	citationsMessage: "Fonte:",
	feedbackWhyRatingText: "Porque escolheu esta classifica\u00e7\u00e3o?",
	feedbackOptionalText: "opcional",
	feedbackPlaceholder: "Feedback adicional",
	feedbackSubmit: "Enviar",
	feedbackChipIrrelevant: "Irrelevante",
	feedbackChipIncorrect: "Incorreto",
	feedbackChipUnsafe: "Inseguro",
	feedbackInputAriaLabel: "Envie feedback adicional",
	feedbackCloseAriaLabel: "Fechar feedback adicional",
	feedbackSubmitAriaLabel: "Enviar feedback adicional",
	feedbackThankYouText: "Obrigado pelo seu feedback",
	feedbackPrivacyNoticeText: "N\u00e3o partilhe dados pessoais nem confidenciais",
	requestAccess: "Pedir acesso",
	useCodeWithCautionText: "Use o c\u00f3digo com cuidado.",
	copyCodeAriaLabel: "Copiar c\u00f3digo",
	jumpToBottom: "Ir para o final",
	youtubeVideoLabel: "V\u00eddeo do YouTube",
	videoNoSupportFallbackText: "O seu navegador n\u00e3o suporta a etiqueta de v\u00eddeo.",
	cancelClientSideTask: "Cancelar tarefa",
	messageTooLongWarning: 'A sua entrada \u00e9 demasiado comprida, o que pode originar o resultado "Sem correspond\u00eancias". Encurte a consulta para obter uma melhor resposta.',
	positiveFeedbackAriaLabel: "Boa resposta",
	negativeFeedbackAriaLabel: "Resposta de baixa qualidade"
});
DF_Mo.set("sv", {
	askSomething: "St\u00e4ll en fr\u00e5ga\u00a0\u2026",
	chatTitle: "Chatt",
	genericErrorMessage: "Ett fel uppstod. F\u00f6rs\u00f6k igen.",
	messageTooLong: "Hoppsan! Ditt meddelande \u00e4r {$numOfChars} tecken f\u00f6r l\u00e5ngt.",
	authErrorMessage: "Beh\u00f6righet nekad.",
	openAriaLabel: "\u00d6ppna {$chatTitle}",
	closeAriaLabel: "St\u00e4ng {$chatTitle}",
	sendAriaLabel: "Skicka",
	inputAriaLabel: "Prata med representant",
	opensInANewTab: "\u00d6ppnas p\u00e5 en ny flik",
	agentSays: "Representanten s\u00e4ger:",
	iSay: "Jag s\u00e4ger:",
	citationsMessage: "K\u00e4lla:",
	feedbackWhyRatingText: "Varf\u00f6r valde du det h\u00e4r betyget?",
	feedbackOptionalText: "valfritt",
	feedbackPlaceholder: "\u00d6vrig feedback",
	feedbackSubmit: "Skicka",
	feedbackChipIrrelevant: "Irrelevant",
	feedbackChipIncorrect: "Felaktig",
	feedbackChipUnsafe: "Os\u00e4ker",
	feedbackInputAriaLabel: "L\u00e4mna ytterligare feedback",
	feedbackCloseAriaLabel: "St\u00e4ng ytterligare feedback",
	feedbackSubmitAriaLabel: "L\u00e4mna ytterligare feedback",
	feedbackThankYouText: "Tack f\u00f6r din feedback!",
	feedbackPrivacyNoticeText: "Ange inga personliga eller k\u00e4nsliga uppgifter",
	requestAccess: "Beg\u00e4r \u00e5tkomst",
	useCodeWithCautionText: "Anv\u00e4nd koden med f\u00f6rsiktighet.",
	copyCodeAriaLabel: "Kopiera kod",
	jumpToBottom: "Hoppa l\u00e4ngst ned",
	youtubeVideoLabel: "YouTube-video",
	videoNoSupportFallbackText: "Din webbl\u00e4sare har inte st\u00f6d f\u00f6r videotaggen.",
	cancelClientSideTask: "Avbryt uppgift",
	messageTooLongWarning: "Du skriver ett l\u00e5ngt meddelande, vilket kan leda till att ingen matchning hittas. F\u00f6rkorta s\u00f6kfr\u00e5gan f\u00f6r att f\u00e5 ett b\u00e4ttre svar.",
	positiveFeedbackAriaLabel: "Bra svar",
	negativeFeedbackAriaLabel: "D\u00e5ligt svar"
});

function DF_Mp(a, b, c) {
	a = DF_MXa(a, b);
	if (!c) return a;
	c = DF_Md(Object.entries(c));
	for (b = c.next(); !b.done; b = c.next()) {
		var d = DF_Md(b.value);
		b = d.next().value;
		d = d.next().value;
		a = a.replace(new RegExp("\\{\\$" + b + "\\}", "g"), d)
	}
	return a
}

function DF_MXa(a, b) {
	var c, d;
	if (c = null == (d = globalThis.dfMessengerTexts) ? void 0 : d[b]) return c;
	if (!a) return DF_Mo.get("en")[b] || "";
	a = a.toLowerCase();
	return DF_Mo.has(a) ? (a = DF_Mo.get(a)[b]) ? a : DF_Mo.get("en")[b] || "" : DF_Mo.get("en")[b] || ""
};

function DF_MYa(a, b, c) {
	var d = new Image;
	d.onload = function() {
		b()
	};
	d.onerror = function() {
		c()
	};
	d.src = a
}

function DF_MZa(a) {
	return {
		type: "text",
		text: a
	}
}

function DF_M_a(a) {
	var b = a.filter(DF_M0a);
	a = a.filter(DF_M1a);
	var c = [],
		d = a.filter(function(e) {
			return "html" === e.type
		});
	0 < d.length && c.push.apply(c, DF_Me(d.map(function(e) {
		return e
	})));
	0 < b.length && c.push({
		type: "customCard",
		richElements: b
	});
	DF_M2a(a, "custom_template", c);
	DF_M2a(a, "match_citations", c);
	DF_M2a(a, "chips", c);
	DF_M2a(a, "files", c);
	return c
}

function DF_M2a(a, b, c) {
	a = a.filter(function(d) {
		return d.type === b
	});
	0 !== a.length && c.push.apply(c, DF_Me(a.map(function(d) {
		return d
	})))
}

function DF_M3a(a) {
	return void 0 !== a && null !== a
}

function DF_M1a(a) {
	return "chips" === a.type || "html" === a.type || "match_citations" === a.type || "custom_template" === a.type || "files" === a.type
}

function DF_M0a(a) {
	return !DF_M1a(a)
}

function DF_M4a(a, b, c) {
	return null != a ? a : DF_Mp(b, c)
}

function DF_M5a(a) {
	DF_Mn(a, "df-messenger-scroll-into-view", {
		padding: 10,
		element: a
	})
}

function DF_M6a(a) {
	return "string" === typeof a || a instanceof String
}

function DF_M7a(a) {
	return null != a && ("object" === typeof a || a instanceof Object) && !Array.isArray(a)
}
var DF_M8a = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu\.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;

function DF_M9a(a) {
	if ((a = a.match(DF_M8a)) && !(6 > a.length)) return a[6]
}

function DF_M$a(a) {
	return function() {
		var b = !1;
		return function() {
			b || (b = a())
		}
	}()
}

function DF_Mab(a, b) {
	return 0 > b ? !0 : a <= b
};

function DF_Mq(a) {
	return function(b, c) {
		void 0 !== c ? c.l(function() {
			customElements.define(a, b)
		}) : customElements.define(a, b)
	}
};
/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mbb = !DF_MIa || HTMLElement.es5Shimmed || void 0 === DF_Mj.Reflect || void 0 === DF_Mj.customElements || DF_Mj.customElements.polyfillWrapFlushCallback || !1,
	DF_Mcb;

function DF_Mdb() {
	function a() {
		return c.construct(b, [], this.constructor)
	}
	var b = HTMLElement;
	if (DF_Mbb) return b;
	if (void 0 !== DF_Mcb) return DF_Mcb;
	var c = DF_Mj.Reflect;
	a.prototype = b.prototype;
	a.prototype.constructor = a;
	a.es5Shimmed = !0;
	Object.setPrototypeOf(a, b);
	return DF_Mcb = a
}
var DF_Meb = !1;
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mfb = DF_Mj.ShadowRoot && (void 0 === DF_Mj.ShadyCSS || DF_Mj.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
	DF_Mgb = Symbol(),
	DF_Mhb = new WeakMap;

function DF_Mib(a, b, c) {
	this._$cssResult$ = !0;
	if (c !== DF_Mgb) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
	this.cssText = a;
	this.h = b
}
DF_Mib.prototype.toString = function() {
	return this.cssText
};
DF_Ma.Object.defineProperties(DF_Mib.prototype, {
	g: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a = this.i,
				b = this.h;
			if (DF_Mfb && void 0 === a) {
				var c = void 0 !== b && 1 === b.length;
				c && (a = DF_Mhb.get(b));
				void 0 === a && ((this.i = a = new CSSStyleSheet).replaceSync(this.cssText), c && DF_Mhb.set(b, a))
			}
			return a
		}
	}
});

function DF_Mr(a) {
	var b = DF_Mi.apply(1, arguments);
	return function() {
		var c = 1 === a.length ? a[0] : b.reduce(function(d, e, f) {
			if (!0 === e._$cssResult$) e = e.cssText;
			else if ("number" !== typeof e) throw Error("Value passed to 'css' function must be a 'css' function result: " + (e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
			return d + e + a[f + 1]
		}, a[0]);
		return new DF_Mib(c, a, DF_Mgb)
	}()
}

function DF_Mjb(a, b) {
	if (DF_Mfb) a.adoptedStyleSheets = b.map(function(f) {
		return f instanceof CSSStyleSheet ? f : f.g
	});
	else {
		b = DF_Md(b);
		for (var c = b.next(); !c.done; c = b.next()) {
			c = c.value;
			var d = document.createElement("style"),
				e = DF_Mj.litNonce;
			void 0 !== e && d.setAttribute("nonce", e);
			d.textContent = c.cssText;
			a.appendChild(d)
		}
	}
}
var DF_Mkb = DF_Mfb ? function(a) {
	return a
} : function(a) {
	if (a instanceof CSSStyleSheet) {
		var b = "";
		a = DF_Md(a.cssRules);
		for (var c = a.next(); !c.done; c = a.next()) b += c.value.cssText;
		b = new DF_Mib("string" === typeof b ? b : String(b), void 0, DF_Mgb)
	} else b = a;
	return b
};

function DF_Mlb(a) {
	if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
		a = a.ReactiveElement.prototype;
		window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto(a);
		var b = a.ia;
		a.ia = function() {
			var e = this.localName;
			if (window.ShadyCSS.nativeShadow) return b.call(this);
			if (!this.constructor.hasOwnProperty("__scoped")) {
				this.constructor.__scoped = !0;
				var f = this.constructor.o.map(function(l) {
						return l instanceof CSSStyleSheet ? Array.from(l.cssRules).reduce(function(m,
							n) {
							return m + n.cssText
						}, "") : l.cssText
					}),
					g, h;
				null == (g = window.ShadyCSS) || null == (h = g.ScopingShim) || h.prepareAdoptedCssText(f, e);
				void 0 === this.constructor.Ic && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), e)
			}
			var k;
			return null != (k = this.shadowRoot) ? k : this.attachShadow(this.constructor.D)
		};
		var c = a.connectedCallback;
		a.connectedCallback = function() {
			c.call(this);
			this.Ia && window.ShadyCSS.styleElement(this)
		};
		var d = a.vb;
		a.vb = function(e) {
			this.Ia || window.ShadyCSS.styleElement(this);
			d.call(this,
				e)
		}
	}
}
var DF_Mmb;
null != (DF_Mmb = window).reactiveElementPolyfillSupport || (DF_Mmb.reactiveElementPolyfillSupport = DF_Mlb);
DF_Mbb || DF_Meb || (DF_Meb = !0, DF_Mj.HTMLElement = DF_Mdb());
var DF_Mnb = DF_Mdb(),
	DF_Mob = Object,
	DF_Mpb = DF_Mob.is,
	DF_Mqb = DF_Mob.defineProperty,
	DF_Mrb = DF_Mob.getOwnPropertyDescriptor,
	DF_Msb = DF_Mob.getOwnPropertyNames,
	DF_Mtb = DF_Mob.getOwnPropertySymbols,
	DF_Mub = DF_Mob.getPrototypeOf,
	DF_Mvb = DF_Mj.trustedTypes,
	DF_Mwb = DF_Mvb ? DF_Mvb.emptyScript : "",
	DF_Mxb = DF_Mj.reactiveElementPolyfillSupport,
	DF_Myb = {
		xc: function(a, b) {
			switch (b) {
				case Boolean:
					a = a ? DF_Mwb : null;
					break;
				case Object:
				case Array:
					a = null == a ? a : JSON.stringify(a)
			}
			return a
		},
		Jb: function(a, b) {
			var c = a;
			switch (b) {
				case Boolean:
					c =
						null !== a;
					break;
				case Number:
					c = null === a ? null : Number(a);
					break;
				case Object:
				case Array:
					try {
						c = JSON.parse(a)
					} catch (d) {
						c = null
					}
			}
			return c
		}
	};

function DF_Mzb(a, b) {
	return !DF_Mpb(a, b)
}
var DF_MAb = {
		m: !0,
		type: String,
		va: DF_Myb,
		K: !1,
		pc: DF_Mzb
	},
	DF_MBb;
null == Symbol.metadata && (Symbol.metadata = Symbol("metadata"));
DF_MBb = Symbol.metadata;
var DF_MCb = new WeakMap;

function DF_Ms() {
	var a = DF_Mnb.call(this) || this;
	a.L = void 0;
	a.G = !1;
	a.Ia = !1;
	a.h = null;
	a.Mc();
	return a
}
DF_Mf(DF_Ms, DF_Mnb);
DF_Ms.l = function(a) {
	this.g();
	var b;
	(null != (b = this.Na) ? b : this.Na = []).push(a)
};
DF_Ms.u = function(a, b) {
	b = void 0 === b ? DF_MAb : b;
	b.state && (b.m = !1);
	this.g();
	this.aa.set(a, b);
	b.Qd || (b = this.i(a, Symbol(), b), void 0 !== b && DF_Mqb(this.prototype, a, b))
};
DF_Ms.i = function(a, b, c) {
	var d, e = null != (d = DF_Mrb(this.prototype, a)) ? d : {
			get: function() {
				return this[b]
			},
			set: function(h) {
				this[b] = h
			}
		},
		f = e.get,
		g = e.set;
	return {
		get: function() {
			return null == f ? void 0 : f.call(this)
		},
		set: function(h) {
			var k = null == f ? void 0 : f.call(this);
			g.call(this, h);
			DF_MPa(this, a, k, c)
		},
		configurable: !0,
		enumerable: !0
	}
};
DF_Ms.C = function(a) {
	var b;
	return null != (b = this.aa.get(a)) ? b : DF_MAb
};
DF_Ms.g = function() {
	if (!this.hasOwnProperty("aa")) {
		var a = DF_Mub(this);
		a.v();
		void 0 !== a.Na && (this.Na = [].concat(DF_Me(a.Na)));
		this.aa = new Map(a.aa)
	}
};
DF_Ms.v = function() {
	DF_MDb();
	if (!this.hasOwnProperty("Ib")) {
		this.Ib = !0;
		this.g();
		if (this.hasOwnProperty("yd")) {
			var a = this.yd,
				b = [].concat(DF_Me(DF_Msb(a)), DF_Me(DF_Mtb(a)));
			b = DF_Md(b);
			for (var c = b.next(); !c.done; c = b.next()) c = c.value, this.u(c, a[c])
		}
		a = this[DF_MBb];
		if (null !== a && (a = DF_MCb.get(a), void 0 !== a))
			for (a = DF_Md(a), b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value, c = c.next().value, this.aa.set(b, c);
		this.eb = new Map;
		a = DF_Md(this.aa);
		for (b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value,
			c = c.next().value, c = this.s(b, c), void 0 !== c && this.eb.set(c, b);
		this.o = this.h(this.j)
	}
};
DF_Ms.h = function(a) {
	var b = [];
	if (Array.isArray(a)) {
		a = new Set(a.flat(Infinity).reverse());
		a = DF_Md(a);
		for (var c = a.next(); !c.done; c = a.next()) b.unshift(DF_Mkb(c.value))
	} else void 0 !== a && b.push(DF_Mkb(a));
	return b
};
DF_Ms.s = function(a, b) {
	b = b.m;
	return !1 === b ? void 0 : "string" === typeof b ? b : "string" === typeof a ? a.toLowerCase() : void 0
};
DF_M = DF_Ms.prototype;
DF_M.Mc = function() {
	var a = this;
	this.Ba = new Promise(function(c) {
		return a.mc = c
	});
	this.i = new Map;
	this.Oc();
	DF_MPa(this);
	var b;
	null == (b = this.constructor.Na) || b.forEach(function(c) {
		return c(a)
	})
};
DF_M.ec = function(a) {
	var b;
	(null != (b = this.j) ? b : this.j = new Set).add(a);
	if (void 0 !== this.T && this.isConnected) {
		var c;
		null == (c = a.Kb) || c.call(a)
	}
};
DF_M.Oc = function() {
	for (var a = new Map, b = DF_Md(this.constructor.aa.keys()), c = b.next(); !c.done; c = b.next()) c = c.value, this.hasOwnProperty(c) && (a.set(c, this[c]), delete this[c]);
	0 < a.size && (this.L = a)
};
DF_M.ia = function() {
	var a, b = null != (a = this.shadowRoot) ? a : this.attachShadow(this.constructor.D);
	DF_Mjb(b, this.constructor.o);
	return b
};
DF_M.connectedCallback = function() {
	null != this.T || (this.T = this.ia());
	this.mc(!0);
	var a;
	null == (a = this.j) || a.forEach(function(b) {
		var c;
		return null == (c = b.Kb) ? void 0 : c.call(b)
	})
};
DF_M.mc = function() {};
DF_M.disconnectedCallback = function() {
	var a;
	null == (a = this.j) || a.forEach(function(b) {
		var c;
		return null == (c = b.rd) ? void 0 : c.call(b)
	})
};
DF_M.attributeChangedCallback = function(a, b, c) {
	this.Hc(a, c)
};
DF_M.Nc = function(a, b) {
	var c = this.constructor.aa.get(a),
		d = this.constructor.s(a, c);
	if (void 0 !== d && !0 === c.K) {
		var e, f = (void 0 !== (null == (e = c.va) ? void 0 : e.xc) ? c.va : DF_Myb).xc(b, c.type);
		this.h = a;
		null == f ? this.removeAttribute(d) : this.setAttribute(d, f);
		this.h = null
	}
};
DF_M.Hc = function(a, b) {
	var c = this.constructor;
	a = c.eb.get(a);
	if (void 0 !== a && this.h !== a) {
		c = c.C(a);
		var d, e = "function" === typeof c.va ? {
			Jb: c.va
		} : void 0 !== (null == (d = c.va) ? void 0 : d.Jb) ? c.va : DF_Myb;
		this.h = a;
		this[a] = e.Jb(b, c.type);
		this.h = null
	}
};

function DF_MPa(a, b, c, d) {
	var e = void 0 === e ? !1 : e;
	if (void 0 !== b) {
		null != d || (d = a.constructor.C(b));
		var f;
		if ((null != (f = d.pc) ? f : DF_Mzb)(e ? void 0 : a[b], c)) a.ub(b, c, d);
		else return
	}!1 === a.G && (a.Ba = a.Lc())
}
DF_M.ub = function(a, b, c) {
	this.i.has(a) || this.i.set(a, b);
	if (!0 === c.K && this.h !== a) {
		var d;
		(null != (d = this.O) ? d : this.O = new Set).add(a)
	}
};
DF_M.Lc = function() {
	var a = this,
		b, c;
	return DF_Mh(function(d) {
		switch (d.g) {
			case 1:
				return a.G = !0, d.G = 2, DF_Mg(d, a.Ba, 4);
			case 4:
				d.g = 3;
				d.G = 0;
				break;
			case 2:
				b = DF_Mqa(d), a.Kd || Promise.reject(b);
			case 3:
				c = DF_MEb(a);
				if (null == c) {
					d.g = 5;
					break
				}
				return DF_Mg(d, c, 5);
			case 5:
				return d.return(!a.G)
		}
	})
};

function DF_MEb(a) {
	if (a.G) {
		if (!a.Ia) {
			null != a.T || (a.T = a.ia());
			if (a.L) {
				for (var b = DF_Md(a.L), c = b.next(); !c.done; c = b.next()) {
					var d = DF_Md(c.value);
					c = d.next().value;
					d = d.next().value;
					a[c] = d
				}
				a.L = void 0
			}
			b = a.constructor.aa;
			if (0 < b.size)
				for (b = DF_Md(b), c = b.next(); !c.done; c = b.next()) d = DF_Md(c.value), c = d.next().value, d = d.next().value, !0 !== d.Jd || a.i.has(c) || void 0 === a[c] || a.ub(c, a[c], d)
		}
		b = !1;
		c = a.i;
		try {
			b = !0;
			var e;
			null == (e = a.j) || e.forEach(function(f) {
				var g;
				return null == (g = f.Od) ? void 0 : g.call(f)
			});
			a.ta(c)
		} catch (f) {
			throw b = !1, a.bc(), f;
		}
		b && a.vb(c)
	}
}
DF_M.vb = function(a) {
	var b;
	null == (b = this.j) || b.forEach(function(c) {
		var d;
		return null == (d = c.Pd) ? void 0 : d.call(c)
	});
	this.Ia || (this.Ia = !0, this.xa(a));
	this.ra(a)
};
DF_M.bc = function() {
	this.i = new Map;
	this.G = !1
};
DF_M.ta = function() {
	var a = this;
	this.O && (this.O = this.O.forEach(function(b) {
		return a.Nc(b, a[b])
	}));
	this.bc()
};
DF_M.ra = function() {};
DF_M.xa = function() {};
DF_Ma.Object.defineProperties(DF_Ms, {
	observedAttributes: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			this.v();
			return this.eb && [].concat(DF_Me(this.eb.keys()))
		}
	}
});
DF_Ms.o = [];
DF_Ms.D = {
	mode: "open"
};
DF_Ms.aa = new Map;
DF_Ms.Ib = new Map;
null == DF_Mxb || DF_Mxb({
	ReactiveElement: DF_Ms
});

function DF_MDb() {
	var a;
	(null != (a = DF_Mj.reactiveElementVersions) ? a : DF_Mj.reactiveElementVersions = []).push("2.0.2");
	DF_MDb = function() {}
};
var DF_MFb = {
	m: !0,
	type: String,
	va: DF_Myb,
	K: !1,
	pc: DF_Mzb
};

function DF_MGb(a, b, c) {
	a = void 0 === a ? DF_MFb : a;
	var d = c.kind,
		e = c.metadata,
		f = DF_MCb.get(e);
	void 0 === f && DF_MCb.set(e, f = new Map);
	f.set(c.name, a);
	if ("accessor" === d) {
		var g = c.name;
		return {
			set: function(k) {
				var l = b.get.call(this);
				b.set.call(this, k);
				DF_MPa(this, g, l, a)
			},
			sd: function(k) {
				void 0 !== k && this.ub(g, void 0, a);
				return k
			}
		}
	}
	if ("setter" === d) {
		var h = c.name;
		return function(k) {
			var l = this[h];
			b.call(this, k);
			DF_MPa(this, h, l, a)
		}
	}
	throw Error("Unsupported decorator location: " + d);
}

function DF_Mt(a) {
	return function(b, c) {
		if ("object" === typeof c) b = DF_MGb(a, b, c);
		else {
			var d = b.hasOwnProperty(c);
			b.constructor.u(c, d ? Object.assign({}, a, {
				Jd: !0
			}) : a);
			b = d ? Object.getOwnPropertyDescriptor(b, c) : void 0
		}
		return b
	}
};

function DF_MHb(a, b, c) {
	c.configurable = !0;
	c.enumerable = !0;
	Reflect.Nd && "object" !== typeof b && Object.defineProperty(a, b, c);
	return c
};

function DF_Mu() {
	return DF_Mt(Object.assign({}, void 0, {
		state: !0,
		m: !1
	}))
};
var DF_MIb = new Set,
	DF_MJb = new Map;

function DF_MKb(a, b) {
	if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
		var c, d, e = (null == (c = window.ShadyDOM) ? 0 : c.inUse) && !0 === (null == (d = window.ShadyDOM) ? void 0 : d.noPatch) ? window.ShadyDOM.wrap : function(n) {
				return n
			},
			f = function(n) {
				var p = DF_MJb.get(n);
				void 0 === p && DF_MJb.set(n, p = []);
				return p
			},
			g = new Map,
			h = a.createElement;
		a.createElement = function(n, p) {
			n = h.call(a, n, p);
			p = null == p ? void 0 : p.scope;
			void 0 !== p && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(n,
				p), void 0 === p || DF_MIb.has(p) || (p = f(p), p.push.apply(p, DF_Me(Array.from(n.content.querySelectorAll("style")).map(function(q) {
				var r;
				null == (r = q.parentNode) || r.removeChild(q);
				return q.textContent
			})))));
			return n
		};
		var k = document.createDocumentFragment(),
			l = document.createComment("");
		b = b.prototype;
		var m = b.ga;
		b.ga = function(n, p) {
			p = void 0 === p ? this : p;
			var q = e(this.ha).parentNode,
				r, t = null == (r = this.options) ? void 0 : r.scope,
				v;
			if ((q instanceof ShadowRoot || q === (null == (v = this.options) ? void 0 : v.Sd)) && void 0 !== t && !DF_MIb.has(t)) {
				r =
					this.ha;
				v = this.Ea;
				k.appendChild(l);
				this.ha = l;
				this.Ea = null;
				m.call(this, n, p);
				n = (null == n ? 0 : n._$litType$) ? this.J.wb.Ha : document.createElement("template");
				p = f(t);
				var u = 0 !== p.length;
				if (u) {
					var x = document.createElement("style");
					x.textContent = p.join("\n");
					n.content.appendChild(x)
				}
				DF_MIb.add(t);
				DF_MJb.delete(t);
				window.ShadyCSS.prepareTemplateStyles(n, t);
				u && window.ShadyCSS.nativeShadow && (t = n.content.querySelector("style"), null !== t && n.content.appendChild(t));
				k.removeChild(l);
				var w;
				if (null == (w = window.ShadyCSS) ?
					0 : w.nativeShadow) w = n.content.querySelector("style"), null !== w && k.appendChild(w.cloneNode(!0));
				q.insertBefore(k, v);
				this.ha = r;
				this.Ea = v
			} else m.call(this, n, p)
		};
		b.ac = function(n) {
			var p, q = null == (p = this.options) ? void 0 : p.scope;
			p = g.get(q);
			void 0 === p && g.set(q, p = new Map);
			q = p.get(n.strings);
			void 0 === q && p.set(n.strings, q = new a(n, this.options));
			return q
		}
	}
}
var DF_MLb;
null != (DF_MLb = window).litHtmlPolyfillSupport || (DF_MLb.litHtmlPolyfillSupport = DF_MKb);
var DF_MMb = "";
if (window.Symbol) {
	var DF_MNb = Symbol();
	"symbol" !== typeof DF_MNb && (DF_MMb = Object.keys(DF_MNb)[0])
}
var DF_MOb = "" !== DF_MMb,
	DF_MPb = DF_MOb ? function(a) {
		return null != a && void 0 !== a[DF_MMb]
	} : function() {
		return !1
	};
if (DF_MOb && !window.Symbol.for) {
	var DF_MQb = new Map;
	window.Symbol.for = function(a) {
		DF_MQb.has(a) || DF_MQb.set(a, Symbol(a));
		return DF_MQb.get(a)
	}
};

function DF_MRb(a) {
	a = a.LitElement;
	if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
		a.Ic = !0;
		a = a.prototype;
		var b = a.ia;
		a.ia = function() {
			this.lb.scope = this.localName;
			return b.call(this)
		}
	}
}
var DF_MSb;
null != (DF_MSb = window).litElementPolyfillSupport || (DF_MSb.litElementPolyfillSupport = DF_MRb);

function DF_MTb(a, b) {
	if (Error.captureStackTrace) Error.captureStackTrace(this, DF_MTb);
	else {
		var c = Error().stack;
		c && (this.stack = c)
	}
	a && (this.message = String(a));
	void 0 !== b && (this.cause = b)
}
DF_MGa(DF_MTb, Error);
DF_MTb.prototype.name = "CustomError";

function DF_MUb(a, b) {
	a = a.split("%s");
	for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
	DF_MTb.call(this, c + a[d])
}
DF_MGa(DF_MUb, DF_MTb);
DF_MUb.prototype.name = "AssertionError";
var DF_MVb = Array.prototype.indexOf ? function(a, b) {
		return Array.prototype.indexOf.call(a, b, void 0)
	} : function(a, b) {
		if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
		for (var c = 0; c < a.length; c++)
			if (c in a && a[c] === b) return c;
		return -1
	},
	DF_MWb = Array.prototype.forEach ? function(a, b, c) {
		Array.prototype.forEach.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
	},
	DF_MXb = Array.prototype.map ? function(a, b) {
		return Array.prototype.map.call(a,
			b, void 0)
	} : function(a, b) {
		for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
		return d
	};

function DF_MYb(a) {
	return Array.prototype.concat.apply([], arguments)
}

function DF_MZb(a) {
	var b = a.length;
	if (0 < b) {
		for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
		return c
	}
	return []
}

function DF_M_b(a, b) {
	return DF_MYb.apply([], DF_MXb(a, b))
};

function DF_M0b(a) {
	var b = [],
		c = 0,
		d;
	for (d in a) b[c++] = d;
	return b
}

function DF_M1b(a) {
	var b = {},
		c;
	for (c in a) b[c] = a[c];
	return b
};
var DF_M2b;

function DF_M3b() {
	if (void 0 === DF_M2b) {
		var a = null,
			b = DF_Mj.trustedTypes;
		if (b && b.createPolicy) {
			try {
				a = b.createPolicy("goog#html", {
					createHTML: DF_MHa,
					createScript: DF_MHa,
					createScriptURL: DF_MHa
				})
			} catch (c) {
				DF_Mj.console && DF_Mj.console.error(c.message)
			}
			DF_M2b = a
		} else DF_M2b = a
	}
	return DF_M2b
};

function DF_M4b(a, b) {
	this.g = a === DF_M5b && b || "";
	this.h = DF_M6b
}
DF_M4b.prototype.toString = function() {
	return this.g
};
var DF_M6b = {},
	DF_M5b = {};

function DF_M7b(a) {
	this.g = a
}
DF_M7b.prototype.toString = function() {
	return this.g + ""
};

function DF_M8b(a) {
	return a instanceof DF_M7b && a.constructor === DF_M7b ? a.g : "type_error:TrustedResourceUrl"
}
var DF_M9b = {};

function DF_M$b(a) {
	var b = DF_M3b();
	a = b ? b.createScriptURL(a) : a;
	return new DF_M7b(a, DF_M9b)
};

function DF_Mac(a) {
	this.g = a
}
DF_Mac.prototype.toString = function() {
	return this.g.toString()
};

function DF_Mbc(a) {
	return a instanceof DF_Mac && a.constructor === DF_Mac ? a.g : "type_error:SafeUrl"
}
var DF_Mcc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
	DF_Mdc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function DF_Mec(a) {
	if (a instanceof DF_Mac) return a;
	a = String(a);
	DF_Mdc.test(a) ? a = new DF_Mac(a, DF_Mfc) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(DF_Mcc) ? new DF_Mac(a, DF_Mfc) : null);
	return a
}
var DF_Mfc = {},
	DF_Mgc = new DF_Mac("about:invalid#zClosurez", DF_Mfc);
var DF_Mhc = String.prototype.trim ? function(a) {
	return a.trim()
} : function(a) {
	return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var DF_Mic = {};

function DF_Mjc(a) {
	this.g = a
}
DF_Mjc.prototype.toString = function() {
	return this.g.toString()
};

function DF_Mkc(a) {
	return a instanceof DF_Mjc && a.constructor === DF_Mjc ? a.g : "type_error:SafeStyle"
}
var DF_Mlc = new DF_Mjc("", DF_Mic);

function DF_Mmc(a) {
	if (a instanceof DF_Mac) return 'url("' + DF_Mbc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
	if (a instanceof DF_M4b) a = a instanceof DF_M4b && a.constructor === DF_M4b && a.h === DF_M6b ? a.g : "type_error:Const";
	else {
		a = String(a);
		var b = a.replace(DF_Mnc, "$1").replace(DF_Mnc, "$1").replace(DF_Moc, "url");
		if (DF_Mpc.test(b)) {
			if (b = !DF_Mqc.test(a)) {
				for (var c = b = !0, d = 0; d < a.length; d++) {
					var e = a.charAt(d);
					"'" == e && c ? b = !b : '"' == e && b && (c = !c)
				}
				b = b && c && DF_Mrc(a)
			}
			a = b ? DF_Msc(a) : "zClosurez"
		} else a = "zClosurez"
	}
	if (/[{;}]/.test(a)) throw new DF_MUb("Value does not allow [{;}], got: %s.",
		[a]);
	return a
}

function DF_Mrc(a) {
	for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
		var e = a.charAt(d);
		if ("]" == e) {
			if (b) return !1;
			b = !0
		} else if ("[" == e) {
			if (!b) return !1;
			b = !1
		} else if (!b && !c.test(e)) return !1
	}
	return b
}
var DF_Mpc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
	DF_Moc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
	DF_Mnc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
	DF_Mqc = /\/\*/;

function DF_Msc(a) {
	return a.replace(DF_Moc, function(b, c, d, e) {
		var f = "";
		d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
			f = h;
			return k
		});
		b = (DF_Mec(d) || DF_Mgc).toString();
		return c + f + b + f + e
	})
};
var DF_Mtc = {};

function DF_Muc(a) {
	this.g = a
}
DF_Muc.prototype.toString = function() {
	return this.g.toString()
};

function DF_Mvc(a) {
	function b(d) {
		Array.isArray(d) ? d.forEach(b) : c += DF_Mwc(d)
	}
	var c = "";
	Array.prototype.forEach.call(arguments, b);
	return new DF_Muc(c, DF_Mtc)
}

function DF_Mwc(a) {
	return a instanceof DF_Muc && a.constructor === DF_Muc ? a.g : "type_error:SafeStyleSheet"
}
var DF_Mxc = new DF_Muc("", DF_Mtc);
var DF_Myc, DF_Mzc;
a: {
	for (var DF_MAc = ["CLOSURE_FLAGS"], DF_MBc = DF_Mj, DF_MCc = 0; DF_MCc < DF_MAc.length; DF_MCc++)
		if (DF_MBc = DF_MBc[DF_MAc[DF_MCc]], null == DF_MBc) {
			DF_Mzc = null;
			break a
		} DF_Mzc = DF_MBc
}
var DF_MDc = DF_Mzc && DF_Mzc[610401301];
DF_Myc = null != DF_MDc ? DF_MDc : !1;

function DF_MEc() {
	var a = DF_Mj.navigator;
	return a && (a = a.userAgent) ? a : ""
}
var DF_MFc, DF_MGc = DF_Mj.navigator;
DF_MFc = DF_MGc ? DF_MGc.userAgentData || null : null;

function DF_MHc(a) {
	return DF_Myc ? DF_MFc ? DF_MFc.brands.some(function(b) {
		return (b = b.brand) && -1 != b.indexOf(a)
	}) : !1 : !1
}

function DF_Mv(a) {
	return -1 != DF_MEc().indexOf(a)
};

function DF_MIc() {
	return DF_Myc ? !!DF_MFc && 0 < DF_MFc.brands.length : !1
}

function DF_MJc() {
	return DF_MIc() ? DF_MHc("Chromium") : (DF_Mv("Chrome") || DF_Mv("CriOS")) && !(DF_MIc() ? 0 : DF_Mv("Edge")) || DF_Mv("Silk")
};
var DF_MKc = {};

function DF_MLc(a) {
	this.g = a
}
DF_MLc.prototype.toString = function() {
	return this.g.toString()
};

function DF_MMc(a) {
	return a instanceof DF_MLc && a.constructor === DF_MLc ? a.g : "type_error:SafeHtml"
}

function DF_MNc(a) {
	var b = DF_M3b();
	a = b ? b.createHTML(a) : a;
	return new DF_MLc(a, DF_MKc)
}
var DF_MOc = new DF_MLc(DF_Mj.trustedTypes && DF_Mj.trustedTypes.emptyHTML || "", DF_MKc);
/*

 SPDX-License-Identifier: Apache-2.0
*/
function DF_MPc(a) {
	this.ud = a
}

function DF_MQc(a) {
	return new DF_MPc(function(b) {
		return b.substr(0, a.length + 1).toLowerCase() === a + ":"
	})
}
var DF_MRc = [DF_MQc("data"), DF_MQc("http"), DF_MQc("https"), DF_MQc("mailto"), DF_MQc("ftp"), new DF_MPc(function(a) {
	return /^[^:]*([/?#]|$)/.test(a)
})];

function DF_MSc(a) {
	var b = void 0 === b ? DF_MRc : b;
	a: if (b = void 0 === b ? DF_MRc : b, !(a instanceof DF_Mac)) {
		for (var c = 0; c < b.length; ++c) {
			var d = b[c];
			if (d instanceof DF_MPc && d.ud(a)) {
				a = new DF_Mac(a, DF_Mfc);
				break a
			}
		}
		a = void 0
	}
	return a || DF_Mgc
}
var DF_MTc = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

function DF_MUc(a) {
	var b = DF_Mi.apply(1, arguments);
	if (0 === b.length) return DF_M$b(a[0]);
	for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
	return DF_M$b(c)
};
var DF_MVc = DF_Mc(["about:invalid#zClosurez"]),
	DF_MXc = DF_MWc;

function DF_MWc(a, b, c) {
	if (1 !== a.nodeType) return DF_MYc;
	b = b.toLowerCase();
	if ("innerhtml" === b || "innertext" === b || "textcontent" === b || "outerhtml" === b) return function() {
		return DF_MZc
	};
	var d = DF_M_c.get(a.tagName + " " + b);
	return void 0 !== d ? d : /^on/.test(b) && "attribute" === c && (a = a.tagName.includes("-") ? HTMLElement.prototype : a, b in a) ? function() {
		throw Error("invalid binding");
	} : DF_MYc
}
var DF_M0c = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
	DF_M1c = DF_M8b(DF_MUc(DF_MVc)),
	DF_MZc = DF_MMc(DF_MOc);

function DF_MYc(a) {
	return a
}

function DF_M2c(a) {
	return DF_M0c.test(String(a)) ? a : DF_M1c
}

function DF_M3c() {
	return DF_M1c
}

function DF_M4c(a) {
	return a instanceof DF_M7b ? DF_M8b(a) : DF_M1c
}
var DF_M_c = new Map([
	["A href", DF_M2c],
	["AREA href", DF_M2c],
	["BASE href", DF_M3c],
	["BUTTON formaction", DF_M2c],
	["EMBED src", DF_M3c],
	["FORM action", DF_M2c],
	["FRAME src", DF_M3c],
	["IFRAME src", DF_M4c],
	["IFRAME srcdoc", function(a) {
		return a instanceof DF_MLc ? DF_MMc(a) : DF_MZc
	}],
	["INPUT formaction", DF_M2c],
	["LINK href", DF_M4c],
	["OBJECT codebase", DF_M3c],
	["OBJECT data", DF_M3c],
	["SCRIPT href", DF_M4c],
	["SCRIPT src", DF_M4c],
	["SCRIPT text", DF_M3c],
	["USE href", DF_M4c]
]);
var DF_M5c, DF_M6c, DF_M7c, DF_M8c = (null == (DF_M5c = DF_Mj.ShadyDOM) ? 0 : DF_M5c.inUse) && (!0 === (null == (DF_M6c = DF_Mj.ShadyDOM) ? void 0 : DF_M6c.noPatch) || "on-demand" === (null == (DF_M7c = DF_Mj.ShadyDOM) ? void 0 : DF_M7c.noPatch)) ? DF_Mj.ShadyDOM.wrap : function(a) {
		return a
	},
	DF_M9c = DF_Mj.trustedTypes,
	DF_M$c = DF_M9c ? DF_M9c.createPolicy("lit-html", {
		createHTML: function(a) {
			return a
		}
	}) : void 0;

function DF_Mad(a) {
	return a
}

function DF_Mbd() {
	return DF_Mad
}
var DF_Mcd = "lit$" + String(Math.random()).slice(9) + "$",
	DF_Mdd = "?" + DF_Mcd,
	DF_Med = "<" + DF_Mdd + ">",
	DF_Mfd = document;

function DF_Mgd(a) {
	return null === a || "object" != typeof a && "function" != typeof a || DF_MPb(a)
}
var DF_Mhd = Array.isArray,
	DF_Mid = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
	DF_Mjd = /--\x3e/g,
	DF_Mkd = />/g,
	DF_Mld = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
	DF_Mmd = /'/g,
	DF_Mnd = /"/g,
	DF_Mod = /^(?:script|style|textarea|title)$/i;

function DF_Mw(a) {
	var b = DF_Mi.apply(1, arguments),
		c = {};
	return c._$litType$ = 1, c.strings = a, c.values = b, c
}
var DF_Mpd = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"),
	DF_Mx = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"),
	DF_Mqd = new WeakMap,
	DF_Mrd = DF_Mfd.createTreeWalker(DF_Mfd, 129);

function DF_Msd(a, b) {
	if (!Array.isArray(a) || !a.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== DF_M$c ? DF_M$c.createHTML(b) : b
}

function DF_Mtd(a, b) {
	var c = a.strings,
		d = a._$litType$;
	this.g = [];
	for (var e = a = 0, f = c.length - 1, g = this.g, h = c.length - 1, k = [], l = 2 === d ? "<svg>" : "", m, n = DF_Mid, p = 0; p < h; p++) {
		for (var q = c[p], r = -1, t = void 0, v = 0, u; v < q.length;) {
			n.lastIndex = v;
			u = n.exec(q);
			if (null === u) break;
			v = n.lastIndex;
			n === DF_Mid ? "!--" === u[1] ? n = DF_Mjd : void 0 !== u[1] ? n = DF_Mkd : void 0 !== u[2] ? (DF_Mod.test(u[2]) && (m = new RegExp("</" + u[2], "g")), n = DF_Mld) : void 0 !== u[3] && (n = DF_Mld) : n === DF_Mld ? ">" === u[0] ? (r = void 0, n = null != (r = m) ? r : DF_Mid, r = -1) : void 0 === u[1] ? r = -2 :
				(r = n.lastIndex - u[2].length, t = u[1], n = void 0 === u[3] ? DF_Mld : '"' === u[3] ? DF_Mnd : DF_Mmd) : n === DF_Mnd || n === DF_Mmd ? n = DF_Mld : n === DF_Mjd || n === DF_Mkd ? n = DF_Mid : (n = DF_Mld, m = void 0)
		}
		v = n === DF_Mld && c[p + 1].startsWith("/>") ? " " : "";
		l += n === DF_Mid ? q + DF_Med : 0 <= r ? (k.push(t), q.slice(0, r) + "$lit$" + q.slice(r)) + DF_Mcd + v : q + DF_Mcd + (-2 === r ? p : v)
	}
	c = [DF_Msd(c, l + (c[h] || "<?>") + (2 === d ? "</svg>" : "")), k];
	c = DF_Md(c);
	m = c.next().value;
	c = c.next().value;
	this.Ha = DF_Mtd.createElement(m, b);
	DF_Mrd.currentNode = this.Ha.content;
	2 === d && (b = this.Ha.content.firstChild,
		b.replaceWith.apply(b, DF_Me(b.childNodes)));
	for (; null !== (b = DF_Mrd.nextNode()) && g.length < f;) {
		if (1 === b.nodeType) {
			if (b.hasAttributes())
				for (d = DF_Md(b.getAttributeNames()), m = d.next(); !m.done; m = d.next()) m = m.value, m.endsWith("$lit$") ? (k = c[e++], h = b.getAttribute(m).split(DF_Mcd), k = /([.?@])?(.*)/.exec(k), g.push({
					type: 1,
					index: a,
					name: k[2],
					strings: h,
					dd: "." === k[1] ? DF_Mud : "?" === k[1] ? DF_Mvd : "@" === k[1] ? DF_Mwd : DF_Mxd
				}), b.removeAttribute(m)) : m.startsWith(DF_Mcd) && (g.push({
					type: 6,
					index: a
				}), b.removeAttribute(m));
			if (DF_Mod.test(b.tagName) &&
				(d = b.textContent.split(DF_Mcd), m = d.length - 1, 0 < m)) {
				b.textContent = DF_M9c ? DF_M9c.emptyScript : "";
				for (h = 0; h < m; h++) b.append(d[h], DF_Mfd.createComment("")), DF_Mrd.nextNode(), g.push({
					type: 2,
					index: ++a
				});
				b.append(d[m], DF_Mfd.createComment(""))
			}
		} else if (8 === b.nodeType)
			if (b.data === DF_Mdd) g.push({
				type: 2,
				index: a
			});
			else
				for (d = -1; - 1 !== (d = b.data.indexOf(DF_Mcd, d + 1));) g.push({
					type: 7,
					index: a
				}), d += DF_Mcd.length - 1;
		a++
	}
}
DF_Mtd.createElement = function(a) {
	var b = DF_Mfd.createElement("template");
	b.innerHTML = a;
	return b
};

function DF_Myd(a, b, c, d) {
	c = void 0 === c ? a : c;
	if (b === DF_Mpd) return b;
	var e, f = void 0 !== d ? null == (e = c.h) ? void 0 : e[d] : c.F;
	e = DF_Mgd(b) ? void 0 : b._$litDirective$;
	var g;
	if ((null == (g = f) ? void 0 : g.constructor) !== e) {
		var h, k;
		null == (h = f) || null == (k = h._$notifyDirectiveConnectionChanged) || k.call(h, !1);
		void 0 === e ? f = void 0 : (f = new e(a), f.Jc(a, c, d));
		if (void 0 !== d) {
			var l, m;
			(null != (m = (l = c).h) ? m : l.h = [])[d] = f
		} else c.F = f
	}
	void 0 !== f && (b = DF_Myd(a, f.Kc(a, b.values), f, d));
	return b
}

function DF_Mzd(a, b) {
	this.h = [];
	this.i = void 0;
	this.wb = a;
	this.g = b
}
DF_Mzd.prototype.G = function(a) {
	var b = this.wb,
		c = b.Ha.content;
	b = b.g;
	var d, e = (null != (d = null == a ? void 0 : a.Md) ? d : DF_Mfd).importNode(c, !0);
	DF_Mrd.currentNode = e;
	c = DF_Mrd.nextNode();
	for (var f = d = 0, g = b[0]; void 0 !== g;) {
		if (d === g.index) {
			var h = void 0;
			2 === g.type ? h = new DF_MAd(c, c.nextSibling, this, a) : 1 === g.type ? h = new g.dd(c, g.name, g.strings, this, a) : 6 === g.type && (h = new DF_MBd(c, this, a));
			this.h.push(h);
			g = b[++f]
		}
		h = void 0;
		d !== (null == (h = g) ? void 0 : h.index) && (c = DF_Mrd.nextNode(), d++)
	}
	DF_Mrd.currentNode = DF_Mfd;
	return e
};
DF_Mzd.prototype.j = function(a) {
	for (var b = 0, c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== d && (void 0 !== d.strings ? (d.ga(a, d, b), b += d.strings.length - 2) : d.ga(a[b])), b++
};
DF_Ma.Object.defineProperties(DF_Mzd.prototype, {
	parentNode: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.parentNode
		}
	},
	fa: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.fa
		}
	}
});

function DF_MAd(a, b, c, d) {
	this.type = 2;
	this.J = DF_Mx;
	this.i = void 0;
	this.ha = a;
	this.Ea = b;
	this.g = c;
	this.options = d;
	var e;
	this.j = null != (e = null == d ? void 0 : d.isConnected) ? e : !0;
	this.h = void 0
}
DF_M = DF_MAd.prototype;
DF_M.ga = function(a, b) {
	a = DF_Myd(this, a, void 0 === b ? this : b);
	DF_Mgd(a) ? a === DF_Mx || null == a || "" === a ? (this.J !== DF_Mx && this.cb(), this.J = DF_Mx) : a !== this.J && a !== DF_Mpd && this.cc(a) : void 0 !== a._$litType$ ? this.Tc(a) : void 0 !== a.nodeType ? this.yb(a) : DF_Mhd(a) || "function" === typeof(null == a ? void 0 : a[Symbol.iterator]) ? this.Sc(a) : this.cc(a)
};
DF_M.Ab = function(a) {
	return DF_M8c(DF_M8c(this.ha).parentNode).insertBefore(a, this.Ea)
};
DF_M.yb = function(a) {
	if (this.J !== a) {
		this.cb();
		if (DF_MXc !== DF_Mbd) {
			var b, c = null == (b = this.ha.parentNode) ? void 0 : b.nodeName;
			if ("STYLE" === c || "SCRIPT" === c) throw Error("Forbidden");
		}
		this.J = this.Ab(a)
	}
};
DF_M.cc = function(a) {
	if (this.J !== DF_Mx && DF_Mgd(this.J)) {
		var b = DF_M8c(this.ha).nextSibling;
		void 0 === this.h && (this.h = DF_MXc(b, "data", "property"));
		a = this.h(a);
		b.data = a
	} else b = DF_Mfd.createTextNode(""), this.yb(b), void 0 === this.h && (this.h = DF_MXc(b, "data", "property")), a = this.h(a), b.data = a;
	this.J = a
};
DF_M.Tc = function(a) {
	var b = a.values,
		c = a._$litType$;
	a = "number" === typeof c ? this.ac(a) : (void 0 === c.Ha && (c.Ha = DF_Mtd.createElement(DF_Msd(c.kd, c.kd[0]), this.options)), c);
	var d;
	(null == (d = this.J) ? void 0 : d.wb) === a ? this.J.j(b) : (d = new DF_Mzd(a, this), a = d.G(this.options), d.j(b), this.yb(a), this.J = d)
};
DF_M.ac = function(a) {
	var b = DF_Mqd.get(a.strings);
	void 0 === b && DF_Mqd.set(a.strings, b = new DF_Mtd(a));
	return b
};
DF_M.Sc = function(a) {
	DF_Mhd(this.J) || (this.J = [], this.cb());
	var b = this.J,
		c = 0,
		d;
	a = DF_Md(a);
	for (var e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new DF_MAd(this.Ab(DF_Mfd.createComment("")), this.Ab(DF_Mfd.createComment("")), this, this.options)) : d = b[c], d.ga(e), c++;
	c < b.length && (this.cb(d && DF_M8c(d.Ea).nextSibling, c), b.length = c)
};
DF_M.cb = function(a, b) {
	a = void 0 === a ? DF_M8c(this.ha).nextSibling : a;
	var c;
	for (null == (c = this.G) || c.call(this, !1, !0, b); a && a !== this.Ea;) b = DF_M8c(a).nextSibling, DF_M8c(a).remove(), a = b
};

function DF_MCd(a, b) {
	if (void 0 === a.g) {
		a.j = b;
		var c;
		null == (c = a.G) || c.call(a, b)
	}
}
DF_Ma.Object.defineProperties(DF_MAd.prototype, {
	fa: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a, b;
			return null != (b = null == (a = this.g) ? void 0 : a.fa) ? b : this.j
		}
	},
	parentNode: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a = DF_M8c(this.ha).parentNode,
				b = this.g,
				c;
			void 0 !== b && 11 === (null == (c = a) ? void 0 : c.nodeType) && (a = b.parentNode);
			return a
		}
	}
});

function DF_Mxd(a, b, c, d, e) {
	this.type = 1;
	this.J = DF_Mx;
	this.i = void 0;
	this.element = a;
	this.name = b;
	this.g = d;
	this.options = e;
	2 < c.length || "" !== c[0] || "" !== c[1] ? (this.J = Array(c.length - 1).fill(new String), this.strings = c) : this.J = DF_Mx;
	this.Fa = void 0
}
DF_Mxd.prototype.ga = function(a, b, c, d) {
	b = void 0 === b ? this : b;
	var e = this.strings,
		f = !1;
	if (void 0 === e) {
		if (a = DF_Myd(this, a, b, 0), f = !DF_Mgd(a) || a !== this.J && a !== DF_Mpd) this.J = a
	} else {
		var g = a;
		a = e[0];
		var h;
		for (h = 0; h < e.length - 1; h++) {
			var k = DF_Myd(this, g[c + h], b, h);
			k === DF_Mpd && (k = this.J[h]);
			f || (f = !DF_Mgd(k) || k !== this.J[h]);
			if (k === DF_Mx) a = DF_Mx;
			else if (a !== DF_Mx) {
				var l = void 0;
				a += (null != (l = k) ? l : "") + e[h + 1]
			}
			this.J[h] = k
		}
	}
	f && !d && this.zb(a)
};
DF_Mxd.prototype.zb = function(a) {
	if (a === DF_Mx) DF_M8c(this.element).removeAttribute(this.name);
	else {
		void 0 === this.Fa && (this.Fa = DF_MXc(this.element, this.name, "attribute"));
		var b;
		a = this.Fa(null != (b = a) ? b : "");
		var c;
		DF_M8c(this.element).setAttribute(this.name, null != (c = a) ? c : "")
	}
};
DF_Ma.Object.defineProperties(DF_Mxd.prototype, {
	tagName: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.element.tagName
		}
	},
	fa: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.fa
		}
	}
});

function DF_Mud() {
	DF_Mxd.apply(this, arguments);
	this.type = 3
}
DF_Mf(DF_Mud, DF_Mxd);
DF_Mud.prototype.zb = function(a) {
	void 0 === this.Fa && (this.Fa = DF_MXc(this.element, this.name, "property"));
	a = this.Fa(a);
	this.element[this.name] = a === DF_Mx ? void 0 : a
};

function DF_Mvd() {
	DF_Mxd.apply(this, arguments);
	this.type = 4
}
DF_Mf(DF_Mvd, DF_Mxd);
DF_Mvd.prototype.zb = function(a) {
	DF_M8c(this.element).toggleAttribute(this.name, !!a && a !== DF_Mx)
};

function DF_Mwd(a, b, c, d, e) {
	DF_Mxd.call(this, a, b, c, d, e);
	this.type = 5
}
DF_Mf(DF_Mwd, DF_Mxd);
DF_Mwd.prototype.ga = function(a, b) {
	var c;
	a = null != (c = DF_Myd(this, a, void 0 === b ? this : b, 0)) ? c : DF_Mx;
	if (a !== DF_Mpd) {
		b = this.J;
		c = a === DF_Mx && b !== DF_Mx || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive;
		var d = a !== DF_Mx && (b === DF_Mx || c);
		c && this.element.removeEventListener(this.name, this, b);
		d && this.element.addEventListener(this.name, this, a);
		this.J = a
	}
};
DF_Mwd.prototype.handleEvent = function(a) {
	if ("function" === typeof this.J) {
		var b, c;
		this.J.call(null != (c = null == (b = this.options) ? void 0 : b.host) ? c : this.element, a)
	} else this.J.handleEvent(a)
};

function DF_MBd(a, b, c) {
	this.element = a;
	this.type = 6;
	this.i = void 0;
	this.g = b;
	this.options = c
}
DF_MBd.prototype.ga = function(a) {
	DF_Myd(this, a)
};
DF_Ma.Object.defineProperties(DF_MBd.prototype, {
	fa: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.fa
		}
	}
});
var DF_MDd;
null == (DF_MDd = window.litHtmlPolyfillSupport) || DF_MDd(DF_Mtd, DF_MAd);
var DF_MEd, DF_MFd;
(null != (DF_MFd = DF_Mj.litHtmlVersions) ? DF_MFd : DF_Mj.litHtmlVersions = []).push("3.1.0");
DF_MEd = function(a, b, c) {
	var d, e = null != (d = null == c ? void 0 : c.kb) ? d : b;
	d = e._$litPart$;
	if (void 0 === d) {
		var f;
		d = null != (f = null == c ? void 0 : c.kb) ? f : null;
		e._$litPart$ = d = new DF_MAd(b.insertBefore(DF_Mfd.createComment(""), d), d, void 0, null != c ? c : {})
	}
	d.ga(a);
	return d
};

function DF_My() {
	var a = DF_Ms.apply(this, arguments) || this;
	a.lb = {
		host: a
	};
	a.ea = void 0;
	return a
}
DF_Mf(DF_My, DF_Ms);
DF_My.D = DF_Ms.D;
DF_My.o = DF_Ms.o;
DF_My.s = DF_Ms.s;
DF_My.h = DF_Ms.h;
DF_My.g = DF_Ms.g;
DF_My.C = DF_Ms.C;
DF_My.i = DF_Ms.i;
DF_My.u = DF_Ms.u;
DF_My.l = DF_Ms.l;
DF_M = DF_My.prototype;
DF_M.ia = function() {
	var a = DF_Ms.prototype.ia.call(this),
		b;
	null != (b = this.lb).kb || (b.kb = a.firstChild);
	return a
};
DF_M.ta = function(a) {
	var b = this.render();
	this.Ia || (this.lb.isConnected = this.isConnected);
	DF_Ms.prototype.ta.call(this, a);
	this.ea = DF_MEd(b, this.T, this.lb)
};
DF_M.connectedCallback = function() {
	DF_Ms.prototype.connectedCallback.call(this);
	var a;
	null == (a = this.ea) || DF_MCd(a, !0)
};
DF_M.disconnectedCallback = function() {
	DF_Ms.prototype.disconnectedCallback.call(this);
	var a;
	null == (a = this.ea) || DF_MCd(a, !1)
};
DF_M.render = function() {
	return DF_Mpd
};
DF_My.v = function() {
	DF_MGd();
	return DF_Ms.v.call(this)
};
DF_My._$litElement$ = !0;
DF_My.Ib = !0;
var DF_MHd;
null == (DF_MHd = window.litElementPolyfillSupport) || DF_MHd({
	LitElement: DF_My
});

function DF_MGd() {
	var a, b;
	(null != (b = (a = window).litElementVersions) ? b : a.litElementVersions = []).push("4.0.2");
	DF_MGd = function() {}
};
var DF_MId = DF_M$a(function() {
	var a = new DF_MNa,
		b = document.documentElement;
	b.addEventListener("context-request", a.Qb);
	b.addEventListener("context-provider", a.h);
	return !0
});

function DF_Mz() {
	var a = DF_My.call(this) || this;
	a.chatTitle = null;
	a.chatSubtitle = null;
	a.chatTitleIcon = null;
	a.botWritingText = null;
	a.botWritingImage = null;
	a.requestAuthText = null;
	a.placeholderText = null;
	a.languageCode = null;
	a.botActorImage = null;
	a.userActorImage = null;
	a.enableFileUpload = !1;
	a.enableAudioInput = !1;
	a.audioStateImageActive = null;
	a.audioStateImagePassive = null;
	a.sa = new DF_MWa;
	DF_MId();
	return a
}
DF_Mf(DF_Mz, DF_My);
DF_Mz.D = DF_My.D;
DF_Mz.o = DF_My.o;
DF_Mz.s = DF_My.s;
DF_Mz.h = DF_My.h;
DF_Mz.g = DF_My.g;
DF_Mz.C = DF_My.C;
DF_Mz.i = DF_My.i;
DF_Mz.u = DF_My.u;
DF_Mz.l = DF_My.l;
DF_Mz.v = DF_My.v;

function DF_MJd(a) {
	var b, c;
	return DF_Mh(function(d) {
		return null == (b = a.R) || !b.welcomeIntent || (null == (c = a.R) ? 0 : c.isAuthenticationPending) ? d.return() : DF_Mg(d, a.R.presenter.triggerWelcomeIntent(a.R.welcomeIntent), 0)
	})
}
DF_Ma.Object.defineProperties(DF_Mz.prototype, {
	R: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			this.la = a;
			this.sa.flush()
		},
		get: function() {
			return this.la
		}
	}
});
DF_Mk([DF_Mt({
	m: "chat-title",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "chatTitle", void 0);
DF_Mk([DF_Mt({
	m: "chat-subtitle",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "chatSubtitle", void 0);
DF_Mk([DF_Mt({
	m: "chat-title-icon",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "chatTitleIcon", void 0);
DF_Mk([DF_Mt({
	m: "bot-writing-text",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "botWritingText", void 0);
DF_Mk([DF_Mt({
	m: "bot-writing-image",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "botWritingImage", void 0);
DF_Mk([DF_Mt({
	m: "request-auth-text",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "requestAuthText", void 0);
DF_Mk([DF_Mt({
	m: "placeholder-text",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "placeholderText", void 0);
DF_Mk([DF_Mm({
	context: "df-languagecode",
	subscribe: !0
}), DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "languageCode", void 0);
DF_Mk([DF_Mt({
	m: "bot-actor-image",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "botActorImage", void 0);
DF_Mk([DF_Mt({
	m: "user-actor-image",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "userActorImage", void 0);
DF_Mk([DF_Mt({
	m: "enable-file-upload",
	type: Boolean
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "enableFileUpload", void 0);
DF_Mk([DF_Mt({
	m: "enable-audio-input",
	type: Boolean
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "enableAudioInput", void 0);
DF_Mk([DF_Mt({
	m: "audio-state-image-active",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "audioStateImageActive", void 0);
DF_Mk([DF_Mt({
	m: "audio-state-image-passive",
	type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "audioStateImagePassive", void 0);
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object), DF_Ml("design:paramtypes", [Object])], DF_Mz.prototype, "R", null);
var DF_MKd = DF_Mr([".wrapper{font-family:var(--df-messenger-font-family, var(--df-messenger-default-font-family));font-size:var(--df-messenger-font-size, var(--df-messenger-default-font-size));font-weight:400;margin:0;padding:0;height:100%}.chat-bubble-default-wrapper{position:fixed;bottom:20px;right:20px;z-index:999}"]);

function DF_MLd(a, b) {
	return {
		event: {
			event: a
		},
		languageCode: b || ""
	}
}

function DF_MMd(a, b) {
	return {
		toolCallResult: Object.assign({}, {
			tool: a.tool,
			action: a.action
		}, a.error ? {
			error: {
				message: a.error
			}
		} : {
			outputParameters: a.outputParameters
		}),
		languageCode: b || ""
	}
};

function DF_MNd(a, b) {
	var c = DF_Mi.apply(2, arguments);
	return DF_Mh(function(d) {
		switch (b) {
			case "query":
				return d.return(DF_MOd.apply(null, [a].concat(DF_Me(c))));
			case "event":
				return d.return(DF_MPd.apply(null, [a].concat(DF_Me(c))));
			case "audio":
				return d.return(DF_MQd.apply(null, [a].concat(DF_Me(c))));
			case "feedback":
				return d.return(DF_MRd.apply(null, [a].concat(DF_Me(c))));
			case "tool-call-result":
				return d.return(DF_MSd.apply(null, [a].concat(DF_Me(c))));
			case "tool-call-error":
				return d.return(DF_MTd.apply(null,
					[a].concat(DF_Me(c))));
			default:
				console.error("DF-MESSENGER", "Unknown request type: " + b)
		}
		d.g = 0
	})
}

function DF_MOd(a) {
	var b = DF_Mi.apply(1, arguments),
		c;
	return DF_Mh(function(d) {
		if (1 !== b.length || !DF_M6a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'query' expects string"), d.return();
		c = b[0];
		return DF_Mab(c.length, a.maxQueryLength) ? d.return(a.presenter.sendQuery(c)) : (console.error("DF-MESSENGER", "Bad argument, payload exceeds " + a.maxQueryLength + " characters"), d.return())
	})
}

function DF_MPd(a) {
	var b = DF_Mi.apply(1, arguments),
		c;
	return DF_Mh(function(d) {
		if (1 !== b.length || !DF_M6a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'event' expects string"), d.return();
		c = b[0];
		return d.return(a.presenter.sendDialogflowRequest(DF_MLd(c, a.languageCode)))
	})
}

function DF_MQd(a) {
	var b = DF_Mi.apply(1, arguments),
		c;
	return DF_Mh(function(d) {
		if (1 !== b.length || !DF_M6a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'audio' expects string"), d.return();
		c = b[0];
		return d.return(a.presenter.sendDialogflowRequest({
			audio: {
				audio: c,
				config: {
					audioEncoding: 0,
					sampleRateHertz: 48E3,
					model: "latest_short"
				}
			},
			languageCode: a.languageCode || ""
		}))
	})
}

function DF_MRd(a) {
	var b = DF_Mi.apply(1, arguments),
		c, d;
	return DF_Mh(function(e) {
		if (1 !== b.length || !DF_M7a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'feedback' expects object"), e.return();
		c = b[0];
		return DF_M6a(c.responseId) && DF_M7a(c.answerFeedback) ? 1024 < ((null == (d = c.answerFeedback.customRating) ? void 0 : d.length) || 0) ? (console.error("DF-MESSENGER", "Bad argument, payload's customRating exceeds 1024 characters"), e.return()) : e.return(a.presenter.sendFeedback(c)) : (console.error("DF-MESSENGER",
			"Bad argument type, 'responseId' and 'answerFeedback' are required"), e.return())
	})
}

function DF_MSd(a) {
	var b = DF_Mi.apply(1, arguments),
		c, d, e;
	return DF_Mh(function(f) {
		if (3 !== b.length || !DF_M6a(b[0]) || !DF_M6a(b[1]) || !DF_M7a(b[2])) return console.error("DF-MESSENGER", "Bad argument type, 'tool-call-result' expects string, string, object"), f.return();
		c = b[0];
		d = b[1];
		e = b[2];
		return f.return(a.presenter.sendDialogflowRequest(DF_MMd({
			tool: c,
			action: d,
			outputParameters: e
		}, a.languageCode)))
	})
}

function DF_MTd(a) {
	var b = DF_Mi.apply(1, arguments),
		c, d, e;
	return DF_Mh(function(f) {
		if (3 !== b.length || !DF_M6a(b[0]) || !DF_M6a(b[1]) || !DF_M6a(b[2])) return console.error("DF-MESSENGER", "Bad argument type, 'tool-call-error' expects string, string, string"), f.return();
		c = b[0];
		d = b[1];
		e = b[2];
		return f.return(a.presenter.sendDialogflowRequest(DF_MMd({
			tool: c,
			action: d,
			error: e
		}, a.languageCode)))
	})
};
var DF_MUd = DF_Mr([".auth-screen-wrapper{width:100%;height:100%;background:var(--df-messenger-auth-background,var(--df-messenger-auth-background-color,rgba(204,204,204,.8)));display:flex;justify-content:center;align-items:center}.auth-screen-wrapper .auth-button{background:var(--df-messenger-auth-button-background,var(--df-messenger-auth-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));color:var(--df-messenger-auth-button-font-color,#fff);font-family:var(--df-messenger-auth-button-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-auth-button-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );padding:8px;border:var(--df-messenger-auth-button-border,none);border-radius:var(--df-messenger-auth-button-border-radius,8px)}"]);
var DF_MVd = DF_Mc(["var(--df-messenger-focus-color-contrast, var(--df-messenger-default-focus-color-contrast))"]),
	DF_MWd = DF_Mc(["var(--df-messenger-focus-color, var(--df-messenger-default-focus-color))"]),
	DF_MXd = DF_Mc(["\n    border-radius: ", ";\n    border: 3px solid\n      ", ";\n    bottom: 0;\n    box-sizing: border-box;\n    content: '';\n    left: 0;\n    outline: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n  "]),
	DF_MYd = DF_Mc(["inherit"]),
	DF_MZd = DF_Mc(["inherit"]),
	DF_M_d = DF_Mc(["\n  .visually-hidden {\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    outline: 0;\n    user-select: none;\n  }\n\n  .focus-outline:focus-visible,\n  .focus-outline-contrast:focus-visible {\n    outline: none;\n    position: relative;\n  }\n\n  .focus-outline:focus-visible::before {\n    ",
		"\n  }\n\n  .focus-outline-contrast:focus-visible::before {\n    ", "\n  }\n\n  .focus-outset:focus-visible::before {\n    margin: -5px;\n  }\n\n  .focus-box:focus-visible::before {\n    border-radius: var(--df-messenger-default-border-radius);\n  }\n\n  button.action-button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    border-radius: 999px;\n    transition: background-color 0.3s;\n  }\n\n  button.action-button:hover {\n    background-color: rgba(68, 71, 70, 0.08);\n    transition: background-color 0.3s;\n  }\n\n  .word-wrap {\n    overflow-wrap: break-word;\n    word-break: break-word;\n    word-wrap: break-word;\n  }\n"
	]);

function DF_M0d(a, b) {
	return DF_Mr(DF_MXd, a, (void 0 === b ? 0 : b) ? DF_Mr(DF_MVd) : DF_Mr(DF_MWd))
}
var DF_MA = DF_Mr(DF_M_d, DF_M0d(DF_Mr(DF_MYd), !1), DF_M0d(DF_Mr(DF_MZd), !0));

function DF_MB() {
	var a = DF_My.apply(this, arguments) || this;
	a.languageCode = "";
	return a
}
DF_Mf(DF_MB, DF_My);
DF_MB.D = DF_My.D;
DF_MB.o = DF_My.o;
DF_MB.s = DF_My.s;
DF_MB.h = DF_My.h;
DF_MB.g = DF_My.g;
DF_MB.C = DF_My.C;
DF_MB.i = DF_My.i;
DF_MB.u = DF_My.u;
DF_MB.l = DF_My.l;
DF_MB.v = DF_My.v;
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_MB.prototype, "languageCode", void 0);
var DF_M1d = DF_Mc(['<div class="auth-screen-wrapper">\n      <button class="auth-button" @click="', '">\n        ', "\n      </button>\n    </div>"]);

function DF_MC() {
	var a = DF_MB.apply(this, arguments) || this;
	a.requestAuthText = null;
	return a
}
DF_Mf(DF_MC, DF_MB);
DF_MC.D = DF_MB.D;
DF_MC.o = DF_MB.o;
DF_MC.s = DF_MB.s;
DF_MC.h = DF_MB.h;
DF_MC.g = DF_MB.g;
DF_MC.C = DF_MB.C;
DF_MC.i = DF_MB.i;
DF_MC.u = DF_MB.u;
DF_MC.l = DF_MB.l;
DF_MC.v = DF_MB.v;
DF_MC.prototype.requestAuthentication = function() {
	var a = this;
	return DF_Mh(function(b) {
		return DF_Mg(b, a.yc.requestAuthentication(), 0)
	})
};
DF_MC.prototype.render = function() {
	var a = DF_M4a(this.requestAuthText, this.languageCode, "requestAccess");
	return DF_Mw(DF_M1d, this.requestAuthentication, a)
};
var DF_M2d = DF_MC;
DF_M2d.j = [DF_MUd, DF_MA];
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_M2d.prototype, "yc", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: String
}), DF_Ml("design:type", Object)], DF_M2d.prototype, "requestAuthText", void 0);
DF_M2d = DF_Mk([DF_Mq("df-messenger-auth-screen")], DF_M2d);
var DF_M3d = DF_Mr([".error,.error.show{transition:transform .2s,opacity .2s}.chat-wrapper{height:100%;width:100%;display:flex;flex-direction:column;border:var(--df-messenger-chat-border,none);border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));position:relative;z-index:0}.chat-wrapper df-messenger-auth-screen{position:absolute;z-index:100;inset:0}.chat-wrapper .demo-banner{display:var(--df-messenger-demo-banner,none);position:absolute;z-index:1;left:0;right:0;background:#fef7e0;color:#410e0b;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,\n      var(--df-messenger-default-font-size)\n    );padding:8px;text-align:center;opacity:.8}.message-list-wrapper{flex-grow:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;position:relative}.error,.function-call{display:flex;position:absolute;opacity:0}:host([no-titlebar]) .message-list-wrapper{border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius))}df-messenger-message-list{flex-grow:1;min-height:0;display:flex;flex-direction:column}.error{align-items:center;justify-content:center;background:var(--df-messenger-message-error-background,var(--df-messenger-message-error-background-color,rgba(0,0,0,.87)));box-shadow:1px 4px 15px 0 rgba(0,0,0,.24);color:var(--df-messenger-message-error-font-color,#fff);font-family:var(--df-messenger-message-error-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-error-font-size, 12px);padding:10px;z-index:1;width:100%;box-sizing:border-box;transform:translateY(-100%)}.error.show{opacity:.8;transform:translateY(0)}.function-call{justify-content:var(--df-messenger-chat-function-call-button-align,center);left:0;right:0;bottom:0;visibility:hidden;pointer-events:none;transition:opacity .3s,visibility 0s linear .3s;color:var(--df-messenger-chat-function-call-button-font-color,#fff);font-size:var(--df-messenger-chat-function-call-button-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );padding:var(--df-messenger-chat-function-call-button-container-padding,8px)}.function-call.show{visibility:visible;opacity:1;transition:opacity .3s,visibility}.function-call button{cursor:pointer;pointer-events:auto;background:var(--df-messenger-chat-function-call-button-background,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)));padding:8px 16px;border:none;border-radius:var(--df-messenger-chat-function-call-button-border-radius,999px);color:inherit;font-size:inherit;box-shadow:var(--df-messenger-chat-function-call-button-box-shadow,var(--df-messenger-default-box-shadow))}"]);
var DF_M4d = DF_Mr([":host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,\n      var(--df-messenger-default-border-radius)\n    )}:host([minimized]) #message-list{overflow-y:hidden;padding:var(--df-messenger-chat-padding-minimized,var(--df-messenger-chat-padding,10px))}.message-list-wrapper{background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa));flex-grow:1;display:flex;flex-direction:column;overflow:hidden;position:relative}:host(:not([minimized])) .message-list-wrapper{border-left:var(--df-messenger-chat-messagelist-border,none);border-right:var(--df-messenger-chat-messagelist-border,none)}.message-list-wrapper::after{content:'';position:absolute;bottom:0;display:block;width:100%;padding-top:4px;margin-top:-4px;background:var(--df-messenger-chat-messagelist-scroll-shadow-background,radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),transparent) bottom);pointer-events:none;opacity:0;transition:opacity .3s}.message-list-wrapper.show-shadow::after{opacity:1;transition:opacity .3s}#message-list{flex-grow:1;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll;padding:var(--df-messenger-chat-padding,10px)}.content{flex-grow:1;width:100%;max-width:var(--df-messenger-chat-max-width,none);margin-left:auto;margin-right:auto;display:flex;flex-direction:column}.entry:first-child{margin-top:auto!important}.entry:not(:first-child){margin-top:var(--df-messenger-message-spacing,10px)}.entry{display:flex;gap:var(--df-messenger-message-actor-spacing,16px);opacity:0;animation:.3s .1s forwards present-yourself;border-radius:var(--df-messenger-message-group-border-radius,0);padding:var(--df-messenger-message-group-padding,0)}.entry.bot{background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent));flex-direction:var(--df-messenger-message-bot-actor-order,row)}.entry.user{background:var(--df-messenger-message-user-group-background,var(--df-messenger-message-user-group-background-color,transparent));flex-direction:var(--df-messenger-message-user-actor-order,row-reverse)}.actor-container{display:flex;flex-direction:var(--df-messenger-message-actor-direction,column);justify-content:var(--df-messenger-message-actor-align,flex-start)}.actor{border-radius:var(--df-messenger-message-actor-border-radius,999px);width:var(--df-messenger-message-actor-image-size,24px);height:var(--df-messenger-message-actor-image-size,24px);padding:var(--df-messenger-message-actor-padding,8px);z-index:1}.actor img{width:inherit;height:inherit}.entry.bot .actor{background:var(--df-messenger-message-bot-actor-background,#fff);border:var(--df-messenger-message-bot-actor-border,none);margin:var(--df-messenger-message-bot-actor-offset,0)}.entry.user .actor{background:var(--df-messenger-message-user-actor-background,#fff);border:var(--df-messenger-message-user-actor-border,none);margin:var(--df-messenger-message-user-actor-offset,0)}df-messenger-utterance{flex-grow:1;min-width:0}.scroll-to-bottom,.scroll-to-bottom-legacy{position:absolute;left:0;right:0;bottom:0;visibility:hidden;pointer-events:none;opacity:0;transition:opacity .3s,visibility 0s linear .3s;color:var(--df-messenger-chat-scroll-button-font-color,#fff);font-size:var(--df-messenger-chat-scroll-button-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );padding:var(--df-messenger-chat-scroll-button-container-padding,8px)}.scroll-to-bottom{display:var(--df-messenger-chat-scroll-button-enabled-display,none);justify-content:var(--df-messenger-chat-scroll-button-align,center)}.scroll-to-bottom-legacy{display:var(--df-messenger-chat-scroll-button-display,none)}.scroll-to-bottom-legacy.show,.scroll-to-bottom.show{visibility:visible;opacity:1;transition:opacity .3s,visibility}.scroll-to-bottom-button{cursor:pointer;pointer-events:auto;display:flex;justify-content:center;align-items:center;background:var(--df-messenger-chat-scroll-button-background,var(--df-messenger-chat-scroll-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));padding:var(--df-messenger-chat-scroll-button-padding,8px 16px);border:var(--df-messenger-chat-scroll-button-border,none);border-radius:var(--df-messenger-chat-scroll-button-border-radius,999px);color:inherit;font-size:inherit;box-shadow:var(--df-messenger-chat-scroll-button-box-shadow,var(--df-messenger-default-box-shadow))}.scroll-to-bottom-legacy .scroll-to-bottom-button{margin:0 auto}.scroll-to-bottom-button .icon{color:inherit;font-size:1.5em}.scroll-to-bottom-button .text{margin-left:8px;display:var(--df-messenger-chat-scroll-button-text-display,inline)}.typing-message{flex-grow:1;min-width:0;display:flex;flex-direction:column}.message{align-self:var(--df-messenger-message-bot-writing-align,var(--df-messenger-message-bot-align,flex-start));margin-top:var(--df-messenger-message-bot-writing-spacing,var(--df-messenger-message-spacing,10px));border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-border-top-left-radius,var(--df-messenger-message-internal-border-radius)));border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-border-top-right-radius,var(--df-messenger-message-internal-border-radius)));border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-border-bottom-left-radius,var(--df-messenger-message-internal-border-radius)));border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-border-bottom-right-radius,var(--df-messenger-message-internal-border-radius)));padding:var(--df-messenger-message-bot-writing-padding,var(--df-messenger-message-padding,12px));margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);background:var(--df-messenger-message-bot-writing-background,var(--df-messenger-message-bot-writing-background-color,var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe))));border:var(--df-messenger-message-bot-writing-border,var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none)));font-family:var(--df-messenger-message-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-bot-writing-font-size,\n      var(--df-messenger-message-font-size,\n        var(--df-messenger-font-size,\n          var(--df-messenger-default-font-size)\n        )\n      )\n    );color:var(--df-messenger-message-bot-writing-font-color,var(--df-messenger-message-bot-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color))));font-weight:var(--df-messenger-message-bot-writing-font-weight,var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal)));line-height:var(--df-messenger-message-line-height, normal)}.message img{width:var(--df-messenger-message-bot-writing-image-width,24px);height:var(--df-messenger-message-bot-writing-image-height,24px)}@keyframes present-yourself{to{opacity:1}}"]);
var DF_M5d = DF_Mr([".feedback-box .separator::after,.feedback-box .separator::before{content:'';display:block;height:var(--df-messenger-message-group-border-radius);background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent))}.feedback-box,.textarea-row{position:relative;display:flex}:host{--df-messenger-internal-message-feedback-icon-fill:var(--df-messenger-message-feedback-icon-font-color,\n      /* Legacy: df-messenger-message-feedback-font-color */\n      var(--df-messenger-message-feedback-font-color,\n        var(--df-messenger-icon-font-color,\n          var(--df-messenger-default-icon-font-color)\n        )\n      )\n    )}.feedback{display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,\n      var(--df-messenger-default-font-size)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}.feedback .thumbs{margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);align-self:var(--df-messenger-message-bot-align,flex-start)}.thumb{border:var(--df-messenger-message-feedback-icon-border,none);border-radius:var(--df-messenger-message-feedback-icon-border-radius,0);background:var(--df-messenger-message-feedback-icon-background,none);padding:var(--df-messenger-message-feedback-icon-padding,0);fill:var(--df-messenger-internal-message-feedback-icon-fill)}.thumb:hover{background:var(--df-messenger-message-feedback-icon-background-hover,var(--df-messenger-message-feedback-icon-background,none))}.thumb.active{fill:var(--df-messenger-message-feedback-icon-font-color-active,var(--df-messenger-internal-message-feedback-icon-fill))}.thumbs-up{margin-right:var(--df-messenger-message-feedback-icon-distance,8px)}.feedback-box{margin-top:10px;flex-direction:column;gap:var(--df-messenger-message-rich-feedback-spacing,10px);padding:var(--df-messenger-message-rich-feedback-padding,0);background:var(--df-messenger-message-rich-feedback-background,none);border-radius:var(--df-messenger-message-rich-feedback-border-radius,0);border:var(--df-messenger-message-rich-feedback-border,none);margin-left:var(--df-messenger-rich-feedback-offset-left,0)}.feedback-box .separator{display:var(--df-messenger-message-rich-feedback-block-separator-display,none);margin:calc(0px - var(--df-messenger-message-rich-feedback-spacing,10px)) var(--df-messenger-message-rich-feedback-block-separator-padding-offset,0);background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa));height:calc(var(--df-messenger-message-stack-spacing,var(--df-messenger-message-spacing,10px)) + var(--df-messenger-message-group-border-radius) * 2)}.feedback-box .separator::before{border-bottom-left-radius:var(--df-messenger-message-group-border-radius);border-bottom-right-radius:var(--df-messenger-message-group-border-radius)}.feedback-box .separator::after{border-top-left-radius:var(--df-messenger-message-group-border-radius);border-top-right-radius:var(--df-messenger-message-group-border-radius);margin-top:10px}.feedback-title-row{display:flex;justify-content:space-between;align-items:center}.feedback-close{padding:12px;margin:-12px -10px -12px -12px;background-color:transparent;border:none;fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))}.feedback-title{font-weight:700}.feedback-subtitle{margin-left:10px;font-weight:400}.feedback-reason-row{display:flex;flex-wrap:wrap;flex-direction:var(--df-messenger-message-rich-feedback-chips-flex-direction,row);gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px);row-gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px)}.feedback-reason-chip,.feedback-submit{border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);margin:0;padding:8px 16px}.feedback-reason-chip{background:var(--df-messenger-message-rich-feedback-chips-background,none);color:var(--df-messenger-message-rich-feedback-chips-font-color,inherit);align-self:flex-start}.feedback-reason-chip:hover,.feedback-submit:not(:disabled):hover{background:var(--df-messenger-message-rich-feedback-chips-background-hover,rgba(68,71,70,.08))}.feedback-reason-chip.active{background:var(--df-messenger-message-rich-feedback-chips-background-active,#e8f0fe);color:var(--df-messenger-message-rich-feedback-chips-font-color-active,#174ea6)}.feedback-submit{background:var(--df-messenger-message-rich-feedback-submit-background,none);color:var(--df-messenger-message-rich-feedback-submit-font-color,inherit);align-self:var(--df-messenger-message-rich-feedback-submit-align,flex-end)}.privacy-notice-row,.thank-you{font-size:12px;color:var(--df-messenger-message-rich-feedback-notice-font-color,var(--df-messenger-default-secondary-font-color))}.feedback-submit:disabled{opacity:.5}.textarea-row  textarea{resize:none;box-sizing:border-box;border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);background:var(--df-messenger-message-rich-feedback-input-background,#fff);color:var(--df-messenger-message-rich-feedback-input-font-color,inherit);padding:8px 16px;font-family:inherit;font-size:inherit;flex-grow:1}.textarea-row  textarea:focus{outline:0}.privacy-notice-row{padding:0 17px}.feedback-submit-row{display:flex;flex-direction:column}.thank-you{margin-top:10px;opacity:0;animation:.3s .1s forwards present-yourself}@keyframes present-yourself{to{opacity:1}}"]);

function DF_M6d(a) {
	return 0 < a ? 1 : 0 > a ? 2 : 0
}
var DF_M7d = [1, 2, 3];
var DF_M8d = DF_Mc(['\n  <svg\n    id="defaultSvg"\n    height="36px"\n    width="36px"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    viewBox="11999 18083\n    41 52">\n    <defs>\n      <style>\n        .cls-1 {\n          clip-path: url(#clip-path);\n        }\n\n        .cls-2 {\n          fill: #ef6c00;\n        }\n\n        .cls-3 {\n          fill: #ff9800;\n        }\n\n        .cls-4 {\n          fill: #bf360c;\n        }\n\n        .cls-4,\n        .cls-5 {\n          opacity: 0.1;\n        }\n\n        .cls-5 {\n          fill: #fff;\n        }\n      </style>\n      <clipPath id="clip-path">\n        <path\n          id="Path_1082"\n          data-name="Path 1082"\n          d="M39.217,10.27,22.275.48a3.559,3.559,0,0,0-3.554,0L1.779,\n          10.27A3.572,3.572,0,0,0,.01,13.357v19.6a3.569,3.569,0,0,0,\n          1.769,3.079l8.479,4.907v10a1.064,1.064,0,0,0,1.071,1.064,\n          1.013,1.013,0,0,0,.527-.146L39.241,36.041a3.532,3.532,0,0,0,\n          1.769-3.079v-19.6A3.575,3.575,0,0,0,39.217,10.27Z"\n          transform="translate(0 0)" />\n      </clipPath>\n    </defs>\n    <g\n      id="Group_1192"\n      data-name="Group 1192"\n      class="cls-1"\n      transform="translate(11998.99 18082.994)">\n      <path\n        id="Path_1078"\n        data-name="Path 1078"\n        class="cls-2"\n        d="M0,13.91V37.6l10.248,5.923V55.377L40.984,\n        37.6V13.91L20.5,25.755Z"\n        transform="translate(0.002 -2.608)" />\n      <path\n        id="Path_1079"\n        data-name="Path 1079"\n        class="cls-3"\n        d="M0,11.175,20.5-.67,40.984,11.175,20.5,23.021Z"\n        transform="translate(0.002 0.127)" />\n      <path\n        id="Path_1080"\n        data-name="Path 1080"\n        class="cls-4"\n        d="M40.5,13.56,20.139,25.332.13,13.763,\n        0,13.844,20.5,25.69,40.984,13.844Z"\n        transform="translate(0.002 -2.542)" />\n      <path\n        id="Path_1081"\n        data-name="Path 1081"\n        class="cls-5"\n        d="M20.5,25.772.13,14,0,14.073,20.5,25.918Z"\n        transform="translate(0.002 -2.625)" />\n    </g>\n  </svg>\n']),
	DF_M9d = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\n  <path d="M0 0h24v24H0z" fill="none" />\n</svg>']),
	DF_M$d = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z" />\n</svg>']),
	DF_Mae = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z" />\n</svg>']),
	DF_Mbe = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z" />\n</svg>']),
	DF_Mce = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z" />\n</svg>']),
	DF_Mde = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path\n    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />\n</svg>']),
	DF_Mee = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  enable-background="new 0 0 24 24">\n  <g>\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n  </g>\n  <g>\n    <g />\n    <path\n      d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z" />\n  </g>\n</svg>']),
	DF_Mfe = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path\n    d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />\n</svg>']),
	DF_Mge = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path d="M320-200v-560l440 280-440 280Z" />\n</svg>']),
	DF_Mhe = DF_Mc(['<svg\n  viewBox="0 0 30 20"\n  id="brandmark"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg">\n  <path\n    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"\n    fill="#FF0000"></path>\n  <path\n    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"\n    fill="white"></path>\n</svg>']),
	DF_Mie = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path\n    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z" />\n</svg>']),
	DF_Mje = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  enable-background="new 0 0 24 24"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <g>\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n  </g>\n  <g>\n    <g />\n    <g>\n      <path\n        d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />\n      <path\n        d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />\n    </g>\n  </g>\n</svg>']),
	DF_Mke = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path\n    d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />\n</svg>']),
	DF_Mle = DF_Mw(DF_M8d),
	DF_Mme = DF_Mw(DF_M9d),
	DF_Mne = DF_Mw(DF_M$d),
	DF_Moe = DF_Mw(DF_Mae),
	DF_Mpe = DF_Mw(DF_Mbe),
	DF_Mqe = DF_Mw(DF_Mce),
	DF_Mre = DF_Mw(DF_Mde),
	DF_Mse = DF_Mw(DF_Mee),
	DF_Mte = DF_Mw(DF_Mfe),
	DF_Mue = DF_Mw(DF_Mge),
	DF_Mve = DF_Mw(DF_Mhe),
	DF_Mwe = DF_Mw(DF_Mie),
	DF_Mxe = DF_Mw(DF_Mje),
	DF_Mye = DF_Mw(DF_Mke);
var DF_Mze = DF_Mc(["var(--df-messenger-default-border-radius)"]),
	DF_MAe = DF_Mc(["\n  .show-focus::after {\n    ", "\n  }\n"]),
	DF_MBe = DF_Mc([' <div class="feedback">\n      <div class="thumbs">\n        ', "", "\n      </div>\n      ", " ", "\n    </div>"]),
	DF_MCe = DF_Mc([' <button\n      class="thumb focus-outline thumbs-up ', '"\n      aria-label="', '"\n      @click=', ">\n      ", "\n    </button>"]),
	DF_MDe = DF_Mc([' <button\n      class="thumb focus-outline thumbs-down ', '"\n      aria-label="', '"\n      @click=',
		">\n      ", "\n    </button>"
	]),
	DF_MEe = DF_Mc([' <div class="feedback-box">\n      <div class="separator"></div>\n      ', "\n    </div>"]),
	DF_MFe = DF_Mc([' <button\n              class="feedback-reason-chip focus-outline\n                    ', '"\n              @click=', ">\n              ", "\n            </button>"]),
	DF_MGe = DF_Mc(' <div class="feedback-box">\n      <div class="separator"></div>\n      <div class="feedback-title-row">\n        <div>\n          <span class="feedback-title">;</span>\n          <span class="feedback-subtitle">(;)</span>\n        </div>\n        <button\n          class="feedback-close focus-outline action-button"\n          @click=;\n          aria-label=";">\n          ;\n        </button>\n      </div>\n      <div class="feedback-reason-row">\n        ;\n      </div>\n      <div class="textarea-row ;">\n        <textarea\n          rows="1"\n          placeholder=";"\n          @input=;\n          @mousedown=;\n          @focusin=;\n          @focusout=;\n          aria-label=";"></textarea>\n      </div>\n      <div class="privacy-notice-row"> ; </div>\n      <div class="feedback-submit-row">\n        <button\n          class="feedback-submit focus-outline"\n          @click=;\n          ?disabled=;\n          aria-label=";">\n          ;\n        </button>\n      </div>\n    </div>'.split(";")),
	DF_MHe = DF_Mc(['<div class="thank-you">', "</div>"]),
	DF_MIe = DF_Mr(DF_MAe, DF_M0d(DF_Mr(DF_Mze), !1));

function DF_MD() {
	var a = DF_MB.apply(this, arguments) || this;
	a.responseId = null;
	a.showNegativeFeedback = !1;
	a.F = !1;
	a.Y = 0;
	a.pb = !1;
	a.nb = !1;
	a.qa = 0;
	a.ob = !1;
	return a
}
DF_Mf(DF_MD, DF_MB);
DF_MD.D = DF_MB.D;
DF_MD.o = DF_MB.o;
DF_MD.s = DF_MB.s;
DF_MD.h = DF_MB.h;
DF_MD.g = DF_MB.g;
DF_MD.C = DF_MB.C;
DF_MD.i = DF_MB.i;
DF_MD.u = DF_MB.u;
DF_MD.l = DF_MB.l;
DF_MD.v = DF_MB.v;
DF_M = DF_MD.prototype;
DF_M.xa = function(a) {
	DF_MB.prototype.xa.call(this, a);
	var b, c;
	this.Y = null != (c = null == (b = this.Ca) ? void 0 : b.presenter.getUtteranceReaction(this.responseId)) ? c : 0
};
DF_M.ta = function(a) {
	DF_MB.prototype.ta.call(this, a);
	this.showNegativeFeedback && this.showNegativeFeedback !== this.F && (a = this.T.querySelector(".feedback-box")) && DF_M5a(a);
	this.F = this.showNegativeFeedback
};
DF_M.render = function() {
	var a = DF_Mp(this.languageCode, "positiveFeedbackAriaLabel");
	var b = 0 < this.Y;
	a = DF_Mw(DF_MCe, b ? "active" : "", a, this.Id.bind(this, b), b ? DF_Moe : DF_Mne);
	b = DF_Mp(this.languageCode, "negativeFeedbackAriaLabel");
	var c = 0 > this.Y;
	b = DF_Mw(DF_MDe, c ? "active" : "", b, this.Hd.bind(this, c), c ? DF_Mqe : DF_Mpe);
	c = DF_MJe(this);
	if (!this.ob || this.showNegativeFeedback) var d = null;
	else d = DF_Mp(this.languageCode, "feedbackThankYouText"), d = DF_Mw(DF_MHe, d);
	return DF_Mw(DF_MBe, a, b, c, d)
};
DF_M.Id = function(a) {
	this.Y = a ? 0 : 1;
	this.showNegativeFeedback = !1;
	var b;
	null == (b = this.Ca) || b.presenter.storeUtteranceReaction(this.responseId, this.Y);
	var c;
	null == (c = this.Ca) || c.presenter.sendFeedback({
		responseId: this.responseId,
		answerFeedback: {
			rating: DF_M6d(this.Y)
		}
	})
};
DF_M.Hd = function(a) {
	this.Y = a ? 0 : -1;
	this.showNegativeFeedback = 0 > this.Y;
	var b;
	null == (b = this.Ca) || b.presenter.storeUtteranceReaction(this.responseId, this.Y);
	var c;
	null == (c = this.Ca) || c.presenter.sendFeedback({
		responseId: this.responseId,
		answerFeedback: {
			rating: DF_M6d(this.Y)
		}
	})
};

function DF_MKe(a) {
	var b = document.createElement("df-external-custom-feedback");
	b.addEventListener("df-custom-submit-feedback-clicked", function(c) {
		c = c.detail;
		console.debug("DF-MESSENGER", "Event df-custom-submit-feedback-clicked received", c);
		DF_MLe(a, {
			responseId: a.responseId,
			answerFeedback: {
				rating: DF_M6d(a.Y),
				customRating: c
			}
		})
	});
	console.debug("DF-MESSENGER", "Registered listener for event df-custom-submit-feedback-clicked");
	return DF_Mw(DF_MEe, b)
}

function DF_MJe(a) {
	if (!a.showNegativeFeedback) return null;
	if (customElements.get("df-external-custom-feedback")) return DF_MKe(a);
	var b = DF_Mp(a.languageCode, "feedbackPlaceholder"),
		c = DF_Mp(a.languageCode, "feedbackInputAriaLabel"),
		d = DF_Mp(a.languageCode, "feedbackWhyRatingText"),
		e = DF_Mp(a.languageCode, "feedbackOptionalText"),
		f = DF_Mp(a.languageCode, "feedbackCloseAriaLabel"),
		g = DF_Mp(a.languageCode, "feedbackPrivacyNoticeText"),
		h = DF_Mp(a.languageCode, "feedbackSubmit"),
		k = DF_Mp(a.languageCode, "feedbackSubmitAriaLabel");
	return DF_Mw(DF_MGe, d, e, a.wc, f, DF_Mme, DF_M7d.map(function(l) {
		return DF_Mw(DF_MFe, a.qa === l ? "active" : "", a.md.bind(a, l), DF_MMe(a, l))
	}), a.nb ? "show-focus" : "", b, a.Bc, function() {
		return a.pb = !0
	}, a.zc, a.Ac, c, g, a.Ed, 0 === a.qa && !a.M, k, h)
}

function DF_MMe(a, b) {
	switch (b) {
		case 1:
			return DF_Mp(a.languageCode, "feedbackChipIrrelevant");
		case 2:
			return DF_Mp(a.languageCode, "feedbackChipIncorrect");
		case 3:
			return DF_Mp(a.languageCode, "feedbackChipUnsafe");
		default:
			return null
	}
}
DF_M.md = function(a) {
	this.qa = this.qa === a ? 0 : a
};
DF_M.Bc = function() {
	this.g.style.height = "";
	this.g.style.height = this.g.scrollHeight + 2 + "px";
	DF_MPa(this)
};
DF_M.zc = function() {
	this.nb = this.pb ? !1 : !0;
	this.pb = !1
};
DF_M.Ac = function() {
	this.nb = !1
};
DF_M.Ed = function() {
	var a;
	DF_MLe(this, {
		responseId: this.responseId,
		answerFeedback: {
			rating: DF_M6d(this.Y),
			ratingReason: Object.assign({}, 0 === this.qa ? {} : {
				reasonLabels: [DF_MMe(this, this.qa)]
			}, {
				feedback: null != (a = this.M) ? a : ""
			})
		}
	})
};

function DF_MLe(a, b) {
	var c;
	null == (c = a.Ca) || c.presenter.sendFeedback(b);
	a.wc();
	a.ob = !0;
	setTimeout(function() {
		a.ob = !1
	}, 2400)
}
DF_M.wc = function() {
	this.qa = 0;
	this.showNegativeFeedback = !1
};
DF_Ma.Object.defineProperties(DF_MD.prototype, {
	g: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.T.querySelector("textarea")
		}
	},
	M: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a;
			return null == (a = this.g) ? void 0 : a.value
		}
	}
});
var DF_MNe = DF_MD;
DF_MNe.j = [DF_M5d, DF_MA, DF_MIe];
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_MNe.prototype, "responseId", void 0);
DF_Mk([DF_Mt({
	type: Boolean
}), DF_Ml("design:type", Object)], DF_MNe.prototype, "showNegativeFeedback", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_MNe.prototype, "Y", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_MNe.prototype, "pb", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_MNe.prototype, "nb", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Number)], DF_MNe.prototype, "qa", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_MNe.prototype, "ob", void 0);
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_MNe.prototype, "Ca", void 0);
DF_MNe = DF_Mk([DF_Mq("df-messenger-feedback")], DF_MNe);
var DF_MOe = DF_Mr([".message-stack{display:flex;flex-direction:column}.message-stack:not(:first-child){margin-top:var(--df-messenger-message-stack-spacing,var(--df-messenger-message-spacing,10px))}.message-stack.none{margin-top:0}df-card,df-chips,df-citations,df-custom-template,df-html-message,df-markdown-message,df-text-message{max-width:100%}df-chips,df-citations{align-self:var(--df-messenger-message-bot-align,flex-start)}df-card{align-self:var(--df-messenger-message-card-align,var(--df-messenger-message-bot-align,flex-start))}df-custom-template{align-self:stretch}:host(:not(.minimized)) df-html-message,:host(:not(.minimized)) df-markdown-message,:host(:not(.minimized)) df-text-message[isbot]{margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);max-width:calc(100% - var(--df-messenger-message-bot-margin-left,0px) - var(--df-messenger-message-bot-margin-right,75px))}df-html-message,df-markdown-message,df-text-message[isbot]{align-self:var(--df-messenger-message-rich-text-align,var(--df-messenger-message-bot-align,flex-start))}:host(:not(.minimized)) df-text-message:not([isbot]){margin-left:var(--df-messenger-message-user-margin-left,75px);margin-right:var(--df-messenger-message-user-margin-right,0);max-width:calc(100% - var(--df-messenger-message-user-margin-left,75px) - var(--df-messenger-message-user-margin-right,0px))}df-text-message:not([isbot]){align-self:var(--df-messenger-message-user-align,flex-end)}.feedback{margin-top:var(--df-messenger-message-feedback-spacing,var(--df-messenger-message-spacing,10px))}:host(.minimized) .feedback{display:none}"]);

function DF_ME(a, b, c) {
	var d = DF_MB.call(this) || this;
	d.type = c;
	d.uniqueId = c + "-" + a + "-" + b;
	return d
}
DF_Mf(DF_ME, DF_MB);
DF_ME.D = DF_MB.D;
DF_ME.o = DF_MB.o;
DF_ME.s = DF_MB.s;
DF_ME.h = DF_MB.h;
DF_ME.g = DF_MB.g;
DF_ME.C = DF_MB.C;
DF_ME.i = DF_MB.i;
DF_ME.u = DF_MB.u;
DF_ME.l = DF_MB.l;
DF_ME.v = DF_MB.v;
DF_ME.prototype.isVisible = function() {
	return !0
};
var DF_MPe = DF_Mc([" ", "\n    ", ""]),
	DF_MQe = DF_Mc([' <div class="feedback">\n      <df-messenger-feedback\n        .responseId=', "></df-messenger-feedback>\n    </div>"]),
	DF_MRe = DF_Mc([' <div class="message-stack ', '"> ', " </div>"]);

function DF_MSe(a) {
	return "chips" === a.type || "match_citations" === a.type || "files" === a.type
}

function DF_MF() {
	return DF_MB.apply(this, arguments) || this
}
DF_Mf(DF_MF, DF_MB);
DF_MF.D = DF_MB.D;
DF_MF.o = DF_MB.o;
DF_MF.s = DF_MB.s;
DF_MF.h = DF_MB.h;
DF_MF.g = DF_MB.g;
DF_MF.C = DF_MB.C;
DF_MF.i = DF_MB.i;
DF_MF.u = DF_MB.u;
DF_MF.l = DF_MB.l;
DF_MF.v = DF_MB.v;
DF_MF.prototype.render = function() {
	var a = DF_MTe(this.utterance.elements),
		b, c, d;
	var e = (null == (b = this.utterance) ? 0 : b.isBot) && (null == (c = this.utterance) ? 0 : c.allowFeedback) && (null == (d = this.Cc) ? 0 : d.reactionsAllowed()) ? DF_Mw(DF_MQe, this.utterance.responseId) : null;
	return DF_Mw(DF_MPe, a, e)
};

function DF_MTe(a) {
	function b(c) {
		return c < a.length - 1 && !DF_MSe(a[c + 1])
	}
	return a.map(function(c, d) {
		var e = DF_MSe(a[d]) ? "none" : 0 < d && !DF_MSe(a[d - 1]) || b(d) ? 0 < d && !DF_MSe(a[d - 1]) ? b(d) ? "mid" : "last" : b(d) ? 0 < d && !DF_MSe(a[d - 1]) ? "mid" : "first" : "unknown" : "single";
		c.classList.add(e);
		0 === d && c.classList.add("first-child");
		d === a.length - 1 && c.classList.add("last-child");
		return DF_Mw(DF_MRe, e, c)
	})
}
var DF_MUe = DF_MF;
DF_MUe.j = [DF_MOe, DF_MA];
DF_Mk([DF_Mt({
	type: Object,
	m: !1
}), DF_Ml("design:type", Object)], DF_MUe.prototype, "utterance", void 0);
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_MUe.prototype, "Cc", void 0);
DF_MUe = DF_Mk([DF_Mq("df-messenger-utterance")], DF_MUe);
var DF_MVe = {
		type: "info",
		title: "",
		subtitle: "",
		image: {
			src: {
				rawUrl: ""
			}
		},
		actionLink: ""
	},
	DF_MWe = {
		type: "description",
		title: "",
		text: []
	},
	DF_MXe = {
		type: "image",
		rawUrl: "",
		accessibilityText: ""
	},
	DF_MYe = {
		type: "list",
		title: "",
		subtitle: "",
		image: {
			src: {
				rawUrl: ""
			}
		},
		event: {
			event: ""
		}
	},
	DF_MZe = {
		type: "button",
		icon: {
			type: "",
			color: ""
		},
		image: {
			src: {
				rawUrl: ""
			}
		},
		text: "",
		link: ""
	},
	DF_M_e = {
		type: "accordion",
		title: "",
		subtitle: "",
		image: {
			src: {
				rawUrl: ""
			}
		},
		text: ""
	},
	DF_M0e = {
		type: "chips",
		options: [{
			text: "Suggestion",
			link: ""
		}, {
			text: "Suggestion with icon",
			image: {
				src: {
					rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
				}
			},
			link: ""
		}, {
			text: "Suggestion with link",
			link: "https://google.com"
		}, {
			text: "Suggestion with link & icon",
			image: {
				src: {
					rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
				}
			},
			link: "https://google.com"
		}]
	},
	DF_M1e = {
		type: "html",
		html: ""
	},
	DF_M2e = {
		type: "match_citations",
		citations: [{
			title: "Citation title",
			subtitle: "Citation subtitle",
			actionLink: ""
		}]
	},
	DF_M3e = {
		type: "custom_template",
		name: "",
		payload: {}
	},
	DF_M4e = {
		type: "video",
		source: {
			type: "link",
			anchor: {
				href: ""
			}
		}
	},
	DF_M5e = {
		type: "files",
		files: [{
			name: "",
			image: {
				rawUrl: ""
			},
			anchor: {
				href: ""
			}
		}]
	};
var DF_M6e = {
	BUILD_EMBED_LABEL: "dialogflow_infobot_20240220_0408_RC00",
	BUILD_BASELINE_CHANGELIST: "608529522",
	BUILD_CHANGELIST: "608529522"
};

function DF_M7e() {}
DF_M7e.prototype.payloadForTesting = function(a) {
	switch (a) {
		case "info":
			return Object.assign({}, DF_MVe);
		case "description":
			return Object.assign({}, DF_MWe);
		case "image":
			return Object.assign({}, DF_MXe);
		case "list":
			return Object.assign({}, DF_MYe);
		case "button":
			return Object.assign({}, DF_MZe);
		case "accordion":
			return Object.assign({}, DF_M_e);
		case "chips":
			return Object.assign({}, DF_M0e);
		case "html":
			return Object.assign({}, DF_M1e);
		case "match_citations":
			return Object.assign({}, DF_M2e);
		case "custom_template":
			return Object.assign({}, DF_M3e);
		case "video":
			return Object.assign({}, DF_M4e);
		case "files":
			return Object.assign({}, DF_M5e);
		case "text":
			return [];
		default:
			console.error("DF-MESSENGER", "Could not find a payload for " + a)
	}
};
DF_M7e.prototype.getBuildChangelist = function() {
	if ("BUILD_CHANGELIST" in DF_M6e) {
		var a = Number(DF_M6e.BUILD_CHANGELIST);
		a = isFinite(a) ? a : void 0
	} else a = void 0;
	return a
};
DF_M7e.prototype.getAvailableLanguages = function() {
	return Array.from(DF_Mo.keys())
};
DF_M7e.prototype.getAvailableTexts = function() {
	return Object.assign({}, DF_Mo.get("en"))
};
var DF_M8e = DF_Mr(["#df-accordion-wrapper,#df-accordion-wrapper #title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}#df-accordion-wrapper{cursor:pointer;display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px);text-decoration:none}#df-accordion-wrapper .top-row{align-items:stretch;background-color:transparent;border:none;display:flex;justify-content:space-between}#df-accordion-wrapper .top-row:hover{cursor:pointer}#df-accordion-wrapper .top-row .content{display:flex}#df-accordion-wrapper #image{margin-right:16px;max-width:24px;max-height:24px}#df-accordion-wrapper #title{font-size:inherit;line-height:22px;font-weight:700;margin:0}#df-accordion-wrapper #subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color));line-height:22px;text-align:left}#df-accordion-wrapper .text-content{display:flex;flex-direction:column;justify-content:space-evenly}#df-accordion-wrapper .text-row{max-height:inherit;transition:max-height .25s ease-in}#df-accordion-wrapper #text{padding-top:10px}.expand-icon{padding:8px;margin:-8px -8px -8px 0}#df-accordion-wrapper #expandIcon{color:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color));font-size:32px;transform:rotate(90deg);transition:transform .15s ease-out}#df-accordion-wrapper #expandIcon.open{font-size:32px;transform:rotate(-90deg);transition:transform .15s ease-in}button{font-family:inherit;font-size:inherit;text-align:left;padding:0}#accordion-content.collapsed{overflow:hidden;max-height:0}#accordion-content.expanded{max-height:unset}"]);
var DF_M9e = DF_Mr([".message :not(pre) > code,.message pre:not(.code-block){background-color:var(--df-messenger-code-block-code-background,#f2f2f2)}.message img,.message table{max-width:100%}.message pre:not(.code-block){border-radius:var(--df-messenger-default-border-radius);padding:var(--df-messenger-code-block-code-padding,16px);overflow:auto hidden}.message :not(pre) > code{border-radius:6px;padding:1px 6px}.message a{text-decoration:var(--df-messenger-link-decoration,var(--df-messenger-default-link-decoration));color:var(--df-messenger-link-font-color,var(--df-messenger-default-link-font-color));background:var(--df-messenger-link-background,var(--df-messenger-link-background-color,transparent));padding:var(--df-messenger-link-padding,0);border:var(--df-messenger-link-border,none);border-radius:var(--df-messenger-link-border-radius,0)}.message table,.message table thead th:first-child{border-top-left-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0))}.message table,.message table thead th:last-child{border-top-right-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0))}.message table,.message table tbody tr:last-child td:first-child{border-bottom-left-radius:var(--df-messenger-table-border-radius,0)}.message table,.message table tbody tr:last-child td:last-child{border-bottom-right-radius:var(--df-messenger-table-border-radius,0)}.message a:visited{color:var(--df-messenger-link-visited-font-color,var(--df-messenger-default-link-font-color))}.message a:hover{color:var(--df-messenger-link-hover-font-color,var(--df-messenger-default-link-font-color))}.message table{width:var(--df-messenger-table-width,auto);border-spacing:0;border-collapse:var(--df-messenger-table-border-collapse,separate)}.message table thead th{font-size:var(--df-messenger-table-header-font-size,\n      var(--df-messenger-table-font-size,\n        var(--df-messenger-font-size,\n          var(--df-messenger-default-font-size)\n        )\n      )\n    );font-weight:var(--df-messenger-table-header-font-weight,bold);color:var(--df-messenger-table-header-font-color,var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color))));text-align:var(--df-messenger-table-header-align,var(--df-messenger-table-align,left));padding:var(--df-messenger-table-header-padding,var(--df-messenger-table-padding,0));border-top:var(--df-messenger-table-header-border-top,none);border-bottom:var(--df-messenger-table-header-border-bottom,none);border-left:var(--df-messenger-table-header-border-left,none);border-right:var(--df-messenger-table-header-border-right,none)}.message table thead th:first-child{border-left:var(--df-messenger-table-header-border-left-first,var(--df-messenger-table-header-border-left,none))}.message table thead th:last-child{border-right:var(--df-messenger-table-header-border-right-last,var(--df-messenger-table-header-border-right,none))}.message table thead tr{background:var(--df-messenger-table-header-background,var(--df-messenger-table-header-background-color,var(--df-messenger-table-background-color,transparent)))}.message table tbody td{font-size:var(--df-messenger-table-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );color:var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));text-align:var(--df-messenger-table-align,left);padding:var(--df-messenger-table-padding,0);border-top:var(--df-messenger-table-border-top,none);border-bottom:var(--df-messenger-table-border-bottom,none);border-left:var(--df-messenger-table-border-left,none);border-right:var(--df-messenger-table-border-right,none)}.message table tbody tr:first-child td{border-top:var(--df-messenger-table-border-top-first,var(--df-messenger-table-border-top,none))}.message table tbody tr:last-child td{border-bottom:var(--df-messenger-table-border-bottom-last,var(--df-messenger-table-border-bottom,none))}.message table tbody td:first-child{border-left:var(--df-messenger-table-border-left-first,var(--df-messenger-table-border-left,none))}.message table tbody td:last-child{border-right:var(--df-messenger-table-border-right-last,var(--df-messenger-table-border-right,none))}.message table tbody tr:nth-child(even){background:var(--df-messenger-table-even-background,var(--df-messenger-table-even-background-color,var(--df-messenger-table-background-color,transparent)))}.message table tbody tr:nth-child(odd){background:var(--df-messenger-table-odd-background,var(--df-messenger-table-odd-background-color,var(--df-messenger-table-background-color,transparent)))}"]);

function DF_M$e(a) {
	return function() {
		var b = DF_Mi.apply(0, arguments),
			c = {};
		return c._$litDirective$ = a, c.values = b, c
	}
}

function DF_Maf() {}
DF_Maf.prototype.Jc = function(a, b, c) {
	this.G = a;
	this.g = b;
	this.j = c
};
DF_Maf.prototype.Kc = function(a, b) {
	return this.i(a, b)
};
DF_Maf.prototype.i = function(a, b) {
	return this.render.apply(this, DF_Me(b))
};
DF_Ma.Object.defineProperties(DF_Maf.prototype, {
	fa: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.fa
		}
	}
});

function DF_Mbf(a) {
	this.value = DF_Mx;
	if (2 !== a.type) throw Error(this.constructor.ed + "() can only be used in child bindings");
}
DF_Mf(DF_Mbf, DF_Maf);
DF_Mbf.prototype.render = function(a) {
	if (a === DF_Mx || void 0 === a) return this.h = void 0, this.value = a;
	if (a === DF_Mpd) return a;
	if (a === this.value) return this.h;
	this.value = a;
	a = [DF_MMc(a)];
	a.raw = a;
	var b = {};
	return this.h = (b._$litType$ = this.constructor.resultType, b.strings = a, b.values = [], b)
};
DF_Mbf.ed = "safeHTML";
DF_Mbf.resultType = 1;
var DF_Mcf = DF_M$e(DF_Mbf);
var DF_Mdf = DF_Mc(["<style>\n      @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n    </style>"]),
	DF_Mef = DF_Mc([' <div class="expand-icon">\n          <span\n            class="', '"\n            id="expandIcon"\n            aria-hidden="true"\n            >chevron_right</span\n          >\n        </div>']),
	DF_Mff = DF_Mc([' <div class="image-content">\n            <img id="image" src="', '" />\n          </div>']),
	DF_Mgf = DF_Mc([' <div\n          id="accordion-content"\n          class="text-row ',
		'"\n          aria-labelledby="title"\n          role="region">\n          <div id="text" class="message word-wrap">', "</div>\n        </div>"
	]),
	DF_Mhf = DF_Mc(' ;\n      <div id="df-accordion-wrapper">\n        <button\n          @click=";"\n          id="accordion-button"\n          class="top-row focus-outline focus-outset focus-box"\n          aria-controls="accordion-content"\n          aria-expanded=";">\n          <div class="content">\n            ;\n            <div class="text-content">\n              <h3 id="title" class="word-wrap">;</h3>\n              <div id="subtitle" class="word-wrap"> ; </div>\n            </div>\n          </div>\n          ;\n        </button>\n        ;\n      </div>'.split(";"));

function DF_MG(a, b) {
	a = DF_ME.call(this, a, b, "accordion") || this;
	a.expanded = !1;
	a.title = "";
	a.subtitle = "";
	a.text = null;
	a.image = null;
	a.Za = !1;
	return a
}
DF_Mf(DF_MG, DF_ME);
DF_MG.D = DF_ME.D;
DF_MG.o = DF_ME.o;
DF_MG.s = DF_ME.s;
DF_MG.h = DF_ME.h;
DF_MG.g = DF_ME.g;
DF_MG.C = DF_ME.C;
DF_MG.i = DF_ME.i;
DF_MG.u = DF_ME.u;
DF_MG.l = DF_ME.l;
DF_MG.v = DF_ME.v;
DF_MG.prototype.connectedCallback = function() {
	var a = this;
	DF_ME.prototype.connectedCallback.call(this);
	var b;
	(null == (b = this.image) ? 0 : b.rawUrl) && DF_MYa(this.image.rawUrl, function() {
		a.Za = !0
	}, function() {
		a.Za = !1
	})
};
DF_MG.prototype.ta = function(a) {
	DF_ME.prototype.ta.call(this, a);
	this.expanded && DF_M5a(this)
};
DF_MG.prototype.render = function() {
	var a = DF_Mw(DF_Mdf),
		b = this.text ? DF_Mw(DF_Mef, this.expanded ? "material-icons open" : "material-icons") : void 0,
		c, d = (null == (c = this.image) ? 0 : c.rawUrl) && this.Za ? DF_Mw(DF_Mff, this.image.rawUrl) : void 0;
	c = this.text ? DF_Mw(DF_Mgf, this.expanded ? "expanded" : "collapsed", DF_Mcf(this.text)) : void 0;
	return DF_Mw(DF_Mhf, a, this.g, this.expanded, d, this.title, this.subtitle, b, c)
};
DF_MG.prototype.g = function() {
	this.text && (DF_Mn(this, "df-accordion-clicked", {}), this.expanded = !this.expanded)
};
var DF_Mif = DF_MG;
DF_Mif.j = [DF_M8e, DF_M9e, DF_MA];
DF_Mk([DF_Mt({
	type: Boolean
}), DF_Ml("design:type", Object)], DF_Mif.prototype, "expanded", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mif.prototype, "title", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mif.prototype, "subtitle", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mif.prototype, "text", void 0);
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_Mif.prototype, "image", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_Mif.prototype, "Za", void 0);
DF_Mif = DF_Mk([DF_Mq("df-accordion"), DF_Ml("design:paramtypes", [String, String])], DF_Mif);
var DF_Mjf = DF_Mr(["#dfButtonAnchorWrapper,#dfButtonWrapper{align-items:center;background:0 0;border:var(--df-messenger-button-border,none);border-radius:var(--df-messenger-button-border-radius,var(--df-messenger-default-border-radius));box-sizing:border-box;cursor:pointer;display:flex;color:var(--df-messenger-button-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-button-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-button-font-size,\n      var(--df-messenger-default-font-size)\n    );padding:var(--df-messenger-button-padding,var(--df-messenger-card-padding,16px));text-decoration:none;width:100%;overflow:hidden}#dfButtonAnchorWrapper:hover > .df-button-icon,#dfButtonAnchorWrapper:hover > .text,#dfButtonWrapper:hover > .df-button-icon,#dfButtonWrapper:hover > .text{opacity:.5}.text{padding-left:var(--df-messenger-button-icon-spacing,12px);text-align:var(--df-messenger-button-text-align,center);white-space:var(--df-messenger-button-text-wrap,normal);text-overflow:ellipsis;overflow:hidden}.df-button-icon,.df-button-icon #materialButtonIcon{height:var(--df-messenger-button-icon-font-size,24px);width:var(--df-messenger-button-icon-font-size,24px)}.df-button-image img{display:block;height:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px));width:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px));margin:var(--df-messenger-button-image-offset,0)}"]);

function DF_MH() {
	return DF_ME.apply(this, arguments) || this
}
DF_Mf(DF_MH, DF_ME);
DF_MH.D = DF_ME.D;
DF_MH.o = DF_ME.o;
DF_MH.s = DF_ME.s;
DF_MH.h = DF_ME.h;
DF_MH.g = DF_ME.g;
DF_MH.C = DF_ME.C;
DF_MH.i = DF_ME.i;
DF_MH.u = DF_ME.u;
DF_MH.l = DF_ME.l;
DF_MH.v = DF_ME.v;
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_MH.prototype, "ua", void 0);
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_Mkf(a) {
	var b;
	if (1 !== a.type || "style" !== a.name || 2 < (null == (b = a.strings) ? void 0 : b.length)) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
}
DF_Mf(DF_Mkf, DF_Maf);
DF_Mkf.prototype.render = function(a) {
	return Object.keys(a).reduce(function(b, c) {
		var d = a[c];
		if (null == d) return b;
		c = c.includes("-") ? c : c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
		return b + (c + ":" + d + ";")
	}, "")
};
DF_Mkf.prototype.i = function(a, b) {
	b = DF_Md(b).next().value;
	a = a.element.style;
	void 0 === this.h && (this.h = new Set);
	for (var c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, null == b[d] && (this.h.delete(d), d.includes("-") ? a.removeProperty(d) : a[d] = null);
	for (var e in b) c = b[e], null != c && (this.h.add(e), d = "string" === typeof c && c.endsWith(" !important"), e.includes("-") || d ? a.setProperty(e, d ? c.slice(0, -11) : c, d ? "important" : "") : a[e] = c);
	return DF_Mpd
};
var DF_Mlf = DF_M$e(DF_Mkf);
var DF_Mmf = DF_Mc(' <a\n        href=";"\n        class="focus-outline"\n        target=";"\n        rel=";"\n        id="dfButtonAnchorWrapper"\n        @click=";">\n        <span class="visually-hidden">;</span>\n        ;\n        <span class="text word-wrap"> ; </span>\n      </a>'.split(";")),
	DF_Mnf = DF_Mc(['\n        <button\n          class="focus-outline"\n          id="dfButtonWrapper"\n          @click="', '">\n          ', '\n          <span class="text word-wrap"> ', " </span>\n        </button>\n      "]),
	DF_Mof = DF_Mc([' <div class="df-button-image">\n        <img src="', '" />\n      </div>']),
	DF_Mpf = DF_Mc([' <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="df-button-icon">\n        <span\n          aria-hidden="true"\n          class="material-icons"\n          id="materialButtonIcon"\n          style=', ">\n          ", "\n        </span>\n      </div>"]);

function DF_MI(a, b) {
	a = DF_MH.call(this, a, b, "button") || this;
	a.anchor = null;
	a.text = "";
	a.icon = null;
	a.image = null;
	a.event = void 0;
	a.mode = "normal";
	return a
}
DF_Mf(DF_MI, DF_MH);
DF_MI.D = DF_MH.D;
DF_MI.o = DF_MH.o;
DF_MI.s = DF_MH.s;
DF_MI.h = DF_MH.h;
DF_MI.g = DF_MH.g;
DF_MI.C = DF_MH.C;
DF_MI.i = DF_MH.i;
DF_MI.u = DF_MH.u;
DF_MI.l = DF_MH.l;
DF_MI.v = DF_MH.v;
DF_MI.prototype.connectedCallback = function() {
	var a = this;
	DF_MH.prototype.connectedCallback.call(this);
	var b;
	(null == (b = this.image) ? 0 : b.rawUrl) ? DF_MYa(this.image.rawUrl, function() {
		a.Ma = !0
	}, function() {
		a.Ma = !1
	}): this.Ma = !1
};
DF_MI.prototype.g = function() {
	var a = this,
		b, c, d, e, f, g, h, k, l, m;
	return DF_Mh(function(n) {
		d = (null == (b = a.event) ? void 0 : b.languageCode) || (null == (c = a.ua) ? void 0 : c.languageCode);
		h = DF_Mn(a, "df-button-clicked", Object.assign({}, {
			text: a.text,
			event: null == (e = a.event) ? void 0 : e.event
		}, (null == (f = a.event) ? 0 : f.event) ? {
			languageCode: d || void 0
		} : {}, {
			actionLink: null == (g = a.anchor) ? void 0 : g.href
		}));
		"blocking" === a.mode && a.ua && (a.ua.isWaitingForElement = !1);
		if (h && (null == (k = a.event) ? 0 : k.event)) return l = DF_MLd(a.event.event, d ||
			null), DF_Mg(n, null == (m = a.ua) ? void 0 : m.presenter.sendDialogflowRequest(l), 0);
		n.g = 0
	})
};
DF_MI.prototype.render = function() {
	if (this.anchor) {
		var a = DF_Mp(this.languageCode, "opensInANewTab");
		return DF_Mw(DF_Mmf, this.anchor.href, this.anchor.target, this.anchor.rel, this.g, a, DF_Mqf(this), this.text || "")
	}
	return DF_Mw(DF_Mnf, this.g, DF_Mqf(this), this.text || "")
};

function DF_Mqf(a) {
	if (void 0 === a.Ma) return null;
	var b;
	if ((null == (b = a.image) ? 0 : b.rawUrl) && a.Ma) return DF_Mw(DF_Mof, a.image.rawUrl);
	var c;
	b = DF_Mlf({
		color: (null == (c = a.icon) ? void 0 : c.color) || "#444746"
	});
	var d;
	return DF_Mw(DF_Mpf, b, (null == (d = a.icon) ? void 0 : d.type) || "forward_arrow")
}
var DF_Mrf = DF_MI;
DF_Mrf.j = [DF_Mjf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mrf.prototype, "anchor", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mrf.prototype, "text", void 0);
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_Mrf.prototype, "icon", void 0);
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_Mrf.prototype, "image", void 0);
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_Mrf.prototype, "event", void 0);
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_Mrf.prototype, "mode", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Boolean)], DF_Mrf.prototype, "Ma", void 0);
DF_Mrf = DF_Mk([DF_Mq("df-button"), DF_Ml("design:paramtypes", [String, String])], DF_Mrf);
var DF_Msf = DF_Mr([":host{--df-messenger-card-internal-border-radius:var(--df-messenger-card-border-radius,\n      var(--df-messenger-default-border-radius)\n    );--df-messenger-card-internal-border-top-left-radius:var(--df-messenger-card-border-top-left-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-top-right-radius:var(--df-messenger-card-border-top-right-radius,\n    var(--df-messenger-card-internal-border-radius)\n  );--df-messenger-card-internal-border-bottom-left-radius:var(--df-messenger-card-border-bottom-left-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-bottom-right-radius:var(--df-messenger-card-border-bottom-right-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-button-radius:var(--df-messenger-button-border-radius,\n    var(--df-messenger-default-border-radius)\n  )}.card-wrapper{background:var(--df-messenger-card-background,var(--df-messenger-card-background-color,#fff));border-top-left-radius:var(--df-messenger-card-internal-border-top-left-radius);border-top-right-radius:var(--df-messenger-card-internal-border-top-right-radius);border-bottom-left-radius:var(--df-messenger-card-internal-border-bottom-left-radius);border-bottom-right-radius:var(--df-messenger-card-internal-border-bottom-right-radius);box-shadow:var(--df-messenger-card-box-shadow,var(--df-messenger-default-box-shadow));border:var(--df-messenger-card-border,var(--df-messenger-default-border))}:host(.first) .card-wrapper{border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius))}:host(.mid) .card-wrapper{border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius))}:host(.last) .card-wrapper{border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius))}.card-wrapper.button{border:none;border-top-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-top-right-radius:var(--df-messenger-card-internal-button-radius)!important;border-bottom-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-bottom-right-radius:var(--df-messenger-card-internal-button-radius)!important}.card-wrapper.video{overflow:hidden;border:var(--df-messenger-video-border,var(--df-messenger-card-border,var(--df-messenger-default-border)))}"]);
var DF_Mtf = DF_Mc([' <span class="visually-hidden">', '</span>\n      <div class="card-wrapper ', '">\n        ', "\n      </div>"]);

function DF_MJ(a, b) {
	a = DF_ME.call(this, a, b, "customCard") || this;
	a.elements = [];
	return a
}
DF_Mf(DF_MJ, DF_ME);
DF_MJ.D = DF_ME.D;
DF_MJ.o = DF_ME.o;
DF_MJ.s = DF_ME.s;
DF_MJ.h = DF_ME.h;
DF_MJ.g = DF_ME.g;
DF_MJ.C = DF_ME.C;
DF_MJ.i = DF_ME.i;
DF_MJ.u = DF_ME.u;
DF_MJ.l = DF_ME.l;
DF_MJ.v = DF_ME.v;
DF_MJ.prototype.ra = function(a) {
	a.has("elements") && this.elements.some(function(b) {
		return "list" === (null == b ? void 0 : b.type)
	}) && this.setAttribute("role", "list")
};
DF_MJ.prototype.render = function() {
	if (this.elements && this.elements.length) {
		var a = DF_Mp(this.languageCode, "agentSays");
		return DF_Mw(DF_Mtf, a, 1 === this.elements.length ? this.elements[0].type : "", this.elements)
	}
};
var DF_Muf = DF_MJ;
DF_Muf.j = [DF_Msf, DF_MA];
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_Muf.prototype, "elements", void 0);
DF_Muf = DF_Mk([DF_Mq("df-card"), DF_Ml("design:paramtypes", [String, String])], DF_Muf);
var DF_Mvf = DF_Mr([".df-chips-wrapper{padding:var(--df-messenger-chips-spacing,10px) 0;display:flex;gap:var(--df-messenger-chips-distance,8px);row-gap:var(--df-messenger-chips-distance,8px);flex-wrap:wrap;justify-content:var(--df-messenger-message-bot-align,flex-start)}:host(.first-child) .df-chips-wrapper{padding-top:0}:host(.last-child) .df-chips-wrapper{padding-bottom:0}.df-chips-wrapper.clicked{display:none}.chip{align-items:center;background:var(--df-messenger-chips-background,var(--df-messenger-chips-background-color,#fff));border:1px solid;border-color:var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color));border-radius:var(--df-messenger-chips-border-radius,999px);box-shadow:var(--df-messenger-chips-box-shadow,var(--df-messenger-default-box-shadow));display:inline-flex;padding:var(--df-messenger-chips-padding,6px 16px);overflow:hidden;max-width:100%;position:relative}.chip .focus-outline:focus-visible{position:static}.chip .focus-outline:focus-visible::before{border-radius:var(--df-messenger-chips-border-radius,999px)}.chip:hover{background:var(--df-messenger-chips-background-hover,var(--df-messenger-chips-hover-background,var(--df-messenger-chips-hover-background-color,rgba(68,71,70,.08))));border-color:var(--df-messenger-chips-border-color-hover,var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color)))}.chip a,.chip button{background:0 0;border:none;padding:0;cursor:pointer;display:inline-flex;min-width:0;color:var(--df-messenger-chips-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-chips-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-chips-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-chips-font-weight,normal);text-decoration:none;align-items:var(--df-messenger-chips-content-align,flex-start)}.chip:hover a,.chip:hover button{font-weight:var(--df-messenger-chips-font-weight-hover,var(--df-messenger-chips-font-weight,normal))}.chip .text{white-space:var(--df-messenger-chips-text-wrap,nowrap);text-overflow:ellipsis;overflow:hidden;text-align:left}.chip img{margin-left:var(--df-messenger-chips-icon-offset,-8px);margin-right:var(--df-messenger-chips-icon-spacing,8px);max-height:var(--df-messenger-chips-icon-font-size,18px);max-width:var(--df-messenger-chips-icon-font-size,18px)}.chip .icon{margin-left:var(--df-messenger-chips-icon-spacing,8px);margin-right:var(--df-messenger-chips-icon-offset,-8px);height:var(--df-messenger-chips-icon-font-size,18px);width:var(--df-messenger-chips-icon-font-size,18px);align-self:center}.chip .icon svg{width:inherit;height:inherit;fill:var(--df-messenger-chips-icon-font-color,var(--df-messenger-chips-font-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))))}"]);
var DF_Mwf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="df-chips-wrapper" role="list"> ', " </div>\n    "]);

function DF_MK(a, b) {
	a = DF_MH.call(this, a, b, "chips") || this;
	a.chips = [];
	return a
}
DF_Mf(DF_MK, DF_MH);
DF_MK.D = DF_MH.D;
DF_MK.o = DF_MH.o;
DF_MK.s = DF_MH.s;
DF_MK.h = DF_MH.h;
DF_MK.g = DF_MH.g;
DF_MK.C = DF_MH.C;
DF_MK.i = DF_MH.i;
DF_MK.u = DF_MH.u;
DF_MK.l = DF_MH.l;
DF_MK.v = DF_MH.v;
DF_MK.prototype.isVisible = function() {
	return 0 < this.chips.length && !this.clicked
};
DF_MK.prototype.render = function() {
	var a = this;
	if (!this.chips.length || this.clicked) return null;
	var b = DF_Mp(this.languageCode, "agentSays"),
		c = this.chips.map(function(d) {
			return d.render(a, a.ua)
		});
	return DF_Mw(DF_Mwf, b, c)
};
var DF_Mxf = DF_MK;
DF_Mxf.j = [DF_Mvf, DF_MA];
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_Mxf.prototype, "chips", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Boolean)], DF_Mxf.prototype, "clicked", void 0);
DF_Mxf = DF_Mk([DF_Mq("df-chips"), DF_Ml("design:paramtypes", [String, String])], DF_Mxf);
var DF_Myf = DF_Mr([".citations-wrapper{padding:var(--df-messenger-citations-spacing,10px) 0}:host(.first-child) .citations-wrapper{padding-top:0}:host(.last-child) .citations-wrapper{padding-bottom:0}.citations-message{display:var(--df-messenger-citations-message-display,flex);color:var(--df-messenger-citations-message-font-color,#041e49);font-size:var(--df-messenger-citations-message-font-size, 12px);margin-bottom:var(--df-messenger-citations-distance,8px);justify-content:var(--df-messenger-message-bot-align,flex-start)}.citations-list{display:flex;gap:var(--df-messenger-citations-distance,8px);row-gap:var(--df-messenger-citations-distance,8px);flex-direction:var(--df-messenger-citations-flex-direction,row);flex-wrap:wrap;align-items:var(--df-messenger-message-bot-align,flex-start);justify-content:var(--df-messenger-message-bot-align,flex-start)}.citation{border:1px solid;border-color:var(--df-messenger-citations-border-color,#1a73e8);border-radius:var(--df-messenger-citations-border-radius,4px);padding:var(--df-messenger-citations-padding,8px);text-decoration:none;background:var(--df-messenger-citations-background,var(--df-messenger-citations-background-color,#fff));box-shadow:var(--df-messenger-citations-box-shadow,none);color:var(--df-messenger-citations-font-color,#1a73e8);font-family:var(--df-messenger-citations-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-citations-font-size, 11px);font-weight:var(--df-messenger-citations-font-weight,normal);display:flex;align-items:center;overflow:hidden;max-width:100%;box-sizing:border-box}.citation:hover{background:var(--df-messenger-citations-background-hover,var(--df-messenger-citations-hover-background,var(--df-messenger-citations-hover-background-color,rgba(68,71,70,.08))));border-color:var(--df-messenger-citations-border-color-hover,var(--df-messenger-citations-border-color,#1a73e8));font-weight:var(--df-messenger-citations-font-weight-hover,var(--df-messenger-citations-font-weight,normal))}.citation .icon{margin-left:var(--df-messenger-citations-icon-offset,0);margin-right:var(--df-messenger-citations-icon-spacing,8px);width:var(--df-messenger-citations-icon-font-size,14px);height:var(--df-messenger-citations-icon-font-size,14px)}.citation .icon svg{fill:var(--df-messenger-citations-icon-font-color,var(--df-messenger-citations-font-color,#1a73e8));width:inherit;height:inherit}.citation .title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]);
var DF_Mzf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="citations-wrapper" role="list">\n        <div class="citations-message"> ', ' </div>\n        <div class="citations-list"> ', " </div>\n      </div>\n    "]),
	DF_MAf = DF_Mc(' <a\n      class="citation focus-outline"\n      href=";"\n      target=";"\n      rel=";"\n      @click=;\n      role="listitem">\n      <span class="visually-hidden">;</span>\n      <span class="icon">;</span>\n      <span class="title">;</span>\n    </a>'.split(";"));

function DF_ML(a, b) {
	a = DF_ME.call(this, a, b, "match_citations") || this;
	a.citations = [];
	return a
}
DF_Mf(DF_ML, DF_ME);
DF_ML.D = DF_ME.D;
DF_ML.o = DF_ME.o;
DF_ML.s = DF_ME.s;
DF_ML.h = DF_ME.h;
DF_ML.g = DF_ME.g;
DF_ML.C = DF_ME.C;
DF_ML.i = DF_ME.i;
DF_ML.u = DF_ME.u;
DF_ML.l = DF_ME.l;
DF_ML.v = DF_ME.v;
DF_ML.prototype.render = function() {
	var a = this;
	if (0 === this.citations.length) return null;
	var b = DF_Mp(this.languageCode, "agentSays"),
		c = DF_Mp(this.languageCode, "citationsMessage"),
		d = this.citations.map(function(e) {
			return DF_MBf(a, e)
		});
	return DF_Mw(DF_Mzf, b, c, d)
};

function DF_MBf(a, b) {
	var c = DF_Mp(a.languageCode, "opensInANewTab");
	return DF_Mw(DF_MAf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
		var d;
		DF_Mn(a, "df-citation-clicked", {
			title: b.title,
			actionLink: null == (d = b.anchor) ? void 0 : d.href
		})
	}, c, DF_Mse, b.title)
}
var DF_MCf = DF_ML;
DF_MCf.j = [DF_Myf, DF_MA];
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_MCf.prototype, "citations", void 0);
DF_MCf = DF_Mk([DF_Mq("df-citations"), DF_Ml("design:paramtypes", [String, String])], DF_MCf);
var DF_MDf = DF_Mc(["", ""]);

function DF_MM(a, b) {
	a = DF_ME.call(this, a, b, "custom_template") || this;
	a.elementName = null;
	a.payload = null;
	a.responseId = null;
	a.element = null;
	return a
}
DF_Mf(DF_MM, DF_ME);
DF_MM.D = DF_ME.D;
DF_MM.o = DF_ME.o;
DF_MM.s = DF_ME.s;
DF_MM.h = DF_ME.h;
DF_MM.g = DF_ME.g;
DF_MM.C = DF_ME.C;
DF_MM.i = DF_ME.i;
DF_MM.u = DF_ME.u;
DF_MM.l = DF_ME.l;
DF_MM.v = DF_ME.v;
DF_MM.prototype.connectedCallback = function() {
	DF_ME.prototype.connectedCallback.call(this);
	this.elementName && customElements.get(this.elementName) ? (this.element = document.createElement(this.elementName), this.element.dfPayload = this.payload, this.element.dfResponseId = this.responseId) : console.error("DF-MESSENGER", "df-custom-template", "Unknown custom element", this.elementName)
};
DF_MM.prototype.render = function() {
	return this.element ? DF_Mw(DF_MDf, this.element) : null
};
var DF_MEf = DF_MM;
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_MEf.prototype, "elementName", void 0);
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_MEf.prototype, "payload", void 0);
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_MEf.prototype, "responseId", void 0);
DF_MEf = DF_Mk([DF_Mq("df-custom-template"), DF_Ml("design:paramtypes", [String, String])], DF_MEf);
var DF_MFf = DF_Mr(["#description-wrapper{display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px)}.description-line{padding-top:8px}.title{color:inherit;font-size:inherit;font-weight:700;margin:0}"]);
var DF_MGf = DF_Mc(['<h3 class="title word-wrap">', "</h3>"]),
	DF_MHf = DF_Mc(['<div class="description-line word-wrap">', "</div>"]),
	DF_MIf = DF_Mc([' <div id="description-wrapper">', " ", "</div> "]);

function DF_MN(a, b) {
	a = DF_ME.call(this, a, b, "description") || this;
	a.title = "";
	a.text = [];
	return a
}
DF_Mf(DF_MN, DF_ME);
DF_MN.D = DF_ME.D;
DF_MN.o = DF_ME.o;
DF_MN.s = DF_ME.s;
DF_MN.h = DF_ME.h;
DF_MN.g = DF_ME.g;
DF_MN.C = DF_ME.C;
DF_MN.i = DF_ME.i;
DF_MN.u = DF_ME.u;
DF_MN.l = DF_ME.l;
DF_MN.v = DF_ME.v;
DF_MN.prototype.render = function() {
	if (this.text || this.title) {
		var a = this.title ? DF_Mw(DF_MGf, this.title) : void 0,
			b, c = null == (b = this.text) ? void 0 : b.map(function(d) {
				return DF_Mw(DF_MHf, d)
			});
		return DF_Mw(DF_MIf, a, c)
	}
};
var DF_MJf = DF_MN;
DF_MJf.j = [DF_MFf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MJf.prototype, "title", void 0);
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Object)], DF_MJf.prototype, "text", void 0);
DF_MJf = DF_Mk([DF_Mq("df-description"), DF_Ml("design:paramtypes", [String, String])], DF_MJf);
var DF_MKf = DF_Mc(['<hr class="divider" />']);

function DF_MO(a, b) {
	return DF_ME.call(this, a, b, "divider") || this
}
DF_Mf(DF_MO, DF_ME);
DF_MO.D = DF_ME.D;
DF_MO.o = DF_ME.o;
DF_MO.s = DF_ME.s;
DF_MO.h = DF_ME.h;
DF_MO.g = DF_ME.g;
DF_MO.C = DF_ME.C;
DF_MO.i = DF_ME.i;
DF_MO.u = DF_ME.u;
DF_MO.l = DF_ME.l;
DF_MO.v = DF_ME.v;
DF_MO.prototype.ia = function() {
	return this
};
DF_MO.prototype.render = function() {
	return DF_Mw(DF_MKf)
};
var DF_MLf = DF_MO;
DF_MLf = DF_Mk([DF_Mq("df-divider"), DF_Ml("design:paramtypes", [String, String])], DF_MLf);
var DF_MMf = DF_Mr([".files-wrapper{padding:var(--df-messenger-files-spacing,10px) 0;display:flex;justify-content:var(--df-messenger-message-bot-align,flex-start)}:host(.first-child) .files-wrapper{padding-top:0}:host(.last-child) .files-wrapper{padding-bottom:0}.files-list{display:flex;min-width:0;gap:var(--df-messenger-files-distance,8px);row-gap:var(--df-messenger-files-distance,8px);flex-direction:var(--df-messenger-files-flex-direction,row);flex-wrap:wrap;align-items:var(--df-messenger-message-bot-align,flex-start);justify-content:var(--df-messenger-message-bot-align,flex-start)}.file{background:var(--df-messenger-files-background,var(--df-messenger-files-background-color,#fff));border:var(--df-messenger-files-border,var(--df-messenger-default-border));border-radius:var(--df-messenger-files-border-radius,999px);box-shadow:var(--df-messenger-files-box-shadow,var(--df-messenger-default-box-shadow));padding:var(--df-messenger-files-padding,6px 16px);overflow:hidden;max-width:100%;box-sizing:border-box;position:relative}.file .focus-outline:focus-visible{position:static}.file .focus-outline:focus-visible::before{border-radius:var(--df-messenger-files-border-radius,999px)}.file:hover{background:var(--df-messenger-files-background-hover,rgba(68,71,70,.08));border:var(--df-messenger-files-border-hover,var(--df-messenger-files-border,var(--df-messenger-default-border)))}.file-content{display:flex;align-items:center;color:var(--df-messenger-files-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-files-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-files-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-files-font-weight,normal);text-decoration:none}.file:hover a{font-weight:var(--df-messenger-files-font-weight-hover,var(--df-messenger-files-font-weight,normal))}.file-content img{padding-right:var(--df-messenger-files-text-spacing,8px);margin:var(--df-messenger-files-image-offset,0 0 0 -8px);width:var(--df-messenger-files-image-size,18px);height:var(--df-messenger-files-image-size,18px)}.file-content .text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-content .icon{padding-left:var(--df-messenger-files-text-spacing,8px);margin:var(--df-messenger-files-icon-offset,0 -8px 0 0);height:var(--df-messenger-files-icon-size,18px);width:var(--df-messenger-files-icon-size,18px)}.file-content .icon svg{width:inherit;height:inherit;fill:var(--df-messenger-files-icon-font-color,var(--df-messenger-default-icon-font-color))}"]);
var DF_MNf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="files-wrapper">\n        <div class="files-list" role="list"> ', " </div>\n      </div>\n    "]),
	DF_MOf = DF_Mc([' <span role="listitem" class="file focus-outline">\n      ', "\n    </span>"]),
	DF_MPf = DF_Mc(['<img src="', '" aria-hidden="true" />']),
	DF_MQf = DF_Mc(' <a\n        class="file-content focus-outline"\n        href=";"\n        target=";"\n        rel=";"\n        @click=;\n        download>\n        ;\n        <span class="text">;</span>\n        <span class="icon">;</span>\n      </a>'.split(";")),
	DF_MRf = DF_Mc([' <span class="file-content">\n      ', '\n      <span class="text">', "</span>\n    </span>"]);

function DF_MP(a, b) {
	a = DF_ME.call(this, a, b, "files") || this;
	a.files = [];
	return a
}
DF_Mf(DF_MP, DF_ME);
DF_MP.D = DF_ME.D;
DF_MP.o = DF_ME.o;
DF_MP.s = DF_ME.s;
DF_MP.h = DF_ME.h;
DF_MP.g = DF_ME.g;
DF_MP.C = DF_ME.C;
DF_MP.i = DF_ME.i;
DF_MP.u = DF_ME.u;
DF_MP.l = DF_ME.l;
DF_MP.v = DF_ME.v;
DF_MP.prototype.render = function() {
	var a = this,
		b = DF_Mp(this.languageCode, "agentSays"),
		c = this.files.map(function(d) {
			return DF_Mw(DF_MOf, DF_MSf(a, d))
		});
	return DF_Mw(DF_MNf, b, c)
};

function DF_MSf(a, b) {
	var c, d = (null == (c = b.image) ? 0 : c.rawUrl) ? DF_Mw(DF_MPf, b.image.rawUrl) : null;
	return b.anchor ? DF_Mw(DF_MQf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
		var e;
		DF_Mn(a, "df-file-clicked", {
			name: b.name,
			actionLink: null == (e = b.anchor) ? void 0 : e.href
		})
	}, d, b.name, DF_Mye) : DF_Mw(DF_MRf, d, b.name)
}
var DF_MTf = DF_MP;
DF_MTf.j = [DF_MMf, DF_MA];
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_MTf.prototype, "files", void 0);
DF_MTf = DF_Mk([DF_Mq("df-files"), DF_Ml("design:paramtypes", [String, String])], DF_MTf);
var DF_MUf = DF_Mr([".markdown :first-child{margin-top:0}.markdown :last-child{margin-bottom:0}"]);
var DF_MVf = DF_Mr([":host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,\n      var(--df-messenger-default-border-radius)\n    );--df-messenger-message-internal-border-top-left-radius:var(--df-messenger-message-border-top-left-radius,\n      var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-top-right-radius:var(--df-messenger-message-border-top-right-radius,\n    var(--df-messenger-message-internal-border-radius)\n  );--df-messenger-message-internal-border-bottom-left-radius:var(--df-messenger-message-border-bottom-left-radius,\n      var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-bottom-right-radius:var(--df-messenger-message-border-bottom-right-radius,\n      var(--df-messenger-message-internal-border-radius)\n    )}.message{font-family:var(--df-messenger-message-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );line-height:var(--df-messenger-message-line-height, normal);word-break:break-word;word-wrap:break-word}.message.bot-message{padding:var(--df-messenger-message-bot-padding,var(--df-messenger-message-padding,12px));border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius));background:var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe));border:var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none));color:var(--df-messenger-message-bot-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-weight:var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal))}.message.user-message{padding:var(--df-messenger-message-user-padding,var(--df-messenger-message-padding,12px));border-top-left-radius:var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius));background:var(--df-messenger-message-user-background,var(--df-messenger-message-user-background-color,#e1e3e1));border:var(--df-messenger-message-user-border,var(--df-messenger-message-border,none));color:var(--df-messenger-message-user-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-weight:var(--df-messenger-message-user-font-weight,var(--df-messenger-message-font-weight,normal))}:host(.first) .message.bot-message{border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.mid) .message.bot-message{border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))));border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.last) .message.bot-message{border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))))}:host(.first) .message.user-message{border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,ar(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.mid) .message.user-message{border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))));border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.last) .message.user-message{border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))))}"]);
var DF_MWf = DF_Mc([""]),
	DF_MXf = DF_Mc([' <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message"> ', " </div>"]);

function DF_MQ(a, b) {
	a = DF_ME.call(this, a, b, "html") || this;
	a.html = null;
	return a
}
DF_Mf(DF_MQ, DF_ME);
DF_MQ.D = DF_ME.D;
DF_MQ.o = DF_ME.o;
DF_MQ.s = DF_ME.s;
DF_MQ.h = DF_ME.h;
DF_MQ.g = DF_ME.g;
DF_MQ.C = DF_ME.C;
DF_MQ.i = DF_ME.i;
DF_MQ.u = DF_ME.u;
DF_MQ.l = DF_ME.l;
DF_MQ.v = DF_ME.v;
DF_MQ.prototype.render = function() {
	return this.html ? DF_Mw(DF_MXf, DF_Mp(this.languageCode, "agentSays"), DF_Mcf(this.html)) : DF_Mw(DF_MWf)
};
var DF_MYf = DF_MQ;
DF_MYf.j = [DF_MUf, DF_M9e, DF_MVf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MYf.prototype, "html", void 0);
DF_MYf = DF_Mk([DF_Mq("df-html-message"), DF_Ml("design:paramtypes", [String, String])], DF_MYf);
var DF_MZf = DF_Mr([".image-wrapper{padding:var(--df-messenger-card-padding,16px)}img.image{max-width:100%;border-radius:var(--df-messenger-image-border-radius,0)}.loading{height:200px}a{display:block}.image-container{position:relative}.reference{position:absolute;top:16px;right:16px;max-width:calc(100% - 48px);display:flex;align-items:center;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.7);font-size:11px;line-height:16px}.reference img{width:16x;height:16px;margin-right:4px}.reference .text{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]);
var DF_M_f = DF_Mc(['<img class="loading" style=', " />"]),
	DF_M0f = DF_Mc(["", ""]),
	DF_M1f = DF_Mc(['<img\n      class="image"\n      src=', '\n      alt="', '" />']),
	DF_M2f = DF_Mc(['<div class="image-wrapper">', "</div>"]),
	DF_M3f = DF_Mc('<a\n      class="image-wrapper focus-outline focus-box"\n      href=";"\n      target=";"\n      rel=";"\n      @click=;>\n      <div class="image-container">; ;</div>\n    </a>'.split(";")),
	DF_M4f = DF_Mc(['<img src="', '" />']),
	DF_M5f = DF_Mc(['<div class="reference">\n      ',
		'\n      <span class="text">', "</span>\n    </div>"
	]);

function DF_MR(a, b) {
	a = DF_ME.call(this, a, b, "image") || this;
	a.source = "";
	a.accessibilityText = "";
	a.reference = null;
	a.ib = !0;
	a.error = !1;
	a.Sb = a.Sb.bind(a);
	a.Rb = a.Rb.bind(a);
	return a
}
DF_Mf(DF_MR, DF_ME);
DF_MR.D = DF_ME.D;
DF_MR.o = DF_ME.o;
DF_MR.s = DF_ME.s;
DF_MR.h = DF_ME.h;
DF_MR.g = DF_ME.g;
DF_MR.C = DF_ME.C;
DF_MR.i = DF_ME.i;
DF_MR.u = DF_ME.u;
DF_MR.l = DF_ME.l;
DF_MR.v = DF_ME.v;
DF_M = DF_MR.prototype;
DF_M.connectedCallback = function() {
	DF_ME.prototype.connectedCallback.call(this);
	this.source && DF_MYa(this.source, this.Sb, this.Rb)
};
DF_M.render = function() {
	if (!this.source) return null;
	if (this.ib) {
		var a = DF_Mlf({
			background: 'url("https://www.gstatic.com/dialogflow-console/common/assets/integrations/dialogflow-messenger/progress_spinner_grey.gif") 50% no-repeat'
		});
		return DF_Mw(DF_M_f, a)
	}
	if (this.error) a = DF_Mw(DF_M0f, this.accessibilityText);
	else if (a = DF_Mw(DF_M1f, this.source, this.accessibilityText), this.reference) {
		if (this.reference) {
			var b = null;
			var c;
			if (null == (c = this.reference.image) ? 0 : c.rawUrl) b = DF_Mw(DF_M4f, this.reference.image.rawUrl);
			b = DF_Mw(DF_M5f, b, this.reference.text)
		} else b = null;
		a = DF_Mw(DF_M3f, this.reference.anchor.href, this.reference.anchor.target, this.reference.anchor.rel, this.Dc, a, b)
	} else a = DF_Mw(DF_M2f, a);
	return a
};
DF_M.Sb = function() {
	this.ib = !1
};
DF_M.Rb = function() {
	this.ib = !1;
	this.error = !0
};
DF_M.Dc = function() {
	var a, b;
	DF_Mn(this, "df-image-clicked", {
		actionLink: null == (a = this.reference) ? void 0 : null == (b = a.anchor) ? void 0 : b.href
	})
};
var DF_M6f = DF_MR;
DF_M6f.j = [DF_MZf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M6f.prototype, "source", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M6f.prototype, "accessibilityText", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M6f.prototype, "reference", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M6f.prototype, "ib", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M6f.prototype, "error", void 0);
DF_M6f = DF_Mk([DF_Mq("df-image"), DF_Ml("design:paramtypes", [String, String])], DF_M6f);
var DF_M7f = DF_Mr([":host([role=listitem]) .title-card-elements{padding:var(--df-messenger-list-padding,var(--df-messenger-card-padding,16px));margin:0 var(--df-messenger-list-inset,0)}:host(:not(:first-of-type)) .title-card-elements{padding-top:var(--df-messenger-list-spacing,10px)}:host(:not(:last-of-type)) .title-card-elements{padding-bottom:var(--df-messenger-list-spacing,10px);border-bottom:var(--df-messenger-list-border-bottom,var(--df-messenger-default-border))}.list-button{background:0 0;border:none;text-align:left;box-sizing:border-box;width:calc(100% - 2 * var(--df-messenger-list-inset,0px));cursor:pointer}.list-button.focus-outline:focus-visible::before{margin:0 calc(0px - var(--df-messenger-list-inset,0px))}"]);
var DF_M8f = DF_Mr([".title,.title-card-elements{font-size:var(--df-messenger-default-font-size)}.subtitle,.title{line-height:22px}.title-card-elements{display:flex;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );padding:var(--df-messenger-card-padding,16px)}.link-wrapper{text-decoration:none}.image{margin-right:16px;max-height:24px;max-width:24px}.title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));font-weight:700;margin:0}.subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color));display:var(--df-messenger-info-subtitle-display,block)}"]);
var DF_M9f = DF_Mc([' <img class="image" src="', '" />']),
	DF_M$f = DF_Mc([' <h3 class="title word-wrap"> ', " </h3>"]),
	DF_Mag = DF_Mc([' <div class="subtitle word-wrap"> ', " </div>"]),
	DF_Mbg = DF_Mc([" ", '\n      <div class="text-container"> ', " ", " </div>"]),
	DF_Mcg = DF_Mc(' <a\n        @click=";"\n        class="link-wrapper focus-outline focus-box"\n        target=";"\n        href=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        <div class="title-card-elements"> ; </div>\n      </a>'.split(";")),
	DF_Mdg = DF_Mc([' <div class="title-card-elements"> ', " </div>"]);

function DF_MS(a, b, c) {
	a = DF_MH.call(this, a, b, void 0 === c ? "info" : c) || this;
	a.title = "";
	a.subtitle = "";
	a.image = null;
	a.anchor = null;
	a.F = a.F.bind(a);
	return a
}
DF_Mf(DF_MS, DF_MH);
DF_MS.D = DF_MH.D;
DF_MS.o = DF_MH.o;
DF_MS.s = DF_MH.s;
DF_MS.h = DF_MH.h;
DF_MS.g = DF_MH.g;
DF_MS.C = DF_MH.C;
DF_MS.i = DF_MH.i;
DF_MS.u = DF_MH.u;
DF_MS.l = DF_MH.l;
DF_MS.v = DF_MH.v;
DF_MS.prototype.render = function() {
	var a, b = (null == (a = this.image) ? 0 : a.rawUrl) ? DF_Mw(DF_M9f, this.image.rawUrl) : void 0;
	return this.M(DF_Mw(DF_Mbg, b, this.title ? DF_Mw(DF_M$f, this.title) : void 0, this.subtitle ? DF_Mw(DF_Mag, this.subtitle) : void 0), this.F)
};
DF_MS.prototype.M = function(a, b) {
	if (this.anchor) {
		var c = DF_Mp(this.languageCode, "opensInANewTab");
		return DF_Mw(DF_Mcg, b, this.anchor.target, this.anchor.href, this.anchor.rel, c, a)
	}
	return DF_Mw(DF_Mdg, a)
};
DF_MS.prototype.F = function() {
	var a;
	DF_Mn(this, "df-info-card-clicked", {
		title: this.title,
		actionLink: null == (a = this.anchor) ? void 0 : a.href
	})
};
var DF_MT = DF_MS;
DF_MT.j = [DF_M8f, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MT.prototype, "title", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MT.prototype, "subtitle", void 0);
DF_Mk([DF_Mt({
	m: !1
}), DF_Ml("design:type", Object)], DF_MT.prototype, "image", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MT.prototype, "anchor", void 0);
DF_MT = DF_Mk([DF_Mq("df-title"), DF_Ml("design:paramtypes", [String, String, Object])], DF_MT);
var DF_Meg = DF_Mc([" <button\n        @click=", '\n        class="list-button focus-outline focus-box title-card-elements">\n        ', "\n      </button>"]);

function DF_MU(a, b) {
	a = DF_MT.call(this, a, b, "list") || this;
	a.event = null;
	return a
}
DF_Mf(DF_MU, DF_MT);
DF_MU.D = DF_MT.D;
DF_MU.o = DF_MT.o;
DF_MU.s = DF_MT.s;
DF_MU.h = DF_MT.h;
DF_MU.g = DF_MT.g;
DF_MU.C = DF_MT.C;
DF_MU.i = DF_MT.i;
DF_MU.u = DF_MT.u;
DF_MU.l = DF_MT.l;
DF_MU.v = DF_MT.v;
DF_MU.prototype.connectedCallback = function() {
	DF_MT.prototype.connectedCallback.call(this);
	this.setAttribute("role", "listitem");
	this.g = this.g.bind(this)
};
DF_MU.prototype.M = function(a) {
	return this.event && !this.anchor ? DF_Mw(DF_Meg, this.g, a) : DF_MT.prototype.M.call(this, a, this.g)
};
DF_MU.prototype.F = function() {
	var a = this;
	return DF_Mh(function(b) {
		return DF_Mg(b, a.g(), 0)
	})
};
DF_MU.prototype.g = function() {
	var a = this,
		b, c, d, e, f, g, h, k, l, m;
	return DF_Mh(function(n) {
		d = (null == (b = a.event) ? void 0 : b.languageCode) || (null == (c = a.ua) ? void 0 : c.languageCode);
		if ((h = DF_Mn(a, "df-list-element-clicked", Object.assign({}, {
				title: a.title,
				event: null == (e = a.event) ? void 0 : e.event
			}, (null == (f = a.event) ? 0 : f.event) ? {
				languageCode: d || void 0
			} : {}, {
				actionLink: null == (g = a.anchor) ? void 0 : g.href
			}))) && (null == (k = a.event) ? 0 : k.event)) return l = DF_MLd(a.event.event, d || null), DF_Mg(n, null == (m = a.ua) ? void 0 : m.presenter.sendDialogflowRequest(l),
			0);
		n.g = 0
	})
};
var DF_Mfg = DF_MU;
DF_Mfg.j = [DF_M7f, DF_M8f, DF_MA];
DF_Mk([DF_Mt({
	type: Object
}), DF_Ml("design:type", Object)], DF_Mfg.prototype, "event", void 0);
DF_Mfg = DF_Mk([DF_Mq("df-list-element"), DF_Ml("design:paramtypes", [String, String])], DF_Mfg);
var DF_Mgg = DF_Mc([""]),
	DF_Mhg = DF_Mc([' <style>\n        @import url(//www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css);\n      </style>\n      <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message markdown">\n        ', "\n      </div>"]);

function DF_MV(a, b) {
	a = DF_ME.call(this, a, b, "markdown") || this;
	a.markdown = null;
	return a
}
DF_Mf(DF_MV, DF_ME);
DF_MV.D = DF_ME.D;
DF_MV.o = DF_ME.o;
DF_MV.s = DF_ME.s;
DF_MV.h = DF_ME.h;
DF_MV.g = DF_ME.g;
DF_MV.C = DF_ME.C;
DF_MV.i = DF_ME.i;
DF_MV.u = DF_ME.u;
DF_MV.l = DF_ME.l;
DF_MV.v = DF_ME.v;
DF_MV.prototype.render = function() {
	return this.markdown ? DF_Mw(DF_Mhg, DF_Mp(this.languageCode, "agentSays"), DF_Mcf(this.markdown)) : DF_Mw(DF_Mgg)
};
var DF_Mig = DF_MV;
DF_Mig.j = [DF_MUf, DF_M9e, DF_MVf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mig.prototype, "markdown", void 0);
DF_Mig = DF_Mk([DF_Mq("df-markdown-message"), DF_Ml("design:paramtypes", [String, String])], DF_Mig);
var DF_Mjg = DF_Mc(["<br />"]),
	DF_Mkg = DF_Mc([" ", " ", ""]),
	DF_Mlg = DF_Mc([" ", ""]),
	DF_Mmg = DF_Mc([' <span class="visually-hidden">', '</span>\n      <div class="message ', '">\n        ', "\n      </div>"]);

function DF_Mng(a, b) {
	a = DF_ME.call(this, a, b, "text") || this;
	a.text = "";
	a.isBot = !1;
	a.screenReaderTextKey = void 0;
	return a
}
DF_Mf(DF_Mng, DF_ME);
DF_Mng.D = DF_ME.D;
DF_Mng.o = DF_ME.o;
DF_Mng.s = DF_ME.s;
DF_Mng.h = DF_ME.h;
DF_Mng.g = DF_ME.g;
DF_Mng.C = DF_ME.C;
DF_Mng.i = DF_ME.i;
DF_Mng.u = DF_ME.u;
DF_Mng.l = DF_ME.l;
DF_Mng.v = DF_ME.v;

function DF_Mog(a) {
	var b = a.split("\n");
	return DF_Mw(DF_Mlg, b.map(function(c, d) {
		return DF_Mw(DF_Mkg, c, d < b.length - 1 ? DF_Mw(DF_Mjg) : null)
	}))
}
DF_Mng.prototype.render = function() {
	var a = this.screenReaderTextKey ? DF_Mp(this.languageCode, this.screenReaderTextKey) : DF_Mp(this.languageCode, this.isBot ? "agentSays" : "iSay");
	return DF_Mw(DF_Mmg, a, this.isBot ? "bot-message" : "user-message", DF_Mog(this.text))
};
var DF_Mpg = DF_Mng;
DF_Mpg.j = [DF_MVf, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mpg.prototype, "text", void 0);
DF_Mk([DF_Mt({
	type: Boolean,
	K: !0
}), DF_Ml("design:type", Object)], DF_Mpg.prototype, "isBot", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mpg.prototype, "screenReaderTextKey", void 0);
DF_Mpg = DF_Mk([DF_Mq("df-text-message"), DF_Ml("design:paramtypes", [String, String])], DF_Mpg);
var DF_Mqg = DF_Mr([":host(:not(:only-child)) .wrapper{padding:var(--df-messenger-card-padding,16px)}:host(.markdown) .wrapper{display:inline-block;padding-left:0;padding-right:0}:host(.markdown:first-child) .wrapper{padding-top:0}:host(.markdown:last-child) .wrapper{padding-bottom:0}:host(.markdown) .embed,:host(:not(:only-child)) .embed,:host(:not(:only-child)) .link,:host(:not(:only-child)) .video{border:var(--df-messenger-video-border,var(--df-messenger-default-border));border-radius:var(--df-messenger-video-border-radius,var(--df-messenger-default-border-radius));overflow:hidden}.link{display:inline-block;position:relative;text-decoration:none}.thumbnail,iframe,video{max-width:100%;display:block}.thumbnail,video{width:var(--df-messenger-video-width,auto);height:var(--df-messenger-video-height,auto)}iframe{width:var(--df-messenger-video-embed-width,var(--df-messenger-video-width,560px));height:var(--df-messenger-video-embed-height,var(--df-messenger-video-height,315px))}.title{display:flex;align-items:center;padding:12px 16px;font-size:var(--df-messenger-font-size,\n      var(--df-messenger-default-font-size)\n    );font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}.youtube svg{width:24px;height:24px;margin-right:8px}.play{position:absolute;pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:999px;padding:8px;width:36px;height:36px;background:#000;opacity:.8}.play svg{width:inherit;height:inherit;fill:white}"]);

function DF_Mrg(a) {
	var b, c = null != (b = a.anchor) ? b : a.actionLink ? {
		href: a.actionLink
	} : null;
	return c ? new DF_Msg(c) : null
}

function DF_Mtg(a) {
	var b, c = null != (b = a.anchor) ? b : a.actionLink ? {
		href: a.actionLink
	} : null;
	return c ? new DF_Msg(c) : null
}

function DF_Msg(a) {
	this.href = (null == a ? void 0 : a.href) || "";
	this.target = (null == a ? void 0 : a.target) || "_blank";
	this.rel = (null == a ? void 0 : a.rel) || "noopener noreferrer"
};
var DF_Mug = DF_Mc([' <div class="wrapper">\n        <div class="video">\n          <video src="', '" controls>', "</video>\n          ", "\n        </div>\n      </div>"]),
	DF_Mvg = DF_Mc(["https://www.youtube.com/embed"]),
	DF_Mwg = DF_Mc([' <div class="wrapper">\n        <div class="embed">\n          <iframe\n            src="', '"\n            title="', '"\n            frameborder="0"\n            allowfullscreen></iframe>\n          ', "\n        </div>\n      </div>"]),
	DF_Mxg = DF_Mc(' <div class="wrapper">\n      <a\n        class="link"\n        href=";"\n        target=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        <img class="thumbnail" src=";" />\n        ;\n        <div class="play">;</div>\n      </a>\n    </div>'.split(";")),
	DF_Myg = DF_Mc(['<div class="title">', "</div>"]),
	DF_Mzg = DF_Mc([' <div class="title youtube">\n        ', "", "\n      </div>"]);

function DF_MW(a, b) {
	a = DF_ME.call(this, a, b, "video") || this;
	a.videoType = null;
	a.anchor = null;
	a.source = null;
	a.embeddedPlayer = null;
	a.thumbnail = null;
	a.videoTitle = null;
	return a
}
DF_Mf(DF_MW, DF_ME);
DF_MW.D = DF_ME.D;
DF_MW.o = DF_ME.o;
DF_MW.s = DF_ME.s;
DF_MW.h = DF_ME.h;
DF_MW.g = DF_ME.g;
DF_MW.C = DF_ME.C;
DF_MW.i = DF_ME.i;
DF_MW.u = DF_ME.u;
DF_MW.l = DF_ME.l;
DF_MW.v = DF_ME.v;
DF_MW.prototype.connectedCallback = function() {
	DF_ME.prototype.connectedCallback.call(this);
	var a = this.dataset.markdownUrl;
	a && (this.videoType = "link", this.anchor = new DF_Msg({
		href: a
	}), this.embeddedPlayer = "youtube", this.classList.add("markdown"))
};
DF_MW.prototype.render = function() {
	if ("raw" === this.videoType) return DF_Mw(DF_Mug, this.source, "Your browser does not support the video tag.", DF_MAg(this));
	if ("link" === this.videoType && "youtube" === this.embeddedPlayer) {
		var a = DF_MUc(DF_Mvg);
		var b = DF_M9a(this.anchor.href);
		var c = DF_M8b(a).toString();
		var d = c.split(/\?|#/);
		a = /\?/.test(c) ? "?" + d[1] : "";
		var e = d[0];
		c = /#/.test(c) ? "#" + (a ? d[2] : d[1]) : "";
		b = e + ("/" === e.slice(-1) ? "" : "/") + encodeURIComponent(b);
		b = DF_M$b(b + a + c);
		return DF_Mw(DF_Mwg, b, this.title, DF_MAg(this))
	}
	b =
		DF_Mp(this.languageCode, "opensInANewTab");
	return DF_Mw(DF_Mxg, this.anchor.href, this.anchor.target, this.anchor.rel, b, this.thumbnail.rawUrl, DF_MAg(this), DF_Mue)
};

function DF_MAg(a) {
	return a.videoTitle ? DF_Mw(DF_Myg, a.videoTitle) : "link" === a.videoType && DF_M8a.test(a.anchor.href) ? DF_Mw(DF_Mzg, DF_Mve, a.dataset.markdownTitle || "Youtube video") : null
}
DF_Ma.Object.defineProperties(DF_MW.prototype, {
	F: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			this.dataset.markdownUrl = a
		}
	},
	g: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			this.dataset.markdownTitle = a
		}
	}
});
var DF_MBg = DF_MW;
DF_MBg.j = [DF_Mqg, DF_MA];
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "videoType", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "anchor", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "source", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "embeddedPlayer", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "thumbnail", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBg.prototype, "videoTitle", void 0);
DF_MBg = DF_Mk([DF_Mq("df-video"), DF_Ml("design:paramtypes", [String, String])], DF_MBg);

function DF_MCg(a) {
	if (!a) return null;
	var b;
	return (null == (b = a.src) ? 0 : b.rawUrl) ? {
		rawUrl: a.src.rawUrl
	} : a.rawUrl ? {
		rawUrl: a.rawUrl
	} : null
};
var DF_MDg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '" />']),
	DF_MEg = DF_Mc([' <span role="listitem" class="chip">\n      <button\n        class="focus-outline"\n        @click=', ">\n        ", '\n        <span class="text word-wrap">', "</span>\n      </button>\n    </span>"]),
	DF_MFg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '" />']),
	DF_MGg = DF_Mc(' <span role="listitem" class="chip">\n      <a\n        @click=;\n        class="chip-link focus-outline"\n        href=";"\n        target=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        ;\n        <span class="text word-wrap">;</span>\n        <span class="icon">;</span>\n      </a>\n    </span>'.split(";"));

function DF_MHg(a, b, c, d) {
	this.text = a;
	this.image = b;
	this.accessibilityText = c;
	this.mode = d
}
DF_MHg.prototype.render = function(a, b) {
	var c = this,
		d, e = (null == (d = this.image) ? 0 : d.rawUrl) ? DF_Mw(DF_MDg, this.image.rawUrl, this.accessibilityText || "") : null;
	return DF_Mw(DF_MEg, function() {
		a.clicked = !0;
		null == b || b.presenter.storeMessageClicked(a.uniqueId);
		DF_Mn(a, "df-chip-clicked", {
			text: c.text
		});
		"blocking" === c.mode && b && (b.isWaitingForElement = !1);
		null == b || b.renderCustomText(c.text, !1);
		null == b || b.presenter.sendQuery(c.text)
	}, e, this.text)
};

function DF_MIg(a, b, c, d, e) {
	this.text = a;
	this.anchor = b;
	this.image = c;
	this.accessibilityText = d;
	this.mode = e
}
DF_MIg.prototype.render = function(a, b) {
	var c = this,
		d = DF_Mp(a.languageCode, "opensInANewTab"),
		e, f = (null == (e = this.image) ? 0 : e.rawUrl) ? DF_Mw(DF_MFg, this.image.rawUrl, this.accessibilityText || "") : null;
	return DF_Mw(DF_MGg, function() {
		DF_Mn(a, "df-chip-clicked", {
			text: c.text,
			actionLink: c.anchor.href
		});
		"blocking" === c.mode && b && (b.isWaitingForElement = !1)
	}, this.anchor.href, this.anchor.target, this.anchor.rel, d, f, this.text, DF_Mte)
};
var DF_MJg = DF_Mr([":host{font-size:0}.code-block-wrapper{font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));border-radius:16px;border:var(--df-messenger-code-block-border,var(--df-messenger-default-border));overflow:hidden;display:inline-block;box-sizing:border-box;width:var(--df-messenger-code-block-width,auto);max-width:100%}.header{background:var(--df-messenger-code-block-header-background,#fff);padding:var(--df-messenger-code-block-header-padding,12px 16px);font-size:var(--df-messenger-code-block-header-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-code-block-header-font-weight,500);border-bottom:var(--df-messenger-code-block-border,var(--df-messenger-default-border))}.footer{display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;min-height:49px;background:var(--df-messenger-code-block-footer-background,#fff);padding:var(--df-messenger-code-block-footer-padding,8px 16px);font-size:var(--df-messenger-code-block-footer-font-size, 12px);font-weight:var(--df-messenger-code-block-footer-font-weight,normal);border-top:var(--df-messenger-code-block-border,var(--df-messenger-default-border))}.code{background:var(--df-messenger-code-block-code-background,#f2f2f2);padding:var(--df-messenger-code-block-code-padding,16px);font-size:var(--df-messenger-code-block-code-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );overflow-x:auto}.copy-button{margin:-12px -12px -12px 0;padding:12px;fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))}.copy-button.action-button.active{background-color:rgba(0,0,0,.33);transition:background-color .2s}"]);
var DF_MKg = DF_Mc('<div>\n      <div class="code-block-wrapper">\n        ;\n        <div class="code">\n          <slot></slot>\n        </div>\n        <div class="footer">\n          <span>;</span>\n          <button\n            class="copy-button action-button focus-outline"\n            aria-label=";"\n            @click=;>\n            ;\n          </button>\n        </div>\n      </div>\n    </div>'.split(";")),
	DF_MLg = DF_Mc(['<div class="header">', "</div>"]);

function DF_MX() {
	return DF_My.apply(this, arguments) || this
}
DF_Mf(DF_MX, DF_My);
DF_MX.D = DF_My.D;
DF_MX.o = DF_My.o;
DF_MX.s = DF_My.s;
DF_MX.h = DF_My.h;
DF_MX.g = DF_My.g;
DF_MX.C = DF_My.C;
DF_MX.i = DF_My.i;
DF_MX.u = DF_My.u;
DF_MX.l = DF_My.l;
DF_MX.v = DF_My.v;
DF_MX.prototype.render = function() {
	var a, b = DF_Mp(null == (a = this.F) ? void 0 : a.languageCode, "useCodeWithCautionText"),
		c;
	a = DF_Mp(null == (c = this.F) ? void 0 : c.languageCode, "copyCodeAriaLabel");
	c = this.g;
	return DF_Mw(DF_MKg, c ? DF_Mw(DF_MLg, c) : null, b, a, this.M, DF_Mre)
};
DF_MX.prototype.M = function() {
	if (0 !== this.Xb.length) {
		var a = this.Xb[0].textContent;
		if (a) {
			var b = this.T.querySelector(".copy-button");
			null == b || b.classList.add("active");
			setTimeout(function() {
				null == b || b.classList.remove("active")
			}, 200);
			navigator.clipboard.writeText(a)
		}
	}
};
DF_Ma.Object.defineProperties(DF_MX.prototype, {
	g: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			this.dataset.language = a
		},
		get: function() {
			var a;
			return null != (a = this.dataset.language) ? a : ""
		}
	},
	F: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.closest("df-markdown-message")
		}
	}
});
var DF_MMg = DF_MX;
DF_MMg.G = "language";
DF_MMg.j = [DF_MJg, DF_MA];
DF_Mk([function(a) {
	return function(b, c) {
		var d = null != a ? a : {},
			e = d.slot,
			f = d.Td,
			g = "slot" + (e ? "[name=" + e + "]" : ":not([name])");
		return DF_MHb(b, c, {
			get: function() {
				var h, k, l, m = null != (l = null == (k = null == (h = this.T) ? void 0 : h.querySelector(g)) ? void 0 : k.assignedElements(a)) ? l : [];
				return void 0 === f ? m : m.filter(function(n) {
					return n.matches(f)
				})
			}
		})
	}
}(), DF_Ml("design:type", Array)], DF_MMg.prototype, "Xb", void 0);
DF_MMg = DF_Mk([DF_Mq("df-code-block")], DF_MMg);

function DF_MNg(a, b) {
	if (1 === a.nodeType) {
		var c = a.tagName;
		if ("SCRIPT" === c || "STYLE" === c) throw Error("");
	}
	a.innerHTML = DF_MMc(b)
};
var DF_MOg = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

function DF_MPg(a) {
	var b = DF_MUc(DF_MQg);
	if (b instanceof DF_M7b) a.href = DF_M8b(b).toString();
	else {
		if (-1 === DF_MOg.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
		b instanceof DF_Mac ? b = DF_Mbc(b) : b = DF_MTc.test(b) ? b : void 0;
		if (void 0 === b) return;
		a.href = b
	}
	a.rel = "stylesheet"
};

function DF_MRg(a, b) {
	a.src = DF_M8b(b);
	var c, d;
	(c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
};

function DF_MSg(a) {
	this.Ua = a;
	this.kc = "CodeBlock"
}
DF_MSg.prototype.fc = function(a) {
	return DF_MTg(a, "df-code-block", ["data-language"])
};
DF_MSg.prototype.tc = function(a) {
	var b;
	return a.nodeType === Node.ELEMENT_NODE && "code" === a.nodeName.toLowerCase() && "pre" === (null == (b = a.parentNode) ? void 0 : b.nodeName.toLowerCase())
};
DF_MSg.prototype.gb = function(a) {
	if (a.textContent) {
		var b = globalThis,
			c = a.classList[0];
		if (b.hljs && null != c && c.startsWith("language-")) {
			c = c.substring(9);
			try {
				var d = b.hljs.getLanguage(c).name,
					e = b.hljs.highlight(c, a.textContent);
				DF_MNg(a, this.Ua.da(e.value));
				DF_MUg(a, d)
			} catch (f) {
				console.warn("DF-MESSENGER", "hljs", f)
			}
		} else DF_MUg(a)
	}
};

function DF_MUg(a, b) {
	var c = a.parentElement,
		d = new DF_MMg;
	b && (d.g = b);
	b = document.createElement("pre");
	b.classList.add("code-block");
	b.appendChild(a);
	d.appendChild(b);
	c.replaceWith(d)
};

function DF_MVg() {
	this.kc = "Youtube"
}
DF_MVg.prototype.fc = function(a) {
	return DF_MTg(a, "df-video", ["data-markdown-url", "data-markdown-title"])
};
DF_MVg.prototype.tc = function(a) {
	return a.nodeType === Node.ELEMENT_NODE && "a" === a.nodeName.toLowerCase()
};
DF_MVg.prototype.gb = function(a) {
	var b = a.getAttribute("href");
	if (b && DF_M9a(b)) {
		var c = new DF_MBg("", "");
		c.F = b;
		a.textContent && (c.g = a.textContent);
		a.replaceWith(c)
	}
};

function DF_MWg() {
	return null
};
var DF_MXg = {
		"* ARIA-CHECKED": !0,
		"* ARIA-COLCOUNT": !0,
		"* ARIA-COLINDEX": !0,
		"* ARIA-CONTROLS": !0,
		"* ARIA-DESCRIBEDBY": !0,
		"* ARIA-DISABLED": !0,
		"* ARIA-EXPANDED": !0,
		"* ARIA-GOOG-EDITABLE": !0,
		"* ARIA-HASPOPUP": !0,
		"* ARIA-HIDDEN": !0,
		"* ARIA-LABEL": !0,
		"* ARIA-LABELLEDBY": !0,
		"* ARIA-MULTILINE": !0,
		"* ARIA-MULTISELECTABLE": !0,
		"* ARIA-ORIENTATION": !0,
		"* ARIA-PLACEHOLDER": !0,
		"* ARIA-READONLY": !0,
		"* ARIA-REQUIRED": !0,
		"* ARIA-ROLEDESCRIPTION": !0,
		"* ARIA-ROWCOUNT": !0,
		"* ARIA-ROWINDEX": !0,
		"* ARIA-SELECTED": !0,
		"* ABBR": !0,
		"* ACCEPT": !0,
		"* ACCESSKEY": !0,
		"* ALIGN": !0,
		"* ALT": !0,
		"* AUTOCOMPLETE": !0,
		"* AXIS": !0,
		"* BGCOLOR": !0,
		"* BORDER": !0,
		"* CELLPADDING": !0,
		"* CELLSPACING": !0,
		"* CHAROFF": !0,
		"* CHAR": !0,
		"* CHECKED": !0,
		"* CLEAR": !0,
		"* COLOR": !0,
		"* COLSPAN": !0,
		"* COLS": !0,
		"* COMPACT": !0,
		"* COORDS": !0,
		"* DATETIME": !0,
		"* DIR": !0,
		"* DISABLED": !0,
		"* ENCTYPE": !0,
		"* FACE": !0,
		"* FRAME": !0,
		"* HEIGHT": !0,
		"* HREFLANG": !0,
		"* HSPACE": !0,
		"* ISMAP": !0,
		"* LABEL": !0,
		"* LANG": !0,
		"* MAX": !0,
		"* MAXLENGTH": !0,
		"* METHOD": !0,
		"* MULTIPLE": !0,
		"* NOHREF": !0,
		"* NOSHADE": !0,
		"* NOWRAP": !0,
		"* OPEN": !0,
		"* READONLY": !0,
		"* REQUIRED": !0,
		"* REL": !0,
		"* REV": !0,
		"* ROLE": !0,
		"* ROWSPAN": !0,
		"* ROWS": !0,
		"* RULES": !0,
		"* SCOPE": !0,
		"* SELECTED": !0,
		"* SHAPE": !0,
		"* SIZE": !0,
		"* SPAN": !0,
		"* START": !0,
		"* SUMMARY": !0,
		"* TABINDEX": !0,
		"* TITLE": !0,
		"* TYPE": !0,
		"* VALIGN": !0,
		"* VALUE": !0,
		"* VSPACE": !0,
		"* WIDTH": !0
	},
	DF_MYg = {
		"* USEMAP": !0,
		"* ACTION": !0,
		"* CITE": !0,
		"* HREF": !0,
		"* LONGDESC": !0,
		"* SRC": !0,
		"LINK HREF": !0,
		"* FOR": !0,
		"* HEADERS": !0,
		"* NAME": !0,
		"A TARGET": !0,
		"* CLASS": !0,
		"* ID": !0,
		"* STYLE": !0
	};
var DF_MZg = DF_MIc() ? !1 : DF_Mv("Opera"),
	DF_M_g = DF_MIc() ? !1 : DF_Mv("Trident") || DF_Mv("MSIE"),
	DF_M0g = DF_Mv("Edge"),
	DF_M1g = DF_Mv("Gecko") && !(-1 != DF_MEc().toLowerCase().indexOf("webkit") && !DF_Mv("Edge")) && !(DF_Mv("Trident") || DF_Mv("MSIE")) && !DF_Mv("Edge"),
	DF_M2g = -1 != DF_MEc().toLowerCase().indexOf("webkit") && !DF_Mv("Edge");

function DF_M3g() {
	var a = DF_Mj.document;
	return a ? a.documentMode : void 0
}
var DF_M4g;
a: {
	var DF_M5g = "",
		DF_M6g = function() {
			var a = DF_MEc();
			if (DF_M1g) return /rv:([^\);]+)(\)|;)/.exec(a);
			if (DF_M0g) return /Edge\/([\d\.]+)/.exec(a);
			if (DF_M_g) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
			if (DF_M2g) return /WebKit\/(\S+)/.exec(a);
			if (DF_MZg) return /(?:Version)[ \/]?(\S+)/.exec(a)
		}();DF_M6g && (DF_M5g = DF_M6g ? DF_M6g[1] : "");
	if (DF_M_g) {
		var DF_M7g = DF_M3g();
		if (null != DF_M7g && DF_M7g > parseFloat(DF_M5g)) {
			DF_M4g = String(DF_M7g);
			break a
		}
	}
	DF_M4g = DF_M5g
}
var DF_M8g = DF_M4g,
	DF_M9g;
if (DF_Mj.document && DF_M_g) {
	var DF_M$g = DF_M3g();
	DF_M9g = DF_M$g ? DF_M$g : parseInt(DF_M8g, 10) || void 0
} else DF_M9g = void 0;
var DF_Mah = DF_M9g;
var DF_Mbh = function(a) {
	var b = !1,
		c;
	return function() {
		b || (c = a(), b = !0);
		return c
	}
}(function() {
	var a = document.createElement("div"),
		b = document.createElement("div");
	b.appendChild(document.createElement("div"));
	a.appendChild(b);
	b = a.firstChild.firstChild;
	a.innerHTML = DF_MMc(DF_MOc);
	return !b.parentElement
});

function DF_Mch(a, b) {
	if (DF_Mbh())
		for (; a.lastChild;) a.removeChild(a.lastChild);
	a.innerHTML = DF_MMc(b)
};

function DF_Mdh(a) {
	return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
var DF_Meh = {};

function DF_Mfh(a) {
	var b = DF_Meh.hasOwnProperty(a) ? DF_Meh[a] : null;
	if (b) return b;
	65536 < Object.keys(DF_Meh).length && (DF_Meh = {});
	var c = [0, 0, 0, 0],
		d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
	b = DF_Mgh(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
	b = DF_Mgh(b, d);
	b = DF_Mgh(b, /\\./g);
	b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
	b = b.replace(RegExp("{[^]*", "gm"), "");
	b = DF_Mhh(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
	b = DF_Mhh(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
	b = DF_Mhh(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"),
		2);
	b = DF_Mhh(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
	b = DF_Mhh(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
	b = DF_Mhh(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
	b = b.replace(/[\*\s\+>~]/g, " ");
	b = b.replace(/[#\.]/g, " ");
	DF_Mhh(b, c, /([^\s\+>~\.\[:]+)/g, 3);
	b = c;
	return DF_Meh[a] = b
}

function DF_Mhh(a, b, c, d) {
	return a.replace(c, function(e) {
		b[d] += 1;
		return Array(e.length + 1).join(" ")
	})
}

function DF_Mgh(a, b) {
	return a.replace(b, function(c) {
		return Array(c.length + 1).join("A")
	})
};
var DF_Mih = {
		rgb: !0,
		rgba: !0,
		alpha: !0,
		rect: !0,
		image: !0,
		"linear-gradient": !0,
		"radial-gradient": !0,
		"repeating-linear-gradient": !0,
		"repeating-radial-gradient": !0,
		"cubic-bezier": !0,
		matrix: !0,
		perspective: !0,
		rotate: !0,
		rotate3d: !0,
		rotatex: !0,
		rotatey: !0,
		steps: !0,
		rotatez: !0,
		scale: !0,
		scale3d: !0,
		scalex: !0,
		scaley: !0,
		scalez: !0,
		skew: !0,
		skewx: !0,
		skewy: !0,
		translate: !0,
		translate3d: !0,
		translatex: !0,
		translatey: !0,
		translatez: !0
	},
	DF_Mjh = /[\n\f\r"'()*<>]/g,
	DF_Mkh = {
		"\n": "%0a",
		"\f": "%0c",
		"\r": "%0d",
		'"': "%22",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"*": "%2a",
		"<": "%3c",
		">": "%3e"
	};

function DF_Mlh(a) {
	return DF_Mkh[a]
}

function DF_Mmh(a, b, c) {
	b = DF_Mhc(b);
	if ("" == b) return null;
	var d = String(b.slice(0, 4)).toLowerCase();
	if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
		if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
		else {
			a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
				var e = "\"'".charAt(d);
				if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
					b = b.substring(1, b.length - 1);
					break a
				}
			}
			a = c ? (a = c(b, a)) && DF_Mbc(a) != DF_Mgc.toString() ? 'url("' + DF_Mbc(a).replace(DF_Mjh, DF_Mlh) + '")' : null : null
		}
		return a
	}
	if (0 < b.indexOf("(")) {
		if (/"|'/.test(b)) return null;
		for (a = /([\-\w]+)\(/g; c = a.exec(b);)
			if (!(c[1].toLowerCase() in DF_Mih)) return null
	}
	return b
};
!DF_Mv("Android") || DF_MJc();
DF_MJc();
DF_Mv("Safari") && (DF_MJc() || (DF_MIc() ? 0 : DF_Mv("Coast")) || (DF_MIc() ? 0 : DF_Mv("Opera")) || (DF_MIc() ? 0 : DF_Mv("Edge")) || (DF_MIc() ? DF_MHc("Microsoft Edge") : DF_Mv("Edg/")) || DF_MIc() && DF_MHc("Opera"));

function DF_Mnh(a, b) {
	a = DF_Mj[a];
	return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function DF_Moh(a, b) {
	return (a = DF_Mj[a]) && a.prototype && a.prototype[b] || null
}
var DF_Mph = DF_Mnh("Element", "attributes") || DF_Mnh("Node", "attributes"),
	DF_Mqh = DF_Moh("Element", "hasAttribute"),
	DF_Mrh = DF_Moh("Element", "getAttribute"),
	DF_Msh = DF_Moh("Element", "setAttribute"),
	DF_Mth = DF_Moh("Element", "removeAttribute");
DF_Mnh("Element", "innerHTML") || DF_Mnh("HTMLElement", "innerHTML");
var DF_Muh = DF_Moh("Element", "getElementsByTagName"),
	DF_Mvh = DF_Moh("Element", "matches") || DF_Moh("Element", "msMatchesSelector"),
	DF_Mwh = DF_Mnh("Node", "nodeName"),
	DF_Mxh = DF_Mnh("Node", "nodeType"),
	DF_Myh = DF_Mnh("Node", "parentNode");
DF_Mnh("Node", "childNodes");
var DF_Mzh = DF_Mnh("HTMLElement", "style") || DF_Mnh("Element", "style"),
	DF_MAh = DF_Mnh("HTMLStyleElement", "sheet"),
	DF_MBh = DF_Moh("CSSStyleDeclaration", "getPropertyValue"),
	DF_MCh = DF_Moh("CSSStyleDeclaration", "setProperty"),
	DF_MDh = DF_Mnh("Element", "namespaceURI") || DF_Mnh("Node", "namespaceURI");

function DF_MEh(a, b, c, d) {
	if (a) return a.apply(b);
	a = b[c];
	if (!d(a)) throw Error("Clobbering detected");
	return a
}

function DF_MFh(a, b, c, d) {
	if (a) return a.apply(b, d);
	if (DF_M_g && 10 > document.documentMode) {
		if (!b[c].call) throw Error("IE Clobbering detected");
	} else if ("function" != typeof b[c]) throw Error("Clobbering detected");
	return b[c].apply(b, d)
}

function DF_MGh(a) {
	return DF_MEh(DF_Mph, a, "attributes", function(b) {
		return b instanceof NamedNodeMap
	})
}

function DF_MHh(a, b, c) {
	try {
		DF_MFh(DF_Msh, a, "setAttribute", [b, c])
	} catch (d) {
		if (-1 == d.message.indexOf("A security problem occurred")) throw d;
	}
}

function DF_MIh(a) {
	return DF_MEh(DF_Mzh, a, "style", function(b) {
		return b instanceof CSSStyleDeclaration
	})
}

function DF_MJh(a) {
	return DF_MEh(DF_MAh, a, "sheet", function(b) {
		return b instanceof CSSStyleSheet
	})
}

function DF_MKh(a) {
	return DF_MEh(DF_Mwh, a, "nodeName", function(b) {
		return "string" == typeof b
	})
}

function DF_MLh(a) {
	return DF_MEh(DF_Mxh, a, "nodeType", function(b) {
		return "number" == typeof b
	})
}

function DF_MMh(a) {
	return DF_MEh(DF_Myh, a, "parentNode", function(b) {
		return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
	})
}

function DF_MNh(a, b) {
	return DF_MFh(DF_MBh, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function DF_MOh(a, b, c) {
	DF_MFh(DF_MCh, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}

function DF_MPh(a) {
	return DF_MEh(DF_MDh, a, "namespaceURI", function(b) {
		return "string" == typeof b
	})
};
var DF_MQh = DF_M_g && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
	DF_MRh = {
		"-webkit-border-horizontal-spacing": !0,
		"-webkit-border-vertical-spacing": !0
	};

function DF_MSh(a, b, c) {
	var d = [];
	DF_MTh(DF_MZb(a.cssRules)).forEach(function(e) {
		if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
		if (!(b && DF_M_g && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
			var f = b ? e.selectorText.replace(DF_MQh, "#" + b + " $1") : e.selectorText,
				g = d.push;
			e = DF_MUh(e.style, c);
			if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
			var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
			if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " +
				f);
			a: {
				for (var k = {
						"(": ")",
						"[": "]"
					}, l = [], m = 0; m < h.length; m++) {
					var n = h[m];
					if (k[n]) l.push(k[n]);
					else {
						b: {
							var p = void 0;
							for (p in k)
								if (k[p] == n) {
									p = !0;
									break b
								} p = !1
						}
						if (p && l.pop() != n) {
							h = !1;
							break a
						}
					}
				}
				h = 0 == l.length
			}
			if (!h) throw Error("() and [] in selector must be balanced, got: " + f);
			if (!(e instanceof DF_Mjc)) {
				h = "";
				for (var q in e)
					if (Object.prototype.hasOwnProperty.call(e, q)) {
						if (!/^[-_a-zA-Z0-9]+$/.test(q)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + q);
						k = e[q];
						null != k && (k = Array.isArray(k) ? k.map(DF_Mmc).join(" ") :
							DF_Mmc(k), h += q + ":" + k + ";")
					} e = h ? new DF_Mjc(h, DF_Mic) : DF_Mlc
			}
			g.call(d, new DF_Muc(f + "{" + DF_Mkc(e).replace(/</g, "\\3C ") + "}", DF_Mtc))
		}
	});
	return DF_Mvc(d)
}

function DF_MTh(a) {
	return a.filter(function(b) {
		return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
	})
}

function DF_MVh(a, b, c) {
	a = DF_MWh("<style>" + a + "</style>");
	return null == a || null == a.sheet ? DF_Mxc : DF_MSh(a.sheet, void 0 != b ? b : null, c)
}

function DF_MWh(a) {
	a = DF_MNc("<html><head></head><body>" + a + "</body></html>");
	return (new DOMParser).parseFromString(DF_MMc(a), "text/html").body.children[0]
}

function DF_MUh(a, b) {
	if (!a) return DF_Mlc;
	var c = document.createElement("div").style;
	DF_MXh(a).forEach(function(d) {
		var e = DF_M2g && d in DF_MRh ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
		0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = DF_MNh(a, d), d = DF_Mmh(e, d, b), null != d && DF_MOh(c, e, d))
	});
	return new DF_Mjc(c.cssText || "", DF_Mic)
}

function DF_MYh(a) {
	var b = Array.from(DF_MFh(DF_Muh, a, "getElementsByTagName", ["STYLE"])),
		c = DF_M_b(b, function(g) {
			return DF_MZb(DF_MJh(g).cssRules)
		});
	c = DF_MTh(c);
	for (var d = [], e = 0; e < c.length; e++) d[e] = {
		index: e,
		Ub: c[e]
	};
	d.sort(function(g, h) {
		var k = DF_Mfh(g.Ub.selectorText),
			l = DF_Mfh(h.Ub.selectorText);
		a: {
			for (var m = Math.min(k.length, l.length), n = 0; n < m; n++) {
				var p = k[n],
					q = l[n];
				p = p > q ? 1 : p < q ? -1 : 0;
				if (0 != p) {
					l = p;
					break a
				}
			}
			k = k.length;l = l.length;l = k > l ? 1 : k < l ? -1 : 0
		}
		return l || g.index - h.index
	});
	for (e = 0; e < d.length; e++) c[e] = d[e].Ub;
	c.reverse();
	a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
	for (var f; f = a.nextNode();) c.forEach(function(g) {
		DF_MFh(DF_Mvh, f, f.matches ? "matches" : "msMatchesSelector", [g.selectorText]) && g.style && DF_MZh(f, g.style)
	});
	b.forEach(DF_Mdh)
}

function DF_MZh(a, b) {
	var c = DF_MXh(a.style);
	DF_MXh(b).forEach(function(d) {
		if (!(0 <= c.indexOf(d))) {
			var e = DF_MNh(b, d);
			DF_MOh(a.style, d, e)
		}
	})
}

function DF_MXh(a) {
	var b = typeof a;
	b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
	"array" == b || "object" == b && "number" == typeof a.length ? a = DF_MZb(a) : (a = DF_M0b(a), b = DF_MVb(a, "cssText"), 0 <= b && Array.prototype.splice.call(a, b, 1));
	return a
};
var DF_M_h = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
	DF_M0h = 0;

function DF_M1h() {
	this.i = [];
	this.h = [];
	this.g = "data-elementweakmap-index-" + DF_M0h++
}
DF_M1h.prototype.set = function(a, b) {
	if (DF_MFh(DF_Mqh, a, "hasAttribute", [this.g])) {
		var c = parseInt(DF_MFh(DF_Mrh, a, "getAttribute", [this.g]) || null, 10);
		this.h[c] = b
	} else c = this.h.push(b) - 1, DF_MHh(a, this.g, c.toString()), this.i.push(a);
	return this
};
DF_M1h.prototype.get = function(a) {
	if (DF_MFh(DF_Mqh, a, "hasAttribute", [this.g])) return a = parseInt(DF_MFh(DF_Mrh, a, "getAttribute", [this.g]) || null, 10), this.h[a]
};
DF_M1h.prototype.clear = function() {
	this.i.forEach(function(a) {
		DF_MFh(DF_Mth, a, "removeAttribute", [this.g])
	}, this);
	this.i = [];
	this.h = []
};
var DF_M2h;
(DF_M2h = !DF_M_g) || (DF_M2h = 10 <= Number(DF_Mah));
var DF_M3h = DF_M2h,
	DF_M4h = !DF_M_g || null == document.documentMode;

function DF_M5h() {
	this.h = document.implementation.createHTMLDocument("")
};
var DF_M6h = {
	APPLET: !0,
	AUDIO: !0,
	BASE: !0,
	BGSOUND: !0,
	EMBED: !0,
	FORM: !0,
	IFRAME: !0,
	ISINDEX: !0,
	KEYGEN: !0,
	LAYER: !0,
	LINK: !0,
	META: !0,
	OBJECT: !0,
	SCRIPT: !0,
	SVG: !0,
	STYLE: !0,
	TEMPLATE: !0
};
var DF_M7h = {
	A: !0,
	ABBR: !0,
	ACRONYM: !0,
	ADDRESS: !0,
	AREA: !0,
	ARTICLE: !0,
	ASIDE: !0,
	B: !0,
	BDI: !0,
	BDO: !0,
	BIG: !0,
	BLOCKQUOTE: !0,
	BR: !0,
	BUTTON: !0,
	CAPTION: !0,
	CENTER: !0,
	CITE: !0,
	CODE: !0,
	COL: !0,
	COLGROUP: !0,
	DATA: !0,
	DATALIST: !0,
	DD: !0,
	DEL: !0,
	DETAILS: !0,
	DFN: !0,
	DIALOG: !0,
	DIR: !0,
	DIV: !0,
	DL: !0,
	DT: !0,
	EM: !0,
	FIELDSET: !0,
	FIGCAPTION: !0,
	FIGURE: !0,
	FONT: !0,
	FOOTER: !0,
	FORM: !0,
	H1: !0,
	H2: !0,
	H3: !0,
	H4: !0,
	H5: !0,
	H6: !0,
	HEADER: !0,
	HGROUP: !0,
	HR: !0,
	I: !0,
	IMG: !0,
	INPUT: !0,
	INS: !0,
	KBD: !0,
	LABEL: !0,
	LEGEND: !0,
	LI: !0,
	MAIN: !0,
	MAP: !0,
	MARK: !0,
	MENU: !0,
	METER: !0,
	NAV: !0,
	NOSCRIPT: !0,
	OL: !0,
	OPTGROUP: !0,
	OPTION: !0,
	OUTPUT: !0,
	P: !0,
	PRE: !0,
	PROGRESS: !0,
	Q: !0,
	S: !0,
	SAMP: !0,
	SECTION: !0,
	SELECT: !0,
	SMALL: !0,
	SOURCE: !0,
	SPAN: !0,
	STRIKE: !0,
	STRONG: !0,
	STYLE: !0,
	SUB: !0,
	SUMMARY: !0,
	SUP: !0,
	TABLE: !0,
	TBODY: !0,
	TD: !0,
	TEXTAREA: !0,
	TFOOT: !0,
	TH: !0,
	THEAD: !0,
	TIME: !0,
	TR: !0,
	TT: !0,
	U: !0,
	UL: !0,
	VAR: !0,
	VIDEO: !0,
	WBR: !0
};
var DF_M8h = {
	"ANNOTATION-XML": !0,
	"COLOR-PROFILE": !0,
	"FONT-FACE": !0,
	"FONT-FACE-SRC": !0,
	"FONT-FACE-URI": !0,
	"FONT-FACE-FORMAT": !0,
	"FONT-FACE-NAME": !0,
	"MISSING-GLYPH": !0
};

function DF_M9h(a) {
	this.h = document.implementation.createHTMLDocument("");
	a = a || new DF_M$h;
	DF_Mai(a);
	this.g = DF_M1b(a.g);
	this.F = DF_M1b(a.O);
	this.i = DF_M1b(a.j);
	this.ea = a.Ba;
	a.la.forEach(function(b) {
		if (0 != b.lastIndexOf("data-", 0)) throw new DF_MUb('Only "data-" attributes allowed, got: %s.', [b]);
		if (0 == b.lastIndexOf("data-sanitizer-", 0)) throw new DF_MUb('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
		this.g["* " + b.toUpperCase()] = DF_Mbi
	}, this);
	a.ea.forEach(function(b) {
		b = b.toUpperCase();
		if (-1 == b.indexOf("-") || DF_M8h[b]) throw new DF_MUb("Only valid custom element tag names allowed, got: %s.", [b]);
		this.i[b] = !0
	}, this);
	this.O = a.i;
	this.G = a.L;
	this.j = null;
	this.L = a.F
}
DF_MGa(DF_M9h, DF_M5h);

function DF_Mci(a) {
	return function(b, c) {
		return (b = a(DF_Mhc(b), c)) && DF_Mbc(b) != DF_Mgc.toString() ? DF_Mbc(b) : null
	}
}

function DF_M$h() {
	this.g = {};
	DF_MWb([DF_MXg, DF_MYg], function(a) {
		DF_M0b(a).forEach(function(b) {
			this.g[b] = DF_Mbi
		}, this)
	}, this);
	this.h = {};
	this.la = [];
	this.ea = [];
	this.O = DF_M1b(DF_M6h);
	this.j = DF_M1b(DF_M7h);
	this.Ba = !1;
	this.La = DF_Mdi;
	this.Z = this.G = this.sa = this.i = DF_MWg;
	this.L = null;
	this.M = this.F = !1
}

function DF_MTg(a, b, c) {
	a.ea.push(b);
	c && c.forEach(function(d) {
		d = DF_Mei(b, d);
		this.g[d] = DF_Mbi;
		this.h[d] = !0
	}, a);
	return a
}

function DF_Mfi() {
	var a = DF_Mgi();
	if (a.F) throw Error("Rules from STYLE tags are already being inlined.");
	delete a.O.STYLE;
	a.L = "*";
	a.Z = DF_Mhi;
	return a
}

function DF_Mgi() {
	var a = new DF_M$h,
		b = DF_Mii.concat("style");
	a.j = {
		SPAN: !0
	};
	b.forEach(function(c) {
		c = c.toUpperCase();
		if (DF_M7h[c]) this.j[c] = !0;
		else throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
	}, a);
	return a
}

function DF_Mji(a, b) {
	a.i = b;
	return a
}

function DF_Mki(a, b) {
	a.G = b;
	return a
}

function DF_Mli(a, b) {
	return function(c, d, e, f) {
		c = a(c, d, e, f);
		return null == c ? null : b(c, d, e, f)
	}
}

function DF_Mmi(a, b, c, d) {
	a[c] && !b[c] && (a[c] = DF_Mli(a[c], d))
}

function DF_Mai(a) {
	if (a.M) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
	DF_Mmi(a.g, a.h, "* USEMAP", DF_Mni);
	var b = DF_Mci(a.La);
	["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
		DF_Mmi(this.g, this.h, d, b)
	}, a);
	var c = DF_Mci(a.i);
	["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
		DF_Mmi(this.g, this.h, d, c)
	}, a);
	["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
		DF_Mmi(this.g, this.h, d, DF_MFa(DF_Moi, this.sa))
	}, a);
	DF_Mmi(a.g, a.h, "A TARGET", DF_MFa(DF_Mpi, ["_blank", "_self"]));
	DF_Mmi(a.g,
		a.h, "* CLASS", DF_MFa(DF_Mqi, a.G));
	DF_Mmi(a.g, a.h, "* ID", DF_MFa(DF_Mri, a.G));
	DF_Mmi(a.g, a.h, "* STYLE", DF_MFa(a.Z, c));
	a.M = !0
}

function DF_Mdi(a) {
	return DF_MSc(a)
}

function DF_Mei(a, b) {
	a || (a = "*");
	return (a + " " + b).toUpperCase()
}

function DF_Mhi(a, b, c, d) {
	if (!d.Fb) return null;
	b = DF_Mkc(DF_MUh(d.Fb, function(e, f) {
		c.cd = f;
		e = a(e, c);
		var g;
		null == e ? g = null : g = new DF_Mac(e, DF_Mfc);
		return g
	}));
	return "" == b ? null : b
}

function DF_Mbi(a) {
	return DF_Mhc(a)
}

function DF_Mpi(a, b) {
	b = DF_Mhc(b);
	return 0 <= DF_MVb(a, b.toLowerCase()) ? b : null
}

function DF_Mni(a) {
	return (a = DF_Mhc(a)) && "#" == a.charAt(0) ? a : null
}

function DF_Moi(a, b, c) {
	return a(DF_Mhc(b), c)
}

function DF_Mqi(a, b, c) {
	b = b.split(/(?:\s+)/);
	for (var d = [], e = 0; e < b.length; e++) {
		var f = a(b[e], c);
		f && d.push(f)
	}
	return 0 == d.length ? null : d.join(" ")
}

function DF_Mri(a, b, c) {
	return a(DF_Mhc(b), c)
}
DF_M9h.prototype.da = function(a) {
	var b = !("STYLE" in this.F) && "STYLE" in this.i;
	this.j = "*" == this.G && b ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : this.G;
	if (DF_M3h) {
		b = a;
		a = this.h.createElement("span");
		if (DF_M3h) {
			this.j && "*" == this.G && (a.id = this.j);
			this.L && (b = DF_MWh("<div>" + b + "</div>"), DF_MYh(b), b = b.innerHTML);
			b = DF_MNc(b);
			var c = document.createElement("template");
			if (DF_M4h && "content" in c) DF_Mch(c, b), c = c.content;
			else {
				var d =
					document.implementation.createHTMLDocument("x");
				c = d.body;
				DF_Mch(d.body, b)
			}
			b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
			for (c = DF_M_h ? new WeakMap : new DF_M1h; d = b.nextNode();) {
				c: {
					var e = d;
					switch (DF_MLh(e)) {
						case 3:
							e = DF_Msi(this, e);
							break c;
						case 1:
							if ("TEMPLATE" == DF_MKh(e).toUpperCase()) e = null;
							else {
								var f = DF_MKh(e).toUpperCase();
								if (f in this.F || "http://www.w3.org/1999/xhtml" != DF_MPh(e)) var g = null;
								else this.i[f] ? g = this.h.createElement(f) : (g = this.h.createElement("span"),
									this.ea && DF_MHh(g, "data-sanitizer-original-tag", f.toLowerCase()));
								if (g) {
									var h = g,
										k = DF_MGh(e);
									if (null != k)
										for (var l = 0; f = k[l]; l++)
											if (f.specified) {
												var m = e;
												var n = f;
												var p = n.name;
												if (0 == p.lastIndexOf("data-sanitizer-", 0)) n = null;
												else {
													var q = DF_MKh(m);
													n = n.value;
													var r = {
															tagName: DF_Mhc(q).toLowerCase(),
															attributeName: DF_Mhc(p).toLowerCase()
														},
														t = {
															Fb: void 0
														};
													"style" == r.attributeName && (t.Fb = DF_MIh(m));
													m = DF_Mei(q, p);
													m in this.g ? (p = this.g[m], n = p(n, r, t)) : (p = DF_Mei(null, p), p in this.g ? (p = this.g[p], n = p(n, r, t)) : n = null)
												}
												null !==
													n && DF_MHh(h, f.name, n)
											} e = g
								} else e = null
							}
							break c;
						default:
							e = null
					}
				}
				if (e) {
					if (1 == DF_MLh(e) && c.set(d, e), d = DF_MMh(d), f = !1, d) g = DF_MLh(d), h = DF_MKh(d).toLowerCase(), k = DF_MMh(d), 11 != g || k ? "body" == h && k && (g = DF_MMh(k)) && !DF_MMh(g) && (f = !0) : f = !0, g = null, f || !d ? g = a : 1 == DF_MLh(d) && (g = c.get(d)), g.content && (g = g.content), g.appendChild(e)
				} else
					for (e = d; d = e.firstChild;) e.removeChild(d)
			}
			c.clear && c.clear()
		}
		0 < DF_MGh(a).length && (b = this.h.createElement("span"), b.appendChild(a), a = b);
		a = (new XMLSerializer).serializeToString(a);
		a = a.slice(a.indexOf(">") +
			1, a.lastIndexOf("</"))
	} else a = "";
	return DF_MNc(a)
};

function DF_Msi(a, b) {
	var c = b.data;
	(b = DF_MMh(b)) && "style" == DF_MKh(b).toLowerCase() && !("STYLE" in a.F) && "STYLE" in a.i && (c = DF_Mwc(DF_MVh(c, a.j, DF_MEa(function(d, e) {
		return this.O(d, {
			cd: e
		})
	}, a))));
	return document.createTextNode(c)
};
var DF_Mii = "a b br div h1 h2 h3 i img li ol p span table td thead tbody th tr u ul".split(" ");

function DF_Mti(a, b) {
	if (!b) return DF_Mgc;
	if ("*" === b) return DF_MSc(a);
	b = DF_Md(b.split(","));
	for (var c = b.next(); !c.done; c = b.next())
		if (c = c.value.trim(), 0 !== c.length && a.startsWith(c)) return DF_MSc(a);
	return DF_Mgc
}

function DF_Mui(a) {
	return new DF_M9h(DF_Mji(DF_Mki(DF_Mfi(), function(b, c) {
		return "class" === (null == c ? void 0 : c.attributeName) ? b : null
	}), function(b) {
		return DF_Mti(b, a)
	}))
};
/*

 Copyright (c) 2011-2018, Christopher Jeffrey (https://github.com/chjj/)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
function DF_Mvi(a, b, c) {
	if (0 === a.length) return "";
	for (var d = 0; d < a.length;) {
		var e = a.charAt(a.length - d - 1);
		if (e !== b || c)
			if (e !== b && c) d++;
			else break;
		else d++
	}
	return a.substr(0, a.length - d)
}

function DF_Mwi(a, b) {
	a = a.replace(/\|/g, function(d, e, f) {
		for (d = !1; 0 <= --e && "\\" === f[e];) d = !d;
		return d ? "|" : " |"
	}).split(/ \|/);
	var c = 0;
	if (a.length > b) a.splice(b);
	else
		for (; a.length < b;) a.push("");
	for (; c < a.length; c++) a[c] = a[c].trim().replace(/\\\|/g, "|");
	return a
}

function DF_Mxi(a, b) {
	for (var c = 1, d, e; c < arguments.length; c++)
		for (e in d = arguments[c], d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
	return a
}

function DF_Myi() {}

function DF_Mzi(a, b, c) {
	if (a) {
		try {
			var d = decodeURIComponent(DF_MAi(c)).replace(/[^\w:]/g, "").toLowerCase()
		} catch (e) {
			return null
		}
		if (0 === d.indexOf("javascript:") || 0 === d.indexOf("vbscript:") || 0 === d.indexOf("data:")) return null
	}
	b && !DF_MBi.test(c) && (a = b, DF_MCi[" " + a] || (DF_MCi[" " + a] = /^[^:]+:\/*[^/]*$/.test(a) ? a + "/" : DF_Mvi(a, "/", !0)), a = DF_MCi[" " + a], c = "//" === c.slice(0, 2) ? a.replace(/:[\s\S]*/, ":") + c : "/" === c.charAt(0) ? a.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + c : a + c);
	try {
		c = encodeURI(c).replace(/%25/g, "%")
	} catch (e) {
		return null
	}
	return c
}

function DF_MY(a, b) {
	a = a.source || a;
	b = b || "";
	return {
		replace: function(c, d) {
			d = d.source || d;
			d = d.replace(/(^|[^\[])\^/g, "$1");
			a = a.replace(c, d);
			return this
		},
		N: function() {
			return new RegExp(a, b)
		}
	}
}

function DF_MAi(a) {
	return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(b, c) {
		c = c.toLowerCase();
		return "colon" === c ? ":" : "#" === c.charAt(0) ? "x" === c.charAt(1) ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""
	})
}

function DF_MZ(a, b) {
	if (b) {
		if (DF_MDi.test(a)) return a.replace(DF_MEi, function(c) {
			return DF_MFi[c]
		})
	} else if (DF_MGi.test(a)) return a.replace(DF_MHi, function(c) {
		return DF_MFi[c]
	});
	return a
}

function DF_MIi() {
	this.Va = {}
}

function DF_MJi(a) {
	this.g = [];
	this.token = null;
	this.options = a || DF_M_.pa;
	this.options.H = this.options.H || new DF_MKi;
	this.H = this.options.H;
	this.H.options = this.options;
	this.i = new DF_MIi
}

function DF_MLi() {}

function DF_MKi() {
	this.options = DF_M_.pa
}

function DF_MMi(a, b) {
	this.options = b || DF_M_.pa;
	this.links = a;
	this.g = DF_M0.ya;
	this.H = this.options.H || new DF_MKi;
	this.H.options = this.options;
	this.h = !1;
	if (!this.links) throw Error("Tokens array requires a `links` property.");
	this.options.ja ? this.g = DF_M0.ja : this.options.X && (this.g = this.options.Db ? DF_M0.Db : DF_M0.X)
}

function DF_MNi(a) {
	this.g = [];
	this.g.links = Object.create(null);
	this.options = a || DF_M_.pa;
	this.h = DF_M1.ya;
	this.options.ja ? this.h = DF_M1.ja : this.options.X && (this.h = this.options.Wb ? DF_M1.Wb : DF_M1.X)
}
var DF_M1 = {
	wd: /^\n+/,
	code: /^( {4}[^\n]+\n*)+/,
	Hb: DF_Myi,
	hb: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
	uc: DF_Myi,
	Oa: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
	Pa: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
	table: DF_Myi,
	rc: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	ca: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
	text: /^[^\n]+/,
	oa: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
	Bb: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
};
DF_M1.Pa = DF_MY(DF_M1.Pa).replace("label", DF_M1.oa).replace("title", DF_M1.Bb).N();
DF_M1.Eb = /(?:[*+-]|\d{1,9}\.)/;
DF_M1.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
DF_M1.item = DF_MY(DF_M1.item, "gm").replace(/bull/g, DF_M1.Eb).N();
DF_M1.list = DF_MY(DF_M1.list).replace(/bull/g, DF_M1.Eb).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + DF_M1.Pa.source + ")").N();
DF_M1.dc = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
DF_M1.xb = /\x3c!--(?!-?>)[\s\S]*?--\x3e/;
DF_M1.html = DF_MY(DF_M1.html, "i").replace("comment", DF_M1.xb).replace("tag", DF_M1.dc).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).N();
DF_M1.ca = DF_MY(DF_M1.ca).replace("hr", DF_M1.hb).replace("heading", DF_M1.heading).replace("lheading", DF_M1.rc).replace("tag", DF_M1.dc).N();
DF_M1.Oa = DF_MY(DF_M1.Oa).replace("paragraph", DF_M1.ca).N();
DF_M1.ya = DF_Mxi({}, DF_M1);
DF_M1.X = DF_Mxi({}, DF_M1.ya, {
	Hb: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
	ca: /^/,
	heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});
DF_M1.X.ca = DF_MY(DF_M1.ca).replace("(?!", "(?!" + DF_M1.X.Hb.source.replace("\\1", "\\2") + "|" + DF_M1.list.source.replace("\\1", "\\3") + "|").N();
DF_M1.Wb = DF_Mxi({}, DF_M1.X, {
	uc: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
	table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
DF_M1.ja = DF_Mxi({}, DF_M1.ya, {
	html: DF_MY("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", DF_M1.xb).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").N(),
	Pa: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
});

function DF_MOi(a, b) {
	return (new DF_MNi(b)).token(a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), !0)
}
DF_MNi.prototype.token = function(a, b) {
	a = a.replace(/^ +$/gm, "");
	for (var c, d, e, f, g, h, k, l, m, n, p; a;) {
		if (e = this.h.wd.exec(a)) a = a.substring(e[0].length), 1 < e[0].length && this.g.push({
			type: "space"
		});
		if (e = this.h.code.exec(a)) a = a.substring(e[0].length), e = e[0].replace(/^ {4}/gm, ""), this.g.push({
			type: "code",
			text: this.options.ja ? e : DF_Mvi(e, "\n")
		});
		else if (e = this.h.Hb.exec(a)) a = a.substring(e[0].length), this.g.push({
			type: "code",
			lang: e[2] ? e[2].trim() : e[2],
			text: e[3] || ""
		});
		else if (e = this.h.heading.exec(a)) a = a.substring(e[0].length),
			this.g.push({
				type: "heading",
				depth: e[1].length,
				text: e[2]
			});
		else {
			if (b && (e = this.h.uc.exec(a)) && (g = {
					type: "table",
					ba: DF_Mwi(e[1].replace(/^ *| *\| *$/g, "")),
					align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
					cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
				}, g.ba.length === g.align.length)) {
				a = a.substring(e[0].length);
				for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
				for (l = 0; l < g.cells.length; l++) g.cells[l] =
					DF_Mwi(g.cells[l], g.ba.length);
				this.g.push(g);
				continue
			}
			if (e = this.h.hb.exec(a)) a = a.substring(e[0].length), this.g.push({
				type: "hr"
			});
			else if (e = this.h.Oa.exec(a)) a = a.substring(e[0].length), this.g.push({
				type: "blockquote_start"
			}), e = e[0].replace(/^ *> ?/gm, ""), this.token(e, b), this.g.push({
				type: "blockquote_end"
			});
			else if (e = this.h.list.exec(a)) {
				a = a.substring(e[0].length);
				f = e[2];
				c = 1 < f.length;
				h = {
					type: "list_start",
					ordered: c,
					start: c ? +f : "",
					Sa: !1
				};
				this.g.push(h);
				e = e[0].match(this.h.item);
				k = [];
				c = !1;
				m = e.length;
				for (l =
					0; l < m; l++) g = e[l], d = g.length, g = g.replace(/^ *([*+-]|\d+\.) */, ""), ~g.indexOf("\n ") && (d -= g.length, g = this.options.ja ? g.replace(/^ {1,4}/gm, "") : g.replace(new RegExp("^ {1," + d + "}", "gm"), "")), l !== m - 1 && (d = DF_M1.Eb.exec(e[l + 1])[0], 1 < f.length ? 1 === d.length : 1 < d.length || this.options.Dd && d !== f) && (a = e.slice(l + 1).join("\n") + a, l = m - 1), d = c || /\n\n(?!\s*$)/.test(g), l !== m - 1 && (c = "\n" === g.charAt(g.length - 1), d || (d = c)), d && (h.Sa = !0), n = /^\[[ xX]\] /.test(g), p = void 0, n && (p = " " !== g[1], g = g.replace(/^\[[ xX]\] +/, "")), d = {
					type: "list_item_start",
					Gd: n,
					checked: p,
					Sa: d
				}, k.push(d), this.g.push(d), this.token(g, !1), this.g.push({
					type: "list_item_end"
				});
				if (h.Sa)
					for (m = k.length, l = 0; l < m; l++) k[l].Sa = !0;
				this.g.push({
					type: "list_end"
				})
			} else if (e = this.h.html.exec(a)) a = a.substring(e[0].length), this.g.push({
				type: this.options.da ? "paragraph" : "html",
				Rd: !this.options.Ua && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
				text: e[0]
			});
			else if (b && (e = this.h.Pa.exec(a))) a = a.substring(e[0].length), e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), f = e[1].toLowerCase().replace(/\s+/g,
				" "), this.g.links[f] || (this.g.links[f] = {
				href: e[2],
				title: e[3]
			});
			else {
				if (b && (e = this.h.table.exec(a)) && (g = {
						type: "table",
						ba: DF_Mwi(e[1].replace(/^ *| *\| *$/g, "")),
						align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
						cells: e[3] ? e[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
					}, g.ba.length === g.align.length)) {
					a = a.substring(e[0].length);
					for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
					for (l = 0; l < g.cells.length; l++) g.cells[l] =
						DF_Mwi(g.cells[l].replace(/^ *\| *| *\| *$/g, ""), g.ba.length);
					this.g.push(g);
					continue
				}
				if (e = this.h.rc.exec(a)) a = a.substring(e[0].length), this.g.push({
					type: "heading",
					depth: "=" === e[2] ? 1 : 2,
					text: e[1]
				});
				else if (b && (e = this.h.ca.exec(a))) a = a.substring(e[0].length), this.g.push({
					type: "paragraph",
					text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
				});
				else if (e = this.h.text.exec(a)) a = a.substring(e[0].length), this.g.push({
					type: "text",
					text: e[0]
				});
				else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
			}
		}
	}
	return this.g
};
var DF_M0 = {
	escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	Cb: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	url: DF_Myi,
	tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
	link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
	jb: /^!?\[(label)\]\[(ref)\]/,
	Pb: /^!?\[(ref)\](?:\[\])?/,
	Wa: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
	wa: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
	code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	Ga: /^( {2,}|\\)\n(?!\s*$)/,
	Qa: DF_Myi,
	text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
	Yc: "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"
};
DF_M0.wa = DF_MY(DF_M0.wa).replace(/punctuation/g, DF_M0.Yc).N();
DF_M0.Vc = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
DF_M0.Zc = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
DF_M0.Uc = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
DF_M0.Cb = DF_MY(DF_M0.Cb).replace("scheme", DF_M0.Zc).replace("email", DF_M0.Uc).N();
DF_M0.Pc = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
DF_M0.tag = DF_MY(DF_M0.tag).replace("comment", DF_M1.xb).replace("attribute", DF_M0.Pc).N();
DF_M0.oa = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
DF_M0.Xc = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
DF_M0.Bb = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
DF_M0.link = DF_MY(DF_M0.link).replace("label", DF_M0.oa).replace("href", DF_M0.Xc).replace("title", DF_M0.Bb).N();
DF_M0.jb = DF_MY(DF_M0.jb).replace("label", DF_M0.oa).replace("ref", DF_M1.oa).N();
DF_M0.Pb = DF_MY(DF_M0.Pb).replace("ref", DF_M1.oa).N();
DF_M0.ya = DF_Mxi({}, DF_M0);
DF_M0.ja = DF_Mxi({}, DF_M0.ya, {
	Wa: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	wa: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
	link: DF_MY(/^!?\[(label)\]\((.*?)\)/).replace("label", DF_M0.oa).N(),
	jb: DF_MY(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", DF_M0.oa).N()
});
DF_M0.X = DF_Mxi({}, DF_M0.ya, {
	escape: DF_MY(DF_M0.escape).replace("])", "~|])").N(),
	Wc: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
	url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
	Qc: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	Qa: /^~+(?=\S)([\s\S]*?\S)~+/,
	text: DF_MY(DF_M0.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").N()
});
DF_M0.X.url = DF_MY(DF_M0.X.url, "i").replace("email", DF_M0.X.Wc).N();
DF_M0.Db = DF_Mxi({}, DF_M0.X, {
	Ga: DF_MY(DF_M0.Ga).replace("{2,}", "*").N(),
	text: DF_MY(DF_M0.X.text).replace("{2,}", "*").N()
});
DF_MMi.prototype.output = function(a) {
	for (var b = "", c, d, e; a;)
		if (e = this.g.escape.exec(a)) a = a.substring(e[0].length), b += DF_MZ(e[1]);
		else if (e = this.g.tag.exec(a)) !this.h && /^<a /i.test(e[0]) ? this.h = !0 : this.h && /^<\/a>/i.test(e[0]) && (this.h = !1), !this.i && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.i = !0 : this.i && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.i = !1), a = a.substring(e[0].length), b += this.options.da ? this.options.Ua ? this.options.Ua(e[0]) : DF_MZ(e[0]) : e[0];
	else if (e = this.g.link.exec(a)) {
		a: {
			d =
			e[2];
			if (-1 !== d.indexOf(")"))
				for (var f = c = 0; f < d.length; f++)
					if ("\\" === d[f]) f++;
					else if ("(" === d[f]) c++;
			else if (")" === d[f] && (c--, 0 > c)) {
				d = f;
				break a
			}
			d = -1
		} - 1 < d && (c = e[2].length - d, e[2] = e[2].substring(0, d), e[0] = e[0].substring(0, e[0].length - c));a = a.substring(e[0].length);this.h = !0;d = e[2];this.options.ja ? (c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(d)) ? (d = c[1], c = c[3]) : c = "" : c = e[3] ? e[3].slice(1, -1) : "";d = d.trim().replace(/^<([\s\S]*)>$/, "$1");b += DF_MPi(this, e, {
			href: DF_MQi(d),
			title: DF_MQi(c)
		});this.h = !1
	}
	else if ((e = this.g.jb.exec(a)) ||
		(e = this.g.Pb.exec(a))) a = a.substring(e[0].length), c = (e[2] || e[1]).replace(/\s+/g, " "), (c = this.links[c.toLowerCase()]) && c.href ? (this.h = !0, b += DF_MPi(this, e, c), this.h = !1) : (b += e[0].charAt(0), a = e[0].substring(1) + a);
	else if (e = this.g.Wa.exec(a)) a = a.substring(e[0].length), b += this.H.Wa(this.output(e[4] || e[3] || e[2] || e[1]));
	else if (e = this.g.wa.exec(a)) a = a.substring(e[0].length), b += this.H.wa(this.output(e[6] || e[5] || e[4] || e[3] || e[2] || e[1]));
	else if (e = this.g.code.exec(a)) a = a.substring(e[0].length), b += this.H.jc(DF_MZ(e[2].trim(),
		!0));
	else if (e = this.g.Ga.exec(a)) a = a.substring(e[0].length), b += this.H.Ga();
	else if (e = this.g.Qa.exec(a)) a = a.substring(e[0].length), b += this.H.Qa(this.output(e[1]));
	else if (e = this.g.Cb.exec(a)) a = a.substring(e[0].length), "@" === e[2] ? (c = DF_MZ(this.Ob(e[1])), d = "mailto:" + c) : d = c = DF_MZ(e[1]), b += this.H.link(d, null, c);
	else if (!this.h && (e = this.g.url.exec(a))) {
		if ("@" === e[2]) c = DF_MZ(e[0]), d = "mailto:" + c;
		else {
			do d = e[0], e[0] = this.g.Qc.exec(e[0])[0]; while (d !== e[0]);
			c = DF_MZ(e[0]);
			d = "www." === e[1] ? "http://" + c : c
		}
		a = a.substring(e[0].length);
		b += this.H.link(d, null, c)
	} else if (e = this.g.text.exec(a)) a = a.substring(e[0].length), b = this.i ? b + this.H.text(e[0]) : b + this.H.text(DF_MZ(this.Vb(e[0])));
	else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
	return b
};

function DF_MQi(a) {
	return a ? a.replace(DF_M0.Vc, "$1") : a
}

function DF_MPi(a, b, c) {
	var d = c.href;
	c = c.title ? DF_MZ(c.title) : null;
	return "!" !== b[0].charAt(0) ? a.H.link(d, c, a.output(b[1])) : a.H.image(d, c, DF_MZ(b[1]))
}
DF_MMi.prototype.Vb = function(a) {
	return this.options.Vb ? a.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
};
DF_MMi.prototype.Ob = function(a) {
	if (!this.options.Ob) return a;
	for (var b = "", c = a.length, d = 0, e; d < c; d++) e = a.charCodeAt(d), .5 < Math.random() && (e = "x" + e.toString(16)), b += "&#" + e + ";";
	return b
};
DF_M = DF_MKi.prototype;
DF_M.code = function(a, b, c) {
	b = (b || "").match(/\S*/)[0];
	if (this.options.highlight) {
		var d = this.options.highlight(a, b);
		null != d && d !== a && (c = !0, a = d)
	}
	return b ? '<pre><code class="' + this.options.vd + DF_MZ(b, !0) + '">' + (c ? a : DF_MZ(a, !0)) + "</code></pre>\n" : "<pre><code>" + (c ? a : DF_MZ(a, !0)) + "</code></pre>"
};
DF_M.Oa = function(a) {
	return "<blockquote>\n" + a + "</blockquote>\n"
};
DF_M.html = function(a) {
	return a
};
DF_M.heading = function(a, b, c, d) {
	if (this.options.pd) {
		var e = "<h" + b + ' id="' + this.options.qd;
		c = c.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
		if (d.Va.hasOwnProperty(c)) {
			var f = c;
			do d.Va[f]++, c = f + "-" + d.Va[f]; while (d.Va.hasOwnProperty(c))
		}
		d.Va[c] = 0;
		a = e + c + '">' + a + "</h" + b + ">\n"
	} else a = "<h" + b + ">" + a + "</h" + b + ">\n";
	return a
};
DF_M.hb = function() {
	return this.options.tb ? "<hr/>\n" : "<hr>\n"
};
DF_M.list = function(a, b, c) {
	var d = b ? "ol" : "ul";
	return "<" + d + (b && 1 !== c ? ' start="' + c + '"' : "") + ">\n" + a + "</" + d + ">\n"
};
DF_M.ca = function(a) {
	return "<p>" + a + "</p>\n"
};
DF_M.table = function(a, b) {
	b && (b = "<tbody>" + b + "</tbody>");
	return "<table>\n<thead>\n" + a + "</thead>\n" + b + "</table>\n"
};

function DF_MRi(a, b) {
	var c = b.ba ? "th" : "td";
	return (b.align ? "<" + c + ' align="' + b.align + '">' : "<" + c + ">") + a + "</" + c + ">\n"
}
DF_M.Wa = function(a) {
	return "<strong>" + a + "</strong>"
};
DF_M.wa = function(a) {
	return "<em>" + a + "</em>"
};
DF_M.jc = function(a) {
	return "<code>" + a + "</code>"
};
DF_M.Ga = function() {
	return this.options.tb ? "<br/>" : "<br>"
};
DF_M.Qa = function(a) {
	return "<del>" + a + "</del>"
};
DF_M.link = function(a, b, c) {
	a = DF_Mzi(this.options.da, this.options.hc, a);
	if (null === a) return c;
	a = '<a href="' + DF_MZ(a) + '"';
	b && (a += ' title="' + b + '"');
	return a + (">" + c + "</a>")
};
DF_M.image = function(a, b, c) {
	a = DF_Mzi(this.options.da, this.options.hc, a);
	if (null === a) return c;
	a = '<img src="' + a + '" alt="' + c + '"';
	b && (a += ' title="' + b + '"');
	return a += this.options.tb ? "/>" : ">"
};
DF_M.text = function(a) {
	return a
};
DF_M = DF_MLi.prototype;
DF_M.Wa = function(a) {
	return a
};
DF_M.wa = function(a) {
	return a
};
DF_M.jc = function(a) {
	return a
};
DF_M.Qa = function(a) {
	return a
};
DF_M.text = function(a) {
	return a
};
DF_M.link = function(a, b, c) {
	return c
};
DF_M.image = function(a, b, c) {
	return c
};
DF_M.Ga = function() {
	return ""
};

function DF_MSi(a, b) {
	return (new DF_MJi(b)).parse(a)
}
DF_MJi.prototype.parse = function(a) {
	this.inline = new DF_MMi(a.links, this.options);
	this.h = new DF_MMi(a.links, DF_Mxi({}, this.options, {
		H: new DF_MLi
	}));
	this.g = a.reverse();
	for (a = ""; this.next();) a += DF_MTi(this);
	return a
};
DF_MJi.prototype.next = function() {
	return this.token = this.g.pop()
};

function DF_MUi(a) {
	for (var b = a.token.text;
		"text" === (a.g[a.g.length - 1] || 0).type;) b += "\n" + a.next().text;
	return a.inline.output(b)
}

function DF_MTi(a) {
	switch (a.token.type) {
		case "space":
			return "";
		case "hr":
			return a.H.hb();
		case "heading":
			return a.H.heading(a.inline.output(a.token.text), a.token.depth, DF_MAi(a.h.output(a.token.text)), a.i);
		case "code":
			return a.H.code(a.token.text, a.token.lang, a.token.gd);
		case "table":
			var b = "",
				c = "",
				d, e;
			var f = "";
			for (d = 0; d < a.token.ba.length; d++) f += DF_MRi(a.inline.output(a.token.ba[d]), {
				ba: !0,
				align: a.token.align[d]
			});
			b += "<tr>\n" + f + "</tr>\n";
			for (d = 0; d < a.token.cells.length; d++) {
				var g = a.token.cells[d];
				f = "";
				for (e = 0; e < g.length; e++) f += DF_MRi(a.inline.output(g[e]), {
					ba: !1,
					align: a.token.align[e]
				});
				c += "<tr>\n" + f + "</tr>\n"
			}
			return a.H.table(b, c);
		case "blockquote_start":
			for (c = "";
				"blockquote_end" !== a.next().type;) c += DF_MTi(a);
			return a.H.Oa(c);
		case "list_start":
			c = "";
			b = a.token.ordered;
			for (d = a.token.start;
				"list_end" !== a.next().type;) c += DF_MTi(a);
			return a.H.list(c, b, d);
		case "list_item_start":
			c = "";
			b = a.token.Sa;
			for (a.token.Gd && (c += "<input " + (a.token.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (a.H.options.tb ?
					" /" : "") + "> ");
				"list_item_end" !== a.next().type;) c += b || "text" !== a.token.type ? DF_MTi(a) : DF_MUi(a);
			return "<li>" + c + "</li>\n";
		case "html":
			return a.H.html(a.token.text);
		case "paragraph":
			return a.H.ca(a.inline.output(a.token.text));
		case "text":
			return a.H.ca(DF_MUi(a));
		default:
			c = 'Token with "' + a.token.type + '" type was not found.';
			if (a.options.silent) return console.log(c), "";
			throw Error(c);
	}
}
var DF_MDi = /[&<>"']/,
	DF_MEi = /[&<>"']/g,
	DF_MFi = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;"
	},
	DF_MGi = /[<>"']|&(?!#?\w+;)/,
	DF_MHi = /[<>"']|&(?!#?\w+;)/g,
	DF_MCi = {},
	DF_MBi = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
DF_Myi.exec = DF_Myi;

function DF_M_(a, b, c) {
	if ("undefined" === typeof a || null === a) throw Error("marked(): input parameter is undefined or null");
	if ("string" !== typeof a) throw Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
	if (c || "function" === typeof b) {
		c || (c = b, b = null);
		b = DF_Mxi({}, DF_M_.pa, b || {});
		var d = b.highlight,
			e = 0;
		try {
			var f = DF_MOi(a, b)
		} catch (k) {
			return c(k)
		}
		var g = f.length;
		var h = function(k) {
			if (k) return b.highlight = d, c(k);
			try {
				var l = DF_MSi(f, b)
			} catch (m) {
				k = m
			}
			b.highlight = d;
			return k ? c(k) : c(null, l)
		};
		if (!d || 3 > d.length) return h();
		delete b.highlight;
		if (!g) return h();
		for (; e < f.length; e++)(function(k) {
			return "code" !== k.type ? --g || h() : d(k.text, k.lang, function(l, m) {
				if (l) return h(l);
				if (null == m || m === k.text) return --g || h();
				k.text = m;
				k.gd = !0;
				--g || h()
			})
		})(f[e])
	} else try {
		return b && (b = DF_Mxi({}, DF_M_.pa, b)), DF_MSi(DF_MOi(a, b), b)
	} catch (k) {
		k.message += "\nPlease report this to https://github.com/markedjs/marked.";
		if ((b || DF_M_.pa).silent) return "<p>An error occurred:</p><pre>" + DF_MZ(k.message,
			!0) + "</pre>";
		throw k;
	}
}
DF_M_.options = function(a) {
	DF_Mxi(DF_M_.pa, a);
	return DF_M_
};
DF_M_.jd = function() {
	return {
		hc: null,
		Db: !1,
		X: !0,
		pd: !0,
		qd: "",
		highlight: null,
		vd: "language-",
		Ob: !0,
		ja: !1,
		H: new DF_MKi,
		da: !1,
		Ua: null,
		silent: !1,
		Dd: !1,
		Vb: !1,
		Wb: !0,
		tb: !1
	}
};
DF_M_.pa = DF_M_.jd();
DF_M_.parse = DF_M_;

function DF_MVi(a) {
	return DF_Mji(DF_Mki(new DF_M$h, function(b, c) {
		return "class" === (null == c ? void 0 : c.attributeName) ? b : null
	}), function(b) {
		return DF_Mti(b, a)
	})
}

function DF_MWi(a) {
	this.g = new DF_M9h(DF_MVi(a));
	this.h = [new DF_MSg(this.g), new DF_MVg];
	a = DF_MVi(a);
	for (var b = DF_Md(this.h), c = b.next(); !c.done; c = b.next()) a = c.value.fc(a);
	this.i = new DF_M9h(a)
}
DF_MWi.prototype.gb = function(a) {
	var b = document.createElement("template");
	DF_MNg(b, a);
	a = document.createNodeIterator(b.content, NodeFilter.SHOW_ELEMENT, function(h) {
		return h.nodeType === Node.ELEMENT_NODE ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
	});
	for (var c = a.nextNode(); c;) {
		var d = c;
		c = a.nextNode();
		for (var e = [], f = DF_Md(this.h), g = f.next(); !g.done; g = f.next()) g = g.value, g.tc(d) && (e.push(g.kc), 1 < e.length || g.gb(d));
		1 < e.length && console.debug("DF-MESSENGER", "Node '" + d.nodeName + "' targeted by multiple enrichers: " +
			e.join(", ") + " (first one executed)")
	}
	return this.i.da(b.innerHTML)
};

function DF_MXi(a, b, c, d) {
	a = a.substring(b, c);
	return d ? a : a.replace(/\n/g, "  \n")
};

function DF_MYi(a, b) {
	this.utterance = a;
	this.urlAllowlist = void 0 === b ? null : b
}
DF_MYi.prototype.render = function() {
	return Object.assign({}, {
		utteranceId: this.utterance.utteranceId,
		languageCode: this.utterance.languageCode,
		isBot: this.utterance.isBot,
		mode: this.utterance.mode,
		elements: DF_MZi(this)
	}, void 0 !== this.utterance.allowFeedback ? {
		allowFeedback: this.utterance.allowFeedback
	} : {}, this.utterance.responseId ? {
		responseId: this.utterance.responseId
	} : {})
};

function DF_MZi(a) {
	return a.utterance.messages.map(function(b) {
		switch (b.type) {
			case "text":
				b = b.text;
				if (0 !== b.length)
					if (a.utterance.isBot) {
						for (var c, d = new DF_MWi(a.urlAllowlist), e = DF_M_, f = b.trim(), g = "", h = /```/g, k, l = !1, m = 0; k = h.exec(f);) k = k.index + 3, g += DF_MXi(f, m, k, l), l = !l, m = k;
						g += DF_MXi(f, m, f.length, l);
						(c = (e = null == (c = e(g)) ? void 0 : c.trim()) ? d.gb(d.g.da(e)) : null) ? (b = new DF_Mig(a.utterance.utteranceId, "none"), b.languageCode = a.utterance.languageCode, b.markdown = c) : b = DF_M_i(a, b)
					} else b = DF_M_i(a, b);
				else b = void 0;
				return b;
			case "customCard":
				return DF_M0i(a, b.richElements);
			default:
				return DF_M1i(a, b)
		}
	}).filter(DF_M3a)
}

function DF_M_i(a, b) {
	var c = new DF_Mpg(a.utterance.utteranceId, "none");
	c.isBot = a.utterance.isBot;
	c.languageCode = a.utterance.languageCode;
	c.text = b;
	return c
}

function DF_M0i(a, b) {
	b = b.map(function(d) {
		return DF_M1i(a, d)
	}).filter(DF_M3a);
	if (0 === b.length) return null;
	var c = new DF_Muf(a.utterance.utteranceId, "none");
	c.languageCode = a.utterance.languageCode;
	c.elements = b;
	return c
}

function DF_M1i(a, b) {
	var c = void 0;
	switch (b.type) {
		case "info":
			var d = new DF_MT(a.utterance.utteranceId, b.id);
			d.title = b.title ? b.title : "";
			d.subtitle = b.subtitle ? b.subtitle : "";
			d.image = DF_MCg(b.image);
			d.anchor = DF_Mrg(b);
			c = d;
			break;
		case "description":
			d = new DF_MJf(a.utterance.utteranceId, b.id);
			d.title = b.title ? b.title : "";
			var e;
			d.text = null != (e = b.text) ? e : null;
			c = d;
			break;
		case "button":
			d = new DF_Mrf(a.utterance.utteranceId, b.id);
			d.text = b.text;
			var f;
			e = null != (f = b.anchor) ? f : b.link ? {
				href: b.link
			} : null;
			d.anchor = e ? new DF_Msg(e) :
				null;
			var g;
			d.icon = null != (g = b.icon) ? g : null;
			d.image = DF_MCg(b.image);
			d.event = b.event;
			d.mode = b.mode || "normal";
			c = d;
			break;
		case "image":
			d = new DF_M6f(a.utterance.utteranceId, b.id);
			d.source = b.rawUrl ? b.rawUrl : "";
			d.accessibilityText = b.accessibilityText ? b.accessibilityText : "image";
			var h;
			d.reference = b.reference ? {
				text: b.reference.text,
				anchor: new DF_Msg(b.reference.anchor),
				image: null != (h = DF_MCg(b.reference.image)) ? h : void 0
			} : null;
			c = d;
			break;
		case "list":
			d = new DF_Mfg(a.utterance.utteranceId, b.id);
			d.title = b.title ? b.title :
				"";
			d.subtitle = b.subtitle ? b.subtitle : "";
			d.image = DF_MCg(b.image);
			var k;
			d.event = null != (k = b.event) ? k : null;
			d.anchor = b.anchor ? new DF_Msg(b.anchor) : null;
			c = d;
			break;
		case "divider":
			c = new DF_MLf(a.utterance.utteranceId, b.id);
			break;
		case "accordion":
			d = new DF_Mif(a.utterance.utteranceId, b.id);
			d.title = b.title;
			d.subtitle = b.subtitle;
			d.image = DF_MCg(b.image);
			d.text = DF_Mui(a.urlAllowlist).da(b.text);
			c = d;
			break;
		case "chips":
			c = DF_M2i(a, b);
			break;
		case "html":
			d = new DF_MYf(a.utterance.utteranceId, b.id);
			d.html = DF_Mui(a.urlAllowlist).da(b.html);
			c = d;
			break;
		case "match_citations":
			c = DF_M3i(a, b);
			break;
		case "custom_template":
			d = new DF_MEf(a.utterance.utteranceId, b.id);
			d.elementName = b.name;
			d.payload = b.payload;
			var l;
			d.responseId = null != (l = a.utterance.responseId) ? l : null;
			c = d;
			break;
		case "video":
			a: {
				f = new DF_MBg(a.utterance.utteranceId, b.id);
				switch (b.source.type) {
					case "link":
						f.anchor = new DF_Msg(b.source.anchor);
						var m;
						f.embeddedPlayer = null != (m = b.source.embeddedPlayer) ? m : null;
						b.source.thumbnail ? f.thumbnail = DF_MCg(b.source.thumbnail) : !b.source.embeddedPlayer &&
							DF_M8a.test(b.source.anchor.href) && (g = (g = DF_M9a(b.source.anchor.href)) ? "https://ytimg.googleusercontent.com/vi/" + g + "/hqdefault.jpg" : void 0, g && (f.thumbnail = {
								rawUrl: g
							}));
						if (!f.thumbnail && !f.embeddedPlayer) {
							c = void 0;
							break a
						}
						break;
					case "raw":
						f.source = b.source.rawUrl;
						break;
					default:
						console.debug("DF-MESSENGER", "Unknown video source", b.source);
						c = void 0;
						break a
				}
				f.videoTitle = null != (d = b.title) ? d : null;f.videoType = b.source.type;c = f
			}
			break;
		case "files":
			c = DF_M4i(a, b);
			break;
		default:
			console.error("DF-MESSENGER", "Parser",
				"Could not render " + b.type)
	}
	c && (c.languageCode = a.utterance.languageCode);
	return c
}

function DF_M2i(a, b) {
	if (0 !== b.options.length) return a = new DF_Mxf(a.utterance.utteranceId, b.id), a.chips = b.options.map(function(c) {
		var d, e = null != (d = c.anchor) ? d : c.link ? {
			href: c.link
		} : null;
		d = e ? new DF_Msg(e) : null;
		var f;
		e = null != (f = DF_MCg(c.image)) ? f : void 0;
		return d ? new DF_MIg(c.text, d, e, c.accessibilityText, c.mode) : new DF_MHg(c.text, e, c.accessibilityText, c.mode)
	}), a
}

function DF_M3i(a, b) {
	var c = b.citations.map(function(d) {
		var e = DF_Mtg(d);
		return e ? {
			title: d.title,
			anchor: e
		} : null
	}).filter(DF_M3a);
	if (0 !== c.length) return a = new DF_MCf(a.utterance.utteranceId, b.id), a.citations = c, a
}

function DF_M4i(a, b) {
	a = new DF_MTf(a.utterance.utteranceId, b.id);
	a.files = b.files.map(function(c) {
		var d = c.anchor ? new DF_Msg(c.anchor) : void 0,
			e, f = null != (e = DF_MCg(c.image)) ? e : void 0;
		return {
			name: c.name,
			image: f,
			anchor: d
		}
	});
	return a
}

function DF_M5i(a) {
	return a.reduce(function(b, c) {
		var d = Object.assign({}, c);
		d.elements = c.elements.filter(function(e) {
			return e.isVisible()
		});
		0 < d.elements.length && b.push(d);
		return b
	}, [])
};
var DF_M6i = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/highlight.pack.js"]),
	DF_MQg = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css"]),
	DF_M7i = function() {
		var a = null;
		return function() {
			if (null == a) {
				var b = document.createElement("script");
				DF_MRg(b, DF_MUc(DF_M6i));
				var c = new Promise(function(f) {
					b.addEventListener("load", function() {
						return void f()
					})
				});
				document.head.appendChild(b);
				var d = document.createElement("link");
				DF_MPg(d);
				var e = new Promise(function(f) {
					d.addEventListener("load",
						function() {
							return void f()
						})
				});
				document.head.appendChild(d);
				a = Promise.all([c, e]).then(function() {})
			}
			return a
		}
	}();

function DF_M8i() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
		var b = 16 * Math.random() | 0;
		return "x" === a ? b.toString(16) : (b & 3 | 8).toString(16)
	})
};
var DF_M9i = DF_Mc([' <div class="entry ', '">\n      ', " ", "\n    </div>"]),
	DF_M$i = DF_Mc([' <div class="actor-container">\n      <div class="actor">\n        <img src=', " />\n      </div>\n    </div>"]),
	DF_Maj = DF_Mc([' <df-messenger-utterance\n        class="', '"\n        .utterance=', "\n        .languageCode=", "></df-messenger-utterance>"]),
	DF_Mbj = DF_Mc([' <div class="typing-message">\n        <div class="message">', "</div>\n      </div>"]),
	DF_Mcj = DF_Mc(['<img src="', '" />']),
	DF_Mdj = DF_Mc(["", ""]),
	DF_Mej = DF_Mc([' <div id="message-list" aria-live="polite">\n      <div class="content">\n        ', " ", "\n      </div>\n    </div>"]),
	DF_Mfj = DF_Mc([' <div\n        class="scroll-to-bottom-legacy\n          ', '">\n        ', '\n      </div>\n      <div class="scroll-to-bottom ', '">\n        ', "\n      </div>"]),
	DF_Mgj = DF_Mc([' <button\n      class="scroll-to-bottom-button focus-outline"\n      aria-label="', '"\n      @click=', '>\n      <span class="material-icons icon">arrow_downward</span>\n      <span class="text">',
		"</span>\n    </button>"
	]),
	DF_Mhj = DF_Mc([' <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div\n        class="message-list-wrapper\n          ', '">\n        ', " ", "\n      </div>"]);

function DF_M2() {
	var a = DF_MB.apply(this, arguments) || this;
	a.consumerId = DF_M8i();
	a.enableCodeHighlight = !1;
	a.botWritingText = null;
	a.botWritingImage = null;
	a.urlAllowlist = null;
	a.botActorImage = null;
	a.userActorImage = null;
	a.minimized = !1;
	a.showBotWriting = !1;
	a.initialMessages = [];
	a.messages = [];
	a.F = 0;
	a.Z = !1;
	a.Aa = !1;
	a.la = 0;
	a.M = !1;
	a.sa = new Promise(function(b) {
		a.La = b
	});
	a.debug = new DF_M7e;
	return a
}
DF_Mf(DF_M2, DF_MB);
DF_M2.D = DF_MB.D;
DF_M2.o = DF_MB.o;
DF_M2.s = DF_MB.s;
DF_M2.h = DF_MB.h;
DF_M2.g = DF_MB.g;
DF_M2.C = DF_MB.C;
DF_M2.i = DF_MB.i;
DF_M2.u = DF_MB.u;
DF_M2.l = DF_MB.l;
DF_M2.v = DF_MB.v;
DF_M = DF_M2.prototype;
DF_M.connectedCallback = function() {
	var a = this;
	DF_MB.prototype.connectedCallback.call(this);
	Promise.all([].concat(DF_Me(this.enableCodeHighlight ? [DF_M7i()] : []))).then(function() {
		return void DF_Mij(a)
	})
};
DF_M.ra = function(a) {
	var b = this;
	DF_MB.prototype.ra.call(this, a);
	this.Z && (a.has("messages") || this.showBotWriting) && setTimeout(function() {
		var c = b.T.querySelector(".entry:last-child");
		c && DF_Mjj(b, c, 10)
	}, 50)
};
DF_M.clearMessages = function() {
	this.messages = []
};
DF_M.addMessages = function(a) {
	var b = this;
	return DF_Mh(function(c) {
		if (1 == c.g) return DF_Mg(c, b.sa, 2);
		b.messages = [].concat(DF_Me(b.messages), DF_Me(a.map(function(d) {
			return (new DF_MYi(d, b.urlAllowlist)).render()
		})));
		c.g = 0
	})
};
DF_M.getRenderedMessages = function() {
	return [].concat(DF_Me(this.messages))
};

function DF_Mij(a) {
	a.messages = a.initialMessages.map(function(b) {
		return (new DF_MYi(b, a.urlAllowlist)).render()
	});
	a.La();
	DF_Mkj(a);
	setTimeout(function() {
		DF_Mlj(a);
		DF_Mmj(a);
		DF_Mnj(a)
	})
}

function DF_Mkj(a) {
	a.addEventListener("df-chip-clicked", function() {
		a.messages = DF_M5i(a.messages)
	})
}

function DF_Mlj(a) {
	var b = a.g;
	b.addEventListener("scroll", function() {
		b.scrollTop <= a.F || (DF_Mn(a, "df-messenger-message-list-highest-scrolltop", {
			scrollTop: b.scrollTop
		}), a.F = b.scrollTop)
	});
	DF_Moj(a, a.F);
	a.Z = !0
}

function DF_Mmj(a) {
	a.g.addEventListener("df-messenger-scroll-into-view", function(b) {
		b = b.detail;
		DF_Mjj(a, b.element, b.padding)
	})
}

function DF_Moj(a, b) {
	var c = a.g;
	c.scrollTop = b;
	a.Aa = c.scrollHeight > c.clientHeight && c.scrollHeight - Math.ceil(c.scrollTop) > c.clientHeight
}

function DF_Mjj(a, b, c) {
	var d = a.g,
		e = d.scrollTop,
		f = b.offsetTop - (null != c ? c : 0);
	if (b.offsetTop + b.offsetHeight + (null != c ? c : 0) > d.scrollTop + d.clientHeight || f < e) b.offsetHeight > d.clientHeight && (a.M = !0), a.g.scrollTo({
		top: d.scrollTop - (e - f),
		behavior: "smooth"
	})
}
DF_M.Ad = function() {
	var a = this.g;
	a.scrollTo({
		top: a.scrollHeight - a.clientHeight,
		behavior: "smooth"
	})
};

function DF_Mnj(a) {
	var b = a.g;
	a.g.addEventListener("scroll", function() {
		var c = Math.ceil(b.scrollTop),
			d = c < Math.min(a.la, b.scrollHeight - b.clientHeight);
		a.Aa = b.scrollHeight > b.clientHeight && b.scrollHeight - Math.ceil(b.scrollTop) > b.clientHeight && (d || a.M || a.Aa);
		a.la = c;
		a.M = !1
	})
}

function DF_Mpj(a, b) {
	return (a = b ? a.botActorImage : a.userActorImage) ? DF_Mw(DF_M$i, a) : null
}

function DF_Mqj(a) {
	return a.messages.map(function(b) {
		var c = b.isBot;
		return DF_Mw(DF_M9i, c ? "bot" : "user", DF_Mpj(a, c), DF_Mw(DF_Maj, a.minimized ? "minimized" : "", b, a.languageCode))
	})
}

function DF_Mrj(a) {
	var b = DF_Mp(a.languageCode, "jumpToBottom");
	return DF_Mw(DF_Mgj, b, a.Ad, b)
}
DF_M.render = function() {
	var a = this.Aa ? "show-shadow" : "",
		b = DF_Mqj(this);
	if (this.showBotWriting) {
		if (this.botWritingImage) var c = DF_Mw(DF_Mcj, this.botWritingImage);
		else {
			var d;
			c = DF_Mw(DF_Mdj, null != (d = this.botWritingText) ? d : "...")
		}
		c = DF_Mw(DF_M9i, "bot", DF_Mpj(this, !0), DF_Mw(DF_Mbj, c))
	} else c = null;
	return DF_Mw(DF_Mhj, a, DF_Mw(DF_Mej, b, c), DF_Mw(DF_Mfj, this.Aa ? "show" : "", DF_Mrj(this), this.Aa ? "show" : "", DF_Mrj(this)))
};
DF_Ma.Object.defineProperties(DF_M2.prototype, {
	listScrollTop: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			this.F = a;
			this.Z && DF_Moj(this, a)
		}
	},
	g: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.T.querySelector("#message-list")
		}
	}
});
var DF_M3 = DF_M2;
DF_M3.j = [DF_M4d, DF_MA];
DF_Mk([DF_Mt({
	m: "enable-code-highlight",
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M3.prototype, "enableCodeHighlight", void 0);
DF_Mk([DF_Mt({
	m: "bot-writing-text",
	type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botWritingText", void 0);
DF_Mk([DF_Mt({
	m: "bot-writing-image",
	type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botWritingImage", void 0);
DF_Mk([DF_Mt({
	m: "url-allowlist",
	type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "urlAllowlist", void 0);
DF_Mk([DF_Mt({
	m: "bot-actor-image",
	type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botActorImage", void 0);
DF_Mk([DF_Mt({
	m: "user-actor-image",
	type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "userActorImage", void 0);
DF_Mk([DF_Mt({
	m: "minimized",
	type: Boolean,
	K: !0
}), DF_Ml("design:type", Object)], DF_M3.prototype, "minimized", void 0);
DF_Mk([DF_Mt({
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M3.prototype, "showBotWriting", void 0);
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_M3.prototype, "initialMessages", void 0);
DF_Mk([DF_Mt({
	type: Array
}), DF_Ml("design:type", Array)], DF_M3.prototype, "messages", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M3.prototype, "Aa", void 0);
DF_M3 = DF_Mk([DF_Mq("df-messenger-message-list")], DF_M3);
var DF_Msj = DF_Mr(["#titlebar-title h2,#titlebar-title h3{margin:0;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.titlebar-wrapper{display:flex;align-items:center;min-height:50px;background:var(--df-messenger-titlebar-background,var(--df-messenger-titlebar-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));color:var(--df-messenger-titlebar-font-color,#fff);padding:var(--df-messenger-titlebar-padding,0 15px);border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border:var(--df-messenger-titlebar-border,none);border-bottom:var(--df-messenger-titlebar-border-bottom,none)}#titlebar-title{flex-grow:1;overflow:hidden;display:flex;align-items:center;justify-content:var(--df-messenger-titlebar-title-align,flex-start);flex-direction:var(--df-messenger-titlebar-title-order,row);padding:6px;margin:-6px}#titlebar-title:focus-visible::before{inset:6px}#titlebar-title img{width:var(--df-messenger-titlebar-icon-width,var(--df-messenger-titlebar-title-font-size,18px));height:var(--df-messenger-titlebar-icon-height,var(--df-messenger-titlebar-title-font-size,18px));margin:var(--df-messenger-titlebar-icon-padding,0 12px 0 0)}#titlebar-title .title-text{flex-grow:1;overflow:hidden;display:flex;flex-direction:column;align-items:var(--df-messenger-titlebar-title-align,start)}#titlebar-title h2{font-size:var(--df-messenger-titlebar-title-font-size, 18px);font-family:var(--df-messenger-titlebar-title-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-weight:var(--df-messenger-titlebar-title-font-weight,400);letter-spacing:var(--df-messenger-titlebar-title-letter-spacing,\n      var(--df-messenger-titlebar-letter-spacing, normal)\n    );line-height:var(--df-messenger-titlebar-title-line-height, normal)}#titlebar-title h3{font-size:var(--df-messenger-titlebar-subtitle-font-size, 14px);font-family:var(--df-messenger-titlebar-subtitle-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-weight:var(--df-messenger-titlebar-subtitle-font-weight,400);color:var(--df-messenger-titlebar-subtitle-font-color,var(--df-messenger-titlebar-font-color,#fff));letter-spacing:var(--df-messenger-titlebar-subtitle-letter-spacing,\n      var(--df-messenger-titlebar-letter-spacing, normal)\n    );line-height:var(--df-messenger-titlebar-subtitle-line-height, normal)}.actions{display:flex;align-items:center}.actions .offset{margin-right:-12px}"]);
var DF_Mtj = DF_Mc(['<img src="', '" />']),
	DF_Muj = DF_Mc(['<h2 tabindex="-1">', "</h2>"]),
	DF_Mvj = DF_Mc(['<h3 tabindex="-1">', "</h3>"]),
	DF_Mwj = DF_Mc([' <div class="title-text"> ', " ", " </div>"]),
	DF_Mxj = DF_Mc(['\n      <div class="titlebar-wrapper">\n        <div\n          id="titlebar-title"\n          class="focus-outline-contrast focus-outset focus-box"\n          tabindex="0">\n          ', " ", '\n        </div>\n        <div class="actions">\n          <slot name="action"></slot>\n          <div class="offset"></div>\n        </div>\n      </div>\n    ']);

function DF_Myj() {
	var a = DF_MB.apply(this, arguments) || this;
	a.chatTitle = null;
	a.chatSubtitle = null;
	a.chatTitleIcon = null;
	return a
}
DF_Mf(DF_Myj, DF_MB);
DF_Myj.D = DF_MB.D;
DF_Myj.o = DF_MB.o;
DF_Myj.s = DF_MB.s;
DF_Myj.h = DF_MB.h;
DF_Myj.g = DF_MB.g;
DF_Myj.C = DF_MB.C;
DF_Myj.i = DF_MB.i;
DF_Myj.u = DF_MB.u;
DF_Myj.l = DF_MB.l;
DF_Myj.v = DF_MB.v;
DF_Myj.prototype.render = function() {
	var a = this.chatTitleIcon ? DF_Mw(DF_Mtj, this.chatTitleIcon) : null;
	var b = (b = DF_M4a(this.chatTitle, this.languageCode, "chatTitle")) ? DF_Mw(DF_Muj, b) : null;
	var c = this.chatSubtitle ? DF_Mw(DF_Mvj, this.chatSubtitle) : null;
	return DF_Mw(DF_Mxj, a, b || c ? DF_Mw(DF_Mwj, b, c) : null)
};
var DF_Mzj = DF_Myj;
DF_Mzj.j = [DF_Msj, DF_MA];
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_Mzj.prototype, "chatTitle", void 0);
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_Mzj.prototype, "chatSubtitle", void 0);
DF_Mk([DF_Mt({
	type: String
}), DF_Ml("design:type", Object)], DF_Mzj.prototype, "chatTitleIcon", void 0);
DF_Mzj = DF_Mk([DF_Mq("df-messenger-titlebar")], DF_Mzj);
var DF_MAj = DF_Mr(["#send-icon-button:not(.action-button),textarea.input-box{background-color:transparent}.input-box-wrapper.show-focus,.input-container,.textarea-wrapper{position:relative}#send-icon,.microphone,.upload-icon-button-wrapper svg{fill:var(--df-messenger-send-icon-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)))}:host{--df-messenger-internal-input-font-size:var(--df-messenger-input-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );--df-messenger-internal-input-font-color:var(--df-messenger-input-font-color,\n      var(--df-messenger-font-color,\n        var(--df-messenger-default-font-color)\n      )\n    )}.input-container{background:var(--df-messenger-input-background,var(--df-messenger-input-background-color,#fff));border-bottom-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-bottom-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border:var(--df-messenger-input-border,none)}.input-container.border-top{border-top:var(--df-messenger-input-border-top,var(--df-messenger-default-border))}.input-box-wrapper{max-width:var(--df-messenger-chat-max-width,none);margin-left:auto;margin-right:auto;display:flex;align-items:flex-end;display:flex;padding:var(--df-messenger-input-padding,8px);overflow-y:auto;scrollbar-gutter:var(--df-messenger-input-gutter,stable)}.input-wrapper{flex-grow:1;border-bottom:var(--df-messenger-input-border-bottom,none);padding:var(--df-messenger-input-inner-padding,0 48px 0 0)}.textarea-wrapper{background:var(--df-messenger-input-box-background,var(--df-messenger-input-box-background-color,transparent));padding:var(--df-messenger-input-box-padding,12px 0);border:var(--df-messenger-input-box-border,none);border-radius:var(--df-messenger-input-box-border-radius,0);overflow:hidden;cursor:text;display:flex;align-items:center}#send-icon-button,#send-icon-button:focus,#send-icon-button:hover,textarea.input-box{border:none;padding:0}.textarea-wrapper:focus-within{border:var(--df-messenger-input-box-focus-border,var(--df-messenger-input-box-border,none));padding:var(--df-messenger-input-box-focus-padding,var(--df-messenger-input-box-padding,12px 0))}::placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color));opacity:.7}::-ms-input-placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color));opacity:.7}textarea.input-box{flex-grow:1;margin:0;outline:0;resize:none;width:100%;color:var(--df-messenger-internal-input-font-color);font-family:var(--df-messenger-input-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-internal-input-font-size);font-weight:var(--df-messenger-input-font-weight,normal);max-height:calc(var(--df-messenger-internal-input-font-size) * 4);text-overflow:ellipsis}textarea.input-box:focus{outline-width:0}textarea.input-box::placeholder{white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.microphone{width:48px;height:48px;padding:12px;margin:var(--df-messenger-input-microphone-offset,-12px 0 -12px 0)}.send-icon-button-wrapper,.upload-icon-button-wrapper{width:48px;height:48px;margin-bottom:var(--df-messenger-send-icon-offset-y,-4px);display:flex}.upload-icon-button-wrapper{margin-right:-48px;margin-right:calc(-48px + var(--df-messenger-send-icon-offset-x,0px));justify-content:center;align-items:center;position:relative}.upload-icon-button-wrapper button{padding:0}.upload-icon-button-wrapper input{position:absolute;inset:0;z-index:-1;opacity:0}.send-icon-button-wrapper{margin-left:calc(-48px + var(--df-messenger-send-icon-offset-x,0px));justify-content:center;align-items:center}#send-icon-button:focus{outline:0}#send-icon-button:focus-visible{position:relative}#send-icon,.upload-icon-button-wrapper svg{height:24px;margin:12px;width:24px}#send-icon-button.active:hover #send-icon{fill:var(--df-messenger-send-icon-color-hover,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))))}#send-icon-button.active #send-icon,.microphone.active{fill:var(--df-messenger-send-icon-color-active,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))))}#send-icon-button:disabled #send-icon{fill:var(--df-messenger-send-icon-color-disabled,rgba(31,31,31,0.38))}.popout-wrapper{position:absolute;left:0;right:0;top:1px;transform:translateY(-100%);overflow:hidden;pointer-events:none}.popout-wrapper.show{pointer-events:auto}.popout-wrapper .popout{font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-input-info-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-input-info-font-weight,normal);padding:var(--df-messenger-input-info-padding,14px 16px);line-height:var(--df-messenger-input-info-line-height, 20px);transform:translateY(100%);transition:transform .2s;display:flex;gap:16px}.popout-wrapper.show .popout{transform:translateY(0);transition:transform .2s}.error{background:var(--df-messenger-input-error-background,var(--df-messenger-input-error-background-color,#f9dedc));color:var(--df-messenger-input-error-color,#410e0b)}.error .material-icons{color:var(--df-messenger-input-error-icon-color,#b3261e)}.warning{display:var(--df-messenger-input-long-text-warning-display,none);background:var(--df-messenger-input-warning-background,#fef7e0);color:var(--df-messenger-input-warning-color,#410e0b)}.warning .material-icons{color:var(--df-messenger-input-warning-icon-color,#e37400)}.audio-state{position:absolute;z-index:1;background:var(--df-messenger-input-audio-recording-background,#f0f4f9);border-radius:var(--df-messenger-input-audio-recording-border-radius,999px);border:var(--df-messenger-input-audio-recording-border,var(--df-messenger-default-border));margin:var(--df-messenger-input-audio-recording-offset,-12px 0);padding:11px;height:24px;display:flex;align-items:center}.audio-state img{max-height:24px;margin-left:8px}.audio-state button{margin-left:16px;padding:0;background:0 0;border-radius:var(--df-messenger-input-audio-recording-cancel-border-radius,999px);border:var(--df-messenger-input-audio-recording-cancel-border,none)}.audio-state svg{height:24px;width:24px;fill:var(--df-messenger-input-audio-recording-cancel-color,var(--df-messenger-default-icon-font-color));cursor:pointer}"]);
var DF_MBj = DF_Mc(["var(--df-messenger-default-border-radius)"]),
	DF_MCj = DF_Mc(["\n  .show-focus::after {\n    ", "\n  }\n"]),
	DF_MDj = DF_Mc(['<div class="upload-icon-button-wrapper">\n      <button\n        id="upload-button"\n        class="focus-outline action-button"\n        aria-label="', '"\n        @click=', ">\n        ", '\n      </button>\n      <input\n        type="file"\n        name="filedata"\n        aria-hidden="true"\n        tabindex="-1"\n        @change=', " />\n    </div>"]),
	DF_MEj =
	DF_Mc(['<textarea class="input-box" disabled rows="1"></textarea>']),
	DF_MFj = DF_Mc(' <textarea\n      class="input-box"\n      rows="1"\n      @input=;\n      @keydown=;\n      @focusin=;\n      @focusout=;\n      type="text"\n      aria-label=";"\n      placeholder=";"></textarea>'.split(";")),
	DF_MGj = DF_Mc([' <button\n      class="microphone action-button focus-outline\n          ', '"\n      aria-label="', '"\n      @click=', ">\n      ", "\n    </button>"]),
	DF_MHj = DF_Mc([' <div class="audio-state">\n      <img src="',
		'" />\n      <button\n        class="focus-outline"\n        @click=', ">\n        ", "\n      </button>\n    </div>"
	]),
	DF_MIj = DF_Mc(' <div\n      class="textarea-wrapper"\n      @mousedown=;\n      @click=;>\n      ; ;\n      ;\n    </div>'.split(";")),
	DF_MJj = DF_Mc(' <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="input-container ,">\n        <div\n          class="popout-wrapper ,"\n          aria-hidden=,>\n          <div class="popout error">\n            <span class="material-icons">warning_amber</span>\n            <div>,</div>\n          </div>\n        </div>\n        <div\n          class="popout-wrapper ,"\n          aria-hidden=,>\n          <div class="popout warning">\n            <span class="material-icons">error_outline</span>\n            <div>,</div>\n          </div>\n        </div>\n        <div class="input-box-wrapper ,">\n          ,\n          <div class="input-wrapper"> , </div>\n          <div class="send-icon-button-wrapper">\n            <button\n              class="focus-outline focus-inset\n                  ,"\n              ?disabled=,\n              id="send-icon-button"\n              @click=,\n              aria-label=",">\n              <svg xmlns="http://www.w3.org/2000/svg" id="send-icon">\n                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />\n                <path d="M0 0h24v24H0z" fill="none" />\n              </svg>\n            </button>\n          </div>\n        </div>\n      </div>'.split(",")),
	DF_MKj = DF_Mr(DF_MCj, DF_M0d(DF_Mr(DF_MBj), !1));

function DF_M4() {
	var a = DF_MB.apply(this, arguments) || this;
	a.isWaitingForElement = !1;
	a.ab = !1;
	a.botWriting = !1;
	a.za = !1;
	a.Gb = "";
	a.Ja = !1;
	a.Ta = !1;
	a.mb = !1;
	a.showBorderTop = !1;
	a.placeholderText = null;
	a.maxInputValueLength = 256;
	a.enableFileUpload = !1;
	a.enableAudioInput = !1;
	a.audioStateImageActive = null;
	a.audioStateImagePassive = null;
	a.file = null;
	a.audio = null;
	a.V = null;
	return a
}
DF_Mf(DF_M4, DF_MB);
DF_M4.D = DF_MB.D;
DF_M4.o = DF_MB.o;
DF_M4.s = DF_MB.s;
DF_M4.h = DF_MB.h;
DF_M4.g = DF_MB.g;
DF_M4.C = DF_MB.C;
DF_M4.i = DF_MB.i;
DF_M4.u = DF_MB.u;
DF_M4.l = DF_MB.l;
DF_M4.v = DF_MB.v;
DF_M = DF_M4.prototype;
DF_M.Zb = function() {
	var a = this,
		b, c, d;
	return DF_Mh(function(e) {
		if (1 == e.g) {
			if (a.isWaitingForElement || a.ab || a.botWriting || !(DF_MLj(a) || a.file || a.audio || a.V)) return e.return();
			(b = DF_MLj(a)) || !a.V ? (e.g = 2, e = void 0) : e = DF_Mg(e, DF_MMj(a.V), 2);
			return e
		}
		c = DF_Mn(a, "df-user-input-entered", Object.assign({}, b ? {
			input: a.g
		} : {}, a.file ? {
			file: a.file
		} : {}, a.audio ? {
			audio: a.audio
		} : {}));
		if (!c) return e.return();
		if (b) a.ma.renderCustomText(a.g, !1), a.sendRequest(a.g);
		else if (a.file && (null == (d = a.ma) ? 0 : d.gcsUpload)) {
			var f;
			null ==
				(f = a.ma) || f.presenter.uploadFile(a.file)
		}
		DF_MNj(a);
		e.g = 0
	})
};
DF_M.Yb = function() {
	this.na.style.height = "";
	this.na.style.height = this.na.scrollHeight.toString() + "px";
	var a = this.g.length;
	DF_Mab(a, this.maxInputValueLength) ? (this.za = !1, this.Ja = 256 < a) : (this.za = !0, this.Gb = DF_Mp(this.languageCode, "messageTooLong", {
		numOfChars: "" + (a - this.maxInputValueLength)
	}), this.Ja = !1);
	DF_MPa(this)
};
DF_M.sendRequest = function(a) {
	var b = this,
		c;
	return DF_Mh(function(d) {
		return DF_Mg(d, null == (c = b.ma) ? void 0 : c.presenter.sendQuery(a), 0)
	})
};

function DF_MNj(a) {
	a.audio = null;
	a.file = null;
	var b = a.na;
	b && (a.za = !1, a.Ja = !1, b.value = "", b.style.height = "")
}

function DF_MLj(a) {
	var b = a.g.length;
	return 0 < b && DF_Mab(b, a.maxInputValueLength)
}
DF_M.Ec = function(a) {
	this.mb = this.Ta ? !1 : !0;
	a.relatedTarget && (this.Ta = !1)
};
DF_M.Fc = function() {
	this.mb = !1
};
DF_M.od = function() {
	this.T.querySelector(".upload-icon-button-wrapper input").click()
};

function DF_MOj(a, b) {
	b.stopPropagation();
	a.ma && (a.V ? DF_MMj(a.V) : (DF_MNj(a), a.V = a.ma.presenter.createAudioRecorder(), DF_MPj(a.V).then(function(c) {
		c && (a.audio = c, DF_Mn(a, "df-audio-input-recorded", {
			data: c
		}))
	}).catch(function() {}).finally(function() {
		a.V = null
	})))
}

function DF_MQj(a) {
	if (!a.enableFileUpload) return null;
	var b = DF_Mp(a.languageCode, "uploadFileAriaLabel");
	return DF_Mw(DF_MDj, b, a.od, DF_Mwe, function(c) {
		var d, e = null == (d = c.target.files) ? void 0 : d[0];
		if (e) {
			DF_MNj(a);
			a.file = e;
			DF_Mn(a, "df-upload-file-selected", {
				file: e
			});
			c.target.value = "";
			var f;
			if (null != (f = a.ma) && f.gcsUpload) {
				var g;
				null == (g = a.ma) || g.presenter.uploadFile(e);
				a.file = null
			}
		}
	})
}

function DF_MRj(a) {
	if (a.isWaitingForElement || a.ab || a.V || a.audio || a.file) return DF_Mw(DF_MEj);
	var b = a.placeholderText || DF_Mp(a.languageCode, "askSomething"),
		c = DF_Mp(a.languageCode, "inputAriaLabel");
	return DF_Mw(DF_MFj, a.Yb, function(d) {
		"Enter" !== d.key || d.shiftKey || (d.preventDefault(), DF_MLj(a) && a.Zb())
	}, a.Ec, a.Fc, c, b)
}

function DF_MSj(a) {
	if (!a.enableAudioInput) return null;
	var b = DF_Mp(a.languageCode, "microphoneAriaLabel");
	return DF_Mw(DF_MGj, a.V ? "active" : "", b, function(c) {
		return void DF_MOj(a, c)
	}, DF_Mxe)
}

function DF_MTj(a) {
	return a.V || a.audio ? DF_Mw(DF_MHj, a.V ? a.audioStateImageActive || "https://www.gstatic.com/dialogflow-console/common/assets/dialogflow-messenger/sound-wave.gif" : a.audioStateImagePassive || "https://www.gstatic.com/dialogflow-console/common/assets/dialogflow-messenger/sound-wave-silent.gif", function(b) {
		b.stopPropagation();
		a.audio = null;
		null != (b = a.V) && (b.Nb = !0, DF_MMj(b))
	}, DF_Mme) : null
}

function DF_MUj(a) {
	return DF_Mw(DF_MIj, function() {
		return a.Ta = !0
	}, function() {
		var b;
		return void(null == (b = a.na) ? void 0 : b.focus())
	}, DF_MRj(a), DF_MSj(a), DF_MTj(a))
}
DF_M.render = function() {
	var a = DF_Mp(this.languageCode, "sendAriaLabel"),
		b = DF_Mp(this.languageCode, "messageTooLongWarning");
	return DF_Mw(DF_MJj, this.showBorderTop ? "border-top" : "", this.za ? "show" : "", !this.za, this.Gb, this.Ja ? "show" : "", !this.Ja, b, this.mb ? "show-focus" : "", DF_MQj(this), DF_MUj(this), this.active ? "active action-button" : "", !this.active, this.Zb, a)
};
DF_Ma.Object.defineProperties(DF_M4.prototype, {
	active: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return !this.za && !this.isWaitingForElement && !this.ab && !this.botWriting && (DF_MLj(this) || !!this.file || !!this.audio || !!this.V)
		}
	},
	na: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.T.querySelector("textarea")
		}
	},
	g: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a;
			return (null == (a = this.na) ? void 0 : a.value) || ""
		}
	}
});
var DF_M5 = DF_M4;
DF_M5.j = [DF_MAj, DF_MA, DF_MKj];
DF_Mk([DF_Mm({
	context: "df-instance",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_M5.prototype, "ma", void 0);
DF_Mk([DF_Mm({
	context: "df-iswaitingforelement",
	subscribe: !0
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "isWaitingForElement", void 0);
DF_Mk([DF_Mm({
	context: "df-executingclientsidefunction",
	subscribe: !0
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "ab", void 0);
DF_Mk([DF_Mm({
	context: "df-botwriting",
	subscribe: !0
}), DF_Ml("design:type", Object)], DF_M5.prototype, "botWriting", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "za", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "Gb", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "Ja", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "mb", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M5.prototype, "showBorderTop", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "placeholderText", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Number
}), DF_Ml("design:type", Object)], DF_M5.prototype, "maxInputValueLength", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M5.prototype, "enableFileUpload", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M5.prototype, "enableAudioInput", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audioStateImageActive", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audioStateImagePassive", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: File
}), DF_Ml("design:type", Object)], DF_M5.prototype, "file", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Blob
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audio", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M5.prototype, "V", void 0);
DF_M5 = DF_Mk([DF_Mq("df-messenger-user-input")], DF_M5);
var DF_MVj = DF_Mc(['<div\n      class="function-call\n          ', '">\n      <button @click=', ">\n        ", "\n      </button>\n    </div>"]),
	DF_MWj = DF_Mc([' <div class="error ', '">\n      ', "\n    </div>"]),
	DF_MXj = DF_Mc(' ;\n      <div class="message-list-wrapper">\n        ; ;\n        ;\n      </div>\n      <df-messenger-user-input\n        .showBorderTop=;\n        .placeholderText=;\n        .maxInputValueLength=;\n        .enableFileUpload=;\n        .enableAudioInput=;\n        .audioStateImageActive=;\n        .audioStateImagePassive=;\n        .languageCode=;></df-messenger-user-input>'.split(";")),
	DF_MYj = DF_Mc(["<df-messenger-auth-screen\n      .requestAuthText=", "></df-messenger-auth-screen>"]),
	DF_MZj = DF_Mc(['<div class="demo-banner">\n      UI Demo. Not connected to an agent.\n    </div>']),
	DF_M_j = DF_Mc([' <slot name="titlebar">\n      \x3c!--\n          Use default titlebar, used if nothing else specified for the slot.\n        --\x3e\n      <df-messenger-titlebar\n        .chatTitle=', "\n        .chatSubtitle=", "\n        .chatTitleIcon=", "\n        .languageCode=", '>\n        <slot name="titlebar-actions" slot="action"></slot>\n      </df-messenger-titlebar>\n    </slot>']),
	DF_M0j = DF_Mc([' <div\n      class="chat-wrapper"\n      role="dialog"\n      aria-label="', '">\n      ', " ", " ", "\n    </div>"]);

function DF_M1j() {
	var a = DF_Mz.apply(this, arguments) || this;
	a.noTitlebar = !1;
	a.isNestedChatElement = !1;
	a.Da = null;
	a.F = null;
	a.botWriting = !1;
	a.isAuthenticationPending = !1;
	a.oc = !1;
	a.g = new DF_M3;
	a.M = DF_M$a(function() {
		if (!a.R) return !1;
		DF_M2j(a);
		setTimeout(function() {
			var b, c;
			a.g.listScrollTop = null != (c = null == (b = a.R) ? void 0 : b.presenter.getChatScrollDistance()) ? c : 0
		});
		a.isNestedChatElement || DF_MJd(a);
		return !0
	});
	return a
}
DF_Mf(DF_M1j, DF_Mz);
DF_M1j.D = DF_Mz.D;
DF_M1j.o = DF_Mz.o;
DF_M1j.s = DF_Mz.s;
DF_M1j.h = DF_Mz.h;
DF_M1j.g = DF_Mz.g;
DF_M1j.C = DF_Mz.C;
DF_M1j.i = DF_Mz.i;
DF_M1j.u = DF_Mz.u;
DF_M1j.l = DF_Mz.l;
DF_M1j.v = DF_Mz.v;
DF_M = DF_M1j.prototype;
DF_M.connectedCallback = function() {
	var a = this;
	DF_Mz.prototype.connectedCallback.call(this);
	DF_Mn(this, "df-register-message-consumer", {
		consumer: this.g
	});
	this.id = "df-chat-wrapper";
	this.addEventListener("df-messenger-message-list-highest-scrolltop", function(b) {
		b = b.detail.scrollTop;
		var c;
		null == (c = a.R) || c.presenter.storeChatScrollDistance(b)
	})
};
DF_M.ra = function(a) {
	DF_Mz.prototype.ra.call(this, a);
	this.M()
};
DF_M.setInput = function(a) {
	var b;
	if (null != (b = this.T.querySelector("df-messenger-user-input"))) {
		b.file = null;
		b.audio = null;
		var c = b.na;
		if (c) {
			c.value = a;
			b.Ta = !0;
			var d;
			null == (d = b.na) || d.focus();
			b.Ta = !1;
			b.Yb()
		}
	}
};

function DF_M2j(a) {
	var b;
	null == (b = a.R) || b.addEventListener("df-messenger-error", function(c) {
		var d, e;
		a.Da = null != (e = null == (d = c.detail.error.error) ? void 0 : d.status) ? e : null;
		clearTimeout(a.Z);
		a.Z = setTimeout(function() {
			a.Da = null
		}, 5E3)
	})
}
DF_M.ld = function() {
	var a;
	null == (a = this.R) || a.abandonClientSideFunctionCalls()
};
DF_M.render = function() {
	var a = DF_M4a(this.chatTitle, this.languageCode, "chatTitle"),
		b;
	var c = this.noTitlebar ? null : DF_Mw(DF_M_j, this.chatTitle, this.chatSubtitle, this.chatTitleIcon, this.languageCode);
	var d, e = DF_Mp(this.languageCode, "403" === (null != (d = this.Da) ? d : this.F) ? "authErrorMessage" : "genericErrorMessage");
	this.F = this.Da;
	d = DF_Mw(DF_MWj, this.Da ? "show" : "", e);
	var f;
	this.g.enableCodeHighlight = (null == (f = this.R) ? void 0 : f.enableCodeHighlight) || !1;
	var g;
	this.g.urlAllowlist = (null == (g = this.R) ? void 0 : g.urlAllowlist) ||
		null;
	this.g.languageCode = this.languageCode;
	this.g.showBotWriting = this.botWriting;
	this.g.botWritingText = this.botWritingText;
	this.g.botWritingImage = this.botWritingImage;
	this.g.botActorImage = this.botActorImage;
	this.g.userActorImage = this.userActorImage;
	f = this.g;
	g = DF_Mp(this.languageCode, "cancelClientSideTask");
	c = DF_Mw(DF_MXj, c, d, f, DF_Mw(DF_MVj, this.oc ? "show" : "", this.ld, g), !0, this.placeholderText, (null == (b = this.R) ? void 0 : b.maxQueryLength) || DF_Mx, this.enableFileUpload, this.enableAudioInput, this.audioStateImageActive,
		this.audioStateImagePassive, this.languageCode);
	return DF_Mw(DF_M0j, a, c, this.isAuthenticationPending ? DF_Mw(DF_MYj, this.requestAuthText) : null, DF_Mw(DF_MZj))
};
var DF_M3j = DF_M1j;
DF_M3j.j = [DF_M3d, DF_MA];
DF_Mk([DF_Mt({
	m: "no-titlebar",
	type: Boolean,
	K: !0
}), DF_Ml("design:type", Object)], DF_M3j.prototype, "noTitlebar", void 0);
DF_Mk([DF_Mt({
	m: !1,
	type: Boolean
}), DF_Ml("design:type", Object)], DF_M3j.prototype, "isNestedChatElement", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M3j.prototype, "Da", void 0);
DF_Mk([DF_Mm({
	context: "df-botwriting",
	subscribe: !0
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M3j.prototype, "botWriting", void 0);
DF_Mk([DF_Mm({
	context: "df-authenticationpending",
	subscribe: !0
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M3j.prototype, "isAuthenticationPending", void 0);
DF_Mk([DF_Mm({
	context: "df-executingclientsidefunction",
	subscribe: !0
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M3j.prototype, "oc", void 0);
DF_M3j = DF_Mk([DF_Mq("df-messenger-chat")], DF_M3j);
var DF_M4j = DF_Mr([".bubble .close-icon img,.bubble .close-icon svg{width:inherit;height:inherit}:host{--df-messenger-internal-chat-bubble-size:var(--df-messenger-chat-bubble-size, 64px);--df-messenger-internal-chat-window-offset:var(--df-messenger-chat-window-offset, 16px);--df-messenger-internal-chat-bubble-size-offset:calc(var(--df-messenger-internal-chat-bubble-size) + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half:calc(var(--df-messenger-internal-chat-bubble-size) / 2);--df-messenger-internal-chat-bubble-size-half-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size) / 2);--df-messenger-internal-chat-bubble-size-half-offset:calc(var(--df-messenger-internal-chat-bubble-size) / 2 + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half-offset-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size) / 2 - var(--df-messenger-internal-chat-window-offset))}.container{position:relative;display:inline-block}.bubble{padding:0;margin:0;border:none;width:var(--df-messenger-internal-chat-bubble-size);height:var(--df-messenger-internal-chat-bubble-size);border-radius:var(--df-messenger-chat-bubble-border-radius,var(--df-messenger-internal-chat-bubble-size-half));border:var(--df-messenger-chat-bubble-border,none);background:var(--df-messenger-chat-bubble-background,var(--df-messenger-chat-bubble-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));cursor:pointer;user-select:none;display:flex;justify-content:center;align-items:center;position:relative}.bubble .icon{color:var(--df-messenger-chat-bubble-icon-color,#fff);opacity:1;transition:opacity .5s}.bubble .icon.fade{opacity:0;transition:opacity .5s}.bubble .close-icon{width:var(--df-messenger-chat-bubble-close-icon-size,24px);height:var(--df-messenger-chat-bubble-close-icon-size,24px);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(0);opacity:0;transition:transform .5s,opacity .5s}.bubble .close-icon svg{fill:var(--df-messenger-chat-bubble-icon-color,white)}.bubble .close-icon.rotate-fade{opacity:1;transform:translate(-50%,-50%) rotate(var(--df-messenger-chat-bubble-close-icon-transform-rotate,-90deg));transition:transform .5s,opacity .5s}.chat-wrapper{position:absolute;height:var(--df-messenger-chat-window-height,480px);width:var(--df-messenger-chat-window-width,320px);border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));box-shadow:var(--df-messenger-chat-window-box-shadow,none);visibility:hidden;transition:transform .3s,visibility .3s;right:0;bottom:var(--df-messenger-internal-chat-bubble-size-offset);transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.right-bottom,.min-chat-wrapper.right-bottom{top:0;bottom:unset;left:var(--df-messenger-internal-chat-bubble-size-offset);right:unset;transform-origin:top left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01,.01)}.chat-wrapper.right-top,.min-chat-wrapper.right-top{bottom:0;top:unset;left:var(--df-messenger-internal-chat-bubble-size-offset);right:unset;transform-origin:bottom left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01,.01)}.chat-wrapper.left-bottom,.min-chat-wrapper.left-bottom{top:0;bottom:unset;right:var(--df-messenger-internal-chat-bubble-size-offset);left:unset;transform-origin:top right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01,.01)}.chat-wrapper.left-top,.min-chat-wrapper,.min-chat-wrapper.left-top{bottom:0;right:var(--df-messenger-internal-chat-bubble-size-offset)}.chat-wrapper.left-top,.min-chat-wrapper.left-top{top:unset;left:unset;transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01,.01)}.chat-wrapper.top-right,.min-chat-wrapper.top-right{bottom:var(--df-messenger-internal-chat-bubble-size-offset);top:unset;left:0;right:unset;transform-origin:bottom left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.top-left,.min-chat-wrapper.top-left{bottom:var(--df-messenger-internal-chat-bubble-size-offset);top:unset;right:0;left:unset;transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.bottom-right,.min-chat-wrapper.bottom-right{top:var(--df-messenger-internal-chat-bubble-size-offset);bottom:unset;left:0;right:unset;transform-origin:top left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01,.01)}.chat-wrapper.bottom-left,.min-chat-wrapper.bottom-left{top:var(--df-messenger-internal-chat-bubble-size-offset);bottom:unset;right:0;left:unset;transform-origin:top right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01,.01)}.chat-wrapper.fullscreen-always{position:fixed;inset:0;width:unset;height:unset;transform-origin:center}@media screen and (max-width:500px){.chat-wrapper.fullscreen-small{position:fixed;inset:0;width:unset;height:unset;transform-origin:center}}.chat-wrapper.expanded{visibility:visible;transform:translate(0,0) scale(1,1);transition:transform .3s}.min-chat-wrapper{position:absolute;width:var(--df-messenger-chat-window-width-minimized,var(--df-messenger-chat-window-width,320px));background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa));box-shadow:var(--df-messenger-chat-window-box-shadow-minimized,var(--df-messenger-chat-window-box-shadow,none));border-radius:var(--df-messenger-chat-border-radius-minimized,var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)));border:var(--df-messenger-chat-border-minimized,var(--df-messenger-chat-border,none));overflow:hidden;display:flex;align-items:flex-start;transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01,.01);animation-name:scale-in;animation-duration:.3s;animation-timing-function:ease;animation-delay:var(--df-messenger-chat-animation-delay-minimized, .1s);animation-fill-mode:forwards}.min-chat-wrapper df-messenger-message-list{flex-grow:1;min-width:0}.min-chat-wrapper .action-button{padding:12px;font-size:0;display:var(--df-messenger-chat-collapse-icon-display-minimized,block)}.min-chat-wrapper .action-button img{width:var(--df-messenger-chat-bubble-close-icon-size,24px);height:var(--df-messenger-chat-bubble-close-icon-size,24px)}.min-chat-wrapper .action-button svg{fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))}@keyframes scale-in{to{transform:translate(0,0) scale(1,1)}}"]);
var DF_M5j = DF_Mc('\n      <div class="container">\n        <button\n          class="bubble focus-outline"\n          @click=;\n          aria-expanded=";"\n          aria-label=";">\n          ;\n          <span class="close-icon ;">\n            ;\n          </span>\n        </button>\n        ; ;\n      </div>\n    '.split(";")),
	DF_M6j = DF_Mc([' <span class="icon ', '">\n        ', "\n      </span>"]),
	DF_M7j = DF_Mc([' <img\n      src="', '"\n      alt=""\n      class="icon ', '" />']),
	DF_M8j = DF_Mc(['<img src="',
		'" alt="" />'
	]),
	DF_M9j = DF_Mc([' <style>\n          @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n          .close-action {\n            margin: 0;\n            padding: 12px;\n            color: var(--df-messenger-titlebar-icon-font-color, inherit);\n          }\n        </style>\n        <button\n          class="material-icons close-action focus-outline-contrast\n            action-button"\n          @click=', '\n          slot="action"\n          aria-label="', '">\n          ',
		"\n        </button>"
	]),
	DF_M$j = DF_Mc([' <style>\n        .close-action {\n          margin: 0;\n          padding: 12px;\n          background: var(\n            --df-messenger-titlebar-button-background,\n            transparent\n          );\n          border: var(--df-messenger-titlebar-button-border, none);\n          border-radius: var(\n            --df-messenger-titlebar-button-border-radius,\n            999px\n          );\n          cursor: pointer;\n          transition: background-color 0.3s;\n        }\n\n        .close-action:hover {\n          background: var(\n            --df-messenger-titlebar-button-background-hover,\n            rgba(200, 220, 252, 0.08)\n          );\n          transition: background-color 0.3s;\n        }\n\n        .close-action img {\n          width: var(--df-messenger-chat-collapse-icon-size, unset);\n          height: var(--df-messenger-chat-collapse-icon-size, unset);\n        }\n      </style>\n      <button\n        class="close-action focus-outline-contrast"\n        @click=',
		'\n        slot="action"\n        aria-label="', '">\n        <img src="', '" />\n      </button>'
	]),
	DF_Mak = DF_Mc('\n      <div\n        style=;\n        class="chat-wrapper\n          ; ;\n          ;">\n        <df-messenger-chat\n          .chatTitle=;\n          .chatSubtitle=;\n          .botWritingText=;\n          .botWritingImage=;\n          .requestAuthText=;\n          .placeholderText=;\n          .botActorImage=;\n          .userActorImage=;\n          .enableFileUpload=;\n          .enableAudioInput=;\n          .audioStateImageActive=;\n          .audioStateImagePassive=;\n          .isNestedChatElement=;>\n          <df-messenger-titlebar\n            .chatTitle=;\n            .chatSubtitle=;\n            .chatTitleIcon=;\n            .languageCode=;\n            slot="titlebar">\n            <slot name="titlebar-actions" slot="action"></slot>\n            ;\n          </df-messenger-titlebar>\n        </df-messenger-chat>\n      </div>\n    '.split(";")),
	DF_Mbk = DF_Mc(["", ""]),
	DF_Mck = DF_Mc(['<img src="', '" />']),
	DF_Mdk = DF_Mc(' <div\n      class="min-chat-wrapper ;"\n      @click=;>\n      <df-messenger-message-list\n        minimized\n        .initialMessages=;\n        .botActorImage=;\n        .userActorImage=;></df-messenger-message-list>\n      <button\n        class="action-button"\n        @click=;>\n        ;\n      </button>\n    </div>'.split(";"));

function DF_Mek() {
	var a = DF_Mz.apply(this, arguments) || this;
	a.anchor = null;
	a.minimized = null;
	a.chatIcon = "https://www.gstatic.com/dialogflow-console/common/assets/integrations/icons/messenger-cx-chat-icon.svg";
	a.chatCloseIcon = null;
	a.chatCollapseIcon = null;
	a.allowFullscreen = null;
	a.F = DF_M$a(function() {
		if (!a.R) return !1;
		void 0 === a.expanded && (a.expanded = a.R.presenter.isChatBubbleExpanded());
		a.expanded && (a.minimized = null);
		DF_Mfk(a);
		(a.expanded || a.minimized) && DF_MJd(a).finally(function() {
			return void DF_MPa(a)
		});
		return !0
	});
	return a
}
DF_Mf(DF_Mek, DF_Mz);
DF_Mek.D = DF_Mz.D;
DF_Mek.o = DF_Mz.o;
DF_Mek.s = DF_Mz.s;
DF_Mek.h = DF_Mz.h;
DF_Mek.g = DF_Mz.g;
DF_Mek.C = DF_Mz.C;
DF_Mek.i = DF_Mz.i;
DF_Mek.u = DF_Mz.u;
DF_Mek.l = DF_Mz.l;
DF_Mek.v = DF_Mz.v;
DF_M = DF_Mek.prototype;
DF_M.connectedCallback = function() {
	DF_Mgk(this);
	DF_Mhk(this);
	DF_Mik(this);
	DF_Mz.prototype.connectedCallback.call(this)
};
DF_M.xa = function(a) {
	var b = this;
	DF_Mz.prototype.xa.call(this, a);
	DF_Mjk(this);
	window.addEventListener("resize", function() {
		return void DF_Mjk(b)
	})
};
DF_M.ra = function(a) {
	DF_Mz.prototype.ra.call(this, a);
	this.F();
	a.has("chatIcon") && DF_Mgk(this);
	a.has("chatCloseIcon") && DF_Mhk(this);
	a.has("chatCollapseIcon") && DF_Mik(this)
};
DF_M.openChat = function() {
	this.expanded || this.Xa()
};
DF_M.closeChat = function() {
	this.expanded && this.Xa()
};
DF_M.openMinChat = function(a) {
	var b = this,
		c;
	return DF_Mh(function(d) {
		if (1 == d.g) return b.expanded = !1, DF_Mg(d, DF_MJd(b), 2);
		b.minimized = (null == (c = a) ? void 0 : c.anchor) || "left-top";
		b.g = a;
		d.g = 0
	})
};
DF_M.closeMinChat = function() {
	this.minimized = null;
	this.g = void 0
};
DF_M.setInput = function(a) {
	var b;
	null == (b = this.T.querySelector("df-messenger-chat")) || b.setInput(a)
};
DF_M.Xa = function() {
	var a = this,
		b;
	return DF_Mh(function(c) {
		if (1 == c.g) return a.expanded = !a.expanded, a.minimized = null, DF_Mfk(a), null == (b = a.R) || b.presenter.storeChatBubbleExpanded(a.expanded), a.expanded ? c = DF_Mg(c, DF_MJd(a), 2) : (c.g = 2, c = void 0), c;
		DF_Mjk(a);
		c.g = 0
	})
};

function DF_Mfk(a) {
	DF_Mn(a, "df-chat-open-changed", {
		isOpen: a.expanded
	})
}

function DF_Mjk(a) {
	var b = a.T.querySelector(".chat-wrapper");
	b && (a.expanded ? b.style.transform = "" : "always" === a.allowFullscreen || "small" === a.allowFullscreen && 500 > window.innerWidth ? (a = a.parentElement.getBoundingClientRect(), b.style.transform = "translate(" + ((a.left + a.right) / 2 - window.innerWidth / 2) + "px, " + ((a.top + a.bottom) / 2 - window.innerHeight / 2) + "px) scale(0.01, 0.01)") : b.style.transform = "")
}
DF_M.render = function() {
	var a = DF_Mkk(this, !!this.expanded),
		b = this.Xa,
		c = !!this.expanded,
		d = void 0 === this.sb ? null : this.sb ? DF_Mw(DF_M6j, this.expanded ? "fade" : "", DF_Mle) : DF_Mw(DF_M7j, this.chatIcon, this.expanded ? "fade" : ""),
		e = this.expanded ? "rotate-fade" : "",
		f = this.rb ? DF_Mme : DF_Mw(DF_M8j, this.chatCloseIcon),
		g = {};
	this.chatWidth && (g.width = this.chatWidth + "px");
	this.chatHeight && (g.height = this.chatHeight + "px");
	g = DF_Mlf(g);
	var h = this.expanded ? "expanded" : "",
		k = this.anchor,
		l = this.allowFullscreen ? "fullscreen-" + this.allowFullscreen :
		"",
		m = this.chatTitle,
		n = this.chatSubtitle,
		p = this.botWritingText,
		q = this.botWritingImage,
		r = this.requestAuthText,
		t = this.placeholderText,
		v = this.botActorImage,
		u = this.userActorImage,
		x = this.enableFileUpload,
		w = this.enableAudioInput,
		z = this.audioStateImageActive,
		A = this.audioStateImagePassive,
		B = this.chatTitle,
		C = this.chatSubtitle,
		D = this.chatTitleIcon,
		E = this.languageCode,
		y = DF_Mkk(this, !0);
	return DF_Mw(DF_M5j, b, c, a, d, e, f, DF_Mw(DF_Mak, g, h, k, l, m, n, p, q, r, t, v, u, x, w, z, A, !0, B, C, D, E, this.Ya ? DF_Mw(DF_M9j, this.Xa, y, DF_Mlk(this)) :
		DF_Mw(DF_M$j, this.Xa, y, this.chatCollapseIcon)), DF_Mmk(this))
};

function DF_Mgk(a) {
	DF_MYa(a.chatIcon, function() {
		a.sb = !1
	}, function() {
		a.sb = !0
	})
}

function DF_Mhk(a) {
	a.chatCloseIcon ? DF_MYa(a.chatCloseIcon, function() {
		a.rb = !1
	}, function() {
		a.rb = !0
	}) : a.rb = !0
}

function DF_Mik(a) {
	a.chatCollapseIcon ? DF_MYa(a.chatCollapseIcon, function() {
		a.Ya = !1
	}, function() {
		a.Ya = !0
	}) : a.Ya = !0
}

function DF_Mlk(a) {
	switch (a.anchor) {
		case "top-left":
		case "left-top":
			return "south_east";
		case "top-right":
		case "right-top":
			return "south_west";
		case "right-bottom":
		case "bottom-right":
			return "north_west";
		case "left-bottom":
		case "bottom-left":
			return "north_east";
		default:
			return "south_east"
	}
}

function DF_Mkk(a, b) {
	return DF_Mp(a.languageCode, b ? "closeAriaLabel" : "openAriaLabel", {
		chatTitle: DF_M4a(a.chatTitle, a.languageCode, "chatTitle")
	})
}

function DF_Mmk(a) {
	if (!a.minimized) return null;
	var b, c = null == (b = a.R) ? void 0 : b.presenter.getUtterances();
	if (!c || 0 === c.length) return null;
	b = a.Ya ? DF_Mw(DF_Mbk, DF_Mme) : DF_Mw(DF_Mck, a.chatCollapseIcon);
	var d, e;
	return DF_Mw(DF_Mdk, a.minimized, a.nd, [c[0]], (null == (d = a.g) ? 0 : d.showActorImages) ? a.botActorImage : DF_Mx, (null == (e = a.g) ? 0 : e.showActorImages) ? a.userActorImage : DF_Mx, function(f) {
		f.stopPropagation();
		a.closeMinChat()
	}, b)
}
DF_M.nd = function() {
	var a;
	"Range" !== (null == (a = window.getSelection()) ? void 0 : a.type) && this.openChat()
};
var DF_M6 = DF_Mek;
DF_M6.j = [DF_M4j, DF_MA];
DF_Mk([DF_Mt({
	m: "expanded",
	type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M6.prototype, "expanded", void 0);
DF_Mk([DF_Mt({
	m: "anchor",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M6.prototype, "anchor", void 0);
DF_Mk([DF_Mt({
	m: "minimized",
	type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "minimized", void 0);
DF_Mk([DF_Mt({
	m: "chat-icon",
	type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatIcon", void 0);
DF_Mk([DF_Mt({
	m: "chat-close-icon",
	type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatCloseIcon", void 0);
DF_Mk([DF_Mt({
	m: "chat-collapse-icon",
	type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatCollapseIcon", void 0);
DF_Mk([DF_Mt({
	m: "chat-width",
	type: Number,
	K: !0
}), DF_Ml("design:type", Number)], DF_M6.prototype, "chatWidth", void 0);
DF_Mk([DF_Mt({
	m: "chat-height",
	type: Number,
	K: !0
}), DF_Ml("design:type", Number)], DF_M6.prototype, "chatHeight", void 0);
DF_Mk([DF_Mt({
	m: "allow-fullscreen",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M6.prototype, "allowFullscreen", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "sb", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "rb", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "Ya", void 0);
DF_M6 = DF_Mk([DF_Mq("df-messenger-chat-bubble")], DF_M6);

function DF_Mnk(a) {
	var b = {
		name: "dialogflow"
	};
	if (a) try {
		var c;
		b = null != (c = JSON.parse(a)) ? c : b
	} catch (d) {
		console.error("DF-MESSENGER", d)
	}
	return b
};

function DF_Mok() {
	this.g = null;
	this.Nb = !1;
	this.promise = null
}

function DF_MPj(a) {
	var b, c;
	return DF_Mh(function(d) {
		switch (d.g) {
			case 1:
				return d.G = 2, DF_Mg(d, navigator.mediaDevices.getUserMedia({
					audio: !0
				}), 4);
			case 4:
				b = d.h;
				d.g = 3;
				d.G = 0;
				break;
			case 2:
				return c = DF_Mqa(d), console.error("DF-MESSENGER", "AudioRecorder", "Could not start recording", c), d.return(Promise.reject(c));
			case 3:
				return a.promise && console.warn("DF-MESSENGER", "AudioRecorder", "Recording already started"), a.Nb = !1, a.promise = new Promise(function(e, f) {
					a.g = new MediaRecorder(b);
					a.g.ondataavailable = function(g) {
						var h,
							k = null == (h = a.g) ? void 0 : h.state;
						a.g = null;
						a.promise = null;
						a.Nb ? e(null) : "inactive" !== k ? (console.error("DF-MESSENGER", "AudioRecorder", "Unexpected recorder state", k), f()) : e(g.data)
					};
					a.g.start()
				}), d.return(a.promise)
		}
	})
}

function DF_MMj(a) {
	var b;
	return DF_Mh(function(c) {
		null == (b = a.g) || b.stop();
		a.promise || console.warn("DF-MESSENGER", "AudioRecorder", "Recording stopped before startRecording");
		return DF_Mg(c, a.promise, 0)
	})
};

function DF_Mpk() {}
DF_Mpk.prototype.requestAuthentication = function() {
	return Promise.resolve(void 0)
};
var DF_Mqk = DF_Mc(["https://accounts.google.com/gsi/client"]);

function DF_Mrk(a, b) {
	this.clientId = a;
	this.scope = b
}
DF_Mrk.prototype.requestAuthentication = function() {
	var a = this;
	return DF_Mh(function(b) {
		return 1 == b.g ? DF_Mg(b, DF_Msk(), 2) : b.return(a.requestAccessToken())
	})
};
DF_Mrk.prototype.requestAccessToken = function() {
	var a = this;
	return new Promise(function(b, c) {
		globalThis.google.accounts.oauth2.initTokenClient({
			client_id: a.clientId,
			scope: a.scope,
			callback: function(d) {
				var e = console,
					f = e.debug,
					g = Object.assign({}, d);
				g.access_token && (g.access_token = "REDACTED");
				f.call(e, "DF-MESSENGER", "requestAccessToken", g);
				d.access_token ? b(Object.assign({}, {
					token: d.access_token
				}, d.expires_in && {
					expirationMs: 1E3 * d.expires_in
				})) : c()
			},
			error_callback: function(d) {
				console.error("DF-MESSENGER",
					"requestAccessToken", d);
				c()
			}
		}).requestAccessToken()
	})
};
var DF_Msk = function() {
	var a = null;
	return function() {
		if (null == a) {
			var b = document.createElement("script");
			DF_MRg(b, DF_MUc(DF_Mqk));
			a = new Promise(function(c) {
				b.addEventListener("load", function() {
					return void c()
				})
			});
			document.head.appendChild(b)
		}
		return a
	}
}();

function DF_Mtk(a) {
	this.audience = a
}

function DF_Muk(a, b) {
	var c, d, e, f, g;
	return DF_Mh(function(h) {
		switch (h.g) {
			case 1:
				return c = JSON.stringify({
					grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
					audience: a.audience,
					scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform",
					requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
					subjectToken: b,
					subjectTokenType: "urn:ietf:params:oauth:token-type:jwt"
				}), DF_Mg(h, fetch("https://sts.googleapis.com/v1/token", {
						method: "POST",
						body: c
					}),
					2);
			case 2:
				d = h.h;
				if (d.ok) {
					h.g = 3;
					break
				}
				return DF_Mg(h, d.text(), 4);
			case 4:
				throw e = h.h, f = d.status, {
					message: e,
					status: f
				};
			case 3:
				return DF_Mg(h, d.json(), 5);
			case 5:
				return g = h.h, h.return({
					token: g.access_token,
					expirationMs: 1E3 * g.expires_in
				})
		}
	})
};

function DF_Mvk(a, b, c, d) {
	this.clientId = b;
	this.authority = c;
	this.redirectUri = d;
	this.g = new DF_Mtk(a)
}
DF_Mvk.prototype.requestAuthentication = function() {
	var a = this;
	return DF_Mh(function(b) {
		return b.return(new Promise(function(c) {
			var d, e, f, g, h;
			return DF_Mh(function(k) {
				switch (k.g) {
					case 1:
						return d = {
							auth: {
								clientId: a.clientId,
								authority: a.authority,
								redirectUri: a.redirectUri
							},
							cache: {
								cacheLocation: "sessionStorage"
							}
						}, e = new window.msal.PublicClientApplication(d), DF_Mg(k, e.initialize(), 2);
					case 2:
						return f = {
							scopes: ["user.read"]
						}, DF_Mg(k, e.loginPopup(f), 3);
					case 3:
						return g = k.h, DF_Mg(k, DF_Muk(a.g, g.idToken), 4);
					case 4:
						h =
							k.h, c(h), k.g = 0
				}
			})
		}))
	})
};

function DF_Mwk() {
	this.g = document || {
		cookie: ""
	}
}
DF_Mwk.prototype.set = function(a, b, c) {
	var d = !1;
	if ("object" === typeof c) {
		var e = c.zd;
		d = c.Bd || !1;
		var f = c.domain || void 0;
		var g = c.path || void 0;
		var h = c.sc
	}
	if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
	if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
	void 0 === h && (h = -1);
	this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
		e : "")
};
DF_Mwk.prototype.get = function(a, b) {
	for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
		f = DF_Mhc(d[e]);
		if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
		if (f == a) return ""
	}
	return b
};
DF_Mwk.prototype.remove = function(a, b, c) {
	var d = void 0 !== this.get(a);
	this.set(a, "", {
		sc: 0,
		path: b,
		domain: c
	});
	return d
};

function DF_Mxk(a) {
	this.g = a
}
DF_Mxk.prototype.storeAccessToken = function(a) {
	this.g.storeAccessToken(a.token, (new Date).getTime() + a.expirationMs)
};
DF_Mxk.prototype.restoreAccessToken = function() {
	var a = this.g.getAccessToken(),
		b = this.g.getAccessTokenExpiration();
	if (!a || !b) return null;
	var c = (new Date).getTime();
	return b <= c ? null : {
		token: a,
		expirationMs: b - c
	}
};
DF_Mxk.prototype.clearAccessToken = function() {
	this.g.clearAccessToken()
};

function DF_Myk() {}
DF_Myk.prototype.storeAccessToken = function(a) {
	console.debug("DF-MESSENGER", "setAccessTokenCookie", a);
	var b = new DF_Mwk,
		c = {
			sc: a.expirationMs / 1E3,
			Bd: !0,
			zd: "strict"
		};
	b.set("accessToken", a.token, c);
	b.set("accessTokenExpiration", ((new Date).getTime() + a.expirationMs).toString(), c)
};
DF_Myk.prototype.restoreAccessToken = function() {
	var a = new DF_Mwk,
		b = a.get("accessToken");
	a = a.get("accessTokenExpiration");
	if (!b || !a) return null;
	a = Number(a);
	var c = (new Date).getTime();
	return a <= c ? null : {
		token: b,
		expirationMs: a - c
	}
};
DF_Myk.prototype.clearAccessToken = function() {
	var a = new DF_Mwk;
	a.remove("accessToken");
	a.remove("accessTokenExpiration")
};

function DF_Mzk(a, b) {
	this.g = a;
	this.i = 0;
	a = this.g;
	if (a.authSettings) try {
		var c = JSON.parse(a.authSettings)
	} catch (d) {
		console.error(d), c = null
	} else c = null;
	this.j = DF_MAk(this, c);
	this.h = (null == c ? 0 : c.storeInCookie) ? new DF_Myk : new DF_Mxk(b)
}

function DF_MAk(a, b) {
	if (!b) return new DF_Mrk(a.g.oauthClientId, "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform");
	var c;
	switch (null == (c = b.provider) ? void 0 : c.toLowerCase()) {
		case "google":
			return new DF_Mrk(b.clientId, b.scope);
		case "microsoft":
			return new DF_Mvk(b.audience, b.clientId, b.authority, b.redirectUri);
		case "custom":
			return new DF_Mpk;
		default:
			throw Error("Unsupported auth provider: " + b.provider);
	}
}
DF_Mzk.prototype.requestAuthentication = function() {
	var a = this,
		b;
	return DF_Mh(function(c) {
		if (1 == c.g) return DF_Mn(a.g, "df-auth-requested", {}), DF_Mg(c, a.j.requestAuthentication(), 2);
		b = c.h;
		if (!b) return c.return();
		a.g.accessToken = b.token;
		b.expirationMs && (DF_MBk(a, b.expirationMs), a.h.storeAccessToken(b));
		c.g = 0
	})
};
DF_Mzk.prototype.restoreAccessToken = function() {
	var a = this.h.restoreAccessToken();
	if (!a) return !1;
	this.g.accessToken = a.token;
	DF_MBk(this, a.expirationMs);
	return !0
};
DF_Mzk.prototype.clearAccessToken = function() {
	this.h.clearAccessToken();
	this.g.accessToken = null
};

function DF_MBk(a, b) {
	clearTimeout(a.i);
	a.i = setTimeout(function() {
		a.g.accessToken = null;
		a.h.clearAccessToken()
	}, b)
};

function DF_MCk(a) {
	this.i = a;
	this.h = new TextDecoder;
	this.g = new DF_MDk;
	this.message = {
		data: ""
	}
}
DF_MCk.prototype.parse = function(a) {
	var b = this,
		c, d;
	return DF_Mh(function(e) {
		1 == e.g && (c = a.getReader());
		if (5 != e.g) return DF_Mg(e, c.read(), 5);
		(d = e.h).done ? e.g = 0 : (DF_MEk(b.g, d.value), b.g.parse(function(f, g) {
			if (0 === f.length) b.i(b.message), b.message = {
				data: ""
			};
			else if (!(0 >= g)) {
				var h = b.h.decode(f.subarray(0, g));
				f = b.h.decode(f.subarray(g + (32 === f[g + 1] ? 2 : 1)));
				switch (h) {
					case "data":
						b.message.data = b.message.data ? b.message.data + "\n" + f : f
				}
			}
		}), e.g = 2)
	})
};

function DF_MDk() {
	this.position = 0;
	this.i = -1;
	this.h = !1
}

function DF_MEk(a, b) {
	if (void 0 === a.g) a.g = b;
	else {
		var c = new Uint8Array(a.g.length + b.length);
		c.set(a.g);
		c.set(b, a.g.length);
		a.g = c
	}
}
DF_MDk.prototype.parse = function(a) {
	if (void 0 !== this.g) {
		for (var b = this.g, c = this.position, d = this.h, e = this.i, f = b.length, g = 0; c < f;) {
			d && (10 === b[c] && (g = ++c), d = !1);
			for (var h = -1; c < f && -1 === h; c++) switch (b[c]) {
				case 58:
					-1 === e && (e = c - g);
					break;
				case 13:
					d = !0;
					h = c;
					break;
				case 10:
					h = c
			}
			if (-1 === h) break;
			a(b.subarray(g, h), e);
			g = c;
			e = -1
		}
		a = DF_Md(g === f ? [void 0, 0, d, -1] : [b.subarray(g), c - g, d, e]);
		this.g = a.next().value;
		this.position = a.next().value;
		this.h = a.next().value;
		this.i = a.next().value
	}
};

function DF_MFk() {
	this.headers = new Map
}

function DF_MGk() {
	return DF_MHk(new DF_MFk, "Content-Type", "application/json")
}

function DF_MHk(a, b, c) {
	a.headers.set(b, c);
	return a
}

function DF_MIk(a, b) {
	a.isAuthenticationRequired && (DF_MHk(b, "Authorization", "Bearer " + a.accessToken), DF_MHk(b, "X-Goog-User-Project", a.projectId));
	return b
};

function DF_MJk(a, b, c, d) {
	d = void 0 === d ? null : d;
	var e, f;
	return DF_Mh(function(g) {
		switch (g.g) {
			case 1:
				return d ? DF_Mg(g, d.fakeFetch(a, b), 5) : DF_Mg(g, fetch(b, {
					method: "POST",
					headers: Object.fromEntries(c.headers),
					body: a
				}), 4);
			case 4:
				e = g.h;
				g.g = 3;
				break;
			case 5:
				e = g.h;
			case 3:
				if (!e.ok) throw {
					error: {
						code: 404 === e.status ? "NOT_FOUND" : 401 === e.status || 403 === e.status ? "AUTH_ERROR" : "UNKNOWN",
						message: "Fetch error",
						status: e.status.toString()
					}
				};
				return DF_Mg(g, e.text(), 6);
			case 6:
				return (f = g.h) && 0 === f.indexOf(")]}'\n") ? g.return(f.substring(5)) :
					g.return(f)
		}
	})
}

function DF_MKk(a, b, c, d) {
	var e, f, g;
	return DF_Mh(function(h) {
		if (1 == h.g) return DF_Mg(h, fetch(b, {
			method: "POST",
			headers: Object.fromEntries(c.headers),
			body: a
		}), 2);
		e = h.h;
		f = e.headers.get("content-type");
		if ("text/event-stream" !== f) return console.error("DF-MESSENGER", "EventSource", "Expected content-type to be: 'text/event-stream', actual: '" + f + "'"), h.return();
		g = new DF_MCk(d);
		return DF_Mg(h, g.parse(e.body), 0)
	})
};

function DF_MLk(a) {
	this.g = a
}
DF_MLk.prototype.uploadFile = function(a) {
	var b = this;
	return new Promise(function(c, d) {
		console.debug("DF-MESSENGER", "uploadFile", a);
		DF_MJk(a.file, "https://storage.googleapis.com/upload/storage/v1/b/" + b.g.gcsUpload + "/o?uploadType=media&name=" + encodeURIComponent(a.path), DF_MIk(b.g, DF_MHk(new DF_MFk, "Content-Type", a.file.type))).then(function() {
			console.debug("DF-MESSENGER", "uploadFile", "Response", "ok");
			c()
		}).catch(function(e) {
			console.error("DF-MESSENGER", "uploadFile", "Error", e);
			DF_Mn(b.g, "df-messenger-error", {
				error: e
			});
			d(e)
		})
	})
};

function DF_MMk(a) {
	this.g = a
}
DF_Ma.Object.defineProperties(DF_MMk.prototype, {
	h: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.g.apiUri || this.i()
		}
	}
});

function DF_MNk(a, b) {
	this.g = a;
	this.apiUri = b
}

function DF_MOk(a, b, c, d) {
	var e = DF_MPk(a, b, "df-request-sent");
	if (!e) return Promise.resolve({});
	a.g.botWriting = !0;
	return new Promise(function(f, g) {
		DF_MJk(JSON.stringify(e), c, d, a.g.fakeBackendService).then(function(h) {
			h = JSON.parse(h);
			console.debug("DF-MESSENGER", "fetch", "Response", h);
			f(h)
		}).catch(function(h) {
			console.error("DF-MESSENGER", "fetch", "Error", h);
			DF_Mn(a.g, "df-messenger-error", {
				error: h
			});
			g(h)
		}).finally(function() {
			a.g.botWriting = !1
		})
	})
}

function DF_MPk(a, b, c) {
	var d = {
		requestBody: b
	};
	if (DF_Mn(a.g, c, {
			requestBody: b,
			data: d
		})) return d.requestBody
};

function DF_MQk() {
	DF_MMk.apply(this, arguments)
}
DF_Mf(DF_MQk, DF_MMk);
DF_MQk.prototype.i = function() {
	return this.g.isAuthenticationRequired ? this.g.location && "global" !== this.g.location ? "https://" + this.g.location + "-dialogflow.googleapis.com/v3" : "https://dialogflow.googleapis.com/v3" : this.g.location && "global" !== this.g.location ? "https://dialogflow.cloud.google.com/v1/cx/locations/" + this.g.location + "/integrations/messenger/webhook" : "https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook"
};

function DF_MRk(a) {
	DF_MNk.call(this, a, new DF_MQk(a))
}
DF_Mf(DF_MRk, DF_MNk);

function DF_MSk(a, b) {
	return DF_MOk(a, b, DF_MTk(a, "detectIntent"), DF_MIk(a.g, DF_MGk()))
}

function DF_MUk(a, b, c) {
	if (!DF_MPk(a, b, "df-request-sent")) return Promise.resolve();
	var d = DF_MGk();
	DF_MHk(d, "Accept", "text/event-stream");
	DF_MHk(d, "X-Goog-Visibilities", "DIALOGFLOW_UNDER_CONSTRUCTION");
	return DF_MKk(JSON.stringify(b), DF_MTk(a, "serverStreamingDetectIntent?alt=sse"), DF_MIk(a.g, d), function(e) {
		e = JSON.parse(e.data);
		console.debug("DF-MESSENGER", "serverStreamingDetectIntent", "Response", e);
		c(e)
	}).catch(function(e) {
		console.error("DF-MESSENGER", "serverStreamingDetectIntent", "Error", e);
		DF_Mn(a.g,
			"df-messenger-error", {
				error: e
			});
		throw e;
	}).finally(function() {
		a.g.botWriting = !1
	})
}
DF_MRk.prototype.sendFeedback = function(a) {
	var b = this,
		c = DF_MPk(this, a, "df-feedback-request-sent");
	return c ? new Promise(function(d, e) {
		DF_MJk(JSON.stringify(c), DF_MTk(b, "submitAnswerFeedback"), DF_MIk(b.g, DF_MGk())).then(function(f) {
			console.debug("DF-MESSENGER", "submitAnswerFeedback", "Response", JSON.parse(f));
			d()
		}).catch(function(f) {
			console.error("DF-MESSENGER", "submitAnswerFeedback", "Error", f);
			DF_Mn(b.g, "df-messenger-error", {
				error: f
			});
			e(f)
		})
	}) : Promise.resolve()
};

function DF_MTk(a, b) {
	if (a.g.isAuthenticationRequired) return a.apiUri.h + "/projects/" + a.g.projectId + "/locations/" + a.g.location + "/agents/" + a.g.agentId + "/" + (a.g.environment ? "environments/" + a.g.environment + "/" : "") + "sessions/" + a.g.sessionId + ":" + b;
	switch (b) {
		case "detectIntent":
			return a.g.projectId ? a.apiUri.h + "/projects/" + a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.apiUri.h + "/" + a.g.agentId + "/sessions/" + a.g.sessionId;
		case "submitAnswerFeedback":
			return a.g.projectId ? a.apiUri.h + "/submitanswerfeedback/projects/" +
				a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.apiUri.h + "/submitanswerfeedback/" + a.g.agentId + "/sessions/" + a.g.sessionId;
		default:
			throw Error("Unimplemented");
	}
};

function DF_MVk(a, b) {
	this.g = a;
	this.version = b
}
DF_Mf(DF_MVk, DF_MMk);
DF_MVk.prototype.i = function() {
	return "https://" + this.g.location + "-aiplatform.googleapis.com/" + this.version
};

function DF_MWk(a, b) {
	DF_MNk.call(this, a, new DF_MVk(a, b))
}
DF_Mf(DF_MWk, DF_MNk);
DF_MWk.prototype.query = function(a) {
	var b = this,
		c, d, e, f, g, h;
	return DF_Mh(function(k) {
		if (!b.g.isAuthenticationRequired) throw Error("Unauthenticated access is not implemented for Vertex AI");
		c = DF_Mnk(b.g.service);
		d = DF_MIk(b.g, DF_MGk());
		(null == (e = c) ? 0 : e.visibilityLabel) && DF_MHk(d, "X-Goog-Visibilities", c.visibilityLabel);
		switch (null == (g = c) ? void 0 : g.name) {
			case "aiplatform:predict":
				f = b.apiUri.h + "/projects/" + b.g.projectId + "/locations/" + b.g.location + "/publishers/" + c.publisher + "/models/" + c.model + ":predict";
				break;
			case "aiplatform:extension-controller":
				f = b.apiUri.h + "/projects/" + b.g.projectId + "/locations/" + b.g.location + "/extensionControllers/" + c.controllerId + ":query";
				break;
			default:
				throw Error("Unsupported service name: " + (null == (h = c) ? void 0 : h.name));
		}
		return k.return(DF_MOk(b, a, f, d))
	})
};

function DF_MXk(a) {
	this.g = a;
	this.h = new DF_MRk(a);
	this.G = new DF_MWk(a, "v1");
	this.j = new DF_MWk(a, "v1");
	this.i = new DF_MLk(a)
}

function DF_MYk(a, b, c) {
	var d;
	"server-streaming" === (null == (d = DF_Mnk(a.g.service)) ? void 0 : d.method) ? DF_MUk(a.h, b, c.message).then(function() {
		var e;
		null == (e = c.complete) || e.call(c)
	}).catch(function(e) {
		var f;
		null == (f = c.error) || f.call(c, e)
	}): DF_MSk(a.h, b).then(function(e) {
		var f;
		null == (f = c.message) || f.call(c, e);
		var g;
		null == (g = c.complete) || g.call(c)
	}).catch(function(e) {
		var f;
		null == (f = c.error) || f.call(c, e)
	})
}
DF_MXk.prototype.sendFeedback = function(a) {
	return this.h.sendFeedback(a)
};
DF_MXk.prototype.uploadFile = function(a, b) {
	return this.i.uploadFile({
		file: a,
		path: b
	})
};

function DF_MZk() {
	var a = Error.call(this, "Function cancelled by client");
	this.message = a.message;
	"stack" in a && (this.stack = a.stack)
}
DF_Mf(DF_MZk, Error);

function DF_M_k(a, b, c, d) {
	var e = this;
	this.tool = a;
	this.action = b;
	this.h = null;
	this.id = DF_M8i();
	try {
		var f = c(d);
		this.g = f instanceof Promise ? new Promise(function(g, h) {
			e.h = h;
			f.then(function(k) {
				return void g(k)
			}).catch(function(k) {
				return void h(k)
			})
		}) : Promise.resolve(f)
	} catch (g) {
		this.g = Promise.reject(g)
	}
};

function DF_M0k() {
	return DF_Mi.apply(0, arguments).join(".")
}

function DF_M1k(a, b) {
	a = Error.call(this, "Call to unknown " + a + " " + b);
	this.message = a.message;
	"stack" in a && (this.stack = a.stack)
}
DF_Mf(DF_M1k, Error);

function DF_M2k(a) {
	this.h = a;
	this.i = new Map;
	this.g = new Map
}
DF_M2k.prototype.register = function(a, b, c) {
	this.i.set(DF_M0k(a, b), c)
};

function DF_M3k(a, b, c, d, e) {
	e = void 0 === e ? !1 : e;
	var f, g;
	return DF_Mh(function(h) {
		f = a.i.get(DF_M0k(b, c));
		if (!f) return console.error("DF-MESSENGER", "Call to unknown " + b + " " + c), a.h.presenter.sendClientSideFunctionCallResult({
			tool: b,
			action: c,
			error: (new DF_M1k(b, c)).message
		}), h.return(void 0);
		g = new DF_M_k(b, c, f, d);
		a.g.set(DF_M0k(g.tool, g.action, g.id), g);
		return h.return(g.g.then(function(k) {
			console.debug("DF-MESSENGER", b, c, k);
			e || a.h.presenter.sendClientSideFunctionCallResult({
				tool: b,
				action: c,
				outputParameters: k
			});
			return k
		}).catch(function(k) {
			console.error("DF-MESSENGER", b, c, k);
			e || a.h.presenter.sendClientSideFunctionCallResult({
				tool: b,
				action: c,
				error: k.message
			})
		}).finally(function() {
			a.g.delete(DF_M0k(g.tool, g.action, g.id))
		}))
	})
}

function DF_M4k(a) {
	a.g.forEach(function(b) {
		var c;
		null == (c = b.h) || c.call(b, new DF_MZk)
	});
	a.g.clear()
};

function DF_M5k(a) {
	var b = a.responseId,
		c, d = (null == (c = a.queryResult) ? void 0 : c.allowAnswerFeedback) || !1,
		e, f;
	c = null == (e = a.queryResult) ? void 0 : null == (f = e.currentPage) ? void 0 : f.name;
	var g = "normal",
		h, k;
	if (!(null == (h = a.queryResult) ? 0 : null == (k = h.responseMessages) ? 0 : k.length)) return Object.assign({}, {
		responseId: b,
		mode: g,
		messages: [],
		clientSideFunctionCalls: [],
		allowFeedback: d
	}, c ? {
		currentPageName: c
	} : {});
	e = [];
	f = [];
	a = DF_Md(a.queryResult.responseMessages);
	for (h = a.next(); !h.done; h = a.next()) {
		h = h.value;
		h.text && h.text.text &&
			(k = h.text.text.map(function(m) {
				return DF_MZa(m)
			}), e.push.apply(e, DF_Me(k)));
		if (h.payload && h.payload.richContent) {
			k = void 0;
			var l = (null == (k = h.payload.richContent) ? void 0 : k.map(function(m) {
				return m.filter(DF_M3a).map(function(n) {
					n.id || (n.id = DF_M8i());
					DF_M6k(n) && (g = "blocking");
					return n
				})
			})) || [];
			k = DF_Md(l);
			for (l = k.next(); !l.done; l = k.next()) e.push.apply(e, DF_Me(DF_M_a(l.value)))
		}
		h.toolCall && f.push(h.toolCall)
	}
	return Object.assign({}, {
			responseId: b,
			mode: g,
			messages: e,
			clientSideFunctionCalls: f,
			allowFeedback: d
		},
		c ? {
			currentPageName: c
		} : {})
}

function DF_M6k(a) {
	switch (a.type) {
		case "button":
			return "blocking" === a.mode;
		case "chips":
			return a.options.some(function(b) {
				return "blocking" === b.mode
			});
		default:
			return !1
	}
};

function DF_M7k() {
	this.allowFeedback = !1;
	this.mode = "normal";
	this.languageCode = null;
	this.utteranceId = "utterance-" + DF_M8i()
}

function DF_M8k(a, b, c) {
	return Object.assign({}, {
		utteranceId: a.utteranceId,
		languageCode: a.languageCode,
		mode: a.mode,
		messages: b,
		isBot: c
	}, a.responseId ? {
		responseId: a.responseId
	} : {}, c ? {
		allowFeedback: a.allowFeedback
	} : {})
}

function DF_M9k(a, b) {
	a.languageCode = b;
	return a
};

function DF_M$k(a) {
	this.g = a
}
DF_M$k.prototype.processResponse = function(a) {
	var b = this.h(a),
		c = {
			messages: b.messages
		};
	if (DF_Mn(this.g, "df-response-received", {
			messages: b.messages,
			data: c,
			raw: a
		})) {
		a = Object.assign({}, b, {
			messages: c.messages
		});
		if (0 < a.messages.length) {
			b = new DF_M7k;
			b.responseId = a.responseId;
			b.allowFeedback = a.allowFeedback;
			b.mode = a.mode;
			b = DF_M8k(DF_M9k(b, this.g.languageCode), a.messages, !0);
			this.g.addUtterance(b);
			b = [];
			c = DF_Md(a.messages);
			for (var d = c.next(); !d.done; d = c.next())
				if (d = d.value, "customCard" === d.type) {
					d = DF_Md(d.richElements);
					for (var e = d.next(); !e.done; e = d.next()) e = e.value, "info" === e.type && (e = DF_Mrg(e)) && b.push(e.href)
				} else if ("match_citations" === d.type)
				for (d = DF_Md(d.citations), e = d.next(); !e.done; e = d.next())(e = DF_Mtg(e.value)) && b.push(e.href);
			b.length && DF_Mn(this.g, "df-url-suggested", {
				suggestedUrls: b
			})
		}
		var f;
		(null == (f = a.currentPageName) ? 0 : f.endsWith("END_SESSION")) && DF_Mn(this.g, "df-session-ended", {});
		f = DF_Md(a.clientSideFunctionCalls);
		for (a = f.next(); !a.done; a = f.next()) a = a.value, this.g.callClientSideFunction(a.tool, a.action,
			a.inputParameters || {}, !1)
	}
};

function DF_Mal(a) {
	this.g = a
}
DF_Mf(DF_Mal, DF_M$k);
DF_Mal.prototype.h = function(a) {
	return DF_M5k(a)
};

function DF_Mbl() {
	DF_M$k.apply(this, arguments)
}
DF_Mf(DF_Mbl, DF_M$k);
DF_Mbl.prototype.h = function(a) {
	return {
		messages: a.response ? [DF_MZa(a.response)] : [],
		clientSideFunctionCalls: [],
		responseId: DF_M8i(),
		mode: "normal",
		allowFeedback: !1
	}
};

function DF_Mcl(a) {
	var b;
	return {
		messages: (null == (b = a.predictions) ? void 0 : b.map(function(c) {
			return void 0 !== c.content ? DF_MZa(c.content) : void 0 !== c.bytesBase64Encoded ? {
				type: "customCard",
				richElements: [{
					type: "image",
					rawUrl: "data:" + c.mimeType + ";base64," + c.bytesBase64Encoded
				}]
			} : null
		}).filter(DF_M3a)) || [],
		clientSideFunctionCalls: [],
		responseId: DF_M8i(),
		mode: "normal",
		allowFeedback: !1
	}
};

function DF_Mdl() {
	DF_M$k.apply(this, arguments)
}
DF_Mf(DF_Mdl, DF_M$k);
DF_Mdl.prototype.h = function(a) {
	return DF_Mcl(a)
};

function DF_Mel() {
	this.sessionId = null;
	this.O = [];
	this.F = {};
	this.h = !1;
	this.i = 0;
	this.G = new Set;
	this.L = new Map;
	this.isWaitingForElement = !1;
	this.g = this.accessToken = this.j = this.endUserMetadata = null
}
DF_M = DF_Mel.prototype;
DF_M.storeSessionId = function(a) {
	this.sessionId = a
};
DF_M.storeUtterance = function(a) {
	this.O.push(a)
};
DF_M.storeChatBubbleExpanded = function(a) {
	this.h = a
};
DF_M.storeChatScrollDistance = function(a) {
	this.i = a
};
DF_M.storeMessageClicked = function(a) {
	this.G.add(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
	this.L.set(a, b)
};
DF_M.storeIsWaitingForElement = function(a) {
	this.isWaitingForElement = a
};
DF_M.storeEndUserMetadata = function(a) {
	this.endUserMetadata = a
};
DF_M.storeQueryParameters = function(a) {
	this.F = a
};
DF_M.storeLastResponseInstant = function(a) {
	this.j = a
};
DF_M.storeAccessToken = function(a, b) {
	this.accessToken = a;
	this.g = b
};
DF_M.getEndUserMetadata = function() {
	return null === this.endUserMetadata ? null : Object.assign({}, this.endUserMetadata)
};
DF_M.getLastResponseInstant = function() {
	return this.j
};
DF_M.getSessionId = function() {
	return this.sessionId
};
DF_M.getUtterances = function() {
	return [].concat(DF_Me(this.O))
};
DF_M.isChatBubbleExpanded = function() {
	return this.h
};
DF_M.getChatScrollDistance = function() {
	return this.i
};
DF_M.isMessageClicked = function(a) {
	return this.G.has(a)
};
DF_M.getUtteranceReaction = function(a) {
	return this.L.get(a) || 0
};
DF_M.getIsWaitingForElement = function() {
	return this.isWaitingForElement
};
DF_M.getQueryParameters = function() {
	return this.F
};
DF_M.getAccessToken = function() {
	return !this.accessToken || !this.g || (new Date).getTime() > this.g ? null : this.accessToken
};
DF_M.getAccessTokenExpiration = function() {
	return this.g
};
DF_M.clearMessages = function() {
	this.O = []
};
DF_M.clearLastResponseInstant = function() {
	this.j = null
};
DF_M.clearAccessToken = function() {
	this.g = this.accessToken = null
};
DF_M.clearAll = function() {
	this.sessionId = null;
	this.clearMessages();
	this.endUserMetadata = null;
	this.F = {};
	this.clearLastResponseInstant();
	this.G.clear();
	this.L.clear();
	this.h = this.isWaitingForElement = !1;
	this.i = 0;
	this.clearAccessToken()
};

function DF_Mfl() {}
DF_M = DF_Mfl.prototype;
DF_M.storeSessionId = function(a) {
	DF_Mgl("sessionID", a)
};
DF_M.storeUtterance = function(a) {
	a = JSON.stringify(a);
	var b = DF_Mhl("messages") || "";
	DF_Mgl("messages", b.length ? b + "," + a : a)
};
DF_M.storeChatBubbleExpanded = function(a) {
	DF_Mgl("chatBubbleExpansion", String(a))
};
DF_M.storeChatScrollDistance = function(a) {
	DF_Mgl("chatScrollDistance", String(a))
};
DF_M.storeMessageClicked = function(a) {
	DF_Mgl(a + "-clicked", "true")
};
DF_M.storeUtteranceReaction = function(a, b) {
	DF_Mgl(a + "-reaction", String(b))
};
DF_M.storeIsWaitingForElement = function(a) {
	DF_Mgl("isWaitingForElement", String(a))
};
DF_M.storeEndUserMetadata = function(a) {
	DF_Mgl("endUserMetadata", JSON.stringify(a))
};
DF_M.storeQueryParameters = function(a) {
	DF_Mgl("queryParameters", JSON.stringify(a))
};
DF_M.storeLastResponseInstant = function(a) {
	DF_Mgl("lastResponseInstant", String(a))
};
DF_M.storeAccessToken = function(a, b) {
	DF_Mgl("accessToken", a);
	DF_Mgl("accessTokenExpiration", String(b))
};

function DF_Mgl(a, b) {
	console.debug("DF-MESSENGER", "SessionStorage", "setItem", a, null === b ? null : 24 > b.length ? b : b.substring(0, 24) + "...");
	try {
		window.sessionStorage.setItem("df-messenger-" + a, b)
	} catch (c) {
		console.error("DF-MESSENGER", "SessionStorage", "setItem", c)
	}
}
DF_M.getEndUserMetadata = function() {
	try {
		var a = DF_Mhl("endUserMetadata");
		if (a) return JSON.parse(a)
	} catch (b) {
		console.error("DF-MESSENGER", "SessionStorage", "getEndUserMetadata", b)
	}
	return null
};
DF_M.getQueryParameters = function() {
	try {
		var a = DF_Mhl("queryParameters");
		if (a) return JSON.parse(a)
	} catch (b) {
		console.error("DF-MESSENGER", "SessionStorage", "getQueryParameters", b)
	}
	return {}
};
DF_M.getLastResponseInstant = function() {
	var a = DF_Mhl("lastResponseInstant");
	return a ? Number(a) : null
};
DF_M.getSessionId = function() {
	return DF_Mhl("sessionID")
};
DF_M.getUtterances = function() {
	try {
		var a = DF_Mhl("messages");
		if (a) return JSON.parse("[" + a + "]")
	} catch (b) {
		console.error("DF-MESSENGER", "SessionStorage", "getStoredMessages", b)
	}
	return []
};
DF_M.isChatBubbleExpanded = function() {
	var a = DF_Mhl("chatBubbleExpansion");
	return !!a && "true" === a
};
DF_M.getChatScrollDistance = function() {
	var a = DF_Mhl("chatScrollDistance");
	return a ? Number(a) : 0
};
DF_M.isMessageClicked = function(a) {
	a = DF_Mhl(a + "-clicked");
	return !!a && "true" === a
};
DF_M.getUtteranceReaction = function(a) {
	return (a = DF_Mhl(a + "-reaction")) ? Number(a) : 0
};
DF_M.getIsWaitingForElement = function() {
	return "true" === DF_Mhl("isWaitingForElement")
};
DF_M.getAccessToken = function() {
	var a = DF_Mhl("accessToken"),
		b = this.getAccessTokenExpiration();
	return !a || !b || (new Date).getTime() > Number(b) ? null : a
};
DF_M.getAccessTokenExpiration = function() {
	var a = DF_Mhl("accessTokenExpiration");
	return a ? Number(a) : null
};

function DF_Mhl(a) {
	var b = null;
	try {
		b = window.sessionStorage.getItem("df-messenger-" + a), console.debug("DF-MESSENGER", "SessionStorage", "getItem", a, null === b ? null : 24 > b.length ? b : b.substring(0, 24) + "...")
	} catch (c) {
		console.error("DF-MESSENGER", "SessionStorage", "getItem", a, c)
	}
	return b
}
DF_M.clearMessages = function() {
	DF_Mil("messages")
};
DF_M.clearLastResponseInstant = function() {
	DF_Mil("lastResponseInstant")
};
DF_M.clearAccessToken = function() {
	DF_Mil("accessToken");
	DF_Mil("accessTokenExpiration")
};

function DF_Mil(a) {
	console.debug("DF-MESSENGER", "SessionStorage", "removeItem", a);
	window.sessionStorage.removeItem("df-messenger-" + a)
}
DF_M.clearAll = function() {
	console.debug("DF-MESSENGER", "SessionStorage", "clear");
	for (var a = [], b = 0; b < window.sessionStorage.length; ++b) {
		var c = void 0,
			d = null != (c = window.sessionStorage.key(b)) ? c : "";
		d.startsWith("df-messenger") && a.push(d)
	}
	a.forEach(function(e) {
		return void window.sessionStorage.removeItem(e)
	})
};

function DF_Mjl(a) {
	this.g = a;
	this.F = !1;
	this.G = 0;
	a: switch (this.g.storageOption) {
		case "none":
			a = new DF_Mel;
			break a;
		default:
			a = new DF_Mfl
	}
	this.h = a;
	this.j = new DF_Mzk(this.g, this.h);
	this.i = new DF_MXk(this.g);
	this.L = new DF_M2k(this.g)
}
DF_M = DF_Mjl.prototype;
DF_M.triggerWelcomeIntent = function(a) {
	var b = this;
	return DF_Mh(function(c) {
		if (1 == c.g) {
			if (!b.F) return c.return(!1);
			console.debug("DF-MESSENGER", "trigger welcome intent");
			b.F = !1;
			return DF_Mg(c, b.sendDialogflowRequest(DF_MLd(a, b.g.languageCode)), 2)
		}
		return c.return(!0)
	})
};
DF_M.restoreSessionTimeout = function(a) {
	var b = this,
		c = this.h.getLastResponseInstant();
	c && (a -= (new Date).getTime() - c, 0 >= a ? DF_Mkl(this) : this.G = window.setTimeout(function() {
		return void DF_Mkl(b)
	}, a))
};
DF_M.requestAuthentication = function() {
	return this.j.requestAuthentication()
};
DF_M.storeEndUserMetadata = function(a) {
	this.h.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
	this.h.storeQueryParameters(a)
};
DF_M.storeNewSessionId = function(a) {
	this.F = !0;
	DF_Mll(this);
	this.h.storeSessionId(a)
};
DF_M.storeUtterance = function(a) {
	this.h.storeUtterance(a)
};
DF_M.storeMessageClicked = function(a) {
	this.h.storeMessageClicked(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
	this.h.storeUtteranceReaction(a, b)
};
DF_M.storeChatBubbleExpanded = function(a) {
	this.h.storeChatBubbleExpanded(a)
};
DF_M.storeChatScrollDistance = function(a) {
	this.h.storeChatScrollDistance(a)
};
DF_M.storeIsWaitingForElement = function(a) {
	this.h.storeIsWaitingForElement(a)
};
DF_M.storeLastResponseInstant = function(a) {
	this.h.storeLastResponseInstant(a)
};
DF_M.getIsWaitingForElement = function() {
	return this.h.getIsWaitingForElement()
};
DF_M.getSessionId = function() {
	return this.h.getSessionId()
};
DF_M.getUtterances = function() {
	var a = this;
	return this.h.getUtterances().reduce(function(b, c) {
		c.messages = DF_Mml(a, c.messages, c.utteranceId);
		0 < c.messages.length && b.push(c);
		return b
	}, [])
};
DF_M.getQueryParameters = function() {
	return this.h.getQueryParameters()
};
DF_M.registerClientSideFunction = function(a, b, c) {
	this.L.register(a, b, c)
};
DF_M.callClientSideFunction = function(a, b, c, d) {
	d = void 0 === d ? !1 : d;
	var e = this;
	return DF_Mh(function(f) {
		return f.return(DF_M3k(e.L, a, b, c, d))
	})
};
DF_M.abandonClientSideFunctionCalls = function() {
	DF_M4k(this.L)
};

function DF_Mml(a, b, c) {
	return b.filter(function(d) {
		return "chips" === d.type ? !a.h.isMessageClicked("chips-" + c + "-" + d.id) : !0
	})
}
DF_M.isChatBubbleExpanded = function() {
	return this.h.isChatBubbleExpanded()
};
DF_M.getChatScrollDistance = function() {
	return this.h.getChatScrollDistance()
};
DF_M.getUtteranceReaction = function(a) {
	return this.h.getUtteranceReaction(a)
};
DF_M.restoreAccessToken = function() {
	return this.j.restoreAccessToken()
};
DF_M.clearStorage = function() {
	this.h.clearAll();
	this.clearAuthentication()
};
DF_M.clearAuthentication = function() {
	this.j.clearAccessToken()
};
DF_M.sendQuery = function(a) {
	var b;
	switch (null == (b = DF_Mnk(this.g.service)) ? void 0 : b.name) {
		case "dialogflow":
			return this.sendDialogflowRequest({
				text: {
					text: a
				},
				languageCode: this.g.languageCode || ""
			});
		case "aiplatform:predict":
			return DF_Mnl(this, a);
		case "aiplatform:extension-controller":
			return DF_Mol(this, a);
		default:
			return Promise.reject("Unsupported service: " + this.g.service)
	}
};
DF_M.sendClientSideFunctionCallResult = function(a) {
	var b;
	switch (null == (b = DF_Mnk(this.g.service)) ? void 0 : b.name) {
		case "dialogflow":
			return this.sendDialogflowRequest(DF_MMd(a, this.g.languageCode));
		default:
			return Promise.reject("Unsupported service: " + this.g.service)
	}
};
DF_M.sendDialogflowRequest = function(a) {
	var b = this,
		c, d;
	return DF_Mh(function(e) {
		c = new DF_Mal(b.g);
		d = b;
		return e.return(new Promise(function(f, g) {
			DF_MYk(b.i, DF_Mpl(d, a), {
				message: function(h) {
					c.processResponse(h)
				},
				error: function(h) {
					g(h)
				},
				complete: function() {
					DF_Mql(d);
					f()
				}
			})
		}))
	})
};

function DF_Mpl(a, b) {
	var c = a.getQueryParameters(),
		d = a.h.getEndUserMetadata();
	b = {
		queryInput: b
	};
	c.channel = "DF_MESSENGER";
	a.g.alternativeLanguageCodes && (b.queryInput.alternativeLanguageCodes = a.g.alternativeLanguageCodes);
	d && (c.endUserMetadata = d);
	a.g.sessionTtl && (86400 <= a.g.sessionTtl && console.warn("DF-MESSENGER", "session-ttl must be strictly less than 86400 seconds"), c.sessionTtl = a.g.sessionTtl + "s");
	0 < Object.keys(c).length && (b.queryParams = c);
	return b
}

function DF_Mnl(a, b) {
	var c;
	return DF_Mh(function(d) {
		if (1 == d.g) {
			var e = a.i;
			var f = {
				instances: [{
					prompt: b
				}],
				parameters: {
					temperature: .2,
					maxOutputTokens: 1024,
					topP: .8,
					topK: 40,
					candidateCount: 1,
					sampleCount: 1
				}
			};
			f = e.g.postData ? Object.assign({}, f, JSON.parse(e.g.postData)) : f;
			e = e.G.query(f);
			return DF_Mg(d, e, 2)
		}
		c = d.h;
		(new DF_Mdl(a.g)).processResponse(c);
		d.g = 0
	})
}

function DF_Mol(a, b) {
	var c;
	return DF_Mh(function(d) {
		if (1 == d.g) {
			var e = a.i;
			var f = {
				query: {
					query: b
				},
				experimentalFeatures: {
					useFlowReact: !0
				}
			};
			f = e.g.postData ? Object.assign({}, f, JSON.parse(e.g.postData)) : f;
			e = e.j.query(f);
			return DF_Mg(d, e, 2)
		}
		c = d.h;
		(new DF_Mbl(a.g)).processResponse(c);
		d.g = 0
	})
}

function DF_Mkl(a) {
	DF_Mll(a);
	console.debug("DF-MESSENGER", "session timed out!");
	DF_Mn(a.g, "df-session-expired", {})
}

function DF_Mql(a) {
	DF_Mll(a);
	a.G = window.setTimeout(function() {
		return void DF_Mkl(a)
	}, 1E3 * (a.g.sessionTtl || 1800));
	a.h.storeLastResponseInstant((new Date).getTime())
}

function DF_Mll(a) {
	window.clearTimeout(a.G);
	a.G = 0;
	a.h.clearLastResponseInstant()
}
DF_M.sendFeedback = function(a) {
	return this.i.sendFeedback(a)
};
DF_M.uploadFile = function(a) {
	var b = this,
		c, d, e, f, g, h;
	return DF_Mh(function(k) {
		if (1 == k.g) {
			if (!b.g.gcsUpload) return k.return();
			c = b.g.sessionId + "/" + DF_M8i() + "_" + a.name;
			d = b.g.gcsUpload + "/" + c;
			return DF_Mg(k, b.i.uploadFile(a, c), 2)
		}
		e = b.getQueryParameters();
		e.parameters ? e.parameters.files || (e.parameters.files = []) : e.parameters = {
			files: []
		};
		e.parameters.files.push(d);
		b.setQueryParameters(e);
		f = (b.g.isAuthenticationRequired ? "https://storage.mtls.cloud.google.com/" : "https://storage.googleapis.com/") + d;
		g = DF_Mn(b.g,
			"df-file-upload-completed", {
				file: a,
				gcsPath: d,
				actionLink: f
			});
		if (!g) return k.return();
		h = {
			type: "files",
			files: [{
				name: a.name,
				anchor: {
					href: f
				},
				image: {
					rawUrl: "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/cloud_download/default/24px.svg"
				}
			}]
		};
		b.g.renderCustomCard([h]);
		k.g = 0
	})
};
DF_M.createAudioRecorder = function() {
	return new DF_Mok
};
DF_M.getStorageHandler = function() {
	return this.h
};
DF_M.getAuthProvider = function() {
	return this.j
};
var DF_Mrl = DF_Mc([' <link\n        rel="stylesheet"\n        href="https://fonts.googleapis.com/icon?family=Material+Icons" />\n      <link\n        rel="stylesheet"\n        href="https://fonts.googleapis.com/css?family=Google+Sans" />\n      <style>\n        :root {\n          --df-messenger-default-font-family: \'Google Sans\', \'Helvetica Neue\',\n            sans-serif;\n          --df-messenger-default-font-size: 14px;\n          --df-messenger-default-font-color: #1f1f1f;\n          --df-messenger-default-secondary-font-color: #757575;\n          --df-messenger-default-icon-font-color: #444746;\n          --df-messenger-default-primary-color: #0b57d0;\n          --df-messenger-default-link-font-color: #0b57d0;\n          --df-messenger-default-link-decoration: underline;\n          --df-messenger-default-focus-color: #1e88e5;\n          --df-messenger-default-focus-color-contrast: #fff;\n          --df-messenger-default-border-color: #e0e0e0;\n          --df-messenger-default-border: 1px solid\n            var(--df-messenger-default-border-color);\n          --df-messenger-default-border-radius: 8px;\n          --df-messenger-default-chat-border-radius: 0;\n          --df-messenger-default-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);\n        }\n      </style>']);
var DF_Msl = DF_Mc([' <div class="chat-bubble-default-wrapper">\n      <df-messenger-chat-bubble\n        .chatTitle=', "></df-messenger-chat-bubble>\n    </div>"]),
	DF_Mtl = DF_Mc(["<style>\n      :host {\n        --df-messenger-demo-banner: block;\n      }\n    </style>"]),
	DF_Mul = DF_Mc(['\n      <div class="wrapper">\n        ', " ", "\n        <slot @slotchange=", "></slot>\n      </div>\n    "]);

function DF_M7() {
	var a = DF_My.call(this) || this;
	a.service = null;
	a.apiUri = null;
	a.postData = null;
	a.oauthClientId = null;
	a.authSettings = null;
	a.projectId = null;
	a.agentId = null;
	a.qb = null;
	a.g = null;
	a.allowFeedback = null;
	a.chatTitle = null;
	a.welcomeIntent = null;
	a.gcsUpload = null;
	a.sessionId = null;
	a.Mb = null;
	a.location = null;
	a.environment = null;
	a.urlAllowlist = null;
	a.sessionTtl = null;
	a.maxQueryLength = 256;
	a.botWriting = !1;
	a.Ra = !1;
	a.bb = !1;
	a.isAuthenticationPending = !1;
	a.Gc = a;
	a.F = new Map;
	a.debug = new DF_M7e;
	a.Lb = !1;
	a.addUtterance =
		a.addUtterance.bind(a);
	return a
}
DF_Mf(DF_M7, DF_My);
DF_M7.D = DF_My.D;
DF_M7.o = DF_My.o;
DF_M7.s = DF_My.s;
DF_M7.h = DF_My.h;
DF_M7.g = DF_My.g;
DF_M7.C = DF_My.C;
DF_M7.i = DF_My.i;
DF_M7.u = DF_My.u;
DF_M7.l = DF_My.l;
DF_M7.v = DF_My.v;
DF_M = DF_M7.prototype;
DF_M.connectedCallback = function() {
	var a = this,
		b = DF_Mvl(this);
	0 < b.length && console.error("DF-MESSENGER", "df-messenger", "The widget is missing the following attributes", b);
	this.presenter = new DF_Mjl(this);
	this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired;
	DF_Mwl(this);
	this.isAuthenticationPending && this.presenter.restoreAccessToken();
	this.Ra = this.presenter.getIsWaitingForElement();
	DF_MEd(DF_Mw(DF_Mrl), document.head, {
		kb: document.head.querySelector("link,style")
	});
	this.addEventListener("df-register-message-consumer",
		function(c) {
			c.stopPropagation();
			c = c.detail.consumer;
			a.F.set(c.consumerId, c);
			var d = a.presenter.getUtterances();
			0 < d.length && c.addMessages(d)
		});
	DF_My.prototype.connectedCallback.call(this)
};
DF_M.xa = function(a) {
	var b = this;
	DF_Mn(this, "df-messenger-loaded", {});
	DF_My.prototype.xa.call(this, a);
	this.presenter.restoreSessionTimeout(1E3 * (this.sessionTtl || 1800));
	setTimeout(function() {
		b.Lb = !0
	}, 1)
};
DF_M.getMessageConsumers = function() {
	return [].concat(DF_Me(this.F.values()))
};
DF_M.renderCustomText = function(a, b) {
	b = void 0 === b ? !0 : b;
	a = DF_MZa(a);
	b = DF_M8k(DF_M9k(new DF_M7k, this.languageCode), [a], b);
	this.addUtterance(b)
};
DF_M.renderCustomCard = function(a) {
	a = DF_M_a(a);
	a = DF_M8k(DF_M9k(new DF_M7k, this.languageCode), a, !0);
	this.addUtterance(a)
};
DF_M.registerClientSideFunction = function(a, b, c) {
	this.presenter.registerClientSideFunction(a, b, c)
};
DF_M.callClientSideFunction = function(a, b, c, d) {
	var e = this;
	this.bb = !0;
	return this.presenter.callClientSideFunction(a, b, c, void 0 === d ? !1 : d).finally(function() {
		return e.bb = !1
	})
};
DF_M.setContext = function(a) {
	this.presenter.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
	this.presenter.setQueryParameters(a)
};
DF_M.clearStorage = function() {
	this.presenter.clearStorage();
	this.bb = this.Ra = !1;
	this.F.forEach(function(a) {
		return void a.clearMessages()
	})
};
DF_M.clearAuthentication = function() {
	this.presenter.clearAuthentication()
};
DF_M.startNewSession = function(a) {
	(null == a ? 0 : a.retainHistory) || this.clearStorage();
	DF_Mxl(this);
	this.welcomeIntent && !this.isAuthenticationPending && this.presenter.triggerWelcomeIntent(this.welcomeIntent)
};
DF_M.sendQuery = function(a) {
	var b = this;
	return DF_Mh(function(c) {
		return DF_Mg(c, b.sendRequest("query", a), 0)
	})
};
DF_M.sendRequest = function(a) {
	var b = DF_Mi.apply(1, arguments),
		c = this;
	return DF_Mh(function(d) {
		return DF_Mg(d, DF_MNd.apply(null, [c, a].concat(DF_Me(b))), 0)
	})
};
DF_M.requestAuthentication = function() {
	var a = this;
	return DF_Mh(function(b) {
		1 == b.g ? b = DF_Mg(b, a.presenter.requestAuthentication(), 2) : a.welcomeIntent ? b = DF_Mg(b, a.presenter.triggerWelcomeIntent(a.welcomeIntent), 0) : (b.g = 0, b = void 0);
		return b
	})
};
DF_M.reactionsAllowed = function() {
	return "all" === this.allowFeedback
};
DF_M.addUtterance = function(a) {
	"blocking" === a.mode && (this.isWaitingForElement = !0);
	this.presenter.storeUtterance(a);
	this.F.forEach(function(b) {
		return void b.addMessages([a])
	})
};
DF_M.abandonClientSideFunctionCalls = function() {
	this.presenter.abandonClientSideFunctionCalls()
};
DF_M.unregisterMessageConsumer = function(a) {
	this.F.delete(a.consumerId)
};
DF_M.registerFakeBackendService = function(a) {
	if (this.agentId) return console.error("DF-MESSENGER", "df-messenger", "Cannot register fake backend service is agent-id is specified."), !1;
	this.qc = a;
	return !0
};

function DF_Mvl(a) {
	var b = [];
	a.projectId || b.push("project-id");
	switch (DF_Mnk(a.service).name) {
		case "dialogflow":
			a.agentId || b.push("agent-id");
			a.languageCode || (console.debug("DF-MESSENGER", "df-messenger", "using en language code"), a.languageCode = "en");
			a.location || (console.debug("DF-MESSENGER", "df-messenger", "using global location"), a.location = "global");
			break;
		case "aiplatform:predict":
			a.location || b.push("location");
			break;
		default:
			console.error("DF-MESSENGER", "df-messenger", "invalid service parameter " +
				a.service)
	}
	return b
}

function DF_Mwl(a) {
	if (!a.sessionId) {
		var b = a.presenter.getSessionId();
		b ? (a.sessionId = b, DF_Mn(a, "df-session-id-set", {
			sessionId: a.sessionId,
			isNew: !1
		})) : DF_Mxl(a)
	}
}

function DF_Mxl(a) {
	a.sessionId = "dfMessenger-" + DF_M8i();
	a.presenter.storeNewSessionId(a.sessionId);
	DF_Mn(a, "df-session-id-set", {
		sessionId: a.sessionId,
		isNew: !0
	})
}
DF_M.Cd = function() {
	DF_MPa(this)
};
DF_M.render = function() {
	return DF_Mw(DF_Mul, this.fakeBackendService ? DF_Mw(DF_Mtl) : null, !this.Lb || this.M ? null : DF_Mw(DF_Msl, this.chatTitle), this.Cd)
};
DF_Ma.Object.defineProperties(DF_M7.prototype, {
	languageCode: {
		configurable: !0,
		enumerable: !0,
		set: function(a) {
			if (a) {
				this.g = a.split(",").map(function(c) {
					return c.trim()
				});
				var b;
				this.qb = null != (b = this.g[0]) ? b : null
			} else this.qb = this.g = null
		},
		get: function() {
			return this.qb
		}
	},
	alternativeLanguageCodes: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return !this.g || 1 >= this.g.length ? null : this.g
		}
	},
	accessToken: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.Mb
		},
		set: function(a) {
			this.Mb = a;
			this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired
		}
	},
	storageOption: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.getAttribute("storage-option")
		}
	},
	enableCodeHighlight: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.hasAttribute("enable-code-highlight")
		}
	},
	isWaitingForElement: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return this.Ra
		},
		set: function(a) {
			this.Ra = a;
			this.presenter.storeIsWaitingForElement(a)
		}
	},
	isAuthenticationRequired: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return !!this.oauthClientId ||
				!!this.authSettings
		}
	},
	assignedNodes: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a;
			return null == (a = this.T.querySelector("slot")) ? void 0 : a.assignedNodes()
		}
	},
	M: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			var a;
			return null == (a = this.assignedNodes) ? void 0 : a.some(function(b) {
				if (b.nodeType === Node.TEXT_NODE) {
					var c;
					return 0 < (null != (c = b.textContent) ? c : "").trim().length
				}
				return !0
			})
		}
	},
	fakeBackendService: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			if (!this.agentId) return this.qc
		}
	}
});
var DF_M8 = DF_M7;
DF_M8.j = [DF_MKd, DF_MA];
DF_Mk([DF_Mt({
	m: "service",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "service", void 0);
DF_Mk([DF_Mt({
	m: "api-uri",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "apiUri", void 0);
DF_Mk([DF_Mt({
	m: "post-data",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "postData", void 0);
DF_Mk([DF_Mt({
	m: "oauth-client-id",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "oauthClientId", void 0);
DF_Mk([DF_Mt({
	m: "auth",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "authSettings", void 0);
DF_Mk([DF_Mt({
	m: "project-id",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "projectId", void 0);
DF_Mk([DF_Mt({
	m: "agent-id",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "agentId", void 0);
DF_Mk([DF_Mt({
	m: "language-code",
	type: String,
	K: !0
}), DF_Ml("design:type", Object), DF_Ml("design:paramtypes", [Object])], DF_M8.prototype, "languageCode", null);
DF_Mk([DF_MVa({
	context: "df-languagecode"
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "qb", void 0);
DF_Mk([DF_Mt({
	m: "allow-feedback",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "allowFeedback", void 0);
DF_Mk([DF_Mt({
	m: "chat-title",
	type: String
}), DF_Ml("design:type", Object)], DF_M8.prototype, "chatTitle", void 0);
DF_Mk([DF_Mt({
	m: "intent",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "welcomeIntent", void 0);
DF_Mk([DF_Mt({
	m: "gcs-upload",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "gcsUpload", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "sessionId", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "Mb", void 0);
DF_Mk([DF_Mt({
	m: "location",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "location", void 0);
DF_Mk([DF_Mt({
	m: "environment",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "environment", void 0);
DF_Mk([DF_Mt({
	m: "url-allowlist",
	type: String,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "urlAllowlist", void 0);
DF_Mk([DF_Mt({
	m: "session-ttl",
	type: Number,
	K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "sessionTtl", void 0);
DF_Mk([DF_Mt({
	m: "max-query-length",
	type: Number,
	K: !0
}), DF_Ml("design:type", Number)], DF_M8.prototype, "maxQueryLength", void 0);
DF_Mk([DF_MVa({
	context: "df-botwriting"
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "botWriting", void 0);
DF_Mk([DF_MVa({
	context: "df-iswaitingforelement"
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "Ra", void 0);
DF_Mk([DF_MVa({
	context: "df-executingclientsidefunction"
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "bb", void 0);
DF_Mk([DF_MVa({
	context: "df-authenticationpending"
}), DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "isAuthenticationPending", void 0);
DF_Mk([DF_MVa({
	context: "df-instance"
}), DF_Ml("design:type", Object)], DF_M8.prototype, "Gc", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "qc", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_M8.prototype, "Lb", void 0);
DF_M8 = DF_Mk([DF_Mq("df-messenger"), DF_Ml("design:paramtypes", [])], DF_M8);

function DF_Myl(a, b, c) {
	var d, e, f, g, h, k, l, m, n;
	return DF_Mh(function(p) {
		switch (p.g) {
			case 1:
				return DF_Mg(p, DF_Mzl(a), 2);
			case 2:
				return d = p.h, e = "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=" + b, f = {
					audio: {
						content: d
					},
					config: {
						encoding: 0,
						sampleRateHertz: 48E3,
						languageCode: c,
						model: "latest_short"
					}
				}, DF_Mg(p, fetch(e, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(f)
				}), 3);
			case 3:
				return g = p.h, g.ok ? DF_Mg(p, g.text(), 4) : (console.error("DF-MESSENGER", "Speech-to-Text error",
					g), p.return(void 0));
			case 4:
				return h = p.h, k = JSON.parse(h), console.debug("DF-MESSENGER", "Speech-to-Text result", k), (n = null == (l = k.results[0]) ? void 0 : null == (m = l.alternatives[0]) ? void 0 : m.transcript) || console.error("DF-MESSENGER", "Speech-to-Text returned no transcript"), p.return(n)
		}
	})
}

function DF_MAl(a, b) {
	var c, d, e, f, g;
	return DF_Mh(function(h) {
		if (1 == h.g) {
			c = document.querySelector("df-messenger");
			var k = null == (d = c) ? void 0 : d.languageCode;
			return DF_Mg(h, DF_Myl(a, b, k && "en" !== k ? k : "en-US"), 2)
		}
		e = h.h;
		if (!e) return h.return();
		null == (f = c) || f.renderCustomText(e, !1);
		return DF_Mg(h, null == (g = c) ? void 0 : g.sendQuery(e), 0)
	})
}

function DF_MBl(a, b) {
	var c, d, e, f, g, h;
	return DF_Mh(function(k) {
		if (1 == k.g) return DF_Mg(k, DF_Mzl(a), 2);
		c = k.h;
		d = document.querySelector("df-messenger");
		if (null == (e = b) ? 0 : e.temporaryMessage) null == (f = d) || f.renderCustomText(b.temporaryMessage, !1);
		null == (g = d) || g.addEventListener("df-response-received", function(l) {
			l = l.detail.raw;
			var m = d.getMessageConsumers();
			if (1 === m.length) {
				var n;
				var p = null == (n = m[0].getRenderedMessages().at(-1)) ? void 0 : n.elements.at(-1)
			}
			var q;
			n = null == (q = l.queryResult) ? void 0 : q.transcript;
			p instanceof
			DF_Mpg && !1 === p.isBot ? p.text = n || "" : n && d.renderCustomText(n, !1)
		}, {
			once: !0
		});
		return DF_Mg(k, null == (h = d) ? void 0 : h.sendRequest("audio", c), 0)
	})
}

function DF_Mzl(a) {
	return new Promise(function(b, c) {
		var d = new FileReader;
		d.onload = function() {
			b(d.result.split(",")[1])
		};
		d.onerror = function() {
			c()
		};
		d.readAsDataURL(a)
	})
}

function DF_MCl(a) {
	window.addEventListener("df-audio-input-recorded", function(b) {
		var c, d;
		return DF_Mh(function(e) {
			null == (c = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) || c.setInput("");
			d = b.detail;
			return DF_Mg(e, DF_MAl(d.data, a.apiKey), 0)
		})
	})
}

function DF_MDl(a) {
	window.addEventListener("df-user-input-entered", function(b) {
		var c;
		return DF_Mh(function(d) {
			c = b.detail;
			return c.audio ? DF_Mg(d, DF_MAl(c.audio, a.apiKey), 0) : d.return()
		})
	})
}

function DF_MEl(a) {
	window.addEventListener("df-audio-input-recorded", function(b) {
		var c, d;
		return DF_Mh(function(e) {
			null == (c = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) || c.setInput("");
			d = b.detail;
			return DF_Mg(e, DF_MBl(d.data, a), 0)
		})
	})
}

function DF_MFl(a) {
	window.addEventListener("df-user-input-entered", function(b) {
		var c;
		return DF_Mh(function(d) {
			c = b.detail;
			return c.audio ? DF_Mg(d, DF_MBl(c.audio, a), 0) : d.return()
		})
	})
};
var DF_MGl = DF_Mr([".title-button{margin:0;padding:12px;background:var(--df-messenger-titlebar-button-background,transparent);border:var(--df-messenger-titlebar-button-border,none);border-radius:var(--df-messenger-titlebar-button-border-radius,999px);cursor:pointer;color:var(--df-messenger-titlebar-button-color,var(--df-messenger-titlebar-font-color,#fff));transition:background-color .3s}.title-button:hover{background:var(--df-messenger-titlebar-button-background-hover,rgba(200,220,252,.08));color:var(--df-messenger-titlebar-button-color-hover,var(--df-messenger-titlebar-font-color,#fff));transition:background-color .3s}.title-button.inactive{color:var(--df-messenger-titlebar-button-color-inactive,#757575)}.title-button.inactive:not(:hover){background:var(--df-messenger-titlebar-button-background-inactive,transparent)}.title-button.active{color:var(--df-messenger-titlebar-button-color-active,var(--df-messenger-titlebar-button-color,var(--df-messenger-titlebar-font-color,#fff)))}.title-button.active:not(:hover){background:var(--df-messenger-titlebar-button-background-active,transparent)}"]);
var DF_MHl = DF_Mc(['\n      <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <button\n        class="title-button"\n        @click=', "\n        title=", '>\n        <span class="material-icons">restart_alt</span>\n      </button>\n    ']);

function DF_M9() {
	return DF_My.apply(this, arguments) || this
}
DF_Mf(DF_M9, DF_My);
DF_M9.D = DF_My.D;
DF_M9.o = DF_My.o;
DF_M9.s = DF_My.s;
DF_M9.h = DF_My.h;
DF_M9.g = DF_My.g;
DF_M9.C = DF_My.C;
DF_M9.i = DF_My.i;
DF_M9.u = DF_My.u;
DF_M9.l = DF_My.l;
DF_M9.v = DF_My.v;
DF_M9.prototype.render = function() {
	return DF_Mw(DF_MHl, this.g, this.titleText || DF_Mx)
};
DF_M9.prototype.g = function() {
	var a;
	null == (a = this.parent) || a.startNewSession()
};
DF_Ma.Object.defineProperties(DF_M9.prototype, {
	parent: {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return document.querySelector("df-messenger")
		}
	}
});
var DF_MIl = DF_M9;
DF_MIl.j = [DF_MGl];
DF_Mk([DF_Mt({
	m: "title-text",
	type: String
}), DF_Ml("design:type", String)], DF_MIl.prototype, "titleText", void 0);
DF_MIl = DF_Mk([DF_Mq("df-reset-session-button")], DF_MIl);
var DF_MJl = DF_Mc(['\n      <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <button\n        class="title-button ', '"\n        @click=', "\n        title=", '>\n        <span class="material-icons">graphic_eq</span>\n      </button>\n    ']);

function DF_M$() {
	var a = DF_My.apply(this, arguments) || this;
	a.active = !1;
	return a
}
DF_Mf(DF_M$, DF_My);
DF_M$.D = DF_My.D;
DF_M$.o = DF_My.o;
DF_M$.s = DF_My.s;
DF_M$.h = DF_My.h;
DF_M$.g = DF_My.g;
DF_M$.C = DF_My.C;
DF_M$.i = DF_My.i;
DF_M$.u = DF_My.u;
DF_M$.l = DF_My.l;
DF_M$.v = DF_My.v;
DF_M$.prototype.connectedCallback = function() {
	var a = this;
	DF_My.prototype.connectedCallback.call(this);
	window.addEventListener("df-request-sent", function(b) {
		a.active && (b.detail.data.requestBody.outputAudioConfig = Object.assign({}, {
			audioEncoding: 3,
			sampleRateHertz: 48E3
		}, a.voice ? {
			synthesizeSpeechConfig: {
				voice: {
					name: a.voice
				}
			}
		} : {}, {
			useAgentSettings: !0
		}))
	});
	window.addEventListener("df-response-received", function(b) {
		a.active && (b = b.detail.raw, b.outputAudio && (new Audio("data:audio/ogg;base64," + b.outputAudio)).play())
	})
};
DF_M$.prototype.render = function() {
	var a;
	var b = null != (a = this.active ? this.titleTextActive : this.titleTextInactive) ? a : this.titleText;
	return DF_Mw(DF_MJl, this.active ? "active" : "inactive", this.g, b || DF_Mx)
};
DF_M$.prototype.g = function() {
	this.active = !this.active
};
var DF_MKl = DF_M$;
DF_MKl.j = [DF_MGl];
DF_Mk([DF_Mt({
	m: "title-text",
	type: String
}), DF_Ml("design:type", String)], DF_MKl.prototype, "titleText", void 0);
DF_Mk([DF_Mt({
	m: "title-text-active",
	type: String
}), DF_Ml("design:type", String)], DF_MKl.prototype, "titleTextActive", void 0);
DF_Mk([DF_Mt({
	m: "title-text-inactive",
	type: String
}), DF_Ml("design:type", String)], DF_MKl.prototype, "titleTextInactive", void 0);
DF_Mk([DF_Mt({
	m: "voice",
	type: String
}), DF_Ml("design:type", String)], DF_MKl.prototype, "voice", void 0);
DF_Mk([DF_Mu(), DF_Ml("design:type", Object)], DF_MKl.prototype, "active", void 0);
DF_MKl = DF_Mk([DF_Mq("df-tts-button")], DF_MKl);
var DF_MLl = new Set(["image/gif", "image/jpeg", "image/png"]);

function DF_MMl(a, b) {
	var c = document.querySelector("df-messenger");
	if (!c) return !1;
	if (((null == b ? 0 : b.imageTypes) ? new Set(b.imageTypes) : DF_MLl).has(a.file.type)) {
		if (null == b ? 0 : b.convertToBase64) {
			var d = new FileReader;
			d.onload = function() {
				c.renderCustomCard([{
					type: "image",
					rawUrl: d.result
				}])
			};
			d.onerror = function(e) {
				console.error("DF-MESSENGER", "Failed reading file", e)
			};
			d.readAsDataURL(a.file);
			return !0
		}
		if (!a.actionLink || c.oauthClientId || c.authSettings) return !1;
		c.renderCustomCard([{
			type: "image",
			rawUrl: a.actionLink
		}]);
		return !0
	}
	return !1
}

function DF_MNl(a) {
	window.addEventListener("df-file-upload-completed", function(b) {
		DF_MMl(b.detail, a) && b.preventDefault()
	})
};

function DF_MOl(a) {
	return "text" === a.type
}

function DF_MPl() {
	window.addEventListener("df-response-received", function(a) {
		a.detail.data.messages.filter(DF_MOl).forEach(function(b) {
			for (var c = b.text.split("\n"), d = [], e = 0; e < c.length; ++e) {
				var f = c[e],
					g = 0 === e ? void 0 : c[e - 1],
					h = e === c.length - 1 ? void 0 : c[e + 1],
					k = void 0;
				var l = f.trim();
				var m = null == (k = h) ? void 0 : k.trim();
				if (m) {
					k = /^(\s*-*\s*\|)+\s*-*$/;
					var n = /^\|(.*?\|)+$/,
						p = /^\|(\s*-*\s*\|)+$/;
					l = /^(.*?\|)+.*?$/.test(l) && k.test(m) || n.test(l) && p.test(m)
				} else l = !1;
				l ? void 0 === g || "" === g.trim() ? d.push(f) : d.push("\n" +
					f) : (m = void 0, g = f.trim(), (l = null == (m = h) ? void 0 : m.trim()) ? (m = /^(.*?\|)+.*?$/, k = /^\|(.*?\|)+$/, g = m.test(g) && !m.test(l) || k.test(g) && !k.test(l)) : g = !1, g ? void 0 === h || "" === h.trim() ? d.push(f) : d.push(f + "\n") : d.push(f))
			}
			b.text = d.join("\n")
		})
	})
};

function DF_MQl(a, b) {
	switch (a) {
		case "markdown-fixer":
			DF_MPl();
			break;
		case "audio-stt-direct":
			DF_MCl(b);
			break;
		case "audio-stt-onsend":
			DF_MDl(b);
			break;
		case "audio-df-direct":
			DF_MEl(b);
			break;
		case "audio-df-onsend":
			DF_MFl(b);
			break;
		case "gcs-upload-response":
			DF_MNl(b);
			break;
		default:
			console.error("DF-MESSENGER", "Unknown util: " + a)
	}
}
globalThis.dfInstallUtils = function(a) {
	Object.entries(a).forEach(function(b) {
		var c = DF_Md(b);
		b = c.next().value;
		c = c.next().value;
		DF_MQl(b, c)
	})
};
globalThis.dfInstallUtil = function(a, b) {
	DF_MQl(a, b)
};