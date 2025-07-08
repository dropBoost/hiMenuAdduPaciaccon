'use client';
import { useEffect, useState } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      setDeferredPrompt(null);
    }
  };

  return (
    deferredPrompt && (
      <button onClick={handleClick} className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded">
        Installa App
      </button>
    )
  );
}
