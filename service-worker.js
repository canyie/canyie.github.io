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

var precacheConfig = [["D:/ssz/coding/hexo/public/2019/10/28/hello-world/index.html","abe1196f216c679974544b93820ce6d7"],["D:/ssz/coding/hexo/public/2020/02/03/a-new-xposed-style-framework/index.html","1b0acc6c5896eed334928752f3942b3f"],["D:/ssz/coding/hexo/public/2020/02/15/fast-load-dex-on-art-runtime/index.html","e25f7dff17a12d5d34753af74124767f"],["D:/ssz/coding/hexo/public/2020/04/27/dynamic-hooking-framework-on-art/index.html","b190febc056f0c5adfe5df05bd02fbc7"],["D:/ssz/coding/hexo/public/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","bd6ed70907c561e09df9e1a16ce341e7"],["D:/ssz/coding/hexo/public/2020/08/18/nbinjection/index.html","2fc2dcbbce7509d1f75b392974faf286"],["D:/ssz/coding/hexo/public/2020/08/20/af447-in-aci/index.html","fbea6f1ad1fef5c0309d551d9edb778b"],["D:/ssz/coding/hexo/public/2021/05/01/anti-magisk-xposed/index.html","28218b0fbd99bc8cefe32969dab08a2d"],["D:/ssz/coding/hexo/public/2022/01/09/end-of-2021/index.html","53508df877accc2a3993d109cf4a977b"],["D:/ssz/coding/hexo/public/2022/04/09/property-implementation-and-isolation/index.html","ee894fa209b94a1ca43a515fb4671d01"],["D:/ssz/coding/hexo/public/2023/03/28/system-foundation-for-android-devs/index.html","03436c8a9dbf66a9fdb87167506d9d07"],["D:/ssz/coding/hexo/public/2023/11/06/first-19-years-of-my-life/index.html","6b38086cd78b8a66bd7f83e09c041777"],["D:/ssz/coding/hexo/public/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","929c70a94441c51d749ac305d1c09beb"],["D:/ssz/coding/hexo/public/2024/04/18/android-security-bulletin-index/index.html","30d1590731b1663a6b8fc2edf3e520fa"],["D:/ssz/coding/hexo/public/404.html","86c1f0a03a8288a2fdb2fc2bb18b6dd4"],["D:/ssz/coding/hexo/public/about/index.html","acc1bd8b55fe2ef1cd88b4977bb5f099"],["D:/ssz/coding/hexo/public/archives/2019/10/index.html","2ff730961cd3b892d67bf1b122822877"],["D:/ssz/coding/hexo/public/archives/2019/index.html","510a0c55495430abf6be8184d728b000"],["D:/ssz/coding/hexo/public/archives/2020/02/index.html","53d8bc9e384b4f5656d8aaf2ae7df526"],["D:/ssz/coding/hexo/public/archives/2020/04/index.html","1982013b615ed04a20ec31a2941f28e0"],["D:/ssz/coding/hexo/public/archives/2020/06/index.html","50fe9199e3b2c40385e5099d2a7aa6b3"],["D:/ssz/coding/hexo/public/archives/2020/08/index.html","bf7eada441a04a5c91d415665cc43153"],["D:/ssz/coding/hexo/public/archives/2020/index.html","463df2a18e3e650c3ae6c1e688b1a8a1"],["D:/ssz/coding/hexo/public/archives/2021/05/index.html","ece632a5a785a9a5d349ed47a91d8793"],["D:/ssz/coding/hexo/public/archives/2021/index.html","c864c62ff4257bec88b4e521494b8c09"],["D:/ssz/coding/hexo/public/archives/2022/01/index.html","39e4fb24a29f7b85d6df27efa6fa4b9a"],["D:/ssz/coding/hexo/public/archives/2022/04/index.html","d8af21cb8455ece07d9c6c9bba0db23a"],["D:/ssz/coding/hexo/public/archives/2022/index.html","fe5a4ec0c9d2801e44d57d54ed320244"],["D:/ssz/coding/hexo/public/archives/2023/03/index.html","ff2d479599f8e4368ee5df9a2da57fac"],["D:/ssz/coding/hexo/public/archives/2023/11/index.html","bff8950bbf9b5dd18a37b1b47f01e24f"],["D:/ssz/coding/hexo/public/archives/2023/index.html","bcc4dd2cabe37cb9ad41fb8cc8a6b78d"],["D:/ssz/coding/hexo/public/archives/2024/04/index.html","0d43ed53207cc34a6a62d1b5dd9c15a3"],["D:/ssz/coding/hexo/public/archives/2024/index.html","423e471071188f98925a29436d2dfea0"],["D:/ssz/coding/hexo/public/archives/index.html","26934b6e5b8fc7e0d6b757fb14ab0aaf"],["D:/ssz/coding/hexo/public/archives/page/2/index.html","26934b6e5b8fc7e0d6b757fb14ab0aaf"],["D:/ssz/coding/hexo/public/categories/index.html","8fd1b971e8dfec8978de735409f16f05"],["D:/ssz/coding/hexo/public/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["D:/ssz/coding/hexo/public/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["D:/ssz/coding/hexo/public/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["D:/ssz/coding/hexo/public/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["D:/ssz/coding/hexo/public/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["D:/ssz/coding/hexo/public/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["D:/ssz/coding/hexo/public/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["D:/ssz/coding/hexo/public/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["D:/ssz/coding/hexo/public/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["D:/ssz/coding/hexo/public/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["D:/ssz/coding/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/ssz/coding/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/ssz/coding/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/ssz/coding/hexo/public/friends/index.html","18e9cba47056139d30195f951d0f7cf4"],["D:/ssz/coding/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/ssz/coding/hexo/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/ssz/coding/hexo/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/ssz/coding/hexo/public/index.html","01cf7052e85b09ec4567429bd74237a4"],["D:/ssz/coding/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["D:/ssz/coding/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/ssz/coding/hexo/public/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["D:/ssz/coding/hexo/public/page/2/index.html","c9b2453987c32a7c5cc0188ef20b0620"],["D:/ssz/coding/hexo/public/tags/AOP/index.html","e8db8eed5b3682d081d358bf9f125a76"],["D:/ssz/coding/hexo/public/tags/android/index.html","3e0da978c8ad4bb30baf131cbf08d25e"],["D:/ssz/coding/hexo/public/tags/art/index.html","045a81a0e9ac12e216d7dfdeaabda78e"],["D:/ssz/coding/hexo/public/tags/dex/index.html","dbda40c12decfc63b715641984f6567d"],["D:/ssz/coding/hexo/public/tags/hidden-api/index.html","616d1d79536822f4ec0d624cff4c243a"],["D:/ssz/coding/hexo/public/tags/hook/index.html","b69734c38d4241d1a3d90953b595df3d"],["D:/ssz/coding/hexo/public/tags/index.html","3fc83f1c9d456c0b28b0b10cbeae0329"],["D:/ssz/coding/hexo/public/tags/kernel/index.html","07f5268ece10a95d1612fb5724a56510"],["D:/ssz/coding/hexo/public/tags/magisk/index.html","319dfd814ef0926202c68693bf9ed2ed"],["D:/ssz/coding/hexo/public/tags/property/index.html","3d4567c622c7e0d9c4cdd7cd11d8f0c9"],["D:/ssz/coding/hexo/public/tags/system/index.html","a503ea56fb8f159f9f7959b27334fb9d"],["D:/ssz/coding/hexo/public/tags/xposed/index.html","e9d9b363830380612572154eb0b73eef"],["D:/ssz/coding/hexo/public/tags/安全/index.html","e84e66bbbe79ba398482d45b7b5b5b49"],["D:/ssz/coding/hexo/public/tags/年鉴/index.html","da5ab6015c9df3c3fbcfa30a1af3b2a1"],["D:/ssz/coding/hexo/public/tags/数据结构与算法/index.html","bf09c43330416d63db1c89f267be3515"],["D:/ssz/coding/hexo/public/tags/注入/index.html","78dfa215e6279b6d50d82700e96f75ed"],["D:/ssz/coding/hexo/public/tags/航空/index.html","aa9f1f8424a1c7e92b91022b8ef13e44"],["D:/ssz/coding/hexo/public/tags/闲聊/index.html","027e27b25ca83c895761015e8a80d041"]];
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







