"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","5b7f8d63dd27fcd813ede9997f0b629c"],["static/css/main.ed395471.css","a643ef53452c4d384d9749234175c8da"],["static/js/0.04b0ca47.chunk.js","90a794888945b9f207169d5d3e875409"],["static/js/1.5585a9f5.chunk.js","236d76a1536ac42a4f9e41e358b5c308"],["static/js/10.acaaa025.chunk.js","cfc0a91fa936b3683852b0576a4bfd41"],["static/js/11.58311621.chunk.js","761e433b79861b11183177346840eb9d"],["static/js/12.374bbc1b.chunk.js","aff803466346199d3161d9d3dbf5c48d"],["static/js/13.26129163.chunk.js","ad565546eaa0f3a93c28aba110e4fbcb"],["static/js/14.2cc2440c.chunk.js","8512e391de479b7f343965733d63aca0"],["static/js/15.83b4bf08.chunk.js","79bfb11cf698cd729acf61467c3bfb37"],["static/js/16.87694515.chunk.js","d26c8a6a5c734b7851356b92f5c759dc"],["static/js/17.ac71cb62.chunk.js","5dd75890145f8eb5eb33e2938875dc02"],["static/js/18.2b9b9643.chunk.js","a9e32f119a63d177930ac096e055662f"],["static/js/19.c298b077.chunk.js","8f8696dbf4773fbfdf8d3758b89529d2"],["static/js/2.7e8a3d02.chunk.js","ab8f7fb520ec983767f9b027b150f49e"],["static/js/3.2bd3e1cf.chunk.js","1cc2f82ad5d63b913f4aefded19d5779"],["static/js/4.b1493762.chunk.js","060b47f7eb706059ac6f6477de674081"],["static/js/5.d26d06be.chunk.js","336b1438f7ca027288f17ffa7897a7b7"],["static/js/6.144202ef.chunk.js","f3ff8e9061d8acb40889624a04c8df5c"],["static/js/7.ec4de4bd.chunk.js","db424a8984221283b19edfa229a9ec27"],["static/js/8.94371995.chunk.js","88a16e27c4010d0fd69f6de77d35edb1"],["static/js/9.e078979b.chunk.js","cab34f23fd89d5bc1a4cde3d7babba6d"],["static/js/main.8195e2bc.js","46d68968dfaf4bccf446860432c70102"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});