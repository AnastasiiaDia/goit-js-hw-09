const t=document.getElementById("start"),e=document.getElementById("stop"),n=document.querySelector(".body");t.addEventListener("click",(function(){t.disabled=!0,l=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(l),l=null,t.disabled=!1}));let l=null;console.dir(t);
//# sourceMappingURL=01-color-switcher.0aa44a54.js.map
