!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a);var i=a("bpxeT"),o=a("2TvXO"),l=a("hDMWd"),c=document.querySelector(".library-js-list"),s=localStorage.getItem("movieId");function u(){return(u=e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,l.libraryMovieQuery)(s);case 5:r=e.sent,console.log(r),c.insertAdjacentHTML("beforeend",d(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function d(e){var n=e.release_date,r=e.backdrop_path,t=e.genres,a=e.title,i=e.vote_average,o=t.slice(0,2).map((function(e){return e.name})).join(", ");return console.log(i),'<div class="library-container">\n            <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original'.concat(r,');">\n               <div class="library-container-about">\n                     <h3 class="library-movie-title">').concat(a,'</h3>     \n                    <span class="library-genre-title">').concat(o,'</span><span class="library-genre-title"> | ').concat(n.slice(0,4),'</span>   \n               </div> \n               <div class="library-rating"></div>\n          </div>\n         </div>')}!function(){u.apply(this,arguments)}()}();
//# sourceMappingURL=library.67ac9b95.js.map
