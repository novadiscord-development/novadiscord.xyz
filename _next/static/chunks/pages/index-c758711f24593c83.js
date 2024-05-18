(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return i(891)
        }
        ])
    },
    723: function(e, t, i) {
        "use strict";
        var s = i(5893)
          , l = i(5675)
          , a = i.n(l)
          , n = i(1664)
          , r = i.n(n);
        let o = [{
            title: "OneBump",
            links: [{
                name: "Dashboard",
                url: "/manage"
            }, {
                name: "OneBump Bot",
                url: "https://discord.com/api/oauth2/authorize?client_id=1028956609382199346&permissions=8&scope=applications.commands%20bot"
            }, {
                name: "Support Server",
                url: "https://discord.gg/bumps"
            }, {
                name: "Purchase Premium",
                url: "/premium"
            }]
        }, {
            title: "Legal",
            links: [{
                name: "Cookie Policy",
                url: "/cookie"
            }, {
                name: "Refund Policy",
                url: "/refund"
            }, {
                name: "Privacy Policy",
                url: "/privacy"
            }, {
                name: "Terms Of Service",
                url: "/terms"
            }]
        }]
          , c = ()=>(0,
        s.jsx)("footer", {
            className: "bg-zinc-900 bg-opacity-50 backdrop-blur-lg text-white py-6 mt-8",
            children: (0,
            s.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0,
                s.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 items-center gap-6",
                    children: [(0,
                    s.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        s.jsx)(r(), {
                            href: "/",
                            children: (0,
                            s.jsx)(a(), {
                                src: "/logo.png",
                                width: 56,
                                height: 56,
                                alt: "Logo"
                            })
                        })
                    }), o.map((e,t)=>{
                        let {title: i, links: l} = e;
                        return (0,
                        s.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: i
                            }), (0,
                            s.jsx)("ul", {
                                children: l.map(e=>{
                                    let {url: t, name: i} = e;
                                    return (0,
                                    s.jsx)("li", {
                                        className: "mb-1 text-center",
                                        children: (0,
                                        s.jsx)(r(), {
                                            href: t,
                                            children: (0,
                                            s.jsx)("button", {
                                                className: "text-sm",
                                                children: i
                                            })
                                        })
                                    }, "footer-link-".concat(i))
                                }
                                )
                            })]
                        }, "footer-".concat(t))
                    }
                    )]
                })
            })
        });
        t.Z = c
    },
    8731: function(e, t, i) {
        "use strict";
        let s;
        var l = i(5893)
          , a = i(1664)
          , n = i.n(a)
          , r = i(5675)
          , o = i.n(r)
          , c = i(7294)
          , d = i(3299);
        let h = [{
            name: "Login",
            jsx: (0,
            l.jsx)("a", {
                children: (0,
                l.jsxs)("button", {
                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex gap-2 items-center",
                    onClick: ()=>(0,
                    d.signIn)("discord", {
                        callbackUrl: "/manage"
                    }),
                    children: ["Login", (0,
                    l.jsx)("svg", {
                        class: "h-4 w-4 text-white",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0,
                        l.jsx)("path", {
                            d: "M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                        })
                    })]
                })
            }, "login-button")
        }]
          , p = [{
            name: "Dashboard",
            url: "/manage"
        }, {
            name: "Logout",
            jsx: (0,
            l.jsx)("a", {
                children: (0,
                l.jsxs)("button", {
                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex gap-2 items-center",
                    onClick: ()=>(0,
                    d.signOut)({
                        callbackUrl: "/"
                    }),
                    children: ["Logout", (0,
                    l.jsx)("svg", {
                        class: "h-4 w-4 text-white",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0,
                        l.jsx)("path", {
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                        })
                    })]
                }, "logout-button")
            }, "login-button")
        }]
          , m = ()=>{
            let[e,t] = (0,
            c.useState)(!1)
              , {data: i, status: a} = (0,
            d.useSession)();
            switch (a) {
            case "loading":
                s = [];
                break;
            case "unauthenticated":
                s = h;
                break;
            case "authenticated":
                s = p
            }
            return (0,
            l.jsx)("header", {
                className: "sticky top-0 z-40 text-white py-2 md:py-4 md:rounded-full mt-3 bg-zinc-800 card-glass drop-shadow-xl mx-6 lg:mx-0",
                children: (0,
                l.jsxs)("div", {
                    className: "px-4 flex items-center justify-between",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-row lg:gap-10 md:gap-5",
                        children: [(0,
                        l.jsx)(n(), {
                            href: "/",
                            className: "w-8 h-8 md:w-14 md:h-14",
                            children: (0,
                            l.jsx)(o(), {
                                className: "w-full h-full",
                                src: "/logo.png",
                                width: 56,
                                height: 56,
                                alt: "Logo"
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "hidden md:flex lg:gap-10 md:gap-5",
                            children: [(0,
                            l.jsx)(n(), {
                                href: "/",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Home"
                            }), (0,
                            l.jsx)(n(), {
                                href: "/guides",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Guides"
                            }), (0,
                            l.jsx)("a", {
                                href: "https://discord.gg/bumps",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Support"
                            }), (0,
                            l.jsx)(n(), {
                                href: "/status",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Status"
                            }), (0,
                            l.jsx)(n(), {
                                href: "/premium?r=nav",
                                className: "my-auto font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                children: "Premium"
                            })]
                        })]
                    }), (0,
                    l.jsx)("nav", {
                        className: "hidden md:flex gap-x-2",
                        children: s.map(e=>{
                            let {name: t, url: i, jsx: s, icon: a} = e;
                            return i ? (0,
                            l.jsx)(n(), {
                                href: i,
                                children: (0,
                                l.jsxs)("button", {
                                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex items-center",
                                    children: [t, a && (0,
                                    l.jsx)(o(), {
                                        className: "w-full h-full pl-2",
                                        src: a,
                                        width: 10,
                                        height: 10,
                                        alt: "Logo"
                                    })]
                                })
                            }, t) : s
                        }
                        )
                    }), (0,
                    l.jsx)("button", {
                        className: "flex items-center space-x-2 focus:outline-none md:hidden",
                        onClick: ()=>t(!e),
                        children: (0,
                        l.jsxs)("div", {
                            className: "w-6 flex items-center justify-center relative",
                            children: [(0,
                            l.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "translate-y-0 rotate-45" : "-translate-y-2")
                            }), (0,
                            l.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "opacity-0 translate-x-3" : "opacity-100")
                            }), (0,
                            l.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "translate-y-0 -rotate-45" : "translate-y-2")
                            })]
                        })
                    }), (0,
                    l.jsx)("nav", {
                        className: "mt-2 card-glass w-full p-4 absolute top-12 left-0 ".concat(e ? "flex md:hidden" : "hidden"),
                        children: (0,
                        l.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "flex flex-col w-full items-center ",
                                children: [(0,
                                l.jsx)(n(), {
                                    href: "/",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Home"
                                }), (0,
                                l.jsx)(n(), {
                                    href: "/guides",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Guides"
                                }), (0,
                                l.jsx)("a", {
                                    href: "https://discord.gg/bumps",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Support"
                                }), (0,
                                l.jsx)(n(), {
                                    href: "/status",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Status"
                                }), (0,
                                l.jsx)(n(), {
                                    href: "/premium?r=nav",
                                    className: "my-auto mb-3 font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                    children: "Premium"
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "flex flex-row justify-center gap-1 w-full",
                                children: s.map(e=>{
                                    let {name: t, url: i, jsx: s, icon: a, alt: r} = e;
                                    return i ? (0,
                                    l.jsx)(n(), {
                                        href: i,
                                        children: (0,
                                        l.jsxs)("button", {
                                            className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl flex items-center",
                                            children: [t, a && (0,
                                            l.jsx)(o(), {
                                                className: "w-full h-full pl-2",
                                                src: a,
                                                width: 10,
                                                height: 10,
                                                alt: r
                                            })]
                                        })
                                    }, t) : s
                                }
                                )
                            })]
                        })
                    })]
                })
            })
        }
        ;
        t.Z = m
    },
    891: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return y
            }
        });
        var s = i(5893)
          , l = i(9008)
          , a = i.n(l)
          , n = i(8731)
          , r = i(723)
          , o = i(5675)
          , c = i.n(o)
          , d = i(7294);
        "function" == typeof SuppressedError && SuppressedError;
        let h = (e,t,i,s)=>{
            e.style.transition = `${t} ${i}ms ${s}`
        }
          , p = (e,t,i)=>Math.min(Math.max(e, t), i);
        class m {
            constructor(e, t) {
                this.glareAngle = 0,
                this.glareOpacity = 0,
                this.calculateGlareSize = e=>{
                    let {width: t, height: i} = e
                      , s = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2));
                    return {
                        width: s,
                        height: s
                    }
                }
                ,
                this.setSize = e=>{
                    let t = this.calculateGlareSize(e);
                    this.glareEl.style.width = `${t.width}px`,
                    this.glareEl.style.height = `${t.height}px`
                }
                ,
                this.update = (e,t,i,s)=>{
                    this.updateAngle(e, t.glareReverse),
                    this.updateOpacity(e, t, i, s)
                }
                ,
                this.updateAngle = (e,t)=>{
                    let {xPercentage: i, yPercentage: s} = e;
                    this.glareAngle = (i ? Math.atan2(s, -i) * (180 / Math.PI) : 0) - (t ? 180 : 0)
                }
                ,
                this.updateOpacity = (e,t,i,s)=>{
                    let {xPercentage: l, yPercentage: a} = e
                      , {glarePosition: n, glareReverse: r, glareMaxOpacity: o} = t
                      , c = i ? -1 : 1
                      , d = s ? -1 : 1
                      , h = r ? -1 : 1
                      , m = 0;
                    switch (n) {
                    case "top":
                        m = -l * c * h;
                        break;
                    case "right":
                        m = a * d * h;
                        break;
                    case "bottom":
                    case void 0:
                        m = l * c * h;
                        break;
                    case "left":
                        m = -a * d * h;
                        break;
                    case "all":
                        m = Math.hypot(l, a)
                    }
                    let g = p(m, 0, 100);
                    this.glareOpacity = g * o / 100
                }
                ,
                this.render = e=>{
                    let {glareColor: t} = e;
                    this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`,
                    this.glareEl.style.opacity = this.glareOpacity.toString(),
                    this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`
                }
                ,
                this.glareWrapperEl = document.createElement("div"),
                this.glareEl = document.createElement("div"),
                this.glareWrapperEl.appendChild(this.glareEl),
                this.glareWrapperEl.className = "glare-wrapper",
                this.glareEl.className = "glare";
                let i = this.calculateGlareSize(e)
                  , s = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 0%",
                    pointerEvents: "none",
                    width: `${i.width}px`,
                    height: `${i.height}px`
                };
                Object.assign(this.glareWrapperEl.style, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: t,
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    pointerEvents: "none"
                }),
                Object.assign(this.glareEl.style, s)
            }
        }
        class g {
            constructor() {
                this.glareAngle = 0,
                this.glareOpacity = 0,
                this.tiltAngleX = 0,
                this.tiltAngleY = 0,
                this.tiltAngleXPercentage = 0,
                this.tiltAngleYPercentage = 0,
                this.update = (e,t)=>{
                    this.updateTilt(e, t),
                    this.updateTiltManualInput(e, t),
                    this.updateTiltReverse(t),
                    this.updateTiltLimits(t)
                }
                ,
                this.updateTilt = (e,t)=>{
                    let {xPercentage: i, yPercentage: s} = e
                      , {tiltMaxAngleX: l, tiltMaxAngleY: a} = t;
                    this.tiltAngleX = i * l / 100,
                    this.tiltAngleY = -(s * a / 100 * 1)
                }
                ,
                this.updateTiltManualInput = (e,t)=>{
                    let {tiltAngleXManual: i, tiltAngleYManual: s, tiltMaxAngleX: l, tiltMaxAngleY: a} = t;
                    (null !== i || null !== s) && (this.tiltAngleX = null !== i ? i : 0,
                    this.tiltAngleY = null !== s ? s : 0,
                    e.xPercentage = 100 * this.tiltAngleX / l,
                    e.yPercentage = 100 * this.tiltAngleY / a)
                }
                ,
                this.updateTiltReverse = e=>{
                    let t = e.tiltReverse ? -1 : 1;
                    this.tiltAngleX = t * this.tiltAngleX,
                    this.tiltAngleY = t * this.tiltAngleY
                }
                ,
                this.updateTiltLimits = e=>{
                    let {tiltAxis: t} = e;
                    this.tiltAngleX = p(this.tiltAngleX, -90, 90),
                    this.tiltAngleY = p(this.tiltAngleY, -90, 90),
                    t && (this.tiltAngleX = "x" === t ? this.tiltAngleX : 0,
                    this.tiltAngleY = "y" === t ? this.tiltAngleY : 0)
                }
                ,
                this.updateTiltAnglesPercentage = e=>{
                    let {tiltMaxAngleX: t, tiltMaxAngleY: i} = e;
                    this.tiltAngleXPercentage = this.tiltAngleX / t * 100,
                    this.tiltAngleYPercentage = this.tiltAngleY / i * 100
                }
                ,
                this.render = e=>{
                    e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `
                }
            }
        }
        let u = Object.assign(Object.assign({
            scale: 1,
            perspective: 1e3,
            flipVertically: !1,
            flipHorizontally: !1,
            reset: !0,
            transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
            transitionSpeed: 400,
            trackOnWindow: !1,
            gyroscope: !1
        }, {
            tiltEnable: !0,
            tiltReverse: !1,
            tiltAngleXInitial: 0,
            tiltAngleYInitial: 0,
            tiltMaxAngleX: 20,
            tiltMaxAngleY: 20,
            tiltAxis: void 0,
            tiltAngleXManual: null,
            tiltAngleYManual: null
        }), {
            glareEnable: !1,
            glareMaxOpacity: .7,
            glareColor: "#ffffff",
            glarePosition: "bottom",
            glareReverse: !1,
            glareBorderRadius: "0"
        });
        class x extends d.PureComponent {
            constructor() {
                super(...arguments),
                this.wrapperEl = {
                    node: null,
                    size: {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    },
                    clientPosition: {
                        x: null,
                        y: null,
                        xPercentage: 0,
                        yPercentage: 0
                    },
                    updateAnimationId: null,
                    scale: 1
                },
                this.tilt = null,
                this.glare = null,
                this.addDeviceOrientationEventListener = ()=>{
                    var e, t, i, s;
                    return e = this,
                    t = void 0,
                    i = void 0,
                    s = function*() {
                        if (!window.DeviceOrientationEvent)
                            return;
                        let e = DeviceOrientationEvent.requestPermission;
                        "function" == typeof e ? "granted" === (yield e()) && window.addEventListener("deviceorientation", this.onMove) : window.addEventListener("deviceorientation", this.onMove)
                    }
                    ,
                    new (i || (i = Promise))(function(l, a) {
                        function n(e) {
                            try {
                                o(s.next(e))
                            } catch (t) {
                                a(t)
                            }
                        }
                        function r(e) {
                            try {
                                o(s.throw(e))
                            } catch (t) {
                                a(t)
                            }
                        }
                        function o(e) {
                            var t;
                            e.done ? l(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                                e(t)
                            }
                            )).then(n, r)
                        }
                        o((s = s.apply(e, t || [])).next())
                    }
                    )
                }
                ,
                this.setSize = ()=>{
                    this.setWrapperElSize(),
                    this.glare && this.glare.setSize(this.wrapperEl.size)
                }
                ,
                this.mainLoop = e=>{
                    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                    this.processInput(e),
                    this.update(e.type),
                    this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame)
                }
                ,
                this.onEnter = e=>{
                    let {onEnter: t} = this.props;
                    this.setSize(),
                    this.wrapperEl.node.style.willChange = "transform",
                    this.setTransitions(),
                    t && t(e.type)
                }
                ,
                this.onMove = e=>{
                    this.mainLoop(e),
                    this.emitOnMove(e)
                }
                ,
                this.onLeave = e=>{
                    let {onLeave: t} = this.props;
                    if (this.setTransitions(),
                    t && t(e.type),
                    this.props.reset) {
                        let i = new CustomEvent("autoreset");
                        this.onMove(i)
                    }
                }
                ,
                this.processInput = e=>{
                    let {scale: t} = this.props;
                    switch (e.type) {
                    case "mousemove":
                        this.wrapperEl.clientPosition.x = e.pageX,
                        this.wrapperEl.clientPosition.y = e.pageY,
                        this.wrapperEl.scale = t;
                        break;
                    case "touchmove":
                        this.wrapperEl.clientPosition.x = e.touches[0].pageX,
                        this.wrapperEl.clientPosition.y = e.touches[0].pageY,
                        this.wrapperEl.scale = t;
                        break;
                    case "deviceorientation":
                        this.processInputDeviceOrientation(e),
                        this.wrapperEl.scale = t;
                        break;
                    case "autoreset":
                        let {tiltAngleXInitial: i, tiltAngleYInitial: s, tiltMaxAngleX: l, tiltMaxAngleY: a} = this.props;
                        this.wrapperEl.clientPosition.xPercentage = p(i / l * 100, -100, 100),
                        this.wrapperEl.clientPosition.yPercentage = p(s / a * 100, -100, 100),
                        this.wrapperEl.scale = 1
                    }
                }
                ,
                this.processInputDeviceOrientation = e=>{
                    if (!e.gamma || !e.beta || !this.props.gyroscope)
                        return;
                    let {tiltMaxAngleX: t, tiltMaxAngleY: i} = this.props
                      , s = e.gamma;
                    this.wrapperEl.clientPosition.xPercentage = e.beta / t * 100,
                    this.wrapperEl.clientPosition.yPercentage = s / i * 100,
                    this.wrapperEl.clientPosition.xPercentage = p(this.wrapperEl.clientPosition.xPercentage, -100, 100),
                    this.wrapperEl.clientPosition.yPercentage = p(this.wrapperEl.clientPosition.yPercentage, -100, 100)
                }
                ,
                this.update = e=>{
                    let {tiltEnable: t, flipVertically: i, flipHorizontally: s} = this.props;
                    "autoreset" !== e && "deviceorientation" !== e && "propChange" !== e && this.updateClientInput(),
                    t && this.tilt.update(this.wrapperEl.clientPosition, this.props),
                    this.updateFlip(),
                    this.tilt.updateTiltAnglesPercentage(this.props),
                    this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i, s)
                }
                ,
                this.updateClientInput = ()=>{
                    let e, t;
                    let {trackOnWindow: i} = this.props;
                    if (i) {
                        let {x: s, y: l} = this.wrapperEl.clientPosition;
                        e = l / window.innerHeight * 200 - 100,
                        t = s / window.innerWidth * 200 - 100
                    } else {
                        let {size: {width: a, height: n, left: r, top: o}, clientPosition: {x: c, y: d}} = this.wrapperEl;
                        e = (d - o) / n * 200 - 100,
                        t = (c - r) / a * 200 - 100
                    }
                    this.wrapperEl.clientPosition.xPercentage = p(e, -100, 100),
                    this.wrapperEl.clientPosition.yPercentage = p(t, -100, 100)
                }
                ,
                this.updateFlip = ()=>{
                    let {flipVertically: e, flipHorizontally: t} = this.props;
                    e && (this.tilt.tiltAngleX += 180,
                    this.tilt.tiltAngleY *= -1),
                    t && (this.tilt.tiltAngleY += 180)
                }
                ,
                this.renderFrame = ()=>{
                    this.resetWrapperElTransform(),
                    this.renderPerspective(),
                    this.tilt.render(this.wrapperEl.node),
                    this.renderScale(),
                    this.glare && this.glare.render(this.props)
                }
            }
            componentDidMount() {
                if (this.tilt = new g,
                this.initGlare(),
                this.addEventListeners(),
                "undefined" == typeof CustomEvent)
                    return;
                let e = new CustomEvent("autoreset");
                this.mainLoop(e);
                let t = new CustomEvent("initial");
                this.emitOnMove(t)
            }
            componentWillUnmount() {
                null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                this.removeEventListeners()
            }
            componentDidUpdate() {
                let e = new CustomEvent("propChange");
                this.mainLoop(e),
                this.emitOnMove(e)
            }
            addEventListeners() {
                let {trackOnWindow: e, gyroscope: t} = this.props;
                window.addEventListener("resize", this.setSize),
                e && (window.addEventListener("mouseenter", this.onEnter),
                window.addEventListener("mousemove", this.onMove),
                window.addEventListener("mouseout", this.onLeave),
                window.addEventListener("touchstart", this.onEnter),
                window.addEventListener("touchmove", this.onMove),
                window.addEventListener("touchend", this.onLeave)),
                t && this.addDeviceOrientationEventListener()
            }
            removeEventListeners() {
                let {trackOnWindow: e, gyroscope: t} = this.props;
                window.removeEventListener("resize", this.setSize),
                e && (window.removeEventListener("mouseenter", this.onEnter),
                window.removeEventListener("mousemove", this.onMove),
                window.removeEventListener("mouseout", this.onLeave),
                window.removeEventListener("touchstart", this.onEnter),
                window.removeEventListener("touchmove", this.onMove),
                window.removeEventListener("touchend", this.onLeave)),
                t && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove)
            }
            setWrapperElSize() {
                let e = this.wrapperEl.node.getBoundingClientRect();
                this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth,
                this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight,
                this.wrapperEl.size.left = e.left + window.scrollX,
                this.wrapperEl.size.top = e.top + window.scrollY
            }
            initGlare() {
                let {glareEnable: e, glareBorderRadius: t} = this.props;
                e && (this.glare = new m(this.wrapperEl.size,t),
                this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))
            }
            emitOnMove(e) {
                let {onMove: t} = this.props;
                if (!t)
                    return;
                let i = 0
                  , s = 0;
                this.glare && (i = this.glare.glareAngle,
                s = this.glare.glareOpacity),
                t({
                    tiltAngleX: this.tilt.tiltAngleX,
                    tiltAngleY: this.tilt.tiltAngleY,
                    tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
                    tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
                    glareAngle: i,
                    glareOpacity: s,
                    eventType: e.type
                })
            }
            resetWrapperElTransform() {
                this.wrapperEl.node.style.transform = ""
            }
            renderPerspective() {
                let {perspective: e} = this.props;
                this.wrapperEl.node.style.transform += `perspective(${e}px) `
            }
            renderScale() {
                let {scale: e} = this.wrapperEl;
                this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`
            }
            setTransitions() {
                let {transitionSpeed: e, transitionEasing: t} = this.props;
                h(this.wrapperEl.node, "all", e, t),
                this.glare && h(this.glare.glareEl, "opacity", e, t)
            }
            render() {
                let {children: e, className: t, style: i} = this.props;
                return d.createElement("div", {
                    ref: e=>this.wrapperEl.node = e,
                    onMouseEnter: this.onEnter,
                    onMouseMove: this.onMove,
                    onMouseLeave: this.onLeave,
                    onTouchStart: this.onEnter,
                    onTouchMove: this.onMove,
                    onTouchEnd: this.onLeave,
                    className: t,
                    style: i
                }, e)
            }
        }
        x.defaultProps = u;
        let w = e=>{
            let {children: t, imageProps: i, tilt: l, full: a, ml: n, className: r=""} = e;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-col md:flex-row text-white text-center md:text-left mx-auto w-full items-center ".concat(r),
                children: [t, l ? (0,
                s.jsx)("div", {
                    className: "hover:scale-110 transition-all ".concat(n && "md:ml-auto"),
                    children: (0,
                    s.jsx)(x, {
                        tiltReverse: !0,
                        glareEnable: a,
                        glareMaxOpacity: .3,
                        glareColor: "#000000",
                        glareBorderRadius: "7px",
                        glarePosition: "all",
                        children: (0,
                        s.jsx)(c(), {
                            priority: !0,
                            ...i
                        })
                    })
                }) : (0,
                s.jsx)(c(), {
                    priority: !0,
                    ...i
                })]
            })
        }
          , f = ()=>(0,
        s.jsx)("a", {
            href: "https://discord.com/api/oauth2/authorize?client_id=1028956609382199346&permissions=8&scope=bot%20applications.commands",
            target: "_blank",
            rel: "noreferrer",
            className: "font-semibold text-sm md:text-xl",
            children: (0,
            s.jsxs)("button", {
                className: "rounded-full animate-gradient__activeXs animate-gradient__rotate py-3.5 px-10 bg-cta-button animate-shake hover:drop-shadow-xl hover:bg-opacity-25 transition-all bg-opacity-10 overflow-hidden",
                children: ["Invite to Server", (0,
                s.jsx)("i", {})]
            })
        });
        var v = i(5121);
        let b = ()=>{
            let[e,t] = (0,
            d.useState)([])
              , i = (0,
            d.useRef)(!1)
              , l = async()=>{
                let e = await (0,
                v.Z)({
                    url: "https://bump.ltd/api/guilds/top",
                    method: "GET"
                }).catch(e=>{
                    console.error(e)
                }
                );
                e && t(e.data)
            }
            ;
            return (0,
            d.useEffect)(()=>{
                let e = document.querySelectorAll(".scroller");
                window.matchMedia("(prefers-reduced-motion: reduce)").matches || function(e) {
                    e.forEach(e=>{
                        e.setAttribute("data-animated", !0)
                    }
                    )
                }(e),
                i.current || (i.current = !0,
                l())
            }
            , []),
            (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)(a(), {
                    children: (0,
                    s.jsx)("style", {
                        children: "\nbody, html {\n    background-color: #18181b !important;\n    background-attachment: fixed !important;\n    background-image: radial-gradient(\n      at 1% 1%, \n      hsl(225.74deg 77% 40%) 0, \n      transparent 59%\n    ),\n    radial-gradient(\n      at 82% 65%, \n      hsl(217.94, 75%, 18%) 0, \n      transparent 55%\n    ) !important;\n  }\n"
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "mx-auto max-w-5xl",
                    children: [(0,
                    s.jsx)(n.Z, {}), (0,
                    s.jsxs)("div", {
                        className: "px-4 flex flex-col my-20 gap-y-40",
                        children: [(0,
                        s.jsx)(w, {
                            imageProps: {
                                src: "/logo.png",
                                width: 283,
                                height: 283,
                                className: 'order-1 md:order-2 md:ml-auto drop-shadow-xl"',
                                alt: "OneBump Logo Hero"
                            },
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-col gap-y-8 mt-8 md:mt-0 order-2 md:order-1",
                                children: [(0,
                                s.jsx)("h1", {
                                    className: "font-black text-3xl md:text-7xl md:max-w-xl",
                                    children: "OneBump"
                                }), (0,
                                s.jsxs)("h2", {
                                    className: "font-semibold text-lg md:text-2xl",
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: "text-highlight-txt",
                                        children: "#1"
                                    }), " Discord Bump Bot Worldwide", (0,
                                    s.jsx)("p", {
                                        className: "font-semibold text-sm md:mr-60 md:text-base leading-8",
                                        children: "Our bump bot is designed to help you attract members, increase activity, and improve engagement on your Discord server. With one command you can easily promote your discord server to a thousands and enjoy faster discord server growth."
                                    })]
                                }), (0,
                                s.jsx)(f, {})]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "scroller mx-auto outline outline-white p-4 w-full overflow-hidden my-0",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "scroll",
                                style: {
                                    "--time": "".concat(10 * e.length, "s")
                                },
                                children: [(0,
                                s.jsx)("div", {
                                    children: e.slice(0, Math.floor(e.length / 2)).map(e=>{
                                        let {id: t, icon: i, name: l, memberCount: a, data: n} = e;
                                        return (0,
                                        s.jsxs)("span", {
                                            onClick: ()=>window.open((null == n ? void 0 : n.guildInvite) !== "" ? null == n ? void 0 : n.guildInvite : "https://discord.gg/bumps", "_blank"),
                                            style: {
                                                cursor: "pointer"
                                            },
                                            className: "flex flex-row items-center",
                                            children: [i ? (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: i,
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }) : (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: "/discord.png",
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }), (0,
                                            s.jsxs)("span", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                s.jsx)("a", {
                                                    className: "text-lg font-semibold",
                                                    children: l
                                                }), (0,
                                                s.jsxs)("a", {
                                                    className: "text-sm text-slate-400",
                                                    children: [" ", null == a ? void 0 : a.toLocaleString(), " Members"]
                                                })]
                                            })]
                                        }, t)
                                    }
                                    )
                                }), (0,
                                s.jsx)("div", {
                                    children: e.slice(0, Math.floor(e.length / 2)).map(e=>{
                                        let {id: t, icon: i, name: l, memberCount: a, data: n} = e;
                                        return (0,
                                        s.jsxs)("span", {
                                            onClick: ()=>window.open((null == n ? void 0 : n.guildInvite) !== "" ? null == n ? void 0 : n.guildInvite : "https://discord.gg/bumps", "_blank"),
                                            style: {
                                                cursor: "pointer"
                                            },
                                            className: "flex flex-row items-center",
                                            children: [i ? (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: i,
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }) : (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: "/discord.png",
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }), (0,
                                            s.jsxs)("span", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                s.jsx)("a", {
                                                    className: "text-lg font-semibold",
                                                    children: l
                                                }), (0,
                                                s.jsxs)("a", {
                                                    className: "text-sm text-slate-400",
                                                    children: [" ", null == a ? void 0 : a.toLocaleString(), " Members"]
                                                })]
                                            })]
                                        }, t)
                                    }
                                    )
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "scroll-reverse",
                                style: {
                                    "--time": "".concat(10 * e.length, "s")
                                },
                                children: [(0,
                                s.jsx)("div", {
                                    children: e.slice(Math.floor(e.length / 2), e.length).map(e=>{
                                        let {id: t, icon: i, name: l, memberCount: a, invite: n} = e;
                                        return (0,
                                        s.jsxs)("span", {
                                            onClick: ()=>window.open(n, "_blank"),
                                            style: {
                                                cursor: "pointer"
                                            },
                                            className: "flex flex-row items-center",
                                            children: [i ? (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: i,
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }) : (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: "/discord.png",
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }), (0,
                                            s.jsxs)("span", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                s.jsx)("a", {
                                                    className: "text-lg font-semibold",
                                                    children: l
                                                }), (0,
                                                s.jsxs)("a", {
                                                    className: "text-sm text-slate-400",
                                                    children: [" ", null == a ? void 0 : a.toLocaleString(), " Members"]
                                                })]
                                            })]
                                        }, t)
                                    }
                                    )
                                }), (0,
                                s.jsx)("div", {
                                    children: e.slice(Math.floor(e.length / 2), e.length).map(e=>{
                                        let {id: t, icon: i, name: l, memberCount: a, invite: n} = e;
                                        return (0,
                                        s.jsxs)("span", {
                                            onClick: ()=>window.open(n, "_blank"),
                                            style: {
                                                cursor: "pointer"
                                            },
                                            className: "flex flex-row items-center",
                                            children: [i ? (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: i,
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }) : (0,
                                            s.jsx)("img", {
                                                className: "rounded-full w-12",
                                                src: "/discord.png",
                                                width: 10,
                                                height: 10,
                                                alt: "".concat(l, " Server Logo")
                                            }), (0,
                                            s.jsxs)("span", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                s.jsx)("a", {
                                                    className: "text-lg font-semibold",
                                                    children: l
                                                }), (0,
                                                s.jsxs)("a", {
                                                    className: "text-sm text-slate-400",
                                                    children: [" ", null == a ? void 0 : a.toLocaleString(), " Members"]
                                                })]
                                            })]
                                        }, t)
                                    }
                                    )
                                })]
                            })]
                        }), (0,
                        s.jsx)(w, {
                            tilt: !0,
                            full: !0,
                            imageProps: {
                                src: "/embed2.png",
                                height: 300,
                                width: 300,
                                className: "md:order-1 drop-shadow-xl  transition-all",
                                alt: "OneBump Embed Example"
                            },
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-col gap-y-8 mb-8 md:order-2 md:ml-auto",
                                children: [(0,
                                s.jsxs)("h2", {
                                    className: "font-black text-2xl md:text-4xl",
                                    children: ["Fully ", (0,
                                    s.jsx)("span", {
                                        className: "text-highlight-txt",
                                        children: "Customisable"
                                    })]
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-sm md:text-xl font-semibold leading-8 md:max-w-md",
                                    children: "Your bump display message will be beautifully designed and fully customisable. With the opportunity to customise bump images, colours, text, and much more!"
                                })]
                            })
                        }), (0,
                        s.jsx)(w, {
                            tilt: !0,
                            ml: !0,
                            imageProps: {
                                src: "/stats2.png",
                                height: 300,
                                width: 300,
                                className: "md:ml-auto drop-shadow-xl  transition-all",
                                alt: "Statistics Example"
                            },
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-col gap-y-8 mb-8",
                                children: [(0,
                                s.jsxs)("h2", {
                                    className: "font-black text-2xl md:text-4xl",
                                    children: ["Detailed ", (0,
                                    s.jsx)("span", {
                                        className: "text-highlight-txt",
                                        children: "Analytics"
                                    })]
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-sm md:text-xl font-semibold leading-8 md:max-w-md",
                                    children: "OneBump will provide you with detailed analytics regarding your servers bumping activity, joins, dashboard activity, and much more. And better yet, you'll be able to export this to a fancy PDF to help visualise this data."
                                })]
                            })
                        }), (0,
                        s.jsx)(w, {
                            tilt: !0,
                            imageProps: {
                                src: "/premium3.png",
                                height: 300,
                                width: 300,
                                className: "md:order-1 drop-shadow-xl  transition-all",
                                alt: "Premium Example"
                            },
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-col gap-y-8 mb-8 md:order-2 md:ml-auto",
                                children: [(0,
                                s.jsxs)("h2", {
                                    className: "font-black text-2xl md:text-4xl",
                                    children: ["Value Packed ", (0,
                                    s.jsx)("span", {
                                        className: "text-highlight-txt",
                                        children: "Premium"
                                    })]
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-sm md:text-xl font-semibold leading-8 md:max-w-md",
                                    children: 'Our premium packages offer the largest variety of perks, tailored to your discord server\'s needs. Purchase premium to maximise discord server growth with "auto sharing", "reduced cooldown", "aesthetic upgrades", and MUCH MORE!'
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "text-white text-center flex flex-col gap-y-6",
                            children: [(0,
                            s.jsx)("div", {
                                className: "font-bold text-2xl md:text-4xl",
                                children: "Over 10,000 Servers Use OneBump To Grow"
                            }), (0,
                            s.jsx)(f, {})]
                        })]
                    })]
                }), (0,
                s.jsx)(r.Z, {})]
            })
        }
        ;
        var y = b
    }
}, function(e) {
    e.O(0, [664, 675, 121, 774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
