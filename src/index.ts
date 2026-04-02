/**
 * CE.SDK Export Using Renderer Starterkit - Main Entry Point
 *
 * Video editor with server-side rendering export via CE.SDK Renderer API.
 *
 * @see https://img.ly/docs/cesdk/starterkits/export-using-renderer/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initExportUsingRenderer } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  // Unique user identifier for analytics (customize for your app)
  userId: 'starterkit-export-using-renderer-user',

  // Local assets (uncomment and set path for self-hosted assets)
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Export Using Renderer
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initExportUsingRenderer(cesdk);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
