import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ImplantesDentales from "./pages/ImplantesDentales";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import Noticias from "./pages/Noticias";
import NoticiaDetalle from "./pages/NoticiaDetalle";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/implantes-dentales" element={<ImplantesDentales />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
