!function(){var t=document.getElementById("start"),e=document.getElementById("stop"),n=document.querySelector(".body");t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),o=null,t.disabled=!1}));var o=null;console.dir(t)}();
//# sourceMappingURL=01-color-switcher.d408018b.js.map
