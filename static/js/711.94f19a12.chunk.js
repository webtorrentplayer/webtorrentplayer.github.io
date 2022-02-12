"use strict";(self.webpackChunkwebtorrentplayer_react_imdb=self.webpackChunkwebtorrentplayer_react_imdb||[]).push([[711],{1711:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var i=t(1413),s=t(2982),r=t(885),o=(t(7729),t(2791)),c=t(6871),l=t(4302),a=t(7022),d=t(9743),u=t(2677),h=t(5169),v=t(3340),m=t(184);function f(){var n=(0,c.UO)(),e=(0,o.useState)([]),t=(0,r.Z)(e,2),f=t[0],x=t[1];return(0,o.useEffect)((function(){var e=n.imdb_id,t=n.season.length>1?n.season:"0"+n.season,r=n.episode.length>1?n.episode:"0"+n.episode,o="https://v3-cinemeta.strem.io/meta/series/".concat(e,".json");fetch(o).then((function(n){return n.json()})).then((function(n){console.log(n);var e=n.meta.videos.map((function(n){return n.season}));console.log(e),e.sort((function(n,e){return n-e}));var o=(0,s.Z)(new Set(e));o.includes(0)&&o.push(o.splice(o.indexOf(0),1)[0]),console.log(o);var c="".concat(window.location.origin,"/series/").concat(n.meta.imdb_id),l=(0,i.Z)((0,i.Z)({},n.meta),{},{shareUrl:c,seasons:o});console.log(l),x(l),document.title="".concat(n.meta.name," S").concat(t,"E").concat(r," - ").concat(h.Z.SITE_TITLE)})).catch((function(n){return console.log(n)}))}),[n.imdb_id,n.season,n.episode]),(0,m.jsx)("div",{className:"imdb-title-container dark-overlay",style:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+(null===f||void 0===f?void 0:f.background)+")"},children:(0,m.jsx)(a.Z,{children:(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(u.Z,{className:"",xs:12,md:6,xl:8,children:(0,m.jsx)(l.Z,{details:f})}),(0,m.jsxs)(u.Z,{className:"",xs:12,md:6,xl:4,children:["Season ",n.season," - Episode ",n.episode,(0,m.jsx)(v.Z,{serieImdbId:null===f||void 0===f?void 0:f.imdb_id,season:n.season,episode:n.episode})]})]})})})}},4302:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(4483),s=t(3174),r=t(7118),o=t(184);function c(n){var e=n.shareUrl;return(0,o.jsxs)("div",{className:"social-buttons-wrapper",children:[(0,o.jsx)("a",{className:"btn btn-circle",href:"https://api.whatsapp.com/send?text=".concat(e),children:(0,o.jsx)(i.G,{icon:r.VHX,size:"lg"})}),(0,o.jsx)("a",{className:"btn btn-circle",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(e),children:(0,o.jsx)(i.G,{icon:r.neY,size:"lg"})}),(0,o.jsx)("a",{className:"btn btn-circle",href:"https://twitter.com/intent/tweet?text=".concat(e),children:(0,o.jsx)(i.G,{icon:r.mdU,size:"lg"})}),(0,o.jsx)("button",{className:"btn btn-circle",onClick:function(){return navigator.clipboard.writeText(e)},children:(0,o.jsx)(i.G,{icon:s.nNP,size:"lg"})})]})}function l(n){var e,t,i,s,r=n.details;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:null!==r&&void 0!==r&&r.logo?(0,o.jsx)("img",{className:"imdb-logo",src:null===r||void 0===r?void 0:r.logo,alt:null===r||void 0===r?void 0:r.name}):null===r||void 0===r?void 0:r.name}),(0,o.jsx)(c,{shareUrl:r.shareUrl}),(0,o.jsxs)("p",{children:[(null===r||void 0===r?void 0:r.runtime)&&(0,o.jsxs)("span",{children:[null===r||void 0===r?void 0:r.runtime," | "]}),(0,o.jsxs)("span",{children:[null===r||void 0===r?void 0:r.year," | "]}),(0,o.jsxs)("span",{children:["IMDB rating: ",null===r||void 0===r?void 0:r.imdbRating]})]}),(null===r||void 0===r?void 0:r.genre)&&r.genre.length>0&&(0,o.jsxs)("div",{className:"genre-container",children:[(0,o.jsx)("h3",{children:"Genre"}),null===r||void 0===r||null===(e=r.genre)||void 0===e?void 0:e.map((function(n){return(0,o.jsxs)("span",{children:[n," "]},n)}))]}),(null===r||void 0===r?void 0:r.director)&&r.director.length>0&&(0,o.jsxs)("div",{className:"director-container",children:[(0,o.jsx)("h3",{children:"Director"}),null===r||void 0===r||null===(t=r.director)||void 0===t?void 0:t.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]}),(null===r||void 0===r?void 0:r.writer)&&r.writer.length>0&&(0,o.jsxs)("div",{className:"writer-container",children:[(0,o.jsx)("h3",{children:"Writer"}),null===r||void 0===r||null===(i=r.director)||void 0===i?void 0:i.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]}),(null===r||void 0===r?void 0:r.cast)&&r.cast.length>0&&(0,o.jsxs)("div",{className:"cast-container",children:[(0,o.jsx)("h3",{children:"Cast"}),null===r||void 0===r||null===(s=r.cast)||void 0===s?void 0:s.map((function(n){return(0,o.jsxs)("span",{children:[n,"\xa0"]},n)}))]})]})}},3340:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(1413),s=t(885),r=t(2791),o=t(3504),c=t(7022),l=t(9743),a=t(2677),d=t(184);function u(n){var e=n.movieImdbId,t=n.serieImdbId,u=n.season,h=n.episode,v=(0,r.useState)([]),m=(0,s.Z)(v,2),f=m[0],x=m[1];return(0,r.useEffect)((function(){if(e){var n="https://torrentio.strem.fun/qualityfilter=4k/stream/movie/".concat(e,".json");fetch(n).then((function(n){return n.json()})).then((function(n){console.log(n);var e=n.streams.map((function(n){return n.title.includes("\n")?(0,i.Z)((0,i.Z)({},n),{},{title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]}):n}));x(e)})).catch((function(n){return console.log(n)}))}else{var s="https://torrentio.strem.fun/qualityfilter=4k/stream/series/".concat(t,":").concat(u,":").concat(h,".json");fetch(s).then((function(n){return n.json()})).then((function(n){console.log(n);var e=n.streams.map((function(n){return n.title.includes("\n")?(0,i.Z)((0,i.Z)({},n),{},{title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]}):n}));x(e)})).catch((function(n){return console.log(n)}))}}),[e,t,u,h]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Torrents"}),(0,d.jsx)(c.Z,{id:"torrentList",children:f.map((function(n){return(0,d.jsx)(l.Z,{className:"torrentInfo",children:(0,d.jsx)(a.Z,{xs:"12",children:(0,d.jsxs)(o.rU,{className:"torrentLink text-white",to:"/play/".concat(n.infoHash),children:[n.title,n.subtitle&&(0,d.jsxs)("span",{className:"torrentSubtitle",children:[(0,d.jsx)("br",{}),n.subtitle]})]})})},n.infoHash)}))})]})}},7729:function(){}}]);
//# sourceMappingURL=711.94f19a12.chunk.js.map