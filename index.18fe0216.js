refs={modalTrailer:document.querySelector(".modal-content")},fetch("https://api.themoviedb.org/3/movie/1010581/videos?language=en-US",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).catch((function(e){throw new Error("Failed to fetch breeds")})).then((function(e){return e.results[0]})).then((function(e){return function(e){var t=document.querySelector(".hero-btn-static"),n=document.getElementById("modal"),o=n.querySelector(".close");function r(){n.style.display="block"}function c(){n.style.display="none"}t.addEventListener("click",r),o.addEventListener("click",c),window.addEventListener("click",(function(e){e.target===n&&c()}));var l={modalTrailer:document.querySelector(".modal-content")},i=e.key;console.log(i);var a=document.createElement("iframe");a.src="https://www.youtube.com/embed/".concat(i),a.allowFullscreen=!0,a.classList.add("you-tube-iframe"),console.log(a),l.modalTrailer.innerHTML="",l.modalTrailer.appendChild(a)}(e)}));
//# sourceMappingURL=index.18fe0216.js.map