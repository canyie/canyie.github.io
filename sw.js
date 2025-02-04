/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","435f3c159dd36441cb0c1e6a7c32a331"],["/2020/02/03/a-new-xposed-style-framework/index.html","1bc480df458315db718bb006e71413c9"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","f9888477e4cca084984641a8d1086dc6"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","edd9e8f4ded215f47b27781565a3670e"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","de84aec64199a9c3078e3bf4f56b0945"],["/2020/08/18/nbinjection/index.html","c844b5397fb8e646275f84ea9030c63a"],["/2020/08/20/af447-in-aci/index.html","1b5b59f1009ef9e1d29fc71d4dfb119d"],["/2021/05/01/anti-magisk-xposed/index.html","9e91efb6d30fa1b7fa984eff2495a85a"],["/2022/01/09/end-of-2021/index.html","db6686a582c39a44760fd016791963e1"],["/2022/04/09/property-implementation-and-isolation/index.html","c1eee6eed7dafefb7c7db61ecaf6accc"],["/2023/03/28/system-foundation-for-android-devs/index.html","da647623bfe294391f4611398818588a"],["/2023/11/06/first-19-years-of-my-life/index.html","c860bc334147f5adc4b0c3f82499bc60"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","ecebb68ba5f49e8b470a3d6b2eec637d"],["/2024/04/18/android-security-bulletin-index/index.html","7f491561633c17c507799737daabce2c"],["/2024/08/24/CVE-2024-48336/index.html","dd111e8d53fe5aa2f4811d8f7e733404"],["/2024/10/08/CVE-2024-0044/index.html","6825ff5418c743cd0e9077fa0a1d068e"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","a2fb037c7618d8c02feb1f9926df25c1"],["/2024/11/07/self-changing-data-type/index.html","750377cd1fd39482820a85acde732301"],["/2025/01/29/android-security-bulletin-index-2025/index.html","a254b32d90e1c82d904bc86ebc3d9252"],["/2025/02/04/CVE-2024-49721/index.html","20fa3a692ea5a9dc19d94fa81e7533ed"],["/404.html","bcecc37e963227aeac3c86ec2bb62260"],["/about/index.html","94046b775524caba462c3c7f4a045410"],["/archives/2019/10/index.html","fdc9cf6375a4269af73246e6cfbbd5e0"],["/archives/2019/index.html","9b96b499ae8ce3efbbd9560790844681"],["/archives/2020/02/index.html","ae8633b68b952059b9598943404300b4"],["/archives/2020/04/index.html","576ffbcefed1c5da9013081cb1b300c3"],["/archives/2020/06/index.html","227e8d9d3916828ffcc0af672ee35d7f"],["/archives/2020/08/index.html","905f6e4ffc4cfa9164f96073c22b7ea7"],["/archives/2020/index.html","fa7f2beec56e13be2a70d2567fbb8b10"],["/archives/2021/05/index.html","bc648446e18e0c8f7a023ad5c57d2cdc"],["/archives/2021/index.html","23fbf2227ced037ca3dc96bb18c22637"],["/archives/2022/01/index.html","8dd827c10a95a3a7af52e602d018ba61"],["/archives/2022/04/index.html","f4eeaab4916fefcf25bf4bd2d1f923ed"],["/archives/2022/index.html","bf431eab37c0eae2fc650ef0443bbd60"],["/archives/2023/03/index.html","987f6bfee7bb4da4b94ef633e97227be"],["/archives/2023/11/index.html","431b946d2c8e87604c6616544bc01464"],["/archives/2023/index.html","69cbdaa9ad19889526dcecd6d7475b62"],["/archives/2024/04/index.html","46b89c029cb4307f6c7a9c1e2d31b6bc"],["/archives/2024/08/index.html","3f38ee690f3ba686a0f8cfd57c7c1a5d"],["/archives/2024/10/index.html","cf7884cadd62ecf2e096c4ed59f6fb56"],["/archives/2024/11/index.html","403f06d7576d3569d7d47dce09058aba"],["/archives/2024/index.html","3d65f161cf0831c2200de46d1fc01bf6"],["/archives/2025/01/index.html","ba21c657e54e9319d01d9d140077e843"],["/archives/2025/02/index.html","eb7cfb4cea80713e0b80188034de6d23"],["/archives/2025/index.html","8d5b231aba367d912be103e4f86b031e"],["/archives/index.html","88309bd87b856a274e330c8b688ed585"],["/archives/page/2/index.html","88309bd87b856a274e330c8b688ed585"],["/categories/index.html","f2c982150de38129c90e1547ce51832e"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","30de4c923aea3daeb68cabe2803bf32d"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","7deb5dbd91cc20a4c3f1c3c97c0ee3da"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","1023e6ec3c4cafabde77f119bd240a01"],["/sw-register.js","8984f854b9a3b5bcc957216b4be4310c"],["/tags/AOP/index.html","c8d25435a514aa55a353815e0185131e"],["/tags/android/index.html","4687a477d8f9c5e610e2aaa9519a9cde"],["/tags/android/page/2/index.html","867a9d258a47f4f436c92c07277aba0d"],["/tags/art/index.html","cef737b23d7d6b7054debbd16151fa2c"],["/tags/dex/index.html","23be3a0fb019e194c4832ce493b84a13"],["/tags/hidden-api/index.html","3647c5d459f44d1c1ec60cdc5c9edf61"],["/tags/hook/index.html","b280e15dd7d4eded16faa4d205a76ffe"],["/tags/index.html","9412e29cf051aa8e02a7706911e1ad48"],["/tags/kernel/index.html","62c0b429d0c5b809fb2822b01d1c0634"],["/tags/magisk/index.html","696ec54429e6bf89f441ce70115365a6"],["/tags/property/index.html","165f6a0b585f7040e80bf8b46ae101dc"],["/tags/system/index.html","d21d3c52e3f95c858541a237c1712eba"],["/tags/xposed/index.html","0a399e1b8c1fc65c06cb6205a5450bc3"],["/tags/安全/index.html","500272e501f3fa649f25f0cf48e163a1"],["/tags/安全补丁分析栏目/index.html","c2486692b18674e3cdf3c05701bceaf5"],["/tags/年鉴/index.html","f686f91489bd4460bba51ea429f665ea"],["/tags/数据结构与算法/index.html","37e06c3212b9b1157543da8ab7124f61"],["/tags/注入/index.html","2dec85e30bd700ed8beb8be01cc0ab41"],["/tags/航空/index.html","eaf3dcaba002db35a25140ee394d4b26"],["/tags/闲聊/index.html","74a259061c726ea2c6fa77ce23c6cfb1"]];
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
