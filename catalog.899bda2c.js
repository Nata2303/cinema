!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r);var i,s,c=r("bpxeT"),o=r("2TvXO"),l=r("hDMWd"),d=(l=r("hDMWd"),document.querySelector(".catalog-js")),u=document.querySelector(".pagination-container"),p=1;function v(){return(v=e(c)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={},e.next=4,(0,l.trendMovieRequest)(p);case 4:return i=e.sent,e.next=7,(0,l.upcomingMovieGenreRequest)();case 7:e.sent.forEach((function(e){s[e.id]=e.name})),console.log(i.results),h(i.results,s),f(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}function f(){u.innerHTML="";var n,t,a=Math.floor(2.5),r=Math.max(p-a,1),d=Math.min(r+5-1,25);d-r+1<5&&(r=Math.max(d-5+1,1)),p>1&&((n=document.createElement("a")).href="#",n.textContent="<",n.addEventListener("click",e(c)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p-=1,console.log(p),e.next=4,(0,l.trendMovieRequest)(p);case 4:h((i=e.sent).results,s),f(i.total_pages);case 7:case"end":return e.stop()}}),n)})))),u.appendChild(n)),r>1&&(g(1),r>2&&m());for(var v=r;v<=d;v++)g(v);d<25&&(d<24&&m(),g(25)),p<25&&((t=document.createElement("a")).href="#",t.textContent=">",t.addEventListener("click",e(c)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p+=1,console.log(p),e.next=4,(0,l.trendMovieRequest)(p);case 4:h((i=e.sent).results,s),f(i.total_pages);case 7:case"end":return e.stop()}}),n)})))),u.appendChild(t))}function g(n){var t=document.createElement("div");t.classList.add("page-number");var a=document.createElement("a");a.classList="catalog-pagination-link",a.href="#",a.textContent=function(e){return e<10?"0".concat(e):e.toString()}(n),n===p&&(a.classList.add("active"),t.classList.add("active")),a.addEventListener("click",e(c)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=n,console.log(p),e.next=4,(0,l.trendMovieRequest)(p);case 4:h((i=e.sent).results,s),f(i.total_pages);case 7:case"end":return e.stop()}}),t)})))),t.appendChild(a),u.appendChild(t)}function m(){var e=document.createElement("span");e.textContent="...",u.appendChild(e)}function h(e,n){d.innerHTML="";var t=function(e,n){return e.map((function(e){var t,a,r,i,s=e.release_date,c=e.backdrop_path,o=e.genre_ids,l=e.title,d=e.vote_average,u=e.name,p=e.first_air_date,v=o.slice(0,2).map((function(e){return n[e]})).join(", ");return t=l||u,a=s||p,'<div class="library-container-item">\n                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original'.concat(c,');">\n                <div class="rating-libr rating-library">\n                        <div class="rating-body">\n                            <div class="rating-active" style="width: ').concat((r=d,i=r/10*100,Math.round(100*i)/100),'%;"></div>\n                            <div class="rating-items">\n                                <input type="radio" class="reting-item" value="1" name="rating"></>\n                                <input type="radio" class="reting-item" value="2" name="rating"></>\n                                <input type="radio" class="reting-item" value="3" name="rating"></>\n                                <input type="radio" class="reting-item" value="4" name="rating"></>\n                                <input type="radio" class="reting-item" value="5" name="rating"></>\n                            </div>\n                            </div>\n                        </div>\n                    <div class="library-container-about">\n                        <h3 class="library-movie-title">').concat(t,'</h3>     \n                        <span class="library-genre-title">').concat(v,'</span><span class="library-genre-title"> | ').concat(a.slice(0,4),"</span>   \n                    </div> \n            </div>\n            </div>\n        </div>")})).join("")}(e,n);d.insertAdjacentHTML("beforeend",t)}!function(){v.apply(this,arguments)}()}();
//# sourceMappingURL=catalog.899bda2c.js.map
