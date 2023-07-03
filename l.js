! function e(t, n, r)
{
	function a(o, s)
	{
		if (!n[o])
		{
			if (!t[o])
			{
				var l = "function" ==
					typeof require &&
					require;
				if (!s && l) return l(o,
					!0);
				if (i) return i(o, !0);
				var c = new Error(
					"Cannot find module '" +
					o + "'");
				throw c.code =
					"MODULE_NOT_FOUND",
					c
			}
			var u = n[o] = {
				exports:
				{}
			};
			t[o][0].call(u.exports, (
					function (e)
					{
						return a(t[
								o]
							[1][
								e] ||
							e)
					}), u, u
				.exports, e, t, n, r
				)
		}
		return n[o].exports
	}
	for (var i = "function" ==
			typeof require && require,
			o = 0; o < r.length; o++) a(
		r[o]);
	return a
}(
{
	1: [function (e, t, n)
	{
		t.exports =
			function (e, t)
			{
				(null ==
					t || t >
					e.length
					) && (
					t = e
					.length
					);
				for (var n =
						0,
						r =
						new Array(
							t
							); n <
					t; n++)
					r[n] =
					e[n];
				return r
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	2: [function (e, t, n)
	{
		t.exports =
			function (e)
			{
				if (Array
					.isArray(
						e))
					return e
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	3: [function (e, t, n)
	{
		function r(e, t, n,
			r, a, i, o)
		{
			try
			{
				var s = e[i]
					(o),
					l = s
					.value
			}
			catch (e)
			{
				return void n(
					e)
			}
			s.done ? t(l) :
				Promise
				.resolve(l)
				.then(r, a)
		}
		t.exports =
			function (e)
			{
				return function ()
				{
					var t =
						this,
						n =
						arguments;
					return new Promise(
						(function (
							a,
							i
							)
						{
							var o =
								e
								.apply(
									t,
									n
									);
							function s(
								e
								)
							{
								r(o, a, i,
									s,
									l,
									"next",
									e
									)
							}
							function l(
								e
								)
							{
								r(o, a, i,
									s,
									l,
									"throw",
									e
									)
							}
							s(void 0)
						})
						)
				}
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	4: [function (e, t, n)
	{
		t.exports =
			function (e, t)
			{
				return t
					.get ? t
					.get
					.call(
					e) : t
					.value
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	5: [function (e, t, n)
	{
		t.exports =
			function (e, t,
				n)
			{
				if (t.set) t
					.set
					.call(e,
						n);
				else
				{
					if (!t
						.writable
						)
						throw new TypeError(
							"attempted to set read only private field"
							);
					t.value =
						n
				}
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	6: [function (e, t, n)
	{
		t.exports =
			function (e, t)
			{
				if (!(
						e instanceof t))
					throw new TypeError(
						"Cannot call a class as a function"
						)
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	7: [function (e, t, n)
	{
		t.exports =
			function (e, t,
				n)
			{
				if (!t.has(
						e))
					throw new TypeError(
						"attempted to " +
						n +
						" private field on non-instance"
						);
				return t
					.get(e)
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	8: [function (e, t, n)
	{
		var r = e(
				"./classApplyDescriptorGet.js"
				),
			a = e(
				"./classExtractFieldDescriptor.js"
				);
		t.exports =
			function (e, t)
			{
				var n = a(e,
					t,
					"get"
					);
				return r(e,
					n)
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{
		"./classApplyDescriptorGet.js": 4,
		"./classExtractFieldDescriptor.js": 7
	}],
	9: [function (e, t, n)
	{
		var r = e(
				"./classApplyDescriptorSet.js"
				),
			a = e(
				"./classExtractFieldDescriptor.js"
				);
		t.exports =
			function (e, t,
				n)
			{
				var i = a(e,
					t,
					"set"
					);
				return r(e,
					i, n
					), n
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{
		"./classApplyDescriptorSet.js": 5,
		"./classExtractFieldDescriptor.js": 7
	}],
	10: [function (e, t, n)
	{
		function r(e, t)
		{
			for (var n =
				0; n < t
				.length; n++
				)
			{
				var r = t[
				n];
				r.enumerable =
					r
					.enumerable ||
					!1, r
					.configurable = !
					0,
					"value" in
					r && (r
						.writable = !
						0),
					Object
					.defineProperty(
						e, r
						.key,
						r)
			}
		}
		t.exports =
			function (e, t,
				n)
			{
				return t &&
					r(e.prototype,
						t),
					n && r(
						e, n
						),
					Object
					.defineProperty(
						e,
						"prototype",
						{
							writable:
								!
								1
						}),
					e
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	11: [function (e, t, n)
	{
		t.exports =
			function (e, t,
				n)
			{
				return t in
					e ?
					Object
					.defineProperty(
						e,
						t,
						{
							value: n,
							enumerable:
								!
								0,
							configurable:
								!
								0,
							writable:
								!
								0
						}) :
					e[t] =
					n, e
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	12: [function (e, t, n)
	{
		t.exports =
			function (e)
			{
				return e &&
					e
					.__esModule ?
					e :
					{
						default: e
					}
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	13: [function (e, t, n)
	{
		t.exports =
			function (e, t)
			{
				var n =
					null ==
					e ?
					null :
					"undefined" !=
					typeof Symbol &&
					e[Symbol
						.iterator
						] ||
					e[
						"@@iterator"];
				if (null !=
					n)
				{
					var r,
						a,
						i = [],
						o = !
						0,
						s = !
						1;
					try
					{
						for (
							n =
							n
							.call(
								e
								); !
							(o = (r =
									n
									.next()
									)
								.done
								) &&
							(i.push(r
									.value
									),
								!
								t ||
								i
								.length !==
								t
								); o = !
							0
							)
						;
					}
					catch (
						e)
					{
						s = !
							0,
							a =
							e
					}
					finally
					{
						try
						{
							o || null ==
								n
								.return ||
								n
								.return()
						}
						finally
						{
							if (
								s)
								throw a
						}
					}
					return i
				}
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	14: [function (e, t, n)
	{
		t.exports =
			function ()
			{
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	15: [function (e, t, n)
	{
		var r = e(
				"./arrayWithHoles.js"
				),
			a = e(
				"./iterableToArrayLimit.js"
				),
			i = e(
				"./unsupportedIterableToArray.js"
				),
			o = e(
				"./nonIterableRest.js"
				);
		t.exports =
			function (e, t)
			{
				return r(
					e) || a(
						e, t
						) ||
					i(e,
					t) ||
					o()
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{
		"./arrayWithHoles.js": 2,
		"./iterableToArrayLimit.js": 13,
		"./nonIterableRest.js": 14,
		"./unsupportedIterableToArray.js": 17
	}],
	16: [function (e, t, n)
	{
		function r(e)
		{
			return t
				.exports =
				r =
				"function" ==
				typeof Symbol &&
				"symbol" ==
				typeof Symbol
				.iterator ?
				function (e)
				{
					return typeof e
				} :
				function (e)
				{
					return e &&
						"function" ==
						typeof Symbol &&
						e
						.constructor ===
						Symbol &&
						e !==
						Symbol
						.prototype ?
						"symbol" :
						typeof e
				}, t.exports
				.__esModule = !
				0, t.exports
				.default = t
				.exports, r(
					e)
		}
		t.exports = r, t
			.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{}],
	17: [function (e, t, n)
	{
		var r = e(
			"./arrayLikeToArray.js"
			);
		t.exports =
			function (e, t)
			{
				if (e)
				{
					if ("string" ==
						typeof e
						)
						return r(
							e,
							t
							);
					var n =
						Object
						.prototype
						.toString
						.call(
							e
							)
						.slice(
							8,
							-
							1
							);
					return "Object" ===
						n &&
						e
						.constructor &&
						(n = e
							.constructor
							.name
							),
						"Map" ===
						n ||
						"Set" ===
						n ?
						Array
						.from(
							e
							) :
						"Arguments" ===
						n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
						.test(
							n
							) ?
						r(e,
							t) :
						void 0
				}
			}, t.exports
			.__esModule = !
			0, t.exports
			.default = t
			.exports
	},
	{
		"./arrayLikeToArray.js": 1
	}],
	18: [function (e, t, n)
	{
		t.exports = e(
			"regenerator-runtime"
			)
	},
	{
		"regenerator-runtime": 20
	}],
	19: [function (e, t, n)
	{
		"use strict";
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.sanitizeUrl =
			void 0;
		var r =
			/^([^\w]*)(javascript|data|vbscript)/im,
			a =
			/&#(\w+)(^\w|;)?/g,
			i =
			/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
			o =
			/^([^:]+):/gm,
			s = [".", "/"];
		n.sanitizeUrl =
			function (e)
			{
				var t, n = (
						t =
						e ||
						"",
						t
						.replace(
							a,
							(function (
								e,
								t
								)
							{
								return String
									.fromCharCode(
										t
										)
							})
							)
						)
					.replace(
						i,
						"")
					.trim();
				if (!n)
					return "about:blank";
				if (function (
						e)
					{
						return s
							.indexOf(
								e[
									0]
								) >
							-
							1
					}(n))
					return n;
				var l = n
					.match(
						o);
				if (!l)
					return n;
				var c = l[
				0];
				return r
					.test(
					c) ?
					"about:blank" :
					n
			}
	},
	{}],
	20: [function (e, t, n)
	{
		var r = function (e)
		{
			"use strict";
			var t, n =
				Object
				.prototype,
				r = n
				.hasOwnProperty,
				a =
				"function" ==
				typeof Symbol ?
				Symbol :
				{},
				i = a
				.iterator ||
				"@@iterator",
				o = a
				.asyncIterator ||
				"@@asyncIterator",
				s = a
				.toStringTag ||
				"@@toStringTag";
			function l(
				e, t, n)
			{
				return Object
					.defineProperty(
						e,
						t,
						{
							value: n,
							enumerable:
								!
								0,
							configurable:
								!
								0,
							writable:
								!
								0
						}
						),
					e[t]
			}
			try
			{
				l(
					{},
					""
					)
			}
			catch (e)
			{
				l = function (
					e,
					t,
					n
					)
				{
					return e[
							t
							] =
						n
				}
			}
			function c(
				e, t, n,
				r)
			{
				var a =
					t &&
					t
					.prototype instanceof b ?
					t :
					b,
					i =
					Object
					.create(
						a
						.prototype
						),
					o =
					new I(
						r ||
						[]
						);
				return i
					._invoke =
					function (
						e,
						t,
						n
						)
					{
						var r =
							d;
						return function (
							a,
							i
							)
						{
							if (r ===
								f
								)
								throw new Error(
									"Generator is already running"
									);
							if (r ===
								p
								)
							{
								if ("throw" ===
									a
									)
									throw i;
								return M()
							}
							for (
								n
								.method =
								a,
								n
								.arg =
								i;;
								)
							{
								var o =
									n
									.delegate;
								if (
									o)
								{
									var s =
										x(o,
											n);
									if (
										s)
									{
										if (s ===
											m
											)
											continue;
										return s
									}
								}
								if ("next" ===
									n
									.method
									)
									n
									.sent =
									n
									._sent =
									n
									.arg;
								else if (
									"throw" ===
									n
									.method
									)
								{
									if (r ===
										d
										)
										throw r =
											p,
											n
											.arg;
									n.dispatchException(
										n
										.arg
										)
								}
								else "return" ===
									n
									.method &&
									n
									.abrupt(
										"return",
										n
										.arg
										);
								r =
								f;
								var l =
									u(e, t,
										n
										);
								if ("normal" ===
									l
									.type
									)
								{
									if (r =
										n
										.done ?
										p :
										h,
										l
										.arg ===
										m
										)
										continue;
									return {
										value: l
											.arg,
										done: n
											.done
									}
								}
								"throw" ===
								l.type &&
									(r = p,
										n
										.method =
										"throw",
										n
										.arg =
										l
										.arg
										)
							}
						}
					}(e, n,
						o
						),
					i
			}
			function u(
				e, t, n)
			{
				try
				{
					return {
						type: "normal",
						arg: e
							.call(
								t,
								n
								)
					}
				}
				catch (
					e)
				{
					return {
						type: "throw",
						arg: e
					}
				}
			}
			e.wrap = c;
			var d =
				"suspendedStart",
				h =
				"suspendedYield",
				f =
				"executing",
				p =
				"completed",
				m = {};
			function b()
			{}
			function v()
			{}
			function g()
			{}
			var y = {};
			l(y, i, (function ()
			{
				return this
			}));
			var w =
				Object
				.getPrototypeOf,
				_ = w &&
				w(w(O(
				[])));
			_ && _ !==
				n && r
				.call(_,
					i
					) &&
				(y = _);
			var k = g
				.prototype =
				b
				.prototype =
				Object
				.create(
					y);
			function S(
				e)
			{
				["next",
					"throw",
					"return"
				]
				.forEach
					((function (
						t)
					{
						l(e, t, (function (
							e
							)
						{
							return this
								._invoke(
									t,
									e
									)
						}))
					}))
			}
			function E(
				e, t)
			{
				function n(
					a,
					i,
					o, s
					)
				{
					var l =
						u(e[a],
							e,
							i
							);
					if ("throw" !==
						l
						.type
						)
					{
						var c =
							l
							.arg,
							d =
							c
							.value;
						return d &&
							"object" ==
							typeof d &&
							r
							.call(
								d,
								"__await"
								) ?
							t
							.resolve(
								d
								.__await
								)
							.then(
								(function (
									e
									)
								{
									n("next",
										e,
										o,
										s
										)
								}),
								(function (
									e
									)
								{
									n("throw",
										e,
										o,
										s
										)
								})
								) :
							t
							.resolve(
								d
								)
							.then(
								(function (
									e
									)
								{
									c.value =
										e,
										o(
											c)
								}),
								(function (
									e
									)
								{
									return n(
										"throw",
										e,
										o,
										s
										)
								})
								)
					}
					s(l.arg)
				}
				var a;
				this._invoke =
					function (
						e,
						r
						)
					{
						function i()
						{
							return new t(
								(function (
									t,
									a
									)
								{
									n(e, r, t,
										a
										)
								})
								)
						}
						return a =
							a ?
							a
							.then(
								i,
								i
								) :
							i()
					}
			}
			function x(
				e, n)
			{
				var r =
					e
					.iterator[
						n
						.method
						];
				if (r ===
					t)
				{
					if (n
						.delegate =
						null,
						"throw" ===
						n
						.method
						)
					{
						if (e
							.iterator
							.return &&
							(n.method =
								"return",
								n
								.arg =
								t,
								x(e,
									n),
								"throw" ===
								n
								.method
								)
							)
							return m;
						n.method =
							"throw",
							n
							.arg =
							new TypeError(
								"The iterator does not provide a 'throw' method"
								)
					}
					return m
				}
				var a =
					u(r, e
						.iterator,
						n
						.arg
						);
				if ("throw" ===
					a
					.type
					)
					return n
						.method =
						"throw",
						n
						.arg =
						a
						.arg,
						n
						.delegate =
						null,
						m;
				var i =
					a
					.arg;
				return i ?
					i
					.done ?
					(n[e.resultName] =
						i
						.value,
						n
						.next =
						e
						.nextLoc,
						"return" !==
						n
						.method &&
						(n.method =
							"next",
							n
							.arg =
							t
							),
						n
						.delegate =
						null,
						m
						) :
					i :
					(n.method =
						"throw",
						n
						.arg =
						new TypeError(
							"iterator result is not an object"
							),
						n
						.delegate =
						null,
						m
						)
			}
			function C(
				e)
			{
				var t = {
					tryLoc: e[
						0
						]
				};
				1 in e &&
					(t.catchLoc =
						e[
							1]
						),
					2 in
					e &&
					(t.finallyLoc =
						e[
							2],
						t
						.afterLoc =
						e[
							3]
						),
					this
					.tryEntries
					.push(
						t
						)
			}
			function T(
				e)
			{
				var t =
					e
					.completion ||
					{};
				t.type =
					"normal",
					delete t
					.arg,
					e
					.completion =
					t
			}
			function I(
				e)
			{
				this.tryEntries = [
					{
						tryLoc: "root"
					}],
					e
					.forEach(
						C,
						this
						),
					this
					.reset(
						!
						0
						)
			}
			function O(
				e)
			{
				if (e)
				{
					var n =
						e[
							i];
					if (
						n)
						return n
							.call(
								e
								);
					if ("function" ==
						typeof e
						.next
						)
						return e;
					if (!
						isNaN(
							e
							.length
							)
						)
					{
						var a = -
							1,
							o =
							function n()
							{
								for (; ++
									a <
									e
									.length;
									)
									if (r
										.call(
											e,
											a
											)
										)
										return n
											.value =
											e[
												a],
											n
											.done = !
											1,
											n;
								return n
									.value =
									t,
									n
									.done = !
									0,
									n
							};
						return o
							.next =
							o
					}
				}
				return {
					next: M
				}
			}
			function M()
			{
				return {
					value: t,
					done:
						!
						0
				}
			}
			return v
				.prototype =
				g, l(k,
					"constructor",
					g),
				l(g, "constructor",
					v),
				v
				.displayName =
				l(g, s,
					"GeneratorFunction"
					), e
				.isGeneratorFunction =
				function (
					e)
				{
					var t =
						"function" ==
						typeof e &&
						e
						.constructor;
					return !
						!
						t &&
						(t ===
							v ||
							"GeneratorFunction" ===
							(t.displayName ||
								t
								.name
								)
							)
				}, e
				.mark =
				function (
					e)
				{
					return Object
						.setPrototypeOf ?
						Object
						.setPrototypeOf(
							e,
							g
							) :
						(e.__proto__ =
							g,
							l(e, s,
								"GeneratorFunction"
								)
							),
						e
						.prototype =
						Object
						.create(
							k
							),
						e
				}, e
				.awrap =
				function (
					e)
				{
					return {
						__await: e
					}
				}, S(E
					.prototype
					),
				l(E.prototype,
					o, (function ()
					{
						return this
					})),
				e
				.AsyncIterator =
				E, e
				.async =
				function (
					t,
					n,
					r,
					a, i
					)
				{
					void 0
						===
						i &&
						(i =
							Promise);
					var o =
						new E(
							c(t, n,
								r,
								a
								),
							i
							);
					return e
						.isGeneratorFunction(
							n
							) ?
						o :
						o
						.next()
						.then(
							(function (
								e
								)
							{
								return e
									.done ?
									e
									.value :
									o
									.next()
							})
							)
				}, S(k),
				l(k, s,
					"Generator"
					),
				l(k, i,
					(function ()
					{
						return this
					})),
				l(k, "toString",
					(function ()
					{
						return "[object Generator]"
					})),
				e.keys =
				function (
					e)
				{
					var
				t = [];
					for (
						var n in
							e
						)
						t
						.push(
							n
							);
					return t
						.reverse(),
						function n()
						{
							for (; t
								.length;
								)
							{
								var r =
									t
									.pop();
								if (r in
									e
									)
									return n
										.value =
										r,
										n
										.done = !
										1,
										n
							}
							return n
								.done = !
								0,
								n
						}
				}, e
				.values =
				O, I
				.prototype = {
					constructor: I,
					reset: function (
						e
						)
					{
						if (this
							.prev =
							0,
							this
							.next =
							0,
							this
							.sent =
							this
							._sent =
							t,
							this
							.done = !
							1,
							this
							.delegate =
							null,
							this
							.method =
							"next",
							this
							.arg =
							t,
							this
							.tryEntries
							.forEach(
								T
								),
							!
							e
							)
							for (
								var n in
									this
								)
								"t" ===
								n
								.charAt(
									0
									) &&
								r
								.call(
									this,
									n
									) &&
								!
								isNaN(
									+
									n
									.slice(
										1
										)
									) &&
								(this[
										n] =
									t
									)
					},
					stop: function ()
					{
						this.done = !
							0;
						var e =
							this
							.tryEntries[
								0
								]
							.completion;
						if ("throw" ===
							e
							.type
							)
							throw e
								.arg;
						return this
							.rval
					},
					dispatchException: function (
						e
						)
					{
						if (this
							.done
							)
							throw e;
						var n =
							this;
						function a(
							r,
							a
							)
						{
							return s
								.type =
								"throw",
								s
								.arg =
								e,
								n
								.next =
								r,
								a &&
								(n.method =
									"next",
									n
									.arg =
									t
									),
								!
								!
								a
						}
						for (
							var i =
								this
								.tryEntries
								.length -
								1; i >=
							0; --
							i
							)
						{
							var o =
								this
								.tryEntries[
									i
									],
								s =
								o
								.completion;
							if ("root" ===
								o
								.tryLoc
								)
								return a(
									"end"
									);
							if (o
								.tryLoc <=
								this
								.prev
								)
							{
								var l =
									r
									.call(
										o,
										"catchLoc"
										),
									c =
									r
									.call(
										o,
										"finallyLoc"
										);
								if (l &&
									c
									)
								{
									if (this
										.prev <
										o
										.catchLoc
										)
										return a(
											o
											.catchLoc,
											!
											0
											);
									if (this
										.prev <
										o
										.finallyLoc
										)
										return a(
											o
											.finallyLoc
											)
								}
								else if (
									l
									)
								{
									if (this
										.prev <
										o
										.catchLoc
										)
										return a(
											o
											.catchLoc,
											!
											0
											)
								}
								else
								{
									if (!
										c
										)
										throw new Error(
											"try statement without catch or finally"
											);
									if (this
										.prev <
										o
										.finallyLoc
										)
										return a(
											o
											.finallyLoc
											)
								}
							}
						}
					},
					abrupt: function (
						e,
						t
						)
					{
						for (
							var n =
								this
								.tryEntries
								.length -
								1; n >=
							0; --
							n
							)
						{
							var a =
								this
								.tryEntries[
									n
									];
							if (a
								.tryLoc <=
								this
								.prev &&
								r
								.call(
									a,
									"finallyLoc"
									) &&
								this
								.prev <
								a
								.finallyLoc
								)
							{
								var i =
									a;
								break
							}
						}
						i && ("break" ===
								e ||
								"continue" ===
								e
								) &&
							i
							.tryLoc <=
							t &&
							t <=
							i
							.finallyLoc &&
							(i =
								null);
						var o =
							i ?
							i
							.completion :
							{};
						return o
							.type =
							e,
							o
							.arg =
							t,
							i ?
							(this
								.method =
								"next",
								this
								.next =
								i
								.finallyLoc,
								m
								) :
							this
							.complete(
								o
								)
					},
					complete: function (
						e,
						t
						)
					{
						if ("throw" ===
							e
							.type
							)
							throw e
								.arg;
						return "break" ===
							e
							.type ||
							"continue" ===
							e
							.type ?
							this
							.next =
							e
							.arg :
							"return" ===
							e
							.type ?
							(this
								.rval =
								this
								.arg =
								e
								.arg,
								this
								.method =
								"return",
								this
								.next =
								"end"
								) :
							"normal" ===
							e
							.type &&
							t &&
							(this
								.next =
								t
								),
							m
					},
					finish: function (
						e
						)
					{
						for (
							var t =
								this
								.tryEntries
								.length -
								1; t >=
							0; --
							t
							)
						{
							var n =
								this
								.tryEntries[
									t
									];
							if (n
								.finallyLoc ===
								e
								)
								return this
									.complete(
										n
										.completion,
										n
										.afterLoc
										),
									T(
										n),
									m
						}
					},
					catch: function (
						e
						)
					{
						for (
							var t =
								this
								.tryEntries
								.length -
								1; t >=
							0; --
							t
							)
						{
							var n =
								this
								.tryEntries[
									t
									];
							if (n
								.tryLoc ===
								e
								)
							{
								var r =
									n
									.completion;
								if ("throw" ===
									r
									.type
									)
								{
									var a =
										r
										.arg;
									T(n)
								}
								return a
							}
						}
						throw new Error(
							"illegal catch attempt"
							)
					},
					delegateYield: function (
						e,
						n,
						r
						)
					{
						return this
							.delegate = {
								iterator: O(
									e
									),
								resultName: n,
								nextLoc: r
							},
							"next" ===
							this
							.method &&
							(this
								.arg =
								t
								),
							m
					}
				}, e
		}("object" ==
			typeof t ? t
			.exports :
			{});
		try
		{
			regeneratorRuntime
				= r
		}
		catch (e)
		{
			"object" ==
			typeof globalThis
				? globalThis
				.regeneratorRuntime =
				r :
				Function(
					"r",
					"regeneratorRuntime = r"
					)(r)
		}
	},
	{}],
	21: [function (e, t, n)
	{
		! function ()
		{
			"use strict";
			function e()
			{
				var e =
					window,
					t =
					document;
				if (!("scrollBehavior" in
						t
						.documentElement
						.style
						) ||
					!0 === e
					.__forceSmoothScrollPolyfill__
					)
				{
					var n,
						r =
						e
						.HTMLElement ||
						e
						.Element,
						a = {
							scroll: e
								.scroll ||
								e
								.scrollTo,
							scrollBy: e
								.scrollBy,
							elementScroll: r
								.prototype
								.scroll ||
								s,
							scrollIntoView: r
								.prototype
								.scrollIntoView
						},
						i =
						e
						.performance &&
						e
						.performance
						.now ?
						e
						.performance
						.now
						.bind(
							e
							.performance
							) :
						Date
						.now,
						o =
						(n = e
							.navigator
							.userAgent,
							new RegExp(
								["MSIE ",
									"Trident/",
									"Edge/"
								]
								.join(
									"|"
									)
								)
							.test(
								n
								) ?
							1 :
							0
							);
					e.scroll =
						e
						.scrollTo =
						function ()
						{
							void 0
								!==
								arguments[
									0
									] &&
								(!0 !==
									l(arguments[
										0
										]) ?
									p
									.call(
										e,
										t
										.body,
										void 0 !==
										arguments[
											0
											]
										.left ?
										~
										~
										arguments[
											0
											]
										.left :
										e
										.scrollX ||
										e
										.pageXOffset,
										void 0 !==
										arguments[
											0
											]
										.top ?
										~
										~
										arguments[
											0
											]
										.top :
										e
										.scrollY ||
										e
										.pageYOffset
										) :
									a
									.scroll
									.call(
										e,
										void 0 !==
										arguments[
											0
											]
										.left ?
										arguments[
											0
											]
										.left :
										"object" !=
										typeof arguments[
											0
											] ?
										arguments[
											0
											] :
										e
										.scrollX ||
										e
										.pageXOffset,
										void 0 !==
										arguments[
											0
											]
										.top ?
										arguments[
											0
											]
										.top :
										void 0 !==
										arguments[
											1
											] ?
										arguments[
											1
											] :
										e
										.scrollY ||
										e
										.pageYOffset
										)
									)
						}, e
						.scrollBy =
						function ()
						{
							void 0
								!==
								arguments[
									0
									] &&
								(l(arguments[
										0
										]) ?
									a
									.scrollBy
									.call(
										e,
										void 0 !==
										arguments[
											0
											]
										.left ?
										arguments[
											0
											]
										.left :
										"object" !=
										typeof arguments[
											0
											] ?
										arguments[
											0
											] :
										0,
										void 0 !==
										arguments[
											0
											]
										.top ?
										arguments[
											0
											]
										.top :
										void 0 !==
										arguments[
											1
											] ?
										arguments[
											1
											] :
										0
										) :
									p
									.call(
										e,
										t
										.body,
										~
										~
										arguments[
											0
											]
										.left +
										(e.scrollX ||
											e
											.pageXOffset
											),
										~
										~
										arguments[
											0
											]
										.top +
										(e.scrollY ||
											e
											.pageYOffset
											)
										)
									)
						}, r
						.prototype
						.scroll =
						r
						.prototype
						.scrollTo =
						function ()
						{
							if (void 0 !==
								arguments[
									0
									]
								)
								if (!
									0 !==
									l(arguments[
										0
										])
									)
								{
									var e =
										arguments[
											0
											]
										.left,
										t =
										arguments[
											0
											]
										.top;
									p.call(this,
										this,
										void 0 ===
										e ?
										this
										.scrollLeft :
										~
										~
										e,
										void 0 ===
										t ?
										this
										.scrollTop :
										~
										~
										t
										)
								}
							else
							{
								if ("number" ==
									typeof arguments[
										0
										] &&
									void 0 ===
									arguments[
										1
										]
									)
									throw new SyntaxError(
										"Value could not be converted"
										);
								a.elementScroll
									.call(
										this,
										void 0 !==
										arguments[
											0
											]
										.left ?
										~
										~
										arguments[
											0
											]
										.left :
										"object" !=
										typeof arguments[
											0
											] ?
										~
										~
										arguments[
											0
											] :
										this
										.scrollLeft,
										void 0 !==
										arguments[
											0
											]
										.top ?
										~
										~
										arguments[
											0
											]
										.top :
										void 0 !==
										arguments[
											1
											] ?
										~
										~
										arguments[
											1
											] :
										this
										.scrollTop
										)
							}
						}, r
						.prototype
						.scrollBy =
						function ()
						{
							void 0
								!==
								arguments[
									0
									] &&
								(!0 !==
									l(arguments[
										0
										]) ?
									this
									.scroll(
									{
										left:
											~
											~
											arguments[
												0
												]
											.left +
											this
											.scrollLeft,
										top: ~
											~
											arguments[
												0
												]
											.top +
											this
											.scrollTop,
										behavior: arguments[
												0
												]
											.behavior
									}) :
									a
									.elementScroll
									.call(
										this,
										void 0 !==
										arguments[
											0
											]
										.left ?
										~
										~
										arguments[
											0
											]
										.left +
										this
										.scrollLeft :
										~
										~
										arguments[
											0
											] +
										this
										.scrollLeft,
										void 0 !==
										arguments[
											0
											]
										.top ?
										~
										~
										arguments[
											0
											]
										.top +
										this
										.scrollTop :
										~
										~
										arguments[
											1
											] +
										this
										.scrollTop
										)
									)
						}, r
						.prototype
						.scrollIntoView =
						function ()
						{
							if (!
								0 !==
								l(arguments[
									0
									])
								)
							{
								var n =
									h(
										this),
									r =
									n
									.getBoundingClientRect(),
									i =
									this
									.getBoundingClientRect();
								n !==
									t
									.body ?
									(p.call(this,
											n,
											n
											.scrollLeft +
											i
											.left -
											r
											.left,
											n
											.scrollTop +
											i
											.top -
											r
											.top
											),
										"fixed" !==
										e
										.getComputedStyle(
											n
											)
										.position &&
										e
										.scrollBy(
										{
											left: r
												.left,
											top: r
												.top,
											behavior: "smooth"
										})
										) :
									e
									.scrollBy(
									{
										left: i
											.left,
										top: i
											.top,
										behavior: "smooth"
									})
							}
							else a
								.scrollIntoView
								.call(
									this,
									void 0 ===
									arguments[
										0
										] ||
									arguments[
										0
										]
									)
						}
				}
				function s(
					e, t)
				{
					this.scrollLeft =
						e,
						this
						.scrollTop =
						t
				}
				function l(
					e)
				{
					if (null ===
						e ||
						"object" !=
						typeof e ||
						void 0 ===
						e
						.behavior ||
						"auto" ===
						e
						.behavior ||
						"instant" ===
						e
						.behavior
						)
						return !
							0;
					if ("object" ==
						typeof e &&
						"smooth" ===
						e
						.behavior
						)
						return !
							1;
					throw new TypeError(
						"behavior member of ScrollOptions " +
						e
						.behavior +
						" is not a valid value for enumeration ScrollBehavior."
						)
				}
				function c(
					e, t)
				{
					return "Y" ===
						t ?
						e
						.clientHeight +
						o <
						e
						.scrollHeight :
						"X" ===
						t ?
						e
						.clientWidth +
						o <
						e
						.scrollWidth :
						void 0
				}
				function u(
					t, n)
				{
					var r =
						e
						.getComputedStyle(
							t,
							null
							)[
							"overflow" +
							n
							];
					return "auto" ===
						r ||
						"scroll" ===
						r
				}
				function d(
					e)
				{
					var t =
						c(e,
							"Y") &&
						u(e,
							"Y"),
						n =
						c(e,
							"X") &&
						u(e,
							"X");
					return t ||
						n
				}
				function h(
					e)
				{
					for (; e !==
						t
						.body &&
						!
						1 ===
						d(
						e);)
						e =
						e
						.parentNode ||
						e
						.host;
					return e
				}
				function f(
					t)
				{
					var n,
						r,
						a,
						o,
						s =
						(i() -
							t
							.startTime
							) /
						468;
					o = s =
						s >
						1 ?
						1 :
						s,
						n =
						.5 *
						(1 - Math
							.cos(
								Math
								.PI *
								o
								)
							),
						r =
						t
						.startX +
						(t.x -
							t
							.startX
							) *
						n,
						a =
						t
						.startY +
						(t.y -
							t
							.startY
							) *
						n, t
						.method
						.call(
							t
							.scrollable,
							r,
							a
							),
						r ===
						t
						.x &&
						a ===
						t
						.y ||
						e
						.requestAnimationFrame(
							f
							.bind(
								e,
								t
								)
							)
				}
				function p(
					n, r, o)
				{
					var l,
						c,
						u,
						d,
						h =
						i();
					n === t
						.body ?
						(l = e,
							c =
							e
							.scrollX ||
							e
							.pageXOffset,
							u =
							e
							.scrollY ||
							e
							.pageYOffset,
							d =
							a
							.scroll
							) :
						(l = n,
							c =
							n
							.scrollLeft,
							u =
							n
							.scrollTop,
							d =
							s
							),
						f(
						{
							scrollable: l,
							method: d,
							startTime: h,
							startX: c,
							startY: u,
							x: r,
							y: o
						})
				}
			}
			"object" ==
			typeof n &&
				void 0 !==
				t ? t
				.exports = {
					polyfill: e
				} : e()
		}()
	},
	{}],
	22: [function (e, t, n)
	{
		var r, a;
		r = this, a =
			function (e)
			{
				"use strict";
				const t =
					"\n";
				class n
				{
					constructor
						(e)
						{
							const
							{
								command: t,
								headers: n,
								body: r,
								binaryBody: a,
								escapeHeaderValues: i,
								skipContentLengthHeader: o
							} =
							e
							;
							this.command =
								t,
								this
								.headers =
								Object
								.assign(
									{},
									n ||
									{}
									),
								a ?
								(this
									._binaryBody =
									a,
									this
									.isBinaryBody = !
									0
									) :
								(this
									._body =
									r ||
									"",
									this
									.isBinaryBody = !
									1
									),
								this
								.escapeHeaderValues =
								i ||
								!
								1,
								this
								.skipContentLengthHeader =
								o ||
								!
								1
						}
					get body
						()
						{
							return !
								this
								._body &&
								this
								.isBinaryBody &&
								(this
									._body =
									(
										new TextDecoder)
									.decode(
										this
										._binaryBody
										)
									),
								this
								._body ||
								""
						}
					get binaryBody
						()
						{
							return this
								._binaryBody ||
								this
								.isBinaryBody ||
								(this
									._binaryBody =
									(
										new TextEncoder)
									.encode(
										this
										._body
										)
									),
								this
								._binaryBody
						}
					static fromRawFrame
						(e,
							t)
						{
							const
								r = {},
								a =
								e =>
								e
								.replace(
									/^\s+|\s+$/g,
									""
									);
							for (
								const
									i of
									e
									.headers
									.reverse()
								)
							{
								i.indexOf(
									":"
									);
								const
									o =
									a(i[
										0]);
								let s =
									a(i[
										1]);
								t && "CONNECT" !==
									e
									.command &&
									"CONNECTED" !==
									e
									.command &&
									(s = n
										.hdrValueUnEscape(
											s
											)
										),
									r[
										o] =
									s
							}
							return new n(
							{
								command: e
									.command,
								headers: r,
								binaryBody: e
									.binaryBody,
								escapeHeaderValues: t
							})
						}
					toString
						()
						{
							return this
								.serializeCmdAndHeaders()
						}
					serialize
						()
						{
							const
								e =
								this
								.serializeCmdAndHeaders();
							return this
								.isBinaryBody ?
								n
								.toUnit8Array(
									e,
									this
									._binaryBody
									)
								.buffer :
								e +
								this
								._body +
								"\0"
						}
					serializeCmdAndHeaders
						()
						{
							const
								e = [
									this
									.command
								];
							this.skipContentLengthHeader &&
								delete this
								.headers[
									"content-length"
									];
							for (
								const
									t of
									Object
									.keys(
										this
										.headers ||
										{}
										)
								)
							{
								const
									r =
									this
									.headers[
										t
										];
								this.escapeHeaderValues &&
									"CONNECT" !==
									this
									.command &&
									"CONNECTED" !==
									this
									.command ?
									e
									.push(
										`${t}:${n.hdrValueEscape(`${r}`)}`
										) :
									e
									.push(
										`${t}:${r}`
										)
							}
							return (this
									.isBinaryBody ||
									!
									this
									.isBodyEmpty() &&
									!
									this
									.skipContentLengthHeader
									) &&
								e
								.push(
									`content-length:${this.bodyLength()}`
									),
								e
								.join(
									t
									) +
								t +
								t
						}
					isBodyEmpty
						()
						{
							return 0 ===
								this
								.bodyLength()
						}
					bodyLength
						()
						{
							const
								e =
								this
								.binaryBody;
							return e ?
								e
								.length :
								0
						}
					static sizeOfUTF8
						(e)
						{
							return e ?
								(
									new TextEncoder)
								.encode(
									e
									)
								.length :
								0
						}
					static toUnit8Array
						(e,
							t)
						{
							const
								n =
								(
									new TextEncoder)
								.encode(
									e
									),
								r =
								new Uint8Array(
									[
										0]
									),
								a =
								new Uint8Array(
									n
									.length +
									t
									.length +
									r
									.length
									);
							return a
								.set(
									n
									),
								a
								.set(
									t,
									n
									.length
									),
								a
								.set(
									r,
									n
									.length +
									t
									.length
									),
								a
						}
					static marshall
						(e)
						{
							return new n(
									e
									)
								.serialize()
						}
					static hdrValueEscape
						(e)
						{
							return e
								.replace(
									/\\/g,
									"\\\\"
									)
								.replace(
									/\r/g,
									"\\r"
									)
								.replace(
									/\n/g,
									"\\n"
									)
								.replace(
									/:/g,
									"\\c"
									)
						}
					static hdrValueUnEscape
						(e)
						{
							return e
								.replace(
									/\\r/g,
									"\r"
									)
								.replace(
									/\\n/g,
									"\n"
									)
								.replace(
									/\\c/g,
									":"
									)
								.replace(
									/\\\\/g,
									"\\"
									)
						}
				}
				class r
				{
					constructor
						(e,
							t)
						{
							this.onFrame =
								e,
								this
								.onIncomingPing =
								t,
								this
								._encoder =
								new TextEncoder,
								this
								._decoder =
								new TextDecoder,
								this
								._token = [],
								this
								._initState()
						}
					parseChunk
						(e, t = !
							1
							)
						{
							let
							n;
							if (n =
								"string" ==
								typeof e ?
								this
								._encoder
								.encode(
									e
									) :
								new Uint8Array(
									e
									),
								t &&
								0 !==
								n[n.length -
									1
									]
								)
							{
								const
									e =
									new Uint8Array(
										n
										.length +
										1
										);
								e.set(n,
										0),
									e[n
										.length] =
									0,
									n =
									e
							}
							for (
								let r =
									0; r <
								n
								.length; r++
								)
							{
								const
									e =
									n[
										r];
								this._onByte(
									e
									)
							}
						}
					_collectFrame
						(e)
						{
							0 !==
								e &&
								13 !==
								e &&
								(10 !==
									e ?
									(this
										._onByte =
										this
										._collectCommand,
										this
										._reinjectByte(
											e
											)
										) :
									this
									.onIncomingPing()
									)
						}
					_collectCommand
						(e)
						{
							if (13 !==
								e
								)
								return 10 ===
									e ?
									(this
										._results
										.command =
										this
										._consumeTokenAsUTF8(),
										void(
											this
											._onByte =
											this
											._collectHeaders
											)
										) :
									void this
									._consumeByte(
										e
										)
						}
					_collectHeaders
						(e)
						{
							13 !==
								e &&
								(10 !==
									e ?
									(this
										._onByte =
										this
										._collectHeaderKey,
										this
										._reinjectByte(
											e
											)
										) :
									this
									._setupCollectBody()
									)
						}
					_reinjectByte
						(e)
						{
							this._onByte(
								e
								)
						}
					_collectHeaderKey
						(e)
						{
							if (58 ===
								e
								)
								return this
									._headerKey =
									this
									._consumeTokenAsUTF8(),
									void(
										this
										._onByte =
										this
										._collectHeaderValue
										);
							this._consumeByte(
								e
								)
						}
					_collectHeaderValue
						(e)
						{
							if (13 !==
								e
								)
								return 10 ===
									e ?
									(this
										._results
										.headers
										.push(
											[this
												._headerKey,
												this
												._consumeTokenAsUTF8()
											]
											),
										this
										._headerKey =
										void 0,
										void(
											this
											._onByte =
											this
											._collectHeaders
											)
										) :
									void this
									._consumeByte(
										e
										)
						}
					_setupCollectBody
						()
						{
							const
								e =
								this
								._results
								.headers
								.filter(
									(e =>
										"content-length" ===
										e[
											0]
										)
									)[
									0
									];
							e ? (this
									._bodyBytesRemaining =
									parseInt(
										e[
											1],
										10
										),
									this
									._onByte =
									this
									._collectBodyFixedSize
									) :
								this
								._onByte =
								this
								._collectBodyNullTerminated
						}
					_collectBodyNullTerminated
						(e)
						{
							0 !==
								e ?
								this
								._consumeByte(
									e
									) :
								this
								._retrievedBody()
						}
					_collectBodyFixedSize
						(e)
						{
							0 != this
								._bodyBytesRemaining--
								?
								this
								._consumeByte(
									e
									) :
								this
								._retrievedBody()
						}
					_retrievedBody
						()
						{
							this._results
								.binaryBody =
								this
								._consumeTokenAsRaw();
							try
							{
								this.onFrame(
									this
									._results
									)
							}
							catch (
								e
								)
							{
								console
									.log(
										"Ignoring an exception thrown by a frame handler. Original exception: ",
										e
										)
							}
							this._initState()
						}
					_consumeByte
						(e)
						{
							this._token
								.push(
									e
									)
						}
					_consumeTokenAsUTF8
						()
						{
							return this
								._decoder
								.decode(
									this
									._consumeTokenAsRaw()
									)
						}
					_consumeTokenAsRaw
						()
						{
							const
								e =
								new Uint8Array(
									this
									._token
									);
							return this
								._token = [],
								e
						}
					_initState
						()
						{
							this._results = {
									command: void 0,
									headers: [],
									binaryBody: void 0
								},
								this
								._token = [],
								this
								._headerKey =
								void 0,
								this
								._onByte =
								this
								._collectFrame
						}
				}
				var a, i;
				e.StompSocketState =
					void 0,
					(a = e
						.StompSocketState =
						e
						.StompSocketState ||
						(e
							.StompSocketState = {})
						)[a
						.CONNECTING =
						0] =
					"CONNECTING",
					a[a.OPEN =
						1] =
					"OPEN",
					a[a.CLOSING =
						2] =
					"CLOSING",
					a[a.CLOSED =
						3] =
					"CLOSED",
					e
					.ActivationState =
					void 0,
					(i = e
						.ActivationState =
						e
						.ActivationState ||
						(e
							.ActivationState = {})
						)[i
						.ACTIVE =
						0] =
					"ACTIVE",
					i[i.DEACTIVATING =
						1] =
					"DEACTIVATING",
					i[i.INACTIVE =
						2] =
					"INACTIVE";
				class o
				{
					constructor
						(e)
						{
							this.versions =
								e
						}
					supportedVersions
						()
						{
							return this
								.versions
								.join(
									","
									)
						}
					protocolVersions
						()
						{
							return this
								.versions
								.map(
									(e =>
										`v${e.replace(".","")}.stomp`
										)
									)
						}
				}
				o.V1_0 =
					"1.0", o
					.V1_1 =
					"1.1", o
					.V1_2 =
					"1.2", o
					.default =
					new o([o.V1_2,
						o
						.V1_1,
						o
						.V1_0
					]);
				class s
				{
					constructor
						(e, t,
							n
							)
						{
							this._client =
								e,
								this
								._webSocket =
								t,
								this
								._connected = !
								1,
								this
								._serverFrameHandlers = {
									CONNECTED: e =>
									{
										this.debug(
												`connected to server ${e.headers.server}`
												),
											this
											._connected = !
											0,
											this
											._connectedVersion =
											e
											.headers
											.version,
											this
											._connectedVersion ===
											o
											.V1_2 &&
											(this
												._escapeHeaderValues = !
												0
												),
											this
											._setupHeartbeat(
												e
												.headers
												),
											this
											.onConnect(
												e
												)
									},
									MESSAGE: e =>
									{
										const
											t =
											e
											.headers
											.subscription,
											n =
											this
											._subscriptions[
												t
												] ||
											this
											.onUnhandledMessage,
											r =
											e,
											a =
											this,
											i =
											this
											._connectedVersion ===
											o
											.V1_2 ?
											r
											.headers
											.ack :
											r
											.headers[
												"message-id"
												];
										r.ack =
											(
												e = {}) =>
											a
											.ack(
												i,
												t,
												e
												),
											r
											.nack =
											(
												e = {}) =>
											a
											.nack(
												i,
												t,
												e
												),
											n(
												r)
									},
									RECEIPT: e =>
									{
										const
											t =
											this
											._receiptWatchers[
												e
												.headers[
													"receipt-id"
													]
												];
										t ? (t(e),
												delete this
												._receiptWatchers[
													e
													.headers[
														"receipt-id"
														]
													]
												) :
											this
											.onUnhandledReceipt(
												e
												)
									},
									ERROR: e =>
									{
										this.onStompError(
											e
											)
									}
								},
								this
								._counter =
								0,
								this
								._subscriptions = {},
								this
								._receiptWatchers = {},
								this
								._partialData =
								"",
								this
								._escapeHeaderValues = !
								1,
								this
								._lastServerActivityTS =
								Date
								.now(),
								this
								.debug =
								n
								.debug,
								this
								.stompVersions =
								n
								.stompVersions,
								this
								.connectHeaders =
								n
								.connectHeaders,
								this
								.disconnectHeaders =
								n
								.disconnectHeaders,
								this
								.heartbeatIncoming =
								n
								.heartbeatIncoming,
								this
								.heartbeatOutgoing =
								n
								.heartbeatOutgoing,
								this
								.splitLargeFrames =
								n
								.splitLargeFrames,
								this
								.maxWebSocketChunkSize =
								n
								.maxWebSocketChunkSize,
								this
								.forceBinaryWSFrames =
								n
								.forceBinaryWSFrames,
								this
								.logRawCommunication =
								n
								.logRawCommunication,
								this
								.appendMissingNULLonIncoming =
								n
								.appendMissingNULLonIncoming,
								this
								.discardWebsocketOnCommFailure =
								n
								.discardWebsocketOnCommFailure,
								this
								.onConnect =
								n
								.onConnect,
								this
								.onDisconnect =
								n
								.onDisconnect,
								this
								.onStompError =
								n
								.onStompError,
								this
								.onWebSocketClose =
								n
								.onWebSocketClose,
								this
								.onWebSocketError =
								n
								.onWebSocketError,
								this
								.onUnhandledMessage =
								n
								.onUnhandledMessage,
								this
								.onUnhandledReceipt =
								n
								.onUnhandledReceipt,
								this
								.onUnhandledFrame =
								n
								.onUnhandledFrame
						}
					get connectedVersion
						()
						{
							return this
								._connectedVersion
						}
					get connected
						()
						{
							return this
								._connected
						}
					start()
					{
						const
							e =
							new r(
								(e =>
								{
									const
										t =
										n
										.fromRawFrame(
											e,
											this
											._escapeHeaderValues
											);
									this.logRawCommunication ||
										this
										.debug(
											`<<< ${t}`
											),
										(this
											._serverFrameHandlers[
												t
												.command
												] ||
											this
											.onUnhandledFrame
											)
										(
											t)
								}),
								(() =>
								{
									this.debug(
										"<<< PONG"
										)
								})
								);
						this._webSocket
							.onmessage =
							t =>
							{
								if (this
									.debug(
										"Received data"
										),
									this
									._lastServerActivityTS =
									Date
									.now(),
									this
									.logRawCommunication
									)
								{
									const
										e =
										t
										.data instanceof ArrayBuffer ?
										(
											new TextDecoder)
										.decode(
											t
											.data
											) :
										t
										.data;
									this.debug(
										`<<< ${e}`
										)
								}
								e.parseChunk(
									t
									.data,
									this
									.appendMissingNULLonIncoming
									)
							},
							this
							._webSocket
							.onclose =
							e =>
							{
								this.debug(
										`Connection closed to ${this._webSocket.url}`
										),
									this
									._cleanUp(),
									this
									.onWebSocketClose(
										e
										)
							},
							this
							._webSocket
							.onerror =
							e =>
							{
								this.onWebSocketError(
									e
									)
							},
							this
							._webSocket
							.onopen =
							() =>
							{
								const
									e =
									Object
									.assign(
										{},
										this
										.connectHeaders
										);
								this.debug(
										"Web Socket Opened..."
										),
									e[
										"accept-version"] =
									this
									.stompVersions
									.supportedVersions(),
									e[
										"heart-beat"] = [
										this
										.heartbeatOutgoing,
										this
										.heartbeatIncoming
									]
									.join(
										","
										),
									this
									._transmit(
									{
										command: "CONNECT",
										headers: e
									})
							}
					}
					_setupHeartbeat
						(n)
						{
							if (n
								.version !==
								o
								.V1_1 &&
								n
								.version !==
								o
								.V1_2
								)
								return;
							if (!
								n[
									"heart-beat"]
								)
								return;
							const [
								r,
								a
							] =
							n["heart-beat"]
								.split(
									","
									)
								.map(
									(e =>
										parseInt(
											e,
											10
											)
										)
									);
							if (0 !==
								this
								.heartbeatOutgoing &&
								0 !==
								a
								)
							{
								const
									n =
									Math
									.max(
										this
										.heartbeatOutgoing,
										a
										);
								this.debug(
										`send PING every ${n}ms`
										),
									this
									._pinger =
									setInterval(
										(() =>
										{
											this._webSocket
												.readyState ===
												e
												.StompSocketState
												.OPEN &&
												(this
													._webSocket
													.send(
														t
														),
													this
													.debug(
														">>> PING"
														)
													)
										}),
										n
										)
							}
							if (0 !==
								this
								.heartbeatIncoming &&
								0 !==
								r
								)
							{
								const
									e =
									Math
									.max(
										this
										.heartbeatIncoming,
										r
										);
								this.debug(
										`check PONG every ${e}ms`
										),
									this
									._ponger =
									setInterval(
										(() =>
										{
											const
												t =
												Date
												.now() -
												this
												._lastServerActivityTS;
											t > 2 *
												e &&
												(this
													.debug(
														`did not receive server activity for the last ${t}ms`
														),
													this
													._closeOrDiscardWebsocket()
													)
										}),
										e
										)
							}
						}
					_closeOrDiscardWebsocket
						()
						{
							this.discardWebsocketOnCommFailure ?
								(this
									.debug(
										"Discarding websocket, the underlying socket may linger for a while"
										),
									this
									.discardWebsocket()
									) :
								(this
									.debug(
										"Issuing close on the websocket"
										),
									this
									._closeWebsocket()
									)
						}
					forceDisconnect
						()
						{
							this._webSocket &&
								(this
									._webSocket
									.readyState !==
									e
									.StompSocketState
									.CONNECTING &&
									this
									._webSocket
									.readyState !==
									e
									.StompSocketState
									.OPEN ||
									this
									._closeOrDiscardWebsocket()
									)
						}
					_closeWebsocket
						()
						{
							this._webSocket
								.onmessage =
								() =>
								{},
								this
								._webSocket
								.close()
						}
					discardWebsocket
						()
						{
							var e,
								t;
							"function" !=
							typeof this
								._webSocket
								.terminate &&
								(e = this
									._webSocket,
									t =
									e =>
									this
									.debug(
										e
										),
									e
									.terminate =
									function ()
									{
										const
											n =
											() =>
											{};
										this.onerror =
											n,
											this
											.onmessage =
											n,
											this
											.onopen =
											n;
										const
											r =
											new Date,
											a =
											Math
											.random()
											.toString()
											.substring(
												2,
												8
												),
											i =
											this
											.onclose;
										this.onclose =
											e =>
											{
												const
													n =
													(
														new Date)
													.getTime() -
													r
													.getTime();
												t(`Discarded socket (#${a})  closed after ${n}ms, with code/reason: ${e.code}/${e.reason}`)
											},
											this
											.close(),
											i
											?.call(
												e,
												{
													code: 4001,
													reason: `Quick discarding socket (#${a}) without waiting for the shutdown sequence.`,
													wasClean:
														!
														1
												}
												)
									}
									),
								this
								._webSocket
								.terminate()
						}
					_transmit
						(e)
						{
							const
							{
								command: t,
								headers: r,
								body: a,
								binaryBody: i,
								skipContentLengthHeader: o
							} =
							e,
							s = new n(
							{
								command: t,
								headers: r,
								body: a,
								binaryBody: i,
								escapeHeaderValues: this
									._escapeHeaderValues,
								skipContentLengthHeader: o
							});
							let l =
								s
								.serialize();
							if (this
								.logRawCommunication ?
								this
								.debug(
									`>>> ${l}`
									) :
								this
								.debug(
									`>>> ${s}`
									),
								this
								.forceBinaryWSFrames &&
								"string" ==
								typeof l &&
								(l = (
										new TextEncoder)
									.encode(
										l
										)
									),
								"string" ==
								typeof l &&
								this
								.splitLargeFrames
								)
							{
								let e =
									l;
								for (; e
									.length >
									0;
									)
								{
									const
										t =
										e
										.substring(
											0,
											this
											.maxWebSocketChunkSize
											);
									e = e
										.substring(
											this
											.maxWebSocketChunkSize
											),
										this
										._webSocket
										.send(
											t
											),
										this
										.debug(
											`chunk sent = ${t.length}, remaining = ${e.length}`
											)
								}
							}
							else this
								._webSocket
								.send(
									l
									)
						}
					dispose
					()
					{
						if (this
							.connected
							)
							try
							{
								const
									e =
									Object
									.assign(
										{},
										this
										.disconnectHeaders
										);
								e.receipt ||
									(e.receipt =
										"close-" +
										this
										._counter++
										),
									this
									.watchForReceipt(
										e
										.receipt,
										(e =>
										{
											this._closeWebsocket(),
												this
												._cleanUp(),
												this
												.onDisconnect(
													e
													)
										})
										),
									this
									._transmit(
									{
										command: "DISCONNECT",
										headers: e
									})
							}
						catch (
							e
							)
						{
							this.debug(
								`Ignoring error during disconnect ${e}`
								)
						}
						else this
							._webSocket
							.readyState !==
							e
							.StompSocketState
							.CONNECTING &&
							this
							._webSocket
							.readyState !==
							e
							.StompSocketState
							.OPEN ||
							this
							._closeWebsocket()
					}
					_cleanUp
						()
						{
							this._connected = !
								1,
								this
								._pinger &&
								(clearInterval(
										this
										._pinger
										),
									this
									._pinger =
									void 0
									),
								this
								._ponger &&
								(clearInterval(
										this
										._ponger
										),
									this
									._ponger =
									void 0
									)
						}
					publish(
						e)
					{
						const
						{
							destination: t,
							headers: n,
							body: r,
							binaryBody: a,
							skipContentLengthHeader: i
						} =
						e,
						o = Object
							.assign(
								{
									destination: t
								},
								n
								);
						this._transmit(
						{
							command: "SEND",
							headers: o,
							body: r,
							binaryBody: a,
							skipContentLengthHeader: i
						})
					}
					watchForReceipt
						(e,
							t)
						{
							this._receiptWatchers[
									e
									] =
								t
						}
					subscribe
						(e, t,
							n = {}
							)
						{
							(n = Object
								.assign(
									{},
									n
									)
								)
							.id ||
								(n.id =
									"sub-" +
									this
									._counter++
									),
								n
								.destination =
								e,
								this
								._subscriptions[
									n
									.id
									] =
								t,
								this
								._transmit(
								{
									command: "SUBSCRIBE",
									headers: n
								});
							const
								r =
								this;
							return {
								id: n
									.id,
								unsubscribe: e =>
									r
									.unsubscribe(
										n
										.id,
										e
										)
							}
						}
					unsubscribe
						(e,
							t = {})
						{
							t = Object
								.assign(
									{},
									t
									),
								delete this
								._subscriptions[
									e
									],
								t
								.id =
								e,
								this
								._transmit(
								{
									command: "UNSUBSCRIBE",
									headers: t
								})
						}
					begin(e)
					{
						const
							t =
							e ||
							"tx-" +
							this
							._counter++;
						this._transmit(
						{
							command: "BEGIN",
							headers:
							{
								transaction: t
							}
						});
						const
							n =
							this;
						return {
							id: t,
							commit()
							{
								n.commit(
									t
									)
							},
							abort()
							{
								n.abort(
									t)
							}
						}
					}
					commit(
						e)
					{
						this._transmit(
						{
							command: "COMMIT",
							headers:
							{
								transaction: e
							}
						})
					}
					abort(e)
					{
						this._transmit(
						{
							command: "ABORT",
							headers:
							{
								transaction: e
							}
						})
					}
					ack(e, t,
						n = {}
						)
					{
						n = Object
							.assign(
								{},
								n
								),
							this
							._connectedVersion ===
							o
							.V1_2 ?
							n
							.id =
							e :
							n[
								"message-id"] =
							e,
							n
							.subscription =
							t,
							this
							._transmit(
							{
								command: "ACK",
								headers: n
							})
					}
					nack(e, t,
						n = {}
						)
					{
						return n =
							Object
							.assign(
								{},
								n
								),
							this
							._connectedVersion ===
							o
							.V1_2 ?
							n
							.id =
							e :
							n[
								"message-id"] =
							e,
							n
							.subscription =
							t,
							this
							._transmit(
							{
								command: "NACK",
								headers: n
							})
					}
				}
				class l
				{
					constructor
						(
							t = {})
						{
							this.stompVersions =
								o
								.default,
								this
								.connectionTimeout =
								0,
								this
								.reconnectDelay =
								5e3,
								this
								.heartbeatIncoming =
								1e4,
								this
								.heartbeatOutgoing =
								1e4,
								this
								.splitLargeFrames = !
								1,
								this
								.maxWebSocketChunkSize =
								8192,
								this
								.forceBinaryWSFrames = !
								1,
								this
								.appendMissingNULLonIncoming = !
								1,
								this
								.discardWebsocketOnCommFailure = !
								1,
								this
								.state =
								e
								.ActivationState
								.INACTIVE;
							const
								n =
								() =>
								{};
							this.debug =
								n,
								this
								.beforeConnect =
								n,
								this
								.onConnect =
								n,
								this
								.onDisconnect =
								n,
								this
								.onUnhandledMessage =
								n,
								this
								.onUnhandledReceipt =
								n,
								this
								.onUnhandledFrame =
								n,
								this
								.onStompError =
								n,
								this
								.onWebSocketClose =
								n,
								this
								.onWebSocketError =
								n,
								this
								.logRawCommunication = !
								1,
								this
								.onChangeState =
								n,
								this
								.connectHeaders = {},
								this
								._disconnectHeaders = {},
								this
								.configure(
									t
									)
						}
					get webSocket
						()
						{
							return this
								._stompHandler
								?._webSocket
						}
					get disconnectHeaders
						()
						{
							return this
								._disconnectHeaders
						}
					set disconnectHeaders
						(e)
						{
							this._disconnectHeaders =
								e,
								this
								._stompHandler &&
								(this
									._stompHandler
									.disconnectHeaders =
									this
									._disconnectHeaders
									)
						}
					get connected
						()
						{
							return !
								!
								this
								._stompHandler &&
								this
								._stompHandler
								.connected
						}
					get connectedVersion
						()
						{
							return this
								._stompHandler ?
								this
								._stompHandler
								.connectedVersion :
								void 0
						}
					get active
						()
						{
							return this
								.state ===
								e
								.ActivationState
								.ACTIVE
						}
					_changeState
						(e)
						{
							this.state =
								e,
								this
								.onChangeState(
									e
									)
						}
					configure
						(e)
						{
							Object
								.assign(
									this,
									e
									)
						}
					activate
						()
						{
							const
								t =
								() =>
								{
									this.active ?
										this
										.debug(
											"Already ACTIVE, ignoring request to activate"
											) :
										(this
											._changeState(
												e
												.ActivationState
												.ACTIVE
												),
											this
											._connect()
											)
								};
							this.state ===
								e
								.ActivationState
								.DEACTIVATING ?
								(this
									.debug(
										"Waiting for deactivation to finish before activating"
										),
									this
									.deactivate()
									.then(
										(() =>
										{
											t()
										})
										)
									) :
								t()
						}
					async _connect()
					{
						if (await this
							.beforeConnect(),
							this
							._stompHandler
							)
							return void this
								.debug(
									"There is already a stompHandler, skipping the call to connect"
									);
						if (!
							this
							.active
							)
							return void this
								.debug(
									"Client has been marked inactive, will not attempt to connect"
									);
						this.connectionTimeout >
							0 &&
							(this
								._connectionWatcher &&
								clearTimeout(
									this
									._connectionWatcher
									),
								this
								._connectionWatcher =
								setTimeout(
									(() =>
									{
										this.connected ||
											(this
												.debug(
													`Connection not established in ${this.connectionTimeout}ms, closing socket`
													),
												this
												.forceDisconnect()
												)
									}),
									this
									.connectionTimeout
									)
								),
							this
							.debug(
								"Opening Web Socket..."
								);
						const
							t =
							this
							._createWebSocket();
						this._stompHandler =
							new s(
								this,
								t,
								{
									debug: this
										.debug,
									stompVersions: this
										.stompVersions,
									connectHeaders: this
										.connectHeaders,
									disconnectHeaders: this
										._disconnectHeaders,
									heartbeatIncoming: this
										.heartbeatIncoming,
									heartbeatOutgoing: this
										.heartbeatOutgoing,
									splitLargeFrames: this
										.splitLargeFrames,
									maxWebSocketChunkSize: this
										.maxWebSocketChunkSize,
									forceBinaryWSFrames: this
										.forceBinaryWSFrames,
									logRawCommunication: this
										.logRawCommunication,
									appendMissingNULLonIncoming: this
										.appendMissingNULLonIncoming,
									discardWebsocketOnCommFailure: this
										.discardWebsocketOnCommFailure,
									onConnect: e =>
									{
										if (this
											._connectionWatcher &&
											(clearTimeout(
													this
													._connectionWatcher
													),
												this
												._connectionWatcher =
												void 0
												),
											!
											this
											.active
											)
											return this
												.debug(
													"STOMP got connected while deactivate was issued, will disconnect now"
													),
												void this
												._disposeStompHandler();
										this.onConnect(
											e
											)
									},
									onDisconnect: e =>
									{
										this.onDisconnect(
											e
											)
									},
									onStompError: e =>
									{
										this.onStompError(
											e
											)
									},
									onWebSocketClose: t =>
									{
										this._stompHandler =
											void 0,
											this
											.state ===
											e
											.ActivationState
											.DEACTIVATING &&
											this
											._changeState(
												e
												.ActivationState
												.INACTIVE
												),
											this
											.onWebSocketClose(
												t
												),
											this
											.active &&
											this
											._schedule_reconnect()
									},
									onWebSocketError: e =>
									{
										this.onWebSocketError(
											e
											)
									},
									onUnhandledMessage: e =>
									{
										this.onUnhandledMessage(
											e
											)
									},
									onUnhandledReceipt: e =>
									{
										this.onUnhandledReceipt(
											e
											)
									},
									onUnhandledFrame: e =>
									{
										this.onUnhandledFrame(
											e
											)
									}
								}
								),
							this
							._stompHandler
							.start()
					}
					_createWebSocket
						()
						{
							let
							e;
							if (this
								.webSocketFactory
								)
								e =
								this
								.webSocketFactory();
							else
							{
								if (!
									this
									.brokerURL
									)
									throw new Error(
										"Either brokerURL or webSocketFactory must be provided"
										);
								e = new WebSocket(
									this
									.brokerURL,
									this
									.stompVersions
									.protocolVersions()
									)
							}
							return e
								.binaryType =
								"arraybuffer",
								e
						}
					_schedule_reconnect
						()
						{
							this.reconnectDelay >
								0 &&
								(this
									.debug(
										`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`
										),
									this
									._reconnector =
									setTimeout(
										(() =>
										{
											this._connect()
										}),
										this
										.reconnectDelay
										)
									)
						}
					async deactivate(
						t = {}
						)
					{
						const
							n =
							t
							.force ||
							!
							1,
							r =
							this
							.active;
						let
						a;
						if (this
							.state ===
							e
							.ActivationState
							.INACTIVE
							)
							return this
								.debug(
									"Already INACTIVE, nothing more to do"
									),
								Promise
								.resolve();
						if (this
							._changeState(
								e
								.ActivationState
								.DEACTIVATING
								),
							this
							._reconnector &&
							(clearTimeout(
									this
									._reconnector
									),
								this
								._reconnector =
								void 0
								),
							!
							this
							._stompHandler ||
							this
							.webSocket
							.readyState ===
							e
							.StompSocketState
							.CLOSED
							)
							return this
								._changeState(
									e
									.ActivationState
									.INACTIVE
									),
								Promise
								.resolve();
						{
							const
								e =
								this
								._stompHandler
								.onWebSocketClose;
							a = new Promise(
								((t, n) =>
								{
									this._stompHandler
										.onWebSocketClose =
										n =>
										{
											e(n),
												t()
										}
								})
								)
						}
						return n ?
							this
							._stompHandler
							?.discardWebsocket() :
							r &&
							this
							._disposeStompHandler(),
							a
					}
					forceDisconnect
						()
						{
							this._stompHandler &&
								this
								._stompHandler
								.forceDisconnect()
						}
					_disposeStompHandler
						()
						{
							this._stompHandler &&
								this
								._stompHandler
								.dispose()
						}
					publish(
						e)
					{
						this._checkConnection(),
							this
							._stompHandler
							.publish(
								e
								)
					}
					_checkConnection
						()
						{
							if (!
								this
								.connected
								)
								throw new TypeError(
									"There is no underlying STOMP connection"
									)
						}
					watchForReceipt
						(e,
							t)
						{
							this._checkConnection(),
								this
								._stompHandler
								.watchForReceipt(
									e,
									t
									)
						}
					subscribe
						(e, t,
							n = {}
							)
						{
							return this
								._checkConnection(),
								this
								._stompHandler
								.subscribe(
									e,
									t,
									n
									)
						}
					unsubscribe
						(e,
							t = {})
						{
							this._checkConnection(),
								this
								._stompHandler
								.unsubscribe(
									e,
									t
									)
						}
					begin(e)
					{
						return this
							._checkConnection(),
							this
							._stompHandler
							.begin(
								e
								)
					}
					commit(
						e)
					{
						this._checkConnection(),
							this
							._stompHandler
							.commit(
								e
								)
					}
					abort(e)
					{
						this._checkConnection(),
							this
							._stompHandler
							.abort(
								e
								)
					}
					ack(e, t,
						n = {}
						)
					{
						this._checkConnection(),
							this
							._stompHandler
							.ack(
								e,
								t,
								n
								)
					}
					nack(e, t,
						n = {}
						)
					{
						this._checkConnection(),
							this
							._stompHandler
							.nack(
								e,
								t,
								n
								)
					}
				}
				class c
				{
					constructor
						(e)
						{
							this.client =
								e
						}
					get outgoing
						()
						{
							return this
								.client
								.heartbeatOutgoing
						}
					set outgoing
						(e)
						{
							this.client
								.heartbeatOutgoing =
								e
						}
					get incoming
						()
						{
							return this
								.client
								.heartbeatIncoming
						}
					set incoming
						(e)
						{
							this.client
								.heartbeatIncoming =
								e
						}
				}
				class u extends l
				{
					constructor
						(e)
						{
							super
								(),
								this
								.maxWebSocketFrameSize =
								16384,
								this
								._heartbeatInfo =
								new c(
									this
									),
								this
								.reconnect_delay =
								0,
								this
								.webSocketFactory =
								e,
								this
								.debug =
								(...
									e) =>
								{
									console
										.log(
											...
											e
											)
								}
						}
					_parseConnect
						(...
							e)
						{
							let t,
								n,
								r,
								a = {};
							if (e
								.length <
								2
								)
								throw new Error(
									"Connect requires at least 2 arguments"
									);
							return "function" ==
								typeof e[
									1
									] ?
								[a, n,
									r,
									t
								] =
								e :
								6 ===
								e
								.length ?
								[a.login,
									a
									.passcode,
									n,
									r,
									t,
									a
									.host
								] =
								e :
								[a.login,
									a
									.passcode,
									n,
									r,
									t
								] =
								e,
								[a, n,
									r,
									t
								]
						}
					connect(...
						e
						)
					{
						const
							t =
							this
							._parseConnect(
								...
								e
								);
						t[0] &&
							(this
								.connectHeaders =
								t[
									0]
								),
							t[
								1] &&
							(this
								.onConnect =
								t[
									1]
								),
							t[
								2] &&
							(this
								.onStompError =
								t[
									2]
								),
							t[
								3] &&
							(this
								.onWebSocketClose =
								t[
									3]
								),
							super
							.activate()
					}
					disconnect
						(e,
							t = {})
						{
							e && (this
									.onDisconnect =
									e
									),
								this
								.disconnectHeaders =
								t,
								super
								.deactivate()
						}
					send(e, t = {},
						n =
						""
						)
					{
						const
							r = !
							1 ===
							(t = Object
								.assign(
									{},
									t
									)
								)[
								"content-length"
								];
						r && delete t[
								"content-length"
								],
							this
							.publish(
							{
								destination: e,
								headers: t,
								body: n,
								skipContentLengthHeader: r
							})
					}
					set reconnect_delay
						(e)
						{
							this.reconnectDelay =
								e
						}
					get ws()
					{
						return this
							.webSocket
					}
					get version
						()
						{
							return this
								.connectedVersion
						}
					get onreceive
						()
						{
							return this
								.onUnhandledMessage
						}
					set onreceive
						(e)
						{
							this.onUnhandledMessage =
								e
						}
					get onreceipt
						()
						{
							return this
								.onUnhandledReceipt
						}
					set onreceipt
						(e)
						{
							this.onUnhandledReceipt =
								e
						}
					get heartbeat
						()
						{
							return this
								._heartbeatInfo
						}
					set heartbeat
						(e)
						{
							this.heartbeatIncoming =
								e
								.incoming,
								this
								.heartbeatOutgoing =
								e
								.outgoing
						}
				}
				class d
				{
					static client
						(e,
							t)
						{
							return null ==
								t &&
								(t = o
									.default
									.protocolVersions()
									),
								new u(
									(() =>
										new(d
											.WebSocketClass ||
											WebSocket
											)
										(e,
											t)
										)
									)
						}
					static over
						(e)
						{
							let
							t;
							return "function" ==
								typeof e ?
								t =
								e :
								(console
									.warn(
										"Stomp.over did not receive a factory, auto reconnect will not work. Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over"
										),
									t =
									() =>
									e
									),
								new u(
									t
									)
						}
				}
				d.WebSocketClass =
					null, e
					.Client =
					l, e
					.CompatClient =
					u, e
					.FrameImpl =
					n, e
					.Parser =
					r, e
					.Stomp =
					d, e
					.StompConfig =
					class
					{}, e
					.StompHeaders =
					class
					{}, e
					.Versions =
					o
			}, "object" ==
			typeof n &&
			void 0 !== t ?
			a(n) :
			"function" ==
			typeof define &&
			define.amd ?
			define([
					"exports"],
				a) : a((r =
					"undefined" !=
					typeof globalThis ?
					globalThis :
					r ||
					self)
				.StompJs = {}
				)
	},
	{}],
	23: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.default =
			void 0;
		var a = r(e(
				"@babel/runtime/regenerator")),
			i = r(e(
				"@babel/runtime/helpers/asyncToGenerator")),
			o = e(
				"./constants"
				),
			s = e(
			"./utils"),
			l = function ()
			{
				var e = (0,
					i
					.default
					)(a
					.default
					.mark(
						(function e(
							t
							)
						{
							var n,
								r,
								i,
								l,
								c,
								u,
								d;
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												return n =
													t
													.method,
													r =
													void 0 ===
													n ?
													"get" :
													n,
													i =
													t
													.endpoint,
													l =
													t
													.body,
													c = {
														method: r
															.toUpperCase(),
														headers:
														{
															"Content-Type": "application/json"
														}
													},
													l &&
													(c.body =
														JSON
														.stringify(
															l
															)
														),
													e
													.next =
													5,
													(0, s
														.httpRequest
														)
													("".concat(
															o
															.API_URL,
															"/api/"
															)
														.concat(
															i
															),
														c
														);
											case 5:
												return u =
													e
													.sent,
													e
													.next =
													8,
													u
													.text();
											case 8:
												return d =
													e
													.sent,
													e
													.abrupt(
														"return",
														d ?
														JSON
														.parse(
															d
															) :
														{}
														);
											case 10:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}(),
			c = function ()
			{
				var e = (0,
					i
					.default
					)(a
					.default
					.mark(
						(function e(
							t,
							n,
							r,
							i
							)
						{
							var l,
								c,
								u,
								d,
								h,
								f,
								p,
								m;
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												return l =
													i
													.utmCampaign,
													c =
													i
													.utmSource,
													u =
													i
													.utmMedium,
													d =
													i
													.utmContent,
													h =
													i
													.referenceTail,
													f =
													i
													.sourceReference,
													p =
													i
													.embedUrl,
													e
													.next =
													3,
													(0, s
														.httpRequest
														)
													("".concat(
														o
														.API_URL,
														"/api/sessions"
														),
													{
														method: "POST",
														headers:
														{
															Accept: "application/json",
															"Content-Type": "application/json",
															"Client-Key": t
														},
														body: JSON
															.stringify(
															{
																id: null,
																projectId: n,
																projectIdLong: r,
																utmCampaign: l ?
																	l
																	.slice(
																		0,
																		128
																		) :
																	null,
																utmSource: c ?
																	c
																	.slice(
																		0,
																		128
																		) :
																	null,
																utmMedium: u ?
																	u
																	.slice(
																		0,
																		128
																		) :
																	null,
																utmContent: d ?
																	d
																	.slice(
																		0,
																		128
																		) :
																	null,
																referenceTail: h ?
																	h
																	.slice(
																		1,
																		513
																		) :
																	null,
																sourceReference: f ?
																	f
																	.slice(
																		0,
																		512
																		) :
																	null,
																embedUrl: p ?
																	p
																	.slice(
																		0,
																		1024
																		) :
																	null
															}),
														timeout: 1e4
													});
											case 3:
												return m =
													e
													.sent,
													e
													.next =
													6,
													m
													.json();
											case 6:
												return e
													.abrupt(
														"return",
														e
														.sent
														);
											case 7:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t,
					n,
					r, a
					)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}(),
			u = function ()
			{
				var e = (0,
					i
					.default
					)(a
					.default
					.mark(
						(function e(
							t,
							n
							)
						{
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												if (t &&
													n
													)
												{
													e.next =
														2;
													break
												}
												return e
													.abrupt(
														"return",
														null
														);
											case 2:
												return e
													.next =
													4,
													(0, s
														.httpRequest
														)
													("".concat(
															o
															.API_URL,
															"/api/sessions/"
															)
														.concat(
															n,
															"/refresh"
															),
														{
															method: "PATCH",
															headers:
															{
																"Client-Key": t
															},
															timeout: 7e3
														}
														);
											case 4:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t, n
					)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}(),
			d = function ()
			{
				var e = (0,
					i
					.default
					)(a
					.default
					.mark(
						(function e(
							t
							)
						{
							var
							n;
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												return e
													.next =
													2,
													(0, s
														.httpRequest
														)
													("".concat(
															o
															.API_URL,
															"/api/projects/"
															)
														.concat(
															t,
															"/meta"
															),
														{
															timeout: 4e3
														}
														);
											case 2:
												return n =
													e
													.sent,
													e
													.next =
													5,
													n
													.json();
											case 5:
												return e
													.abrupt(
														"return",
														e
														.sent
														);
											case 6:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}(),
			h = function ()
			{
				var e = (0,
					i
					.default
					)(a
					.default
					.mark(
						(function e(
							t
							)
						{
							var n,
								r,
								i;
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												if (n =
													t
													.projectNumericId,
													r =
													t
													.sessionId,
													i =
													t
													.value,
													n &&
													r
													)
												{
													e.next =
														3;
													break
												}
												return e
													.abrupt(
														"return"
														);
											case 3:
												return e
													.next =
													5,
													(0, s
														.httpRequest
														)
													("".concat(
														o
														.API_URL,
														"/api/actions/common"
														),
													{
														method: "POST",
														headers:
														{
															"Content-Type": "application/json"
														},
														body: JSON
															.stringify(
															{
																actionTypeName: "READ_PERCENTAGE",
																sessionId: r,
																projectId: n,
																blockId: null,
																fields:
																{
																	percent: i
																}
															}),
														timeout: 3e3
													});
											case 5:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}(),
			f = {
				sendRequest: l,
				createSession: c,
				refreshSession: u,
				getProjectMetaInfo: d,
				sendProjectReadPercent: h
			};
		n.default = f
	},
	{
		"./constants": 24,
		"./utils": 30,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/interopRequireDefault": 12,
		"@babel/runtime/regenerator": 18
	}],
	24: [function (e, t, n)
	{
		"use strict";
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.READ_PERCENT_SEND_INTERVAL =
			n
			.READ_PERCENT_ERROR_MARGIN =
			n
			.PROJECT_MODES =
			n
			.MULTIPLAYER_WS_URL =
			n.MODES = n
			.MAX_REFRESH_SESSION_AWAITING =
			n
			.EMBED_PROJECT_INITIALIZED_ATTRIBUTE_NAME =
			n
			.EMBED_PROJECT_CLASSNAME =
			n.CDN_URL = n
			.API_URL =
			void 0, n
			.API_URL =
			"https://api.interacty.me",
			n
			.MULTIPLAYER_WS_URL =
			"wss://api.interacty.me/api/multiplayer/ws",
			n.CDN_URL =
			"https://p.interacty.me",
			n
			.MAX_REFRESH_SESSION_AWAITING =
			9e5, n
			.READ_PERCENT_SEND_INTERVAL =
			4e3, n
			.READ_PERCENT_ERROR_MARGIN =
			0, n
			.EMBED_PROJECT_CLASSNAME =
			"remix-app", n
			.EMBED_PROJECT_INITIALIZED_ATTRIBUTE_NAME =
			"initialized", n
			.MODES = {
				PUBLISHED: "published",
				PREVIEW: "preview",
				EMERGENCY: "emergency"
			}, n
			.PROJECT_MODES = {
				SINGLE: "SINGLE",
				MULTIPLAYER: "MULTIPLAYER"
			}
	},
	{}],
	25: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.RemixLoader =
			void 0;
		var a = r(e(
				"@babel/runtime/regenerator")),
			i = r(e(
				"@babel/runtime/helpers/slicedToArray")),
			o = r(e(
				"@babel/runtime/helpers/asyncToGenerator")),
			s = r(e(
				"@babel/runtime/helpers/createClass")),
			l = r(e(
				"@babel/runtime/helpers/classCallCheck")),
			c = r(e(
				"@babel/runtime/helpers/defineProperty")),
			u = r(e(
				"@babel/runtime/helpers/classPrivateFieldGet")),
			d = r(e(
				"@babel/runtime/helpers/classPrivateFieldSet")),
			h = e(
				"@braintree/sanitize-url"
				),
			f = r(e(
				"smoothscroll-polyfill")),
			p = e(
			"./utils"),
			m = e(
				"./constants"
				),
			b = r(e(
				"./api")),
			v = r(e(
				"./services/googleAnalytics")),
			g = r(e(
				"./services/googleTagManager")),
			y = r(e(
				"./services/webSocket")),
			w = r(e(
				"./services/session"));
		function _(e, t)
		{
			var n = Object
				.keys(e);
			if (Object
				.getOwnPropertySymbols
				)
			{
				var r =
					Object
					.getOwnPropertySymbols(
						e);
				t && (r = r
						.filter(
							(function (
								t
								)
							{
								return Object
									.getOwnPropertyDescriptor(
										e,
										t
										)
									.enumerable
							})
							)
						), n
					.push
					.apply(
						n, r
						)
			}
			return n
		}
		function k(e)
		{
			for (var t =
				1; t <
				arguments
				.length; t++
				)
			{
				var n =
					null !=
					arguments[
						t] ?
					arguments[
						t] :
					{};
				t % 2 ? _(
						Object(
							n
							),
						!0)
					.forEach(
						(function (
							t
							)
						{
							(0, c
								.default
								)
							(e, t,
								n[
									t]
								)
						})
						) :
					Object
					.getOwnPropertyDescriptors ?
					Object
					.defineProperties(
						e,
						Object
						.getOwnPropertyDescriptors(
							n
							)
						) :
					_(Object(
						n
						))
					.forEach(
						(function (
							t
							)
						{
							Object
								.defineProperty(
									e,
									t,
									Object
									.getOwnPropertyDescriptor(
										n,
										t
										)
									)
						}))
			}
			return e
		}
		function S(e, t, n)
		{
			! function (e,
				t)
			{
				if (t.has(
					e))
					throw new TypeError(
						"Cannot initialize the same private elements twice on an object"
						)
			}(e, t), t.set(
				e, n)
		}
		f.default
	.polyfill();
		var E = new WeakMap,
			x = new WeakMap,
			C = new WeakMap,
			T = new WeakMap,
			I = new WeakMap,
			O = new WeakMap,
			M = new WeakMap,
			R = new WeakMap,
			P = new WeakMap,
			A = new WeakMap,
			L = new WeakMap,
			W = new WeakMap,
			j = new WeakMap,
			N = new WeakMap,
			D = new WeakMap,
			H = new WeakMap,
			B = new WeakMap,
			U = new WeakMap,
			V = new WeakMap,
			F = new WeakMap,
			G = new WeakMap,
			q = new WeakMap,
			z = new WeakMap,
			Y = new WeakMap,
			$ = new WeakMap,
			J = new WeakMap,
			X = new WeakMap,
			K = new WeakMap,
			Q = new WeakMap,
			Z = new WeakMap,
			ee =
			new WeakMap,
			te =
			new WeakMap,
			ne =
			new WeakMap,
			re =
			new WeakMap,
			ae =
			new WeakMap,
			ie =
			new WeakMap,
			oe =
			new WeakMap,
			se =
			new WeakMap,
			le =
			new WeakMap,
			ce =
			new WeakMap,
			ue =
			new WeakMap,
			de =
			new WeakMap,
			he =
			new WeakMap,
			fe = (0, s
				.default)((
				function e(
					t)
				{
					var n,
						r,
						s,
						f,
						_,
						fe =
						this,
						pe =
						t
						.mode,
						me =
						t
						.projectMode,
						be =
						t
						.nodeElement,
						ve =
						t
						.remixUrl,
						ge =
						t
						.features,
						ye =
						t
						.projectId,
						we =
						t
						.projectNumericId,
						_e =
						t
						.projectStructure,
						ke =
						t
						.initialWidth,
						Se =
						t
						.initialHeight,
						Ee =
						t
						.lng,
						xe =
						t
						.additionalTopOffset,
						Ce =
						t
						.onEvent,
						Te =
						t
						.isSubscriptionExpired;
					(0, l
						.default
						)
					(this,
						e
						),
					S(this, E,
						{
							writable:
								!
								0,
							value: void 0
						}),
						S(this,
							x,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							C,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							T,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							I,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							O,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							M,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							R,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							P,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							A,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							L,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							W,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							j,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							N,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							D,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							H,
							{
								writable:
									!
									0,
								value:
									!
									1
							}
							),
						S(this,
							B,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							U,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							V,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							F,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							G,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							q,
							{
								writable:
									!
									0,
								value: []
							}
							),
						S(this,
							z,
							{
								writable:
									!
									0,
								value:
								{}
							}
							),
						S(this,
							Y,
							{
								writable:
									!
									0,
								value: null
							}
							),
						S(this,
							$,
							{
								writable:
									!
									0,
								value:
									!
									1
							}
							),
						S(this,
							J,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						S(this,
							X,
							{
								writable:
									!
									0,
								value:
								{
									instance: null,
									data:
									{
										clientId: null,
										projectId: null,
										utmCampaign: null,
										utmSource: null,
										utmMedium: null,
										utmContent: null,
										referenceTail: null,
										sourceReference: null
									},
									createdAt: null,
									updatedAt: null,
									maxRefreshAwaiting: m
										.MAX_REFRESH_SESSION_AWAITING
								}
							}
							),
						S(this,
							K,
							{
								writable:
									!
									0,
								value:
								{
									value: 0,
									sentValue: null,
									inProgress:
										!
										1,
									sendInterval: m
										.READ_PERCENT_SEND_INTERVAL
								}
							}
							),
						(0, c
							.default
							)
						(this,
							"createIframe",
							(0, o
								.default
								)
							(a.default
								.mark(
									(function e()
									{
										var
										t;
										return a
											.default
											.wrap(
												(function (
													e
													)
												{
													for (;;)
														switch (
															e
															.prev =
															e
															.next
															)
														{
														case 0:
															(0, u
																.default
																)
															(fe,
																H) ?
															((0, u
																	.default)
																(fe,
																	T)
																.style
																.position =
																"fixed",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.zIndex =
																"999",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.top =
																"0",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.left =
																"0",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.width =
																"100%",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.height =
																"100%"
																) :
															((0, u
																	.default)
																(fe,
																	T)
																.style
																.position =
																"relative",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.margin =
																"0 auto"
																),
															(0, d
																.default
																)
															(fe, B,
																(0, p
																	.getScrollableParent
																	)
																((0, u
																		.default)
																	(fe,
																		T)
																	)
																),
															(0, u
																.default
																)
															(fe,
																T)
															.innerHTML
																=
																"",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.className =
																"remix_cnt",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.overflow =
																"hidden",
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.padding =
																0,
																(0, u
																	.default
																	)
																(fe,
																	T)
																.style
																.boxSizing =
																"border-box",
																(0, u
																	.default
																	)
																(fe,
																	H) ||
																((0, u
																		.default)
																	(fe,
																		T)
																	.style
																	.maxWidth =
																	"100%",
																	(0, u
																		.default
																		)
																	(fe,
																		T)
																	.style
																	.width =
																	""
																	.concat(
																		(0, u
																			.default
																			)
																		(fe,
																			A),
																		"px"
																		),
																	(0, u
																		.default
																		)
																	(fe,
																		T)
																	.style
																	.height =
																	""
																	.concat(
																		(0, u
																			.default
																			)
																		(fe,
																			L),
																		"px"
																		)
																	),
																(0, u
																	.default
																	)
																(fe,
																	C) ?
																(0, u
																	.default
																	)
																(fe,
																	O)
																.includes(
																	"NO_LOGO"
																	) ||
																((0, u
																		.default)
																	(fe,
																		T)
																	.appendChild(
																		(0, u
																			.default
																			)
																		(fe,
																			V)
																		.render()
																		),
																	(0, u
																		.default
																		)
																	(fe,
																		H) ?
																	document
																	.documentElement
																	.appendChild(
																		(0, u
																			.default
																			)
																		(fe,
																			ie)
																		.call(
																			fe
																			)
																		) :
																	(0, u
																		.default
																		)
																	(fe,
																		T)
																	.appendChild(
																		(0, u
																			.default
																			)
																		(fe,
																			ie)
																		.call(
																			fe
																			)
																		)
																	) :
																(0, u
																	.default
																	)
																(fe,
																	T)
																.appendChild(
																	(0, u
																		.default
																		)
																	(fe,
																		V)
																	.render()
																	),
																(0, u
																	.default
																	)
																(fe,
																	te)
																.call(
																	fe,
																	window,
																	"message",
																	(0, u
																		.default
																		)
																	(fe,
																		ee),
																	!
																	1
																	),
																(t = document
																	.createElement(
																		"iframe"
																		)
																	)
																.id =
																"remix-iframe",
																t
																.style
																.border =
																0,
																t
																.style
																.width =
																"100%",
																t
																.style
																.height =
																"100%",
																t
																.style
																.overflow =
																"hidden",
																t
																.setAttribute(
																	"allowFullScreen",
																	""
																	),
																t
																.src =
																(0, u
																	.default
																	)
																(fe,
																	I),
																(0, d
																	.default
																	)
																(fe, G,
																	t
																	),
																(0, u
																	.default
																	)
																(fe,
																	T)
																.appendChild(
																	t
																	),
																t
																.onload =
																function ()
																{
																	(0, u
																		.default
																		)
																	(fe,
																		se)
																	.call
																		(fe, "init",
																		{
																			projectId: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					M),
																			projectNumericId: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					R),
																			projectStructure: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					P),
																			lng: (0, u
																					.default
																					)
																				(fe,
																					W),
																			mode: (0,
																					u
																					.default
																					)
																				(fe,
																					E),
																			projectMode: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					x),
																			features: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					O),
																			isSubscriptionExpired: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					D),
																			url: (0, p
																					.getWindowLocation
																					)
																				(),
																			urlParams: (
																					0,
																					p
																					.getWindowQueryParams
																					)
																				()
																		})
																};
														case 21:
														case "end":
															return e
																.stop()
														}
												}),
												e
												)
									})
									)
								)
							),
						(0, c
							.default
							)
						(this,
							"destroyIframe",
							(function ()
							{
								(0, d
									.default
									)
								(fe, $,
									!
									0
									),
								(0, u
									.default
									)
								(fe,
									Y) &&
								(0, u
									.default
									)
								(fe,
									Y)
								.disconnect
									(),
									(0, u
										.default
										)
									(fe,
										ne)
									.call(
										fe
										)
							})
							),
						(0, c
							.default
							)
						(this,
							"changeAdditionalTopOffset",
							(function (
								e
								)
							{
								p.validator
									.isNumber(
										e
										) &&
									(0, d
										.default
										)
									(fe, j,
										e
										)
							})
							),
						S(this,
							Q,
							{
								writable:
									!
									0,
								value: (n =
									(0, o
										.default
										)
									(a.default
										.mark(
											(function e()
											{
												var t,
													n,
													r,
													i,
													o,
													s,
													l,
													c,
													d,
													h,
													f =
													arguments;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	if (t =
																		f
																		.length >
																		0 &&
																		void 0 !==
																		f[
																			0] ?
																		f[
																			0] :
																		Date
																		.now(),
																		(0, u
																			.default
																			)
																		(fe,
																			C)
																		)
																	{
																		e.next =
																			3;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 3:
																	return n =
																		window
																		.location
																		.href,
																		r =
																		window
																		.location
																		.search,
																		i =
																		new URLSearchParams(
																			r
																			),
																		o =
																		i
																		.get(
																			"utm_campaign"
																			),
																		s =
																		i
																		.get(
																			"utm_source"
																			),
																		l =
																		i
																		.get(
																			"utm_medium"
																			),
																		c =
																		i
																		.get(
																			"utm_content"
																			),
																		d =
																		r,
																		h =
																		document
																		.referrer,
																		(0, u
																			.default
																			)
																		(fe,
																			X)
																		.instance ||
																		((0, u
																				.default)
																			(fe,
																				X)
																			.instance =
																			new w
																			.default(
																			{
																				clientId: (
																						0,
																						u
																						.default
																						)
																					(fe,
																						J),
																				projectId: (
																						0,
																						u
																						.default
																						)
																					(fe,
																						M),
																				projectIdLong: (
																						0,
																						u
																						.default
																						)
																					(fe,
																						R),
																				utmCampaign: o,
																				utmSource: s,
																				utmMedium: l,
																				utmContent: c,
																				referenceTail: d,
																				sourceReference: h,
																				embedUrl: n
																			})
																			),
																		e
																		.next =
																		15,
																		(0, u
																			.default
																			)
																		(fe,
																			X)
																		.instance
																		.create();
																case 15:
																	(0, u
																		.default
																		)
																	(fe,
																		X)
																	.createdAt
																		=
																		t,
																		(0, u
																			.default
																			)
																		(fe,
																			X)
																		.updatedAt =
																		t;
																case 17:
																case "end":
																	return e
																		.stop()
																}
														}),
														e
														)
											})
											)
										),
									function ()
									{
										return n
											.apply(
												this,
												arguments
												)
									}
									)
							}
							),
						S(this,
							Z,
							{
								writable:
									!
									0,
								value: (r =
									(0, o
										.default
										)
									(a.default
										.mark(
											(function e()
											{
												var
												t;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	if ((0, u
																			.default
																			)
																		(fe,
																			C)
																		)
																	{
																		e.next =
																			2;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 2:
																	if (!
																		((t = Date
																				.now()
																				) -
																			(0, u
																				.default
																				)
																			(fe,
																				X)
																			.updatedAt >
																			(0, u
																				.default
																				)
																			(fe,
																				X)
																			.maxRefreshAwaiting
																			)
																		)
																	{
																		e.next =
																			8;
																		break
																	}
																	return e
																		.next =
																		6,
																		(0, u
																			.default
																			)
																		(fe,
																			Q)
																		.call(
																			fe,
																			t
																			);
																case 6:
																	e.next =
																		11;
																	break;
																case 8:
																	return e
																		.next =
																		10,
																		(0, u
																			.default
																			)
																		(fe,
																			X)
																		.instance
																		.refresh();
																case 10:
																	(0, u
																		.default
																		)
																	(fe,
																		X)
																	.updatedAt
																		=
																		t;
																case 11:
																case "end":
																	return e
																		.stop()
																}
														}),
														e
														)
											})
											)
										),
									function ()
									{
										return r
											.apply(
												this,
												arguments
												)
									}
									)
							}
							),
						S(this,
							ee,
							{
								writable:
									!
									0,
								value: (s =
									(0, o
										.default
										)
									(a.default
										.mark(
											(function e(
												t
												)
											{
												var n,
													r,
													o,
													s,
													l,
													c,
													f,
													w,
													_,
													S,
													E,
													x,
													I,
													O,
													M,
													R,
													A,
													L,
													W,
													N,
													D,
													q,
													$,
													K,
													ee,
													ne,
													ae,
													ie,
													oe,
													pe,
													me;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	if (n =
																		t
																		.origin,
																		r =
																		void 0 ===
																		n ?
																		null :
																		n,
																		o =
																		t
																		.data,
																		s =
																		void 0 ===
																		o ?
																		{} :
																		o,
																		l =
																		t
																		.source,
																		c =
																		void 0 ===
																		l ?
																		null :
																		l,
																		(0, u
																			.default
																			)
																		(fe,
																			G) &&
																		(0, u
																			.default
																			)
																		(fe,
																			G)
																		.contentWindow ===
																		c &&
																		r ===
																		(0, u
																			.default
																			)
																		(fe,
																			U)
																		)
																	{
																		e.next =
																			3;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 3:
																	e.t0 =
																		s
																		.method,
																		e
																		.next =
																		"initError" ===
																		e
																		.t0 ?
																		6 :
																		"initialized" ===
																		e
																		.t0 ?
																		9 :
																		"activity" ===
																		e
																		.t0 ?
																		20 :
																		"setSize" ===
																		e
																		.t0 ?
																		22 :
																		"scrollParent" ===
																		e
																		.t0 ?
																		24 :
																		"connect-ws" ===
																		e
																		.t0 ?
																		26 :
																		"disconnect-ws" ===
																		e
																		.t0 ?
																		40 :
																		"send-ws-message" ===
																		e
																		.t0 ?
																		44 :
																		"send-request" ===
																		e
																		.t0 ?
																		48 :
																		"redirect" ===
																		e
																		.t0 ?
																		73 :
																		82;
																	break;
																case 6:
																	return (0,
																			u
																			.default
																			)
																		(fe,
																			V)
																		.hideAndDestroy(),
																		(0, u
																			.default
																			)
																		(fe,
																			T)
																		.appendChild(
																			(0, u
																				.default
																				)
																			(fe,
																				F)
																			.render()
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 9:
																	return (0,
																			u
																			.default
																			)
																		(fe,
																			V)
																		.hideAndDestroy(),
																		(0, u
																			.default
																			)
																		(fe,
																			re)
																		.call(
																			fe,
																			k(k(
																				{},
																				s
																				.payload
																				.sizes
																				),
																			{},
																			{
																				width: "maxWidth"
																			})
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			P) ||
																		(0, d
																			.default
																			)
																		(fe, P,
																			s
																			.payload
																			.projectStructure
																			),
																		(0, d
																			.default
																			)
																		(fe, J,
																			s
																			.payload
																			.clientId
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			Q)
																		.call(
																			fe
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			le)
																		.call(
																			fe,
																			!
																			0
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			te)
																		.call(
																			fe,
																			(0, p
																				.getScrollReadyElement
																				)
																			((0, u
																					.default)
																				(fe,
																					B)
																				),
																			"scroll",
																			(0, p
																				.throttle
																				)
																			((function ()
																				{
																					return (0,
																							u
																							.default
																							)
																						(fe,
																							le)
																						.call(
																							fe,
																							!
																							0
																							)
																				}),
																				50
																				),
																			!
																			1
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			ce)
																		.call(
																			fe,
																			!
																			0
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			te)
																		.call(
																			fe,
																			window,
																			"resize",
																			(0, p
																				.throttle
																				)
																			((function ()
																				{
																					return (0,
																							u
																							.default
																							)
																						(fe,
																							ce)
																						.call(
																							fe,
																							!
																							0
																							)
																				}),
																				50
																				),
																			!
																			1
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			C) &&
																		(setTimeout(
																				(function ()
																				{
																					(0, u
																						.default
																						)
																					(fe,
																						ue)
																					.call
																						(
																							fe),
																						(0, u
																							.default
																							)
																						(fe,
																							te)
																						.call(
																							fe,
																							(0, p
																								.getScrollReadyElement
																								)
																							((0, u
																									.default)
																								(fe,
																									B)
																								),
																							"scroll",
																							(0, p
																								.throttle
																								)
																							((function ()
																								{
																									return (0,
																											u
																											.default
																											)
																										(fe,
																											ue)
																										.call(
																											fe
																											)
																								}),
																								1e3
																								),
																							!
																							1
																							)
																				}),
																				3e3
																				),
																			(0, u
																				.default
																				)
																			(fe,
																				de)
																			.call(
																				fe
																				),
																			(f = (0, u
																					.default
																					)
																				(fe,
																					P)
																				.integrations
																				) &&
																			(f.googleAnalytics &&
																				f
																				.googleAnalytics
																				.id &&
																				((0, u
																						.default)
																					(fe,
																						z)
																					.googleAnalytics =
																					new v
																					.default(
																					{
																						id: f
																							.googleAnalytics
																							.id
																					}),
																					(0, u
																						.default
																						)
																					(fe,
																						z)
																					.googleAnalytics
																					.init()
																					),
																				f
																				.googleTagManager &&
																				f
																				.googleTagManager
																				.id &&
																				((0, u
																						.default)
																					(fe,
																						z)
																					.googleTagManager =
																					new g
																					.default(
																					{
																						id: f
																							.googleTagManager
																							.id
																					}),
																					(0, u
																						.default
																						)
																					(fe,
																						z)
																					.googleTagManager
																					.init()
																					)
																				)
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 20:
																	return (0,
																			u
																			.default
																			)
																		(fe,
																			Z)
																		.call(
																			fe
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 22:
																	return (0,
																			u
																			.default
																			)
																		(fe,
																			re)
																		.call(
																			fe,
																			s
																			.payload
																			.sizes
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 24:
																	return p
																		.validator
																		.isValue(
																			s
																			.payload
																			.top
																			) &&
																		p
																		.validator
																		.isNumber(
																			s
																			.payload
																			.top
																			) &&
																		(w = (0, p
																				.getElementYOffset
																				)
																			((0, u
																					.default)
																				(fe,
																					B)
																				),
																			(0, p
																				.getScrollReadyElement
																				)
																			((0, u
																					.default)
																				(fe,
																					B)
																				)
																			.scrollTo(
																			{
																				top: (0, u
																						.default
																						)
																					(fe,
																						le)
																					.call(
																						fe
																						)
																					.top +
																					w +
																					s
																					.payload
																					.top -
																					(0, u
																						.default
																						)
																					(fe,
																						j),
																				behavior: "smooth"
																			})
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 26:
																	if ((0, u
																			.default
																			)
																		(fe,
																			H)
																		)
																	{
																		e.next =
																			28;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 28:
																	return e
																		.prev =
																		28,
																		(0, d
																			.default
																			)
																		(fe, Y,
																			new y
																			.default(
																			{
																				onConnectEvent: function ()
																				{
																					(0, u
																						.default
																						)
																					(fe,
																						se)
																					.call
																						(fe,
																							"ws-connected")
																				},
																				onDisconnectEvent: function ()
																				{
																					(0, u
																						.default
																						)
																					(fe,
																						se)
																					.call
																						(fe,
																							"ws-disconnected")
																				}
																			})
																			),
																		_ =
																		s
																		.payload,
																		S =
																		_
																		.gameId,
																		E =
																		_
																		.masterPin,
																		x =
																		void 0 ===
																		E ?
																		null :
																		E,
																		e
																		.next =
																		33,
																		(0, u
																			.default
																			)
																		(fe,
																			Y)
																		.connect(
																		{
																			clientId: (
																					0,
																					u
																					.default
																					)
																				(fe,
																					J),
																			gameId: S,
																			masterPin: x
																		});
																case 33:
																	(0, u
																		.default
																		)
																	(fe,
																		Y)
																	.subscribe
																		("/topic/games."
																			.concat(
																				S
																				),
																			(function (
																				e
																				)
																			{
																				(0, u
																					.default
																					)
																				(fe,
																					se)
																				.call
																					(fe, "ws-message",
																					{
																						data: JSON
																							.parse(
																								e
																								)
																					})
																			})
																			),
																		e
																		.next =
																		39;
																	break;
																case 36:
																	e.prev =
																		36,
																		e
																		.t1 =
																		e
																		.catch(
																			28
																			),
																		console
																		.error(
																			e
																			.t1
																			);
																case 39:
																	return e
																		.abrupt(
																			"break",
																			83
																			);
																case 40:
																	if ((0, u
																			.default
																			)
																		(fe,
																			H)
																		)
																	{
																		e.next =
																			42;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 42:
																	try
																	{
																		(0, u
																			.default
																			)
																		(fe,
																			Y)
																		.disconnect
																			()
																	}
																	catch (
																		e
																		)
																	{
																		console
																			.error(
																				e
																				)
																	}
																	return e
																		.abrupt(
																			"break",
																			83
																			);
																case 44:
																	if ((0, u
																			.default
																			)
																		(fe,
																			H) &&
																		(0, u
																			.default
																			)
																		(fe,
																			Y)
																		)
																	{
																		e.next =
																			46;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 46:
																	try
																	{
																		(0, u
																			.default
																			)
																		(fe,
																			Y)
																		.sendMessage
																			(s.payload
																				.destination,
																				k(k(
																					{},
																					s
																					.payload
																					.message
																					),
																				{},
																				{
																					clientId: (
																							0,
																							u
																							.default
																							)
																						(fe,
																							J)
																				})
																				)
																	}
																	catch (
																		e
																		)
																	{
																		console
																			.error(
																				e
																				)
																	}
																	return e
																		.abrupt(
																			"break",
																			83
																			);
																case 48:
																	if (I =
																		s
																		.payload,
																		O =
																		I
																		.requestId,
																		M =
																		I
																		.httpMethod,
																		R =
																		I
																		.endpoint,
																		A =
																		I
																		.body,
																		L =
																		I
																		.isForce,
																		W =
																		void 0 !==
																		L &&
																		L,
																		!
																		(0, u
																			.default
																			)
																		(fe,
																			C) &&
																		!
																		W
																		)
																	{
																		e.next =
																			71;
																		break
																	}
																	if (e
																		.prev =
																		50,
																		N = {
																			method: M,
																			endpoint: R
																		},
																		!
																		A
																		)
																	{
																		e.next =
																			60;
																		break
																	}
																	return e
																		.next =
																		55,
																		(0, u
																			.default
																			)
																		(fe,
																			X)
																		.instance
																		.getId();
																case 55:
																	if (D =
																		e
																		.sent
																		)
																	{
																		e.next =
																			59;
																		break
																	}
																	return (0,
																			u
																			.default
																			)
																		(fe,
																			se)
																		.call(
																			fe,
																			"send-response",
																			{
																				requestId: O,
																				isSuccess:
																					!
																					1,
																				error: new Error(
																					"Can't find session id"
																					)
																			}
																			),
																		e
																		.abrupt(
																			"return"
																			);
																case 59:
																	N.body =
																		k(
																			{
																				sessionId: D
																			},
																			A
																			);
																case 60:
																	return e
																		.next =
																		62,
																		b
																		.default
																		.sendRequest(
																			N
																			);
																case 62:
																	q = e
																		.sent,
																		(0, u
																			.default
																			)
																		(fe,
																			se)
																		.call(
																			fe,
																			"send-response",
																			{
																				requestId: O,
																				isSuccess:
																					!
																					0,
																				result: q
																			}
																			),
																		e
																		.next =
																		69;
																	break;
																case 66:
																	e.prev =
																		66,
																		e
																		.t2 =
																		e
																		.catch(
																			50
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			se)
																		.call(
																			fe,
																			"send-response",
																			{
																				requestId: O,
																				isSuccess:
																					!
																					1,
																				error: e
																					.t2
																			}
																			);
																case 69:
																	e.next =
																		72;
																	break;
																case 71:
																	(0, u
																		.default
																		)
																	(fe,
																		se)
																	.call
																		(fe, "send-response",
																		{
																			requestId: O,
																			isSuccess:
																				!
																				1,
																			error: new Error(
																				'Failed to execute request with id "'
																				.concat(
																					O,
																					'". "send-request" available only in "'
																					)
																				.concat(
																					m
																					.MODES
																					.PUBLISHED,
																					'" mode or with "isForce" flag'
																					)
																				)
																		});
																case 72:
																	return e
																		.abrupt(
																			"break",
																			83
																			);
																case 73:
																	if ($ =
																		s
																		.payload
																		.to,
																		p
																		.validator
																		.isURL(
																			$
																			)
																		)
																	{
																		e.next =
																			76;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 76:
																	for (
																		K =
																		new URL(
																			$
																			),
																		ee =
																		(0, p
																			.getWindowQueryParams
																			)
																		(),
																		ne =
																		0,
																		ae =
																		Object
																		.entries(
																			ee
																			); ne <
																		ae
																		.length; ne++
																		)
																		ie =
																		(0, i
																			.default
																			)
																		(ae[ne],
																			2
																			),
																		oe =
																		ie[
																			0],
																		pe =
																		ie[
																			1],
																		K
																		.searchParams
																		.append(
																			oe,
																			pe
																			);
																	return me =
																		(0, h
																			.sanitizeUrl
																			)
																		(K
																		.toString()),
																		(0, u
																			.default
																			)
																		(fe,
																			C) ?
																		window
																		.location
																		.href =
																		me :
																		window
																		.open(
																			me,
																			"_blank"
																			),
																		e
																		.abrupt(
																			"break",
																			83
																			);
																case 82:
																	return e
																		.abrupt(
																			"break",
																			83
																			);
																case 83:
																	(0, u
																		.default
																		)
																	(fe,
																		he)
																	.call
																		(fe, s
																			.method,
																			s
																			);
																case 84:
																case "end":
																	return e
																		.stop()
																}
														}),
														e,
														null,
														[
															[28,
																36],
															[50,
																66]
														]
														)
											})
											)
										),
									function (
										e
										)
									{
										return s
											.apply(
												this,
												arguments
												)
									}
									)
							}
							),
						S(this,
							te,
							{
								writable:
									!
									0,
								value: function (
									e,
									t,
									n
									)
								{
									var r =
										arguments
										.length >
										3 &&
										void 0 !==
										arguments[
											3
											] &&
										arguments[
											3
											];
									try
									{
										(0, u
											.default
											)
										(fe,
											q)
										.push
											(
											{
												target: e,
												type: t,
												func: n,
												capture: r
											}),
											e
											.addEventListener(
												[
													t],
												n,
												r
												)
									}
									catch (
										e
										)
									{
										console
											.error(
												e
												)
									}
								}
							}
							),
						S(this,
							ne,
							{
								writable:
									!
									0,
								value: function ()
								{
									try
									{
										(0, u
											.default
											)
										(fe,
											q)
										.forEach
											((function (
												e)
											{
												e.target
													.removeEventListener(
														[e
															.type],
														e
														.func,
														e
														.capture
														)
											})),
											(0, d
												.default
												)
											(fe, q,
												[]
												)
									}
									catch (
										e
										)
									{
										console
											.error(
												e
												)
									}
								}
							}
							),
						S(this,
							re,
							{
								writable:
									!
									0,
								value: function (
									e
									)
								{
									var t =
										e
										.width,
										n =
										e
										.height,
										r =
										e
										.maxWidth;
									try
									{
										if ((0, u
												.default
												)
											(fe,
												H)
											)
											return;
										p.validator
											.isValue(
												t
												) &&
											"maxWidth" ===
											t &&
											((0, u
													.default)
												(fe,
													T)
												.style
												.width =
												"100%"
												),
											p
											.validator
											.isValue(
												r
												) &&
											p
											.validator
											.isNumber(
												r
												) &&
											((0, u
													.default)
												(fe,
													T)
												.style
												.maxWidth =
												""
												.concat(
													r,
													"px"
													)
												),
											p
											.validator
											.isValue(
												n
												) &&
											p
											.validator
											.isNumber(
												n
												) &&
											((0, u
													.default)
												(fe,
													T)
												.style
												.height =
												""
												.concat(
													n,
													"px"
													)
												)
									}
									catch (
										e
										)
									{
										console
											.error(
												e
												)
									}
								}
							}
							),
						S(this,
							ae,
							{
								writable:
									!
									0,
								value: function ()
								{
									var e =
										'\n        <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #fff; opacity: 1; display: flex; align-items: center; justify-content: center;">\n            <img src=\''
										.concat(
											m
											.CDN_URL,
											'/preloader.gif\' alt="preloader" style="width: 380px !important; max-width: 100% !important;" />\n        </div>'
											),
										t =
										document
										.createElement(
											"div"
											);
									t.innerHTML =
										e
										.trim();
									var n =
										t
										.firstChild;
									return {
										render: function ()
										{
											return n
										},
										hideAndDestroy: function ()
										{
											var e =
												n
												.parentNode;
											e && e
												.contains(
													n
													) &&
												e
												.removeChild(
													n
													)
										}
									}
								}
							}
							),
						S(this,
							ie,
							{
								writable:
									!
									0,
								value: function ()
								{
									var e =
										'<a href="https://interacty.me" target="_blank"><img src=\''
										.concat(
											m
											.CDN_URL,
											'/powered_by.svg\' style="position: absolute; bottom: 0; right: 0; width: 132px !important; max-width: 100% !important;" alt="Powered by Interacty" /></a>'
											),
										t =
										document
										.createElement(
											"div"
											);
									return t
										.innerHTML =
										e
										.trim(),
										t
										.firstChild
								}
							}
							),
						S(this,
							oe,
							{
								writable:
									!
									0,
								value: function ()
								{
									var e =
										document
										.createElement(
											"div"
											);
									e.innerHTML =
										'\n        <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #fff; display: flex; align-items: center; justify-content: center;"\n        >\n            <span style="font-size: 16px; font-family: Arial, sans-serif">Oops! Some error occurred &#128532;</span>\n         </div>'
										.trim();
									var t =
										e
										.firstChild;
									return {
										render: function ()
										{
											return t
										}
									}
								}
							}
							),
						S(this,
							se,
							{
								writable:
									!
									0,
								value: function ()
								{
									var e =
										arguments
										.length >
										0 &&
										void 0 !==
										arguments[
											0
											] ?
										arguments[
											0
											] :
										"",
										t =
										arguments
										.length >
										1 &&
										void 0 !==
										arguments[
											1
											] ?
										arguments[
											1
											] :
										{};
									(0, u
										.default
										)
									(fe,
										G)
									.contentWindow
										.postMessage(
											{
												method: e,
												payload: t
											},
											(0, u
												.default
												)
											(fe,
												U)
											)
								}
							}
							),
						S(this,
							le,
							{
								writable:
									!
									0,
								value: function (
									e
									)
								{
									var t =
										(0, p
											.getElementPositions
											)
										((0, u
												.default)
											(fe,
												B),
											(0, u
												.default
												)
											(fe,
												G)
											);
									return e &&
										(0, u
											.default
											)
										(fe,
											se)
										.call(
											fe,
											"iframePosition",
											{
												data: k(k(
													{},
													t
													),
												{},
												{
													top: t
														.top -
														(0, u
															.default
															)
														(fe,
															j),
													windowBottom: t
														.top -
														(0, p
															.getElementInnerHeight
															)
														((0, u
																.default)
															(fe,
																B)
															)
												})
											}
											),
										t
								}
							}
							),
						S(this,
							ce,
							{
								writable:
									!
									0,
								value: function (
									e
									)
								{
									var t = {
										innerWidth: window
											.innerWidth,
										innerHeight: window
											.innerHeight
									};
									return e &&
										(0, u
											.default
											)
										(fe,
											se)
										.call(
											fe,
											"windowSize",
											{
												data: t
											}
											),
										t
								}
							}
							),
						S(this,
							ue,
							{
								writable:
									!
									0,
								value: (f =
									(0, o
										.default
										)
									(a.default
										.mark(
											(function e()
											{
												var t,
													n,
													r,
													i;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	if (!
																		((0, u
																				.default)
																			(fe,
																				K)
																			.value >=
																			100
																			)
																		)
																	{
																		e.next =
																			2;
																		break
																	}
																	return e
																		.abrupt(
																			"return"
																			);
																case 2:
																	t = (0, p
																			.getElementPositions
																			)
																		((0, u
																				.default)
																			(fe,
																				B),
																			(0, u
																				.default
																				)
																			(fe,
																				G)
																			),
																		n =
																		t
																		.bottom -
																		m
																		.READ_PERCENT_ERROR_MARGIN -
																		(0, p
																			.getElementInnerHeight
																			)
																		((0, u
																				.default)
																			(fe,
																				B)
																			),
																		r =
																		n /
																		t
																		.height *
																		100,
																		(i = Math
																			.round(
																				100 -
																				r
																				)
																			) >
																		(0, u
																			.default
																			)
																		(fe,
																			K)
																		.value &&
																		((0, u
																				.default)
																			(fe,
																				K)
																			.value =
																			i >
																			100 ?
																			100 :
																			i
																			);
																case 7:
																case "end":
																	return e
																		.stop()
																}
														}),
														e
														)
											})
											)
										),
									function ()
									{
										return f
											.apply(
												this,
												arguments
												)
									}
									)
							}
							),
						S(this,
							de,
							{
								writable:
									!
									0,
								value: (_ =
									(0, o
										.default
										)
									(a.default
										.mark(
											(function e()
											{
												var t,
													n;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	return t =
																		function ()
																		{
																			var e =
																				(0, o
																					.default
																					)
																				(a.default
																					.mark(
																						(function e()
																						{
																							var
																							t;
																							return a
																								.default
																								.wrap(
																									(function (
																										e
																										)
																									{
																										for (;;)
																											switch (
																												e
																												.prev =
																												e
																												.next
																												)
																											{
																											case 0:
																												if ((0, u
																														.default
																														)
																													(fe,
																														K)
																													.value
																													)
																												{
																													e.next =
																														2;
																													break
																												}
																												return e
																													.abrupt(
																														"return"
																														);
																											case 2:
																												return e
																													.next =
																													4,
																													(0, u
																														.default
																														)
																													(fe,
																														X)
																													.instance
																													.getId();
																											case 4:
																												if (t =
																													e
																													.sent
																													)
																												{
																													e.next =
																														7;
																													break
																												}
																												return e
																													.abrupt(
																														"return"
																														);
																											case 7:
																												return e
																													.next =
																													9,
																													b
																													.default
																													.sendProjectReadPercent(
																													{
																														projectNumericId: (
																																0,
																																u
																																.default
																																)
																															(fe,
																																R),
																														sessionId: t,
																														value: (0,
																																u
																																.default
																																)
																															(fe,
																																K)
																															.value
																													});
																											case 9:
																												(0, u
																													.default
																													)
																												(fe,
																													K)
																												.sentValue
																													=
																													(0, u
																														.default
																														)
																													(fe,
																														K)
																													.value;
																											case 10:
																											case "end":
																												return e
																													.stop()
																											}
																									}),
																									e
																									)
																						})
																						)
																					);
																			return function ()
																			{
																				return e
																					.apply(
																						this,
																						arguments
																						)
																			}
																		}
																		(),
																		e
																		.prev =
																		1,
																		e
																		.next =
																		4,
																		t();
																case 4:
																	e.next =
																		9;
																	break;
																case 6:
																	e.prev =
																		6,
																		e
																		.t0 =
																		e
																		.catch(
																			1
																			),
																		console
																		.error(
																			e
																			.t0
																			);
																case 9:
																	n = setInterval(
																		(0, o
																			.default
																			)
																		(a.default
																			.mark(
																				(function e()
																				{
																					return a
																						.default
																						.wrap(
																							(function (
																								e
																								)
																							{
																								for (;;)
																									switch (
																										e
																										.prev =
																										e
																										.next
																										)
																									{
																									case 0:
																										if (!
																											(0, u
																												.default
																												)
																											(fe,
																												$) &&
																											100 !==
																											(0, u
																												.default
																												)
																											(fe,
																												K)
																											.sentValue
																											)
																										{
																											e.next =
																												3;
																											break
																										}
																										return clearInterval(
																												n
																												),
																											e
																											.abrupt(
																												"return"
																												);
																									case 3:
																										if (e
																											.prev =
																											3,
																											!
																											(0, u
																												.default
																												)
																											(fe,
																												K)
																											.inProgress
																											)
																										{
																											e.next =
																												6;
																											break
																										}
																										return e
																											.abrupt(
																												"return"
																												);
																									case 6:
																										if ((0, u
																												.default
																												)
																											(fe,
																												K)
																											.inProgress = !
																											0,
																											(0, u
																												.default
																												)
																											(fe,
																												K)
																											.sentValue &&
																											!
																											((0, u
																													.default)
																												(fe,
																													K)
																												.sentValue <
																												(0, u
																													.default
																													)
																												(fe,
																													K)
																												.value
																												)
																											)
																										{
																											e.next =
																												10;
																											break
																										}
																										return e
																											.next =
																											10,
																											t();
																									case 10:
																										(0, u
																											.default
																											)
																										(fe,
																											K)
																										.inProgress
																											= !
																											1,
																											e
																											.next =
																											17;
																										break;
																									case 13:
																										e.prev =
																											13,
																											e
																											.t0 =
																											e
																											.catch(
																												3
																												),
																											console
																											.error(
																												e
																												.t0
																												),
																											(0, u
																												.default
																												)
																											(fe,
																												K)
																											.inProgress = !
																											1;
																									case 17:
																									case "end":
																										return e
																											.stop()
																									}
																							}),
																							e,
																							null,
																							[
																								[3,
																									13]
																							]
																							)
																				})
																				)
																			),
																		(0, u
																			.default
																			)
																		(fe,
																			K)
																		.sendInterval
																		);
																case 10:
																case "end":
																	return e
																		.stop()
																}
														}),
														e,
														null,
														[
															[1,
																6]
														]
														)
											})
											)
										),
									function ()
									{
										return _
											.apply(
												this,
												arguments
												)
									}
									)
							}
							),
						S(this,
							he,
							{
								writable:
									!
									0,
								value: function (
									e,
									t
									)
								{
									(0, u
										.default
										)
									(fe,
										N) &&
									(0, u
										.default
										)
									(fe,
										N)
									.call
										(fe, e,
											t
											)
								}
							}
							),
						(0, d
							.default
							)
						(this,
							E,
							(0, p
								.validateConstructorParam
								)
							("mode",
								pe,
								!
								1,
								m
								.MODES
								.PUBLISHED
								)
							),
						(0, d
							.default
							)
						(this,
							x,
							(0, p
								.validateConstructorParam
								)
							("projectMode",
								me,
								!
								1,
								m
								.PROJECT_MODES
								.SINGLE
								)
							),
						(0, d
							.default
							)
						(this,
							C,
							(0, u
								.default
								)
							(this,
								E
								) ===
							m
							.MODES
							.PUBLISHED
							),
						(0, d
							.default
							)
						(this,
							T,
							(0, p
								.validateConstructorParam
								)
							("nodeElement",
								be,
								!
								0
								)
							),
						(0, d
							.default
							)
						(this,
							I,
							(0, p
								.validateConstructorParam
								)
							("remixUrl",
								ve,
								!
								0
								)
							),
						(0, d
							.default
							)
						(this,
							O,
							(0, p
								.validateConstructorParam
								)
							("features",
								ge,
								!
								1,
								[]
								)
							),
						(0, d
							.default
							)
						(this,
							M,
							(0, p
								.validateConstructorParam
								)
							("projectId",
								ye,
								!
								1,
								null
								)
							),
						(0, d
							.default
							)
						(this,
							R,
							(0, p
								.validateConstructorParam
								)
							("projectNumericId",
								we,
								!
								1,
								null
								)
							),
						(0, d
							.default
							)
						(this,
							P,
							(0, p
								.validateConstructorParam
								)
							("projectStructure",
								_e,
								!
								1,
								null
								)
							),
						(0, d
							.default
							)
						(this,
							A,
							(0, p
								.validateConstructorParam
								)
							("initialWidth",
								ke,
								!
								1,
								800
								)
							),
						(0, d
							.default
							)
						(this,
							L,
							(0, p
								.validateConstructorParam
								)
							("initialHeight",
								Se,
								!
								1,
								600
								)
							),
						(0, d
							.default
							)
						(this,
							W,
							(0, p
								.validateConstructorParam
								)
							("lng",
								Ee,
								!
								1,
								(0, p
									.getWindowLanguage
									)
								()
								)
							),
						(0, d
							.default
							)
						(this,
							j,
							(0, p
								.validateConstructorParam
								)
							("additionalTopOffset",
								xe,
								!
								1,
								0
								)
							),
						(0, d
							.default
							)
						(this,
							N,
							(0, p
								.validateConstructorParam
								)
							("onEvent",
								Ce,
								!
								1,
								null
								)
							),
						(0, d
							.default
							)
						(this,
							D,
							Te
							),
						(0, d
							.default
							)
						(this,
							H,
							(0, u
								.default
								)
							(this,
								x
								) ===
							m
							.PROJECT_MODES
							.MULTIPLAYER
							),
						(0, d
							.default
							)
						(this,
							U,
							new URL(
								ve
								)
							.origin
							),
						(0, d
							.default
							)
						(this,
							V,
							(0, u
								.default
								)
							(this,
								ae
								)
							.call(
								this
								)
							),
						(0, d
							.default
							)
						(this,
							F,
							(0, u
								.default
								)
							(this,
								oe
								)
							.call(
								this
								)
							),
						(0, d
							.default
							)
						(this,
							G,
							null
							)
				}));
		n.RemixLoader = fe,
			window
			.RemixLoader =
			fe, (0, o
				.default)(a
				.default
				.mark((function e()
				{
					var t,
						n,
						r,
						i,
						o,
						s,
						l,
						c,
						u,
						d,
						h,
						f;
					return a
						.default
						.wrap(
							(function (
								e
								)
							{
								for (;;)
									switch (
										e
										.prev =
										e
										.next
										)
									{
									case 0:
										if (window
											.RemixLoader
											)
										{
											e.next =
												2;
											break
										}
										return e
											.abrupt(
												"return"
												);
									case 2:
										if (t =
											document
											.currentScript
											.parentElement
											)
										{
											e.next =
												5;
											break
										}
										return e
											.abrupt(
												"return"
												);
									case 5:
										if (t
											.classList
											.contains(
												m
												.EMBED_PROJECT_CLASSNAME
												)
											)
										{
											e.next =
												7;
											break
										}
										return e
											.abrupt(
												"return"
												);
									case 7:
										if (!
											t
											.getAttribute(
												m
												.EMBED_PROJECT_INITIALIZED_ATTRIBUTE_NAME
												)
											)
										{
											e.next =
												9;
											break
										}
										return e
											.abrupt(
												"return"
												);
									case 9:
										if (t
											.setAttribute(
												m
												.EMBED_PROJECT_INITIALIZED_ATTRIBUTE_NAME,
												"true"
												),
											n =
											t
											.getAttribute(
												"hash"
												),
											r =
											t
											.getAttribute(
												"initialWidth"
												),
											i =
											t
											.getAttribute(
												"initialHeight"
												),
											o =
											t
											.getAttribute(
												"lng"
												),
											n
											)
										{
											e.next =
												17;
											break
										}
										return console
											.error(
												'[RemixLoader auto-initiator] "hash" attribute is required for remix-app element'
												),
											e
											.abrupt(
												"return"
												);
									case 17:
										return s =
											m
											.MODES
											.PUBLISHED,
											l =
											null,
											c =
											null,
											u =
											null,
											d = !
											1,
											h =
											null,
											e
											.prev =
											18,
											e
											.next =
											21,
											b
											.default
											.getProjectMetaInfo(
												n
												);
									case 21:
										f = e
											.sent,
											l =
											f
											.features,
											c =
											f
											.projectId,
											u =
											f
											.id,
											d =
											f
											.subscriptionExpired,
											h =
											f
											.mode,
											e
											.next =
											33;
										break;
									case 29:
										e.prev =
											29,
											e
											.t0 =
											e
											.catch(
												18
												),
											s =
											m
											.MODES
											.EMERGENCY,
											console
											.warn(
												"[RemixLoader auto-initiator] Cannot get project meta information from server, "
												.concat(
													m
													.MODES
													.EMERGENCY,
													" mode activated"
													)
												);
									case 33:
										new window
											.RemixLoader(
											{
												mode: s,
												projectMode: h,
												nodeElement: t,
												remixUrl: ""
													.concat(
														m
														.CDN_URL,
														"/"
														)
													.concat(
														n,
														"/index.html"
														),
												features: l,
												projectId: c,
												projectNumericId: u,
												initialWidth: r,
												initialHeight: i,
												lng: o ||
													null,
												isSubscriptionExpired: d
											})
											.createIframe();
									case 34:
									case "end":
										return e
											.stop()
									}
							}),
							e,
							null,
							[
								[18,
									29]
							]
							)
				})))()
	},
	{
		"./api": 23,
		"./constants": 24,
		"./services/googleAnalytics": 26,
		"./services/googleTagManager": 27,
		"./services/session": 28,
		"./services/webSocket": 29,
		"./utils": 30,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/classCallCheck": 6,
		"@babel/runtime/helpers/classPrivateFieldGet": 8,
		"@babel/runtime/helpers/classPrivateFieldSet": 9,
		"@babel/runtime/helpers/createClass": 10,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12,
		"@babel/runtime/helpers/slicedToArray": 15,
		"@babel/runtime/regenerator": 18,
		"@braintree/sanitize-url": 19,
		"smoothscroll-polyfill": 21
	}],
	26: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.default =
			void 0;
		var a = r(e(
				"@babel/runtime/helpers/createClass")),
			i = r(e(
				"@babel/runtime/helpers/classCallCheck")),
			o = r(e(
				"@babel/runtime/helpers/defineProperty")),
			s = r(e(
				"@babel/runtime/helpers/classPrivateFieldGet")),
			l = r(e(
				"@babel/runtime/helpers/classPrivateFieldSet"));
		var c = new WeakMap,
			u = (0, a
				.default)((
				function e(
					t)
				{
					var n =
						this,
						r =
						t
						.id;
					(0, i
						.default
						)
					(this,
						e
						),
					function (
						e,
						t,
						n
						)
					{
						!
						function (
							e,
							t
							)
						{
							if (t
								.has(
									e
									)
								)
								throw new TypeError(
									"Cannot initialize the same private elements twice on an object"
									)
						}
						(e,
							t),
						t.set(e,
							n)
					}(this,
						c,
						{
							writable:
								!
								0,
							value: void 0
						}
						),
					(0, o
						.default
						)
					(this,
						"init",
						(function ()
						{
							try
							{
								var e =
									function ()
									{
										dataLayer
											.push(
												arguments
												)
									},
									t =
									document
									.createElement(
										"script"
										);
								t.src =
									"https://www.googletagmanager.com/gtag/js?id="
									.concat(
										(0, s
											.default
											)
										(n,
											c)
										),
									t
									.async = !
									1,
									t
									.defer = !
									0,
									document
									.body
									.appendChild(
										t
										),
									window
									.dataLayer =
									window
									.dataLayer ||
									[],
									e("js",
										new Date
										),
									e("config",
										(0, s
											.default
											)
										(n,
											c)
										),
									console
									.log(
										'"Google Analitics" initialization'
										)
							}
							catch (
								e
								)
							{
								console
									.error(
										e
										)
							}
						})
						),
					(0, l
						.default
						)
					(this,
						c,
						r
						)
				}));
		n.default = u
	},
	{
		"@babel/runtime/helpers/classCallCheck": 6,
		"@babel/runtime/helpers/classPrivateFieldGet": 8,
		"@babel/runtime/helpers/classPrivateFieldSet": 9,
		"@babel/runtime/helpers/createClass": 10,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12
	}],
	27: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.default =
			void 0;
		var a = r(e(
				"@babel/runtime/helpers/createClass")),
			i = r(e(
				"@babel/runtime/helpers/classCallCheck")),
			o = r(e(
				"@babel/runtime/helpers/defineProperty")),
			s = r(e(
				"@babel/runtime/helpers/classPrivateFieldGet")),
			l = r(e(
				"@babel/runtime/helpers/classPrivateFieldSet"));
		var c = new WeakMap,
			u = (0, a
				.default)((
				function e(
					t)
				{
					var n =
						this,
						r =
						t
						.id;
					(0, i
						.default
						)
					(this,
						e
						),
					function (
						e,
						t,
						n
						)
					{
						!
						function (
							e,
							t
							)
						{
							if (t
								.has(
									e
									)
								)
								throw new TypeError(
									"Cannot initialize the same private elements twice on an object"
									)
						}
						(e,
							t),
						t.set(e,
							n)
					}(this,
						c,
						{
							writable:
								!
								0,
							value: void 0
						}
						),
					(0, o
						.default
						)
					(this,
						"initHeadScript",
						(function ()
						{
							var e =
								document
								.createElement(
									"script"
									);
							e.innerHTML =
								"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','"
								.concat(
									(0, s
										.default
										)
									(n,
										c),
									"');"
									),
								document
								.head
								.insertBefore(
									e,
									document
									.head
									.childNodes[
										0
										]
									)
						})
						),
					(0, o
						.default
						)
					(this,
						"initBodyNoScript",
						(function ()
						{
							var e =
								document
								.createElement(
									"noscript"
									);
							e.innerHTML =
								'<iframe src="https://www.googletagmanager.com/ns.html?id='
								.concat(
									(0, s
										.default
										)
									(n,
										c),
									'"\n            height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>'
									),
								document
								.body
								.insertBefore(
									e,
									document
									.body
									.childNodes[
										0
										]
									)
						})
						),
					(0, o
						.default
						)
					(this,
						"init",
						(function ()
						{
							try
							{
								n.initHeadScript(),
									n
									.initBodyNoScript(),
									console
									.log(
										'"Google Tag Manager" initialization'
										)
							}
							catch (
								e
								)
							{
								console
									.error(
										e
										)
							}
						})
						),
					(0, l
						.default
						)
					(this,
						c,
						r
						)
				}));
		n.default = u
	},
	{
		"@babel/runtime/helpers/classCallCheck": 6,
		"@babel/runtime/helpers/classPrivateFieldGet": 8,
		"@babel/runtime/helpers/classPrivateFieldSet": 9,
		"@babel/runtime/helpers/createClass": 10,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12
	}],
	28: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.default =
			void 0;
		var a = r(e(
				"@babel/runtime/regenerator")),
			i = r(e(
				"@babel/runtime/helpers/asyncToGenerator")),
			o = r(e(
				"@babel/runtime/helpers/createClass")),
			s = r(e(
				"@babel/runtime/helpers/classCallCheck")),
			l = r(e(
				"@babel/runtime/helpers/defineProperty")),
			c = r(e(
				"@babel/runtime/helpers/classPrivateFieldGet")),
			u = r(e(
				"@babel/runtime/helpers/classPrivateFieldSet")),
			d = r(e(
				"../api"));
		function h(e, t, n)
		{
			! function (e,
				t)
			{
				if (t.has(
					e))
					throw new TypeError(
						"Cannot initialize the same private elements twice on an object"
						)
			}(e, t), t.set(
				e, n)
		}
		var f = new WeakMap,
			p = new WeakMap,
			m = new WeakMap,
			b = new WeakMap,
			v = new WeakMap,
			g = new WeakMap,
			y = new WeakMap,
			w = new WeakMap,
			_ = new WeakMap,
			k = new WeakMap,
			S = new WeakMap,
			E = new WeakMap,
			x = new WeakMap,
			C = (0, o
				.default)((
				function e(
					t)
				{
					var n =
						this,
						r =
						t
						.clientId,
						o =
						t
						.projectId,
						C =
						t
						.projectIdLong,
						T =
						t
						.utmCampaign,
						I =
						t
						.utmSource,
						O =
						t
						.utmMedium,
						M =
						t
						.utmContent,
						R =
						t
						.referenceTail,
						P =
						t
						.sourceReference,
						A =
						t
						.embedUrl;
					(0, s
						.default
						)
					(this,
						e
						),
					h(this, f,
						{
							writable:
								!
								0,
							value: null
						}),
						h(this,
							p,
							{
								writable:
									!
									0,
								value:
									!
									1
							}
							),
						h(this,
							m,
							{
								writable:
									!
									0,
								value:
									!
									1
							}
							),
						h(this,
							b,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							v,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							g,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							y,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							w,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							_,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							k,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							S,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							E,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						h(this,
							x,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						(0, l
							.default
							)
						(this,
							"create",
							(0, i
								.default
								)
							(a.default
								.mark(
									(function e()
									{
										return a
											.default
											.wrap(
												(function (
													e
													)
												{
													for (;;)
														switch (
															e
															.prev =
															e
															.next
															)
														{
														case 0:
															if (!
																(0, c
																	.default
																	)
																(n,
																	p)
																)
															{
																e.next =
																	2;
																break
															}
															return e
																.abrupt(
																	"return"
																	);
														case 2:
															return (0,
																	u
																	.default
																	)
																(n, p,
																	!
																	0
																	),
																e
																.t0 =
																u
																.default,
																e
																.t1 =
																n,
																e
																.t2 =
																f,
																e
																.next =
																8,
																d
																.default
																.createSession(
																	(0, c
																		.default
																		)
																	(n,
																		b),
																	(0, c
																		.default
																		)
																	(n,
																		v),
																	(0, c
																		.default
																		)
																	(n,
																		g),
																	{
																		utmCampaign: (
																				0,
																				c
																				.default
																				)
																			(n,
																				y),
																		utmSource: (
																				0,
																				c
																				.default
																				)
																			(n,
																				w),
																		utmMedium: (
																				0,
																				c
																				.default
																				)
																			(n,
																				_),
																		utmContent: (
																				0,
																				c
																				.default
																				)
																			(n,
																				k),
																		referenceTail: (
																				0,
																				c
																				.default
																				)
																			(n,
																				S),
																		sourceReference: (
																				0,
																				c
																				.default
																				)
																			(n,
																				E),
																		embedUrl: (
																				0,
																				c
																				.default
																				)
																			(n,
																				x)
																	}
																	);
														case 8:
															e.t3 =
																e
																.sent,
																(0, e
																	.t0
																	)
																(e.t1,
																	e
																	.t2,
																	e
																	.t3
																	),
																(0, u
																	.default
																	)
																(n, p,
																	!
																	1
																	);
														case 11:
														case "end":
															return e
																.stop()
														}
												}),
												e
												)
									})
									)
								)
							),
						(0, l
							.default
							)
						(this,
							"refresh",
							(0, i
								.default
								)
							(a.default
								.mark(
									(function e()
									{
										return a
											.default
											.wrap(
												(function (
													e
													)
												{
													for (;;)
														switch (
															e
															.prev =
															e
															.next
															)
														{
														case 0:
															if ((0, c
																	.default
																	)
																(n,
																	f) &&
																!
																(0, c
																	.default
																	)
																(n,
																	m)
																)
															{
																e.next =
																	2;
																break
															}
															return e
																.abrupt(
																	"return"
																	);
														case 2:
															return (0,
																	u
																	.default
																	)
																(n, m,
																	!
																	0
																	),
																e
																.next =
																5,
																d
																.default
																.refreshSession(
																	(0, c
																		.default
																		)
																	(n,
																		b),
																	(0, c
																		.default
																		)
																	(n,
																		f)
																	.id
																	);
														case 5:
															(0, u
																.default
																)
															(n, m,
																!
																1
																);
														case 6:
														case "end":
															return e
																.stop()
														}
												}),
												e
												)
									})
									)
								)
							),
						(0, l
							.default
							)
						(this,
							"getId",
							(0, i
								.default
								)
							(a.default
								.mark(
									(function e()
									{
										return a
											.default
											.wrap(
												(function (
													e
													)
												{
													for (;;)
														switch (
															e
															.prev =
															e
															.next
															)
														{
														case 0:
															if ((0, c
																	.default
																	)
																(n,
																	f)
																)
															{
																e.next =
																	5;
																break
															}
															return e
																.next =
																3,
																new Promise(
																	(function (
																		e
																		)
																	{
																		return setTimeout(
																			e,
																			3e3
																			)
																	})
																	);
														case 3:
															if ((0, c
																	.default
																	)
																(n,
																	f)
																)
															{
																e.next =
																	5;
																break
															}
															return e
																.abrupt(
																	"return",
																	null
																	);
														case 5:
															return e
																.abrupt(
																	"return",
																	(0, c
																		.default
																		)
																	(n,
																		f)
																	.id
																	);
														case 6:
														case "end":
															return e
																.stop()
														}
												}),
												e
												)
									})
									)
								)
							),
						(0, u
							.default
							)
						(this,
							b,
							r
							),
						(0, u
							.default
							)
						(this,
							v,
							o
							),
						(0, u
							.default
							)
						(this,
							g,
							C
							),
						(0, u
							.default
							)
						(this,
							y,
							T
							),
						(0, u
							.default
							)
						(this,
							w,
							I
							),
						(0, u
							.default
							)
						(this,
							_,
							O
							),
						(0, u
							.default
							)
						(this,
							k,
							M
							),
						(0, u
							.default
							)
						(this,
							S,
							R
							),
						(0, u
							.default
							)
						(this,
							E,
							P
							),
						(0, u
							.default
							)
						(this,
							x,
							A
							)
				}));
		n.default = C
	},
	{
		"../api": 23,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/classCallCheck": 6,
		"@babel/runtime/helpers/classPrivateFieldGet": 8,
		"@babel/runtime/helpers/classPrivateFieldSet": 9,
		"@babel/runtime/helpers/createClass": 10,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12,
		"@babel/runtime/regenerator": 18
	}],
	29: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.default =
			void 0;
		var a = r(e(
				"@babel/runtime/regenerator")),
			i = r(e(
				"@babel/runtime/helpers/asyncToGenerator")),
			o = r(e(
				"@babel/runtime/helpers/createClass")),
			s = r(e(
				"@babel/runtime/helpers/classCallCheck")),
			l = r(e(
				"@babel/runtime/helpers/defineProperty")),
			c = r(e(
				"@babel/runtime/helpers/classPrivateFieldGet")),
			u = r(e(
				"@babel/runtime/helpers/classPrivateFieldSet")),
			d = e(
				"@stomp/stompjs"
				),
			h = e(
				"../constants"
				);
		function f(e, t, n)
		{
			! function (e,
				t)
			{
				if (t.has(
					e))
					throw new TypeError(
						"Cannot initialize the same private elements twice on an object"
						)
			}(e, t), t.set(
				e, n)
		}
		var p = new WeakMap,
			m = new WeakMap,
			b = new WeakMap,
			v = new WeakMap,
			g = (0, o
				.default)((
				function e(
					t)
				{
					var n =
						this,
						r =
						t
						.onConnectEvent,
						o =
						t
						.onDisconnectEvent;
					(0, s
						.default
						)
					(this,
						e
						),
					f(this, p,
						{
							writable:
								!
								0,
							value: void 0
						}),
						f(this,
							m,
							{
								writable:
									!
									0,
								value:
									!
									1
							}
							),
						f(this,
							b,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						f(this,
							v,
							{
								writable:
									!
									0,
								value: void 0
							}
							),
						(0, l
							.default
							)
						(this,
							"connect",
							function ()
							{
								var e =
									(0, i
										.default
										)
									(a.default
										.mark(
											(function e(
												t
												)
											{
												var r,
													i,
													o;
												return a
													.default
													.wrap(
														(function (
															e
															)
														{
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	)
																{
																case 0:
																	return r =
																		t
																		.clientId,
																		i =
																		t
																		.gameId,
																		o =
																		t
																		.masterPin,
																		e
																		.abrupt(
																			"return",
																			new Promise(
																				(function (
																					e
																					)
																				{
																					var t =
																						new d
																						.Client(
																						{
																							brokerURL: ""
																								.concat(
																									h
																									.MULTIPLAYER_WS_URL,
																									"?clientId="
																									)
																								.concat(
																									r,
																									"&projectIdPin="
																									)
																								.concat(
																									i
																									)
																								.concat(
																									o ?
																									"&masterPin="
																									.concat(
																										o
																										) :
																									""
																									),
																							onConnect: function ()
																							{
																								(0, u
																									.default
																									)
																								(n, p,
																									t
																									),
																								(0, u
																									.default
																									)
																								(n, m,
																									!
																									0
																									),
																								(0, c
																									.default
																									)
																								(n,
																									b)
																								.call
																									(
																										n),
																									e()
																							},
																							onStompError: function (
																								t
																								)
																							{
																								console
																									.error(
																									{
																										message: t
																											.headers
																											.message,
																										details: t
																											.body
																									}),
																									n
																									.disconnect(),
																									(0, u
																										.default
																										)
																									(n, m,
																										!
																										1
																										),
																									(0, c
																										.default
																										)
																									(n,
																										v)
																									.call(
																										n
																										),
																									e()
																							},
																							onDisconnect: function ()
																							{
																								(0, u
																									.default
																									)
																								(n, m,
																									!
																									1
																									),
																								(0, c
																									.default
																									)
																								(n,
																									v)
																								.call
																									(
																										n)
																							},
																							onWebSocketError: function ()
																							{
																								n.disconnect(),
																									(0, u
																										.default
																										)
																									(n, m,
																										!
																										1
																										),
																									(0, c
																										.default
																										)
																									(n,
																										v)
																									.call(
																										n
																										)
																							},
																							reconnectDelay: 2e3
																						});
																					t.activate()
																				})
																				)
																			);
																case 2:
																case "end":
																	return e
																		.stop()
																}
														}),
														e
														)
											})
											)
										);
								return function (
									t
									)
								{
									return e
										.apply(
											this,
											arguments
											)
								}
							}
							()
							),
						(0, l
							.default
							)
						(this,
							"disconnect",
							(function ()
							{
								(0, c
									.default
									)
								(n,
									m) &&
								(0, c
									.default
									)
								(n,
									p)
								.deactivate
									()
							})
							),
						(0, l
							.default
							)
						(this,
							"sendMessage",
							(function (
								e,
								t
								)
							{
								(0, c
									.default
									)
								(n,
									m) &&
								(0, c
									.default
									)
								(n,
									p)
								.publish
									(
									{
										destination: e,
										body: JSON
											.stringify(
												t
												)
									})
							})
							),
						(0, l
							.default
							)
						(this,
							"subscribe",
							(function (
								e,
								t
								)
							{
								if ((0, c
										.default
										)
									(n,
										m)
									)
									return (0,
											c
											.default
											)
										(n,
											p)
										.subscribe(
											e,
											(function (
												e
												)
											{
												return t(
													e
													.body
													)
											})
											)
							})
							),
						(0, l
							.default
							)
						(this,
							"unsubscribe",
							(function (
								e
								)
							{
								(0, c
									.default
									)
								(n,
									m) &&
								e.unsubscribe()
							})
							),
						(0, u
							.default
							)
						(this,
							b,
							r
							),
						(0, u
							.default
							)
						(this,
							v,
							o
							)
				}));
		n.default = g
	},
	{
		"../constants": 24,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/classCallCheck": 6,
		"@babel/runtime/helpers/classPrivateFieldGet": 8,
		"@babel/runtime/helpers/classPrivateFieldSet": 9,
		"@babel/runtime/helpers/createClass": 10,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12,
		"@babel/runtime/regenerator": 18,
		"@stomp/stompjs": 22
	}],
	30: [function (e, t, n)
	{
		"use strict";
		var r = e(
			"@babel/runtime/helpers/interopRequireDefault"
			);
		Object
			.defineProperty(
				n,
				"__esModule",
				{
					value: !
						0
				}), n
			.validator = n
			.validateConstructorParam =
			n
			.throwExceptionManually =
			n.throttle = n
			.httpRequest = n
			.getWindowQueryParams =
			n
			.getWindowLocation =
			n
			.getWindowLanguage =
			n
			.getScrollableParent =
			n
			.getScrollReadyElement =
			n
			.getElementYOffset =
			n
			.getElementPositions =
			n
			.getElementInnerHeight =
			void 0;
		var a = r(e(
				"@babel/runtime/regenerator")),
			i = r(e(
				"@babel/runtime/helpers/typeof")),
			o = r(e(
				"@babel/runtime/helpers/defineProperty")),
			s = r(e(
				"@babel/runtime/helpers/asyncToGenerator")),
			l = e(
				"./constants"
				);
		function c(e, t)
		{
			var n = Object
				.keys(e);
			if (Object
				.getOwnPropertySymbols
				)
			{
				var r =
					Object
					.getOwnPropertySymbols(
						e);
				t && (r = r
						.filter(
							(function (
								t
								)
							{
								return Object
									.getOwnPropertyDescriptor(
										e,
										t
										)
									.enumerable
							})
							)
						), n
					.push
					.apply(
						n, r
						)
			}
			return n
		}
		function u(e)
		{
			for (var t =
				1; t <
				arguments
				.length; t++
				)
			{
				var n =
					null !=
					arguments[
						t] ?
					arguments[
						t] :
					{};
				t % 2 ? c(
						Object(
							n
							),
						!0)
					.forEach(
						(function (
							t
							)
						{
							(0, o
								.default
								)
							(e, t,
								n[
									t]
								)
						})
						) :
					Object
					.getOwnPropertyDescriptors ?
					Object
					.defineProperties(
						e,
						Object
						.getOwnPropertyDescriptors(
							n
							)
						) :
					c(Object(
						n
						))
					.forEach(
						(function (
							t
							)
						{
							Object
								.defineProperty(
									e,
									t,
									Object
									.getOwnPropertyDescriptor(
										n,
										t
										)
									)
						}))
			}
			return e
		}
		var d = function (e)
			{
				return e ===
					document
					.body
			},
			h = function (e)
			{
				return e
					.getBoundingClientRect()
			},
			f = function ()
			{
				var e = (0,
					s
					.default
					)(a
					.default
					.mark(
						(function e(
							t,
							n
							)
						{
							var r,
								i,
								o,
								s,
								l;
							return a
								.default
								.wrap(
									(function (
										e
										)
									{
										for (;;)
											switch (
												e
												.prev =
												e
												.next
												)
											{
											case 0:
												return r =
													n
													.timeout,
													i =
													void 0 ===
													r ?
													3e4 :
													r,
													o =
													new AbortController,
													s =
													setTimeout(
														(function ()
														{
															return o
																.abort()
														}),
														i
														),
													e
													.next =
													5,
													fetch(
														t,
														u(u(
															{},
															n
															),
														{},
														{
															signal: o
																.signal
														})
														);
											case 5:
												if (l =
													e
													.sent,
													clearTimeout(
														s
														),
													l
													.ok
													)
												{
													e.next =
														9;
													break
												}
												throw new Error(
													"Request is failed"
													);
											case 9:
												return e
													.abrupt(
														"return",
														l
														);
											case 10:
											case "end":
												return e
													.stop()
											}
									}),
									e
									)
						})
						)
					);
				return function (
					t, n
					)
				{
					return e
						.apply(
							this,
							arguments
							)
				}
			}();
		n.httpRequest = f;
		var p = {
			isValue: function (
				e)
			{
				try
				{
					return null !=
						e
				}
				catch (
					e
					)
				{
					return !
						1
				}
			},
			isJsonString: function (
				e)
			{
				try
				{
					return JSON
						.parse(
							e
							) &&
						!
						!
						e
				}
				catch (
					e
					)
				{
					return !
						1
				}
			},
			isURL: function (
				e)
			{
				try
				{
					return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
						.test(
							e
							)
				}
				catch (
					e
					)
				{
					return !
						1
				}
			},
			isNumber: function (
				e)
			{
				return "number" ==
					typeof e &&
					isFinite(
						e
						)
			}
		};
		n.validator = p, n
			.throttle =
			function (e, t)
			{
				var n, r,
					a = !1;
				return function i()
				{
					if (
						a)
						return n =
							arguments,
							void(
								r =
								this
								);
					e.apply(this,
							arguments
							),
						a = !
						0,
						setTimeout(
							(function ()
							{
								a = !
									1,
									n &&
									(i.apply(
											r,
											n
											),
										n =
										r =
										null
										)
							}),
							t
							)
				}
			}, n
			.getElementYOffset =
			function (e)
			{
				return d(
					e) ?
					window
					.pageYOffset :
					e
					.scrollTop
			}, n
			.getElementInnerHeight =
			function (e)
			{
				return d(
					e) ?
					window
					.innerHeight :
					e
					.clientHeight
			}, n
			.getScrollReadyElement =
			function (e)
			{
				return d(
					e) ?
					window :
					e
			}, n
			.getElementPositions =
			function (e, t)
			{
				var n = {
						top: void 0,
						left: void 0,
						height: void 0,
						bottom: void 0
					},
					r = h(
					t);
				return d(
					e) ? (n
						.top =
						r
						.top,
						n
						.left =
						r
						.left,
						n
						.height =
						r
						.height,
						n
						.bottom =
						r
						.bottom
						) :
					(n.top =
						r
						.top -
						h(e)
						.top,
						n
						.left =
						e
						.scrollLeft,
						n
						.height =
						e
						.scrollHeight,
						n
						.bottom =
						n
						.top +
						n
						.height
						), n
			}, n
			.getScrollableParent =
			function (e)
			{
				var t =
					document
					.createElement(
						"div"
						);
				t.style
					.height =
					""
					.concat(
						2 *
						window
						.innerHeight,
						"px"
						), e
					.appendChild(
						t);
				for (var n =
						function e(
							t
							)
						{
							return t &&
								t !==
								document
								.body ?
								function (
									e
									)
								{
									var t =
										e
										.scrollHeight >
										e
										.clientHeight;
									if (!
										t
										)
										return !
											1;
									var n = -
										1 !==
										window
										.getComputedStyle(
											e
											)
										.overflowY
										.indexOf(
											"hidden"
											);
									return t &&
										!
										n
								}
								(
									t) ?
								t :
								e(t
									.parentNode) :
								document
								.body
						}(
						e); e
					.firstChild;
					) e
					.removeChild(
						e
						.lastChild
						);
				return n
			};
		var m = function (e,
			t)
		{
			var n =
				"[RemixLoader] Unhandled exception";
			if ("CV" ===
				e)
			{
				var r =
					"[RemixLoader | CONSTRUCTOR VALIDATOR]";
				switch (
					t
					.type
					)
				{
				case "undefined":
					n = ""
						.concat(
							r,
							' Field "'
							)
						.concat(
							t
							.key,
							'" is required. Received value: "'
							)
						.concat(
							t
							.value,
							'"'
							);
					break;
				case "unknown":
					n = ""
						.concat(
							r,
							' Unknown field: "'
							)
						.concat(
							t
							.key,
							'"'
							);
					break;
				case "format":
					n = ""
						.concat(
							r,
							' Invalid field "'
							)
						.concat(
							t
							.key,
							'" format! Expected type: "'
							)
						.concat(
							t
							.expected,
							'". Received type: "'
							)
						.concat(
							(0, i
								.default
								)
							(t
								.value),
							'", value: "'
							)
						.concat(
							t
							.value,
							'"'
							);
					break;
				case "value":
					n = ""
						.concat(
							r,
							' Invalid field "'
							)
						.concat(
							t
							.key,
							'" value! Expected values: "'
							)
						.concat(
							t
							.expected
							.join(
								", "
								),
							'". Received value: "'
							)
						.concat(
							t
							.value,
							'"'
							);
					break;
				case "internal":
					n = ""
						.concat(
							r,
							' Internal error! Validating field: "'
							)
						.concat(
							t
							.key,
							'". Received value: "'
							)
						.concat(
							t
							.value,
							'"'
							)
				}
			}
			var a =
				new Error(
					n);
			throw a
				.name =
				"ManuallyException",
				a
		};
		n.throwExceptionManually =
			m, n
			.validateConstructorParam =
			function (e, t)
			{
				var n = !(
						arguments
						.length >
						2 &&
						void 0 !==
						arguments[
							2
							]
						) ||
					arguments[
						2],
					r =
					arguments
					.length >
					3 ?
					arguments[
						3] :
					void 0;
				try
				{
					if (p
						.isValue(
							t
							)
						)
						switch (
							e
							)
						{
						case "mode":
						case "projectId":
						case "lng":
							return "string" ==
								typeof t ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "String"
								});
						case "projectMode":
							return "string" !=
								typeof t ?
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "String"
								}) :
								Object
								.values(
									l
									.PROJECT_MODES
									)
								.includes(
									t
									) ?
								t :
								m("CV",
								{
									type: "value",
									key: e,
									value: t,
									expected: Object
										.values(
											l
											.PROJECT_MODES
											)
								});
						case "nodeElement":
							return t instanceof Element ||
								t instanceof HTMLDocument ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "HTMLElement"
								});
						case "remixUrl":
							return p
								.isURL(
									t
									) ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "String (URL)"
								});
						case "features":
							return Array
								.isArray(
									t
									) ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "Array"
								});
						case "projectStructure":
							return p
								.isJsonString(
									t
									) ?
								JSON
								.parse(
									t
									) :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "String (JSON)"
								});
						case "initialWidth":
						case "initialHeight":
						case "projectNumericId":
						case "additionalTopOffset":
							return p
								.isNumber(
									t
									) ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "Number"
								});
						case "onEvent":
							return "function" ==
								typeof t ?
								t :
								m("CV",
								{
									type: "format",
									key: e,
									value: t,
									expected: "Function"
								});
						default:
							return m(
								"CV",
								{
									type: "unknown",
									key: e
								}
								)
						}
					return n ?
						m("CV",
						{
							type: "undefined",
							key: e,
							value: t
						}) :
						r
				}
				catch (t)
				{
					if ("ManuallyException" ===
						t
						.name
						)
						throw t;
					return m(
						"CV",
						{
							type: "internal",
							key: e,
							err: t
						}
						)
				}
			}, n
			.getWindowLanguage =
			function ()
			{
				try
				{
					var e =
						window
						.navigator ?
						window
						.navigator
						.language ||
						window
						.navigator
						.systemLanguage ||
						window
						.navigator
						.userLanguage :
						null;
					return e ?
						e
						.slice(
							0,
							2
							)
						.toLowerCase() :
						null
				}
				catch (e)
				{
					return null
				}
			}, n
			.getWindowLocation =
			function ()
			{
				return {
					host: window
						.location
						.host,
					hostname: window
						.location
						.hostname,
					href: window
						.location
						.href,
					origin: window
						.location
						.origin,
					pathname: window
						.location
						.pathname,
					port: window
						.location
						.port,
					protocol: window
						.location
						.protocol
				}
			}, n
			.getWindowQueryParams =
			function ()
			{
				return Object
					.fromEntries(
						new URLSearchParams(
							window
							.location
							.search
							)
						.entries()
						)
			}
	},
	{
		"./constants": 24,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/defineProperty": 11,
		"@babel/runtime/helpers/interopRequireDefault": 12,
		"@babel/runtime/helpers/typeof": 16,
		"@babel/runtime/regenerator": 18
	}]
},
{}, [25]);
