/* eslint-disable */
importScripts('workbox-v5.1.3/workbox-sw.js');

workbox.setConfig({
	modulePathPrefix: 'workbox-v5.1.3/'
});

workbox.precaching.suppressingWarnings();
workbox.precaching.precacheAndRoute([]);

const dataCacheConfig = {
	cacheName: 'online-shop'
};
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
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {});

self.addEventListener('install', e => {
	const channel = new BroadcastChannel('service-worker-cahnnel');
	channel.postMessage({ promptToReload: true });
	channel.onmessage = message => {
		if (message.data.skipWaiting) {
			self.skipWaiting();
		}
	};
});
