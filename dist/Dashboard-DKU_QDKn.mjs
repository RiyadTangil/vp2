import { j as e, N as m, u as c, f as d, R as l, a as u, B as g } from "./index-BhNhIj-d.mjs";
import { useEffect as i, useState as p } from "react";
const f = (o) => {
  const t = localStorage.getItem("admin"), s = t ? JSON.parse(t) : null;
  return s && s.isVerified ? /* @__PURE__ */ e.jsx(e.Fragment, { children: o.component }) : /* @__PURE__ */ e.jsx(m, { to: "/login" });
}, j = () => {
  const o = c(), t = localStorage.getItem("admin"), s = t ? JSON.parse(t) : null;
  i(() => {
    s && o(d()).then((a) => {
      console.log(a.message), a.message !== "Success" && (localStorage.removeItem("authTokens"), localStorage.removeItem("admin"), window.location.reload());
    });
  }, []);
  const [h, r] = p(!1);
  return i(() => {
    const n = () => {
      r(window.innerWidth <= 1024);
    };
    return window.addEventListener("resize", n), n(), () => {
      window.removeEventListener("resize", n);
    };
  }, []), /* @__PURE__ */ e.jsx(l, { children: /* @__PURE__ */ e.jsx(
    u,
    {
      path: "/feed/:tab",
      element: /* @__PURE__ */ e.jsx(f, { component: /* @__PURE__ */ e.jsx(g, {}) })
    }
  ) });
};
export {
  j as default
};
