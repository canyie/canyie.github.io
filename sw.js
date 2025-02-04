/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","285dbb7a0fcbb3565b972fc0386fd6ba"],["/2020/02/03/a-new-xposed-style-framework/index.html","44f714b4e4c8757296d130a93c2c77d9"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","76c004cb5f1153877ad89825bd55fb16"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","746ba913ef03964fd3ce7caa1cd76de4"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","e730a450bf60d1839e68a1127520da43"],["/2020/08/18/nbinjection/index.html","9691a4c8bb7e8db52498d09c41c65436"],["/2020/08/20/af447-in-aci/index.html","b57b9c8afeb12b0d9f0cd14f5f0a7812"],["/2021/05/01/anti-magisk-xposed/index.html","b09c530707ca61b1342f59061bf56547"],["/2022/01/09/end-of-2021/index.html","dec52986d70d52b10479ff9eb506f3cb"],["/2022/04/09/property-implementation-and-isolation/index.html","cf7b3a9930fc863c9004c07c21be015e"],["/2023/03/28/system-foundation-for-android-devs/index.html","93c9611f30fe21c6e3c2690d7457c1b5"],["/2023/11/06/first-19-years-of-my-life/index.html","5cf1223c66f88500d07ce91277533e9e"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","31905abbc733ce0a4bc1252b680080f8"],["/2024/04/18/android-security-bulletin-index/index.html","6cceffb1967c5ea76a40b6da25c687b3"],["/2024/08/24/CVE-2024-48336/index.html","af7932d408cdb348a406e013ba4782c7"],["/2024/10/08/CVE-2024-0044/index.html","168f84e3a22bd664af0784ef2d08a64d"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","2818c65f1afaece78c7ee51df6ce9039"],["/2024/11/07/self-changing-data-type/index.html","e2dd9c06bf807a07858c24912a1be720"],["/2025/01/29/android-security-bulletin-index-2025/index.html","19d98eee70bfdb8d224cda2cd1a84831"],["/2025/02/04/CVE-2024-49721/index.html","92aa526b6b7ec709e6457fea9e99c092"],["/404.html","a4c10328b18b9ba78083660d3174652b"],["/about/index.html","d79702573c25cf6bb5488198beece62d"],["/archives/2019/10/index.html","0740f1a035d25607ce5c76dd119ae7fe"],["/archives/2019/index.html","73e9665a3a3f456b298e877d608a08a9"],["/archives/2020/02/index.html","9136422b1a78960acbdf12fdf8bb9326"],["/archives/2020/04/index.html","9a7af5a9b5aaaf2d74b2987a2b2b89c5"],["/archives/2020/06/index.html","2ce12bc726575ddad8abff657ddb3819"],["/archives/2020/08/index.html","41593103db39e0ec729e7b3329125bc6"],["/archives/2020/index.html","b1cd35a0a3ede41a0f1f16525a4fd9a1"],["/archives/2021/05/index.html","53a10d6165b02ca0e3be363c1c373bad"],["/archives/2021/index.html","8ca459ebea8590374f718d01d1c03420"],["/archives/2022/01/index.html","c4eec1bfdf36f44f87c756a4712b529c"],["/archives/2022/04/index.html","7e0eee4d702cb7f8b03a96b494322d4d"],["/archives/2022/index.html","f32ce65dd989b748afeb19785a3e3d97"],["/archives/2023/03/index.html","b887f3ac0cdc1238127631a2ad222798"],["/archives/2023/11/index.html","65cb4515e87f42226097ff495570dfff"],["/archives/2023/index.html","7516b0e97a28edc7999e2048e5220b21"],["/archives/2024/04/index.html","f04ad8752cec70c070e7a9b50d00e4ff"],["/archives/2024/08/index.html","1c9c7aaec6bdecb937dec12dfd9c7556"],["/archives/2024/10/index.html","cd976608b6d247441b09c39010f30c57"],["/archives/2024/11/index.html","335be95075598cc49eb5b2809180762a"],["/archives/2024/index.html","3843ee1f652f10f51702b202f4b7a0ff"],["/archives/2025/01/index.html","fdc3e71bf70704c72c0ed0b5c5bee6d2"],["/archives/2025/02/index.html","517a23ddd58fe17b22cdec06df5376b6"],["/archives/2025/index.html","65ddfacaae03ec374ca5252a6d262602"],["/archives/index.html","96eaa3afa11a40c1263169ed4c2ee7cf"],["/archives/page/2/index.html","96eaa3afa11a40c1263169ed4c2ee7cf"],["/categories/index.html","4154e3e5c506944e39cec6910b92cff3"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4af960a79e2439cdc62b5ff8f4cbb285"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","40585c4a2957eeaa6aaaf874a90de6f1"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","678807997b8c7014a544c3745a6c5c3b"],["/sw-register.js","265019a5fd7d5c827fc0092f7d9ec440"],["/tags/AOP/index.html","d96c6e5ddb0089236c0c4a2f47fd0272"],["/tags/android/index.html","163ea97adbe52cf74dd9f0f12b3feaed"],["/tags/android/page/2/index.html","cdfe2cfdbb08904767171debcc6e46d8"],["/tags/art/index.html","6cdb7c3fc6e593baad8a9d5ac666543d"],["/tags/dex/index.html","29ad24a6902026b8a1a1db4541651962"],["/tags/hidden-api/index.html","5234169700b534f1fc8ed9a12f0e5aa0"],["/tags/hook/index.html","ee433604be2ab713bd845cfa854b8856"],["/tags/index.html","e99626676d5a3948810eb89350356753"],["/tags/kernel/index.html","500fce526c5acf09359760fe17f80d80"],["/tags/magisk/index.html","cd5a5811c17d7516a6e426159dc3af93"],["/tags/property/index.html","a2fae6ddbfb7de388bf3dbedf7b0e10f"],["/tags/system/index.html","37b83d99eb4ab09ba1bdebd5087b4e98"],["/tags/xposed/index.html","4799464b5fa70c916bc5944e89fe875b"],["/tags/安全/index.html","675f7cf22f052c15a1d1cfa3b54cf875"],["/tags/安全补丁分析栏目/index.html","278dbd9e56b99e06102a6b4a6132fced"],["/tags/年鉴/index.html","7d1eb434f96b69b99e21c732ff5d4be6"],["/tags/数据结构与算法/index.html","99b5a5e80750767abdd0a5e375ca7456"],["/tags/注入/index.html","58649caa128afca395c133e8d4349461"],["/tags/航空/index.html","5a0df432b0928a941f87021567db0a7c"],["/tags/闲聊/index.html","d8d0379fbb8ba88f6da3dc65928c64e5"]];
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
