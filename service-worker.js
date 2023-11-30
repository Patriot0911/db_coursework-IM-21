/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b28429903cc9a2227f275008cf75d267"
  },
  {
    "url": "assets/css/0.styles.d2ec0e0c.css",
    "revision": "0cbcb6d6b49e70a2d6adf868203dae2a"
  },
  {
    "url": "assets/img/business_actors.541b7f52.jpg",
    "revision": "541b7f521c8d5af28423294fb1c7a3eb"
  },
  {
    "url": "assets/img/ckan.78bddb68.png",
    "revision": "78bddb68dcd27ea45b695b00956a6434"
  },
  {
    "url": "assets/img/cloude.b48a1c44.jpg",
    "revision": "b48a1c443f1f03e26e278576b8bd44ca"
  },
  {
    "url": "assets/img/crowdsourcing.abc54512.jpg",
    "revision": "abc545121419715bb1bf3e4b2de91384"
  },
  {
    "url": "assets/img/data_gov.0a1216bd.png",
    "revision": "0a1216bda60133bf7e84f798dddfbf87"
  },
  {
    "url": "assets/img/database.aba810cd.jpg",
    "revision": "aba810cd53c228329a5c00e6ee060b99"
  },
  {
    "url": "assets/img/db-img1.bbec1657.png",
    "revision": "bbec16575104c9ef9b8d45ed58efaff9"
  },
  {
    "url": "assets/img/db-img10.d9ccb3e9.png",
    "revision": "d9ccb3e9514c13838a710304b5806c01"
  },
  {
    "url": "assets/img/db-img11.2da026f7.png",
    "revision": "2da026f77b5e1f7da25a8b7889412119"
  },
  {
    "url": "assets/img/db-img12.9e57ff67.png",
    "revision": "9e57ff67430bdece053c88581b9a8487"
  },
  {
    "url": "assets/img/db-img14.1a538781.png",
    "revision": "1a53878187a2a57354fc47a3d63c453b"
  },
  {
    "url": "assets/img/db-img15.7f8103e5.png",
    "revision": "7f8103e5590c1adc1ce5cafd91e12e13"
  },
  {
    "url": "assets/img/db-img16.15f561b9.png",
    "revision": "15f561b9bc3af3d5da256d7a1136a499"
  },
  {
    "url": "assets/img/db-img17.b8664690.png",
    "revision": "b8664690624a37390698657337483513"
  },
  {
    "url": "assets/img/db-img2.82656ce2.png",
    "revision": "82656ce2bba42c75bbfa7996ee63f66d"
  },
  {
    "url": "assets/img/db-img3.4eaf5cfb.png",
    "revision": "4eaf5cfb43fecebba0190c9886a20afb"
  },
  {
    "url": "assets/img/db-img4.b9c64a08.png",
    "revision": "b9c64a08d0217a80cade1f34c21d35ce"
  },
  {
    "url": "assets/img/db-img5.c836d28b.png",
    "revision": "c836d28b325b3156a707099a245df760"
  },
  {
    "url": "assets/img/db-img6.221fb209.png",
    "revision": "221fb209eeefae6214023b9304bd9a24"
  },
  {
    "url": "assets/img/db-img7.9be1896f.png",
    "revision": "9be1896ff7d34e81168a048b517392aa"
  },
  {
    "url": "assets/img/db-img8.41038b6f.png",
    "revision": "41038b6f53b572deb2591e635e88bd74"
  },
  {
    "url": "assets/img/db-img9.8e64e2b9.png",
    "revision": "8e64e2b99b5ef0005ea411eaa07383a7"
  },
  {
    "url": "assets/img/ERR_Diagram.eaa9b24b.png",
    "revision": "eaa9b24b80e9a9dcd975e15d9cc23b6c"
  },
  {
    "url": "assets/img/machine_learning.31b771f2.jpg",
    "revision": "31b771f2debbfff781cf573473788a37"
  },
  {
    "url": "assets/img/opendatasoft.bbab4790.png",
    "revision": "bbab4790100e26097cadd67de1ddbeee"
  },
  {
    "url": "assets/img/rbac.0a226d39.jpg",
    "revision": "0a226d39b61a5e540e6d408b2e656997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/socrata.34930cdd.png",
    "revision": "34930cddd7c17fd3ccfce8e0a08e4cb2"
  },
  {
    "url": "assets/img/webscrapping.688f5706.jpg",
    "revision": "688f570695020ea6ee0d402bd5542cbf"
  },
  {
    "url": "assets/js/1.b1e515f5.js",
    "revision": "8b8372a1317f09171816ca044836b12a"
  },
  {
    "url": "assets/js/10.53b4be29.js",
    "revision": "818586f68e5bc840ca75cc23864ee030"
  },
  {
    "url": "assets/js/13.42676205.js",
    "revision": "c94b684a6d182f96d7be2d0ad0677fb0"
  },
  {
    "url": "assets/js/14.3dc1d960.js",
    "revision": "ffca57a6d9d3b899f4fcbe78ed38c5b4"
  },
  {
    "url": "assets/js/15.83f2db4f.js",
    "revision": "d0062d2e704a3240399d30e9e9526e26"
  },
  {
    "url": "assets/js/16.c4c7245f.js",
    "revision": "f494553c1068df42e350a27c926e7030"
  },
  {
    "url": "assets/js/17.387e9ac8.js",
    "revision": "5f7c54ff3d84c57ef8395f53e670b719"
  },
  {
    "url": "assets/js/18.bd6a1a51.js",
    "revision": "08b765ee08ee1b466bd9c4b6ecb9d445"
  },
  {
    "url": "assets/js/19.8c754082.js",
    "revision": "f797469cb34c455621fb42eaca5e3546"
  },
  {
    "url": "assets/js/2.f44f5879.js",
    "revision": "76258840f4ec457ad34510ecf3a87865"
  },
  {
    "url": "assets/js/20.b00e23c1.js",
    "revision": "0b967fb75bc41da44ea10c7f2925ca95"
  },
  {
    "url": "assets/js/21.2fd695bc.js",
    "revision": "3327359c31166854c5489eb19f5455b5"
  },
  {
    "url": "assets/js/22.9509855c.js",
    "revision": "670a8531dba75d2f13066ef07a16915f"
  },
  {
    "url": "assets/js/23.5a0f4a31.js",
    "revision": "cf2741e2a90ed09c178bcd4f6f96bb08"
  },
  {
    "url": "assets/js/24.344101b2.js",
    "revision": "49d81031cf28220cb574a52550899df9"
  },
  {
    "url": "assets/js/25.5b96813a.js",
    "revision": "3be94f6de1e980943e4638671619c849"
  },
  {
    "url": "assets/js/26.6d50efb5.js",
    "revision": "1d08b73f746bcc2251dcaa5c679b57e6"
  },
  {
    "url": "assets/js/27.6d59094a.js",
    "revision": "1e91e22f00911613d9d2dbb2817a7397"
  },
  {
    "url": "assets/js/28.c252b1af.js",
    "revision": "a4cffcea9f09e3813c27e60aa74a1d4d"
  },
  {
    "url": "assets/js/29.8fe6480c.js",
    "revision": "91f314e06d87c1b1f8d04cd6749be42c"
  },
  {
    "url": "assets/js/3.d7db55ae.js",
    "revision": "10f31f23ef8a9518a159d0af12392fb4"
  },
  {
    "url": "assets/js/30.9fcc299a.js",
    "revision": "51400ae22cf58cecdedaf8ef092c4418"
  },
  {
    "url": "assets/js/31.87de8d73.js",
    "revision": "e1f6cdd6cb1efee525ab1e394bd664c0"
  },
  {
    "url": "assets/js/32.7aef7df6.js",
    "revision": "2bcc65d6759bc474e25471b893e40a96"
  },
  {
    "url": "assets/js/33.de0548b2.js",
    "revision": "652eae7017c6c466ae9d8d785474889d"
  },
  {
    "url": "assets/js/34.4a0ed8ae.js",
    "revision": "d732a2d8de15d248dfae1377fb3df6f8"
  },
  {
    "url": "assets/js/35.b273f915.js",
    "revision": "e2b0c0064d3e6d0c2b9a7c981303a1c5"
  },
  {
    "url": "assets/js/36.fba93e46.js",
    "revision": "00e42879e8c73deba3251551eaf84e4c"
  },
  {
    "url": "assets/js/37.1c880d24.js",
    "revision": "f63f9143476ab48c5ca57c07b8237681"
  },
  {
    "url": "assets/js/38.3c1c6316.js",
    "revision": "c3f7d7cccf47af06e819c0f2f7220b38"
  },
  {
    "url": "assets/js/39.49e2df13.js",
    "revision": "a503043d4db556bea771199b7904cf86"
  },
  {
    "url": "assets/js/4.37c24cd0.js",
    "revision": "c43490982e4bedd3761fbb21ae6a5d53"
  },
  {
    "url": "assets/js/41.dde9a812.js",
    "revision": "83223c318a6b4cca5010db571ad91f1d"
  },
  {
    "url": "assets/js/5.ed408b0b.js",
    "revision": "77d146818631d301cd3b8a03725c8961"
  },
  {
    "url": "assets/js/6.06898061.js",
    "revision": "083ec482c71d7c439234e2a4735b0a26"
  },
  {
    "url": "assets/js/7.70a03258.js",
    "revision": "f2b1093330dc87c1f4727f349d21cc03"
  },
  {
    "url": "assets/js/8.521fbe80.js",
    "revision": "41bd5d882c3e69130afa1261fb2c6cab"
  },
  {
    "url": "assets/js/9.b2a54254.js",
    "revision": "78974fa12470c4ff9923cb5ce4537cc8"
  },
  {
    "url": "assets/js/app.0fb6e9f0.js",
    "revision": "05151eecad4224b2d66ac1ae6d64418f"
  },
  {
    "url": "assets/js/vendors~docsearch.158d5312.js",
    "revision": "09147ac9ae7ac2cc9c3e25752208596e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a8e9c5bf967bd3071e24e641c216aea8"
  },
  {
    "url": "design/index.html",
    "revision": "02dc4f5b110abf4cc33918779c935282"
  },
  {
    "url": "index.html",
    "revision": "6fdbf92763050b6431080957328f7bf8"
  },
  {
    "url": "intro/index.html",
    "revision": "05c0d1dc02464703fde4830de9ccdf20"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8a38e414e680f56c46a3c399b1d49fd2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a353fa40685954d31ad332c3e4976156"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e1350080d07bcc45f7ed28470449065e"
  },
  {
    "url": "software/index.html",
    "revision": "c85eb236cde19dc21e9693583ad6f3a3"
  },
  {
    "url": "test/index.html",
    "revision": "493b596b6e6b06f472c9a287b2823185"
  },
  {
    "url": "use cases/index.html",
    "revision": "79dee3f43adde66ac7feee4567e5bab3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
