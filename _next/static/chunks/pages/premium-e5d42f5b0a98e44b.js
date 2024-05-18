(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[424], {
    6131: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/premium", function() {
            return a(1388)
        }
        ])
    },
    8731: function(e, t, a) {
        "use strict";
        let l;
        var s = a(5893)
          , r = a(1664)
          , i = a.n(r)
          , n = a(5675)
          , x = a.n(n)
          , h = a(7294)
          , o = a(3299);
        let d = [{
            name: "Login",
            jsx: (0,
            s.jsx)("a", {
                children: (0,
                s.jsxs)("button", {
                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex gap-2 items-center",
                    onClick: ()=>(0,
                    o.signIn)("discord", {
                        callbackUrl: "/manage"
                    }),
                    children: ["Login", (0,
                    s.jsx)("svg", {
                        class: "h-4 w-4 text-white",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0,
                        s.jsx)("path", {
                            d: "M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                        })
                    })]
                })
            }, "login-button")
        }]
          , c = [{
            name: "Dashboard",
            url: "/manage"
        }, {
            name: "Logout",
            jsx: (0,
            s.jsx)("a", {
                children: (0,
                s.jsxs)("button", {
                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex gap-2 items-center",
                    onClick: ()=>(0,
                    o.signOut)({
                        callbackUrl: "/"
                    }),
                    children: ["Logout", (0,
                    s.jsx)("svg", {
                        class: "h-4 w-4 text-white",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0,
                        s.jsx)("path", {
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
            h.useState)(!1)
              , {data: a, status: r} = (0,
            o.useSession)();
            switch (r) {
            case "loading":
                l = [];
                break;
            case "unauthenticated":
                l = d;
                break;
            case "authenticated":
                l = c
            }
            return (0,
            s.jsx)("header", {
                className: "sticky top-0 z-40 text-white py-2 md:py-4 md:rounded-full mt-3 bg-zinc-800 card-glass drop-shadow-xl mx-6 lg:mx-0",
                children: (0,
                s.jsxs)("div", {
                    className: "px-4 flex items-center justify-between",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex flex-row lg:gap-10 md:gap-5",
                        children: [(0,
                        s.jsx)(i(), {
                            href: "/",
                            className: "w-8 h-8 md:w-14 md:h-14",
                            children: (0,
                            s.jsx)(x(), {
                                className: "w-full h-full",
                                src: "/logo.png",
                                width: 56,
                                height: 56,
                                alt: "Logo"
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "hidden md:flex lg:gap-10 md:gap-5",
                            children: [(0,
                            s.jsx)(i(), {
                                href: "/",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Home"
                            }), (0,
                            s.jsx)(i(), {
                                href: "/guides",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Guides"
                            }), (0,
                            s.jsx)("a", {
                                href: "https://discord.gg/bumps",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Support"
                            }), (0,
                            s.jsx)(i(), {
                                href: "/status",
                                className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                children: "Status"
                            }), (0,
                            s.jsx)(i(), {
                                href: "/premium?r=nav",
                                className: "my-auto font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                children: "Premium"
                            })]
                        })]
                    }), (0,
                    s.jsx)("nav", {
                        className: "hidden md:flex gap-x-2",
                        children: l.map(e=>{
                            let {name: t, url: a, jsx: l, icon: r} = e;
                            return a ? (0,
                            s.jsx)(i(), {
                                href: a,
                                children: (0,
                                s.jsxs)("button", {
                                    className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl hover:bg-opacity-50 transition-all flex items-center",
                                    children: [t, r && (0,
                                    s.jsx)(x(), {
                                        className: "w-full h-full pl-2",
                                        src: r,
                                        width: 10,
                                        height: 10,
                                        alt: "Logo"
                                    })]
                                })
                            }, t) : l
                        }
                        )
                    }), (0,
                    s.jsx)("button", {
                        className: "flex items-center space-x-2 focus:outline-none md:hidden",
                        onClick: ()=>t(!e),
                        children: (0,
                        s.jsxs)("div", {
                            className: "w-6 flex items-center justify-center relative",
                            children: [(0,
                            s.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "translate-y-0 rotate-45" : "-translate-y-2")
                            }), (0,
                            s.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "opacity-0 translate-x-3" : "opacity-100")
                            }), (0,
                            s.jsx)("span", {
                                className: "transform transition w-6 h-1 bg-white rounded-md absolute ".concat(e ? "translate-y-0 -rotate-45" : "translate-y-2")
                            })]
                        })
                    }), (0,
                    s.jsx)("nav", {
                        className: "mt-2 card-glass w-full p-4 absolute top-12 left-0 ".concat(e ? "flex md:hidden" : "hidden"),
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex flex-col w-full items-center ",
                                children: [(0,
                                s.jsx)(i(), {
                                    href: "/",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Home"
                                }), (0,
                                s.jsx)(i(), {
                                    href: "/guides",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Guides"
                                }), (0,
                                s.jsx)("a", {
                                    href: "https://discord.gg/bumps",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Support"
                                }), (0,
                                s.jsx)(i(), {
                                    href: "/status",
                                    className: "my-auto font-semibold text-base hover:text-slate-300 transition-all",
                                    children: "Status"
                                }), (0,
                                s.jsx)(i(), {
                                    href: "/premium?r=nav",
                                    className: "my-auto mb-3 font-semibold text-base gradient-text hover:text-highlight-txt transition-all",
                                    children: "Premium"
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: "flex flex-row justify-center gap-1 w-full",
                                children: l.map(e=>{
                                    let {name: t, url: a, jsx: l, icon: r, alt: n} = e;
                                    return a ? (0,
                                    s.jsx)(i(), {
                                        href: a,
                                        children: (0,
                                        s.jsxs)("button", {
                                            className: "bg-cta-button bg-opacity-25 border-2 border-cta-button py-2 px-5 rounded-full font-semibold hover:drop-shadow-xl flex items-center",
                                            children: [t, r && (0,
                                            s.jsx)(x(), {
                                                className: "w-full h-full pl-2",
                                                src: r,
                                                width: 10,
                                                height: 10,
                                                alt: n
                                            })]
                                        })
                                    }, t) : l
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
    1388: function(e, t, a) {
        "use strict";
        a.r(t);
        var l = a(5893)
          , s = a(3299)
          , r = a(8731)
          , i = a(9008)
          , n = a.n(i)
          , x = a(7294)
          , h = a(1163);
        let o = ()=>{
            var e, t, a, i, o, d;
            let {data: c, status: m} = (0,
            s.useSession)()
              , g = (0,
            h.useRouter)()
              , [u,f] = (0,
            x.useState)(!1);
            (0,
            x.useEffect)(()=>{
                g.isReady && f("true" === g.query.gift)
            }
            , [g.isReady, g.query.gift]);
            let w = ()=>{
                f(!u)
            }
              , p = e=>{
                if ("authenticated" !== m)
                    (0,
                    s.signIn)("discord", {
                        callbackUrl: "641860162cfa5" === e ? "/premium?gift=true".concat(g.query.r ? "&r=".concat(g.query.r) : "") : "/manage/buy?planId=".concat(e).concat(g.query.r ? "&r=".concat(g.query.r) : "")
                    });
                else if ("64185f6242b55" === e || "641860142a4b0" === e || "641860162cfa5" === e) {
                    let t = document.querySelector('button[data-sellix-product="'.concat(e, '"]'));
                    t ? t.click() : console.error("Button not found")
                } else
                    g.push("/manage/buy?planId=".concat(e).concat(g.query.r ? "&r=".concat(g.query.r) : ""))
            }
            ;
            return (0,
            l.jsxs)("div", {
                className: "h-screen",
                children: [(0,
                l.jsxs)(n(), {
                    children: [(0,
                    l.jsx)("title", {
                        children: "Premium | OneBump"
                    }), (0,
                    l.jsx)("style", {
                        children: "\nbody, html {\n    background-color: #18181b !important;\n    background-attachment: fixed !important;\n    background-image: radial-gradient(\n      at 1% 1%, \n      hsl(225.74deg 77% 40%) 0, \n      transparent 59%\n    ),\n    radial-gradient(\n      at 82% 65%, \n      hsl(217.94, 75%, 18%) 0, \n      transparent 55%\n    ) !important;\n  }\n"
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "mx-auto max-w-5xl",
                    children: [(0,
                    l.jsx)(r.Z, {}), (0,
                    l.jsx)("div", {
                        className: "flex justify-center gap-5 pt-1",
                        children: (0,
                        l.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0,
                            l.jsxs)("h1", {
                                className: "font-black text-4xl mt-10 md:text-5xl md:max-w-xl text-white",
                                children: ["Choose A ", (0,
                                l.jsx)("span", {
                                    className: "text-highlight-txt",
                                    children: "Plan"
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "mx-auto mt-2",
                                children: (0,
                                l.jsxs)("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [(0,
                                    l.jsx)("input", {
                                        type: "checkbox",
                                        checked: u,
                                        onChange: w,
                                        className: "sr-only peer"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "ms-3 text-sm font-medium text-gray-300 mr-2",
                                        children: "Personal Plan"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "w-11 h-6 peer-focus:outline-none rounded-full peer bg-zinc-900 bg-opacity-50 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:flex after:mt-[2px] after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-cta-button"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "ms-3 text-sm font-medium text-gray-300 ml-2",
                                        children: "Gift A Friend"
                                    })]
                                })
                            })]
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "p-6 w-full grid auto-rows-min gap-1 justify-center",
                        children: (0,
                        l.jsxs)("div", {
                            className: "parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "w-full max-w-sm prem_card p-4 border-2 border-zinc-700 rounded-lg shadow sm:p-8 card-glass bg-zinc-800 ",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    l.jsxs)("h5", {
                                        className: "mb-4 text-xl font-medium text-gray-500 ",
                                        children: ["Monthly ", u ? "Gift" : "Plan"]
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "mb-7 text-sm bg-zinc-700 bg-opacity-25 rounded-2xl py-1 px-2 font-medium text-zinc-500 ",
                                        children: "0% Off"
                                    })]
                                }), "                                ", (0,
                                l.jsxs)("div", {
                                    className: "flex items-baseline text-white",
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "text-3xl font-semibold",
                                        children: "$"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "text-5xl font-extrabold tracking-tight",
                                        children: u ? "5.99" : "3.99"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "ms-1 text-xl font-normal text-gray-500 ".concat(u && "text-transparent"),
                                        children: "/month"
                                    })]
                                }), (0,
                                l.jsxs)("ul", {
                                    role: "list",
                                    className: "space-y-2 my-7",
                                    children: [(0,
                                    l.jsxs)("li", {
                                        className: "flex items-center",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Automatic Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Premium Role"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Custom Banners"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Global Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Reduced Cooldown"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Hide Bump Channel"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Exclusive Server Badge"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Priority Support"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Free Setup Assistance"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Export Bump Data As PDF"
                                        })]
                                    })]
                                }), (0,
                                l.jsxs)("button", {
                                    type: "button",
                                    className: "text-white bg-cta-button hover:bg-cta-dark font-semibold rounded-lg animate-shake text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                                    onClick: ()=>p(u ? "64185f6242b55" : "640b6ea04e8bc"),
                                    children: ["Choose ", u ? "Gift" : "Plan"]
                                }), (0,
                                l.jsx)("button", {
                                    "data-sellix-product": "64185f6242b55",
                                    type: "submit",
                                    alt: "Purchase Modal",
                                    "data-sellix-email": null == c ? void 0 : null === (e = c.user) || void 0 === e ? void 0 : e.email,
                                    "data-sellix-custom-user_id": null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.id,
                                    "data-sellix-custom-referrer": g.query.r || "none",
                                    className: "hidden"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: " w-full max-w-sm prem_card p-4 border-2 border-zinc-700 rounded-lg shadow sm:p-8 card-glass bg-zinc-800 ",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    l.jsxs)("h5", {
                                        className: "mb-4 text-xl font-medium text-gray-500 ",
                                        children: ["Annual ", u ? "Gift" : "Plan"]
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "mb-7 text-sm bg-blue-600 bg-opacity-25 rounded-2xl py-1 px-2 font-medium text-highlight-txt ",
                                        children: "20% Off"
                                    })]
                                }), "                                ", (0,
                                l.jsxs)("div", {
                                    className: "flex items-baseline text-white",
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "text-3xl font-semibold",
                                        children: "$"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "text-5xl font-extrabold tracking-tight",
                                        children: u ? "59.99" : "39.99"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "ms-1 text-xl font-normal text-gray-500 ".concat(u && "text-transparent"),
                                        children: "/year"
                                    })]
                                }), (0,
                                l.jsxs)("ul", {
                                    role: "list",
                                    className: "space-y-2 my-7",
                                    children: [(0,
                                    l.jsxs)("li", {
                                        className: "flex items-center",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Automatic Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Premium Role"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Custom Banners"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Global Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Reduced Cooldown"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Hide Bump Channel"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Exclusive Server Badge"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Priority Support"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Free Setup Assistance"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Export Bump Data As PDF"
                                        })]
                                    })]
                                }), (0,
                                l.jsxs)("button", {
                                    type: "button",
                                    className: "text-white bg-cta-button hover:bg-cta-dark font-semibold rounded-lg animate-shake text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                                    onClick: ()=>p(u ? "641860142a4b0" : "640b87a5db55a"),
                                    children: ["Choose ", u ? "Gift" : "Plan"]
                                }), (0,
                                l.jsx)("button", {
                                    "data-sellix-product": "641860142a4b0",
                                    type: "submit",
                                    alt: "Purchase Modal",
                                    "data-sellix-email": null == c ? void 0 : null === (a = c.user) || void 0 === a ? void 0 : a.email,
                                    "data-sellix-custom-user_id": null == c ? void 0 : null === (i = c.user) || void 0 === i ? void 0 : i.id,
                                    "data-sellix-custom-referrer": g.query.r || "none",
                                    className: "hidden"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "w-full max-w-sm prem_card p-4 border-2 border-cta-button rounded-lg shadow sm:p-8 card-glass bg-zinc-800 relative overflow-hidden",
                                children: [(0,
                                l.jsx)("div", {
                                    id: "card-gradient",
                                    className: "absolute -top-2/3 filter blur-3xl opacity-25 -left-1/3 w-full h-full rounded-full"
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    l.jsxs)("h5", {
                                        className: " gradient-text mb-4 text-xl font-medium text-gray-500 z-10",
                                        children: ["Lifetime ", u ? "Gift" : "Plan"]
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "mb-7 text-sm bg-blue-600 bg-opacity-25 rounded-2xl py-1 px-2 font-medium text-highlight-txt z-10",
                                        children: "Best Value"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex items-baseline text-white",
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "text-3xl font-semibold",
                                        children: "$"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "text-5xl font-extrabold tracking-tight z-10",
                                        children: u ? "99.99" : "89.99"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "ms-1 text-xl font-normal text-gray-500 z-10 ".concat(u && "text-transparent"),
                                        children: "/lifetime"
                                    })]
                                }), (0,
                                l.jsxs)("ul", {
                                    role: "list",
                                    className: "space-y-2 my-7",
                                    children: [(0,
                                    l.jsxs)("li", {
                                        className: "flex items-center",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Automatic Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Premium Role"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Custom Banners"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Global Sharing"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Reduced Cooldown"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Hide Bump Channel"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Exclusive Server Badge"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Priority Support"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Free Setup Assistance"
                                        })]
                                    }), (0,
                                    l.jsxs)("li", {
                                        className: "flex",
                                        children: [(0,
                                        l.jsx)("svg", {
                                            className: "flex-shrink-0 w-4 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            })
                                        }), (0,
                                        l.jsx)("span", {
                                            className: "text-base font-normal leading-tight text-gray-500 ms-3 ml-1",
                                            children: "Export Bump Data As PDF"
                                        })]
                                    })]
                                }), (0,
                                l.jsxs)("button", {
                                    type: "button",
                                    className: "text-white bg-cta-button hover:bg-cta-dark font-semibold rounded-lg animate-shake text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                                    onClick: ()=>p(u ? "641860162cfa5" : "6410e76915d24"),
                                    children: ["Choose ", u ? "Gift" : "Plan"]
                                }), (0,
                                l.jsx)("button", {
                                    "data-sellix-product": "641860162cfa5",
                                    type: "submit",
                                    alt: "Purchase Modal",
                                    "data-sellix-email": null == c ? void 0 : null === (o = c.user) || void 0 === o ? void 0 : o.email,
                                    "data-sellix-custom-user_id": null == c ? void 0 : null === (d = c.user) || void 0 === d ? void 0 : d.id,
                                    "data-sellix-custom-referrer": g.query.r || "none",
                                    className: "hidden"
                                })]
                            })]
                        })
                    })]
                })]
            })
        }
        ;
        t.default = o
    },
    1163: function(e, t, a) {
        e.exports = a(880)
    }
}, function(e) {
    e.O(0, [664, 675, 774, 888, 179], function() {
        return e(e.s = 6131)
    }),
    _N_E = e.O()
}
]);
