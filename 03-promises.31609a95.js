!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc");function u(t,n,o){for(var r=0;r<t;r+=1)a(r+1,n*r).then((function(t){var n=t.position,r=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r+o,"ms"))})).catch((function(t){var n=t.position,r=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r+o,"ms"))}))}function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({formSubmit:document.querySelector(".form")}).formSubmit.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.currentTarget),n=Number(t.get("delay")),o=Number(t.get("step")),r=Number(t.get("amount"));setTimeout(u,n,r,o,n)}))}();
//# sourceMappingURL=03-promises.31609a95.js.map
