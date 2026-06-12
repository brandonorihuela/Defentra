import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CisoService from "./pages/CisoService";
import ArchitectService from "./pages/ArchitectService";
import AwarenessService from "./pages/AwarenessService";
import Soluciones from "./pages/Soluciones";
import SolucionDetail from "./pages/SolucionDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicios/ciso" element={<CisoService />} />
          <Route path="/servicios/architect" element={<ArchitectService />} />
          <Route path="/servicios/awareness" element={<AwarenessService />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/soluciones/:slug" element={<SolucionDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
