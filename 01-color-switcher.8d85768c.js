!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.querySelector(".body");t.addEventListener("click",(function(){a(!0),o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),o=null,a(!1)}));var o=null;function a(e){n.disabled=!e,t.disabled=e}}();
//# sourceMappingURL=01-color-switcher.8d85768c.js.map
