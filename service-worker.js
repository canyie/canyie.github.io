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

var precacheConfig = [["D:/ssz/coding/hexo/public/2019/10/28/hello-world/index.html","ab8a95f44dad23232f7884449f25a798"],["D:/ssz/coding/hexo/public/2020/02/03/a-new-xposed-style-framework/index.html","c345ec8ec6322c7cf2ee0e4c2e2b8aa3"],["D:/ssz/coding/hexo/public/2020/02/15/fast-load-dex-on-art-runtime/index.html","0669da818ac19ee1875a3c23ce95a153"],["D:/ssz/coding/hexo/public/2020/04/27/dynamic-hooking-framework-on-art/index.html","b051b36bf4356022b7048d9ccddc1442"],["D:/ssz/coding/hexo/public/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","bd21e1b1ad08e92ec809f599be2b8e66"],["D:/ssz/coding/hexo/public/2020/08/18/nbinjection/index.html","8d3b0d01e8ebfc6224a315c1380ebdde"],["D:/ssz/coding/hexo/public/2020/08/20/af447-in-aci/index.html","5f3514774e32a5c1e9d28559bd1c8e6d"],["D:/ssz/coding/hexo/public/2021/05/01/anti-magisk-xposed/index.html","3955b0be507fa09814d7649c2d0777ec"],["D:/ssz/coding/hexo/public/2022/01/09/end-of-2021/index.html","fcae6287fff28d5c420b55487892def3"],["D:/ssz/coding/hexo/public/2022/04/09/property-implementation-and-isolation/index.html","29465f0df8f83a9cd957cd04a2cd638f"],["D:/ssz/coding/hexo/public/2023/03/28/system-foundation-for-android-devs/index.html","6f16a350771d21e6e3ac72f69ba16782"],["D:/ssz/coding/hexo/public/2023/11/06/first-19-years-of-my-life/index.html","65886ff9a69c704a02304c154571edbd"],["D:/ssz/coding/hexo/public/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","e09a3bd0522013622fc3e6cd1b8ae79e"],["D:/ssz/coding/hexo/public/2024/04/18/android-security-bulletin-index/index.html","32637eb272e640f8024f711174299857"],["D:/ssz/coding/hexo/public/2024/11/05/android-platform-common-vulnerabilities/index.html","7f158d72526f21c9d7f521b7044d8df9"],["D:/ssz/coding/hexo/public/2024/11/07/self-changing-data-type/index.html","514fe801a16e84889c1a023c2f23542f"],["D:/ssz/coding/hexo/public/404.html","bcecc37e963227aeac3c86ec2bb62260"],["D:/ssz/coding/hexo/public/about/index.html","f3f33546bad03b77ec44e64fdcd86c46"],["D:/ssz/coding/hexo/public/archives/2019/10/index.html","6cd85fc0995c0ecd4d4886bc304a1ec0"],["D:/ssz/coding/hexo/public/archives/2019/index.html","9067db4884c824b7729ec8c1eb0a29fd"],["D:/ssz/coding/hexo/public/archives/2020/02/index.html","6baf961fb15475c8261208957d3e2487"],["D:/ssz/coding/hexo/public/archives/2020/04/index.html","ee323a413c78317548c384fd8e29efa6"],["D:/ssz/coding/hexo/public/archives/2020/06/index.html","48e87a6df52715dddd2df3fb2516ddfa"],["D:/ssz/coding/hexo/public/archives/2020/08/index.html","657810f3b726c0bcc4cd494ff4978d2e"],["D:/ssz/coding/hexo/public/archives/2020/index.html","fa0dddfc96a5154c4ec279be68fd6127"],["D:/ssz/coding/hexo/public/archives/2021/05/index.html","ba23d30fc0ee4edf81e6de7b3072d157"],["D:/ssz/coding/hexo/public/archives/2021/index.html","003b5ede2cd59f875b492fdbcf4a05ad"],["D:/ssz/coding/hexo/public/archives/2022/01/index.html","a1ac1fc4b67cec6c1fcab4766bb66cc3"],["D:/ssz/coding/hexo/public/archives/2022/04/index.html","24ed358736b7015baed4e71b637ae124"],["D:/ssz/coding/hexo/public/archives/2022/index.html","9bf093ca67ec85a536c6824d2cb86468"],["D:/ssz/coding/hexo/public/archives/2023/03/index.html","41b6217a4e5bb379b7fc0e6178297f91"],["D:/ssz/coding/hexo/public/archives/2023/11/index.html","cfac1bdbaec216f7db552e297ba2162e"],["D:/ssz/coding/hexo/public/archives/2023/index.html","3f313b753dc5f746392bd233ee128148"],["D:/ssz/coding/hexo/public/archives/2024/04/index.html","c76ac9d4e8ea06a5335ee5aa67c581a4"],["D:/ssz/coding/hexo/public/archives/2024/11/index.html","5d4932b5c01e593844693cbe7321addd"],["D:/ssz/coding/hexo/public/archives/2024/index.html","992f4e98ec3363371fa7412317bd351e"],["D:/ssz/coding/hexo/public/archives/index.html","752515c302aebfa03e51a6254ea79b78"],["D:/ssz/coding/hexo/public/archives/page/2/index.html","752515c302aebfa03e51a6254ea79b78"],["D:/ssz/coding/hexo/public/categories/index.html","67fce00b4c94110a50b4f736c5e698bd"],["D:/ssz/coding/hexo/public/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["D:/ssz/coding/hexo/public/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["D:/ssz/coding/hexo/public/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["D:/ssz/coding/hexo/public/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["D:/ssz/coding/hexo/public/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["D:/ssz/coding/hexo/public/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["D:/ssz/coding/hexo/public/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["D:/ssz/coding/hexo/public/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["D:/ssz/coding/hexo/public/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["D:/ssz/coding/hexo/public/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["D:/ssz/coding/hexo/public/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["D:/ssz/coding/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/ssz/coding/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/ssz/coding/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/ssz/coding/hexo/public/friends/index.html","6898689b821b6763ff768802e45af714"],["D:/ssz/coding/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/ssz/coding/hexo/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/ssz/coding/hexo/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/ssz/coding/hexo/public/index.html","c17e09112d1e4158ea4a7716a0eb1e19"],["D:/ssz/coding/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["D:/ssz/coding/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/ssz/coding/hexo/public/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["D:/ssz/coding/hexo/public/page/2/index.html","7e5ae182943dabeb46fe15614c9c626f"],["D:/ssz/coding/hexo/public/tags/AOP/index.html","8b03d9a35871c94d48ade10214485f06"],["D:/ssz/coding/hexo/public/tags/android/index.html","08be551cd6c5e046d2abf012a27a2cfa"],["D:/ssz/coding/hexo/public/tags/android/page/2/index.html","b4aa0f930d101fe178ca6b39fafd0f98"],["D:/ssz/coding/hexo/public/tags/art/index.html","38dd0087d11934e8e9e340cd02fe0ed9"],["D:/ssz/coding/hexo/public/tags/dex/index.html","ce4668bafb609e107f271b3de2e30b05"],["D:/ssz/coding/hexo/public/tags/hidden-api/index.html","855ee07be872979f4ea002d96539d05c"],["D:/ssz/coding/hexo/public/tags/hook/index.html","ea63ce490a4f1f2329f0b3d0cc8b5a43"],["D:/ssz/coding/hexo/public/tags/index.html","43ee37e7c300468321ac05b0b2574b01"],["D:/ssz/coding/hexo/public/tags/kernel/index.html","67208ed9d68587a40486553ca2efc34a"],["D:/ssz/coding/hexo/public/tags/magisk/index.html","8bcc37c53902d05aa71864278d484e32"],["D:/ssz/coding/hexo/public/tags/property/index.html","16e400c0dc550e13a67431e320d26e54"],["D:/ssz/coding/hexo/public/tags/system/index.html","0e4daee0dcb3e11eb4b23391a19469f5"],["D:/ssz/coding/hexo/public/tags/xposed/index.html","2ebc04c5b4adcf5c885819e697b40b05"],["D:/ssz/coding/hexo/public/tags/安全/index.html","5ba660b6e72d382ff97eeced9c311830"],["D:/ssz/coding/hexo/public/tags/年鉴/index.html","ef583e87cab3db065f338a2866401af3"],["D:/ssz/coding/hexo/public/tags/数据结构与算法/index.html","6fd8f1ddd78fe654d958c12b84a13ba3"],["D:/ssz/coding/hexo/public/tags/注入/index.html","e2f410ce436f4e9811cc5061023d7a4e"],["D:/ssz/coding/hexo/public/tags/航空/index.html","2ae3b30ce2bd576db250185a36ae46fc"],["D:/ssz/coding/hexo/public/tags/闲聊/index.html","b8024d0aad915d8cee3b82dadc48ba70"]];
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







