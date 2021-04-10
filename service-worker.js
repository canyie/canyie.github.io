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

var precacheConfig = [["D:/ssz/coding/hexo/public/2019/10/28/hello-world/index.html","95f403a2ce1c91ad43c42d3f537ac28d"],["D:/ssz/coding/hexo/public/2020/02/03/a-new-xposed-style-framework/index.html","ef3fddef5be240bdd798df5a56b05015"],["D:/ssz/coding/hexo/public/2020/02/15/fast-load-dex-on-art-runtime/index.html","f6f993ce15696742cd5ab1f8940b7e60"],["D:/ssz/coding/hexo/public/2020/04/27/dynamic-hooking-framework-on-art/index.html","d54e1f12f4f360f28d5f36c2bb2d05c6"],["D:/ssz/coding/hexo/public/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","5b83978183651d9f5ae3ffcef9f9a07b"],["D:/ssz/coding/hexo/public/2020/08/18/nbinjection/index.html","280850675725515ee25fc7dec40e2207"],["D:/ssz/coding/hexo/public/2020/08/20/af447-in-aci/index.html","f2b4e50cc00c6b7b4aadde228da52580"],["D:/ssz/coding/hexo/public/404.html","86c1f0a03a8288a2fdb2fc2bb18b6dd4"],["D:/ssz/coding/hexo/public/about/index.html","cd2054c4a55158f624c2d217b6f6d97f"],["D:/ssz/coding/hexo/public/archives/2019/10/index.html","7c78043b3467229749df7acb52cb352f"],["D:/ssz/coding/hexo/public/archives/2019/index.html","4157499bedceac1ca2596cf2f19f5ccc"],["D:/ssz/coding/hexo/public/archives/2020/02/index.html","745f29fa5509299f8db3b2858113f584"],["D:/ssz/coding/hexo/public/archives/2020/04/index.html","8113dc579343664cce477ed4d196b31c"],["D:/ssz/coding/hexo/public/archives/2020/06/index.html","2fe9f73dac67fcad50dd493e7c182d62"],["D:/ssz/coding/hexo/public/archives/2020/08/index.html","91de9bb19c753b7590975f8107582385"],["D:/ssz/coding/hexo/public/archives/2020/index.html","c7b815d18e1da71963086913378e88a2"],["D:/ssz/coding/hexo/public/archives/index.html","fea05498403bef8a89d7eb5cc95557bf"],["D:/ssz/coding/hexo/public/categories/index.html","8bcfa9152a34ee9639f60030e48c4ebd"],["D:/ssz/coding/hexo/public/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["D:/ssz/coding/hexo/public/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["D:/ssz/coding/hexo/public/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["D:/ssz/coding/hexo/public/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["D:/ssz/coding/hexo/public/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["D:/ssz/coding/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/ssz/coding/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/ssz/coding/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/ssz/coding/hexo/public/friends/index.html","c711eefd1f9990c55bbb59d4094a642b"],["D:/ssz/coding/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/ssz/coding/hexo/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/ssz/coding/hexo/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/ssz/coding/hexo/public/index.html","852b9cdc2e5fac29f27d93b6cdfad4e4"],["D:/ssz/coding/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["D:/ssz/coding/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/ssz/coding/hexo/public/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["D:/ssz/coding/hexo/public/tags/AOP/index.html","999dc500eca07cf65aabed632b71854c"],["D:/ssz/coding/hexo/public/tags/android/index.html","cab9ab4fee6c60e668c0544bbfb40f4e"],["D:/ssz/coding/hexo/public/tags/art/index.html","4a6aa8cc0de1fb2f45d1060914d3d366"],["D:/ssz/coding/hexo/public/tags/dex/index.html","f6e7b62cff83e11a28d66fbdfbbce29d"],["D:/ssz/coding/hexo/public/tags/hidden-api/index.html","6c8d721702eae592898da664d7aed6b2"],["D:/ssz/coding/hexo/public/tags/hook/index.html","ed1ce423a56b50319b1a0ef6fb6ddfb2"],["D:/ssz/coding/hexo/public/tags/index.html","abc768eadd18718ecff83983f10a7bf3"],["D:/ssz/coding/hexo/public/tags/xposed/index.html","427298122a4d6475618cc1de74f429d4"],["D:/ssz/coding/hexo/public/tags/注入/index.html","c5700da8190fae3dcddae63add256005"],["D:/ssz/coding/hexo/public/tags/航空/index.html","d45365c23625d5a93a6ea596a29d4dfc"],["D:/ssz/coding/hexo/public/tags/闲聊/index.html","0b0dc0fafefa0bbe50f3b59ee3e5bda9"]];
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







