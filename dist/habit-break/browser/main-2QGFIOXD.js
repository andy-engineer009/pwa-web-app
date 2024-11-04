import{C as y,E as Z,F as G,G as H,I as N,J as $,K as q,L as M,M as R,a as P,b as _,c as b,d as F,e as a,f as j,g as T,h as S,i as I,j as l,k as u,l as p,m as W,n as U,o as m,p as x,q as O,r as d,s as L,t as A,u as E,v as h,w as V,x as B,y as k,z as K}from"./chunk-SDMMOTMS.js";var z=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=E({type:e,selectors:[["app-main"]],decls:1,vars:0,template:function(r,o){r&1&&y(0,"router-outlet")},dependencies:[M]})}}return e})();var se=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"",component:z,children:[{path:"",loadChildren:()=>import("./chunk-L4ZAR4RV.js").then(e=>e.MainModule)}]}],Y=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=d({imports:[R.forRoot(se),R]})}}return e})();var J=(()=>{class e{constructor(){this.title="habit-break"}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=E({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&y(0,"router-outlet")},dependencies:[M]})}}return e})();var v="Service workers are disabled or not supported by this browser";function ae(e){return T(()=>F(new Error(e)))}var f=class{constructor(n){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=ae(v);else{let r=S(n,"controllerchange").pipe(a(()=>n.controller)),o=T(()=>b(n.controller)),s=j(o,r);this.worker=s.pipe(u(c=>!!c)),this.registration=this.worker.pipe(m(()=>n.getRegistration()));let D=S(n,"message").pipe(a(c=>c.data)).pipe(u(c=>c&&c.type)).pipe(U());D.connect(),this.events=D}}postMessage(n,t){return this.worker.pipe(p(1),x(r=>{r.postMessage(P({action:n},t))})).toPromise().then(()=>{})}postMessageWithOperation(n,t,r){let o=this.waitForOperationCompleted(r),s=this.postMessage(n,t);return Promise.all([s,o]).then(([,i])=>i)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let t;return typeof n=="string"?t=r=>r.type===n:t=r=>n.includes(r.type),this.events.pipe(u(t))}nextEventOfType(n){return this.eventsOfType(n).pipe(p(1))}waitForOperationCompleted(n){return this.eventsOfType("OPERATION_COMPLETED").pipe(u(t=>t.nonce===n),p(1),a(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},te=(()=>{class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new _,!t.isEnabled){this.messages=l,this.notificationClicks=l,this.subscription=l;return}this.messages=this.sw.eventsOfType("PUSH").pipe(a(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(a(o=>o.data)),this.pushManager=this.sw.registration.pipe(a(o=>o.pushManager));let r=this.pushManager.pipe(m(o=>o.getSubscription()));this.subscription=I(r,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(v));let r={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(o.length));for(let i=0;i<o.length;i++)s[i]=o.charCodeAt(i);return r.applicationServerKey=s,this.pushManager.pipe(m(i=>i.subscribe(r)),p(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(p(1),m(t)).toPromise()}decodeBase64(t){return atob(t)}static{this.\u0275fac=function(r){return new(r||e)(A(f))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})(),re=(()=>{class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=l,this.unrecoverable=l;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static{this.\u0275fac=function(r){return new(r||e)(A(f))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})();var Q=new L("");function pe(e,n,t,r){return()=>{if(!(N(r)&&"serviceWorker"in navigator&&t.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let o;if(typeof t.registrationStrategy=="function")o=t.registrationStrategy();else{let[i,...w]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(i){case"registerImmediately":o=b(null);break;case"registerWithDelay":o=X(+w[0]||0);break;case"registerWhenStable":o=w[0]?I(ee(e),X(+w[0])):ee(e);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}e.get(K).runOutsideAngular(()=>o.pipe(p(1)).subscribe(()=>navigator.serviceWorker.register(n,{scope:t.scope}).catch(i=>console.error("Service worker registration failed with:",i))))}}function X(e){return b(null).pipe(W(e))}function ee(e){return e.get(G).isStable.pipe(u(t=>t))}function ce(e,n){return new f(N(n)&&e.enabled!==!1?navigator.serviceWorker:void 0)}var g=class{};function le(e,n={}){return V([te,re,{provide:Q,useValue:e},{provide:g,useValue:n},{provide:f,useFactory:ce,deps:[g,k]},{provide:Z,useFactory:pe,deps:[B,Q,g,k],multi:!0}])}var ne=(()=>{class e{static register(t,r={}){return{ngModule:e,providers:[le(t,r)]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=d({providers:[te,re]})}}return e})();var oe=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=h({type:e,bootstrap:[J]})}static{this.\u0275inj=d({imports:[q,Y,ne.register("ngsw-worker.js",{enabled:!H(),registrationStrategy:"registerWhenStable:30000"})]})}}return e})();$().bootstrapModule(oe).catch(e=>console.error(e));