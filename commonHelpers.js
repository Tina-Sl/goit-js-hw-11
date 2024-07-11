import{i as h,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){const s="https://pixabay.com/api/",t="44698390-237f634988ff1cc21b0da43c0";o.includes(" ")&&o.replace(/\s+/g,"+");const i=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f(o){return o.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="gallery-img-title">
            <div class="box">
              <h2 class="box-title">Likes</h2>
              <p class="box-number">${e}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Views</h2>
              <p class="box-number">${r}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Comments</h2>
              <p class="box-number">${a}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Downloads</h2>
              <p class="box-number">${d}</p>
            </div>
          </div>
        </li>`).join("")}const c=document.querySelector(".search-form"),l=document.querySelector(".loader"),n=document.querySelector(".gallery");l.classList.add("loader-hidden");c.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const s=o.target.elements.search.value.trim();s!==""&&(l.classList.remove("loader-hidden"),m(s).then(t=>{l.classList.add("loader-hidden"),t.hits.length||h.show({backgroundColor:"#ef4040",title:"",theme:"dark",iconUrl:"octagon.png",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"350px",position:"topRight"}),t.hits.length>9&&(t.hits=t.hits.splice(0,9)),n.innerHTML=f(t.hits),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{l.classList.add("loader-hidden"),console.log(t)}),c.reset())});
//# sourceMappingURL=commonHelpers.js.map
