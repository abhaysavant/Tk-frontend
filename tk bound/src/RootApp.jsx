import React, { useState, useEffect } from 'react';
import WebsiteApp from './App';
import AdminApp from './AdminApp';

function RootApp() {
  const [isAdminPath, setIsAdminPath] = useState(
    window.location.pathname.startsWith('/admin')
  );

  useEffect(() => {
    const handleLocationChange = () => {
      const isRouteAdmin = window.location.pathname.startsWith('/admin');
      setIsAdminPath(isRouteAdmin);
      if (isRouteAdmin) {
        document.body.classList.add('admin-theme');
      } else {
        document.body.classList.remove('admin-theme');
      }
    };

    // Set initial state
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    
    // Custom event listener for history changes
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      handleLocationChange();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  if (isAdminPath) {
    return <AdminApp />;
  }

  return <WebsiteApp />;
}

export default RootApp;
