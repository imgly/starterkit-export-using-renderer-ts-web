/**
 * CE.SDK Export Using Renderer Starterkit - Main Entry Point
 *
 * Video editor with server-side rendering export via CE.SDK Renderer API.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initExportUsingRenderer } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-export-using-renderer-user',

  // IMG.LY CDN (for quick testing only, NOT recommended for production)

  // Local assets for development

};

// ============================================================================
// Initialize Export Using Renderer Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initExportUsingRenderer(cesdk);

    // ============================================================================
    // Scene Loading
    // ============================================================================

    // Load a sample video scene for demonstration
    await cesdk.loadFromURL(
      resolveAssetPath('/assets/example-video-motion.scene')
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
