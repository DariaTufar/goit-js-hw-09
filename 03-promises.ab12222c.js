function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function u(t,o,n){for(let r=0;r<t;r+=1)l(r+1,o*r).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o+n}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o+n}ms`)}))}function l(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({formSubmit:document.querySelector(".form")}).formSubmit.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.currentTarget),o=Number(t.get("delay")),n=Number(t.get("step")),r=Number(t.get("amount"));setTimeout(u,o,r,n,o)}));
//# sourceMappingURL=03-promises.ab12222c.js.map
