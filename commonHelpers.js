import{i as u,S as h}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){const r="https://pixabay.com/api/",s="44698390-237f634988ff1cc21b0da43c0";o.includes(" ")&&o.replace(/\s+/g,"+");const i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
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
              <p class="box-number">${t}</p>
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
        </li>`).join("")}const c=document.querySelector(".search-form"),l=document.querySelector(".loader"),n=document.querySelector(".gallery");c.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const r=o.target.elements.search.value.trim();r!==""&&(l.classList.remove("loader-hidden"),m(r).then(s=>{l.classList.add("loader-hidden"),s.hits.length||u.error({backgroundColor:"#ef4040",title:"",theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"350px",position:"topRight"}),n.innerHTML=f(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{l.classList.add("loader-hidden"),console.log(s)}),c.reset())});
//# sourceMappingURL=commonHelpers.js.map
