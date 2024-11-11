/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","bab6f61dd125769fd1e9e3bf9276ec62"],["/2020/02/03/a-new-xposed-style-framework/index.html","dcbc59a2d4213850dfd1cdd9eeacd5e0"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","6f80fd0baf7e8d0ebcf9ea2e22888172"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","e531dc2822cda0e4d0aff2d4ce8144a6"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","5ae4a11092df5201486d0b83ab0d4dde"],["/2020/08/18/nbinjection/index.html","68db9982f506b4f2a903798ed9c892dc"],["/2020/08/20/af447-in-aci/index.html","58498b7ddb2aecd5f6b34a3a73e47f00"],["/2021/05/01/anti-magisk-xposed/index.html","c21090badb5cde96ae306167c20dc853"],["/2022/01/09/end-of-2021/index.html","9fdfb8d43983413ff6d39eac66d86ea8"],["/2022/04/09/property-implementation-and-isolation/index.html","37941d4a0ba0f752e92427bfec84bf37"],["/2023/03/28/system-foundation-for-android-devs/index.html","df3df35b3e292d576393b870f9ef298b"],["/2023/11/06/first-19-years-of-my-life/index.html","063d01ce3aa0050b57e99995008cdc21"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","103b4d83d10611031dbdd85859da2130"],["/2024/04/18/android-security-bulletin-index/index.html","266df0122aab711f4f83a54263d19c95"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","7cfb6858d30e9947f2171af9e65487d3"],["/2024/11/07/self-changing-data-type/index.html","f83c441ae81153bf18c275fa088f2a6a"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","adcf5e241c42e761dba877435501a8e2"],["/archives/2019/10/index.html","5069b076b0a874f146b5ceaf130729e0"],["/archives/2019/index.html","e7edbe6c8f3f87a9b7528f587a127b4d"],["/archives/2020/02/index.html","15191dd33545837308b26524abe60574"],["/archives/2020/04/index.html","50832807a7175014990f49f2fb6bc808"],["/archives/2020/06/index.html","c970815988b9f8d6a9cda59ab306c294"],["/archives/2020/08/index.html","271916d76f3ee2decd765a355b675836"],["/archives/2020/index.html","c6e968341d4fc5020ee209171326d124"],["/archives/2021/05/index.html","c9924f5df67e8c6af9fe88b1a07e8807"],["/archives/2021/index.html","7255d3360bb041c066cc81ea2146cdff"],["/archives/2022/01/index.html","e590f1ff7075fde552c725d8b30fbdbf"],["/archives/2022/04/index.html","acd67b8205c2458bcdd39829cd259569"],["/archives/2022/index.html","bce4a54c4bdd9e015d0147f21945d76b"],["/archives/2023/03/index.html","f1beefad1bf3cfe18745e8603b55cb7e"],["/archives/2023/11/index.html","0308e84f7c55921a4f46a1a021f8b69d"],["/archives/2023/index.html","fc031bf90e5e2539f5c0f578d618e336"],["/archives/2024/04/index.html","f08c4a791921a4388fd957205233b0ae"],["/archives/2024/11/index.html","d09ca8c5ba1c67817bf7b8e2d26288a9"],["/archives/2024/index.html","57674941ede528863c5f8d4387269b12"],["/archives/index.html","b996ff288556e144e96950bce1a70a14"],["/archives/page/2/index.html","b996ff288556e144e96950bce1a70a14"],["/categories/index.html","6b6dd850687f119f421eea12c1b7ed02"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","32aaedd2054f893977ce097b74268163"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","41dcea2f4494f113fc701707a38af49b"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","1118c8430f03c93c07fc15b3dba9f02d"],["/sw-register.js","5d09f80d800bd35dbda58c8d795aeaaf"],["/tags/AOP/index.html","949be509ddd2daa4adc66d34126e8c62"],["/tags/android/index.html","cf1cf594db3ea2b7944ffbadeea3b990"],["/tags/android/page/2/index.html","9e0aa3f175ef87f08ea806f95e0fcc5f"],["/tags/art/index.html","531e2186184fe5b44b5cdcb0e011f880"],["/tags/dex/index.html","8b7ea2cf53073bf916d269aea446b144"],["/tags/hidden-api/index.html","ced1cb64c4e8597a4751709203b40f94"],["/tags/hook/index.html","9c1c596babd460aa6a4a6dd03ddabcf4"],["/tags/index.html","2317f2add02740a184672268398adca7"],["/tags/kernel/index.html","95661ca65ede681935bb718417814ca7"],["/tags/magisk/index.html","bc1ab7bf61a15acc42f498be17a7bb89"],["/tags/property/index.html","ce32c08d5781da039aefbe7a860e6222"],["/tags/system/index.html","bcd2d65cdf482585befc72c1ce685f2a"],["/tags/xposed/index.html","d3ed49c751ae44e6969c00bfe8d85c73"],["/tags/安全/index.html","60f542a6648b65e8056bbe703cf04f20"],["/tags/年鉴/index.html","980e2af49d8abb42c09bd74f01d07384"],["/tags/数据结构与算法/index.html","403d05d7963b517107b856cf1d2155c8"],["/tags/注入/index.html","447270e60844f69b1012d5faaf5dd887"],["/tags/航空/index.html","e4dd0ed792d0aa9d0c03e5372b21a63b"],["/tags/闲聊/index.html","8a55f5eee2fab1ec83958dfec328df85"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
