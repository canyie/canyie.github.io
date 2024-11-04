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

var precacheConfig = [["D:/ssz/coding/hexo/public/2019/10/28/hello-world/index.html","36762559ddcdaad3ba5c72965d8c5f7e"],["D:/ssz/coding/hexo/public/2020/02/03/a-new-xposed-style-framework/index.html","7f5cfb16dc1cf37914a3bbf5b0a66d97"],["D:/ssz/coding/hexo/public/2020/02/15/fast-load-dex-on-art-runtime/index.html","d79aa194750e9e911edf47049afebc16"],["D:/ssz/coding/hexo/public/2020/04/27/dynamic-hooking-framework-on-art/index.html","9ce5b91aaf3dfb7de0394b217f5ce409"],["D:/ssz/coding/hexo/public/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","b413645d2a9b8e8522e876f275881aaa"],["D:/ssz/coding/hexo/public/2020/08/18/nbinjection/index.html","9ad5c2349cb72ab9e0ff22220271c6eb"],["D:/ssz/coding/hexo/public/2020/08/20/af447-in-aci/index.html","cfb662fb953527e488ce340cdcce0289"],["D:/ssz/coding/hexo/public/2021/05/01/anti-magisk-xposed/index.html","36b4d81ca5c4c9ab046a8f4a208e867b"],["D:/ssz/coding/hexo/public/2022/01/09/end-of-2021/index.html","eb8211270b10e06bdcfb52cac47fbb27"],["D:/ssz/coding/hexo/public/2022/04/09/property-implementation-and-isolation/index.html","bc43a63d7ca7868b1edea0a02e7b2c19"],["D:/ssz/coding/hexo/public/2023/03/28/system-foundation-for-android-devs/index.html","de83d1b9e63e24cd8fc8da7a3eb33b7e"],["D:/ssz/coding/hexo/public/2023/11/06/first-19-years-of-my-life/index.html","21623adf2fb1198237c2dd4a590ecd59"],["D:/ssz/coding/hexo/public/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","080e2441164edfd5d3b3ce854c0ed37f"],["D:/ssz/coding/hexo/public/2024/04/18/android-security-bulletin-index/index.html","eef2a0c6535c52ce3a01f3f54e7759e3"],["D:/ssz/coding/hexo/public/2024/11/05/android-platform-common-vulnerabilities/index.html","362ebaff8dd23f782f025489e2402735"],["D:/ssz/coding/hexo/public/404.html","a4c10328b18b9ba78083660d3174652b"],["D:/ssz/coding/hexo/public/about/index.html","20fb1857242e3ed8bc0889e7a03dcd01"],["D:/ssz/coding/hexo/public/archives/2019/10/index.html","374224ec105c322ec1f0bd7e4edd857a"],["D:/ssz/coding/hexo/public/archives/2019/index.html","6b065344c16cae8bd0292d5f750d9364"],["D:/ssz/coding/hexo/public/archives/2020/02/index.html","c9cd97a490717fcd8b9e84ace4c2e0bd"],["D:/ssz/coding/hexo/public/archives/2020/04/index.html","c29d14a7790005e3f595b367a0f91c73"],["D:/ssz/coding/hexo/public/archives/2020/06/index.html","a2a6cceacd309ff7bba065f7c556e560"],["D:/ssz/coding/hexo/public/archives/2020/08/index.html","3755fd121dbae2b0851a95cd28090b05"],["D:/ssz/coding/hexo/public/archives/2020/index.html","b7b2a2fa32b3475e401d85089346b671"],["D:/ssz/coding/hexo/public/archives/2021/05/index.html","1bb4762a84abe37040d5ac78196356c1"],["D:/ssz/coding/hexo/public/archives/2021/index.html","5e88e36e0beb44159be0f597bbf343e5"],["D:/ssz/coding/hexo/public/archives/2022/01/index.html","c2715027c9037dea7c72d0951d3a6671"],["D:/ssz/coding/hexo/public/archives/2022/04/index.html","c416404b1fb2a846e696672e82f8adfa"],["D:/ssz/coding/hexo/public/archives/2022/index.html","1cbb4e924107a9b6e7b9d6b8845c5dcc"],["D:/ssz/coding/hexo/public/archives/2023/03/index.html","45748f0e28cc251e7f19e90af40cf212"],["D:/ssz/coding/hexo/public/archives/2023/11/index.html","b44b1835574ee0d361dbe67ee7338478"],["D:/ssz/coding/hexo/public/archives/2023/index.html","874c713fdfa5090346ff956dab129eac"],["D:/ssz/coding/hexo/public/archives/2024/04/index.html","93a527d0a703759b0c404fe4584d0f79"],["D:/ssz/coding/hexo/public/archives/2024/11/index.html","8835432deb75412fe05dbcfbebf2b615"],["D:/ssz/coding/hexo/public/archives/2024/index.html","37fb20ea85ac35947db7757ea81aeb0f"],["D:/ssz/coding/hexo/public/archives/index.html","08b21ae4f244f2c4fc15bd6065d08fcd"],["D:/ssz/coding/hexo/public/archives/page/2/index.html","08b21ae4f244f2c4fc15bd6065d08fcd"],["D:/ssz/coding/hexo/public/categories/index.html","bcbf1a7d89bee004cca842d2d7de8b32"],["D:/ssz/coding/hexo/public/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["D:/ssz/coding/hexo/public/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["D:/ssz/coding/hexo/public/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["D:/ssz/coding/hexo/public/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["D:/ssz/coding/hexo/public/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["D:/ssz/coding/hexo/public/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["D:/ssz/coding/hexo/public/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["D:/ssz/coding/hexo/public/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["D:/ssz/coding/hexo/public/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["D:/ssz/coding/hexo/public/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["D:/ssz/coding/hexo/public/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["D:/ssz/coding/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/ssz/coding/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/ssz/coding/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/ssz/coding/hexo/public/friends/index.html","064b0ee2b05a968b921af91d67d5605c"],["D:/ssz/coding/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/ssz/coding/hexo/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/ssz/coding/hexo/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/ssz/coding/hexo/public/index.html","f0425c73cad5f18b83c1ac5e4e0c85d6"],["D:/ssz/coding/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["D:/ssz/coding/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/ssz/coding/hexo/public/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["D:/ssz/coding/hexo/public/page/2/index.html","de2298e6bd29c1a9440a95453b8d6806"],["D:/ssz/coding/hexo/public/tags/AOP/index.html","b7db7c9fe27ade140c5496d492c316ca"],["D:/ssz/coding/hexo/public/tags/android/index.html","d44675ec7466448b9bf474c4bfa84fdd"],["D:/ssz/coding/hexo/public/tags/android/page/2/index.html","d3db2e2292244f429710e7acd399ad6b"],["D:/ssz/coding/hexo/public/tags/art/index.html","6488569630e4252dabfd727885eab529"],["D:/ssz/coding/hexo/public/tags/dex/index.html","19faecd31146a8c0011aab12d719fedc"],["D:/ssz/coding/hexo/public/tags/hidden-api/index.html","596b123de64e57684c8c635744d638c6"],["D:/ssz/coding/hexo/public/tags/hook/index.html","6693288bcc80050c2ebb7ab810d394c1"],["D:/ssz/coding/hexo/public/tags/index.html","4fdd23bf7866bed0199273745a9707a8"],["D:/ssz/coding/hexo/public/tags/kernel/index.html","88ea2d96a1b836eee1f8feeda1ccb2f2"],["D:/ssz/coding/hexo/public/tags/magisk/index.html","2c5b6e69f7273b0bf03f4f3554063388"],["D:/ssz/coding/hexo/public/tags/property/index.html","9579f63fb20915ab32a87e6ac0458e7e"],["D:/ssz/coding/hexo/public/tags/system/index.html","93a7e5362a393b63e846365a963cdf06"],["D:/ssz/coding/hexo/public/tags/xposed/index.html","cbeb564e18a5289adf6e48579e2d3d71"],["D:/ssz/coding/hexo/public/tags/安全/index.html","d8784a60bc4653f35869c198f0be99c1"],["D:/ssz/coding/hexo/public/tags/年鉴/index.html","619b64c17fcf419464feae4c9b7d66df"],["D:/ssz/coding/hexo/public/tags/数据结构与算法/index.html","3197a80c843bb8246f2411b6aa58647c"],["D:/ssz/coding/hexo/public/tags/注入/index.html","d8e27e17fe95a64fe00af1f641bb077b"],["D:/ssz/coding/hexo/public/tags/航空/index.html","da62809d3d00fb2b48b7269fca9178a7"],["D:/ssz/coding/hexo/public/tags/闲聊/index.html","d615104a0815bf75aeb548773b07a10b"]];
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







