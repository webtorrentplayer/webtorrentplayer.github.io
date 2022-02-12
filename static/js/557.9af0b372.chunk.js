"use strict";(self.webpackChunkwebtorrentplayer_react_imdb=self.webpackChunkwebtorrentplayer_react_imdb||[]).push([[557],{4302:function(n,t,e){e.d(t,{Z:function(){return c}});var i=e(4483),r=e(3174),s=e(7118),o=e(184);function l(n){var t=n.shareUrl;return(0,o.jsxs)("div",{className:"social-buttons-wrapper",children:[(0,o.jsx)("a",{className:"btn btn-circle",href:"https://api.whatsapp.com/send?text=".concat(t),children:(0,o.jsx)(i.G,{icon:s.VHX,size:"lg"})}),(0,o.jsx)("a",{className:"btn btn-circle",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(t),children:(0,o.jsx)(i.G,{icon:s.neY,size:"lg"})}),(0,o.jsx)("a",{className:"btn btn-circle",href:"https://twitter.com/intent/tweet?text=".concat(t),children:(0,o.jsx)(i.G,{icon:s.mdU,size:"lg"})}),(0,o.jsx)("button",{className:"btn btn-circle",onClick:function(){return navigator.clipboard.writeText(t)},children:(0,o.jsx)(i.G,{icon:r.nNP,size:"lg"})})]})}function c(n){var t,e,i,r,s=n.details;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:null!==s&&void 0!==s&&s.logo?(0,o.jsx)("img",{className:"imdb-logo",src:null===s||void 0===s?void 0:s.logo,alt:null===s||void 0===s?void 0:s.name}):null===s||void 0===s?void 0:s.name}),(0,o.jsx)(l,{shareUrl:s.shareUrl}),(0,o.jsxs)("p",{children:[(null===s||void 0===s?void 0:s.runtime)&&(0,o.jsxs)("span",{children:[null===s||void 0===s?void 0:s.runtime," | "]}),(0,o.jsxs)("span",{children:[null===s||void 0===s?void 0:s.year," | "]}),(0,o.jsxs)("span",{children:["IMDB rating: ",null===s||void 0===s?void 0:s.imdbRating]})]}),(null===s||void 0===s?void 0:s.genre)&&s.genre.length>0&&(0,o.jsxs)("div",{className:"genre-container",children:[(0,o.jsx)("h3",{children:"Genre"}),null===s||void 0===s||null===(t=s.genre)||void 0===t?void 0:t.map((function(n){return(0,o.jsxs)("span",{children:[n," "]},n)}))]}),(null===s||void 0===s?void 0:s.director)&&s.director.length>0&&(0,o.jsxs)("div",{className:"director-container",children:[(0,o.jsx)("h3",{children:"Director"}),null===s||void 0===s||null===(e=s.director)||void 0===e?void 0:e.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]}),(null===s||void 0===s?void 0:s.writer)&&s.writer.length>0&&(0,o.jsxs)("div",{className:"writer-container",children:[(0,o.jsx)("h3",{children:"Writer"}),null===s||void 0===s||null===(i=s.director)||void 0===i?void 0:i.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]}),(null===s||void 0===s?void 0:s.cast)&&s.cast.length>0&&(0,o.jsxs)("div",{className:"cast-container",children:[(0,o.jsx)("h3",{children:"Cast"}),null===s||void 0===s||null===(r=s.cast)||void 0===r?void 0:r.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]})]})}},1557:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var i=e(1413),r=e(885),s=e(2791),o=e(6871),l=e(4302),c=e(7022),a=e(9743),d=e(2677),u=e(5169),h=e(3340),v=e(184);function m(){var n=(0,o.UO)(),t=(0,s.useState)([]),e=(0,r.Z)(t,2),m=e[0],f=e[1];return(0,s.useEffect)((function(){var t=n.imdb_id,e='{"params":[null,{"query":{"imdb_id":"'.concat(t,'"}}],"method":"meta.get","id":1,"jsonrpc":"2.0"}');console.log(e);var r="https://cinemeta.strem.io/stremioget/stremio/v1/q.json?b=".concat(btoa(e));fetch(r).then((function(n){return n.json()})).then((function(n){console.log(n),f((0,i.Z)((0,i.Z)({},n.result),{},{shareUrl:"".concat(window.location.origin,"/movies/").concat(n.result.imdb_id)})),document.title="".concat(n.result.name," - ").concat(u.Z.SITE_TITLE)})).catch((function(n){return console.log(n)}))}),[n.imdb_id]),(0,v.jsx)("div",{className:"imdb-title-container dark-overlay",style:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+(null===m||void 0===m?void 0:m.background)+")"},children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(d.Z,{xs:"6",children:(0,v.jsx)(l.Z,{details:m})}),(0,v.jsx)(d.Z,{xs:"6",children:(0,v.jsx)(h.Z,{movieImdbId:null===m||void 0===m?void 0:m.imdb_id})})]})})})}},3340:function(n,t,e){e.d(t,{Z:function(){return u}});var i=e(1413),r=e(885),s=e(2791),o=e(3504),l=e(7022),c=e(9743),a=e(2677),d=e(184);function u(n){var t=n.movieImdbId,e=n.serieImdbId,u=n.season,h=n.episode,v=(0,s.useState)([]),m=(0,r.Z)(v,2),f=m[0],j=m[1];return(0,s.useEffect)((function(){if(t){var n="https://torrentio.strem.fun/qualityfilter=4k/stream/movie/".concat(t,".json");fetch(n).then((function(n){return n.json()})).then((function(n){console.log(n);var t=n.streams.map((function(n){return n.title.includes("\n")?(0,i.Z)({title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]},n):n}));j(t)})).catch((function(n){return console.log(n)}))}else{var r="https://torrentio.strem.fun/qualityfilter=4k/stream/series/".concat(e,":").concat(u,":").concat(h,".json");fetch(r).then((function(n){return n.json()})).then((function(n){console.log(n);var t=n.streams.map((function(n){return n.title.includes("\n")?(0,i.Z)({title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]},n):n}));j(t)})).catch((function(n){return console.log(n)}))}}),[t,e,u,h]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Torrents"}),(0,d.jsx)(l.Z,{id:"torrentList",children:f.map((function(n){return(0,d.jsx)(c.Z,{className:"torrentInfo",children:(0,d.jsx)(a.Z,{xs:"12",children:(0,d.jsxs)(o.rU,{className:"torrentLink text-white",to:"/play/".concat(n.infoHash),children:[n.title,n.subtitle&&(0,d.jsxs)("span",{className:"torrentSubtitle",children:[(0,d.jsx)("br",{}),n.subtitle]})]})})},n.infoHash)}))})]})}}}]);
//# sourceMappingURL=557.9af0b372.chunk.js.map