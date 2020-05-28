/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

const dataCacheConfig = {
	cacheName: 'online-shop'
};

const precacheManifest = [];

workbox.routing.registerRoute(
	new RegExp('https://online-shop-api.herokuapp.com/bags/'),
	workbox.strategies.cacheFirst(dataCacheConfig)
);
workbox.routing.registerRoute(
	new RegExp('https://online-shop-api.herokuapp.com/shoes/'),
	workbox.strategies.cacheFirst(dataCacheConfig)
);
workbox.routing.registerRoute(
	/.*.(?:png|jpg|jpeg|svg)$/,
	workbox.strategies.cacheFirst({
		cacheName: 'products-images'
	}),
	'GET'
);
self.addEventListener('install', e => {
	self.skipWaiting();
	// const channel = new BroadcastChannel('service-worker-cahnnel');
	// channel.postMessage({ promptToReload: true });
	// channel.onmessage = message => {
	// 	if (message.data.skipWaiting) {
	// 		self.skipWaiting();
	// 	}
	// };
});
workbox.precaching.precacheAndRoute([]);
/(\.precacheAndRoute\()\s*\[\s*\]\s*(\)|,)/;
