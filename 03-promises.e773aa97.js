var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form"),u=i.querySelector(".form button");function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault(),u.disabled=!0;const t=Number(document.querySelector("input[name='delay']").value),o=Number(document.querySelector("input[name='step']").value),n=Number(document.querySelector("input[name='amount']").value);for(let e=0;e<n;e++){const n=e+1;l(n,t+o*n).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}u.disabled=!1}));
//# sourceMappingURL=03-promises.e773aa97.js.map
