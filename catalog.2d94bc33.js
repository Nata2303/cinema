var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("3iMKl");a("3iMKl");a("7Y9D8");var o;function r(e,t,n){var a,i,o,r,l;function s(){var c=Date.now()-r;c<t&&c>=0?a=setTimeout(s,t-c):(a=null,n||(l=e.apply(o,i),o=i=null))}null==t&&(t=100);var c=function(){o=this,i=arguments,r=Date.now();var c=n&&!a;return a||(a=setTimeout(s,t)),c&&(l=e.apply(o,i),o=i=null),l};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(l=e.apply(o,i),o=i=null,clearTimeout(a),a=null)},c}r.debounce=r,o=r;a("3iMKl"),i=a("3iMKl");const l=document.querySelector(".catalog-js"),s=document.querySelector(".pagination-container");let c,u,d,p=1;async function m(){try{u={},c=await(0,i.trendMovieRequest)(p);const e=await(0,i.upcomingMovieGenreRequest)();console.log(e),e.forEach((e=>{u[e.id]=e.name})),y(c.results,u),f(),console.log(u)}catch(e){console.log(e)}}function f(){let e=c.total_pages;s.innerHTML="";const t=Math.floor(2.5);let n=Math.max(p-t,1),a=Math.min(n+5-1,e);a-n+1<5&&(n=Math.max(a-5+1,1)),p>1&&function(){const e=document.createElement("a");e.href="#",e.textContent="<",e.addEventListener("click",(async function(){p-=1,console.log(p),c=await(0,i.trendMovieRequest)(p),y(c.results,u),f(c.total_pages)})),s.appendChild(e)}(),n>1&&(g(1),n>2&&h());for(let e=n;e<=a;e++)g(e);a<e&&(a<e-1&&h(),g(e)),p<e&&function(){const e=document.createElement("a");e.href="#",e.textContent=">",e.addEventListener("click",(async function(){p+=1,console.log(p),c=await(0,i.trendMovieRequest)(p),y(c.results,u),f(c.total_pages)})),s.appendChild(e)}()}function g(e){const t=document.createElement("div");t.classList.add("page-number");const n=document.createElement("a");n.classList="catalog-pagination-link",n.href="#",n.textContent=v(e),e===p&&(n.classList.add("active"),t.classList.add("active")),n.addEventListener("click",(async function(){p=e,console.log(p),c=await(0,i.trendMovieRequest)(p),y(c.results,u),f(c.total_pages)})),t.appendChild(n),s.appendChild(t)}function v(e){return e<10?`0${e}`:e.toString()}function h(){const e=document.createElement("span");e.textContent="...",s.appendChild(e)}function y(e,t){l.innerHTML="";const n=function(e,t){return e.map((e=>{const{release_date:n,backdrop_path:a,genre_ids:i,title:o,vote_average:r,name:l,poster_path:s}=e,c=i.map((e=>t[e])).join(", ");let u;u=o||l;let d,p=n.slice(0,4);return p&&""!==p||(p="unknown"),d=a||s?a||s:"/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",`<div class="library-container-item">\n                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${d});">\n                <div class="rating-libr rating-library">\n                        <div class="rating-body">\n                            <div class="rating-active" style="width: ${function(e){const t=e/10*100;return Math.round(100*t)/100}(r)}%;"></div>\n                            <div class="rating-items">\n                                <input type="radio" class="reting-item" value="1" name="rating"></>\n                                <input type="radio" class="reting-item" value="2" name="rating"></>\n                                <input type="radio" class="reting-item" value="3" name="rating"></>\n                                <input type="radio" class="reting-item" value="4" name="rating"></>\n                                <input type="radio" class="reting-item" value="5" name="rating"></>\n                            </div>\n                            </div>\n                        </div>\n                    <div class="library-container-about">\n                        <h3 class="library-movie-title">${u}</h3>     \n                        <span class="library-genre-title">${c}</span><span class="library-genre-title"> | ${p}</span>   \n                    </div> \n            </div>\n            </div>\n        </div>`})).join("")}(e,t);l.insertAdjacentHTML("beforeend",n)}m();let L,E=1,M=!0;const b=document.querySelector(".catalog-form"),w=document.querySelector("#js-search-select"),x=document.querySelector(".js-icon-close");function C(e){if(!M)return;let t=e;s.innerHTML="";const n=Math.floor(2.5);let a=Math.max(E-n,1),o=Math.min(a+5-1,t);o-a+1<5&&(a=Math.max(o-5+1,1)),E>1&&function(){const e=document.createElement("a");e.href="#",e.textContent="<",e.addEventListener("click",(async function(){E-=1,console.log(E);const e=await(0,i.searchRequest)(formEvt,formYear,E);y(e.results,d),C(e.total_pages)})),s.appendChild(e)}(),a>1&&(q(1),a>2&&h());for(let e=a;e<=o;e++)q(e);o<t&&(o<t-1&&h(),q(t)),E<t&&function(){const e=document.createElement("a");e.href="#",e.textContent=">",e.addEventListener("click",(async function(){E+=1,console.log(E);const e=await(0,i.searchRequest)(formEvt,formYear,E);y(e.results,d),C(e.total_pages)})),s.appendChild(e)}()}function q(e){const t=document.createElement("div");t.classList.add("page-number");const n=document.createElement("a");n.classList="catalog-pagination-link",n.href="#",n.textContent=v(e),e===E&&(n.classList.add("active"),t.classList.add("active")),n.addEventListener("click",(async function(){M&&(E=e,console.log(E),L=await(0,i.searchRequest)(formEvt,formYear,E),y(L.results,d),C(L.total_pages))})),t.appendChild(n),s.appendChild(t)}document.querySelector(".catalog-input").addEventListener("input",(0,o.debounce)((function(e){e.preventDefault(),e.target.value.trim().length>0?x.style.display="flex":x.style.display="none"}),200)),x.addEventListener("click",(function(){b.reset(),x.style.display="none"})),b.addEventListener("submit",(async function(e){try{e.preventDefault(),s.innerHTML="",d={},formEvt=e.currentTarget.elements.catalogSearchQuery.value,formYear=e.currentTarget.elements.select.value,L=await(0,i.searchRequest)(formEvt,formYear,E);(await(0,i.upcomingMovieGenreRequest)()).forEach((e=>{d[e.id]=e.name})),0===formEvt.length&&(l.innerHTML="",m()),formEvt.length>1&&(l.innerHTML="",y(L.results,d)),0===L.results.length?(M=!1,l.innerHTML='<div class="opsContainer">\n        <p class="opsText">OOPS...<br>We are very sorry!<br>We don\'t have any results matching your search</p>\n      </div>'):M=!0,s.style.display=M?"flex":"none",C(L.total_pages),console.log(d)}catch(e){console.log(e)}})),function(){const e=(new Date).getFullYear();for(let t=1940;t<=e;t++){const e=document.createElement("option");e.classList.add("selectOption"),e.value=t,e.text=t,w.appendChild(e)}}();
//# sourceMappingURL=catalog.2d94bc33.js.map
