/*! ARC JS Version 2.0.97.1. Compressed on 2019-05-13@10:06:54 */
var libFuncName = null;
if ("undefined" == typeof jQuery && "undefined" == typeof Zepto && "function" == typeof $) libFuncName = $;
else if ("function" == typeof jQuery) libFuncName = jQuery;
else {
    if ("function" != typeof Zepto) throw new TypeError;
    libFuncName = Zepto
}
var ArcSetHtmlJSclass = function () {
    var a = new RegExp("(^|\\s)no-js(\\s|$)"),
        b = document.getElementsByTagName("html")[0];
    b.className = b.className.replace(a, "$1js$2")
};
ArcSetHtmlJSclass(),
    function (a, b, c, d) {
        "use strict";

        function e(a) {
            return ("string" == typeof a || a instanceof String) && (a = a.replace(/^[\\'"]+|(;\s?})+|[\\'"]+$/g, "")), a
        }
        0 === a("head").has(".foundation-mq-small").length && a("head").append('<meta class="foundation-mq-small">'), 0 === a("head").has(".foundation-mq-medium").length && a("head").append('<meta class="foundation-mq-medium">'), 0 === a("head").has(".foundation-mq-large").length && a("head").append('<meta class="foundation-mq-large">'), b.matchMedia = b.matchMedia || function (a, b) {
            var c, d = a.documentElement,
                e = d.firstElementChild || d.firstChild,
                f = a.createElement("body"),
                g = a.createElement("div");
            return g.id = "mq-test-1", g.style.cssText = "position:absolute;top:-100em", f.style.background = "none", f.appendChild(g),
                function (a) {
                    return g.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', d.insertBefore(f, e), c = 42 === g.offsetWidth, d.removeChild(f), {
                        matches: c,
                        media: a
                    }
                }
        }(c), Array.prototype.filter || (Array.prototype.filter = function (a) {
            if (null == this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if ("function" == typeof a) {
                for (var d = [], e = arguments[1], f = 0; c > f; f++)
                    if (f in b) {
                        var g = b[f];
                        a && a.call(e, g, f, b) && d.push(g)
                    } return d
            }
        }), Function.prototype.bind || (Function.prototype.bind = function (a) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1),
                c = this,
                d = function () {},
                e = function () {
                    return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                };
            return d.prototype = this.prototype, e.prototype = new d, e
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
            if (null == this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if (0 === c) return -1;
            var d = 0;
            if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
            for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                if (e in b && b[e] === a) return e;
            return -1
        }), a.fn.stop = a.fn.stop || function () {
            return this
        }, b.Arc = {
            name: "Arc",
            version: "1.4.0",
            fversion: "4.3.2",
            cache: {},
            media_queries: {
                small: e(a(".foundation-mq-small").css("font-family")),
                medium: e(a(".foundation-mq-medium").css("font-family")),
                large: e(a(".foundation-mq-large").css("font-family"))
            },
            stylesheet: a("<style></style>").appendTo("head")[0].sheet,
            init: function (b, c, d, e, f, g) {
                var h, i = [b, d, e, f],
                    j = [],
                    g = g || !1;
                if (g && (this.nc = g), this.rtl = /rtl/i.test(a("html").attr("dir")), this.scope = b || this.scope, c && "string" == typeof c && !/reflow/i.test(c)) {
                    if (/off/i.test(c)) return this.off();
                    if (h = c.split(" "), h.length > 0)
                        for (var k = h.length - 1; k >= 0; k--) j.push(this.init_lib(h[k], i))
                } else {
                    /reflow/i.test(c) && (i[1] = "reflow");
                    for (var l in this.libs) j.push(this.init_lib(l, i))
                }
                return "function" == typeof c && i.unshift(c), this.detectBrowser(), this.response_obj(j, i)
            },
            response_obj: function (a, b) {
                for (var c = 0, d = b.length; d > c; c++)
                    if ("function" == typeof b[c]) return b[c]({
                        errors: a.filter(function (a) {
                            return "string" == typeof a ? a : void 0
                        })
                    });
                return a
            },
            init_lib: function (a, b) {
                return this.trap(function () {
                    return this.libs.hasOwnProperty(a) ? (this.patch(this.libs[a]), this.libs[a].init.apply(this.libs[a], b)) : function () {}
                }.bind(this), a)
            },
            trap: function (a, b) {
                if (!this.nc) try {
                    return a()
                } catch (c) {
                    return this.error({
                        name: b,
                        message: "could not be initialized",
                        more: c.name + " " + c.message
                    })
                }
                return a()
            },
            patch: function (a) {
                this.fix_outer(a), a.scope = this.scope, a.rtl = this.rtl
            },
            inherit: function (a, b) {
                for (var c = b.split(" "), d = c.length - 1; d >= 0; d--) this.lib_methods.hasOwnProperty(c[d]) && (this.libs[a.name][c[d]] = this.lib_methods[c[d]])
            },
            random_str: function (a) {
                var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
                a || (a = Math.floor(Math.random() * b.length));
                for (var c = "", d = 0; a > d; d++) c += b[Math.floor(Math.random() * b.length)];
                return c
            },
            libs: {},
            lib_methods: {
                set_data: function (a, b) {
                    var c = [this.name, +new Date, Arc.random_str(5)].join("-");
                    return Arc.cache[c] = b, a.attr("data-" + this.name + "-id", c), b
                },
                get_data: function (a) {
                    return Arc.cache[a.attr("data-" + this.name + "-id")]
                },
                remove_data: function (b) {
                    b ? (delete Arc.cache[b.attr("data-" + this.name + "-id")], b.attr("data-" + this.name + "-id", "")) : a("[data-" + this.name + "-id]").each(function () {
                        delete Arc.cache[a(this).attr("data-" + this.name + "-id")], a(this).attr("data-" + this.name + "-id", "")
                    })
                },
                throttle: function (a, b) {
                    var c = null;
                    return function () {
                        var d = this,
                            e = arguments;
                        clearTimeout(c), c = setTimeout(function () {
                            a.apply(d, e)
                        }, b)
                    }
                },
                data_options: function (b) {
                    function c(a) {
                        return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                    }

                    function d(b) {
                        return "string" == typeof b ? a.trim(b) : b
                    }
                    var e, f, g = {},
                        h = (b.attr("data-options") || ":").split(";"),
                        i = h.length;
                    for (e = i - 1; e >= 0; e--) f = h[e].split(":"), /true/i.test(f[1]) && (f[1] = !0), /false/i.test(f[1]) && (f[1] = !1), c(f[1]) && (f[1] = parseInt(f[1], 10)), 2 === f.length && f[0].length > 0 && (g[d(f[0])] = d(f[1]));
                    return g
                },
                delay: function (a, b) {
                    return setTimeout(a, b)
                },
                scrollTo: function (c, d, e) {
                    if (!(0 > e)) {
                        var f = d - a(b).scrollTop(),
                            g = f / e * 10;
                        this.scrollToTimerCache = setTimeout(function () {
                            isNaN(parseInt(g, 10)) || (b.scrollTo(0, a(b).scrollTop() + g), this.scrollTo(c, d, e - 10))
                        }.bind(this), 10)
                    }
                },
                scrollLeft: function (a) {
                    return a.length ? "scrollLeft" in a[0] ? a[0].scrollLeft : a[0].pageXOffset : void 0
                },
                empty: function (a) {
                    if (a.length && a.length > 0) return !1;
                    if (a.length && 0 === a.length) return !0;
                    for (var b in a)
                        if (hasOwnProperty.call(a, b)) return !1;
                    return !0
                },
                register_media: function (b, c) {
                    Arc.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), Arc.media_queries[b] = e(a("." + c).css("font-family")))
                },
                addCustomRule: function (a, b) {
                    if (b === d) Arc.stylesheet.insertRule(a, Arc.stylesheet.cssRules.length);
                    else {
                        var c = Arc.media_queries[b];
                        c !== d && Arc.stylesheet.insertRule("@media " + Arc.media_queries[b] + "{ " + a + " }")
                    }
                }
            },
            fix_outer: function (a) {
                a.outerHeight = function (a, b) {
                    return "function" == typeof Zepto ? a.height() : "undefined" != typeof b ? a.outerHeight(b) : a.outerHeight()
                }, a.outerWidth = function (a, b) {
                    return "function" == typeof Zepto ? a.width() : "undefined" != typeof b ? a.outerWidth(b) : a.outerWidth()
                }
            },
            error: function (a) {
                return a.name + " " + a.message + "; " + a.more
            },
            detectBrowser: function () {
                var c = a("html"),
                    d = b.navigator.userAgent,
                    e = d.indexOf("MSIE "),
                    f = d.indexOf("Trident/"),
                    g = d.indexOf("Edge/"),
                    h = "no-touch",
                    i = c.attr("class"),
                    j = [];
                (e > 0 || f > 0 || g > 0) && j.push("ie"), c.hasClass("ie") || j.push("no-ie");
                var k = {};
                ! function () {
                    var a, b = navigator.userAgent,
                        c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                    if (/trident/i.test(c[1])) return a = /\brv[ :]+(\d+)/g.exec(b) || [], k.vendor = "msie", void(k.version = a[1] || "");
                    if ("Chrome" === c[1]) {
                        if (a = b.match(/\bOPR\/(\d+)/), null != a) return k.vendor = "opera", void(k.version = +a[1]);
                        if (a = b.match(/\bEdge\/(\d+)/), null != a) return k.vendor = "msie", void(k.version = +a[1])
                    }
                    c = c[2] ? [c[1], c[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (a = b.match(/version\/(\d+)/i)) && c.splice(1, 1, a[1]), k.vendor = c[0], k.version = c[1]
                }(), "undefined" != typeof k.vendor && "Netscape" !== k.vendor ? j.push("browser-" + k.vendor.toLowerCase()) : j.push("browser-other"), "undefined" != typeof k.version ? j.push("browser-version-" + k.version) : j.push("browser-version-undefined"), e > 0 && k.version <= 9 && j.push("no-js-editor ie-unsupported");
                var l = "other",
                    m = "other",
                    n = "no-win",
                    o = "",
                    p = "";
                if (d.indexOf("Win") >= 0) {
                    l = "win", n = "win";
                    var q = /Windows NT (\d{1,}(\.|_)\d{1,})/g,
                        r = q.exec(d);
                    null != r && (r = Number(r[1].replace(/(\.|_)/g, "")), o = 52 >= r ? "os-version-win-legacy" : "os-version-win-normal"), p = -1 !== d.indexOf("Windows NT 10.0") ? "windows-10" : -1 !== d.indexOf("Windows NT 6.1") ? "windows-7" : -1 !== d.indexOf("Windows NT 6.2") || -1 !== d.indexOf("Windows NT 6.3") ? "windows-8" : -1 !== d.indexOf("Windows NT 5.1") || -1 !== d.indexOf("Windows NT 5.2") ? "windows-XP" : -1 !== d.indexOf("Windows NT 6.0") ? "windows-vista" : "windows-other"
                }
                if (d.indexOf("Mac") >= 0) {
                    l = "mac";
                    var q = /OS X (\d{1,}(\.|_)\d{1,})/g,
                        r = q.exec(d);
                    null != r && (r = Number(r[1].replace(/(\.|_)/g, "")), o = 108 >= r ? "os-version-mac-branch-one" : 109 == r || 1010 == r ? "os-version-mac-branch-two" : "os-version-mac-branch-three")
                }
                if (d.indexOf("Linux") >= 0 && (l = "linux"), d.indexOf("Android") >= 0 || d.indexOf("android") >= 0) {
                    l = "android", m = "android";
                    var s = b.innerWidth,
                        t = b.innerHeight;
                    m += s > 768 || t > 768 ? " device-type-tablet" : " device-type-phone"
                }(d.indexOf("iPhone") >= 0 || d.indexOf("iPad") >= 0 || d.indexOf("iPod") >= 0) && (l = "ios", d.indexOf("iPad") >= 0 ? m = "ipad" : d.indexOf("iPhone") >= 0 && (m = "iphone")), j.push(n), j.push("os-" + l), j.push(o), j.push(p), j.push("device-" + m);
                var u = !1;
                try {
                    u = Boolean(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                } catch (v) {
                    u = "undefined" != typeof navigator.mimeTypes["application/x-shockwave-flash"]
                }
                return j.push(u ? "flash" : "no-flash"), ("ontouchstart" in b || navigator.maxTouchPoints) && (h = "touch"), j.push(h), i = i + " " + j.join(" "), c.attr("class", i), !1
            },
            off: function () {
                return a(this.scope).off(".fndtn"), a(b).off(".fndtn"), !0
            },
            zj: a
        }, a.fn.arc = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                return Arc.init.apply(Arc, [this].concat(a)), this
            })
        }
    }(libFuncName, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.alerts = {
            name: "alerts",
            version: "1.0",
            fversion: "4.2.2",
            settings: {
                speed: 300,
                callback: function () {}
            },
            init: function (b, c, d) {
                return this.scope = b || this.scope, "object" == typeof c && a.extend(!0, this.settings, c), "string" != typeof c ? (this.settings.init || this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var b = this;
                a(this.scope).on("click.fndtn.alerts", "[data-alert] a.close", function (c) {
                    c.preventDefault(), a(this).closest("[data-alert]").fadeOut(b.speed, function () {
                        a(this).remove(), b.settings.callback()
                    })
                }), this.settings.init = !0
            },
            off: function () {
                a(this.scope).off(".fndtn.alerts")
            },
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b) {
        "use strict";
        Arc.libs.buttons = {
            name: "buttons",
            version: "1.0",
            fversion: "4.2.2",
            settings: {},
            buttonsWrapper: null,
            init: function (b, c, d) {
                this.scope = b || this.scope;
                var e = this;
                return this.buttonsWrapper = a(".button-selection-group-wrapper"), this.buttonsWrapper.find(".button.active").each(function () {
                    e.calculateButtonSelector(a(this))
                }), this.buttonsWrapper.find(".icon.active").each(function () {
                    e.calculateButtonSelector(a(this).closest(".button"))
                }), "object" == typeof c && a.extend(!0, this.settings, c), a(window).on("resize", function () {
                    e.buttonsWrapper.find(".button.active").each(function () {
                        e.calculateButtonSelector(a(this), !1)
                    }), e.buttonsWrapper.find(".icon.active").each(function () {
                        e.calculateButtonSelector(a(this).closest(".button"), !1)
                    })
                }), "string" != typeof c ? (this.settings.init || this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var b = this;
                a(this.scope).on("click.fndtn.buttons", ".button", function (b) {
                    a(this).hasClass("disabled") && b.preventDefault()
                }), a(this.scope).on("click.fndtn.buttons", ".button.round", function (c) {
                    if (c.preventDefault(), !a(this).hasClass("disabled")) {
                        b.calculateButtonSelector(a(this));
                        var d = a(this).closest(".button-selection-group");
                        d.find(".button.round").each(function () {
                            a(this).removeClass("active")
                        }), a(this).addClass("active"), a("body").trigger("buttonGroupRoundClicked")
                    }
                }), a(this.scope).on("click.fndtn.buttons", ".button.icon", function (c) {
                    if (c.preventDefault(), !a(this).find("i.icon").hasClass("disabled")) {
                        b.calculateButtonSelector(a(this));
                        var d = a(this).closest(".button-group-icon");
                        d.find("i.icon").removeClass("active"), a(this).children("i.icon").addClass("active")
                    }
                    a("body").trigger("buttonGroupIconClicked")
                }), a(this.scope).on("mouseenter.fndtn.buttons", ".button", function (b) {
                    var c = a(this).parent().parent();
                    a(this).hasClass("disabled") || a(this).hasClass("no-hover") || c.hasClass("button-selection-group") || c.hasClass("button-group") || c.hasClass("input-button-group") || c.hasClass("button-group-icon") || a(this).addClass("active")
                }), a(this.scope).on("mouseleave.fndtn.buttons", ".button", function (b) {
                    var c = a(this).parent().parent();
                    a(this).hasClass("disabled") || a(this).hasClass("no-hover") || c.hasClass("button-selection-group") || c.hasClass("button-group") || c.hasClass("input-button-group") || c.hasClass("button-group-icon") || a(this).removeClass("active")
                }), a(this.scope).on("click.fndtn.buttons", ".button", function (b) {
                    var c = a(this).parent().parent();
                    a(this).hasClass("disabled") || a(this).hasClass("no-hover") || !c.hasClass("single-active") || (b.preventDefault(), c.each(function () {
                        a(this).find(".button").removeClass("active")
                    }), a(this).addClass("active"))
                }), this.settings.init = !0
            },
            off: function () {
                a(this.scope).off(".fndtn.buttons")
            },
            reflow: function () {},
            calculateButtonSelector: function (a, b) {
                window.requestAnimationFrame(function () {
                    var c = a.closest(".button-selection-group-wrapper"),
                        d = a.outerWidth(),
                        e = a.position(),
                        f = -383 + d / 2 + e.left;
                    0 == b ? c.find(".selection-arrow").css({
                        left: f
                    }) : c.find(".selection-arrow").animate({
                        left: f
                    }, 350, "swing")
                })
            }
        }
    }(Arc.zj, this, this.document),
    function (a, b, c) {
        function d(a) {
            return a
        }

        function e(a) {
            return decodeURIComponent(a.replace(f, " "))
        }
        var f = /\+/g,
            g = a.cookie = function (f, h, i) {
                if (h !== c) {
                    if (i = a.extend({}, g.defaults, i), null === h && (i.expires = -1), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setDate(k.getDate() + j)
                    }
                    return h = g.json ? JSON.stringify(h) : String(h), b.cookie = [encodeURIComponent(f), "=", g.raw ? h : encodeURIComponent(h), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = g.raw ? d : e, m = b.cookie.split("; "), n = 0, o = m.length; o > n; n++) {
                    var p = m[n].split("=");
                    if (l(p.shift()) === f) {
                        var q = l(p.join("="));
                        return g.json ? JSON.parse(q) : q
                    }
                }
                return null
            };
        g.defaults = {}, a.removeCookie = function (b, c) {
            return null !== a.cookie(b) ? (a.cookie(b, null, c), !0) : !1
        }
    }(Arc.zj, document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.dropdown = {
            name: "dropdown",
            version: "1.1",
            fversion: "4.3.0",
            settings: {
                activeClass: "open",
                is_hover: !1,
                opened: function () {},
                closed: function () {}
            },
            init: function (b, c, d) {
                return this.scope = b || this.scope, Arc.inherit(this, "throttle scrollLeft data_options"), "object" == typeof c && a.extend(!0, this.settings, c), "string" != typeof c ? (this.settings.init || this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var c = this;
                a(this.scope).on("click.fndtn.dropdown", "[data-dropdown]", function (b) {
                    if (a(this).hasClass("disabled")) b.preventDefault();
                    else {
                        var d = a.extend({}, c.settings, c.data_options(a(this)));
                        b.preventDefault(), (!d.is_hover || a(this).hasClass("active") || a("html").hasClass("touch")) && c.toggle(a(this))
                    }
                }).on("mouseenter", "[data-dropdown]", function (b) {
                    var d = a.extend({}, c.settings, c.data_options(a(this)));
                    a(".f-dropdown.open").each(function () {
                        a(this).css(Arc.rtl ? "right" : "left", "-99999px").removeClass(c.settings.activeClass), a(this).trigger("closed")
                    }), d.is_hover && !a("html").hasClass("touch") && c.toggle(a(this))
                }).on("mouseleave", "[data-dropdown]", function (b) {
                    setTimeout(function () {
                        var b = a("[data-dropdown-content]:hover").length > 0,
                            d = a("[data-dropdown]:hover").length > 0;
                        b || d || a(".f-dropdown.open").each(function () {
                            a(this).css(Arc.rtl ? "right" : "left", "-99999px").removeClass(c.settings.activeClass), a(this).trigger("closed")
                        })
                    }, 250)
                }).on("mouseleave", "[data-dropdown-content]", function (b) {
                    var d = a('[data-dropdown="' + a(this).attr("id") + '"]'),
                        e = a.extend({}, c.settings, c.data_options(d));
                    e.is_hover && c.close.call(c, a(this))
                }).on("opened.fndtn.dropdown", "[data-dropdown-content]", this.settings.opened).on("closed.fndtn.dropdown", "[data-dropdown-content]", this.settings.closed), a(b).on("resize.fndtn.dropdown", c.throttle(function () {
                    c.resize.call(c)
                }, 50)).trigger("resize"), this.settings.init = !0
            },
            close: function (b) {
                var c = this;
                b.each(function () {
                    a(this).hasClass(c.settings.activeClass) && (a(this).css(Arc.rtl ? "right" : "left", "-99999px").removeClass(c.settings.activeClass), a(this).trigger("closed"))
                }), b.hasClass("basket") && a(b).children(".tip").removeAttr("style")
            },
            open: function (a, b) {
                this.css(a.addClass(this.settings.activeClass), b), a.trigger("opened")
            },
            toggle: function (c) {
                var d = a(c).siblings(".f-dropdown");
                if (this.close.call(this, a("[data-dropdown-content]").not(d)), d.hasClass(this.settings.activeClass)) c.removeClass("opendropdown active").blur(), this.close.call(this, d);
                else {
                    c.addClass("opendropdown"), this.close.call(this, a("[data-dropdown-content]")), this.open.call(this, d, c);
                    var e = this;
                    d.find("a").click(function () {
                        e.close.call(e, d), c.removeClass("opendropdown")
                    })
                }
                if (d.hasClass("basket")) {
                    if (d.hasClass("open")) {
                        var f = d.outerWidth(),
                            g = c.outerWidth();
                        if (d.css({
                                left: g + c.position().left - f
                            }), d.find(".item-rows").children().length > 3) {
                            d.find(".item-rows").addClass("scroll"), d.find(".item-rows").css({
                                height: "50px"
                            });
                            for (var h = 0, i = 0; 3 > i; i++) h += d.find(".item-rows").children().eq(i).outerHeight();
                            d.find(".item-rows").css({
                                height: "" + h + "px"
                            })
                        } else d.find(".item-rows").removeClass("scroll"), d.find(".item-rows").css({
                            height: "auto"
                        })
                    }
                } else if (d.hasClass("open")) {
                    if (this.small()) {
                        var g = b.innerWidth,
                            f = d.outerWidth();
                        g != f && d.css({
                            left: -(g / 2) - f / 2
                        })
                    } else {
                        var g = c.outerWidth();
                        if (144 > g && (g = 144), d.hasClass("open")) {
                            var j = d.offsetParent(),
                                k = c.offset();
                            k.left -= j.offset().left, d.css({
                                left: k.left
                            })
                        }
                    }
                    d.width(g)
                }
                if (c.hasClass("openup")) {
                    var l = d.outerHeight() + 30,
                        m = parseInt(d.css("top")) - l;
                    d.css("top", m + "px")
                }
            },
            resize: function () {
                var c = a("[data-dropdown-content].open"),
                    d = a("[data-dropdown='" + c.attr("id") + "']");
                if (c.length && d.length && this.css(c, d), c.hasClass("basket") && c.hasClass("open")) {
                    var e = c.outerWidth(),
                        f = d.outerWidth();
                    c.css({
                        left: f + d.position().left - e
                    })
                } else if (c.hasClass("open")) {
                    if (this.small()) {
                        var f = b.innerWidth,
                            e = c.outerWidth();
                        f != e && c.css({
                            left: -(f / 2) - e / 2
                        })
                    } else {
                        var f = d.outerWidth();
                        if (144 > f && (f = 144), c.hasClass("open")) {
                            var g = c.offsetParent(),
                                h = d.offset();
                            h.left -= g.offset().left, c.css({
                                left: h.left
                            })
                        }
                    }
                    c.width(f)
                }
                if (d.hasClass("openup")) {
                    var i = c.outerHeight() + 30,
                        j = parseInt(c.css("top")) - i;
                    c.css("top", j + "px")
                }
            },
            css: function (c, d) {
                var e = c.offsetParent(),
                    f = d.offset();
                if (f.top -= e.offset().top, f.left -= e.offset().left, this.small()) {
                    var g = "100%",
                        h = 0;
                    c.hasClass("basket") && c.hasClass("open") && (g = c.width(), h = d.offset().left), c.css({
                        position: "absolute",
                        width: g,
                        left: h,
                        "max-width": "none",
                        top: f.top + this.outerHeight(d)
                    })
                } else {
                    if (!Arc.rtl && a(b).width() > this.outerWidth(c) + d.offset().left) {
                        var h = f.left;
                        c.hasClass("right") && c.removeClass("right")
                    } else {
                        c.hasClass("right") || c.addClass("right");
                        var h = f.left - (this.outerWidth(c) - this.outerWidth(d))
                    }
                    c.attr("style", "").css({
                        position: "absolute",
                        top: f.top + this.outerHeight(d) - 2,
                        left: h
                    })
                }
                return c
            },
            small: function () {
                return a(b).width() < 640 || a("html").hasClass("lt-ie9")
            },
            off: function () {
                a(this.scope).off(".fndtn.dropdown"), a("html, body").off(".fndtn.dropdown"), a(b).off(".fndtn.dropdown"), a("[data-dropdown-content]").off(".fndtn.dropdown"), this.settings.init = !1
            },
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.forms = {
            name: "forms",
            cache: {},
            settings: {},
            init: function (a, b, c) {
                this.setup(), this.events()
            },
            events: function () {
                a("textarea.autogrow").keyup(function () {
                    a(this).css("height", 33);
                    var b = a(this)[0].scrollHeight + 2;
                    a(this).css("height", b)
                })
            },
            setup: function () {
                a("input[type=email]").attr("autocapitalize", "off").attr("autocorrect", "off"), a("input[type=tel]").attr("autocorrect", "off").attr("autocomplete", "tel")
            }
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        ! function (a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
        }(function (a) {
            var e = b.Slick || {};
            e = function () {
                function b(b, e) {
                    var f, g, h, i = this;
                    if (i.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: a(b),
                            appendDots: a(b),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<div data-role="none" class="slick-button slick-prev" aria-label="previous">n</div>',
                            nextArrow: '<div data-role="none" class="slick-button slick-next" aria-label="next">o</div>',
                            autoplay: !1,
                            autoplaySpeed: 3e3,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function (a, b) {
                                return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: !1,
                            focusOnSelect: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            noSlideOnIconClick: !1,
                            pauseOnHover: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rtl: !1,
                            slide: "",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            variableWidth: !1,
                            vertical: !1,
                            waitForAnimate: !0
                        }, i.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1
                        }, a.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.hidden = "hidden", i.paused = !1, i.positionProp = null, i.respondTo = null, i.shouldClick = !0, i.$slider = a(b), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, f = a(b).data("slick") || {}, i.options = a.extend({}, i.defaults, f, e), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, g = i.options.responsive || null, g && g.length > -1) {
                        i.respondTo = i.options.respondTo || "window";
                        for (h in g) g.hasOwnProperty(h) && (i.breakpoints.push(g[h].breakpoint), i.breakpointSettings[g[h].breakpoint] = g[h].settings);
                        i.breakpoints.sort(function (a, b) {
                            return i.options.mobileFirst === !0 ? a - b : b - a
                        })
                    }
                    "undefined" != typeof c.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : "undefined" != typeof c.msHidden ? (i.hidden = "msHidden", i.visibilityChange = "msvisibilitychange") : "undefined" != typeof c.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = a.proxy(i.autoPlay, i), i.autoPlayClear = a.proxy(i.autoPlayClear, i), i.changeSlide = a.proxy(i.changeSlide, i), i.clickHandler = a.proxy(i.clickHandler, i), i.selectHandler = a.proxy(i.selectHandler, i), i.setPosition = a.proxy(i.setPosition, i), i.swipeHandler = a.proxy(i.swipeHandler, i), i.dragHandler = a.proxy(i.dragHandler, i), i.keyHandler = a.proxy(i.keyHandler, i), i.autoPlayIterator = a.proxy(i.autoPlayIterator, i), i.instanceUid = d++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.init(), i.checkResponsive(!0)
                }
                var d = 0;
                return b
            }(), e.prototype.addSlide = e.prototype.slickAdd = function (b, c, d) {
                var e = this;
                if ("boolean" == typeof c) d = c, c = null;
                else if (0 > c || c >= e.slideCount) return !1;
                e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
                    a(c).attr("data-slick-index", b)
                }), e.$slidesCache = e.$slides, e.reinit()
            }, e.prototype.animateHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.animate({
                        height: b
                    }, a.options.speed)
                }
            }, e.prototype.animateSlide = function (b, c) {
                var d = {},
                    e = this;
                e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                    left: b
                }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                    top: b
                }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                    animStart: e.currentLeft
                }).animate({
                    animStart: b
                }, {
                    duration: e.options.speed,
                    easing: e.options.easing,
                    step: function (a) {
                        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                    },
                    complete: function () {
                        c && c.call()
                    }
                })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
                    e.disableTransition(), c.call()
                }, e.options.speed))
            }, e.prototype.asNavFor = function (b) {
                var c = this,
                    d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
                null !== d && d.slideHandler(b, !0)
            }, e.prototype.applyTransition = function (a) {
                var b = this,
                    c = {};
                b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
            }, e.prototype.autoPlay = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function () {
                var a = this;
                a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
            }, e.prototype.buildArrows = function () {
                var b = this;
                b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
            }, e.prototype.buildDots = function () {
                var b, c, d = this;
                if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                    for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                    c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, e.prototype.buildOut = function () {
                var b = this;
                b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
                    a(c).attr("data-slick-index", b)
                }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
            }, e.prototype.checkResponsive = function (c) {
                var d, e, f, g = this,
                    h = g.$slider.width(),
                    i = b.innerWidth || a(b).width();
                if ("window" === g.respondTo ? f = i : "slider" === g.respondTo ? f = h : "min" === g.respondTo && (f = Math.min(i, h)), g.originalSettings.responsive && g.originalSettings.responsive.length > -1 && null !== g.originalSettings.responsive) {
                    e = null;
                    for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                    null !== e ? null !== g.activeBreakpoint ? e !== g.activeBreakpoint && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick() : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), c === !0 && (g.currentSlide = g.options.initialSlide), g.refresh())) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick() : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), c === !0 && (g.currentSlide = g.options.initialSlide), g.refresh())) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, c === !0 && (g.currentSlide = g.options.initialSlide), g.refresh())
                }
            }, e.prototype.changeSlide = function (b, c) {
                var d, e, f, g = this,
                    h = a(b.target);
                switch (h.is("a") && b.preventDefault(), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                    case "previous":
                        e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                        break;
                    case "next":
                        e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                        break;
                    case "index":
                        var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * g.options.slidesToScroll;
                        g.slideHandler(g.checkNavigable(i), !1, c);
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function (a) {
                var b, c, d = this;
                if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
                else
                    for (var e in b) {
                        if (a < b[e]) {
                            a = c;
                            break
                        }
                        c = b[e]
                    }
                return a
            }, e.prototype.clickHandler = function (a) {
                var b = this;
                b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
            }, e.prototype.destroy = function () {
                var d = this;
                d.autoPlayClear(), d.touchObject = {}, a(".slick-cloned", d.$slider).remove(), d.$dots && d.$dots.remove(), d.$prevArrow && "object" != typeof d.options.prevArrow && d.$prevArrow.remove(), d.$nextArrow && "object" != typeof d.options.nextArrow && d.$nextArrow.remove(), d.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                    position: "",
                    left: "",
                    top: "",
                    zIndex: "",
                    opacity: "",
                    width: ""
                }), d.$slider.removeClass("slick-slider"), d.$slider.removeClass("slick-initialized"), d.$list.off(".slick"), a(b).off(".slick-" + d.instanceUid), a(c).off(".slick-" + d.instanceUid), d.$slider.html(d.$slides)
            }, e.prototype.disableTransition = function (a) {
                var b = this,
                    c = {};
                c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
            }, e.prototype.fadeSlide = function (a, b) {
                var c = this;
                c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                    zIndex: 1e3
                }), c.$slides.eq(a).animate({
                    opacity: 1
                }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                    opacity: 1,
                    zIndex: 1e3
                }), b && setTimeout(function () {
                    c.disableTransition(a), b.call()
                }, c.options.speed))
            }, e.prototype.filterSlides = e.prototype.slickFilter = function (a) {
                var b = this;
                null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                var a = this;
                return a.currentSlide
            }, e.prototype.getDotCount = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = 0;
                if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);
                else if (a.options.centerMode === !0) d = a.slideCount;
                else
                    for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
                return d - 1
            }, e.prototype.getLeft = function (a) {
                var b, c, d, e = this,
                    f = 0;
                if (!(e.slideCount <= e.options.slidesToShow)) return e.slideOffset = 0, c = e.$slides.first().outerHeight(), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)),
                    b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
            }, e.prototype.getOption = e.prototype.slickGetOption = function (a) {
                var b = this;
                return b.options[a]
            }, e.prototype.getNavigableIndexes = function () {
                var a, b = this,
                    c = 0,
                    d = 0,
                    e = [];
                for (b.options.infinite === !1 ? (a = b.slideCount - b.options.slidesToShow + 1, b.options.centerMode === !0 && (a = b.slideCount)) : (c = -1 * b.slideCount, d = -1 * b.slideCount, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
                return e
            }, e.prototype.getSlick = function () {
                return this
            }, e.prototype.getSlideCount = function () {
                var b, c, d, e = this;
                return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
                    return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
                }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
            }, e.prototype.goTo = e.prototype.slickGoTo = function (a, b) {
                var c = this;
                c.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(a)
                    }
                }, b)
            }, e.prototype.init = function () {
                var b = this;
                a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).parent().show(), a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
            }, e.prototype.initArrowEvents = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                    message: "previous"
                }, a.changeSlide), a.$nextArrow.on("click.slick", {
                    message: "next"
                }, a.changeSlide))
            }, e.prototype.initDotEvents = function () {
                var b = this;
                b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                    message: "index"
                }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function () {
                    b.paused = !0, b.autoPlayClear()
                }).on("mouseleave.slick", function () {
                    b.paused = !1, b.autoPlay()
                })
            }, e.prototype.initializeEvents = function () {
                var d = this;
                d.initArrowEvents(), d.initDotEvents(), d.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, d.swipeHandler), d.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, d.swipeHandler), d.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, d.swipeHandler), d.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, d.swipeHandler), d.$list.on("click.slick", d.clickHandler), d.options.autoplay === !0 && (a(c).on(d.visibilityChange, function () {
                    d.visibility()
                }), d.options.pauseOnHover === !0 && (d.$list.on("mouseenter.slick", function () {
                    d.paused = !0, d.autoPlayClear()
                }), d.$list.on("mouseleave.slick", function () {
                    d.paused = !1, d.autoPlay()
                }))), d.options.accessibility === !0 && d.$list.on("keydown.slick", d.keyHandler), d.options.focusOnSelect === !0 && a(d.$slideTrack).children().on("click.slick", d.selectHandler), a(b).on("orientationchange.slick.slick-" + d.instanceUid, function () {
                    d.checkResponsive(), d.setPosition()
                }), a(b).on("resize.slick.slick-" + d.instanceUid, function () {
                    a(b).width() !== d.windowWidth && (clearTimeout(d.windowDelay), d.windowDelay = b.setTimeout(function () {
                        d.windowWidth = a(b).width(), d.checkResponsive(), d.setPosition()
                    }, 50))
                }), a("*[draggable!=true]", d.$slideTrack).on("dragstart", function (a) {
                    a.preventDefault()
                }), a(b).on("load.slick.slick-" + d.instanceUid, d.setPosition), a(c).on("ready.slick.slick-" + d.instanceUid, d.setPosition)
            }, e.prototype.initUI = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
            }, e.prototype.keyHandler = function (a) {
                var b = this;
                37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                    data: {
                        message: "previous"
                    }
                }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, e.prototype.lazyLoad = function () {
                function b(b) {
                    a("img[data-lazy]", b).each(function () {
                        var b = a(this),
                            c = a(this).attr("data-lazy");
                        b.load(function () {
                            b.animate({
                                opacity: 1
                            }, 200)
                        }).css({
                            opacity: 0
                        }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
                    })
                }
                var c, d, e, f, g = this;
                g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
            }, e.prototype.loadSlider = function () {
                var a = this;
                a.setPosition(), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad(), a.$slideTrack.css({
                    opacity: 1
                }), a.$slider.animate({
                    opacity: "1"
                }, 1500)
            }, e.prototype.next = e.prototype.slickNext = function () {
                var a = this;
                a.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, e.prototype.pause = e.prototype.slickPause = function () {
                var a = this;
                a.autoPlayClear(), a.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function () {
                var a = this;
                a.paused = !1, a.autoPlay()
            }, e.prototype.postSlide = function (a) {
                var b = this;
                b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
            }, e.prototype.prev = e.prototype.slickPrev = function () {
                var a = this;
                a.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, e.prototype.progressiveLazyLoad = function () {
                var b, c, d = this;
                b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function () {
                    c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
                }).error(function () {
                    c.removeAttr("data-lazy"), d.progressiveLazyLoad()
                }))
            }, e.prototype.refresh = function () {
                var b = this,
                    c = b.currentSlide;
                b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
                    data: {
                        message: "index",
                        index: c
                    }
                }, !0)
            }, e.prototype.reinit = function () {
                var b = this;
                b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
            }, e.prototype.removeSlide = e.prototype.slickRemove = function (a, b, c) {
                var d = this;
                return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
            }, e.prototype.setCSS = function (a) {
                var b, c, d = this,
                    e = {};
                d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
            }, e.prototype.setDimensions = function () {
                var a = this;
                if (a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                        padding: "0px " + a.options.centerPadding
                    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                        padding: a.options.centerPadding + " 0px"
                    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1) a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length) + a.options.slidesToShow);
                else if (a.options.variableWidth === !0) {
                    var b = 0;
                    a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.children(".slick-slide").each(function () {
                        b += a.listWidth
                    }), a.$slideTrack.width(Math.ceil(b) + 1)
                } else a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length));
                var c = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - c)
            }, e.prototype.setFade = function () {
                var b, c = this;
                c.$slides.each(function (d, e) {
                    b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
                        position: "relative",
                        right: b,
                        top: 0,
                        zIndex: 800,
                        opacity: 0
                    }) : a(e).css({
                        position: "relative",
                        left: b,
                        top: 0,
                        zIndex: 800,
                        opacity: 0
                    })
                }), c.$slides.eq(c.currentSlide).css({
                    zIndex: 900,
                    opacity: 1
                })
            }, e.prototype.setHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.css("height", b)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function (a, b, c) {
                var d = this;
                d.options[a] = b, c === !0 && (d.unload(), d.reinit())
            }, e.prototype.setPosition = function () {
                var a = this;
                a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
            }, e.prototype.setProps = function () {
                var a = this,
                    b = c.body.style;
                a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (b.WebkitTransition !== d || b.MozTransition !== d || b.msTransition !== d) && a.options.useCSS === !0 && (a.cssTransitions = !0), b.OTransform !== d && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", b.perspectiveProperty === d && b.webkitPerspective === d && (a.animType = !1)), b.MozTransform !== d && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", b.perspectiveProperty === d && b.MozPerspective === d && (a.animType = !1)), b.webkitTransform !== d && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", b.perspectiveProperty === d && b.webkitPerspective === d && (a.animType = !1)), b.msTransform !== d && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", b.msTransform === d && (a.animType = !1)), b.transform !== d && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
            }, e.prototype.setSlideClasses = function (a) {
                var b, c, d, e, f = this;
                f.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), c = f.$slider.find(".slick-slide"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a || a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
            }, e.prototype.setupInfinite = function () {
                var b, c, d, e = this;
                if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                    for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                    for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                    e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                        a(this).attr("id", "")
                    })
                }
            }, e.prototype.selectHandler = function (b) {
                var c = this,
                    d = parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));
                return d || (d = 0), c.slideCount < c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), c.$slides.eq(d).addClass("slick-active").attr("aria-hidden", "false"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), void c.asNavFor(d)) : void(c.options.noSlideOnIconClick !== !0 && c.slideHandler(d))
            }, e.prototype.slideHandler = function (a, b, c) {
                var d, e, f, g, h = null,
                    i = this;
                return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount < i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                    i.postSlide(d)
                }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                    i.postSlide(d)
                }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function () {
                    i.postSlide(e)
                }) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
                    i.postSlide(e)
                }) : i.postSlide(e))))
            }, e.prototype.startLoad = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
            }, e.prototype.swipeDirection = function () {
                var a, b, c, d, e = this;
                return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical"
            }, e.prototype.swipeEnd = function (a) {
                var b, c = this;
                if (c.dragging = !1, c.shouldClick = c.touchObject.swipeLength > 10 ? !1 : !0, c.touchObject.curX === d) return !1;
                if (c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (c.swipeDirection()) {
                    case "left":
                        b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), c.slideHandler(b), c.currentDirection = 0, c.touchObject = {}, c.$slider.trigger("swipe", [c, "left"]);
                        break;
                    case "right":
                        b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), c.slideHandler(b), c.currentDirection = 1, c.touchObject = {}, c.$slider.trigger("swipe", [c, "right"])
                } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
            }, e.prototype.swipeHandler = function (a) {
                var b = this;
                if (!(b.options.swipe === !1 || "ontouchend" in c && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && a.originalEvent.touches !== d ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
                    case "start":
                        b.swipeStart(a);
                        break;
                    case "move":
                        b.swipeMove(a);
                        break;
                    case "end":
                        b.swipeEnd(a)
                }
            }, e.prototype.swipeMove = function (a) {
                var b, c, e, f, g, h = this;
                return g = a.originalEvent !== d ? a.originalEvent.touches : null, !h.dragging || g && 1 !== g.length ? !1 : (b = h.getLeft(h.currentSlide), h.touchObject.curX = g !== d ? g[0].pageX : a.clientX, h.touchObject.curY = g !== d ? g[0].pageY : a.clientY, h.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(h.touchObject.curX - h.touchObject.startX, 2))), c = h.swipeDirection(), "vertical" !== c ? (a.originalEvent !== d && h.touchObject.swipeLength > 4 && a.preventDefault(), f = (h.options.rtl === !1 ? 1 : -1) * (h.touchObject.curX > h.touchObject.startX ? 1 : -1), e = h.touchObject.swipeLength, h.touchObject.edgeHit = !1, h.options.infinite === !1 && (0 === h.currentSlide && "right" === c || h.currentSlide >= h.getDotCount() && "left" === c) && (e = h.touchObject.swipeLength * h.options.edgeFriction, h.touchObject.edgeHit = !0), h.options.vertical === !1 ? h.swipeLeft = b + e * f : h.swipeLeft = b + e * (h.$list.height() / h.listWidth) * f, h.options.fade === !0 || h.options.touchMove === !1 ? !1 : h.animating === !0 ? (h.swipeLeft = null, !1) : void h.setCSS(h.swipeLeft)) : void 0)
            }, e.prototype.swipeStart = function (a) {
                var b, c = this;
                return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (a.originalEvent !== d && a.originalEvent.touches !== d && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = b !== d ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = b !== d ? b.pageY : a.clientY, void(c.dragging = !0))
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                var a = this;
                null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
            }, e.prototype.unload = function () {
                var b = this;
                a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function () {
                var a = this;
                a.destroy()
            }, e.prototype.updateArrows = function () {
                var a, b = this;
                a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.options.infinite !== !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.removeClass("slick-disabled"), b.$nextArrow.removeClass("slick-disabled"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled"), b.$nextArrow.removeClass("slick-disabled")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled"), b.$prevArrow.removeClass("slick-disabled")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled"), b.$prevArrow.removeClass("slick-disabled")))
            }, e.prototype.updateDots = function () {
                var a = this;
                null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, e.prototype.visibility = function () {
                var a = this;
                c[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
            }, a.fn.slick = function () {
                var a, b = this,
                    c = arguments[0],
                    d = Array.prototype.slice.call(arguments, 1),
                    f = b.length,
                    g = 0;
                for (g; f > g; g++)
                    if ("object" == typeof c || "undefined" == typeof c ? b[g].slick = new e(b[g], c) : a = b[g].slick[c].apply(b[g].slick, d), "undefined" != typeof a) return a;
                return b
            }
        })
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        a(c).ready(function () {
            a(".merchandising-notification-bar").each(function () {
                var b = a(this);
                b.find("span.toggle-text").click(function () {
                    b.find("p.terms-and-conditions").toggle(), b.find("span.toggle-icon i.icon").toggleClass("transform");
                    var c = b.find(".show-offer-details").attr("data-showtext"),
                        d = b.find(".show-offer-details").attr("data-hidetext");
                    return a(this).text() === c ? a(this).text(d) : a(this).text(c), !1
                })
            })
        })
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        var e = function () {},
            f = function (e, f) {
                var j = e[0];
                if (j.classList.contains(f.slides_container_class)) return this;
                var k, l, m, n, o, p, q = this,
                    r = e,
                    s = j,
                    t = 0,
                    u = !1;
                s.children[0].classList.add(f.active_slide_class), q.update_slide_number = function (a) {
                    if (f.bullets) {
                        var b = m.querySelectorAll("li");
                        b.forEach(function (a) {
                            a.classList.remove(f.bullets_active_class)
                        }), b[a].classList.add(f.bullets_active_class)
                    }
                }, q.update_active_link = function (b) {
                    var c = a('a[data-orbit-link="' + r.children().eq(b).attr("data-orbit-slide") + '"]');
                    c.parents("ul").find("[data-orbit-link]").removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
                }, q.build_markup = function () {
                    var a = c.createElement("div");
                    if (a.classList.add(f.container_class), s.parentNode.insertBefore(a, s), a.appendChild(s), k = r.parent(), l = s.parentNode, s.classList.add(f.slides_container_class), f.navigation_arrows) {
                        var b = function (a, b) {
                                var d = c.createElement("a");
                                return d.classList.add(b), d.setAttribute("href", "#"), d.innerHTML = '<span><i class="arc icon nav-arrow-' + a + '"></i></span>', d
                            },
                            d = b("left", f.prev_class),
                            e = b("right", f.next_class),
                            g = c.createDocumentFragment();
                        g.appendChild(d), g.appendChild(e), l.appendChild(g)
                    }
                    if (f.timer && (n = c.createElement("div"), n.classList.add(f.timer_container_class), n.innerHTML = '<span></span><div class="' + f.timer_progress_class + '"></div>', n.classList.add(f.timer_paused_class), l.appendChild(n)), f.bullets) {
                        m = c.createElement("ol"), m.style.display = "none", m.classList.add(f.bullets_container_class), l.appendChild(m);
                        for (var h = 0, i = s.children.length; i > h; h++)
                            if (!s.children[h].classList.contains("orbit-placeholder")) {
                                var j = c.createElement("li");
                                j.setAttribute("data-orbit-slide", h), j.addEventListener("click", q.link_bullet), m.appendChild(j)
                            }
                    }
                    f.stack_on_small && l.classList.add(f.stack_on_small_class), q.update_slide_number(0), q.update_active_link(0)
                }, q._goto = function (b, c) {
                    if (u) return !1;
                    if (b === t) return !1;
                    "object" == typeof p && p.restart();
                    var d = r.children(),
                        e = "next";
                    u = !0, t > b && (e = "prev"), b >= d.length ? b = 0 : 0 > b && (b = d.length - 1);
                    var g = a(d.get(t)),
                        h = a(d.get(b));
                    g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), r.trigger("orbit:before-slide-change"), f.before_slide_change(), q.update_active_link(b);
                    var i = function () {
                        var a = function () {
                            t = b, u = !1, c === !0 && (p = q.create_timer(), p.start()), q.update_slide_number(t), r.trigger("orbit:after-slide-change", [{
                                slide_number: t,
                                total_slides: d.length
                            }]), f.after_slide_change(t, d.length)
                        };
                        r.height() != h.height() && f.variable_height ? r.animate({
                            height: h.height()
                        }, 250, "linear", a) : a()
                    };
                    if (1 === d.length) return i(), !1;
                    var j = function () {
                        "next" === e && o.next(g, h, i), "prev" === e && o.prev(g, h, i)
                    };
                    h.height() > r.height() && f.variable_height ? r.animate({
                        height: h.height()
                    }, 250, "linear", j) : j()
                }, q.next = function (a) {
                    a.stopImmediatePropagation(), a.preventDefault(), q._goto(t + 1)
                }, q.prev = function (a) {
                    a.stopImmediatePropagation(), a.preventDefault(), q._goto(t - 1)
                }, q.link_custom = function (a) {
                    a.preventDefault();
                    var b = a.currentTarget.getAttribute("data-orbit-link");
                    if ("string" == typeof b && "" !== b.trim()) {
                        var c = k.find("[data-orbit-slide=" + b + "]"); - 1 != c.index() && q._goto(c.index())
                    }
                }, q.link_bullet = function (b) {
                    var c = a(this).attr("data-orbit-slide");
                    if ("string" == typeof c && "" != (c = a.trim(c)))
                        if (isNaN(parseInt(c))) {
                            var d = k.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && q._goto(d.index() + 1)
                        } else q._goto(parseInt(c))
                }, q.timer_callback = function () {
                    q._goto(t + 1, !0)
                }, q.compute_dimensions = function () {
                    var a = s.children[t],
                        b = a.offsetHeight;
                    f.variable_height || s.querySelectorAll("li").forEach(function (a) {
                        a.offsetHeight > b && (b = a.offsetHeight)
                    }), s.style.height = b + "px", "undefined" != typeof m && m.classList.add("show-for-small");
                    var c = s.querySelector(".orbit-placeholder");
                    c && (c.parentNode.removeChild(c), s.children[0] && (s.children[0].style.marginLeft = "0"))
                }, q.create_timer = function () {
                    var a = new g(l.querySelector("." + f.timer_container_class), f, q.timer_callback);
                    return a
                }, q.stop_timer = function () {
                    "object" == typeof p && p.stop()
                }, q.toggle_timer = function () {
                    var a = k.find("." + f.timer_container_class);
                    a.hasClass(f.timer_paused_class) ? ("undefined" == typeof p && (p = q.create_timer()), p.start()) : "object" == typeof p && p.stop()
                }, q.init = function () {
                    q.build_markup(), f.timer && (p = q.create_timer(), p.start()), o = new i(f, r), "slide" === f.animation && (o = new h(f, r)), k.on("click", "." + f.next_class, q.next), k.on("click", "." + f.prev_class, q.prev), f.next_on_click && k.on("click", "." + f.slides_container_class + " [data-orbit-slide]", q.link_bullet), k.on("click", q.toggle_timer), f.swipe && k.on("touchstart.fndtn.orbit", function (a) {
                        a.touches || (a = a.originalEvent);
                        var b = {
                            start_page_x: a.touches[0].pageX,
                            start_page_y: a.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: d
                        };
                        k.data("swipe-transition", b), a.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function (a) {
                        if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                            var b = k.data("swipe-transition");
                            if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
                                a.preventDefault();
                                var c = b.delta_x < 0 ? t + 1 : t - 1;
                                b.active = !0, q._goto(c)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function (a) {
                        k.data("swipe-transition", {}), a.stopPropagation()
                    }), k.on("mouseenter.fndtn.orbit", function (a) {
                        f.timer && f.pause_on_hover && q.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function (a) {
                        f.timer && f.resume_on_mouseout && p.start()
                    }), a(b).on("resize", q.compute_dimensions), q.compute_dimensions(), arcReady(function () {
                        l.previousElementSibling && (l.previousElementSibling.style.display = "none"), a(c).on("click", "[data-orbit-link]", q.link_custom)
                    }), r.trigger("orbit:ready")
                }, q.init()
            },
            g = function (b, c, d) {
                var e = b;
                b = a(b);
                var f, g, h = this,
                    i = c.timer_speed,
                    j = a(e.querySelector("." + c.timer_progress_class)),
                    k = -1;
                this.update_progress = function (a) {
                    var b = j.clone();
                    b.attr("style", ""), b.css("width", a + "%"), j.replaceWith(b), j = b
                }, this.restart = function () {
                    clearTimeout(g), b.addClass(c.timer_paused_class), k = -1, h.update_progress(0)
                }, this.start = function () {
                    return b.hasClass(c.timer_paused_class) ? (k = -1 === k ? i : k, b.removeClass(c.timer_paused_class), f = (new Date).getTime(), j.animate({
                        width: "100%"
                    }, k, "linear"), g = setTimeout(function () {
                        h.restart(), d()
                    }, k), void b.trigger("orbit:timer-started")) : !0
                }, this.stop = function () {
                    if (b.hasClass(c.timer_paused_class)) return !0;
                    clearTimeout(g), b.addClass(c.timer_paused_class);
                    var a = (new Date).getTime();
                    k -= a - f;
                    var d = 100 - k / i * 100;
                    h.update_progress(d), b.trigger("orbit:timer-stopped")
                }
            },
            h = function (b, c) {
                var e = b.animation_speed,
                    f = 1 === a("html[dir=rtl]").length,
                    g = f ? "marginRight" : "marginLeft",
                    h = {};
                h[g] = "0%";
                var i = "undefined" == typeof jQuery ? "ease-in-out" : d;
                this.next = function (a, b, c) {
                    a.animate({
                        marginLeft: "-100%"
                    }, e), b.animate(h, e, i, function () {
                        a.css(g, "100%"), c()
                    })
                }, this.prev = function (a, b, c) {
                    a.animate({
                        marginLeft: "100%"
                    }, e), b.css(g, "-100%"), b.animate(h, e, i, function () {
                        a.css(g, "100%"), c()
                    })
                }
            },
            i = function (b, c) {
                var d = b.animation_speed;
                1 === a("html[dir=rtl]").length;
                this.next = function (a, b, c) {
                    b.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), b.animate({
                        opacity: "1"
                    }, d, "linear", function () {
                        a.css("margin", "100%"), c()
                    })
                }, this.prev = function (a, b, c) {
                    b.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), b.animate({
                        opacity: "1"
                    }, d, "linear", function () {
                        a.css("margin", "100%"), c()
                    })
                }
            };
        Arc.libs = Arc.libs || {}, Arc.libs.orbit = {
            name: "orbit",
            version: "1.5",
            fversion: "4.3.2",
            settings: {
                animation: "fade",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !1,
                slider_wrapper_class: "slideshow-wrapper",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                next_on_click: !1,
                before_slide_change: e,
                after_slide_change: e
            },
            init: function (b, c, d) {
                var e = this;
                if (Arc.inherit(e, "data_options"), "object" == typeof c && a.extend(!0, e.settings, c), a(b).is("[data-orbit]")) {
                    var g = a(b),
                        h = e.data_options(g);
                    new f(g, a.extend({}, e.settings, h))
                }
                a("[data-orbit]", b).each(function (b, c) {
                    var d = a(c),
                        g = e.data_options(d);
                    new f(d, a.extend({}, e.settings, g))
                })
            }
        }
    }(Arc.zj, this, this.document),
    function (a, b, c) {
        "use strict";
        Arc.libs.productblocks = {
            name: "productblocks",
            version: "1.3.9",
            settings: {
                product_blocks: ".prd-blk > li > a > ul"
            },
            product_block_wrapper_properties: [],
            product_block_properties: [],
            init: function (b, c, d) {
                return this.scope = b || this.scope, "object" == typeof c && a.extend(!0, this.settings, c), "string" != typeof c ? (this.events(), !0) : this[c].call(this, d)
            },
            setProductBlockHeight: function () {
                var b = Arc.libs.productblocks;
                b.product_block_properties.forEach(function (b) {
                    if (b.icon_wrapper.length > 0) {
                        var c = a(b.img).height(),
                            d = a(b.icon_wrapper).height();
                        c > 160 ? a(b.icon).removeClass("medium") : a(b.icon).addClass("medium"), c > 20 && a(b.icon_wrapper).css("top", c / 2 - d / 2).show()
                    }
                }), b.product_block_wrapper_properties.forEach(function (b) {
                    if (b.usps.length > 0) {
                        var c = 0;
                        b.usps.each(function () {
                            var b = a(this).height();
                            b > c && (c = b)
                        }), a(b.usps).css("height", c)
                    }
                })
            },
            getProductBlockProperties: function () {
                var b = Arc.libs.productblocks;
                a(".prd-blk > li").each(function (c) {
                    a(this).find("ul li .label.icon").length > 0 && a(this).find(".shadow").length < 1 && a(this).find("ul li:first").addClass("image-block"), b.product_block_properties[c] = {
                        node: a(this),
                        icon_wrapper: a(this).find("ul li .label.icon"),
                        icon: a(this).find("ul li .label.icon i"),
                        img: a(this).find("ul li img")
                    }
                }), a(".prd-blk").each(function (c) {
                    b.product_block_wrapper_properties[c] = {
                        usps: a(this).find("li > a > ul > li > ul.usps")
                    }
                })
            },
            events: function () {
                var d = Arc.libs.productblocks;
                d.getProductBlockProperties(), a(b).on("resize", function () {
                    b.requestAnimationFrame(d.setProductBlockHeight)
                }), a(b).triggerHandler("resize.fndtn.productblocks"), a(c).ready(function () {
                    b.requestAnimationFrame(d.setProductBlockHeight)
                })
            }
        }, a.fn.reflow_section = function (a) {
            var b = this,
                c = Arc.libs.productblocks;
            return b.removeAttr(c.settings.resized_data_attr), c.throttle(function () {
                c.resize(b, a)
            }, 30)(), this
        }
    }(Arc.zj, window, document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.reveal = {
            name: "reveal",
            version: "1.3.9",
            fversion: "4.2.2",
            locked: !1,
            settings: {
                animation: "fade",
                animationSpeed: 150,
                closeOnBackgroundClick: !0,
                closeOnEsc: !0,
                dismissModalClass: "close-reveal-modal",
                bgClass: "reveal-modal-bg",
                open: function () {},
                opened: function () {},
                close: function () {},
                closed: function () {},
                bg: a(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function (b, c, d) {
                return Arc.inherit(this, "data_options delay"), "object" == typeof c ? a.extend(!0, this.settings, c) : "undefined" != typeof d && a.extend(!0, this.settings, d), "string" != typeof c ? (this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var c = this;
                return a(this.scope).off(".fndtn.reveal").on("click.fndtn.reveal", "[data-reveal-id]", function (b) {
                    if (b.preventDefault(), !c.locked) {
                        var d = a(this),
                            e = d.data("reveal-ajax");
                        if (c.locked = !0, "undefined" == typeof e) c.open.call(c, d);
                        else {
                            var f = e === !0 ? d.attr("href") : e;
                            c.open.call(c, d, {
                                url: f
                            })
                        }
                    }
                }).on("click.fndtn.reveal", this.close_targets(), function (b) {
                    if (b.preventDefault(), !c.locked) {
                        var d = a.extend({}, c.settings, c.data_options(a(".reveal-modal.open")));
                        if (a(b.target)[0] === a("." + d.bgClass)[0] && !d.closeOnBackgroundClick) return;
                        c.locked = !0, c.close.call(c, a(this).closest(".reveal-modal"))
                    }
                }).on("open.fndtn.reveal", ".reveal-modal", this.settings.open).on("opened.fndtn.reveal", ".reveal-modal", this.settings.opened).on("opened.fndtn.reveal", ".reveal-modal", this.open_video).on("close.fndtn.reveal", ".reveal-modal", this.settings.close).on("closed.fndtn.reveal", ".reveal-modal", this.settings.closed).on("closed.fndtn.reveal", ".reveal-modal", this.close_video), a("body").bind("keyup.reveal", function (b) {
                    var d = a(".reveal-modal.open"),
                        e = a.extend({}, c.settings, c.data_options(d));
                    27 === b.which && e.closeOnEsc && d.arc("reveal", "close")
                }), a(b).on("resize", c.opened), !0
            },
            open: function (b, c) {
                if (b)
                    if ("undefined" != typeof b.selector) var d = a("#" + b.data("reveal-id"));
                    else {
                        var d = a(this.scope);
                        c = b
                    }
                else var d = a(this.scope);
                if (!d.hasClass("open")) {
                    var e = a(".reveal-modal.open");
                    if ("undefined" == typeof d.data("css-top") && d.data("css-top", parseInt(d.css("top"), 10)).data("offset", this.cache_offset(d)), d.trigger("open"), e.length < 1 && this.toggle_bg(d), "undefined" != typeof c && c.url) {
                        var f = this,
                            g = "undefined" != typeof c.success ? c.success : null;
                        a.extend(c, {
                            success: function (b, c, h) {
                                a.isFunction(g) && g(b, c, h), d.remove().appendTo(a("body")), d.html(b), f.reflow(), f.hide(e, f.settings.css.close), f.show(d, f.settings.css.open)
                            }
                        }), a.ajax(c)
                    } else this.hide(e, this.settings.css.close), this.show(d, this.settings.css.open)
                }
                if (this.settings.closeOnBackgroundClick) {
                    var h = this.settings.dismissModalClass;
                    a("." + this.settings.bgClass).unbind("click"), a("." + this.settings.bgClass).click(function (b) {
                        b.preventDefault(), a("." + h).trigger("click")
                    })
                }
            },
            opened: function () {
                var c = a(this);
                c.outerHeight() + c.data("css-top") <= b.innerHeight ? (a("body").css({
                    overflow: "hidden"
                }), a(".reveal-modal-bg").css({
                    "overflow-y": "scroll"
                })) : (a("body").css({
                    overflow: "visible",
                    "margin-right": 0
                }), a(".reveal-modal-bg").css("overflow-y", "hidden"))
            },
            closed: function () {
                "scroll" == a(".reveal-modal-bg").css("overflow-y") && (a("body").css({
                    overflow: "visible",
                    "margin-right": 0
                }), a(".reveal-modal-bg").css("overflow-y", "hidden"))
            },
            close: function (b) {
                var b = b && b.length ? b : a(this.scope),
                    c = a(".reveal-modal.open");
                c.length > 0 && (this.locked = !0, b.trigger("close"), this.toggle_bg(b), this.hide(c, this.settings.css.close))
            },
            close_targets: function () {
                var a = "." + this.settings.dismissModalClass;
                return a
            },
            toggle_bg: function (b) {
                0 === a(".reveal-modal-bg").length && (this.settings.bg = a("<div />", {
                    "class": this.settings.bgClass
                }).appendTo("body")), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
            },
            show: function (c, d) {
                if (d) {
                    if ("undefined" == typeof c.data("css-top") && c.data("css-top", parseInt(c.css("top"), 10)).data("offset", this.cache_offset(c)), /pop/i.test(this.settings.animation)) {
                        d.top = a(b).scrollTop() - c.data("offset") + "px";
                        var e = {
                            top: a(b).scrollTop() + c.data("css-top") + "px",
                            opacity: 1
                        };
                        return this.delay(function () {
                            return c.css(d).animate(e, this.settings.animationSpeed, "linear", function () {
                                this.locked = !1, c.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), this.settings.animationSpeed / 2)
                    }
                    if (/fade/i.test(this.settings.animation)) {
                        var f = a("body").scrollTop() || a("html").scrollTop();
                        d.top = f + c.data("css-top") + "px";
                        var e = {
                            opacity: 1
                        };
                        return this.delay(function () {
                            return c.css(d).animate(e, this.settings.animationSpeed, "linear", function () {
                                this.locked = !1, c.off("opened").on("opened", this.opened), c.trigger("opened")
                            }.bind(this)).addClass("open").children(".pd-reveal-close").appendTo("body")
                        }.bind(this), this.settings.animationSpeed / 2)
                    }
                    return c.css(d).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened")
                }
                return /fade/i.test(this.settings.animation) ? c.fadeIn(this.settings.animationSpeed / 2) : c.show()
            },
            hide: function (c, d) {
                if (d) {
                    if (/pop/i.test(this.settings.animation)) {
                        var e = {
                            top: -a(b).scrollTop() - c.data("offset") + "px",
                            opacity: 0
                        };
                        return this.delay(function () {
                            return c.animate(e, this.settings.animationSpeed, "linear", function () {
                                this.locked = !1, c.css("top", "99px"), c.css(d).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), this.settings.animationSpeed / 2)
                    }
                    if (/fade/i.test(this.settings.animation)) {
                        var e = {
                            opacity: 0
                        };
                        return this.delay(function () {
                            return c.animate(e, this.settings.animationSpeed, "linear", function () {
                                var b = a("body > .pd-reveal-close");
                                b.appendTo(c), this.locked = !1, c.css("top", "99px"), c.off("closed").on("closed", this.closed), c.css(d).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), this.settings.animationSpeed / 2)
                    }
                    return c.hide().css(d).removeClass("open").trigger("closed")
                }
                return /fade/i.test(this.settings.animation) ? c.fadeOut(this.settings.animationSpeed / 2) : c.hide()
            },
            close_video: function (b) {
                var c = a(this).find(".flex-video"),
                    d = c.find("iframe");
                d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", "about:blank"), c.hide())
            },
            open_video: function (b) {
                var c = a(this).find(".flex-video"),
                    e = c.find("iframe");
                if (e.length > 0) {
                    var f = e.attr("data-src");
                    if ("string" == typeof f) e[0].src = e.attr("data-src");
                    else {
                        var g = e[0].src;
                        e[0].src = d, e[0].src = g
                    }
                    c.show()
                }
            },
            cache_offset: function (a) {
                var b = a.show().height() + parseInt(a.css("top"), 10);
                return a.hide(), b
            },
            off: function () {
                a(this.scope).off(".fndtn.reveal")
            },
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b, c) {
        "use strict";
        Arc.libs.section = {
            name: "section",
            version: "1.4.0",
            fversion: "4.3.2",
            settings: {
                deep_linking: !1,
                one_up: !0,
                multi_expand: !1,
                always_open: !1,
                section_selector: "[data-section]",
                region_selector: "section, .section, [data-section-region]",
                title_selector: ".title, [data-section-title]",
                resized_data_attr: "data-section-resized",
                small_style_data_attr: "data-section-small-style",
                content_selector: ".content, [data-section-content]",
                nav_selector: '[data-section="vertical-nav"], [data-section="horizontal-nav"]',
                active_class: "active",
                icon_toggle_class: "collapsed",
                icon_selector: "span.plus-minus-toggle",
                selector_margin: 1,
                was_opened: 0,
                callback: function () {}
            },
            init: function (b, c, d) {
                var e = this;
                return Arc.inherit(this, "throttle data_options position_right offset_right"), a("div.section-container").each(function (b, c) {
                    var d = 0;
                    a(this).hasClass("centered") && (d = 70 * a(this).find("p.title").length);
                    var f = e.sectionSum(a(this));
                    a(this).hasClass("light") && (d = 120 * a(this).find("p.title").length, a(this).find("p.title > a > i").hide(), f = e.sectionSum(a(this)), a(this).find("p.title > a > i").show().css({
                        display: "block"
                    })), a(this).attr("rel", f + d)
                }), "object" == typeof c && a.extend(!0, e.settings, c), "string" != typeof c ? (this.events(), !0) : this[c].call(this, d)
            },
            events: function () {
                for (var d = this, e = [], f = d.settings.section_selector, g = d.settings.region_selector.split(","), h = d.settings.title_selector.split(","), i = 0, j = g.length; j > i; i++)
                    for (var k = g[i], l = 0, m = h.length; m > l; l++) {
                        var n = f + ">" + k + ">" + h[l];
                        e.push(n + " a"), e.push(n)
                    }
                d.off(), a(d.scope).on("click.fndtn.section", e.join(","), function (b) {
                    var c = a(this).closest(d.settings.title_selector);
                    d.close_navs(c), c.siblings(d.settings.content_selector).length > 0 ? d.toggle_active.call(c[0], b) : b.preventDefault()
                }), a(b).on("resize.fndtn.section", d.throttle(function () {
                    d.resize()
                }, 30)).on("hashchange.fndtn.section", d.set_active_from_hash), a(c).on("click.fndtn.section", function (b) {
                    b.isPropagationStopped && b.isPropagationStopped() || b.target !== c && d.close_navs(a(b.target).closest(d.settings.title_selector))
                }), a(b).triggerHandler("resize.fndtn.section"), a(b).triggerHandler("hashchange.fndtn.section")
            },
            close_navs: function (b) {
                var c = Arc.libs.section,
                    d = a(c.settings.nav_selector).filter(function () {
                        return !a.extend({}, c.settings, c.data_options(a(this))).one_up
                    });
                if (b.length > 0) {
                    var e = b.parent().parent();
                    (c.is_horizontal_nav(e) || c.is_vertical_nav(e)) && (d = d.filter(function () {
                        return this !== e[0]
                    }))
                }
                d.children(c.settings.region_selector).removeClass(c.settings.active_class)
            },
            supports_multi_expand: function (b) {
                var c = Arc.libs.section,
                    d = a.extend({}, c.settings, c.data_options(b));
                return c.is_accordion(b) && d.multi_expand
            },
            can_close: function (b) {
                var c = Arc.libs.section,
                    d = b.parent(),
                    e = a.extend({}, c.settings, c.data_options(d));
                return !e.one_up
            },
            should_show_one: function (b) {
                var c = Arc.libs.section,
                    d = a.extend({}, c.settings, c.data_options(b));
                return d.one_up && !c.is_horizontal_nav(b) && !c.is_vertical_nav(b)
            },
            ensure_region_shown: function (b) {
                var c = Arc.libs.section,
                    d = a.extend({}, c.settings, c.data_options(b)),
                    e = b.children(c.settings.region_selector);
                0 === e.filter("." + d.active_class).length && (e.filter(":visible").first().addClass(d.active_class), e.filter(":visible").first().find(c.settings.icon_selector).removeClass(c.settings.icon_toggle_class))
            },
            toggle_active: function (c) {
                var d = a(this),
                    e = Arc.libs.section,
                    f = d.parent(),
                    g = d.siblings(e.settings.content_selector),
                    h = f.parent(),
                    i = a.extend({}, e.settings, e.data_options(h)),
                    j = h.children(e.settings.region_selector).filter("." + e.settings.active_class);
                if (!i.deep_linking && g.length > 0 && c.preventDefault(), c.stopPropagation(), f.hasClass(e.settings.active_class) && i.always_open) e.can_close(f) && !i.always_open && (c.preventDefault(), i.deep_linking && (b.location.hash = ""), f.removeClass(e.settings.active_class), f.find(e.settings.icon_selector).removeClass(e.settings.icon_toggle_class), f.trigger("closed.fndtn.section"));
                else {
                    var k = !e.settings.always_open && d.parent().hasClass(e.settings.active_class) ? !0 : !1;
                    e.supports_multi_expand(h) || (j.removeClass(e.settings.active_class), j.find(e.settings.icon_selector).addClass(e.settings.icon_toggle_class), j.trigger("closed.fndtn.section")), f.addClass(e.settings.active_class), f.find(e.settings.icon_selector).removeClass(e.settings.icon_toggle_class), k && d.closest(".section-container").hasClass("accordion") && (d.parent().removeClass(e.settings.active_class), d.parent().find(e.settings.icon_selector).addClass(e.settings.icon_toggle_class)), e.resize(f.find(e.settings.section_selector).not("[" + e.settings.resized_data_attr + "]"), !0), f.trigger("opened.fndtn.section"), a(this).offset().top > b.pageYOffset && a(this).offset().top < b.pageYOffset + b.innerHeight || a("html, body").animate({
                        scrollTop: a(this).offset().top - 45
                    }, 0)
                }
                i.callback(h)
            },
            check_resize_timer: null,
            resize: function (c, d) {
                var e = Arc.libs.section,
                    f = (a(e.settings.section_selector), !matchMedia(Arc.media_queries.small).matches),
                    g = function (a, b) {
                        var c = !e.is_accordion(a) && !a.is("[" + e.settings.resized_data_attr + "]") && (!f || e.is_horizontal_tabs(a) || e.is_auto(a)) && b === ("none" === a.css("display") || !a.parent().is(":visible"));
                        return c
                    };
                a(b).triggerHandler("resize.fndtn.section"), a("div.section-container").each(function () {
                    var b = a(this),
                        c = e.sectionSum(b),
                        d = a(this).find(".active div.content").outerWidth(!0);
                    null == d && (d = a(this).first("div.content").outerWidth(!0)), c > d && d < b.attr("rel") ? b.hasClass("auto") && (b.removeClass("auto"), b.addClass("accordion"), b.addClass("auto-accordion"), b.attr("data-section", "accordion"), b.hasClass("light") && b.find("p.title > a > i").hide()) : b.hasClass("auto-accordion") && b.attr("rel") < d && (b.removeClass("accordion"), b.removeClass("auto-accordion"), b.find("p.title > span.plus-minus-toggle").remove(), b.addClass("auto"), b.attr("data-section", "auto"), b.hasClass("light") && b.find("p.title > a > i").show().css({
                        display: "block"
                    })), b.hasClass("accordion") && !b.hasClass("steps") && 0 === b.find("p.title span.plus-minus-toggle").length && (b.find("p.title").append('<span class="plus-minus-toggle ' + e.settings.icon_toggle_class + '"></span>'), b.find("section.active .plus-minus-toggle").removeClass(e.settings.icon_toggle_class))
                }), c = c || a(e.settings.section_selector), clearTimeout(e.check_resize_timer), f || c.removeAttr(e.settings.small_style_data_attr), c.each(function () {
                    var b = a(this),
                        c = b.children(e.settings.region_selector),
                        f = c.children(e.settings.title_selector),
                        g = c.children(e.settings.content_selector),
                        h = 44;
                    if (d) {
                        a.extend({}, e.settings, e.data_options(b));
                        e.should_show_one(b) && e.ensure_region_shown(b)
                    }
                    if (e.is_horizontal_tabs(b) || e.is_auto(b)) {
                        var i = 0;
                        b.hasClass("centered") && (i = b.width() / 2 - b.attr("rel") / 2 + e.settings.selector_margin), f.each(function () {
                            var c = a(this);
                            if (b.hasClass("centered") && c.addClass("centered"), b.hasClass("light") && c.addClass("light"), c.is(":visible")) {
                                c.css(e.rtl ? "right" : "left", i);
                                var d = parseInt(c.css("border-" + (e.rtl ? "left" : "right") + "-width"), 10);
                                "Nan" === d.toString() && (d = 0), i += a(this).outerWidth(!0) + e.settings.selector_margin, h = "number" == typeof e.outerHeight(c) ? Math.max(h, e.outerHeight(c)) : Math.max(h, 44)
                            }
                        }), c.each(function () {
                            var c = a(this),
                                d = c.children(e.settings.content_selector),
                                f = parseInt(d.css("border-top-width"), 10);
                            "Nan" === f.toString() && (f = 0), b.hasClass("tabs") || b.hasClass("auto") ? c.css("padding-top", h - f) : c.css("padding-top", 0), b.hasClass("centered") && (c.addClass("centered"), d.addClass("centered")), b.hasClass("light") && (c.addClass("light"), d.addClass("light"), b.hasClass("accordion") && (h = "auto"))
                        });
                        var j = !0;
                        c.each(function () {
                            var c = a(this);
                            c.css("margin-left", "-" + (j ? b : c.children(e.settings.title_selector)).css("border-left-width")), j = !1
                        }), c.css("margin-top", "-" + b.css("border-top-width")), f.css("height", h), b.css("min-height", h)
                    } else if (e.is_vertical_tabs(b)) {
                        var k = 0;
                        f.each(function () {
                            var b = a(this);
                            if (b.is(":visible")) {
                                b.css("top", k);
                                var c = parseInt(b.css("border-top-width"), 10);
                                "Nan" === c.toString() && (c = 0), k += e.outerHeight(b) - c
                            }
                        }), g.css("min-height", k + 1)
                    } else if (e.is_vertical_nav(b)) {
                        var l = 0,
                            m = !0;
                        f.each(function () {
                            l = Math.max(l, e.outerWidth(a(this)))
                        }), c.each(function () {
                            var c = a(this);
                            c.css("margin-top", "-" + (m ? b : c.children(e.settings.title_selector)).css("border-top-width")), m = !1
                        }), f.css("width", l), g.css(e.rtl ? "right" : "left", l), b.css("width", l)
                    }
                    b.attr(e.settings.resized_data_attr, !0)
                }), a(e.settings.section_selector).filter(function () {
                    return g(a(this), !0)
                }).length > 0 && (e.check_resize_timer = setTimeout(function () {
                    e.resize(c.filter(function () {
                        return g(a(this), !1)
                    }), !0)
                }, 100)), f && c.attr(e.settings.small_style_data_attr, !0), a("div.section-container").each(function () {
                    a(this).hasClass("start_closed") && 0 == e.settings.was_opened && (a(this).hasClass("auto-accordion") || a(this).hasClass("accordion")) ? (a(this).find("section").each(function () {
                        var b = a(this);
                        b.removeClass("active")
                    }), e.settings.was_opened = 1) : a(this).hasClass("auto-accordion") || a(this).hasClass("accordion") || 0 != a(this).find("section.active").length || a(this).find("section").first().addClass("active")
                })
            },
            is_vertical_nav: function (a) {
                return /vertical-nav/i.test(a.data("section"))
            },
            is_horizontal_nav: function (a) {
                return /horizontal-nav/i.test(a.data("section"))
            },
            is_accordion: function (a) {
                return /accordion/i.test(a.data("section"))
            },
            is_horizontal_tabs: function (a) {
                return /^tabs$/i.test(a.data("section"))
            },
            is_vertical_tabs: function (a) {
                return /vertical-tabs/i.test(a.data("section"))
            },
            is_auto: function (a) {
                var b = a.data("section");
                return "" === b || /^auto$/i.test(b)
            },
            set_active_from_hash: function () {
                var c = Arc.libs.section,
                    d = b.location.hash.substring(1),
                    e = a(c.settings.section_selector);
                e.each(function () {
                    var b, e = a(this),
                        f = a.extend({}, c.settings, c.data_options(e)),
                        g = (f.deep_linking && d.length > 0, !1),
                        h = [],
                        i = e.children(c.settings.region_selector);
                    if (i.each(function () {
                            var b = a(this),
                                e = "^" + b.children(c.settings.content_selector).data("slug") + "$";
                            !g && new RegExp(e, "i").test(d) ? (g = !0, b.addClass(c.settings.active_class)) : f.multi_expand || h.push(b)
                        }), g) {
                        for (; b = h.pop();) b.removeClass(c.settings.active_class);
                        return !1
                    }
                    c.should_show_one(e) && c.ensure_region_shown(e)
                })
            },
            reflow: function () {
                var b = Arc.libs.section;
                a(b.settings.section_selector).removeAttr(b.settings.resized_data_attr), b.throttle(function () {
                    b.resize()
                }, 30)()
            },
            small: function (b) {
                return this.is_horizontal_tabs(b) ? !1 : b && this.is_accordion(b) ? !0 : a("html").hasClass("lt-ie9") ? !0 : a("html").hasClass("ie8compat") ? !0 : !matchMedia(Arc.media_queries.small).matches
            },
            off: function () {
                a(this.scope).off(".fndtn.section"), a(b).off(".fndtn.section"), a(c).off(".fndtn.section")
            },
            sectionSum: function (b) {
                var c = 0;
                return b.find("p[data-section-title]").each(function (b) {
                    c += a(this).outerWidth(!0)
                }), c
            }
        }, a.fn.reflow_section = function (a) {
            var b = this,
                c = Arc.libs.section;
            return b.removeAttr(c.settings.resized_data_attr), c.throttle(function () {
                c.resize(b, a)
            }, 30)(), this
        }
    }(Arc.zj, window, document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.squeezebox = {
            name: "squeezebox",
            version: "1.4.0",
            fversion: "5.0.1",
            settings: {
                active_class: "active",
                toggleable: !0,
                icon_toggle_class: "collapsed",
                icon_selector: "span.plus-minus-toggle"
            },
            init: function (b, c, d) {
                return this.scope = b || this.scope, "object" == typeof c && a.extend(!0, this.settings, c), "string" != typeof c ? (this.settings.init || this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var c = this;
                a("[data-squeezebox] > dd > a:not(.active)").append('<span class="plus-minus-toggle ' + c.settings.icon_toggle_class + '"></span>'), a("[data-squeezebox] > dd > a.active").append('<span class="plus-minus-toggle "></span>'), a(this.scope).off(".squeezebox").on("click.fndtn.squeezebox", "[data-squeezebox] > dd > a", function (d) {
                    var e = a(this).parent(),
                        f = a("#" + this.href.split("#")[1]),
                        g = a("> dd > .content", f.closest("[data-squeezebox]")),
                        h = a("> dd > a", f.closest("[data-squeezebox]")),
                        i = c.settings,
                        j = a("> dd > .content." + i.active_class, e.parent()),
                        k = a(this).find(i.icon_selector);
                    return d.preventDefault(), j[0] === f[0] && i.toggleable ? (a(this).toggleClass(i.active_class), f.toggleClass(i.active_class)) : (g.removeClass(i.active_class), f.addClass(i.active_class), h.removeClass(i.active_class), h.find(i.icon_selector).addClass(i.icon_toggle_class), a(this).addClass(i.active_class), k.removeClass(i.icon_toggle_class), void(a(this).offset().top > b.pageYOffset && a(this).offset().top < b.pageYOffset + b.innerHeight || a("html, body").animate({
                        scrollTop: a(this).offset().top
                    }, 0)))
                })
            },
            off: function () {},
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.tables = {
            name: "tables",
            version: "1.3.4",
            fversion: "4.3.0",
            settings: {
                switched: !1,
                switchedModal: !1
            },
            init: function (b, c, d) {
                return this.scope = b || this.scope, "object" == typeof c ? a.extend(!0, this.settings, this.defaults, c) : a.extend(!0, this.settings, this.defaults, d), "string" != typeof c ? (this.settings.init || this.events(), this.settings.init) : this[c].call(this, d)
            },
            events: function () {
                var d = this;
                d.settings.switched;
                a(b).load(d.updateTables), a(b).on("redraw", d.updateTables), a(b).on("resize", d.updateTables), a(c).on("opened.fndtn.reveal ", ".reveal-modal", d.updateTables), a(c).on("closed.fndtn.reveal", ".reveal-modal", function () {
                    d.settings.switchedModal = !1, d.updateTables()
                })
            },
            isTableLargerThanModal: function () {
                var b = Arc.libs.tables;
                return b.settings.originalModalTableWidth !== d && a(".reveal-modal.open table.responsive:visible").length > 0 && b.settings.originalModalTableWidth > a(".reveal-modal.open").width() - 60 ? !0 : !1
            },
            setOriginalModalTableWidth: function () {
                var b = Arc.libs.tables;
                if (b.settings.originalModalTableWidth === d && a(".reveal-modal.open table.responsive:visible").length > 0) {
                    var c = 0;
                    return a(".reveal-modal.open table.responsive:visible").each(function (b, d) {
                        c = a(d).width() > c ? a(d).width() : c
                    }), c
                }
                return b.settings.originalModalTableWidth
            },
            updateTables: function () {
                var c = Arc.libs.tables;
                c.settings.originalModalTableWidth = c.setOriginalModalTableWidth();
                var d = a(".reveal-modal.open table.responsive:visible").length > 0 ? !0 : !1;
                d ? c.isTableLargerThanModal() && !c.settings.switchedModal ? (c.settings.switchedModal = !0, a(".reveal-modal.open table.responsive:visible").each(function (b, d) {
                    c.splitTable(a(d))
                })) : !c.isTableLargerThanModal() && c.settings.switchedModal && (c.settings.switchedModal = !1, a(".reveal-modal.open table.responsive:visible").each(function (b, d) {
                    c.unsplitTable(a(d))
                })) : a(b).width() <= 772 && !c.settings.switched ? (c.settings.switched = !0, a("table.responsive:visible").each(function (b, d) {
                    c.splitTable(a(d))
                })) : a(b).width() > 772 && c.settings.switched && (c.settings.switched = !1, a("table.responsive:visible").each(function (b, d) {
                    c.unsplitTable(a(d))
                }))
            },
            splitTable: function (a) {
                var b = this;
                a.wrap("<div class='table-wrapper' />");
                var c = a.clone();
                c.find("td:not(:first-child), th:not(:first-child)").css("display", "none"), c.removeClass("responsive"), a.closest(".table-wrapper").append(c), c.wrap("<div class='pinned' />"), a.wrap("<div class='scrollable' />"), a.addClass("movable"), b.setCellHeights(a, c)
            },
            unsplitTable: function (a) {
                a.closest(".table-wrapper").find(".pinned").remove(), a.unwrap(), a.unwrap(), a.removeClass("movable")
            },
            setCellHeights: function (b, c) {
                var d = b.find("tr"),
                    e = c.find("tr"),
                    f = [];
                d.each(function (b) {
                    var c = a(this),
                        d = c.find("th, td");
                    d.each(function () {
                        var c = a(this).outerHeight(!0);
                        f[b] = f[b] || 0, c > f[b] && (f[b] = c)
                    })
                }), d.each(function (b) {
                    a(this).height(f[b])
                }), e.each(function (b) {
                    a(this).height(f[b])
                })
            }
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.tooltips = {
            name: "tooltips",
            version: "1.1",
            fversion: "4.3.2.1",
            settings: {
                selector: ".has-tip",
                additionalInheritableClasses: [],
                tooltipClass: ".tooltip",
                touchCloseText: "X",
                appendTo: "body",
                "disable-for-touch": !1,
                "disable-for-small": !1,
                tipTemplate: function (a, b) {
                    return '<span data-selector="' + a + '" class="' + Arc.libs.tooltips.settings.tooltipClass.substring(1) + '">' + b + '<span class="nub"></span><span class="nub white"></span></span>'
                }
            },
            cache: {},
            init: function (c, d, e) {
                Arc.inherit(this, "data_options");
                var f = this;
                return "object" == typeof d ? a.extend(!0, this.settings, d) : "undefined" != typeof e && a.extend(!0, this.settings, e), "string" == typeof d ? this[d].call(this, e) : void(a("html").hasClass("touch") ? a(this.scope).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[data-tooltip]", function (b) {
                    var c = a.extend({}, f.settings, f.data_options(a(this)));
                    c["disable-for-touch"] || (b.preventDefault(), a(c.tooltipClass).hide(), f.showOrCreateTip(a(this)))
                }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltipClass, function (b) {
                    b.preventDefault(), a(this).fadeOut(150)
                }) : a(this.scope).on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[data-tooltip]", function (c) {
                    var d = a(this),
                        e = a.extend({}, f.settings, f.data_options(a(this)));
                    return e["disable-for-small"] === !0 && a(b).width() < 640 ? (c.preventDefault(), void a(e.tooltipClass).hide()) : void(/enter|over/i.test(c.type) ? f.showOrCreateTip(d) : ("mouseout" === c.type || "mouseleave" === c.type) && f.hide(d))
                }))
            },
            showOrCreateTip: function (a) {
                var b, c = this.getTip(a);
                if (c && c.length > 0) {
                    if (b = a.attr("data-title") + '<span class="nub"></span>', "" !== a.attr("data-title")) return b === c.html() ? this.show(a) : (c.remove(), this.create(a))
                } else if ("" !== a.attr("data-title")) return this.create(a)
            },
            getTip: function (b) {
                var c = this.selector(b),
                    d = null;
                return c && (d = a('span[data-selector="' + c + '"]' + this.settings.tooltipClass)), "object" == typeof d ? d : !1
            },
            selector: function (a) {
                var b = a.attr("id"),
                    c = a.attr("data-tooltip") || a.attr("data-selector");
                return (b && b.length < 1 || !b) && "string" != typeof c && (c = "tooltip" + Math.random().toString(36).substring(7), a.attr("data-selector", c)), b && b.length > 0 ? b : c
            },
            create: function (b) {
                var c = a(this.settings.tipTemplate(this.selector(b), a("<div></div>").html(b.attr("data-title")).html())),
                    d = this.inheritable_classes(b);
                c.addClass(d).appendTo(this.settings.appendTo), a("html").hasClass("touch") && c.append('<span class="tap-to-close" style="margin-top:10px;color:#E65C00;font-size:12px;font-weight:bold;">' + this.settings.touchCloseText + "</span>"), this.show(b)
            },
            reposition: function (c, d, e) {
                var f, g, h, i, j;
                if (d.css("visibility", "hidden").show(), f = c.data("width"), g = d.children(".nub"), h = this.outerHeight(g), i = this.outerHeight(g), j = function (a, b, c, d, e, f) {
                        return a.css({
                            top: b ? b : "auto",
                            bottom: d ? d : "auto",
                            left: e ? e : "auto",
                            right: c ? c : "auto",
                            width: f ? f : "auto"
                        }).end()
                    }, j(d, c.offset().top + this.outerHeight(c) + 10, "auto", "auto", c.offset().left, f), a(b).width() < 767 && f > 740) j(d, c.offset().top + this.outerHeight(c) + 10, "auto", "auto", 12.5, a(this.scope).width()), d.addClass("tip-override"), j(g, -h, "auto", "auto", c.offset().left);
                else {
                    var k = c.offset().left;
                    Arc.rtl && (k = c.offset().left + c.offset().width - this.outerWidth(d));
                    var l = "auto",
                        m = "auto",
                        n = "auto",
                        o = k,
                        p = f;
                    e && e.indexOf("tip-top") > -1 ? (l = c.offset().top - d.outerHeight() - h, m = "auto", n = "auto", o = k - d.width() / 2 + i / 2, p = f, g.css("left", d.width() / 2 - i)) : e && e.indexOf("tip-left") > -1 ? (l = c.offset().top + c.outerHeight() / 2 - d.outerHeight() / 2, m = "auto", n = "auto", o = c.offset().left - this.outerWidth(d) - h, p = f) : e && e.indexOf("tip-right") > -1 ? (l = c.offset().top + c.outerHeight() / 2 - d.outerHeight() / 2, m = "auto", n = "auto", o = c.offset().left + this.outerWidth(c) + h, p = f) : (l = c.offset().top + this.outerHeight(c) + h, m = "auto", n = "auto", o = k - d.width() / 2 + i / 2, p = f, j(g, -h, "auto", "auto", d.width() / 2 - i)), j(d, l, m, n, o, p).removeClass("tip-override"), d.removeClass("tip-override")
                }
                d.css("visibility", "visible").hide()
            },
            inheritable_classes: function (b) {
                var c = ["tip-top", "tip-left", "tip-bottom", "tip-right", "noradius", "has-title"].concat(this.settings.additionalInheritableClasses),
                    d = b.attr("class"),
                    e = d ? a.map(d.split(" "), function (b, d) {
                        return -1 !== a.inArray(b, c) ? b : void 0
                    }).join(" ") : "";
                return a.trim(e)
            },
            show: function (a) {
                var b = this.getTip(a);
                this.reposition(a, b, a.attr("class")), b.fadeIn(150)
            },
            hide: function (a) {
                var b = this.getTip(a);
                b.fadeOut(150)
            },
            reload: function () {
                var b = a(this);
                return b.data("fndtn-tooltips") ? b.foundationTooltips("destroy").foundationTooltips("init") : b.foundationTooltips("init")
            },
            off: function () {
                a(this.scope).off(".fndtn.tooltip"), a(this.settings.tooltipClass).each(function (b) {
                    a("[data-tooltip]").get(b).attr("data-title", a(this).text())
                }).remove()
            },
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Arc.libs.topbar = {
            name: "topbar",
            version: "1.3",
            fversion: "4.3.1",
            settings: {
                index: 0,
                stickyClass: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                is_hover: !1,
                mobile_show_parent_link: !1,
                scrolltop: !0,
                init: !1
            },
            init: function (c, d, e) {
                Arc.inherit(this, "data_options");
                var f = this;
                return "object" == typeof d ? a.extend(!0, this.settings, d) : "undefined" != typeof e && a.extend(!0, this.settings, e), "string" != typeof d ? (a(".top-bar, [data-topbar]").each(function () {
                    a.extend(!0, f.settings, f.data_options(a(this))), f.settings.$w = a(b), f.settings.$topbar = a(this), f.settings.$section = f.settings.$topbar.find("section"), f.settings.$titlebar = f.settings.$topbar.children("ul").first(), f.settings.$topbar.data("index", 0);
                    var c = a("<div class='top-bar-js-breakpoint'/>").insertAfter(f.settings.$topbar);
                    f.settings.breakPoint = c.width(), c.remove(), f.assemble(), f.settings.is_hover && f.settings.$topbar.find(".has-dropdown").addClass("not-click"), f.settings.$topbar.parent().hasClass("fixed") && a("body").css("padding-top", f.outerHeight(f.settings.$topbar))
                }), f.settings.init || this.events(), this.settings.init) : this[d].call(this, e)
            },
            timer: null,
            events: function () {
                var c = this,
                    d = this.outerHeight(a(".top-bar, [data-topbar]"));
                a(".top-bar-section .dropdown a").on("click", function () {
                    var b = a(this).closest(".top-bar").hasClass("expanded");
                    b && a(this).closest(".top-bar").removeClass("expanded")
                }), a(".has-dropdown").on("mouseover", function () {
                    var c = a(this).closest(".top-bar").hasClass("expanded");
                    if (c) a(this).children("a").first().on("click", function (a) {
                        a.preventDefault()
                    });
                    else {
                        a(this).addClass("hover"), a(this).children("a").addClass("hover");
                        var d = 1,
                            e = a(this).children("ul").offset().left,
                            f = a(this).children("ul").width(),
                            g = parseInt(a(this).children("ul").css("margin-left")),
                            h = a(b).width(),
                            i = h - e - f - 10;
                        0 > i && g >= 0 ? d = i : 0 > g && (d = g), a(this).children("ul").css("margin-left", d)
                    }
                }), a(".has-dropdown").on("mouseout", function () {
                    var b = a(this).closest(".top-bar").hasClass("expanded");
                    b || (a(this).children("a").first().on("click", function (a) {
                        a.preventDefault()
                    }), a(this).removeClass("hover"), a(this).children("a").removeClass("hover"))
                }), a(".has-dropdown").on("click", function (b) {
                    a(this).find("a").first().unbind("click");
                    var c = a(this).closest(".top-bar").hasClass("expanded");
                    return c ? (a(this).find("a").first().on("click", function (a) {
                        a.preventDefault()
                    }), a(this).toggleClass("hover"), a(this).children("a").toggleClass("hover"), void 0) : (location.href = a(b.target).attr("href"), !0)
                }), a(".top-bar-section ul li a").on("mouseover", function () {
                    a(this).addClass("hover")
                }), a(".top-bar-section ul li a").on("mouseout", function () {
                    a(this).removeClass("hover")
                }), a(".has-dropdown").on("touchend", function (c) {
                    var d = 1,
                        e = a(this).children("ul").offset().left,
                        f = a(this).children("ul").width(),
                        g = parseInt(a(this).children("ul").css("margin-left")),
                        h = a(b).width(),
                        i = h - e - f - 10;
                    0 > i && g >= 0 ? d = i : 0 > g && (d = g), a(this).children("ul").css("margin-left", d)
                }), a(".has-dropdown").children("a").on("touchend", function (b) {
                    b.preventDefault(), a(this).toggleClass("hover"), a(this).parent().toggleClass("hover"), a(this).parent().siblings(".has-dropdown").removeClass("hover")
                }), a(".top-bar .dropdown a").on("touchend", function (b) {
                    a(this).toggleClass("hover"), a(this).parent().toggleClass("hover"), a(this).toggleClass("hover"), a(this).parent().toggleClass("hover")
                }), a(".top-bar-section ul li a").on("touchend", function () {
                    a(".top-bar-section ul li a").removeClass("hover"), a(this).parent().siblings(".has-dropdown").removeClass("hover"), a(this).addClass("hover")
                }), a(this.scope).off(".fndtn.topbar").on("click.fndtn.topbar", ".top-bar .toggle-topbar, [data-topbar] .toggle-topbar", function (e) {
                    var f = a(this).closest(".top-bar, [data-topbar]"),
                        g = f.find("section, .section");
                    e.preventDefault(), c.breakpoint() && (c.rtl ? (g.css({
                        right: "0%"
                    }), g.find(">.name").css({
                        right: "100%"
                    })) : (g.css({
                        left: "0%"
                    }), g.find(">.name").css({
                        left: "100%"
                    })), g.find("li.moved").removeClass("moved"), f.data("index", 0), f.toggleClass("expanded").css("height", "")), f.hasClass("expanded") ? f.parent().hasClass("fixed") && (f.parent().removeClass("fixed"), f.addClass("fixed"), a("body").css("padding-top", "0"), c.settings.scrolltop && b.scrollTo(0, 0)) : f.hasClass("fixed") && (f.parent().addClass("fixed"), f.removeClass("fixed"), a("body").css("padding-top", d))
                }), a(b).on("resize.fndtn.topbar", function () {
                    c.breakpoint() || a(".top-bar, [data-topbar]").css("height", "").removeClass("expanded").find("li").removeClass("hover")
                }.bind(this)), a("body").on("click.fndtn.topbar", function (b) {
                    var c = a(b.target).closest("[data-topbar], .top-bar");
                    c.length > 0 || a(".top-bar li, [data-topbar] li").removeClass("hover")
                })
            },
            breakpoint: function () {
                return a(c).width() <= this.settings.breakPoint || a("html").hasClass("lt-ie9")
            },
            assemble: function () {
                this.settings.$section.detach(), this.settings.$section.find("a").each(function () {
                    var b = a(this),
                        c = b.attr("href");
                    b.attr("data-url", c)
                }), this.settings.$section.appendTo(this.settings.$topbar), this.sticky()
            },
            height: function (b) {
                var c = 0,
                    d = this;
                return b.find("> li").each(function () {
                    c += d.outerHeight(a(this), !0)
                }), c
            },
            sticky: function () {
                var c = "." + this.settings.stickyClass;
                if (a(c).length > 0) {
                    var d, e = a(c).length ? a(c).offset().top : 0,
                        f = a(b),
                        g = this.outerHeight(a(".top-bar"));
                    a(b).resize(function () {
                        clearTimeout(d), d = setTimeout(function () {
                            e = a(c).offset().top
                        }, 105)
                    }), f.scroll(function () {
                        f.scrollTop() > e ? (a(c).addClass("fixed"), a("body").css("padding-top", g)) : f.scrollTop() <= e && (a(c).removeClass("fixed"), a("body").css("padding-top", "0"))
                    })
                }
            },
            off: function () {
                a(this.scope).off(".fndtn.topbar"), a(b).off(".fndtn.topbar")
            },
            reflow: function () {}
        }
    }(Arc.zj, this, this.document),
    function (a, b, c, d) {
        "use strict";

        function e() {
            return a.map(a(k), function (b) {
                var c = a(b);
                return {
                    textWidth: 0,
                    textHeight: 0,
                    closestStickerWidth: 0,
                    node: b,
                    sticker: c.closest(".discount-sticker"),
                    parent: b.parentNode,
                    lines: c.children(".discount-line")
                }
            })
        }

        function f() {
            return "undefined" == typeof j || null === j ? [] : j.map(function (a) {
                return a.textWidth = a.node.offsetWidth, a.textHeight = a.node.offsetHeight, a.closestStickerWidth = a.sticker.width(), a
            })
        }

        function g() {
            var a = f();
            return a.length <= 0 ? !1 : void a.forEach(function (a) {
                h(a.closestStickerWidth, a)
            })
        }

        function h(c, d, e) {
            var f = d.node.offsetWidth,
                g = d.node.offsetHeight,
                j = !1;
            if (e || (e = c), f > c - 50 || g > c - 20 ? j = "smaller" : c > e && (c - 25 > f || c - 15 > g) && (j = "bigger"), j !== !1) {
                var k = !1;
                a(d.lines).each(function (a, b) {
                    var c = i(b, j);
                    c === !0 && (k = !0)
                }), k && b.requestAnimationFrame(function () {
                    h(c, d, e)
                })
            }
            a(d.parent).css("width", d.parent.offsetHeight)
        }

        function i(b, c) {
            var d = a(b),
                e = parseInt(d.css("font-size"), 10),
                f = d.hasClass("big-text"),
                g = f ? 20 : 18;
            if (!isNaN(e) && ("smaller" === c && e > g || "bigger" === c)) {
                var h = "smaller" === c ? e - 1 : e + 1,
                    i = f ? h - 2 : .5 * h,
                    j = Math.max(13, Math.floor(i));
                return d.css({
                    "line-height": j + "px",
                    "font-size": h + "px"
                }), !0;
            }
            return !1
        }
        var j, k = ".discount-sticker-text:visible",
            l = 0;
        a(c).ready(function () {
            a(k).length > 0 && (j = e(), b.requestAnimationFrame(g), a(k).find(".discount-line").css("opacity", 1), a(b).resize(function () {
                0 !== l && (j = e(), b.requestAnimationFrame(g), a(k).find(".discount-line").css("opacity", 1)), l++
            }))
        })
    }(Arc.zj, this, this.document);