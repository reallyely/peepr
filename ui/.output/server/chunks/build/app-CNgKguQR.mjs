import { createComponent, ssr, ssrHydrationKey, isServer, getRequestEvent, delegateEvents } from 'solid-js/web';
import { k as ks, Y as Yt, T as Tn, N as Nt, E as Ee, m as me, V as Vt, $ as $n, g as Y, X as Xt, H as Hn, h as Ft, O as On, C as Ce, q as qn } from '../nitro/nitro.mjs';
import { Suspense, createSignal, onCleanup, children, createMemo, getOwner, sharedConfig, untrack, Show, on, createRoot } from 'solid-js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';
import 'node:async_hooks';
import 'fs';
import 'path';
import 'node:process';
import 'node:assert';

const j = (t) => (r) => {
  const { base: a } = r, n = children(() => r.children), e = createMemo(() => Yt(n(), r.base || ""));
  let s;
  const u = Tn(t, e, () => s, { base: a, singleFlight: r.singleFlight, transformUrl: r.transformUrl });
  return t.create && t.create(u), createComponent(Nt.Provider, { value: u, get children() {
    return createComponent(nt, { routerState: u, get root() {
      return r.root;
    }, get preload() {
      return r.rootPreload || r.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent(at, { routerState: u, get branches() {
        return e();
      } })];
    } });
  } });
};
function nt(t) {
  const r = t.routerState.location, a = t.routerState.params, n = createMemo(() => t.preload && untrack(() => {
    Hn(true), t.preload({ params: a, location: r, intent: Vt() || "initial" }), Hn(false);
  }));
  return createComponent(Show, { get when() {
    return t.root;
  }, keyed: true, get fallback() {
    return t.children;
  }, children: (e) => createComponent(e, { params: a, location: r, get data() {
    return n();
  }, get children() {
    return t.children;
  } }) });
}
function at(t) {
  if (isServer) {
    const e = getRequestEvent();
    if (e && e.router && e.router.dataOnly) {
      ot(e, t.routerState, t.branches);
      return;
    }
    e && ((e.router || (e.router = {})).matches || (e.router.matches = t.routerState.matches().map(({ route: s, path: u, params: m }) => ({ path: s.originalPath, pattern: s.pattern, match: u, params: m, info: s.info }))));
  }
  const r = [];
  let a;
  const n = createMemo(on(t.routerState.matches, (e, s, u) => {
    let m = s && e.length === s.length;
    const h = [];
    for (let l = 0, w = e.length; l < w; l++) {
      const b = s && s[l], g = e[l];
      u && b && g.route.key === b.route.key ? h[l] = u[l] : (m = false, r[l] && r[l](), createRoot((v) => {
        r[l] = v, h[l] = $n(t.routerState, h[l - 1] || t.routerState.base, U(() => n()[l + 1]), () => t.routerState.matches()[l]);
      }));
    }
    return r.splice(e.length).forEach((l) => l()), u && m ? u : (a = h[0], h);
  }));
  return U(() => n() && a)();
}
const U = (t) => () => createComponent(Show, { get when() {
  return t();
}, keyed: true, children: (r) => createComponent(Xt.Provider, { value: r, get children() {
  return r.outlet();
} }) });
function ot(t, r, a) {
  const n = new URL(t.request.url), e = Y(a, new URL(t.router.previousUrl || t.request.url).pathname), s = Y(a, n.pathname);
  for (let u = 0; u < s.length; u++) {
    (!e[u] || s[u].route !== e[u].route) && (t.router.dataOnly = true);
    const { route: m, params: h } = s[u];
    m.preload && m.preload({ params: h, location: r.location, intent: "preload" });
  }
}
function it([t, r], a, n) {
  return [t, n ? (e) => r(n(e)) : r];
}
function st(t) {
  let r = false;
  const a = (e) => typeof e == "string" ? { value: e } : e, n = it(createSignal(a(t.get()), { equals: (e, s) => e.value === s.value && e.state === s.state }), void 0, (e) => (!r && t.set(e), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), e));
  return t.init && onCleanup(t.init((e = t.get()) => {
    r = true, n[1](a(e)), r = false;
  })), j({ signal: n, create: t.create, utils: t.utils });
}
function ut(t, r, a) {
  return t.addEventListener(r, a), () => t.removeEventListener(r, a);
}
function ct(t, r) {
  const a = t && document.getElementById(t);
  a ? a.scrollIntoView() : r && window.scrollTo(0, 0);
}
function lt(t) {
  const r = new URL(t);
  return r.pathname + r.search;
}
function dt(t) {
  let r;
  const a = { value: t.url || (r = getRequestEvent()) && lt(r.request.url) || "" };
  return j({ signal: [() => a, (n) => Object.assign(a, n)] })(t);
}
function ht(t = true, r = false, a = "/_server", n) {
  return (e) => {
    const s = e.base.path(), u = e.navigatorFactory(e.base);
    let m, h;
    function l(o) {
      return o.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function w(o) {
      if (o.defaultPrevented || o.button !== 0 || o.metaKey || o.altKey || o.ctrlKey || o.shiftKey) return;
      const i = o.composedPath().find((E) => E instanceof Node && E.nodeName.toUpperCase() === "A");
      if (!i || r && !i.hasAttribute("link")) return;
      const d = l(i), c = d ? i.href.baseVal : i.href;
      if ((d ? i.target.baseVal : i.target) || !c && !i.hasAttribute("state")) return;
      const p = (i.getAttribute("rel") || "").split(/\s+/);
      if (i.hasAttribute("download") || p && p.includes("external")) return;
      const R = d ? new URL(c, document.baseURI) : new URL(c);
      if (!(R.origin !== window.location.origin || s && R.pathname && !R.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [i, R];
    }
    function b(o) {
      const i = w(o);
      if (!i) return;
      const [d, c] = i, A = e.parsePath(c.pathname + c.search + c.hash), p = d.getAttribute("state");
      o.preventDefault(), u(A, { resolve: false, replace: d.hasAttribute("replace"), scroll: !d.hasAttribute("noscroll"), state: p ? JSON.parse(p) : void 0 });
    }
    function g(o) {
      const i = w(o);
      if (!i) return;
      const [d, c] = i;
      n && (c.pathname = n(c.pathname)), e.preloadRoute(c, d.getAttribute("preload") !== "false");
    }
    function v(o) {
      clearTimeout(m);
      const i = w(o);
      if (!i) return h = null;
      const [d, c] = i;
      h !== d && (n && (c.pathname = n(c.pathname)), m = setTimeout(() => {
        e.preloadRoute(c, d.getAttribute("preload") !== "false"), h = d;
      }, 20));
    }
    function S(o) {
      if (o.defaultPrevented) return;
      let i = o.submitter && o.submitter.hasAttribute("formaction") ? o.submitter.getAttribute("formaction") : o.target.getAttribute("action");
      if (!i) return;
      if (!i.startsWith("https://action/")) {
        const c = new URL(i, Ee);
        if (i = e.parsePath(c.pathname + c.search), !i.startsWith(a)) return;
      }
      if (o.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const d = me.get(i);
      if (d) {
        o.preventDefault();
        const c = new FormData(o.target, o.submitter);
        d.call({ r: e, f: o.target }, o.target.enctype === "multipart/form-data" ? c : new URLSearchParams(c));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", b), t && (document.addEventListener("mousemove", v, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", S), onCleanup(() => {
      document.removeEventListener("click", b), t && (document.removeEventListener("mousemove", v), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", S);
    });
  };
}
function mt(t) {
  if (isServer) return dt(t);
  const r = () => {
    const n = window.location.pathname.replace(/^\/+/, "/") + window.location.search, e = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: n + window.location.hash, state: e };
  }, a = Ft();
  return st({ get: r, set({ value: n, replace: e, scroll: s, state: u }) {
    e ? window.history.replaceState(On(u), "", n) : window.history.pushState(u, "", n), ct(decodeURIComponent(window.location.hash.slice(1)), s), Ce();
  }, init: (n) => ut(window, "popstate", qn(n, (e) => {
    if (e && e < 0) return !a.confirm(e);
    {
      const s = r();
      return !a.confirm(s.value, { state: s.state });
    }
  })), create: ht(t.preload, t.explicitLinks, t.actionBase, t.transformUrl), utils: { go: (n) => window.history.go(n), beforeLeave: a } })(t);
}
var ft = ["<a", ' href="/">Index</a>'], gt = ["<a", ' href="/about">About</a>'];
function Ct() {
  return createComponent(mt, { root: (t) => [ssr(ft, ssrHydrationKey()), ssr(gt, ssrHydrationKey()), createComponent(Suspense, { get children() {
    return t.children;
  } })], get children() {
    return createComponent(ks, {});
  } });
}

export { Ct as default };
//# sourceMappingURL=app-CNgKguQR.mjs.map
