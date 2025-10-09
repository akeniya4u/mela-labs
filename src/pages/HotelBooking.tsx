import { HotelBookingForm } from "@/components/ui/hotel-booking-form";
import hotelBackground from "@/assets/hotel-background.jpg";

export default function HotelBooking() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hotelBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            ZM International Hotel
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience Luxury in the Heart of Harar, Ethiopia
          </p>
        </div>

        <HotelBookingForm />

        {/* Hotel Features */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-3">🛏️</div>
            <h3 className="font-semibold mb-2">Luxury Rooms</h3>
            <p className="text-sm text-muted-foreground">Comfortable and elegant accommodations</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-3">🎉</div>
            <h3 className="font-semibold mb-2">Event Hall</h3>
            <p className="text-sm text-muted-foreground">Perfect venue for your special occasions</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-3">🍽️</div>
            <h3 className="font-semibold mb-2">Fine Dining</h3>
            <p className="text-sm text-muted-foreground">Exquisite cuisine and atmosphere</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-3">💆</div>
            <h3 className="font-semibold mb-2">Spa Services</h3>
            <p className="text-sm text-muted-foreground">Relax and rejuvenate</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
    </main>
  );
}
