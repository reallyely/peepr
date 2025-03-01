import { ssr, ssrHydrationKey, escape, createComponent, For, ssrAttribute, isServer } from 'solid-js/web';
import { F as Fn, L, I as In, t as te, a as ts } from '../nitro/nitro.mjs';
import i from 'node:process';
import x from 'node:assert';
import { createResource, untrack, sharedConfig } from 'solid-js';
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

function l(r, n) {
  let t, o = () => !t || t.state === "unresolved" ? void 0 : t.latest;
  [t] = createResource(() => T(r, untrack(o)), (h) => h, n);
  const a = () => t();
  return Object.defineProperty(a, "latest", { get() {
    return t.latest;
  } }), a;
}
class e {
  static all() {
    return new e();
  }
  static allSettled() {
    return new e();
  }
  static any() {
    return new e();
  }
  static race() {
    return new e();
  }
  static reject() {
    return new e();
  }
  static resolve() {
    return new e();
  }
  catch() {
    return new e();
  }
  then() {
    return new e();
  }
  finally() {
    return new e();
  }
}
function T(r, n) {
  if (isServer || !sharedConfig.context) return r(n);
  const t = fetch, o = Promise;
  try {
    return window.fetch = () => new e(), Promise = e, r(n);
  } finally {
    window.fetch = t, Promise = o;
  }
}
var q = ["<main", ' class="w-full p-4 space-y-2"><h2 class="font-bold text-3xl">Hello <!--$-->', '<!--/--></h2><h3 class="font-bold text-xl"> board</h3><!--$-->', "<!--/--><form", ' method="post"><button name="logout" type="submit">Logout</button></form></main>'], F = ["<li", ">", "</li>"];
const G = te(async () => {
  try {
    return x(i.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set"), (await new ts(i.env.GITHUB_TOKEN).getBranches()).data;
  } catch (r) {
    return console.error("Failed to fetch branches:", r), { error: "Failed to fetch branches" };
  }
}, "src_routes_index_tsx--getBranches_query", "/home/rowvir/dev/peepr/ui/src/routes/index.tsx?pick=default&pick=%24css&tsr-directive-use-server="), K = L(G, "query");
function _() {
  var _a;
  const r = l(() => In(), { deferStream: true }), n = l(() => K(), { deferStream: true });
  return console.log({ branches: n() }), ssr(q, ssrHydrationKey(), escape((_a = r()) == null ? void 0 : _a.username), escape(createComponent(For, { get each() {
    return n();
  }, children: (t) => ssr(F, ssrHydrationKey(), escape(t.name)) })), ssrAttribute("action", escape(Fn, true), false));
}

export { _ as default };
//# sourceMappingURL=index.mjs.map
