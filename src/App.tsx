import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileBottomBar from "./components/MobileBottomBar";
import CookieBanner from "./components/CookieBanner";

// Code splitting: lazy-load all non-home pages to reduce initial bundle
const ImplantesDentales = lazy(() => import("./pages/ImplantesDentales"));
const ImplantesAllOn4 = lazy(() => import("./pages/ImplantesAllOn4"));
const ImplantesCigomaticos = lazy(() => import("./pages/ImplantesCigomaticos"));
const MallasSubperiosticas = lazy(() => import("./pages/MallasSubperiosticas"));
const ProtesisDentales = lazy(() => import("./pages/ProtesisDentales"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Noticias = lazy(() => import("./pages/Noticias"));
const NoticiaDetalle = lazy(() => import("./pages/NoticiaDetalle"));
const Privacidad = lazy(() => import("./pages/Privacidad"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-label="Cargando">
    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/implantes-dentales" element={<ImplantesDentales />} />
            <Route path="/implantes-all-on-4" element={<ImplantesAllOn4 />} />
            <Route path="/implantes-cigomaticos" element={<ImplantesCigomaticos />} />
            <Route path="/mallas-subperiosticas" element={<MallasSubperiosticas />} />
            <Route path="/protesis-dentales" element={<ProtesisDentales />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        <MobileBottomBar />
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
