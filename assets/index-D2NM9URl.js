import{j as r,B as u,R as a,a as d,c as l,b as f}from"./vendor-B7sze3a2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p=()=>({unauthorizedPages:[{path:"/",element:r.jsx("div",{children:"useUnauthorizedPages"})}]}),m=()=>{const{unauthorizedPages:s}=p();return r.jsx(u,{children:r.jsx(a,{children:s.map(o=>r.jsx(d,{...o},o.path))})})};function h(){return r.jsx(m,{})}console.log("MAIN");l.createRoot(document.getElementById("root")).render(r.jsx(f.StrictMode,{children:r.jsx(h,{})}));
//# sourceMappingURL=index-D2NM9URl.js.map
