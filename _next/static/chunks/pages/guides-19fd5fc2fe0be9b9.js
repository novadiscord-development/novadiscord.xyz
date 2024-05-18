(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[874], {
    8155: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/guides", function() {
            return s(4576)
        }
        ])
    },
    723: function(e, t, s) {
        "use strict";
        var a = s(5893)
          , l = s(5675)
          , r = s.n(l)
          , i = s(1664)
          , n = s.n(i);
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
        a.jsx)("footer", {
            className: "bg-zinc-900 bg-opacity-50 backdrop-blur-lg text-white py-6 mt-8",
            children: (0,
            a.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0,
                a.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 items-center gap-6",
                    children: [(0,
                    a.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        a.jsx)(n(), {
                            href: "/",
                            children: (0,
                            a.jsx)(r(), {
                                src: "/logo.png",
                                width: 56,
                                height: 56,
                                alt: "Logo"
                            })
                        })
                    }), o.map((e,t)=>{
                        let {title: s, links: l} = e;
                        return (0,
                        a.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: s
                            }), (0,
                            a.jsx)("ul", {
                                children: l.map(e=>{
                                    let {url: t, name: s} = e;
                                    return (0,
                                    a.jsx)("li", {
                                        className: "mb-1 text-center",
                                        children: (0,
                                        a.jsx)(n(), {
                                            href: t,
                                            children: (0,
                                            a.jsx)("button", {
                                                className: "text-sm",
                                                children: s
                                            })
                                        })
                                    }, "footer-link-".concat(s))
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
    8731: function(e, t, s) {
        "use strict";
        let a;
        var l = s(5893)
          , r = s(1664)
          , i = s.n(r)
          , n = s(5675)
          , o = s.n(n)
          , c = s(7294)
          , d = s(3299);
        let m = [{
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
          , h = [{
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
          , u = ()=>{
            let[e,t] = (0,
            c.useState)(!1)
              , {data: s, status: r} = (0,
            d.useSession)();
            switch (r) {
            case "loading":
                a = [];
                break;
            case "unauthenticated":
                a = m;
                break;
            case "authenticated":
                a = h
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
                        l.jsx)(i(), {
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
                            l.jsx)(i(), {
                                href: "/",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Home"
                            }), (0,
                            l.jsx)(i(), {
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
                            l.jsx)(i(), {
                                href: "/status",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Status"
                            }), (0,
                            l.jsx)(i(), {
                                href: "/premium?r=nav",
                                className: "my-auto font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                children: "Premium"
                            })]
                        })]
                    }), (0,
                    l.jsx)("nav", {
                        className: "hidden md:flex gap-x-2",
                        children: a.map(e=>{
                            let {name: t, url: s, jsx: a, icon: r} = e;
                            return s ? (0,
                            l.jsx)(i(), {
                                href: s,
                                children: (0,
                                l.jsxs)("button", {
                                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex items-center",
                                    children: [t, r && (0,
                                    l.jsx)(o(), {
                                        className: "w-full h-full pl-2",
                                        src: r,
                                        width: 10,
                                        height: 10,
                                        alt: "Logo"
                                    })]
                                })
                            }, t) : a
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
                                l.jsx)(i(), {
                                    href: "/",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Home"
                                }), (0,
                                l.jsx)(i(), {
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
                                l.jsx)(i(), {
                                    href: "/status",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Status"
                                }), (0,
                                l.jsx)(i(), {
                                    href: "/premium?r=nav",
                                    className: "my-auto mb-3 font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                    children: "Premium"
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "flex flex-row justify-center gap-1 w-full",
                                children: a.map(e=>{
                                    let {name: t, url: s, jsx: a, icon: r, alt: n} = e;
                                    return s ? (0,
                                    l.jsx)(i(), {
                                        href: s,
                                        children: (0,
                                        l.jsxs)("button", {
                                            className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl flex items-center",
                                            children: [t, r && (0,
                                            l.jsx)(o(), {
                                                className: "w-full h-full pl-2",
                                                src: r,
                                                width: 10,
                                                height: 10,
                                                alt: n
                                            })]
                                        })
                                    }, t) : a
                                }
                                )
                            })]
                        })
                    })]
                })
            })
        }
        ;
        t.Z = u
    },
    4576: function(e, t, s) {
        "use strict";
        s.r(t);
        var a = s(5893);
        s(723);
        var l = s(8731)
          , r = s(9008)
          , i = s.n(r);
        let n = ()=>(0,
        a.jsxs)("div", {
            className: "h-screen",
            children: [(0,
            a.jsxs)(i(), {
                children: [(0,
                a.jsx)("title", {
                    children: "Video Guides | OneBump"
                }), (0,
                a.jsx)("style", {
                    children: "\nbody, html {\n    background-color: #18181b !important;\n    background-attachment: fixed !important;\n    background-image: radial-gradient(\n      at 1% 1%, \n      hsl(225.74deg 77% 40%) 0, \n      transparent 59%\n    ),\n    radial-gradient(\n      at 82% 65%, \n      hsl(217.94, 75%, 18%) 0, \n      transparent 55%\n    ) !important;\n  }\n"
                })]
            }), (0,
            a.jsxs)("div", {
                className: "mx-auto max-w-5xl",
                children: [(0,
                a.jsx)(l.Z, {}), (0,
                a.jsx)("div", {
                    className: "flex justify-center gap-5 pt-1",
                    children: (0,
                    a.jsx)("div", {
                        className: "flex flex-col",
                        children: (0,
                        a.jsxs)("h1", {
                            className: "font-black text-4xl mt-10 md:text-5xl md:max-w-xl text-white",
                            children: ["Video ", (0,
                            a.jsx)("span", {
                                className: "text-highlight-txt",
                                children: "Guides"
                            })]
                        })
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "p-6 w-full flex mt-5 flex-col md:flex-row gap-10 justify-start",
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-full text-white rounded-lg overflow-hidden font-semibold",
                        children: (0,
                        a.jsx)("iframe", {
                            className: "w-full aspect-video",
                            src: "https://www.youtube.com/embed/nwFfa7OJCiw?si=gNBT-6k_TVYkd0cF",
                            title: "YouTube video player",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            referrerpolicy: "strict-origin-when-cross-origin",
                            allowfullscreen: !0
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "w-full text-white rounded-lg overflow-hidden font-semibold",
                        children: (0,
                        a.jsx)("iframe", {
                            className: "w-full aspect-video",
                            src: "https://www.youtube.com/embed/Gw6w8CSyv6U?si=llW3qX1ky2xT5vbt",
                            title: "YouTube video player",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            referrerpolicy: "strict-origin-when-cross-origin",
                            allowfullscreen: !0
                        })
                    })]
                })]
            })]
        });
        t.default = n
    }
}, function(e) {
    e.O(0, [664, 675, 774, 888, 179], function() {
        return e(e.s = 8155)
    }),
    _N_E = e.O()
}
]);
