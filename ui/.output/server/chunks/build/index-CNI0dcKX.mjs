import { t as te, u as un, l as ln, d as dn, f as fn, r as re, c as ne, e as Ue, z } from '../nitro/nitro.mjs';
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
import 'solid-js';
import 'solid-js/web';
import 'solid-js/web/storage';
import 'node:async_hooks';
import 'fs';
import 'path';
import 'node:process';
import 'node:assert';

const E = te(async () => {
  try {
    const r = (await re()).data.userId;
    if (r === void 0) throw new Error("User not found");
    const e = await z.user.findUnique({ where: { id: r } });
    if (!e) throw new Error("User not found");
    return { id: e.id, username: e.username };
  } catch {
    throw await Ue(), ne("/login");
  }
}, "src_lib_index_ts--getUser_query", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), I = te(async (s) => {
  const r = String(s.get("username")), e = String(s.get("password")), d = String(s.get("loginType"));
  let n = un(r) || ln(e);
  if (n) return new Error(n);
  try {
    const t = await (d !== "login" ? dn(r, e) : fn(r, e));
    await (await re()).update((u) => {
      u.userId = t.id;
    });
  } catch (t) {
    return t;
  }
  return ne("/");
}, "src_lib_index_ts--loginOrRegister_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), q = te(async () => (await Ue(), ne("/login")), "src_lib_index_ts--logout_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server=");

export { E as getUser_query, I as loginOrRegister_action, q as logout_action };
//# sourceMappingURL=index-CNI0dcKX.mjs.map
