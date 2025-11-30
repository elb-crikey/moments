// ==================== INITIAL MOMENTS DATA ====================
// This will be migrated to Firestore on first run
const initialMoments = [
    // FOCUS/CALM TOOLS
    {
        id: 1,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Brain.fm',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'daytime',
        link: 'https://my.brain.fm',
        instructions: 'Take 1-3 minutes to focus with Brain.fm. Use music designed to help you concentrate and find calm.'
    },
    {
        id: 2,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Sensory goo timer',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        link: 'https://www.online-stopwatch.com/sensory-timers/goo',
        instructions: 'Watch the mesmerizing goo timer for 30 seconds to 2 minutes. Let your eyes soften and your mind settle.'
    },
    {
        id: 3,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Mynoise.net',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'daytime',
        link: 'https://mynoise.net',
        instructions: 'Listen to customizable soundscapes for 1-3 minutes. Adjust the sliders to create your perfect ambient sound.'
    },

    // MOVEMENTS
    {
        id: 4,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for right hip',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Push up with right leg and down with hands for 10 seconds, 2-3 times. Then pull up with right leg for 10 seconds, 2-3 times. Next, push down with right leg while pushing up with hands for 10 seconds, 2-3 times.'
    },
    {
        id: 5,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for neck',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Push to the left with neck and resist with hand on left side of head for 10 seconds, 2-3 times. Push to the right with neck and resist with hand on right side of head for 10 seconds, 2-3 times. Then reverse: resist leftward movement with left hand for 10 seconds, 2-3 times. Resist rightward movement with right hand for 10 seconds, 2-3 times.'
    },
    {
        id: 6,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for back',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Tilt bottom of pelvis forward and resist movement with hands on lower back. Hold for 10 seconds, 2-3 times.'
    },

    // BODY AWARENESS
    {
        id: 7,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Somatic scanning',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Move attention slowly through your body, noticing sensations without judgment. Start at your feet and work upward, pausing where you feel tension or discomfort.'
    },
    {
        id: 8,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Body scan',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Lie or sit comfortably. Bring awareness to each part of your body sequentially, from toes to head, observing any sensations present without trying to change them.'
    },
    {
        id: 9,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Progressive muscle relaxation',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Systematically tense and then release different muscle groups. Notice the difference between tension and relaxation as you move through your body.'
    },

    // MENTAL REFRAMING
    {
        id: 10,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Thought swapping',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Describe current sensations in the body without owning it or judging it. Notice what\'s present with curiosity rather than criticism.'
    },
    {
        id: 11,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Tapping',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Tap on acupressure points while repeating: Divine, connected to the universe, confident, energetic, pain-free, focused, compassionate with self and others.'
    },
    {
        id: 12,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Safety reminder',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Notice sensations in the body that are areas of attention and remember the body is safe, it can let go of the sensations.'
    },

    // QUIETING
    {
        id: 13,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Changing locations',
        duration: 'medium',
        durationText: '2-10 min',
        timeRestriction: 'anytime',
        instructions: 'Have you moved in the last 60 minutes? If not, change your physical location. Go to a different room, step outside, or simply stand and stretch.'
    },
    {
        id: 14,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'EFT: Grenada snorkeling color',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Recall the sensation of floating in the salty Caribbean water. Remember the deep, deep teal color surrounding you. Let that memory wash over you.'
    },
    {
        id: 15,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Box breathing',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: '4-4-4-4: Breathe in for 4 counts, hold for 4 counts, breathe out for 4 counts, hold for 4 counts. Repeat.'
    },
    {
        id: 16,
        category: 'quieting',
        categoryName: 'Quieting',
        name: '5-1-5-1 breathing (Heartbeat breathing)',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Breathe in for 5 counts, hold for 1 heartbeat, breathe out for 5 counts, hold for 1 heartbeat. The hold allows one heartbeat to pass between breaths.'
    },
    {
        id: 17,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Butterfly hug',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Cross arms over chest and tap underneath collarbones at the same time. Alternate tapping gently, like butterfly wings.'
    },
    {
        id: 18,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Soft eyes',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Drop eyelids halfway down, unfocus the eyes, and breathe. Let your gaze soften and your vision blur slightly.'
    },
    {
        id: 19,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Toning/humming',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Stimulate the vagus nerve by quietly humming. Feel the vibration in your chest and throat.'
    },

    // LONGER CARE
    {
        id: 20,
        category: 'longer-care',
        categoryName: 'Longer Care',
        name: 'Schedule a massage',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Take a moment to schedule your next massage. Your body deserves this care.',
        link: 'https://massageenvy.com',
        additionalLink: 'https://oakhavenbooking.com'
    },
    {
        id: 21,
        category: 'longer-care',
        categoryName: 'Longer Care',
        name: 'Have a slow shower',
        duration: 'long',
        durationText: '20-30 min',
        timeRestriction: 'evening-weekend',
        instructions: 'Take 20-30 minutes for a slow, intentional shower. Let the water wash away tension. No rushing.'
    }
];

// Category display names mapping
const categoryNames = {
    'focus-calm': 'Focus/Calm Tools',
    'movements': 'Movements',
    'body-awareness': 'Body Awareness',
    'mental-reframing': 'Mental Reframing',
    'quieting': 'Quieting',
    'longer-care': 'Longer Care'
};

// Duration text mapping
const durationTexts = {
    'short': '30 sec - 2 min',
    'medium': '3-10 min',
    'long': '20-30 min'
};

// ==================== APP STATE ====================
let moments = [];
let currentView = 'home';
let currentCategory = null;
let currentMoment = null;
let fcmToken = null;
let swRegistration = null;
let currentUser = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', async () => {
    console.log('[App] Initializing Moments app...');
    
    // Sign in anonymously first
    await signInAnonymously();
    
    // Load background image
    loadBackgroundImage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load moments from Firestore (or initialize with defaults)
    await loadMoments();
    
    // Register service worker and set up notifications
    await setupServiceWorker();
    
    // Check notification status
    await checkNotificationStatus();
    
    // Load settings
    loadSettings();
    
    console.log('[App] Initialization complete');
});

// ==================== AUTHENTICATION ====================
async function signInAnonymously() {
    try {
        const result = await firebase.auth().signInAnonymously();
        currentUser = result.user;
        console.log('[App] Signed in anonymously. User ID:', currentUser.uid);
    } catch (error) {
        console.error('[App] Auth error:', error);
    }
}

// ==================== BACKGROUND IMAGE ====================
const UNSPLASH_ACCESS_KEY = 'vGSfV3QN4IjZZa6IvAkju9LR--mxbWUWFsLIQEi3_fw';
const UNSPLASH_COLLECTION_ID = 'pgJKMKO-LI0';

async function loadBackgroundImage() {
    const img = document.getElementById('backgroundImage');
    
    // Fetch random photo from curated collection
    const url = `https://api.unsplash.com/photos/random?collections=${UNSPLASH_COLLECTION_ID}&orientation=portrait&client_id=${UNSPLASH_ACCESS_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.urls) {
            img.onload = () => {
                img.classList.add('loaded');
            };
            img.src = data.urls.regular;
            
            // Store photo credit info (Unsplash requires attribution)
            if (data.user) {
                console.log(`Photo by ${data.user.name} on Unsplash`);
            }
        } else {
            throw new Error('No image URL in response');
        }
    } catch (error) {
        console.log('[App] Unsplash API error, using fallback:', error.message);
        // Fallback to a gradient if API fails
        document.querySelector('.home-background').style.background = 
            'linear-gradient(to bottom, #1e226a 0%, #22083a 50%, #54188b 100%)';
        document.querySelector('.bg-overlay').style.display = 'none';
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Menu toggle
    document.getElementById('menuButton').addEventListener('click', openMenu);
    document.getElementById('closeMenu').addEventListener('click', closeMenu);
    document.getElementById('menuOverlay').addEventListener('click', closeMenu);
    
    // Menu navigation
    document.querySelectorAll('.menu-list button[data-view]').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            closeMenu();
            showView(view);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-button[data-view]').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            showView(view);
        });
    });
    
    // Explore button
    document.getElementById('exploreButton').addEventListener('click', () => {
        showView('library');
    });
    
    // Settings controls
    document.getElementById('dailyCount').addEventListener('input', (e) => {
        document.getElementById('dailyCountDisplay').textContent = e.target.value;
    });
    
    document.getElementById('dailyCount').addEventListener('change', saveSettings);
    document.getElementById('quietStart').addEventListener('change', saveSettings);
    document.getElementById('quietEnd').addEventListener('change', saveSettings);
    
    document.getElementById('notificationsToggle').addEventListener('change', async (e) => {
        if (e.target.checked) {
            await enableNotifications();
        } else {
            await disableNotifications();
        }
    });
    
    // Save moment button
    document.getElementById('saveMomentButton').addEventListener('click', saveMoment);
    
    // Mark done button
    document.getElementById('markDoneButton').addEventListener('click', () => {
        showToast('Ase! Moment complete.', 'success');
        showView('home');
    });
    
    // Test notification button
    document.getElementById('testNotificationBtn').addEventListener('click', sendTestNotification);
}

// ==================== MENU ====================
function openMenu() {
    document.getElementById('slideMenu').classList.add('open');
    document.getElementById('menuOverlay').classList.add('open');
}

function closeMenu() {
    document.getElementById('slideMenu').classList.remove('open');
    document.getElementById('menuOverlay').classList.remove('open');
}

// ==================== VIEW NAVIGATION ====================
function showView(viewName) {
    console.log('[App] Navigating to:', viewName);
    
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // Show target view
    const targetView = document.getElementById(viewName + 'View');
    if (targetView) {
        targetView.classList.add('active');
        currentView = viewName;
        
        // Handle view-specific setup
        if (viewName === 'library') {
            renderCategories();
        }
    }
}

// ==================== MOMENTS DATA ====================
async function loadMoments() {
    console.log('[App] Loading moments from Firestore...');
    
    try {
        const snapshot = await db.collection('moments').get();
        
        if (snapshot.empty) {
            console.log('[App] No moments in Firestore, initializing with defaults...');
            await initializeMoments();
        } else {
            moments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log('[App] Loaded', moments.length, 'moments from Firestore');
        }
    } catch (error) {
        console.error('[App] Error loading moments:', error);
        // Fall back to initial data
        moments = [...initialMoments];
        showToast('Using offline data', 'warning');
    }
}

async function initializeMoments() {
    console.log('[App] Initializing Firestore with default moments...');
    
    const batch = db.batch();
    
    for (const moment of initialMoments) {
        const ref = db.collection('moments').doc(String(moment.id));
        batch.set(ref, moment);
    }
    
    try {
        await batch.commit();
        moments = [...initialMoments];
        console.log('[App] Successfully initialized', moments.length, 'moments');
    } catch (error) {
        console.error('[App] Error initializing moments:', error);
        moments = [...initialMoments];
    }
}

async function saveMoment() {
    const name = document.getElementById('momentName').value.trim();
    const category = document.getElementById('momentCategory').value;
    const duration = document.getElementById('momentDuration').value;
    const timeRestriction = document.getElementById('momentTimeRestriction').value;
    const instructions = document.getElementById('momentInstructions').value.trim();
    const link = document.getElementById('momentLink').value.trim();
    
    if (!name || !instructions) {
        showToast('Please fill in name and instructions', 'error');
        return;
    }
    
    const newMoment = {
        name,
        category,
        categoryName: categoryNames[category],
        duration,
        durationText: durationTexts[duration],
        timeRestriction,
        instructions,
        link: link || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const docRef = await db.collection('moments').add(newMoment);
        newMoment.id = docRef.id;
        moments.push(newMoment);
        
        // Clear form
        document.getElementById('momentName').value = '';
        document.getElementById('momentInstructions').value = '';
        document.getElementById('momentLink').value = '';
        
        showToast('Moment saved!', 'success');
        showView('library');
    } catch (error) {
        console.error('[App] Error saving moment:', error);
        showToast('Could not save moment', 'error');
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderCategories() {
    const container = document.getElementById('categoryList');
    
    // Get unique categories with counts
    const categories = {};
    moments.forEach(m => {
        if (!categories[m.category]) {
            categories[m.category] = {
                slug: m.category,
                name: m.categoryName,
                count: 0
            };
        }
        categories[m.category].count++;
    });
    
    container.innerHTML = Object.values(categories).map(cat => `
        <div class="category-card" data-category="${cat.slug}">
            <h3>${cat.name}</h3>
            <span class="count">${cat.count} moment${cat.count !== 1 ? 's' : ''}</span>
        </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            showCategory(category);
        });
    });
}

function showCategory(categorySlug) {
    currentCategory = categorySlug;
    const categoryMoments = moments.filter(m => m.category === categorySlug);
    
    if (categoryMoments.length > 0) {
        document.getElementById('categoryTitle').textContent = categoryMoments[0].categoryName;
    }
    
    const container = document.getElementById('momentsList');
    container.innerHTML = categoryMoments.map(m => `
        <div class="moment-card" data-id="${m.id}">
            <h4>${m.name}</h4>
            <div class="meta">
                <span class="duration">${m.durationText}</span>
                <span class="time">${formatTimeRestriction(m.timeRestriction)}</span>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.moment-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            showMomentDetail(id);
        });
    });
    
    showView('category');
}

function showMomentDetail(momentId) {
    const moment = moments.find(m => String(m.id) === String(momentId));
    if (!moment) {
        console.error('[App] Moment not found:', momentId);
        return;
    }
    
    currentMoment = moment;
    
    document.getElementById('detailTitle').textContent = moment.name;
    document.getElementById('detailCategory').textContent = moment.categoryName;
    document.getElementById('detailDuration').textContent = moment.durationText;
    document.getElementById('detailInstructions').textContent = moment.instructions;
    
    // Handle links
    const linksContainer = document.getElementById('detailLinks');
    let linksHTML = '';
    if (moment.link) {
        linksHTML += `<a href="${moment.link}" target="_blank" rel="noopener">Open resource</a>`;
    }
    if (moment.additionalLink) {
        linksHTML += `<a href="${moment.additionalLink}" target="_blank" rel="noopener">Alternative</a>`;
    }
    linksContainer.innerHTML = linksHTML;
    
    showView('detail');
}

function formatTimeRestriction(restriction) {
    switch (restriction) {
        case 'anytime': return 'Anytime';
        case 'daytime': return 'Daytime';
        case 'evening-weekend': return 'Evenings/Weekends';
        default: return restriction;
    }
}

// ==================== SERVICE WORKER (for PWA only) ====================
async function setupServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        console.warn('[App] Service workers not supported');
        return;
    }
    
    try {
        console.log('[App] Registering service worker...');
        swRegistration = await navigator.serviceWorker.register('/sw.js');
        console.log('[App] Service worker registered:', swRegistration.scope);
    } catch (error) {
        console.error('[App] Service worker registration failed:', error);
    }
}

// ==================== PUSHOVER NOTIFICATIONS ====================
async function checkNotificationStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    const toggle = document.getElementById('notificationsToggle');
    
    // Check if notifications are enabled in Firestore
    const enabled = localStorage.getItem('notificationsEnabled') === 'true';
    
    if (enabled) {
        statusDot.classList.add('active');
        statusText.textContent = 'Notifications active (via Pushover)';
        toggle.checked = true;
    } else {
        statusDot.classList.remove('active');
        statusText.textContent = 'Notifications disabled';
        toggle.checked = false;
    }
}

async function enableNotifications() {
    console.log('[App] Enabling notifications...');
    
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    try {
        const settings = loadSettings();
        
        // Save settings to Firestore
        await db.collection('settings').doc('notifications').set({
            enabled: true,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            dailyCount: settings.dailyCount || 7,
            quietStart: settings.quietStart || '22:00',
            quietEnd: settings.quietEnd || '08:00',
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        
        localStorage.setItem('notificationsEnabled', 'true');
        
        statusDot.classList.remove('error');
        statusDot.classList.add('active');
        statusText.textContent = 'Notifications active (via Pushover)';
        
        showToast('Notifications enabled!', 'success');
        
    } catch (error) {
        console.error('[App] Error enabling notifications:', error);
        statusDot.classList.add('error');
        statusText.textContent = 'Error enabling notifications';
        document.getElementById('notificationsToggle').checked = false;
        showToast('Could not enable notifications', 'error');
    }
}

async function disableNotifications() {
    console.log('[App] Disabling notifications...');
    
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    try {
        await db.collection('settings').doc('notifications').update({
            enabled: false,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        localStorage.setItem('notificationsEnabled', 'false');
        
        statusDot.classList.remove('active');
        statusText.textContent = 'Notifications disabled';
        
        showToast('Notifications disabled', 'success');
        
    } catch (error) {
        console.error('[App] Error disabling notifications:', error);
    }
}

async function sendTestNotification() {
    console.log('[App] Sending test notification via Cloud Function...');
    
    try {
        showToast('Sending test...', 'info');
        
        // Call the test endpoint
        const response = await fetch('https://us-central1-moments-ase.cloudfunctions.net/testNotification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast(`Test sent: ${result.moment}`, 'success');
        } else {
            showToast('Test failed: ' + result.error, 'error');
        }
    } catch (error) {
        console.error('[App] Test notification error:', error);
        showToast('Could not send test', 'error');
    }
}

// ==================== SETTINGS ====================
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('momentsSettings') || '{}');
    
    // Apply to UI
    if (settings.dailyCount) {
        document.getElementById('dailyCount').value = settings.dailyCount;
        document.getElementById('dailyCountDisplay').textContent = settings.dailyCount;
    }
    if (settings.quietStart) {
        document.getElementById('quietStart').value = settings.quietStart;
    }
    if (settings.quietEnd) {
        document.getElementById('quietEnd').value = settings.quietEnd;
    }
    
    return {
        dailyCount: parseInt(document.getElementById('dailyCount').value) || 7,
        quietStart: document.getElementById('quietStart').value || '22:00',
        quietEnd: document.getElementById('quietEnd').value || '08:00'
    };
}

async function saveSettings() {
    const settings = {
        dailyCount: parseInt(document.getElementById('dailyCount').value),
        quietStart: document.getElementById('quietStart').value,
        quietEnd: document.getElementById('quietEnd').value
    };
    
    localStorage.setItem('momentsSettings', JSON.stringify(settings));
    
    // Update Firestore settings
    const enabled = localStorage.getItem('notificationsEnabled') === 'true';
    if (enabled) {
        try {
            await db.collection('settings').doc('notifications').update({
                dailyCount: settings.dailyCount,
                quietStart: settings.quietStart,
                quietEnd: settings.quietEnd,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('[App] Settings synced to server');
        } catch (error) {
            console.error('[App] Error syncing settings:', error);
        }
    }
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== HANDLE DEEP LINKS ====================
// When app opens from notification, check for moment ID in URL
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const momentId = params.get('moment');
    
    if (momentId) {
        // Wait for moments to load, then show detail
        const checkMoments = setInterval(() => {
            if (moments.length > 0) {
                clearInterval(checkMoments);
                showMomentDetail(momentId);
                // Clean up URL
                window.history.replaceState({}, '', window.location.pathname);
            }
        }, 100);
    }
});
