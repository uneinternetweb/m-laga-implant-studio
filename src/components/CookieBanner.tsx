import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'bocaboca_cookies_accepted';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md">
      <div className="bg-card border border-border shadow-lg sm:rounded-2xl p-5 mx-0 sm:mx-0">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Este sitio web utiliza únicamente cookies técnicas necesarias para su correcto funcionamiento. 
          No se utilizan cookies de seguimiento ni de análisis.{' '}
          <Link to="/politica-de-cookies" className="text-primary underline hover:opacity-80">
            Más información
          </Link>
        </p>
        <Button
          onClick={handleAccept}
          className="rounded-full px-6"
          size="sm"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
