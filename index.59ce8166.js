refs={modalTrailer:document.querySelector(".modal-content")};const e=localStorage.getItem("filmIdstor");function t(){return fetch(`https://api.themoviedb.org/3/movie/${e}/videos?language=en-US`,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).catch((e=>{throw function(){const e=document.querySelector(".hero-btn-static"),t=document.getElementById("modal"),n=t.querySelector(".close");function o(){t.style.display="block"}function c(){t.style.display="none"}e.addEventListener("click",o),n.addEventListener("click",c),window.addEventListener("click",(function(e){e.target===t&&c()}))}(),new Error("Failed to fetch breeds")}))}setTimeout((function(){t().then((e=>e.results[0])).then((e=>function(e){const t=document.querySelector(".hero-btn-static"),n=document.getElementById("modal"),o=n.querySelector(".close");function c(){n.style.display="block"}function l(){n.style.display="none"}t.addEventListener("click",c),o.addEventListener("click",l),window.addEventListener("click",(function(e){e.target===n&&l()}));const i={modalTrailer:document.querySelector(".modal-content")},r=e.key;console.log(r);const d=document.createElement("iframe");d.src=`https://www.youtube.com/embed/${r}`,d.allowFullscreen=!0,d.classList.add("you-tube-iframe"),i.modalTrailer.innerHTML="",i.modalTrailer.appendChild(d)}(e)))}),500);
//# sourceMappingURL=index.59ce8166.js.map
