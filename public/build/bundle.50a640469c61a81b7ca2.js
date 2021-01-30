(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return 0===Object.keys(t).length}function i(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function m(t){h=t}new Set,new Set;const g=[],$=[],v=[],x=[],y=Promise.resolve();let w=!1;function b(t){v.push(t)}let k=!1;const _=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];m(e),S(e.$$)}for(m(null),g.length=0;$.length;)$.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];_.has(e)||(_.add(e),e())}v.length=0}while(g.length);for(;x.length;)x.pop()();w=!1,k=!1,_.clear()}}function S(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const z=new Set;let T;function E(t,e){t&&t.i&&(z.delete(t),t.i(e))}function M(t,n,o){const{fragment:a,on_mount:i,on_destroy:r,after_update:c}=t.$$;a&&a.m(n,o),b((()=>{const n=i.map(e).filter(l);r?r.push(...n):s(n),t.$$.on_mount=[]})),c.forEach(b)}function L(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(e,l,o,a,i,r,d=[-1]){const u=h;m(e);const f=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,l.props||{},((t,n,...s)=>{const l=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=l)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](l),p&&function(t,e){-1===t.$$.dirty[0]&&(g.push(t),w||(w=!0,y.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),l.target){if(l.hydrate){const t=($=l.target,Array.from($.childNodes));f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();l.intro&&E(e.$$.fragment),M(e,l.target,l.anchor),C()}var $;m(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class A{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n;return{c(){n=d("div"),n.innerHTML='<div class="relative py-3 sm:max-w-xl sm:mx-auto"><div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> \n    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"><div class="max-w-md mx-auto"><div><img alt="TailwindCSS play" src="/img/logo.svg" class="h-7 sm:h-8"/></div> \n        <div class="divide-y divide-gray-200"><div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"><p>An advanced online playground for Tailwind CSS, including support for things like:</p> \n            <ul class="list-disc space-y-2"><li class="flex items-start"><span class="h-6 flex items-center sm:h-7"><svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span> \n                <p class="ml-2">Customizing your\n                  <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file</p></li> \n              <li class="flex items-start"><span class="h-6 flex items-center sm:h-7"><svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span> \n                <p class="ml-2">Extracting classes with\n                  <code class="text-sm font-bold text-gray-900">@apply</code></p></li> \n              <li class="flex items-start"><span class="h-6 flex items-center sm:h-7"><svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span> \n                <p class="ml-2">Code completion with instant preview</p></li></ul> \n            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p></div> \n          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"><p>Want to dig deeper into Tailwind?</p> \n            <p><a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700">Read the docs →</a></p></div></div></div></div></div>',p(n,"class","min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12")},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}const B=class extends A{constructor(t){super(),j(this,t,null,H,o,{})}};function O(t){let e,n,s,l,o,a,h,m,g,$;return g=new B({}),{c(){var i;e=d("main"),n=d("h1"),s=u("Hello "),l=u(t[0]),o=u("! ddddccccc"),a=f(),h=d("p"),h.innerHTML='Visit the <a href="https://svelte.dev/tutorial" class="svelte-1aux0sz">Svelte tutorial</a> to learn how to build Svelte apps.',m=f(),(i=g.$$.fragment)&&i.c(),p(n,"class","svelte-1aux0sz"),p(h,"class","svelte-1aux0sz"),p(e,"class","svelte-1aux0sz")},m(t,c){r(t,e,c),i(e,n),i(n,s),i(n,l),i(n,o),i(e,a),i(e,h),i(e,m),M(g,e,null),$=!0},p(t,[e]){var n,s;(!$||1&e)&&(n=l,s=""+(s=t[0]),n.wholeText!==s&&(n.data=s))},i(t){$||(E(g.$$.fragment,t),$=!0)},o(t){(function(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),(void 0).c.push((()=>{z.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}})(g.$$.fragment,t),$=!1},d(t){t&&c(e),L(g)}}}function q(t,e,n){let{name:s}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name)},[s]}new class extends A{constructor(t){super(),j(this,t,q,O,o,{name:0})}}({target:document.body,props:{name:"world"}})})();