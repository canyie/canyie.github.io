/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","d8098a4e100d3ddba5e6ef443c439ece"],["/2020/02/03/a-new-xposed-style-framework/index.html","b3f73dfe5a5de50217d65e31fc93c1c5"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","46167e0d70b80cc710ce688f06da57ff"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","018e543a4f1c159466107b0d7da3dad2"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","64a9fc034c9f9488e501a39c5cea8381"],["/2020/08/18/nbinjection/index.html","110eaf5b492a73b2dd7e12c8a20fd077"],["/2020/08/20/af447-in-aci/index.html","1a465f5ad657782fb0d59bf2caca5f3f"],["/2021/05/01/anti-magisk-xposed/index.html","cfffb33aa3bcb2bc900fa543292870ff"],["/2022/01/09/end-of-2021/index.html","d64eb4130b4a8da03d4f266d3a282ebc"],["/2022/04/09/property-implementation-and-isolation/index.html","e0f331d1554ae3fb20f44cc9646f43b9"],["/2023/03/28/system-foundation-for-android-devs/index.html","b406cac62b4625527ab51dc937c5e97e"],["/2023/11/06/first-19-years-of-my-life/index.html","208d55f747e7e23bcb7a79861efbcfdf"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","9f67da482b5b01609deb1324bffb4a06"],["/2024/04/18/android-security-bulletin-index/index.html","14ff9e0aead0945b496a5049ff8bc503"],["/2024/08/24/CVE-2024-48336/index.html","7290fb30d3a673a5eb209ae8a5a2893e"],["/2024/10/08/CVE-2024-0044/index.html","9d9637868b3366e19810924ed1b40741"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","3c68231937e28f3b5c1281142b32e42b"],["/2024/11/07/self-changing-data-type/index.html","186ca89495d98a03531037382118813e"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","adcf5e241c42e761dba877435501a8e2"],["/archives/2019/10/index.html","90177af9c3e4ed6cbfb6526ff47e83f3"],["/archives/2019/index.html","7a5b8947b875b9c9e4fb621b6bb1a88f"],["/archives/2020/02/index.html","b2e40420928118a90d06b24ee659ef96"],["/archives/2020/04/index.html","fe85c9ee9f4a05fb98d9e472dadcb700"],["/archives/2020/06/index.html","5c5f008cdb172b9fa02e38499e473814"],["/archives/2020/08/index.html","269cd1d33a9b98a892923a746d40e3ce"],["/archives/2020/index.html","7d95e9d656d201b93d352799770a3822"],["/archives/2021/05/index.html","d772dff61ed8f9bcd74c7c70d43c3504"],["/archives/2021/index.html","98a42f6ce8c4d829a507847b3d44b06e"],["/archives/2022/01/index.html","47673fca52b5c27d04f74c9a78344b84"],["/archives/2022/04/index.html","4a5d33439206042d68db6be90a104001"],["/archives/2022/index.html","c42c0969944dedd067c49a2455326318"],["/archives/2023/03/index.html","83e33345d0947eda5ce07c9083957edf"],["/archives/2023/11/index.html","91280773adff2c319b1251ae186e98a5"],["/archives/2023/index.html","7ab309e21545d8165821580ffaa64027"],["/archives/2024/04/index.html","ca37e85e6d0915ed90f2d5ddea664f9e"],["/archives/2024/08/index.html","b6c86928dc690d2e0452012ab793b844"],["/archives/2024/10/index.html","af56c48766eb3b59f37ac4567cf569b6"],["/archives/2024/11/index.html","3506f425ae5b05d6bc539d300635be43"],["/archives/2024/index.html","bee3a8da347d4c0393d5655b6c731210"],["/archives/index.html","3cbb913a65ddffc0ac83fae0163f3b26"],["/archives/page/2/index.html","3cbb913a65ddffc0ac83fae0163f3b26"],["/categories/index.html","d937d0d8c0a91df958dd5b4ec4fc0c28"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","5c57a2bcf9abd4deae4d182f2ce73982"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","0deacb34f101fd0c1d0f3c31c7e82b6f"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","2b7ffb28da8d80cdb1b20998abe14f26"],["/sw-register.js","99030e818c534b9780b916ae0413786f"],["/tags/AOP/index.html","8490278c7609d28af795d682b023fb3a"],["/tags/android/index.html","b6de71d621546d73c8104babc4503f1a"],["/tags/android/page/2/index.html","62eca14d07045408aada2cd23dd84834"],["/tags/art/index.html","c6b42114d4991b65d9d2382ec550575a"],["/tags/dex/index.html","15d1bf963e0bebf4ac3f0f7cd75b4a7a"],["/tags/hidden-api/index.html","c97589a6af007a94e3ef67e0bf95f7d8"],["/tags/hook/index.html","6f333d9ace8cfadd4a32d7a056e29c5c"],["/tags/index.html","db3d4559553192ee603be178f691a71e"],["/tags/kernel/index.html","5e63c587e86bc29b7a9e5fe942140b25"],["/tags/magisk/index.html","2f6f17fd215ccfd11bdf1446c82c6cfb"],["/tags/property/index.html","099c07b53d564e045d18b4aebf136a37"],["/tags/system/index.html","7b4adcd084c70b3e7214c205d6e080a0"],["/tags/xposed/index.html","4d0e13ed9084f6a505972b1cff6734a0"],["/tags/安全/index.html","27e91280f6cae98387d1b827ebaa059a"],["/tags/安全补丁分析栏目/index.html","661a00965a9ecdec5158952d3aa690ca"],["/tags/年鉴/index.html","00de1a820e9a40a22081f1540a2a8da7"],["/tags/数据结构与算法/index.html","c57c599aa0abce180e20094830b975bf"],["/tags/注入/index.html","5c890cc6423566b513936b56b4327a72"],["/tags/航空/index.html","abb78b649157fadd94811c8a26cfddf0"],["/tags/闲聊/index.html","fbb66fcefaa908db5a6aab54025eaa78"]];
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
