function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-B-Ko4ZMN.js","./iframe-B8NSla24.js","./index-Dl6G-zuu.js","./react-16-DUDwrI64.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js","./index-B_J8iUie.js","./assertThisInitialized-LnzLPM7_.js","./_getPrototype-Cg4bdWul.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-B8NSla24.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-B-Ko4ZMN.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
