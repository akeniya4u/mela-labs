import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { BookingForm } from "@/components/ui/booking-form";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import HotelBooking from "./pages/HotelBooking";

const queryClient = new QueryClient();

const App = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const openBookingForm = (service?: string) => {
    setPreselectedService(service);
    setIsBookingFormOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation onBookingClick={() => openBookingForm()} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HotelBooking />} />
                <Route path="/mela-labs" element={<Home onBookingClick={openBookingForm} />} />
                <Route path="/portfolio" element={<Portfolio onBookingClick={openBookingForm} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <BookingForm 
            isOpen={isBookingFormOpen}
            onClose={() => {
              setIsBookingFormOpen(false);
              setPreselectedService(undefined);
            }}
            preselectedService={preselectedService}
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
