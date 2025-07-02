import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white relative">
        {/* Global background effects for ALL pages */}
        <div className="global-particles"></div>
        <div className="floating-particles"></div>
        <div className="background-orbs"></div>
        
        {/* Additional global particle layers for enhanced effect */}
        <div className="fixed inset-0 pointer-events-none z-[-5]">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${3 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Additional animated gradient orbs */}
        <div className="fixed inset-0 pointer-events-none z-[-4]">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              top: '10%',
              left: '5%',
              animationDelay: '0s',
              animationDuration: '8s'
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              bottom: '15%',
              right: '5%',
              animationDelay: '2s',
              animationDuration: '10s'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: '4s',
              animationDuration: '12s'
            }}
          />
        </div>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;