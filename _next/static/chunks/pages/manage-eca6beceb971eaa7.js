(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[867], {
    4421: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/manage", function() {
            return s(9657)
        }
        ])
    },
    9657: function(e, t, s) {
        "use strict";
        s.r(t);
        var r = s(5893)
          , a = s(3299)
          , n = s(8731)
          , i = s(9008)
          , o = s.n(i)
          , l = s(3115)
          , c = s(8238)
          , d = s(1163)
          , u = s(4173);
        let x = ()=>{
            let {data: e, status: t} = (0,
            a.useSession)()
              , s = (0,
            d.useRouter)();
            switch (t) {
            case "loading":
                return (0,
                r.jsx)("div", {});
            case "unauthenticated":
                return (0,
                r.jsx)(l.Z, {});
            case "authenticated":
                return (0,
                r.jsxs)("div", {
                    className: "h-screen",
                    children: [(0,
                    r.jsxs)(o(), {
                        children: [(0,
                        r.jsx)("title", {
                            children: "Manage Servers | OneBump"
                        }), (0,
                        r.jsx)("style", {
                            children: "\nbody, html {\n    background-color: #18181b !important;\n    background-attachment: fixed !important;\n    background-image: radial-gradient(\n      at 1% 1%, \n      hsl(225.74deg 77% 40%) 0, \n      transparent 59%\n    ),\n    radial-gradient(\n      at 82% 65%, \n      hsl(217.94, 75%, 18%) 0, \n      transparent 55%\n    ) !important;\n  }\n"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "mx-auto max-w-5xl",
                        children: [(0,
                        r.jsx)(n.Z, {}), (0,
                        r.jsx)("div", {
                            className: "flex justify-center gap-5 pt-7",
                            children: (0,
                            r.jsxs)("div", {
                                className: "flex flex-col justify-center items-center",
                                children: [(0,
                                r.jsxs)("h1", {
                                    className: "font-black text-4xl mt-10 md:text-5xl md:max-w-xl text-white",
                                    children: ["Manage Your ", (0,
                                    r.jsx)("span", {
                                        className: "text-highlight-txt",
                                        children: "Servers"
                                    })]
                                }), (0,
                                r.jsxs)("p", {
                                    className: "text-white font-semibold mt-2 flex items-center justify-center",
                                    children: ["Dont see your server? ", (0,
                                    r.jsxs)("span", {
                                        onClick: async()=>{
                                            sessionStorage.getItem("reload-expires") ? Number(sessionStorage.getItem("reload-expires")) <= Date.now() ? (await sessionStorage.removeItem("user-guilds"),
                                            await sessionStorage.setItem("reload-expires", "".concat(Date.now() + 1e4)),
                                            s.reload()) : u.Am.error("Please wait 10s before refreshing!", {
                                                position: "top-right",
                                                autoClose: 5e3,
                                                hideProgressBar: !1,
                                                closeOnClick: !0,
                                                pauseOnHover: !0,
                                                draggable: !1,
                                                progress: void 0,
                                                theme: "dark",
                                                style: {
                                                    backgroundColor: "rgba(31, 33, 41, 0.75)",
                                                    backdropFilter: "blur(16px) saturate(180%)",
                                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                                    borderRadius: "12px",
                                                    border: "1px solid rgba(255, 255, 255, 0.125)"
                                                }
                                            }) : (await sessionStorage.removeItem("user-guilds"),
                                            await sessionStorage.setItem("reload-expires", "".concat(Date.now() + 1e4)),
                                            s.reload())
                                        }
                                        ,
                                        className: "ml-2 flex cursor-pointer items-center justify-center text-highlight-txt",
                                        children: ["Refresh", (0,
                                        r.jsx)("svg", {
                                            className: "w-4 ml-1 h-4 text-highlight-txt",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: (0,
                                            r.jsx)("path", {
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4"
                                            })
                                        }), " "]
                                    })]
                                })]
                            })
                        }), (0,
                        r.jsx)(c.Z, {
                            session: e,
                            className: "mt-5"
                        })]
                    })]
                })
            }
        }
        ;
        t.default = x
    }
}, function(e) {
    e.O(0, [664, 675, 121, 219, 774, 888, 179], function() {
        return e(e.s = 4421)
    }),
    _N_E = e.O()
}
]);
