/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","779d9c7598f9a56dbcec3d704f22b131"],["/2020/02/03/a-new-xposed-style-framework/index.html","0ba028cbc34f8679608e8edf04e53886"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","841b632b4477a7910a07fbd1bb0adcdb"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","06ead884c5aed988fb6c0a7ca8b00cdb"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","a5fbedd681b9a5bb39ead92a023ed1c4"],["/2020/08/18/nbinjection/index.html","2027b3f3e7e8946a696e4c1b9a6f1d89"],["/2020/08/20/af447-in-aci/index.html","d9742034a3467787adc0f97809951218"],["/2021/05/01/anti-magisk-xposed/index.html","344fd8b2b47a12c86f64725d6a739d8c"],["/2022/01/09/end-of-2021/index.html","9f2db6b54e2936ea97e640b764b9f6d3"],["/2022/04/09/property-implementation-and-isolation/index.html","536d0073d4a677fbf01d48a143240179"],["/2023/03/28/system-foundation-for-android-devs/index.html","681c572ca2b5d1aeacd423d9f0d6883b"],["/2023/11/06/first-19-years-of-my-life/index.html","dc4af737858e5591f1f1fa2e5dfff151"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","592c47bd2ebbe95879ad6df8859bee52"],["/2024/04/18/android-security-bulletin-index/index.html","7c0ccefa7097dc907d9d1791d0f76c1a"],["/2024/08/24/CVE-2024-48336/index.html","265591a3d1d0945e8ff6033ad9f89658"],["/2024/10/08/CVE-2024-0044/index.html","30044787d584896d8b15e2aadd272a59"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","82eb104ab5a71255a75efe81d0eec3aa"],["/2024/11/07/self-changing-data-type/index.html","7e45d60e6fa46f1b7d0f98f619b51d63"],["/2025/01/29/android-security-bulletin-index-2025/index.html","2096f35db683d29d3404a8f0b5e1565a"],["/2025/02/04/CVE-2024-49721/index.html","5e4c3b2e5d2edf95c1148b90ce7f2ca4"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","38e7f5c0622aa62fdcc020f439f44df7"],["/archives/2019/10/index.html","133267ff7e28ab91fc6c572025b2f546"],["/archives/2019/index.html","4999014205be181ff7e4df822e3f3b74"],["/archives/2020/02/index.html","402303dd5cb776e59081e7092bf0b0f8"],["/archives/2020/04/index.html","78d1dffabeace99c9f6b0e740c49c28f"],["/archives/2020/06/index.html","3798732207b840e54e1995320239c7d3"],["/archives/2020/08/index.html","1027f7f8c9a27f77aadacc3136233aec"],["/archives/2020/index.html","5c27b299f18e08694da7ec276e87df6f"],["/archives/2021/05/index.html","28dec50a0bc3ec8659af9f1ef74ebe8d"],["/archives/2021/index.html","c7e82a8bb7834cc6e12220618c07cfef"],["/archives/2022/01/index.html","e6a50de9917d500d81487c41dd5c61f9"],["/archives/2022/04/index.html","be999b239667d5382eb37be224c8db90"],["/archives/2022/index.html","b66e030dddb7c5d5362a37063e6b946a"],["/archives/2023/03/index.html","c433e07ab34b186edf1cb7105b1751b7"],["/archives/2023/11/index.html","5ce7f21a640075e0b55a76a626c325ce"],["/archives/2023/index.html","b8c82574b21e6fc17b1d01ced570d250"],["/archives/2024/04/index.html","af17f2a291798772c6fa56ab9e6a4fe3"],["/archives/2024/08/index.html","1e014106fd7464be45802c126001dfaa"],["/archives/2024/10/index.html","4324dea95118f25602e00b3ca3bb589c"],["/archives/2024/11/index.html","d1ebca7db0bdfc43683756de4590cbbd"],["/archives/2024/index.html","33e316d6014b8280bedc0f901aea1f0c"],["/archives/2025/01/index.html","69101847c5f2fb53e6beaa1aeb21af40"],["/archives/2025/02/index.html","41333505262c60cdc62cb32cefcbf9cf"],["/archives/2025/index.html","850042610965973f7123e65eb87843a4"],["/archives/index.html","28eb8daa91d73ef01298205106d4c16b"],["/archives/page/2/index.html","28eb8daa91d73ef01298205106d4c16b"],["/categories/index.html","3880ee2769f75cb0531f9603ecdc8683"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3e4770b01956cf58aa1b761198d56c83"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","90dca9831d434f9d18aafa7ddecfe862"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","e26b36b2a99312dbf8d9e098bbc20ffc"],["/sw-register.js","ed0199e199456a18bf2f5bbdb9e75916"],["/tags/AOP/index.html","4105ad5f7d6bee15a16bd5924c19a331"],["/tags/android/index.html","aeed8c13c956eafa98dc81590cb232e5"],["/tags/android/page/2/index.html","501b8ad30f5bf88e65b5ef77a16088cd"],["/tags/art/index.html","59770fbe4d74071672d6c8d769c6cdb8"],["/tags/dex/index.html","c43fed63ec9a0adf1e665484ecff1468"],["/tags/hidden-api/index.html","56c1927faa6abf3e3750e22d21533357"],["/tags/hook/index.html","30edb2ccb89f98c16428906ce716f6fd"],["/tags/index.html","a5786569f8daab04dd193b2ecacd7293"],["/tags/kernel/index.html","5d97f20486cf2e023b28b7ffcf3bb7ea"],["/tags/magisk/index.html","ba2aadbc7831712ddfdd955f468e90f3"],["/tags/parcel/index.html","2bd5c23eef83135cdc01db1c43be44ca"],["/tags/property/index.html","a162253d8928c116ef6432220d694a97"],["/tags/system/index.html","2e449aef000ea3f22e5d9b6162164b77"],["/tags/xposed/index.html","e0e6a8cc2822275be8447bc248491658"],["/tags/安全/index.html","44e7ed6709678eea909a4b87df342ff0"],["/tags/安全补丁分析栏目/index.html","400ca32caa468b520c1b6c959b7ae20f"],["/tags/年鉴/index.html","f37d2c7a2fba349cb5a6f7c4d1495a0e"],["/tags/数据结构与算法/index.html","03b1775852769009bff18d3d5ef50e94"],["/tags/注入/index.html","aeb6df95cb38272fd12db0d6c4139fc0"],["/tags/航空/index.html","ec2a6de5cc3b67f85cc7b058dcd6c73e"],["/tags/闲聊/index.html","97c827ac6e159035fb47cc11819748f5"]];
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
