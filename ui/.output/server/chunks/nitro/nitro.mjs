import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises } from 'node:fs';
import * as node_path$1 from 'node:path';
import nodeCrypto from 'node:crypto';
import invariant from 'vinxi/lib/invariant';
import { virtualId, handlerModule, join } from 'vinxi/lib/path';
import { createContext as createContext$1, createSignal, createMemo, createRenderEffect, on as on$2, useContext, runWithOwner, getOwner, getListener, onCleanup, startTransition, sharedConfig, $TRACK, resetErrorBoundaries, batch, untrack, createComponent, lazy, catchError, ErrorBoundary, Suspense, children, Show, createRoot } from 'solid-js';
import { getRequestEvent, isServer, renderToString, ssrElement, escape, mergeProps, ssr, renderToStream, createComponent as createComponent$1, ssrHydrationKey, NoHydration, useAssets, Hydration, ssrAttribute, HydrationScript, delegateEvents } from 'solid-js/web';
import { provideRequestEvent } from 'solid-js/web/storage';
import { AsyncLocalStorage } from 'node:async_hooks';
import { promises as promises$1, existsSync } from 'fs';
import { resolve as resolve$1, dirname as dirname$1, join as join$1 } from 'path';
import i$3 from 'node:process';
import x$5 from 'node:assert';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_DhEqb06g = {};

var l$1=Object.defineProperty;var o=(e,t)=>l$1(e,"name",{value:t,configurable:true});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_DhEqb06g.commonjsGlobal=commonjsGlobal,nodeFetchNative_DhEqb06g.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var qi=Object.defineProperty;var u=(c,l)=>qi(c,"name",{value:l,configurable:true});Object.defineProperty(node$1,"__esModule",{value:true});const http=require$$3,https=require$$4,zlib=require$$5,Stream=require$$6,require$$0=require$$7,require$$0$1=require$$8,_commonjsHelpers=nodeFetchNative_DhEqb06g,require$$1=require$$10,require$$0$2=require$$11,node_fs=require$$0$3,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=false;const R=d[0]||"text/plain";let w=R;for(let z=1;z<d.length;z++)d[z]==="base64"?b=true:d[z]&&(w+=`;${d[z]}`,d[z].indexOf("charset=")===0&&(y=d[z].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const A=b?"base64":"ascii",F=unescape(c.substring(l+1)),B=Buffer.from(F,A);return B.type=R,B.typeFull=w,B.charset=y,B}u(dataUriToBuffer,"dataUriToBuffer");var streams={},ponyfill_es2018$1={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var ponyfill_es2018=ponyfill_es2018$1.exports,hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(ponyfill_es2018,function(d){function y(){}u(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u(w,"setFunctionName");const A=Promise,F=Promise.prototype.then,B=Promise.reject.bind(A);function z(n){return new A(n)}u(z,"newPromise");function W(n){return z(o=>o(n))}u(W,"promiseResolvedWith");function T(n){return B(n)}u(T,"promiseRejectedWith");function D(n,o,a){return F.call(n,o,a)}u(D,"PerformPromiseThen");function E(n,o,a){D(D(n,o,a),void 0,R);}u(E,"uponPromise");function Z(n,o){E(n,o);}u(Z,"uponFulfillment");function M(n,o){E(n,void 0,o);}u(M,"uponRejection");function U(n,o,a){return D(n,o,a)}u(U,"transformPromiseWith");function K(n){D(n,void 0,R);}u(K,"setPromiseIsHandledToTrue");let se=u(n=>{if(typeof queueMicrotask=="function")se=queueMicrotask;else {const o=W(void 0);se=u(a=>D(o,a),"_queueMicrotask");}return se(n)},"_queueMicrotask");function $(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u($,"reflectCall");function N(n,o,a){try{return W($(n,o,a))}catch(p){return T(p)}}u(N,"promiseCall");const V=16384;class Q{static{u(this,"SimpleQueue");}constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===V-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===V&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}}const rt=Symbol("[[AbortSteps]]"),wr=Symbol("[[ErrorSteps]]"),Ot=Symbol("[[CancelSteps]]"),Ft=Symbol("[[PullSteps]]"),It=Symbol("[[ReleaseSteps]]");function Rr(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?jt(n):o._state==="closed"?Dn(n):Tr(n,o._storedError);}u(Rr,"ReadableStreamReaderGenericInitialize");function zt(n,o){const a=n._ownerReadableStream;return ne(a,o)}u(zt,"ReadableStreamReaderGenericCancel");function ue(n){const o=n._ownerReadableStream;o._state==="readable"?Lt(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):$n(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[It](),o._reader=void 0,n._ownerReadableStream=void 0;}u(ue,"ReadableStreamReaderGenericRelease");function nt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u(nt,"readerLockException");function jt(n){n._closedPromise=z((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u(jt,"defaultReaderClosedPromiseInitialize");function Tr(n,o){jt(n),Lt(n,o);}u(Tr,"defaultReaderClosedPromiseInitializeAsRejected");function Dn(n){jt(n),Cr(n);}u(Dn,"defaultReaderClosedPromiseInitializeAsResolved");function Lt(n,o){n._closedPromise_reject!==void 0&&(K(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(Lt,"defaultReaderClosedPromiseReject");function $n(n,o){Tr(n,o);}u($n,"defaultReaderClosedPromiseResetToRejected");function Cr(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(Cr,"defaultReaderClosedPromiseResolve");const Pr=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Mn=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function xn(n){return typeof n=="object"||typeof n=="function"}u(xn,"isDictionary");function ie(n,o){if(n!==void 0&&!xn(n))throw new TypeError(`${o} is not an object.`)}u(ie,"assertDictionary");function X(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u(X,"assertFunction");function Un(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(Un,"isObject");function Er(n,o){if(!Un(n))throw new TypeError(`${o} is not an object.`)}u(Er,"assertObject");function le(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u(le,"assertRequiredArgument");function Dt(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u(Dt,"assertRequiredField");function $t(n){return Number(n)}u($t,"convertUnrestrictedDouble");function vr(n){return n===0?0:n}u(vr,"censorNegativeZero");function Nn(n){return vr(Mn(n))}u(Nn,"integerPart");function Mt(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=vr(g),!Pr(g))throw new TypeError(`${o} is not a finite number`);if(g=Nn(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !Pr(g)||g===0?0:g}u(Mt,"convertUnsignedLongLongWithEnforceRange");function xt(n,o){if(!Re(n))throw new TypeError(`${o} is not a ReadableStream.`)}u(xt,"assertReadableStream");function Fe(n){return new me(n)}u(Fe,"AcquireReadableStreamDefaultReader");function Ar(n,o){n._reader._readRequests.push(o);}u(Ar,"ReadableStreamAddReadRequest");function Ut(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u(Ut,"ReadableStreamFulfillReadRequest");function ot(n){return n._reader._readRequests.length}u(ot,"ReadableStreamGetNumReadRequests");function Br(n){const o=n._reader;return !(o===void 0||!ye(o))}u(Br,"ReadableStreamHasDefaultReader");class me{static{u(this,"ReadableStreamDefaultReader");}constructor(o){if(le(o,1,"ReadableStreamDefaultReader"),xt(o,"First parameter"),Te(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Rr(this,o),this._readRequests=new Q;}get closed(){return ye(this)?this._closedPromise:T(it("closed"))}cancel(o=void 0){return ye(this)?this._ownerReadableStream===void 0?T(nt("cancel")):zt(this,o):T(it("cancel"))}read(){if(!ye(this))return T(it("read"));if(this._ownerReadableStream===void 0)return T(nt("read from"));let o,a;const p=z((_,S)=>{o=_,a=S;});return Ve(this,{_chunkSteps:u(_=>o({value:_,done:false}),"_chunkSteps"),_closeSteps:u(()=>o({value:void 0,done:true}),"_closeSteps"),_errorSteps:u(_=>a(_),"_errorSteps")}),p}releaseLock(){if(!ye(this))throw it("releaseLock");this._ownerReadableStream!==void 0&&Hn(this);}}Object.defineProperties(me.prototype,{cancel:{enumerable:true},read:{enumerable:true},releaseLock:{enumerable:true},closed:{enumerable:true}}),w(me.prototype.cancel,"cancel"),w(me.prototype.read,"read"),w(me.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:true});function ye(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?false:n instanceof me}u(ye,"IsReadableStreamDefaultReader");function Ve(n,o){const a=n._ownerReadableStream;a._disturbed=true,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[Ft](o);}u(Ve,"ReadableStreamDefaultReaderRead");function Hn(n){ue(n);const o=new TypeError("Reader was released");qr(n,o);}u(Hn,"ReadableStreamDefaultReaderRelease");function qr(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u(qr,"ReadableStreamDefaultReaderErrorReadRequests");function it(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u(it,"defaultReaderBrandCheckException");const Vn=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype);class Wr{static{u(this,"ReadableStreamAsyncIteratorImpl");}constructor(o,a){this._ongoingPromise=void 0,this._isFinished=false,this._reader=o,this._preventCancel=a;}next(){const o=u(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?U(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?U(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:true});const o=this._reader;let a,p;const g=z((S,C)=>{a=S,p=C;});return Ve(o,{_chunkSteps:u(S=>{this._ongoingPromise=void 0,se(()=>a({value:S,done:false}));},"_chunkSteps"),_closeSteps:u(()=>{this._ongoingPromise=void 0,this._isFinished=true,ue(o),a({value:void 0,done:true});},"_closeSteps"),_errorSteps:u(S=>{this._ongoingPromise=void 0,this._isFinished=true,ue(o),p(S);},"_errorSteps")}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:true});this._isFinished=true;const a=this._reader;if(!this._preventCancel){const p=zt(a,o);return ue(a),U(p,()=>({value:o,done:true}))}return ue(a),W({value:o,done:true})}}const kr={next(){return Or(this)?this._asyncIteratorImpl.next():T(Fr("next"))},return(n){return Or(this)?this._asyncIteratorImpl.return(n):T(Fr("return"))}};Object.setPrototypeOf(kr,Vn);function Qn(n,o){const a=Fe(n),p=new Wr(a,o),g=Object.create(kr);return g._asyncIteratorImpl=p,g}u(Qn,"AcquireReadableStreamAsyncIterator");function Or(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return  false;try{return n._asyncIteratorImpl instanceof Wr}catch{return  false}}u(Or,"IsReadableStreamAsyncIterator");function Fr(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u(Fr,"streamAsyncIteratorBrandCheckException");const Ir=Number.isNaN||function(n){return n!==n};var Nt,Ht,Vt;function Qe(n){return n.slice()}u(Qe,"CreateArrayFromList");function zr(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u(zr,"CopyDataBlockBytes");let fe=u(n=>(typeof n.transfer=="function"?fe=u(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?fe=u(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):fe=u(o=>o,"TransferArrayBuffer"),fe(n)),"TransferArrayBuffer"),ge=u(n=>(typeof n.detached=="boolean"?ge=u(o=>o.detached,"IsDetachedBuffer"):ge=u(o=>o.byteLength===0,"IsDetachedBuffer"),ge(n)),"IsDetachedBuffer");function jr(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return zr(g,0,n,o,p),g}u(jr,"ArrayBufferSlice");function at(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u(at,"GetMethod");function Yn(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:false}}u(Yn,"CreateAsyncFromSyncIterator");const Qt=(Vt=(Nt=Symbol.asyncIterator)!==null&&Nt!==void 0?Nt:(Ht=Symbol.for)===null||Ht===void 0?void 0:Ht.call(Symbol,"Symbol.asyncIterator"))!==null&&Vt!==void 0?Vt:"@@asyncIterator";function Lr(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=at(n,Qt),a===void 0){const _=at(n,Symbol.iterator),S=Lr(n,"sync",_);return Yn(S)}}else a=at(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=$(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:false}}u(Lr,"GetIterator");function Gn(n){const o=$(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u(Gn,"IteratorNext");function Zn(n){return !!n.done}u(Zn,"IteratorComplete");function Kn(n){return n.value}u(Kn,"IteratorValue");function Jn(n){return !(typeof n!="number"||Ir(n)||n<0)}u(Jn,"IsNonNegativeNumber");function Dr(n){const o=jr(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u(Dr,"CloneAsUint8Array");function Yt(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u(Yt,"DequeueValue");function Gt(n,o,a){if(!Jn(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u(Gt,"EnqueueValueWithSize");function Xn(n){return n._queue.peek().value}u(Xn,"PeekQueueValue");function _e(n){n._queue=new Q,n._queueTotalSize=0;}u(_e,"ResetQueue");function $r(n){return n===DataView}u($r,"isDataViewConstructor");function eo(n){return $r(n.constructor)}u(eo,"isDataView");function to(n){return $r(n)?1:n.BYTES_PER_ELEMENT}u(to,"arrayBufferViewElementSize");class Ee{static{u(this,"ReadableStreamBYOBRequest");}constructor(){throw new TypeError("Illegal constructor")}get view(){if(!Zt(this))throw tr("view");return this._view}respond(o){if(!Zt(this))throw tr("respond");if(le(o,1,"respond"),o=Mt(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(ge(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");ft(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!Zt(this))throw tr("respondWithNewView");if(le(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(ge(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");ct(this._associatedReadableByteStreamController,o);}}Object.defineProperties(Ee.prototype,{respond:{enumerable:true},respondWithNewView:{enumerable:true},view:{enumerable:true}}),w(Ee.prototype.respond,"respond"),w(Ee.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ee.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:true});class ce{static{u(this,"ReadableByteStreamController");}constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!ve(this))throw Ge("byobRequest");return er(this)}get desiredSize(){if(!ve(this))throw Ge("desiredSize");return Zr(this)}close(){if(!ve(this))throw Ge("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);Ye(this);}enqueue(o){if(!ve(this))throw Ge("enqueue");if(le(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);lt(this,o);}error(o=void 0){if(!ve(this))throw Ge("error");ee(this,o);}[Ot](o){Mr(this),_e(this);const a=this._cancelAlgorithm(o);return ut(this),a}[Ft](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Gr(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}Ar(a,o),Ae(this);}[It](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}}Object.defineProperties(ce.prototype,{close:{enumerable:true},enqueue:{enumerable:true},error:{enumerable:true},byobRequest:{enumerable:true},desiredSize:{enumerable:true}}),w(ce.prototype.close,"close"),w(ce.prototype.enqueue,"enqueue"),w(ce.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ce.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:true});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?false:n instanceof ce}u(ve,"IsReadableByteStreamController");function Zt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?false:n instanceof Ee}u(Zt,"IsReadableStreamBYOBRequest");function Ae(n){if(!ao(n))return;if(n._pulling){n._pullAgain=true;return}n._pulling=true;const a=n._pullAlgorithm();E(a,()=>(n._pulling=false,n._pullAgain&&(n._pullAgain=false,Ae(n)),null),p=>(ee(n,p),null));}u(Ae,"ReadableByteStreamControllerCallPullIfNeeded");function Mr(n){Jt(n),n._pendingPullIntos=new Q;}u(Mr,"ReadableByteStreamControllerClearPendingPullIntos");function Kt(n,o){let a=false;n._state==="closed"&&(a=true);const p=xr(o);o.readerType==="default"?Ut(n,p,a):ho(n,p,a);}u(Kt,"ReadableByteStreamControllerCommitPullIntoDescriptor");function xr(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u(xr,"ReadableByteStreamControllerConvertPullIntoDescriptor");function st(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u(st,"ReadableByteStreamControllerEnqueueChunkToQueue");function Ur(n,o,a,p){let g;try{g=jr(o,a,a+p);}catch(_){throw ee(n,_),_}st(n,g,0,p);}u(Ur,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function Nr(n,o){o.bytesFilled>0&&Ur(n,o.buffer,o.byteOffset,o.bytesFilled),Ie(n);}u(Nr,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function Hr(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=false;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=true);const q=n._queue;for(;g>0;){const P=q.peek(),k=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;zr(o.buffer,O,P.buffer,P.byteOffset,k),P.byteLength===k?q.shift():(P.byteOffset+=k,P.byteLength-=k),n._queueTotalSize-=k,Vr(n,k,o),g-=k;}return _}u(Hr,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Vr(n,o,a){a.bytesFilled+=o;}u(Vr,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function Qr(n){n._queueTotalSize===0&&n._closeRequested?(ut(n),tt(n._controlledReadableByteStream)):Ae(n);}u(Qr,"ReadableByteStreamControllerHandleQueueDrain");function Jt(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u(Jt,"ReadableByteStreamControllerInvalidateBYOBRequest");function Xt(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();Hr(n,o)&&(Ie(n),Kt(n._controlledReadableByteStream,o));}}u(Xt,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function ro(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Gr(n,a);}}u(ro,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function no(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=to(_),{byteOffset:C,byteLength:q}=o,P=a*S;let k;try{k=fe(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:k,bufferByteLength:k.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),Xr(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(Hr(n,O)){const j=xr(O);Qr(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");ee(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),Xr(g,p),Ae(n);}u(no,"ReadableByteStreamControllerPullInto");function oo(n,o){o.readerType==="none"&&Ie(n);const a=n._controlledReadableByteStream;if(rr(a))for(;en(a)>0;){const p=Ie(n);Kt(a,p);}}u(oo,"ReadableByteStreamControllerRespondInClosedState");function io(n,o,a){if(Vr(n,o,a),a.readerType==="none"){Nr(n,a),Xt(n);return}if(a.bytesFilled<a.minimumFill)return;Ie(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Ur(n,a.buffer,g-p,p);}a.bytesFilled-=p,Kt(n._controlledReadableByteStream,a),Xt(n);}u(io,"ReadableByteStreamControllerRespondInReadableState");function Yr(n,o){const a=n._pendingPullIntos.peek();Jt(n),n._controlledReadableByteStream._state==="closed"?oo(n,a):io(n,o,a),Ae(n);}u(Yr,"ReadableByteStreamControllerRespondInternal");function Ie(n){return n._pendingPullIntos.shift()}u(Ie,"ReadableByteStreamControllerShiftPendingPullInto");function ao(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?false:!!(Br(o)&&ot(o)>0||rr(o)&&en(o)>0||Zr(n)>0)}u(ao,"ReadableByteStreamControllerShouldCallPull");function ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(ut,"ReadableByteStreamControllerClearAlgorithms");function Ye(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=true;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw ee(n,p),p}}ut(n),tt(o);}}u(Ye,"ReadableByteStreamControllerClose");function lt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(ge(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=fe(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(ge(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");Jt(n),C.buffer=fe(C.buffer),C.readerType==="none"&&Nr(n,C);}if(Br(a))if(ro(n),ot(a)===0)st(n,S,g,_);else {n._pendingPullIntos.length>0&&Ie(n);const C=new Uint8Array(S,g,_);Ut(a,C,false);}else rr(a)?(st(n,S,g,_),Xt(n)):st(n,S,g,_);Ae(n);}u(lt,"ReadableByteStreamControllerEnqueue");function ee(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(Mr(n),_e(n),ut(n),Pn(a,o));}u(ee,"ReadableByteStreamControllerError");function Gr(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,Qr(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u(Gr,"ReadableByteStreamControllerFillReadRequestFromQueue");function er(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Ee.prototype);uo(p,n,a),n._byobRequest=p;}return n._byobRequest}u(er,"ReadableByteStreamControllerGetBYOBRequest");function Zr(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(Zr,"ReadableByteStreamControllerGetDesiredSize");function ft(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=fe(a.buffer),Yr(n,o);}u(ft,"ReadableByteStreamControllerRespond");function ct(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=fe(o.buffer),Yr(n,g);}u(ct,"ReadableByteStreamControllerRespondWithNewView");function Kr(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=false,o._pulling=false,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,_e(o),o._closeRequested=false,o._started=false,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(W(C),()=>(o._started=true,Ae(o),null),q=>(ee(o,q),null));}u(Kr,"SetUpReadableByteStreamController");function so(n,o,a){const p=Object.create(ce.prototype);let g,_,S;o.start!==void 0?g=u(()=>o.start(p),"startAlgorithm"):g=u(()=>{},"startAlgorithm"),o.pull!==void 0?_=u(()=>o.pull(p),"pullAlgorithm"):_=u(()=>W(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u(q=>o.cancel(q),"cancelAlgorithm"):S=u(()=>W(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");Kr(n,p,g,_,S,a,C);}u(so,"SetUpReadableByteStreamControllerFromUnderlyingSource");function uo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u(uo,"SetUpReadableStreamBYOBRequest");function tr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u(tr,"byobRequestBrandCheckException");function Ge(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u(Ge,"byteStreamControllerBrandCheckException");function lo(n,o){ie(n,o);const a=n?.mode;return {mode:a===void 0?void 0:fo(a,`${o} has member 'mode' that`)}}u(lo,"convertReaderOptions");function fo(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u(fo,"convertReadableStreamReaderMode");function co(n,o){var a;ie(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:Mt(p,`${o} has member 'min' that`)}}u(co,"convertByobReadOptions");function Jr(n){return new Se(n)}u(Jr,"AcquireReadableStreamBYOBReader");function Xr(n,o){n._reader._readIntoRequests.push(o);}u(Xr,"ReadableStreamAddReadIntoRequest");function ho(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u(ho,"ReadableStreamFulfillReadIntoRequest");function en(n){return n._reader._readIntoRequests.length}u(en,"ReadableStreamGetNumReadIntoRequests");function rr(n){const o=n._reader;return !(o===void 0||!Be(o))}u(rr,"ReadableStreamHasBYOBReader");class Se{static{u(this,"ReadableStreamBYOBReader");}constructor(o){if(le(o,1,"ReadableStreamBYOBReader"),xt(o,"First parameter"),Te(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!ve(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");Rr(this,o),this._readIntoRequests=new Q;}get closed(){return Be(this)?this._closedPromise:T(dt("closed"))}cancel(o=void 0){return Be(this)?this._ownerReadableStream===void 0?T(nt("cancel")):zt(this,o):T(dt("cancel"))}read(o,a={}){if(!Be(this))return T(dt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(ge(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=co(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(eo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(nt("read from"));let _,S;const C=z((P,k)=>{_=P,S=k;});return tn(this,o,g,{_chunkSteps:u(P=>_({value:P,done:false}),"_chunkSteps"),_closeSteps:u(P=>_({value:P,done:true}),"_closeSteps"),_errorSteps:u(P=>S(P),"_errorSteps")}),C}releaseLock(){if(!Be(this))throw dt("releaseLock");this._ownerReadableStream!==void 0&&po(this);}}Object.defineProperties(Se.prototype,{cancel:{enumerable:true},read:{enumerable:true},releaseLock:{enumerable:true},closed:{enumerable:true}}),w(Se.prototype.cancel,"cancel"),w(Se.prototype.read,"read"),w(Se.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Se.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:true});function Be(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?false:n instanceof Se}u(Be,"IsReadableStreamBYOBReader");function tn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=true,g._state==="errored"?p._errorSteps(g._storedError):no(g._readableStreamController,o,a,p);}u(tn,"ReadableStreamBYOBReaderRead");function po(n){ue(n);const o=new TypeError("Reader was released");rn(n,o);}u(po,"ReadableStreamBYOBReaderRelease");function rn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u(rn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function dt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u(dt,"byobReaderBrandCheckException");function Ze(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(Ir(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u(Ze,"ExtractHighWaterMark");function ht(n){const{size:o}=n;return o||(()=>1)}u(ht,"ExtractSizeAlgorithm");function pt(n,o){ie(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:$t(a),size:p===void 0?void 0:bo(p,`${o} has member 'size' that`)}}u(pt,"convertQueuingStrategy");function bo(n,o){return X(n,o),a=>$t(n(a))}u(bo,"convertQueuingStrategySize");function mo(n,o){ie(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:yo(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:go(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:_o(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:So(S,n,`${o} has member 'write' that`),type:_}}u(mo,"convertUnderlyingSink");function yo(n,o,a){return X(n,a),p=>N(n,o,[p])}u(yo,"convertUnderlyingSinkAbortCallback");function go(n,o,a){return X(n,a),()=>N(n,o,[])}u(go,"convertUnderlyingSinkCloseCallback");function _o(n,o,a){return X(n,a),p=>$(n,o,[p])}u(_o,"convertUnderlyingSinkStartCallback");function So(n,o,a){return X(n,a),(p,g)=>N(n,o,[p,g])}u(So,"convertUnderlyingSinkWriteCallback");function nn(n,o){if(!ze(n))throw new TypeError(`${o} is not a WritableStream.`)}u(nn,"assertWritableStream");function wo(n){if(typeof n!="object"||n===null)return  false;try{return typeof n.aborted=="boolean"}catch{return  false}}u(wo,"isAbortSignal");const Ro=typeof AbortController=="function";function To(){if(Ro)return new AbortController}u(To,"createAbortController");class we{static{u(this,"WritableStream");}constructor(o={},a={}){o===void 0?o=null:Er(o,"First parameter");const p=pt(a,"Second parameter"),g=mo(o,"First parameter");if(an(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=ht(p),C=Ze(p,1);jo(this,g,C,S);}get locked(){if(!ze(this))throw _t("locked");return je(this)}abort(o=void 0){return ze(this)?je(this)?T(new TypeError("Cannot abort a stream that already has a writer")):bt(this,o):T(_t("abort"))}close(){return ze(this)?je(this)?T(new TypeError("Cannot close a stream that already has a writer")):ae(this)?T(new TypeError("Cannot close an already-closing stream")):sn(this):T(_t("close"))}getWriter(){if(!ze(this))throw _t("getWriter");return on(this)}}Object.defineProperties(we.prototype,{abort:{enumerable:true},close:{enumerable:true},getWriter:{enumerable:true},locked:{enumerable:true}}),w(we.prototype.abort,"abort"),w(we.prototype.close,"close"),w(we.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:true});function on(n){return new de(n)}u(on,"AcquireWritableStreamDefaultWriter");function Co(n,o,a,p,g=1,_=()=>1){const S=Object.create(we.prototype);an(S);const C=Object.create(Le.prototype);return hn(S,C,n,o,a,p,g,_),S}u(Co,"CreateWritableStream");function an(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=false;}u(an,"InitializeWritableStream");function ze(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?false:n instanceof we}u(ze,"IsWritableStream");function je(n){return n._writer!==void 0}u(je,"IsWritableStreamLocked");function bt(n,o){var a;if(n._state==="closed"||n._state==="errored")return W(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return W(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=false;p==="erroring"&&(g=true,o=void 0);const _=z((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||or(n,o),_}u(bt,"WritableStreamAbort");function sn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=z((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&dr(p),Lo(n._writableStreamController),a}u(sn,"WritableStreamClose");function Po(n){return z((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u(Po,"WritableStreamAddWriteRequest");function nr(n,o){if(n._state==="writable"){or(n,o);return}ir(n);}u(nr,"WritableStreamDealWithRejection");function or(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&ln(p,o),!qo(n)&&a._started&&ir(n);}u(or,"WritableStreamStartErroring");function ir(n){n._state="errored",n._writableStreamController[wr]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){mt(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),mt(n);return}const p=n._writableStreamController[rt](a._reason);E(p,()=>(a._resolve(),mt(n),null),g=>(a._reject(g),mt(n),null));}u(ir,"WritableStreamFinishErroring");function Eo(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u(Eo,"WritableStreamFinishInFlightWrite");function vo(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,nr(n,o);}u(vo,"WritableStreamFinishInFlightWriteWithError");function Ao(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&yn(a);}u(Ao,"WritableStreamFinishInFlightClose");function Bo(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),nr(n,o);}u(Bo,"WritableStreamFinishInFlightCloseWithError");function ae(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u(ae,"WritableStreamCloseQueuedOrInFlight");function qo(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u(qo,"WritableStreamHasOperationMarkedInFlight");function Wo(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u(Wo,"WritableStreamMarkCloseRequestInFlight");function ko(n){n._inFlightWriteRequest=n._writeRequests.shift();}u(ko,"WritableStreamMarkFirstWriteRequestInFlight");function mt(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&fr(o,n._storedError);}u(mt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function ar(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?Ho(a):dr(a)),n._backpressure=o;}u(ar,"WritableStreamUpdateBackpressure");class de{static{u(this,"WritableStreamDefaultWriter");}constructor(o){if(le(o,1,"WritableStreamDefaultWriter"),nn(o,"First parameter"),je(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!ae(o)&&o._backpressure?wt(this):gn(this),St(this);else if(a==="erroring")cr(this,o._storedError),St(this);else if(a==="closed")gn(this),Uo(this);else {const p=o._storedError;cr(this,p),mn(this,p);}}get closed(){return qe(this)?this._closedPromise:T(We("closed"))}get desiredSize(){if(!qe(this))throw We("desiredSize");if(this._ownerWritableStream===void 0)throw Je("desiredSize");return zo(this)}get ready(){return qe(this)?this._readyPromise:T(We("ready"))}abort(o=void 0){return qe(this)?this._ownerWritableStream===void 0?T(Je("abort")):Oo(this,o):T(We("abort"))}close(){if(!qe(this))return T(We("close"));const o=this._ownerWritableStream;return o===void 0?T(Je("close")):ae(o)?T(new TypeError("Cannot close an already-closing stream")):un(this)}releaseLock(){if(!qe(this))throw We("releaseLock");this._ownerWritableStream!==void 0&&fn(this);}write(o=void 0){return qe(this)?this._ownerWritableStream===void 0?T(Je("write to")):cn(this,o):T(We("write"))}}Object.defineProperties(de.prototype,{abort:{enumerable:true},close:{enumerable:true},releaseLock:{enumerable:true},write:{enumerable:true},closed:{enumerable:true},desiredSize:{enumerable:true},ready:{enumerable:true}}),w(de.prototype.abort,"abort"),w(de.prototype.close,"close"),w(de.prototype.releaseLock,"releaseLock"),w(de.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:true});function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?false:n instanceof de}u(qe,"IsWritableStreamDefaultWriter");function Oo(n,o){const a=n._ownerWritableStream;return bt(a,o)}u(Oo,"WritableStreamDefaultWriterAbort");function un(n){const o=n._ownerWritableStream;return sn(o)}u(un,"WritableStreamDefaultWriterClose");function Fo(n){const o=n._ownerWritableStream,a=o._state;return ae(o)||a==="closed"?W(void 0):a==="errored"?T(o._storedError):un(n)}u(Fo,"WritableStreamDefaultWriterCloseWithErrorPropagation");function Io(n,o){n._closedPromiseState==="pending"?fr(n,o):No(n,o);}u(Io,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function ln(n,o){n._readyPromiseState==="pending"?_n(n,o):Vo(n,o);}u(ln,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function zo(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:pn(o._writableStreamController)}u(zo,"WritableStreamDefaultWriterGetDesiredSize");function fn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");ln(n,a),Io(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u(fn,"WritableStreamDefaultWriterRelease");function cn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Do(p,o);if(a!==n._ownerWritableStream)return T(Je("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(ae(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=Po(a);return $o(p,o,g),S}u(cn,"WritableStreamDefaultWriterWrite");const dn={};class Le{static{u(this,"WritableStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!sr(this))throw lr("abortReason");return this._abortReason}get signal(){if(!sr(this))throw lr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!sr(this))throw lr("error");this._controlledWritableStream._state==="writable"&&bn(this,o);}[rt](o){const a=this._abortAlgorithm(o);return yt(this),a}[wr](){_e(this);}}Object.defineProperties(Le.prototype,{abortReason:{enumerable:true},signal:{enumerable:true},error:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Le.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:true});function sr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?false:n instanceof Le}u(sr,"IsWritableStreamDefaultController");function hn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,_e(o),o._abortReason=void 0,o._abortController=To(),o._started=false,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=ur(o);ar(n,q);const P=a(),k=W(P);E(k,()=>(o._started=true,gt(o),null),O=>(o._started=true,nr(n,O),null));}u(hn,"SetUpWritableStreamDefaultController");function jo(n,o,a,p){const g=Object.create(Le.prototype);let _,S,C,q;o.start!==void 0?_=u(()=>o.start(g),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.write!==void 0?S=u(P=>o.write(P,g),"writeAlgorithm"):S=u(()=>W(void 0),"writeAlgorithm"),o.close!==void 0?C=u(()=>o.close(),"closeAlgorithm"):C=u(()=>W(void 0),"closeAlgorithm"),o.abort!==void 0?q=u(P=>o.abort(P),"abortAlgorithm"):q=u(()=>W(void 0),"abortAlgorithm"),hn(n,g,_,S,C,q,a,p);}u(jo,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function yt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(yt,"WritableStreamDefaultControllerClearAlgorithms");function Lo(n){Gt(n,dn,0),gt(n);}u(Lo,"WritableStreamDefaultControllerClose");function Do(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return Ke(n,a),1}}u(Do,"WritableStreamDefaultControllerGetChunkSize");function pn(n){return n._strategyHWM-n._queueTotalSize}u(pn,"WritableStreamDefaultControllerGetDesiredSize");function $o(n,o,a){try{Gt(n,o,a);}catch(g){Ke(n,g);return}const p=n._controlledWritableStream;if(!ae(p)&&p._state==="writable"){const g=ur(n);ar(p,g);}gt(n);}u($o,"WritableStreamDefaultControllerWrite");function gt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){ir(o);return}if(n._queue.length===0)return;const p=Xn(n);p===dn?Mo(n):xo(n,p);}u(gt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function Ke(n,o){n._controlledWritableStream._state==="writable"&&bn(n,o);}u(Ke,"WritableStreamDefaultControllerErrorIfNeeded");function Mo(n){const o=n._controlledWritableStream;Wo(o),Yt(n);const a=n._closeAlgorithm();yt(n),E(a,()=>(Ao(o),null),p=>(Bo(o,p),null));}u(Mo,"WritableStreamDefaultControllerProcessClose");function xo(n,o){const a=n._controlledWritableStream;ko(a);const p=n._writeAlgorithm(o);E(p,()=>{Eo(a);const g=a._state;if(Yt(n),!ae(a)&&g==="writable"){const _=ur(n);ar(a,_);}return gt(n),null},g=>(a._state==="writable"&&yt(n),vo(a,g),null));}u(xo,"WritableStreamDefaultControllerProcessWrite");function ur(n){return pn(n)<=0}u(ur,"WritableStreamDefaultControllerGetBackpressure");function bn(n,o){const a=n._controlledWritableStream;yt(n),or(a,o);}u(bn,"WritableStreamDefaultControllerError");function _t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u(_t,"streamBrandCheckException$2");function lr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u(lr,"defaultControllerBrandCheckException$2");function We(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u(We,"defaultWriterBrandCheckException");function Je(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u(Je,"defaultWriterLockException");function St(n){n._closedPromise=z((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u(St,"defaultWriterClosedPromiseInitialize");function mn(n,o){St(n),fr(n,o);}u(mn,"defaultWriterClosedPromiseInitializeAsRejected");function Uo(n){St(n),yn(n);}u(Uo,"defaultWriterClosedPromiseInitializeAsResolved");function fr(n,o){n._closedPromise_reject!==void 0&&(K(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u(fr,"defaultWriterClosedPromiseReject");function No(n,o){mn(n,o);}u(No,"defaultWriterClosedPromiseResetToRejected");function yn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u(yn,"defaultWriterClosedPromiseResolve");function wt(n){n._readyPromise=z((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u(wt,"defaultWriterReadyPromiseInitialize");function cr(n,o){wt(n),_n(n,o);}u(cr,"defaultWriterReadyPromiseInitializeAsRejected");function gn(n){wt(n),dr(n);}u(gn,"defaultWriterReadyPromiseInitializeAsResolved");function _n(n,o){n._readyPromise_reject!==void 0&&(K(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u(_n,"defaultWriterReadyPromiseReject");function Ho(n){wt(n);}u(Ho,"defaultWriterReadyPromiseReset");function Vo(n,o){cr(n,o);}u(Vo,"defaultWriterReadyPromiseResetToRejected");function dr(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u(dr,"defaultWriterReadyPromiseResolve");function Qo(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u(Qo,"getGlobals");const hr=Qo();function Yo(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return  false;try{return new n,!0}catch{return  false}}u(Yo,"isDOMExceptionConstructor");function Go(){const n=hr?.DOMException;return Yo(n)?n:void 0}u(Go,"getFromGlobal");function Zo(){const n=u(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:true,configurable:true}),n}u(Zo,"createPolyfill");const Ko=Go()||Zo();function Sn(n,o,a,p,g,_){const S=Fe(n),C=on(o);n._disturbed=true;let q=false,P=W(void 0);return z((k,O)=>{let j;if(_!==void 0){if(j=u(()=>{const v=_.reason!==void 0?_.reason:new Ko("Aborted","AbortError"),I=[];p||I.push(()=>o._state==="writable"?bt(o,v):W(void 0)),g||I.push(()=>n._state==="readable"?ne(n,v):W(void 0)),G(()=>Promise.all(I.map(L=>L())),true,v);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function oe(){return z((v,I)=>{function L(J){J?v():D(xe(),L,I);}u(L,"next"),L(false);})}u(oe,"pipeLoop");function xe(){return q?W(true):D(C._readyPromise,()=>z((v,I)=>{Ve(S,{_chunkSteps:u(L=>{P=D(cn(C,L),void 0,y),v(false);},"_chunkSteps"),_closeSteps:u(()=>v(true),"_closeSteps"),_errorSteps:I});}))}if(u(xe,"pipeStep"),pe(n,S._closedPromise,v=>(p?te(true,v):G(()=>bt(o,v),true,v),null)),pe(o,C._closedPromise,v=>(g?te(true,v):G(()=>ne(n,v),true,v),null)),Y(n,S._closedPromise,()=>(a?te():G(()=>Fo(C)),null)),ae(o)||o._state==="closed"){const v=new TypeError("the destination writable stream closed before all data could be piped to it");g?te(true,v):G(()=>ne(n,v),true,v);}K(oe());function Pe(){const v=P;return D(P,()=>v!==P?Pe():void 0)}u(Pe,"waitForWritesToFinish");function pe(v,I,L){v._state==="errored"?L(v._storedError):M(I,L);}u(pe,"isOrBecomesErrored");function Y(v,I,L){v._state==="closed"?L():Z(I,L);}u(Y,"isOrBecomesClosed");function G(v,I,L){if(q)return;q=true,o._state==="writable"&&!ae(o)?Z(Pe(),J):J();function J(){return E(v(),()=>be(I,L),Ue=>be(true,Ue)),null}u(J,"doTheRest");}u(G,"shutdownWithAction");function te(v,I){q||(q=true,o._state==="writable"&&!ae(o)?Z(Pe(),()=>be(v,I)):be(v,I));}u(te,"shutdown");function be(v,I){return fn(C),ue(S),_!==void 0&&_.removeEventListener("abort",j),v?O(I):k(void 0),null}u(be,"finalize");})}u(Sn,"ReadableStreamPipeTo");class he{static{u(this,"ReadableStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Rt(this))throw Ct("desiredSize");return pr(this)}close(){if(!Rt(this))throw Ct("close");if(!$e(this))throw new TypeError("The stream is not in a state that permits close");ke(this);}enqueue(o=void 0){if(!Rt(this))throw Ct("enqueue");if(!$e(this))throw new TypeError("The stream is not in a state that permits enqueue");return De(this,o)}error(o=void 0){if(!Rt(this))throw Ct("error");re(this,o);}[Ot](o){_e(this);const a=this._cancelAlgorithm(o);return Tt(this),a}[Ft](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=Yt(this);this._closeRequested&&this._queue.length===0?(Tt(this),tt(a)):Xe(this),o._chunkSteps(p);}else Ar(a,o),Xe(this);}[It](){}}Object.defineProperties(he.prototype,{close:{enumerable:true},enqueue:{enumerable:true},error:{enumerable:true},desiredSize:{enumerable:true}}),w(he.prototype.close,"close"),w(he.prototype.enqueue,"enqueue"),w(he.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:true});function Rt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?false:n instanceof he}u(Rt,"IsReadableStreamDefaultController");function Xe(n){if(!wn(n))return;if(n._pulling){n._pullAgain=true;return}n._pulling=true;const a=n._pullAlgorithm();E(a,()=>(n._pulling=false,n._pullAgain&&(n._pullAgain=false,Xe(n)),null),p=>(re(n,p),null));}u(Xe,"ReadableStreamDefaultControllerCallPullIfNeeded");function wn(n){const o=n._controlledReadableStream;return !$e(n)||!n._started?false:!!(Te(o)&&ot(o)>0||pr(n)>0)}u(wn,"ReadableStreamDefaultControllerShouldCallPull");function Tt(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(Tt,"ReadableStreamDefaultControllerClearAlgorithms");function ke(n){if(!$e(n))return;const o=n._controlledReadableStream;n._closeRequested=true,n._queue.length===0&&(Tt(n),tt(o));}u(ke,"ReadableStreamDefaultControllerClose");function De(n,o){if(!$e(n))return;const a=n._controlledReadableStream;if(Te(a)&&ot(a)>0)Ut(a,o,false);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw re(n,g),g}try{Gt(n,o,p);}catch(g){throw re(n,g),g}}Xe(n);}u(De,"ReadableStreamDefaultControllerEnqueue");function re(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(_e(n),Tt(n),Pn(a,o));}u(re,"ReadableStreamDefaultControllerError");function pr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(pr,"ReadableStreamDefaultControllerGetDesiredSize");function Jo(n){return !wn(n)}u(Jo,"ReadableStreamDefaultControllerHasBackpressure");function $e(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u($e,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function Rn(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,_e(o),o._started=false,o._closeRequested=false,o._pullAgain=false,o._pulling=false,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(W(C),()=>(o._started=true,Xe(o),null),q=>(re(o,q),null));}u(Rn,"SetUpReadableStreamDefaultController");function Xo(n,o,a,p){const g=Object.create(he.prototype);let _,S,C;o.start!==void 0?_=u(()=>o.start(g),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.pull!==void 0?S=u(()=>o.pull(g),"pullAlgorithm"):S=u(()=>W(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u(q=>o.cancel(q),"cancelAlgorithm"):C=u(()=>W(void 0),"cancelAlgorithm"),Rn(n,g,_,S,C,a,p);}u(Xo,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Ct(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u(Ct,"defaultControllerBrandCheckException$1");function ei(n,o){return ve(n._readableStreamController)?ri(n):ti(n)}u(ei,"ReadableStreamTee");function ti(n,o){const a=Fe(n);let p=false,g=false,_=false,S=false,C,q,P,k,O;const j=z(Y=>{O=Y;});function oe(){return p?(g=true,W(void 0)):(p=true,Ve(a,{_chunkSteps:u(G=>{se(()=>{g=false;const te=G,be=G;_||De(P._readableStreamController,te),S||De(k._readableStreamController,be),p=false,g&&oe();});},"_chunkSteps"),_closeSteps:u(()=>{p=false,_||ke(P._readableStreamController),S||ke(k._readableStreamController),(!_||!S)&&O(void 0);},"_closeSteps"),_errorSteps:u(()=>{p=false;},"_errorSteps")}),W(void 0))}u(oe,"pullAlgorithm");function xe(Y){if(_=true,C=Y,S){const G=Qe([C,q]),te=ne(n,G);O(te);}return j}u(xe,"cancel1Algorithm");function Pe(Y){if(S=true,q=Y,_){const G=Qe([C,q]),te=ne(n,G);O(te);}return j}u(Pe,"cancel2Algorithm");function pe(){}return u(pe,"startAlgorithm"),P=et(pe,oe,xe),k=et(pe,oe,Pe),M(a._closedPromise,Y=>(re(P._readableStreamController,Y),re(k._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,k]}u(ti,"ReadableStreamDefaultTee");function ri(n){let o=Fe(n),a=false,p=false,g=false,_=false,S=false,C,q,P,k,O;const j=z(v=>{O=v;});function oe(v){M(v._closedPromise,I=>(v!==o||(ee(P._readableStreamController,I),ee(k._readableStreamController,I),(!_||!S)&&O(void 0)),null));}u(oe,"forwardReaderError");function xe(){Be(o)&&(ue(o),o=Fe(n),oe(o)),Ve(o,{_chunkSteps:u(I=>{se(()=>{p=false,g=false;const L=I;let J=I;if(!_&&!S)try{J=Dr(I);}catch(Ue){ee(P._readableStreamController,Ue),ee(k._readableStreamController,Ue),O(ne(n,Ue));return}_||lt(P._readableStreamController,L),S||lt(k._readableStreamController,J),a=false,p?pe():g&&Y();});},"_chunkSteps"),_closeSteps:u(()=>{a=false,_||Ye(P._readableStreamController),S||Ye(k._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&ft(P._readableStreamController,0),k._readableStreamController._pendingPullIntos.length>0&&ft(k._readableStreamController,0),(!_||!S)&&O(void 0);},"_closeSteps"),_errorSteps:u(()=>{a=false;},"_errorSteps")});}u(xe,"pullWithDefaultReader");function Pe(v,I){ye(o)&&(ue(o),o=Jr(n),oe(o));const L=I?k:P,J=I?P:k;tn(o,v,1,{_chunkSteps:u(Ne=>{se(()=>{p=false,g=false;const He=I?S:_;if(I?_:S)He||ct(L._readableStreamController,Ne);else {let Ln;try{Ln=Dr(Ne);}catch(_r){ee(L._readableStreamController,_r),ee(J._readableStreamController,_r),O(ne(n,_r));return}He||ct(L._readableStreamController,Ne),lt(J._readableStreamController,Ln);}a=false,p?pe():g&&Y();});},"_chunkSteps"),_closeSteps:u(Ne=>{a=false;const He=I?S:_,kt=I?_:S;He||Ye(L._readableStreamController),kt||Ye(J._readableStreamController),Ne!==void 0&&(He||ct(L._readableStreamController,Ne),!kt&&J._readableStreamController._pendingPullIntos.length>0&&ft(J._readableStreamController,0)),(!He||!kt)&&O(void 0);},"_closeSteps"),_errorSteps:u(()=>{a=false;},"_errorSteps")});}u(Pe,"pullWithBYOBReader");function pe(){if(a)return p=true,W(void 0);a=true;const v=er(P._readableStreamController);return v===null?xe():Pe(v._view,false),W(void 0)}u(pe,"pull1Algorithm");function Y(){if(a)return g=true,W(void 0);a=true;const v=er(k._readableStreamController);return v===null?xe():Pe(v._view,true),W(void 0)}u(Y,"pull2Algorithm");function G(v){if(_=true,C=v,S){const I=Qe([C,q]),L=ne(n,I);O(L);}return j}u(G,"cancel1Algorithm");function te(v){if(S=true,q=v,_){const I=Qe([C,q]),L=ne(n,I);O(L);}return j}u(te,"cancel2Algorithm");function be(){}return u(be,"startAlgorithm"),P=Cn(be,pe,G),k=Cn(be,Y,te),oe(o),[P,k]}u(ri,"ReadableByteStreamTee");function ni(n){return b(n)&&typeof n.getReader<"u"}u(ni,"isReadableStreamLike");function oi(n){return ni(n)?ai(n.getReader()):ii(n)}u(oi,"ReadableStreamFrom");function ii(n){let o;const a=Lr(n,"async"),p=y;function g(){let S;try{S=Gn(a);}catch(q){return T(q)}const C=W(S);return U(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(Zn(q))ke(o._readableStreamController);else {const k=Kn(q);De(o._readableStreamController,k);}})}u(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=at(C,"return");}catch(O){return T(O)}if(q===void 0)return W(void 0);let P;try{P=$(q,C,[S]);}catch(O){return T(O)}const k=W(P);return U(k,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u(_,"cancelAlgorithm"),o=et(p,g,_,0),o}u(ii,"ReadableStreamFromIterable");function ai(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return U(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)ke(o._readableStreamController);else {const C=S.value;De(o._readableStreamController,C);}})}u(p,"pullAlgorithm");function g(_){try{return W(n.cancel(_))}catch(S){return T(S)}}return u(g,"cancelAlgorithm"),o=et(a,p,g,0),o}u(ai,"ReadableStreamFromDefaultReader");function si(n,o){ie(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:Mt(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:ui(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:li(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:fi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:ci(C,`${o} has member 'type' that`)}}u(si,"convertUnderlyingDefaultOrByteSource");function ui(n,o,a){return X(n,a),p=>N(n,o,[p])}u(ui,"convertUnderlyingSourceCancelCallback");function li(n,o,a){return X(n,a),p=>N(n,o,[p])}u(li,"convertUnderlyingSourcePullCallback");function fi(n,o,a){return X(n,a),p=>$(n,o,[p])}u(fi,"convertUnderlyingSourceStartCallback");function ci(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u(ci,"convertReadableStreamType");function di(n,o){return ie(n,o),{preventCancel:!!n?.preventCancel}}u(di,"convertIteratorOptions");function Tn(n,o){ie(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&hi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u(Tn,"convertPipeOptions");function hi(n,o){if(!wo(n))throw new TypeError(`${o} is not an AbortSignal.`)}u(hi,"assertAbortSignal");function pi(n,o){ie(n,o);const a=n?.readable;Dt(a,"readable","ReadableWritablePair"),xt(a,`${o} has member 'readable' that`);const p=n?.writable;return Dt(p,"writable","ReadableWritablePair"),nn(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u(pi,"convertReadableWritablePair");class H{static{u(this,"ReadableStream");}constructor(o={},a={}){o===void 0?o=null:Er(o,"First parameter");const p=pt(a,"Second parameter"),g=si(o,"First parameter");if(br(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=Ze(p,0);so(this,g,_);}else {const _=ht(p),S=Ze(p,1);Xo(this,g,S,_);}}get locked(){if(!Re(this))throw Oe("locked");return Te(this)}cancel(o=void 0){return Re(this)?Te(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):ne(this,o):T(Oe("cancel"))}getReader(o=void 0){if(!Re(this))throw Oe("getReader");return lo(o,"First parameter").mode===void 0?Fe(this):Jr(this)}pipeThrough(o,a={}){if(!Re(this))throw Oe("pipeThrough");le(o,1,"pipeThrough");const p=pi(o,"First parameter"),g=Tn(a,"Second parameter");if(Te(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(je(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=Sn(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return K(_),p.readable}pipeTo(o,a={}){if(!Re(this))return T(Oe("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!ze(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=Tn(a,"Second parameter");}catch(g){return T(g)}return Te(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):je(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Sn(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!Re(this))throw Oe("tee");const o=ei(this);return Qe(o)}values(o=void 0){if(!Re(this))throw Oe("values");const a=di(o,"First parameter");return Qn(this,a.preventCancel)}[Qt](o){return this.values(o)}static from(o){return oi(o)}}Object.defineProperties(H,{from:{enumerable:true}}),Object.defineProperties(H.prototype,{cancel:{enumerable:true},getReader:{enumerable:true},pipeThrough:{enumerable:true},pipeTo:{enumerable:true},tee:{enumerable:true},values:{enumerable:true},locked:{enumerable:true}}),w(H.from,"from"),w(H.prototype.cancel,"cancel"),w(H.prototype.getReader,"getReader"),w(H.prototype.pipeThrough,"pipeThrough"),w(H.prototype.pipeTo,"pipeTo"),w(H.prototype.tee,"tee"),w(H.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(H.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:true}),Object.defineProperty(H.prototype,Qt,{value:H.prototype.values,writable:true,configurable:true});function et(n,o,a,p=1,g=()=>1){const _=Object.create(H.prototype);br(_);const S=Object.create(he.prototype);return Rn(_,S,n,o,a,p,g),_}u(et,"CreateReadableStream");function Cn(n,o,a){const p=Object.create(H.prototype);br(p);const g=Object.create(ce.prototype);return Kr(p,g,n,o,a,0,void 0),p}u(Cn,"CreateReadableByteStream");function br(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=false;}u(br,"InitializeReadableStream");function Re(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?false:n instanceof H}u(Re,"IsReadableStream");function Te(n){return n._reader!==void 0}u(Te,"IsReadableStreamLocked");function ne(n,o){if(n._disturbed=true,n._state==="closed")return W(void 0);if(n._state==="errored")return T(n._storedError);tt(n);const a=n._reader;if(a!==void 0&&Be(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[Ot](o);return U(p,y)}u(ne,"ReadableStreamCancel");function tt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(Cr(o),ye(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u(tt,"ReadableStreamClose");function Pn(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(Lt(a,o),ye(a)?qr(a,o):rn(a,o));}u(Pn,"ReadableStreamError");function Oe(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u(Oe,"streamBrandCheckException$1");function En(n,o){ie(n,o);const a=n?.highWaterMark;return Dt(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:$t(a)}}u(En,"convertQueuingStrategyInit");const vn=u(n=>n.byteLength,"byteLengthSizeFunction");w(vn,"size");class Pt{static{u(this,"ByteLengthQueuingStrategy");}constructor(o){le(o,1,"ByteLengthQueuingStrategy"),o=En(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!Bn(this))throw An("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!Bn(this))throw An("size");return vn}}Object.defineProperties(Pt.prototype,{highWaterMark:{enumerable:true},size:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Pt.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:true});function An(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u(An,"byteLengthBrandCheckException");function Bn(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?false:n instanceof Pt}u(Bn,"IsByteLengthQueuingStrategy");const qn=u(()=>1,"countSizeFunction");w(qn,"size");class Et{static{u(this,"CountQueuingStrategy");}constructor(o){le(o,1,"CountQueuingStrategy"),o=En(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!kn(this))throw Wn("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!kn(this))throw Wn("size");return qn}}Object.defineProperties(Et.prototype,{highWaterMark:{enumerable:true},size:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Et.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:true});function Wn(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u(Wn,"countBrandCheckException");function kn(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?false:n instanceof Et}u(kn,"IsCountQueuingStrategy");function bi(n,o){ie(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:_i(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:mi(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:yi(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:gi(S,n,`${o} has member 'transform' that`),writableType:C}}u(bi,"convertTransformer");function mi(n,o,a){return X(n,a),p=>N(n,o,[p])}u(mi,"convertTransformerFlushCallback");function yi(n,o,a){return X(n,a),p=>$(n,o,[p])}u(yi,"convertTransformerStartCallback");function gi(n,o,a){return X(n,a),(p,g)=>N(n,o,[p,g])}u(gi,"convertTransformerTransformCallback");function _i(n,o,a){return X(n,a),p=>N(n,o,[p])}u(_i,"convertTransformerCancelCallback");class vt{static{u(this,"TransformStream");}constructor(o={},a={},p={}){o===void 0&&(o=null);const g=pt(a,"Second parameter"),_=pt(p,"Third parameter"),S=bi(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=Ze(_,0),q=ht(_),P=Ze(g,1),k=ht(g);let O;const j=z(oe=>{O=oe;});Si(this,j,P,k,C,q),Ri(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!On(this))throw jn("readable");return this._readable}get writable(){if(!On(this))throw jn("writable");return this._writable}}Object.defineProperties(vt.prototype,{readable:{enumerable:true},writable:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(vt.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:true});function Si(n,o,a,p,g,_){function S(){return o}u(S,"startAlgorithm");function C(j){return Pi(n,j)}u(C,"writeAlgorithm");function q(j){return Ei(n,j)}u(q,"abortAlgorithm");function P(){return vi(n)}u(P,"closeAlgorithm"),n._writable=Co(S,C,P,q,a,p);function k(){return Ai(n)}u(k,"pullAlgorithm");function O(j){return Bi(n,j)}u(O,"cancelAlgorithm"),n._readable=et(S,k,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,At(n,true),n._transformStreamController=void 0;}u(Si,"InitializeTransformStream");function On(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?false:n instanceof vt}u(On,"IsTransformStream");function Fn(n,o){re(n._readable._readableStreamController,o),mr(n,o);}u(Fn,"TransformStreamError");function mr(n,o){qt(n._transformStreamController),Ke(n._writable._writableStreamController,o),yr(n);}u(mr,"TransformStreamErrorWritableAndUnblockWrite");function yr(n){n._backpressure&&At(n,false);}u(yr,"TransformStreamUnblockWrite");function At(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=z(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u(At,"TransformStreamSetBackpressure");class Ce{static{u(this,"TransformStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Bt(this))throw Wt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return pr(o)}enqueue(o=void 0){if(!Bt(this))throw Wt("enqueue");In(this,o);}error(o=void 0){if(!Bt(this))throw Wt("error");Ti(this,o);}terminate(){if(!Bt(this))throw Wt("terminate");Ci(this);}}Object.defineProperties(Ce.prototype,{enqueue:{enumerable:true},error:{enumerable:true},terminate:{enumerable:true},desiredSize:{enumerable:true}}),w(Ce.prototype.enqueue,"enqueue"),w(Ce.prototype.error,"error"),w(Ce.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ce.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:true});function Bt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?false:n instanceof Ce}u(Bt,"IsTransformStreamDefaultController");function wi(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u(wi,"SetUpTransformStreamDefaultController");function Ri(n,o){const a=Object.create(Ce.prototype);let p,g,_;o.transform!==void 0?p=u(S=>o.transform(S,a),"transformAlgorithm"):p=u(S=>{try{return In(a,S),W(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u(()=>o.flush(a),"flushAlgorithm"):g=u(()=>W(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u(S=>o.cancel(S),"cancelAlgorithm"):_=u(()=>W(void 0),"cancelAlgorithm"),wi(n,a,p,g,_);}u(Ri,"SetUpTransformStreamDefaultControllerFromTransformer");function qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(qt,"TransformStreamDefaultControllerClearAlgorithms");function In(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!$e(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{De(p,o);}catch(_){throw mr(a,_),a._readable._storedError}Jo(p)!==a._backpressure&&At(a,true);}u(In,"TransformStreamDefaultControllerEnqueue");function Ti(n,o){Fn(n._controlledTransformStream,o);}u(Ti,"TransformStreamDefaultControllerError");function zn(n,o){const a=n._transformAlgorithm(o);return U(a,void 0,p=>{throw Fn(n._controlledTransformStream,p),p})}u(zn,"TransformStreamDefaultControllerPerformTransform");function Ci(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;ke(a);const p=new TypeError("TransformStream terminated");mr(o,p);}u(Ci,"TransformStreamDefaultControllerTerminate");function Pi(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return U(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return zn(a,o)})}return zn(a,o)}u(Pi,"TransformStreamDefaultSinkWriteAlgorithm");function Ei(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=z((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return qt(a),E(g,()=>(p._state==="errored"?Me(a,p._storedError):(re(p._readableStreamController,o),gr(a)),null),_=>(re(p._readableStreamController,_),Me(a,_),null)),a._finishPromise}u(Ei,"TransformStreamDefaultSinkAbortAlgorithm");function vi(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=z((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return qt(o),E(p,()=>(a._state==="errored"?Me(o,a._storedError):(ke(a._readableStreamController),gr(o)),null),g=>(re(a._readableStreamController,g),Me(o,g),null)),o._finishPromise}u(vi,"TransformStreamDefaultSinkCloseAlgorithm");function Ai(n){return At(n,false),n._backpressureChangePromise}u(Ai,"TransformStreamDefaultSourcePullAlgorithm");function Bi(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=z((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return qt(a),E(g,()=>(p._state==="errored"?Me(a,p._storedError):(Ke(p._writableStreamController,o),yr(n),gr(a)),null),_=>(Ke(p._writableStreamController,_),yr(n),Me(a,_),null)),a._finishPromise}u(Bi,"TransformStreamDefaultSourceCancelAlgorithm");function Wt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u(Wt,"defaultControllerBrandCheckException");function gr(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(gr,"defaultControllerFinishPromiseResolve");function Me(n,o){n._finishPromise_reject!==void 0&&(K(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Me,"defaultControllerFinishPromiseReject");function jn(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u(jn,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Pt,d.CountQueuingStrategy=Et,d.ReadableByteStreamController=ce,d.ReadableStream=H,d.ReadableStreamBYOBReader=Se,d.ReadableStreamBYOBRequest=Ee,d.ReadableStreamDefaultController=he,d.ReadableStreamDefaultReader=me,d.TransformStream=vt,d.TransformStreamDefaultController=Ce,d.WritableStream=we,d.WritableStreamDefaultController=Le,d.WritableStreamDefaultWriter=de;});}(ponyfill_es2018$1,ponyfill_es2018$1.exports)),ponyfill_es2018$1.exports}u(requirePonyfill_es2018,"requirePonyfill_es2018");var hasRequiredStreams;function requireStreams(){if(hasRequiredStreams)return streams;hasRequiredStreams=1;const c=65536;if(!globalThis.ReadableStream)try{const l=require("node:process"),{emitWarning:d}=l;try{l.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),l.emitWarning=d;}catch(y){throw l.emitWarning=d,y}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:l}=require("buffer");l&&!l.prototype.stream&&(l.prototype.stream=u(function(y){let b=0;const R=this;return new ReadableStream({type:"bytes",async pull(w){const F=await R.slice(b,Math.min(R.size,b+c)).arrayBuffer();b+=F.byteLength,w.enqueue(new Uint8Array(F)),b===R.size&&w.close();}})},"name"));}catch{}return streams}u(requireStreams,"requireStreams"),requireStreams();/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=true){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u(toIterator,"toIterator");const _Blob=class Sr{static{u(this,"Blob");}#e=[];#t="";#r=0;#n="transparent";constructor(l=[],d={}){if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Sr?w=R:w=y.encode(`${R}`),this.#r+=ArrayBuffer.isView(w)?w.byteLength:w.size,this.#e.push(w);}this.#n=`${d.endings===void 0?"transparent":d.endings}`;const b=d.type===void 0?"":String(d.type);this.#t=/^[\x20-\x7E]*$/.test(b)?b:"";}get size(){return this.#r}get type(){return this.#t}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(this.#e,false))d+=l.decode(y,{stream:true});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(this.#e,false))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(this.#e,true);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const A=Math.max(w-R,0),F=this.#e,B=[];let z=0;for(const T of F){if(z>=A)break;const D=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&D<=R)R-=D,w-=D;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min(D,w)),z+=E.byteLength):(E=T.slice(R,Math.min(D,w)),z+=E.size),w-=D,B.push(E),R=0;}}const W=new Sr([],{type:String(y).toLowerCase()});return W.#r=A,W.#e=B,W}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}};Object.defineProperties(_Blob.prototype,{size:{enumerable:true},type:{enumerable:true},slice:{enumerable:true}});const Blob=_Blob,_File=class extends Blob{static{u(this,"File");}#e=0;#t="";constructor(l,d,y={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(l,y),y===null&&(y={});const b=y.lastModified===void 0?Date.now():Number(y.lastModified);Number.isNaN(b)||(this.#e=b),this.#t=String(d);}get name(){return this.#t}get lastModified(){return this.#e}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](l){return !!l&&l instanceof Blob&&/^(File)$/.test(l[Symbol.toStringTag])}},File$1=_File;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$2,hasInstance:h}=Symbol,r=Math.random,m="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$1=u((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1([l],d,l):l]:[c,l+""]),"f"),e$1=u((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$4=u((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=class FormData{static{u(this,"FormData");}#e=[];constructor(...l){if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$2](){return this.entries()}static[h](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m.some(d=>typeof l[d]!="function")}append(...l){x$4("append",arguments,2),this.#e.push(f$1(...l));}delete(l){x$4("delete",arguments,1),l+="",this.#e=this.#e.filter(([d])=>d!==l);}get(l){x$4("get",arguments,1),l+="";for(var d=this.#e,y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$4("getAll",arguments,1),d=[],l+="",this.#e.forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$4("has",arguments,1),l+="",this.#e.some(d=>d[0]===l)}forEach(l,d){x$4("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$4("set",arguments,2);var d=[],y=true;l=f$1(...l),this.#e.forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),this.#e=d;}*entries(){yield*this.#e;}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}};function formDataToBlob(c,l=Blob){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1(w)+`"; filename="${e$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u(formDataToBlob,"formDataToBlob");class FetchBaseError extends Error{static{u(this,"FetchBaseError");}constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}}let FetchError$1 = class FetchError extends FetchBaseError{static{u(this,"FetchError");}constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};const NAME=Symbol.toStringTag,isURLSearchParameters=u(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0$1.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals");class Body{static{u(this,"Body");}constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$0.Buffer.from(l.toString()):isBlob(l)||require$$0.Buffer.isBuffer(l)||(require$$0$1.types.isAnyArrayBuffer(l)?l=require$$0.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$0.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$0.Buffer.from(String(l))));let b=l;require$$0.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:false,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('../_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new Blob([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}}Body.prototype.buffer=require$$0$1.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:true},bodyUsed:{enumerable:true},arrayBuffer:{enumerable:true},blob:{enumerable:true},json:{enumerable:true},text:{enumerable:true},data:{get:require$$0$1.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=true,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$0.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===true||l._readableState.ended===true)try{return d.every(b=>typeof b=="string")?require$$0.Buffer.from(d.join("")):require$$0.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u(consumeBody,"consumeBody");const clone$1=u((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0$1.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$0.Buffer.isBuffer(c)||require$$0$1.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$0.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}};let Headers$2 = class Headers extends URLSearchParams{static{u(this,"Headers");}constructor(l){let d=[];if(l instanceof Headers){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0$1.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0$1.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case "append":case "set":return (w,A)=>(validateHeaderName(w),validateHeaderValue(w,String(A)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(A)));case "delete":case "has":case "getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case "keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:true},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return  false}}))}u(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals");let Response$1 = class Response extends Body{static{u(this,"Response");}constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new Response(clone$1(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new Response(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new Response(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new Response(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};Object.defineProperties(Response$1.prototype,{type:{enumerable:true},url:{enumerable:true},status:{enumerable:true},ok:{enumerable:true},redirected:{enumerable:true},statusText:{enumerable:true},headers:{enumerable:true},clone:{enumerable:true}});const getSearch=u(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=false){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return  true;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$0$2.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?true:c.host==="localhost"||c.host.endsWith(".localhost")?false:c.protocol==="file:"}u(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?true:isOriginPotentiallyTrustworthy(c)}u(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,true);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const A=new URL(c.url);switch(y){case "no-referrer":return "no-referrer";case "origin":return w;case "unsafe-url":return R;case "strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":w.toString();case "strict-origin-when-cross-origin":return R.origin===A.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":w;case "same-origin":return R.origin===A.origin?R:"no-referrer";case "origin-when-cross-origin":return R.origin===A.origin?R:w;case "no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0$1.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)");let Request$1 = class Request extends Body{static{u(this,"Request");}constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone$1(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let A=isRequest(l)?l.signal:null;if("signal"in d&&(A=d.signal),A!=null&&!isAbortSignal(A))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let F=d.referrer==null?l.referrer:d.referrer;if(F==="")F="no-referrer";else if(F){const B=new URL(F);F=/^about:(\/\/)?client$/.test(B)?"client":B;}else F=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:A,referrer:F},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?true:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||false,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Request(this)}get[Symbol.toStringTag](){return "Request"}};Object.defineProperties(Request$1.prototype,{method:{enumerable:true},url:{enumerable:true},headers:{enumerable:true},redirect:{enumerable:true},clone:{enumerable:true},signal:{enumerable:true},referrer:{enumerable:true},referrerPolicy:{enumerable:true}});const getNodeRequestOptions=u(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const A=getTotalBytes(c);typeof A=="number"&&!Number.isNaN(A)&&(y=String(A));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions");class AbortError extends FetchBaseError{static{u(this,"AbortError");}constructor(l,d="aborted"){super(l,d);}}/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var nodeDomexception,hasRequiredNodeDomexception;function requireNodeDomexception(){if(hasRequiredNodeDomexception)return nodeDomexception;if(hasRequiredNodeDomexception=1,!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}return nodeDomexception=globalThis.DOMException,nodeDomexception}u(requireNodeDomexception,"requireNodeDomexception");var nodeDomexceptionExports=requireNodeDomexception();const DOMException$1=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexceptionExports),{stat}=node_fs.promises,blobFromSync=u((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u((c,l,d="")=>new Blob([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u((c,l,d="")=>new File$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile");class BlobDataItem{static{u(this,"BlobDataItem");}#e;#t;constructor(l){this.#e=l.path,this.#t=l.start,this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new BlobDataItem({path:this.#e,lastModified:this.lastModified,size:d-l,start:this.#t+l})}async*stream(){const{mtimeMs:l}=await stat(this.#e);if(l>this.lastModified)throw new DOMException$1("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(this.#e,{start:this.#t,end:this.#t+this.size-1});}get[Symbol.toStringTag](){return "Blob"}}const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),Z=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(Z);return}const A=(R.protocol==="https:"?https__default:http__default).request,{signal:F}=b;let B=null;const z=u(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(F&&F.aborted){z();return}const W=u(()=>{z(),D();},"abortAndFinalize"),T=A(R.toString(),w);F&&F.addEventListener("abort",W);const D=u(()=>{T.abort(),F&&F.removeEventListener("abort",W);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),D();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let Z;E.prependListener("end",()=>{Z=E._eventsCount;}),E.prependListener("close",M=>{if(B&&Z<E._eventsCount&&!M){const U=new Error("Premature close");U.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",U);}});}),T.on("response",E=>{T.setTimeout(0);const Z=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const $=Z.get("Location");let N=null;try{N=$===null?null:new URL($,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${$}`,"invalid-redirect")),D();return}}switch(b.redirect){case "error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),D();return;case "manual":break;case "follow":{if(N===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),D();return}const V={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone$1(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,N)||!isSameProtocol(b.url,N))for(const rt of ["authorization","www-authenticate","cookie","cookie2"])V.headers.delete(rt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),D();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(V.method="GET",V.body=void 0,V.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(Z);Q&&(V.referrerPolicy=Q),d(fetch$1(new Request$1(N,V))),D();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}F&&E.once("end",()=>{F.removeEventListener("abort",W);});let M=Stream.pipeline(E,new Stream.PassThrough,$=>{$&&y($);});process.version<"v12.10"&&E.on("aborted",W);const U={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:Z,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},K=Z.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||K===null||E.statusCode===204||E.statusCode===304){B=new Response$1(M,U),d(B);return}const se={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(K==="gzip"||K==="x-gzip"){M=Stream.pipeline(M,zlib__default.createGunzip(se),$=>{$&&y($);}),B=new Response$1(M,U),d(B);return}if(K==="deflate"||K==="x-deflate"){const $=Stream.pipeline(E,new Stream.PassThrough,N=>{N&&y(N);});$.once("data",N=>{(N[0]&15)===8?M=Stream.pipeline(M,zlib__default.createInflate(),V=>{V&&y(V);}):M=Stream.pipeline(M,zlib__default.createInflateRaw(),V=>{V&&y(V);}),B=new Response$1(M,U),d(B);}),$.once("end",()=>{B||(B=new Response$1(M,U),d(B));});return}if(K==="br"){M=Stream.pipeline(M,zlib__default.createBrotliDecompress(),$=>{$&&y($);}),B=new Response$1(M,U),d(B);return}B=new Response$1(M,U),d(B);}),writeToStream(T,b).catch(y);})}u(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$0.Buffer.from(`0\r
\r
`);let y=false,b=false,R;c.on("response",w=>{const{headers:A}=w;y=A["transfer-encoding"]==="chunked"&&!A["content-length"];}),c.on("socket",w=>{const A=u(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),F=u(B=>{b=require$$0.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$0.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$0.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",A),w.on("data",F),c.on("close",()=>{w.removeListener("close",A),w.removeListener("data",F);});});}u(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=true,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u(setCancelFlag,"setCancelFlag");function Event$1(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:false,stopped:false,immediateStopped:false,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:false,enumerable:true});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u(Event$1,"Event"),Event$1.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=true,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=true,c.immediateStopped=true,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=true,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=true);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event$1.prototype,"constructor",{value:Event$1,configurable:true,writable:true});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:true,enumerable:true}}u(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:true,enumerable:true}}u(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:true,writable:true}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const A=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,A?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event$1;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:false,once:false,next:null};y===null?d.set(c,R):y.next=R;}},configurable:true,enumerable:true}}u(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:true,writable:true}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,A={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let F=y.get(c);if(F===void 0){y.set(c,A);return}let B=null;for(;F!=null;){if(F.listener===l&&F.listenerType===w)return;B=F,F=F.next;}B.next=A;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,A=y.get(c);for(;A!=null;){if(A.listener===l&&A.listenerType===R){w!==null?w.next=A.next:A.next!==null?y.set(c,A.next):y.delete(c);return}w=A,A=A.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return  true;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:true,writable:true});let AbortSignal$1 = class AbortSignal extends EventTarget{static{u(this,"AbortSignal");}constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};defineEventAttribute(AbortSignal$1.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal$1.prototype);return EventTarget.call(c),abortedFlags.set(c,false),c}u(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===false&&(abortedFlags.set(c,true),c.dispatchEvent({type:"abort"}));}u(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal$1.prototype,{aborted:{enumerable:true}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal$1.prototype,Symbol.toStringTag,{configurable:true,value:"AbortSignal"});let AbortController$1$1=class AbortController$1{static{u(this,"AbortController");}constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}};const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:true},abort:{enumerable:true}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:true,value:"AbortController"});var t$2=Object.defineProperty,e$2=u((c,l)=>t$2(c,"name",{value:l,configurable:true}),"e");const fetch$2=fetch$1;s$2();function s$2(){!globalThis.process?.versions?.node&&!globalThis.process?.env?.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u(s$2,"s"),e$2(s$2,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=Blob,node$1.FetchError=FetchError$1,node$1.File=File$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$1=(r,o)=>n(r,"name",{value:o,configurable:true});const node=node$1;var t=Object.defineProperty,a=i$1((r,o)=>t(r,"name",{value:o,configurable:true}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$1(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const subtle = nodeCrypto.webcrypto?.subtle || {};
const randomUUID = () => {
  return nodeCrypto.randomUUID();
};
const getRandomValues = (array) => {
  return nodeCrypto.webcrypto.getRandomValues(array);
};
const _crypto = {
  randomUUID,
  getRandomValues,
  subtle
};

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

// src/utils.ts
var alphabetByEncoding = {};
var alphabetByValue = Array.from({ length: 64 });
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["-"] = 62;
alphabetByValue[62] = "-";
alphabetByEncoding["_"] = 63;
alphabetByValue[63] = "_";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
var stringToBuffer = (value) => {
  return new TextEncoder().encode(value);
};
var bufferToString = (value) => {
  return new TextDecoder().decode(value);
};
var base64urlDecode = (_input) => {
  const input = _input + "=".repeat((4 - _input.length % 4) % 4);
  let totalByteLength = input.length / 4 * 3;
  if (input.endsWith("==")) {
    totalByteLength -= 2;
  } else if (input.endsWith("=")) {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] === "=") {
        bits >>= bitsPerLetter;
      } else {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      }
    }
    const chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};
var base64urlEncode = (_input) => {
  const input = typeof _input === "string" ? stringToBuffer(_input) : _input;
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
  }
  return str;
};

// src/index.ts
var defaults$1 = {
  encryption: { saltBits: 256, algorithm: "aes-256-cbc", iterations: 1, minPasswordlength: 32 },
  integrity: { saltBits: 256, algorithm: "sha256", iterations: 1, minPasswordlength: 32 },
  ttl: 0,
  timestampSkewSec: 60,
  localtimeOffsetMsec: 0
};
var clone = (options) => ({
  ...options,
  encryption: { ...options.encryption },
  integrity: { ...options.integrity }
});
var algorithms = {
  "aes-128-ctr": { keyBits: 128, ivBits: 128, name: "AES-CTR" },
  "aes-256-cbc": { keyBits: 256, ivBits: 128, name: "AES-CBC" },
  sha256: { keyBits: 256, name: "SHA-256" }
};
var macPrefix = "Fe26.2";
var randomBytes = (_crypto, size) => {
  const bytes = new Uint8Array(size);
  _crypto.getRandomValues(bytes);
  return bytes;
};
var randomBits = (_crypto, bits) => {
  if (bits < 1)
    throw new Error("Invalid random bits count");
  const bytes = Math.ceil(bits / 8);
  return randomBytes(_crypto, bytes);
};
var pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {
  const passwordBuffer = stringToBuffer(password);
  const importedKey = await _crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const saltBuffer = stringToBuffer(salt);
  const params = { name: "PBKDF2", hash, salt: saltBuffer, iterations };
  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
  return derivation;
};
var generateKey = async (_crypto, password, options) => {
  var _a;
  if (!(password == null ? void 0 : password.length))
    throw new Error("Empty password");
  if (options == null || typeof options !== "object")
    throw new Error("Bad options");
  if (!(options.algorithm in algorithms))
    throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  const result = {};
  const hmac = (_a = options.hmac) != null ? _a : false;
  const id = hmac ? { name: "HMAC", hash: algorithm.name } : { name: algorithm.name };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength)
      throw new Error(
        `Password string too short (min ${options.minPasswordlength} characters required)`
      );
    let { salt = "" } = options;
    if (!salt) {
      const { saltBits = 0 } = options;
      if (!saltBits)
        throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(_crypto, saltBits);
      salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(
      _crypto,
      password,
      salt,
      options.iterations,
      algorithm.keyBits / 8,
      "SHA-1"
    );
    const importedEncryptionKey = await _crypto.subtle.importKey(
      "raw",
      derivedKey,
      id,
      false,
      usage
    );
    result.key = importedEncryptionKey;
    result.salt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8)
      throw new Error("Key buffer (password) too small");
    result.key = await _crypto.subtle.importKey("raw", password, id, false, usage);
    result.salt = "";
  }
  if (options.iv)
    result.iv = options.iv;
  else if ("ivBits" in algorithm)
    result.iv = randomBits(_crypto, algorithm.ivBits);
  return result;
};
var getEncryptParams = (algorithm, key, data) => {
  return [
    algorithm === "aes-128-ctr" ? { name: "AES-CTR", counter: key.iv, length: 128 } : { name: "AES-CBC", iv: key.iv },
    key.key,
    typeof data === "string" ? stringToBuffer(data) : data
  ];
};
var encrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const encrypted = await _crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return { encrypted: new Uint8Array(encrypted), key };
};
var decrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const decrypted = await _crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return bufferToString(new Uint8Array(decrypted));
};
var hmacWithPassword = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, { ...options, hmac: true });
  const textBuffer = stringToBuffer(data);
  const signed = await _crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
  const digest = base64urlEncode(new Uint8Array(signed));
  return { digest, salt: key.salt };
};
var normalizePassword = (password) => {
  if (typeof password === "string" || password instanceof Uint8Array)
    return { encryption: password, integrity: password };
  if ("secret" in password)
    return { id: password.id, encryption: password.secret, integrity: password.secret };
  return { id: password.id, encryption: password.encryption, integrity: password.integrity };
};
var seal = async (_crypto, object, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const objectString = JSON.stringify(object);
  const pass = normalizePassword(password);
  const { id = "", encryption, integrity } = pass;
  if (id && !/^\w+$/.test(id))
    throw new Error("Invalid password id");
  const { encrypted, key } = await encrypt(_crypto, encryption, opts.encryption, objectString);
  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));
  const iv = base64urlEncode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(_crypto, integrity, opts.integrity, macBaseString);
  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;
  return sealed;
};
var fixedTimeComparison = (a, b) => {
  let mismatch = a.length === b.length ? 0 : 1;
  if (mismatch)
    b = a;
  for (let i = 0; i < a.length; i += 1)
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
};
var unseal = async (_crypto, sealed, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const parts = sealed.split("*");
  if (parts.length !== 8)
    throw new Error("Incorrect number of sealed components");
  const prefix = parts[0];
  let passwordId = parts[1];
  const encryptionSalt = parts[2];
  const encryptionIv = parts[3];
  const encryptedB64 = parts[4];
  const expiration = parts[5];
  const hmacSalt = parts[6];
  const hmac = parts[7];
  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix)
    throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration))
      throw new Error("Invalid expiration");
    const exp = Number.parseInt(expiration, 10);
    if (exp <= now - opts.timestampSkewSec * 1e3)
      throw new Error("Expired seal");
  }
  let pass = "";
  passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array)
    pass = password;
  else if (passwordId in password) {
    pass = password[passwordId];
  } else {
    throw new Error(`Cannot find password: ${passwordId}`);
  }
  pass = normalizePassword(pass);
  const macOptions = opts.integrity;
  macOptions.salt = hmacSalt;
  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);
  if (!fixedTimeComparison(mac.digest, hmac))
    throw new Error("Bad hmac value");
  const encrypted = base64urlDecode(encryptedB64);
  const decryptOptions = opts.encryption;
  decryptOptions.salt = encryptionSalt;
  decryptOptions.iv = base64urlDecode(encryptionIv);
  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);
  if (decrypted)
    return JSON.parse(decrypted);
  return null;
};

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [
    name,
    opts.domain || "",
    opts.path || "/",
    Boolean(opts.secure),
    Boolean(opts.httpOnly),
    Boolean(opts.sameSite)
  ].join(";");
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

const getSessionPromise = Symbol("getSession");
const DEFAULT_NAME = "h3";
const DEFAULT_COOKIE = {
  path: "/",
  secure: true,
  httpOnly: true
};
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      return event.context.sessions?.[sessionName]?.id;
    },
    get data() {
      return event.context.sessions?.[sessionName]?.data || {};
    },
    update: async (update) => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot update read-only session.");
      }
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot clear read-only session.");
      }
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (!event.context.sessions) {
    event.context.sessions = /* @__PURE__ */ Object.create(null);
  }
  const existingSession = event.context.sessions[sessionName];
  if (existingSession) {
    return existingSession[getSessionPromise] || existingSession;
  }
  const session = {
    id: "",
    createdAt: 0,
    data: /* @__PURE__ */ Object.create(null)
  };
  event.context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = _getReqHeader(event, headerName);
    if (typeof headerValue === "string") {
      sealedSession = headerValue;
    }
  }
  if (!sealedSession) {
    const cookieHeader = _getReqHeader(event, "cookie");
    if (cookieHeader) {
      sealedSession = parse(cookieHeader + "")[sessionName];
    }
  }
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {
    }).then((unsealed) => {
      Object.assign(session, unsealed);
      delete event.context.sessions[sessionName][getSessionPromise];
      return session;
    });
    event.context.sessions[sessionName][getSessionPromise] = promise;
    await promise;
  }
  if (!session.id) {
    if (!isEvent(event)) {
      throw new Error(
        "Cannot initialize a new session. Make sure using `useSession(event)` in main handler."
      );
    }
    session.id = config.generateId?.() ?? (config.crypto || _crypto).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
function _getReqHeader(event, name) {
  if (event.node) {
    return event.node?.req.headers[name];
  }
  if (event.request) {
    return event.request.headers?.get(name);
  }
  if (event.headers) {
    return event.headers.get(name);
  }
}
async function updateSession(event, config, update) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  if (typeof update === "function") {
    update = update(session.data);
  }
  if (update) {
    Object.assign(session.data, update);
  }
  if (config.cookie !== false) {
    const sealed = await sealSession(event, config);
    setCookie(event, sessionName, sealed, {
      ...DEFAULT_COOKIE,
      expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : undefined,
      ...config.cookie
    });
  }
  return session;
}
async function sealSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  const sealed = await seal(config.crypto || _crypto, session, config.password, {
    ...defaults$1,
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  return sealed;
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await unseal(
    config.crypto || _crypto,
    sealed,
    config.password,
    {
      ...defaults$1,
      ttl: config.maxAge ? config.maxAge * 1e3 : 0,
      ...config.seal
    }
  );
  if (config.maxAge) {
    const age = Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY);
    if (age > config.maxAge * 1e3) {
      throw new Error("Session expired!");
    }
  }
  return unsealed;
}
function clearSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (event.context.sessions?.[sessionName]) {
    delete event.context.sessions[sessionName];
  }
  setCookie(event, sessionName, "", {
    ...DEFAULT_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController$1 = globalThis.AbortController || i;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(
      error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    if (statusCode === 404) {
      setResponseHeader(event, "Cache-Control", "no-cache");
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    }
    setResponseHeader(event, "Content-Type", "text/html");
    return send(event, renderHTMLError(errorObject));
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/home/rowvir/dev/peepr/ui","order":0,"outDir":"/home/rowvir/dev/peepr/ui/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/rowvir/dev/peepr/ui","base":"/","outDir":"/home/rowvir/dev/peepr/ui/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/home/rowvir/dev/peepr/ui","outDir":"/home/rowvir/dev/peepr/ui/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"../node_modules/.pnpm/@solidjs+start@1.1.1_@types+node@20.17.19_jiti@2.4.2_solid-js@1.9.5_terser@5.39.0_vinxi_43383aaffcbf1fc1b51c706a9c68345d/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/home/rowvir/dev/peepr/ui","outDir":"/home/rowvir/dev/peepr/ui/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true}},"root":"/home/rowvir/dev/peepr/ui"};
				const buildManifest = {"ssr":{"_github-C3TsAzD7.js":{"file":"assets/github-C3TsAzD7.js","name":"github"},"_index-8A0Efgb-.js":{"file":"assets/index-8A0Efgb-.js","name":"index"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-8A0Efgb-.js","_github-C3TsAzD7.js"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.js","name":"login","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-8A0Efgb-.js"]},"src/routes/sample-ui.tsx?pick=default&pick=$css":{"file":"sample-ui.js","name":"sample-ui","src":"src/routes/sample-ui.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_index-8A0Efgb-.js","_github-C3TsAzD7.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/sample-ui.tsx?pick=default&pick=$css","src/routes/sample-ui.tsx?pick=default&pick=$css"],"css":["assets/ssr-By8JuUUf.css"]}},"client":{"_index-Bi0ApNrH.js":{"file":"assets/index-Bi0ApNrH.js","name":"index","imports":["_web-DrH_9yjJ.js"]},"_web-DrH_9yjJ.js":{"file":"assets/web-DrH_9yjJ.js","name":"web"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-BIx427k_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-DrH_9yjJ.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-BgwIJMLP.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-DrH_9yjJ.js","_index-Bi0ApNrH.js"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"assets/login-CTTAp7h_.js","name":"login","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-DrH_9yjJ.js","_index-Bi0ApNrH.js"]},"src/routes/sample-ui.tsx?pick=default&pick=$css":{"file":"assets/sample-ui-D0d6sEep.js","name":"sample-ui","src":"src/routes/sample-ui.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-DrH_9yjJ.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-Cq5FPbah.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_web-DrH_9yjJ.js","_index-Bi0ApNrH.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/sample-ui.tsx?pick=default&pick=$css"],"css":["assets/client-By8JuUUf.css"]}},"server-fns":{"_github-C3TsAzD7.js":{"file":"assets/github-C3TsAzD7.js","name":"github"},"_index-r5P79hTl.js":{"file":"assets/index-r5P79hTl.js","name":"index"},"_server-fns-S26yFslq.js":{"file":"assets/server-fns-S26yFslq.js","name":"server-fns","imports":["_index-r5P79hTl.js","_github-C3TsAzD7.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/sample-ui.tsx?pick=default&pick=$css","src/routes/sample-ui.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=route&tsr-directive-use-server=","src/lib/index.ts?tsr-directive-use-server=","src/lib/index.ts?tsr-directive-use-server=","src/lib/index.ts?tsr-directive-use-server=","src/app.tsx"]},"src/app.tsx":{"file":"assets/app-CNgKguQR.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns-S26yFslq.js","_index-r5P79hTl.js","_github-C3TsAzD7.js"],"css":["assets/app-By8JuUUf.css"]},"src/lib/index.ts?tsr-directive-use-server=":{"file":"assets/index-CNI0dcKX.js","name":"index","src":"src/lib/index.ts?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_index-r5P79hTl.js"]},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-r5P79hTl.js","_github-C3TsAzD7.js"]},"src/routes/index.tsx?pick=route&tsr-directive-use-server=":{"file":"assets/index-CtGJWfR3.js","name":"index","src":"src/routes/index.tsx?pick=route&tsr-directive-use-server=","isDynamicEntry":true,"imports":["_index-r5P79hTl.js","_github-C3TsAzD7.js"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.js","name":"login","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-r5P79hTl.js"]},"src/routes/sample-ui.tsx?pick=default&pick=$css":{"file":"sample-ui.js","name":"sample-ui","src":"src/routes/sample-ui.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-S26yFslq.js","_index-r5P79hTl.js","_github-C3TsAzD7.js"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets$1 = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2025-03-01T14:36:31.666Z",
    "size": 664,
    "path": "../public/favicon.ico"
  },
  "/assets/github-C3TsAzD7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5fae-ZltadgmRpeV+QSYYmldLfQ5w88Y\"",
    "mtime": "2025-03-01T14:36:31.774Z",
    "size": 24494,
    "path": "../public/assets/github-C3TsAzD7.js.br"
  },
  "/assets/github-C3TsAzD7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6dfd-wdteUUdvRlCa4x3pvVMd6lg39O0\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 28157,
    "path": "../public/assets/github-C3TsAzD7.js.gz"
  },
  "/assets/index-8A0Efgb-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d14-6s6Qr4As0gsrYPQd1EDMqNcrFV8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 7444,
    "path": "../public/assets/index-8A0Efgb-.js.br"
  },
  "/assets/index-8A0Efgb-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2006-WJ2dzERM4HlMG3mjBKQtBcgT30s\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 8198,
    "path": "../public/assets/index-8A0Efgb-.js.gz"
  },
  "/assets/ssr-By8JuUUf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1687-bF8Ef7k1HIinLVi1/VUUY9WAEjc\"",
    "mtime": "2025-03-01T14:36:31.668Z",
    "size": 5767,
    "path": "../public/assets/ssr-By8JuUUf.css"
  },
  "/assets/ssr-By8JuUUf.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"535-Q7FfPFjgvXHYt9zPTREgB9k+pio\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1333,
    "path": "../public/assets/ssr-By8JuUUf.css.br"
  },
  "/assets/ssr-By8JuUUf.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"642-AUZn5sCJgX5dr/2ykbz5+RG3RMg\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1602,
    "path": "../public/assets/ssr-By8JuUUf.css.gz"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"79d-p1jrjqiy/rAA5cy9tLh7Fct1VjQ\"",
    "mtime": "2025-03-01T14:36:31.670Z",
    "size": 1949,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"182-kY5zJiwHvQIgJ+q/rK3gbJrKRFg\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 386,
    "path": "../public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"19f-pYPiq/8np7xP1v/Zv7jxITz3Zzw\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 415,
    "path": "../public/_build/.vite/manifest.json.gz"
  },
  "/_server/assets/app-By8JuUUf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1687-bF8Ef7k1HIinLVi1/VUUY9WAEjc\"",
    "mtime": "2025-03-01T14:36:31.672Z",
    "size": 5767,
    "path": "../public/_server/assets/app-By8JuUUf.css"
  },
  "/_server/assets/app-By8JuUUf.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"535-Q7FfPFjgvXHYt9zPTREgB9k+pio\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1333,
    "path": "../public/_server/assets/app-By8JuUUf.css.br"
  },
  "/_server/assets/app-By8JuUUf.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"642-AUZn5sCJgX5dr/2ykbz5+RG3RMg\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1602,
    "path": "../public/_server/assets/app-By8JuUUf.css.gz"
  },
  "/_server/assets/app-CNgKguQR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a07-CceMa7YrX0qAupSu6Ff51mPDuHs\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 2567,
    "path": "../public/_server/assets/app-CNgKguQR.js.br"
  },
  "/_server/assets/app-CNgKguQR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"b36-AJCE3TJyFKJtnzgcDlsB1yn7H0U\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 2870,
    "path": "../public/_server/assets/app-CNgKguQR.js.gz"
  },
  "/_server/assets/github-C3TsAzD7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5fae-ZltadgmRpeV+QSYYmldLfQ5w88Y\"",
    "mtime": "2025-03-01T14:36:31.800Z",
    "size": 24494,
    "path": "../public/_server/assets/github-C3TsAzD7.js.br"
  },
  "/_server/assets/github-C3TsAzD7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6dfd-wdteUUdvRlCa4x3pvVMd6lg39O0\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 28157,
    "path": "../public/_server/assets/github-C3TsAzD7.js.gz"
  },
  "/_server/assets/index-CNI0dcKX.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f9-m9VTR2sGA8pLrO/VRhbzNK1D9D8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 505,
    "path": "../public/_server/assets/index-CNI0dcKX.js.br"
  },
  "/_server/assets/index-CNI0dcKX.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"230-RWk//WWxU/Go2/pCJQsydBCoHG8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 560,
    "path": "../public/_server/assets/index-CNI0dcKX.js.gz"
  },
  "/_server/assets/index-r5P79hTl.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d50-AhCW28/cma6zNI0UpUHF7d11RL8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 7504,
    "path": "../public/_server/assets/index-r5P79hTl.js.br"
  },
  "/_server/assets/index-r5P79hTl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2046-loNJd87snGr9xDUqC7FY944MhMs\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 8262,
    "path": "../public/_server/assets/index-r5P79hTl.js.gz"
  },
  "/_server/assets/server-fns-S26yFslq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3804-vHOkFqSM97xPPCb51jE16wD33WY\"",
    "mtime": "2025-03-01T14:36:31.751Z",
    "size": 14340,
    "path": "../public/_server/assets/server-fns-S26yFslq.js.br"
  },
  "/_server/assets/server-fns-S26yFslq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3f4d-YEKn2oJY7+1QwJ39RNuEcjAR1/I\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 16205,
    "path": "../public/_server/assets/server-fns-S26yFslq.js.gz"
  },
  "/_build/assets/_...404_-BIx427k_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b7-T3a/DhxygNKAFo+lRvg7wsmmzXI\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 183,
    "path": "../public/_build/assets/_...404_-BIx427k_.js"
  },
  "/_build/assets/client-By8JuUUf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1687-bF8Ef7k1HIinLVi1/VUUY9WAEjc\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 5767,
    "path": "../public/_build/assets/client-By8JuUUf.css"
  },
  "/_build/assets/client-By8JuUUf.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"535-Q7FfPFjgvXHYt9zPTREgB9k+pio\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1333,
    "path": "../public/_build/assets/client-By8JuUUf.css.br"
  },
  "/_build/assets/client-By8JuUUf.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"642-AUZn5sCJgX5dr/2ykbz5+RG3RMg\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 1602,
    "path": "../public/_build/assets/client-By8JuUUf.css.gz"
  },
  "/_build/assets/client-Cq5FPbah.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd6-AWF4iP89vDEBMojn/WW7EiItZzo\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 15574,
    "path": "../public/_build/assets/client-Cq5FPbah.js"
  },
  "/_build/assets/client-Cq5FPbah.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"15d9-tGhP7A+yqxHXCPVJymA/LALmu5E\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 5593,
    "path": "../public/_build/assets/client-Cq5FPbah.js.br"
  },
  "/_build/assets/client-Cq5FPbah.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1862-K88z3AsK68uvFakeCs8StuD9HYo\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 6242,
    "path": "../public/_build/assets/client-Cq5FPbah.js.gz"
  },
  "/_build/assets/index-BgwIJMLP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"625-0ONqs78I3yHdTHZUPFki2FG+yHM\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 1573,
    "path": "../public/_build/assets/index-BgwIJMLP.js"
  },
  "/_build/assets/index-BgwIJMLP.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d8-PLy9WDl95p1ZCR0b05bqlPUgHf0\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 728,
    "path": "../public/_build/assets/index-BgwIJMLP.js.br"
  },
  "/_build/assets/index-BgwIJMLP.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"348-vULvVYDF4ehGhhCjMBl0dMcSqLU\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 840,
    "path": "../public/_build/assets/index-BgwIJMLP.js.gz"
  },
  "/_build/assets/index-Bi0ApNrH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"856f-GU2P4xEsHPcKxpLpVlJU20t0cvE\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 34159,
    "path": "../public/_build/assets/index-Bi0ApNrH.js"
  },
  "/_build/assets/index-Bi0ApNrH.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"28d4-Pc+zZH+5iYdiQ7zrSNKYDzLmtyc\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 10452,
    "path": "../public/_build/assets/index-Bi0ApNrH.js.br"
  },
  "/_build/assets/index-Bi0ApNrH.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2d41-ghdo7/RBllISXGtyNhPT9Ohn6vw\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 11585,
    "path": "../public/_build/assets/index-Bi0ApNrH.js.gz"
  },
  "/_build/assets/login-CTTAp7h_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a3-QeJV160YmXEHwjDMuWnE86Kn6NQ\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 1187,
    "path": "../public/_build/assets/login-CTTAp7h_.js"
  },
  "/_build/assets/login-CTTAp7h_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"206-zSywmcqXwvyYmKjDQfY1QWh7rFg\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 518,
    "path": "../public/_build/assets/login-CTTAp7h_.js.br"
  },
  "/_build/assets/login-CTTAp7h_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"271-HGrdnT/tCajvTzf3APsRNa+9YaQ\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 625,
    "path": "../public/_build/assets/login-CTTAp7h_.js.gz"
  },
  "/_build/assets/sample-ui-D0d6sEep.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"932-jSeBozlpYv++H+hcHa6pz6dQrA4\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 2354,
    "path": "../public/_build/assets/sample-ui-D0d6sEep.js"
  },
  "/_build/assets/sample-ui-D0d6sEep.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"235-5ThsGe/FAxul6ZxkJq4OzDw7auI\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 565,
    "path": "../public/_build/assets/sample-ui-D0d6sEep.js.br"
  },
  "/_build/assets/sample-ui-D0d6sEep.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"284-jm61yOgmo3VqsFjOtRMDdgqqiio\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 644,
    "path": "../public/_build/assets/sample-ui-D0d6sEep.js.gz"
  },
  "/_build/assets/web-DrH_9yjJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5dbd-fazB9rcf2nItRQoUYSu2XrLmPIM\"",
    "mtime": "2025-03-01T14:36:31.671Z",
    "size": 23997,
    "path": "../public/_build/assets/web-DrH_9yjJ.js"
  },
  "/_build/assets/web-DrH_9yjJ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2152-Qz5qV/lNCR4Wt8D6UF1nUEbYCM8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 8530,
    "path": "../public/_build/assets/web-DrH_9yjJ.js.br"
  },
  "/_build/assets/web-DrH_9yjJ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2497-ZD1pOF6JDngr2X8Lxpn8Y8TMSF8\"",
    "mtime": "2025-03-01T14:36:31.721Z",
    "size": 9367,
    "path": "../public/_build/assets/web-DrH_9yjJ.js.gz"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _8BQmlh = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey$2(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$2(keys.join(":"));
}
function normalizeBaseKey$1(base) {
  base = normalizeKey$2(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$2(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$2(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey$1(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$2(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey$1(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey$1(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey$1(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$2(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$2(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises$1.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises$1.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises$1.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises$1.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises$1.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises$1.rmdir(entryPath));
      } else {
        return promises$1.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join$1(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises$1.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, key + "" , value);
function mt$5(e = {}) {
  let t, n = false;
  const r = (a) => {
    if (t && t !== a) throw new Error("Context conflict");
  };
  let s;
  if (e.asyncContext) {
    const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    a ? s = new a() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const o = () => {
    if (s) {
      const a = s.getStore();
      if (a !== void 0) return a;
    }
    return t;
  };
  return { use: () => {
    const a = o();
    if (a === void 0) throw new Error("Context is not available");
    return a;
  }, tryUse: () => o(), set: (a, i) => {
    i || r(a), t = a, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (a, i) => {
    r(a), t = a;
    try {
      return s ? s.run(a, i) : i();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(a, i) {
    t = a;
    const h = () => {
      t = a;
    }, p = () => t === a ? h : void 0;
    de$2.add(p);
    try {
      const u = s ? s.run(a, i) : i();
      return n || (t = void 0), await u;
    } finally {
      de$2.delete(p);
    }
  } };
}
function yt$5(e = {}) {
  const t = {};
  return { get(n, r = {}) {
    return t[n] || (t[n] = mt$5({ ...e, ...r })), t[n];
  } };
}
const X$3 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, le$1 = "__unctx__", wt$5 = X$3[le$1] || (X$3[le$1] = yt$5()), vt$5 = (e, t = {}) => wt$5.get(e, t), fe$2 = "__unctx_async_handlers__", de$2 = X$3[fe$2] || (X$3[fe$2] = /* @__PURE__ */ new Set());
function Rt$5(e) {
  let t;
  const n = Se$2(e), r = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...r, body: e.node.req.body }) : new Request(n, { ...r, get body() {
    return t || (t = At$5(e), t);
  } });
}
function bt$5(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Rt$5(e), url: Se$2(e) }, e.web.request;
}
function xt$5() {
  return Tt$5();
}
const xe$4 = Symbol("$HTTPEvent");
function St$5(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[xe$4]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function R$2(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (St$5(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[xe$4];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = xt$5(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Se$2 = R$2(getRequestURL), _t$4 = R$2(getRequestIP), he$2 = R$2(setResponseStatus), pe$2 = R$2(getResponseStatus), Ct$5 = R$2(getResponseStatusText), K$4 = R$2(getResponseHeaders), ge$2 = R$2(getResponseHeader), Et$5 = R$2(setResponseHeader), _e$2 = R$2(appendResponseHeader), Sn$1 = R$2(parseCookies), _n$1 = R$2(getCookie), Cn$1 = R$2(setCookie), Pt$5 = R$2(useSession), En$1 = R$2(setHeader), At$5 = R$2(getRequestWebStream), Ot$5 = R$2(removeResponseHeader), qt$4 = R$2(bt$5);
function Ht$4() {
  var _a;
  return vt$5("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Tt$5() {
  return Ht$4().use().event;
}
const G$3 = "solidFetchEvent";
function $t$5(e) {
  return { request: qt$4(e), response: Ut$4(e), clientAddress: _t$4(e), locals: {}, nativeEvent: e };
}
function Lt$5(e) {
  return { ...e };
}
function Pn$1(e) {
  if (!e.context[G$3]) {
    const t = $t$5(e);
    e.context[G$3] = t;
  }
  return e.context[G$3];
}
function An$1(e, t) {
  for (const [n, r] of t.entries()) _e$2(e, n, r);
}
let It$5 = class It {
  constructor(t) {
    __publicField$6(this, "event");
    this.event = t;
  }
  get(t) {
    const n = ge$2(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return Et$5(this.event, t, n);
  }
  delete(t) {
    return Ot$5(this.event, t);
  }
  append(t, n) {
    _e$2(this.event, t, n);
  }
  getSetCookie() {
    const t = ge$2(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(K$4(this.event)).forEach(([n, r]) => t(Array.isArray(r) ? r.join(", ") : r, n, this));
  }
  entries() {
    return Object.entries(K$4(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(K$4(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(K$4(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
};
function Ut$4(e) {
  return { get status() {
    return pe$2(e);
  }, set status(t) {
    he$2(e, t);
  }, get statusText() {
    return Ct$5(e);
  }, set statusText(t) {
    he$2(e, pe$2(e), t);
  }, headers: new It$5(e) };
}
function te$4(e, t, n) {
  if (typeof e != "function") throw new Error("Export from a 'use server' module must be a function");
  const r = "";
  return new Proxy(e, { get(s, o, a) {
    return o === "url" ? `${r}/_server?id=${encodeURIComponent(t)}&name=${encodeURIComponent(n)}` : o === "GET" ? a : s[o];
  }, apply(s, o, a) {
    const i = getRequestEvent();
    if (!i) throw new Error("Cannot call server function outside of a request");
    const h = Lt$5(i);
    return h.locals.serverFunctionMeta = { id: t + "#" + n }, h.serverOnly = true, provideRequestEvent(h, () => e.apply(o, a));
  } });
}
function Ft$4() {
  let e = /* @__PURE__ */ new Set();
  function t(s) {
    return e.add(s), () => e.delete(s);
  }
  let n = false;
  function r(s, o) {
    if (n) return !(n = false);
    const a = { to: s, options: o, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const i of e) i.listener({ ...a, from: i.location, retry: (h) => {
      h && (n = true), i.navigate(s, { ...o, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: t, confirm: r };
}
let V$3;
function Ce$2() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), V$3 = window.history.state._depth;
}
isServer || Ce$2();
function On$1(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function qn$1(e, t) {
  let n = false;
  return () => {
    const r = V$3;
    Ce$2();
    const s = r == null ? null : V$3 - r;
    if (n) {
      n = false;
      return;
    }
    s && t(s) ? (n = true, window.history.go(-s)) : e();
  };
}
const jt$4 = /^(?:[a-z0-9]+:)?\/\//i, kt$5 = /^\/+|(\/)\/+$/g, Ee$2 = "http://sr";
function U$5(e, t = false) {
  const n = e.replace(kt$5, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function N$4(e, t, n) {
  if (jt$4.test(t)) return;
  const r = U$5(e), s = n && U$5(n);
  let o = "";
  return !s || t.startsWith("/") ? o = r : s.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? o = r + s : o = s, (o || "/") + U$5(t, !o);
}
function Wt$4(e, t) {
  if (e == null) throw new Error(t);
  return e;
}
function Bt$4(e, t) {
  return U$5(e).replace(/\/*(\*.*)?$/g, "") + U$5(t);
}
function Pe$2(e) {
  const t = {};
  return e.searchParams.forEach((n, r) => {
    r in t ? Array.isArray(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n;
  }), t;
}
function Mt$4(e, t, n) {
  const [r, s] = e.split("/*", 2), o = r.split("/").filter(Boolean), a = o.length;
  return (i) => {
    const h = i.split("/").filter(Boolean), p = h.length - a;
    if (p < 0 || p > 0 && s === void 0 && !t) return null;
    const u = { path: a ? "" : "/", params: {} }, c = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const f = o[g], y = f[0] === ":", l = y ? h[g] : h[g].toLowerCase(), w = y ? f.slice(1) : f.toLowerCase();
      if (y && J$2(l, c(w))) u.params[w] = l;
      else if (y || !J$2(l, w)) return null;
      u.path += `/${l}`;
    }
    if (s) {
      const g = p ? h.slice(-p).join("/") : "";
      if (J$2(g, c(s))) u.params[s] = g;
      else return null;
    }
    return u;
  };
}
function J$2(e, t) {
  const n = (r) => r === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Dt$4(e) {
  const [t, n] = e.pattern.split("/*", 2), r = t.split("/").filter(Boolean);
  return r.reduce((s, o) => s + (o.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1));
}
function Ae$1(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(r, s) {
    return t.has(s) || runWithOwner(n, () => t.set(s, createMemo(() => e()[s]))), t.get(s)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function Oe$2(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), r = e.slice(t.index + t[0].length);
  const s = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(r); ) s.push(n += t[1]), r = r.slice(t[0].length);
  return Oe$2(r).reduce((o, a) => [...o, ...s.map((i) => i + a)], []);
}
const Kt$3 = 100, Nt$5 = createContext$1(), Xt$2 = createContext$1(), qe$3 = () => Wt$4(useContext(Nt$5), "<A> and 'use' router primitives can be only used inside a Route."), zt$2 = () => qe$3().navigatorFactory();
function Gt$4(e, t = "") {
  const { component: n, preload: r, load: s, children: o, info: a } = e, i = !o || Array.isArray(o) && !o.length, h = { key: e, component: n, preload: r || s, info: a };
  return He$3(e.path).reduce((p, u) => {
    for (const c of Oe$2(u)) {
      const g = Bt$4(t, c);
      let f = i ? g : g.split("/*", 1)[0];
      f = f.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), p.push({ ...h, originalPath: u, pattern: f, matcher: Mt$4(f, !i, e.matchFilters) });
    }
    return p;
  }, []);
}
function Jt$2(e, t = 0) {
  return { routes: e, score: Dt$4(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const r = [];
    for (let s = e.length - 1; s >= 0; s--) {
      const o = e[s], a = o.matcher(n);
      if (!a) return null;
      r.unshift({ ...a, route: o });
    }
    return r;
  } };
}
function He$3(e) {
  return Array.isArray(e) ? e : [e];
}
function Yt$2(e, t = "", n = [], r = []) {
  const s = He$3(e);
  for (let o = 0, a = s.length; o < a; o++) {
    const i = s[o];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const h = Gt$4(i, t);
      for (const p of h) {
        n.push(p);
        const u = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !u) Yt$2(i.children, p.pattern, n, r);
        else {
          const c = Jt$2([...n], r.length);
          r.push(c);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((o, a) => a.score - o.score);
}
function Y$3(e, t) {
  for (let n = 0, r = e.length; n < r; n++) {
    const s = e[n].matcher(t);
    if (s) return s;
  }
  return [];
}
function Qt$2(e, t, n) {
  const r = new URL(Ee$2), s = createMemo((u) => {
    const c = e();
    try {
      return new URL(c, r);
    } catch {
      return console.error(`Invalid path ${c}`), u;
    }
  }, r, { equals: (u, c) => u.href === c.href }), o = createMemo(() => s().pathname), a = createMemo(() => s().search, true), i = createMemo(() => s().hash), h = () => "", p = on$2(a, () => Pe$2(s()));
  return { get pathname() {
    return o();
  }, get search() {
    return a();
  }, get hash() {
    return i();
  }, get state() {
    return t();
  }, get key() {
    return h();
  }, query: n ? n(p) : Ae$1(p) };
}
let E$1;
function Vt$4() {
  return E$1;
}
let $$2 = false;
function Zt$2() {
  return $$2;
}
function Hn$1(e) {
  $$2 = e;
}
function Tn$1(e, t, n, r = {}) {
  const { signal: [s, o], utils: a = {} } = e, i = a.parsePath || ((d) => d), h = a.renderPath || ((d) => d), p = a.beforeLeave || Ft$4(), u = N$4("", r.base || "");
  if (u === void 0) throw new Error(`${u} is not a valid base path`);
  u && !s().value && o({ value: u, replace: true, scroll: false });
  const [c, g] = createSignal(false);
  let f;
  const y = (d, m) => {
    m.value === l() && m.state === b() || (f === void 0 && g(true), E$1 = d, f = m, startTransition(() => {
      f === m && (w(f.value), k(f.state), resetErrorBoundaries(), isServer || se[1]((x) => x.filter((A) => A.pending)));
    }).finally(() => {
      f === m && batch(() => {
        E$1 = void 0, d === "navigate" && We(f), g(false), f = void 0;
      });
    }));
  }, [l, w] = createSignal(s().value), [b, k] = createSignal(s().state), W = Qt$2(l, b, a.queryWrapper), B = [], se = createSignal(isServer ? Me() : []), oe = createMemo(() => typeof r.transformUrl == "function" ? Y$3(t(), r.transformUrl(W.pathname)) : Y$3(t(), W.pathname)), ae = () => {
    const d = oe(), m = {};
    for (let x = 0; x < d.length; x++) Object.assign(m, d[x].params);
    return m;
  }, Fe = a.paramsWrapper ? a.paramsWrapper(ae, t) : Ae$1(ae), ie = { pattern: u, path: () => u, outlet: () => null, resolvePath(d) {
    return N$4(u, d);
  } };
  return createRenderEffect(on$2(s, (d) => y("native", d), { defer: true })), { base: ie, location: W, params: Fe, isRouting: c, renderPath: h, parsePath: i, navigatorFactory: ke, matches: oe, beforeLeave: p, preloadRoute: Be, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: se };
  function je(d, m, x) {
    untrack(() => {
      if (typeof m == "number") {
        m && (a.go ? a.go(m) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const A = !m || m[0] === "?", { replace: M, resolve: O, scroll: D, state: q } = { replace: false, resolve: !A, scroll: true, ...x }, H = O ? d.resolvePath(m) : N$4(A && W.pathname || "", m);
      if (H === void 0) throw new Error(`Path '${m}' is not a routable path`);
      if (B.length >= Kt$3) throw new Error("Too many redirects");
      const ce = l();
      if (H !== ce || q !== b()) if (isServer) {
        const ue = getRequestEvent();
        ue && (ue.response = { status: 302, headers: new Headers({ Location: H }) }), o({ value: H, replace: M, scroll: D, state: q });
      } else p.confirm(H, x) && (B.push({ value: ce, replace: M, scroll: D, state: b() }), y("navigate", { value: H, state: q }));
    });
  }
  function ke(d) {
    return d = d || useContext(Xt$2) || ie, (m, x) => je(d, m, x);
  }
  function We(d) {
    const m = B[0];
    m && (o({ ...d, replace: m.replace, scroll: m.scroll }), B.length = 0);
  }
  function Be(d, m) {
    const x = Y$3(t(), d.pathname), A = E$1;
    E$1 = "preload";
    for (let M in x) {
      const { route: O, params: D } = x[M];
      O.component && O.component.preload && O.component.preload();
      const { preload: q } = O;
      $$2 = true, m && q && runWithOwner(n(), () => q({ params: D, location: { pathname: d.pathname, search: d.search, hash: d.hash, query: Pe$2(d), state: null, key: "" }, intent: "preload" })), $$2 = false;
    }
    E$1 = A;
  }
  function Me() {
    const d = getRequestEvent();
    return d && d.router && d.router.submission ? [d.router.submission] : [];
  }
}
function $n$1(e, t, n, r) {
  const { base: s, location: o, params: a } = e, { pattern: i, component: h, preload: p } = r().route, u = createMemo(() => r().path);
  h && h.preload && h.preload(), $$2 = true;
  const c = p ? p({ params: a, location: o, intent: E$1 || "initial" }) : void 0;
  return $$2 = false, { parent: t, pattern: i, path: u, outlet: () => h ? createComponent(h, { params: a, location: o, data: c, get children() {
    return n();
  } }) : n(), resolvePath(f) {
    return N$4(s.path(), f, u());
  } };
}
const en$1 = "Location", tn$1 = 5e3, nn$1 = 18e4;
let F$4 = /* @__PURE__ */ new Map();
isServer || setInterval(() => {
  const e = Date.now();
  for (let [t, n] of F$4.entries()) !n[4].count && e - n[0] > nn$1 && F$4.delete(t);
}, 3e5);
function j$3() {
  if (!isServer) return F$4;
  const e = getRequestEvent();
  if (!e) throw new Error("Cannot find cache context");
  return (e.router || (e.router = {})).cache || (e.router.cache = /* @__PURE__ */ new Map());
}
function rn$1(e, t = true) {
  return startTransition(() => {
    const n = Date.now();
    Te$2(e, (r) => {
      t && (r[0] = 0), r[4][1](n);
    });
  });
}
function Te$2(e, t) {
  e && !Array.isArray(e) && (e = [e]);
  for (let n of F$4.keys()) (e === void 0 || $e$4(n, e)) && t(F$4.get(n));
}
function L$2(e, t) {
  e.GET && (e = e.GET);
  const n = (...r) => {
    const s = j$3(), o = Vt$4(), a = Zt$2(), h = getOwner() ? zt$2() : void 0, p = Date.now(), u = t + Z$5(r);
    let c = s.get(u), g;
    if (isServer) {
      const l = getRequestEvent();
      if (l) {
        const w = (l.router || (l.router = {})).dataOnly;
        if (w) {
          const b = l && (l.router.data || (l.router.data = {}));
          if (b && u in b) return b[u];
          if (Array.isArray(w) && !$e$4(u, w)) return b[u] = void 0, Promise.resolve();
        }
      }
    }
    if (getListener() && !isServer && (g = true, onCleanup(() => c[4].count--)), c && c[0] && (isServer || o === "native" || c[4].count || Date.now() - c[0] < tn$1)) {
      g && (c[4].count++, c[4][0]()), c[3] === "preload" && o !== "preload" && (c[0] = p);
      let l = c[1];
      return o !== "preload" && (l = "then" in c[1] ? c[1].then(y(false), y(true)) : y(false)(c[1]), !isServer && o === "navigate" && startTransition(() => c[4][1](c[0]))), a && "then" in l && l.catch(() => {
      }), l;
    }
    let f;
    if (!isServer && sharedConfig.has && sharedConfig.has(u) ? (f = sharedConfig.load(u), delete globalThis._$HY.r[u]) : f = e(...r), c ? (c[0] = p, c[1] = f, c[3] = o, !isServer && o === "navigate" && startTransition(() => c[4][1](c[0]))) : (s.set(u, c = [p, f, , o, createSignal(p)]), c[4].count = 0), g && (c[4].count++, c[4][0]()), isServer) {
      const l = getRequestEvent();
      if (l && l.router.dataOnly) return l.router.data[u] = f;
    }
    if (o !== "preload" && (f = "then" in f ? f.then(y(false), y(true)) : y(false)(f)), a && "then" in f && f.catch(() => {
    }), isServer && sharedConfig.context && sharedConfig.context.async && !sharedConfig.context.noHydrate) {
      const l = getRequestEvent();
      (!l || !l.serverOnly) && sharedConfig.context.serialize(u, f);
    }
    return f;
    function y(l) {
      return async (w) => {
        if (w instanceof Response) {
          const b = w.headers.get(en$1);
          if (b !== null) {
            if (h && b.startsWith("/")) startTransition(() => {
              h(b, { replace: true });
            });
            else if (!isServer) window.location.href = b;
            else if (isServer) {
              const k = getRequestEvent();
              k && (k.response = { status: 302, headers: new Headers({ Location: b }) });
            }
            return;
          }
          w.customBody && (w = await w.customBody());
        }
        if (l) throw w;
        return c[2] = w, w;
      };
    }
  };
  return n.keyFor = (...r) => t + Z$5(r), n.key = t, n;
}
L$2.get = (e) => j$3().get(e)[2];
L$2.set = (e, t) => {
  const n = j$3(), r = Date.now();
  let s = n.get(e);
  s ? (s[0] = r, s[1] = Promise.resolve(t), s[2] = t, s[3] = "preload") : (n.set(e, s = [r, Promise.resolve(t), t, "preload", createSignal(r)]), s[4].count = 0);
};
L$2.delete = (e) => j$3().delete(e);
L$2.clear = () => j$3().clear();
function $e$4(e, t) {
  for (let n of t) if (n && e.startsWith(n)) return true;
  return false;
}
function Z$5(e) {
  return JSON.stringify(e, (t, n) => sn$1(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n);
}
function sn$1(e) {
  let t;
  return e != null && typeof e == "object" && (!(t = Object.getPrototypeOf(e)) || t === Object.prototype);
}
const me$2 = /* @__PURE__ */ new Map();
function on$1(e, t) {
  const n = qe$3(), r = createMemo(() => n.submissions[0]().filter((s) => s.url === e.base && true));
  return new Proxy([], { get(s, o) {
    return o === $TRACK ? r() : o === "pending" ? r().some((a) => !a.result) : r()[o];
  }, has(s, o) {
    return o in r();
  } });
}
function Ln$1(e, t) {
  const n = on$1(e);
  return new Proxy({}, { get(r, s) {
    var _a;
    return n.length === 0 && s === "clear" || s === "retry" ? () => {
    } : (_a = n[n.length - 1]) == null ? void 0 : _a[s];
  } });
}
function Le$3(e, t = {}) {
  function n(...o) {
    const a = this.r, i = this.f, h = (a.singleFlight && e.withOptions ? e.withOptions({ headers: { "X-Single-Flight": "true" } }) : e)(...o), [p, u] = createSignal();
    let c;
    function g(f) {
      return async (y) => {
        var _a;
        const l = await cn$1(y, f, a.navigatorFactory());
        let w = null;
        if ((_a = r.onComplete) == null ? void 0 : _a.call(r, { ...c, result: l == null ? void 0 : l.data, error: l == null ? void 0 : l.error, pending: false, retry() {
          return w = c.retry();
        } }), w) return w;
        if (!l) return c.clear();
        if (u(l), l.error && !i) throw l.error;
        return l.data;
      };
    }
    return a.submissions[1]((f) => [...f, c = { input: o, url: s, get result() {
      var _a;
      return (_a = p()) == null ? void 0 : _a.data;
    }, get error() {
      var _a;
      return (_a = p()) == null ? void 0 : _a.error;
    }, get pending() {
      return !p();
    }, clear() {
      a.submissions[1]((y) => y.filter((l) => l !== c));
    }, retry() {
      return u(void 0), e(...o).then(g(), g(true));
    } }]), h.then(g(), g(true));
  }
  const r = typeof t == "string" ? { name: t } : t, s = e.url || r.name && `https://action/${r.name}` || (isServer ? "" : `https://action/${an$1(e.toString())}`);
  return n.base = s, Ie$4(n, s);
}
function Ie$4(e, t) {
  return e.toString = () => {
    if (!t) throw new Error("Client Actions need explicit names if server rendered");
    return t;
  }, e.with = function(...n) {
    const r = function(...o) {
      return e.call(this, ...n, ...o);
    };
    r.base = e.base;
    const s = new URL(t, Ee$2);
    return s.searchParams.set("args", Z$5(n)), Ie$4(r, (s.origin === "https://action" ? s.origin : "") + s.pathname + s.search);
  }, e.url = t, isServer || (me$2.set(t, e), getOwner() && onCleanup(() => me$2.delete(t))), e;
}
const an$1 = (e) => e.split("").reduce((t, n) => (t << 5) - t + n.charCodeAt(0) | 0, 0);
async function cn$1(e, t, n) {
  let r, s, o, a;
  if (e instanceof Response) {
    if (e.headers.has("X-Revalidate") && (o = e.headers.get("X-Revalidate").split(",")), e.customBody && (r = s = await e.customBody(), e.headers.has("X-Single-Flight") && (r = r._$value, delete s._$value, a = Object.keys(s))), e.headers.has("Location")) {
      const i = e.headers.get("Location") || "/";
      i.startsWith("http") ? window.location.href = i : n(i);
    }
  } else {
    if (t) return { error: e };
    r = e;
  }
  return Te$2(o, (i) => i[0] = 0), a && a.forEach((i) => L$2.set(i, s[i])), await rn$1(o, false), r != null ? { data: r } : void 0;
}
function ne$3(e, t = 302) {
  let n, r;
  typeof t == "number" ? n = { status: t } : ({ revalidate: r, ...n } = t, typeof n.status > "u" && (n.status = 302));
  const s = new Headers(n.headers);
  return s.set("Location", e), r !== void 0 && s.set("X-Revalidate", r.toString()), new Response(null, { ...n, headers: s });
}
const T$2 = createStorage({ driver: unstorage_47drivers_47fs_45lite({ base: "./.data" }) });
T$2.setItem("users:data", [{ id: 0, username: "kody", password: "twixrox" }]);
T$2.setItem("users:counter", 1);
const z$2 = { user: { async create({ data: e }) {
  const [{ value: t }, { value: n }] = await T$2.getItems(["users:data", "users:counter"]), r = { ...e, id: n };
  return await Promise.all([T$2.setItem("users:data", [...t, r]), T$2.setItem("users:counter", n + 1)]), r;
}, async findUnique({ where: { username: e = void 0, id: t = void 0 } }) {
  const n = await T$2.getItem("users:data");
  return t !== void 0 ? n.find((r) => r.id === t) : n.find((r) => r.username === e);
} } };
function un$1(e) {
  if (typeof e != "string" || e.length < 3) return "Usernames must be at least 3 characters long";
}
function ln$1(e) {
  if (typeof e != "string" || e.length < 6) return "Passwords must be at least 6 characters long";
}
async function fn$1(e, t) {
  const n = await z$2.user.findUnique({ where: { username: e } });
  if (!n || t !== n.password) throw new Error("Invalid login");
  return n;
}
async function Ue$1() {
  await (await re$4()).update((t) => {
    t.userId = void 0;
  });
}
async function dn$1(e, t) {
  if (await z$2.user.findUnique({ where: { username: e } })) throw new Error("User already exists");
  return z$2.user.create({ data: { username: e, password: t } });
}
function re$4() {
  var _a;
  return Pt$5({ password: (_a = process.env.SESSION_SECRET) != null ? _a : "areallylongsecretthatyoushouldreplace" });
}
const hn$1 = te$4(async () => {
  try {
    const t = (await re$4()).data.userId;
    if (t === void 0) throw new Error("User not found");
    const n = await z$2.user.findUnique({ where: { id: t } });
    if (!n) throw new Error("User not found");
    return { id: n.id, username: n.username };
  } catch {
    throw await Ue$1(), ne$3("/login");
  }
}, "src_lib_index_ts--getUser_query", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), In$1 = L$2(hn$1, "user"), pn$1 = te$4(async (e) => {
  const t = String(e.get("username")), n = String(e.get("password")), r = String(e.get("loginType"));
  let s = un$1(t) || ln$1(n);
  if (s) return new Error(s);
  try {
    const o = await (r !== "login" ? dn$1(t, n) : fn$1(t, n));
    await (await re$4()).update((i) => {
      i.userId = o.id;
    });
  } catch (o) {
    return o;
  }
  return ne$3("/");
}, "src_lib_index_ts--loginOrRegister_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), Un$1 = Le$3(pn$1), gn$1 = te$4(async () => (await Ue$1(), ne$3("/login")), "src_lib_index_ts--logout_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), Fn = Le$3(gn$1);

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a$1;
function N$3() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
function Je$2(e, t, s, o) {
  if (typeof s != "function") throw new Error("method for before hook must be a function");
  return o || (o = {}), Array.isArray(t) ? t.reverse().reduce((n, p) => Je$2.bind(null, e, p, n, o), s)() : Promise.resolve().then(() => e.registry[t] ? e.registry[t].reduce((n, p) => p.hook.bind(null, n, o), s)() : s(o));
}
function kr$2(e, t, s, o) {
  const n = o;
  e.registry[s] || (e.registry[s] = []), t === "before" && (o = (p, l) => Promise.resolve().then(n.bind(null, l)).then(p.bind(null, l))), t === "after" && (o = (p, l) => {
    let g;
    return Promise.resolve().then(p.bind(null, l)).then((m) => (g = m, n(g, l))).then(() => g);
  }), t === "error" && (o = (p, l) => Promise.resolve().then(p.bind(null, l)).catch((g) => n(g, l))), e.registry[s].push({ hook: o, orig: n });
}
function Gr$2(e, t, s) {
  if (!e.registry[t]) return;
  const o = e.registry[t].map((n) => n.orig).indexOf(s);
  o !== -1 && e.registry[t].splice(o, 1);
}
const Le$2 = Function.bind, Ie$3 = Le$2.bind(Le$2);
function Or$2(e, t, s) {
  const o = Ie$3(Gr$2, null).apply(null, [t]);
  e.api = { remove: o }, e.remove = o, ["before", "error", "after", "wrap"].forEach((n) => {
    const p = [t, n];
    e[n] = e.api[n] = Ie$3(kr$2, null).apply(null, p);
  });
}
function Rr$2() {
  const e = { registry: {} }, t = Je$2.bind(null, e);
  return Or$2(t, e), t;
}
const Ar$2 = { Collection: Rr$2 };
var Sr$2 = "0.0.0-development", Fr$2 = `octokit-endpoint.js/${Sr$2} ${N$3()}`, Cr$2 = { method: "GET", baseUrl: "https://api.github.com", headers: { accept: "application/vnd.github.v3+json", "user-agent": Fr$2 }, mediaType: { format: "" } };
function Ur$2(e) {
  return e ? Object.keys(e).reduce((t, s) => (t[s.toLowerCase()] = e[s], t), {}) : {};
}
function Dr$2(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  const t = Object.getPrototypeOf(e);
  if (t === null) return true;
  const s = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
function Qe$2(e, t) {
  const s = Object.assign({}, e);
  return Object.keys(t).forEach((o) => {
    Dr$2(t[o]) ? o in e ? s[o] = Qe$2(e[o], t[o]) : Object.assign(s, { [o]: t[o] }) : Object.assign(s, { [o]: t[o] });
  }), s;
}
function je$3(e) {
  for (const t in e) e[t] === void 0 && delete e[t];
  return e;
}
function oe$1(e, t, s) {
  var _a2;
  if (typeof t == "string") {
    let [n, p] = t.split(" ");
    s = Object.assign(p ? { method: n, url: p } : { url: n }, s);
  } else s = Object.assign({}, t);
  s.headers = Ur$2(s.headers), je$3(s), je$3(s.headers);
  const o = Qe$2(e || {}, s);
  return s.url === "/graphql" && (e && ((_a2 = e.mediaType.previews) == null ? void 0 : _a2.length) && (o.mediaType.previews = e.mediaType.previews.filter((n) => !o.mediaType.previews.includes(n)).concat(o.mediaType.previews)), o.mediaType.previews = (o.mediaType.previews || []).map((n) => n.replace(/-preview/, ""))), o;
}
function Lr$2(e, t) {
  const s = /\?/.test(e) ? "&" : "?", o = Object.keys(t);
  return o.length === 0 ? e : e + s + o.map((n) => n === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${n}=${encodeURIComponent(t[n])}`).join("&");
}
var Ir$2 = /\{[^{}}]+\}/g;
function jr$2(e) {
  return e.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function qr$2(e) {
  const t = e.match(Ir$2);
  return t ? t.map(jr$2).reduce((s, o) => s.concat(o), []) : [];
}
function qe$2(e, t) {
  const s = { __proto__: null };
  for (const o of Object.keys(e)) t.indexOf(o) === -1 && (s[o] = e[o]);
  return s;
}
function Ye$2(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function U$4(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function x$3(e, t, s) {
  return t = e === "+" || e === "#" ? Ye$2(t) : U$4(t), s ? U$4(s) + "=" + t : t;
}
function F$3(e) {
  return e != null;
}
function Z$4(e) {
  return e === ";" || e === "&" || e === "?";
}
function $r$2(e, t, s, o) {
  var n = e[s], p = [];
  if (F$3(n) && n !== "") if (typeof n == "string" || typeof n == "number" || typeof n == "boolean") n = n.toString(), o && o !== "*" && (n = n.substring(0, parseInt(o, 10))), p.push(x$3(t, n, Z$4(t) ? s : ""));
  else if (o === "*") Array.isArray(n) ? n.filter(F$3).forEach(function(l) {
    p.push(x$3(t, l, Z$4(t) ? s : ""));
  }) : Object.keys(n).forEach(function(l) {
    F$3(n[l]) && p.push(x$3(t, n[l], l));
  });
  else {
    const l = [];
    Array.isArray(n) ? n.filter(F$3).forEach(function(g) {
      l.push(x$3(t, g));
    }) : Object.keys(n).forEach(function(g) {
      F$3(n[g]) && (l.push(U$4(g)), l.push(x$3(t, n[g].toString())));
    }), Z$4(t) ? p.push(U$4(s) + "=" + l.join(",")) : l.length !== 0 && p.push(l.join(","));
  }
  else t === ";" ? F$3(n) && p.push(U$4(s)) : n === "" && (t === "&" || t === "?") ? p.push(U$4(s) + "=") : n === "" && p.push("");
  return p;
}
function xr$2(e) {
  return { expand: Br$2.bind(null, e) };
}
function Br$2(e, t) {
  var s = ["+", "#", ".", "/", ";", "?", "&"];
  return e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(o, n, p) {
    if (n) {
      let g = "";
      const m = [];
      if (s.indexOf(n.charAt(0)) !== -1 && (g = n.charAt(0), n = n.substr(1)), n.split(/,/g).forEach(function(f) {
        var _ = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f);
        m.push($r$2(t, g, _[1], _[2] || _[3]));
      }), g && g !== "+") {
        var l = ",";
        return g === "?" ? l = "&" : g !== "#" && (l = g), (m.length !== 0 ? g : "") + m.join(l);
      } else return m.join(",");
    } else return Ye$2(p);
  }), e === "/" ? e : e.replace(/\/$/, "");
}
function Xe$2(e) {
  var _a2;
  let t = e.method.toUpperCase(), s = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), o = Object.assign({}, e.headers), n, p = qe$2(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
  const l = qr$2(s);
  s = xr$2(s).expand(p), /^http/.test(s) || (s = e.baseUrl + s);
  const g = Object.keys(e).filter((_) => l.includes(_)).concat("baseUrl"), m = qe$2(p, g);
  if (!/application\/octet-stream/i.test(o.accept) && (e.mediaType.format && (o.accept = o.accept.split(/,/).map((_) => _.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), s.endsWith("/graphql") && ((_a2 = e.mediaType.previews) == null ? void 0 : _a2.length))) {
    const _ = o.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
    o.accept = _.concat(e.mediaType.previews).map((T) => {
      const w = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${T}-preview${w}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? s = Lr$2(s, m) : "data" in m ? n = m.data : Object.keys(m).length && (n = m), !o["content-type"] && typeof n < "u" && (o["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof n > "u" && (n = ""), Object.assign({ method: t, url: s, headers: o }, typeof n < "u" ? { body: n } : null, e.request ? { request: e.request } : null);
}
function Wr$2(e, t, s) {
  return Xe$2(oe$1(e, t, s));
}
function Ze$2(e, t) {
  const s = oe$1(e, t), o = Wr$2.bind(null, s);
  return Object.assign(o, { DEFAULTS: s, defaults: Ze$2.bind(null, s), merge: oe$1.bind(null, s), parse: Xe$2 });
}
var Hr$2 = Ze$2(null, Cr$2), $e$3 = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vr$2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C$2 = {}, xe$3;
function Mr$2() {
  if (xe$3) return C$2;
  xe$3 = 1;
  const e = function() {
  };
  e.prototype = /* @__PURE__ */ Object.create(null);
  const t = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu, s = /\\([\v\u0020-\u00ff])/gu, o = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u, n = { type: "", parameters: new e() };
  Object.freeze(n.parameters), Object.freeze(n);
  function p(g) {
    if (typeof g != "string") throw new TypeError("argument header is required and must be a string");
    let m = g.indexOf(";");
    const f = m !== -1 ? g.slice(0, m).trim() : g.trim();
    if (o.test(f) === false) throw new TypeError("invalid media type");
    const _ = { type: f.toLowerCase(), parameters: new e() };
    if (m === -1) return _;
    let T, w, y;
    for (t.lastIndex = m; w = t.exec(g); ) {
      if (w.index !== m) throw new TypeError("invalid parameter format");
      m += w[0].length, T = w[1].toLowerCase(), y = w[2], y[0] === '"' && (y = y.slice(1, y.length - 1), s.test(y) && (y = y.replace(s, "$1"))), _.parameters[T] = y;
    }
    if (m !== g.length) throw new TypeError("invalid parameter format");
    return _;
  }
  function l(g) {
    if (typeof g != "string") return n;
    let m = g.indexOf(";");
    const f = m !== -1 ? g.slice(0, m).trim() : g.trim();
    if (o.test(f) === false) return n;
    const _ = { type: f.toLowerCase(), parameters: new e() };
    if (m === -1) return _;
    let T, w, y;
    for (t.lastIndex = m; w = t.exec(g); ) {
      if (w.index !== m) return n;
      m += w[0].length, T = w[1].toLowerCase(), y = w[2], y[0] === '"' && (y = y.slice(1, y.length - 1), s.test(y) && (y = y.replace(s, "$1"))), _.parameters[T] = y;
    }
    return m !== g.length ? n : _;
  }
  return C$2.default = { parse: p, safeParse: l }, C$2.parse = p, C$2.safeParse = l, C$2.defaultContentType = n, C$2;
}
var Nr$2 = Mr$2();
let B$3 = class B extends Error {
  constructor(t, s, o) {
    super(t);
    __publicField$5(this, "name");
    __publicField$5(this, "status");
    __publicField$5(this, "request");
    __publicField$5(this, "response");
    this.name = "HttpError", this.status = Number.parseInt(s), Number.isNaN(this.status) && (this.status = 0), "response" in o && (this.response = o.response);
    const n = Object.assign({}, o.request);
    o.request.headers.authorization && (n.headers = Object.assign({}, o.request.headers, { authorization: o.request.headers.authorization.replace(/(?<! ) .*$/, " [REDACTED]") })), n.url = n.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = n;
  }
};
var zr$2 = "0.0.0-development", Kr$2 = { headers: { "user-agent": `octokit-request.js/${zr$2} ${N$3()}` } };
function Jr$1(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  const t = Object.getPrototypeOf(e);
  if (t === null) return true;
  const s = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
async function Be$1(e) {
  var _a2, _b, _c, _d, _e;
  const t = ((_a2 = e.request) == null ? void 0 : _a2.fetch) || globalThis.fetch;
  if (!t) throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
  const s = ((_b = e.request) == null ? void 0 : _b.log) || console, o = ((_c = e.request) == null ? void 0 : _c.parseSuccessResponseBody) !== false, n = Jr$1(e.body) || Array.isArray(e.body) ? JSON.stringify(e.body) : e.body, p = Object.fromEntries(Object.entries(e.headers).map(([T, w]) => [T, String(w)]));
  let l;
  try {
    l = await t(e.url, { method: e.method, body: n, redirect: (_d = e.request) == null ? void 0 : _d.redirect, headers: p, signal: (_e = e.request) == null ? void 0 : _e.signal, ...e.body && { duplex: "half" } });
  } catch (T) {
    let w = "Unknown Error";
    if (T instanceof Error) {
      if (T.name === "AbortError") throw T.status = 500, T;
      w = T.message, T.name === "TypeError" && "cause" in T && (T.cause instanceof Error ? w = T.cause.message : typeof T.cause == "string" && (w = T.cause));
    }
    const y = new B$3(w, 500, { request: e });
    throw y.cause = T, y;
  }
  const g = l.status, m = l.url, f = {};
  for (const [T, w] of l.headers) f[T] = w;
  const _ = { url: m, status: g, headers: f, data: "" };
  if ("deprecation" in f) {
    const T = f.link && f.link.match(/<([^<>]+)>; rel="deprecation"/), w = T && T.pop();
    s.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${f.sunset}${w ? `. See ${w}` : ""}`);
  }
  if (g === 204 || g === 205) return _;
  if (e.method === "HEAD") {
    if (g < 400) return _;
    throw new B$3(l.statusText, g, { response: _, request: e });
  }
  if (g === 304) throw _.data = await ee$3(l), new B$3("Not modified", g, { response: _, request: e });
  if (g >= 400) throw _.data = await ee$3(l), new B$3(Yr$2(_.data), g, { response: _, request: e });
  return _.data = o ? await ee$3(l) : l.body, _;
}
async function ee$3(e) {
  var _a2;
  const t = e.headers.get("content-type");
  if (!t) return e.text().catch(() => "");
  const s = Nr$2.safeParse(t);
  if (Qr$2(s)) {
    let o = "";
    try {
      return o = await e.text(), JSON.parse(o);
    } catch {
      return o;
    }
  } else return s.type.startsWith("text/") || ((_a2 = s.parameters.charset) == null ? void 0 : _a2.toLowerCase()) === "utf-8" ? e.text().catch(() => "") : e.arrayBuffer().catch(() => new ArrayBuffer(0));
}
function Qr$2(e) {
  return e.type === "application/json" || e.type === "application/scim+json";
}
function Yr$2(e) {
  if (typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return "Unknown error";
  if ("message" in e) {
    const t = "documentation_url" in e ? ` - ${e.documentation_url}` : "";
    return Array.isArray(e.errors) ? `${e.message}: ${e.errors.map((s) => JSON.stringify(s)).join(", ")}${t}` : `${e.message}${t}`;
  }
  return `Unknown error: ${JSON.stringify(e)}`;
}
function ne$2(e, t) {
  const s = e.defaults(t);
  return Object.assign(function(n, p) {
    const l = s.merge(n, p);
    if (!l.request || !l.request.hook) return Be$1(s.parse(l));
    const g = (m, f) => Be$1(s.parse(s.merge(m, f)));
    return Object.assign(g, { endpoint: s, defaults: ne$2.bind(null, s) }), l.request.hook(g, l);
  }, { endpoint: s, defaults: ne$2.bind(null, s) });
}
var ie$2 = ne$2(Hr$2, Kr$2), Xr$2 = "0.0.0-development";
function Zr$2(e) {
  return `Request failed due to following response errors:
` + e.errors.map((t) => ` - ${t.message}`).join(`
`);
}
var et$2 = class et extends Error {
  constructor(e, t, s) {
    super(Zr$2(s));
    __publicField$5(this, "name", "GraphqlResponseError");
    __publicField$5(this, "errors");
    __publicField$5(this, "data");
    this.request = e, this.headers = t, this.response = s, this.errors = s.errors, this.data = s.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, rt$2 = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType", "operationName"], tt$2 = ["query", "method", "url"], We$2 = /\/api\/v3\/?$/;
function st$2(e, t, s) {
  if (s) {
    if (typeof t == "string" && "query" in s) return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
    for (const l in s) if (tt$2.includes(l)) return Promise.reject(new Error(`[@octokit/graphql] "${l}" cannot be used as variable name`));
  }
  const o = typeof t == "string" ? Object.assign({ query: t }, s) : t, n = Object.keys(o).reduce((l, g) => rt$2.includes(g) ? (l[g] = o[g], l) : (l.variables || (l.variables = {}), l.variables[g] = o[g], l), {}), p = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return We$2.test(p) && (n.url = p.replace(We$2, "/api/graphql")), e(n).then((l) => {
    if (l.data.errors) {
      const g = {};
      for (const m of Object.keys(l.headers)) g[m] = l.headers[m];
      throw new et$2(n, g, l.data);
    }
    return l.data.data;
  });
}
function ae$1(e, t) {
  const s = e.defaults(t);
  return Object.assign((n, p) => st$2(s, n, p), { defaults: ae$1.bind(null, s), endpoint: s.endpoint });
}
ae$1(ie$2, { headers: { "user-agent": `octokit-graphql.js/${Xr$2} ${N$3()}` }, method: "POST", url: "/graphql" });
function ot$2(e) {
  return ae$1(e, { method: "POST", url: "/graphql" });
}
var re$3 = "(?:[a-zA-Z0-9_-]+)", He$2 = "\\.", Ve$3 = new RegExp(`^${re$3}${He$2}${re$3}${He$2}${re$3}$`), nt$2 = Ve$3.test.bind(Ve$3);
async function it$2(e) {
  const t = nt$2(e), s = e.startsWith("v1.") || e.startsWith("ghs_"), o = e.startsWith("ghu_");
  return { type: "token", token: e, tokenType: t ? "app" : s ? "installation" : o ? "user-to-server" : "oauth" };
}
function at$2(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function ct$3(e, t, s, o) {
  const n = t.endpoint.merge(s, o);
  return n.headers.authorization = at$2(e), t(n);
}
var ut$3 = function(t) {
  if (!t) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof t != "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  return t = t.replace(/^(token|bearer) +/i, ""), Object.assign(it$2.bind(null, t), { hook: ct$3.bind(null, t) });
};
const er$2 = "6.1.4", Me$2 = () => {
}, lt$2 = console.warn.bind(console), pt$3 = console.error.bind(console), Ne$2 = `octokit-core.js/${er$2} ${N$3()}`;
let gt$4 = (_a$1 = class {
  constructor(t = {}) {
    __publicField$5(this, "request");
    __publicField$5(this, "graphql");
    __publicField$5(this, "log");
    __publicField$5(this, "hook");
    __publicField$5(this, "auth");
    const s = new Ar$2.Collection(), o = { baseUrl: ie$2.endpoint.DEFAULTS.baseUrl, headers: {}, request: Object.assign({}, t.request, { hook: s.bind(null, "request") }), mediaType: { previews: [], format: "" } };
    if (o.headers["user-agent"] = t.userAgent ? `${t.userAgent} ${Ne$2}` : Ne$2, t.baseUrl && (o.baseUrl = t.baseUrl), t.previews && (o.mediaType.previews = t.previews), t.timeZone && (o.headers["time-zone"] = t.timeZone), this.request = ie$2.defaults(o), this.graphql = ot$2(this.request).defaults(o), this.log = Object.assign({ debug: Me$2, info: Me$2, warn: lt$2, error: pt$3 }, t.log), this.hook = s, t.authStrategy) {
      const { authStrategy: p, ...l } = t, g = p(Object.assign({ request: this.request, log: this.log, octokit: this, octokitOptions: l }, t.auth));
      s.wrap("request", g.hook), this.auth = g;
    } else if (!t.auth) this.auth = async () => ({ type: "unauthenticated" });
    else {
      const p = ut$3(t.auth);
      s.wrap("request", p.hook), this.auth = p;
    }
    const n = this.constructor;
    for (let p = 0; p < n.plugins.length; ++p) Object.assign(this, n.plugins[p](this, t));
  }
  static defaults(t) {
    return class extends this {
      constructor(...o) {
        const n = o[0] || {};
        if (typeof t == "function") {
          super(t(n));
          return;
        }
        super(Object.assign({}, t, n, n.userAgent && t.userAgent ? { userAgent: `${n.userAgent} ${t.userAgent}` } : null));
      }
    };
  }
  static plugin(...t) {
    var _a2;
    const s = this.plugins;
    return _a2 = class extends this {
    }, __publicField$5(_a2, "plugins", s.concat(t.filter((n) => !s.includes(n)))), _a2;
  }
}, __publicField$5(_a$1, "VERSION", er$2), __publicField$5(_a$1, "plugins", []), _a$1);
var dt$3 = "0.0.0-development";
function mt$4(e) {
  if (!e.data) return { ...e, data: [] };
  if (!("total_count" in e.data && !("url" in e.data))) return e;
  const s = e.data.incomplete_results, o = e.data.repository_selection, n = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  const p = Object.keys(e.data)[0], l = e.data[p];
  return e.data = l, typeof s < "u" && (e.data.incomplete_results = s), typeof o < "u" && (e.data.repository_selection = o), e.data.total_count = n, e;
}
function ce$2(e, t, s) {
  const o = typeof t == "function" ? t.endpoint(s) : e.request.endpoint(t, s), n = typeof t == "function" ? t : e.request, p = o.method, l = o.headers;
  let g = o.url;
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!g) return { done: true };
    try {
      const m = await n({ method: p, url: g, headers: l }), f = mt$4(m);
      return g = ((f.headers.link || "").match(/<([^<>]+)>;\s*rel="next"/) || [])[1], { value: f };
    } catch (m) {
      if (m.status !== 409) throw m;
      return g = "", { value: { status: 200, headers: {}, data: [] } };
    }
  } }) };
}
function rr$2(e, t, s, o) {
  return typeof s == "function" && (o = s, s = void 0), tr$2(e, [], ce$2(e, t, s)[Symbol.asyncIterator](), o);
}
function tr$2(e, t, s, o) {
  return s.next().then((n) => {
    if (n.done) return t;
    let p = false;
    function l() {
      p = true;
    }
    return t = t.concat(o ? o(n.value, l) : n.value.data), p ? t : tr$2(e, t, s, o);
  });
}
Object.assign(rr$2, { iterator: ce$2 });
function sr$2(e) {
  return { paginate: Object.assign(rr$2.bind(null, e), { iterator: ce$2.bind(null, e) }) };
}
sr$2.VERSION = dt$3;
var ht$2 = (e, t) => `The cursor at "${e.join(",")}" did not change its value "${t}" after a page transition. Please make sure your that your query is set up correctly.`, Et$4 = class Et extends Error {
  constructor(e, t) {
    super(ht$2(e.pathInQuery, t));
    __publicField$5(this, "name", "MissingCursorChangeError");
    this.pageInfo = e, this.cursorValue = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, Tt$4 = class Tt extends Error {
  constructor(e) {
    super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e, null, 2)}`);
    __publicField$5(this, "name", "MissingPageInfo");
    this.response = e, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, _t$3 = (e) => Object.prototype.toString.call(e) === "[object Object]";
function or$2(e) {
  const t = nr$2(e, "pageInfo");
  if (t.length === 0) throw new Tt$4(e);
  return t;
}
var nr$2 = (e, t, s = []) => {
  for (const o of Object.keys(e)) {
    const n = [...s, o], p = e[o];
    if (_t$3(p)) {
      if (p.hasOwnProperty(t)) return n;
      const l = nr$2(p, t, n);
      if (l.length > 0) return l;
    }
  }
  return [];
}, W$4 = (e, t) => t.reduce((s, o) => s[o], e), te$3 = (e, t, s) => {
  const o = t[t.length - 1], n = [...t].slice(0, -1), p = W$4(e, n);
  typeof s == "function" ? p[o] = s(p[o]) : p[o] = s;
}, ft$3 = (e) => {
  const t = or$2(e);
  return { pathInQuery: t, pageInfo: W$4(e, [...t, "pageInfo"]) };
}, ir$2 = (e) => e.hasOwnProperty("hasNextPage"), wt$4 = (e) => ir$2(e) ? e.endCursor : e.startCursor, bt$4 = (e) => ir$2(e) ? e.hasNextPage : e.hasPreviousPage, ar$2 = (e) => (t, s = {}) => {
  let o = true, n = { ...s };
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!o) return { done: true, value: {} };
    const p = await e.graphql(t, n), l = ft$3(p), g = wt$4(l.pageInfo);
    if (o = bt$4(l.pageInfo), o && g === n.cursor) throw new Et$4(l, g);
    return n = { ...n, cursor: g }, { done: false, value: p };
  } }) };
}, yt$4 = (e, t) => {
  if (Object.keys(e).length === 0) return Object.assign(e, t);
  const s = or$2(e), o = [...s, "nodes"], n = W$4(t, o);
  n && te$3(e, o, (m) => [...m, ...n]);
  const p = [...s, "edges"], l = W$4(t, p);
  l && te$3(e, p, (m) => [...m, ...l]);
  const g = [...s, "pageInfo"];
  return te$3(e, g, W$4(t, g)), e;
}, vt$4 = (e) => {
  const t = ar$2(e);
  return async (s, o = {}) => {
    let n = {};
    for await (const p of t(s, o)) n = yt$4(n, p);
    return n;
  };
};
function Pt$4(e) {
  return { graphql: Object.assign(e.graphql, { paginate: Object.assign(vt$4(e), { iterator: ar$2(e) }) }) };
}
const kt$4 = "13.3.1", Gt$3 = { actions: { addCustomLabelsToSelfHostedRunnerForOrg: ["POST /orgs/{org}/actions/runners/{runner_id}/labels"], addCustomLabelsToSelfHostedRunnerForRepo: ["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], addRepoAccessToSelfHostedRunnerGroupInOrg: ["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"], cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"], createEnvironmentVariable: ["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"], createOrUpdateEnvironmentSecret: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"], createOrgVariable: ["POST /orgs/{org}/actions/variables"], createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"], createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"], createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"], createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"], createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"], createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"], deleteActionsCacheById: ["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"], deleteActionsCacheByKey: ["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"], deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], deleteEnvironmentSecret: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], deleteEnvironmentVariable: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"], deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"], deleteRepoVariable: ["DELETE /repos/{owner}/{repo}/actions/variables/{name}"], deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"], deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"], deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"], deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"], disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"], downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"], downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"], downloadWorkflowRunAttemptLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"], downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"], enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"], forceCancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"], generateRunnerJitconfigForOrg: ["POST /orgs/{org}/actions/runners/generate-jitconfig"], generateRunnerJitconfigForRepo: ["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"], getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"], getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"], getActionsCacheUsageByRepoForOrg: ["GET /orgs/{org}/actions/cache/usage-by-repository"], getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"], getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"], getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"], getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], getCustomOidcSubClaimForRepo: ["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"], getEnvironmentPublicKey: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"], getEnvironmentSecret: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], getEnvironmentVariable: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], getGithubActionsDefaultWorkflowPermissionsOrganization: ["GET /orgs/{org}/actions/permissions/workflow"], getGithubActionsDefaultWorkflowPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/workflow"], getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"], getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"], getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"], getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"], getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"], getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, { renamed: ["actions", "getGithubActionsPermissionsRepository"] }], getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"], getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"], getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"], getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"], getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"], getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"], getWorkflowAccessToRepository: ["GET /repos/{owner}/{repo}/actions/permissions/access"], getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"], getWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"], getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"], getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"], listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"], listEnvironmentSecrets: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"], listEnvironmentVariables: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"], listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"], listJobsForWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"], listLabelsForSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}/labels"], listLabelsForSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], listOrgSecrets: ["GET /orgs/{org}/actions/secrets"], listOrgVariables: ["GET /orgs/{org}/actions/variables"], listRepoOrganizationSecrets: ["GET /repos/{owner}/{repo}/actions/organization-secrets"], listRepoOrganizationVariables: ["GET /repos/{owner}/{repo}/actions/organization-variables"], listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"], listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"], listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"], listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"], listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"], listSelectedReposForOrgVariable: ["GET /orgs/{org}/actions/variables/{name}/repositories"], listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"], listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"], listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"], listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"], listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"], listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"], reRunJobForWorkflowRun: ["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"], reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"], reRunWorkflowFailedJobs: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"], removeAllCustomLabelsFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"], removeAllCustomLabelsFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], removeCustomLabelFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"], removeCustomLabelFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], reviewCustomGatesForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"], reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"], setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"], setCustomLabelsForSelfHostedRunnerForOrg: ["PUT /orgs/{org}/actions/runners/{runner_id}/labels"], setCustomLabelsForSelfHostedRunnerForRepo: ["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], setCustomOidcSubClaimForRepo: ["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"], setGithubActionsDefaultWorkflowPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions/workflow"], setGithubActionsDefaultWorkflowPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/workflow"], setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"], setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"], setSelectedReposForOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories"], setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"], setWorkflowAccessToRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/access"], updateEnvironmentVariable: ["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"], updateRepoVariable: ["PATCH /repos/{owner}/{repo}/actions/variables/{name}"] }, activity: { checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"], deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"], deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"], getFeeds: ["GET /feeds"], getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"], getThread: ["GET /notifications/threads/{thread_id}"], getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"], listEventsForAuthenticatedUser: ["GET /users/{username}/events"], listNotificationsForAuthenticatedUser: ["GET /notifications"], listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"], listPublicEvents: ["GET /events"], listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"], listPublicEventsForUser: ["GET /users/{username}/events/public"], listPublicOrgEvents: ["GET /orgs/{org}/events"], listReceivedEventsForUser: ["GET /users/{username}/received_events"], listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"], listRepoEvents: ["GET /repos/{owner}/{repo}/events"], listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"], listReposStarredByAuthenticatedUser: ["GET /user/starred"], listReposStarredByUser: ["GET /users/{username}/starred"], listReposWatchedByUser: ["GET /users/{username}/subscriptions"], listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"], listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"], listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"], markNotificationsAsRead: ["PUT /notifications"], markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"], markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"], markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"], setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"], setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"], starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"], unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"] }, apps: { addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }], addRepoToInstallationForAuthenticatedUser: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"], checkToken: ["POST /applications/{client_id}/token"], createFromManifest: ["POST /app-manifests/{code}/conversions"], createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"], deleteAuthorization: ["DELETE /applications/{client_id}/grant"], deleteInstallation: ["DELETE /app/installations/{installation_id}"], deleteToken: ["DELETE /applications/{client_id}/token"], getAuthenticated: ["GET /app"], getBySlug: ["GET /apps/{app_slug}"], getInstallation: ["GET /app/installations/{installation_id}"], getOrgInstallation: ["GET /orgs/{org}/installation"], getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"], getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"], getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"], getUserInstallation: ["GET /users/{username}/installation"], getWebhookConfigForApp: ["GET /app/hook/config"], getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"], listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"], listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"], listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"], listInstallationRequestsForAuthenticatedApp: ["GET /app/installation-requests"], listInstallations: ["GET /app/installations"], listInstallationsForAuthenticatedUser: ["GET /user/installations"], listPlans: ["GET /marketplace_listing/plans"], listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"], listReposAccessibleToInstallation: ["GET /installation/repositories"], listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"], listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"], listWebhookDeliveries: ["GET /app/hook/deliveries"], redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"], removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }], removeRepoFromInstallationForAuthenticatedUser: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"], resetToken: ["PATCH /applications/{client_id}/token"], revokeInstallationAccessToken: ["DELETE /installation/token"], scopeToken: ["POST /applications/{client_id}/token/scoped"], suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"], unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"], updateWebhookConfigForApp: ["PATCH /app/hook/config"] }, billing: { getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"], getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"], getGithubBillingUsageReportOrg: ["GET /organizations/{org}/settings/billing/usage"], getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"], getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"], getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"], getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"] }, checks: { create: ["POST /repos/{owner}/{repo}/check-runs"], createSuite: ["POST /repos/{owner}/{repo}/check-suites"], get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"], getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"], listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"], listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"], listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"], listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"], rerequestRun: ["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"], rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"], setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"], update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"] }, codeScanning: { commitAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"], createAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], createVariantAnalysis: ["POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"], deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"], deleteCodeqlDatabase: ["DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, { renamedParameters: { alert_id: "alert_number" } }], getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"], getAutofix: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], getCodeqlDatabase: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"], getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"], getVariantAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"], getVariantAnalysisRepoTask: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"], listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"], listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"], listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, { renamed: ["codeScanning", "listAlertInstances"] }], listCodeqlDatabases: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"], listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"], updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"], updateDefaultSetup: ["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"], uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"] }, codeSecurity: { attachConfiguration: ["POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"], attachEnterpriseConfiguration: ["POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"], createConfiguration: ["POST /orgs/{org}/code-security/configurations"], createConfigurationForEnterprise: ["POST /enterprises/{enterprise}/code-security/configurations"], deleteConfiguration: ["DELETE /orgs/{org}/code-security/configurations/{configuration_id}"], deleteConfigurationForEnterprise: ["DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], detachConfiguration: ["DELETE /orgs/{org}/code-security/configurations/detach"], getConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}"], getConfigurationForRepository: ["GET /repos/{owner}/{repo}/code-security-configuration"], getConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations"], getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"], getDefaultConfigurations: ["GET /orgs/{org}/code-security/configurations/defaults"], getDefaultConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/defaults"], getRepositoriesForConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"], getRepositoriesForEnterpriseConfiguration: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"], getSingleConfigurationForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], setConfigurationAsDefault: ["PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"], setConfigurationAsDefaultForEnterprise: ["PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"], updateConfiguration: ["PATCH /orgs/{org}/code-security/configurations/{configuration_id}"], updateEnterpriseConfiguration: ["PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"] }, codesOfConduct: { getAllCodesOfConduct: ["GET /codes_of_conduct"], getConductCode: ["GET /codes_of_conduct/{key}"] }, codespaces: { addRepositoryForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], checkPermissionsForDevcontainer: ["GET /repos/{owner}/{repo}/codespaces/permissions_check"], codespaceMachinesForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/machines"], createForAuthenticatedUser: ["POST /user/codespaces"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], createOrUpdateSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}"], createWithPrForAuthenticatedUser: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"], createWithRepoForAuthenticatedUser: ["POST /repos/{owner}/{repo}/codespaces"], deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"], deleteFromOrganization: ["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], deleteSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}"], exportForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/exports"], getCodespacesForUserInOrg: ["GET /orgs/{org}/members/{username}/codespaces"], getExportDetailsForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/exports/{export_id}"], getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"], getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"], getPublicKeyForAuthenticatedUser: ["GET /user/codespaces/secrets/public-key"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], getSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}"], listDevcontainersInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/devcontainers"], listForAuthenticatedUser: ["GET /user/codespaces"], listInOrganization: ["GET /orgs/{org}/codespaces", {}, { renamedParameters: { org_id: "org" } }], listInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces"], listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"], listRepositoriesForSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}/repositories"], listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], preFlightWithRepoForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/new"], publishForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/publish"], removeRepositoryForSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], repoMachinesForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/machines"], setRepositoriesForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"], stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"], stopInOrganization: ["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"], updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"] }, copilot: { addCopilotSeatsForTeams: ["POST /orgs/{org}/copilot/billing/selected_teams"], addCopilotSeatsForUsers: ["POST /orgs/{org}/copilot/billing/selected_users"], cancelCopilotSeatAssignmentForTeams: ["DELETE /orgs/{org}/copilot/billing/selected_teams"], cancelCopilotSeatAssignmentForUsers: ["DELETE /orgs/{org}/copilot/billing/selected_users"], copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"], copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"], getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"], getCopilotSeatDetailsForUser: ["GET /orgs/{org}/members/{username}/copilot"], listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"], usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"], usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"] }, dependabot: { addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"], getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/dependabot/alerts"], listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"], listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], updateAlert: ["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"] }, dependencyGraph: { createRepositorySnapshot: ["POST /repos/{owner}/{repo}/dependency-graph/snapshots"], diffRange: ["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"], exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"] }, emojis: { get: ["GET /emojis"] }, gists: { checkIsStarred: ["GET /gists/{gist_id}/star"], create: ["POST /gists"], createComment: ["POST /gists/{gist_id}/comments"], delete: ["DELETE /gists/{gist_id}"], deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"], fork: ["POST /gists/{gist_id}/forks"], get: ["GET /gists/{gist_id}"], getComment: ["GET /gists/{gist_id}/comments/{comment_id}"], getRevision: ["GET /gists/{gist_id}/{sha}"], list: ["GET /gists"], listComments: ["GET /gists/{gist_id}/comments"], listCommits: ["GET /gists/{gist_id}/commits"], listForUser: ["GET /users/{username}/gists"], listForks: ["GET /gists/{gist_id}/forks"], listPublic: ["GET /gists/public"], listStarred: ["GET /gists/starred"], star: ["PUT /gists/{gist_id}/star"], unstar: ["DELETE /gists/{gist_id}/star"], update: ["PATCH /gists/{gist_id}"], updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"] }, git: { createBlob: ["POST /repos/{owner}/{repo}/git/blobs"], createCommit: ["POST /repos/{owner}/{repo}/git/commits"], createRef: ["POST /repos/{owner}/{repo}/git/refs"], createTag: ["POST /repos/{owner}/{repo}/git/tags"], createTree: ["POST /repos/{owner}/{repo}/git/trees"], deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"], getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"], getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"], getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"], getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"], getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"], listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"], updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"] }, gitignore: { getAllTemplates: ["GET /gitignore/templates"], getTemplate: ["GET /gitignore/templates/{name}"] }, interactions: { getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"], getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"], getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"], getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }], removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"], removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"], removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"], removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }], setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"], setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"], setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"], setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }] }, issues: { addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"], addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"], addSubIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"], checkUserCanBeAssignedToIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"], create: ["POST /repos/{owner}/{repo}/issues"], createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"], createLabel: ["POST /repos/{owner}/{repo}/labels"], createMilestone: ["POST /repos/{owner}/{repo}/milestones"], deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"], deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"], deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"], get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"], getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"], getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"], getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"], getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"], list: ["GET /issues"], listAssignees: ["GET /repos/{owner}/{repo}/assignees"], listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"], listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"], listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"], listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"], listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"], listForAuthenticatedUser: ["GET /user/issues"], listForOrg: ["GET /orgs/{org}/issues"], listForRepo: ["GET /repos/{owner}/{repo}/issues"], listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"], listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"], listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"], listMilestones: ["GET /repos/{owner}/{repo}/milestones"], listSubIssues: ["GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"], removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"], removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"], removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"], removeSubIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"], reprioritizeSubIssue: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"], setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"], unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"], update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"], updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"], updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"], updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"] }, licenses: { get: ["GET /licenses/{license}"], getAllCommonlyUsed: ["GET /licenses"], getForRepo: ["GET /repos/{owner}/{repo}/license"] }, markdown: { render: ["POST /markdown"], renderRaw: ["POST /markdown/raw", { headers: { "content-type": "text/plain; charset=utf-8" } }] }, meta: { get: ["GET /meta"], getAllVersions: ["GET /versions"], getOctocat: ["GET /octocat"], getZen: ["GET /zen"], root: ["GET /"] }, migrations: { deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive"], deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive"], downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive"], getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive"], getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"], getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"], listForAuthenticatedUser: ["GET /user/migrations"], listForOrg: ["GET /orgs/{org}/migrations"], listReposForAuthenticatedUser: ["GET /user/migrations/{migration_id}/repositories"], listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"], listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {}, { renamed: ["migrations", "listReposForAuthenticatedUser"] }], startForAuthenticatedUser: ["POST /user/migrations"], startForOrg: ["POST /orgs/{org}/migrations"], unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"], unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"] }, oidc: { getOidcCustomSubTemplateForOrg: ["GET /orgs/{org}/actions/oidc/customization/sub"], updateOidcCustomSubTemplateForOrg: ["PUT /orgs/{org}/actions/oidc/customization/sub"] }, orgs: { addSecurityManagerTeam: ["PUT /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team" }], assignTeamToOrgRole: ["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], assignUserToOrgRole: ["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"], blockUser: ["PUT /orgs/{org}/blocks/{username}"], cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"], checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"], checkMembershipForUser: ["GET /orgs/{org}/members/{username}"], checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"], convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"], createInvitation: ["POST /orgs/{org}/invitations"], createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"], createOrUpdateCustomPropertiesValuesForRepos: ["PATCH /orgs/{org}/properties/values"], createOrUpdateCustomProperty: ["PUT /orgs/{org}/properties/schema/{custom_property_name}"], createWebhook: ["POST /orgs/{org}/hooks"], delete: ["DELETE /orgs/{org}"], deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"], enableOrDisableSecurityProductOnAllOrgRepos: ["POST /orgs/{org}/{security_product}/{enablement}", {}, { deprecated: "octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos() is deprecated, see https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization" }], get: ["GET /orgs/{org}"], getAllCustomProperties: ["GET /orgs/{org}/properties/schema"], getCustomProperty: ["GET /orgs/{org}/properties/schema/{custom_property_name}"], getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"], getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"], getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"], getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"], getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"], list: ["GET /organizations"], listAppInstallations: ["GET /orgs/{org}/installations"], listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"], listBlockedUsers: ["GET /orgs/{org}/blocks"], listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"], listFailedInvitations: ["GET /orgs/{org}/failed_invitations"], listForAuthenticatedUser: ["GET /user/orgs"], listForUser: ["GET /users/{username}/orgs"], listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"], listMembers: ["GET /orgs/{org}/members"], listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"], listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"], listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"], listOrgRoles: ["GET /orgs/{org}/organization-roles"], listOrganizationFineGrainedPermissions: ["GET /orgs/{org}/organization-fine-grained-permissions"], listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"], listPatGrantRepositories: ["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"], listPatGrantRequestRepositories: ["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"], listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"], listPatGrants: ["GET /orgs/{org}/personal-access-tokens"], listPendingInvitations: ["GET /orgs/{org}/invitations"], listPublicMembers: ["GET /orgs/{org}/public_members"], listSecurityManagerTeams: ["GET /orgs/{org}/security-managers", {}, { deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams" }], listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /orgs/{org}/hooks"], pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeCustomProperty: ["DELETE /orgs/{org}/properties/schema/{custom_property_name}"], removeMember: ["DELETE /orgs/{org}/members/{username}"], removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"], removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"], removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"], removeSecurityManagerTeam: ["DELETE /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team" }], reviewPatGrantRequest: ["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"], reviewPatGrantRequestsInBulk: ["POST /orgs/{org}/personal-access-token-requests"], revokeAllOrgRolesTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"], revokeAllOrgRolesUser: ["DELETE /orgs/{org}/organization-roles/users/{username}"], revokeOrgRoleTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], revokeOrgRoleUser: ["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"], setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"], setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"], unblockUser: ["DELETE /orgs/{org}/blocks/{username}"], update: ["PATCH /orgs/{org}"], updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"], updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"], updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"], updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"], updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"] }, packages: { deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"], deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"], deletePackageForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}"], deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }], getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"] }], getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"], getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"], getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"], getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"], getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], listDockerMigrationConflictingPackagesForAuthenticatedUser: ["GET /user/docker/conflicts"], listDockerMigrationConflictingPackagesForOrganization: ["GET /orgs/{org}/docker/conflicts"], listDockerMigrationConflictingPackagesForUser: ["GET /users/{username}/docker/conflicts"], listPackagesForAuthenticatedUser: ["GET /user/packages"], listPackagesForOrganization: ["GET /orgs/{org}/packages"], listPackagesForUser: ["GET /users/{username}/packages"], restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"] }, privateRegistries: { createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"], deleteOrgPrivateRegistry: ["DELETE /orgs/{org}/private-registries/{secret_name}"], getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"], getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"], listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"], updateOrgPrivateRegistry: ["PATCH /orgs/{org}/private-registries/{secret_name}"] }, projects: { addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"], createCard: ["POST /projects/columns/{column_id}/cards"], createColumn: ["POST /projects/{project_id}/columns"], createForAuthenticatedUser: ["POST /user/projects"], createForOrg: ["POST /orgs/{org}/projects"], createForRepo: ["POST /repos/{owner}/{repo}/projects"], delete: ["DELETE /projects/{project_id}"], deleteCard: ["DELETE /projects/columns/cards/{card_id}"], deleteColumn: ["DELETE /projects/columns/{column_id}"], get: ["GET /projects/{project_id}"], getCard: ["GET /projects/columns/cards/{card_id}"], getColumn: ["GET /projects/columns/{column_id}"], getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission"], listCards: ["GET /projects/columns/{column_id}/cards"], listCollaborators: ["GET /projects/{project_id}/collaborators"], listColumns: ["GET /projects/{project_id}/columns"], listForOrg: ["GET /orgs/{org}/projects"], listForRepo: ["GET /repos/{owner}/{repo}/projects"], listForUser: ["GET /users/{username}/projects"], moveCard: ["POST /projects/columns/cards/{card_id}/moves"], moveColumn: ["POST /projects/columns/{column_id}/moves"], removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}"], update: ["PATCH /projects/{project_id}"], updateCard: ["PATCH /projects/columns/cards/{card_id}"], updateColumn: ["PATCH /projects/columns/{column_id}"] }, pulls: { checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"], create: ["POST /repos/{owner}/{repo}/pulls"], createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"], createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"], deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"], dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"], get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"], getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"], list: ["GET /repos/{owner}/{repo}/pulls"], listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"], listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"], listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"], listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"], listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"], listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"], removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"], update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"], updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"], updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"] }, rateLimit: { get: ["GET /rate_limit"] }, reactions: { createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"], createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"], createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"], createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"], deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"], deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"], deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"], deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"], deleteForRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"], deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"], deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"], listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"], listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"], listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], listForRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"], listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"] }, repos: { acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }], acceptInvitationForAuthenticatedUser: ["PATCH /user/repository_invitations/{invitation_id}"], addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"], addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], cancelPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"], checkAutomatedSecurityFixes: ["GET /repos/{owner}/{repo}/automated-security-fixes"], checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"], checkPrivateVulnerabilityReporting: ["GET /repos/{owner}/{repo}/private-vulnerability-reporting"], checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts"], codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"], compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"], compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"], createAttestation: ["POST /repos/{owner}/{repo}/attestations"], createAutolink: ["POST /repos/{owner}/{repo}/autolinks"], createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"], createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"], createDeployKey: ["POST /repos/{owner}/{repo}/keys"], createDeployment: ["POST /repos/{owner}/{repo}/deployments"], createDeploymentBranchPolicy: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], createDeploymentProtectionRule: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"], createForAuthenticatedUser: ["POST /user/repos"], createFork: ["POST /repos/{owner}/{repo}/forks"], createInOrg: ["POST /orgs/{org}/repos"], createOrUpdateCustomPropertiesValues: ["PATCH /repos/{owner}/{repo}/properties/values"], createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"], createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"], createOrgRuleset: ["POST /orgs/{org}/rulesets"], createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"], createPagesSite: ["POST /repos/{owner}/{repo}/pages"], createRelease: ["POST /repos/{owner}/{repo}/releases"], createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"], createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate"], createWebhook: ["POST /repos/{owner}/{repo}/hooks"], declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }], declineInvitationForAuthenticatedUser: ["DELETE /user/repository_invitations/{invitation_id}"], delete: ["DELETE /repos/{owner}/{repo}"], deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"], deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"], deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"], deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"], deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"], deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"], deleteDeploymentBranchPolicy: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"], deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"], deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"], deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"], deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"], deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"], deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"], deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"], disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes"], disableDeploymentProtectionRule: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], disablePrivateVulnerabilityReporting: ["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"], disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts"], downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, { renamed: ["repos", "downloadZipballArchive"] }], downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"], downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"], enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes"], enablePrivateVulnerabilityReporting: ["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"], enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts"], generateReleaseNotes: ["POST /repos/{owner}/{repo}/releases/generate-notes"], get: ["GET /repos/{owner}/{repo}"], getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], getAllDeploymentProtectionRules: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"], getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"], getAllTopics: ["GET /repos/{owner}/{repo}/topics"], getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"], getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"], getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"], getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"], getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"], getClones: ["GET /repos/{owner}/{repo}/traffic/clones"], getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"], getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"], getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"], getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"], getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"], getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"], getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"], getContent: ["GET /repos/{owner}/{repo}/contents/{path}"], getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"], getCustomDeploymentProtectionRule: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"], getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"], getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"], getDeploymentBranchPolicy: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"], getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"], getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"], getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"], getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"], getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"], getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"], getOrgRulesets: ["GET /orgs/{org}/rulesets"], getPages: ["GET /repos/{owner}/{repo}/pages"], getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"], getPagesDeployment: ["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"], getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"], getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"], getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"], getReadme: ["GET /repos/{owner}/{repo}/readme"], getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"], getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"], getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"], getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"], getRepoRuleSuite: ["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"], getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"], getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"], getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"], getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"], getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"], getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"], getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"], getViews: ["GET /repos/{owner}/{repo}/traffic/views"], getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"], getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"], listActivities: ["GET /repos/{owner}/{repo}/activity"], listAttestations: ["GET /repos/{owner}/{repo}/attestations/{subject_digest}"], listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"], listBranches: ["GET /repos/{owner}/{repo}/branches"], listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"], listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"], listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"], listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"], listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"], listCommits: ["GET /repos/{owner}/{repo}/commits"], listContributors: ["GET /repos/{owner}/{repo}/contributors"], listCustomDeploymentRuleIntegrations: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"], listDeployKeys: ["GET /repos/{owner}/{repo}/keys"], listDeploymentBranchPolicies: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], listDeployments: ["GET /repos/{owner}/{repo}/deployments"], listForAuthenticatedUser: ["GET /user/repos"], listForOrg: ["GET /orgs/{org}/repos"], listForUser: ["GET /users/{username}/repos"], listForks: ["GET /repos/{owner}/{repo}/forks"], listInvitations: ["GET /repos/{owner}/{repo}/invitations"], listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"], listLanguages: ["GET /repos/{owner}/{repo}/languages"], listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"], listPublic: ["GET /repositories"], listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"], listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"], listReleases: ["GET /repos/{owner}/{repo}/releases"], listTags: ["GET /repos/{owner}/{repo}/tags"], listTeams: ["GET /repos/{owner}/{repo}/teams"], listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /repos/{owner}/{repo}/hooks"], merge: ["POST /repos/{owner}/{repo}/merges"], mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"], pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"], removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"], replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"], requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"], setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"], transfer: ["POST /repos/{owner}/{repo}/transfer"], update: ["PATCH /repos/{owner}/{repo}"], updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"], updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"], updateDeploymentBranchPolicy: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"], updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"], updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"], updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"], updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"], updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"], updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, { renamed: ["repos", "updateStatusCheckProtection"] }], updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"], updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"], uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", { baseUrl: "https://uploads.github.com" }] }, search: { code: ["GET /search/code"], commits: ["GET /search/commits"], issuesAndPullRequests: ["GET /search/issues"], labels: ["GET /search/labels"], repos: ["GET /search/repositories"], topics: ["GET /search/topics"], users: ["GET /search/users"] }, secretScanning: { createPushProtectionBypass: ["POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"], getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"], getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/secret-scanning/alerts"], listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"], listLocationsForAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"], updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"] }, securityAdvisories: { createFork: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"], createPrivateVulnerabilityReport: ["POST /repos/{owner}/{repo}/security-advisories/reports"], createRepositoryAdvisory: ["POST /repos/{owner}/{repo}/security-advisories"], createRepositoryAdvisoryCveRequest: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"], getGlobalAdvisory: ["GET /advisories/{ghsa_id}"], getRepositoryAdvisory: ["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"], listGlobalAdvisories: ["GET /advisories"], listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"], listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"], updateRepositoryAdvisory: ["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"] }, teams: { addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"], addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"], addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"], checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], create: ["POST /orgs/{org}/teams"], createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"], deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"], getByName: ["GET /orgs/{org}/teams/{team_slug}"], getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"], list: ["GET /orgs/{org}/teams"], listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"], listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"], listForAuthenticatedUser: ["GET /user/teams"], listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"], listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"], listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"], listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"], removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"], removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"], removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"] }, users: { addEmailForAuthenticated: ["POST /user/emails", {}, { renamed: ["users", "addEmailForAuthenticatedUser"] }], addEmailForAuthenticatedUser: ["POST /user/emails"], addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"], block: ["PUT /user/blocks/{username}"], checkBlocked: ["GET /user/blocks/{username}"], checkFollowingForUser: ["GET /users/{username}/following/{target_user}"], checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"], createGpgKeyForAuthenticated: ["POST /user/gpg_keys", {}, { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }], createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"], createPublicSshKeyForAuthenticated: ["POST /user/keys", {}, { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }], createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"], createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"], deleteEmailForAuthenticated: ["DELETE /user/emails", {}, { renamed: ["users", "deleteEmailForAuthenticatedUser"] }], deleteEmailForAuthenticatedUser: ["DELETE /user/emails"], deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }], deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"], deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}", {}, { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }], deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"], deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"], deleteSshSigningKeyForAuthenticatedUser: ["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"], follow: ["PUT /user/following/{username}"], getAuthenticated: ["GET /user"], getById: ["GET /user/{account_id}"], getByUsername: ["GET /users/{username}"], getContextForUser: ["GET /users/{username}/hovercard"], getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }], getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"], getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}", {}, { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }], getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"], getSshSigningKeyForAuthenticatedUser: ["GET /user/ssh_signing_keys/{ssh_signing_key_id}"], list: ["GET /users"], listAttestations: ["GET /users/{username}/attestations/{subject_digest}"], listBlockedByAuthenticated: ["GET /user/blocks", {}, { renamed: ["users", "listBlockedByAuthenticatedUser"] }], listBlockedByAuthenticatedUser: ["GET /user/blocks"], listEmailsForAuthenticated: ["GET /user/emails", {}, { renamed: ["users", "listEmailsForAuthenticatedUser"] }], listEmailsForAuthenticatedUser: ["GET /user/emails"], listFollowedByAuthenticated: ["GET /user/following", {}, { renamed: ["users", "listFollowedByAuthenticatedUser"] }], listFollowedByAuthenticatedUser: ["GET /user/following"], listFollowersForAuthenticatedUser: ["GET /user/followers"], listFollowersForUser: ["GET /users/{username}/followers"], listFollowingForUser: ["GET /users/{username}/following"], listGpgKeysForAuthenticated: ["GET /user/gpg_keys", {}, { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }], listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"], listGpgKeysForUser: ["GET /users/{username}/gpg_keys"], listPublicEmailsForAuthenticated: ["GET /user/public_emails", {}, { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }], listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"], listPublicKeysForUser: ["GET /users/{username}/keys"], listPublicSshKeysForAuthenticated: ["GET /user/keys", {}, { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }], listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"], listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"], listSocialAccountsForUser: ["GET /users/{username}/social_accounts"], listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"], listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"], setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility", {}, { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }], setPrimaryEmailVisibilityForAuthenticatedUser: ["PATCH /user/email/visibility"], unblock: ["DELETE /user/blocks/{username}"], unfollow: ["DELETE /user/following/{username}"], updateAuthenticated: ["PATCH /user"] } };
var Ot$4 = Gt$3;
const A$2 = /* @__PURE__ */ new Map();
for (const [e, t] of Object.entries(Ot$4)) for (const [s, o] of Object.entries(t)) {
  const [n, p, l] = o, [g, m] = n.split(/ /), f = Object.assign({ method: g, url: m }, p);
  A$2.has(e) || A$2.set(e, /* @__PURE__ */ new Map()), A$2.get(e).set(s, { scope: e, methodName: s, endpointDefaults: f, decorations: l });
}
const Rt$4 = { has({ scope: e }, t) {
  return A$2.get(e).has(t);
}, getOwnPropertyDescriptor(e, t) {
  return { value: this.get(e, t), configurable: true, writable: true, enumerable: true };
}, defineProperty(e, t, s) {
  return Object.defineProperty(e.cache, t, s), true;
}, deleteProperty(e, t) {
  return delete e.cache[t], true;
}, ownKeys({ scope: e }) {
  return [...A$2.get(e).keys()];
}, set(e, t, s) {
  return e.cache[t] = s;
}, get({ octokit: e, scope: t, cache: s }, o) {
  if (s[o]) return s[o];
  const n = A$2.get(t).get(o);
  if (!n) return;
  const { endpointDefaults: p, decorations: l } = n;
  return l ? s[o] = St$4(e, t, o, p, l) : s[o] = e.request.defaults(p), s[o];
} };
function At$4(e) {
  const t = {};
  for (const s of A$2.keys()) t[s] = new Proxy({ octokit: e, scope: s, cache: {} }, Rt$4);
  return t;
}
function St$4(e, t, s, o, n) {
  const p = e.request.defaults(o);
  function l(...g) {
    let m = p.endpoint.merge(...g);
    if (n.mapToData) return m = Object.assign({}, m, { data: m[n.mapToData], [n.mapToData]: void 0 }), p(m);
    if (n.renamed) {
      const [f, _] = n.renamed;
      e.log.warn(`octokit.${t}.${s}() has been renamed to octokit.${f}.${_}()`);
    }
    if (n.deprecated && e.log.warn(n.deprecated), n.renamedParameters) {
      const f = p.endpoint.merge(...g);
      for (const [_, T] of Object.entries(n.renamedParameters)) _ in f && (e.log.warn(`"${_}" parameter is deprecated for "octokit.${t}.${s}()". Use "${T}" instead`), T in f || (f[T] = f[_]), delete f[_]);
      return p(f);
    }
    return p(...g);
  }
  return Object.assign(l, p);
}
function cr$2(e) {
  return { rest: At$4(e) };
}
cr$2.VERSION = kt$4;
var M$2 = { exports: {} }, Ft$3 = M$2.exports, ze$3;
function Ct$4() {
  return ze$3 || (ze$3 = 1, function(e, t) {
    (function(s, o) {
      e.exports = o();
    })(Ft$3, function() {
      var s = typeof globalThis < "u" ? globalThis : typeof $e$3 < "u" ? $e$3 : typeof self < "u" ? self : {};
      function o(E) {
        return E && E.default || E;
      }
      var n = function(E, i, r = {}) {
        var a, c, u;
        for (a in i) u = i[a], r[a] = (c = E[a]) != null ? c : u;
        return r;
      }, p = function(E, i, r = {}) {
        var a, c;
        for (a in E) c = E[a], i[a] !== void 0 && (r[a] = c);
        return r;
      }, l = { load: n, overwrite: p }, g;
      g = class {
        constructor(i, r) {
          this.incr = i, this.decr = r, this._first = null, this._last = null, this.length = 0;
        }
        push(i) {
          var r;
          this.length++, typeof this.incr == "function" && this.incr(), r = { value: i, prev: this._last, next: null }, this._last != null ? (this._last.next = r, this._last = r) : this._first = this._last = r;
        }
        shift() {
          var i;
          if (this._first != null) return this.length--, typeof this.decr == "function" && this.decr(), i = this._first.value, (this._first = this._first.next) != null ? this._first.prev = null : this._last = null, i;
        }
        first() {
          if (this._first != null) return this._first.value;
        }
        getArray() {
          var i, r, a;
          for (i = this._first, a = []; i != null; ) a.push((r = i, i = i.next, r.value));
          return a;
        }
        forEachShift(i) {
          var r;
          for (r = this.shift(); r != null; ) i(r), r = this.shift();
        }
        debug() {
          var i, r, a, c, u;
          for (i = this._first, u = []; i != null; ) u.push((r = i, i = i.next, { value: r.value, prev: (a = r.prev) != null ? a.value : void 0, next: (c = r.next) != null ? c.value : void 0 }));
          return u;
        }
      };
      var m = g, f;
      f = class {
        constructor(i) {
          if (this.instance = i, this._events = {}, this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) throw new Error("An Emitter already exists for this object");
          this.instance.on = (r, a) => this._addListener(r, "many", a), this.instance.once = (r, a) => this._addListener(r, "once", a), this.instance.removeAllListeners = (r = null) => r != null ? delete this._events[r] : this._events = {};
        }
        _addListener(i, r, a) {
          var c;
          return (c = this._events)[i] == null && (c[i] = []), this._events[i].push({ cb: a, status: r }), this.instance;
        }
        listenerCount(i) {
          return this._events[i] != null ? this._events[i].length : 0;
        }
        async trigger(i, ...r) {
          var a, c;
          try {
            return i !== "debug" && this.trigger("debug", `Event triggered: ${i}`, r), this._events[i] == null ? void 0 : (this._events[i] = this._events[i].filter(function(u) {
              return u.status !== "none";
            }), c = this._events[i].map(async (u) => {
              var d, h;
              if (u.status !== "none") {
                u.status === "once" && (u.status = "none");
                try {
                  return h = typeof u.cb == "function" ? u.cb(...r) : void 0, typeof (h == null ? void 0 : h.then) == "function" ? await h : h;
                } catch (b) {
                  return d = b, this.trigger("error", d), null;
                }
              }
            }), (await Promise.all(c)).find(function(u) {
              return u != null;
            }));
          } catch (u) {
            return a = u, this.trigger("error", a), null;
          }
        }
      };
      var _ = f, T, w, y;
      T = m, w = _, y = class {
        constructor(i) {
          this.Events = new w(this), this._length = 0, this._lists = function() {
            var r, a, c;
            for (c = [], r = 1, a = i; 1 <= a ? r <= a : r >= a; 1 <= a ? ++r : --r) c.push(new T(() => this.incr(), () => this.decr()));
            return c;
          }.call(this);
        }
        incr() {
          if (this._length++ === 0) return this.Events.trigger("leftzero");
        }
        decr() {
          if (--this._length === 0) return this.Events.trigger("zero");
        }
        push(i) {
          return this._lists[i.options.priority].push(i);
        }
        queued(i) {
          return i != null ? this._lists[i].length : this._length;
        }
        shiftAll(i) {
          return this._lists.forEach(function(r) {
            return r.forEachShift(i);
          });
        }
        getFirst(i = this._lists) {
          var r, a, c;
          for (r = 0, a = i.length; r < a; r++) if (c = i[r], c.length > 0) return c;
          return [];
        }
        shiftLastFrom(i) {
          return this.getFirst(this._lists.slice(i).reverse()).shift();
        }
      };
      var L = y, O;
      O = class extends Error {
      };
      var S = O, I, R, H, j, G;
      j = 10, R = 5, G = l, I = S, H = class {
        constructor(i, r, a, c, u, d, h, b) {
          this.task = i, this.args = r, this.rejectOnDrop = u, this.Events = d, this._states = h, this.Promise = b, this.options = G.load(a, c), this.options.priority = this._sanitizePriority(this.options.priority), this.options.id === c.id && (this.options.id = `${this.options.id}-${this._randomIndex()}`), this.promise = new this.Promise((v, P) => {
            this._resolve = v, this._reject = P;
          }), this.retryCount = 0;
        }
        _sanitizePriority(i) {
          var r;
          return r = ~~i !== i ? R : i, r < 0 ? 0 : r > j - 1 ? j - 1 : r;
        }
        _randomIndex() {
          return Math.random().toString(36).slice(2);
        }
        doDrop({ error: i, message: r = "This job has been dropped by Bottleneck" } = {}) {
          return this._states.remove(this.options.id) ? (this.rejectOnDrop && this._reject(i != null ? i : new I(r)), this.Events.trigger("dropped", { args: this.args, options: this.options, task: this.task, promise: this.promise }), true) : false;
        }
        _assertStatus(i) {
          var r;
          if (r = this._states.jobStatus(this.options.id), !(r === i || i === "DONE" && r === null)) throw new I(`Invalid job status ${r}, expected ${i}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
        }
        doReceive() {
          return this._states.start(this.options.id), this.Events.trigger("received", { args: this.args, options: this.options });
        }
        doQueue(i, r) {
          return this._assertStatus("RECEIVED"), this._states.next(this.options.id), this.Events.trigger("queued", { args: this.args, options: this.options, reachedHWM: i, blocked: r });
        }
        doRun() {
          return this.retryCount === 0 ? (this._assertStatus("QUEUED"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), this.Events.trigger("scheduled", { args: this.args, options: this.options });
        }
        async doExecute(i, r, a, c) {
          var u, d, h;
          this.retryCount === 0 ? (this._assertStatus("RUNNING"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), d = { args: this.args, options: this.options, retryCount: this.retryCount }, this.Events.trigger("executing", d);
          try {
            if (h = await (i != null ? i.schedule(this.options, this.task, ...this.args) : this.task(...this.args)), r()) return this.doDone(d), await c(this.options, d), this._assertStatus("DONE"), this._resolve(h);
          } catch (b) {
            return u = b, this._onFailure(u, d, r, a, c);
          }
        }
        doExpire(i, r, a) {
          var c, u;
          return this._states.jobStatus(this.options.id === "RUNNING") && this._states.next(this.options.id), this._assertStatus("EXECUTING"), u = { args: this.args, options: this.options, retryCount: this.retryCount }, c = new I(`This job timed out after ${this.options.expiration} ms.`), this._onFailure(c, u, i, r, a);
        }
        async _onFailure(i, r, a, c, u) {
          var d, h;
          if (a()) return d = await this.Events.trigger("failed", i, r), d != null ? (h = ~~d, this.Events.trigger("retry", `Retrying ${this.options.id} after ${h} ms`, r), this.retryCount++, c(h)) : (this.doDone(r), await u(this.options, r), this._assertStatus("DONE"), this._reject(i));
        }
        doDone(i) {
          return this._assertStatus("EXECUTING"), this._states.next(this.options.id), this.Events.trigger("done", i);
        }
      };
      var q = H, z, le, K;
      K = l, z = S, le = class {
        constructor(i, r, a) {
          this.instance = i, this.storeOptions = r, this.clientId = this.instance._randomIndex(), K.load(a, a, this), this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now(), this._running = 0, this._done = 0, this._unblockTime = 0, this.ready = this.Promise.resolve(), this.clients = {}, this._startHeartbeat();
        }
        _startHeartbeat() {
          var i;
          return this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null) ? typeof (i = this.heartbeat = setInterval(() => {
            var r, a, c, u, d;
            if (u = Date.now(), this.storeOptions.reservoirRefreshInterval != null && u >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval && (this._lastReservoirRefresh = u, this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount, this.instance._drainAll(this.computeCapacity())), this.storeOptions.reservoirIncreaseInterval != null && u >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval && ({ reservoirIncreaseAmount: r, reservoirIncreaseMaximum: c, reservoir: d } = this.storeOptions, this._lastReservoirIncrease = u, a = c != null ? Math.min(r, c - d) : r, a > 0)) return this.storeOptions.reservoir += a, this.instance._drainAll(this.computeCapacity());
          }, this.heartbeatInterval)).unref == "function" ? i.unref() : void 0 : clearInterval(this.heartbeat);
        }
        async __publish__(i) {
          return await this.yieldLoop(), this.instance.Events.trigger("message", i.toString());
        }
        async __disconnect__(i) {
          return await this.yieldLoop(), clearInterval(this.heartbeat), this.Promise.resolve();
        }
        yieldLoop(i = 0) {
          return new this.Promise(function(r, a) {
            return setTimeout(r, i);
          });
        }
        computePenalty() {
          var i;
          return (i = this.storeOptions.penalty) != null ? i : 15 * this.storeOptions.minTime || 5e3;
        }
        async __updateSettings__(i) {
          return await this.yieldLoop(), K.overwrite(i, i, this.storeOptions), this._startHeartbeat(), this.instance._drainAll(this.computeCapacity()), true;
        }
        async __running__() {
          return await this.yieldLoop(), this._running;
        }
        async __queued__() {
          return await this.yieldLoop(), this.instance.queued();
        }
        async __done__() {
          return await this.yieldLoop(), this._done;
        }
        async __groupCheck__(i) {
          return await this.yieldLoop(), this._nextRequest + this.timeout < i;
        }
        computeCapacity() {
          var i, r;
          return { maxConcurrent: i, reservoir: r } = this.storeOptions, i != null && r != null ? Math.min(i - this._running, r) : i != null ? i - this._running : r != null ? r : null;
        }
        conditionsCheck(i) {
          var r;
          return r = this.computeCapacity(), r == null || i <= r;
        }
        async __incrementReservoir__(i) {
          var r;
          return await this.yieldLoop(), r = this.storeOptions.reservoir += i, this.instance._drainAll(this.computeCapacity()), r;
        }
        async __currentReservoir__() {
          return await this.yieldLoop(), this.storeOptions.reservoir;
        }
        isBlocked(i) {
          return this._unblockTime >= i;
        }
        check(i, r) {
          return this.conditionsCheck(i) && this._nextRequest - r <= 0;
        }
        async __check__(i) {
          var r;
          return await this.yieldLoop(), r = Date.now(), this.check(i, r);
        }
        async __register__(i, r, a) {
          var c, u;
          return await this.yieldLoop(), c = Date.now(), this.conditionsCheck(r) ? (this._running += r, this.storeOptions.reservoir != null && (this.storeOptions.reservoir -= r), u = Math.max(this._nextRequest - c, 0), this._nextRequest = c + u + this.storeOptions.minTime, { success: true, wait: u, reservoir: this.storeOptions.reservoir }) : { success: false };
        }
        strategyIsBlock() {
          return this.storeOptions.strategy === 3;
        }
        async __submit__(i, r) {
          var a, c, u;
          if (await this.yieldLoop(), this.storeOptions.maxConcurrent != null && r > this.storeOptions.maxConcurrent) throw new z(`Impossible to add a job having a weight of ${r} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);
          return c = Date.now(), u = this.storeOptions.highWater != null && i === this.storeOptions.highWater && !this.check(r, c), a = this.strategyIsBlock() && (u || this.isBlocked(c)), a && (this._unblockTime = c + this.computePenalty(), this._nextRequest = this._unblockTime + this.storeOptions.minTime, this.instance._dropAllQueued()), { reachedHWM: u, blocked: a, strategy: this.storeOptions.strategy };
        }
        async __free__(i, r) {
          return await this.yieldLoop(), this._running -= r, this._done += r, this.instance._drainAll(this.computeCapacity()), { running: this._running };
        }
      };
      var dr = le, pe, ge;
      pe = S, ge = class {
        constructor(i) {
          this.status = i, this._jobs = {}, this.counts = this.status.map(function() {
            return 0;
          });
        }
        next(i) {
          var r, a;
          if (r = this._jobs[i], a = r + 1, r != null && a < this.status.length) return this.counts[r]--, this.counts[a]++, this._jobs[i]++;
          if (r != null) return this.counts[r]--, delete this._jobs[i];
        }
        start(i) {
          var r;
          return r = 0, this._jobs[i] = r, this.counts[r]++;
        }
        remove(i) {
          var r;
          return r = this._jobs[i], r != null && (this.counts[r]--, delete this._jobs[i]), r != null;
        }
        jobStatus(i) {
          var r;
          return (r = this.status[this._jobs[i]]) != null ? r : null;
        }
        statusJobs(i) {
          var r, a, c, u, d;
          if (i != null) {
            if (a = this.status.indexOf(i), a < 0) throw new pe(`status must be one of ${this.status.join(", ")}`);
            c = this._jobs, u = [];
            for (r in c) d = c[r], d === a && u.push(r);
            return u;
          } else return Object.keys(this._jobs);
        }
        statusCounts() {
          return this.counts.reduce((i, r, a) => (i[this.status[a]] = r, i), {});
        }
      };
      var mr = ge, de, me;
      de = m, me = class {
        constructor(i, r) {
          this.schedule = this.schedule.bind(this), this.name = i, this.Promise = r, this._running = 0, this._queue = new de();
        }
        isEmpty() {
          return this._queue.length === 0;
        }
        async _tryToRun() {
          var i, r, a, c, u, d, h;
          if (this._running < 1 && this._queue.length > 0) return this._running++, { task: h, args: i, resolve: u, reject: c } = this._queue.shift(), r = await async function() {
            try {
              return d = await h(...i), function() {
                return u(d);
              };
            } catch (b) {
              return a = b, function() {
                return c(a);
              };
            }
          }(), this._running--, this._tryToRun(), r();
        }
        schedule(i, ...r) {
          var a, c, u;
          return u = c = null, a = new this.Promise(function(d, h) {
            return u = d, c = h;
          }), this._queue.push({ task: i, args: r, resolve: u, reject: c }), this._tryToRun(), a;
        }
      };
      var hr = me, he = "2.19.5", Er = { version: he }, Tr = Object.freeze({ version: he, default: Er }), Ee = () => console.log("You must import the full version of Bottleneck in order to use this feature."), Te = () => console.log("You must import the full version of Bottleneck in order to use this feature."), _r = () => console.log("You must import the full version of Bottleneck in order to use this feature."), _e, fe, we, be, ye, V;
      V = l, _e = _, be = Ee, we = Te, ye = _r, fe = function() {
        class E {
          constructor(r = {}) {
            this.deleteKey = this.deleteKey.bind(this), this.limiterOptions = r, V.load(this.limiterOptions, this.defaults, this), this.Events = new _e(this), this.instances = {}, this.Bottleneck = Ue, this._startAutoCleanup(), this.sharedConnection = this.connection != null, this.connection == null && (this.limiterOptions.datastore === "redis" ? this.connection = new be(Object.assign({}, this.limiterOptions, { Events: this.Events })) : this.limiterOptions.datastore === "ioredis" && (this.connection = new we(Object.assign({}, this.limiterOptions, { Events: this.Events }))));
          }
          key(r = "") {
            var a;
            return (a = this.instances[r]) != null ? a : (() => {
              var c;
              return c = this.instances[r] = new this.Bottleneck(Object.assign(this.limiterOptions, { id: `${this.id}-${r}`, timeout: this.timeout, connection: this.connection })), this.Events.trigger("created", c, r), c;
            })();
          }
          async deleteKey(r = "") {
            var a, c;
            return c = this.instances[r], this.connection && (a = await this.connection.__runCommand__(["del", ...ye.allKeys(`${this.id}-${r}`)])), c != null && (delete this.instances[r], await c.disconnect()), c != null || a > 0;
          }
          limiters() {
            var r, a, c, u;
            a = this.instances, c = [];
            for (r in a) u = a[r], c.push({ key: r, limiter: u });
            return c;
          }
          keys() {
            return Object.keys(this.instances);
          }
          async clusterKeys() {
            var r, a, c, u, d, h, b, v, P;
            if (this.connection == null) return this.Promise.resolve(this.keys());
            for (h = [], r = null, P = `b_${this.id}-`.length, a = 9; r !== 0; ) for ([v, c] = await this.connection.__runCommand__(["scan", r != null ? r : 0, "match", `b_${this.id}-*_settings`, "count", 1e4]), r = ~~v, u = 0, b = c.length; u < b; u++) d = c[u], h.push(d.slice(P, -a));
            return h;
          }
          _startAutoCleanup() {
            var r;
            return clearInterval(this.interval), typeof (r = this.interval = setInterval(async () => {
              var a, c, u, d, h, b;
              h = Date.now(), u = this.instances, d = [];
              for (c in u) {
                b = u[c];
                try {
                  await b._store.__groupCheck__(h) ? d.push(this.deleteKey(c)) : d.push(void 0);
                } catch (v) {
                  a = v, d.push(b.Events.trigger("error", a));
                }
              }
              return d;
            }, this.timeout / 2)).unref == "function" ? r.unref() : void 0;
          }
          updateSettings(r = {}) {
            if (V.overwrite(r, this.defaults, this), V.overwrite(r, r, this.limiterOptions), r.timeout != null) return this._startAutoCleanup();
          }
          disconnect(r = true) {
            var a;
            if (!this.sharedConnection) return (a = this.connection) != null ? a.disconnect(r) : void 0;
          }
        }
        return E.prototype.defaults = { timeout: 1e3 * 60 * 5, connection: null, Promise, id: "group-key" }, E;
      }.call(s);
      var fr = fe, ve, Pe, ke;
      ke = l, Pe = _, ve = function() {
        class E {
          constructor(r = {}) {
            this.options = r, ke.load(this.options, this.defaults, this), this.Events = new Pe(this), this._arr = [], this._resetPromise(), this._lastFlush = Date.now();
          }
          _resetPromise() {
            return this._promise = new this.Promise((r, a) => this._resolve = r);
          }
          _flush() {
            return clearTimeout(this._timeout), this._lastFlush = Date.now(), this._resolve(), this.Events.trigger("batch", this._arr), this._arr = [], this._resetPromise();
          }
          add(r) {
            var a;
            return this._arr.push(r), a = this._promise, this._arr.length === this.maxSize ? this._flush() : this.maxTime != null && this._arr.length === 1 && (this._timeout = setTimeout(() => this._flush(), this.maxTime)), a;
          }
        }
        return E.prototype.defaults = { maxTime: null, maxSize: null, Promise }, E;
      }.call(s);
      var wr = ve, br = () => console.log("You must import the full version of Bottleneck in order to use this feature."), yr = o(Tr), Ge, Oe, J, Q, Re, Y, Ae, Se, Fe, X, k, Ce = [].splice;
      Y = 10, Oe = 5, k = l, Ae = L, Q = q, Re = dr, Se = br, J = _, Fe = mr, X = hr, Ge = function() {
        class E {
          constructor(r = {}, ...a) {
            var c, u;
            this._addToQueue = this._addToQueue.bind(this), this._validateOptions(r, a), k.load(r, this.instanceDefaults, this), this._queues = new Ae(Y), this._scheduled = {}, this._states = new Fe(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : [])), this._limiter = null, this.Events = new J(this), this._submitLock = new X("submit", this.Promise), this._registerLock = new X("register", this.Promise), u = k.load(r, this.storeDefaults, {}), this._store = function() {
              if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) return c = k.load(r, this.redisStoreDefaults, {}), new Se(this, u, c);
              if (this.datastore === "local") return c = k.load(r, this.localStoreDefaults, {}), new Re(this, u, c);
              throw new E.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
            }.call(this), this._queues.on("leftzero", () => {
              var d;
              return (d = this._store.heartbeat) != null && typeof d.ref == "function" ? d.ref() : void 0;
            }), this._queues.on("zero", () => {
              var d;
              return (d = this._store.heartbeat) != null && typeof d.unref == "function" ? d.unref() : void 0;
            });
          }
          _validateOptions(r, a) {
            if (!(r != null && typeof r == "object" && a.length === 0)) throw new E.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
          }
          ready() {
            return this._store.ready;
          }
          clients() {
            return this._store.clients;
          }
          channel() {
            return `b_${this.id}`;
          }
          channel_client() {
            return `b_${this.id}_${this._store.clientId}`;
          }
          publish(r) {
            return this._store.__publish__(r);
          }
          disconnect(r = true) {
            return this._store.__disconnect__(r);
          }
          chain(r) {
            return this._limiter = r, this;
          }
          queued(r) {
            return this._queues.queued(r);
          }
          clusterQueued() {
            return this._store.__queued__();
          }
          empty() {
            return this.queued() === 0 && this._submitLock.isEmpty();
          }
          running() {
            return this._store.__running__();
          }
          done() {
            return this._store.__done__();
          }
          jobStatus(r) {
            return this._states.jobStatus(r);
          }
          jobs(r) {
            return this._states.statusJobs(r);
          }
          counts() {
            return this._states.statusCounts();
          }
          _randomIndex() {
            return Math.random().toString(36).slice(2);
          }
          check(r = 1) {
            return this._store.__check__(r);
          }
          _clearGlobalState(r) {
            return this._scheduled[r] != null ? (clearTimeout(this._scheduled[r].expiration), delete this._scheduled[r], true) : false;
          }
          async _free(r, a, c, u) {
            var d, h;
            try {
              if ({ running: h } = await this._store.__free__(r, c.weight), this.Events.trigger("debug", `Freed ${c.id}`, u), h === 0 && this.empty()) return this.Events.trigger("idle");
            } catch (b) {
              return d = b, this.Events.trigger("error", d);
            }
          }
          _run(r, a, c) {
            var u, d, h;
            return a.doRun(), u = this._clearGlobalState.bind(this, r), h = this._run.bind(this, r, a), d = this._free.bind(this, r, a), this._scheduled[r] = { timeout: setTimeout(() => a.doExecute(this._limiter, u, h, d), c), expiration: a.options.expiration != null ? setTimeout(function() {
              return a.doExpire(u, h, d);
            }, c + a.options.expiration) : void 0, job: a };
          }
          _drainOne(r) {
            return this._registerLock.schedule(() => {
              var a, c, u, d, h;
              return this.queued() === 0 ? this.Promise.resolve(null) : (h = this._queues.getFirst(), { options: d, args: a } = u = h.first(), r != null && d.weight > r ? this.Promise.resolve(null) : (this.Events.trigger("debug", `Draining ${d.id}`, { args: a, options: d }), c = this._randomIndex(), this._store.__register__(c, d.weight, d.expiration).then(({ success: b, wait: v, reservoir: P }) => {
                var $;
                return this.Events.trigger("debug", `Drained ${d.id}`, { success: b, args: a, options: d }), b ? (h.shift(), $ = this.empty(), $ && this.Events.trigger("empty"), P === 0 && this.Events.trigger("depleted", $), this._run(c, u, v), this.Promise.resolve(d.weight)) : this.Promise.resolve(null);
              })));
            });
          }
          _drainAll(r, a = 0) {
            return this._drainOne(r).then((c) => {
              var u;
              return c != null ? (u = r != null ? r - c : r, this._drainAll(u, a + c)) : this.Promise.resolve(a);
            }).catch((c) => this.Events.trigger("error", c));
          }
          _dropAllQueued(r) {
            return this._queues.shiftAll(function(a) {
              return a.doDrop({ message: r });
            });
          }
          stop(r = {}) {
            var a, c;
            return r = k.load(r, this.stopDefaults), c = (u) => {
              var d;
              return d = () => {
                var h;
                return h = this._states.counts, h[0] + h[1] + h[2] + h[3] === u;
              }, new this.Promise((h, b) => d() ? h() : this.on("done", () => {
                if (d()) return this.removeAllListeners("done"), h();
              }));
            }, a = r.dropWaitingJobs ? (this._run = function(u, d) {
              return d.doDrop({ message: r.dropErrorMessage });
            }, this._drainOne = () => this.Promise.resolve(null), this._registerLock.schedule(() => this._submitLock.schedule(() => {
              var u, d, h;
              d = this._scheduled;
              for (u in d) h = d[u], this.jobStatus(h.job.options.id) === "RUNNING" && (clearTimeout(h.timeout), clearTimeout(h.expiration), h.job.doDrop({ message: r.dropErrorMessage }));
              return this._dropAllQueued(r.dropErrorMessage), c(0);
            }))) : this.schedule({ priority: Y - 1, weight: 0 }, () => c(1)), this._receive = function(u) {
              return u._reject(new E.prototype.BottleneckError(r.enqueueErrorMessage));
            }, this.stop = () => this.Promise.reject(new E.prototype.BottleneckError("stop() has already been called")), a;
          }
          async _addToQueue(r) {
            var a, c, u, d, h, b, v;
            ({ args: a, options: d } = r);
            try {
              ({ reachedHWM: h, blocked: c, strategy: v } = await this._store.__submit__(this.queued(), d.weight));
            } catch (P) {
              return u = P, this.Events.trigger("debug", `Could not queue ${d.id}`, { args: a, options: d, error: u }), r.doDrop({ error: u }), false;
            }
            return c ? (r.doDrop(), true) : h && (b = v === E.prototype.strategy.LEAK ? this._queues.shiftLastFrom(d.priority) : v === E.prototype.strategy.OVERFLOW_PRIORITY ? this._queues.shiftLastFrom(d.priority + 1) : v === E.prototype.strategy.OVERFLOW ? r : void 0, b == null ? void 0 : b.doDrop(), b == null || v === E.prototype.strategy.OVERFLOW) ? (b == null && r.doDrop(), h) : (r.doQueue(h, c), this._queues.push(r), await this._drainAll(), h);
          }
          _receive(r) {
            return this._states.jobStatus(r.options.id) != null ? (r._reject(new E.prototype.BottleneckError(`A job with the same id already exists (id=${r.options.id})`)), false) : (r.doReceive(), this._submitLock.schedule(this._addToQueue, r));
          }
          submit(...r) {
            var a, c, u, d, h, b, v;
            return typeof r[0] == "function" ? (h = r, [c, ...r] = h, [a] = Ce.call(r, -1), d = k.load({}, this.jobDefaults)) : (b = r, [d, c, ...r] = b, [a] = Ce.call(r, -1), d = k.load(d, this.jobDefaults)), v = (...P) => new this.Promise(function($, Pr) {
              return c(...P, function(...De) {
                return (De[0] != null ? Pr : $)(De);
              });
            }), u = new Q(v, r, d, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), u.promise.then(function(P) {
              return typeof a == "function" ? a(...P) : void 0;
            }).catch(function(P) {
              return Array.isArray(P) ? typeof a == "function" ? a(...P) : void 0 : typeof a == "function" ? a(P) : void 0;
            }), this._receive(u);
          }
          schedule(...r) {
            var a, c, u;
            return typeof r[0] == "function" ? ([u, ...r] = r, c = {}) : [c, u, ...r] = r, a = new Q(u, r, c, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), this._receive(a), a.promise;
          }
          wrap(r) {
            var a, c;
            return a = this.schedule.bind(this), c = function(...u) {
              return a(r.bind(this), ...u);
            }, c.withOptions = function(u, ...d) {
              return a(u, r, ...d);
            }, c;
          }
          async updateSettings(r = {}) {
            return await this._store.__updateSettings__(k.overwrite(r, this.storeDefaults)), k.overwrite(r, this.instanceDefaults, this), this;
          }
          currentReservoir() {
            return this._store.__currentReservoir__();
          }
          incrementReservoir(r = 0) {
            return this._store.__incrementReservoir__(r);
          }
        }
        return E.default = E, E.Events = J, E.version = E.prototype.version = yr.version, E.strategy = E.prototype.strategy = { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }, E.BottleneckError = E.prototype.BottleneckError = S, E.Group = E.prototype.Group = fr, E.RedisConnection = E.prototype.RedisConnection = Ee, E.IORedisConnection = E.prototype.IORedisConnection = Te, E.Batcher = E.prototype.Batcher = wr, E.prototype.jobDefaults = { priority: Oe, weight: 1, expiration: null, id: "<no-id>" }, E.prototype.storeDefaults = { maxConcurrent: null, minTime: 0, highWater: null, strategy: E.prototype.strategy.LEAK, penalty: null, reservoir: null, reservoirRefreshInterval: null, reservoirRefreshAmount: null, reservoirIncreaseInterval: null, reservoirIncreaseAmount: null, reservoirIncreaseMaximum: null }, E.prototype.localStoreDefaults = { Promise, timeout: null, heartbeatInterval: 250 }, E.prototype.redisStoreDefaults = { Promise, timeout: null, heartbeatInterval: 5e3, clientTimeout: 1e4, Redis: null, clientOptions: {}, clusterNodes: null, clearDatastore: false, connection: null }, E.prototype.instanceDefaults = { datastore: "local", connection: null, id: "<no-id>", rejectOnDrop: true, trackDoneStatus: false, Promise }, E.prototype.stopDefaults = { enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.", dropWaitingJobs: true, dropErrorMessage: "This limiter has been stopped." }, E;
      }.call(s);
      var Ue = Ge, vr = Ue;
      return vr;
    });
  }(M$2)), M$2.exports;
}
var Ut$3 = Ct$4();
const ur$2 = Vr$2(Ut$3);
var Dt$3 = "0.0.0-development";
async function lr$2(e, t, s, o) {
  if (!s.request || !s.request.request) throw s;
  if (s.status >= 400 && !e.doNotRetry.includes(s.status)) {
    const n = o.request.retries != null ? o.request.retries : e.retries, p = Math.pow((o.request.retryCount || 0) + 1, 2);
    throw t.retry.retryRequest(s, n, p);
  }
  throw s;
}
async function Lt$4(e, t, s, o) {
  const n = new ur$2();
  return n.on("failed", function(p, l) {
    const g = ~~p.request.request.retries, m = ~~p.request.request.retryAfter;
    if (o.request.retryCount = l.retryCount + 1, g > l.retryCount) return m * e.retryAfterBaseValue;
  }), n.schedule(It$4.bind(null, e, t, s), o);
}
async function It$4(e, t, s, o) {
  const n = await s(s, o);
  if (n.data && n.data.errors && n.data.errors.length > 0 && /Something went wrong while executing your query/.test(n.data.errors[0].message)) {
    const p = new B$3(n.data.errors[0].message, 500, { request: o, response: n });
    return lr$2(e, t, p, o);
  }
  return n;
}
function pr$2(e, t) {
  const s = Object.assign({ enabled: true, retryAfterBaseValue: 1e3, doNotRetry: [400, 401, 403, 404, 422, 451], retries: 3 }, t.retry);
  return s.enabled && (e.hook.error("request", lr$2.bind(null, s, e)), e.hook.wrap("request", Lt$4.bind(null, s, e))), { retry: { retryRequest: (o, n, p) => (o.request.request = Object.assign({}, o.request.request, { retries: n, retryAfter: p }), o) } };
}
pr$2.VERSION = Dt$3;
var jt$3 = "0.0.0-development", se$2 = () => Promise.resolve();
function qt$3(e, t, s) {
  return e.retryLimiter.schedule($t$4, e, t, s);
}
async function $t$4(e, t, s) {
  const o = s.method !== "GET" && s.method !== "HEAD", { pathname: n } = new URL(s.url, "http://github.test"), p = s.method === "GET" && n.startsWith("/search/"), l = n.startsWith("/graphql"), m = ~~t.retryCount > 0 ? { priority: 0, weight: 0 } : {};
  e.clustering && (m.expiration = 1e3 * 60), (o || l) && await e.write.key(e.id).schedule(m, se$2), o && e.triggersNotification(n) && await e.notifications.key(e.id).schedule(m, se$2), p && await e.search.key(e.id).schedule(m, se$2);
  const f = e.global.key(e.id).schedule(m, t, s);
  if (l) {
    const _ = await f;
    if (_.data.errors != null && _.data.errors.some((T) => T.type === "RATE_LIMITED")) throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), { response: _, data: _.data });
  }
  return f;
}
var xt$4 = ["/orgs/{org}/invitations", "/orgs/{org}/invitations/{invitation_id}", "/orgs/{org}/teams/{team_slug}/discussions", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "/repos/{owner}/{repo}/collaborators/{username}", "/repos/{owner}/{repo}/commits/{commit_sha}/comments", "/repos/{owner}/{repo}/issues", "/repos/{owner}/{repo}/issues/{issue_number}/comments", "/repos/{owner}/{repo}/issues/{issue_number}/sub_issue", "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority", "/repos/{owner}/{repo}/pulls", "/repos/{owner}/{repo}/pulls/{pull_number}/comments", "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "/repos/{owner}/{repo}/pulls/{pull_number}/merge", "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "/repos/{owner}/{repo}/releases", "/teams/{team_id}/discussions", "/teams/{team_id}/discussions/{discussion_number}/comments"];
function Bt$3(e) {
  const s = `^(?:${e.map((o) => o.split("/").map((n) => n.startsWith("{") ? "(?:.+?)" : n).join("/")).map((o) => `(?:${o})`).join("|")})[^/]*$`;
  return new RegExp(s, "i");
}
var Ke$2 = Bt$3(xt$4), gr$2 = Ke$2.test.bind(Ke$2), D$2 = {}, Wt$3 = function(e, t) {
  D$2.global = new e.Group({ id: "octokit-global", maxConcurrent: 10, ...t }), D$2.search = new e.Group({ id: "octokit-search", maxConcurrent: 1, minTime: 2e3, ...t }), D$2.write = new e.Group({ id: "octokit-write", maxConcurrent: 1, minTime: 1e3, ...t }), D$2.notifications = new e.Group({ id: "octokit-notifications", maxConcurrent: 1, minTime: 3e3, ...t });
};
function ue$1(e, t) {
  const { enabled: s = true, Bottleneck: o = ur$2, id: n = "no-id", timeout: p = 1e3 * 60 * 2, connection: l } = t.throttle || {};
  if (!s) return {};
  const g = { timeout: p };
  typeof l < "u" && (g.connection = l), D$2.global == null && Wt$3(o, g);
  const m = Object.assign({ clustering: l != null, triggersNotification: gr$2, fallbackSecondaryRateRetryAfter: 60, retryAfterBaseValue: 1e3, retryLimiter: new o(), id: n, ...D$2 }, t.throttle);
  if (typeof m.onSecondaryRateLimit != "function" || typeof m.onRateLimit != "function") throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
  const f = {}, _ = new o.Events(f);
  return f.on("secondary-limit", m.onSecondaryRateLimit), f.on("rate-limit", m.onRateLimit), f.on("error", (T) => e.log.warn("Error in throttling-plugin limit handler", T)), m.retryLimiter.on("failed", async function(T, w) {
    const [y, L, O] = w.args, { pathname: S } = new URL(O.url, "http://github.test");
    if (!(S.startsWith("/graphql") && T.status !== 401 || T.status === 403 || T.status === 429)) return;
    const R = ~~L.retryCount;
    L.retryCount = R, O.request.retryCount = R;
    const { wantRetry: H, retryAfter: j = 0 } = await async function() {
      var _a2, _b;
      if (/\bsecondary rate\b/i.test(T.message)) {
        const G = Number(T.response.headers["retry-after"]) || y.fallbackSecondaryRateRetryAfter;
        return { wantRetry: await _.trigger("secondary-limit", G, O, e, R), retryAfter: G };
      }
      if (T.response.headers != null && T.response.headers["x-ratelimit-remaining"] === "0" || ((_b = (_a2 = T.response.data) == null ? void 0 : _a2.errors) != null ? _b : []).some((G) => G.type === "RATE_LIMITED")) {
        const G = new Date(~~T.response.headers["x-ratelimit-reset"] * 1e3).getTime(), q = Math.max(Math.ceil((G - Date.now()) / 1e3) + 1, 0);
        return { wantRetry: await _.trigger("rate-limit", q, O, e, R), retryAfter: q };
      }
      return {};
    }();
    if (H) return L.retryCount++, j * y.retryAfterBaseValue;
  }), e.hook.wrap("request", qt$3.bind(null, m)), {};
}
ue$1.VERSION = jt$3;
ue$1.triggersNotification = gr$2;
var Ht$3 = "0.0.0-development", Vt$3 = gt$4.plugin(cr$2, sr$2, Pt$4, pr$2, ue$1).defaults({ userAgent: `octokit.js/${Ht$3}`, throttle: { onRateLimit: Mt$3, onSecondaryRateLimit: Nt$4 } });
function Mt$3(e, t, s) {
  if (s.log.warn(`Request quota exhausted for request ${t.method} ${t.url}`), t.request.retryCount === 0) return s.log.info(`Retrying after ${e} seconds!`), true;
}
function Nt$4(e, t, s) {
  if (s.log.warn(`SecondaryRateLimit detected for request ${t.method} ${t.url}`), t.request.retryCount === 0) return s.log.info(`Retrying after ${e} seconds!`), true;
}
let ts$2 = class ts {
  constructor(t) {
    __publicField$5(this, "octokit");
    __publicField$5(this, "owner", "rivial-data-security");
    __publicField$5(this, "repo", "rivial-information-security-center");
    this.octokit = new Vt$3({ auth: t });
  }
  async getRepository() {
    return await this.octokit.rest.repos.get({ owner: this.owner, repo: this.repo });
  }
  async getIssues(t = "open") {
    return await this.octokit.rest.issues.listForRepo({ owner: this.owner, repo: this.repo, state: t });
  }
  async getPullRequests(t = "open") {
    return await this.octokit.rest.pulls.list({ owner: this.owner, repo: this.repo, state: t });
  }
  async getBranches() {
    return await this.octokit.rest.repos.listBranches({ owner: this.owner, repo: this.repo });
  }
  async getCommits(t = "main") {
    return await this.octokit.rest.repos.listCommits({ owner: this.owner, repo: this.repo, sha: t });
  }
  async getPullRequestDetails(t) {
    const { data: s } = await this.octokit.rest.pulls.get({ owner: this.owner, repo: this.repo, pull_number: t });
    return s;
  }
  async getWorkflowRuns(t, s) {
    const { data: o } = await this.octokit.rest.actions.listWorkflowRunsForRepo({ owner: this.owner, repo: this.repo, branch: t, created: `>=${s}` });
    return o.workflow_runs;
  }
  async getWorkflowRunUsage(t) {
    const { data: s } = await this.octokit.rest.actions.getWorkflowRunUsage({ owner: this.owner, repo: this.repo, run_id: t });
    return s;
  }
  async getWorkflowJobs(t) {
    const { data: s } = await this.octokit.rest.actions.listJobsForWorkflowRun({ owner: this.owner, repo: this.repo, run_id: t });
    return s;
  }
  async getAllWorkflowRunsForPR(t) {
    const s = await this.getPullRequestDetails(t);
    return await this.getWorkflowRuns(s.head.ref, s.created_at);
  }
  async *getPullRequestsByDateRange(t, s = (/* @__PURE__ */ new Date()).toISOString()) {
    const o = this.octokit.paginate.iterator(this.octokit.rest.search.issuesAndPullRequests, { q: `type:pr repo:${this.owner}/${this.repo} is:merged merged:${t}..${s}`, sort: "created", order: "desc", per_page: 100 });
    for await (const { data: n } of o) yield* n;
  }
};

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
var ut$2 = ((t) => (t[t.AggregateError = 1] = "AggregateError", t[t.ArrowFunction = 2] = "ArrowFunction", t[t.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", t[t.ObjectAssign = 8] = "ObjectAssign", t[t.BigIntTypedArray = 16] = "BigIntTypedArray", t[t.AbortSignal = 32] = "AbortSignal", t))(ut$2 || {});
function ct$2(t) {
  switch (t) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function g(t) {
  let e = "", r = 0, i;
  for (let a = 0, n = t.length; a < n; a++) i = ct$2(t[a]), i && (e += t.slice(r, a) + i, r = a + 1);
  return r === 0 ? e = t : e += t.slice(r), e;
}
function ht$1(t) {
  switch (t) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return t;
  }
}
function S(t) {
  return t.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, ht$1);
}
var R$1 = "__SEROVAL_REFS__", N$2 = "$R", V$2 = `self.${N$2}`;
function ft$2(t) {
  return t == null ? `${V$2}=${V$2}||[]` : `(${V$2}=${V$2}||{})["${g(t)}"]=[]`;
}
function y(t, e) {
  if (!t) throw e;
}
var Ie$2 = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
function xe$2(t) {
  return Ie$2.has(t);
}
function dt$2(t) {
  return w.has(t);
}
function pt$2(t) {
  return y(xe$2(t), new Zt$1(t)), Ie$2.get(t);
}
function gt$3(t) {
  return y(dt$2(t), new Jt$1(t)), w.get(t);
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, R$1, { value: w, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, R$1, { value: w, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, R$1, { value: w, configurable: true, writable: false, enumerable: false });
function Ee$1(t, e) {
  for (let r = 0, i = e.length; r < i; r++) {
    let a = e[r];
    t.has(a) || (t.add(a), a.extends && Ee$1(t, a.extends));
  }
}
function Pe$1(t) {
  if (t) {
    let e = /* @__PURE__ */ new Set();
    return Ee$1(e, t), [...e];
  }
}
var mt$3 = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, ke = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, yt$3 = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables }, bt$3 = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, zt$1 = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN }, Fe = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, St$3 = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError }, s = void 0;
function f(t, e, r, i, a, n, o, l, u, c, d, m) {
  return { t, i: e, s: r, l: i, c: a, m: n, p: o, e: l, a: u, f: c, b: d, o: m };
}
function z$1(t) {
  return f(2, s, t, s, s, s, s, s, s, s, s, s);
}
var L$1 = z$1(2), q = z$1(3), vt$3 = z$1(1), wt$3 = z$1(0), At$3 = z$1(4), Rt$3 = z$1(5), It$3 = z$1(6), xt$3 = z$1(7);
function te$2(t) {
  return t instanceof EvalError ? 1 : t instanceof RangeError ? 2 : t instanceof ReferenceError ? 3 : t instanceof SyntaxError ? 4 : t instanceof TypeError ? 5 : t instanceof URIError ? 6 : 0;
}
function Et$3(t) {
  let e = Fe[te$2(t)];
  return t.name !== e ? { name: t.name } : t.constructor.name !== e ? { name: t.constructor.name } : {};
}
function ce$1(t, e) {
  let r = Et$3(t), i = Object.getOwnPropertyNames(t);
  for (let a = 0, n = i.length, o; a < n; a++) o = i[a], o !== "name" && o !== "message" && (o === "stack" ? e & 4 && (r = r || {}, r[o] = t[o]) : (r = r || {}, r[o] = t[o]));
  return r;
}
function Oe$1(t) {
  return Object.isFrozen(t) ? 3 : Object.isSealed(t) ? 2 : Object.isExtensible(t) ? 0 : 1;
}
function Pt$3(t) {
  switch (t) {
    case Number.POSITIVE_INFINITY:
      return Rt$3;
    case Number.NEGATIVE_INFINITY:
      return It$3;
  }
  return t !== t ? xt$3 : Object.is(t, -0) ? At$3 : f(0, s, t, s, s, s, s, s, s, s, s, s);
}
function W$3(t) {
  return f(1, s, g(t), s, s, s, s, s, s, s, s, s);
}
function kt$3(t) {
  return f(3, s, "" + t, s, s, s, s, s, s, s, s, s);
}
function Ft$2(t) {
  return f(4, t, s, s, s, s, s, s, s, s, s, s);
}
function Ot$3(t, e) {
  return f(5, t, e.toISOString(), s, s, s, s, s, s, s, s, s);
}
function Ct$3(t, e) {
  return f(6, t, s, s, g(e.source), e.flags, s, s, s, s, s, s);
}
function $t$3(t, e) {
  let r = new Uint8Array(e), i = r.length, a = new Array(i);
  for (let n = 0; n < i; n++) a[n] = r[n];
  return f(19, t, a, s, s, s, s, s, s, s, s, s);
}
function Vt$2(t, e) {
  return f(17, t, ke[e], s, s, s, s, s, s, s, s, s);
}
function Nt$3(t, e) {
  return f(18, t, g(pt$2(e)), s, s, s, s, s, s, s, s, s);
}
function Ce$1(t, e, r) {
  return f(25, t, r, s, g(e), s, s, s, s, s, s, s);
}
function Tt$3(t, e, r) {
  return f(9, t, s, e.length, s, s, s, s, r, s, s, Oe$1(e));
}
function jt$2(t, e) {
  return f(21, t, s, s, s, s, s, s, s, e, s, s);
}
function Dt$2(t, e, r) {
  return f(15, t, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function _t$2(t, e, r) {
  return f(16, t, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function Mt$2(t, e, r) {
  return f(20, t, s, e.byteLength, s, s, s, s, s, r, e.byteOffset, s);
}
function Ut$2(t, e, r) {
  return f(13, t, te$2(e), s, s, g(e.message), r, s, s, s, s, s);
}
function Bt$2(t, e, r) {
  return f(14, t, te$2(e), s, s, g(e.message), r, s, s, s, s, s);
}
function Lt$3(t, e, r) {
  return f(7, t, s, e, s, s, s, s, r, s, s, s);
}
function $e$2(t, e) {
  return f(28, s, s, s, s, s, s, s, [t, e], s, s, s);
}
function Ve$2(t, e) {
  return f(30, s, s, s, s, s, s, s, [t, e], s, s, s);
}
function Ne$1(t, e, r) {
  return f(31, t, s, s, s, s, s, s, r, e, s, s);
}
function qt$2(t, e) {
  return f(32, t, s, s, s, s, s, s, s, e, s, s);
}
function Wt$2(t, e) {
  return f(33, t, s, s, s, s, s, s, s, e, s, s);
}
function Ht$2(t, e) {
  return f(34, t, s, s, s, s, s, s, s, e, s, s);
}
var { toString: re$2 } = Object.prototype;
function Kt$2(t, e) {
  return e instanceof Error ? `Seroval caught an error during the ${t} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${t} process.

"${re$2.call(e)}"

For more information, please check the "cause" property of this error.`;
}
var se$1 = class se extends Error {
  constructor(e, r) {
    super(Kt$2(e, r)), this.cause = r;
  }
}, Xt$1 = class Xt extends se$1 {
  constructor(e) {
    super("parsing", e);
  }
}, Gt$2 = class Gt extends se$1 {
  constructor(t) {
    super("serialization", t);
  }
}, Yt$1 = class Yt extends se$1 {
  constructor(t) {
    super("deserialization", t);
  }
}, T$1 = class T extends Error {
  constructor(e) {
    super(`The value ${re$2.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = e;
  }
}, Te$1 = class Te extends Error {
  constructor(e) {
    super('Unsupported node type "' + e.t + '".');
  }
}, je$2 = class je extends Error {
  constructor(t) {
    super('Missing plugin for tag "' + t + '".');
  }
}, v = class extends Error {
  constructor(t) {
    super('Missing "' + t + '" instance.');
  }
}, Zt$1 = class Zt extends Error {
  constructor(t) {
    super('Missing reference for the value "' + re$2.call(t) + '" of type "' + typeof t + '"'), this.value = t;
  }
}, Jt$1 = class Jt extends Error {
  constructor(e) {
    super('Missing reference for id "' + g(e) + '"');
  }
}, Qt$1 = class Qt extends Error {
  constructor(t) {
    super('Unknown TypedArray "' + t + '"');
  }
}, er$1 = class er {
  constructor(t, e) {
    this.value = t, this.replacement = e;
  }
}, tr$1 = {}, rr$1 = {}, sr$1 = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
function H$1() {
  let t, e;
  return { promise: new Promise((r, i) => {
    t = r, e = i;
  }), resolve(r) {
    t(r);
  }, reject(r) {
    e(r);
  } };
}
function ir$1(t) {
  return "__SEROVAL_STREAM__" in t;
}
function F$2() {
  let t = /* @__PURE__ */ new Set(), e = [], r = true, i = true;
  function a(l) {
    for (let u of t.keys()) u.next(l);
  }
  function n(l) {
    for (let u of t.keys()) u.throw(l);
  }
  function o(l) {
    for (let u of t.keys()) u.return(l);
  }
  return { __SEROVAL_STREAM__: true, on(l) {
    r && t.add(l);
    for (let u = 0, c = e.length; u < c; u++) {
      let d = e[u];
      u === c - 1 && !r ? i ? l.return(d) : l.throw(d) : l.next(d);
    }
    return () => {
      r && t.delete(l);
    };
  }, next(l) {
    r && (e.push(l), a(l));
  }, throw(l) {
    r && (e.push(l), n(l), r = false, i = false, t.clear());
  }, return(l) {
    r && (e.push(l), o(l), r = false, i = true, t.clear());
  } };
}
function ar$1(t) {
  let e = F$2(), r = t[Symbol.asyncIterator]();
  async function i() {
    try {
      let a = await r.next();
      a.done ? e.return(a.value) : (e.next(a.value), await i());
    } catch (a) {
      e.throw(a);
    }
  }
  return i().catch(() => {
  }), e;
}
function nr$1(t) {
  return () => {
    let e = [], r = [], i = 0, a = -1, n = false;
    function o() {
      for (let u = 0, c = r.length; u < c; u++) r[u].resolve({ done: true, value: void 0 });
    }
    t.on({ next(u) {
      let c = r.shift();
      c && c.resolve({ done: false, value: u }), e.push(u);
    }, throw(u) {
      let c = r.shift();
      c && c.reject(u), o(), a = e.length, e.push(u), n = true;
    }, return(u) {
      let c = r.shift();
      c && c.resolve({ done: true, value: u }), o(), a = e.length, e.push(u);
    } });
    function l() {
      let u = i++, c = e[u];
      if (u !== a) return { done: false, value: c };
      if (n) throw c;
      return { done: true, value: c };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (a === -1) {
        let u = i++;
        if (u >= e.length) {
          let c = H$1();
          return r.push(c), await c.promise;
        }
        return { done: false, value: e[u] };
      }
      return i > a ? { done: true, value: void 0 } : l();
    } };
  };
}
function De(t) {
  let e = [], r = -1, i = -1, a = t[Symbol.iterator]();
  for (; ; ) try {
    let n = a.next();
    if (e.push(n.value), n.done) {
      i = e.length - 1;
      break;
    }
  } catch (n) {
    r = e.length, e.push(n);
  }
  return { v: e, t: r, d: i };
}
function or$1(t) {
  return () => {
    let e = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (e > t.d) return { done: true, value: s };
      let r = e++, i = t.v[r];
      if (r === t.t) throw i;
      return { done: r === t.d, value: i };
    } };
  };
}
var lr$1 = class lr {
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set(), this.plugins = e.plugins, this.features = 47 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  getIndexedValue(e) {
    let r = this.refs.get(e);
    if (r != null) return this.markRef(r), { type: 1, value: Ft$2(r) };
    let i = this.refs.size;
    return this.refs.set(e, i), { type: 0, value: i };
  }
  getReference(e) {
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r : xe$2(e) ? { type: 2, value: Nt$3(r.value, e) } : r;
  }
  parseWellKnownSymbol(e) {
    let r = this.getReference(e);
    return r.type !== 0 ? r.value : (y(e in ke, new T$1(e)), Vt$2(r.value, e));
  }
  parseSpecialReference(e) {
    let r = this.getIndexedValue(sr$1[e]);
    return r.type === 1 ? r.value : f(26, r.value, e, s, s, s, s, s, s, s, s, s);
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(tr$1);
    return e.type === 1 ? e.value : f(27, e.value, s, s, s, s, s, s, s, this.parseWellKnownSymbol(Symbol.iterator), s, s);
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(rr$1);
    return e.type === 1 ? e.value : f(29, e.value, s, s, s, s, s, s, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], s, s, s);
  }
  createObjectNode(e, r, i, a) {
    return f(i ? 11 : 10, e, s, s, s, s, a, s, s, s, s, Oe$1(r));
  }
  createMapNode(e, r, i, a) {
    return f(8, e, s, s, s, s, s, { k: r, v: i, s: a }, s, this.parseSpecialReference(0), s, s);
  }
  createPromiseConstructorNode(e) {
    return f(22, e, s, s, s, s, s, s, s, this.parseSpecialReference(1), s, s);
  }
  createAbortSignalConstructorNode(e) {
    return f(35, e, s, s, s, s, s, s, s, this.parseSpecialReference(5), s, s);
  }
};
function ur$1(t) {
  switch (t) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new Qt$1(t);
  }
}
function he$1(t, e) {
  switch (e) {
    case 3:
      return Object.freeze(t);
    case 1:
      return Object.preventExtensions(t);
    case 2:
      return Object.seal(t);
    default:
      return t;
  }
}
var cr$1 = class cr {
  constructor(e) {
    this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  deserializeReference(e) {
    return this.assignIndexedValue(e.i, gt$3(S(e.s)));
  }
  deserializeArray(e) {
    let r = e.l, i = this.assignIndexedValue(e.i, new Array(r)), a;
    for (let n = 0; n < r; n++) a = e.a[n], a && (i[n] = this.deserialize(a));
    return he$1(i, e.o), i;
  }
  deserializeProperties(e, r) {
    let i = e.s;
    if (i) {
      let a = e.k, n = e.v;
      for (let o = 0, l; o < i; o++) l = a[o], typeof l == "string" ? r[S(l)] = this.deserialize(n[o]) : r[this.deserialize(l)] = this.deserialize(n[o]);
    }
    return r;
  }
  deserializeObject(e) {
    let r = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
    return this.deserializeProperties(e.p, r), he$1(r, e.o), r;
  }
  deserializeDate(e) {
    return this.assignIndexedValue(e.i, new Date(e.s));
  }
  deserializeRegExp(e) {
    return this.assignIndexedValue(e.i, new RegExp(S(e.c), e.m));
  }
  deserializeSet(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), i = e.a;
    for (let a = 0, n = e.l; a < n; a++) r.add(this.deserialize(i[a]));
    return r;
  }
  deserializeMap(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), i = e.e.k, a = e.e.v;
    for (let n = 0, o = e.e.s; n < o; n++) r.set(this.deserialize(i[n]), this.deserialize(a[n]));
    return r;
  }
  deserializeArrayBuffer(e) {
    let r = new Uint8Array(e.s);
    return this.assignIndexedValue(e.i, r.buffer);
  }
  deserializeTypedArray(e) {
    let r = ur$1(e.c), i = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new r(i, e.b, e.l));
  }
  deserializeDataView(e) {
    let r = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new DataView(r, e.b, e.l));
  }
  deserializeDictionary(e, r) {
    if (e.p) {
      let i = this.deserializeProperties(e.p, {});
      Object.assign(r, i);
    }
    return r;
  }
  deserializeAggregateError(e) {
    let r = this.assignIndexedValue(e.i, new AggregateError([], S(e.m)));
    return this.deserializeDictionary(e, r);
  }
  deserializeError(e) {
    let r = St$3[e.s], i = this.assignIndexedValue(e.i, new r(S(e.m)));
    return this.deserializeDictionary(e, i);
  }
  deserializePromise(e) {
    let r = H$1(), i = this.assignIndexedValue(e.i, r), a = this.deserialize(e.f);
    return e.s ? r.resolve(a) : r.reject(a), i.promise;
  }
  deserializeBoxed(e) {
    return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
  }
  deserializePlugin(e) {
    let r = this.plugins;
    if (r) {
      let i = S(e.c);
      for (let a = 0, n = r.length; a < n; a++) {
        let o = r[a];
        if (o.tag === i) return this.assignIndexedValue(e.i, o.deserialize(e.s, this, { id: e.i }));
      }
    }
    throw new je$2(e.c);
  }
  deserializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, H$1()).promise;
  }
  deserializePromiseResolve(e) {
    let r = this.refs.get(e.i);
    y(r, new v("Promise")), r.resolve(this.deserialize(e.a[1]));
  }
  deserializePromiseReject(e) {
    let r = this.refs.get(e.i);
    y(r, new v("Promise")), r.reject(this.deserialize(e.a[1]));
  }
  deserializeIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return or$1(r);
  }
  deserializeAsyncIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return nr$1(r);
  }
  deserializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, F$2()), i = e.a.length;
    if (i) for (let a = 0; a < i; a++) this.deserialize(e.a[a]);
    return r;
  }
  deserializeStreamNext(e) {
    let r = this.refs.get(e.i);
    y(r, new v("Stream")), r.next(this.deserialize(e.f));
  }
  deserializeStreamThrow(e) {
    let r = this.refs.get(e.i);
    y(r, new v("Stream")), r.throw(this.deserialize(e.f));
  }
  deserializeStreamReturn(e) {
    let r = this.refs.get(e.i);
    y(r, new v("Stream")), r.return(this.deserialize(e.f));
  }
  deserializeIteratorFactory(e) {
    this.deserialize(e.f);
  }
  deserializeAsyncIteratorFactory(e) {
    this.deserialize(e.a[1]);
  }
  deserializeAbortSignalConstructor(e) {
    return this.assignIndexedValue(e.i, new AbortController()).signal;
  }
  deserializeAbortSignalAbort(e) {
    let r = this.refs.get(e.i);
    y(r, new v("AbortSignal")), r.abort(this.deserialize(e.a[1]));
  }
  deserializeAbortSignalSync(e) {
    return this.assignIndexedValue(e.i, AbortSignal.abort(this.deserialize(e.f)));
  }
  deserialize(e) {
    try {
      switch (e.t) {
        case 2:
          return zt$1[e.s];
        case 0:
          return e.s;
        case 1:
          return S(e.s);
        case 3:
          return BigInt(e.s);
        case 4:
          return this.refs.get(e.i);
        case 18:
          return this.deserializeReference(e);
        case 9:
          return this.deserializeArray(e);
        case 10:
        case 11:
          return this.deserializeObject(e);
        case 5:
          return this.deserializeDate(e);
        case 6:
          return this.deserializeRegExp(e);
        case 7:
          return this.deserializeSet(e);
        case 8:
          return this.deserializeMap(e);
        case 19:
          return this.deserializeArrayBuffer(e);
        case 16:
        case 15:
          return this.deserializeTypedArray(e);
        case 20:
          return this.deserializeDataView(e);
        case 14:
          return this.deserializeAggregateError(e);
        case 13:
          return this.deserializeError(e);
        case 12:
          return this.deserializePromise(e);
        case 17:
          return yt$3[e.s];
        case 21:
          return this.deserializeBoxed(e);
        case 25:
          return this.deserializePlugin(e);
        case 22:
          return this.deserializePromiseConstructor(e);
        case 23:
          return this.deserializePromiseResolve(e);
        case 24:
          return this.deserializePromiseReject(e);
        case 28:
          return this.deserializeIteratorFactoryInstance(e);
        case 30:
          return this.deserializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.deserializeStreamConstructor(e);
        case 32:
          return this.deserializeStreamNext(e);
        case 33:
          return this.deserializeStreamThrow(e);
        case 34:
          return this.deserializeStreamReturn(e);
        case 27:
          return this.deserializeIteratorFactory(e);
        case 29:
          return this.deserializeAsyncIteratorFactory(e);
        case 36:
          return this.deserializeAbortSignalAbort(e);
        case 35:
          return this.deserializeAbortSignalConstructor(e);
        case 37:
          return this.deserializeAbortSignalSync(e);
        default:
          throw new Te$1(e);
      }
    } catch (r) {
      throw new Yt$1(r);
    }
  }
}, hr = /^[$A-Z_][0-9A-Z_$]*$/i;
function fe$1(t) {
  let e = t[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && hr.test(t);
}
function I(t) {
  switch (t.t) {
    case 0:
      return t.s + "=" + t.v;
    case 2:
      return t.s + ".set(" + t.k + "," + t.v + ")";
    case 1:
      return t.s + ".add(" + t.v + ")";
    case 3:
      return t.s + ".delete(" + t.k + ")";
  }
}
function fr(t) {
  let e = [], r = t[0];
  for (let i = 1, a = t.length, n, o = r; i < a; i++) n = t[i], n.t === 0 && n.v === o.v ? r = { t: 0, s: n.s, k: s, v: I(r) } : n.t === 2 && n.s === o.s ? r = { t: 2, s: I(r), k: n.k, v: n.v } : n.t === 1 && n.s === o.s ? r = { t: 1, s: I(r), k: s, v: n.v } : n.t === 3 && n.s === o.s ? r = { t: 3, s: I(r), k: n.k, v: s } : (e.push(r), r = n), o = n;
  return e.push(r), e;
}
function de$1(t) {
  if (t.length) {
    let e = "", r = fr(t);
    for (let i = 0, a = r.length; i < a; i++) e += I(r[i]) + ",";
    return e;
  }
  return s;
}
var dr = "Object.create(null)", pr$1 = "new Set", gr$1 = "new Map", mr = "Promise.resolve", yr = "Promise.reject", br = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: s }, zr$1 = class zr {
  constructor(e) {
    this.stack = [], this.flags = [], this.assignments = [], this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
  }
  createEffectfulFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, r) {
    e !== 0 && (this.markRef(r), this.flags.push({ type: e, value: this.getRefParam(r) }));
  }
  resolveFlags() {
    let e = "";
    for (let r = 0, i = this.flags, a = i.length; r < a; r++) {
      let n = i[r];
      e += br[n.type] + "(" + n.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = de$1(this.assignments), r = this.resolveFlags();
    return e ? r ? e + r : e : r;
  }
  createAssignment(e, r) {
    this.assignments.push({ t: 0, s: e, k: s, v: r });
  }
  createAddAssignment(e, r) {
    this.assignments.push({ t: 1, s: this.getRefParam(e), k: s, v: r });
  }
  createSetAssignment(e, r, i) {
    this.assignments.push({ t: 2, s: this.getRefParam(e), k: r, v: i });
  }
  createDeleteAssignment(e, r) {
    this.assignments.push({ t: 3, s: this.getRefParam(e), k: r, v: s });
  }
  createArrayAssign(e, r, i) {
    this.createAssignment(this.getRefParam(e) + "[" + r + "]", i);
  }
  createObjectAssign(e, r, i) {
    this.createAssignment(this.getRefParam(e) + "." + r, i);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, R$1 + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, r, i) {
    return r ? this.isIndexedValueInStack(r) ? (this.markRef(e), this.createArrayAssign(e, i, this.getRefParam(r.i)), "") : this.serialize(r) : "";
  }
  serializeArray(e) {
    let r = e.i;
    if (e.l) {
      this.stack.push(r);
      let i = e.a, a = this.serializeArrayItem(r, i[0], 0), n = a === "";
      for (let o = 1, l = e.l, u; o < l; o++) u = this.serializeArrayItem(r, i[o], o), a += "," + u, n = u === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r, "[" + a + (n ? ",]" : "]"));
    }
    return this.assignIndexedValue(r, "[]");
  }
  serializeProperty(e, r, i) {
    if (typeof r == "string") {
      let a = Number(r), n = a >= 0 && a.toString() === r || fe$1(r);
      if (this.isIndexedValueInStack(i)) {
        let o = this.getRefParam(i.i);
        return this.markRef(e.i), n && a !== a ? this.createObjectAssign(e.i, r, o) : this.createArrayAssign(e.i, n ? r : '"' + r + '"', o), "";
      }
      return (n ? r : '"' + r + '"') + ":" + this.serialize(i);
    }
    return "[" + this.serialize(r) + "]:" + this.serialize(i);
  }
  serializeProperties(e, r) {
    let i = r.s;
    if (i) {
      let a = r.k, n = r.v;
      this.stack.push(e.i);
      let o = this.serializeProperty(e, a[0], n[0]);
      for (let l = 1, u = o; l < i; l++) u = this.serializeProperty(e, a[l], n[l]), o += (u && o && ",") + u;
      return this.stack.pop(), "{" + o + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, r, i) {
    let a = this.serializeProperties(e, r);
    return a !== "{}" ? "Object.assign(" + i + "," + a + ")" : i;
  }
  serializeStringKeyAssignment(e, r, i, a) {
    let n = this.serialize(a), o = Number(i), l = o >= 0 && o.toString() === i || fe$1(i);
    if (this.isIndexedValueInStack(a)) l && o !== o ? this.createObjectAssign(e.i, i, n) : this.createArrayAssign(e.i, l ? i : '"' + i + '"', n);
    else {
      let u = this.assignments;
      this.assignments = r, l && o !== o ? this.createObjectAssign(e.i, i, n) : this.createArrayAssign(e.i, l ? i : '"' + i + '"', n), this.assignments = u;
    }
  }
  serializeAssignment(e, r, i, a) {
    if (typeof i == "string") this.serializeStringKeyAssignment(e, r, i, a);
    else {
      let n = this.stack;
      this.stack = [];
      let o = this.serialize(a);
      this.stack = n;
      let l = this.assignments;
      this.assignments = r, this.createArrayAssign(e.i, this.serialize(i), o), this.assignments = l;
    }
  }
  serializeAssignments(e, r) {
    let i = r.s;
    if (i) {
      let a = [], n = r.k, o = r.v;
      this.stack.push(e.i);
      for (let l = 0; l < i; l++) this.serializeAssignment(e, a, n[l], o[l]);
      return this.stack.pop(), de$1(a);
    }
    return s;
  }
  serializeDictionary(e, r) {
    if (e.p) if (this.features & 8) r = this.serializeWithObjectAssign(e, e.p, r);
    else {
      this.markRef(e.i);
      let i = this.serializeAssignments(e, e.p);
      if (i) return "(" + this.assignIndexedValue(e.i, r) + "," + i + this.getRefParam(e.i) + ")";
    }
    return this.assignIndexedValue(e.i, r);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, dr);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, r) {
    return this.isIndexedValueInStack(r) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r.i)), "") : this.serialize(r);
  }
  serializeSet(e) {
    let r = pr$1, i = e.l, a = e.i;
    if (i) {
      let n = e.a;
      this.stack.push(a);
      let o = this.serializeSetItem(a, n[0]);
      for (let l = 1, u = o; l < i; l++) u = this.serializeSetItem(a, n[l]), o += (u && o && ",") + u;
      this.stack.pop(), o && (r += "([" + o + "])");
    }
    return this.assignIndexedValue(a, r);
  }
  serializeMapEntry(e, r, i, a) {
    if (this.isIndexedValueInStack(r)) {
      let n = this.getRefParam(r.i);
      if (this.markRef(e), this.isIndexedValueInStack(i)) {
        let l = this.getRefParam(i.i);
        return this.createSetAssignment(e, n, l), "";
      }
      if (i.t !== 4 && i.i != null && this.isMarked(i.i)) {
        let l = "(" + this.serialize(i) + ",[" + a + "," + a + "])";
        return this.createSetAssignment(e, n, this.getRefParam(i.i)), this.createDeleteAssignment(e, a), l;
      }
      let o = this.stack;
      return this.stack = [], this.createSetAssignment(e, n, this.serialize(i)), this.stack = o, "";
    }
    if (this.isIndexedValueInStack(i)) {
      let n = this.getRefParam(i.i);
      if (this.markRef(e), r.t !== 4 && r.i != null && this.isMarked(r.i)) {
        let l = "(" + this.serialize(r) + ",[" + a + "," + a + "])";
        return this.createSetAssignment(e, this.getRefParam(r.i), n), this.createDeleteAssignment(e, a), l;
      }
      let o = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(r), n), this.stack = o, "";
    }
    return "[" + this.serialize(r) + "," + this.serialize(i) + "]";
  }
  serializeMap(e) {
    let r = gr$1, i = e.e.s, a = e.i, n = e.f, o = this.getRefParam(n.i);
    if (i) {
      let l = e.e.k, u = e.e.v;
      this.stack.push(a);
      let c = this.serializeMapEntry(a, l[0], u[0], o);
      for (let d = 1, m = c; d < i; d++) m = this.serializeMapEntry(a, l[d], u[d], o), c += (m && c && ",") + m;
      this.stack.pop(), c && (r += "([" + c + "])");
    }
    return n.t === 26 && (this.markRef(n.i), r = "(" + this.serialize(n) + "," + r + ")"), this.assignIndexedValue(a, r);
  }
  serializeArrayBuffer(e) {
    let r = "new Uint8Array(", i = e.s, a = i.length;
    if (a) {
      r += "[" + i[0];
      for (let n = 1; n < a; n++) r += "," + i[n];
      r += "]";
    }
    return this.assignIndexedValue(e.i, r + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let r = e.i;
    this.stack.push(r);
    let i = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
    return this.stack.pop(), i;
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + Fe[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let r, i = e.f, a = e.i, n = e.s ? mr : yr;
    if (this.isIndexedValueInStack(i)) {
      let o = this.getRefParam(i.i);
      r = n + (e.s ? "().then(" + this.createFunction([], o) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + o) + ")");
    } else {
      this.stack.push(a);
      let o = this.serialize(i);
      this.stack.pop(), r = n + "(" + o + ")";
    }
    return this.assignIndexedValue(a, r);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, mt$3[e.s]);
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let r = this.plugins;
    if (r) for (let i = 0, a = r.length; i < a; i++) {
      let n = r[i];
      if (n.tag === e.c) return this.assignIndexedValue(e.i, n.serialize(e.s, this, { id: e.i }));
    }
    throw new je$2(e.c);
  }
  getConstructor(e) {
    let r = this.serialize(e);
    return r === this.getRefParam(e.i) ? r : "(" + r + ")";
  }
  serializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReferenceValue(e) {
    switch (e) {
      case 0:
        return "[]";
      case 1:
        return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
      case 2:
        return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
      case 3:
        return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
      case 4:
        return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      case 5:
        return this.createFunction(["a", "s"], "((s=(a=new AbortController).signal).a=a,s)");
      case 6:
        return this.createEffectfulFunction(["s", "r"], "s.a.abort(r);delete s.a");
      default:
        return "";
    }
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, this.serializeSpecialReferenceValue(e.s));
  }
  serializeIteratorFactory(e) {
    let r = "", i = false;
    return e.f.t !== 4 && (this.markRef(e.f.i), r = "(" + this.serialize(e.f) + ",", i = true), r += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), i && (r += ")"), r;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let r = e.a[0], i = e.a[1], a = "";
    r.t !== 4 && (this.markRef(r.i), a += "(" + this.serialize(r)), i.t !== 4 && (this.markRef(i.i), a += (a ? "," : "(") + this.serialize(i)), a && (a += ",");
    let n = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(i.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(r.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return a ? a + n + ")" : n;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), i = e.a.length;
    if (i) {
      let a = this.serialize(e.a[0]);
      for (let n = 1; n < i; n++) a += "," + this.serialize(e.a[n]);
      return "(" + r + "," + a + "," + this.getRefParam(e.i) + ")";
    }
    return r;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serializeAbortSignalSync(e) {
    return this.assignIndexedValue(e.i, "AbortSignal.abort(" + this.serialize(e.f) + ")");
  }
  serializeAbortSignalConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializeAbortSignalAbort(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serialize(e) {
    try {
      switch (e.t) {
        case 2:
          return bt$3[e.s];
        case 0:
          return "" + e.s;
        case 1:
          return '"' + e.s + '"';
        case 3:
          return e.s + "n";
        case 4:
          return this.getRefParam(e.i);
        case 18:
          return this.serializeReference(e);
        case 9:
          return this.serializeArray(e);
        case 10:
          return this.serializeObject(e);
        case 11:
          return this.serializeNullConstructor(e);
        case 5:
          return this.serializeDate(e);
        case 6:
          return this.serializeRegExp(e);
        case 7:
          return this.serializeSet(e);
        case 8:
          return this.serializeMap(e);
        case 19:
          return this.serializeArrayBuffer(e);
        case 16:
        case 15:
          return this.serializeTypedArray(e);
        case 20:
          return this.serializeDataView(e);
        case 14:
          return this.serializeAggregateError(e);
        case 13:
          return this.serializeError(e);
        case 12:
          return this.serializePromise(e);
        case 17:
          return this.serializeWellKnownSymbol(e);
        case 21:
          return this.serializeBoxed(e);
        case 22:
          return this.serializePromiseConstructor(e);
        case 23:
          return this.serializePromiseResolve(e);
        case 24:
          return this.serializePromiseReject(e);
        case 25:
          return this.serializePlugin(e);
        case 26:
          return this.serializeSpecialReference(e);
        case 27:
          return this.serializeIteratorFactory(e);
        case 28:
          return this.serializeIteratorFactoryInstance(e);
        case 29:
          return this.serializeAsyncIteratorFactory(e);
        case 30:
          return this.serializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.serializeStreamConstructor(e);
        case 32:
          return this.serializeStreamNext(e);
        case 33:
          return this.serializeStreamThrow(e);
        case 34:
          return this.serializeStreamReturn(e);
        case 36:
          return this.serializeAbortSignalAbort(e);
        case 35:
          return this.serializeAbortSignalConstructor(e);
        case 37:
          return this.serializeAbortSignalSync(e);
        default:
          throw new Te$1(e);
      }
    } catch (r) {
      throw new Gt$2(r);
    }
  }
}, Sr$1 = class Sr extends zr$1 {
  constructor(t) {
    super(t), this.mode = "cross", this.scopeId = t.scopeId;
  }
  getRefParam(t) {
    return N$2 + "[" + t + "]";
  }
  assignIndexedValue(t, e) {
    return this.getRefParam(t) + "=" + e;
  }
  serializeTop(t) {
    let e = this.serialize(t), r = t.i;
    if (r == null) return e;
    let i = this.resolvePatches(), a = this.getRefParam(r), n = this.scopeId == null ? "" : N$2, o = i ? "(" + e + "," + i + a + ")" : e;
    if (n === "") return t.t === 10 && !i ? "(" + o + ")" : o;
    let l = this.scopeId == null ? "()" : "(" + N$2 + '["' + g(this.scopeId) + '"])';
    return "(" + this.createFunction([n], o) + ")" + l;
  }
}, vr = class extends lr$1 {
  parseItems(t) {
    let e = [];
    for (let r = 0, i = t.length; r < i; r++) r in t && (e[r] = this.parse(t[r]));
    return e;
  }
  parseArray(t, e) {
    return Tt$3(t, e, this.parseItems(e));
  }
  parseProperties(t) {
    let e = Object.entries(t), r = [], i = [];
    for (let n = 0, o = e.length; n < o; n++) r.push(g(e[n][0])), i.push(this.parse(e[n][1]));
    let a = Symbol.iterator;
    return a in t && (r.push(this.parseWellKnownSymbol(a)), i.push($e$2(this.parseIteratorFactory(), this.parse(De(t))))), a = Symbol.asyncIterator, a in t && (r.push(this.parseWellKnownSymbol(a)), i.push(Ve$2(this.parseAsyncIteratorFactory(), this.parse(F$2())))), a = Symbol.toStringTag, a in t && (r.push(this.parseWellKnownSymbol(a)), i.push(W$3(t[a]))), a = Symbol.isConcatSpreadable, a in t && (r.push(this.parseWellKnownSymbol(a)), i.push(t[a] ? L$1 : q)), { k: r, v: i, s: r.length };
  }
  parsePlainObject(t, e, r) {
    return this.createObjectNode(t, e, r, this.parseProperties(e));
  }
  parseBoxed(t, e) {
    return jt$2(t, this.parse(e.valueOf()));
  }
  parseTypedArray(t, e) {
    return Dt$2(t, e, this.parse(e.buffer));
  }
  parseBigIntTypedArray(t, e) {
    return _t$2(t, e, this.parse(e.buffer));
  }
  parseDataView(t, e) {
    return Mt$2(t, e, this.parse(e.buffer));
  }
  parseError(t, e) {
    let r = ce$1(e, this.features);
    return Ut$2(t, e, r ? this.parseProperties(r) : s);
  }
  parseAggregateError(t, e) {
    let r = ce$1(e, this.features);
    return Bt$2(t, e, r ? this.parseProperties(r) : s);
  }
  parseMap(t, e) {
    let r = [], i = [];
    for (let [a, n] of e.entries()) r.push(this.parse(a)), i.push(this.parse(n));
    return this.createMapNode(t, r, i, e.size);
  }
  parseSet(t, e) {
    let r = [];
    for (let i of e.keys()) r.push(this.parse(i));
    return Lt$3(t, e.size, r);
  }
  parsePlugin(t, e) {
    let r = this.plugins;
    if (r) for (let i = 0, a = r.length; i < a; i++) {
      let n = r[i];
      if (n.parse.sync && n.test(e)) return Ce$1(t, n.tag, n.parse.sync(e, this, { id: t }));
    }
  }
  parseStream(t, e) {
    return Ne$1(t, this.parseSpecialReference(4), []);
  }
  parsePromise(t, e) {
    return this.createPromiseConstructorNode(t);
  }
  parseAbortSignalSync(t, e) {
    return f(37, t, s, s, s, s, s, s, s, this.parse(e.reason), s, s);
  }
  parseAbortSignal(t, e) {
    return e.aborted ? this.parseAbortSignalSync(t, e) : this.createAbortSignalConstructorNode(t);
  }
  parseObject(t, e) {
    if (Array.isArray(e)) return this.parseArray(t, e);
    if (ir$1(e)) return this.parseStream(t, e);
    let r = e.constructor;
    if (r === er$1) return this.parse(e.replacement);
    let i = this.parsePlugin(t, e);
    if (i) return i;
    switch (r) {
      case Object:
        return this.parsePlainObject(t, e, false);
      case void 0:
        return this.parsePlainObject(t, e, true);
      case Date:
        return Ot$3(t, e);
      case RegExp:
        return Ct$3(t, e);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(t, e);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(t, e);
      case ArrayBuffer:
        return $t$3(t, e);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(t, e);
      case DataView:
        return this.parseDataView(t, e);
      case Map:
        return this.parseMap(t, e);
      case Set:
        return this.parseSet(t, e);
    }
    if (r === Promise || e instanceof Promise) return this.parsePromise(t, e);
    let a = this.features;
    if (a & 32 && typeof AbortSignal < "u" && r === AbortSignal) return this.parseAbortSignal(t, e);
    if (a & 16) switch (r) {
      case BigInt64Array:
      case BigUint64Array:
        return this.parseBigIntTypedArray(t, e);
    }
    if (a & 1 && typeof AggregateError < "u" && (r === AggregateError || e instanceof AggregateError)) return this.parseAggregateError(t, e);
    if (e instanceof Error) return this.parseError(t, e);
    if (Symbol.iterator in e || Symbol.asyncIterator in e) return this.parsePlainObject(t, e, !!r);
    throw new T$1(e);
  }
  parseFunction(t) {
    let e = this.getReference(t);
    if (e.type !== 0) return e.value;
    let r = this.parsePlugin(e.value, t);
    if (r) return r;
    throw new T$1(t);
  }
  parse(t) {
    try {
      switch (typeof t) {
        case "boolean":
          return t ? L$1 : q;
        case "undefined":
          return vt$3;
        case "string":
          return W$3(t);
        case "number":
          return Pt$3(t);
        case "bigint":
          return kt$3(t);
        case "object": {
          if (t) {
            let e = this.getReference(t);
            return e.type === 0 ? this.parseObject(e.value, t) : e.value;
          }
          return wt$3;
        }
        case "symbol":
          return this.parseWellKnownSymbol(t);
        case "function":
          return this.parseFunction(t);
        default:
          throw new T$1(t);
      }
    } catch (e) {
      throw new Xt$1(e);
    }
  }
}, wr = class extends vr {
  constructor(e) {
    super(e), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = e.onParse, this.onErrorCallback = e.onError, this.onDoneCallback = e.onDone;
  }
  onParseInternal(e, r) {
    try {
      this.onParseCallback(e, r);
    } catch (i) {
      this.onError(i);
    }
  }
  flush() {
    for (let e = 0, r = this.buffer.length; e < r; e++) this.onParseInternal(this.buffer[e], false);
  }
  onParse(e) {
    this.initial ? this.buffer.push(e) : this.onParseInternal(e, false);
  }
  onError(e) {
    if (this.onErrorCallback) this.onErrorCallback(e);
    else throw e;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(e) {
    let r = Object.entries(e), i = [], a = [];
    for (let o = 0, l = r.length; o < l; o++) i.push(g(r[o][0])), a.push(this.parse(r[o][1]));
    let n = Symbol.iterator;
    return n in e && (i.push(this.parseWellKnownSymbol(n)), a.push($e$2(this.parseIteratorFactory(), this.parse(De(e))))), n = Symbol.asyncIterator, n in e && (i.push(this.parseWellKnownSymbol(n)), a.push(Ve$2(this.parseAsyncIteratorFactory(), this.parse(ar$1(e))))), n = Symbol.toStringTag, n in e && (i.push(this.parseWellKnownSymbol(n)), a.push(W$3(e[n]))), n = Symbol.isConcatSpreadable, n in e && (i.push(this.parseWellKnownSymbol(n)), a.push(e[n] ? L$1 : q)), { k: i, v: a, s: i.length };
  }
  parsePromise(e, r) {
    return r.then((i) => {
      let a = this.parseWithError(i);
      a && this.onParse(f(23, e, s, s, s, s, s, s, [this.parseSpecialReference(2), a], s, s, s)), this.popPendingState();
    }, (i) => {
      if (this.alive) {
        let a = this.parseWithError(i);
        a && this.onParse(f(24, e, s, s, s, s, s, s, [this.parseSpecialReference(3), a], s, s, s));
      }
      this.popPendingState();
    }), this.pushPendingState(), this.createPromiseConstructorNode(e);
  }
  parsePlugin(e, r) {
    let i = this.plugins;
    if (i) for (let a = 0, n = i.length; a < n; a++) {
      let o = i[a];
      if (o.parse.stream && o.test(r)) return Ce$1(e, o.tag, o.parse.stream(r, this, { id: e }));
    }
    return s;
  }
  parseStream(e, r) {
    let i = Ne$1(e, this.parseSpecialReference(4), []);
    return this.pushPendingState(), r.on({ next: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(qt$2(e, n));
      }
    }, throw: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(Wt$2(e, n));
      }
      this.popPendingState();
    }, return: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(Ht$2(e, n));
      }
      this.popPendingState();
    } }), i;
  }
  handleAbortSignal(e, r) {
    if (this.alive) {
      let i = this.parseWithError(r.reason);
      i && this.onParse(f(36, e, s, s, s, s, s, s, [this.parseSpecialReference(6), i], s, s, s));
    }
    this.popPendingState();
  }
  parseAbortSignal(e, r) {
    return r.aborted ? this.parseAbortSignalSync(e, r) : (this.pushPendingState(), r.addEventListener("abort", this.handleAbortSignal.bind(this, e, r), { once: true }), this.createAbortSignalConstructorNode(e));
  }
  parseWithError(e) {
    try {
      return this.parse(e);
    } catch (r) {
      return this.onError(r), s;
    }
  }
  start(e) {
    let r = this.parseWithError(e);
    r && (this.onParseInternal(r, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
}, Ar$1 = class Ar extends wr {
  constructor() {
    super(...arguments), this.mode = "cross";
  }
};
function Rr$1(t, e) {
  let r = Pe$1(e.plugins), i = new Ar$1({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(a, n) {
    let o = new Sr$1({ plugins: r, features: i.features, scopeId: e.scopeId, markedRefs: i.marked }), l;
    try {
      l = o.serializeTop(a);
    } catch (u) {
      e.onError && e.onError(u);
      return;
    }
    e.onSerialize(l, n);
  }, onError: e.onError, onDone: e.onDone });
  return i.start(t), i.destroy.bind(i);
}
var Ir$1 = class Ir extends cr$1 {
  constructor(t) {
    super(t), this.mode = "vanilla", this.marked = new Set(t.markedRefs);
  }
  assignIndexedValue(t, e) {
    return this.marked.has(t) && this.refs.set(t, e), e;
  }
};
function pe$1(t, e = {}) {
  let r = Pe$1(e.plugins);
  return new Ir$1({ plugins: r, markedRefs: t.m }).deserialize(t.t);
}
function j$2(t) {
  return { detail: t.detail, bubbles: t.bubbles, cancelable: t.cancelable, composed: t.composed };
}
var xr$1 = { tag: "seroval-plugins/web/CustomEvent", test(t) {
  return typeof CustomEvent > "u" ? false : t instanceof CustomEvent;
}, parse: { sync(t, e) {
  return { type: e.parse(t.type), options: e.parse(j$2(t)) };
}, async async(t, e) {
  return { type: await e.parse(t.type), options: await e.parse(j$2(t)) };
}, stream(t, e) {
  return { type: e.parse(t.type), options: e.parse(j$2(t)) };
} }, serialize(t, e) {
  return "new CustomEvent(" + e.serialize(t.type) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new CustomEvent(e.deserialize(t.type), e.deserialize(t.options));
} }, K$3 = xr$1, Er = { tag: "seroval-plugins/web/DOMException", test(t) {
  return typeof DOMException > "u" ? false : t instanceof DOMException;
}, parse: { sync(t, e) {
  return { name: e.parse(t.name), message: e.parse(t.message) };
}, async async(t, e) {
  return { name: await e.parse(t.name), message: await e.parse(t.message) };
}, stream(t, e) {
  return { name: e.parse(t.name), message: e.parse(t.message) };
} }, serialize(t, e) {
  return "new DOMException(" + e.serialize(t.message) + "," + e.serialize(t.name) + ")";
}, deserialize(t, e) {
  return new DOMException(e.deserialize(t.message), e.deserialize(t.name));
} }, X$2 = Er;
function D$1(t) {
  return { bubbles: t.bubbles, cancelable: t.cancelable, composed: t.composed };
}
var Pr = { tag: "seroval-plugins/web/Event", test(t) {
  return typeof Event > "u" ? false : t instanceof Event;
}, parse: { sync(t, e) {
  return { type: e.parse(t.type), options: e.parse(D$1(t)) };
}, async async(t, e) {
  return { type: await e.parse(t.type), options: await e.parse(D$1(t)) };
}, stream(t, e) {
  return { type: e.parse(t.type), options: e.parse(D$1(t)) };
} }, serialize(t, e) {
  return "new Event(" + e.serialize(t.type) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Event(e.deserialize(t.type), e.deserialize(t.options));
} }, G$2 = Pr, kr$1 = { tag: "seroval-plugins/web/File", test(t) {
  return typeof File > "u" ? false : t instanceof File;
}, parse: { async async(t, e) {
  return { name: await e.parse(t.name), options: await e.parse({ type: t.type, lastModified: t.lastModified }), buffer: await e.parse(await t.arrayBuffer()) };
} }, serialize(t, e) {
  return "new File([" + e.serialize(t.buffer) + "]," + e.serialize(t.name) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new File([e.deserialize(t.buffer)], e.deserialize(t.name), e.deserialize(t.options));
} }, Fr$1 = kr$1;
function _(t) {
  let e = [];
  return t.forEach((r, i) => {
    e.push([i, r]);
  }), e;
}
var x$2 = {}, Or$1 = { tag: "seroval-plugins/web/FormDataFactory", test(t) {
  return t === x$2;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(t, e) {
  return e.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return x$2;
} }, Cr$1 = { tag: "seroval-plugins/web/FormData", extends: [Fr$1, Or$1], test(t) {
  return typeof FormData > "u" ? false : t instanceof FormData;
}, parse: { sync(t, e) {
  return { factory: e.parse(x$2), entries: e.parse(_(t)) };
}, async async(t, e) {
  return { factory: await e.parse(x$2), entries: await e.parse(_(t)) };
}, stream(t, e) {
  return { factory: e.parse(x$2), entries: e.parse(_(t)) };
} }, serialize(t, e) {
  return "(" + e.serialize(t.factory) + ")(" + e.serialize(t.entries) + ")";
}, deserialize(t, e) {
  let r = new FormData(), i = e.deserialize(t.entries);
  for (let a = 0, n = i.length; a < n; a++) {
    let o = i[a];
    r.append(o[0], o[1]);
  }
  return r;
} }, Y$2 = Cr$1;
function M$1(t) {
  let e = [];
  return t.forEach((r, i) => {
    e.push([i, r]);
  }), e;
}
var $r$1 = { tag: "seroval-plugins/web/Headers", test(t) {
  return typeof Headers > "u" ? false : t instanceof Headers;
}, parse: { sync(t, e) {
  return e.parse(M$1(t));
}, async async(t, e) {
  return await e.parse(M$1(t));
}, stream(t, e) {
  return e.parse(M$1(t));
} }, serialize(t, e) {
  return "new Headers(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new Headers(e.deserialize(t));
} }, P$1 = $r$1, E = {}, Vr$1 = { tag: "seroval-plugins/web/ReadableStreamFactory", test(t) {
  return t === E;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(t, e) {
  return e.createFunction(["d"], "new ReadableStream({start:" + e.createEffectfulFunction(["c"], "d.on({next:" + e.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + e.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + e.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return E;
} };
function ge$1(t) {
  let e = F$2(), r = t.getReader();
  async function i() {
    try {
      let a = await r.read();
      a.done ? e.return(a.value) : (e.next(a.value), await i());
    } catch (a) {
      e.throw(a);
    }
  }
  return i().catch(() => {
  }), e;
}
var Nr$1 = { tag: "seroval/plugins/web/ReadableStream", extends: [Vr$1], test(t) {
  return typeof ReadableStream > "u" ? false : t instanceof ReadableStream;
}, parse: { sync(t, e) {
  return { factory: e.parse(E), stream: e.parse(F$2()) };
}, async async(t, e) {
  return { factory: await e.parse(E), stream: await e.parse(ge$1(t)) };
}, stream(t, e) {
  return { factory: e.parse(E), stream: e.parse(ge$1(t)) };
} }, serialize(t, e) {
  return "(" + e.serialize(t.factory) + ")(" + e.serialize(t.stream) + ")";
}, deserialize(t, e) {
  let r = e.deserialize(t.stream);
  return new ReadableStream({ start(i) {
    r.on({ next(a) {
      i.enqueue(a);
    }, throw(a) {
      i.error(a);
    }, return() {
      i.close();
    } });
  } });
} }, k = Nr$1;
function me$1(t, e) {
  return { body: e, cache: t.cache, credentials: t.credentials, headers: t.headers, integrity: t.integrity, keepalive: t.keepalive, method: t.method, mode: t.mode, redirect: t.redirect, referrer: t.referrer, referrerPolicy: t.referrerPolicy };
}
var Tr = { tag: "seroval-plugins/web/Request", extends: [k, P$1], test(t) {
  return typeof Request > "u" ? false : t instanceof Request;
}, parse: { async async(t, e) {
  return { url: await e.parse(t.url), options: await e.parse(me$1(t, t.body ? await t.clone().arrayBuffer() : null)) };
}, stream(t, e) {
  return { url: e.parse(t.url), options: e.parse(me$1(t, t.clone().body)) };
} }, serialize(t, e) {
  return "new Request(" + e.serialize(t.url) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Request(e.deserialize(t.url), e.deserialize(t.options));
} }, Z$3 = Tr;
function ye(t) {
  return { headers: t.headers, status: t.status, statusText: t.statusText };
}
var jr$1 = { tag: "seroval-plugins/web/Response", extends: [k, P$1], test(t) {
  return typeof Response > "u" ? false : t instanceof Response;
}, parse: { async async(t, e) {
  return { body: await e.parse(t.body ? await t.clone().arrayBuffer() : null), options: await e.parse(ye(t)) };
}, stream(t, e) {
  return { body: e.parse(t.clone().body), options: e.parse(ye(t)) };
} }, serialize(t, e) {
  return "new Response(" + e.serialize(t.body) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Response(e.deserialize(t.body), e.deserialize(t.options));
} }, J$1 = jr$1, Dr$1 = { tag: "seroval-plugins/web/URLSearchParams", test(t) {
  return typeof URLSearchParams > "u" ? false : t instanceof URLSearchParams;
}, parse: { sync(t, e) {
  return e.parse(t.toString());
}, async async(t, e) {
  return await e.parse(t.toString());
}, stream(t, e) {
  return e.parse(t.toString());
} }, serialize(t, e) {
  return "new URLSearchParams(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new URLSearchParams(e.deserialize(t));
} }, Q$1 = Dr$1, _r = { tag: "seroval-plugins/web/URL", test(t) {
  return typeof URL > "u" ? false : t instanceof URL;
}, parse: { sync(t, e) {
  return e.parse(t.href);
}, async async(t, e) {
  return await e.parse(t.href);
}, stream(t, e) {
  return e.parse(t.href);
} }, serialize(t, e) {
  return "new URL(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new URL(e.deserialize(t));
} }, ee$2 = _r;
const U$3 = "Invariant Violation", { setPrototypeOf: Mr$1 = function(t, e) {
  return t.__proto__ = e, t;
} } = Object;
let ie$1 = class ie extends Error {
  constructor(e = U$3) {
    super(typeof e == "number" ? `${U$3}: ${e} (see https://github.com/apollographql/invariant-packages)` : e);
    __publicField$4(this, "framesToPop", 1);
    __publicField$4(this, "name", U$3);
    Mr$1(this, ie.prototype);
  }
};
function Ur$1(t, e) {
  if (!t) throw new ie$1(e);
}
const A$1 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function Br$1(t = {}) {
  const e = { options: t, rootNode: _e$1(), staticRoutesMap: {} }, r = (i) => t.strictTrailingSlash ? i : i.replace(/\/$/, "") || "/";
  if (t.routes) for (const i in t.routes) be(e, r(i), t.routes[i]);
  return { ctx: e, lookup: (i) => Lr$1(e, r(i)), insert: (i, a) => be(e, r(i), a), remove: (i) => qr$1(e, r(i)) };
}
function Lr$1(t, e) {
  const r = t.staticRoutesMap[e];
  if (r) return r.data;
  const i = e.split("/"), a = {};
  let n = false, o = null, l = t.rootNode, u = null;
  for (let c = 0; c < i.length; c++) {
    const d = i[c];
    l.wildcardChildNode !== null && (o = l.wildcardChildNode, u = i.slice(c).join("/"));
    const m = l.children.get(d);
    if (m === void 0) {
      if (l && l.placeholderChildren.length > 1) {
        const b = i.length - c;
        l = l.placeholderChildren.find((h) => h.maxDepth === b) || null;
      } else l = l.placeholderChildren[0] || null;
      if (!l) break;
      l.paramName && (a[l.paramName] = d), n = true;
    } else l = m;
  }
  return (l === null || l.data === null) && o !== null && (l = o, a[l.paramName || "_"] = u, n = true), l ? n ? { ...l.data, params: n ? a : void 0 } : l.data : null;
}
function be(t, e, r) {
  let i = true;
  const a = e.split("/");
  let n = t.rootNode, o = 0;
  const l = [n];
  for (const u of a) {
    let c;
    if (c = n.children.get(u)) n = c;
    else {
      const d = Wr$1(u);
      c = _e$1({ type: d, parent: n }), n.children.set(u, c), d === A$1.PLACEHOLDER ? (c.paramName = u === "*" ? `_${o++}` : u.slice(1), n.placeholderChildren.push(c), i = false) : d === A$1.WILDCARD && (n.wildcardChildNode = c, c.paramName = u.slice(3) || "_", i = false), l.push(c), n = c;
    }
  }
  for (const [u, c] of l.entries()) c.maxDepth = Math.max(l.length - u, c.maxDepth || 0);
  return n.data = r, i === true && (t.staticRoutesMap[e] = n), n;
}
function qr$1(t, e) {
  let r = false;
  const i = e.split("/");
  let a = t.rootNode;
  for (const n of i) if (a = a.children.get(n), !a) return r;
  if (a.data) {
    const n = i.at(-1) || "";
    a.data = null, Object.keys(a.children).length === 0 && a.parent && (a.parent.children.delete(n), a.parent.wildcardChildNode = null, a.parent.placeholderChildren = []), r = true;
  }
  return r;
}
function _e$1(t = {}) {
  return { type: t.type || A$1.NORMAL, maxDepth: 0, parent: t.parent || null, children: /* @__PURE__ */ new Map(), data: t.data || null, paramName: t.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Wr$1(t) {
  return t.startsWith("**") ? A$1.WILDCARD : t[0] === ":" || t === "*" ? A$1.PLACEHOLDER : A$1.NORMAL;
}
const Hr$1 = te$4(async () => {
  try {
    return x$5(i$3.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set"), (await new ts$2(i$3.env.GITHUB_TOKEN).getBranches()).data;
  } catch (t) {
    return console.error("Failed to fetch branches:", t), { error: "Failed to fetch branches" };
  }
}, "src_routes_index_tsx--getBranches_query", "/home/rowvir/dev/peepr/ui/src/routes/index.tsx?pick=route&tsr-directive-use-server="), Kr$1 = L$2(Hr$1, "query"), Xr$1 = { preload() {
  In$1(), Kr$1();
} }, Me$1 = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('../build/_...404_.mjs'), import: () => import('../build/_...404_.mjs') }, path: "/*404", filePath: "/home/rowvir/dev/peepr/ui/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index.mjs'), import: () => import('../build/index.mjs') }, $$route: { require: () => ({ route: Xr$1 }), src: "src/routes/index.tsx?pick=route" }, path: "/", filePath: "/home/rowvir/dev/peepr/ui/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => import('../build/login.mjs'), import: () => import('../build/login.mjs') }, path: "/login", filePath: "/home/rowvir/dev/peepr/ui/src/routes/login.tsx" }, { page: true, $component: { src: "src/routes/sample-ui.tsx?pick=default&pick=$css", build: () => import('../build/sample-ui.mjs'), import: () => import('../build/sample-ui.mjs') }, path: "/sample-ui", filePath: "/home/rowvir/dev/peepr/ui/src/routes/sample-ui.tsx" }], Gr$1 = Yr$1(Me$1.filter((t) => t.page));
function Yr$1(t) {
  function e(r, i, a, n) {
    const o = Object.values(r).find((l) => a.startsWith(l.id + "/"));
    return o ? (e(o.children || (o.children = []), i, a.slice(o.id.length)), r) : (r.push({ ...i, id: a, path: a.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), r);
  }
  return t.sort((r, i) => r.path.length - i.path.length).reduce((r, i) => e(r, i, i.path, i.path), []);
}
function Zr$1(t) {
  return t.$HEAD || t.$GET || t.$POST || t.$PUT || t.$PATCH || t.$DELETE;
}
Br$1({ routes: Me$1.reduce((t, e) => {
  if (!Zr$1(e)) return t;
  let r = e.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (i, a) => `**:${a}`).split("/").map((i) => i.startsWith(":") || i.startsWith("*") ? i : encodeURIComponent(i)).join("/");
  if (/:[^/]*\?/g.test(r)) throw new Error(`Optional parameters are not supported in API routes: ${r}`);
  if (t[r]) throw new Error(`Duplicate API routes for "${r}" found at "${t[r].route.path}" and "${e.path}"`);
  return t[r] = { route: e }, t;
}, {}) });
var Qr$1 = " ";
const es = { style: (t) => ssrElement("style", t.attrs, () => t.children, true), link: (t) => ssrElement("link", t.attrs, void 0, true), script: (t) => t.attrs.src ? ssrElement("script", mergeProps(() => t.attrs, { get id() {
  return t.key;
} }), () => ssr(Qr$1), true) : null, noscript: (t) => ssrElement("noscript", t.attrs, () => escape(t.children), true) };
function ts$1(t, e) {
  let { tag: r, attrs: { key: i, ...a } = { key: void 0 }, children: n } = t;
  return es[r]({ attrs: { ...a, nonce: e }, key: i, children: n });
}
function rs(t, e, r, i = "default") {
  return lazy(async () => {
    var _a;
    {
      const n = (await t.import())[i], l = (await ((_a = e.inputs) == null ? void 0 : _a[t.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...l.map((d) => ts$1(d)), createComponent(n, c)] };
    }
  });
}
function Ue() {
  function t(r) {
    return { ...r, ...r.$$route ? r.$$route.require().route : void 0, info: { ...r.$$route ? r.$$route.require().route.info : {}, filesystem: true }, component: r.$component && rs(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: r.children ? r.children.map(t) : void 0 };
  }
  return Gr$1.map(t);
}
let ze$2;
const ks = isServer ? () => getRequestEvent().routes : () => ze$2 || (ze$2 = Ue());
function ss(t) {
  const e = _n$1(t.nativeEvent, "flash");
  if (e) try {
    let r = JSON.parse(e);
    if (!r || !r.result) return;
    const i = [...r.input.slice(0, -1), new Map(r.input[r.input.length - 1])], a = r.error ? new Error(r.result) : r.result;
    return { input: i, url: r.url, pending: false, result: r.thrown ? void 0 : a, error: r.thrown ? a : void 0 };
  } catch (r) {
    console.error(r);
  } finally {
    Cn$1(t.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function is(t) {
  const e = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, t.response.headers.set("Content-Type", "text/html"), Object.assign(t, { manifest: await e.json(), assets: [...await e.inputs[e.handler].assets()], router: { submission: ss(t) }, routes: Ue(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const as = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function ns(t) {
  return t.status && as.has(t.status) ? t.status : 302;
}
const os = { "src_routes_index_tsx--getBranches_query": { functionName: "getBranches_query", importer: () => import('../build/index-CtGJWfR3.mjs') }, "src_lib_index_ts--getUser_query": { functionName: "getUser_query", importer: () => import('../build/index-CNI0dcKX.mjs') }, "src_lib_index_ts--loginOrRegister_action": { functionName: "loginOrRegister_action", importer: () => import('../build/index-CNI0dcKX.mjs') }, "src_lib_index_ts--logout_action": { functionName: "logout_action", importer: () => import('../build/index-CNI0dcKX.mjs') } };
function ls(t) {
  const e = new TextEncoder().encode(t), r = e.length, i = r.toString(16), a = "00000000".substring(0, 8 - i.length) + i, n = new TextEncoder().encode(`;0x${a};`), o = new Uint8Array(12 + r);
  return o.set(n), o.set(e, 12), o;
}
function Se$1(t, e) {
  return new ReadableStream({ start(r) {
    Rr$1(e, { scopeId: t, plugins: [K$3, X$2, G$2, Y$2, P$1, k, Z$3, J$1, Q$1, ee$2], onSerialize(i, a) {
      r.enqueue(ls(a ? `(${ft$2(t)},${i})` : i));
    }, onDone() {
      r.close();
    }, onError(i) {
      r.error(i);
    } });
  } });
}
async function us(t) {
  const e = Pn$1(t), r = e.request, i = r.headers.get("X-Server-Id"), a = r.headers.get("X-Server-Instance"), n = r.headers.has("X-Single-Flight"), o = new URL(r.url);
  let l, u;
  if (i) Ur$1(typeof i == "string", "Invalid server function"), [l, u] = i.split("#");
  else if (l = o.searchParams.get("id"), u = o.searchParams.get("name"), !l || !u) return new Response(null, { status: 404 });
  const c = os[l];
  let d;
  if (!c) return new Response(null, { status: 404 });
  d = await c.importer();
  const m = d[c.functionName];
  let b = [];
  if (!a || t.method === "GET") {
    const h = o.searchParams.get("args");
    if (h) {
      const p = JSON.parse(h);
      (p.t ? pe$1(p, { plugins: [K$3, X$2, G$2, Y$2, P$1, k, Z$3, J$1, Q$1, ee$2] }) : p).forEach((O) => b.push(O));
    }
  }
  if (t.method === "POST") {
    const h = r.headers.get("content-type"), p = t.node.req, O = p instanceof ReadableStream, Be = p.body instanceof ReadableStream, ae = O && p.locked || Be && p.body.locked, ne = O ? p : p.body;
    if ((h == null ? void 0 : h.startsWith("multipart/form-data")) || (h == null ? void 0 : h.startsWith("application/x-www-form-urlencoded"))) b.push(await (ae ? r : new Request(r, { ...r, body: ne })).formData());
    else if (h == null ? void 0 : h.startsWith("application/json")) {
      const Le = ae ? r : new Request(r, { ...r, body: ne });
      b = pe$1(await Le.json(), { plugins: [K$3, X$2, G$2, Y$2, P$1, k, Z$3, J$1, Q$1, ee$2] });
    }
  }
  try {
    let h = await provideRequestEvent(e, async () => (sharedConfig.context = { event: e }, e.locals.serverFunctionMeta = { id: l + "#" + u }, m(...b)));
    if (n && a && (h = await we(e, h)), h instanceof Response) {
      if (h.headers && h.headers.has("X-Content-Raw")) return h;
      a && (h.headers && An$1(t, h.headers), h.status && (h.status < 300 || h.status >= 400) && he$2(t, h.status), h.customBody ? h = await h.customBody() : h.body == null && (h = null));
    }
    return a ? (En$1(t, "content-type", "text/javascript"), Se$1(a, h)) : ve(h, r, b);
  } catch (h) {
    if (h instanceof Response) n && a && (h = await we(e, h)), h.headers && An$1(t, h.headers), h.status && (!a || h.status < 300 || h.status >= 400) && he$2(t, h.status), h.customBody ? h = h.customBody() : h.body == null && (h = null), En$1(t, "X-Error", "true");
    else if (a) {
      const p = h instanceof Error ? h.message : typeof h == "string" ? h : "true";
      En$1(t, "X-Error", p.replace(/[\r\n]+/g, ""));
    } else h = ve(h, r, b, true);
    return a ? (En$1(t, "content-type", "text/javascript"), Se$1(a, h)) : h;
  }
}
function ve(t, e, r, i) {
  const a = new URL(e.url), n = t instanceof Error;
  let o = 302, l;
  return t instanceof Response ? (l = new Headers(t.headers), t.headers.has("Location") && (l.set("Location", new URL(t.headers.get("Location"), a.origin + "").toString()), o = ns(t))) : l = new Headers({ Location: new URL(e.headers.get("referer")).toString() }), t && l.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({ url: a.pathname + a.search, result: n ? t.message : t, thrown: i, error: n, input: [...r.slice(0, -1), [...r[r.length - 1].entries()]] }))}; Secure; HttpOnly;`), new Response(null, { status: o, headers: l });
}
let B$2;
function cs(t) {
  var _a;
  const e = new Headers(t.request.headers), r = Sn$1(t.nativeEvent), i = t.response.headers.getSetCookie();
  e.delete("cookie");
  let a = false;
  return ((_a = t.nativeEvent.node) == null ? void 0 : _a.req) && (a = true, t.nativeEvent.node.req.headers.cookie = ""), i.forEach((n) => {
    if (!n) return;
    const o = n.split(";")[0], [l, u] = o.split("=");
    l && u && (r[l] = u);
  }), Object.entries(r).forEach(([n, o]) => {
    e.append("cookie", `${n}=${o}`), a && (t.nativeEvent.node.req.headers.cookie += `${n}=${o};`);
  }), e;
}
async function we(t, e) {
  let r, i = new URL(t.request.headers.get("referer")).toString();
  e instanceof Response && (e.headers.has("X-Revalidate") && (r = e.headers.get("X-Revalidate").split(",")), e.headers.has("Location") && (i = new URL(e.headers.get("Location"), new URL(t.request.url).origin + "").toString()));
  const a = Lt$5(t);
  return a.request = new Request(i, { headers: cs(t) }), await provideRequestEvent(a, async () => {
    await is(a), B$2 || (B$2 = (await import('../build/app-CNgKguQR.mjs')).default), a.router.dataOnly = r || true, a.router.previousUrl = t.request.headers.get("referer");
    try {
      renderToString(() => {
        sharedConfig.context.event = a, B$2();
      });
    } catch (l) {
      console.log(l);
    }
    const n = a.router.data;
    if (!n) return e;
    let o = false;
    for (const l in n) n[l] === void 0 ? delete n[l] : o = true;
    return o && (e instanceof Response ? e.customBody && (n._$value = e.customBody()) : (n._$value = e, e = new Response(null, { status: 200 })), e.customBody = () => n, e.headers.set("X-Single-Flight", "true")), e;
  });
}
const Fs = eventHandler(us);

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, key + "" , value);
function gt$2(e = {}) {
  let t, n = false;
  const r = (a) => {
    if (t && t !== a) throw new Error("Context conflict");
  };
  let s;
  if (e.asyncContext) {
    const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    a ? s = new a() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const o = () => {
    if (s) {
      const a = s.getStore();
      if (a !== void 0) return a;
    }
    return t;
  };
  return { use: () => {
    const a = o();
    if (a === void 0) throw new Error("Context is not available");
    return a;
  }, tryUse: () => o(), set: (a, i) => {
    i || r(a), t = a, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (a, i) => {
    r(a), t = a;
    try {
      return s ? s.run(a, i) : i();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(a, i) {
    t = a;
    const h = () => {
      t = a;
    }, p = () => t === a ? h : void 0;
    de.add(p);
    try {
      const u = s ? s.run(a, i) : i();
      return n || (t = void 0), await u;
    } finally {
      de.delete(p);
    }
  } };
}
function mt$2(e = {}) {
  const t = {};
  return { get(n, r = {}) {
    return t[n] || (t[n] = gt$2({ ...e, ...r })), t[n];
  } };
}
const X$1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, le = "__unctx__", yt$2 = X$1[le] || (X$1[le] = mt$2()), wt$2 = (e, t = {}) => yt$2.get(e, t), fe = "__unctx_async_handlers__", de = X$1[fe] || (X$1[fe] = /* @__PURE__ */ new Set());
function vt$2(e) {
  let t;
  const n = Se(e), r = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...r, body: e.node.req.body }) : new Request(n, { ...r, get body() {
    return t || (t = At$2(e), t);
  } });
}
function Rt$2(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: vt$2(e), url: Se(e) }, e.web.request;
}
function bt$2() {
  return Tt$2();
}
const xe$1 = Symbol("$HTTPEvent");
function xt$2(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[xe$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function R(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (xt$2(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[xe$1];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = bt$2(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Se = R(getRequestURL), St$2 = R(getRequestIP), he = R(setResponseStatus), pe = R(getResponseStatus), _t$1 = R(getResponseStatusText), K$2 = R(getResponseHeaders), ge = R(getResponseHeader), Et$2 = R(setResponseHeader), Ct$2 = R(appendResponseHeader), Sn = R(sendRedirect), _n = R(getCookie), En = R(setCookie), Pt$2 = R(useSession), Cn = R(setHeader), At$2 = R(getRequestWebStream), Ot$2 = R(removeResponseHeader), qt$1 = R(Rt$2);
function Ht$1() {
  var _a;
  return wt$2("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Tt$2() {
  return Ht$1().use().event;
}
const G$1 = "solidFetchEvent";
function $t$2(e) {
  return { request: qt$1(e), response: Ut$1(e), clientAddress: St$2(e), locals: {}, nativeEvent: e };
}
function Lt$2(e) {
  return { ...e };
}
function Pn(e) {
  if (!e.context[G$1]) {
    const t = $t$2(e);
    e.context[G$1] = t;
  }
  return e.context[G$1];
}
let It$2 = class It {
  constructor(t) {
    __publicField$3(this, "event");
    this.event = t;
  }
  get(t) {
    const n = ge(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return Et$2(this.event, t, n);
  }
  delete(t) {
    return Ot$2(this.event, t);
  }
  append(t, n) {
    Ct$2(this.event, t, n);
  }
  getSetCookie() {
    const t = ge(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(K$2(this.event)).forEach(([n, r]) => t(Array.isArray(r) ? r.join(", ") : r, n, this));
  }
  entries() {
    return Object.entries(K$2(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(K$2(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(K$2(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
};
function Ut$1(e) {
  return { get status() {
    return pe(e);
  }, set status(t) {
    he(e, t);
  }, get statusText() {
    return _t$1(e);
  }, set statusText(t) {
    he(e, pe(e), t);
  }, headers: new It$2(e) };
}
function te$1(e, t, n) {
  if (typeof e != "function") throw new Error("Export from a 'use server' module must be a function");
  const r = "";
  return new Proxy(e, { get(s, o, a) {
    return o === "url" ? `${r}/_server?id=${encodeURIComponent(t)}&name=${encodeURIComponent(n)}` : o === "GET" ? a : s[o];
  }, apply(s, o, a) {
    const i = getRequestEvent();
    if (!i) throw new Error("Cannot call server function outside of a request");
    const h = Lt$2(i);
    return h.locals.serverFunctionMeta = { id: t + "#" + n }, h.serverOnly = true, provideRequestEvent(h, () => e.apply(o, a));
  } });
}
function Ft$1() {
  let e = /* @__PURE__ */ new Set();
  function t(s) {
    return e.add(s), () => e.delete(s);
  }
  let n = false;
  function r(s, o) {
    if (n) return !(n = false);
    const a = { to: s, options: o, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const i of e) i.listener({ ...a, from: i.location, retry: (h) => {
      h && (n = true), i.navigate(s, { ...o, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: t, confirm: r };
}
let V$1;
function _e() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), V$1 = window.history.state._depth;
}
isServer || _e();
function An(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function On(e, t) {
  let n = false;
  return () => {
    const r = V$1;
    _e();
    const s = r == null ? null : V$1 - r;
    if (n) {
      n = false;
      return;
    }
    s && t(s) ? (n = true, window.history.go(-s)) : e();
  };
}
const jt$1 = /^(?:[a-z0-9]+:)?\/\//i, Wt$1 = /^\/+|(\/)\/+$/g, Ee = "http://sr";
function U$2(e, t = false) {
  const n = e.replace(Wt$1, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function N$1(e, t, n) {
  if (jt$1.test(t)) return;
  const r = U$2(e), s = n && U$2(n);
  let o = "";
  return !s || t.startsWith("/") ? o = r : s.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? o = r + s : o = s, (o || "/") + U$2(t, !o);
}
function kt$2(e, t) {
  if (e == null) throw new Error(t);
  return e;
}
function Bt$1(e, t) {
  return U$2(e).replace(/\/*(\*.*)?$/g, "") + U$2(t);
}
function Ce(e) {
  const t = {};
  return e.searchParams.forEach((n, r) => {
    r in t ? Array.isArray(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n;
  }), t;
}
function Mt$1(e, t, n) {
  const [r, s] = e.split("/*", 2), o = r.split("/").filter(Boolean), a = o.length;
  return (i) => {
    const h = i.split("/").filter(Boolean), p = h.length - a;
    if (p < 0 || p > 0 && s === void 0 && !t) return null;
    const u = { path: a ? "" : "/", params: {} }, c = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const f = o[g], y = f[0] === ":", l = y ? h[g] : h[g].toLowerCase(), w = y ? f.slice(1) : f.toLowerCase();
      if (y && J(l, c(w))) u.params[w] = l;
      else if (y || !J(l, w)) return null;
      u.path += `/${l}`;
    }
    if (s) {
      const g = p ? h.slice(-p).join("/") : "";
      if (J(g, c(s))) u.params[s] = g;
      else return null;
    }
    return u;
  };
}
function J(e, t) {
  const n = (r) => r === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Dt$1(e) {
  const [t, n] = e.pattern.split("/*", 2), r = t.split("/").filter(Boolean);
  return r.reduce((s, o) => s + (o.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1));
}
function Pe(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(r, s) {
    return t.has(s) || runWithOwner(n, () => t.set(s, createMemo(() => e()[s]))), t.get(s)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function Ae(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), r = e.slice(t.index + t[0].length);
  const s = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(r); ) s.push(n += t[1]), r = r.slice(t[0].length);
  return Ae(r).reduce((o, a) => [...o, ...s.map((i) => i + a)], []);
}
const Kt$1 = 100, Nt$2 = createContext$1(), Xt = createContext$1(), Oe = () => kt$2(useContext(Nt$2), "<A> and 'use' router primitives can be only used inside a Route."), zt = () => Oe().navigatorFactory();
function Gt$1(e, t = "") {
  const { component: n, preload: r, load: s, children: o, info: a } = e, i = !o || Array.isArray(o) && !o.length, h = { key: e, component: n, preload: r || s, info: a };
  return qe$1(e.path).reduce((p, u) => {
    for (const c of Ae(u)) {
      const g = Bt$1(t, c);
      let f = i ? g : g.split("/*", 1)[0];
      f = f.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), p.push({ ...h, originalPath: u, pattern: f, matcher: Mt$1(f, !i, e.matchFilters) });
    }
    return p;
  }, []);
}
function Jt(e, t = 0) {
  return { routes: e, score: Dt$1(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const r = [];
    for (let s = e.length - 1; s >= 0; s--) {
      const o = e[s], a = o.matcher(n);
      if (!a) return null;
      r.unshift({ ...a, route: o });
    }
    return r;
  } };
}
function qe$1(e) {
  return Array.isArray(e) ? e : [e];
}
function Yt(e, t = "", n = [], r = []) {
  const s = qe$1(e);
  for (let o = 0, a = s.length; o < a; o++) {
    const i = s[o];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const h = Gt$1(i, t);
      for (const p of h) {
        n.push(p);
        const u = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !u) Yt(i.children, p.pattern, n, r);
        else {
          const c = Jt([...n], r.length);
          r.push(c);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((o, a) => a.score - o.score);
}
function Y$1(e, t) {
  for (let n = 0, r = e.length; n < r; n++) {
    const s = e[n].matcher(t);
    if (s) return s;
  }
  return [];
}
function Qt(e, t, n) {
  const r = new URL(Ee), s = createMemo((u) => {
    const c = e();
    try {
      return new URL(c, r);
    } catch {
      return console.error(`Invalid path ${c}`), u;
    }
  }, r, { equals: (u, c) => u.href === c.href }), o = createMemo(() => s().pathname), a = createMemo(() => s().search, true), i = createMemo(() => s().hash), h = () => "", p = on$2(a, () => Ce(s()));
  return { get pathname() {
    return o();
  }, get search() {
    return a();
  }, get hash() {
    return i();
  }, get state() {
    return t();
  }, get key() {
    return h();
  }, query: n ? n(p) : Pe(p) };
}
let C$1;
function Vt$1() {
  return C$1;
}
let $$1 = false;
function Zt() {
  return $$1;
}
function qn(e) {
  $$1 = e;
}
function Hn(e, t, n, r = {}) {
  const { signal: [s, o], utils: a = {} } = e, i = a.parsePath || ((d) => d), h = a.renderPath || ((d) => d), p = a.beforeLeave || Ft$1(), u = N$1("", r.base || "");
  if (u === void 0) throw new Error(`${u} is not a valid base path`);
  u && !s().value && o({ value: u, replace: true, scroll: false });
  const [c, g] = createSignal(false);
  let f;
  const y = (d, m) => {
    m.value === l() && m.state === b() || (f === void 0 && g(true), C$1 = d, f = m, startTransition(() => {
      f === m && (w(f.value), W(f.state), resetErrorBoundaries(), isServer || se[1]((x) => x.filter((A) => A.pending)));
    }).finally(() => {
      f === m && batch(() => {
        C$1 = void 0, d === "navigate" && We(f), g(false), f = void 0;
      });
    }));
  }, [l, w] = createSignal(s().value), [b, W] = createSignal(s().state), k = Qt(l, b, a.queryWrapper), B = [], se = createSignal(isServer ? Be() : []), oe = createMemo(() => typeof r.transformUrl == "function" ? Y$1(t(), r.transformUrl(k.pathname)) : Y$1(t(), k.pathname)), ae = () => {
    const d = oe(), m = {};
    for (let x = 0; x < d.length; x++) Object.assign(m, d[x].params);
    return m;
  }, Ue = a.paramsWrapper ? a.paramsWrapper(ae, t) : Pe(ae), ie = { pattern: u, path: () => u, outlet: () => null, resolvePath(d) {
    return N$1(u, d);
  } };
  return createRenderEffect(on$2(s, (d) => y("native", d), { defer: true })), { base: ie, location: k, params: Ue, isRouting: c, renderPath: h, parsePath: i, navigatorFactory: je, matches: oe, beforeLeave: p, preloadRoute: ke, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: se };
  function Fe(d, m, x) {
    untrack(() => {
      if (typeof m == "number") {
        m && (a.go ? a.go(m) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const A = !m || m[0] === "?", { replace: M, resolve: O, scroll: D, state: q } = { replace: false, resolve: !A, scroll: true, ...x }, H = O ? d.resolvePath(m) : N$1(A && k.pathname || "", m);
      if (H === void 0) throw new Error(`Path '${m}' is not a routable path`);
      if (B.length >= Kt$1) throw new Error("Too many redirects");
      const ce = l();
      if (H !== ce || q !== b()) if (isServer) {
        const ue = getRequestEvent();
        ue && (ue.response = { status: 302, headers: new Headers({ Location: H }) }), o({ value: H, replace: M, scroll: D, state: q });
      } else p.confirm(H, x) && (B.push({ value: ce, replace: M, scroll: D, state: b() }), y("navigate", { value: H, state: q }));
    });
  }
  function je(d) {
    return d = d || useContext(Xt) || ie, (m, x) => Fe(d, m, x);
  }
  function We(d) {
    const m = B[0];
    m && (o({ ...d, replace: m.replace, scroll: m.scroll }), B.length = 0);
  }
  function ke(d, m) {
    const x = Y$1(t(), d.pathname), A = C$1;
    C$1 = "preload";
    for (let M in x) {
      const { route: O, params: D } = x[M];
      O.component && O.component.preload && O.component.preload();
      const { preload: q } = O;
      $$1 = true, m && q && runWithOwner(n(), () => q({ params: D, location: { pathname: d.pathname, search: d.search, hash: d.hash, query: Ce(d), state: null, key: "" }, intent: "preload" })), $$1 = false;
    }
    C$1 = A;
  }
  function Be() {
    const d = getRequestEvent();
    return d && d.router && d.router.submission ? [d.router.submission] : [];
  }
}
function Tn(e, t, n, r) {
  const { base: s, location: o, params: a } = e, { pattern: i, component: h, preload: p } = r().route, u = createMemo(() => r().path);
  h && h.preload && h.preload(), $$1 = true;
  const c = p ? p({ params: a, location: o, intent: C$1 || "initial" }) : void 0;
  return $$1 = false, { parent: t, pattern: i, path: u, outlet: () => h ? createComponent(h, { params: a, location: o, data: c, get children() {
    return n();
  } }) : n(), resolvePath(f) {
    return N$1(s.path(), f, u());
  } };
}
const en = "Location", tn = 5e3, nn = 18e4;
let F$1 = /* @__PURE__ */ new Map();
isServer || setInterval(() => {
  const e = Date.now();
  for (let [t, n] of F$1.entries()) !n[4].count && e - n[0] > nn && F$1.delete(t);
}, 3e5);
function j$1() {
  if (!isServer) return F$1;
  const e = getRequestEvent();
  if (!e) throw new Error("Cannot find cache context");
  return (e.router || (e.router = {})).cache || (e.router.cache = /* @__PURE__ */ new Map());
}
function rn(e, t = true) {
  return startTransition(() => {
    const n = Date.now();
    He$1(e, (r) => {
      t && (r[0] = 0), r[4][1](n);
    });
  });
}
function He$1(e, t) {
  e && !Array.isArray(e) && (e = [e]);
  for (let n of F$1.keys()) (e === void 0 || Te(n, e)) && t(F$1.get(n));
}
function L(e, t) {
  e.GET && (e = e.GET);
  const n = (...r) => {
    const s = j$1(), o = Vt$1(), a = Zt(), h = getOwner() ? zt() : void 0, p = Date.now(), u = t + Z$2(r);
    let c = s.get(u), g;
    if (isServer) {
      const l = getRequestEvent();
      if (l) {
        const w = (l.router || (l.router = {})).dataOnly;
        if (w) {
          const b = l && (l.router.data || (l.router.data = {}));
          if (b && u in b) return b[u];
          if (Array.isArray(w) && !Te(u, w)) return b[u] = void 0, Promise.resolve();
        }
      }
    }
    if (getListener() && !isServer && (g = true, onCleanup(() => c[4].count--)), c && c[0] && (isServer || o === "native" || c[4].count || Date.now() - c[0] < tn)) {
      g && (c[4].count++, c[4][0]()), c[3] === "preload" && o !== "preload" && (c[0] = p);
      let l = c[1];
      return o !== "preload" && (l = "then" in c[1] ? c[1].then(y(false), y(true)) : y(false)(c[1]), !isServer && o === "navigate" && startTransition(() => c[4][1](c[0]))), a && "then" in l && l.catch(() => {
      }), l;
    }
    let f;
    if (!isServer && sharedConfig.has && sharedConfig.has(u) ? (f = sharedConfig.load(u), delete globalThis._$HY.r[u]) : f = e(...r), c ? (c[0] = p, c[1] = f, c[3] = o, !isServer && o === "navigate" && startTransition(() => c[4][1](c[0]))) : (s.set(u, c = [p, f, , o, createSignal(p)]), c[4].count = 0), g && (c[4].count++, c[4][0]()), isServer) {
      const l = getRequestEvent();
      if (l && l.router.dataOnly) return l.router.data[u] = f;
    }
    if (o !== "preload" && (f = "then" in f ? f.then(y(false), y(true)) : y(false)(f)), a && "then" in f && f.catch(() => {
    }), isServer && sharedConfig.context && sharedConfig.context.async && !sharedConfig.context.noHydrate) {
      const l = getRequestEvent();
      (!l || !l.serverOnly) && sharedConfig.context.serialize(u, f);
    }
    return f;
    function y(l) {
      return async (w) => {
        if (w instanceof Response) {
          const b = w.headers.get(en);
          if (b !== null) {
            if (h && b.startsWith("/")) startTransition(() => {
              h(b, { replace: true });
            });
            else if (!isServer) window.location.href = b;
            else if (isServer) {
              const W = getRequestEvent();
              W && (W.response = { status: 302, headers: new Headers({ Location: b }) });
            }
            return;
          }
          w.customBody && (w = await w.customBody());
        }
        if (l) throw w;
        return c[2] = w, w;
      };
    }
  };
  return n.keyFor = (...r) => t + Z$2(r), n.key = t, n;
}
L.get = (e) => j$1().get(e)[2];
L.set = (e, t) => {
  const n = j$1(), r = Date.now();
  let s = n.get(e);
  s ? (s[0] = r, s[1] = Promise.resolve(t), s[2] = t, s[3] = "preload") : (n.set(e, s = [r, Promise.resolve(t), t, "preload", createSignal(r)]), s[4].count = 0);
};
L.delete = (e) => j$1().delete(e);
L.clear = () => j$1().clear();
function Te(e, t) {
  for (let n of t) if (n && e.startsWith(n)) return true;
  return false;
}
function Z$2(e) {
  return JSON.stringify(e, (t, n) => sn(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n);
}
function sn(e) {
  let t;
  return e != null && typeof e == "object" && (!(t = Object.getPrototypeOf(e)) || t === Object.prototype);
}
const me = /* @__PURE__ */ new Map();
function on(e, t) {
  const n = Oe(), r = createMemo(() => n.submissions[0]().filter((s) => s.url === e.base && true));
  return new Proxy([], { get(s, o) {
    return o === $TRACK ? r() : o === "pending" ? r().some((a) => !a.result) : r()[o];
  }, has(s, o) {
    return o in r();
  } });
}
function $n(e, t) {
  const n = on(e);
  return new Proxy({}, { get(r, s) {
    var _a;
    return n.length === 0 && s === "clear" || s === "retry" ? () => {
    } : (_a = n[n.length - 1]) == null ? void 0 : _a[s];
  } });
}
function $e$1(e, t = {}) {
  function n(...o) {
    const a = this.r, i = this.f, h = (a.singleFlight && e.withOptions ? e.withOptions({ headers: { "X-Single-Flight": "true" } }) : e)(...o), [p, u] = createSignal();
    let c;
    function g(f) {
      return async (y) => {
        var _a;
        const l = await cn(y, f, a.navigatorFactory());
        let w = null;
        if ((_a = r.onComplete) == null ? void 0 : _a.call(r, { ...c, result: l == null ? void 0 : l.data, error: l == null ? void 0 : l.error, pending: false, retry() {
          return w = c.retry();
        } }), w) return w;
        if (!l) return c.clear();
        if (u(l), l.error && !i) throw l.error;
        return l.data;
      };
    }
    return a.submissions[1]((f) => [...f, c = { input: o, url: s, get result() {
      var _a;
      return (_a = p()) == null ? void 0 : _a.data;
    }, get error() {
      var _a;
      return (_a = p()) == null ? void 0 : _a.error;
    }, get pending() {
      return !p();
    }, clear() {
      a.submissions[1]((y) => y.filter((l) => l !== c));
    }, retry() {
      return u(void 0), e(...o).then(g(), g(true));
    } }]), h.then(g(), g(true));
  }
  const r = typeof t == "string" ? { name: t } : t, s = e.url || r.name && `https://action/${r.name}` || (isServer ? "" : `https://action/${an(e.toString())}`);
  return n.base = s, Le$1(n, s);
}
function Le$1(e, t) {
  return e.toString = () => {
    if (!t) throw new Error("Client Actions need explicit names if server rendered");
    return t;
  }, e.with = function(...n) {
    const r = function(...o) {
      return e.call(this, ...n, ...o);
    };
    r.base = e.base;
    const s = new URL(t, Ee);
    return s.searchParams.set("args", Z$2(n)), Le$1(r, (s.origin === "https://action" ? s.origin : "") + s.pathname + s.search);
  }, e.url = t, isServer || (me.set(t, e), getOwner() && onCleanup(() => me.delete(t))), e;
}
const an = (e) => e.split("").reduce((t, n) => (t << 5) - t + n.charCodeAt(0) | 0, 0);
async function cn(e, t, n) {
  let r, s, o, a;
  if (e instanceof Response) {
    if (e.headers.has("X-Revalidate") && (o = e.headers.get("X-Revalidate").split(",")), e.customBody && (r = s = await e.customBody(), e.headers.has("X-Single-Flight") && (r = r._$value, delete s._$value, a = Object.keys(s))), e.headers.has("Location")) {
      const i = e.headers.get("Location") || "/";
      i.startsWith("http") ? window.location.href = i : n(i);
    }
  } else {
    if (t) return { error: e };
    r = e;
  }
  return He$1(o, (i) => i[0] = 0), a && a.forEach((i) => L.set(i, s[i])), await rn(o, false), r != null ? { data: r } : void 0;
}
function ne$1(e, t = 302) {
  let n, r;
  typeof t == "number" ? n = { status: t } : ({ revalidate: r, ...n } = t, typeof n.status > "u" && (n.status = 302));
  const s = new Headers(n.headers);
  return s.set("Location", e), r !== void 0 && s.set("X-Revalidate", r.toString()), new Response(null, { ...n, headers: s });
}
const T = createStorage({ driver: unstorage_47drivers_47fs_45lite({ base: "./.data" }) });
T.setItem("users:data", [{ id: 0, username: "kody", password: "twixrox" }]);
T.setItem("users:counter", 1);
const z = { user: { async create({ data: e }) {
  const [{ value: t }, { value: n }] = await T.getItems(["users:data", "users:counter"]), r = { ...e, id: n };
  return await Promise.all([T.setItem("users:data", [...t, r]), T.setItem("users:counter", n + 1)]), r;
}, async findUnique({ where: { username: e = void 0, id: t = void 0 } }) {
  const n = await T.getItem("users:data");
  return t !== void 0 ? n.find((r) => r.id === t) : n.find((r) => r.username === e);
} } };
function un(e) {
  if (typeof e != "string" || e.length < 3) return "Usernames must be at least 3 characters long";
}
function ln(e) {
  if (typeof e != "string" || e.length < 6) return "Passwords must be at least 6 characters long";
}
async function fn(e, t) {
  const n = await z.user.findUnique({ where: { username: e } });
  if (!n || t !== n.password) throw new Error("Invalid login");
  return n;
}
async function Ie$1() {
  await (await re$1()).update((t) => {
    t.userId = void 0;
  });
}
async function dn(e, t) {
  if (await z.user.findUnique({ where: { username: e } })) throw new Error("User already exists");
  return z.user.create({ data: { username: e, password: t } });
}
function re$1() {
  var _a;
  return Pt$2({ password: (_a = process.env.SESSION_SECRET) != null ? _a : "areallylongsecretthatyoushouldreplace" });
}
const hn = te$1(async () => {
  try {
    const t = (await re$1()).data.userId;
    if (t === void 0) throw new Error("User not found");
    const n = await z.user.findUnique({ where: { id: t } });
    if (!n) throw new Error("User not found");
    return { id: n.id, username: n.username };
  } catch {
    throw await Ie$1(), ne$1("/login");
  }
}, "src_lib_index_ts--getUser_query", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), Ln = L(hn, "user"), pn = te$1(async (e) => {
  const t = String(e.get("username")), n = String(e.get("password")), r = String(e.get("loginType"));
  let s = un(t) || ln(n);
  if (s) return new Error(s);
  try {
    const o = await (r !== "login" ? dn(t, n) : fn(t, n));
    await (await re$1()).update((i) => {
      i.userId = o.id;
    });
  } catch (o) {
    return o;
  }
  return ne$1("/");
}, "src_lib_index_ts--loginOrRegister_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), In = $e$1(pn), gn = te$1(async () => (await Ie$1(), ne$1("/login")), "src_lib_index_ts--logout_action", "/home/rowvir/dev/peepr/ui/src/lib/index.ts?tsr-directive-use-server="), Un = $e$1(gn);

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
function N() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
function Je$1(e, t, s, o) {
  if (typeof s != "function") throw new Error("method for before hook must be a function");
  return o || (o = {}), Array.isArray(t) ? t.reverse().reduce((n, p) => Je$1.bind(null, e, p, n, o), s)() : Promise.resolve().then(() => e.registry[t] ? e.registry[t].reduce((n, p) => p.hook.bind(null, n, o), s)() : s(o));
}
function kr(e, t, s, o) {
  const n = o;
  e.registry[s] || (e.registry[s] = []), t === "before" && (o = (p, l) => Promise.resolve().then(n.bind(null, l)).then(p.bind(null, l))), t === "after" && (o = (p, l) => {
    let g;
    return Promise.resolve().then(p.bind(null, l)).then((m) => (g = m, n(g, l))).then(() => g);
  }), t === "error" && (o = (p, l) => Promise.resolve().then(p.bind(null, l)).catch((g) => n(g, l))), e.registry[s].push({ hook: o, orig: n });
}
function Gr(e, t, s) {
  if (!e.registry[t]) return;
  const o = e.registry[t].map((n) => n.orig).indexOf(s);
  o !== -1 && e.registry[t].splice(o, 1);
}
const Le = Function.bind, Ie = Le.bind(Le);
function Or(e, t, s) {
  const o = Ie(Gr, null).apply(null, [t]);
  e.api = { remove: o }, e.remove = o, ["before", "error", "after", "wrap"].forEach((n) => {
    const p = [t, n];
    e[n] = e.api[n] = Ie(kr, null).apply(null, p);
  });
}
function Rr() {
  const e = { registry: {} }, t = Je$1.bind(null, e);
  return Or(t, e), t;
}
const Ar = { Collection: Rr };
var Sr = "0.0.0-development", Fr = `octokit-endpoint.js/${Sr} ${N()}`, Cr = { method: "GET", baseUrl: "https://api.github.com", headers: { accept: "application/vnd.github.v3+json", "user-agent": Fr }, mediaType: { format: "" } };
function Ur(e) {
  return e ? Object.keys(e).reduce((t, s) => (t[s.toLowerCase()] = e[s], t), {}) : {};
}
function Dr(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  const t = Object.getPrototypeOf(e);
  if (t === null) return true;
  const s = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
function Qe$1(e, t) {
  const s = Object.assign({}, e);
  return Object.keys(t).forEach((o) => {
    Dr(t[o]) ? o in e ? s[o] = Qe$1(e[o], t[o]) : Object.assign(s, { [o]: t[o] }) : Object.assign(s, { [o]: t[o] });
  }), s;
}
function je$1(e) {
  for (const t in e) e[t] === void 0 && delete e[t];
  return e;
}
function oe(e, t, s) {
  var _a2;
  if (typeof t == "string") {
    let [n, p] = t.split(" ");
    s = Object.assign(p ? { method: n, url: p } : { url: n }, s);
  } else s = Object.assign({}, t);
  s.headers = Ur(s.headers), je$1(s), je$1(s.headers);
  const o = Qe$1(e || {}, s);
  return s.url === "/graphql" && (e && ((_a2 = e.mediaType.previews) == null ? void 0 : _a2.length) && (o.mediaType.previews = e.mediaType.previews.filter((n) => !o.mediaType.previews.includes(n)).concat(o.mediaType.previews)), o.mediaType.previews = (o.mediaType.previews || []).map((n) => n.replace(/-preview/, ""))), o;
}
function Lr(e, t) {
  const s = /\?/.test(e) ? "&" : "?", o = Object.keys(t);
  return o.length === 0 ? e : e + s + o.map((n) => n === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${n}=${encodeURIComponent(t[n])}`).join("&");
}
var Ir = /\{[^{}}]+\}/g;
function jr(e) {
  return e.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function qr(e) {
  const t = e.match(Ir);
  return t ? t.map(jr).reduce((s, o) => s.concat(o), []) : [];
}
function qe(e, t) {
  const s = { __proto__: null };
  for (const o of Object.keys(e)) t.indexOf(o) === -1 && (s[o] = e[o]);
  return s;
}
function Ye$1(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function U$1(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function x$1(e, t, s) {
  return t = e === "+" || e === "#" ? Ye$1(t) : U$1(t), s ? U$1(s) + "=" + t : t;
}
function F(e) {
  return e != null;
}
function Z$1(e) {
  return e === ";" || e === "&" || e === "?";
}
function $r(e, t, s, o) {
  var n = e[s], p = [];
  if (F(n) && n !== "") if (typeof n == "string" || typeof n == "number" || typeof n == "boolean") n = n.toString(), o && o !== "*" && (n = n.substring(0, parseInt(o, 10))), p.push(x$1(t, n, Z$1(t) ? s : ""));
  else if (o === "*") Array.isArray(n) ? n.filter(F).forEach(function(l) {
    p.push(x$1(t, l, Z$1(t) ? s : ""));
  }) : Object.keys(n).forEach(function(l) {
    F(n[l]) && p.push(x$1(t, n[l], l));
  });
  else {
    const l = [];
    Array.isArray(n) ? n.filter(F).forEach(function(g) {
      l.push(x$1(t, g));
    }) : Object.keys(n).forEach(function(g) {
      F(n[g]) && (l.push(U$1(g)), l.push(x$1(t, n[g].toString())));
    }), Z$1(t) ? p.push(U$1(s) + "=" + l.join(",")) : l.length !== 0 && p.push(l.join(","));
  }
  else t === ";" ? F(n) && p.push(U$1(s)) : n === "" && (t === "&" || t === "?") ? p.push(U$1(s) + "=") : n === "" && p.push("");
  return p;
}
function xr(e) {
  return { expand: Br.bind(null, e) };
}
function Br(e, t) {
  var s = ["+", "#", ".", "/", ";", "?", "&"];
  return e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(o, n, p) {
    if (n) {
      let g = "";
      const m = [];
      if (s.indexOf(n.charAt(0)) !== -1 && (g = n.charAt(0), n = n.substr(1)), n.split(/,/g).forEach(function(f) {
        var _ = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f);
        m.push($r(t, g, _[1], _[2] || _[3]));
      }), g && g !== "+") {
        var l = ",";
        return g === "?" ? l = "&" : g !== "#" && (l = g), (m.length !== 0 ? g : "") + m.join(l);
      } else return m.join(",");
    } else return Ye$1(p);
  }), e === "/" ? e : e.replace(/\/$/, "");
}
function Xe$1(e) {
  var _a2;
  let t = e.method.toUpperCase(), s = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), o = Object.assign({}, e.headers), n, p = qe(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
  const l = qr(s);
  s = xr(s).expand(p), /^http/.test(s) || (s = e.baseUrl + s);
  const g = Object.keys(e).filter((_) => l.includes(_)).concat("baseUrl"), m = qe(p, g);
  if (!/application\/octet-stream/i.test(o.accept) && (e.mediaType.format && (o.accept = o.accept.split(/,/).map((_) => _.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), s.endsWith("/graphql") && ((_a2 = e.mediaType.previews) == null ? void 0 : _a2.length))) {
    const _ = o.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
    o.accept = _.concat(e.mediaType.previews).map((T) => {
      const w = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${T}-preview${w}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? s = Lr(s, m) : "data" in m ? n = m.data : Object.keys(m).length && (n = m), !o["content-type"] && typeof n < "u" && (o["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof n > "u" && (n = ""), Object.assign({ method: t, url: s, headers: o }, typeof n < "u" ? { body: n } : null, e.request ? { request: e.request } : null);
}
function Wr(e, t, s) {
  return Xe$1(oe(e, t, s));
}
function Ze$1(e, t) {
  const s = oe(e, t), o = Wr.bind(null, s);
  return Object.assign(o, { DEFAULTS: s, defaults: Ze$1.bind(null, s), merge: oe.bind(null, s), parse: Xe$1 });
}
var Hr = Ze$1(null, Cr), $e = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C = {}, xe;
function Mr() {
  if (xe) return C;
  xe = 1;
  const e = function() {
  };
  e.prototype = /* @__PURE__ */ Object.create(null);
  const t = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu, s = /\\([\v\u0020-\u00ff])/gu, o = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u, n = { type: "", parameters: new e() };
  Object.freeze(n.parameters), Object.freeze(n);
  function p(g) {
    if (typeof g != "string") throw new TypeError("argument header is required and must be a string");
    let m = g.indexOf(";");
    const f = m !== -1 ? g.slice(0, m).trim() : g.trim();
    if (o.test(f) === false) throw new TypeError("invalid media type");
    const _ = { type: f.toLowerCase(), parameters: new e() };
    if (m === -1) return _;
    let T, w, y;
    for (t.lastIndex = m; w = t.exec(g); ) {
      if (w.index !== m) throw new TypeError("invalid parameter format");
      m += w[0].length, T = w[1].toLowerCase(), y = w[2], y[0] === '"' && (y = y.slice(1, y.length - 1), s.test(y) && (y = y.replace(s, "$1"))), _.parameters[T] = y;
    }
    if (m !== g.length) throw new TypeError("invalid parameter format");
    return _;
  }
  function l(g) {
    if (typeof g != "string") return n;
    let m = g.indexOf(";");
    const f = m !== -1 ? g.slice(0, m).trim() : g.trim();
    if (o.test(f) === false) return n;
    const _ = { type: f.toLowerCase(), parameters: new e() };
    if (m === -1) return _;
    let T, w, y;
    for (t.lastIndex = m; w = t.exec(g); ) {
      if (w.index !== m) return n;
      m += w[0].length, T = w[1].toLowerCase(), y = w[2], y[0] === '"' && (y = y.slice(1, y.length - 1), s.test(y) && (y = y.replace(s, "$1"))), _.parameters[T] = y;
    }
    return m !== g.length ? n : _;
  }
  return C.default = { parse: p, safeParse: l }, C.parse = p, C.safeParse = l, C.defaultContentType = n, C;
}
var Nr = Mr();
let B$1 = class B extends Error {
  constructor(t, s, o) {
    super(t);
    __publicField$2(this, "name");
    __publicField$2(this, "status");
    __publicField$2(this, "request");
    __publicField$2(this, "response");
    this.name = "HttpError", this.status = Number.parseInt(s), Number.isNaN(this.status) && (this.status = 0), "response" in o && (this.response = o.response);
    const n = Object.assign({}, o.request);
    o.request.headers.authorization && (n.headers = Object.assign({}, o.request.headers, { authorization: o.request.headers.authorization.replace(/(?<! ) .*$/, " [REDACTED]") })), n.url = n.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = n;
  }
};
var zr = "0.0.0-development", Kr = { headers: { "user-agent": `octokit-request.js/${zr} ${N()}` } };
function Jr(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  const t = Object.getPrototypeOf(e);
  if (t === null) return true;
  const s = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
async function Be(e) {
  var _a2, _b, _c, _d, _e;
  const t = ((_a2 = e.request) == null ? void 0 : _a2.fetch) || globalThis.fetch;
  if (!t) throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
  const s = ((_b = e.request) == null ? void 0 : _b.log) || console, o = ((_c = e.request) == null ? void 0 : _c.parseSuccessResponseBody) !== false, n = Jr(e.body) || Array.isArray(e.body) ? JSON.stringify(e.body) : e.body, p = Object.fromEntries(Object.entries(e.headers).map(([T, w]) => [T, String(w)]));
  let l;
  try {
    l = await t(e.url, { method: e.method, body: n, redirect: (_d = e.request) == null ? void 0 : _d.redirect, headers: p, signal: (_e = e.request) == null ? void 0 : _e.signal, ...e.body && { duplex: "half" } });
  } catch (T) {
    let w = "Unknown Error";
    if (T instanceof Error) {
      if (T.name === "AbortError") throw T.status = 500, T;
      w = T.message, T.name === "TypeError" && "cause" in T && (T.cause instanceof Error ? w = T.cause.message : typeof T.cause == "string" && (w = T.cause));
    }
    const y = new B$1(w, 500, { request: e });
    throw y.cause = T, y;
  }
  const g = l.status, m = l.url, f = {};
  for (const [T, w] of l.headers) f[T] = w;
  const _ = { url: m, status: g, headers: f, data: "" };
  if ("deprecation" in f) {
    const T = f.link && f.link.match(/<([^<>]+)>; rel="deprecation"/), w = T && T.pop();
    s.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${f.sunset}${w ? `. See ${w}` : ""}`);
  }
  if (g === 204 || g === 205) return _;
  if (e.method === "HEAD") {
    if (g < 400) return _;
    throw new B$1(l.statusText, g, { response: _, request: e });
  }
  if (g === 304) throw _.data = await ee$1(l), new B$1("Not modified", g, { response: _, request: e });
  if (g >= 400) throw _.data = await ee$1(l), new B$1(Yr(_.data), g, { response: _, request: e });
  return _.data = o ? await ee$1(l) : l.body, _;
}
async function ee$1(e) {
  var _a2;
  const t = e.headers.get("content-type");
  if (!t) return e.text().catch(() => "");
  const s = Nr.safeParse(t);
  if (Qr(s)) {
    let o = "";
    try {
      return o = await e.text(), JSON.parse(o);
    } catch {
      return o;
    }
  } else return s.type.startsWith("text/") || ((_a2 = s.parameters.charset) == null ? void 0 : _a2.toLowerCase()) === "utf-8" ? e.text().catch(() => "") : e.arrayBuffer().catch(() => new ArrayBuffer(0));
}
function Qr(e) {
  return e.type === "application/json" || e.type === "application/scim+json";
}
function Yr(e) {
  if (typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return "Unknown error";
  if ("message" in e) {
    const t = "documentation_url" in e ? ` - ${e.documentation_url}` : "";
    return Array.isArray(e.errors) ? `${e.message}: ${e.errors.map((s) => JSON.stringify(s)).join(", ")}${t}` : `${e.message}${t}`;
  }
  return `Unknown error: ${JSON.stringify(e)}`;
}
function ne(e, t) {
  const s = e.defaults(t);
  return Object.assign(function(n, p) {
    const l = s.merge(n, p);
    if (!l.request || !l.request.hook) return Be(s.parse(l));
    const g = (m, f) => Be(s.parse(s.merge(m, f)));
    return Object.assign(g, { endpoint: s, defaults: ne.bind(null, s) }), l.request.hook(g, l);
  }, { endpoint: s, defaults: ne.bind(null, s) });
}
var ie = ne(Hr, Kr), Xr = "0.0.0-development";
function Zr(e) {
  return `Request failed due to following response errors:
` + e.errors.map((t) => ` - ${t.message}`).join(`
`);
}
var et$1 = class et extends Error {
  constructor(e, t, s) {
    super(Zr(s));
    __publicField$2(this, "name", "GraphqlResponseError");
    __publicField$2(this, "errors");
    __publicField$2(this, "data");
    this.request = e, this.headers = t, this.response = s, this.errors = s.errors, this.data = s.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, rt$1 = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType", "operationName"], tt$1 = ["query", "method", "url"], We$1 = /\/api\/v3\/?$/;
function st$1(e, t, s) {
  if (s) {
    if (typeof t == "string" && "query" in s) return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
    for (const l in s) if (tt$1.includes(l)) return Promise.reject(new Error(`[@octokit/graphql] "${l}" cannot be used as variable name`));
  }
  const o = typeof t == "string" ? Object.assign({ query: t }, s) : t, n = Object.keys(o).reduce((l, g) => rt$1.includes(g) ? (l[g] = o[g], l) : (l.variables || (l.variables = {}), l.variables[g] = o[g], l), {}), p = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return We$1.test(p) && (n.url = p.replace(We$1, "/api/graphql")), e(n).then((l) => {
    if (l.data.errors) {
      const g = {};
      for (const m of Object.keys(l.headers)) g[m] = l.headers[m];
      throw new et$1(n, g, l.data);
    }
    return l.data.data;
  });
}
function ae(e, t) {
  const s = e.defaults(t);
  return Object.assign((n, p) => st$1(s, n, p), { defaults: ae.bind(null, s), endpoint: s.endpoint });
}
ae(ie, { headers: { "user-agent": `octokit-graphql.js/${Xr} ${N()}` }, method: "POST", url: "/graphql" });
function ot$1(e) {
  return ae(e, { method: "POST", url: "/graphql" });
}
var re = "(?:[a-zA-Z0-9_-]+)", He = "\\.", Ve$1 = new RegExp(`^${re}${He}${re}${He}${re}$`), nt$1 = Ve$1.test.bind(Ve$1);
async function it$1(e) {
  const t = nt$1(e), s = e.startsWith("v1.") || e.startsWith("ghs_"), o = e.startsWith("ghu_");
  return { type: "token", token: e, tokenType: t ? "app" : s ? "installation" : o ? "user-to-server" : "oauth" };
}
function at$1(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function ct$1(e, t, s, o) {
  const n = t.endpoint.merge(s, o);
  return n.headers.authorization = at$1(e), t(n);
}
var ut$1 = function(t) {
  if (!t) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof t != "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  return t = t.replace(/^(token|bearer) +/i, ""), Object.assign(it$1.bind(null, t), { hook: ct$1.bind(null, t) });
};
const er = "6.1.4", Me = () => {
}, lt$1 = console.warn.bind(console), pt$1 = console.error.bind(console), Ne = `octokit-core.js/${er} ${N()}`;
let gt$1 = (_a = class {
  constructor(t = {}) {
    __publicField$2(this, "request");
    __publicField$2(this, "graphql");
    __publicField$2(this, "log");
    __publicField$2(this, "hook");
    __publicField$2(this, "auth");
    const s = new Ar.Collection(), o = { baseUrl: ie.endpoint.DEFAULTS.baseUrl, headers: {}, request: Object.assign({}, t.request, { hook: s.bind(null, "request") }), mediaType: { previews: [], format: "" } };
    if (o.headers["user-agent"] = t.userAgent ? `${t.userAgent} ${Ne}` : Ne, t.baseUrl && (o.baseUrl = t.baseUrl), t.previews && (o.mediaType.previews = t.previews), t.timeZone && (o.headers["time-zone"] = t.timeZone), this.request = ie.defaults(o), this.graphql = ot$1(this.request).defaults(o), this.log = Object.assign({ debug: Me, info: Me, warn: lt$1, error: pt$1 }, t.log), this.hook = s, t.authStrategy) {
      const { authStrategy: p, ...l } = t, g = p(Object.assign({ request: this.request, log: this.log, octokit: this, octokitOptions: l }, t.auth));
      s.wrap("request", g.hook), this.auth = g;
    } else if (!t.auth) this.auth = async () => ({ type: "unauthenticated" });
    else {
      const p = ut$1(t.auth);
      s.wrap("request", p.hook), this.auth = p;
    }
    const n = this.constructor;
    for (let p = 0; p < n.plugins.length; ++p) Object.assign(this, n.plugins[p](this, t));
  }
  static defaults(t) {
    return class extends this {
      constructor(...o) {
        const n = o[0] || {};
        if (typeof t == "function") {
          super(t(n));
          return;
        }
        super(Object.assign({}, t, n, n.userAgent && t.userAgent ? { userAgent: `${n.userAgent} ${t.userAgent}` } : null));
      }
    };
  }
  static plugin(...t) {
    var _a2;
    const s = this.plugins;
    return _a2 = class extends this {
    }, __publicField$2(_a2, "plugins", s.concat(t.filter((n) => !s.includes(n)))), _a2;
  }
}, __publicField$2(_a, "VERSION", er), __publicField$2(_a, "plugins", []), _a);
var dt$1 = "0.0.0-development";
function mt$1(e) {
  if (!e.data) return { ...e, data: [] };
  if (!("total_count" in e.data && !("url" in e.data))) return e;
  const s = e.data.incomplete_results, o = e.data.repository_selection, n = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  const p = Object.keys(e.data)[0], l = e.data[p];
  return e.data = l, typeof s < "u" && (e.data.incomplete_results = s), typeof o < "u" && (e.data.repository_selection = o), e.data.total_count = n, e;
}
function ce(e, t, s) {
  const o = typeof t == "function" ? t.endpoint(s) : e.request.endpoint(t, s), n = typeof t == "function" ? t : e.request, p = o.method, l = o.headers;
  let g = o.url;
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!g) return { done: true };
    try {
      const m = await n({ method: p, url: g, headers: l }), f = mt$1(m);
      return g = ((f.headers.link || "").match(/<([^<>]+)>;\s*rel="next"/) || [])[1], { value: f };
    } catch (m) {
      if (m.status !== 409) throw m;
      return g = "", { value: { status: 200, headers: {}, data: [] } };
    }
  } }) };
}
function rr(e, t, s, o) {
  return typeof s == "function" && (o = s, s = void 0), tr(e, [], ce(e, t, s)[Symbol.asyncIterator](), o);
}
function tr(e, t, s, o) {
  return s.next().then((n) => {
    if (n.done) return t;
    let p = false;
    function l() {
      p = true;
    }
    return t = t.concat(o ? o(n.value, l) : n.value.data), p ? t : tr(e, t, s, o);
  });
}
Object.assign(rr, { iterator: ce });
function sr(e) {
  return { paginate: Object.assign(rr.bind(null, e), { iterator: ce.bind(null, e) }) };
}
sr.VERSION = dt$1;
var ht = (e, t) => `The cursor at "${e.join(",")}" did not change its value "${t}" after a page transition. Please make sure your that your query is set up correctly.`, Et$1 = class Et extends Error {
  constructor(e, t) {
    super(ht(e.pathInQuery, t));
    __publicField$2(this, "name", "MissingCursorChangeError");
    this.pageInfo = e, this.cursorValue = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, Tt$1 = class Tt extends Error {
  constructor(e) {
    super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e, null, 2)}`);
    __publicField$2(this, "name", "MissingPageInfo");
    this.response = e, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, _t = (e) => Object.prototype.toString.call(e) === "[object Object]";
function or(e) {
  const t = nr(e, "pageInfo");
  if (t.length === 0) throw new Tt$1(e);
  return t;
}
var nr = (e, t, s = []) => {
  for (const o of Object.keys(e)) {
    const n = [...s, o], p = e[o];
    if (_t(p)) {
      if (p.hasOwnProperty(t)) return n;
      const l = nr(p, t, n);
      if (l.length > 0) return l;
    }
  }
  return [];
}, W$2 = (e, t) => t.reduce((s, o) => s[o], e), te = (e, t, s) => {
  const o = t[t.length - 1], n = [...t].slice(0, -1), p = W$2(e, n);
  typeof s == "function" ? p[o] = s(p[o]) : p[o] = s;
}, ft$1 = (e) => {
  const t = or(e);
  return { pathInQuery: t, pageInfo: W$2(e, [...t, "pageInfo"]) };
}, ir = (e) => e.hasOwnProperty("hasNextPage"), wt$1 = (e) => ir(e) ? e.endCursor : e.startCursor, bt$1 = (e) => ir(e) ? e.hasNextPage : e.hasPreviousPage, ar = (e) => (t, s = {}) => {
  let o = true, n = { ...s };
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!o) return { done: true, value: {} };
    const p = await e.graphql(t, n), l = ft$1(p), g = wt$1(l.pageInfo);
    if (o = bt$1(l.pageInfo), o && g === n.cursor) throw new Et$1(l, g);
    return n = { ...n, cursor: g }, { done: false, value: p };
  } }) };
}, yt$1 = (e, t) => {
  if (Object.keys(e).length === 0) return Object.assign(e, t);
  const s = or(e), o = [...s, "nodes"], n = W$2(t, o);
  n && te(e, o, (m) => [...m, ...n]);
  const p = [...s, "edges"], l = W$2(t, p);
  l && te(e, p, (m) => [...m, ...l]);
  const g = [...s, "pageInfo"];
  return te(e, g, W$2(t, g)), e;
}, vt$1 = (e) => {
  const t = ar(e);
  return async (s, o = {}) => {
    let n = {};
    for await (const p of t(s, o)) n = yt$1(n, p);
    return n;
  };
};
function Pt$1(e) {
  return { graphql: Object.assign(e.graphql, { paginate: Object.assign(vt$1(e), { iterator: ar(e) }) }) };
}
const kt$1 = "13.3.1", Gt = { actions: { addCustomLabelsToSelfHostedRunnerForOrg: ["POST /orgs/{org}/actions/runners/{runner_id}/labels"], addCustomLabelsToSelfHostedRunnerForRepo: ["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], addRepoAccessToSelfHostedRunnerGroupInOrg: ["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"], cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"], createEnvironmentVariable: ["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"], createOrUpdateEnvironmentSecret: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"], createOrgVariable: ["POST /orgs/{org}/actions/variables"], createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"], createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"], createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"], createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"], createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"], createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"], deleteActionsCacheById: ["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"], deleteActionsCacheByKey: ["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"], deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], deleteEnvironmentSecret: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], deleteEnvironmentVariable: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"], deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"], deleteRepoVariable: ["DELETE /repos/{owner}/{repo}/actions/variables/{name}"], deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"], deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"], deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"], deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"], disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"], downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"], downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"], downloadWorkflowRunAttemptLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"], downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"], enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"], forceCancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"], generateRunnerJitconfigForOrg: ["POST /orgs/{org}/actions/runners/generate-jitconfig"], generateRunnerJitconfigForRepo: ["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"], getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"], getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"], getActionsCacheUsageByRepoForOrg: ["GET /orgs/{org}/actions/cache/usage-by-repository"], getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"], getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"], getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"], getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], getCustomOidcSubClaimForRepo: ["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"], getEnvironmentPublicKey: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"], getEnvironmentSecret: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], getEnvironmentVariable: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], getGithubActionsDefaultWorkflowPermissionsOrganization: ["GET /orgs/{org}/actions/permissions/workflow"], getGithubActionsDefaultWorkflowPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/workflow"], getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"], getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"], getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"], getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"], getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"], getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, { renamed: ["actions", "getGithubActionsPermissionsRepository"] }], getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"], getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"], getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"], getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"], getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"], getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"], getWorkflowAccessToRepository: ["GET /repos/{owner}/{repo}/actions/permissions/access"], getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"], getWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"], getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"], getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"], listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"], listEnvironmentSecrets: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"], listEnvironmentVariables: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"], listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"], listJobsForWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"], listLabelsForSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}/labels"], listLabelsForSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], listOrgSecrets: ["GET /orgs/{org}/actions/secrets"], listOrgVariables: ["GET /orgs/{org}/actions/variables"], listRepoOrganizationSecrets: ["GET /repos/{owner}/{repo}/actions/organization-secrets"], listRepoOrganizationVariables: ["GET /repos/{owner}/{repo}/actions/organization-variables"], listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"], listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"], listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"], listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"], listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"], listSelectedReposForOrgVariable: ["GET /orgs/{org}/actions/variables/{name}/repositories"], listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"], listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"], listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"], listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"], listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"], listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"], reRunJobForWorkflowRun: ["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"], reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"], reRunWorkflowFailedJobs: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"], removeAllCustomLabelsFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"], removeAllCustomLabelsFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], removeCustomLabelFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"], removeCustomLabelFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], reviewCustomGatesForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"], reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"], setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"], setCustomLabelsForSelfHostedRunnerForOrg: ["PUT /orgs/{org}/actions/runners/{runner_id}/labels"], setCustomLabelsForSelfHostedRunnerForRepo: ["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], setCustomOidcSubClaimForRepo: ["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"], setGithubActionsDefaultWorkflowPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions/workflow"], setGithubActionsDefaultWorkflowPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/workflow"], setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"], setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"], setSelectedReposForOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories"], setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"], setWorkflowAccessToRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/access"], updateEnvironmentVariable: ["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"], updateRepoVariable: ["PATCH /repos/{owner}/{repo}/actions/variables/{name}"] }, activity: { checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"], deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"], deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"], getFeeds: ["GET /feeds"], getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"], getThread: ["GET /notifications/threads/{thread_id}"], getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"], listEventsForAuthenticatedUser: ["GET /users/{username}/events"], listNotificationsForAuthenticatedUser: ["GET /notifications"], listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"], listPublicEvents: ["GET /events"], listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"], listPublicEventsForUser: ["GET /users/{username}/events/public"], listPublicOrgEvents: ["GET /orgs/{org}/events"], listReceivedEventsForUser: ["GET /users/{username}/received_events"], listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"], listRepoEvents: ["GET /repos/{owner}/{repo}/events"], listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"], listReposStarredByAuthenticatedUser: ["GET /user/starred"], listReposStarredByUser: ["GET /users/{username}/starred"], listReposWatchedByUser: ["GET /users/{username}/subscriptions"], listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"], listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"], listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"], markNotificationsAsRead: ["PUT /notifications"], markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"], markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"], markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"], setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"], setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"], starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"], unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"] }, apps: { addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }], addRepoToInstallationForAuthenticatedUser: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"], checkToken: ["POST /applications/{client_id}/token"], createFromManifest: ["POST /app-manifests/{code}/conversions"], createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"], deleteAuthorization: ["DELETE /applications/{client_id}/grant"], deleteInstallation: ["DELETE /app/installations/{installation_id}"], deleteToken: ["DELETE /applications/{client_id}/token"], getAuthenticated: ["GET /app"], getBySlug: ["GET /apps/{app_slug}"], getInstallation: ["GET /app/installations/{installation_id}"], getOrgInstallation: ["GET /orgs/{org}/installation"], getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"], getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"], getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"], getUserInstallation: ["GET /users/{username}/installation"], getWebhookConfigForApp: ["GET /app/hook/config"], getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"], listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"], listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"], listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"], listInstallationRequestsForAuthenticatedApp: ["GET /app/installation-requests"], listInstallations: ["GET /app/installations"], listInstallationsForAuthenticatedUser: ["GET /user/installations"], listPlans: ["GET /marketplace_listing/plans"], listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"], listReposAccessibleToInstallation: ["GET /installation/repositories"], listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"], listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"], listWebhookDeliveries: ["GET /app/hook/deliveries"], redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"], removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }], removeRepoFromInstallationForAuthenticatedUser: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"], resetToken: ["PATCH /applications/{client_id}/token"], revokeInstallationAccessToken: ["DELETE /installation/token"], scopeToken: ["POST /applications/{client_id}/token/scoped"], suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"], unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"], updateWebhookConfigForApp: ["PATCH /app/hook/config"] }, billing: { getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"], getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"], getGithubBillingUsageReportOrg: ["GET /organizations/{org}/settings/billing/usage"], getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"], getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"], getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"], getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"] }, checks: { create: ["POST /repos/{owner}/{repo}/check-runs"], createSuite: ["POST /repos/{owner}/{repo}/check-suites"], get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"], getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"], listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"], listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"], listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"], listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"], rerequestRun: ["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"], rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"], setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"], update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"] }, codeScanning: { commitAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"], createAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], createVariantAnalysis: ["POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"], deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"], deleteCodeqlDatabase: ["DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, { renamedParameters: { alert_id: "alert_number" } }], getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"], getAutofix: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], getCodeqlDatabase: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"], getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"], getVariantAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"], getVariantAnalysisRepoTask: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"], listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"], listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"], listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, { renamed: ["codeScanning", "listAlertInstances"] }], listCodeqlDatabases: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"], listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"], updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"], updateDefaultSetup: ["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"], uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"] }, codeSecurity: { attachConfiguration: ["POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"], attachEnterpriseConfiguration: ["POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"], createConfiguration: ["POST /orgs/{org}/code-security/configurations"], createConfigurationForEnterprise: ["POST /enterprises/{enterprise}/code-security/configurations"], deleteConfiguration: ["DELETE /orgs/{org}/code-security/configurations/{configuration_id}"], deleteConfigurationForEnterprise: ["DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], detachConfiguration: ["DELETE /orgs/{org}/code-security/configurations/detach"], getConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}"], getConfigurationForRepository: ["GET /repos/{owner}/{repo}/code-security-configuration"], getConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations"], getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"], getDefaultConfigurations: ["GET /orgs/{org}/code-security/configurations/defaults"], getDefaultConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/defaults"], getRepositoriesForConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"], getRepositoriesForEnterpriseConfiguration: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"], getSingleConfigurationForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], setConfigurationAsDefault: ["PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"], setConfigurationAsDefaultForEnterprise: ["PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"], updateConfiguration: ["PATCH /orgs/{org}/code-security/configurations/{configuration_id}"], updateEnterpriseConfiguration: ["PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"] }, codesOfConduct: { getAllCodesOfConduct: ["GET /codes_of_conduct"], getConductCode: ["GET /codes_of_conduct/{key}"] }, codespaces: { addRepositoryForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], checkPermissionsForDevcontainer: ["GET /repos/{owner}/{repo}/codespaces/permissions_check"], codespaceMachinesForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/machines"], createForAuthenticatedUser: ["POST /user/codespaces"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], createOrUpdateSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}"], createWithPrForAuthenticatedUser: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"], createWithRepoForAuthenticatedUser: ["POST /repos/{owner}/{repo}/codespaces"], deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"], deleteFromOrganization: ["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], deleteSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}"], exportForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/exports"], getCodespacesForUserInOrg: ["GET /orgs/{org}/members/{username}/codespaces"], getExportDetailsForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/exports/{export_id}"], getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"], getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"], getPublicKeyForAuthenticatedUser: ["GET /user/codespaces/secrets/public-key"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], getSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}"], listDevcontainersInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/devcontainers"], listForAuthenticatedUser: ["GET /user/codespaces"], listInOrganization: ["GET /orgs/{org}/codespaces", {}, { renamedParameters: { org_id: "org" } }], listInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces"], listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"], listRepositoriesForSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}/repositories"], listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], preFlightWithRepoForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/new"], publishForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/publish"], removeRepositoryForSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], repoMachinesForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/machines"], setRepositoriesForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"], stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"], stopInOrganization: ["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"], updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"] }, copilot: { addCopilotSeatsForTeams: ["POST /orgs/{org}/copilot/billing/selected_teams"], addCopilotSeatsForUsers: ["POST /orgs/{org}/copilot/billing/selected_users"], cancelCopilotSeatAssignmentForTeams: ["DELETE /orgs/{org}/copilot/billing/selected_teams"], cancelCopilotSeatAssignmentForUsers: ["DELETE /orgs/{org}/copilot/billing/selected_users"], copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"], copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"], getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"], getCopilotSeatDetailsForUser: ["GET /orgs/{org}/members/{username}/copilot"], listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"], usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"], usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"] }, dependabot: { addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"], getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/dependabot/alerts"], listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"], listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], updateAlert: ["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"] }, dependencyGraph: { createRepositorySnapshot: ["POST /repos/{owner}/{repo}/dependency-graph/snapshots"], diffRange: ["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"], exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"] }, emojis: { get: ["GET /emojis"] }, gists: { checkIsStarred: ["GET /gists/{gist_id}/star"], create: ["POST /gists"], createComment: ["POST /gists/{gist_id}/comments"], delete: ["DELETE /gists/{gist_id}"], deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"], fork: ["POST /gists/{gist_id}/forks"], get: ["GET /gists/{gist_id}"], getComment: ["GET /gists/{gist_id}/comments/{comment_id}"], getRevision: ["GET /gists/{gist_id}/{sha}"], list: ["GET /gists"], listComments: ["GET /gists/{gist_id}/comments"], listCommits: ["GET /gists/{gist_id}/commits"], listForUser: ["GET /users/{username}/gists"], listForks: ["GET /gists/{gist_id}/forks"], listPublic: ["GET /gists/public"], listStarred: ["GET /gists/starred"], star: ["PUT /gists/{gist_id}/star"], unstar: ["DELETE /gists/{gist_id}/star"], update: ["PATCH /gists/{gist_id}"], updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"] }, git: { createBlob: ["POST /repos/{owner}/{repo}/git/blobs"], createCommit: ["POST /repos/{owner}/{repo}/git/commits"], createRef: ["POST /repos/{owner}/{repo}/git/refs"], createTag: ["POST /repos/{owner}/{repo}/git/tags"], createTree: ["POST /repos/{owner}/{repo}/git/trees"], deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"], getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"], getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"], getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"], getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"], getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"], listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"], updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"] }, gitignore: { getAllTemplates: ["GET /gitignore/templates"], getTemplate: ["GET /gitignore/templates/{name}"] }, interactions: { getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"], getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"], getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"], getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }], removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"], removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"], removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"], removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }], setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"], setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"], setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"], setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }] }, issues: { addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"], addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"], addSubIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"], checkUserCanBeAssignedToIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"], create: ["POST /repos/{owner}/{repo}/issues"], createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"], createLabel: ["POST /repos/{owner}/{repo}/labels"], createMilestone: ["POST /repos/{owner}/{repo}/milestones"], deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"], deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"], deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"], get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"], getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"], getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"], getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"], getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"], list: ["GET /issues"], listAssignees: ["GET /repos/{owner}/{repo}/assignees"], listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"], listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"], listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"], listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"], listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"], listForAuthenticatedUser: ["GET /user/issues"], listForOrg: ["GET /orgs/{org}/issues"], listForRepo: ["GET /repos/{owner}/{repo}/issues"], listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"], listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"], listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"], listMilestones: ["GET /repos/{owner}/{repo}/milestones"], listSubIssues: ["GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"], removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"], removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"], removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"], removeSubIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"], reprioritizeSubIssue: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"], setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"], unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"], update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"], updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"], updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"], updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"] }, licenses: { get: ["GET /licenses/{license}"], getAllCommonlyUsed: ["GET /licenses"], getForRepo: ["GET /repos/{owner}/{repo}/license"] }, markdown: { render: ["POST /markdown"], renderRaw: ["POST /markdown/raw", { headers: { "content-type": "text/plain; charset=utf-8" } }] }, meta: { get: ["GET /meta"], getAllVersions: ["GET /versions"], getOctocat: ["GET /octocat"], getZen: ["GET /zen"], root: ["GET /"] }, migrations: { deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive"], deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive"], downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive"], getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive"], getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"], getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"], listForAuthenticatedUser: ["GET /user/migrations"], listForOrg: ["GET /orgs/{org}/migrations"], listReposForAuthenticatedUser: ["GET /user/migrations/{migration_id}/repositories"], listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"], listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {}, { renamed: ["migrations", "listReposForAuthenticatedUser"] }], startForAuthenticatedUser: ["POST /user/migrations"], startForOrg: ["POST /orgs/{org}/migrations"], unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"], unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"] }, oidc: { getOidcCustomSubTemplateForOrg: ["GET /orgs/{org}/actions/oidc/customization/sub"], updateOidcCustomSubTemplateForOrg: ["PUT /orgs/{org}/actions/oidc/customization/sub"] }, orgs: { addSecurityManagerTeam: ["PUT /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team" }], assignTeamToOrgRole: ["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], assignUserToOrgRole: ["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"], blockUser: ["PUT /orgs/{org}/blocks/{username}"], cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"], checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"], checkMembershipForUser: ["GET /orgs/{org}/members/{username}"], checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"], convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"], createInvitation: ["POST /orgs/{org}/invitations"], createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"], createOrUpdateCustomPropertiesValuesForRepos: ["PATCH /orgs/{org}/properties/values"], createOrUpdateCustomProperty: ["PUT /orgs/{org}/properties/schema/{custom_property_name}"], createWebhook: ["POST /orgs/{org}/hooks"], delete: ["DELETE /orgs/{org}"], deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"], enableOrDisableSecurityProductOnAllOrgRepos: ["POST /orgs/{org}/{security_product}/{enablement}", {}, { deprecated: "octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos() is deprecated, see https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization" }], get: ["GET /orgs/{org}"], getAllCustomProperties: ["GET /orgs/{org}/properties/schema"], getCustomProperty: ["GET /orgs/{org}/properties/schema/{custom_property_name}"], getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"], getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"], getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"], getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"], getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"], list: ["GET /organizations"], listAppInstallations: ["GET /orgs/{org}/installations"], listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"], listBlockedUsers: ["GET /orgs/{org}/blocks"], listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"], listFailedInvitations: ["GET /orgs/{org}/failed_invitations"], listForAuthenticatedUser: ["GET /user/orgs"], listForUser: ["GET /users/{username}/orgs"], listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"], listMembers: ["GET /orgs/{org}/members"], listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"], listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"], listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"], listOrgRoles: ["GET /orgs/{org}/organization-roles"], listOrganizationFineGrainedPermissions: ["GET /orgs/{org}/organization-fine-grained-permissions"], listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"], listPatGrantRepositories: ["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"], listPatGrantRequestRepositories: ["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"], listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"], listPatGrants: ["GET /orgs/{org}/personal-access-tokens"], listPendingInvitations: ["GET /orgs/{org}/invitations"], listPublicMembers: ["GET /orgs/{org}/public_members"], listSecurityManagerTeams: ["GET /orgs/{org}/security-managers", {}, { deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams" }], listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /orgs/{org}/hooks"], pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeCustomProperty: ["DELETE /orgs/{org}/properties/schema/{custom_property_name}"], removeMember: ["DELETE /orgs/{org}/members/{username}"], removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"], removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"], removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"], removeSecurityManagerTeam: ["DELETE /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team" }], reviewPatGrantRequest: ["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"], reviewPatGrantRequestsInBulk: ["POST /orgs/{org}/personal-access-token-requests"], revokeAllOrgRolesTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"], revokeAllOrgRolesUser: ["DELETE /orgs/{org}/organization-roles/users/{username}"], revokeOrgRoleTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], revokeOrgRoleUser: ["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"], setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"], setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"], unblockUser: ["DELETE /orgs/{org}/blocks/{username}"], update: ["PATCH /orgs/{org}"], updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"], updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"], updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"], updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"], updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"] }, packages: { deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"], deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"], deletePackageForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}"], deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }], getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"] }], getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"], getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"], getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"], getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"], getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], listDockerMigrationConflictingPackagesForAuthenticatedUser: ["GET /user/docker/conflicts"], listDockerMigrationConflictingPackagesForOrganization: ["GET /orgs/{org}/docker/conflicts"], listDockerMigrationConflictingPackagesForUser: ["GET /users/{username}/docker/conflicts"], listPackagesForAuthenticatedUser: ["GET /user/packages"], listPackagesForOrganization: ["GET /orgs/{org}/packages"], listPackagesForUser: ["GET /users/{username}/packages"], restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"] }, privateRegistries: { createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"], deleteOrgPrivateRegistry: ["DELETE /orgs/{org}/private-registries/{secret_name}"], getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"], getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"], listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"], updateOrgPrivateRegistry: ["PATCH /orgs/{org}/private-registries/{secret_name}"] }, projects: { addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"], createCard: ["POST /projects/columns/{column_id}/cards"], createColumn: ["POST /projects/{project_id}/columns"], createForAuthenticatedUser: ["POST /user/projects"], createForOrg: ["POST /orgs/{org}/projects"], createForRepo: ["POST /repos/{owner}/{repo}/projects"], delete: ["DELETE /projects/{project_id}"], deleteCard: ["DELETE /projects/columns/cards/{card_id}"], deleteColumn: ["DELETE /projects/columns/{column_id}"], get: ["GET /projects/{project_id}"], getCard: ["GET /projects/columns/cards/{card_id}"], getColumn: ["GET /projects/columns/{column_id}"], getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission"], listCards: ["GET /projects/columns/{column_id}/cards"], listCollaborators: ["GET /projects/{project_id}/collaborators"], listColumns: ["GET /projects/{project_id}/columns"], listForOrg: ["GET /orgs/{org}/projects"], listForRepo: ["GET /repos/{owner}/{repo}/projects"], listForUser: ["GET /users/{username}/projects"], moveCard: ["POST /projects/columns/cards/{card_id}/moves"], moveColumn: ["POST /projects/columns/{column_id}/moves"], removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}"], update: ["PATCH /projects/{project_id}"], updateCard: ["PATCH /projects/columns/cards/{card_id}"], updateColumn: ["PATCH /projects/columns/{column_id}"] }, pulls: { checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"], create: ["POST /repos/{owner}/{repo}/pulls"], createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"], createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"], deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"], dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"], get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"], getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"], list: ["GET /repos/{owner}/{repo}/pulls"], listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"], listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"], listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"], listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"], listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"], listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"], removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"], update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"], updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"], updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"] }, rateLimit: { get: ["GET /rate_limit"] }, reactions: { createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"], createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"], createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"], createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"], deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"], deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"], deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"], deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"], deleteForRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"], deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"], deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"], listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"], listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"], listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], listForRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"], listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"] }, repos: { acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }], acceptInvitationForAuthenticatedUser: ["PATCH /user/repository_invitations/{invitation_id}"], addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"], addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], cancelPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"], checkAutomatedSecurityFixes: ["GET /repos/{owner}/{repo}/automated-security-fixes"], checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"], checkPrivateVulnerabilityReporting: ["GET /repos/{owner}/{repo}/private-vulnerability-reporting"], checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts"], codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"], compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"], compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"], createAttestation: ["POST /repos/{owner}/{repo}/attestations"], createAutolink: ["POST /repos/{owner}/{repo}/autolinks"], createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"], createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"], createDeployKey: ["POST /repos/{owner}/{repo}/keys"], createDeployment: ["POST /repos/{owner}/{repo}/deployments"], createDeploymentBranchPolicy: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], createDeploymentProtectionRule: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"], createForAuthenticatedUser: ["POST /user/repos"], createFork: ["POST /repos/{owner}/{repo}/forks"], createInOrg: ["POST /orgs/{org}/repos"], createOrUpdateCustomPropertiesValues: ["PATCH /repos/{owner}/{repo}/properties/values"], createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"], createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"], createOrgRuleset: ["POST /orgs/{org}/rulesets"], createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"], createPagesSite: ["POST /repos/{owner}/{repo}/pages"], createRelease: ["POST /repos/{owner}/{repo}/releases"], createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"], createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate"], createWebhook: ["POST /repos/{owner}/{repo}/hooks"], declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }], declineInvitationForAuthenticatedUser: ["DELETE /user/repository_invitations/{invitation_id}"], delete: ["DELETE /repos/{owner}/{repo}"], deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"], deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"], deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"], deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"], deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"], deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"], deleteDeploymentBranchPolicy: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"], deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"], deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"], deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"], deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"], deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"], deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"], deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"], disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes"], disableDeploymentProtectionRule: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], disablePrivateVulnerabilityReporting: ["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"], disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts"], downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, { renamed: ["repos", "downloadZipballArchive"] }], downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"], downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"], enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes"], enablePrivateVulnerabilityReporting: ["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"], enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts"], generateReleaseNotes: ["POST /repos/{owner}/{repo}/releases/generate-notes"], get: ["GET /repos/{owner}/{repo}"], getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], getAllDeploymentProtectionRules: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"], getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"], getAllTopics: ["GET /repos/{owner}/{repo}/topics"], getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"], getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"], getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"], getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"], getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"], getClones: ["GET /repos/{owner}/{repo}/traffic/clones"], getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"], getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"], getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"], getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"], getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"], getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"], getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"], getContent: ["GET /repos/{owner}/{repo}/contents/{path}"], getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"], getCustomDeploymentProtectionRule: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"], getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"], getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"], getDeploymentBranchPolicy: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"], getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"], getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"], getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"], getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"], getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"], getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"], getOrgRulesets: ["GET /orgs/{org}/rulesets"], getPages: ["GET /repos/{owner}/{repo}/pages"], getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"], getPagesDeployment: ["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"], getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"], getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"], getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"], getReadme: ["GET /repos/{owner}/{repo}/readme"], getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"], getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"], getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"], getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"], getRepoRuleSuite: ["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"], getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"], getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"], getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"], getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"], getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"], getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"], getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"], getViews: ["GET /repos/{owner}/{repo}/traffic/views"], getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"], getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"], listActivities: ["GET /repos/{owner}/{repo}/activity"], listAttestations: ["GET /repos/{owner}/{repo}/attestations/{subject_digest}"], listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"], listBranches: ["GET /repos/{owner}/{repo}/branches"], listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"], listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"], listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"], listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"], listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"], listCommits: ["GET /repos/{owner}/{repo}/commits"], listContributors: ["GET /repos/{owner}/{repo}/contributors"], listCustomDeploymentRuleIntegrations: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"], listDeployKeys: ["GET /repos/{owner}/{repo}/keys"], listDeploymentBranchPolicies: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], listDeployments: ["GET /repos/{owner}/{repo}/deployments"], listForAuthenticatedUser: ["GET /user/repos"], listForOrg: ["GET /orgs/{org}/repos"], listForUser: ["GET /users/{username}/repos"], listForks: ["GET /repos/{owner}/{repo}/forks"], listInvitations: ["GET /repos/{owner}/{repo}/invitations"], listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"], listLanguages: ["GET /repos/{owner}/{repo}/languages"], listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"], listPublic: ["GET /repositories"], listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"], listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"], listReleases: ["GET /repos/{owner}/{repo}/releases"], listTags: ["GET /repos/{owner}/{repo}/tags"], listTeams: ["GET /repos/{owner}/{repo}/teams"], listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /repos/{owner}/{repo}/hooks"], merge: ["POST /repos/{owner}/{repo}/merges"], mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"], pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"], removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"], replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"], requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"], setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"], transfer: ["POST /repos/{owner}/{repo}/transfer"], update: ["PATCH /repos/{owner}/{repo}"], updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"], updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"], updateDeploymentBranchPolicy: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"], updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"], updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"], updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"], updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"], updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"], updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, { renamed: ["repos", "updateStatusCheckProtection"] }], updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"], updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"], uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", { baseUrl: "https://uploads.github.com" }] }, search: { code: ["GET /search/code"], commits: ["GET /search/commits"], issuesAndPullRequests: ["GET /search/issues"], labels: ["GET /search/labels"], repos: ["GET /search/repositories"], topics: ["GET /search/topics"], users: ["GET /search/users"] }, secretScanning: { createPushProtectionBypass: ["POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"], getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"], getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/secret-scanning/alerts"], listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"], listLocationsForAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"], updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"] }, securityAdvisories: { createFork: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"], createPrivateVulnerabilityReport: ["POST /repos/{owner}/{repo}/security-advisories/reports"], createRepositoryAdvisory: ["POST /repos/{owner}/{repo}/security-advisories"], createRepositoryAdvisoryCveRequest: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"], getGlobalAdvisory: ["GET /advisories/{ghsa_id}"], getRepositoryAdvisory: ["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"], listGlobalAdvisories: ["GET /advisories"], listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"], listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"], updateRepositoryAdvisory: ["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"] }, teams: { addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"], addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"], addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"], checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], create: ["POST /orgs/{org}/teams"], createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"], deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"], getByName: ["GET /orgs/{org}/teams/{team_slug}"], getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"], list: ["GET /orgs/{org}/teams"], listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"], listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"], listForAuthenticatedUser: ["GET /user/teams"], listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"], listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"], listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"], listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"], removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"], removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"], removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"] }, users: { addEmailForAuthenticated: ["POST /user/emails", {}, { renamed: ["users", "addEmailForAuthenticatedUser"] }], addEmailForAuthenticatedUser: ["POST /user/emails"], addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"], block: ["PUT /user/blocks/{username}"], checkBlocked: ["GET /user/blocks/{username}"], checkFollowingForUser: ["GET /users/{username}/following/{target_user}"], checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"], createGpgKeyForAuthenticated: ["POST /user/gpg_keys", {}, { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }], createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"], createPublicSshKeyForAuthenticated: ["POST /user/keys", {}, { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }], createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"], createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"], deleteEmailForAuthenticated: ["DELETE /user/emails", {}, { renamed: ["users", "deleteEmailForAuthenticatedUser"] }], deleteEmailForAuthenticatedUser: ["DELETE /user/emails"], deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }], deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"], deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}", {}, { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }], deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"], deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"], deleteSshSigningKeyForAuthenticatedUser: ["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"], follow: ["PUT /user/following/{username}"], getAuthenticated: ["GET /user"], getById: ["GET /user/{account_id}"], getByUsername: ["GET /users/{username}"], getContextForUser: ["GET /users/{username}/hovercard"], getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }], getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"], getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}", {}, { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }], getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"], getSshSigningKeyForAuthenticatedUser: ["GET /user/ssh_signing_keys/{ssh_signing_key_id}"], list: ["GET /users"], listAttestations: ["GET /users/{username}/attestations/{subject_digest}"], listBlockedByAuthenticated: ["GET /user/blocks", {}, { renamed: ["users", "listBlockedByAuthenticatedUser"] }], listBlockedByAuthenticatedUser: ["GET /user/blocks"], listEmailsForAuthenticated: ["GET /user/emails", {}, { renamed: ["users", "listEmailsForAuthenticatedUser"] }], listEmailsForAuthenticatedUser: ["GET /user/emails"], listFollowedByAuthenticated: ["GET /user/following", {}, { renamed: ["users", "listFollowedByAuthenticatedUser"] }], listFollowedByAuthenticatedUser: ["GET /user/following"], listFollowersForAuthenticatedUser: ["GET /user/followers"], listFollowersForUser: ["GET /users/{username}/followers"], listFollowingForUser: ["GET /users/{username}/following"], listGpgKeysForAuthenticated: ["GET /user/gpg_keys", {}, { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }], listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"], listGpgKeysForUser: ["GET /users/{username}/gpg_keys"], listPublicEmailsForAuthenticated: ["GET /user/public_emails", {}, { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }], listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"], listPublicKeysForUser: ["GET /users/{username}/keys"], listPublicSshKeysForAuthenticated: ["GET /user/keys", {}, { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }], listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"], listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"], listSocialAccountsForUser: ["GET /users/{username}/social_accounts"], listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"], listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"], setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility", {}, { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }], setPrimaryEmailVisibilityForAuthenticatedUser: ["PATCH /user/email/visibility"], unblock: ["DELETE /user/blocks/{username}"], unfollow: ["DELETE /user/following/{username}"], updateAuthenticated: ["PATCH /user"] } };
var Ot$1 = Gt;
const A = /* @__PURE__ */ new Map();
for (const [e, t] of Object.entries(Ot$1)) for (const [s, o] of Object.entries(t)) {
  const [n, p, l] = o, [g, m] = n.split(/ /), f = Object.assign({ method: g, url: m }, p);
  A.has(e) || A.set(e, /* @__PURE__ */ new Map()), A.get(e).set(s, { scope: e, methodName: s, endpointDefaults: f, decorations: l });
}
const Rt$1 = { has({ scope: e }, t) {
  return A.get(e).has(t);
}, getOwnPropertyDescriptor(e, t) {
  return { value: this.get(e, t), configurable: true, writable: true, enumerable: true };
}, defineProperty(e, t, s) {
  return Object.defineProperty(e.cache, t, s), true;
}, deleteProperty(e, t) {
  return delete e.cache[t], true;
}, ownKeys({ scope: e }) {
  return [...A.get(e).keys()];
}, set(e, t, s) {
  return e.cache[t] = s;
}, get({ octokit: e, scope: t, cache: s }, o) {
  if (s[o]) return s[o];
  const n = A.get(t).get(o);
  if (!n) return;
  const { endpointDefaults: p, decorations: l } = n;
  return l ? s[o] = St$1(e, t, o, p, l) : s[o] = e.request.defaults(p), s[o];
} };
function At$1(e) {
  const t = {};
  for (const s of A.keys()) t[s] = new Proxy({ octokit: e, scope: s, cache: {} }, Rt$1);
  return t;
}
function St$1(e, t, s, o, n) {
  const p = e.request.defaults(o);
  function l(...g) {
    let m = p.endpoint.merge(...g);
    if (n.mapToData) return m = Object.assign({}, m, { data: m[n.mapToData], [n.mapToData]: void 0 }), p(m);
    if (n.renamed) {
      const [f, _] = n.renamed;
      e.log.warn(`octokit.${t}.${s}() has been renamed to octokit.${f}.${_}()`);
    }
    if (n.deprecated && e.log.warn(n.deprecated), n.renamedParameters) {
      const f = p.endpoint.merge(...g);
      for (const [_, T] of Object.entries(n.renamedParameters)) _ in f && (e.log.warn(`"${_}" parameter is deprecated for "octokit.${t}.${s}()". Use "${T}" instead`), T in f || (f[T] = f[_]), delete f[_]);
      return p(f);
    }
    return p(...g);
  }
  return Object.assign(l, p);
}
function cr(e) {
  return { rest: At$1(e) };
}
cr.VERSION = kt$1;
var M = { exports: {} }, Ft = M.exports, ze$1;
function Ct$1() {
  return ze$1 || (ze$1 = 1, function(e, t) {
    (function(s, o) {
      e.exports = o();
    })(Ft, function() {
      var s = typeof globalThis < "u" ? globalThis : typeof $e < "u" ? $e : typeof self < "u" ? self : {};
      function o(E) {
        return E && E.default || E;
      }
      var n = function(E, i, r = {}) {
        var a, c, u;
        for (a in i) u = i[a], r[a] = (c = E[a]) != null ? c : u;
        return r;
      }, p = function(E, i, r = {}) {
        var a, c;
        for (a in E) c = E[a], i[a] !== void 0 && (r[a] = c);
        return r;
      }, l = { load: n, overwrite: p }, g;
      g = class {
        constructor(i, r) {
          this.incr = i, this.decr = r, this._first = null, this._last = null, this.length = 0;
        }
        push(i) {
          var r;
          this.length++, typeof this.incr == "function" && this.incr(), r = { value: i, prev: this._last, next: null }, this._last != null ? (this._last.next = r, this._last = r) : this._first = this._last = r;
        }
        shift() {
          var i;
          if (this._first != null) return this.length--, typeof this.decr == "function" && this.decr(), i = this._first.value, (this._first = this._first.next) != null ? this._first.prev = null : this._last = null, i;
        }
        first() {
          if (this._first != null) return this._first.value;
        }
        getArray() {
          var i, r, a;
          for (i = this._first, a = []; i != null; ) a.push((r = i, i = i.next, r.value));
          return a;
        }
        forEachShift(i) {
          var r;
          for (r = this.shift(); r != null; ) i(r), r = this.shift();
        }
        debug() {
          var i, r, a, c, u;
          for (i = this._first, u = []; i != null; ) u.push((r = i, i = i.next, { value: r.value, prev: (a = r.prev) != null ? a.value : void 0, next: (c = r.next) != null ? c.value : void 0 }));
          return u;
        }
      };
      var m = g, f;
      f = class {
        constructor(i) {
          if (this.instance = i, this._events = {}, this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) throw new Error("An Emitter already exists for this object");
          this.instance.on = (r, a) => this._addListener(r, "many", a), this.instance.once = (r, a) => this._addListener(r, "once", a), this.instance.removeAllListeners = (r = null) => r != null ? delete this._events[r] : this._events = {};
        }
        _addListener(i, r, a) {
          var c;
          return (c = this._events)[i] == null && (c[i] = []), this._events[i].push({ cb: a, status: r }), this.instance;
        }
        listenerCount(i) {
          return this._events[i] != null ? this._events[i].length : 0;
        }
        async trigger(i, ...r) {
          var a, c;
          try {
            return i !== "debug" && this.trigger("debug", `Event triggered: ${i}`, r), this._events[i] == null ? void 0 : (this._events[i] = this._events[i].filter(function(u) {
              return u.status !== "none";
            }), c = this._events[i].map(async (u) => {
              var d, h;
              if (u.status !== "none") {
                u.status === "once" && (u.status = "none");
                try {
                  return h = typeof u.cb == "function" ? u.cb(...r) : void 0, typeof (h == null ? void 0 : h.then) == "function" ? await h : h;
                } catch (b) {
                  return d = b, this.trigger("error", d), null;
                }
              }
            }), (await Promise.all(c)).find(function(u) {
              return u != null;
            }));
          } catch (u) {
            return a = u, this.trigger("error", a), null;
          }
        }
      };
      var _ = f, T, w, y;
      T = m, w = _, y = class {
        constructor(i) {
          this.Events = new w(this), this._length = 0, this._lists = function() {
            var r, a, c;
            for (c = [], r = 1, a = i; 1 <= a ? r <= a : r >= a; 1 <= a ? ++r : --r) c.push(new T(() => this.incr(), () => this.decr()));
            return c;
          }.call(this);
        }
        incr() {
          if (this._length++ === 0) return this.Events.trigger("leftzero");
        }
        decr() {
          if (--this._length === 0) return this.Events.trigger("zero");
        }
        push(i) {
          return this._lists[i.options.priority].push(i);
        }
        queued(i) {
          return i != null ? this._lists[i].length : this._length;
        }
        shiftAll(i) {
          return this._lists.forEach(function(r) {
            return r.forEachShift(i);
          });
        }
        getFirst(i = this._lists) {
          var r, a, c;
          for (r = 0, a = i.length; r < a; r++) if (c = i[r], c.length > 0) return c;
          return [];
        }
        shiftLastFrom(i) {
          return this.getFirst(this._lists.slice(i).reverse()).shift();
        }
      };
      var L = y, O;
      O = class extends Error {
      };
      var S = O, I, R, H, j, G;
      j = 10, R = 5, G = l, I = S, H = class {
        constructor(i, r, a, c, u, d, h, b) {
          this.task = i, this.args = r, this.rejectOnDrop = u, this.Events = d, this._states = h, this.Promise = b, this.options = G.load(a, c), this.options.priority = this._sanitizePriority(this.options.priority), this.options.id === c.id && (this.options.id = `${this.options.id}-${this._randomIndex()}`), this.promise = new this.Promise((v, P) => {
            this._resolve = v, this._reject = P;
          }), this.retryCount = 0;
        }
        _sanitizePriority(i) {
          var r;
          return r = ~~i !== i ? R : i, r < 0 ? 0 : r > j - 1 ? j - 1 : r;
        }
        _randomIndex() {
          return Math.random().toString(36).slice(2);
        }
        doDrop({ error: i, message: r = "This job has been dropped by Bottleneck" } = {}) {
          return this._states.remove(this.options.id) ? (this.rejectOnDrop && this._reject(i != null ? i : new I(r)), this.Events.trigger("dropped", { args: this.args, options: this.options, task: this.task, promise: this.promise }), true) : false;
        }
        _assertStatus(i) {
          var r;
          if (r = this._states.jobStatus(this.options.id), !(r === i || i === "DONE" && r === null)) throw new I(`Invalid job status ${r}, expected ${i}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
        }
        doReceive() {
          return this._states.start(this.options.id), this.Events.trigger("received", { args: this.args, options: this.options });
        }
        doQueue(i, r) {
          return this._assertStatus("RECEIVED"), this._states.next(this.options.id), this.Events.trigger("queued", { args: this.args, options: this.options, reachedHWM: i, blocked: r });
        }
        doRun() {
          return this.retryCount === 0 ? (this._assertStatus("QUEUED"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), this.Events.trigger("scheduled", { args: this.args, options: this.options });
        }
        async doExecute(i, r, a, c) {
          var u, d, h;
          this.retryCount === 0 ? (this._assertStatus("RUNNING"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), d = { args: this.args, options: this.options, retryCount: this.retryCount }, this.Events.trigger("executing", d);
          try {
            if (h = await (i != null ? i.schedule(this.options, this.task, ...this.args) : this.task(...this.args)), r()) return this.doDone(d), await c(this.options, d), this._assertStatus("DONE"), this._resolve(h);
          } catch (b) {
            return u = b, this._onFailure(u, d, r, a, c);
          }
        }
        doExpire(i, r, a) {
          var c, u;
          return this._states.jobStatus(this.options.id === "RUNNING") && this._states.next(this.options.id), this._assertStatus("EXECUTING"), u = { args: this.args, options: this.options, retryCount: this.retryCount }, c = new I(`This job timed out after ${this.options.expiration} ms.`), this._onFailure(c, u, i, r, a);
        }
        async _onFailure(i, r, a, c, u) {
          var d, h;
          if (a()) return d = await this.Events.trigger("failed", i, r), d != null ? (h = ~~d, this.Events.trigger("retry", `Retrying ${this.options.id} after ${h} ms`, r), this.retryCount++, c(h)) : (this.doDone(r), await u(this.options, r), this._assertStatus("DONE"), this._reject(i));
        }
        doDone(i) {
          return this._assertStatus("EXECUTING"), this._states.next(this.options.id), this.Events.trigger("done", i);
        }
      };
      var q = H, z, le, K;
      K = l, z = S, le = class {
        constructor(i, r, a) {
          this.instance = i, this.storeOptions = r, this.clientId = this.instance._randomIndex(), K.load(a, a, this), this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now(), this._running = 0, this._done = 0, this._unblockTime = 0, this.ready = this.Promise.resolve(), this.clients = {}, this._startHeartbeat();
        }
        _startHeartbeat() {
          var i;
          return this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null) ? typeof (i = this.heartbeat = setInterval(() => {
            var r, a, c, u, d;
            if (u = Date.now(), this.storeOptions.reservoirRefreshInterval != null && u >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval && (this._lastReservoirRefresh = u, this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount, this.instance._drainAll(this.computeCapacity())), this.storeOptions.reservoirIncreaseInterval != null && u >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval && ({ reservoirIncreaseAmount: r, reservoirIncreaseMaximum: c, reservoir: d } = this.storeOptions, this._lastReservoirIncrease = u, a = c != null ? Math.min(r, c - d) : r, a > 0)) return this.storeOptions.reservoir += a, this.instance._drainAll(this.computeCapacity());
          }, this.heartbeatInterval)).unref == "function" ? i.unref() : void 0 : clearInterval(this.heartbeat);
        }
        async __publish__(i) {
          return await this.yieldLoop(), this.instance.Events.trigger("message", i.toString());
        }
        async __disconnect__(i) {
          return await this.yieldLoop(), clearInterval(this.heartbeat), this.Promise.resolve();
        }
        yieldLoop(i = 0) {
          return new this.Promise(function(r, a) {
            return setTimeout(r, i);
          });
        }
        computePenalty() {
          var i;
          return (i = this.storeOptions.penalty) != null ? i : 15 * this.storeOptions.minTime || 5e3;
        }
        async __updateSettings__(i) {
          return await this.yieldLoop(), K.overwrite(i, i, this.storeOptions), this._startHeartbeat(), this.instance._drainAll(this.computeCapacity()), true;
        }
        async __running__() {
          return await this.yieldLoop(), this._running;
        }
        async __queued__() {
          return await this.yieldLoop(), this.instance.queued();
        }
        async __done__() {
          return await this.yieldLoop(), this._done;
        }
        async __groupCheck__(i) {
          return await this.yieldLoop(), this._nextRequest + this.timeout < i;
        }
        computeCapacity() {
          var i, r;
          return { maxConcurrent: i, reservoir: r } = this.storeOptions, i != null && r != null ? Math.min(i - this._running, r) : i != null ? i - this._running : r != null ? r : null;
        }
        conditionsCheck(i) {
          var r;
          return r = this.computeCapacity(), r == null || i <= r;
        }
        async __incrementReservoir__(i) {
          var r;
          return await this.yieldLoop(), r = this.storeOptions.reservoir += i, this.instance._drainAll(this.computeCapacity()), r;
        }
        async __currentReservoir__() {
          return await this.yieldLoop(), this.storeOptions.reservoir;
        }
        isBlocked(i) {
          return this._unblockTime >= i;
        }
        check(i, r) {
          return this.conditionsCheck(i) && this._nextRequest - r <= 0;
        }
        async __check__(i) {
          var r;
          return await this.yieldLoop(), r = Date.now(), this.check(i, r);
        }
        async __register__(i, r, a) {
          var c, u;
          return await this.yieldLoop(), c = Date.now(), this.conditionsCheck(r) ? (this._running += r, this.storeOptions.reservoir != null && (this.storeOptions.reservoir -= r), u = Math.max(this._nextRequest - c, 0), this._nextRequest = c + u + this.storeOptions.minTime, { success: true, wait: u, reservoir: this.storeOptions.reservoir }) : { success: false };
        }
        strategyIsBlock() {
          return this.storeOptions.strategy === 3;
        }
        async __submit__(i, r) {
          var a, c, u;
          if (await this.yieldLoop(), this.storeOptions.maxConcurrent != null && r > this.storeOptions.maxConcurrent) throw new z(`Impossible to add a job having a weight of ${r} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);
          return c = Date.now(), u = this.storeOptions.highWater != null && i === this.storeOptions.highWater && !this.check(r, c), a = this.strategyIsBlock() && (u || this.isBlocked(c)), a && (this._unblockTime = c + this.computePenalty(), this._nextRequest = this._unblockTime + this.storeOptions.minTime, this.instance._dropAllQueued()), { reachedHWM: u, blocked: a, strategy: this.storeOptions.strategy };
        }
        async __free__(i, r) {
          return await this.yieldLoop(), this._running -= r, this._done += r, this.instance._drainAll(this.computeCapacity()), { running: this._running };
        }
      };
      var dr = le, pe, ge;
      pe = S, ge = class {
        constructor(i) {
          this.status = i, this._jobs = {}, this.counts = this.status.map(function() {
            return 0;
          });
        }
        next(i) {
          var r, a;
          if (r = this._jobs[i], a = r + 1, r != null && a < this.status.length) return this.counts[r]--, this.counts[a]++, this._jobs[i]++;
          if (r != null) return this.counts[r]--, delete this._jobs[i];
        }
        start(i) {
          var r;
          return r = 0, this._jobs[i] = r, this.counts[r]++;
        }
        remove(i) {
          var r;
          return r = this._jobs[i], r != null && (this.counts[r]--, delete this._jobs[i]), r != null;
        }
        jobStatus(i) {
          var r;
          return (r = this.status[this._jobs[i]]) != null ? r : null;
        }
        statusJobs(i) {
          var r, a, c, u, d;
          if (i != null) {
            if (a = this.status.indexOf(i), a < 0) throw new pe(`status must be one of ${this.status.join(", ")}`);
            c = this._jobs, u = [];
            for (r in c) d = c[r], d === a && u.push(r);
            return u;
          } else return Object.keys(this._jobs);
        }
        statusCounts() {
          return this.counts.reduce((i, r, a) => (i[this.status[a]] = r, i), {});
        }
      };
      var mr = ge, de, me;
      de = m, me = class {
        constructor(i, r) {
          this.schedule = this.schedule.bind(this), this.name = i, this.Promise = r, this._running = 0, this._queue = new de();
        }
        isEmpty() {
          return this._queue.length === 0;
        }
        async _tryToRun() {
          var i, r, a, c, u, d, h;
          if (this._running < 1 && this._queue.length > 0) return this._running++, { task: h, args: i, resolve: u, reject: c } = this._queue.shift(), r = await async function() {
            try {
              return d = await h(...i), function() {
                return u(d);
              };
            } catch (b) {
              return a = b, function() {
                return c(a);
              };
            }
          }(), this._running--, this._tryToRun(), r();
        }
        schedule(i, ...r) {
          var a, c, u;
          return u = c = null, a = new this.Promise(function(d, h) {
            return u = d, c = h;
          }), this._queue.push({ task: i, args: r, resolve: u, reject: c }), this._tryToRun(), a;
        }
      };
      var hr = me, he = "2.19.5", Er = { version: he }, Tr = Object.freeze({ version: he, default: Er }), Ee = () => console.log("You must import the full version of Bottleneck in order to use this feature."), Te = () => console.log("You must import the full version of Bottleneck in order to use this feature."), _r = () => console.log("You must import the full version of Bottleneck in order to use this feature."), _e, fe, we, be, ye, V;
      V = l, _e = _, be = Ee, we = Te, ye = _r, fe = function() {
        class E {
          constructor(r = {}) {
            this.deleteKey = this.deleteKey.bind(this), this.limiterOptions = r, V.load(this.limiterOptions, this.defaults, this), this.Events = new _e(this), this.instances = {}, this.Bottleneck = Ue, this._startAutoCleanup(), this.sharedConnection = this.connection != null, this.connection == null && (this.limiterOptions.datastore === "redis" ? this.connection = new be(Object.assign({}, this.limiterOptions, { Events: this.Events })) : this.limiterOptions.datastore === "ioredis" && (this.connection = new we(Object.assign({}, this.limiterOptions, { Events: this.Events }))));
          }
          key(r = "") {
            var a;
            return (a = this.instances[r]) != null ? a : (() => {
              var c;
              return c = this.instances[r] = new this.Bottleneck(Object.assign(this.limiterOptions, { id: `${this.id}-${r}`, timeout: this.timeout, connection: this.connection })), this.Events.trigger("created", c, r), c;
            })();
          }
          async deleteKey(r = "") {
            var a, c;
            return c = this.instances[r], this.connection && (a = await this.connection.__runCommand__(["del", ...ye.allKeys(`${this.id}-${r}`)])), c != null && (delete this.instances[r], await c.disconnect()), c != null || a > 0;
          }
          limiters() {
            var r, a, c, u;
            a = this.instances, c = [];
            for (r in a) u = a[r], c.push({ key: r, limiter: u });
            return c;
          }
          keys() {
            return Object.keys(this.instances);
          }
          async clusterKeys() {
            var r, a, c, u, d, h, b, v, P;
            if (this.connection == null) return this.Promise.resolve(this.keys());
            for (h = [], r = null, P = `b_${this.id}-`.length, a = 9; r !== 0; ) for ([v, c] = await this.connection.__runCommand__(["scan", r != null ? r : 0, "match", `b_${this.id}-*_settings`, "count", 1e4]), r = ~~v, u = 0, b = c.length; u < b; u++) d = c[u], h.push(d.slice(P, -a));
            return h;
          }
          _startAutoCleanup() {
            var r;
            return clearInterval(this.interval), typeof (r = this.interval = setInterval(async () => {
              var a, c, u, d, h, b;
              h = Date.now(), u = this.instances, d = [];
              for (c in u) {
                b = u[c];
                try {
                  await b._store.__groupCheck__(h) ? d.push(this.deleteKey(c)) : d.push(void 0);
                } catch (v) {
                  a = v, d.push(b.Events.trigger("error", a));
                }
              }
              return d;
            }, this.timeout / 2)).unref == "function" ? r.unref() : void 0;
          }
          updateSettings(r = {}) {
            if (V.overwrite(r, this.defaults, this), V.overwrite(r, r, this.limiterOptions), r.timeout != null) return this._startAutoCleanup();
          }
          disconnect(r = true) {
            var a;
            if (!this.sharedConnection) return (a = this.connection) != null ? a.disconnect(r) : void 0;
          }
        }
        return E.prototype.defaults = { timeout: 1e3 * 60 * 5, connection: null, Promise, id: "group-key" }, E;
      }.call(s);
      var fr = fe, ve, Pe, ke;
      ke = l, Pe = _, ve = function() {
        class E {
          constructor(r = {}) {
            this.options = r, ke.load(this.options, this.defaults, this), this.Events = new Pe(this), this._arr = [], this._resetPromise(), this._lastFlush = Date.now();
          }
          _resetPromise() {
            return this._promise = new this.Promise((r, a) => this._resolve = r);
          }
          _flush() {
            return clearTimeout(this._timeout), this._lastFlush = Date.now(), this._resolve(), this.Events.trigger("batch", this._arr), this._arr = [], this._resetPromise();
          }
          add(r) {
            var a;
            return this._arr.push(r), a = this._promise, this._arr.length === this.maxSize ? this._flush() : this.maxTime != null && this._arr.length === 1 && (this._timeout = setTimeout(() => this._flush(), this.maxTime)), a;
          }
        }
        return E.prototype.defaults = { maxTime: null, maxSize: null, Promise }, E;
      }.call(s);
      var wr = ve, br = () => console.log("You must import the full version of Bottleneck in order to use this feature."), yr = o(Tr), Ge, Oe, J, Q, Re, Y, Ae, Se, Fe, X, k, Ce = [].splice;
      Y = 10, Oe = 5, k = l, Ae = L, Q = q, Re = dr, Se = br, J = _, Fe = mr, X = hr, Ge = function() {
        class E {
          constructor(r = {}, ...a) {
            var c, u;
            this._addToQueue = this._addToQueue.bind(this), this._validateOptions(r, a), k.load(r, this.instanceDefaults, this), this._queues = new Ae(Y), this._scheduled = {}, this._states = new Fe(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : [])), this._limiter = null, this.Events = new J(this), this._submitLock = new X("submit", this.Promise), this._registerLock = new X("register", this.Promise), u = k.load(r, this.storeDefaults, {}), this._store = function() {
              if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) return c = k.load(r, this.redisStoreDefaults, {}), new Se(this, u, c);
              if (this.datastore === "local") return c = k.load(r, this.localStoreDefaults, {}), new Re(this, u, c);
              throw new E.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
            }.call(this), this._queues.on("leftzero", () => {
              var d;
              return (d = this._store.heartbeat) != null && typeof d.ref == "function" ? d.ref() : void 0;
            }), this._queues.on("zero", () => {
              var d;
              return (d = this._store.heartbeat) != null && typeof d.unref == "function" ? d.unref() : void 0;
            });
          }
          _validateOptions(r, a) {
            if (!(r != null && typeof r == "object" && a.length === 0)) throw new E.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
          }
          ready() {
            return this._store.ready;
          }
          clients() {
            return this._store.clients;
          }
          channel() {
            return `b_${this.id}`;
          }
          channel_client() {
            return `b_${this.id}_${this._store.clientId}`;
          }
          publish(r) {
            return this._store.__publish__(r);
          }
          disconnect(r = true) {
            return this._store.__disconnect__(r);
          }
          chain(r) {
            return this._limiter = r, this;
          }
          queued(r) {
            return this._queues.queued(r);
          }
          clusterQueued() {
            return this._store.__queued__();
          }
          empty() {
            return this.queued() === 0 && this._submitLock.isEmpty();
          }
          running() {
            return this._store.__running__();
          }
          done() {
            return this._store.__done__();
          }
          jobStatus(r) {
            return this._states.jobStatus(r);
          }
          jobs(r) {
            return this._states.statusJobs(r);
          }
          counts() {
            return this._states.statusCounts();
          }
          _randomIndex() {
            return Math.random().toString(36).slice(2);
          }
          check(r = 1) {
            return this._store.__check__(r);
          }
          _clearGlobalState(r) {
            return this._scheduled[r] != null ? (clearTimeout(this._scheduled[r].expiration), delete this._scheduled[r], true) : false;
          }
          async _free(r, a, c, u) {
            var d, h;
            try {
              if ({ running: h } = await this._store.__free__(r, c.weight), this.Events.trigger("debug", `Freed ${c.id}`, u), h === 0 && this.empty()) return this.Events.trigger("idle");
            } catch (b) {
              return d = b, this.Events.trigger("error", d);
            }
          }
          _run(r, a, c) {
            var u, d, h;
            return a.doRun(), u = this._clearGlobalState.bind(this, r), h = this._run.bind(this, r, a), d = this._free.bind(this, r, a), this._scheduled[r] = { timeout: setTimeout(() => a.doExecute(this._limiter, u, h, d), c), expiration: a.options.expiration != null ? setTimeout(function() {
              return a.doExpire(u, h, d);
            }, c + a.options.expiration) : void 0, job: a };
          }
          _drainOne(r) {
            return this._registerLock.schedule(() => {
              var a, c, u, d, h;
              return this.queued() === 0 ? this.Promise.resolve(null) : (h = this._queues.getFirst(), { options: d, args: a } = u = h.first(), r != null && d.weight > r ? this.Promise.resolve(null) : (this.Events.trigger("debug", `Draining ${d.id}`, { args: a, options: d }), c = this._randomIndex(), this._store.__register__(c, d.weight, d.expiration).then(({ success: b, wait: v, reservoir: P }) => {
                var $;
                return this.Events.trigger("debug", `Drained ${d.id}`, { success: b, args: a, options: d }), b ? (h.shift(), $ = this.empty(), $ && this.Events.trigger("empty"), P === 0 && this.Events.trigger("depleted", $), this._run(c, u, v), this.Promise.resolve(d.weight)) : this.Promise.resolve(null);
              })));
            });
          }
          _drainAll(r, a = 0) {
            return this._drainOne(r).then((c) => {
              var u;
              return c != null ? (u = r != null ? r - c : r, this._drainAll(u, a + c)) : this.Promise.resolve(a);
            }).catch((c) => this.Events.trigger("error", c));
          }
          _dropAllQueued(r) {
            return this._queues.shiftAll(function(a) {
              return a.doDrop({ message: r });
            });
          }
          stop(r = {}) {
            var a, c;
            return r = k.load(r, this.stopDefaults), c = (u) => {
              var d;
              return d = () => {
                var h;
                return h = this._states.counts, h[0] + h[1] + h[2] + h[3] === u;
              }, new this.Promise((h, b) => d() ? h() : this.on("done", () => {
                if (d()) return this.removeAllListeners("done"), h();
              }));
            }, a = r.dropWaitingJobs ? (this._run = function(u, d) {
              return d.doDrop({ message: r.dropErrorMessage });
            }, this._drainOne = () => this.Promise.resolve(null), this._registerLock.schedule(() => this._submitLock.schedule(() => {
              var u, d, h;
              d = this._scheduled;
              for (u in d) h = d[u], this.jobStatus(h.job.options.id) === "RUNNING" && (clearTimeout(h.timeout), clearTimeout(h.expiration), h.job.doDrop({ message: r.dropErrorMessage }));
              return this._dropAllQueued(r.dropErrorMessage), c(0);
            }))) : this.schedule({ priority: Y - 1, weight: 0 }, () => c(1)), this._receive = function(u) {
              return u._reject(new E.prototype.BottleneckError(r.enqueueErrorMessage));
            }, this.stop = () => this.Promise.reject(new E.prototype.BottleneckError("stop() has already been called")), a;
          }
          async _addToQueue(r) {
            var a, c, u, d, h, b, v;
            ({ args: a, options: d } = r);
            try {
              ({ reachedHWM: h, blocked: c, strategy: v } = await this._store.__submit__(this.queued(), d.weight));
            } catch (P) {
              return u = P, this.Events.trigger("debug", `Could not queue ${d.id}`, { args: a, options: d, error: u }), r.doDrop({ error: u }), false;
            }
            return c ? (r.doDrop(), true) : h && (b = v === E.prototype.strategy.LEAK ? this._queues.shiftLastFrom(d.priority) : v === E.prototype.strategy.OVERFLOW_PRIORITY ? this._queues.shiftLastFrom(d.priority + 1) : v === E.prototype.strategy.OVERFLOW ? r : void 0, b == null ? void 0 : b.doDrop(), b == null || v === E.prototype.strategy.OVERFLOW) ? (b == null && r.doDrop(), h) : (r.doQueue(h, c), this._queues.push(r), await this._drainAll(), h);
          }
          _receive(r) {
            return this._states.jobStatus(r.options.id) != null ? (r._reject(new E.prototype.BottleneckError(`A job with the same id already exists (id=${r.options.id})`)), false) : (r.doReceive(), this._submitLock.schedule(this._addToQueue, r));
          }
          submit(...r) {
            var a, c, u, d, h, b, v;
            return typeof r[0] == "function" ? (h = r, [c, ...r] = h, [a] = Ce.call(r, -1), d = k.load({}, this.jobDefaults)) : (b = r, [d, c, ...r] = b, [a] = Ce.call(r, -1), d = k.load(d, this.jobDefaults)), v = (...P) => new this.Promise(function($, Pr) {
              return c(...P, function(...De) {
                return (De[0] != null ? Pr : $)(De);
              });
            }), u = new Q(v, r, d, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), u.promise.then(function(P) {
              return typeof a == "function" ? a(...P) : void 0;
            }).catch(function(P) {
              return Array.isArray(P) ? typeof a == "function" ? a(...P) : void 0 : typeof a == "function" ? a(P) : void 0;
            }), this._receive(u);
          }
          schedule(...r) {
            var a, c, u;
            return typeof r[0] == "function" ? ([u, ...r] = r, c = {}) : [c, u, ...r] = r, a = new Q(u, r, c, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), this._receive(a), a.promise;
          }
          wrap(r) {
            var a, c;
            return a = this.schedule.bind(this), c = function(...u) {
              return a(r.bind(this), ...u);
            }, c.withOptions = function(u, ...d) {
              return a(u, r, ...d);
            }, c;
          }
          async updateSettings(r = {}) {
            return await this._store.__updateSettings__(k.overwrite(r, this.storeDefaults)), k.overwrite(r, this.instanceDefaults, this), this;
          }
          currentReservoir() {
            return this._store.__currentReservoir__();
          }
          incrementReservoir(r = 0) {
            return this._store.__incrementReservoir__(r);
          }
        }
        return E.default = E, E.Events = J, E.version = E.prototype.version = yr.version, E.strategy = E.prototype.strategy = { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }, E.BottleneckError = E.prototype.BottleneckError = S, E.Group = E.prototype.Group = fr, E.RedisConnection = E.prototype.RedisConnection = Ee, E.IORedisConnection = E.prototype.IORedisConnection = Te, E.Batcher = E.prototype.Batcher = wr, E.prototype.jobDefaults = { priority: Oe, weight: 1, expiration: null, id: "<no-id>" }, E.prototype.storeDefaults = { maxConcurrent: null, minTime: 0, highWater: null, strategy: E.prototype.strategy.LEAK, penalty: null, reservoir: null, reservoirRefreshInterval: null, reservoirRefreshAmount: null, reservoirIncreaseInterval: null, reservoirIncreaseAmount: null, reservoirIncreaseMaximum: null }, E.prototype.localStoreDefaults = { Promise, timeout: null, heartbeatInterval: 250 }, E.prototype.redisStoreDefaults = { Promise, timeout: null, heartbeatInterval: 5e3, clientTimeout: 1e4, Redis: null, clientOptions: {}, clusterNodes: null, clearDatastore: false, connection: null }, E.prototype.instanceDefaults = { datastore: "local", connection: null, id: "<no-id>", rejectOnDrop: true, trackDoneStatus: false, Promise }, E.prototype.stopDefaults = { enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.", dropWaitingJobs: true, dropErrorMessage: "This limiter has been stopped." }, E;
      }.call(s);
      var Ue = Ge, vr = Ue;
      return vr;
    });
  }(M)), M.exports;
}
var Ut = Ct$1();
const ur = Vr(Ut);
var Dt = "0.0.0-development";
async function lr(e, t, s, o) {
  if (!s.request || !s.request.request) throw s;
  if (s.status >= 400 && !e.doNotRetry.includes(s.status)) {
    const n = o.request.retries != null ? o.request.retries : e.retries, p = Math.pow((o.request.retryCount || 0) + 1, 2);
    throw t.retry.retryRequest(s, n, p);
  }
  throw s;
}
async function Lt$1(e, t, s, o) {
  const n = new ur();
  return n.on("failed", function(p, l) {
    const g = ~~p.request.request.retries, m = ~~p.request.request.retryAfter;
    if (o.request.retryCount = l.retryCount + 1, g > l.retryCount) return m * e.retryAfterBaseValue;
  }), n.schedule(It$1.bind(null, e, t, s), o);
}
async function It$1(e, t, s, o) {
  const n = await s(s, o);
  if (n.data && n.data.errors && n.data.errors.length > 0 && /Something went wrong while executing your query/.test(n.data.errors[0].message)) {
    const p = new B$1(n.data.errors[0].message, 500, { request: o, response: n });
    return lr(e, t, p, o);
  }
  return n;
}
function pr(e, t) {
  const s = Object.assign({ enabled: true, retryAfterBaseValue: 1e3, doNotRetry: [400, 401, 403, 404, 422, 451], retries: 3 }, t.retry);
  return s.enabled && (e.hook.error("request", lr.bind(null, s, e)), e.hook.wrap("request", Lt$1.bind(null, s, e))), { retry: { retryRequest: (o, n, p) => (o.request.request = Object.assign({}, o.request.request, { retries: n, retryAfter: p }), o) } };
}
pr.VERSION = Dt;
var jt = "0.0.0-development", se = () => Promise.resolve();
function qt(e, t, s) {
  return e.retryLimiter.schedule($t$1, e, t, s);
}
async function $t$1(e, t, s) {
  const o = s.method !== "GET" && s.method !== "HEAD", { pathname: n } = new URL(s.url, "http://github.test"), p = s.method === "GET" && n.startsWith("/search/"), l = n.startsWith("/graphql"), m = ~~t.retryCount > 0 ? { priority: 0, weight: 0 } : {};
  e.clustering && (m.expiration = 1e3 * 60), (o || l) && await e.write.key(e.id).schedule(m, se), o && e.triggersNotification(n) && await e.notifications.key(e.id).schedule(m, se), p && await e.search.key(e.id).schedule(m, se);
  const f = e.global.key(e.id).schedule(m, t, s);
  if (l) {
    const _ = await f;
    if (_.data.errors != null && _.data.errors.some((T) => T.type === "RATE_LIMITED")) throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), { response: _, data: _.data });
  }
  return f;
}
var xt$1 = ["/orgs/{org}/invitations", "/orgs/{org}/invitations/{invitation_id}", "/orgs/{org}/teams/{team_slug}/discussions", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "/repos/{owner}/{repo}/collaborators/{username}", "/repos/{owner}/{repo}/commits/{commit_sha}/comments", "/repos/{owner}/{repo}/issues", "/repos/{owner}/{repo}/issues/{issue_number}/comments", "/repos/{owner}/{repo}/issues/{issue_number}/sub_issue", "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority", "/repos/{owner}/{repo}/pulls", "/repos/{owner}/{repo}/pulls/{pull_number}/comments", "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "/repos/{owner}/{repo}/pulls/{pull_number}/merge", "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "/repos/{owner}/{repo}/releases", "/teams/{team_id}/discussions", "/teams/{team_id}/discussions/{discussion_number}/comments"];
function Bt(e) {
  const s = `^(?:${e.map((o) => o.split("/").map((n) => n.startsWith("{") ? "(?:.+?)" : n).join("/")).map((o) => `(?:${o})`).join("|")})[^/]*$`;
  return new RegExp(s, "i");
}
var Ke$1 = Bt(xt$1), gr = Ke$1.test.bind(Ke$1), D = {}, Wt = function(e, t) {
  D.global = new e.Group({ id: "octokit-global", maxConcurrent: 10, ...t }), D.search = new e.Group({ id: "octokit-search", maxConcurrent: 1, minTime: 2e3, ...t }), D.write = new e.Group({ id: "octokit-write", maxConcurrent: 1, minTime: 1e3, ...t }), D.notifications = new e.Group({ id: "octokit-notifications", maxConcurrent: 1, minTime: 3e3, ...t });
};
function ue(e, t) {
  const { enabled: s = true, Bottleneck: o = ur, id: n = "no-id", timeout: p = 1e3 * 60 * 2, connection: l } = t.throttle || {};
  if (!s) return {};
  const g = { timeout: p };
  typeof l < "u" && (g.connection = l), D.global == null && Wt(o, g);
  const m = Object.assign({ clustering: l != null, triggersNotification: gr, fallbackSecondaryRateRetryAfter: 60, retryAfterBaseValue: 1e3, retryLimiter: new o(), id: n, ...D }, t.throttle);
  if (typeof m.onSecondaryRateLimit != "function" || typeof m.onRateLimit != "function") throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
  const f = {}, _ = new o.Events(f);
  return f.on("secondary-limit", m.onSecondaryRateLimit), f.on("rate-limit", m.onRateLimit), f.on("error", (T) => e.log.warn("Error in throttling-plugin limit handler", T)), m.retryLimiter.on("failed", async function(T, w) {
    const [y, L, O] = w.args, { pathname: S } = new URL(O.url, "http://github.test");
    if (!(S.startsWith("/graphql") && T.status !== 401 || T.status === 403 || T.status === 429)) return;
    const R = ~~L.retryCount;
    L.retryCount = R, O.request.retryCount = R;
    const { wantRetry: H, retryAfter: j = 0 } = await async function() {
      var _a2, _b;
      if (/\bsecondary rate\b/i.test(T.message)) {
        const G = Number(T.response.headers["retry-after"]) || y.fallbackSecondaryRateRetryAfter;
        return { wantRetry: await _.trigger("secondary-limit", G, O, e, R), retryAfter: G };
      }
      if (T.response.headers != null && T.response.headers["x-ratelimit-remaining"] === "0" || ((_b = (_a2 = T.response.data) == null ? void 0 : _a2.errors) != null ? _b : []).some((G) => G.type === "RATE_LIMITED")) {
        const G = new Date(~~T.response.headers["x-ratelimit-reset"] * 1e3).getTime(), q = Math.max(Math.ceil((G - Date.now()) / 1e3) + 1, 0);
        return { wantRetry: await _.trigger("rate-limit", q, O, e, R), retryAfter: q };
      }
      return {};
    }();
    if (H) return L.retryCount++, j * y.retryAfterBaseValue;
  }), e.hook.wrap("request", qt.bind(null, m)), {};
}
ue.VERSION = jt;
ue.triggersNotification = gr;
var Ht = "0.0.0-development", Vt = gt$1.plugin(cr, sr, Pt$1, pr, ue).defaults({ userAgent: `octokit.js/${Ht}`, throttle: { onRateLimit: Mt, onSecondaryRateLimit: Nt$1 } });
function Mt(e, t, s) {
  if (s.log.warn(`Request quota exhausted for request ${t.method} ${t.url}`), t.request.retryCount === 0) return s.log.info(`Retrying after ${e} seconds!`), true;
}
function Nt$1(e, t, s) {
  if (s.log.warn(`SecondaryRateLimit detected for request ${t.method} ${t.url}`), t.request.retryCount === 0) return s.log.info(`Retrying after ${e} seconds!`), true;
}
class ts {
  constructor(t) {
    __publicField$2(this, "octokit");
    __publicField$2(this, "owner", "rivial-data-security");
    __publicField$2(this, "repo", "rivial-information-security-center");
    this.octokit = new Vt({ auth: t });
  }
  async getRepository() {
    return await this.octokit.rest.repos.get({ owner: this.owner, repo: this.repo });
  }
  async getIssues(t = "open") {
    return await this.octokit.rest.issues.listForRepo({ owner: this.owner, repo: this.repo, state: t });
  }
  async getPullRequests(t = "open") {
    return await this.octokit.rest.pulls.list({ owner: this.owner, repo: this.repo, state: t });
  }
  async getBranches() {
    return await this.octokit.rest.repos.listBranches({ owner: this.owner, repo: this.repo });
  }
  async getCommits(t = "main") {
    return await this.octokit.rest.repos.listCommits({ owner: this.owner, repo: this.repo, sha: t });
  }
  async getPullRequestDetails(t) {
    const { data: s } = await this.octokit.rest.pulls.get({ owner: this.owner, repo: this.repo, pull_number: t });
    return s;
  }
  async getWorkflowRuns(t, s) {
    const { data: o } = await this.octokit.rest.actions.listWorkflowRunsForRepo({ owner: this.owner, repo: this.repo, branch: t, created: `>=${s}` });
    return o.workflow_runs;
  }
  async getWorkflowRunUsage(t) {
    const { data: s } = await this.octokit.rest.actions.getWorkflowRunUsage({ owner: this.owner, repo: this.repo, run_id: t });
    return s;
  }
  async getWorkflowJobs(t) {
    const { data: s } = await this.octokit.rest.actions.listJobsForWorkflowRun({ owner: this.owner, repo: this.repo, run_id: t });
    return s;
  }
  async getAllWorkflowRunsForPR(t) {
    const s = await this.getPullRequestDetails(t);
    return await this.getWorkflowRuns(s.head.ref, s.created_at);
  }
  async *getPullRequestsByDateRange(t, s = (/* @__PURE__ */ new Date()).toISOString()) {
    const o = this.octokit.paginate.iterator(this.octokit.rest.search.issuesAndPullRequests, { q: `type:pr repo:${this.owner}/${this.repo} is:merged merged:${t}..${s}`, sort: "created", order: "desc", per_page: 100 });
    for await (const { data: n } of o) yield* n;
  }
}

const $ = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function je(e = {}) {
  const r = { options: e, rootNode: V(), staticRoutesMap: {} }, t = (o) => e.strictTrailingSlash ? o : o.replace(/\/$/, "") || "/";
  if (e.routes) for (const o in e.routes) U(r, t(o), e.routes[o]);
  return { ctx: r, lookup: (o) => We(r, t(o)), insert: (o, n) => U(r, t(o), n), remove: (o) => Ge(r, t(o)) };
}
function We(e, r) {
  const t = e.staticRoutesMap[r];
  if (t) return t.data;
  const o = r.split("/"), n = {};
  let s = false, a = null, i = e.rootNode, l = null;
  for (let c = 0; c < o.length; c++) {
    const m = o[c];
    i.wildcardChildNode !== null && (a = i.wildcardChildNode, l = o.slice(c).join("/"));
    const y = i.children.get(m);
    if (y === void 0) {
      if (i && i.placeholderChildren.length > 1) {
        const f = o.length - c;
        i = i.placeholderChildren.find((w) => w.maxDepth === f) || null;
      } else i = i.placeholderChildren[0] || null;
      if (!i) break;
      i.paramName && (n[i.paramName] = m), s = true;
    } else i = y;
  }
  return (i === null || i.data === null) && a !== null && (i = a, n[i.paramName || "_"] = l, s = true), i ? s ? { ...i.data, params: s ? n : void 0 } : i.data : null;
}
function U(e, r, t) {
  let o = true;
  const n = r.split("/");
  let s = e.rootNode, a = 0;
  const i = [s];
  for (const l of n) {
    let c;
    if (c = s.children.get(l)) s = c;
    else {
      const m = Ke(l);
      c = V({ type: m, parent: s }), s.children.set(l, c), m === $.PLACEHOLDER ? (c.paramName = l === "*" ? `_${a++}` : l.slice(1), s.placeholderChildren.push(c), o = false) : m === $.WILDCARD && (s.wildcardChildNode = c, c.paramName = l.slice(3) || "_", o = false), i.push(c), s = c;
    }
  }
  for (const [l, c] of i.entries()) c.maxDepth = Math.max(i.length - l, c.maxDepth || 0);
  return s.data = t, o === true && (e.staticRoutesMap[r] = s), s;
}
function Ge(e, r) {
  let t = false;
  const o = r.split("/");
  let n = e.rootNode;
  for (const s of o) if (n = n.children.get(s), !n) return t;
  if (n.data) {
    const s = o.at(-1) || "";
    n.data = null, Object.keys(n.children).length === 0 && n.parent && (n.parent.children.delete(s), n.parent.wildcardChildNode = null, n.parent.placeholderChildren = []), t = true;
  }
  return t;
}
function V(e = {}) {
  return { type: e.type || $.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Ke(e) {
  return e.startsWith("**") ? $.WILDCARD : e[0] === ":" || e === "*" ? $.PLACEHOLDER : $.NORMAL;
}
const Y = (e) => (r) => {
  const { base: t } = r, o = children(() => r.children), n = createMemo(() => Yt(o(), r.base || ""));
  let s;
  const a = Hn(e, n, () => s, { base: t, singleFlight: r.singleFlight, transformUrl: r.transformUrl });
  return e.create && e.create(a), createComponent$1(Nt$2.Provider, { value: a, get children() {
    return createComponent$1(ze, { routerState: a, get root() {
      return r.root;
    }, get preload() {
      return r.rootPreload || r.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Je, { routerState: a, get branches() {
        return n();
      } })];
    } });
  } });
};
function ze(e) {
  const r = e.routerState.location, t = e.routerState.params, o = createMemo(() => e.preload && untrack(() => {
    qn(true), e.preload({ params: t, location: r, intent: Vt$1() || "initial" }), qn(false);
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (n) => createComponent$1(n, { params: t, location: r, get data() {
    return o();
  }, get children() {
    return e.children;
  } }) });
}
function Je(e) {
  if (isServer) {
    const n = getRequestEvent();
    if (n && n.router && n.router.dataOnly) {
      Ve(n, e.routerState, e.branches);
      return;
    }
    n && ((n.router || (n.router = {})).matches || (n.router.matches = e.routerState.matches().map(({ route: s, path: a, params: i }) => ({ path: s.originalPath, pattern: s.pattern, match: a, params: i, info: s.info }))));
  }
  const r = [];
  let t;
  const o = createMemo(on$2(e.routerState.matches, (n, s, a) => {
    let i = s && n.length === s.length;
    const l = [];
    for (let c = 0, m = n.length; c < m; c++) {
      const y = s && s[c], f = n[c];
      a && y && f.route.key === y.route.key ? l[c] = a[c] : (i = false, r[c] && r[c](), createRoot((w) => {
        r[c] = w, l[c] = Tn(e.routerState, l[c - 1] || e.routerState.base, B(() => o()[c + 1]), () => e.routerState.matches()[c]);
      }));
    }
    return r.splice(n.length).forEach((c) => c()), a && i ? a : (t = l[0], l);
  }));
  return B(() => o() && t)();
}
const B = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (r) => createComponent$1(Xt.Provider, { value: r, get children() {
  return r.outlet();
} }) });
function Ve(e, r, t) {
  const o = new URL(e.request.url), n = Y$1(t, new URL(e.router.previousUrl || e.request.url).pathname), s = Y$1(t, o.pathname);
  for (let a = 0; a < s.length; a++) {
    (!n[a] || s[a].route !== n[a].route) && (e.router.dataOnly = true);
    const { route: i, params: l } = s[a];
    i.preload && i.preload({ params: l, location: r.location, intent: "preload" });
  }
}
function Ye([e, r], t, o) {
  return [e, o ? (n) => r(o(n)) : r];
}
function Qe(e) {
  let r = false;
  const t = (n) => typeof n == "string" ? { value: n } : n, o = Ye(createSignal(t(e.get()), { equals: (n, s) => n.value === s.value && n.state === s.state }), void 0, (n) => (!r && e.set(n), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), n));
  return e.init && onCleanup(e.init((n = e.get()) => {
    r = true, o[1](t(n)), r = false;
  })), Y({ signal: o, create: e.create, utils: e.utils });
}
function Xe(e, r, t) {
  return e.addEventListener(r, t), () => e.removeEventListener(r, t);
}
function Ze(e, r) {
  const t = e && document.getElementById(e);
  t ? t.scrollIntoView() : r && window.scrollTo(0, 0);
}
function et(e) {
  const r = new URL(e);
  return r.pathname + r.search;
}
function tt(e) {
  let r;
  const t = { value: e.url || (r = getRequestEvent()) && et(r.request.url) || "" };
  return Y({ signal: [() => t, (o) => Object.assign(t, o)] })(e);
}
function rt(e = true, r = false, t = "/_server", o) {
  return (n) => {
    const s = n.base.path(), a = n.navigatorFactory(n.base);
    let i, l;
    function c(u) {
      return u.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function m(u) {
      if (u.defaultPrevented || u.button !== 0 || u.metaKey || u.altKey || u.ctrlKey || u.shiftKey) return;
      const d = u.composedPath().find((_) => _ instanceof Node && _.nodeName.toUpperCase() === "A");
      if (!d || r && !d.hasAttribute("link")) return;
      const g = c(d), p = g ? d.href.baseVal : d.href;
      if ((g ? d.target.baseVal : d.target) || !p && !d.hasAttribute("state")) return;
      const A = (d.getAttribute("rel") || "").split(/\s+/);
      if (d.hasAttribute("download") || A && A.includes("external")) return;
      const N = g ? new URL(p, document.baseURI) : new URL(p);
      if (!(N.origin !== window.location.origin || s && N.pathname && !N.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [d, N];
    }
    function y(u) {
      const d = m(u);
      if (!d) return;
      const [g, p] = d, D = n.parsePath(p.pathname + p.search + p.hash), A = g.getAttribute("state");
      u.preventDefault(), a(D, { resolve: false, replace: g.hasAttribute("replace"), scroll: !g.hasAttribute("noscroll"), state: A ? JSON.parse(A) : void 0 });
    }
    function f(u) {
      const d = m(u);
      if (!d) return;
      const [g, p] = d;
      o && (p.pathname = o(p.pathname)), n.preloadRoute(p, g.getAttribute("preload") !== "false");
    }
    function w(u) {
      clearTimeout(i);
      const d = m(u);
      if (!d) return l = null;
      const [g, p] = d;
      l !== g && (o && (p.pathname = o(p.pathname)), i = setTimeout(() => {
        n.preloadRoute(p, g.getAttribute("preload") !== "false"), l = g;
      }, 20));
    }
    function R(u) {
      if (u.defaultPrevented) return;
      let d = u.submitter && u.submitter.hasAttribute("formaction") ? u.submitter.getAttribute("formaction") : u.target.getAttribute("action");
      if (!d) return;
      if (!d.startsWith("https://action/")) {
        const p = new URL(d, Ee);
        if (d = n.parsePath(p.pathname + p.search), !d.startsWith(t)) return;
      }
      if (u.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const g = me.get(d);
      if (g) {
        u.preventDefault();
        const p = new FormData(u.target, u.submitter);
        g.call({ r: n, f: u.target }, u.target.enctype === "multipart/form-data" ? p : new URLSearchParams(p));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", y), e && (document.addEventListener("mousemove", w, { passive: true }), document.addEventListener("focusin", f, { passive: true }), document.addEventListener("touchstart", f, { passive: true })), document.addEventListener("submit", R), onCleanup(() => {
      document.removeEventListener("click", y), e && (document.removeEventListener("mousemove", w), document.removeEventListener("focusin", f), document.removeEventListener("touchstart", f)), document.removeEventListener("submit", R);
    });
  };
}
function nt(e) {
  if (isServer) return tt(e);
  const r = () => {
    const o = window.location.pathname.replace(/^\/+/, "/") + window.location.search, n = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: o + window.location.hash, state: n };
  }, t = Ft$1();
  return Qe({ get: r, set({ value: o, replace: n, scroll: s, state: a }) {
    n ? window.history.replaceState(An(a), "", o) : window.history.pushState(a, "", o), Ze(decodeURIComponent(window.location.hash.slice(1)), s), _e();
  }, init: (o) => Xe(window, "popstate", On(o, (n) => {
    if (n && n < 0) return !t.confirm(n);
    {
      const s = r();
      return !t.confirm(s.value, { state: s.state });
    }
  })), create: rt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl), utils: { go: (o) => window.history.go(o), beforeLeave: t } })(e);
}
const ot = te$1(async () => {
  try {
    return x$5(i$3.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set"), (await new ts(i$3.env.GITHUB_TOKEN).getBranches()).data;
  } catch (e) {
    return console.error("Failed to fetch branches:", e), { error: "Failed to fetch branches" };
  }
}, "src_routes_index_tsx--getBranches_query", "/home/rowvir/dev/peepr/ui/src/routes/index.tsx?pick=route&tsr-directive-use-server="), st = L(ot, "query"), at = { preload() {
  Ln(), st();
} }, Q = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('../build/_...404_2.mjs'), import: () => import('../build/_...404_2.mjs') }, path: "/*404", filePath: "/home/rowvir/dev/peepr/ui/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, $$route: { require: () => ({ route: at }), src: "src/routes/index.tsx?pick=route" }, path: "/", filePath: "/home/rowvir/dev/peepr/ui/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => import('../build/login2.mjs'), import: () => import('../build/login2.mjs') }, path: "/login", filePath: "/home/rowvir/dev/peepr/ui/src/routes/login.tsx" }, { page: true, $component: { src: "src/routes/sample-ui.tsx?pick=default&pick=$css", build: () => import('../build/sample-ui2.mjs'), import: () => import('../build/sample-ui2.mjs') }, path: "/sample-ui", filePath: "/home/rowvir/dev/peepr/ui/src/routes/sample-ui.tsx" }], it = ct(Q.filter((e) => e.page));
function ct(e) {
  function r(t, o, n, s) {
    const a = Object.values(t).find((i) => n.startsWith(i.id + "/"));
    return a ? (r(a.children || (a.children = []), o, n.slice(a.id.length)), t) : (t.push({ ...o, id: n, path: n.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), t);
  }
  return e.sort((t, o) => t.path.length - o.path.length).reduce((t, o) => r(t, o, o.path, o.path), []);
}
function lt(e, r) {
  const t = dt.lookup(e);
  if (t && t.route) {
    const o = r === "HEAD" ? t.route.$HEAD || t.route.$GET : t.route[`$${r}`];
    return o === void 0 ? void 0 : { handler: o, params: t.params };
  }
}
function ut(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const dt = je({ routes: Q.reduce((e, r) => {
  if (!ut(r)) return e;
  let t = r.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (o, n) => `**:${n}`).split("/").map((o) => o.startsWith(":") || o.startsWith("*") ? o : encodeURIComponent(o)).join("/");
  if (/:[^/]*\?/g.test(t)) throw new Error(`Optional parameters are not supported in API routes: ${t}`);
  if (e[t]) throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${r.path}"`);
  return e[t] = { route: r }, e;
}, {}) });
var pt = " ";
const ft = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(pt), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function P(e, r) {
  let { tag: t, attrs: { key: o, ...n } = { key: void 0 }, children: s } = e;
  return ft[t]({ attrs: { ...n, nonce: r }, key: o, children: s });
}
function mt(e, r, t, o = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[o], i = (await ((_a = r.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...i.map((m) => P(m)), createComponent(s, c)] };
    }
  });
}
function X() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, info: { ...t.$$route ? t.$$route.require().route.info : {}, filesystem: true }, component: t.$component && mt(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return it.map(e);
}
let j;
const gt = isServer ? () => getRequestEvent().routes : () => j || (j = X());
function wt(e) {
  const r = _n(e.nativeEvent, "flash");
  if (r) try {
    let t = JSON.parse(r);
    if (!t || !t.result) return;
    const o = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])], n = t.error ? new Error(t.result) : t.result;
    return { input: o, url: t.url, pending: false, result: t.thrown ? void 0 : n, error: t.thrown ? n : void 0 };
  } catch (t) {
    console.error(t);
  } finally {
    En(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function vt(e) {
  const r = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await r.json(), assets: [...await r.inputs[r.handler].assets()], router: { submission: wt(e) }, routes: X(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const yt = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function x(e) {
  return e.status && yt.has(e.status) ? e.status : 302;
}
function Et(e, r, t = {}) {
  return eventHandler({ handler: (o) => {
    const n = Pn(o);
    return provideRequestEvent(n, async () => {
      const s = lt(new URL(n.request.url).pathname, n.request.method);
      if (s) {
        const f = await s.handler.import(), w = n.request.method === "HEAD" ? f.HEAD || f.GET : f[n.request.method];
        n.params = s.params || {}, sharedConfig.context = { event: n };
        const R = await w(n);
        if (R !== void 0) return R;
        if (n.request.method !== "GET") throw new Error(`API handler for ${n.request.method} "${n.request.url}" did not return a response.`);
      }
      const a = await r(n), i = typeof t == "function" ? await t(a) : { ...t }, l = i.mode || "stream";
      if (i.nonce && (a.nonce = i.nonce), l === "sync") {
        const f = renderToString(() => (sharedConfig.context.event = a, e(a)), i);
        if (a.complete = true, a.response && a.response.headers.get("Location")) {
          const w = x(a.response);
          return Sn(o, a.response.headers.get("Location"), w);
        }
        return f;
      }
      if (i.onCompleteAll) {
        const f = i.onCompleteAll;
        i.onCompleteAll = (w) => {
          G(a)(w), f(w);
        };
      } else i.onCompleteAll = G(a);
      if (i.onCompleteShell) {
        const f = i.onCompleteShell;
        i.onCompleteShell = (w) => {
          W$1(a, o)(), f(w);
        };
      } else i.onCompleteShell = W$1(a, o);
      const c = renderToStream(() => (sharedConfig.context.event = a, e(a)), i);
      if (a.response && a.response.headers.get("Location")) {
        const f = x(a.response);
        return Sn(o, a.response.headers.get("Location"), f);
      }
      if (l === "async") return c;
      const { writable: m, readable: y } = new TransformStream();
      return c.pipeTo(m), y;
    });
  } });
}
function W$1(e, r) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const t = x(e.response);
      he(r, t), Cn(r, "Location", e.response.headers.get("Location"));
    }
  };
}
function G(e) {
  return ({ write: r }) => {
    e.complete = true;
    const t = e.response && e.response.headers.get("Location");
    t && r(`<script>window.location="${t}"<\/script>`);
  };
}
function bt(e, r) {
  return Et(e, vt, r);
}
var St = ["<a", ' href="/">Index</a>'], $t = ["<a", ' href="/about">About</a>'];
function Rt() {
  return createComponent$1(nt, { root: (e) => [ssr(St, ssrHydrationKey()), ssr($t, ssrHydrationKey()), createComponent$1(Suspense, { get children() {
    return e.children;
  } })], get children() {
    return createComponent$1(gt, {});
  } });
}
const Z = isServer ? (e) => {
  const r = getRequestEvent();
  return r.response.status = e.code, r.response.statusText = e.text, onCleanup(() => !r.nativeEvent.handled && !r.complete && (r.response.status = 200)), null;
} : (e) => null;
var At = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], Ct = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const Tt = (e) => {
  const r = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (t) => (console.error(t), [ssr(At, ssrHydrationKey(), escape(r)), createComponent$1(Z, { code: 500 })]), get children() {
    return e.children;
  } });
}, Nt = (e) => {
  let r = false;
  const t = catchError(() => e.children, (o) => {
    console.error(o), r = !!o;
  });
  return r ? [ssr(Ct, ssrHydrationKey()), createComponent$1(Z, { code: 500 })] : t;
};
var K$1 = ["<script", ">", "<\/script>"], Lt = ["<script", ' type="module"', " async", "><\/script>"], kt = ["<script", ' type="module" async', "><\/script>"];
const Pt = ssr("<!DOCTYPE html>");
function ee(e, r, t = []) {
  for (let o = 0; o < r.length; o++) {
    const n = r[o];
    if (n.path !== e[0].path) continue;
    let s = [...t, n];
    if (n.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = ee(a, n.children, s), !s)) continue;
    }
    return s;
  }
}
function xt(e) {
  const r = getRequestEvent(), t = r.nonce;
  let o = [];
  return Promise.resolve().then(async () => {
    let n = [];
    if (r.router && r.router.matches) {
      const s = [...r.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); ) s.shift();
      const a = s.length && ee(s, r.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let l = 0; l < a.length; l++) {
          const c = a[l], m = i[c.$component.src];
          n.push(m.assets());
        }
      }
    }
    o = await Promise.all(n).then((s) => [...new Map(s.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !r.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => o.length ? o.map((n) => P(n)) : void 0), createComponent$1(NoHydration, { get children() {
    return [Pt, createComponent$1(Nt, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), r.assets.map((n) => P(n, t))];
      }, get scripts() {
        return t ? [ssr(K$1, ssrHydrationKey() + ssrAttribute("nonce", escape(t, true), false), `window.manifest = ${JSON.stringify(r.manifest)}`), ssr(Lt, ssrHydrationKey(), ssrAttribute("nonce", escape(t, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(K$1, ssrHydrationKey(), `window.manifest = ${JSON.stringify(r.manifest)}`), ssr(kt, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(Tt, { get children() {
            return createComponent$1(Rt, {});
          } });
        } });
      } });
    } })];
  } });
}
var Ot = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], It = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Kt = bt(() => createComponent$1(xt, { document: ({ assets: e, children: r, scripts: t }) => ssr(It, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(Ot, escape(e));
} }), escape(r), escape(t)) }));

const handlers = [
  { route: '', handler: _8BQmlh, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Fs, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Kt, lazy: false, middleware: true, method: undefined }
];

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, key + "" , value);
  return value;
};
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField(this, "_hash", new WordArray([...H]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/rowvir/dev/peepr/ui/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $n$1 as $, Ce$2 as C, Ee$2 as E, Fn as F, Hn$1 as H, In$1 as I, L$2 as L, Nt$5 as N, On$1 as O, Tn$1 as T, Un$1 as U, Vt$4 as V, Xt$2 as X, Yt$2 as Y, ts$2 as a, Ln$1 as b, ne$3 as c, dn$1 as d, Ue$1 as e, fn$1 as f, Y$3 as g, Ft$4 as h, Un as i, L as j, ks as k, ln$1 as l, me$2 as m, node$1 as n, Ln as o, te$1 as p, qn$1 as q, re$4 as r, ts as s, te$4 as t, un$1 as u, $n as v, In as w, nodeServer as x, z$2 as z };
//# sourceMappingURL=nitro.mjs.map
