var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var a=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,a.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},e.parcelRequired7c6=a);var t=a("3iMKl");const r=document.querySelector(".library-js-list"),l=JSON.parse(localStorage.getItem("movieIds"));!async function(){try{if(!l)return;const e=await(0,t.libraryMovieQuery)(l);console.log(e),r.insertAdjacentHTML("beforeend",e.map((e=>{const{release_date:n,backdrop_path:i,genres:a,title:t,vote_average:r}=e,l=a.slice(0,1).map((e=>e.name)).join(", ");return`<div class="library-container-item">\n                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${i});">\n                <div class="rating-libr rating-library">\n                        <div class="rating-body">\n                            <div class="rating-active" style="width: ${function(e){const n=e/10*100;return Math.round(100*n)/100}(r)}%;"></div>\n                            <div class="rating-items">\n                                <input type="radio" class="reting-item" value="1" name="rating"></>\n                                <input type="radio" class="reting-item" value="2" name="rating"></>\n                                <input type="radio" class="reting-item" value="3" name="rating"></>\n                                <input type="radio" class="reting-item" value="4" name="rating"></>\n                                <input type="radio" class="reting-item" value="5" name="rating"></>\n                            </div>\n                            </div>\n                        </div>\n                    <div class="library-container-about">\n                        <h3 class="library-movie-title">${t}</h3>     \n                        <span class="library-genre-title">${l}</span><span class="library-genre-title"> | ${n.slice(0,4)}</span>   \n                    </div> \n            </div>\n            </div>\n        </div>`})).join(""))}catch(e){console.log(e)}}();
//# sourceMappingURL=library.47b40b5f.js.map