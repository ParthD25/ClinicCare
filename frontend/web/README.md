# Aspen Dental Care - Progressive Web App

A modern dental clinic website built with Next.js, featuring a comprehensive patient portal and Progressive Web App (PWA) capabilities for mobile compatibility.

## Features

- **Patient Portal**: Comprehensive portal with appointment scheduling, Invisalign tracking, document management, and billing
- **Progressive Web App**: Installable on iOS and Android devices with offline functionality
- **Responsive Design**: Optimized for all screen sizes and devices
- **Modern UI**: Built with Tailwind CSS for a professional appearance
- **SEO Optimized**: Proper meta tags and structured data for search engines

## PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Service worker caches essential pages and assets
- **Native App Experience**: Standalone display mode with custom icons
- **Push Notifications Ready**: Framework in place for appointment reminders
- **Mobile Optimized**: Touch-friendly interface with proper viewport settings

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## PWA Testing

To test PWA functionality:

1. Open the site in Chrome/Edge on mobile or desktop
2. Look for the "Add to Home Screen" prompt
3. Or use Developer Tools → Application → Manifest to verify the manifest
4. Check Service Workers section to see if the service worker is registered

## Deployment

The app is configured for deployment on Cloudflare Pages with proper PWA headers and caching.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **PWA**: Service Worker + Web App Manifest
- **Deployment**: Cloudflare Pages
