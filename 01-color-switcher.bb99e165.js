const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector(".body");t.addEventListener("click",(function(){a(!0),o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),o=null,a(!1)}));let o=null;function a(n){e.disabled=!n,t.disabled=n}
//# sourceMappingURL=01-color-switcher.bb99e165.js.map