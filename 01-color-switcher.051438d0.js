const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector(".body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),d=null,t.disabled=!1,e.disabled=!0}));let d=null;
//# sourceMappingURL=01-color-switcher.051438d0.js.map
