/* eslint-disable */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.setConfig({
	modulePathPrefix: 'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
});

const precacheManifest = [];

workbox.precaching.suppressingWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);

const dataCacheConfig = {
	cacheName: 'online-shop'
};

workbox.routing.registerRoute(
	'https://online-shop-api.herokuapp.com/bags/',
	workbox.strategies.cacheFirst(dataCacheConfig),
	'GET'
);
workbox.routing.registerRoute(
	'https://online-shop-api.herokuapp.com/bags/',
	workbox.strategies.staleWhileRevalidate(dataCacheConfig),
	'GET'
);

workbox.routing.registerRoute('https://online-shop-api.herokuapp.com/shoes/');
workbox.routing.registerRoute(
	/.*.(?:png|jpg|jpeg|svg)$/,
	workbox.strategies.cacheFirst({
		cacheName: 'products-images'
	}),
	'GET'
);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {});
