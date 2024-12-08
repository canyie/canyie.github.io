/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","98953662b515c0ab2a8d2bbaa1fbcdfb"],["/2020/02/03/a-new-xposed-style-framework/index.html","cff11794efc38dae292fe16d3e9ed442"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","0cec74dd92d05cef99884dc60eff1b33"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","123e6b0d407a6384e57488e4fd47cf90"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","7777ebda9a3195ee1d9f87820a6d63f7"],["/2020/08/18/nbinjection/index.html","7324d1fc1217ebcb711f5b31b340c9c3"],["/2020/08/20/af447-in-aci/index.html","d959f7ddf8b6ff10f779999f6a9cd8b7"],["/2021/05/01/anti-magisk-xposed/index.html","6e6cf8d4296ab9a0e2fabee6b2dc1cf7"],["/2022/01/09/end-of-2021/index.html","7e2bd06d2007d11a49d02ed3a698d43f"],["/2022/04/09/property-implementation-and-isolation/index.html","3ea93583c9c7e6764b70acbb50da25dd"],["/2023/03/28/system-foundation-for-android-devs/index.html","e55df8c9ecbb5c886aca74a5e12b30b4"],["/2023/11/06/first-19-years-of-my-life/index.html","fe4bfbd81fe926ba2852c29dabf2d40d"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","b7a6d8e8e7f424d7fe127e8a7aff2262"],["/2024/04/18/android-security-bulletin-index/index.html","5ab900319e0b0cf2d97b2bd6f7d28847"],["/2024/08/24/CVE-2024-48336/index.html","69110abf01e0cf5cd00ca7ca19b3dc16"],["/2024/10/08/CVE-2024-0044/index.html","d8f9282992342920cf63466982f0e4c1"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","1f98ea19f95d124e5247e4b1f5f56989"],["/2024/11/07/self-changing-data-type/index.html","8bc387dff53c3dd20979f0462ef74f6f"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","9894fcf01787688f52714545f16bb6c0"],["/archives/2019/10/index.html","1c807148f21920727949d6417c9ce3c2"],["/archives/2019/index.html","492b9a4728e52c1a78bc4b39a8be0878"],["/archives/2020/02/index.html","a7e2935272dc092b08dad83bd42e512c"],["/archives/2020/04/index.html","f1bfb05d3f8297f79a41b2ef48953a59"],["/archives/2020/06/index.html","58970871942d5f23ec9bfc69c977b075"],["/archives/2020/08/index.html","9bfbe7667762345fd106032063d0ef7f"],["/archives/2020/index.html","5122993a89c493c3a4b66c1a6c3d2278"],["/archives/2021/05/index.html","6540162e1f103d8358cf1e55f22f95a7"],["/archives/2021/index.html","c7d4831ec847265e32e6136b19ddd01b"],["/archives/2022/01/index.html","698506e0a4b783e5248357260710818a"],["/archives/2022/04/index.html","acb0f441a250909a1aadcf1d52857a3e"],["/archives/2022/index.html","9b76d453a65c08a3efe741696680732f"],["/archives/2023/03/index.html","f499c1986d29eb31dd0677365d3bfa34"],["/archives/2023/11/index.html","95dd029d10845c32018e885497442ae6"],["/archives/2023/index.html","f60a46ab4e4918c3482232ae14c7056c"],["/archives/2024/04/index.html","e6d2115c66e4f79a06630c044265661f"],["/archives/2024/08/index.html","cb167fd36b94d297425cf7b221257562"],["/archives/2024/10/index.html","0397f8ab8a263b16d92bf6d3e8416ae4"],["/archives/2024/11/index.html","4e693f950d15a7efb8ac00861501d1f3"],["/archives/2024/index.html","94707c1a3bb853e357fd14333f2d5a16"],["/archives/index.html","17d46dd20f4bec0e8afd7d2fbd309350"],["/archives/page/2/index.html","17d46dd20f4bec0e8afd7d2fbd309350"],["/categories/index.html","148fad744902d08e266559e9a49aacef"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","41e456e562afbad9bfd809aee8dcf959"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","269fd7261eabd0c5cf2a31dfe7cb17d1"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","0284e8fae0279263cebf700b0b462e47"],["/sw-register.js","92ca7efb92f18c35178dedf131b1d4a8"],["/tags/AOP/index.html","3cddda29d66978ddd6aea6f0eb42cac9"],["/tags/android/index.html","b13ba7cbe7de4afd5a6b927f661353c6"],["/tags/android/page/2/index.html","10ca2e51a387aaa89fc5a3d7c7479e04"],["/tags/art/index.html","41237cadc61f93ee681e698711065be3"],["/tags/dex/index.html","99329ae408cea0fb7962591e72e2cd52"],["/tags/hidden-api/index.html","915b6386f09f81e3fb73c81c199f2035"],["/tags/hook/index.html","277dc87503ba0b8be16e899b45572beb"],["/tags/index.html","334cb35f5ffbc06a2e4f3e1be2ebf2ec"],["/tags/kernel/index.html","06dada6d3bf3e5d7c83e781861864a9f"],["/tags/magisk/index.html","8d1f2365e0aca87e28e982e44b3030df"],["/tags/property/index.html","1eb59f71116518d328668f2013d78d59"],["/tags/system/index.html","c6ef3fbb5cc90e6484c2dbfd4c20a8d5"],["/tags/xposed/index.html","1dd6e8161d1a1cecb2736077959e3e9a"],["/tags/安全/index.html","db97e07f1bd323b529fe6cd1efa522ef"],["/tags/安全补丁分析栏目/index.html","4fd4431005356f475596e1160512e57b"],["/tags/年鉴/index.html","49e585c29c1af1da28c467846d7dfbd6"],["/tags/数据结构与算法/index.html","cf430e8bdb1cbc753b824f9782254a40"],["/tags/注入/index.html","c1a5c0b8ab9cc08594a9f060cdd21204"],["/tags/航空/index.html","4dac60303443ce34da678cff504b4520"],["/tags/闲聊/index.html","e1c5d6090ffd4a4ab6d7d653fdc7f5ed"]];
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
