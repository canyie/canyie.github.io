/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/ssz/coding/hexo/public/2019/10/28/hello-world/index.html","3bc24420cf28115b34cc713c7ab63f44"],["D:/ssz/coding/hexo/public/2020/02/03/a-new-xposed-style-framework/index.html","b95446b09d20267dac43db8e5bd6d923"],["D:/ssz/coding/hexo/public/2020/02/15/fast-load-dex-on-art-runtime/index.html","3d9a409346af36a40a6ba2ddd8a761aa"],["D:/ssz/coding/hexo/public/2020/04/27/dynamic-hooking-framework-on-art/index.html","a484e1672dba26b73951cd4913b2aa01"],["D:/ssz/coding/hexo/public/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","6605293455dcc33b19e27bf43030136d"],["D:/ssz/coding/hexo/public/2020/08/18/nbinjection/index.html","0242568fbe0d1ff512c784fb108bf4cb"],["D:/ssz/coding/hexo/public/2020/08/20/af447-in-aci/index.html","c5aeb39be450a3cfc79b6dc202ff379b"],["D:/ssz/coding/hexo/public/2021/05/01/anti-magisk-xposed/index.html","866bc1e92c01270388cd810ae3bd904f"],["D:/ssz/coding/hexo/public/2022/01/09/end-of-2021/index.html","9689c03d58cd858f783cbab15cc10903"],["D:/ssz/coding/hexo/public/2022/04/09/property-implementation-and-isolation/index.html","16ee901b88b3654f02363de7658a96a0"],["D:/ssz/coding/hexo/public/2023/03/28/system-foundation-for-android-devs/index.html","9f000451ced8773296a8268d1e93ede7"],["D:/ssz/coding/hexo/public/404.html","86c1f0a03a8288a2fdb2fc2bb18b6dd4"],["D:/ssz/coding/hexo/public/about/index.html","6c6b16aef176363f570431f1b262f403"],["D:/ssz/coding/hexo/public/archives/2019/10/index.html","29943f719e13667203d66bb3cc1b760b"],["D:/ssz/coding/hexo/public/archives/2019/index.html","f6767da7376d86868d376e721aef003e"],["D:/ssz/coding/hexo/public/archives/2020/02/index.html","615e12e20d7a9bbdf3226e61ec70d25a"],["D:/ssz/coding/hexo/public/archives/2020/04/index.html","2878f8c75408e06b43a0d1805f6a580d"],["D:/ssz/coding/hexo/public/archives/2020/06/index.html","852432dc5d0a2ce310c3535f8a084664"],["D:/ssz/coding/hexo/public/archives/2020/08/index.html","8b8d65cc9489e8750843bcd2d3d478ab"],["D:/ssz/coding/hexo/public/archives/2020/index.html","64822b30d0d2d4c09ad32817adbbb408"],["D:/ssz/coding/hexo/public/archives/2021/05/index.html","b229f2416317466573decf9c3eaf9f85"],["D:/ssz/coding/hexo/public/archives/2021/index.html","6ef8b97177f822a38252c67e4987073d"],["D:/ssz/coding/hexo/public/archives/2022/01/index.html","6c02a01cc559a6ee241b9ce2edb848f9"],["D:/ssz/coding/hexo/public/archives/2022/04/index.html","9cffbf70f04162afbf9d0357f18fd31f"],["D:/ssz/coding/hexo/public/archives/2022/index.html","57d60b69298cf6bdd7cd868ec4626fe0"],["D:/ssz/coding/hexo/public/archives/2023/03/index.html","1c28d88f246cca2a083571a6c8df08d7"],["D:/ssz/coding/hexo/public/archives/2023/index.html","673508c852d77b18a22db91151ea7b35"],["D:/ssz/coding/hexo/public/archives/index.html","cde27cac11f26b04bb592a8a65d04ded"],["D:/ssz/coding/hexo/public/archives/page/2/index.html","cde27cac11f26b04bb592a8a65d04ded"],["D:/ssz/coding/hexo/public/categories/index.html","bfa9c807b92a6f17ac9ad757abafe512"],["D:/ssz/coding/hexo/public/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["D:/ssz/coding/hexo/public/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["D:/ssz/coding/hexo/public/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["D:/ssz/coding/hexo/public/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["D:/ssz/coding/hexo/public/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["D:/ssz/coding/hexo/public/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["D:/ssz/coding/hexo/public/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["D:/ssz/coding/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/ssz/coding/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/ssz/coding/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/ssz/coding/hexo/public/friends/index.html","0288d78cf8368559854823a9811259e6"],["D:/ssz/coding/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/ssz/coding/hexo/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/ssz/coding/hexo/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/ssz/coding/hexo/public/index.html","0eef56313c4f78f227767891ad42bc80"],["D:/ssz/coding/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["D:/ssz/coding/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/ssz/coding/hexo/public/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["D:/ssz/coding/hexo/public/page/2/index.html","76a668cdba13d4df3fae7d61346ef8fb"],["D:/ssz/coding/hexo/public/tags/AOP/index.html","75dcba26c71a21639b99eccd5ec08f96"],["D:/ssz/coding/hexo/public/tags/android/index.html","e30bee5e627ec4c816bdfd961d92b708"],["D:/ssz/coding/hexo/public/tags/art/index.html","5b2887e0f8a5f07324a18446133c5b9d"],["D:/ssz/coding/hexo/public/tags/dex/index.html","d33a3624d01a9e692cf3cc1296e08f10"],["D:/ssz/coding/hexo/public/tags/hidden-api/index.html","577088cde3c52e742d9b23dd6b460c14"],["D:/ssz/coding/hexo/public/tags/hook/index.html","edbd755cd8afa28ca0f0f697f8e237ee"],["D:/ssz/coding/hexo/public/tags/index.html","43682398ace4edce2f29a5f4553fb901"],["D:/ssz/coding/hexo/public/tags/kernel/index.html","827b05fe8d4df023b7e338e401ac3e40"],["D:/ssz/coding/hexo/public/tags/magisk/index.html","02bb2fa65bd2fa25d594f2c73c3e6a9b"],["D:/ssz/coding/hexo/public/tags/property/index.html","d69bc1232944b754d14ead8d909a7fad"],["D:/ssz/coding/hexo/public/tags/system/index.html","76ac68ef7bb8140dadf41490484909d6"],["D:/ssz/coding/hexo/public/tags/xposed/index.html","f524d487ebdc66bb145590771da474d9"],["D:/ssz/coding/hexo/public/tags/年鉴/index.html","91da6945c03c19d67dea13ea6ce60a5e"],["D:/ssz/coding/hexo/public/tags/数据结构与算法/index.html","448ec9bc7d1128ba71d665906563fcf8"],["D:/ssz/coding/hexo/public/tags/注入/index.html","f819272fb4d99f926ead8e059f4e88ae"],["D:/ssz/coding/hexo/public/tags/航空/index.html","0a7b2967f8c169ef516c3a8922faf2e8"],["D:/ssz/coding/hexo/public/tags/闲聊/index.html","eb295143bb835e39b5bb87e658be3b18"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







