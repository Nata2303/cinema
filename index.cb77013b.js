refs={modalTrailer:document.querySelector(".modal-content")},fetch("https://api.themoviedb.org/3/movie/1010581/videos?language=en-US",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).catch((e=>{throw new Error("Failed to fetch breeds")})).then((e=>e.results[0])).then((e=>function(e){const t=document.querySelector(".hero-btn-static"),o=document.getElementById("modal"),n=o.querySelector(".close");function l(){o.style.display="block"}function c(){o.style.display="none"}t.addEventListener("click",l),n.addEventListener("click",c),window.addEventListener("click",(function(e){e.target===o&&c()}));const r={modalTrailer:document.querySelector(".modal-content")},i=e.key;console.log(i);const a=document.createElement("iframe");a.src=`https://www.youtube.com/embed/${i}`,a.allowFullscreen=!0,a.classList.add("you-tube-iframe"),console.log(a),r.modalTrailer.innerHTML="",r.modalTrailer.appendChild(a)}(e)));
//# sourceMappingURL=index.cb77013b.js.map
