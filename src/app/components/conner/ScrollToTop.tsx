import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page when route changes
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}
