function e(){const e=document.querySelector("body"),t=document.querySelector("#darkThemeBtn"),c=document.querySelector("#lightThemeBtn");e.classList.toggle("light-theme"),t.classList.toggle("hidden"),c.classList.toggle("hidden");!function(e){localStorage.setItem("theme",e)}(e.classList.contains("light-theme")?"light":"dark")}const t=document.querySelector("#darkThemeBtn"),c=document.querySelector("#lightThemeBtn");try{t.addEventListener("click",e),c.addEventListener("click",e)}catch(e){}const o=localStorage.getItem("theme");var d;o&&("light"===(d=o)?(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")):"dark"===d&&(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")));
//# sourceMappingURL=library.df7b22e8.js.map
