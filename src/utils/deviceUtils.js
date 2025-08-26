// Mobile detection and performance utilities
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  // Check for low-end device indicators
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
  const isLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return isSlowConnection || isLowRAM || isLowCores;
};

export const getViewportHeight = () => {
  if (typeof window === 'undefined') return '100vh';
  
  // Use visual viewport API if available (better for mobile browsers)
  if (window.visualViewport) {
    return `${window.visualViewport.height}px`;
  }
  
  // Fallback to window.innerHeight for mobile
  return isMobile() ? `${window.innerHeight}px` : '100vh';
};

export const reduceMotion = () => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
