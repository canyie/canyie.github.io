/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","2c30b47bb0b1bd083fd4eb35c64ce54e"],["/2020/02/03/a-new-xposed-style-framework/index.html","ac652fdeea052ad24aa5b4cd25e87d4a"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","f686ecc7caac6c8aed752d7906361460"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","f9cd255e153c2be1bc393ca25e8b2814"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","5994aad502e6700a15f45796995bdeed"],["/2020/08/18/nbinjection/index.html","b8b6f669df3b96dc23dd60933a7e201e"],["/2020/08/20/af447-in-aci/index.html","08fbfa0df4c2057ea445df4d20f39541"],["/2021/05/01/anti-magisk-xposed/index.html","07af3b6d6e7a26966d92fb7d24e9d3c0"],["/2022/01/09/end-of-2021/index.html","b700d38e37cb9de423fe495b249e4ba8"],["/2022/04/09/property-implementation-and-isolation/index.html","140356073eb7d50474c53651ee3c8727"],["/2023/03/28/system-foundation-for-android-devs/index.html","63d7b4659af7a0bf792f12ab8a217f99"],["/2023/11/06/first-19-years-of-my-life/index.html","77e03df3a99acd85c1496af8d51e1193"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","d8640900a1d8dcd067aa010317ceffae"],["/2024/04/18/android-security-bulletin-index/index.html","10e0af11242145d5c23977b824d91b97"],["/2024/08/24/CVE-2024-48336/index.html","32441cb612600ac0039201f232e1e3b5"],["/2024/10/08/CVE-2024-0044/index.html","56181c9d319ae92e302de30db8cbae4b"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","a8d5ef02db70b038915caed896df18fd"],["/2024/11/07/self-changing-data-type/index.html","e5a0f5e4f38b61f5f24cf019151c05ab"],["/2025/01/29/android-security-bulletin-index-2025/index.html","22e5ccc685809de17d29255775fe90df"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","04de7afa01ff7856143098ac498bc4fe"],["/archives/2019/10/index.html","781d42424d00a04ec4ffb28fffd5a8a7"],["/archives/2019/index.html","2efbf9c5d86e75cdf541aecb9ceae7d7"],["/archives/2020/02/index.html","b664173740c8386d9bb196322fea390c"],["/archives/2020/04/index.html","22fd0868d23c419aca27303fa3736b69"],["/archives/2020/06/index.html","b54176171012a12f3e1c25eb6ba7e0cd"],["/archives/2020/08/index.html","cdddcb2f9ad7c75615ec005083184e4d"],["/archives/2020/index.html","34522607faeb9cb855a0f7604f6db87d"],["/archives/2021/05/index.html","35643f39ea69fb525dff16b5be6f9032"],["/archives/2021/index.html","8785495a44e61245e02af4e72f86e9f0"],["/archives/2022/01/index.html","54b791ccaf1065f57622b8b94e7adf98"],["/archives/2022/04/index.html","fdb103fbae4261faa38e627383c284b1"],["/archives/2022/index.html","42190aea6be253fbb4b20f77e59fb050"],["/archives/2023/03/index.html","98b2a7234d4dd6f07cd60711d4ddb351"],["/archives/2023/11/index.html","4f362f7b50b37494046e091045019719"],["/archives/2023/index.html","85f604c6ff38ccac71e6cf7b0b81c514"],["/archives/2024/04/index.html","81cc7d5fb2d9315806faf491562a1f29"],["/archives/2024/08/index.html","ca38cf835a0c16573eb38509a01e5da4"],["/archives/2024/10/index.html","59cebd986c73b9bddb1fd149111ed1db"],["/archives/2024/11/index.html","929ee5f8922a38a94ecba08ec9b92f17"],["/archives/2024/index.html","480eaeaacbf9a1cbde18ee30d51471eb"],["/archives/2025/01/index.html","72dc95e3a9f4e16ce854d0fcedefa618"],["/archives/2025/index.html","fb69e8650e036ef9bbf71594b0dddf4a"],["/archives/index.html","b6ecd99b9afbdfc533375892f54d943b"],["/archives/page/2/index.html","b6ecd99b9afbdfc533375892f54d943b"],["/categories/index.html","9119be0a545fe20e1607574190223437"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3e4770b01956cf58aa1b761198d56c83"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","adb67e84a1b98381f4deec79db4b86c4"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","f2d483dbbe689ac81b0dd59c25298d5b"],["/sw-register.js","fa010b74ed218a9133f0630244cff694"],["/tags/AOP/index.html","555acfd122509c2cc50b9d6cd7bc23a4"],["/tags/android/index.html","40ece6d1afa5292c96020deb5ac2646a"],["/tags/android/page/2/index.html","52db487fdf90cdfd477cc0d2f25cf261"],["/tags/art/index.html","685dec787780f10657083a2a00ff9fee"],["/tags/dex/index.html","a80c11f91cfa1dc2d936fc6a9af556e2"],["/tags/hidden-api/index.html","65e12b8df8d45ca525ffb1a5af7c448c"],["/tags/hook/index.html","ba9b6bd9647496719e44d22ff32290d1"],["/tags/index.html","91c20784e45df8c6bd448f7c0ce0fa86"],["/tags/kernel/index.html","37d7b96918495a9b48a7f6d30de3bc11"],["/tags/magisk/index.html","857c88a6ea924d052d8e0a2fe284f8ea"],["/tags/property/index.html","8003d77ca39a972ded94ef09552814e1"],["/tags/system/index.html","5efe3a2ef40123010e36529f29aa9678"],["/tags/xposed/index.html","7c17b0d02200b4842d956ac5bd607276"],["/tags/安全/index.html","bac002cff387ae78cfac71c63e30c772"],["/tags/安全补丁分析栏目/index.html","4a37459b236fd2f99b3e7a3fdb39ab7d"],["/tags/年鉴/index.html","4cd68a414043193e54bab71f2d0c7c2d"],["/tags/数据结构与算法/index.html","430abc1dcc9b5161a9c14e3f508e1507"],["/tags/注入/index.html","b353b5b28d45beda22d2da51041926ba"],["/tags/航空/index.html","fd815d000f4344e5a1b960e08fb4d314"],["/tags/闲聊/index.html","35d8a17ad304d743bbb8428b097a8441"]];
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
