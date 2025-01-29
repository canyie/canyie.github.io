/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","d40281e68f2f9fb7f6f704461fa79b11"],["/2020/02/03/a-new-xposed-style-framework/index.html","e69d768e7847597f1b6b093bfa69237c"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","8df8e977e552fbaa7758f51ac0edc86b"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","df73f94d5cb19b9a999acb20d2c47319"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","fc88a86e713694d86b937ab5c58ec8dc"],["/2020/08/18/nbinjection/index.html","1dc43b241a5134bd01aa2234996a63bf"],["/2020/08/20/af447-in-aci/index.html","4cdd42304d9bb2253eb48a8d3489d33e"],["/2021/05/01/anti-magisk-xposed/index.html","597023ba423e931140084f3a46268acb"],["/2022/01/09/end-of-2021/index.html","9b847a45aa8e3f79b1f331d4c15c70e8"],["/2022/04/09/property-implementation-and-isolation/index.html","9603d6068e3e6b4dd5040ef457bf8f3d"],["/2023/03/28/system-foundation-for-android-devs/index.html","522a403a840dac3be93d3850d80632eb"],["/2023/11/06/first-19-years-of-my-life/index.html","faf88329fecd2458d21f03de7621eb5d"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","d5993bd3f439f4c787c4c3d095bae252"],["/2024/04/18/android-security-bulletin-index/index.html","115b0fa82702b1adae8400b4157da18e"],["/2024/08/24/CVE-2024-48336/index.html","0d24f15c53784e4e24b4557955069a6d"],["/2024/10/08/CVE-2024-0044/index.html","3797eaabd5d26a022b46f9d596ab35ba"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","9bea85c81bafb8c6e3bb697a18d94ee2"],["/2024/11/07/self-changing-data-type/index.html","7f3269df46f1b03f5d3880e8da04f515"],["/2025/01/29/android-security-bulletin-index-2025/index.html","e1fa754453944824aabe1385028f4771"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","f542ddca8cb0f07028d861a9a188748e"],["/archives/2019/10/index.html","8457e102d7661ef2210b643d601baf74"],["/archives/2019/index.html","afb8670c115b14657f12246177a676a5"],["/archives/2020/02/index.html","8944c924324f657670346be51bb95610"],["/archives/2020/04/index.html","2e103e6e04521833d608520f3c3be28c"],["/archives/2020/06/index.html","b0caef050e2757cd0f353aa3da051e73"],["/archives/2020/08/index.html","35c19323186f72dc563506cf374afcb9"],["/archives/2020/index.html","db99f4063ce74bcbc831c4c220c66c64"],["/archives/2021/05/index.html","6210e30ae3db67eeea064176db473554"],["/archives/2021/index.html","c8b62be38cbd57129700c4d776a0f07f"],["/archives/2022/01/index.html","6b52635455712d4566d211f26b9fc5c7"],["/archives/2022/04/index.html","d9049452f3a63c55dcbeb3f47e95774e"],["/archives/2022/index.html","59646aea4a919aa57ad016c1eacb2878"],["/archives/2023/03/index.html","5174101fc2b110073c9dd5e82feb4bf2"],["/archives/2023/11/index.html","555d495a103e2e2d0bd110cb7f3eabb9"],["/archives/2023/index.html","4f1322649ffb7cb7242c45c3ca5125c2"],["/archives/2024/04/index.html","3592c7821d53f3cd8388ec09b329e4ec"],["/archives/2024/08/index.html","8517dc3b3e811950b8ab141ebc98876b"],["/archives/2024/10/index.html","91f205331155a5b27e21b1cb26d0f30c"],["/archives/2024/11/index.html","4923b774d7bef10d50b4de617ebe19e3"],["/archives/2024/index.html","dbefb9639f01434e2d0896e89389f662"],["/archives/2025/01/index.html","25142ea0f9dbe98ff9aeae7c8e9d7af3"],["/archives/2025/index.html","769363afe1f517c7b3234103b15115af"],["/archives/index.html","c757b16bd81974cbd4166117c3f463ae"],["/archives/page/2/index.html","c757b16bd81974cbd4166117c3f463ae"],["/categories/index.html","c93a81e6fe7425547b3e1445d591fa77"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","149469ae9a2726cfe1e6b3ddc38eb9f2"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","7b1c16e7680fc66c40a965b24b444b05"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","ab90b1963d97ffb27f2b557bfd9ae6c6"],["/sw-register.js","4367c0360beb2de0f9a1a70a0051622f"],["/tags/AOP/index.html","c13c453ac1fd7e66419081896e9bbd22"],["/tags/android/index.html","48e812c4b77edf8a999711d046937d1e"],["/tags/android/page/2/index.html","3506b3ffc5d794b3db91f965c6f51508"],["/tags/art/index.html","1c8c1d775cef9abe76bc9c7eb01c091d"],["/tags/dex/index.html","835526b9a170b62328b0a28aabf600fc"],["/tags/hidden-api/index.html","42c6b12dc50228f03f6725ac8fd91359"],["/tags/hook/index.html","1b3985a22a20235c169cd3128590d309"],["/tags/index.html","091b543559d21af754c82ae211521d50"],["/tags/kernel/index.html","cb2f0ca35d99aed84f063c12ef3befa5"],["/tags/magisk/index.html","b59e88ed1a3d15c82ae8ef6558b83a3e"],["/tags/property/index.html","279db4caf1dcb9ae64dda9d0505796f3"],["/tags/system/index.html","87bc23a1f4fdd51bc2ad9afd62919148"],["/tags/xposed/index.html","b528f5589d53013491ea18f397d41223"],["/tags/安全/index.html","8fdb4e41936c7b355550bf483d212e63"],["/tags/安全补丁分析栏目/index.html","762268de1abf76488e1184d63994c8ec"],["/tags/年鉴/index.html","ee8d34560b9f833b4c2b015075d8b025"],["/tags/数据结构与算法/index.html","94e1a705f5de75aeccd29fd6c9c8e04e"],["/tags/注入/index.html","dcf8200f3e0236c9e56d276f0b6ad91d"],["/tags/航空/index.html","9102a6fc627900f3d869f5cde28162e9"],["/tags/闲聊/index.html","bbc4ea4bf9ec4df3da7d3eaddf35c28b"]];
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
