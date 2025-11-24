// src/lib/utils/shareUrl.ts
export function createShareUrl(regex: string): string {
  try {
    if (!regex) return window.location.href.split('?')[0];
    
    const compressed = btoa(encodeURIComponent(regex))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    const cleanPath = window.location.href.split('?')[0];
    return `${cleanPath}?r=${compressed}`;
  } catch (e) {
    console.error('Share URL create error:', e);
    return window.location.href;
  }
}

export function readShareUrl(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('r');
    if (!encoded) return null;

    const withPadding = encoded.replace(/-/g, '+').replace(/_/g, '/') + '===';
    return decodeURIComponent(atob(withPadding));
  } catch (e) {
    console.error('Share URL read error:', e);
    return null;
  }
}