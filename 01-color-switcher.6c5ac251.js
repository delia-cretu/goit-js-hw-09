!function(){var t=document.querySelector(".button--start"),e=document.querySelector(".button--stop"),n=null;e.disabled=!1,t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.removeEventListener,t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.6c5ac251.js.map