!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var s=a("bpxeT"),o=a("2TvXO"),i=a("hDMWd");a("hDMWd");a("6JpON");var c;function l(e,t,n){var r,a,s,o,i;function c(){var l=Date.now()-o;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(i=e.apply(s,a),s=a=null))}null==t&&(t=100);var l=function(){s=this,a=arguments,o=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(i=e.apply(s,a),s=a=null),i};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(i=e.apply(s,a),s=a=null,clearTimeout(r),r=null)},l}l.debounce=l,c=l;s=a("bpxeT"),o=a("2TvXO"),a("hDMWd"),i=a("hDMWd");var u,d,p,v=document.querySelector(".catalog-js"),f=document.querySelector(".pagination-container"),m=1;function g(){return h.apply(this,arguments)}function h(){return(h=e(s)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d={},e.next=4,(0,i.trendMovieRequest)(m);case 4:return u=e.sent,e.next=7,(0,i.upcomingMovieGenreRequest)();case 7:n=e.sent,console.log(n),n.forEach((function(e){d[e.id]=e.name})),E(u.results,d),y(),console.log(d),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function y(){var t=u.total_pages;f.innerHTML="";var n,r,a=Math.floor(2.5),c=Math.max(m-a,1),l=Math.min(c+5-1,t);l-c+1<5&&(c=Math.max(l-5+1,1)),m>1&&((n=document.createElement("a")).href="#",n.textContent="<",n.addEventListener("click",e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m-=1,console.log(m),e.next=4,(0,i.trendMovieRequest)(m);case 4:E((u=e.sent).results,d),y(u.total_pages);case 7:case"end":return e.stop()}}),t)})))),f.appendChild(n)),c>1&&(x(1),c>2&&L());for(var p=c;p<=l;p++)x(p);l<t&&(l<t-1&&L(),x(t)),m<t&&((r=document.createElement("a")).href="#",r.textContent=">",r.addEventListener("click",e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m+=1,console.log(m),e.next=4,(0,i.trendMovieRequest)(m);case 4:E((u=e.sent).results,d),y(u.total_pages);case 7:case"end":return e.stop()}}),t)})))),f.appendChild(r))}function x(t){var n=document.createElement("div");n.classList.add("page-number");var r=document.createElement("a");r.classList="catalog-pagination-link",r.href="#",r.textContent=b(t),t===m&&(r.classList.add("active"),n.classList.add("active")),r.addEventListener("click",e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=t,console.log(m),e.next=4,(0,i.trendMovieRequest)(m);case 4:E((u=e.sent).results,d),y(u.total_pages);case 7:case"end":return e.stop()}}),n)})))),n.appendChild(r),f.appendChild(n)}function b(e){return e<10?"0".concat(e):e.toString()}function L(){var e=document.createElement("span");e.textContent="...",f.appendChild(e)}function E(e,t){v.innerHTML="";var n=function(e,t){return e.map((function(e){var n,r=e.release_date,a=e.backdrop_path,s=e.genre_ids,o=e.title,i=e.vote_average,c=e.name,l=e.poster_path,u=s.map((function(e){return t[e]})).join(", ");n=o||c;var d,p,v=r.slice(0,4);return v&&""!==v||(v="unknown"),'<div class="library-container-item">\n                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original'.concat(a||l?a||l:"/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",');">\n                <div class="rating-libr rating-library">\n                        <div class="rating-body">\n                            <div class="rating-active" style="width: ').concat((d=i,p=d/10*100,Math.round(100*p)/100),'%;"></div>\n                            <div class="rating-items">\n                                <input type="radio" class="reting-item" value="1" name="rating"></>\n                                <input type="radio" class="reting-item" value="2" name="rating"></>\n                                <input type="radio" class="reting-item" value="3" name="rating"></>\n                                <input type="radio" class="reting-item" value="4" name="rating"></>\n                                <input type="radio" class="reting-item" value="5" name="rating"></>\n                            </div>\n                            </div>\n                        </div>\n                    <div class="library-container-about">\n                        <h3 class="library-movie-title">').concat(n,'</h3>     \n                        <span class="library-genre-title">').concat(u,'</span><span class="library-genre-title"> | ').concat(v,"</span>   \n                    </div> \n            </div>\n            </div>\n        </div>")})).join("")}(e,t);v.insertAdjacentHTML("beforeend",n)}g();var M,w=1,k=!0,T=document.querySelector(".catalog-form"),C=document.querySelector("#js-search-select"),q=document.querySelector(".js-icon-close");function _(){return(_=e(s)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),f.innerHTML="",p={},formEvt=n.currentTarget.elements.catalogSearchQuery.value,formYear=n.currentTarget.elements.select.value,e.next=8,(0,i.searchRequest)(formEvt,formYear,w);case 8:return M=e.sent,e.next=11,(0,i.upcomingMovieGenreRequest)();case 11:e.sent.forEach((function(e){p[e.id]=e.name})),0===formEvt.length&&(v.innerHTML="",g()),formEvt.length>1&&(v.innerHTML="",E(M.results,p)),0===M.results.length?(k=!1,v.innerHTML='<div class="opsContainer">\n        <p class="opsText">OOPS...<br>We are very sorry!<br>We don\'t have any results matching your search</p>\n      </div>'):k=!0,f.style.display=k?"flex":"none",R(M.total_pages),console.log(p),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}function R(t){if(k){var n=t;f.innerHTML="";var r,a,c=Math.floor(2.5),l=Math.max(w-c,1),u=Math.min(l+5-1,n);u-l+1<5&&(l=Math.max(u-5+1,1)),w>1&&((r=document.createElement("a")).href="#",r.textContent="<",r.addEventListener("click",e(s)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w-=1,console.log(w),e.next=4,(0,i.searchRequest)(formEvt,formYear,w);case 4:E((n=e.sent).results,p),R(n.total_pages);case 7:case"end":return e.stop()}}),t)})))),f.appendChild(r)),l>1&&(D(1),l>2&&L());for(var d=l;d<=u;d++)D(d);u<n&&(u<n-1&&L(),D(n)),w<n&&((a=document.createElement("a")).href="#",a.textContent=">",a.addEventListener("click",e(s)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w+=1,console.log(w),e.next=4,(0,i.searchRequest)(formEvt,formYear,w);case 4:E((n=e.sent).results,p),R(n.total_pages);case 7:case"end":return e.stop()}}),t)})))),f.appendChild(a))}}function D(t){var n=document.createElement("div");n.classList.add("page-number");var r=document.createElement("a");r.classList="catalog-pagination-link",r.href="#",r.textContent=b(t),t===w&&(r.classList.add("active"),n.classList.add("active")),r.addEventListener("click",e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return");case 2:return w=t,console.log(w),e.next=6,(0,i.searchRequest)(formEvt,formYear,w);case 6:E((M=e.sent).results,p),R(M.total_pages);case 9:case"end":return e.stop()}}),n)})))),n.appendChild(r),f.appendChild(n)}document.querySelector(".catalog-input").addEventListener("input",(0,c.debounce)((function(e){e.preventDefault(),e.target.value.trim().length>0?q.style.display="flex":q.style.display="none"}),200)),q.addEventListener("click",(function(){T.reset(),q.style.display="none"})),T.addEventListener("submit",(function(e){return _.apply(this,arguments)})),function(){for(var e=(new Date).getFullYear(),t=1940;t<=e;t++){var n=document.createElement("option");n.classList.add("selectOption"),n.value=t,n.text=t,C.appendChild(n)}}()}();
//# sourceMappingURL=catalog.8e4cecf2.js.map
