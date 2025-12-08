// Service Worker for Quantum Council PWA
const CACHE_NAME = 'quantum-council-v1';
const STATIC_CACHE = 'quantum-static-v1';

// Files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install event - cache static files
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => 
              cacheName !== STATIC_CACHE && 
              cacheName !== CACHE_NAME
            )
            .map(cacheName => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip caching for non-GET requests
  if (request.method !== 'GET') return;

  // Skip caching for external resources (except fonts)
  if (!url.origin.includes(self.location.origin) && !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached => {
        // Serve from cache if available
        if (cached) {
          return cached;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response since it can only be used once
            const responseToCache = response.clone();

            // Cache the fetched resource
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return offline page for HTML requests
            if (request.headers.get('accept').includes('text/html')) {
              return new Response(`
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Quantum Council - Offline</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body { 
                      font-family: Inter, sans-serif; 
                      background: linear-gradient(135deg, #0a0e27, #1a1f3a);
                      color: white; 
                      margin: 0; 
                      padding: 40px 20px;
                      text-align: center;
                      min-height: 100vh;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                    }
                    h1 { color: #4A90E2; margin-bottom: 20px; }
                    p { color: #aaa; max-width: 400px; margin: 0 auto 20px; }
                    button {
                      background: linear-gradient(135deg, #4A90E2, #9B59B6);
                      border: none;
                      padding: 15px 30px;
                      border-radius: 10px;
                      color: white;
                      font-size: 16px;
                      cursor: pointer;
                      margin-top: 20px;
                    }
                  </style>
                </head>
                <body>
                  <h1>🌙 Quantum Council</h1>
                  <p>You're currently offline. The app is still functional with cached data.</p>
                  <p>Check your internet connection for the latest features.</p>
                  <button onclick="window.location.reload()">Try Again</button>
                </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            }
          });
      })
  );
});

// Background sync for data when online
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications (optional future feature)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [200, 100, 200],
      data: data.url || '/'
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data || '/')
  );
});

function doBackgroundSync() {
  // This would sync any offline data when the user comes back online
  console.log('[SW] Background sync completed');
  return Promise.resolve();
}