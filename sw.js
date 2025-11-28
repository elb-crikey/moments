// Service Worker for Moments App
// Version - increment this when making changes
const CACHE_VERSION = 'v1';
const CACHE_NAME = `moments-cache-${CACHE_VERSION}`;

// Assets to cache for offline use
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/firebase-config.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    '/badge-96.png'
];

// Import Firebase scripts for messaging
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyCquq9b5ab4gBre2lpKm9UXhbRI8FQS7x0",
    authDomain: "moments-ase.firebaseapp.com",
    projectId: "moments-ase",
    storageBucket: "moments-ase.firebasestorage.app",
    messagingSenderId: "251024107631",
    appId: "1:251024107631:web:ccc1f5379f71ffd9a1459a"
});

// Get messaging instance
const messaging = firebase.messaging();

// ==================== INSTALL EVENT ====================
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching app assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[SW] Install complete');
                // Force this service worker to become active
                return self.skipWaiting();
            })
    );
});

// ==================== ACTIVATE EVENT ====================
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        // Clean up old caches
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[SW] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Claiming clients');
                // Take control of all pages immediately
                return self.clients.claim();
            })
    );
});

// ==================== FETCH EVENT ====================
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone the response
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
            })
    );
});

// ==================== PUSH EVENT (FCM Background Messages) ====================
messaging.onBackgroundMessage((payload) => {
    console.log('[SW] Background message received:', payload);
    
    const { title, body } = payload.notification || {};
    const momentId = payload.data?.momentId;
    const momentName = payload.data?.momentName || title;
    const categoryName = payload.data?.categoryName || body;
    
    const notificationOptions = {
        body: categoryName,
        icon: '/icon-192.png',
        badge: '/badge-96.png',
        tag: momentId ? `moment-${momentId}` : 'general',
        data: {
            momentId: momentId,
            url: momentId ? `/?moment=${momentId}` : '/'
        },
        actions: [
            { action: 'done', title: 'Ase' },
            { action: 'snooze', title: 'Another time' }
        ],
        requireInteraction: true,
        vibrate: [200, 100, 200]
    };
    
    return self.registration.showNotification(momentName, notificationOptions);
});

// ==================== NOTIFICATION CLICK ====================
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked:', event.action, event.notification.tag);
    
    const notification = event.notification;
    const action = event.action;
    const momentId = notification.data?.momentId;
    const url = notification.data?.url || '/';
    
    notification.close();
    
    if (action === 'done') {
        // User marked as complete - just close notification
        console.log('[SW] Moment marked complete:', momentId);
        // Could send analytics here
        return;
    }
    
    if (action === 'snooze') {
        // Handle snooze - could store in IndexedDB or send to server
        console.log('[SW] Moment snoozed:', momentId);
        // For now, just close. Snooze logic can be added to Cloud Function
        return;
    }
    
    // Default: open the app to the moment detail
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Check if app is already open
                for (const client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        // Navigate existing window
                        client.postMessage({
                            type: 'SHOW_MOMENT',
                            momentId: momentId
                        });
                        return client.focus();
                    }
                }
                
                // Open new window
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
    );
});

// ==================== MESSAGE FROM APP ====================
self.addEventListener('message', (event) => {
    console.log('[SW] Message from app:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// ==================== PERIODIC SYNC (for future use) ====================
self.addEventListener('periodicsync', (event) => {
    console.log('[SW] Periodic sync:', event.tag);
    
    if (event.tag === 'check-notifications') {
        // This could be used to verify notification status
        // For now, all scheduling is done server-side
    }
});

console.log('[SW] Service worker loaded');
