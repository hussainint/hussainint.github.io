'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "472c6d89785d1c028328d262b6659af3",
"index.html": "b3f014bed8429942fbba44783cb346df",
"/": "b3f014bed8429942fbba44783cb346df",
"main.dart.js": "dfb77fe78ce68585aaa7981b4250fc21",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0bcc4b19d30e30f8cc1bacc2fcb05951",
".git/config": "fd26687a33f30ddc17bc86934b912f11",
".git/objects/0d/327450ddbf1a6c9837d6e41badbb281f906e88": "81a2e93dc9c262c1612186fde78ba6d8",
".git/objects/95/22f76102c4c57438166a98789226c6f0c2b69d": "7c9f0ceb641edbaec635366a1d850471",
".git/objects/95/408c8ff2bddd8883ad5483b9cdbdc8546aa7fd": "48301d1dc193d79fe6bfbb4cdeee5fe7",
".git/objects/0c/6e2902f9fc86679ba88ab148b1da2f34f90598": "c4bde79244f4d410fca009180e7efd01",
".git/objects/66/bbeab8d82b16c077ece6f92db8939079a9d1df": "691e67711510b427c1083da6c02ee328",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e8b871b71f31b76f6fd132baf2c785426d0ae2": "b1a9277aab301105b64df6c2297daf4e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/0ed10cdc289d66964e2524052043f755a2b525": "63db2140fc14606c2c2439a341e3e886",
".git/objects/94/4af2174c7c84cd65c0cafbdad709363fc93a02": "66481310ecc093f78e078383ecf2fe50",
".git/objects/5f/367b24518a4b73ab441d70c37e9ea5e0d561be": "d8bc996a5af50be12a22ecc51538a13d",
".git/objects/02/855f28c66897d480ab48ffb57b12afa0b05bea": "3efa30c7b8354fa20edbe21875e8bc5b",
".git/objects/b5/4f41840da0bd09233238c10d2e6f333c7340c9": "849e9cdb441b54a136b110a3edd0ec81",
".git/objects/d9/3c8c7b2bc8118904c1a6c6a62ff7aae9b070c0": "e5e01b6abfce6a6e33fdae20772d0d5d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/464ba41a966d5271519ac711164b9e1549291d": "494e7ae3b7e3506e038a2d24138400dd",
".git/objects/a5/34318c32e7f28c8c33394b54354388749cdbd0": "78fc6355e4553b33ac5161968912b836",
".git/objects/d8/909f73911fe1f87b3711d034a8e179cad99a9a": "5c3de4013e938c7937347c7b21603d18",
".git/objects/f4/c3a39b0f49f95f418fa6ab640fc4c5db743509": "b64d0a1baba253cae66499ef6bbec698",
".git/objects/f3/a21f9d9d3e65af822530cfcdf2828294e62a3d": "f0d1f5f7de8f6eaf7ded413c8cd19e3c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ed/773baf3f7bd4bfa9cb5d6830e078153f976e44": "7a31715ae340428e86c2a32e26879f91",
".git/objects/pack/pack-2b50c938da340a9b86b2fcea3836077fc6071f4f.idx": "79ed6632884b352ee62e5756dcc93108",
".git/objects/pack/pack-2b50c938da340a9b86b2fcea3836077fc6071f4f.pack": "0c1440c239f1653281bb1b49d4c9827f",
".git/objects/7d/666c538be3a9dc24b3c781477bc72fcb8d8d09": "08b61b40294433b0fc5b32749a273eb0",
".git/objects/7d/beb42703d9ade746677f33d4caeb33527f5b8f": "c54fd09703d12231dd6b9039b3f13c5b",
".git/objects/7c/86d922fb78faf3c2a9aa9f1c3a34778624cf12": "846145534644de30f37678bca7203098",
".git/objects/16/349f7372b4750bf9241a39ab39c8d1e78022c0": "80f37f46a78d574b3b8535e551e0d542",
".git/objects/80/4ce274588d398b7095b1762b93e7f077d068b5": "d1756a11969792e1f35fb2fbe4ad9b60",
".git/objects/7b/1b6456b7577caef6011770c91a52dab0c04db7": "76256b12d45e162827caf2297be9c358",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/75/0e21ea0b76c2302c1a293dbc540f99795a7d2d": "71fef7101989e23fd42cf9c9e68e3001",
".git/objects/2a/035d611f7f0fd1d1ff744ac86b29ef6075261c": "0d3cde8e25ee8af8be6ebea3d22ce661",
".git/objects/2f/7b535bfa27828626b29a9f3e088803df306129": "cb521fa5864a1855e71080ee2bb48259",
".git/objects/6b/f5761ca84ee7ef5d736495df44c140890342ba": "4ab3e6ad68413edf4b52e48251cfc18f",
".git/objects/5d/89009aa8b4c585f53a03f3e0f66b2fb2f05f89": "bd5cb15f4483b38fff36533e2771e571",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/f04311a8434dff6c68aa83ebc6f117ae2e78c8": "6cab89856ac76213fb5bb95228c0370f",
".git/objects/08/ba63a308d41d0ba626a49d308772e6f1cf8f6b": "a01f5013f51e201e939eee173ad92866",
".git/objects/6d/ae37ca7c56f3d6fb202f0a36ff30f9aaf84042": "b96736e14e8dd2750ab32dcbc5a6d89e",
".git/objects/6d/2240a2905aa1f9f35262f3601795c46139dd7d": "aef1906cdb7e4854f1a0bc51d6e248d0",
".git/objects/99/5ea5b6809bddae45a9cc3cad6cbb7b5aefd891": "b439da5c9bd7d5a20f0b8c965b5eb8dd",
".git/objects/90/98e6b37e2ed92f1f3c5f1008cbd25af3f0ba97": "479c3216437f35980bcb4f239cdaf36c",
".git/objects/90/cfedbb6232f6eb1a00a7b8050836d8230d3517": "b4cd7859890a1d6f10630bab20e9a9a4",
".git/objects/d4/689e69a705d6aed103deeb85dd2579981d55b4": "6e9c0b08e4ab53384b3cec7fbb7c698b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/a8/e2940ab5c8f81f5b8de1766634a16b6ef28f1f": "ec749b2efe45f6ecc9e0f417cbb68e2f",
".git/objects/e1/ae4dfac484aae407082b10350c51207a46cba5": "642a6ac79cd4c09a59eed19c6291bd52",
".git/objects/cc/639a5d197e1106debc6fea28c07fe37f85ee14": "eb9acf552929e455b2f74bfb5532be07",
".git/objects/e6/38b0001a896e747860d61eeaf55c1853cc7887": "19c55fed1dc57ceee34f98b8eb2e6952",
".git/objects/e6/ce6ce23e098dae882d151ecc5c4710eb70522f": "720b54512549e276080c17710d08739f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/f8fc9650556624b09fca123c63f0089ebb3230": "e5b2beddc22f46b59fc885126d65a0c3",
".git/objects/e9/04b41c0f7ae1a21bcd5389f7438fc7fee8e518": "8d915d50e34ea66eb9494ca0d8d76be6",
".git/objects/e9/c277bdca1d58d5b300a41c6270278687dae80c": "d4f591e531c7710fda6af33df064128b",
".git/objects/77/94639d78881e36bdcb49f83c02969ece08d612": "b92a70780909d992472c0e0a309d4d74",
".git/objects/70/51a141e490cbd6c9df24e18643d92990f8f596": "fb5fba2b312ad2fc10c9eb27e1c64159",
".git/objects/70/3be07ffa0da6d95f91d7898ae28004aa16d163": "9ca8c76cdf6c76b8a29a812e21553f3a",
".git/objects/15/fb9a94576c26c5c7cc35d7f8121297422479ce": "0bec59db17fe119fc80c889b1e497e98",
".git/objects/40/b422e7a9607b32585572a13164065ecf713425": "c807c53cece4d5ad91909e62b1aa04e7",
".git/objects/47/a21e628cc2cc3f782576241e6547ccc308a482": "74701bb792181254a0780dd31f940e26",
".git/objects/7f/1271d3ebfcc13317e7baa1c27b9c1d864c31da": "02e24bfb4c163dbda64d750f6442c9d3",
".git/objects/8e/7e6c276ea3a10243008f9c3e87c72ee9ae8246": "e8c78c9c1c40e17146e623ee61e5dad1",
".git/objects/22/6559ac854b1240b4a8256ff8d15caebc21f65c": "eea2cb0e9b25374a46b74fefe38759e9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6467bf618a959f48db2379db7539fa8c",
".git/logs/refs/heads/master": "6467bf618a959f48db2379db7539fa8c",
".git/logs/refs/remotes/origin/HEAD": "5b92dd79c96db10e70872816dff42da0",
".git/logs/refs/remotes/origin/master": "24a0a8e8220d107fc0913fe31f11ea9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "652c7248f299568ade15c6f7f08dccba",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "652c7248f299568ade15c6f7f08dccba",
".git/index": "7bf86e90182c08a740963f1b7b4a46af",
".git/packed-refs": "a4dfc58dd2b8c16f77804db837762b94",
".git/COMMIT_EDITMSG": "28a155d05e22b77ecc3be518c3b5e4ec",
"assets/AssetManifest.json": "6aca377f64589721e3071ca29d999cdc",
"assets/NOTICES": "bc2c1fe06acd8aa586d6a5d9b4b531d5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a4be43798e0fde98ba5437ef52720729",
"assets/fonts/MaterialIcons-Regular.otf": "f5b144e101db75a7b1533a1402c9cc1d",
"assets/assets/images/pic5.jpeg": "a52d682938cabebe9d29fbcbed051d50",
"assets/assets/images/pic1.jpg": "0da8539f847dfaad2ee839b4a614ce71",
"assets/assets/images/pic2.png": "4acdcad480d5979fdbd42e9b961aa81a",
"assets/assets/images/youtube_banner.png": "8ead7f781bce2a58f12b543f0eaddba8",
"assets/assets/images/pic6.png": "5029a525ac67fd3223cee863c19fe111",
"assets/assets/images/pic4.jpeg": "41e82817c3699abb12e33e80c716f16c",
"assets/assets/images/pic3.jpeg": "b84aa340e37ec4efa878f8e602a80486",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d9d2a4b0bccb63bcedea89f95078411f",
"canvaskit/chromium/canvaskit.js": "56facd8978a5292c9bb1d06dfcaee271",
"canvaskit/chromium/canvaskit.wasm": "a1bdb8e068b45f18affefaf412122091",
"canvaskit/canvaskit.js": "8c9ab94b3e7d4f85ca01c1b0a1e54bd1",
"canvaskit/canvaskit.wasm": "bcb5f27f1d4462c23499b5f5c73eadbf",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
