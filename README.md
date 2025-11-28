# Moments - Wellness Reminders App

A Progressive Web App that sends gentle, random self-care reminders throughout the day.

## Quick Start

### 1. Deploy Frontend to Netlify

Push these files to your GitHub repository (wellness-moments):
- index.html
- styles.css
- app.js
- firebase-config.js
- sw.js
- manifest.json
- icon-192.png
- icon-512.png
- badge-96.png

Netlify will auto-deploy from GitHub.

### 2. Deploy Cloud Functions

From your computer's terminal:

```bash
cd functions
npm install
firebase login
firebase deploy --only functions
```

### 3. Enable Cloud Scheduler

The Cloud Function uses Firebase's scheduled functions, which requires the Blaze plan (which you already have). The scheduler should be created automatically when you deploy.

To verify:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Navigate to Cloud Scheduler
4. You should see a job called `firebase-schedule-sendScheduledNotifications-us-central1`

### 4. Samsung Battery Optimization (CRITICAL!)

On your Samsung S20 FE:
1. Go to Settings > Apps
2. Find the Moments app (or Chrome/browser if not installed as PWA)
3. Tap Battery
4. Select "Unrestricted"

This prevents Samsung from killing the app's ability to receive notifications.

## Testing

### Verify Token Registration

1. Open the app and enable notifications
2. Go to Settings > scroll to Debug Info
3. You should see "Token Status: Active"
4. Copy the token (first 40 characters shown)

### Check Firestore

1. Go to Firebase Console > Firestore Database
2. Look in the `devices` collection
3. Your token should appear as a document with fields like:
   - `enabled: true`
   - `timezone: America/New_York`
   - `dailyCount: 7`

### Check Moments Collection

The first time you load the app, it should populate the `moments` collection with all 21 default moments.

### Test Notification

Use the "Send Test Notification" button in Settings to verify notifications work.

### Check Cloud Function Logs

```bash
firebase functions:log
```

Or in Firebase Console > Functions > Logs

## File Structure

```
moments-app/
├── index.html          # Main HTML structure
├── styles.css          # Dark calming theme
├── app.js              # App logic + moments data
├── firebase-config.js  # Firebase credentials
├── sw.js               # Service worker for PWA + FCM
├── manifest.json       # PWA manifest
├── icon.svg            # Source icon (convert to PNG)
├── functions/
│   ├── package.json    # Cloud Functions dependencies
│   └── index.js        # Scheduled notification logic
└── README.md           # This file
```

## Troubleshooting

### "Error enabling notifications"
- Check browser console for specific error
- Ensure service worker is registered (check Application tab in DevTools)
- Try clearing site data and reinstalling

### Notifications not arriving
1. Check Firebase Console > Cloud Messaging for delivery stats
2. Verify token exists in Firestore `devices` collection
3. Check Cloud Function logs for errors
4. Ensure Samsung battery optimization is set to "Unrestricted"

### Token not saving to Firestore
- Check browser console for Firestore errors
- Verify Firebase security rules allow writes to `devices` collection

## Firestore Security Rules

Add these rules in Firebase Console > Firestore > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write to devices collection
    match /devices/{deviceId} {
      allow read, write: if true;
    }
    
    // Allow read/write to moments collection
    match /moments/{momentId} {
      allow read, write: if true;
    }
  }
}
```

Note: These rules are permissive for simplicity. For a production app with multiple users, you'd want authentication.

## Adding New Moments

Use the "Add New Moment" option in the hamburger menu. Moments are saved to Firestore and will appear in the library immediately.

## Questions?

If something isn't working, check:
1. Browser console for JavaScript errors
2. Firebase Console > Functions > Logs for backend errors
3. Network tab to see if requests to Firebase are succeeding
