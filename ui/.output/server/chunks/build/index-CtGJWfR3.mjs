import { t as te, a as ts } from '../nitro/nitro.mjs';
import i from 'node:process';
import x from 'node:assert';
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

const f = te(async () => {
  try {
    return x(i.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set"), (await new ts(i.env.GITHUB_TOKEN).getBranches()).data;
  } catch (r) {
    return console.error("Failed to fetch branches:", r), { error: "Failed to fetch branches" };
  }
}, "src_routes_index_tsx--getBranches_query", "/home/rowvir/dev/peepr/ui/src/routes/index.tsx?pick=route&tsr-directive-use-server=");

export { f as getBranches_query };
//# sourceMappingURL=index-CtGJWfR3.mjs.map
