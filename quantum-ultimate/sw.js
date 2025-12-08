/**
 * Quantum Reality Code - Service Worker
 * Enables offline functionality and push notifications
 */

const CACHE_NAME = 'quantum-reality-v2.0.2';
const OFFLINE_URL = './index.html';

// Files to cache for offline use
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './community.html',
  './achievements.html',
  './journey.html',
  './icon-192.svg',
  './icon-512.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ Service Worker: Installed successfully');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('⚡ Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          // Fetch fresh copy in background
          event.waitUntil(
            fetch(event.request)
              .then((response) => {
                if (response && response.status === 200) {
                  const responseClone = response.clone();
                  caches.open(CACHE_NAME)
                    .then((cache) => cache.put(event.request, responseClone));
                }
              })
              .catch(() => {})
          );
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache valid responses
            if (response && response.status === 200 && response.type === 'basic') {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseClone));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Push notification event
self.addEventListener('push', (event) => {
  console.log('📨 Service Worker: Push notification received');

  let data = {
    title: 'Quantum Council Message',
    body: 'Your guides have a message for you.',
    icon: '⚛️',
    badge: '⚛️',
    tag: 'quantum-message',
    data: {}
  };

  try {
    if (event.data) {
      const payload = event.data.json();
      data = { ...data, ...payload };
    }
  } catch (e) {
    if (event.data) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon,
    badge: data.badge,
    tag: data.tag,
    vibrate: [100, 50, 100],
    data: data.data,
    actions: [
      { action: 'open', title: 'View Message' },
      { action: 'dismiss', title: 'Dismiss' }
    ],
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ Service Worker: Notification clicked');

  event.notification.close();

  if (event.action === 'dismiss') return;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Focus existing window if open
        for (const client of clientList) {
          if (client.url.includes('/') && 'focus' in client) {
            client.postMessage({
              type: 'NOTIFICATION_CLICK',
              data: event.notification.data
            });
            return client.focus();
          }
        }
        // Open new window
        if (clients.openWindow) {
          return clients.openWindow('/?action=messages');
        }
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('🔄 Service Worker: Background sync triggered');

  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  // Sync any queued offline actions
  console.log('📤 Syncing offline messages...');
}

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'quantum-daily-message') {
    event.waitUntil(sendDailyMessage());
  }
});

async function sendDailyMessage() {
  console.log('🌅 Sending daily quantum message...');
  
  const messages = [
    "Good morning! Your quantum field is aligned for manifestation today.",
    "The Council has reviewed your intention. Progress is being made.",
    "A synchronicity awaits you today. Stay present and aware.",
    "Your frequency is broadcasting at optimal levels. Keep going!"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return self.registration.showNotification('Quantum Council Message', {
    body: randomMessage,
    icon: '⚛️',
    tag: 'daily-message',
    vibrate: [100, 50, 100]
  });
}

// Message handler for client communication
self.addEventListener('message', (event) => {
  console.log('💬 Service Worker: Message received', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(event.data.urls))
    );
  }
});

console.log('⚛️ Quantum Reality Code Service Worker loaded');
