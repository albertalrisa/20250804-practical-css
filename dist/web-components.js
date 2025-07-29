/*!
 * @albertalrisa reveal.js Custom Web Components 5.2.1
 *
 * Copyright © 2025 albertalrisa, https://github.com/albertalrisa
 */
!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const C=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:n,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:c}=Object,p=globalThis,f=p.trustedTypes,u=f?f.emptyScript:"",_=p.reactiveElementPolyfillSupport,m=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!a(t,e),L={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:$};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&n(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const C=i?.call(this);o?.call(this,e),this.requestUpdate(t,C,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??L}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=c(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const C=o.fromAttribute(e,t.type);this[i]=C??this._$Ej?.get(i)??C,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??$)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},C){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,C??e??this[t]),!0!==o||void 0!==C)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,_?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const v=globalThis,A=v.trustedTypes,b=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,F="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,w="?"+M,E=`<${w}>`,x=document,S=()=>x.createComment(""),Z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,k="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,z=/>/g,H=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,V=/"/g,R=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),N=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),G=new WeakMap,W=x.createTreeWalker(x,129);function j(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const I=(t,e)=>{const s=t.length-1,i=[];let o,C=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<s;e++){const s=t[e];let a,n,l=-1,h=0;for(;h<s.length&&(r.lastIndex=h,n=r.exec(s),null!==n);)h=r.lastIndex,r===O?"!--"===n[1]?r=P:void 0!==n[1]?r=z:void 0!==n[2]?(R.test(n[2])&&(o=RegExp("</"+n[2],"g")),r=H):void 0!==n[3]&&(r=H):r===H?">"===n[0]?(r=o??O,l=-1):void 0===n[1]?l=-2:(l=r.lastIndex-n[2].length,a=n[1],r=void 0===n[3]?H:'"'===n[3]?V:T):r===V||r===T?r=H:r===P||r===z?r=O:(r=H,o=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";C+=r===O?s+E:l>=0?(i.push(a),s.slice(0,l)+F+s.slice(l)+M+d):s+M+(-2===l?e:d)}return[j(t,C+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,C=0;const r=t.length-1,a=this.parts,[n,l]=I(t,e);if(this.el=q.createElement(n,s),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(F)){const e=l[C++],s=i.getAttribute(t).split(M),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?et:Q}),i.removeAttribute(t)}else t.startsWith(M)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(R.test(i.tagName)){const t=i.textContent.split(M),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],S()),W.nextNode(),a.push({type:2,index:++o});i.append(t[e],S())}}}else if(8===i.nodeType)if(i.data===w)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(M,t+1));)a.push({type:7,index:o}),t+=M.length-1}o++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===N)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const C=Z(e)?void 0:e._$litDirective$;return o?.constructor!==C&&(o?._$AO?.(!1),void 0===C?o=void 0:(o=new C(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??x).importNode(e,!0);W.currentNode=i;let o=W.nextNode(),C=0,r=0,a=s[0];for(;void 0!==a;){if(C===a.index){let e;2===a.type?e=new K(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=s[++r]}C!==a?.index&&(o=W.nextNode(),C++)}return W.currentNode=x,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),Z(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(j(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new K(this.O(S()),this.O(S()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}_$AI(t,e=this,s,i){const o=this.strings;let C=!1;if(void 0===o)t=X(this,t,e,0),C=!Z(t)||t!==this._$AH&&t!==N,C&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=X(this,i[s+r],e,r),a===N&&(a=this._$AH[r]),C||=!Z(a)||a!==this._$AH[r],a===D?t=D:t!==D&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}C&&!i&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class et extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??D)===N)return;const s=this._$AH,i=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==D&&(s===D||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const it=v.litHtmlPolyfillSupport;it?.(q,K),(v.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class Ct extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new K(e.insertBefore(S(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}}Ct._$litElement$=!0,Ct.finalized=!0,ot.litElementHydrateSupport?.({LitElement:Ct});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:Ct}),(ot.litElementVersions??=[]).push("4.2.1");class at extends Ct{static properties={chromium:{type:Boolean},firefox:{type:Boolean},safari:{type:Boolean},availableFrom:{type:Number,attribute:"available-from"}};constructor(){super(),this.chromium=!1,this.firefox=!1,this.safari=!1,this.availableFrom=0}static styles=C`
    :root {
      --spacing: 0.25rem;
    }

    .rounded-md {
      border-radius: 0.375rem;
    }

    .aspect-square {
      aspect-ratio: 1 / 1;
    }

    .h-full {
      height: 100%;
    }

    .p-2 {
      padding: calc(var(--spacing) * 2);
    }

    .gap-2 {
      gap: calc(var(--spacing) * 2);
    }

    .gap-6 {
      gap: calc(var(--spacing) * 6);
    }

    .flex {
      display: flex;
    }

    .flex-col {
      flex-direction: column;
    }

    .justify-between {
      justify-content: space-between;
    }

    .items-start {
      align-items: flex-start;
    }

    .items-center {
      align-items: center;
    }

    .text-sky-200 {
      color: var(--color-sky-200);
    }

    .p-1 {
      padding: calc(var(--spacing) * 1);
    }

    .border-sky-200 {
      border-color: var(--color-sky-200);
    }

    .border {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }

    .rounded-full {
      border-radius: calc(infinity * 1px);
    }

    .gap-1 {
      gap: calc(var(--spacing) * 1);
    }

    .h-6 {
      height: calc(var(--spacing) * 6);
    }

    .hidden {
      display: none;
    }

    .baseline {
      background-color: oklch(44.8% 0.119 151.328);
    }

    .baseline.new {
      background-color: oklch(44.3% 0.11 240.79);
    }

    .limited {
      background-color: oklch(55.4% 0.135 66.442);
    }

    .browser-item {
      box-sizing: border-box;
      border-radius: calc(infinity * 1px);
      padding: calc(var(--spacing) * 0.5);
      border: 1px solid;
      display: flex;
      gap: calc(var(--spacing) * 1);
      height: calc(var(--spacing) * 6);
    }

    svg {
      box-sizing: border-box;
    }

    .baseline.new .browser-item {
      border-color: oklch(78.9% 0.154 211.53);
      color: oklch(78.9% 0.154 211.53);
    }

    .baseline .browser-item {
      border-color: oklch(72.3% 0.219 149.579);
      color: oklch(72.3% 0.219 149.579);
    }

    .limited .browser-item {
      border-color: oklch(85.2% 0.199 91.936);
      color: oklch(85.2% 0.199 91.936);
    }

    .status {
      font-size: 0.75rem;
    }

    .detailed-info {
      font-size: 0.5rem;
    }
  `;render(){const t={chromium:B`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      class="aspect-square h-full"
    >
      <g clip-path="url(#a)" transform="translate(-100 -100)">
        <path fill="#fff" d="M150 175a25 25 0 1 0 0-50 25 25 0 0 0 0 50z" />
        <path
          fill="#229342"
          d="M128.3 162.5 106.7 125a50 50 0 0 0 18.3 68.3 50 50 0 0 0 25 6.7l21.7-37.5a25 25 0 0 1-34.2 9.2 25 25 0 0 1-9.2-9.2z"
        />
        <path
          fill="#fbc116"
          d="M171.7 162.5 150 200a50 50 0 0 0 43.3-25 50 50 0 0 0 0-50H150a25 25 0 0 1 21.7 37.5z"
        />
        <path
          fill="#1a73e8"
          d="M150 169.8a19.8 19.8 0 1 0 0-39.6 19.8 19.8 0 0 0 0 39.6z"
        />
        <path
          fill="#e33b2e"
          d="M150 125h43.3a50 50 0 0 0-86.6 0l21.6 37.5a25 25 0 0 1 0-25A25 25 0 0 1 150 125z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M100 100h100v100H100z" />
        </clipPath>
      </defs>
    </svg>`,firefox:B`<svg
      class="aspect-square h-full"
      viewBox="0 0 100 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_130_2)">
        <mask
          id="mask0_130_2"
          style="mask-type: luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="103"
        >
          <path d="M0 0H100V103H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_130_2)">
          <path
            d="M96.4 34.6C94.3877 29.4756 90.9094 25.0582 86.4 21.9C88.8439 26.6771 90.5307 31.8049 91.4 37.1C85.8 23.1 76.2 17.4 68.4 5.10001L67.1 3.10001C66.9214 2.77279 66.7546 2.43924 66.6 2.10001C66.2542 1.46777 65.9856 0.796296 65.8 0.100006C65.7696 0.0824524 65.7351 0.0732117 65.7 0.0732117C65.6649 0.0732117 65.6304 0.0824524 65.6 0.100006C60.7768 3.06198 56.7108 7.10794 53.725 11.9164C50.7392 16.7249 48.9159 22.1635 48.4 27.8C43.3709 28.1352 38.5606 29.9826 34.6 33.1C34.1852 32.7432 33.7512 32.4094 33.3 32.1C32.1362 28.1255 32.0671 23.9105 33.1 19.9C28.5002 22.1372 24.4142 25.3039 21.1 29.2C19.1 26.7 19.2 18.4 19.3 16.7C18.7414 16.9129 18.2054 17.1809 17.7 17.5C15.9105 18.7469 14.2371 20.1526 12.7 21.7C11.0139 23.4358 9.47527 25.3089 8.1 27.3C4.87935 31.8714 2.60169 37.0386 1.4 42.5V42.8C1.2 43.2 0.900003 45.4 0.800003 45.9V46C0.365297 48.2774 0.0979122 50.5836 0 52.9V53.1C0.00252456 65.6239 4.71433 77.689 13.2 86.9C21.6833 96.1226 33.3148 101.831 45.8 102.9C58.2786 103.927 70.6904 100.253 80.6 92.6C90.5243 84.9825 97.2323 73.9214 99.4 61.6L99.6 59.6C100.633 51.1302 99.5331 42.5365 96.4 34.6ZM38.7 73.6L39.4 74C39.1652 73.9034 38.9319 73.8034 38.7 73.7V73.6Z"
            fill="url(#paint0_linear_130_2)"
          />
          <path
            d="M96.4 34.6C94.3877 29.4756 90.9094 25.0582 86.4 21.9C88.8439 26.6771 90.5307 31.8049 91.4 37.1V37.2C95.2781 48.2045 94.7404 60.2836 89.9 70.9C86.1827 78.5891 80.2599 84.9971 72.8867 89.307C65.5135 93.617 57.0238 95.6336 48.5 95.1C37.0544 94.7634 26.0646 90.5395 17.34 83.1235C8.6154 75.7076 2.67611 65.5418 0.5 54.3C-0.2 50.7 0.500003 48.9 0.800003 46C0.318135 48.2699 0.0502919 50.5801 0 52.9V53.1C0.00252456 65.6239 4.71433 77.689 13.2 86.9C21.6833 96.1226 33.3148 101.831 45.8 102.9C58.3121 103.952 70.7642 100.277 80.7 92.6C90.5869 84.9653 97.2579 73.9064 99.4 61.6L99.6 59.6C100.633 51.1302 99.5331 42.5365 96.4 34.6Z"
            fill="url(#paint1_radial_130_2)"
          />
          <path
            d="M96.4 34.6C94.3877 29.4756 90.9094 25.0582 86.4 21.9C88.8439 26.6771 90.5307 31.8049 91.4 37.1V37.2C95.2781 48.2045 94.7404 60.2836 89.9 70.9C86.1827 78.5891 80.2599 84.9971 72.8867 89.307C65.5135 93.617 57.0238 95.6336 48.5 95.1C37.0544 94.7634 26.0646 90.5395 17.34 83.1235C8.6154 75.7076 2.67611 65.5418 0.5 54.3C-0.2 50.7 0.500003 48.9 0.800003 46C0.318135 48.2699 0.0502919 50.5801 0 52.9V53.1C0.00252456 65.6239 4.71433 77.689 13.2 86.9C21.6833 96.1226 33.3148 101.831 45.8 102.9C58.3121 103.952 70.7642 100.277 80.7 92.6C90.5869 84.9653 97.2579 73.9064 99.4 61.6L99.6 59.6C100.633 51.1302 99.5331 42.5365 96.4 34.6Z"
            fill="url(#paint2_radial_130_2)"
          />
          <path
            d="M71.9999 40.4L72.3999 40.7C71.1226 38.4893 69.5404 36.4695 67.6999 34.7C52.0999 19.1 63.6999 1.00001 65.5999 0.100006C60.7767 3.06198 56.7107 7.10794 53.7249 11.9164C50.7391 16.7249 48.9158 22.1635 48.3999 27.8L50.0999 27.7C54.5589 27.6944 58.9402 28.8673 62.7999 31.1C66.6318 33.3361 69.8054 36.5442 71.9999 40.4Z"
            fill="url(#paint3_radial_130_2)"
          />
          <path
            d="M50.1001 43.6C50.1001 44.8 45.7001 49.1 44.1001 49.1C29.9001 49.1 27.6001 57.7 27.6001 57.7C28.0785 61.6057 29.6447 65.2983 32.1199 68.3571C34.5952 71.4158 37.8801 73.7176 41.6001 75C43.7217 75.7646 45.947 76.2029 48.2001 76.3C73.2001 77.4 78.0001 46.5 60.0001 37.5C64.2331 36.987 68.5065 38.0553 72.0001 40.5C69.8196 36.6075 66.6448 33.3637 62.8001 31.1C58.9404 28.8673 54.5591 27.6944 50.1001 27.7H48.3001C43.2949 28.0837 38.521 29.9654 34.6001 33.1L38.0001 36.3C41.4001 39.7 50.1001 43.1 50.1001 43.5V43.6Z"
            fill="url(#paint4_radial_130_2)"
          />
          <path
            d="M50.1001 43.6C50.1001 44.8 45.7001 49.1 44.1001 49.1C29.9001 49.1 27.6001 57.7 27.6001 57.7C28.0785 61.6057 29.6447 65.2983 32.1199 68.3571C34.5952 71.4158 37.8801 73.7176 41.6001 75C43.7217 75.7646 45.947 76.2029 48.2001 76.3C73.2001 77.4 78.0001 46.5 60.0001 37.5C64.2331 36.987 68.5065 38.0553 72.0001 40.5C69.8196 36.6075 66.6448 33.3637 62.8001 31.1C58.9404 28.8673 54.5591 27.6944 50.1001 27.7H48.3001C43.2949 28.0837 38.521 29.9654 34.6001 33.1L38.0001 36.3C41.4001 39.7 50.1001 43.1 50.1001 43.5V43.6Z"
            fill="url(#paint5_radial_130_2)"
          />
          <path
            d="M32.2001 31.4L33.2001 32.1C32.1019 28.1075 32.1019 23.8925 33.2001 19.9C28.5643 22.1255 24.4433 25.2929 21.1001 29.2C21.3001 29.2 28.6001 29 32.2001 31.4Z"
            fill="url(#paint6_radial_130_2)"
          />
          <path
            d="M0.500026 54.3C2.67613 65.5418 8.61543 75.7076 17.34 83.1235C26.0646 90.5395 37.0544 94.7634 48.5 95.1C57.0074 95.6133 65.4753 93.5869 72.8287 89.2781C80.1821 84.9694 86.0893 78.5726 89.8 70.9C94.6732 60.2967 95.2467 48.2173 91.4 37.2V37.1C93.2 48.8 87.3 60 78.1 67.5V67.6C60.1 82.2 42.9 76.4 39.4 74C39.1652 73.9034 38.9319 73.8034 38.7 73.7C28.2 68.7 23.9 59.2 24.8 51C22.3231 51.0192 19.893 50.3249 17.8 49C15.6777 47.7131 13.9753 45.837 12.9 43.6C15.6594 41.8998 18.8079 40.9338 22.046 40.7938C25.2841 40.6537 28.5042 41.3443 31.4 42.8C37.2946 45.478 43.9983 45.7648 50.1 43.6C50.1 43.2 41.4 39.7 38.1 36.4L34.6 33.1C34.1853 32.7432 33.7513 32.4094 33.3 32.1L32.3 31.4C28.6 29.1 21.3 29.2 21.1 29.2C19.1 26.7 19.2 18.4 19.3 16.7C18.7374 16.9447 18.2013 17.2462 17.7 17.6C15.9153 18.816 14.2421 20.1881 12.7 21.7C11.0139 23.4358 9.4753 25.3089 8.10002 27.3C4.87937 31.8714 2.60171 37.0386 1.40003 42.5C1.40003 42.5 -0.399973 50.3 0.400027 54.3H0.500026Z"
            fill="url(#paint7_radial_130_2)"
          />
          <path
            d="M67.7 34.6C69.5405 36.3695 71.1227 38.3893 72.4 40.6L73.1 41.3C84.5 51.7 78.5 66.5 78.1 67.5C87.3 59.9 93.1 48.7 91.4 37.2C85.7 23.1 76.1 17.4 68.4 5.10001L67.1 3.10001C66.9211 2.77292 66.7543 2.43936 66.6 2.10001C66.2542 1.46777 65.9856 0.796296 65.8 0.100006C65.7696 0.0824524 65.7351 0.0732117 65.7 0.0732117C65.6649 0.0732117 65.6304 0.0824524 65.6 0.100006C63.6 1.00001 52.1 19.1 67.7 34.6Z"
            fill="url(#paint8_radial_130_2)"
          />
          <path
            d="M73.0999 41.3L72.2999 40.7L71.9999 40.5C68.5063 38.0553 64.2329 36.987 59.9999 37.5C77.9999 46.5 73.0999 77.5 48.1999 76.3C45.9806 76.1929 43.7897 75.7547 41.6999 75L40.1999 74.4C39.9298 74.2737 39.663 74.1403 39.3999 74C42.8999 76.4 60.0999 82.2 77.9999 67.6C78.4999 66.5 84.4999 51.7 73.0999 41.3Z"
            fill="url(#paint9_radial_130_2)"
          />
          <path
            d="M27.5999 57.7C27.5999 57.7 29.8999 49.1 44.0999 49.1C45.6999 49.1 50.0999 44.8 50.0999 43.5C43.9811 45.7234 37.2364 45.4723 31.2999 42.8C28.425 41.3475 25.2281 40.6496 22.0094 40.7721C18.7908 40.8945 15.6561 41.8333 12.8999 43.5C13.959 45.7739 15.6629 47.6864 17.7999 49C19.8928 50.3249 22.3229 51.0192 24.7999 51C23.7999 59.1 28.1999 68.7 38.6999 73.7L39.3999 74C36.2258 72.488 33.4821 70.2033 31.4204 67.3554C29.3587 64.5075 28.0451 61.1876 27.5999 57.7Z"
            fill="url(#paint10_radial_130_2)"
          />
          <path
            d="M96.4 34.6C94.3877 29.4756 90.9094 25.0582 86.4 21.9C88.8439 26.6771 90.5307 31.8049 91.4 37.1C85.7 23.1 76.2 17.4 68.4 5.10001C67.9533 4.44209 67.5199 3.77529 67.1 3.10001C66.9215 2.77271 66.7547 2.43917 66.6 2.10001C66.2542 1.46777 65.9856 0.796296 65.8 0.100006C65.7696 0.0824524 65.7351 0.0732117 65.7 0.0732117C65.6649 0.0732117 65.6304 0.0824524 65.6 0.100006C60.7895 3.05206 56.7314 7.0823 53.7463 11.8723C50.7612 16.6624 48.9309 22.081 48.4 27.7H50.1C54.559 27.6944 58.9403 28.8673 62.8 31.1C66.6319 33.3361 69.8055 36.5442 72 40.4C68.4928 37.9905 64.2205 36.958 60 37.5C78 46.5 73.2 77.4 48.2 76.2C45.9857 76.1251 43.795 75.7207 41.7 75C41.1941 74.8152 40.6938 74.6151 40.2 74.4L39.4 74C39.1646 73.8703 38.9312 73.7369 38.7 73.6L39.4 74C36.2128 72.4791 33.4607 70.1789 31.3981 67.3123C29.3356 64.4457 28.0293 61.1053 27.6 57.6C27.6 57.6 29.9 49.1 44.1 49.1C45.7 49.1 50.1 44.8 50.1 43.5C50.1 43.1 41.4 39.7 38.1 36.3L34.6 33C34.1858 32.6426 33.7517 32.3087 33.3 32C32.1544 28.0568 32.0854 23.8789 33.1 19.9C28.5002 22.1372 24.4142 25.3039 21.1 29.2C19.1 26.6 19.2 18.4 19.3 16.7C18.7414 16.9129 18.2054 17.1809 17.7 17.5C15.9105 18.7469 14.2371 20.1526 12.7 21.7C11.0139 23.4358 9.47527 25.3089 8.1 27.3C4.89137 31.8415 2.61421 36.9736 1.4 42.4V42.8C1.2 43.2 0.799997 45.4 0.699997 45.9C0.324752 48.217 0.0909887 50.5546 0 52.9V53.1C0.00252456 65.6239 4.71433 77.689 13.2 86.9C21.6994 96.0856 33.3289 101.758 45.8 102.8C58.2657 103.855 70.6762 100.217 80.6 92.6C90.5243 84.9825 97.2323 73.9214 99.4 61.6L99.6 59.6C100.633 51.1302 99.5331 42.5365 96.4 34.6Z"
            fill="url(#paint11_linear_130_2)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_130_2"
          x1="89.7"
          y1="16"
          x2="6.89999"
          y2="96.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFF44F" />
          <stop offset="0.1" stop-color="#FFE847" />
          <stop offset="0.2" stop-color="#FFC830" />
          <stop offset="0.4" stop-color="#FF8B16" />
          <stop offset="0.5" stop-color="#FF3647" />
          <stop offset="0.7" stop-color="#E31587" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(86.5 11.6) scale(104.36 104.08)"
        >
          <stop offset="0.1" stop-color="#FFBD4F" />
          <stop offset="0.2" stop-color="#FF9D17" />
          <stop offset="0.3" stop-color="#FF980E" />
          <stop offset="0.4" stop-color="#FF563B" />
          <stop offset="0.5" stop-color="#FF3750" />
          <stop offset="0.7" stop-color="#F5156C" />
          <stop offset="0.8" stop-color="#EB0878" />
          <stop offset="0.9" stop-color="#E50080" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.8 54.1) scale(104.36 104.08)"
        >
          <stop offset="0.3" stop-color="#960E18" />
          <stop offset="0.4" stop-color="#DB293D" stop-opacity="0.3" />
          <stop offset="0.5" stop-color="#FF3750" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(60.6999 -11.6) scale(75.6 75.4)"
        >
          <stop offset="0.1" stop-color="#FFF44F" />
          <stop offset="0.3" stop-color="#FFDC3E" />
          <stop offset="0.5" stop-color="#FF980E" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.2001 81.2) scale(49.69 49.56)"
        >
          <stop offset="0.4" stop-color="#3A8EE6" />
          <stop offset="0.5" stop-color="#5C79F0" />
          <stop offset="0.7" stop-color="#9059FF" />
          <stop offset="1" stop-color="#C139E6" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(52.8001 45.2) rotate(-13.5668) scale(26.3451 30.7667)"
        >
          <stop offset="0.2" stop-color="#9059FF" stop-opacity="0" />
          <stop offset="0.3" stop-color="#8C4FF3" stop-opacity="0.1" />
          <stop offset="0.7" stop-color="#7716A8" stop-opacity="0.5" />
          <stop offset="1" stop-color="#6E008B" stop-opacity="0.6" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.5001 7.80007) scale(35.75 35.6599)"
        >
          <stop stop-color="#FFE226" />
          <stop offset="0.1" stop-color="#FFDB27" />
          <stop offset="0.3" stop-color="#FFC82A" />
          <stop offset="0.5" stop-color="#FFA930" />
          <stop offset="0.7" stop-color="#FF7E37" />
          <stop offset="0.8" stop-color="#FF7139" />
        </radialGradient>
        <radialGradient
          id="paint7_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(75 -15.4) scale(152.54 152.13)"
        >
          <stop offset="0.1" stop-color="#FFF44F" />
          <stop offset="0.5" stop-color="#FF980E" />
          <stop offset="0.6" stop-color="#FF5634" />
          <stop offset="0.7" stop-color="#FF3647" />
          <stop offset="0.9" stop-color="#E31587" />
        </radialGradient>
        <radialGradient
          id="paint8_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(62.2 -7) rotate(83.9606) scale(111.489 73.3573)"
        >
          <stop stop-color="#FFF44F" />
          <stop offset="0.1" stop-color="#FFE847" />
          <stop offset="0.2" stop-color="#FFC830" />
          <stop offset="0.3" stop-color="#FF980E" />
          <stop offset="0.4" stop-color="#FF8B16" />
          <stop offset="0.5" stop-color="#FF672A" />
          <stop offset="0.6" stop-color="#FF3647" />
          <stop offset="0.7" stop-color="#E31587" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.4999 20.6) scale(95.22 94.96)"
        >
          <stop offset="0.1" stop-color="#FFF44F" />
          <stop offset="0.5" stop-color="#FF980E" />
          <stop offset="0.6" stop-color="#FF5634" />
          <stop offset="0.7" stop-color="#FF3647" />
          <stop offset="0.9" stop-color="#E31587" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_130_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(70.9999 25.8) scale(104.22 103.94)"
        >
          <stop offset="0.1" stop-color="#FFF44F" />
          <stop offset="0.2" stop-color="#FFE141" />
          <stop offset="0.5" stop-color="#FFAF1E" />
          <stop offset="0.6" stop-color="#FF980E" />
        </radialGradient>
        <linearGradient
          id="paint11_linear_130_2"
          x1="88.7"
          y1="15.5"
          x2="18.2"
          y2="86.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stop-color="#FFF44F" stop-opacity="0.8" />
          <stop offset="0.3" stop-color="#FFF44F" stop-opacity="0.6" />
          <stop offset="0.5" stop-color="#FFF44F" stop-opacity="0.2" />
          <stop offset="0.6" stop-color="#FFF44F" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_130_2">
          <rect width="100" height="103" fill="white" />
        </clipPath>
      </defs>
    </svg>`,safari:B`<svg
      class="aspect-square h-full"
      viewBox="0 0 95 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_130_21"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="-3"
        y="0"
        width="101"
        height="100"
      >
        <path d="M-2.5 0H97.5V100H-2.5V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_130_21)">
        <path
          opacity="0.5"
          d="M93.0998 51.5999C93.0873 57.4119 91.8966 63.1611 89.5998 68.5C87.3115 73.8681 83.9805 78.7286 79.7998 82.8C75.5368 86.9308 70.5098 90.1916 64.9998 92.4C59.4301 94.6052 53.4902 95.7253 47.4998 95.7C41.5095 95.7253 35.5696 94.6052 29.9998 92.4C24.5254 90.1802 19.5333 86.92 15.2998 82.8C11.0473 78.7469 7.64744 73.8851 5.29984 68.5C3.02408 63.1229 1.86723 57.3387 1.89984 51.5C1.89984 39.9 6.69984 28.6 15.2998 20.4C21.7649 14.1593 29.9028 9.93003 38.7255 8.22587C47.5481 6.5217 56.6757 7.4159 64.9998 10.8C70.5098 13.0084 75.5368 16.2692 79.7998 20.4C83.9805 24.4713 87.3115 29.3319 89.5998 34.7C91.8966 40.0389 93.0873 45.788 93.0998 51.5999Z"
          fill="black"
        />
        <path
          d="M94.7999 47.7C94.8001 53.9436 93.577 60.1267 91.1999 65.9C88.8496 71.6858 85.3838 76.9525 80.9999 81.4C76.5958 85.815 71.3621 89.3154 65.5999 91.7C59.863 94.0818 53.7116 95.3053 47.4999 95.3C41.2683 95.2934 35.0997 94.0529 29.3499 91.65C23.6002 89.2472 18.3832 85.7295 13.9999 81.3C5.14866 72.3583 0.188614 60.2817 0.199921 47.7C0.162186 35.0837 5.12422 22.9663 13.9999 14C18.3832 9.57053 23.6002 6.0529 29.3499 3.65002C35.0997 1.24715 41.2683 0.00659984 47.4999 0C53.7184 0.026394 59.87 1.28393 65.5999 3.70001C71.3621 6.08461 76.5958 9.58506 80.9999 14C85.3838 18.4475 88.8496 23.7143 91.1999 29.5C93.577 35.2733 94.8001 41.4565 94.7999 47.7Z"
          fill="url(#paint0_linear_130_21)"
          stroke="#CDCDCD"
          stroke-width="0.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M91.1 47.7C91.1199 59.3037 86.5554 70.4456 78.4 78.7C74.357 82.7849 69.5446 86.0281 64.2409 88.2423C58.9372 90.4565 53.2473 91.5977 47.5 91.6C41.7526 91.5977 36.0627 90.4565 30.759 88.2423C25.4553 86.0281 20.6429 82.7849 16.6 78.7C8.44457 70.4456 3.88001 59.3037 3.89997 47.7C3.88001 36.0963 8.44457 24.9545 16.6 16.7C20.6429 12.6151 25.4553 9.37189 30.759 7.15771C36.0627 4.94354 41.7526 3.8023 47.5 3.79999C53.2473 3.8023 58.9372 4.94354 64.2409 7.15771C69.5446 9.37189 74.357 12.6151 78.4 16.7C86.5554 24.9545 91.1199 36.0963 91.1 47.7Z"
          fill="url(#paint1_radial_130_21)"
        />
        <path
          d="M47.5 6.09998C47.3408 6.09998 47.1882 6.16324 47.0757 6.27576C46.9632 6.38828 46.8999 6.54088 46.8999 6.70001V14.1C46.8999 14.1788 46.9155 14.2568 46.9456 14.3296C46.9758 14.4024 47.02 14.4686 47.0757 14.5243C47.1314 14.58 47.1975 14.6242 47.2703 14.6544C47.3431 14.6845 47.4212 14.7 47.5 14.7C47.5787 14.7 47.6568 14.6845 47.7296 14.6544C47.8024 14.6242 47.8685 14.58 47.9242 14.5243C47.9799 14.4686 48.0241 14.4024 48.0543 14.3296C48.0844 14.2568 48.1 14.1788 48.1 14.1V6.70001C48.1 6.54088 48.0367 6.38828 47.9242 6.27576C47.8117 6.16324 47.6591 6.09998 47.5 6.09998ZM43.3 6.40002C43.2041 6.38212 43.1054 6.38778 43.0122 6.41663C42.9191 6.44547 42.8344 6.49662 42.7655 6.56555C42.6966 6.63449 42.6454 6.71919 42.6166 6.81232C42.5878 6.90544 42.5821 7.00414 42.6 7.09998L43 10.1C43 10.1788 43.0155 10.2568 43.0456 10.3296C43.0758 10.4024 43.12 10.4686 43.1757 10.5243C43.2314 10.58 43.2976 10.6242 43.3703 10.6544C43.4431 10.6845 43.5212 10.7 43.6 10.7C43.6788 10.7 43.7568 10.6845 43.8296 10.6544C43.9024 10.6242 43.9685 10.58 44.0242 10.5243C44.0799 10.4686 44.1241 10.4024 44.1543 10.3296C44.1844 10.2568 44.2 10.1788 44.2 10.1L43.8999 6.90002C43.8761 6.75878 43.8025 6.6307 43.6924 6.539C43.5824 6.4473 43.4432 6.39802 43.3 6.40002ZM51.7 6.40002C51.5567 6.39802 51.4175 6.4473 51.3075 6.539C51.1974 6.6307 51.1238 6.75878 51.1 6.90002L50.8 10C50.7868 10.0854 50.7906 10.1725 50.8112 10.2563C50.8317 10.3402 50.8685 10.4192 50.9196 10.4889C50.9707 10.5585 51.035 10.6174 51.1088 10.6622C51.1827 10.707 51.2646 10.7369 51.35 10.75C51.4353 10.7631 51.5224 10.7593 51.6063 10.7388C51.6902 10.7182 51.7692 10.6814 51.8389 10.6303C51.9085 10.5792 51.9674 10.515 52.0122 10.4412C52.057 10.3673 52.0868 10.2854 52.1 10.2L52.3999 7.09998C52.4179 7.00414 52.4121 6.90544 52.3833 6.81232C52.3545 6.71919 52.3034 6.63449 52.2344 6.56555C52.1655 6.49662 52.0808 6.44547 51.9877 6.41663C51.8945 6.38778 51.7958 6.38212 51.7 6.40002ZM39.1 7C38.9935 6.97436 38.882 6.97836 38.7777 7.01154C38.6733 7.04471 38.58 7.10582 38.5079 7.18823C38.4358 7.27065 38.3876 7.37122 38.3686 7.47906C38.3496 7.58691 38.3604 7.69787 38.3999 7.79999L40 15C40.0197 15.0788 40.0547 15.1529 40.103 15.2182C40.1514 15.2835 40.2121 15.3385 40.2818 15.3803C40.3514 15.4221 40.4286 15.4498 40.5089 15.4617C40.5893 15.4737 40.6712 15.4697 40.75 15.45C40.8287 15.4303 40.9029 15.3953 40.9681 15.3469C41.0334 15.2986 41.0885 15.2379 41.1303 15.1682C41.1721 15.0986 41.1997 15.0214 41.2117 14.941C41.2236 14.8607 41.2196 14.7788 41.2 14.7L39.7 7.5C39.6761 7.35876 39.6025 7.23074 39.4924 7.13904C39.3824 7.04734 39.2432 6.998 39.1 7ZM56 7C55.921 6.98572 55.8401 6.9874 55.7618 7.00494C55.6836 7.02249 55.6096 7.05556 55.5444 7.10217C55.4791 7.14879 55.4238 7.20798 55.3819 7.27631C55.3399 7.34464 55.312 7.42072 55.3 7.5L53.8 14.7C53.7691 14.7855 53.7582 14.8768 53.7678 14.9672C53.7774 15.0575 53.8075 15.1445 53.8556 15.2215C53.9038 15.2985 53.9688 15.3636 54.0457 15.4119C54.1227 15.4601 54.2096 15.4902 54.3 15.5C54.3854 15.5308 54.4768 15.5418 54.5671 15.5322C54.6574 15.5225 54.7444 15.4925 54.8214 15.4443C54.8985 15.3962 54.9636 15.3312 55.0118 15.2542C55.0601 15.1772 55.0902 15.0903 55.1 15L56.6 7.79999C56.6331 7.7067 56.6427 7.60668 56.6278 7.50879C56.6129 7.4109 56.574 7.31822 56.5146 7.23901C56.4552 7.1598 56.3771 7.09651 56.2873 7.05481C56.1975 7.01311 56.0988 6.99428 56 7ZM35 8.09998C34.881 8.05735 34.7515 8.0534 34.6301 8.08868C34.5088 8.12397 34.4016 8.19673 34.324 8.29651C34.2464 8.39629 34.2023 8.51802 34.198 8.64435C34.1937 8.77068 34.2294 8.89515 34.3 9L35.3 12C35.3 12.3 35.7 12.5 36.1 12.3C36.1814 12.2778 36.2573 12.2387 36.3225 12.1852C36.3878 12.1317 36.4411 12.0649 36.4788 11.9894C36.5166 11.9139 36.538 11.8313 36.5416 11.7469C36.5453 11.6626 36.5311 11.5785 36.5 11.5L35.5 8.5C35.4629 8.39292 35.3963 8.29851 35.3078 8.22772C35.2193 8.15693 35.1126 8.11263 35 8.09998ZM60 8.09998C59.8744 8.11963 59.7583 8.17863 59.6685 8.26849C59.5786 8.35835 59.5196 8.47442 59.5 8.59998L58.5 11.6C58.4678 11.7455 58.4909 11.8978 58.5649 12.0272C58.6388 12.1566 58.7582 12.2538 58.8999 12.3C58.9784 12.3311 59.0626 12.3453 59.1469 12.3417C59.2313 12.338 59.3139 12.3166 59.3894 12.2789C59.4649 12.2411 59.5316 12.1878 59.5851 12.1226C59.6386 12.0573 59.6778 11.9815 59.7 11.9L60.7 8.90002C60.7179 8.80419 60.7121 8.70543 60.6833 8.6123C60.6545 8.51918 60.6034 8.43448 60.5344 8.36554C60.4655 8.2966 60.3808 8.24552 60.2877 8.21667C60.1945 8.18783 60.0958 8.1821 60 8.20001V8.09998ZM31 9.59998C30.8715 9.5599 30.7334 9.56417 30.6076 9.61206C30.4819 9.65995 30.3759 9.74871 30.3067 9.86407C30.2375 9.97944 30.2091 10.1147 30.226 10.2482C30.2429 10.3816 30.3042 10.5055 30.3999 10.6L33.3999 17.3C33.4323 17.3726 33.4788 17.438 33.5367 17.4925C33.5946 17.547 33.6628 17.5894 33.7372 17.6173C33.8116 17.6452 33.8909 17.6581 33.9703 17.6551C34.0498 17.6521 34.1278 17.6334 34.2 17.6C34.2725 17.5676 34.338 17.5211 34.3925 17.4632C34.4469 17.4053 34.4894 17.3372 34.5173 17.2628C34.5452 17.1883 34.558 17.1091 34.5551 17.0297C34.5521 16.9502 34.5334 16.8721 34.5 16.8L31.5 10C31.4568 9.87731 31.375 9.77197 31.2668 9.69983C31.1585 9.62768 31.0298 9.59261 30.8999 9.59998H31ZM64.1 9.59998C63.9701 9.59261 63.8414 9.62768 63.7332 9.69983C63.6249 9.77197 63.5431 9.87731 63.5 10L60.5 16.8C60.4666 16.8721 60.4478 16.9502 60.4449 17.0297C60.4419 17.1091 60.4547 17.1883 60.4826 17.2628C60.5105 17.3372 60.553 17.4053 60.6075 17.4632C60.6619 17.5211 60.7274 17.5676 60.8 17.6C61.2 17.8 61.5 17.6 61.7 17.3L64.7 10.6C64.7957 10.5055 64.857 10.3816 64.8739 10.2482C64.8908 10.1147 64.8624 9.97944 64.7932 9.86407C64.724 9.74871 64.618 9.65995 64.4923 9.61206C64.3665 9.56417 64.2284 9.5599 64.1 9.59998ZM27.2 11.6C27.0715 11.5599 26.9334 11.5642 26.8076 11.6121C26.6819 11.6599 26.5759 11.7487 26.5067 11.8641C26.4375 11.9794 26.4091 12.1147 26.426 12.2482C26.4429 12.3816 26.5042 12.5055 26.6 12.6L28.2 15.3C28.2825 15.4292 28.4114 15.522 28.5602 15.5592C28.7089 15.5964 28.8663 15.5752 29 15.5C29.0864 15.4697 29.1647 15.42 29.2289 15.3547C29.2932 15.2895 29.3416 15.2104 29.3706 15.1235C29.3995 15.0367 29.4082 14.9443 29.396 14.8536C29.3838 14.7628 29.3509 14.6761 29.3 14.6L27.7 11.9C27.649 11.8116 27.5763 11.7377 27.4888 11.6852C27.4014 11.6327 27.3019 11.6033 27.2 11.6ZM67.8 11.6C67.698 11.6033 67.5986 11.6327 67.5111 11.6852C67.4236 11.7377 67.3509 11.8116 67.3 11.9L65.7 14.6C65.6265 14.6766 65.5748 14.7714 65.5499 14.8746C65.5251 14.9778 65.5281 15.0858 65.5586 15.1874C65.5891 15.2891 65.646 15.3808 65.7235 15.4533C65.8011 15.5258 65.8965 15.5764 66 15.6C66.0721 15.6334 66.1501 15.6521 66.2296 15.6551C66.309 15.6581 66.3883 15.6452 66.4627 15.6173C66.5371 15.5894 66.6053 15.547 66.6632 15.4925C66.7211 15.438 66.7676 15.3726 66.8 15.3L68.3999 12.6C68.4957 12.5055 68.557 12.3816 68.5739 12.2482C68.5908 12.1147 68.5624 11.9794 68.4932 11.8641C68.424 11.7487 68.318 11.6599 68.1923 11.6121C68.0665 11.5642 67.9284 11.5599 67.8 11.6ZM23.6 13.9C23.4797 13.8889 23.3588 13.9144 23.2532 13.9731C23.1477 14.0319 23.0623 14.1211 23.0082 14.2291C22.9542 14.3372 22.9341 14.459 22.9504 14.5787C22.9668 14.6984 23.0189 14.8104 23.1 14.9L27.3999 20.9C27.5999 21.2 28 21.2 28.3 21C28.3706 20.9512 28.4298 20.8878 28.4738 20.8141C28.5178 20.7404 28.5455 20.6581 28.555 20.5728C28.5645 20.4874 28.5555 20.4011 28.5288 20.3196C28.502 20.238 28.4581 20.1631 28.3999 20.1L24.1 14.1C24.038 14.03 23.9605 13.9755 23.8736 13.9407C23.7868 13.906 23.6931 13.8921 23.6 13.9ZM71.5 13.9C71.3814 13.8846 71.261 13.9049 71.1541 13.9583C71.0472 14.0118 70.9587 14.0959 70.8999 14.2L66.6 20.2C66.5462 20.2696 66.5084 20.3502 66.4893 20.4361C66.4701 20.522 66.4701 20.611 66.4892 20.6968C66.5082 20.7827 66.546 20.8634 66.5997 20.933C66.6534 21.0027 66.7218 21.0597 66.8 21.1C66.8696 21.1537 66.9502 21.1915 67.036 21.2107C67.1219 21.2298 67.2109 21.2299 67.2968 21.2108C67.3827 21.1917 67.4633 21.154 67.533 21.1003C67.6026 21.0466 67.6596 20.9782 67.7 20.9L72 14.9C72.081 14.8104 72.1331 14.6984 72.1495 14.5787C72.1659 14.459 72.1457 14.3372 72.0917 14.2291C72.0376 14.1211 71.9523 14.0319 71.8467 13.9731C71.7411 13.9144 71.6203 13.8889 71.5 13.9ZM20.3 16.6C20.2277 16.5671 20.1497 16.5489 20.0704 16.5462C19.9912 16.5435 19.9121 16.5564 19.8378 16.5843C19.7635 16.6121 19.6955 16.6544 19.6375 16.7086C19.5795 16.7627 19.5328 16.8278 19.5 16.9C19.4671 16.9723 19.4488 17.0502 19.4462 17.1295C19.4435 17.2088 19.4564 17.2878 19.4843 17.3621C19.5121 17.4364 19.5543 17.5045 19.6085 17.5624C19.6627 17.6204 19.7277 17.6672 19.8 17.7L21.8 20C21.8547 20.0825 21.929 20.1502 22.0162 20.197C22.1035 20.2438 22.2009 20.2683 22.3 20.2683C22.399 20.2683 22.4964 20.2438 22.5837 20.197C22.6709 20.1502 22.7452 20.0825 22.8 20C22.8983 19.89 22.9527 19.7476 22.9527 19.6C22.9527 19.4524 22.8983 19.31 22.8 19.2L20.8 16.9C20.749 16.8116 20.6763 16.7377 20.5888 16.6852C20.5014 16.6327 20.4019 16.6033 20.3 16.6ZM74.7 16.6C74.598 16.6033 74.4985 16.6327 74.4111 16.6852C74.3236 16.7377 74.2509 16.8116 74.2 16.9L72.2 19.2C72.1361 19.2563 72.085 19.3256 72.05 19.4031C72.0149 19.4807 71.9968 19.5649 71.9968 19.65C71.9968 19.7351 72.0149 19.8193 72.05 19.8969C72.085 19.9744 72.1361 20.0437 72.2 20.1C72.2547 20.1825 72.329 20.2502 72.4162 20.297C72.5035 20.3438 72.6009 20.3683 72.7 20.3683C72.799 20.3683 72.8964 20.3438 72.9837 20.297C73.0709 20.2502 73.1452 20.1825 73.2 20.1L75.2 17.7C75.281 17.6104 75.3331 17.4984 75.3495 17.3787C75.3659 17.259 75.3457 17.1372 75.2917 17.0291C75.2376 16.9211 75.1523 16.8319 75.0467 16.7731C74.9411 16.7144 74.8203 16.6889 74.7 16.7V16.6ZM17.2 19.6C17.0408 19.5469 16.8671 19.5593 16.7171 19.6343C16.5671 19.7094 16.453 19.8409 16.4 20C16.3469 20.1591 16.3593 20.3328 16.4343 20.4828C16.5093 20.6329 16.6408 20.7469 16.8 20.8L22.3 25.8C22.3631 25.8581 22.438 25.9021 22.5195 25.9288C22.6011 25.9556 22.6874 25.9645 22.7727 25.955C22.858 25.9455 22.9403 25.9179 23.014 25.8739C23.0877 25.8299 23.1511 25.7706 23.2 25.7C23.2825 25.6453 23.3501 25.5709 23.397 25.4837C23.4438 25.3965 23.4683 25.299 23.4683 25.2C23.4683 25.101 23.4438 25.0035 23.397 24.9163C23.3501 24.829 23.2825 24.7547 23.2 24.7L17.7 19.8C17.6291 19.7476 17.5475 19.7115 17.4611 19.6942C17.3747 19.6769 17.2855 19.6789 17.2 19.7V19.6ZM77.8 19.6C77.6458 19.6126 77.5025 19.6843 77.3999 19.8L71.8999 24.8C71.8343 24.8591 71.7809 24.9305 71.7429 25.0103C71.7048 25.09 71.6829 25.1764 71.6782 25.2646C71.6736 25.3529 71.6863 25.4411 71.7158 25.5244C71.7453 25.6077 71.7909 25.6843 71.85 25.75C71.9091 25.8157 71.9805 25.8691 72.0602 25.9071C72.14 25.9452 72.2264 25.9671 72.3146 25.9717C72.4028 25.9764 72.4911 25.9636 72.5744 25.9341C72.6576 25.9047 72.7343 25.8591 72.8 25.8L78.2 20.8C78.3145 20.7264 78.4006 20.6161 78.4441 20.4871C78.4877 20.3581 78.486 20.2181 78.4395 20.0901C78.393 19.9622 78.3043 19.8539 78.1881 19.783C78.0719 19.7121 77.935 19.6828 77.8 19.7V19.6ZM14.6 23C14.5212 22.9737 14.438 22.9632 14.3551 22.9691C14.2723 22.975 14.1914 22.9972 14.1171 23.0343C14.0428 23.0714 13.9766 23.1229 13.9222 23.1856C13.8677 23.2484 13.8262 23.3212 13.8 23.4C13.7737 23.4788 13.7632 23.562 13.7691 23.6448C13.775 23.7277 13.7971 23.8085 13.8343 23.8828C13.8714 23.9571 13.9228 24.0234 13.9856 24.0778C14.0483 24.1322 14.1212 24.1737 14.2 24.2L16.7 26C16.7696 26.0538 16.8502 26.0916 16.936 26.1107C17.0219 26.1299 17.1109 26.1299 17.1968 26.1108C17.2827 26.0917 17.3633 26.054 17.433 26.0002C17.5026 25.9465 17.5596 25.8782 17.6 25.8C17.6856 25.678 17.7228 25.5286 17.7043 25.3807C17.6859 25.2328 17.613 25.0971 17.5 25L15 23.1C14.8705 23.0542 14.7294 23.0542 14.6 23.1V23ZM80.3999 23C80.2818 23.0343 80.1771 23.1042 80.1 23.2L77.5 25C77.4218 25.0403 77.3534 25.0973 77.2997 25.167C77.246 25.2367 77.2082 25.3173 77.1891 25.4031C77.1701 25.489 77.1701 25.5781 77.1893 25.6639C77.2084 25.7498 77.2462 25.8304 77.3 25.9C77.5 26.2 77.9 26.2 78.2 26L80.7 24.2C80.8591 24.147 80.9906 24.0328 81.0656 23.8828C81.1407 23.7328 81.153 23.5592 81.1 23.4C81.0469 23.2409 80.9328 23.1093 80.7828 23.0343C80.6328 22.9593 80.4591 22.947 80.3 23H80.3999ZM12.2 26.6C12.1212 26.5803 12.0393 26.5763 11.9589 26.5883C11.8786 26.6002 11.8014 26.6279 11.7318 26.6697C11.6621 26.7115 11.6014 26.7665 11.553 26.8318C11.5047 26.897 11.4696 26.9712 11.45 27.05C11.4303 27.1288 11.4263 27.2107 11.4382 27.291C11.4502 27.3713 11.4778 27.4485 11.5196 27.5182C11.5614 27.5878 11.6165 27.6485 11.6818 27.6969C11.747 27.7453 11.8212 27.7803 11.9 27.8L18.3 31.5C18.4458 31.5796 18.6173 31.5979 18.7767 31.551C18.9361 31.5041 19.0704 31.3959 19.15 31.25C19.2295 31.1041 19.2479 30.9326 19.201 30.7732C19.1541 30.6138 19.0458 30.4796 18.9 30.4L12.6 26.7C12.4826 26.6205 12.3409 26.585 12.2 26.6ZM82.8 26.6C82.6705 26.5542 82.5294 26.5542 82.3999 26.6L76.1 30.4C76.0042 30.4945 75.9429 30.6184 75.926 30.7518C75.9091 30.8853 75.9375 31.0206 76.0067 31.1359C76.0759 31.2513 76.1819 31.3401 76.3076 31.3879C76.4334 31.4358 76.5715 31.4401 76.7 31.4L83.1 27.8C83.2591 27.7602 83.3959 27.6588 83.4803 27.5182C83.5647 27.3775 83.5897 27.2091 83.55 27.05C83.5102 26.8909 83.4088 26.7541 83.2682 26.6697C83.1275 26.5853 82.9591 26.5602 82.8 26.6ZM10.4 30.4C10.2408 30.3602 10.0724 30.3853 9.93176 30.4697C9.7911 30.5541 9.68974 30.6908 9.64996 30.85C9.61017 31.0091 9.63524 31.1775 9.71963 31.3182C9.80402 31.4588 9.94082 31.5602 10.1 31.6L12.9 32.9C13.0591 32.9663 13.238 32.9667 13.3974 32.9011C13.5568 32.8354 13.6837 32.7091 13.75 32.55C13.8163 32.3909 13.8166 32.2119 13.751 32.0525C13.6854 31.8931 13.5591 31.7663 13.4 31.7L10.6 30.4C10.5338 30.3888 10.4662 30.3888 10.4 30.4ZM84.7 30.4C84.6016 30.3746 84.4983 30.3746 84.3999 30.4L81.6 31.7C81.5135 31.7303 81.4352 31.78 81.371 31.8452C81.3067 31.9105 81.2583 31.9896 81.2293 32.0765C81.2004 32.1633 81.1917 32.2557 81.2039 32.3464C81.2162 32.4372 81.249 32.5239 81.3 32.6C81.4 32.9 81.8 33 82.1 32.9L84.8999 31.6C85.0591 31.5735 85.2012 31.4849 85.2949 31.3536C85.3887 31.2223 85.4265 31.0592 85.3999 30.9C85.3734 30.7409 85.2848 30.5988 85.1535 30.505C85.0222 30.4112 84.8591 30.3735 84.7 30.4ZM8.69995 34.4C8.54082 34.3868 8.38295 34.4373 8.26105 34.5404C8.13915 34.6436 8.06322 34.7909 8.04996 34.95C8.0367 35.1091 8.08719 35.267 8.19034 35.3889C8.29348 35.5108 8.44082 35.5867 8.59995 35.6L15.6 37.9C15.6787 37.9263 15.7619 37.9367 15.8448 37.9308C15.9276 37.925 16.0085 37.9028 16.0828 37.8657C16.1571 37.8285 16.2233 37.7771 16.2777 37.7144C16.3322 37.6516 16.3737 37.5788 16.4 37.5C16.4262 37.4212 16.4367 37.338 16.4308 37.2552C16.4249 37.1723 16.4028 37.0914 16.3656 37.0172C16.3285 36.9429 16.2771 36.8766 16.2143 36.8222C16.1516 36.7678 16.0787 36.7263 16 36.7L8.99995 34.4C8.90157 34.3746 8.79834 34.3746 8.69995 34.4ZM86.3 34.4C86.2016 34.3746 86.0983 34.3746 86 34.4L79 36.7C78.9185 36.7222 78.8427 36.7613 78.7774 36.8148C78.7121 36.8683 78.6588 36.9351 78.6211 37.0106C78.5833 37.0861 78.5619 37.1687 78.5583 37.2531C78.5547 37.3374 78.5689 37.4215 78.6 37.5C78.8 37.8 79.0999 38 79.3999 37.9L86.3999 35.6C86.5591 35.5867 86.7064 35.5108 86.8096 35.3889C86.9127 35.267 86.9632 35.1091 86.95 34.95C86.9367 34.7909 86.8608 34.6436 86.7389 34.5404C86.617 34.4373 86.4591 34.3868 86.3 34.4ZM7.69995 38.5C7.54082 38.5 7.38821 38.5632 7.27569 38.6757C7.16317 38.7882 7.09995 38.9408 7.09995 39.1C7.08567 39.1789 7.08736 39.2599 7.1049 39.3381C7.12245 39.4164 7.15551 39.4903 7.20213 39.5556C7.24874 39.6209 7.30796 39.6761 7.37629 39.7181C7.44462 39.7601 7.52067 39.7879 7.59995 39.8L10.6 40.5C10.6789 40.5143 10.7598 40.5126 10.8381 40.4951C10.9163 40.4775 10.9903 40.4444 11.0555 40.3978C11.1208 40.3512 11.1761 40.292 11.218 40.2237C11.26 40.1554 11.2879 40.0793 11.3 40C11.3311 39.9215 11.3453 39.8374 11.3416 39.7531C11.338 39.6687 11.3166 39.5861 11.2788 39.5106C11.2411 39.4351 11.1878 39.3683 11.1225 39.3148C11.0572 39.2613 10.9814 39.2222 10.9 39.2L7.89996 38.6C7.83376 38.5888 7.76615 38.5888 7.69995 38.6V38.5ZM87.3 38.5C87.2667 38.4979 87.2333 38.4979 87.2 38.5L84.2 39.2C84.1096 39.2098 84.0227 39.2399 83.9457 39.2881C83.8688 39.3364 83.8037 39.4015 83.7556 39.4785C83.7075 39.5556 83.6774 39.6425 83.6678 39.7328C83.6581 39.8232 83.6691 39.9145 83.7 40C83.7 40.3 84.0999 40.5 84.3999 40.5L87.3999 39.8C87.4792 39.7879 87.5553 39.7601 87.6236 39.7181C87.6919 39.6761 87.7512 39.6209 87.7978 39.5556C87.8444 39.4903 87.8775 39.4164 87.895 39.3381C87.9126 39.2599 87.9142 39.1789 87.8999 39.1C87.8761 38.9587 87.8025 38.8307 87.6924 38.739C87.5824 38.6473 87.4432 38.598 87.3 38.6V38.5ZM6.89996 42.7C6.75871 42.7239 6.63067 42.7975 6.53896 42.9075C6.44726 43.0176 6.39795 43.1568 6.39996 43.3C6.38567 43.3789 6.38736 43.4599 6.40491 43.5381C6.42246 43.6164 6.45551 43.6904 6.50212 43.7556C6.54873 43.8209 6.60796 43.8761 6.67629 43.9181C6.74462 43.9601 6.82068 43.9879 6.89996 44L14.2 44.8C14.2867 44.8147 14.3756 44.8101 14.4604 44.7866C14.5451 44.7631 14.6237 44.7212 14.6905 44.6639C14.7573 44.6067 14.8107 44.5355 14.8469 44.4553C14.8831 44.3751 14.9012 44.288 14.9 44.2C14.9142 44.1211 14.9126 44.0401 14.895 43.9619C14.8775 43.8836 14.8444 43.8096 14.7978 43.7444C14.7512 43.6791 14.692 43.6239 14.6236 43.5819C14.5553 43.5399 14.4792 43.5121 14.4 43.5L7.09995 42.7C7.03376 42.6888 6.96615 42.6888 6.89996 42.7ZM88.1 42.8C88.0338 42.7888 87.9661 42.7888 87.8999 42.8L80.6 43.6C80.5207 43.6121 80.4446 43.64 80.3763 43.6819C80.308 43.7239 80.2487 43.7792 80.2021 43.8444C80.1555 43.9097 80.1225 43.9836 80.1049 44.0618C80.0874 44.1401 80.0857 44.2211 80.1 44.3C80.112 44.3793 80.1399 44.4554 80.1819 44.5237C80.2238 44.592 80.2791 44.6512 80.3444 44.6978C80.4096 44.7444 80.4836 44.7775 80.5618 44.795C80.6401 44.8126 80.721 44.8143 80.8 44.8L88.1 44.1C88.1792 44.0879 88.2553 44.06 88.3236 44.0181C88.392 43.9761 88.4512 43.9208 88.4978 43.8556C88.5444 43.7903 88.5775 43.7164 88.595 43.6381C88.6125 43.5599 88.6142 43.4789 88.6 43.4C88.602 43.2568 88.5527 43.1176 88.461 43.0075C88.3693 42.8975 88.2412 42.8238 88.1 42.8ZM6.79996 47.1C6.64083 47.1 6.48821 47.1632 6.37569 47.2758C6.26316 47.3883 6.19995 47.5409 6.19995 47.7C6.19995 48 6.49996 48.3 6.79996 48.3H9.89996C10.0591 48.3 10.2117 48.2368 10.3242 48.1243C10.4367 48.0117 10.5 47.8591 10.5 47.7C10.5 47.5409 10.4367 47.3883 10.3242 47.2758C10.2117 47.1632 10.0591 47.1 9.89996 47.1H6.79996ZM85.1 47.1C84.9408 47.1 84.7882 47.1632 84.6757 47.2758C84.5632 47.3883 84.5 47.5409 84.5 47.7C84.5 48 84.7 48.3 85.1 48.3H88.1C88.1867 48.3147 88.2756 48.3101 88.3604 48.2866C88.4451 48.2631 88.5237 48.2212 88.5905 48.1639C88.6573 48.1067 88.7107 48.0355 88.7469 47.9553C88.7831 47.8751 88.8012 47.788 88.8 47.7C88.8 47.5409 88.7367 47.3883 88.6242 47.2758C88.5117 47.1632 88.3591 47.1 88.2 47.1H85.1ZM14.4 50.5C14.3338 50.4888 14.2661 50.4888 14.2 50.5L6.89996 51.3C6.82068 51.3121 6.74462 51.3399 6.67629 51.3819C6.60796 51.4239 6.54873 51.4792 6.50212 51.5444C6.45551 51.6097 6.42246 51.6836 6.40491 51.7618C6.38736 51.8401 6.38567 51.9211 6.39996 52C6.39872 52.088 6.41685 52.1751 6.45305 52.2553C6.48925 52.3355 6.54263 52.4067 6.60942 52.4639C6.67621 52.5212 6.75478 52.563 6.83955 52.5865C6.92432 52.6101 7.01322 52.6146 7.09995 52.6L14.4 51.8C14.4792 51.7879 14.5553 51.7601 14.6236 51.7181C14.692 51.6761 14.7512 51.6209 14.7978 51.5556C14.8444 51.4903 14.8775 51.4164 14.895 51.3381C14.9126 51.2599 14.9142 51.1789 14.9 51.1C14.902 50.9567 14.8527 50.8176 14.7609 50.7075C14.6692 50.5975 14.5412 50.5239 14.4 50.5ZM80.6 50.5C80.5207 50.5121 80.4446 50.5399 80.3763 50.5819C80.308 50.6239 80.2487 50.6791 80.2021 50.7444C80.1555 50.8096 80.1225 50.8836 80.1049 50.9619C80.0874 51.0401 80.0857 51.1211 80.1 51.2C80.0857 51.2789 80.0874 51.3599 80.1049 51.4382C80.1225 51.5164 80.1555 51.5903 80.2021 51.6556C80.2487 51.7208 80.308 51.7761 80.3763 51.8181C80.4446 51.86 80.5207 51.8879 80.6 51.9L87.8999 52.6C87.9789 52.6143 88.0598 52.6126 88.1381 52.595C88.2163 52.5775 88.2903 52.5444 88.3555 52.4978C88.4208 52.4512 88.4761 52.392 88.518 52.3237C88.56 52.2553 88.5879 52.1793 88.6 52.1C88.6142 52.0211 88.6125 51.9401 88.595 51.8619C88.5775 51.7836 88.5444 51.7097 88.4978 51.6444C88.4512 51.5792 88.392 51.5239 88.3236 51.4819C88.2553 51.44 88.1792 51.4121 88.1 51.4L80.8 50.6C80.7336 50.5904 80.6663 50.5904 80.6 50.6V50.5ZM10.7 54.9C10.6667 54.8972 10.6332 54.8972 10.6 54.9L7.59995 55.6C7.52067 55.6121 7.44462 55.64 7.37629 55.6819C7.30796 55.7239 7.24874 55.7792 7.20213 55.8444C7.15551 55.9097 7.12245 55.9836 7.1049 56.0618C7.08736 56.1401 7.08567 56.2211 7.09995 56.3C7.09995 56.7 7.49996 56.9 7.79996 56.8L10.8 56.2C10.8903 56.1903 10.9772 56.1601 11.0542 56.1119C11.1312 56.0636 11.1962 55.9985 11.2443 55.9214C11.2925 55.8444 11.3225 55.7574 11.3321 55.6671C11.3418 55.5768 11.3308 55.4855 11.3 55.4C11.2761 55.2588 11.2025 55.1307 11.0924 55.039C10.9824 54.9473 10.8432 54.898 10.7 54.9ZM84.3 54.9C84.1567 54.898 84.0175 54.9473 83.9075 55.039C83.7974 55.1307 83.7238 55.2588 83.7 55.4C83.6688 55.4785 83.6546 55.5626 83.6583 55.647C83.6619 55.7313 83.6833 55.814 83.7211 55.8895C83.7588 55.965 83.8121 56.0316 83.8774 56.0851C83.9427 56.1387 84.0185 56.1778 84.1 56.2L87.1 56.8C87.1854 56.8308 87.2768 56.8418 87.3671 56.8322C87.4574 56.8225 87.5444 56.7925 87.6214 56.7443C87.6985 56.6962 87.7636 56.6312 87.8118 56.5542C87.8601 56.4772 87.8902 56.3903 87.8999 56.3C87.9142 56.2211 87.9126 56.1401 87.895 56.0618C87.8775 55.9836 87.8444 55.9097 87.7978 55.8444C87.7512 55.7792 87.6919 55.7239 87.6236 55.6819C87.5553 55.64 87.4792 55.6121 87.3999 55.6L84.3999 54.9C84.3667 54.8972 84.3332 54.8972 84.3 54.9ZM15.8 57.4C15.7338 57.3888 15.6661 57.3888 15.6 57.4L8.59995 59.7C8.51851 59.7222 8.44266 59.7613 8.37737 59.8148C8.31208 59.8683 8.25882 59.9351 8.22107 60.0106C8.18332 60.0861 8.16192 60.1687 8.15828 60.2531C8.15464 60.3374 8.16884 60.4215 8.19995 60.5C8.19995 60.9 8.59995 61.1 8.99995 61L16 58.7C16.1723 58.6735 16.3271 58.5796 16.4303 58.4389C16.5334 58.2983 16.5765 58.1224 16.55 57.95C16.5234 57.7776 16.4295 57.6228 16.2889 57.5197C16.1482 57.4165 15.9723 57.3735 15.8 57.4ZM79.2 57.4C79.0567 57.398 78.9175 57.4473 78.8075 57.539C78.6974 57.6307 78.6238 57.7588 78.6 57.9C78.5689 57.9785 78.5547 58.0626 78.5583 58.147C78.5619 58.2313 78.5833 58.314 78.6211 58.3895C78.6588 58.465 78.7121 58.5316 78.7774 58.5851C78.8427 58.6387 78.9185 58.6778 79 58.7L86 61C86.0787 61.0263 86.1619 61.0368 86.2448 61.0309C86.3276 61.025 86.4085 61.0028 86.4828 60.9657C86.5571 60.9286 86.6233 60.8771 86.6777 60.8144C86.7322 60.7516 86.7737 60.6788 86.8 60.6C86.8262 60.5212 86.8367 60.438 86.8308 60.3552C86.8249 60.2723 86.8028 60.1915 86.7656 60.1172C86.7285 60.0429 86.6771 59.9766 86.6143 59.9222C86.5516 59.8678 86.4787 59.8263 86.3999 59.8L79.3999 57.5C79.3338 57.4888 79.2661 57.4888 79.2 57.5V57.4ZM13.2 62.4C13.1016 62.3746 12.9983 62.3746 12.9 62.4L10.1 63.7C9.94082 63.7663 9.81455 63.8931 9.74892 64.0525C9.68328 64.2119 9.68365 64.3909 9.74995 64.55C9.81626 64.7091 9.94306 64.8354 10.1025 64.9011C10.2619 64.9667 10.4408 64.9663 10.6 64.9L13.4 63.7C13.5723 63.6602 13.7219 63.5536 13.8156 63.4036C13.9094 63.2535 13.9397 63.0724 13.9 62.9C13.8602 62.7276 13.7535 62.5781 13.6035 62.4843C13.4535 62.3905 13.2723 62.3602 13.1 62.4H13.2ZM81.8 62.4C81.6276 62.3735 81.4517 62.4165 81.3111 62.5197C81.1704 62.6228 81.0765 62.7776 81.05 62.95C81.0234 63.1224 81.0665 63.2983 81.1696 63.4389C81.2728 63.5796 81.4276 63.6735 81.6 63.7L84.3999 64.9C84.5458 64.9663 84.7121 64.972 84.8621 64.9157C85.0121 64.8594 85.1336 64.7458 85.2 64.6C85.2663 64.4541 85.2719 64.2879 85.2156 64.1379C85.1594 63.9878 85.0458 63.8663 84.8999 63.8L82.1 62.5C82.0016 62.4746 81.8983 62.4746 81.8 62.5V62.4ZM18.6 63.8C18.4928 63.8059 18.3892 63.8405 18.3 63.9L11.9 67.6C11.7541 67.6928 11.6511 67.8398 11.6136 68.0086C11.576 68.1774 11.6071 68.3541 11.7 68.5C11.7928 68.6459 11.9398 68.7489 12.1085 68.7864C12.2773 68.8239 12.4541 68.7928 12.6 68.7L18.9 65C18.9787 64.9803 19.0529 64.9453 19.1181 64.8969C19.1834 64.8486 19.2385 64.7878 19.2803 64.7182C19.3221 64.6486 19.3497 64.5714 19.3617 64.491C19.3736 64.4107 19.3697 64.3288 19.35 64.25C19.3303 64.1712 19.2952 64.0971 19.2469 64.0318C19.1985 63.9665 19.1378 63.9115 19.0682 63.8697C18.9985 63.8279 18.9213 63.8002 18.841 63.7883C18.7606 63.7763 18.6787 63.7803 18.6 63.8ZM76.3999 63.8C76.3212 63.7803 76.2393 63.7763 76.1589 63.7883C76.0786 63.8002 76.0014 63.8279 75.9318 63.8697C75.8621 63.9115 75.8014 63.9665 75.753 64.0318C75.7047 64.0971 75.6696 64.1712 75.6499 64.25C75.6302 64.3288 75.6263 64.4107 75.6382 64.491C75.6502 64.5714 75.6778 64.6486 75.7196 64.7182C75.7614 64.7878 75.8165 64.8486 75.8818 64.8969C75.947 64.9453 76.0212 64.9803 76.1 65L82.3999 68.7C82.4697 68.7746 82.5574 68.83 82.6546 68.8612C82.7519 68.8924 82.8555 68.8983 82.9556 68.8782C83.0557 68.8582 83.1491 68.813 83.2269 68.7468C83.3046 68.6806 83.3642 68.5957 83.3999 68.5C83.4509 68.4239 83.4838 68.3371 83.496 68.2464C83.5082 68.1557 83.4996 68.0633 83.4706 67.9764C83.4416 67.8896 83.3932 67.8105 83.3289 67.7452C83.2647 67.68 83.1864 67.6303 83.1 67.6L76.7 63.9C76.6016 63.8746 76.4983 63.8746 76.3999 63.9V63.8ZM17 69.2C16.8818 69.2343 16.7771 69.3042 16.7 69.4L14.2 71.2C14.1294 71.2488 14.0701 71.3122 14.0261 71.3859C13.9821 71.4596 13.9544 71.5419 13.9449 71.6272C13.9354 71.7125 13.9444 71.7989 13.9711 71.8804C13.9979 71.962 14.0418 72.0368 14.1 72.1C14.3 72.4 14.7 72.4 14.9 72.2L17.4 70.4C17.4787 70.3738 17.5516 70.3322 17.6143 70.2778C17.6771 70.2234 17.7285 70.1571 17.7656 70.0828C17.8028 70.0085 17.8249 69.9277 17.8308 69.8448C17.8367 69.762 17.8262 69.6788 17.8 69.6C17.7737 69.5212 17.7322 69.4484 17.6777 69.3856C17.6233 69.3229 17.5571 69.2715 17.4828 69.2343C17.4085 69.1972 17.3276 69.175 17.2448 69.1691C17.1619 69.1632 17.0787 69.1737 17 69.2ZM78 69.2C77.8408 69.1337 77.6619 69.1333 77.5025 69.199C77.3431 69.2646 77.2163 69.3909 77.1499 69.55C77.0836 69.7091 77.0833 69.8881 77.1489 70.0475C77.2145 70.2069 77.3408 70.3337 77.5 70.4L80 72.3C80.0697 72.3745 80.1574 72.43 80.2547 72.4612C80.3519 72.4924 80.4555 72.4983 80.5556 72.4783C80.6557 72.4582 80.7491 72.413 80.8269 72.3468C80.9046 72.2806 80.9642 72.1956 81 72.1C81.0537 72.0303 81.0915 71.9498 81.1107 71.8639C81.1298 71.778 81.1298 71.689 81.1107 71.6031C81.0917 71.5173 81.0539 71.4367 81.0002 71.367C80.9465 71.2973 80.8781 71.2403 80.8 71.2L78.3 69.4C78.1826 69.3205 78.0409 69.285 77.8999 69.3L78 69.2ZM22.7 69.5C22.6068 69.4921 22.5131 69.506 22.4263 69.5408C22.3394 69.5755 22.2619 69.63 22.2 69.7L16.8 74.6C16.7361 74.6563 16.685 74.7256 16.65 74.8032C16.6149 74.8807 16.5968 74.9649 16.5968 75.05C16.5968 75.1351 16.6149 75.2193 16.65 75.2969C16.685 75.3745 16.7361 75.4437 16.8 75.5C16.91 75.5984 17.0524 75.6528 17.2 75.6528C17.3475 75.6528 17.4899 75.5984 17.6 75.5L23.1 70.6C23.2145 70.5264 23.3006 70.416 23.3441 70.287C23.3877 70.1581 23.386 70.0181 23.3395 69.8901C23.293 69.7622 23.2043 69.6539 23.0881 69.583C22.9719 69.5121 22.835 69.4828 22.7 69.5ZM72.3 69.5C72.1649 69.4828 72.028 69.5121 71.9118 69.583C71.7956 69.6539 71.7069 69.7622 71.6604 69.8901C71.6139 70.0181 71.6122 70.1581 71.6558 70.287C71.6993 70.416 71.7854 70.5264 71.8999 70.6L77.3 75.6C77.3547 75.6825 77.429 75.7502 77.5162 75.797C77.6035 75.8438 77.7009 75.8683 77.8 75.8683C77.899 75.8683 77.9964 75.8438 78.0837 75.797C78.1709 75.7502 78.2452 75.6825 78.3 75.6C78.3777 75.5374 78.4386 75.4565 78.4771 75.3644C78.5157 75.2724 78.5307 75.1722 78.5207 75.0729C78.5108 74.9737 78.4763 74.8784 78.4203 74.7958C78.3642 74.7133 78.2885 74.6459 78.2 74.6L72.7 69.6C72.5705 69.5542 72.4294 69.5542 72.3 69.6V69.5ZM27.8999 74.2C27.7814 74.1846 27.661 74.2049 27.5541 74.2583C27.4472 74.3118 27.3587 74.3959 27.3 74.5L23 80.5C22.9247 80.6336 22.9035 80.791 22.9407 80.9398C22.9779 81.0886 23.0707 81.2175 23.2 81.3C23.2631 81.3581 23.338 81.4021 23.4195 81.4288C23.5011 81.4556 23.5874 81.4645 23.6727 81.455C23.758 81.4455 23.8403 81.4179 23.914 81.3739C23.9877 81.3299 24.0511 81.2706 24.1 81.2L28.3999 75.2C28.481 75.1104 28.5331 74.9984 28.5495 74.8787C28.5658 74.759 28.5457 74.6372 28.4917 74.5291C28.4376 74.4211 28.3523 74.3319 28.2467 74.2731C28.1411 74.2144 28.0202 74.1889 27.8999 74.2ZM67.1 74.2C66.9797 74.1889 66.8588 74.2144 66.7532 74.2731C66.6477 74.3319 66.5623 74.4211 66.5082 74.5291C66.4542 74.6372 66.4341 74.759 66.4504 74.8787C66.4668 74.9984 66.5189 75.1104 66.6 75.2L70.8999 81.2C71.0999 81.5 71.5 81.6 71.8 81.4C71.8885 81.3541 71.9643 81.2867 72.0203 81.2042C72.0763 81.1216 72.1108 81.0263 72.1207 80.9271C72.1307 80.8278 72.1157 80.7276 72.0771 80.6356C72.0386 80.5435 71.9777 80.4626 71.8999 80.4L67.6 74.4C67.538 74.33 67.4605 74.2755 67.3737 74.2408C67.2868 74.2061 67.1931 74.1921 67.1 74.2ZM22.3 75.2C22.1458 75.2126 22.0025 75.2843 21.9 75.4L19.9 77.7C19.8361 77.7563 19.785 77.8256 19.75 77.9031C19.7149 77.9807 19.6968 78.0649 19.6968 78.15C19.6968 78.2351 19.7149 78.3193 19.75 78.3969C19.785 78.4744 19.8361 78.5437 19.9 78.6C19.9563 78.6638 20.0255 78.715 20.1031 78.75C20.1807 78.785 20.2648 78.8032 20.35 78.8032C20.4351 78.8032 20.5192 78.785 20.5968 78.75C20.6744 78.715 20.7437 78.6638 20.8 78.6L22.8 76.2C22.881 76.1104 22.9331 75.9984 22.9495 75.8787C22.9659 75.759 22.9457 75.6372 22.8917 75.5291C22.8376 75.4211 22.7523 75.3319 22.6467 75.2731C22.5411 75.2144 22.4203 75.1889 22.3 75.2ZM72.7 75.2C72.5796 75.1889 72.4588 75.2144 72.3532 75.2731C72.2476 75.3319 72.1623 75.4211 72.1082 75.5291C72.0542 75.6372 72.034 75.759 72.0504 75.8787C72.0668 75.9984 72.1189 76.1104 72.2 76.2L74.2 78.5C74.2547 78.5825 74.329 78.6502 74.4162 78.697C74.5035 78.7438 74.6009 78.7683 74.7 78.7683C74.799 78.7683 74.8964 78.7438 74.9837 78.697C75.0709 78.6502 75.1452 78.5825 75.2 78.5C75.2983 78.39 75.3527 78.2476 75.3527 78.1C75.3527 77.9524 75.2983 77.81 75.2 77.7L73.2 75.4C73.149 75.3116 73.0763 75.2377 72.9888 75.1852C72.9014 75.1327 72.8019 75.1033 72.7 75.1V75.2ZM33.8999 77.7C33.7701 77.6926 33.6414 77.7277 33.5332 77.7998C33.4249 77.8719 33.3431 77.9773 33.3 78.1L30.3 84.8C30.2498 84.8827 30.2205 84.9764 30.2144 85.0729C30.2083 85.1695 30.2256 85.2661 30.2649 85.3545C30.3042 85.4429 30.3643 85.5205 30.44 85.5806C30.5158 85.6408 30.605 85.6818 30.7 85.7C31 85.8 31.3 85.7 31.5 85.3L34.5 78.6C34.5576 78.5027 34.5866 78.3912 34.5836 78.2782C34.5806 78.1652 34.5457 78.0554 34.483 77.9613C34.4203 77.8672 34.3323 77.7928 34.2292 77.7466C34.126 77.7004 34.0119 77.6842 33.8999 77.7ZM61 77.7C60.8797 77.6889 60.7588 77.7144 60.6532 77.7731C60.5477 77.8319 60.4623 77.9211 60.4082 78.0291C60.3542 78.1372 60.3341 78.259 60.3504 78.3787C60.3668 78.4984 60.4189 78.6104 60.5 78.7L63.5 85.4C63.5323 85.4726 63.5788 85.5381 63.6367 85.5925C63.6946 85.647 63.7628 85.6894 63.8372 85.7173C63.9116 85.7452 63.9909 85.7581 64.0703 85.7551C64.1498 85.7522 64.2278 85.7334 64.3 85.7C64.3864 85.6697 64.4647 85.62 64.5289 85.5547C64.5932 85.4895 64.6416 85.4104 64.6706 85.3235C64.6996 85.2367 64.7082 85.1443 64.696 85.0536C64.6838 84.9628 64.6509 84.8761 64.6 84.8L61.6 78.1C61.5568 77.9773 61.475 77.8719 61.3667 77.7998C61.2585 77.7277 61.1298 77.6926 61 77.7ZM28.7 79.7C28.5873 79.7127 28.4806 79.7569 28.3921 79.8277C28.3036 79.8985 28.237 79.9929 28.2 80.1L26.6 82.8C26.5462 82.8696 26.5084 82.9502 26.4893 83.0361C26.4701 83.1219 26.4701 83.211 26.4892 83.2969C26.5082 83.3827 26.546 83.4634 26.5997 83.533C26.6534 83.6027 26.7218 83.6597 26.8 83.7C26.8766 83.7734 26.9714 83.8252 27.0746 83.85C27.1778 83.8749 27.2857 83.8719 27.3874 83.8414C27.489 83.8109 27.5808 83.7539 27.6533 83.6764C27.7258 83.5989 27.7764 83.5035 27.8 83.4L29.3 80.7C29.3958 80.6056 29.457 80.4816 29.4739 80.3481C29.4908 80.2147 29.4624 80.0794 29.3932 79.9641C29.324 79.8487 29.218 79.7599 29.0923 79.712C28.9665 79.6641 28.8284 79.6599 28.7 79.7ZM66.3 79.7C66.1715 79.6599 66.0334 79.6641 65.9076 79.712C65.7819 79.7599 65.6759 79.8487 65.6067 79.9641C65.5375 80.0794 65.5091 80.2147 65.526 80.3481C65.5429 80.4816 65.6042 80.6056 65.7 80.7L67.3 83.4C67.3303 83.4864 67.3799 83.5647 67.4452 83.629C67.5104 83.6932 67.5895 83.7417 67.6764 83.7706C67.7633 83.7996 67.8556 83.8083 67.9464 83.796C68.0371 83.7838 68.1239 83.751 68.2 83.7C68.2781 83.6597 68.3465 83.6027 68.4002 83.533C68.4539 83.4634 68.4917 83.3827 68.5108 83.2969C68.5298 83.211 68.5298 83.1219 68.5107 83.0361C68.4915 82.9502 68.4537 82.8696 68.3999 82.8L66.8 80.1C66.749 80.0116 66.6763 79.9377 66.5889 79.8852C66.5014 79.8327 66.4019 79.8034 66.3 79.8V79.7ZM40.6 79.9C40.521 79.8857 40.4401 79.8874 40.3618 79.905C40.2836 79.9225 40.2096 79.9556 40.1444 80.0022C40.0791 80.0488 40.0239 80.108 39.9819 80.1763C39.9399 80.2447 39.912 80.3207 39.8999 80.4L38.3999 87.6C38.3691 87.6854 38.3581 87.7768 38.3678 87.8671C38.3774 87.9575 38.4074 88.0444 38.4556 88.1215C38.5037 88.1985 38.5688 88.2636 38.6457 88.3118C38.7227 88.3601 38.8096 88.3903 38.8999 88.4C38.9854 88.4308 39.0768 88.4418 39.1671 88.4322C39.2574 88.4226 39.3444 88.3925 39.4214 88.3444C39.4985 88.2962 39.5636 88.2312 39.6118 88.1542C39.66 88.0773 39.6902 87.9903 39.7 87.9L41.2 80.7C41.2331 80.6067 41.2427 80.5066 41.2278 80.4088C41.2129 80.3109 41.174 80.2182 41.1146 80.139C41.0552 80.0598 40.9771 79.9965 40.8873 79.9548C40.7975 79.9131 40.6988 79.8943 40.6 79.9ZM54.3999 79.9C54.3011 79.8943 54.2024 79.9131 54.1126 79.9548C54.0228 79.9965 53.9447 80.0598 53.8853 80.139C53.8259 80.2182 53.787 80.3109 53.7721 80.4088C53.7572 80.5066 53.7668 80.6067 53.8 80.7L55.3 87.9C55.3197 87.9854 55.356 88.066 55.4068 88.1373C55.4577 88.2087 55.5221 88.2692 55.5964 88.3157C55.6707 88.3621 55.7534 88.3934 55.8398 88.4079C55.9262 88.4224 56.0146 88.4197 56.1 88.4C56.1853 88.3803 56.266 88.344 56.3373 88.2931C56.4086 88.2422 56.4692 88.1779 56.5156 88.1036C56.5621 88.0293 56.5934 87.9466 56.6079 87.8602C56.6223 87.7738 56.6197 87.6853 56.6 87.6L55 80.4C54.9761 80.2588 54.9025 80.1307 54.7924 80.039C54.6824 79.9473 54.5432 79.898 54.3999 79.9ZM47.5 80.6C47.412 80.5987 47.3248 80.6169 47.2447 80.6531C47.1645 80.6893 47.0932 80.7427 47.036 80.8094C46.9787 80.8762 46.9369 80.9548 46.9134 81.0396C46.8899 81.1244 46.8853 81.2133 46.8999 81.3V88.6C46.8999 88.7591 46.9632 88.9118 47.0757 89.0243C47.1882 89.1368 47.3408 89.2 47.5 89.2C47.6591 89.2 47.8117 89.1368 47.9242 89.0243C48.0367 88.9118 48.1 88.7591 48.1 88.6V81.3C48.1146 81.2133 48.11 81.1244 48.0865 81.0396C48.063 80.9548 48.0212 80.8762 47.9639 80.8094C47.9067 80.7427 47.8354 80.6893 47.7552 80.6531C47.6751 80.6169 47.5879 80.5987 47.5 80.6ZM35.8 83C35.6873 83.0127 35.5806 83.057 35.4921 83.1277C35.4037 83.1985 35.337 83.2929 35.3 83.4L34.3 86.4C34.2688 86.4785 34.2546 86.5626 34.2583 86.647C34.2619 86.7313 34.2833 86.814 34.3211 86.8895C34.3588 86.965 34.4121 87.0316 34.4774 87.0851C34.5427 87.1387 34.6185 87.1778 34.7 87.2C34.7784 87.2311 34.8626 87.2453 34.9469 87.2417C35.0313 87.2381 35.1139 87.2166 35.1894 87.1789C35.2649 87.1411 35.3316 87.0879 35.3851 87.0226C35.4386 86.9573 35.4778 86.8814 35.5 86.8L36.5 83.8C36.5395 83.6979 36.5503 83.5869 36.5313 83.4791C36.5123 83.3712 36.4641 83.2706 36.392 83.1882C36.3199 83.1058 36.2266 83.0447 36.1222 83.0115C36.0179 82.9784 35.9064 82.9744 35.8 83ZM59.2 83C59.0935 82.9744 58.982 82.9784 58.8777 83.0115C58.7733 83.0447 58.68 83.1058 58.6079 83.1882C58.5358 83.2706 58.4876 83.3712 58.4686 83.4791C58.4496 83.5869 58.4604 83.6979 58.5 83.8L59.5 86.8C59.5 87.1 59.9 87.3 60.3 87.2C60.3814 87.1778 60.4572 87.1387 60.5225 87.0851C60.5878 87.0316 60.6411 86.965 60.6788 86.8895C60.7166 86.814 60.738 86.7313 60.7416 86.647C60.7453 86.5626 60.7311 86.4785 60.7 86.4L59.7 83.4C59.6629 83.2929 59.5963 83.1985 59.5078 83.1277C59.4193 83.057 59.3126 83.0127 59.2 83ZM43.5 84.6C43.3408 84.6 43.1882 84.6632 43.0757 84.7758C42.9632 84.8883 42.8999 85.0409 42.8999 85.2L42.6 88.3C42.5934 88.3853 42.6037 88.4712 42.6303 88.5526C42.6569 88.6339 42.6993 88.7093 42.755 88.7743C42.8107 88.8393 42.8787 88.8927 42.955 88.9314C43.0314 88.9701 43.1146 88.9934 43.2 89C43.2853 89.0066 43.3711 88.9963 43.4525 88.9697C43.5339 88.9431 43.6092 88.9007 43.6742 88.845C43.7392 88.7893 43.7926 88.7213 43.8313 88.645C43.8701 88.5686 43.8934 88.4854 43.8999 88.4L44.2 85.4C44.2395 85.2979 44.2504 85.1869 44.2313 85.079C44.2123 84.9712 44.1641 84.8706 44.092 84.7882C44.0199 84.7058 43.9266 84.6447 43.8222 84.6115C43.7179 84.5783 43.6064 84.5743 43.5 84.6ZM51.5 84.6C51.3935 84.5743 51.282 84.5783 51.1777 84.6115C51.0733 84.6447 50.98 84.7058 50.9079 84.7882C50.8358 84.8706 50.7876 84.9712 50.7686 85.079C50.7496 85.1869 50.7604 85.2979 50.8 85.4L51.1 88.4C51.1 88.5724 51.1684 88.7377 51.2903 88.8596C51.4122 88.9815 51.5776 89.05 51.75 89.05C51.9223 89.05 52.0877 88.9815 52.2096 88.8596C52.3315 88.7377 52.3999 88.5724 52.3999 88.4L52 85.2C51.9803 85.0745 51.9213 84.9584 51.8314 84.8685C51.7416 84.7787 51.6255 84.7197 51.5 84.7V84.6Z"
          fill="#F4F2F3"
        />
        <g opacity="0.4" filter="url(#filter0_f_130_21)">
          <path
            d="M77.3 22.1L42.5 42.4L20.5 77.3L52.7 53.3L77.3 22.1Z"
            fill="black"
          />
        </g>
        <path d="M52.5 53L42.5 42.4L77.9 18.5L52.5 53Z" fill="#FF5150" />
        <path
          d="M52.4999 53L42.4999 42.4L17.0999 76.9L52.4999 53Z"
          fill="#F1F1F1"
        />
        <path
          opacity="0.2"
          d="M17.0999 76.9L52.4999 52.9L77.8998 18.5L17.0999 76.9Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_130_21"
          x="17.9"
          y="19.5"
          width="62"
          height="60.4"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.3"
            result="effect1_foregroundBlur_130_21"
          />
        </filter>
        <linearGradient
          id="paint0_linear_130_21"
          x1="47.4999"
          y1="95.3"
          x2="47.4999"
          y2="0.100005"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BDBDBD" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_130_21"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.7 41.3) scale(47.34 47.6)"
        >
          <stop stop-color="#06C2E7" />
          <stop offset="0.3" stop-color="#0DB8EC" />
          <stop offset="0.5" stop-color="#12AEF1" />
          <stop offset="0.8" stop-color="#1F86F9" />
          <stop offset="1" stop-color="#107DDD" />
        </radialGradient>
      </defs>
    </svg>`},e=B`<svg
      class="aspect-square h-full"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 9.77834L13.1914 24L5 15.5636L6.72913 13.7853L13.1914 20.4408L25.2733 8L27 9.77834Z"
        fill="currentColor"
      />
    </svg>`,s=B`<svg
      viewBox="0 0 32 32"
      fill="none"
      class="aspect-square h-full p-1"
    >
      <path
        d="M28.5049 1.64648L30.3535 3.49512L30.707 3.84961L18.5557 16L30.707 28.1504L30.3535 28.5049L28.5049 30.3535L28.1504 30.707L16 18.5566L3.84961 30.707L3.49512 30.3535L1.64648 28.5049L1.29297 28.1504L13.4434 16L1.29297 3.84961L3.49512 1.64648L3.84961 1.29297L16 13.4434L28.1504 1.29297L28.5049 1.64648Z"
        fill="currentColor"
      />
    </svg>`,i=["chromium","firefox","safari"],o=i.map(i=>{const o=this[i];return B` <div
        class="browser-item ${o?"supported":"unsupported"}"
      >
        ${t[i]} ${o?e:s}
      </div>`}),C=i.map(t=>this[t]).reduce((t,e)=>t&&e,!0),r=this.availableFrom>=2023;return B` <div
      class="p-2 flex justify-between gap-6 items-center rounded-md ${C?r?"baseline new":"baseline":"limited"}"
    >
      <div class="flex flex-col items-start">
        <div class="status">${C?"Baseline":"Limited"}</div>

        <div
          class="detailed-info ${C&&!r||C&&r&&this.availableFrom>0?"":"hidden"}"
        >
          ${C&&!r?"Widely available":"from "+this.availableFrom.toString()}
        </div>
      </div>
      <div class="flex gap-2">${o}</div>
    </div>`}}customElements.define("support-indicator",at);class nt extends Ct{static properties={width:{type:Number},minWidth:{type:Number,attribute:"min-width"},maxWidth:{type:Number,attribute:"max-width"}};static styles=C`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }

    .resize-container {
      display: flex;
      align-items: center;
      width: var(--resizeable-width, 100%);
    }

    .resize-handle {
      width: 0.25rem;
      height: 2rem;
      border-radius: 9999px;
      background: #9ca3af;
      cursor: ew-resize;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
    }

    .content {
      flex: 1 1 auto;
      height: 100%;
      box-sizing: border-box;
    }
  `;constructor(){super(),this.width=void 0,this.minWidth=100,this.maxWidth=void 0,this._resizing=!1,this._startX=0,this._startWidth=0,this._hasInitialized=!1}firstUpdated(){"number"==typeof this.maxWidth&&(this.width=this.maxWidth,this._hasInitialized=!0)}render(){return B`
      <div class="resize-container">
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="resize-handle"
          @mousedown="${this._onResizeStart}"
          title="Resize"
        ></div>
      </div>
    `}updated(t){void 0!==this.width&&this.style.setProperty("--resizeable-width",`${this.width}px`)}_onResizeStart(t){if(t.preventDefault(),!this._hasInitialized){const t=this.shadowRoot.querySelector(".resize-container");if(t){const e=t.offsetWidth||this.width;this.width=e,"number"!=typeof this.maxWidth&&(this.maxWidth=e),this._hasInitialized=!0}else this.width=this.minWidth??100,"number"!=typeof this.maxWidth&&(this.maxWidth=100),this._hasInitialized=!0}this._resizing=!0,this._startX=t.clientX,this._startWidth=this.width,window.addEventListener("mousemove",this._onResizing),window.addEventListener("mouseup",this._onResizeEnd)}_onResizing=t=>{if(!this._resizing)return;const e=t.clientX-this._startX;let s=this._startWidth+e;s=Math.max(this.minWidth,s),s=Math.min(this.maxWidth,s),this.width=s};_onResizeEnd=()=>{this._resizing=!1,window.removeEventListener("mousemove",this._onResizing),window.removeEventListener("mouseup",this._onResizeEnd)}}customElements.define("resizeable-element",nt)});
//# sourceMappingURL=web-components.js.map
