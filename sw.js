/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/28/hello-world/index.html","1d287cf63afa83025dbe9b36006594eb"],["/2020/02/03/a-new-xposed-style-framework/index.html","66dd3321922da4a3cd861fa4e10f8a37"],["/2020/02/15/fast-load-dex-on-art-runtime/index.html","671b72ee5aeff8c8f31e5409bb31a095"],["/2020/04/27/dynamic-hooking-framework-on-art/index.html","2b1efc0e4e7b295e98687abfadf6ff78"],["/2020/06/10/hiddenapi-restriction-policy-on-android-r/index.html","a2cea092b05db84aec1708ac5a495f27"],["/2020/08/18/nbinjection/index.html","4bfecbc71f9d1491ec10bd6d21663140"],["/2020/08/20/af447-in-aci/index.html","56f607981214548e495d2669e031690b"],["/2021/05/01/anti-magisk-xposed/index.html","1309bf10d439de03ad55d7c89ffda4a0"],["/2022/01/09/end-of-2021/index.html","f6cee9768c30985fda1160cdf9db73a7"],["/2022/04/09/property-implementation-and-isolation/index.html","bdc4f99ef66ba691467a7e95fb612a59"],["/2023/03/28/system-foundation-for-android-devs/index.html","1a831e25a0c04c01ec4d454a1d70ac38"],["/2023/11/06/first-19-years-of-my-life/index.html","495b0f9bc8a5d373aa6883edb0f375eb"],["/2023/11/12/android-booting-shenanigans-and-magiskinit-analysing/index.html","3c3a1b57da455c8962cdf028ce43ee1a"],["/2024/04/18/android-security-bulletin-index/index.html","de1c926e756040f2c910eafaf342a24b"],["/2024/08/24/CVE-2024-48336/index.html","013b78beb1f98391d0f4a08e4c4ab6ee"],["/2024/10/08/CVE-2024-0044/index.html","c41eaec01bd74f73d7cbdd1b4f0198af"],["/2024/11/05/android-platform-common-vulnerabilities/index.html","83969efed47149fdc1954959df9290fa"],["/2024/11/07/self-changing-data-type/index.html","01ecc1471362ba7fe0bd9116f5d12eb0"],["/2025/01/29/android-security-bulletin-index-2025/index.html","5e4fd63fc9c36f5589442020567812a9"],["/2025/02/04/CVE-2024-49721/index.html","3f6a4d5616fa11c57bb0f06efcf1efa1"],["/404.html","748c93bd816caf87c2d1f193d700781a"],["/about/index.html","38e7f5c0622aa62fdcc020f439f44df7"],["/archives/2019/10/index.html","2b45accc0dae2b2b369934d791078bc7"],["/archives/2019/index.html","63e327af7ac446b0d9a708ae9dce764a"],["/archives/2020/02/index.html","fd320c1dc871bded114a3fd715afe508"],["/archives/2020/04/index.html","ea9ec9e24dbe05fc034bcf0eec9959da"],["/archives/2020/06/index.html","bbe25b74c3b7ba7990310bc85e2b38ff"],["/archives/2020/08/index.html","ba7c25a3d1b984ddaa8c59bec6eda421"],["/archives/2020/index.html","7b289198ef07fea0957a01346ce9e57e"],["/archives/2021/05/index.html","85a6c04bc9ada7d03e7713ee085a7faa"],["/archives/2021/index.html","7a01e296138e5e6b7b0b63cc025301ab"],["/archives/2022/01/index.html","015fe9927d970fe3795879c6e4d90758"],["/archives/2022/04/index.html","2a53ab8511a096b784c5af3ca535b719"],["/archives/2022/index.html","21f4c5f8d5163068ea00fe18ccc0951b"],["/archives/2023/03/index.html","0bad1828878704a7bb14ffafc74c7464"],["/archives/2023/11/index.html","89f46a0620093b38f30f0a32752a2c7f"],["/archives/2023/index.html","f3090589c55d8a661859cbf40b2cfadd"],["/archives/2024/04/index.html","7363fbb791bf26705757992b863b0e00"],["/archives/2024/08/index.html","bee2ea189bf86745a4e85ad9e0ba252d"],["/archives/2024/10/index.html","b8bd22497cb49bea4cd3981ed12e3214"],["/archives/2024/11/index.html","c17d74bf53d0a61af91c64863d3d92da"],["/archives/2024/index.html","359c0902b7f677237cb7bc35cb6d34d0"],["/archives/2025/01/index.html","c148094051d450ab0ecf4855ee86756c"],["/archives/2025/02/index.html","1bc8d1a503cf7079c10606ae40c43578"],["/archives/2025/index.html","b753a0b2dd59a04dfc97e66512730625"],["/archives/index.html","042606409e88f38af4ec70e36f89a048"],["/archives/page/2/index.html","042606409e88f38af4ec70e36f89a048"],["/categories/index.html","4a97e3d9d55f5433e64d4021164251c8"],["/css/style.css","96e0cabb0cc8a8155995f59d58524347"],["/data/image/af447-in-aci/1-1-aci.png","6b25b9d5d876198b80fed688ba133c5a"],["/data/image/af447-in-aci/1-1-fdr.png","8ef13177975d164852f7a59d07696635"],["/data/image/af447-in-aci/1-2-aci.png","e8e331616785507a0046a05a61b03d80"],["/data/image/af447-in-aci/1-3-aci.png","b06adf6301880091df908481c5fceb6a"],["/data/image/af447-in-aci/2-1-aci.png","7e1aa9dafabcc19fb0933b2ea7565d5e"],["/data/image/af447-in-aci/2-1-fdr.png","1018869941df12d6cda7e0d059caf52e"],["/data/image/af447-in-aci/2-2-fdr.png","972027fef8939c7ce930378dcdce56b0"],["/data/image/af447-in-aci/3-1-aci.png","1095baba2523a2a9b8bf3e87a3261f8f"],["/data/image/af447-in-aci/3-1-fdr.png","f89a2e18be1d381b87efbde0caa417f6"],["/data/image/af447-in-aci/3-2-aci.png","5b82821b9f4de163e0d0b4752dc117b0"],["/data/image/af447-in-aci/3-2-fdr.png","3024073c570496b4af5a77b1397e3cf0"],["/data/image/af447-in-aci/3-3-aci.png","197dd46aea00dcaa2e9426321892dc17"],["/data/image/af447-in-aci/3-4-aci.png","39791d95916081336788da4372a8e2a4"],["/data/image/af447-in-aci/4-1-fdr.png","f97b95e610ba4fc9706dec4f1c661de1"],["/data/image/af447-in-aci/4-2-fdr.png","48f4a4286a5ee040df60a0d692afb2aa"],["/data/image/af447-in-aci/4-3-fdr.png","c221fc9ae44cbe3d236e1fc22a3fef8a"],["/data/image/af447-in-aci/5-1-fdr.png","9dfcf4abef953acdcd576564b425018d"],["/data/image/af447-in-aci/5-2-fdr.png","b9786e2528ee2e92b9acd6fbd0023258"],["/data/image/af447-in-aci/5-3-fdr.png","d5ec065ab4ab093bb6e60b8950d3bfa5"],["/data/image/af447-in-aci/5-4-fdr.png","3307da991536567f6eba45da0021d4aa"],["/data/image/af447-in-aci/5-5-fdr.png","6ac5ea56962207bd3f53fac03e7a7c45"],["/data/image/af447-in-aci/unreliable-airspeed-checklist.png","f945c3c9c84a17c4349223d8ef6a6b4b"],["/data/image/android-platform-common-vulnerabilities/android-14-package-side-channel.jpg","da43aac817b156ecc5f1319afc28730a"],["/data/image/avatar.jpg","f659fb31156b36fda1c14ba852e46f1a"],["/data/image/avatar_new.jpg","34b452596cb4ccec6b859c40ff281b6e"],["/data/image/avatar_round.png","fbbdd7a077df677394f7c96de9808861"],["/data/image/avatar_round_new.png","29eb16c2aacb0e7b2d1acc8b8b37ad5f"],["/data/image/dopamine.jpg","38046a9673da59dfdbdcf474a263450e"],["/data/image/google-bughunters-2024-rank.jpg","9d4cf25dc26e4c50bc9acd758c7abb25"],["/data/image/google-bughunters-2024-ranking.jpg","9de6f083aea91424c9e57e4c6144dc5e"],["/data/image/hhsqdw.jpg","225060090905e97a18e73f5ca31f9511"],["/data/image/my-first-19-years/3208days.jpg","7595046b9838b23cd4e632c4df30cdff"],["/data/image/my-first-19-years/diagnostic-proof-1.jpg","ec75e7bb8592d5a459ae985b1cfbede6"],["/data/image/my-first-19-years/diagnostic-proof-2.jpg","15a895435629af5a76ac606d46fe5ef6"],["/data/image/my-first-19-years/magisk_devs.jpg","54b08a95a9c1cdd8af876458ff3ed32a"],["/data/image/my-first-19-years/report-aosp-security-vulnerability.jpg","b6663f7451f53f1d9707d2efd4477039"],["/data/image/weishu.jpg","f1f00c5aec03f22f93e275915d8d6177"],["/data/image/wrlu.png","b22729b504e746636ba3ca6275eca304"],["/data/js/search_children.js","378f48ec0bf94e22b1b574c6eeed9314"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3e4770b01956cf58aa1b761198d56c83"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","1f6703346c70e4766b24ad9c5d7a1ef0"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["/page/2/index.html","3026e3a8b748089d7a5f53dd36a2e2ef"],["/sw-register.js","20c1dfb4ce6f3129dd6abbb23fe073b2"],["/tags/AOP/index.html","02310a40aaa901b1455d4a7cb317ca47"],["/tags/android/index.html","465b80bdc4f7d2946a3f45415083297a"],["/tags/android/page/2/index.html","9572057d9a16c78f3537f23e6107ff08"],["/tags/art/index.html","0589d7361ab06d1287937bc655dc74e7"],["/tags/dex/index.html","7a5d26342cd60a25574246f92895de66"],["/tags/hidden-api/index.html","0d3d30230be399d998a5f73b618593ac"],["/tags/hook/index.html","3621568327af0905f5b970bf6a6d78bc"],["/tags/index.html","bfc47f8cc6201be42a6a08465dd191d3"],["/tags/kernel/index.html","658a60c947c051b54f627653e15475a7"],["/tags/magisk/index.html","e907810e6e18d295b7a977d69fecd60a"],["/tags/parcel/index.html","4f3b45a772a96e2e8d6c16efa4e66cef"],["/tags/property/index.html","40d8b38245a24331f12551dff76062c0"],["/tags/system/index.html","8f8d00b97d88c629a46234be835dd169"],["/tags/xposed/index.html","86227821ee6def3091700b12493138ae"],["/tags/安全/index.html","d2cf7f2440d065b32cee22d4d1d2e176"],["/tags/安全补丁分析栏目/index.html","209171e2abbc298c7b4ead93978e55af"],["/tags/年鉴/index.html","900039236138c40c45c271dfc45b620a"],["/tags/数据结构与算法/index.html","c6b70fc1a25c3a46cfc1bd84ebc0b740"],["/tags/注入/index.html","40caffca2e775c1ed975ff99400529c4"],["/tags/航空/index.html","89a8a0e2c8878335da142c796312f394"],["/tags/闲聊/index.html","3391d2dc92abc76ff7ee8d92b741e7a2"]];
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
